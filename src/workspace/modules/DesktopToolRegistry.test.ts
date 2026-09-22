import { describe, expect, it, vi } from 'vitest';
import type {
  DesktopToolInstance,
  DesktopToolManifest,
  DesktopToolModule,
} from './DesktopToolModule';
import {
  DesktopToolRegistry,
  DesktopToolRegistryError,
  validateDesktopToolModule,
} from './DesktopToolRegistry';

describe('DesktopToolRegistry', () => {
  it('exposes manifests without creating module instances', () => {
    const create = vi.fn(() => createInstance());
    const module = createModule({ id: 'spriteSheetPacker' }, create);
    const registry = new DesktopToolRegistry([module]);

    expect(registry.list()).toEqual([module]);
    expect(registry.get('spriteSheetPacker')?.manifest.commands[0]?.id).toBe('generate');
    expect(registry.get('spriteSheetPacker')?.manifest.capabilities[0]?.id).toBe('atlas.pack');
    expect(registry.get('spriteSheetPacker')?.manifest.outputs[0]?.type).toBe('TextureAtlas');
    expect(create).not.toHaveBeenCalled();
  });

  it('allows new modules to be registered by composition', () => {
    const packer = createModule({ id: 'spriteSheetPacker' });
    const hitbox = createModule({ id: 'hitboxHurtboxAnimator', name: 'Hitbox Animator' });
    const registry = new DesktopToolRegistry([packer, hitbox]);

    expect(registry.has('hitboxHurtboxAnimator')).toBe(true);
    expect(registry.require('hitboxHurtboxAnimator')).toBe(hitbox);
  });

  it('rejects duplicate module identifiers at startup', () => {
    expect(() => new DesktopToolRegistry([
      createModule({ id: 'spriteSheetPacker' }),
      createModule({ id: 'spriteSheetPacker' }),
    ])).toThrow('Duplicate module id: spriteSheetPacker');
  });

  it('rejects unknown modules with an explicit registry error', () => {
    const registry = new DesktopToolRegistry([]);

    expect(() => registry.require('missing')).toThrow(
      new DesktopToolRegistryError('Unknown module id: missing'),
    );
  });

  it('rejects invalid versions and identifiers', () => {
    expect(() => validateDesktopToolModule(createModule({ version: 'next' }))).toThrow(
      'Invalid module version',
    );
    expect(() => validateDesktopToolModule(createModule({ id: 'Sprite Sheet' }))).toThrow(
      'Invalid manifest.id',
    );
  });

  it('rejects duplicate command and capability identifiers', () => {
    const duplicateCommands = createModule({
      commands: [command('generate'), command('generate')],
    });
    const duplicateCapabilities = createModule({
      capabilities: [capability('atlas.pack'), capability('atlas.pack')],
    });

    expect(() => validateDesktopToolModule(duplicateCommands)).toThrow('Duplicate command id');
    expect(() => validateDesktopToolModule(duplicateCapabilities)).toThrow(
      'Duplicate capability id',
    );
  });

  it('rejects invalid artifact schemas', () => {
    const module = createModule({
      outputs: [{ type: 'TextureAtlas', title: 'Texture atlas', schemaVersion: 0 }],
    });

    expect(() => validateDesktopToolModule(module)).toThrow('Invalid schema version');
  });
});

function createModule(
  overrides: Partial<DesktopToolManifest> = {},
  create: () => DesktopToolInstance = createInstance,
): DesktopToolModule {
  return {
    manifest: {
      id: 'spriteSheetPacker',
      version: '1.0.0',
      name: 'Sprite Sheet Packer',
      description: 'Builds texture atlases from source frames.',
      capabilities: [capability('atlas.pack')],
      commands: [command('generate')],
      inputs: [{ type: 'SourceFrames', title: 'Source frames', schemaVersion: 1 }],
      outputs: [{ type: 'TextureAtlas', title: 'Texture atlas', schemaVersion: 1 }],
      ...overrides,
    },
    create,
  };
}

function capability(id: string) {
  return { id, title: 'Capability' };
}

function command(id: string) {
  return { id, title: 'Command' };
}

function createInstance(): DesktopToolInstance {
  return {
    mount: async () => undefined,
    updateContext: async () => undefined,
    activate: async () => undefined,
    deactivate: async () => undefined,
    isCommandEnabled: () => true,
    executeCommand: async () => undefined,
    serializeSession: () => ({}),
    dispose: async () => undefined,
  };
}
