import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import type { DesktopToolHostSnapshot } from '../host/DesktopToolHost';
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
  retry: ReturnType<typeof vi.fn>;
  selectTool: ReturnType<typeof vi.fn>;
}

describe('WorkspaceViewportView', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders the selected tool metadata and standalone route', () => {
    const harness = createHarness();

    harness.view.render(harness.state.getState());

    expect(element(harness, '#viewport-tool-title').textContent).toBe('SpriteSheet Packer');
    expect(element(harness, '#viewport-phase-badge').textContent).toBe('Visual Assets');
    expect(element(harness, '#viewport-external-link').href).toBe(
      '/workspace/tool/sprite-sheet-packer/',
    );
  });

  it('delays the first loading indicator to avoid startup flicker', () => {
    const harness = createHarness();

    harness.view.renderHost(snapshot({ status: 'mounting', requestedModuleId: 'spriteSheetPacker' }));
    vi.advanceTimersByTime(149);
    expect(element(harness, '#viewport-loader').hidden).toBe(true);

    vi.advanceTimersByTime(1);
    expect(element(harness, '#viewport-loader').hidden).toBe(false);
  });

  it('keeps the last valid surface visible while the next module prepares', () => {
    const harness = createHarness();

    harness.view.renderHost(snapshot({
      status: 'mounting',
      requestedModuleId: 'hitboxHurtboxAnimator',
      activeModuleId: 'spriteSheetPacker',
    }));
    vi.advanceTimersByTime(500);

    expect(element(harness, '#viewport-loader').hidden).toBe(true);
  });

  it('shows and reports a recoverable timeout error', () => {
    const harness = createHarness();
    const error = 'Module spriteSheetPacker did not mount within 2000ms';

    harness.view.renderHost(snapshot({
      status: 'error',
      requestedModuleId: 'spriteSheetPacker',
      error,
    }));

    expect(element(harness, '#viewport-loader').hidden).toBe(false);
    expect(element(harness, '#viewport-loader-error').hidden).toBe(false);
    expect(element(harness, '#viewport-loader-error-title').textContent).toBe(
      'The module is taking too long',
    );
    expect(harness.log).toHaveBeenCalledWith('error', error, 'spriteSheetPacker');
  });

  it('retries through the host and displays the retrying state', () => {
    const harness = createHarness();

    harness.view.renderHost(snapshot({
      status: 'error',
      requestedModuleId: 'spriteSheetPacker',
      error: 'Startup failed',
    }));
    element(harness, '#viewport-loader-retry').dispatchEvent(new Event('click'));
    harness.view.renderHost(snapshot({
      status: 'retrying',
      requestedModuleId: 'spriteSheetPacker',
    }));

    expect(harness.retry).toHaveBeenCalledOnce();
    expect(element(harness, '#viewport-loader-text').textContent).toBe(
      'Retrying tool module...',
    );
  });

  it('returns to the still-active module after a failed switch', () => {
    const harness = createHarness();

    harness.view.renderHost(snapshot({
      status: 'error',
      requestedModuleId: 'hitboxHurtboxAnimator',
      activeModuleId: 'spriteSheetPacker',
      error: 'Animation bootstrap failed',
    }));
    expect(element(harness, '#viewport-loader-back').hidden).toBe(false);

    element(harness, '#viewport-loader-back').dispatchEvent(new Event('click'));

    expect(harness.selectTool).toHaveBeenCalledWith('spriteSheetPacker');
  });

  it('reports ready only after the host commits the integrated surface', () => {
    const harness = createHarness();

    harness.view.renderHost(snapshot({
      status: 'ready',
      requestedModuleId: 'spriteSheetPacker',
      activeModuleId: 'spriteSheetPacker',
    }));

    expect(element(harness, '#viewport-loader').hidden).toBe(true);
    expect(harness.log).toHaveBeenCalledWith(
      'success',
      'Module ready in the integrated tool host',
      'spriteSheetPacker',
    );
  });
});

function createHarness(): ViewHarness {
  const selectors = [
    '#viewport-tool-title',
    '#viewport-tool-desc',
    '#viewport-phase-badge',
    '#viewport-external-link',
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
  const retry = vi.fn();
  const selectTool = vi.fn();

  return {
    view: new WorkspaceViewportView(root, { log, retry, selectTool }),
    state: new WorkspaceStateManager(),
    elements,
    log,
    retry,
    selectTool,
  };
}

function snapshot(
  partial: Partial<DesktopToolHostSnapshot>,
): Readonly<DesktopToolHostSnapshot> {
  return {
    status: 'idle',
    requestedModuleId: null,
    activeModuleId: null,
    error: null,
    ...partial,
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
