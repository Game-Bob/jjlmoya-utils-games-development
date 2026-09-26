import type { IPlatformBridge } from '../../platform/contracts/IPlatformBridge';
import type { ProjectFileEntry } from '../../platform/contracts/IProjectFileBrowser';
import type { IWorkspaceState } from '../contracts/IWorkspaceState';
import type { WorkspaceStateModel } from '../types';

interface DirectoryLocation {
  readonly name: string;
  readonly path: string;
}

export class WorkspaceProjectExplorerView {
  private readonly root: HTMLElement;
  private readonly list: HTMLElement;
  private readonly path: HTMLElement;
  private readonly status: HTMLElement;
  private readonly backButton: HTMLButtonElement;
  private readonly refreshButton: HTMLButtonElement;
  private locations: DirectoryLocation[] = [];
  private entries: readonly ProjectFileEntry[] = [];
  private projectPath: string | undefined;
  private requestId = 0;
  private selectedPath: string | undefined;
  private readonly backListener = (): void => this.goBack();
  private readonly refreshListener = (): void => { void this.loadCurrentDirectory(); };

  constructor(
    workspaceRoot: HTMLElement,
    private readonly state: IWorkspaceState,
    private readonly platform: IPlatformBridge,
  ) {
    this.root = this.requireElement(workspaceRoot, '#project-explorer');
    this.list = this.requireElement(workspaceRoot, '#project-explorer-list');
    this.path = this.requireElement(workspaceRoot, '#project-explorer-path');
    this.status = this.requireElement(workspaceRoot, '#project-explorer-status');
    this.backButton = this.requireElement(workspaceRoot, '#project-explorer-back');
    this.refreshButton = this.requireElement(workspaceRoot, '#project-explorer-refresh');
    this.backButton.addEventListener('click', this.backListener);
    this.refreshButton.addEventListener('click', this.refreshListener);
  }

  public render(state: Readonly<WorkspaceStateModel>): void {
    const project = state.workspaceMode === 'project' && this.platform.isNativeDesktop()
      ? state.currentProject
      : null;
    this.root.hidden = !project;
    if (!project) {
      this.projectPath = undefined;
      this.requestId += 1;
      return;
    }
    if (this.projectPath !== project.path) {
      this.projectPath = project.path;
      this.locations = [{ name: project.name, path: project.path }];
      this.entries = [];
      this.list.replaceChildren();
      void this.loadCurrentDirectory();
    }
    this.renderSelection(state.selectedProjectFile?.path);
  }

  public destroy(): void {
    this.requestId += 1;
    this.backButton.removeEventListener('click', this.backListener);
    this.refreshButton.removeEventListener('click', this.refreshListener);
    this.list.replaceChildren();
  }

  private async loadCurrentDirectory(): Promise<void> {
    const location = this.locations.at(-1);
    if (!location) return;
    const requestId = ++this.requestId;
    this.path.textContent = this.locations.map((item) => item.name).join(' / ');
    this.path.title = location.path;
    this.backButton.disabled = this.locations.length < 2;
    this.status.textContent = 'Loading local files...';
    this.list.replaceChildren();
    try {
      const listing = await this.platform.projectFileBrowser.listDirectory(location.path);
      if (requestId !== this.requestId) return;
      this.entries = listing.entries;
      this.renderEntries(this.state.getState().selectedProjectFile?.path);
      this.status.textContent = listing.truncated
        ? 'Showing the first 500 items in this folder'
        : `${listing.entries.length} items on this computer`;
    } catch (error) {
      if (requestId !== this.requestId) return;
      this.entries = [];
      this.status.textContent = error instanceof Error ? error.message : String(error);
    }
  }

  private renderEntries(selectedPath?: string): void {
    if (this.entries.length === 0) {
      if (!this.status.textContent?.startsWith('Loading')) this.list.replaceChildren();
      return;
    }
    const ownerDocument = this.list.ownerDocument;
    const fragment = ownerDocument.createDocumentFragment();
    for (const entry of this.entries) {
      const row = ownerDocument.createElement('button');
      row.type = 'button';
      row.className = 'project-explorer-entry';
      row.dataset.path = entry.path;
      row.classList.toggle('selected', entry.path === selectedPath);
      row.title = entry.path;
      row.setAttribute('role', 'listitem');
      const icon = ownerDocument.createElement('span');
      icon.className = entry.isDirectory ? 'project-explorer-folder-icon' : 'project-explorer-file-icon';
      icon.setAttribute('aria-hidden', 'true');
      const name = ownerDocument.createElement('span');
      name.className = 'project-explorer-entry-name';
      name.textContent = entry.name;
      row.append(icon, name);
      row.addEventListener('click', () => this.openEntry(entry));
      fragment.append(row);
    }
    this.list.replaceChildren(fragment);
    this.selectedPath = selectedPath;
  }

  private renderSelection(selectedPath?: string): void {
    if (this.selectedPath === selectedPath) return;
    this.selectedPath = selectedPath;
    this.list.querySelectorAll<HTMLButtonElement>('.project-explorer-entry').forEach((row) => {
      row.classList.toggle('selected', row.dataset.path === selectedPath);
    });
  }

  private openEntry(entry: ProjectFileEntry): void {
    if (entry.isDirectory) {
      this.locations.push({ name: entry.name, path: entry.path });
      void this.loadCurrentDirectory();
      return;
    }
    this.state.selectProjectFile(entry);
    if (/\.(png|webp)$/i.test(entry.name)) {
      this.state.selectTool('spriteSheetPacker');
      this.status.textContent = `Opening ${entry.name} in Sprite Sheet Packer`;
      return;
    }
    this.status.textContent = `${entry.name} selected; no integrated editor for this file type yet`;
  }

  private goBack(): void {
    if (this.locations.length < 2) return;
    this.locations.pop();
    void this.loadCurrentDirectory();
  }

  private requireElement<T extends HTMLElement>(root: HTMLElement, selector: string): T {
    const element = root.querySelector<T>(selector);
    if (!element) throw new Error(`Project explorer element is missing: ${selector}`);
    return element;
  }
}
