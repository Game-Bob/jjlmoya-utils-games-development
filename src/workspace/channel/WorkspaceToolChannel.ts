import type { IWorkspaceState } from '../contracts/IWorkspaceState';
import type { ProjectSummary } from '../types';
import type { WorkspaceProjectConfig } from '../types/WorkspaceProjectConfig';
import type { WatchEvent } from '../../platform/contracts/IDirectoryWatcher';
import type { IWorkspaceToolChannel } from './IWorkspaceToolChannel';
import {
  isToolToWorkspaceMessage,
  type ToolToWorkspaceMessage,
  type WorkspaceToToolMessage,
} from './WorkspaceToolMessages';

export interface WorkspaceToolLifecycleListener {
  ready(toolId: string): void;
  error(toolId: string, message: string): void;
}

export class WorkspaceToolChannel implements IWorkspaceToolChannel {
  private readonly messageListener: (event: MessageEvent) => void;

  constructor(
    private readonly iframe: HTMLIFrameElement,
    private readonly state: IWorkspaceState,
    private readonly hostWindow: Window = window,
    private readonly lifecycle?: WorkspaceToolLifecycleListener,
  ) {
    this.messageListener = (event) => this.receive(event);
  }

  public attach(): void {
    this.hostWindow.addEventListener('message', this.messageListener);
  }

  public detach(): void {
    this.hostWindow.removeEventListener('message', this.messageListener);
  }

  public sendContext(
    project: ProjectSummary | null,
    config: WorkspaceProjectConfig | null,
    activeToolId: string,
  ): void {
    this.send({ type: 'workspace:context', project, config, activeToolId });
  }

  public sendFileChange(rootPath: string, event: WatchEvent): void {
    this.send({ type: 'workspace:file-change', rootPath, event });
  }

  public sendSync(): void {
    this.send({ type: 'workspace:sync' });
  }

  private send(message: WorkspaceToToolMessage): void {
    this.iframe.contentWindow?.postMessage(message, '*');
  }

  private receive(event: MessageEvent): void {
    if (event.origin !== 'null' || event.source !== this.iframe.contentWindow) {
      return;
    }
    if (!isToolToWorkspaceMessage(event.data)) {
      return;
    }
    this.handle(event.data);
  }

  private handle(message: ToolToWorkspaceMessage): void {
    if (message.type === 'tool:ready') {
      this.lifecycle?.ready(message.toolId);
      const current = this.state.getState();
      this.sendContext(current.currentProject, current.currentProjectConfig, current.activeToolId);
      return;
    }
    if (message.type === 'tool:error') {
      this.lifecycle?.error(message.toolId, message.message);
      this.state.addLog('error', message.message, message.toolId);
      return;
    }
    if (message.type === 'tool:log') {
      this.state.addLog(message.severity, message.message, message.toolId);
      return;
    }
    this.state.addLog(
      'success',
      `Export completed: ${message.outputPaths.join(', ')}`,
      message.toolId,
    );
  }
}
