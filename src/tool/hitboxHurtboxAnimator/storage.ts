export interface EditorPreferences {
  fps: number;
  onionPrevious: boolean;
  onionNext: boolean;
}

const STORAGE_KEY = 'jjlmoya-hitbox-animator-preferences';
const defaults: EditorPreferences = { fps: 12, onionPrevious: true, onionNext: true };

export function loadPreferences(): EditorPreferences {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '') as Partial<EditorPreferences>;
    return {
      fps: typeof parsed.fps === 'number' ? parsed.fps : defaults.fps,
      onionPrevious: typeof parsed.onionPrevious === 'boolean' ? parsed.onionPrevious : defaults.onionPrevious,
      onionNext: typeof parsed.onionNext === 'boolean' ? parsed.onionNext : defaults.onionNext,
    };
  } catch {
    return { ...defaults };
  }
}

export function savePreferences(preferences: EditorPreferences): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
  } catch {}
}
