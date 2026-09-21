import {
  isWorkspaceToToolMessage,
  type ToolToWorkspaceMessage,
  type WorkspaceToToolMessage,
} from './WorkspaceToolMessages';

export type WorkspaceMessageListener = (message: WorkspaceToToolMessage) => void;

export class ToolWorkspaceChannel {
  private readonly origin: string;
  private readonly listeners = new Set<WorkspaceMessageListener>();
  private readonly messageListener: (event: MessageEvent) => void;

  constructor(
    private readonly toolId: string,
    private readonly hostWindow: Window = window,
  ) {
    this.origin = hostWindow.document.referrer
      ? new URL(hostWindow.document.referrer).origin
      : hostWindow.location.origin;
    this.messageListener = (event) => this.receive(event);
  }

  public attach(): void {
    this.hostWindow.addEventListener('message', this.messageListener);
    this.send({ type: 'tool:ready', toolId: this.toolId });
  }

  public detach(): void {
    this.hostWindow.removeEventListener('message', this.messageListener);
    this.listeners.clear();
  }

  public subscribe(listener: WorkspaceMessageListener): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  public log(severity: 'info' | 'warn' | 'error' | 'success', message: string): void {
    this.send({ type: 'tool:log', toolId: this.toolId, severity, message });
  }

  public exportComplete(outputPaths: string[]): void {
    this.send({ type: 'tool:export-complete', toolId: this.toolId, outputPaths });
  }

  private send(message: ToolToWorkspaceMessage): void {
    if (this.hostWindow.parent === this.hostWindow) {
      return;
    }
    this.hostWindow.parent.postMessage(message, this.origin);
  }

  private receive(event: MessageEvent): void {
    if (event.origin !== this.origin || event.source !== this.hostWindow.parent) {
      return;
    }
    if (!isWorkspaceToToolMessage(event.data)) {
      return;
    }
    for (const listener of this.listeners) {
      listener(event.data);
    }
  }
}
