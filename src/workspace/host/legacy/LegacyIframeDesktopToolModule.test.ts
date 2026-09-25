import { describe, expect, it, vi } from 'vitest';
import { WebPlatformBridge } from '../../../platform/adapters/web/WebPlatformBridge';
import type {
  DesktopToolMountContext,
  DesktopToolRuntimeContext,
  DesktopToolSurface,
  DesktopToolView,
} from '../../modules/DesktopToolModule';
import type { WorkspaceToolItem } from '../../types';
import { createLegacyIframeDesktopToolModule } from './LegacyIframeDesktopToolModule';

const TOOL: WorkspaceToolItem = {
  id: 'hitboxHurtboxAnimator',
  name: 'Hitbox Hurtbox Animator',
  phaseId: 'assets',
  description: 'Frame collision editing',
  routePath: '/workspace/tool/hitbox-hurtbox-animator/',
};

describe('LegacyIframeDesktopToolModule', () => {
  it('isolates legacy capability in its manifest', () => {
    const module = createLegacyIframeDesktopToolModule(TOOL);

    expect(module.manifest.id).toBe(TOOL.id);
    expect(module.manifest.capabilities).toEqual([
      { id: 'legacy.iframe', title: 'Legacy iframe compatibility' },
    ]);
    expect(module.manifest.commands).toEqual([]);
  });

  it('waits for explicit ready, sends typed context and releases the iframe', async () => {
    const dom = new FakeDom();
    const surface = createSurface(dom);
    const instance = createLegacyIframeDesktopToolModule(TOOL).create();
    const context = createContext(surface);

    const mounting = instance.mount(context);
    dom.send({ type: 'tool:ready', toolId: TOOL.id });
    await expect(mounting).resolves.toBeUndefined();
    await instance.activate();

    expect(dom.iframe.getAttribute('src')).toBe(TOOL.routePath);
    expect(dom.iframe.contentWindow.postMessage).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'workspace:context',
        activeToolId: TOOL.id,
      }),
      'http://localhost',
    );
    expect(dom.iframe.getAttribute('sandbox')).toContain('allow-same-origin');

    await instance.dispose();
    expect(surface.clear).toHaveBeenCalledOnce();
    expect(dom.iframe.getAttribute('src')).toBe('about:blank');
    expect(dom.iframe.removed).toBe(true);
  });

  it('forwards legacy logs through the typed activity port', async () => {
    const dom = new FakeDom();
    const surface = createSurface(dom);
    const reportActivity = vi.fn();
    const instance = createLegacyIframeDesktopToolModule(TOOL).create();
    const mounting = instance.mount(createContext(surface, reportActivity));
    dom.send({ type: 'tool:ready', toolId: TOOL.id });
    await mounting;

    dom.send({
      type: 'tool:log',
      toolId: TOOL.id,
      severity: 'warn',
      message: 'Legacy warning',
    });

    expect(reportActivity).toHaveBeenCalledWith({
      severity: 'warn',
      message: 'Legacy warning',
    });
  });

  it('rejects startup errors and ignores messages from a different tool', async () => {
    const dom = new FakeDom();
    const surface = createSurface(dom);
    const instance = createLegacyIframeDesktopToolModule(TOOL).create();
    const mounting = instance.mount(createContext(surface));

    dom.send({ type: 'tool:ready', toolId: 'otherTool' });
    dom.send({ type: 'tool:error', toolId: TOOL.id, message: 'Legacy boot failed' });

    await expect(mounting).rejects.toThrow('Legacy boot failed');
  });

  it('ignores a ready signal from a different origin', async () => {
    const dom = new FakeDom();
    const instance = createLegacyIframeDesktopToolModule(TOOL).create();
    const mounting = instance.mount(createContext(createSurface(dom)));

    dom.send({ type: 'tool:ready', toolId: TOOL.id }, 'https://untrusted.example');
    expect(dom.iframe.contentWindow.postMessage).not.toHaveBeenCalled();

    dom.send({ type: 'tool:ready', toolId: TOOL.id });
    await expect(mounting).resolves.toBeUndefined();
  });

  it('cancels a pending legacy mount through AbortSignal', async () => {
    const dom = new FakeDom();
    const surface = createSurface(dom);
    const abortController = new AbortController();
    const instance = createLegacyIframeDesktopToolModule(TOOL).create();
    const mounting = instance.mount(createContext(surface, vi.fn(), abortController.signal));

    abortController.abort();

    await expect(mounting).rejects.toThrow(`Mount aborted for ${TOOL.id}`);
  });
});

class FakeDom {
  public readonly window = Object.assign(new EventTarget(), {
    location: { origin: 'http://localhost' },
  });
  public readonly iframe = new FakeIframe();
  public readonly target = {
    ownerDocument: {
      defaultView: this.window,
      createElement: () => this.iframe,
    },
    replaceChildren: (...iframes: FakeIframe[]) => {
      const iframe = iframes[0];
      if (iframe) iframe.parent = this.target;
    },
  };

  public send(data: unknown, origin = 'http://localhost'): void {
    const event = new Event('message');
    Object.defineProperties(event, {
      data: { value: data },
      origin: { value: origin },
      source: { value: this.iframe.contentWindow },
    });
    this.window.dispatchEvent(event);
  }
}

class FakeIframe {
  public className = '';
  public title = '';
  public loading = '';
  public removed = false;
  public parent: { replaceChildren: (...children: FakeIframe[]) => void } | undefined;
  public readonly contentWindow = { postMessage: vi.fn() };
  private readonly attributes = new Map<string, string>();

  public setAttribute(name: string, value: string): void {
    this.attributes.set(name, value);
  }

  public getAttribute(name: string): string | null {
    return this.attributes.get(name) ?? null;
  }

  public remove(): void {
    this.removed = true;
    this.parent?.replaceChildren();
  }
}

function createSurface(dom: FakeDom): DesktopToolSurface & {
  show: ReturnType<typeof vi.fn>;
  clear: ReturnType<typeof vi.fn>;
} {
  let view: DesktopToolView | undefined;
  return {
    show: vi.fn(async (nextView: DesktopToolView) => {
      view = nextView;
      await nextView.mount(dom.target as unknown as Element);
    }),
    clear: vi.fn(async () => {
      await view?.dispose();
    }),
  };
}

function createContext(
  surface: DesktopToolSurface,
  reportActivity = vi.fn(),
  signal = new AbortController().signal,
): DesktopToolMountContext {
  return {
    ...createRuntimeContext(reportActivity, signal),
    surface,
  };
}

function createRuntimeContext(
  reportActivity: DesktopToolRuntimeContext['reportActivity'],
  signal: AbortSignal,
): DesktopToolRuntimeContext {
  return {
    project: null,
    projectConfig: null,
    platform: new WebPlatformBridge(),
    signal,
    reportActivity,
  };
}
