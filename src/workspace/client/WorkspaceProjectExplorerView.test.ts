import { describe, expect, it, vi } from 'vitest';
import { TauriPlatformBridge } from '../../platform/adapters/desktop/TauriPlatformBridge';
import type { ProjectDirectoryListing } from '../../platform/contracts/IProjectFileBrowser';
import { WorkspaceStateManager } from '../state/WorkspaceStateManager';
import { WorkspaceProjectExplorerView } from './WorkspaceProjectExplorerView';

class FakeElement extends EventTarget {
  public hidden = false;
  public disabled = false;
  public textContent = '';
  public title = '';
  public type = '';
  public className = '';
  public dataset: Record<string, string> = {};
  public children: FakeElement[] = [];
  public readonly attributes = new Map<string, string>();
  public readonly classList = {
    toggle: (name: string, enabled: boolean): void => {
      const classes = new Set(this.className.split(' ').filter(Boolean));
      if (enabled) classes.add(name);
      else classes.delete(name);
      this.className = [...classes].join(' ');
    },
  };
  public ownerDocument = document;

  public append(...children: FakeElement[]): void {
    this.children.push(...children);
  }

  public replaceChildren(...children: FakeElement[]): void {
    this.children = children.flatMap((child) => child.className === 'fragment' ? child.children : [child]);
  }

  public setAttribute(name: string, value: string): void {
    this.attributes.set(name, value);
  }

  public querySelectorAll(): FakeElement[] {
    return this.children;
  }
}

const document = {
  createElement: () => new FakeElement(),
  createDocumentFragment: () => {
    const fragment = new FakeElement();
    fragment.className = 'fragment';
    return fragment;
  },
} as unknown as Document;

function createRoot(): { root: HTMLElement; elements: Map<string, FakeElement> } {
  const elements = new Map<string, FakeElement>();
  for (const selector of [
    '#project-explorer',
    '#project-explorer-list',
    '#project-explorer-path',
    '#project-explorer-status',
    '#project-explorer-back',
    '#project-explorer-refresh',
  ]) {
    elements.set(selector, new FakeElement());
  }
  return {
    root: { querySelector: (selector: string) => elements.get(selector) } as unknown as HTMLElement,
    elements,
  };
}

describe('WorkspaceProjectExplorerView', () => {
  it('shows project folders and opens a sprite through the integrated tool', async () => {
    const rootPath = 'D:\\game';
    const spritePath = 'D:\\game\\sprites\\hero.png';
    const listings: Record<string, ProjectDirectoryListing> = {
      [rootPath]: {
        entries: [{ name: 'sprites', path: 'D:\\game\\sprites', isDirectory: true }],
        truncated: false,
      },
      'D:\\game\\sprites': {
        entries: [{ name: 'hero.png', path: spritePath, isDirectory: false }],
        truncated: false,
      },
    };
    const listDirectory = vi.fn(async (path: string) => listings[path]!);
    const platform = new TauriPlatformBridge({ projectFileBrowser: { listDirectory } });
    const state = new WorkspaceStateManager();
    const { root, elements } = createRoot();
    const view = new WorkspaceProjectExplorerView(root, state, platform);
    state.activateProject(
      { name: 'Game', path: rootPath, engine: 'custom', lastSyncedAt: 1 },
      { version: 1, name: 'Game', targetEngine: 'generic', pipeline: {} },
    );

    view.render(state.getState());
    const list = elements.get('#project-explorer-list')!;
    await vi.waitFor(() => expect(list.children[0]?.children[1]?.textContent).toBe('sprites'));
    list.children[0]!.dispatchEvent(new Event('click'));
    await vi.waitFor(() => expect(list.children[0]?.children[1]?.textContent).toBe('hero.png'));
    list.children[0]!.dispatchEvent(new Event('click'));

    expect(state.getState().selectedProjectFile?.path).toBe(spritePath);
    expect(state.getState().activeToolId).toBe('spriteSheetPacker');
    state.selectTool('fixerEditor');
    list.children[0]!.dispatchEvent(new Event('click'));
    expect(state.getState().activeToolId).toBe('fixerEditor');
    expect(listDirectory).toHaveBeenCalledWith(rootPath);
    expect(listDirectory).toHaveBeenCalledWith('D:\\game\\sprites');
    elements.get('#project-explorer-back')!.dispatchEvent(new Event('click'));
    await vi.waitFor(() => expect(list.children[0]?.children[1]?.textContent).toBe('sprites'));
    view.destroy();
  });
});
