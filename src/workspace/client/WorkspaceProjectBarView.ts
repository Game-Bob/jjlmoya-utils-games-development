import type { IWorkspaceProjectActions } from '../contracts/IWorkspaceProjectActions';
import type { WorkspaceStateModel } from '../types';

export class WorkspaceProjectBarView {
  private readonly nameEl: HTMLElement | null;
  private readonly engineEl: HTMLElement | null;
  private readonly pathEl: HTMLElement | null;
  private readonly syncBtn: HTMLButtonElement | null;
  private readonly openBtn: HTMLButtonElement | null;

  constructor(root: HTMLElement, private readonly actions: IWorkspaceProjectActions) {
    this.nameEl = root.querySelector('#project-bar-name');
    this.engineEl = root.querySelector('#project-bar-engine');
    this.pathEl = root.querySelector('#project-bar-path');
    this.syncBtn = root.querySelector('#project-bar-sync-btn');
    this.openBtn = root.querySelector('#project-bar-open-btn');
    this.attachEvents();
  }

  public render(state: Readonly<WorkspaceStateModel>): void {
    const proj = state.currentProject;
    if (this.nameEl) {
      this.nameEl.textContent = proj ? proj.name : 'No Project Loaded';
    }
    if (this.engineEl) {
      this.engineEl.textContent = proj ? proj.engine.toUpperCase() : 'Standalone';
      this.engineEl.dataset.engine = proj ? proj.engine : 'none';
    }
    if (this.pathEl) {
      this.pathEl.textContent = proj ? proj.path : 'Working in browser / offline mode';
    }
  }

  public triggerSync(): void {
    this.actions.syncProject();
  }

  public triggerOpenProject(): void {
    void this.actions.openProject();
  }

  private attachEvents(): void {
    this.syncBtn?.addEventListener('click', () => this.triggerSync());
    this.openBtn?.addEventListener('click', () => this.triggerOpenProject());
  }
}
