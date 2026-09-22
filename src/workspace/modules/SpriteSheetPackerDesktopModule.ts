import { calculateGridSlices } from '../../tool/spriteSheetPacker/logic';
import type { ExtractionGridConfig } from '../../tool/spriteSheetPacker/types';
import { assertSerializableSession } from './DesktopToolSession';
import type {
  DesktopToolDeactivationReason,
  DesktopToolInstance,
  DesktopToolManifest,
  DesktopToolModule,
  DesktopToolMountContext,
  DesktopToolRuntimeContext,
  DesktopToolSurface,
  JsonObject,
  JsonValue,
} from './DesktopToolModule';

type LifecycleState = 'created' | 'mounted' | 'active' | 'inactive' | 'disposed';

const MANIFEST: DesktopToolManifest = {
  id: 'spriteSheetPacker',
  version: '1.0.0',
  name: 'Sprite Sheet Packer',
  description: 'Builds and inspects texture atlases from project sprite sources.',
  capabilities: [
    { id: 'sprite.extract-grid', title: 'Extract a uniform sprite grid' },
    { id: 'atlas.pack', title: 'Pack frames into a texture atlas' },
  ],
  commands: [
    {
      id: 'preview-grid',
      title: 'Preview grid',
      description: 'Calculate the frame slices for a uniform sprite sheet.',
    },
  ],
  inputs: [
    { type: 'SourceFrames', title: 'Source frames', schemaVersion: 1, multiple: true },
    { type: 'SpriteSheet', title: 'Sprite sheet', schemaVersion: 1 },
  ],
  outputs: [
    { type: 'TextureAtlas', title: 'Texture atlas', schemaVersion: 1 },
    { type: 'AtlasMetadata', title: 'Atlas metadata', schemaVersion: 1 },
  ],
};

export class DesktopToolLifecycleError extends Error {
  constructor(moduleId: string, operation: string, state: LifecycleState) {
    super(`Cannot ${operation} module ${moduleId} while it is ${state}`);
    this.name = 'DesktopToolLifecycleError';
  }
}

export class SpriteSheetPackerDesktopModule implements DesktopToolModule {
  public readonly manifest = MANIFEST;

  public create(): DesktopToolInstance {
    return new SpriteSheetPackerDesktopInstance(this.manifest.id);
  }
}

class SpriteSheetPackerDesktopInstance implements DesktopToolInstance {
  private state: LifecycleState = 'created';
  private runtimeContext: DesktopToolRuntimeContext | undefined;
  private surface: DesktopToolSurface | undefined;
  private session: JsonObject = { lastGridPreview: null };

  constructor(private readonly moduleId: string) {}

  public async mount(
    context: DesktopToolMountContext,
    restoredSession?: Readonly<JsonObject>,
  ): Promise<void> {
    this.requireState('mount', 'created');
    if (restoredSession) {
      assertSerializableSession(restoredSession);
      this.session = structuredClone(restoredSession);
    }
    this.runtimeContext = context;
    this.surface = context.surface;
    await context.surface.show({
      mount: () => undefined,
      dispose: () => undefined,
    });
    this.state = 'mounted';
  }

  public async updateContext(context: DesktopToolRuntimeContext): Promise<void> {
    this.requireUsable('update context');
    this.runtimeContext = context;
  }

  public async activate(): Promise<void> {
    if (this.state === 'active') return;
    if (this.state !== 'mounted' && this.state !== 'inactive') {
      throw new DesktopToolLifecycleError(this.moduleId, 'activate', this.state);
    }
    this.state = 'active';
  }

  public async deactivate(_reason: DesktopToolDeactivationReason): Promise<void> {
    if (this.state === 'inactive' || this.state === 'mounted') return;
    this.requireState('deactivate', 'active');
    this.state = 'inactive';
  }

  public isCommandEnabled(commandId: string): boolean {
    return commandId === 'preview-grid' && this.state === 'active';
  }

  public async executeCommand(
    commandId: string,
    payload?: JsonValue,
  ): Promise<JsonValue | undefined> {
    if (!this.isCommandEnabled(commandId)) {
      throw new DesktopToolLifecycleError(this.moduleId, `execute ${commandId}`, this.state);
    }
    const grid = parseGridConfig(payload);
    const slices = calculateGridSlices(grid);
    const result = createGridPreviewResult(slices);
    this.rememberGridPreview(grid, slices.length);
    this.runtimeContext?.reportActivity({
      severity: 'success',
      message: `Detected ${slices.length} frame slices`,
    });
    return result;
  }

  public serializeSession(): JsonObject {
    this.requireUsable('serialize session');
    assertSerializableSession(this.session);
    return structuredClone(this.session);
  }

  public async dispose(): Promise<void> {
    if (this.state === 'disposed') return;
    if (this.state === 'active') await this.deactivate('dispose');
    await this.surface?.clear();
    this.surface = undefined;
    this.runtimeContext = undefined;
    this.state = 'disposed';
  }

  private requireUsable(operation: string): void {
    if (this.state === 'created' || this.state === 'disposed') {
      throw new DesktopToolLifecycleError(this.moduleId, operation, this.state);
    }
  }

  private requireState(operation: string, expected: LifecycleState): void {
    if (this.state !== expected) {
      throw new DesktopToolLifecycleError(this.moduleId, operation, this.state);
    }
  }

  private rememberGridPreview(grid: ExtractionGridConfig, sliceCount: number): void {
    this.session = {
      ...this.session,
      lastGridPreview: {
        ...grid,
        sliceCount,
      },
    };
  }
}

function createGridPreviewResult(
  slices: ReturnType<typeof calculateGridSlices>,
): JsonObject {
  return {
    sliceCount: slices.length,
    slices: slices.map((slice) => ({
      id: slice.id,
      index: slice.index,
      x: slice.x,
      y: slice.y,
      width: slice.width,
      height: slice.height,
    })),
  };
}

function parseGridConfig(payload: JsonValue | undefined): ExtractionGridConfig {
  if (!payload || Array.isArray(payload) || typeof payload !== 'object') {
    throw new TypeError('preview-grid requires a grid configuration object');
  }
  return {
    imageWidth: readNumber(payload, 'imageWidth'),
    imageHeight: readNumber(payload, 'imageHeight'),
    frameWidth: readNumber(payload, 'frameWidth'),
    frameHeight: readNumber(payload, 'frameHeight'),
    margin: readNumber(payload, 'margin'),
    spacing: readNumber(payload, 'spacing'),
  };
}

function readNumber(payload: JsonObject, key: string): number {
  const value = payload[key];
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    throw new TypeError(`preview-grid requires a finite ${key}`);
  }
  return value;
}
