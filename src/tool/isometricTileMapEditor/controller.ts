import {
  DEFAULT_CONFIG,
  createMapState,
  eraseCell,
  paintCell,
  resizeMap,
  serializeMap,
  toggleLayerVisibility,
  type MapConfig,
  type MapState,
  type TileType,
} from './logic';
import { createMapSvg, renderLayers, renderMap, renderPalette, renderSummary, setStatus } from './dom-views';
import { clearStoredMapState, loadMapState, saveMapState } from './storage';
import type { IsometricTileMapEditorUI } from './ui';

interface RuntimeData {
  ui: IsometricTileMapEditorUI;
}

interface Elements {
  root: HTMLElement;
  map: HTMLElement;
  palette: HTMLElement;
  layers: HTMLElement;
  summary: HTMLElement;
  status: HTMLElement;
}

function getElements(root: HTMLElement): Elements {
  return {
    root,
    map: root.querySelector<HTMLElement>('[data-map]')!,
    palette: root.querySelector<HTMLElement>('[data-palette]')!,
    layers: root.querySelector<HTMLElement>('[data-layers]')!,
    summary: root.querySelector<HTMLElement>('[data-summary]')!,
    status: root.querySelector<HTMLElement>('[data-status]')!,
  };
}

function parseRuntimeData(root: HTMLElement): RuntimeData {
  const script = root.querySelector<HTMLScriptElement>('[data-runtime-data]');
  return JSON.parse(script?.textContent ?? '{}') as RuntimeData;
}

function updateInputs(root: HTMLElement, state: MapState): void {
  const values = state.config;
  root.querySelectorAll<HTMLInputElement>('[data-config]').forEach((input) => {
    const key = input.dataset.config;
    if (key && key in values) input.value = String(values[key as keyof MapConfig]);
  });
}

function render(elements: Elements, state: MapState, ui: IsometricTileMapEditorUI): void {
  updateInputs(elements.root, state);
  elements.root.querySelectorAll<HTMLElement>('[data-mode]').forEach((button) => {
    const active = button.dataset.mode === state.mode;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  renderMap(elements.map, state, ui);
  renderPalette(elements.palette, state, ui);
  renderLayers(elements.layers, state, ui);
  renderSummary(elements.summary, state, ui);
}

function cellFromTarget(target: HTMLElement): { layer: number; row: number; column: number } | null {
  const cell = target.closest<HTMLElement>('[data-cell]');
  if (!cell) return null;
  return {
    layer: Number(cell.dataset.layer),
    row: Number(cell.dataset.row),
    column: Number(cell.dataset.column),
  };
}

function applyCell(state: MapState, position: { layer: number; row: number; column: number }): MapState {
  return state.mode === 'erase' ? eraseCell(state, position) : paintCell(state, position, state.selectedTile);
}

function saveAndRender(elements: Elements, state: MapState, ui: IsometricTileMapEditorUI, message: string): MapState {
  saveMapState(state);
  render(elements, state, ui);
  setStatus(elements.status, `${message} · ${ui.statusSaved}`);
  return state;
}

function downloadFile(content: string, filename: string, type: string): void {
  const link = document.createElement('a');
  link.href = URL.createObjectURL(new Blob([content], { type }));
  link.download = filename;
  link.click();
  URL.revokeObjectURL(link.href);
}

function updateConfig(elements: Elements, state: MapState, ui: IsometricTileMapEditorUI, input: HTMLInputElement): MapState {
  const key = input.dataset.config as keyof MapConfig;
  const value = Number(input.value);
  if (!key || !Number.isFinite(value)) return state;
  return saveAndRender(elements, resizeMap(state, { ...state.config, [key]: value }), ui, ui.statusSaved);
}

function exportMap(elements: Elements, state: MapState, ui: IsometricTileMapEditorUI, action: string): void {
  const content = action === 'export-json' ? serializeMap(state) : createMapSvg(state, ui).outerHTML;
  const filename = action === 'export-json' ? 'isometric-tile-map.json' : 'isometric-tile-map.svg';
  const type = action === 'export-json' ? 'application/json' : 'image/svg+xml';
  downloadFile(content, filename, type);
  setStatus(elements.status, ui.statusExported);
}

type ActionHandler = (elements: Elements, state: MapState, ui: IsometricTileMapEditorUI, target: HTMLElement) => MapState;

const actionHandlers: Record<string, ActionHandler> = {
  'select-tile': (_elements, state, _ui, target) => ({ ...state, selectedTile: target.dataset.tile as TileType }),
  'select-layer': (_elements, state, _ui, target) => ({ ...state, activeLayer: Number(target.dataset.layer) }),
  'select-mode': (_elements, state, _ui, target) => ({ ...state, mode: target.dataset.mode as MapState['mode'] }),
  'toggle-layer-visibility': (elements, state, ui, target) => {
    const layer = Number(target.dataset.layer);
    const next = toggleLayerVisibility(state, layer);
    return saveAndRender(elements, next, ui, next.visibleLayers[layer] ? ui.statusLayerShown : ui.statusLayerHidden);
  },
  clear: (elements, state, ui) => saveAndRender(elements, { ...createMapState(state.config), activeLayer: state.activeLayer, selectedTile: state.selectedTile, mode: state.mode }, ui, ui.statusCleared),
  reset: (elements, _state, ui) => {
    clearStoredMapState();
    const reset = createMapState(DEFAULT_CONFIG);
    render(elements, reset, ui);
    setStatus(elements.status, ui.statusReset);
    return reset;
  },
  'export-json': (elements, state, ui, _target) => {
    exportMap(elements, state, ui, 'export-json');
    return state;
  },
  'export-svg': (elements, state, ui, _target) => {
    exportMap(elements, state, ui, 'export-svg');
    return state;
  },
};

function handleAction(elements: Elements, state: MapState, ui: IsometricTileMapEditorUI, actionTarget: HTMLElement): MapState {
  return actionHandlers[actionTarget.dataset.action ?? '']?.(elements, state, ui, actionTarget) ?? state;
}

function bindEvents(elements: Elements, ui: IsometricTileMapEditorUI, initial: MapState): void {
  let state = initial;
  elements.root.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    const actionTarget = target.closest<HTMLElement>('[data-action]');
    if (actionTarget) {
      state = handleAction(elements, state, ui, actionTarget);
      render(elements, state, ui);
      return;
    }
    const position = cellFromTarget(target);
    if (position) state = saveAndRender(elements, applyCell(state, position), ui, state.mode === 'erase' ? ui.statusErased : ui.statusPainted);
  });
  elements.root.addEventListener('contextmenu', (event) => {
    const target = event.target as HTMLElement;
    const position = cellFromTarget(target);
    if (!position) return;
    event.preventDefault();
    state = saveAndRender(elements, eraseCell(state, position), ui, ui.statusErased);
  });
  elements.root.addEventListener('input', (event) => {
    const input = event.target as HTMLInputElement;
    if (input.matches('[data-config]')) state = updateConfig(elements, state, ui, input);
  });
}

function init(root: HTMLElement): void {
  const { ui } = parseRuntimeData(root);
  const elements = getElements(root);
  const state = loadMapState() ?? createMapState();
  render(elements, state, ui);
  bindEvents(elements, ui, state);
}

function start(): void {
  document.querySelectorAll<HTMLElement>('[data-isometric-tool]').forEach(init);
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
else start();
