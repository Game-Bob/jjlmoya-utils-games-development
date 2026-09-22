import type { DesktopToolHostSnapshot } from '../host/DesktopToolHost';
import { PIPELINE_PHASES } from '../pipelinePhases';
import type { LogSeverity, WorkspaceStateModel, WorkspaceToolItem } from '../types';

export interface WorkspaceViewportViewDependencies {
  log(severity: LogSeverity, message: string, sourceToolId: string): void;
  retry(): void;
  selectTool(toolId: string): void;
}

const LOADER_DELAY_MS = 150;

export class WorkspaceViewportView {
  private readonly titleEl: HTMLElement | null;
  private readonly descEl: HTMLElement | null;
  private readonly badgeEl: HTMLElement | null;
  private readonly linkEl: HTMLAnchorElement | null;
  private readonly loaderEl: HTMLElement | null;
  private readonly loaderProgressEl: HTMLElement | null;
  private readonly loaderTextEl: HTMLElement | null;
  private readonly loaderErrorEl: HTMLElement | null;
  private readonly loaderErrorTitleEl: HTMLElement | null;
  private readonly loaderErrorMessageEl: HTMLElement | null;
  private readonly retryButtonEl: HTMLButtonElement | null;
  private readonly backButtonEl: HTMLButtonElement | null;
  private readonly retryListener: () => void;
  private readonly backListener: () => void;
  private snapshot: Readonly<DesktopToolHostSnapshot> | undefined;
  private loaderTimer: ReturnType<typeof setTimeout> | undefined;

  constructor(
    root: HTMLElement,
    private readonly dependencies: WorkspaceViewportViewDependencies,
  ) {
    this.titleEl = root.querySelector('#viewport-tool-title');
    this.descEl = root.querySelector('#viewport-tool-desc');
    this.badgeEl = root.querySelector('#viewport-phase-badge');
    this.linkEl = root.querySelector('#viewport-external-link');
    this.loaderEl = root.querySelector('#viewport-loader');
    this.loaderProgressEl = root.querySelector('#viewport-loader-progress');
    this.loaderTextEl = root.querySelector('#viewport-loader-text');
    this.loaderErrorEl = root.querySelector('#viewport-loader-error');
    this.loaderErrorTitleEl = root.querySelector('#viewport-loader-error-title');
    this.loaderErrorMessageEl = root.querySelector('#viewport-loader-error-message');
    this.retryButtonEl = root.querySelector('#viewport-loader-retry');
    this.backButtonEl = root.querySelector('#viewport-loader-back');
    this.retryListener = () => this.dependencies.retry();
    this.backListener = () => this.restoreActiveModule();
    this.retryButtonEl?.addEventListener('click', this.retryListener);
    this.backButtonEl?.addEventListener('click', this.backListener);
  }

  public render(state: Readonly<WorkspaceStateModel>): void {
    const tool = this.findTool(state.activeToolId);
    if (!tool) return;

    if (this.titleEl) this.titleEl.textContent = tool.name;
    if (this.descEl) this.descEl.textContent = tool.description;
    if (this.linkEl) this.linkEl.href = tool.routePath;

    const phase = PIPELINE_PHASES.find((candidate) => candidate.id === state.activePhaseId);
    if (phase && this.badgeEl) this.badgeEl.textContent = phase.title;
  }

  public renderHost(snapshot: Readonly<DesktopToolHostSnapshot>): void {
    this.snapshot = snapshot;
    this.renderLoadState(snapshot);
    this.reportTransition(snapshot);
  }

  public destroy(): void {
    this.clearLoaderTimer();
    this.retryButtonEl?.removeEventListener('click', this.retryListener);
    this.backButtonEl?.removeEventListener('click', this.backListener);
  }

  private renderLoadState(snapshot: Readonly<DesktopToolHostSnapshot>): void {
    this.clearLoaderTimer();
    this.renderProgress(snapshot);
    this.renderError(snapshot);
    this.renderBackAction(snapshot);

    const isOpening = snapshot.status === 'mounting' || snapshot.status === 'retrying';
    if (isOpening && !snapshot.activeModuleId) {
      this.setLoaderVisible(false);
      this.loaderTimer = setTimeout(() => {
        if (this.snapshot === snapshot) this.setLoaderVisible(true);
      }, LOADER_DELAY_MS);
      return;
    }
    this.setLoaderVisible(snapshot.status === 'error');
  }

  private renderProgress(snapshot: Readonly<DesktopToolHostSnapshot>): void {
    const retrying = snapshot.status === 'retrying';
    if (this.loaderProgressEl) this.loaderProgressEl.hidden = snapshot.status === 'error';
    if (this.loaderTextEl) {
      this.loaderTextEl.textContent = retrying
        ? 'Retrying tool module...'
        : 'Opening tool module...';
    }
  }

  private renderError(snapshot: Readonly<DesktopToolHostSnapshot>): void {
    const showError = snapshot.status === 'error';
    if (this.loaderErrorEl) this.loaderErrorEl.hidden = !showError;
    if (!showError || !snapshot.error) return;
    if (this.loaderErrorTitleEl) {
      this.loaderErrorTitleEl.textContent = snapshot.error.includes('did not mount within')
        ? 'The module is taking too long'
        : 'The module stopped during startup';
    }
    if (this.loaderErrorMessageEl) this.loaderErrorMessageEl.textContent = snapshot.error;
  }

  private renderBackAction(snapshot: Readonly<DesktopToolHostSnapshot>): void {
    const canRestore = snapshot.activeModuleId !== null
      && snapshot.activeModuleId !== snapshot.requestedModuleId;
    if (!this.backButtonEl) return;
    this.backButtonEl.hidden = !canRestore;
    this.backButtonEl.disabled = !canRestore;
  }

  private reportTransition(snapshot: Readonly<DesktopToolHostSnapshot>): void {
    const sourceToolId = snapshot.requestedModuleId;
    if (!sourceToolId) return;
    if (snapshot.status === 'ready') {
      this.dependencies.log('success', 'Module ready in the integrated tool host', sourceToolId);
      if (snapshot.error) this.dependencies.log('warn', snapshot.error, sourceToolId);
    }
    if (snapshot.status === 'error' && snapshot.error) {
      this.dependencies.log('error', snapshot.error, sourceToolId);
    }
  }

  private restoreActiveModule(): void {
    const activeModuleId = this.snapshot?.activeModuleId;
    if (activeModuleId) this.dependencies.selectTool(activeModuleId);
  }

  private setLoaderVisible(visible: boolean): void {
    if (!this.loaderEl) return;
    this.loaderEl.hidden = !visible;
    this.loaderEl.setAttribute('aria-hidden', String(!visible));
  }

  private clearLoaderTimer(): void {
    if (this.loaderTimer === undefined) return;
    clearTimeout(this.loaderTimer);
    this.loaderTimer = undefined;
  }

  private findTool(toolId: string): WorkspaceToolItem | undefined {
    for (const phase of PIPELINE_PHASES) {
      const match = phase.tools.find((tool) => tool.id === toolId);
      if (match) return match;
    }
    return undefined;
  }
}
