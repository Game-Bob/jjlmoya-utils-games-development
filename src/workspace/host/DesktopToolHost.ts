import type {
  DesktopToolInstance,
  DesktopToolModule,
  DesktopToolMountContext,
  DesktopToolRuntimeContext,
  DesktopToolSurface,
  JsonObject,
} from '../modules/DesktopToolModule';
import type { DesktopToolRegistry } from '../modules/DesktopToolRegistry';
import type { ToolModuleLoadStatus } from '../client/ToolModuleLoadController';

export interface DesktopToolSurfaceTransaction extends DesktopToolSurface {
  commit(): Promise<void>;
  rollback(): Promise<void>;
}

export interface DesktopToolSurfaceManager {
  prepare(moduleId: string): DesktopToolSurfaceTransaction;
}

export interface DesktopToolHostSnapshot {
  readonly status: ToolModuleLoadStatus;
  readonly requestedModuleId: string | null;
  readonly activeModuleId: string | null;
  readonly error: string | null;
}

export interface DesktopToolHostDependencies {
  readonly registry: DesktopToolRegistry;
  readonly surfaces: DesktopToolSurfaceManager;
  readonly createContext: (
    signal: AbortSignal,
    moduleId: string,
  ) => DesktopToolRuntimeContext;
  readonly onStateChange?: (snapshot: Readonly<DesktopToolHostSnapshot>) => void;
  readonly mountTimeoutMs?: number;
}

interface ActiveModule {
  readonly moduleId: string;
  readonly instance: DesktopToolInstance;
  abortController: AbortController;
}

interface OpenRequest {
  readonly moduleId: string;
  readonly restoredSession?: Readonly<JsonObject>;
}

interface PendingModule {
  readonly requestId: number;
  readonly module: DesktopToolModule;
  readonly instance: DesktopToolInstance;
  readonly surface: DesktopToolSurfaceTransaction;
  readonly abortController: AbortController;
}

const DEFAULT_MOUNT_TIMEOUT_MS = 2000;

export class DesktopToolHost {
  private readonly mountTimeoutMs: number;
  private snapshot: DesktopToolHostSnapshot = {
    status: 'idle',
    requestedModuleId: null,
    activeModuleId: null,
    error: null,
  };
  private active: ActiveModule | undefined;
  private pendingAbortController: AbortController | undefined;
  private lastRequest: OpenRequest | undefined;
  private requestCounter = 0;

  constructor(private readonly dependencies: DesktopToolHostDependencies) {
    this.mountTimeoutMs = dependencies.mountTimeoutMs ?? DEFAULT_MOUNT_TIMEOUT_MS;
  }

  public getSnapshot(): Readonly<DesktopToolHostSnapshot> {
    return this.snapshot;
  }

  public async open(
    moduleId: string,
    restoredSession?: Readonly<JsonObject>,
  ): Promise<boolean> {
    this.lastRequest = restoredSession ? { moduleId, restoredSession } : { moduleId };
    return this.performOpen(this.lastRequest, 'mounting');
  }

  public async retry(): Promise<boolean> {
    if (!this.lastRequest) return false;
    return this.performOpen(this.lastRequest, 'retrying');
  }

  public restoreActive(): boolean {
    if (!this.active) return false;
    this.requestCounter += 1;
    this.pendingAbortController?.abort();
    this.pendingAbortController = undefined;
    this.lastRequest = { moduleId: this.active.moduleId };
    this.transition('ready', this.active.moduleId, null);
    return true;
  }

  public async updateContext(): Promise<void> {
    if (!this.active) return;
    this.active.abortController.abort();
    const abortController = new AbortController();
    this.active.abortController = abortController;
    await this.active.instance.updateContext(
      this.dependencies.createContext(abortController.signal, this.active.moduleId),
    );
  }

  public serializeActiveSession(): JsonObject | null {
    return this.active?.instance.serializeSession() ?? null;
  }

  public async dispose(): Promise<void> {
    this.requestCounter += 1;
    this.pendingAbortController?.abort();
    this.pendingAbortController = undefined;
    if (this.active) {
      this.active.abortController.abort();
      await this.active.instance.deactivate('dispose');
      await this.active.instance.dispose();
      this.active = undefined;
    }
    this.transition('idle', null, null);
  }

  private async performOpen(
    request: OpenRequest,
    status: 'mounting' | 'retrying',
  ): Promise<boolean> {
    const requestId = ++this.requestCounter;
    this.pendingAbortController?.abort();
    this.transition(status, request.moduleId, null);
    const pending = this.tryCreatePending(request, requestId);
    if (!pending) return false;
    this.pendingAbortController = pending.abortController;

    try {
      await this.mountPending(pending, request.restoredSession);
      if (!this.isCurrent(pending)) return this.discardPending(pending);
      await this.activatePending(pending);
      if (!this.isCurrent(pending)) return this.discardPending(pending);
      await this.commitPending(pending);
      return true;
    } catch (error) {
      await this.discardPending(pending);
      if (this.isLatestRequest(requestId)) {
        this.pendingAbortController = undefined;
        this.transition('error', request.moduleId, describeError(error));
      }
      return false;
    }
  }

  private createPending(request: OpenRequest, requestId: number): PendingModule {
    const module = this.dependencies.registry.require(request.moduleId);
    return {
      requestId,
      module,
      instance: module.create(),
      surface: this.dependencies.surfaces.prepare(request.moduleId),
      abortController: new AbortController(),
    };
  }

  private tryCreatePending(request: OpenRequest, requestId: number): PendingModule | null {
    try {
      return this.createPending(request, requestId);
    } catch (error) {
      this.transition('error', request.moduleId, describeError(error));
      return null;
    }
  }

  private async mountPending(
    pending: PendingModule,
    restoredSession?: Readonly<JsonObject>,
  ): Promise<void> {
    const runtime = this.dependencies.createContext(
      pending.abortController.signal,
      pending.module.manifest.id,
    );
    const context: DesktopToolMountContext = { ...runtime, surface: pending.surface };
    await withTimeout(
      pending.instance.mount(context, restoredSession),
      this.mountTimeoutMs,
      `Module ${pending.module.manifest.id} did not mount within ${this.mountTimeoutMs}ms`,
    );
  }

  private async activatePending(pending: PendingModule): Promise<void> {
    await pending.instance.activate();
  }

  private async commitPending(pending: PendingModule): Promise<void> {
    const previous = this.active;
    if (previous) await previous.instance.deactivate('tool-switch');
    try {
      await pending.surface.commit();
    } catch (error) {
      await previous?.instance.activate();
      throw error;
    }

    this.active = {
      moduleId: pending.module.manifest.id,
      instance: pending.instance,
      abortController: pending.abortController,
    };
    this.pendingAbortController = undefined;
    let cleanupError: string | null = null;
    if (previous) {
      previous.abortController.abort();
      try {
        await previous.instance.dispose();
      } catch (error) {
        cleanupError = `Previous module cleanup failed: ${describeError(error)}`;
      }
    }
    this.transition('ready', pending.module.manifest.id, cleanupError);
  }

  private async discardPending(pending: PendingModule): Promise<false> {
    pending.abortController.abort();
    await Promise.allSettled([
      pending.surface.rollback(),
      pending.instance.dispose(),
    ]);
    return false;
  }

  private isCurrent(pending: PendingModule): boolean {
    return this.isLatestRequest(pending.requestId) && !pending.abortController.signal.aborted;
  }

  private isLatestRequest(requestId: number): boolean {
    return requestId === this.requestCounter;
  }

  private transition(
    status: ToolModuleLoadStatus,
    requestedModuleId: string | null,
    error: string | null,
  ): void {
    this.snapshot = {
      status,
      requestedModuleId,
      activeModuleId: this.active?.moduleId ?? null,
      error,
    };
    this.dependencies.onStateChange?.(this.snapshot);
  }
}

async function withTimeout(
  operation: Promise<void>,
  timeoutMs: number,
  message: string,
): Promise<void> {
  let timer: ReturnType<typeof setTimeout> | undefined;
  const timeout = new Promise<never>((_resolve, reject) => {
    timer = setTimeout(() => reject(new Error(message)), timeoutMs);
  });
  try {
    await Promise.race([operation, timeout]);
  } finally {
    if (timer !== undefined) clearTimeout(timer);
  }
}

function describeError(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}
