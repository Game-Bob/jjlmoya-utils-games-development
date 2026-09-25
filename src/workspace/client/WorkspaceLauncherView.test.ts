import { describe, expect, it, vi } from 'vitest';
import type { IWorkspaceProjectActions } from '../contracts/IWorkspaceProjectActions';
import { WorkspaceStateManager } from '../state/WorkspaceStateManager';
import { WorkspaceLauncherView } from './WorkspaceLauncherView';

class FakeElement extends EventTarget {
  public hidden = false;
  public textContent = '';
  public dataset: Record<string, string> = {};
}

function createHarness() {
  const selectors = [
    '#project-launcher',
    '#workspace-workbench',
    '#launcher-error',
    '#launcher-open',
    '#launcher-new',
    '#launcher-labs',
  ];
  const elements = new Map(selectors.map((selector) => [selector, new FakeElement()]));
  const root = new FakeElement() as FakeElement & HTMLElement;
  root.querySelector = <T extends Element>(selector: string) =>
    (elements.get(selector) ?? null) as T | null;
  const actions: IWorkspaceProjectActions = {
    openProject: vi.fn(async () => undefined),
    newProject: vi.fn(async () => undefined),
    saveProjectAs: vi.fn(async () => undefined),
    syncProject: vi.fn(async () => undefined),
  };
  const state = new WorkspaceStateManager();
  const view = new WorkspaceLauncherView(root, state, actions);
  const element = (selector: string) => elements.get(selector)!;
  return { root, state, actions, view, element };
}

describe('WorkspaceLauncherView', () => {
  it('shows the launcher until the user chooses a context', () => {
    const harness = createHarness();

    harness.view.render(harness.state.getState());

    expect(harness.root.dataset.workspaceMode).toBe('launcher');
    expect(harness.element('#project-launcher').hidden).toBe(false);
    expect(harness.element('#workspace-workbench').hidden).toBe(true);

    harness.element('#launcher-labs').dispatchEvent(new Event('click'));
    harness.view.render(harness.state.getState());

    expect(harness.root.dataset.workspaceMode).toBe('labs');
    expect(harness.element('#project-launcher').hidden).toBe(true);
    expect(harness.element('#workspace-workbench').hidden).toBe(false);
  });

  it('routes open and create actions to the project controller', () => {
    const harness = createHarness();

    harness.element('#launcher-open').dispatchEvent(new Event('click'));
    harness.element('#launcher-new').dispatchEvent(new Event('click'));

    expect(harness.actions.openProject).toHaveBeenCalledOnce();
    expect(harness.actions.newProject).toHaveBeenCalledOnce();

    harness.view.destroy();
    harness.element('#launcher-open').dispatchEvent(new Event('click'));
    expect(harness.actions.openProject).toHaveBeenCalledOnce();
  });

  it('exposes project opening failures where the user can recover', () => {
    const harness = createHarness();
    harness.state.addLog('error', 'Unable to open project: permission denied');

    harness.view.render(harness.state.getState());

    expect(harness.element('#launcher-error').hidden).toBe(false);
    expect(harness.element('#launcher-error').textContent).toContain('permission denied');
  });
});
