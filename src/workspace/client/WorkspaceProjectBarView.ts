import type { IWorkspaceProjectActions } from '../contracts/IWorkspaceProjectActions';
import type { WorkspaceStateModel } from '../types';

export class WorkspaceProjectBarView {
  private readonly nameEl: HTMLElement | null;
  private readonly engineEl: HTMLElement | null;
  private readonly pathEl: HTMLElement | null;
  private readonly syncBtn: HTMLButtonElement | null;
  private readonly openBtn: HTMLButtonElement | null;
  private readonly newBtn: HTMLButtonElement | null;
  private readonly saveAsBtn: HTMLButtonElement | null;
  private readonly statusEl: HTMLElement | null;
  private readonly statusTextEl: HTMLElement | null;

  constructor(root: HTMLElement, private readonly actions: IWorkspaceProjectActions) {
    this.nameEl = root.querySelector('#project-bar-name');
    this.engineEl = root.querySelector('#project-bar-engine');
    this.pathEl = root.querySelector('#project-bar-path');
    this.syncBtn = root.querySelector('#project-bar-sync-btn');
    this.openBtn = root.querySelector('#project-bar-open-btn');
    this.newBtn = root.querySelector('#project-bar-new-btn');
    this.saveAsBtn = root.querySelector('#project-bar-save-as-btn');
    this.statusEl = root.querySelector('#project-bar-status-indicator');
    this.statusTextEl = root.querySelector('#project-bar-status-text');
    this.attachEvents();
  }

  public render(state: Readonly<WorkspaceStateModel>): void {
    this.renderProject(state);
    this.renderSyncStatus(state.isRealtimeSyncEnabled);
  }

  public triggerSync(): void {
    void this.actions.syncProject();
  }

  public triggerOpenProject(): void {
    void this.actions.openProject();
  }

  private renderProject(state: Readonly<WorkspaceStateModel>): void {
    const project = state.currentProject;
    if (this.nameEl) {
      this.nameEl.textContent = project ? project.name : 'No Project Loaded';
    }
    if (this.engineEl) {
      this.engineEl.textContent = project ? project.engine.toUpperCase() : 'Standalone';
      this.engineEl.dataset.engine = project ? project.engine : 'none';
    }
    if (this.pathEl) {
      this.pathEl.textContent = project ? project.path : 'Working in browser / offline mode';
    }
  }

  private renderSyncStatus(enabled: boolean): void {
    if (this.statusEl) {
      this.statusEl.dataset.status = enabled ? 'syncing' : 'ready';
    }
    if (this.statusTextEl) {
      this.statusTextEl.textContent = enabled ? 'Watching' : 'Ready';
    }
    if (this.syncBtn) {
      this.syncBtn.setAttribute('aria-pressed', String(enabled));
      const label = this.syncBtn.querySelector('span:last-child');
      if (label) label.textContent = enabled ? 'Pause' : 'Sync';
    }
  }

  private attachEvents(): void {
    this.syncBtn?.addEventListener('click', () => this.triggerSync());
    this.openBtn?.addEventListener('click', () => this.triggerOpenProject());
    this.newBtn?.addEventListener('click', () => void this.actions.newProject());
    this.saveAsBtn?.addEventListener('click', () => void this.actions.saveProjectAs());
  }
}
