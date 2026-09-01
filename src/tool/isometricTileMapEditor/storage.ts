import type { MapState } from './logic';

const STORAGE_KEY = 'jjlmoya:isometric-tile-map-editor:v1';

function isStoredState(value: unknown): value is MapState {
  if (!value || typeof value !== 'object') return false;
  const candidate = value as Partial<MapState>;
  return Boolean(candidate.config && candidate.cells && typeof candidate.activeLayer === 'number');
}

function hydrateVisibility(state: MapState): MapState {
  return {
    ...state,
    visibleLayers: Array.from({ length: state.config.layers }, (_, layer) => state.visibleLayers?.[layer] ?? true),
  };
}

export function loadMapState(): MapState | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    return isStoredState(parsed) ? hydrateVisibility(parsed) : null;
  } catch {
    return null;
  }
}

export function saveMapState(state: MapState): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    return;
  }
}

export function clearStoredMapState(): void {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    return;
  }
}
