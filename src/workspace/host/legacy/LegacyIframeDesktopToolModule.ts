import type { WorkspaceToolItem } from '../../types';
import type {
  DesktopToolDeactivationReason,
  DesktopToolInstance,
  DesktopToolModule,
  DesktopToolMountContext,
  DesktopToolRuntimeContext,
  DesktopToolSurface,
  DesktopToolView,
  JsonObject,
  JsonValue,
} from '../../modules/DesktopToolModule';
import {
  isToolToWorkspaceMessage,
  type ToolToWorkspaceMessage,
} from '../../channel/WorkspaceToolMessages';

type LegacyLifecycleState = 'created' | 'mounted' | 'active' | 'inactive' | 'disposed';

export function createLegacyIframeDesktopToolModule(tool: WorkspaceToolItem): DesktopToolModule {
  return {
    manifest: {
      id: tool.id,
      version: '1.0.0-legacy',
      name: tool.name,
      description: tool.description,
      capabilities: [{ id: 'legacy.iframe', title: 'Legacy iframe compatibility' }],
      commands: [],
      inputs: [],
      outputs: [],
    },
    create: () => new LegacyIframeDesktopToolInstance(tool),
  };
}

class LegacyIframeDesktopToolInstance implements DesktopToolInstance {
  private state: LegacyLifecycleState = 'created';
  private surface: DesktopToolSurface | undefined;
  private view: LegacyIframeDesktopToolView | undefined;

  constructor(private readonly tool: WorkspaceToolItem) {}

  public async mount(context: DesktopToolMountContext): Promise<void> {
    this.requireState('mount', 'created');
    this.surface = context.surface;
    this.view = new LegacyIframeDesktopToolView(this.tool, context);
    await context.surface.show(this.view);
    this.state = 'mounted';
  }

  public async updateContext(context: DesktopToolRuntimeContext): Promise<void> {
    this.requireUsable('update context');
    this.view?.updateContext(context);
  }

  public async activate(): Promise<void> {
    if (this.state === 'active') return;
    if (this.state !== 'mounted' && this.state !== 'inactive') {
      throw this.lifecycleError('activate');
    }
    this.state = 'active';
  }

  public async deactivate(_reason: DesktopToolDeactivationReason): Promise<void> {
    if (this.state === 'mounted' || this.state === 'inactive') return;
    this.requireState('deactivate', 'active');
    this.state = 'inactive';
  }

  public isCommandEnabled(_commandId: string): boolean {
    return false;
  }

  public async executeCommand(
    commandId: string,
    _payload?: JsonValue,
  ): Promise<JsonValue | undefined> {
    throw new Error(`Legacy module ${this.tool.id} does not expose command ${commandId}`);
  }

  public serializeSession(): JsonObject {
    this.requireUsable('serialize session');
    return {};
  }

  public async dispose(): Promise<void> {
    if (this.state === 'disposed') return;
    if (this.state === 'active') await this.deactivate('dispose');
    await this.surface?.clear();
    this.surface = undefined;
    this.view = undefined;
    this.state = 'disposed';
  }

  private requireUsable(operation: string): void {
    if (this.state === 'created' || this.state === 'disposed') throw this.lifecycleError(operation);
  }

  private requireState(operation: string, expected: LegacyLifecycleState): void {
    if (this.state !== expected) throw this.lifecycleError(operation);
  }

  private lifecycleError(operation: string): Error {
    return new Error(`Cannot ${operation} legacy module ${this.tool.id} while it is ${this.state}`);
  }
}

class LegacyIframeDesktopToolView implements DesktopToolView {
  private iframe: HTMLIFrameElement | undefined;
  private hostWindow: Window | undefined;
  private messageListener: ((event: MessageEvent) => void) | undefined;
  private abortListener: (() => void) | undefined;
  private context: DesktopToolRuntimeContext;
  private ready = false;

  constructor(
    private readonly tool: WorkspaceToolItem,
    context: DesktopToolRuntimeContext,
  ) {
    this.context = context;
  }

  public mount(target: Element): Promise<void> {
    const hostWindow = target.ownerDocument.defaultView;
    if (!hostWindow) return Promise.reject(new Error('Legacy host window is unavailable'));
    this.hostWindow = hostWindow;
    const iframe = target.ownerDocument.createElement('iframe');
    this.iframe = iframe;
    configureIframe(iframe, this.tool);
    target.replaceChildren(iframe);

    return new Promise<void>((resolve, reject) => {
      this.messageListener = (event) => this.receive(event, resolve, reject);
      this.abortListener = () => reject(new Error(`Mount aborted for ${this.tool.id}`));
      hostWindow.addEventListener('message', this.messageListener);
      this.context.signal.addEventListener('abort', this.abortListener, { once: true });
      iframe.setAttribute('src', this.tool.routePath);
    });
  }

  public updateContext(context: DesktopToolRuntimeContext): void {
    if (this.abortListener) {
      this.context.signal.removeEventListener('abort', this.abortListener);
      context.signal.addEventListener('abort', this.abortListener, { once: true });
    }
    this.context = context;
    if (this.ready) this.sendContext();
  }

  public dispose(): void {
    if (this.messageListener) this.hostWindow?.removeEventListener('message', this.messageListener);
    if (this.abortListener) this.context.signal.removeEventListener('abort', this.abortListener);
    this.iframe?.setAttribute('src', 'about:blank');
    this.iframe?.remove();
    this.iframe = undefined;
    this.hostWindow = undefined;
    this.messageListener = undefined;
    this.abortListener = undefined;
    this.ready = false;
  }

  private receive(
    event: MessageEvent,
    resolve: () => void,
    reject: (reason?: unknown) => void,
  ): void {
    if (!this.matchesEvent(event)) return;
    this.handleMessage(event.data, resolve, reject);
  }

  private matchesEvent(event: MessageEvent): event is MessageEvent<ToolToWorkspaceMessage> {
    return event.origin === this.hostWindow?.location.origin
      && event.source === this.iframe?.contentWindow
      && isToolToWorkspaceMessage(event.data)
      && event.data.toolId === this.tool.id;
  }

  private handleMessage(
    message: ToolToWorkspaceMessage,
    resolve: () => void,
    reject: (reason?: unknown) => void,
  ): void {
    if (message.type === 'tool:ready') {
      this.ready = true;
      this.sendContext();
      resolve();
      return;
    }
    if (message.type === 'tool:error' && !this.ready) {
      reject(new Error(message.message));
      return;
    }
    this.forwardActivity(message);
  }

  private sendContext(): void {
    if (!this.hostWindow) return;
    this.iframe?.contentWindow?.postMessage({
      type: 'workspace:context',
      project: this.context.project,
      config: this.context.projectConfig,
      activeToolId: this.tool.id,
    }, this.hostWindow.location.origin);
  }

  private forwardActivity(message: ReturnTypeMessage): void {
    if (message.type === 'tool:log' || message.type === 'tool:error') {
      this.context.reportActivity({
        severity: message.type === 'tool:error' ? 'error' : message.severity,
        message: message.message,
      });
    }
    if (message.type === 'tool:export-complete') {
      this.context.reportActivity({
        severity: 'success',
        message: `Export completed: ${message.outputPaths.join(', ')}`,
      });
    }
  }
}

type ReturnTypeMessage = Exclude<ToolToWorkspaceMessage, { type: 'tool:ready' }>;

function configureIframe(iframe: HTMLIFrameElement, tool: WorkspaceToolItem): void {
  iframe.className = 'legacy-tool-iframe';
  iframe.title = `${tool.name} legacy workspace`;
  iframe.loading = 'eager';
  iframe.setAttribute('sandbox', 'allow-scripts allow-forms allow-downloads allow-same-origin');
}
