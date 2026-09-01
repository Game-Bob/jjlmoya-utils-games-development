import { countFilledCells, type MapState } from './logic';
import type { IsometricTileMapEditorUI } from './ui';

export interface MapSummary {
  filled: number;
  total: number;
  coverage: string;
  activeLayer: string;
  selectedTile: string;
}

export function evaluateMap(state: MapState, ui: IsometricTileMapEditorUI): MapSummary {
  const filled = countFilledCells(state);
  const total = state.config.columns * state.config.rows * state.config.layers;
  const coverage = `${Math.round(filled / total * 100)}%`;
  return {
    filled,
    total,
    coverage,
    activeLayer: `${ui.layerLabel} ${state.activeLayer + 1}`,
    selectedTile: tileLabel(state.selectedTile, ui),
  };
}

export function tileLabel(tile: MapState['selectedTile'], ui: IsometricTileMapEditorUI): string {
  const labels = {
    grass: ui.grassLabel,
    stone: ui.stoneLabel,
    water: ui.waterLabel,
    path: ui.pathLabel,
  };
  return labels[tile];
}
