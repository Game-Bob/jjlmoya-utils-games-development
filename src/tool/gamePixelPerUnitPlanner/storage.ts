import type { PixelPerUnitConfig } from './logic';

const STORAGE_KEY = 'jjlmoya-game-pixel-per-unit-planner';

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

export function loadPixelConfig(): Partial<PixelPerUnitConfig> {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed: unknown = raw ? JSON.parse(raw) : {};
    return isRecord(parsed) ? parsed as Partial<PixelPerUnitConfig> : {};
  } catch {
    return {};
  }
}

export function savePixelConfig(config: PixelPerUnitConfig): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  } catch {}
}
