import type { IWorkspaceProjectActions } from '../contracts/IWorkspaceProjectActions';
import type { WorkspaceStateModel } from '../types';
import { displayProjectPath } from '../project/displayProjectPath';

export class WorkspaceProjectBarView {
  private readonly summaryEl: HTMLElement | null;
  private readonly nameEl: HTMLElement | null;
  private readonly pathEl: HTMLElement | null;
  private readonly syncBtn: HTMLButtonElement | null;
  private readonly openBtn: HTMLButtonElement | null;
  private readonly menuOpenBtn: HTMLButtonElement | null;
  private readonly newBtn: HTMLButtonElement | null;
  private readonly saveAsBtn: HTMLButtonElement | null;
  private readonly fileMenu: HTMLDetailsElement | null;

  constructor(root: HTMLElement, private readonly actions: IWorkspaceProjectActions) {
    this.summaryEl = root.querySelector('#project-bar-summary');
    this.nameEl = root.querySelector('#project-bar-name');
    this.pathEl = root.querySelector('#project-bar-path');
    this.syncBtn = root.querySelector('#project-bar-sync-btn');
    this.openBtn = root.querySelector('#project-bar-open-btn');
    this.menuOpenBtn = root.querySelector('#project-bar-menu-open-btn');
    this.newBtn = root.querySelector('#project-bar-new-btn');
    this.saveAsBtn = root.querySelector('#project-bar-save-as-btn');
    this.fileMenu = root.querySelector('#project-bar-file-menu');
    this.attachEvents();
  }

  public render(state: Readonly<WorkspaceStateModel>): void {
    this.renderProject(state);
    this.renderSyncStatus(state.isRealtimeSyncEnabled);
    if (this.syncBtn) this.syncBtn.disabled = state.workspaceMode !== 'project';
    if (this.saveAsBtn) this.saveAsBtn.disabled = state.workspaceMode !== 'project';
  }

  public triggerSync(): void {
    void this.actions.syncProject();
  }

  public triggerOpenProject(): void {
    void this.actions.openProject();
  }

  private renderProject(state: Readonly<WorkspaceStateModel>): void {
    const project = state.currentProject;
    if (this.summaryEl) this.summaryEl.hidden = !project;
    if (this.nameEl) this.nameEl.textContent = project?.name ?? '';
    this.renderProjectPath(state);
  }

  private renderProjectPath(state: Readonly<WorkspaceStateModel>): void {
    if (!this.pathEl) return;
    const project = state.currentProject;
    if (!project) {
      this.pathEl.textContent = '';
      this.pathEl.title = '';
      return;
    }
    const selectedFile = state.selectedProjectFile;
    this.pathEl.textContent = selectedFile ? selectedFile.name : displayProjectPath(project.path);
    this.pathEl.title = selectedFile ? selectedFile.path : project.path;
  }

  private renderSyncStatus(enabled: boolean): void {
    if (this.syncBtn) {
      this.syncBtn.setAttribute('aria-pressed', String(enabled));
      this.syncBtn.textContent = enabled ? 'Stop watching changes' : 'Watch project changes';
    }
  }

  private attachEvents(): void {
    this.syncBtn?.addEventListener('click', () => { this.triggerSync(); this.closeMenu(); });
    this.openBtn?.addEventListener('click', () => this.triggerOpenProject());
    this.menuOpenBtn?.addEventListener('click', () => { this.triggerOpenProject(); this.closeMenu(); });
    this.newBtn?.addEventListener('click', () => { void this.actions.newProject(); this.closeMenu(); });
    this.saveAsBtn?.addEventListener('click', () => { void this.actions.saveProjectAs(); this.closeMenu(); });
  }

  private closeMenu(): void {
    if (this.fileMenu) this.fileMenu.open = false;
  }
}
