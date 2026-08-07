import { describe, expect, it } from 'vitest';
import {
  calculateBinPacking,
  calculateGridSlices,
  generateAtlasJson,
  generateCssSnippet,
  generateEngineCodeSnippet,
  nextPowerOfTwo,
  type PackerOptions,
  type SpriteFrameInput,
} from './logic';

describe('SpriteSheetPacker Logic', () => {
  it('calculates next power of two correctly', () => {
    expect(nextPowerOfTwo(1)).toBe(1);
    expect(nextPowerOfTwo(3)).toBe(4);
    expect(nextPowerOfTwo(500)).toBe(512);
    expect(nextPowerOfTwo(1024)).toBe(1024);
  });

  it('packs empty frames array returning default empty result', () => {
    const options: PackerOptions = {
      padding: 2,
      borderExtrusion: 0,
      forcePowerOfTwo: true,
      maxTextureWidth: 1024,
      maxTextureHeight: 1024,
      allowRotation: false,
      trimTransparency: false,
      format: 'generic-json-hash',
    };

    const result = calculateBinPacking([], options);
    expect(result.totalFrames).toBe(0);
    expect(result.efficiency).toBe(0);
    expect(result.drawCallsBefore).toBe(0);
    expect(result.drawCallsAfter).toBe(0);
  });

  it('packs frames and calculates texture dimensions and efficiency', () => {
    const frames: SpriteFrameInput[] = [
      { id: '1', name: 'hero_walk_0', width: 32, height: 32 },
      { id: '2', name: 'hero_walk_1', width: 32, height: 32 },
      { id: '3', name: 'hero_idle_0', width: 64, height: 64 },
    ];

    const options: PackerOptions = {
      padding: 0,
      borderExtrusion: 0,
      forcePowerOfTwo: false,
      maxTextureWidth: 1024,
      maxTextureHeight: 1024,
      allowRotation: false,
      trimTransparency: false,
      format: 'generic-json-hash',
    };

    const result = calculateBinPacking(frames, options);
    expect(result.totalFrames).toBe(3);
    expect(result.drawCallsBefore).toBe(3);
    expect(result.drawCallsAfter).toBe(1);
    expect(result.frames.length).toBe(3);
    expect(result.efficiency).toBeGreaterThan(0);
  });

  it('forces power of two dimensions when requested', () => {
    const frames: SpriteFrameInput[] = [
      { id: '1', name: 'frame_1', width: 100, height: 100 },
    ];

    const options: PackerOptions = {
      padding: 0,
      borderExtrusion: 0,
      forcePowerOfTwo: true,
      maxTextureWidth: 2048,
      maxTextureHeight: 2048,
      allowRotation: false,
      trimTransparency: false,
      format: 'generic-json-array',
    };

    const result = calculateBinPacking(frames, options);
    expect(result.textureWidth).toBe(128);
    expect(result.textureHeight).toBe(128);
  });

  it('generates atlas JSON formats for different engines', () => {
    const frames: SpriteFrameInput[] = [
      { id: '1', name: 'coin', width: 16, height: 16 },
    ];
    const options: PackerOptions = {
      padding: 0,
      borderExtrusion: 0,
      forcePowerOfTwo: false,
      maxTextureWidth: 512,
      maxTextureHeight: 512,
      allowRotation: false,
      trimTransparency: false,
      format: 'godot',
    };

    const result = calculateBinPacking(frames, options);
    expect(result.atlasJson).toContain('spritesheet.png');
    expect(result.atlasJson).toContain('coin');

    const unityJson = generateAtlasJson(result.frames, 512, 512, 'unity');
    expect(unityJson).toContain('sprites');

    const phaserJson = generateAtlasJson(result.frames, 512, 512, 'phaser');
    expect(phaserJson).toContain('meta');
  });

  it('generates css snippets accurately', () => {
    const frames: SpriteFrameInput[] = [
      { id: '1', name: 'player_idle', width: 24, height: 24 },
    ];
    const options: PackerOptions = {
      padding: 0,
      borderExtrusion: 0,
      forcePowerOfTwo: false,
      maxTextureWidth: 512,
      maxTextureHeight: 512,
      allowRotation: false,
      trimTransparency: false,
      format: 'css',
    };
    const result = calculateBinPacking(frames, options);
    const css = generateCssSnippet(result.frames);
    expect(css).toContain('.sprite-player_idle');
    expect(css).toContain('background-position');
  });

  it('generates engine code snippets correctly', () => {
    expect(generateEngineCodeSnippet('unity')).toContain('Resources.LoadAll');
    expect(generateEngineCodeSnippet('godot')).toContain('AtlasTexture');
    expect(generateEngineCodeSnippet('phaser')).toContain('this.load.atlas');
  });

  it('calculates grid slices for extractor mode', () => {
    const slices = calculateGridSlices({
      imageWidth: 128,
      imageHeight: 64,
      frameWidth: 32,
      frameHeight: 32,
      margin: 0,
      spacing: 0,
    });

    expect(slices.length).toBe(8);
    expect(slices[0]?.x).toBe(0);
    expect(slices[0]?.y).toBe(0);
    expect(slices[7]?.x).toBe(96);
    expect(slices[7]?.y).toBe(32);
  });
});
