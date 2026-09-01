import { describe, expect, it } from 'vitest';
import {
  DEFAULT_CONFIG,
  cellPolygon,
  countFilledCells,
  createMapState,
  eraseCell,
  paintCell,
  resizeMap,
  serializeMap,
  toggleLayerVisibility,
} from './logic';

describe('isometric tile map logic', () => {
  it('creates a layered empty map', () => {
    const state = createMapState(DEFAULT_CONFIG);
    expect(state.cells).toHaveLength(3);
    expect(state.cells[0]).toHaveLength(8);
    expect(countFilledCells(state)).toBe(0);
  });

  it('paints and erases an in-bounds cell immutably', () => {
    const state = createMapState();
    const painted = paintCell(state, { layer: 1, row: 2, column: 3 }, 'water');
    const erased = eraseCell(painted, { layer: 1, row: 2, column: 3 });
    expect(state.cells[1]![2]![3]).toBeNull();
    expect(painted.cells[1]![2]![3]).toBe('water');
    expect(erased.cells[1]![2]![3]).toBeNull();
  });

  it('ignores positions outside the map', () => {
    const state = createMapState();
    expect(paintCell(state, { layer: 8, row: 0, column: 0 }, 'stone')).toBe(state);
  });

  it('preserves overlapping cells when geometry changes', () => {
    const state = paintCell(createMapState(), { layer: 0, row: 1, column: 1 }, 'path');
    const resized = resizeMap(state, { ...state.config, columns: 4, rows: 4, layers: 2 });
    expect(resized.cells[0]![1]![1]).toBe('path');
    expect(resized.cells).toHaveLength(2);
  });

  it('returns a four-point diamond and serializes the state', () => {
    const state = createMapState();
    expect(cellPolygon(state.config, { layer: 0, row: 0, column: 0 })).toHaveLength(4);
    expect(serializeMap(state)).toContain('"version": 1');
  });

  it('toggles layer visibility without changing its cells', () => {
    const state = paintCell(createMapState(), { layer: 2, row: 1, column: 1 }, 'grass');
    const hidden = toggleLayerVisibility(state, 2);
    expect(hidden.visibleLayers).toEqual([true, true, false]);
    expect(hidden.cells[2]![1]![1]).toBe('grass');
  });
});
