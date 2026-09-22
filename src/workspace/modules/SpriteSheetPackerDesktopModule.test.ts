import { describe, expect, it, vi } from 'vitest';
import { WebPlatformBridge } from '../../platform/adapters/web/WebPlatformBridge';
import type {
  DesktopToolMountContext,
  DesktopToolSurface,
  DesktopToolView,
} from './DesktopToolModule';
import { assertSerializableSession } from './DesktopToolSession';
import {
  DesktopToolLifecycleError,
  SpriteSheetPackerDesktopModule,
} from './SpriteSheetPackerDesktopModule';

describe('SpriteSheetPackerDesktopModule', () => {
  it('publishes commands, capabilities and artifact types before mounting', () => {
    const module = new SpriteSheetPackerDesktopModule();

    expect(module.manifest.commands.map((command) => command.id)).toEqual(['preview-grid']);
    expect(module.manifest.capabilities.map((capability) => capability.id)).toEqual([
      'sprite.extract-grid',
      'atlas.pack',
    ]);
    expect(module.manifest.inputs.map((input) => input.type)).toEqual([
      'SourceFrames',
      'SpriteSheet',
    ]);
    expect(module.manifest.outputs.map((output) => output.type)).toEqual([
      'TextureAtlas',
      'AtlasMetadata',
    ]);
  });

  it('mounts, deactivates and reactivates without recreating its surface', async () => {
    const module = new SpriteSheetPackerDesktopModule();
    const instance = module.create();
    const surface = createSurface();

    await instance.mount(createContext(surface));
    expect(surface.show).toHaveBeenCalledOnce();
    expect(instance.isCommandEnabled('preview-grid')).toBe(false);

    await instance.activate();
    expect(instance.isCommandEnabled('preview-grid')).toBe(true);

    await instance.deactivate('tool-switch');
    expect(instance.isCommandEnabled('preview-grid')).toBe(false);

    await instance.activate();
    expect(instance.isCommandEnabled('preview-grid')).toBe(true);
    expect(surface.show).toHaveBeenCalledOnce();
  });

  it('uses the shared sprite kernel to execute its reference command', async () => {
    const reportActivity = vi.fn();
    const instance = new SpriteSheetPackerDesktopModule().create();
    await instance.mount(createContext(createSurface(), reportActivity));
    await instance.activate();

    const result = await instance.executeCommand('preview-grid', {
      imageWidth: 32,
      imageHeight: 32,
      frameWidth: 16,
      frameHeight: 16,
      margin: 0,
      spacing: 0,
    });

    expect(result).toEqual({
      sliceCount: 4,
      slices: [
        { id: 'slice_0', index: 0, x: 0, y: 0, width: 16, height: 16 },
        { id: 'slice_1', index: 1, x: 16, y: 0, width: 16, height: 16 },
        { id: 'slice_2', index: 2, x: 0, y: 16, width: 16, height: 16 },
        { id: 'slice_3', index: 3, x: 16, y: 16, width: 16, height: 16 },
      ],
    });
    expect(reportActivity).toHaveBeenCalledWith({
      severity: 'success',
      message: 'Detected 4 frame slices',
    });
  });

  it('restores and serializes JSON-only session state', async () => {
    const instance = new SpriteSheetPackerDesktopModule().create();
    const restored = {
      lastGridPreview: {
        imageWidth: 64,
        imageHeight: 32,
        frameWidth: 16,
        frameHeight: 16,
        margin: 0,
        spacing: 0,
        sliceCount: 8,
      },
    };

    await instance.mount(createContext(createSurface()), restored);
    const serialized = instance.serializeSession();

    expect(serialized).toEqual(restored);
    expect(serialized).not.toBe(restored);
    expect(() => assertSerializableSession(serialized)).not.toThrow();
  });

  it('releases the surface and rejects lifecycle work after disposal', async () => {
    const instance = new SpriteSheetPackerDesktopModule().create();
    const surface = createSurface();
    await instance.mount(createContext(surface));
    await instance.activate();

    await instance.dispose();
    await instance.dispose();

    expect(surface.clear).toHaveBeenCalledOnce();
    await expect(instance.activate()).rejects.toBeInstanceOf(DesktopToolLifecycleError);
    expect(() => instance.serializeSession()).toThrow('while it is disposed');
  });

  it('rejects commands before activation and malformed command payloads', async () => {
    const instance = new SpriteSheetPackerDesktopModule().create();
    await instance.mount(createContext(createSurface()));

    await expect(instance.executeCommand('preview-grid', {})).rejects.toThrow(
      'while it is mounted',
    );
    await instance.activate();
    await expect(instance.executeCommand('preview-grid', {})).rejects.toThrow(
      'requires a finite imageWidth',
    );
  });
});

function createSurface(): DesktopToolSurface & {
  show: ReturnType<typeof vi.fn>;
  clear: ReturnType<typeof vi.fn>;
} {
  return {
    show: vi.fn(async (_view: DesktopToolView) => undefined),
    clear: vi.fn(async () => undefined),
  };
}

function createContext(
  surface: DesktopToolSurface,
  reportActivity = vi.fn(),
): DesktopToolMountContext {
  return {
    project: null,
    projectConfig: null,
    platform: new WebPlatformBridge(),
    signal: new AbortController().signal,
    reportActivity,
    surface,
  };
}
