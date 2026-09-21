import type { IWorkspaceState } from '../contracts/IWorkspaceState';
import type { WorkspaceStateModel } from '../types';
import { WorkspaceDockView } from './WorkspaceDockView';
import { WorkspaceKeybindings } from './WorkspaceKeybindings';
import { WorkspaceProjectBarView } from './WorkspaceProjectBarView';
import { WorkspaceSidebarView } from './WorkspaceSidebarView';
import { WorkspaceViewportView } from './WorkspaceViewportView';

export class WorkspaceShellController {
  private readonly projectBarView: WorkspaceProjectBarView;
  private readonly sidebarView: WorkspaceSidebarView;
  private readonly viewportView: WorkspaceViewportView;
  private readonly dockView: WorkspaceDockView;
  private readonly keybindings: WorkspaceKeybindings;
  private unsubscribe: (() => void) | undefined;

  constructor(root: HTMLElement, private readonly state: IWorkspaceState) {
    this.projectBarView = new WorkspaceProjectBarView(root, state);
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
    this.keybindings.attach();
    this.unsubscribe = this.state.subscribe((state) => this.render(state));
  }

  public destroy(): void {
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
  }
}
