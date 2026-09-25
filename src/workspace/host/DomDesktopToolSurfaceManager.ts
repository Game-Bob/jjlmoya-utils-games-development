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
    container.dataset.staging = 'true';
    container.inert = true;
    container.setAttribute('aria-hidden', 'true');
    this.root.append(container);
    return new DomDesktopToolSurfaceTransaction(this.root, container);
  }
}

class DomDesktopToolSurfaceTransaction implements DesktopToolSurfaceTransaction {
  private view: DesktopToolView | undefined;
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
    if (this.container.parentElement === this.root) this.container.remove();
  }

  public async commit(): Promise<void> {
    this.requireAvailable('commit');
    this.root.replaceChildren(this.container);
    delete this.container.dataset.staging;
    this.container.inert = false;
    this.container.removeAttribute('aria-hidden');
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
