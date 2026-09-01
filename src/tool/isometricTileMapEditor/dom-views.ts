import {
  TILE_TYPES,
  cellPolygon,
  mapSize,
  type CellPosition,
  type MapState,
  type TileType,
} from './logic';
import { evaluateMap, tileLabel } from './evaluator';
import type { IsometricTileMapEditorUI } from './ui';

const SVG_NS = 'http://www.w3.org/2000/svg';

function svgElement<K extends keyof SVGElementTagNameMap>(tag: K): SVGElementTagNameMap[K] {
  return document.createElementNS(SVG_NS, tag);
}

function pointsAttribute(points: { x: number; y: number }[]): string {
  return points.map((point) => `${point.x},${point.y}`).join(' ');
}

function cellLabel(state: MapState, ui: IsometricTileMapEditorUI, position: CellPosition): string {
  const tile = state.cells[position.layer]![position.row]![position.column]!;
  const tileName = tile ? tileLabel(tile, ui) : ui.emptyCellLabel;
  return `${ui.layerLabel} ${position.layer + 1}, ${ui.cellLabel} ${position.column + 1}, ${position.row + 1}, ${tileName}`;
}

function createCell(state: MapState, ui: IsometricTileMapEditorUI, position: CellPosition): SVGPolygonElement {
  const cell = svgElement('polygon');
  const tile = state.cells[position.layer]![position.row]![position.column]!;
  cell.setAttribute('points', pointsAttribute(cellPolygon(state.config, position)));
  cell.dataset.cell = 'true';
  cell.dataset.layer = String(position.layer);
  cell.dataset.row = String(position.row);
  cell.dataset.column = String(position.column);
  cell.setAttribute('tabindex', '0');
  cell.setAttribute('role', 'button');
  cell.setAttribute('aria-label', cellLabel(state, ui, position));
  cell.classList.add('iso-cell', `iso-cell-layer-${position.layer}`);
  if (tile) cell.classList.add(`iso-tile-${tile}`);
  if (position.layer === state.activeLayer) cell.classList.add('iso-cell-active-layer');
  return cell;
}

export function createMapSvg(state: MapState, ui: IsometricTileMapEditorUI): SVGSVGElement {
  const size = mapSize(state.config);
  const svg = svgElement('svg');
  svg.setAttribute('viewBox', `0 0 ${size.x} ${size.y}`);
  svg.setAttribute('role', 'img');
  svg.setAttribute('aria-label', ui.mapAriaLabel);
  svg.setAttribute('xmlns', SVG_NS);
  for (let layer = 0; layer < state.config.layers; layer += 1) {
    if (!state.visibleLayers[layer]) continue;
    for (let row = 0; row < state.config.rows; row += 1) {
      for (let column = 0; column < state.config.columns; column += 1) {
        svg.append(createCell(state, ui, { layer, row, column }));
      }
    }
  }
  return svg;
}

export function renderMap(target: HTMLElement, state: MapState, ui: IsometricTileMapEditorUI): void {
  target.replaceChildren(createMapSvg(state, ui));
}

function createPaletteButton(tile: TileType, state: MapState, ui: IsometricTileMapEditorUI): HTMLButtonElement {
  const button = document.createElement('button');
  button.type = 'button';
  button.dataset.action = 'select-tile';
  button.dataset.tile = tile;
  button.className = 'iso-palette-button';
  button.classList.toggle('is-active', state.selectedTile === tile);
  button.setAttribute('aria-pressed', String(state.selectedTile === tile));
  button.textContent = tileLabel(tile, ui);
  return button;
}

export function renderPalette(target: HTMLElement, state: MapState, ui: IsometricTileMapEditorUI): void {
  target.replaceChildren(...TILE_TYPES.map((tile) => createPaletteButton(tile, state, ui)));
}

export function renderLayers(target: HTMLElement, state: MapState, ui: IsometricTileMapEditorUI): void {
  const rows = Array.from({ length: state.config.layers }, (_, layer) => {
    const row = document.createElement('div');
    row.className = 'iso-layer-row';

    const selectButton = document.createElement('button');
    selectButton.type = 'button';
    selectButton.dataset.action = 'select-layer';
    selectButton.dataset.layer = String(layer);
    selectButton.className = 'iso-layer-button';
    selectButton.classList.toggle('is-active', state.activeLayer === layer);
    selectButton.classList.toggle('is-hidden', !state.visibleLayers[layer]);
    selectButton.setAttribute('aria-pressed', String(state.activeLayer === layer));
    selectButton.textContent = `${ui.layerLabel} ${layer + 1}`;

    const visibilityButton = document.createElement('button');
    visibilityButton.type = 'button';
    visibilityButton.dataset.action = 'toggle-layer-visibility';
    visibilityButton.dataset.layer = String(layer);
    visibilityButton.className = 'iso-layer-visibility';
    const visible = state.visibleLayers[layer];
    visibilityButton.setAttribute('aria-pressed', String(visible));
    visibilityButton.setAttribute('aria-label', `${visible ? ui.hideLayerLabel : ui.showLayerLabel} ${ui.layerLabel} ${layer + 1}`);
    visibilityButton.title = visible ? ui.hideLayerLabel : ui.showLayerLabel;
    visibilityButton.textContent = visible ? ui.hideLayerLabel : ui.showLayerLabel;
    row.append(selectButton, visibilityButton);
    return row;
  });
  target.replaceChildren(...rows);
}

export function renderSummary(target: HTMLElement, state: MapState, ui: IsometricTileMapEditorUI): void {
  const summary = evaluateMap(state, ui);
  target.replaceChildren(
    summaryItem(ui.filledLabel, `${summary.filled} / ${summary.total}`),
    summaryItem(ui.coverageLabel, summary.coverage),
    summaryItem(ui.activeLayerLabel, summary.activeLayer),
    summaryItem(ui.selectedLabel, summary.selectedTile),
  );
}

function summaryItem(label: string, value: string): HTMLElement {
  const item = document.createElement('div');
  item.className = 'iso-summary-item';
  const labelElement = document.createElement('span');
  labelElement.className = 'iso-summary-label';
  labelElement.textContent = label;
  const valueElement = document.createElement('strong');
  valueElement.className = 'iso-summary-value';
  valueElement.textContent = value;
  item.append(labelElement, valueElement);
  return item;
}

export function setStatus(target: HTMLElement, text: string): void {
  target.textContent = text;
}
