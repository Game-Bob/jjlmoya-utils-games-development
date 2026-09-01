export const TILE_TYPES = ['grass', 'stone', 'water', 'path'] as const;

export type TileType = typeof TILE_TYPES[number];

export interface MapConfig {
  tileWidth: number;
  tileHeight: number;
  columns: number;
  rows: number;
  layers: number;
  layerDepth: number;
}

export type Cell = TileType | null;

export interface MapState {
  config: MapConfig;
  cells: Cell[][][];
  visibleLayers: boolean[];
  activeLayer: number;
  selectedTile: TileType;
  mode: 'paint' | 'erase';
}

export interface CellPosition {
  layer: number;
  row: number;
  column: number;
}

export interface Point {
  x: number;
  y: number;
}

export const DEFAULT_CONFIG: MapConfig = {
  tileWidth: 72,
  tileHeight: 36,
  columns: 8,
  rows: 8,
  layers: 3,
  layerDepth: 24,
};

function clamp(value: number, minimum: number, maximum: number): number {
  return Math.min(maximum, Math.max(minimum, Math.round(value)));
}

export function normalizeConfig(config: MapConfig): MapConfig {
  return {
    tileWidth: clamp(config.tileWidth, 32, 160),
    tileHeight: clamp(config.tileHeight, 16, 100),
    columns: clamp(config.columns, 2, 16),
    rows: clamp(config.rows, 2, 16),
    layers: clamp(config.layers, 1, 6),
    layerDepth: clamp(config.layerDepth, 8, 80),
  };
}

function createLayer(config: MapConfig): Cell[][] {
  return Array.from({ length: config.rows }, () => Array<Cell>(config.columns).fill(null));
}

export function createMapState(config: MapConfig = DEFAULT_CONFIG): MapState {
  const safeConfig = normalizeConfig(config);
  return {
    config: safeConfig,
    cells: Array.from({ length: safeConfig.layers }, () => createLayer(safeConfig)),
    visibleLayers: Array.from({ length: safeConfig.layers }, () => true),
    activeLayer: 0,
    selectedTile: 'grass',
    mode: 'paint',
  };
}

function copyCells(state: MapState, config: MapConfig): Cell[][][] {
  const cells = Array.from({ length: config.layers }, () => createLayer(config));
  const layers = Math.min(state.config.layers, config.layers);
  const rows = Math.min(state.config.rows, config.rows);
  const columns = Math.min(state.config.columns, config.columns);
  for (let layer = 0; layer < layers; layer += 1) {
    for (let row = 0; row < rows; row += 1) {
      for (let column = 0; column < columns; column += 1) {
        cells[layer]![row]![column] = state.cells[layer]![row]![column]!;
      }
    }
  }
  return cells;
}

export function resizeMap(state: MapState, config: MapConfig): MapState {
  const safeConfig = normalizeConfig(config);
  return {
    ...state,
    config: safeConfig,
    cells: copyCells(state, safeConfig),
    visibleLayers: Array.from({ length: safeConfig.layers }, (_, layer) => state.visibleLayers[layer] ?? true),
    activeLayer: Math.min(state.activeLayer, safeConfig.layers - 1),
  };
}

function isValidPosition(state: MapState, position: CellPosition): boolean {
  return position.layer >= 0 && position.layer < state.config.layers
    && position.row >= 0 && position.row < state.config.rows
    && position.column >= 0 && position.column < state.config.columns;
}

function cloneCells(state: MapState): Cell[][][] {
  return state.cells.map((layer) => layer.map((row) => [...row]));
}

export function paintCell(state: MapState, position: CellPosition, tile: TileType): MapState {
  if (!isValidPosition(state, position)) return state;
  const cells = cloneCells(state);
  cells[position.layer]![position.row]![position.column] = tile;
  return { ...state, cells };
}

export function eraseCell(state: MapState, position: CellPosition): MapState {
  if (!isValidPosition(state, position)) return state;
  const cells = cloneCells(state);
  cells[position.layer]![position.row]![position.column] = null;
  return { ...state, cells };
}

export function toggleLayerVisibility(state: MapState, layer: number): MapState {
  if (layer < 0 || layer >= state.config.layers) return state;
  const visibleLayers = [...state.visibleLayers];
  visibleLayers[layer] = !visibleLayers[layer];
  return { ...state, visibleLayers };
}

export function countFilledCells(state: MapState): number {
  return state.cells.reduce((total, layer) => total + layer.reduce(
    (layerTotal, row) => layerTotal + row.filter(Boolean).length,
    0,
  ), 0);
}

export function cellCenter(config: MapConfig, position: CellPosition): Point {
  const padding = config.tileWidth;
  return {
    x: padding + (position.column - position.row) * config.tileWidth / 2 + config.rows * config.tileWidth / 2,
    y: padding + (position.column + position.row) * config.tileHeight / 2 + (config.layers - 1 - position.layer) * config.layerDepth,
  };
}

export function cellPolygon(config: MapConfig, position: CellPosition): Point[] {
  const center = cellCenter(config, position);
  return [
    { x: center.x, y: center.y - config.tileHeight / 2 },
    { x: center.x + config.tileWidth / 2, y: center.y },
    { x: center.x, y: center.y + config.tileHeight / 2 },
    { x: center.x - config.tileWidth / 2, y: center.y },
  ];
}

export function mapSize(config: MapConfig): Point {
  return {
    x: (config.columns + config.rows) * config.tileWidth / 2 + config.tileWidth * 2,
    y: (config.columns + config.rows) * config.tileHeight / 2 + config.layers * config.layerDepth + config.tileHeight * 2,
  };
}

export function serializeMap(state: MapState): string {
  return JSON.stringify({ version: 1, ...state }, null, 2);
}
