export type ToolModuleLoadStatus = 'idle' | 'mounting' | 'ready' | 'error';

export type ToolModuleLoadErrorReason = 'route-error' | 'script-error' | 'ready-timeout';

export interface ToolModuleTarget {
  toolId: string;
  routePath: string;
}

export interface ToolModuleLoadError {
  reason: ToolModuleLoadErrorReason;
  message: string;
}

export interface ToolModuleLoadSnapshot {
  status: ToolModuleLoadStatus;
  target: ToolModuleTarget | null;
  lastReadyTarget: ToolModuleTarget | null;
  indicatorVisible: boolean;
  error: ToolModuleLoadError | null;
  startedAt: number | null;
  completedAt: number | null;
}

export interface ToolModuleLoadScheduler {
  set(callback: () => void, delayMs: number): unknown;
  clear(timer: unknown): void;
}

export interface ToolModuleLoadControllerOptions {
  clock?: () => number;
  scheduler?: ToolModuleLoadScheduler;
  indicatorDelayMs?: number;
  readyTimeoutMs?: number;
}

export type ToolModuleLoadListener = (snapshot: Readonly<ToolModuleLoadSnapshot>) => void;

const DEFAULT_INDICATOR_DELAY_MS = 150;
const DEFAULT_READY_TIMEOUT_MS = 2000;

const DEFAULT_SCHEDULER: ToolModuleLoadScheduler = {
  set: (callback, delayMs) => setTimeout(callback, delayMs),
  clear: (timer) => clearTimeout(timer as ReturnType<typeof setTimeout>),
};

const INITIAL_SNAPSHOT: ToolModuleLoadSnapshot = {
  status: 'idle',
  target: null,
  lastReadyTarget: null,
  indicatorVisible: false,
  error: null,
  startedAt: null,
  completedAt: null,
};

export class ToolModuleLoadController {
  private readonly clock: () => number;
  private readonly scheduler: ToolModuleLoadScheduler;
  private readonly indicatorDelayMs: number;
  private readonly readyTimeoutMs: number;
  private snapshot: ToolModuleLoadSnapshot = { ...INITIAL_SNAPSHOT };
  private indicatorTimer: unknown;
  private timeoutTimer: unknown;

  constructor(
    private readonly listener: ToolModuleLoadListener,
    options: ToolModuleLoadControllerOptions = {},
  ) {
    this.clock = options.clock ?? Date.now;
    this.scheduler = options.scheduler ?? DEFAULT_SCHEDULER;
    this.indicatorDelayMs = options.indicatorDelayMs ?? DEFAULT_INDICATOR_DELAY_MS;
    this.readyTimeoutMs = options.readyTimeoutMs ?? DEFAULT_READY_TIMEOUT_MS;
  }

  public getSnapshot(): Readonly<ToolModuleLoadSnapshot> {
    return this.snapshot;
  }

  public mount(target: ToolModuleTarget, force = false): boolean {
    if (!force && this.isCurrentTarget(target) && this.snapshot.status !== 'error') {
      return false;
    }

    this.clearTimers();
    this.snapshot = {
      ...this.snapshot,
      status: 'mounting',
      target: { ...target },
      indicatorVisible: false,
      error: null,
      startedAt: this.clock(),
      completedAt: null,
    };
    this.emit();
    this.indicatorTimer = this.scheduler.set(() => this.showIndicator(target), this.indicatorDelayMs);
    this.timeoutTimer = this.scheduler.set(() => {
      this.fail(target.toolId, 'ready-timeout', 'The module did not confirm readiness within 2 seconds.');
    }, this.readyTimeoutMs);
    return true;
  }

  public ready(toolId: string): boolean {
    if (this.snapshot.status !== 'mounting' || this.snapshot.target?.toolId !== toolId) {
      return false;
    }

    this.clearTimers();
    const target = { ...this.snapshot.target };
    this.snapshot = {
      ...this.snapshot,
      status: 'ready',
      lastReadyTarget: target,
      indicatorVisible: false,
      error: null,
      completedAt: this.clock(),
    };
    this.emit();
    return true;
  }

  public fail(
    toolId: string,
    reason: ToolModuleLoadErrorReason,
    message: string,
  ): boolean {
    if (this.snapshot.status !== 'mounting' || this.snapshot.target?.toolId !== toolId) {
      return false;
    }

    this.clearTimers();
    this.snapshot = {
      ...this.snapshot,
      status: 'error',
      indicatorVisible: true,
      error: { reason, message },
      completedAt: this.clock(),
    };
    this.emit();
    return true;
  }

  public retry(): ToolModuleTarget | null {
    if (!this.snapshot.target) {
      return null;
    }
    const target = { ...this.snapshot.target };
    this.mount(target, true);
    return target;
  }

  public restoreLastReady(): ToolModuleTarget | null {
    if (!this.snapshot.lastReadyTarget) {
      return null;
    }
    const target = { ...this.snapshot.lastReadyTarget };
    this.mount(target, true);
    return target;
  }

  public destroy(): void {
    this.clearTimers();
  }

  private isCurrentTarget(target: ToolModuleTarget): boolean {
    return this.snapshot.target?.toolId === target.toolId
      && this.snapshot.target.routePath === target.routePath;
  }

  private showIndicator(target: ToolModuleTarget): void {
    if (this.snapshot.status !== 'mounting' || !this.isCurrentTarget(target)) {
      return;
    }
    this.snapshot = {
      ...this.snapshot,
      indicatorVisible: true,
    };
    this.emit();
  }

  private clearTimers(): void {
    if (this.indicatorTimer !== undefined) {
      this.scheduler.clear(this.indicatorTimer);
      this.indicatorTimer = undefined;
    }
    if (this.timeoutTimer !== undefined) {
      this.scheduler.clear(this.timeoutTimer);
      this.timeoutTimer = undefined;
    }
  }

  private emit(): void {
    this.listener(this.snapshot);
  }
}
