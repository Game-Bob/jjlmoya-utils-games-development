import type { IWorkspaceState } from '../contracts/IWorkspaceState';
import type { WorkspaceStateModel } from '../types';

export class WorkspaceSidebarView {
  private readonly toolButtons: NodeListOf<HTMLButtonElement>;

  constructor(root: HTMLElement, private readonly state: IWorkspaceState) {
    this.toolButtons = root.querySelectorAll<HTMLButtonElement>('.pipeline-tool-item');
    this.attachEvents();
  }

  public render(state: Readonly<WorkspaceStateModel>): void {
    this.toolButtons.forEach((btn) => {
      const isSelected = btn.dataset.toolId === state.activeToolId;
      btn.setAttribute('aria-selected', isSelected ? 'true' : 'false');
      btn.tabIndex = isSelected ? 0 : -1;
      btn.classList.toggle('active', isSelected);
    });
  }

  public focusActiveOrFirstTool(): void {
    const active = Array.from(this.toolButtons).find((b) => b.getAttribute('aria-selected') === 'true');
    if (active) {
      active.focus();
    } else {
      const firstBtn = this.toolButtons[0];
      if (firstBtn) firstBtn.focus();
    }
  }

  private attachEvents(): void {
    this.toolButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const toolId = btn.dataset.toolId;
        if (toolId) {
          this.state.selectTool(toolId);
        }
      });
      btn.addEventListener('keydown', (e) => this.handleKeydown(e, btn));
    });
  }

  private handleKeydown(e: KeyboardEvent, currentBtn: HTMLButtonElement): void {
    const list = Array.from(this.toolButtons);
    const idx = list.indexOf(currentBtn);
    if (idx === -1) return;

    const targetIdx = this.calculateTargetIndex(e.key, idx, list.length);
    if (targetIdx === null) return;

    e.preventDefault();
    const targetBtn = list[targetIdx];
    if (targetBtn) {
      targetBtn.focus();
      const toolId = targetBtn.dataset.toolId;
      if (toolId) this.state.selectTool(toolId);
    }
  }

  private calculateTargetIndex(key: string, idx: number, length: number): number | null {
    if (key === 'ArrowDown') return (idx + 1) % length;
    if (key === 'ArrowUp') return (idx - 1 + length) % length;
    if (key === 'Home') return 0;
    if (key === 'End') return length - 1;
    return null;
  }
}
