import type { IWorkspaceState } from '../contracts/IWorkspaceState';
import type { WorkspaceStateModel } from '../types';

export class WorkspaceProjectBarView {
  private readonly nameEl: HTMLElement | null;
  private readonly engineEl: HTMLElement | null;
  private readonly pathEl: HTMLElement | null;
  private readonly syncBtn: HTMLButtonElement | null;
  private readonly openBtn: HTMLButtonElement | null;

  constructor(root: HTMLElement, private readonly state: IWorkspaceState) {
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
    const currentState = this.state.getState();
    this.state.addLog(
      'info',
      `Synchronizing pipeline assets for tool: ${currentState.activeToolId}`,
      currentState.activeToolId,
    );
  }

  public triggerOpenProject(): void {
    this.state.addLog(
      'info',
      'Select project directory from native file dialog (Tauri integration)',
    );
  }

  private attachEvents(): void {
    this.syncBtn?.addEventListener('click', () => this.triggerSync());
    this.openBtn?.addEventListener('click', () => this.triggerOpenProject());
  }
}
