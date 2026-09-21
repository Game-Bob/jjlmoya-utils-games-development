import type { IWorkspaceState } from '../contracts/IWorkspaceState';
import type { WorkspaceProjectBarView } from './WorkspaceProjectBarView';
import type { WorkspaceSidebarView } from './WorkspaceSidebarView';

export class WorkspaceKeybindings {
  private readonly handler: (e: KeyboardEvent) => void;

  constructor(
    private readonly state: IWorkspaceState,
    private readonly projectBarView: WorkspaceProjectBarView,
    private readonly sidebarView: WorkspaceSidebarView,
  ) {
    this.handler = (e: KeyboardEvent) => this.handleKeydown(e);
  }

  public attach(): void {
    window.addEventListener('keydown', this.handler);
  }

  public detach(): void {
    window.removeEventListener('keydown', this.handler);
  }

  private handleKeydown(e: KeyboardEvent): void {
    const userAgent = typeof navigator !== 'undefined' ? navigator.userAgent.toUpperCase() : '';
    const isMac = userAgent.includes('MAC');
    const modifier = isMac ? e.metaKey : e.ctrlKey;
    if (!modifier) return;

    const key = e.key.toLowerCase();
    if (key === 's') {
      e.preventDefault();
      this.projectBarView.triggerSync();
    } else if (key === 'o') {
      e.preventDefault();
      this.projectBarView.triggerOpenProject();
    } else if (key === 'j') {
      e.preventDefault();
      this.state.toggleDock();
    } else if (key === 'p') {
      e.preventDefault();
      this.sidebarView.focusActiveOrFirstTool();
    }
  }
}
