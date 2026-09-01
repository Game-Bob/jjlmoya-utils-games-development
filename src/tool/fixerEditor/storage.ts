import { clamp, parseProjectFile } from './logic';
import type { DraftFile, DraftSession, ProjectFile } from './types';

const STORAGE_KEY = 'jjlmoya-fixer-editor-draft-v1';
const IMAGE_KEY = 'jjlmoya-fixer-editor-image-v1';

export function saveDraft(project: ProjectFile, session: DraftSession): boolean {
  try {
    const draft = { ...project, ...session };
    delete draft.sourceImage;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
    return true;
  } catch {
    return false;
  }
}

export function loadDraft(): DraftFile | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const value = JSON.parse(raw) as unknown;
    const project = parseProjectFile(value);
    const sourceImage = loadDraftImage();
    return project ? { ...project, ...readDraftSession(value), ...(sourceImage ? { sourceImage } : {}) } : null;
  } catch {
    return null;
  }
}

export function saveDraftImage(sourceImage: string): boolean {
  try {
    localStorage.setItem(IMAGE_KEY, sourceImage);
    return true;
  } catch {
    return false;
  }
}

function loadDraftImage(): string | null {
  try {
    const sourceImage = localStorage.getItem(IMAGE_KEY);
    return sourceImage && sourceImage.startsWith('data:image/') ? sourceImage : null;
  } catch {
    return null;
  }
}

function readDraftSession(value: unknown): DraftSession {
  const candidate = value && typeof value === 'object' ? value as Partial<DraftSession> : {};
  const session: DraftSession = { selected: readInteger(candidate.selected, 0, 8192, 0), step: readInteger(candidate.step, 1, 4, 1), zoom: readInteger(candidate.zoom, 1, 8, 3), fps: readInteger(candidate.fps, 1, 30, 12) };
  if (typeof candidate.sourceImage === 'string') session.sourceImage = candidate.sourceImage;
  return session;
}

function readInteger(value: unknown, min: number, max: number, fallback: number): number {
  if (typeof value !== 'number' || !Number.isInteger(value)) return fallback;
  return clamp(value, min, max);
}

export function clearDraft(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(IMAGE_KEY);
  } catch {
    return;
  }
}
