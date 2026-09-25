import { describe, expect, it, vi } from 'vitest';
import type { DesktopToolView } from '../modules/DesktopToolModule';
import { DomDesktopToolSurfaceManager } from './DomDesktopToolSurfaceManager';

describe('DomDesktopToolSurfaceManager', () => {
  it('keeps a staged surface connected but hidden until commit', async () => {
    const root = new FakeElement('main');
    const previous = new FakeElement('section');
    root.replaceChildren(previous);
    const manager = new DomDesktopToolSurfaceManager(root as unknown as HTMLElement);
    const transaction = manager.prepare('spriteSheetPacker');
    const view = createView();

    await transaction.show(view);

    expect(root.children).toHaveLength(2);
    expect(root.children[0]).toBe(previous);
    expect(root.children[1]?.dataset.staging).toBe('true');
    expect(root.children[1]?.inert).toBe(true);
    expect(view.mount).toHaveBeenCalledOnce();

    await transaction.commit();
    expect(root.children[0]?.dataset.toolModuleId).toBe('spriteSheetPacker');
    expect(root.children[0]?.dataset.staging).toBeUndefined();
    expect(root.children[0]?.inert).toBe(false);
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
    const firstView = createView();
    await first.show(firstView);
    await first.commit();
    const second = manager.prepare('second');
    const secondView = createView();
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
  public inert = false;
  public readonly dataset: Record<string, string> = {};
  public readonly children: FakeElement[] = [];
  public parentElement: FakeElement | null = null;
  private readonly attributes = new Map<string, string>();
  public readonly ownerDocument = {
    createElement: (tagName: string) => new FakeElement(tagName),
  };

  constructor(public readonly tagName: string) {}

  public append(child: FakeElement): void {
    this.children.push(child);
    child.parentElement = this;
  }

  public remove(): void {
    const parent = this.parentElement;
    if (!parent) return;
    parent.children.splice(parent.children.indexOf(this), 1);
    this.parentElement = null;
  }

  public setAttribute(name: string, value: string): void {
    this.attributes.set(name, value);
  }

  public removeAttribute(name: string): void {
    this.attributes.delete(name);
  }

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
