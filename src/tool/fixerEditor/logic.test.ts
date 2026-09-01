import { describe, expect, it } from 'vitest';
import { createDefaultAdjustment, createFrameMetadata, createFrameSpecs, createHistoryState, createProjectFile, DEFAULT_GRID, detectGridFromImageData, isModified, nudgeAdjustment, normalizeAdjustment, normalizeGrid, parseProjectFile, recalculateGrid, trimTransparent, updateAdjustment } from './logic';

const frame = createFrameSpecs(128, 64, DEFAULT_GRID)[0];

if (!frame) throw new Error('Expected a test frame');

describe('fixer editor logic', () => {
  it('normalizes grid values and creates registered frames', () => {
    expect(normalizeGrid({ ...DEFAULT_GRID, columns: 0, rows: 200, cellWidth: 2.6 })).toEqual({ ...DEFAULT_GRID, columns: 1, rows: 128, cellWidth: 3 });
    expect(createFrameSpecs(128, 64, DEFAULT_GRID)).toHaveLength(2);
  });

  it('recalculates columns and rows from the source dimensions', () => {
    expect(recalculateGrid({ ...DEFAULT_GRID, cellWidth: 32 }, 128, 64, 'columns').columns).toBe(4);
    expect(recalculateGrid({ ...DEFAULT_GRID, cellHeight: 16 }, 128, 64, 'rows').rows).toBe(4);
    expect(recalculateGrid({ ...DEFAULT_GRID, cellWidth: 30, gapX: 2 }, 128, 64, 'columns').columns).toBe(4);
  });

  it('detects a transparent four by two sheet', () => {
    const width = 128;
    const height = 64;
    const pixels = new Uint8ClampedArray(width * height * 4);
    for (let y = 4; y < 28; y += 1) {
      for (let x = 4; x < 28; x += 1) pixels[(y * width + x) * 4 + 3] = 255;
    }
    for (let y = 36; y < 60; y += 1) {
      for (let x = 68; x < 92; x += 1) pixels[(y * width + x) * 4 + 3] = 255;
    }
    expect(detectGridFromImageData(pixels, width, height)).toMatchObject({ columns: 4, rows: 2 });
  });

  it('clamps a crop and offset to the frame canvas', () => {
    expect(normalizeAdjustment({ crop: { x: -4, y: 80, width: 90, height: 0 }, offsetX: 90, offsetY: -90 }, frame)).toEqual({ crop: { x: 0, y: 63, width: 64, height: 1 }, offsetX: 64, offsetY: -64 });
    expect(updateAdjustment(frame, createDefaultAdjustment(64, 64), { crop: { x: 4, width: 20 }, offsetY: 3 })).toEqual({ crop: { x: 4, y: 0, width: 20, height: 64 }, offsetX: 0, offsetY: 3 });
  });

  it('nudges and detects adjusted frames', () => {
    const original = createDefaultAdjustment(64, 64);
    const moved = nudgeAdjustment(frame, original, 'x', 2);
    expect(moved.offsetX).toBe(2);
    expect(isModified(moved, frame)).toBe(true);
    expect(isModified(original, frame)).toBe(false);
  });

  it('finds visible pixels while preserving an empty frame', () => {
    const pixels = new Uint8ClampedArray(4 * 4 * 4);
    pixels[(1 * 4 + 2) * 4 + 3] = 255;
    expect(trimTransparent(pixels, 4, 4)).toEqual({ x: 2, y: 1, width: 1, height: 1 });
    expect(trimTransparent(new Uint8ClampedArray(4 * 4 * 4), 4, 4)).toEqual({ x: 0, y: 0, width: 4, height: 4 });
  });

  it('serializes valid projects and rejects malformed files', () => {
    const project = createProjectFile({ sourceName: 'hero.png', sourceWidth: 128, sourceHeight: 64, grid: DEFAULT_GRID, adjustments: { '0': createDefaultAdjustment(64, 64) } });
    expect(parseProjectFile(project)).toEqual(project);
    expect(parseProjectFile(null)).toBeNull();
    expect(parseProjectFile({ version: 2 })).toBeNull();
    expect(parseProjectFile({ version: 1, grid: DEFAULT_GRID, adjustments: null })).toBeNull();
    expect(createHistoryState(DEFAULT_GRID, {}, 0).selected).toBe(0);
  });

  it('creates neutral metadata for export', () => {
    const frames = createFrameSpecs(128, 64, DEFAULT_GRID);
    const first = frames[0];
    if (!first) throw new Error('Expected a metadata frame');
    const metadata = createFrameMetadata(frames, { '0': nudgeAdjustment(first, createDefaultAdjustment(64, 64), 'y', 1) });
    expect(metadata[0]).toMatchObject({ index: 0, x: 0, y: 0, modified: true, offset: { x: 0, y: 1 } });
  });
});
