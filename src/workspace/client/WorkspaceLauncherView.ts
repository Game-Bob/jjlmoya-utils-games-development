import type { IWorkspaceProjectActions } from '../contracts/IWorkspaceProjectActions';
import type { IWorkspaceState } from '../contracts/IWorkspaceState';
import type { WorkspaceStateModel } from '../types';

export class WorkspaceLauncherView {
  private readonly launcher: HTMLElement;
  private readonly workbench: HTMLElement;
  private readonly error: HTMLElement;
  private readonly openButton: HTMLButtonElement;
  private readonly newButton: HTMLButtonElement;
  private readonly labsButton: HTMLButtonElement;
  private readonly openListener: () => void;
  private readonly newListener: () => void;
  private readonly labsListener: () => void;

  constructor(
    private readonly root: HTMLElement,
    state: IWorkspaceState,
    actions: IWorkspaceProjectActions,
  ) {
    this.launcher = this.requireElement<HTMLElement>('#project-launcher');
    this.workbench = this.requireElement<HTMLElement>('#workspace-workbench');
    this.error = this.requireElement<HTMLElement>('#launcher-error');
    this.openButton = this.requireElement<HTMLButtonElement>('#launcher-open');
    this.newButton = this.requireElement<HTMLButtonElement>('#launcher-new');
    this.labsButton = this.requireElement<HTMLButtonElement>('#launcher-labs');
    this.openListener = () => void actions.openProject();
    this.newListener = () => void actions.newProject();
    this.labsListener = () => state.enterLabs();
    this.openButton.addEventListener('click', this.openListener);
    this.newButton.addEventListener('click', this.newListener);
    this.labsButton.addEventListener('click', this.labsListener);
  }

  public render(state: Readonly<WorkspaceStateModel>): void {
    const isLauncher = state.workspaceMode === 'launcher';
    this.root.dataset.workspaceMode = state.workspaceMode;
    this.launcher.hidden = !isLauncher;
    this.workbench.hidden = isLauncher;

    const lastError = isLauncher ? state.logs.findLast((log) => log.severity === 'error') : undefined;
    this.error.hidden = !lastError;
    this.error.textContent = lastError?.message ?? '';
  }

  public destroy(): void {
    this.openButton.removeEventListener('click', this.openListener);
    this.newButton.removeEventListener('click', this.newListener);
    this.labsButton.removeEventListener('click', this.labsListener);
  }

  private requireElement<T extends HTMLElement>(selector: string): T {
    const element = this.root.querySelector<T>(selector);
    if (!element) throw new Error(`Workspace launcher element is missing: ${selector}`);
    return element;
  }
}
