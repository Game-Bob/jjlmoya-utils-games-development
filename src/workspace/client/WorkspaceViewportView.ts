import { PIPELINE_PHASES } from '../pipelinePhases';
import type { WorkspaceStateModel, WorkspaceToolItem } from '../types';

export class WorkspaceViewportView {
  private readonly titleEl: HTMLElement | null;
  private readonly descEl: HTMLElement | null;
  private readonly badgeEl: HTMLElement | null;
  private readonly linkEl: HTMLAnchorElement | null;
  private readonly iframeEl: HTMLIFrameElement | null;
  private readonly loaderEl: HTMLElement | null;

  constructor(root: HTMLElement) {
    this.titleEl = root.querySelector('#viewport-tool-title');
    this.descEl = root.querySelector('#viewport-tool-desc');
    this.badgeEl = root.querySelector('#viewport-phase-badge');
    this.linkEl = root.querySelector('#viewport-external-link');
    this.iframeEl = root.querySelector('#tool-viewport-iframe');
    this.loaderEl = root.querySelector('#viewport-loader');
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

    this.updateIframe(tool.routePath);
  }

  private updateIframe(targetPath: string): void {
    if (!this.iframeEl) return;
    const currentSrc = this.iframeEl.getAttribute('src');
    if (currentSrc !== targetPath) {
      if (this.loaderEl) this.loaderEl.style.display = 'flex';
      this.iframeEl.setAttribute('src', targetPath);
    }
  }

  private attachEvents(): void {
    this.iframeEl?.addEventListener('load', () => {
      if (this.loaderEl) this.loaderEl.style.display = 'none';
    });
  }

  private findTool(toolId: string): WorkspaceToolItem | undefined {
    for (const phase of PIPELINE_PHASES) {
      const match = phase.tools.find((t) => t.id === toolId);
      if (match) return match;
    }
    return undefined;
  }
}
