import { describe, expect, it } from 'vitest';
import { validateGameFiles, detectGameEngine, calculateAspectRatio, generateItchioEmbedConfig, type WebGameFileInfo } from './logic';

describe('Itch.io Game Tester Logic Unit Tests', () => {
  it('should detect Godot 4 Web export files', () => {
    const mockFiles: WebGameFileInfo[] = [
      { name: 'index.html', size: 1024, isDirectory: false },
      { name: 'mygame.wasm', size: 500000, isDirectory: false },
      { name: 'mygame.pck', size: 1200000, isDirectory: false },
      { name: 'godot.side.wasm', size: 10000, isDirectory: false }
    ];

    const engine = detectGameEngine(mockFiles);
    expect(engine).toBe('Godot 4');

    const result = validateGameFiles(mockFiles);
    expect(result.hasIndexHtml).toBe(true);
    expect(result.issues.some((i) => i.code === 'GODOT4_HEADERS')).toBe(true);
  });

  it('should detect Unity WebGL export files', () => {
    const mockFiles: WebGameFileInfo[] = [
      { name: 'index.html', size: 1024, isDirectory: false },
      { name: 'Build/game.framework.js', size: 50000, isDirectory: false },
      { name: 'Build/game.data', size: 500000, isDirectory: false }
    ];

    const engine = detectGameEngine(mockFiles);
    expect(engine).toBe('Unity WebGL');
  });

  it('should flag nested index.html error', () => {
    const mockFiles: WebGameFileInfo[] = [
      { name: 'export-folder/index.html', size: 1024, isDirectory: false }
    ];

    const result = validateGameFiles(mockFiles);
    expect(result.hasIndexHtml).toBe(false);
    expect(result.indexHtmlPath).toBe('export-folder/index.html');
    expect(result.issues.some((i) => i.code === 'NESTED_INDEX')).toBe(true);
  });

  it('should calculate aspect ratios accurately', () => {
    expect(calculateAspectRatio(1280, 720)).toBe('16:9');
    expect(calculateAspectRatio(800, 600)).toBe('4:3');
    expect(calculateAspectRatio(960, 640)).toBe('3:2');
    expect(calculateAspectRatio(800, 800)).toBe('1:1');
  });

  it('should generate embed config text correctly', () => {
    const config = generateItchioEmbedConfig(960, 600, 'landscape');
    expect(config.viewportWidth).toBe(960);
    expect(config.viewportHeight).toBe(600);
    expect(config.codeSnippet).toContain('960px x 600px');
  });
});
