import { STORAGE_KEY } from './types';

export function loadSourceFromStorage(): string | null {
  if (typeof window === 'undefined') return null;
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value?.trim() ? value : null;
  } catch {
    return null;
  }
}

export function saveSourceToStorage(source: string): void {
  if (typeof window === 'undefined') return;
  try {
    if (source.trim()) window.localStorage.setItem(STORAGE_KEY, source);
    else window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    return;
  }
}

export function clearSourceFromStorage(): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    return;
  }
}
