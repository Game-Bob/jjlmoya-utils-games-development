import type { IPlatformBridge } from '../../platform/contracts/IPlatformBridge';
import type { IWorkspaceState } from '../contracts/IWorkspaceState';
import type { WorkspaceStateModel } from '../types';
import { WorkspaceDockView } from './WorkspaceDockView';
import { WorkspaceKeybindings } from './WorkspaceKeybindings';
import { WorkspaceProjectBarView } from './WorkspaceProjectBarView';
import { WorkspaceProjectController } from './WorkspaceProjectController';
import { WorkspaceSidebarView } from './WorkspaceSidebarView';
import { WorkspaceViewportView } from './WorkspaceViewportView';
import { WorkspaceToolChannel } from '../channel/WorkspaceToolChannel';

export class WorkspaceShellController {
  private readonly projectBarView: WorkspaceProjectBarView;
  private readonly sidebarView: WorkspaceSidebarView;
  private readonly viewportView: WorkspaceViewportView;
  private readonly dockView: WorkspaceDockView;
  private readonly keybindings: WorkspaceKeybindings;
  private readonly toolChannel: WorkspaceToolChannel | undefined;
  private unsubscribe: (() => void) | undefined;

  constructor(
    root: HTMLElement,
    private readonly state: IWorkspaceState,
    platform: IPlatformBridge,
  ) {
    const iframe = root.querySelector<HTMLIFrameElement>('#tool-viewport-iframe');
    this.toolChannel = iframe ? new WorkspaceToolChannel(iframe, state) : undefined;
    const projectDependencies = this.toolChannel
      ? { toolChannel: this.toolChannel }
      : {};
    const projectController = new WorkspaceProjectController(
      state,
      platform,
      projectDependencies,
    );
    this.projectBarView = new WorkspaceProjectBarView(root, projectController);
    this.sidebarView = new WorkspaceSidebarView(root, state);
    this.viewportView = new WorkspaceViewportView(root);
    this.dockView = new WorkspaceDockView(root, state);
    this.keybindings = new WorkspaceKeybindings(
      state,
      this.projectBarView,
      this.sidebarView,
    );
  }

  public init(): void {
    this.toolChannel?.attach();
    this.keybindings.attach();
    this.unsubscribe = this.state.subscribe((state) => this.render(state));
  }

  public destroy(): void {
    this.toolChannel?.detach();
    this.keybindings.detach();
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = undefined;
    }
  }

  private render(state: Readonly<WorkspaceStateModel>): void {
    this.projectBarView.render(state);
    this.sidebarView.render(state);
    this.viewportView.render(state);
    this.dockView.render(state);
    this.toolChannel?.sendContext(state.currentProject, state.currentProjectConfig, state.activeToolId);
  }
}
