import { describe, expect, it, vi } from 'vitest';
import type { DesktopToolView } from '../modules/DesktopToolModule';
import { DomDesktopToolSurfaceManager } from './DomDesktopToolSurfaceManager';

describe('DomDesktopToolSurfaceManager', () => {
  it('keeps a staged surface detached until commit', async () => {
    const root = new FakeElement('main');
    const previous = new FakeElement('section');
    root.replaceChildren(previous);
    const manager = new DomDesktopToolSurfaceManager(root as unknown as HTMLElement);
    const transaction = manager.prepare('spriteSheetPacker');
    const view = createView();

    await transaction.show(view);

    expect(root.children).toEqual([previous]);
    expect(view.mount).toHaveBeenCalledOnce();

    await transaction.commit();
    expect(root.children[0]?.dataset.toolModuleId).toBe('spriteSheetPacker');
  });

  it('rolls back a staged view without replacing the active surface', async () => {
    const root = new FakeElement('main');
    const active = new FakeElement('section');
    root.replaceChildren(active);
    const manager = new DomDesktopToolSurfaceManager(root as unknown as HTMLElement);
    const transaction = manager.prepare('broken');
    const view = createView();
    await transaction.show(view);

    await transaction.rollback();
    await transaction.rollback();

    expect(root.children).toEqual([active]);
    expect(view.dispose).toHaveBeenCalledOnce();
  });

  it('clears only its own committed surface after a newer surface replaces it', async () => {
    const root = new FakeElement('main');
    const manager = new DomDesktopToolSurfaceManager(root as unknown as HTMLElement);
    const first = manager.prepare('first');
    const second = manager.prepare('second');
    const firstView = createView();
    const secondView = createView();
    await first.show(firstView);
    await first.commit();
    await second.show(secondView);
    await second.commit();

    await first.clear();

    expect(root.children[0]?.dataset.toolModuleId).toBe('second');
    expect(firstView.dispose).toHaveBeenCalledOnce();
    expect(secondView.dispose).not.toHaveBeenCalled();
  });
});

class FakeElement {
  public className = '';
  public readonly dataset: Record<string, string> = {};
  public readonly children: FakeElement[] = [];
  public parentElement: FakeElement | null = null;
  public readonly ownerDocument = {
    createElement: (tagName: string) => new FakeElement(tagName),
  };

  constructor(public readonly tagName: string) {}

  public replaceChildren(...children: FakeElement[]): void {
    for (const child of this.children) child.parentElement = null;
    this.children.splice(0, this.children.length, ...children);
    for (const child of children) child.parentElement = this;
  }
}

function createView(): DesktopToolView & {
  mount: ReturnType<typeof vi.fn>;
  dispose: ReturnType<typeof vi.fn>;
} {
  return {
    mount: vi.fn(async () => undefined),
    dispose: vi.fn(async () => undefined),
  };
}
