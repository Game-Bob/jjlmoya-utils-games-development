import type { InputBufferWindowConfig } from './logic';

const STORAGE_KEY = 'game-input-buffer-window-calculator';

export function loadInputBufferWindowConfig(): Partial<InputBufferWindowConfig> {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    if (!value) return {};
    const parsed: unknown = JSON.parse(value);
    return parsed && typeof parsed === 'object' ? parsed as Partial<InputBufferWindowConfig> : {};
  } catch {
    return {};
  }
}

export function saveInputBufferWindowConfig(config: InputBufferWindowConfig): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  } catch {
  }
}
