import { DEFAULT_GRID } from './logic';
import type { EditorState } from './controller';
import type { DraftFile } from './types';

export function createInitialState(draft: DraftFile | null): EditorState {
  const saved = { sourceName: '', grid: DEFAULT_GRID, adjustments: {}, selected: 0, step: 1, zoom: 3, fps: 12, ...(draft || {}) };
  const state: EditorState = { image: null, sourceName: saved.sourceName, grid: saved.grid, frames: [], adjustments: saved.adjustments, selected: saved.selected, step: saved.step, zoom: saved.zoom, fps: saved.fps, playing: false, animationId: null, history: [], future: [], pendingProject: draft };
  if (saved.sourceImage) state.imageDataUrl = saved.sourceImage;
  return state;
}
