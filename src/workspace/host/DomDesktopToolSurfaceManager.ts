import type { DesktopToolView } from '../modules/DesktopToolModule';
import type {
  DesktopToolSurfaceManager,
  DesktopToolSurfaceTransaction,
} from './DesktopToolHost';

export class DomDesktopToolSurfaceManager implements DesktopToolSurfaceManager {
  constructor(private readonly root: HTMLElement) {}

  public prepare(moduleId: string): DesktopToolSurfaceTransaction {
    const container = this.root.ownerDocument.createElement('section');
    container.className = 'desktop-tool-module-surface';
    container.dataset.toolModuleId = moduleId;
    return new DomDesktopToolSurfaceTransaction(this.root, container);
  }
}

class DomDesktopToolSurfaceTransaction implements DesktopToolSurfaceTransaction {
  private view: DesktopToolView | undefined;
  private committed = false;
  private rolledBack = false;

  constructor(
    private readonly root: HTMLElement,
    private readonly container: HTMLElement,
  ) {}

  public async show(view: DesktopToolView): Promise<void> {
    this.requireAvailable('show');
    await this.view?.dispose();
    this.container.replaceChildren();
    this.view = view;
    await view.mount(this.container);
  }

  public async clear(): Promise<void> {
    await this.view?.dispose();
    this.view = undefined;
    this.container.replaceChildren();
    if (this.committed && this.container.parentElement === this.root) {
      this.root.replaceChildren();
    }
  }

  public async commit(): Promise<void> {
    this.requireAvailable('commit');
    this.root.replaceChildren(this.container);
    this.committed = true;
  }

  public async rollback(): Promise<void> {
    if (this.rolledBack) return;
    await this.clear();
    this.rolledBack = true;
  }

  private requireAvailable(operation: string): void {
    if (this.rolledBack) {
      throw new Error(`Cannot ${operation} a rolled back tool surface`);
    }
  }
}
