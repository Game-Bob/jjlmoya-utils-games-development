import type { SimulationMode } from './logic';

export interface StoredSettings {
  mode: SimulationMode;
  compare: 'side' | 'split' | 'press';
  blur: number;
  downscale: number;
  zoom: number;
  heatmap: boolean;
}

const STORAGE_KEY = 'game-ui-accessibility-stress-tester-settings';

export function loadSettings(fallback: StoredSettings): StoredSettings {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    if (!value) return fallback;
    return { ...fallback, ...JSON.parse(value) as Partial<StoredSettings> };
  } catch {
    return fallback;
  }
}

export function saveSettings(settings: StoredSettings): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  } catch {}
}

export function clearSettings(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {}
}
