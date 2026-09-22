import { PIPELINE_PHASES } from '../pipelinePhases';
import type { LogSeverity, WorkspaceStateModel, WorkspaceToolItem } from '../types';
import {
  ToolModuleLoadController,
  type ToolModuleLoadErrorReason,
  type ToolModuleLoadSnapshot,
  type ToolModuleTarget,
} from './ToolModuleLoadController';

export interface WorkspaceViewportViewDependencies {
  log(severity: LogSeverity, message: string, sourceToolId: string): void;
  selectTool(toolId: string): void;
}

export class WorkspaceViewportView {
  private readonly titleEl: HTMLElement | null;
  private readonly descEl: HTMLElement | null;
  private readonly badgeEl: HTMLElement | null;
  private readonly linkEl: HTMLAnchorElement | null;
  private readonly iframeEl: HTMLIFrameElement | null;
  private readonly loaderEl: HTMLElement | null;
  private readonly loaderProgressEl: HTMLElement | null;
  private readonly loaderTextEl: HTMLElement | null;
  private readonly loaderErrorEl: HTMLElement | null;
  private readonly loaderErrorTitleEl: HTMLElement | null;
  private readonly loaderErrorMessageEl: HTMLElement | null;
  private readonly retryButtonEl: HTMLButtonElement | null;
  private readonly backButtonEl: HTMLButtonElement | null;
  private readonly loadController: ToolModuleLoadController;
  private readonly iframeErrorListener: () => void;
  private readonly retryListener: () => void;
  private readonly backListener: () => void;
  private navigationAttempt = 0;

  constructor(
    root: HTMLElement,
    private readonly dependencies: WorkspaceViewportViewDependencies,
  ) {
    this.titleEl = root.querySelector('#viewport-tool-title');
    this.descEl = root.querySelector('#viewport-tool-desc');
    this.badgeEl = root.querySelector('#viewport-phase-badge');
    this.linkEl = root.querySelector('#viewport-external-link');
    this.iframeEl = root.querySelector('#tool-viewport-iframe');
    this.loaderEl = root.querySelector('#viewport-loader');
    this.loaderProgressEl = root.querySelector('#viewport-loader-progress');
    this.loaderTextEl = root.querySelector('#viewport-loader-text');
    this.loaderErrorEl = root.querySelector('#viewport-loader-error');
    this.loaderErrorTitleEl = root.querySelector('#viewport-loader-error-title');
    this.loaderErrorMessageEl = root.querySelector('#viewport-loader-error-message');
    this.retryButtonEl = root.querySelector('#viewport-loader-retry');
    this.backButtonEl = root.querySelector('#viewport-loader-back');
    this.loadController = new ToolModuleLoadController((snapshot) => this.handleLoadState(snapshot));
    this.iframeErrorListener = () => this.failActiveModule(
      'route-error',
      'The module route could not be loaded. Check the packaged application assets and try again.',
    );
    this.retryListener = () => this.retryActiveModule();
    this.backListener = () => this.restoreLastReadyModule();
    this.attachEvents();
  }

  public render(state: Readonly<WorkspaceStateModel>): void {
    const tool = this.findTool(state.activeToolId);
    if (!tool) return;

    if (this.titleEl) this.titleEl.textContent = tool.name;
    if (this.descEl) this.descEl.textContent = tool.description;
    if (this.linkEl) this.linkEl.href = tool.routePath;

    const phase = PIPELINE_PHASES.find((p) => p.id === state.activePhaseId);
    if (phase && this.badgeEl) this.badgeEl.textContent = phase.title;

    this.updateIframe(tool);
  }

  public ready(toolId: string): void {
    this.loadController.ready(toolId);
  }

  public scriptError(toolId: string, message: string): boolean {
    return this.failModule(toolId, 'script-error', message);
  }

  public destroy(): void {
    this.loadController.destroy();
    this.iframeEl?.removeEventListener('error', this.iframeErrorListener);
    this.retryButtonEl?.removeEventListener('click', this.retryListener);
    this.backButtonEl?.removeEventListener('click', this.backListener);
  }

  private updateIframe(tool: WorkspaceToolItem): void {
    const target = { toolId: tool.id, routePath: tool.routePath };
    if (!this.iframeEl || !this.loadController.mount(target)) return;
    this.navigate(target.routePath);
  }

  private attachEvents(): void {
    this.iframeEl?.addEventListener('error', this.iframeErrorListener);
    this.retryButtonEl?.addEventListener('click', this.retryListener);
    this.backButtonEl?.addEventListener('click', this.backListener);
  }

  private retryActiveModule(): void {
    const target = this.loadController.retry();
    if (!target) return;
    this.navigationAttempt += 1;
    const separator = target.routePath.includes('?') ? '&' : '?';
    this.navigate(`${target.routePath}${separator}workspaceAttempt=${this.navigationAttempt}`);
  }

  private restoreLastReadyModule(): void {
    const target = this.loadController.restoreLastReady();
    if (!target) return;
    this.dependencies.selectTool(target.toolId);
    this.navigate(target.routePath);
  }

  private navigate(routePath: string): void {
    this.iframeEl?.setAttribute('src', routePath);
  }

  private failActiveModule(reason: ToolModuleLoadErrorReason, message: string): void {
    const target = this.loadController.getSnapshot().target;
    if (!target) return;
    this.failModule(target.toolId, reason, message);
  }

  private failModule(
    toolId: string,
    reason: ToolModuleLoadErrorReason,
    message: string,
  ): boolean {
    return this.loadController.fail(toolId, reason, message);
  }

  private handleLoadState(snapshot: Readonly<ToolModuleLoadSnapshot>): void {
    this.renderLoadState(snapshot);
    if (!snapshot.target || snapshot.startedAt === null || snapshot.completedAt === null) {
      return;
    }

    const duration = Math.max(0, snapshot.completedAt - snapshot.startedAt);
    if (snapshot.status === 'ready') {
      this.dependencies.log(
        'success',
        `Module ready in ${duration}ms at ${snapshot.target.routePath}`,
        snapshot.target.toolId,
      );
    }
    if (snapshot.status === 'error' && snapshot.error) {
      this.dependencies.log(
        'error',
        `Module failed after ${duration}ms at ${snapshot.target.routePath}: ${snapshot.error.reason} — ${snapshot.error.message}`,
        snapshot.target.toolId,
      );
    }
  }

  private renderLoadState(snapshot: Readonly<ToolModuleLoadSnapshot>): void {
    this.renderLoaderVisibility(snapshot);
    this.renderErrorState(snapshot);
    this.renderBackAction(snapshot);
  }

  private renderLoaderVisibility(snapshot: Readonly<ToolModuleLoadSnapshot>): void {
    const showLoader = snapshot.indicatorVisible;
    if (this.loaderEl) {
      this.loaderEl.hidden = !showLoader;
      this.loaderEl.setAttribute('aria-hidden', String(!showLoader));
    }

    if (this.loaderTextEl && snapshot.status === 'mounting') {
      this.loaderTextEl.textContent = 'Opening tool module...';
    }
  }

  private renderErrorState(snapshot: Readonly<ToolModuleLoadSnapshot>): void {
    const showError = snapshot.status === 'error';
    if (this.loaderProgressEl) this.loaderProgressEl.hidden = showError;
    if (this.loaderErrorEl) this.loaderErrorEl.hidden = !showError;
    if (showError && snapshot.error) {
      if (this.loaderErrorTitleEl) {
        this.loaderErrorTitleEl.textContent = this.errorTitle(snapshot.error.reason);
      }
      if (this.loaderErrorMessageEl) {
        this.loaderErrorMessageEl.textContent = snapshot.error.message;
      }
    }
  }

  private renderBackAction(snapshot: Readonly<ToolModuleLoadSnapshot>): void {
    const canRestore = this.canRestore(snapshot);
    if (this.backButtonEl) {
      this.backButtonEl.hidden = !canRestore;
      this.backButtonEl.disabled = !canRestore;
    }
  }

  private canRestore(snapshot: Readonly<ToolModuleLoadSnapshot>): boolean {
    return snapshot.lastReadyTarget !== null
      && !this.sameTarget(snapshot.target, snapshot.lastReadyTarget);
  }

  private sameTarget(left: ToolModuleTarget | null, right: ToolModuleTarget | null): boolean {
    return left?.toolId === right?.toolId && left?.routePath === right?.routePath;
  }

  private errorTitle(reason: ToolModuleLoadErrorReason): string {
    if (reason === 'route-error') return 'The module route could not be opened';
    if (reason === 'script-error') return 'The module stopped during startup';
    return 'The module is taking too long';
  }

  private findTool(toolId: string): WorkspaceToolItem | undefined {
    for (const phase of PIPELINE_PHASES) {
      const match = phase.tools.find((t) => t.id === toolId);
      if (match) return match;
    }
    return undefined;
  }
}
