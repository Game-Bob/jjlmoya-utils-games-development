import type { LoopConfig } from './logic';

const STORAGE_KEY = 'jjlmoya-game-delta-time-lab';

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

export function loadLoopConfig(): Partial<LoopConfig> {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed: unknown = raw ? JSON.parse(raw) : {};
    return isRecord(parsed) ? parsed as Partial<LoopConfig> : {};
  } catch {
    return {};
  }
}

export function saveLoopConfig(config: LoopConfig): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  } catch {}
}
