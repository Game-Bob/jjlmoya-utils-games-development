import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { WorkspaceStateManager } from '../state/WorkspaceStateManager';
import { WorkspaceViewportView } from './WorkspaceViewportView';

class FakeElement extends EventTarget {
  public hidden = false;
  public disabled = false;
  public textContent = '';
  public href = '';
  private readonly attributes = new Map<string, string>();

  public setAttribute(name: string, value: string): void {
    this.attributes.set(name, value);
  }

  public getAttribute(name: string): string | null {
    return this.attributes.get(name) ?? null;
  }
}

interface ViewHarness {
  view: WorkspaceViewportView;
  state: WorkspaceStateManager;
  elements: Map<string, FakeElement>;
  log: ReturnType<typeof vi.fn>;
  selectTool: ReturnType<typeof vi.fn>;
}

describe('WorkspaceViewportView', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(1000);
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('attaches its lifecycle before the initial navigation can report ready', () => {
    const harness = createHarness();

    harness.view.render(harness.state.getState());
    expect(element(harness, '#tool-viewport-iframe').getAttribute('src')).toBe(
      '/workspace/tool/sprite-sheet-packer/',
    );

    harness.view.ready('spriteSheetPacker');
    vi.advanceTimersByTime(2000);

    expect(element(harness, '#viewport-loader').hidden).toBe(true);
    expect(harness.log).toHaveBeenCalledWith(
      'success',
      'Module ready in 0ms at /workspace/tool/sprite-sheet-packer/',
      'spriteSheetPacker',
    );
  });

  it('shows a recoverable error when the module never reports ready', () => {
    const harness = createHarness();

    harness.view.render(harness.state.getState());
    vi.advanceTimersByTime(150);
    expect(element(harness, '#viewport-loader').hidden).toBe(false);

    vi.advanceTimersByTime(1850);

    expect(element(harness, '#viewport-loader-error').hidden).toBe(false);
    expect(element(harness, '#viewport-loader-error-title').textContent).toBe(
      'The module is taking too long',
    );
    expect(harness.log).toHaveBeenCalledWith(
      'error',
      expect.stringContaining('ready-timeout'),
      'spriteSheetPacker',
    );
  });

  it('reports an iframe route error independently', () => {
    const harness = createHarness();

    harness.view.render(harness.state.getState());
    element(harness, '#tool-viewport-iframe').dispatchEvent(new Event('error'));

    expect(element(harness, '#viewport-loader-error-title').textContent).toBe(
      'The module route could not be opened',
    );
    expect(harness.log).toHaveBeenCalledWith(
      'error',
      expect.stringContaining('route-error'),
      'spriteSheetPacker',
    );
  });

  it('reports a tool script error independently', () => {
    const harness = createHarness();

    harness.view.render(harness.state.getState());
    expect(harness.view.scriptError('spriteSheetPacker', 'Canvas bootstrap failed')).toBe(true);

    expect(element(harness, '#viewport-loader-error-title').textContent).toBe(
      'The module stopped during startup',
    );
    expect(element(harness, '#viewport-loader-error-message').textContent).toBe(
      'Canvas bootstrap failed',
    );
  });

  it('retries the current route with a fresh navigation attempt', () => {
    const harness = createHarness();

    harness.view.render(harness.state.getState());
    harness.view.scriptError('spriteSheetPacker', 'Canvas bootstrap failed');
    element(harness, '#viewport-loader-retry').dispatchEvent(new Event('click'));

    expect(element(harness, '#tool-viewport-iframe').getAttribute('src')).toBe(
      '/workspace/tool/sprite-sheet-packer/?workspaceAttempt=1',
    );
    expect(element(harness, '#viewport-loader').hidden).toBe(true);
    vi.advanceTimersByTime(150);
    expect(element(harness, '#viewport-loader-text').textContent).toBe(
      'Retrying tool module...',
    );
  });

  it('returns to the last ready module after the next one fails', () => {
    const harness = createHarness();

    harness.view.render(harness.state.getState());
    harness.view.ready('spriteSheetPacker');
    harness.state.selectTool('hitboxHurtboxAnimator');
    harness.view.render(harness.state.getState());
    harness.view.scriptError('hitboxHurtboxAnimator', 'Animation bootstrap failed');

    expect(element(harness, '#viewport-loader-back').hidden).toBe(false);
    element(harness, '#viewport-loader-back').dispatchEvent(new Event('click'));

    expect(harness.selectTool).toHaveBeenCalledWith('spriteSheetPacker');
    expect(element(harness, '#tool-viewport-iframe').getAttribute('src')).toBe(
      '/workspace/tool/sprite-sheet-packer/',
    );
  });
});

function createHarness(): ViewHarness {
  const selectors = [
    '#viewport-tool-title',
    '#viewport-tool-desc',
    '#viewport-phase-badge',
    '#viewport-external-link',
    '#tool-viewport-iframe',
    '#viewport-loader',
    '#viewport-loader-progress',
    '#viewport-loader-text',
    '#viewport-loader-error',
    '#viewport-loader-error-title',
    '#viewport-loader-error-message',
    '#viewport-loader-retry',
    '#viewport-loader-back',
  ];
  const elements = new Map(selectors.map((selector) => [selector, new FakeElement()]));
  elementFromMap(elements, '#viewport-loader').hidden = true;
  elementFromMap(elements, '#viewport-loader-error').hidden = true;
  elementFromMap(elements, '#viewport-loader-back').hidden = true;

  const root = {
    querySelector: (selector: string) => elements.get(selector) ?? null,
  } as unknown as HTMLElement;
  const log = vi.fn();
  const selectTool = vi.fn();

  return {
    view: new WorkspaceViewportView(root, { log, selectTool }),
    state: new WorkspaceStateManager(),
    elements,
    log,
    selectTool,
  };
}

function element(harness: ViewHarness, selector: string): FakeElement {
  return elementFromMap(harness.elements, selector);
}

function elementFromMap(elements: Map<string, FakeElement>, selector: string): FakeElement {
  const match = elements.get(selector);
  if (!match) throw new Error(`Missing fake element: ${selector}`);
  return match;
}
