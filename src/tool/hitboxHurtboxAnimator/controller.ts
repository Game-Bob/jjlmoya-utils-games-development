import type { EditorState } from './editor-state';
import type { HitboxHurtboxAnimatorUI } from './ui';
import type { CollisionShape, CollisionType, ShapeGeometry } from './logic';
import { createProject, parseProject, serializeProject } from './logic';
import { bindCanvas } from './canvas-interactions';
import { downloadContactSheet, downloadText, loadLocalImages } from './file-io';
import { formatCopy, renderEditor, setStatus } from './dom-views';
import { loadPreferences, savePreferences } from './storage';
import {
  copyCurrentToAll,
  copyPreviousFrame,
  checkpoint,
  deleteSelected,
  duplicateSelected,
  mirrorSelected,
  redoProject,
  replaceSlicing,
  undoProject,
  updateSelected,
} from './project-actions';

const input = (root: HTMLElement, selector: string): HTMLInputElement | null => root.querySelector<HTMLInputElement>(selector);

function readUi(root: HTMLElement): HitboxHurtboxAnimatorUI {
  const source = root.querySelector<HTMLScriptElement>('[data-role="locale-data"]')?.textContent ?? '{}';
  return JSON.parse(source) as HitboxHurtboxAnimatorUI;
}

function createState(root: HTMLElement): EditorState {
  const preferences = loadPreferences();
  const project = createProject([]);
  project.fps = preferences.fps;
  return { root, ui: readUi(root), project, images: [], currentFrame: 0, selectedId: '', mode: 'draw', collisionType: 'hitbox', geometry: 'rectangle', playing: false, preferences, undoStack: [], redoStack: [] };
}

function stepFrame(state: EditorState, amount: number): void {
  const count = state.project.frames.length;
  if (count === 0) return;
  state.currentFrame = (state.currentFrame + amount + count) % count;
  state.selectedId = '';
  renderEditor(state);
}

function bindPlayback(state: EditorState): (playing: boolean) => void {
  let timer = 0;
  return (playing) => {
    window.clearInterval(timer);
    state.playing = playing;
    if (playing) timer = window.setInterval(() => stepFrame(state, 1), 1000 / state.preferences.fps);
    renderEditor(state);
  };
}

async function loadSprites(state: EditorState, files: File[]): Promise<void> {
  if (files.length === 0) return;
  try {
    const loaded = await loadLocalImages(files);
    state.images = loaded.elements;
    state.project = createProject(loaded.references);
    state.project.fps = state.preferences.fps;
    state.currentFrame = 0;
    state.selectedId = '';
    state.undoStack = [];
    state.redoStack = [];
    setStatus(state, formatCopy(state.ui.statusImageLoaded, { count: files.length }));
    renderEditor(state);
  } catch {
    setStatus(state, state.ui.statusError);
  }
}

function bindFiles(state: EditorState): void {
  const spriteInput = input(state.root, '[data-role="sprite-input"]');
  const projectInput = input(state.root, '[data-role="project-input"]');
  spriteInput?.addEventListener('change', () => void loadSprites(state, Array.from(spriteInput.files ?? [])));
  projectInput?.addEventListener('change', () => void importProject(state, projectInput.files?.[0]));
  const drop = state.root.querySelector<HTMLElement>('[data-role="dropzone"]');
  drop?.addEventListener('dragover', (event) => event.preventDefault());
  drop?.addEventListener('drop', (event) => {
    event.preventDefault();
    void loadSprites(state, Array.from(event.dataTransfer?.files ?? []));
  });
}

async function importProject(state: EditorState, file?: File): Promise<void> {
  if (!file) return;
  try {
    state.project = parseProject(await file.text());
    state.currentFrame = 0;
    state.selectedId = '';
    state.undoStack = [];
    state.redoStack = [];
    setStatus(state, state.ui.statusImported);
    renderEditor(state);
  } catch {
    setStatus(state, state.ui.statusError);
  }
}

function updatePreference(state: EditorState, target: HTMLInputElement): void {
  if (target.dataset.preference === 'fps') {
    state.preferences.fps = Math.max(1, Math.min(30, Number(target.value)));
    state.project.fps = state.preferences.fps;
  }
  if (target.dataset.preference === 'onionPrevious') state.preferences.onionPrevious = target.checked;
  if (target.dataset.preference === 'onionNext') state.preferences.onionNext = target.checked;
  savePreferences(state.preferences);
  renderEditor(state);
}

function bindPreferences(state: EditorState): void {
  const fps = input(state.root, '[data-preference="fps"]');
  const previous = input(state.root, '[data-preference="onionPrevious"]');
  const next = input(state.root, '[data-preference="onionNext"]');
  if (fps) fps.value = String(state.preferences.fps);
  if (previous) previous.checked = state.preferences.onionPrevious;
  if (next) next.checked = state.preferences.onionNext;
  state.root.querySelectorAll<HTMLInputElement>('[data-preference]').forEach((item) => item.addEventListener('input', () => updatePreference(state, item)));
}

function numericUpdate(field: string, value: number): Partial<CollisionShape> {
  if (field === 'radius') return { width: value * 2, height: value * 2 };
  if (field === 'x') return { x: value };
  if (field === 'y') return { y: value };
  if (field === 'width') return { width: value };
  if (field === 'height') return { height: value };
  return {};
}

function updateField(state: EditorState, target: HTMLInputElement): void {
  const field = target.dataset.field ?? '';
  const frame = state.project.frames[state.currentFrame];
  if (!frame) return;
  if (field === 'pivotX') {
    checkpoint(state);
    frame.pivot.x = Math.max(0, Math.min(frame.width, Number(target.value)));
  } else if (field === 'pivotY') {
    checkpoint(state);
    frame.pivot.y = Math.max(0, Math.min(frame.height, Number(target.value)));
  }
  else if (field === 'name') updateSelected(state, { name: target.value });
  else updateSelected(state, numericUpdate(field, Number(target.value)));
  setStatus(state, state.ui.statusShapeUpdated);
  renderEditor(state);
}

function bindFields(state: EditorState): void {
  state.root.querySelectorAll<HTMLInputElement>('[data-field]').forEach((field) => field.addEventListener('change', () => updateField(state, field)));
}

function actionHandlers(state: EditorState, setPlaying: (playing: boolean) => void): Record<string, () => void> {
  return {
    previous: () => stepFrame(state, -1),
    next: () => stepFrame(state, 1),
    play: () => setPlaying(!state.playing),
    slice: () => applySlice(state),
    duplicate: () => runMutation(state, duplicateSelected),
    mirror: () => runMutation(state, mirrorSelected),
    delete: () => runMutation(state, deleteSelected),
    copyPrevious: () => runMutation(state, copyPreviousFrame),
    copyAll: () => runMutation(state, copyCurrentToAll),
    undo: () => runMutation(state, undoProject),
    redo: () => runMutation(state, redoProject),
    exportJson: () => exportJson(state),
    importJson: () => input(state.root, '[data-role="project-input"]')?.click(),
    contactSheet: () => exportSheet(state),
    reset: () => resetState(state),
  };
}

function runMutation(state: EditorState, operation: (value: EditorState) => boolean): void {
  if (!operation(state)) return;
  setStatus(state, state.ui.statusShapeUpdated);
  renderEditor(state);
}

function applySlice(state: EditorState): void {
  const rows = Number(input(state.root, '[data-role="rows"]')?.value ?? 1);
  const columns = Number(input(state.root, '[data-role="columns"]')?.value ?? 1);
  replaceSlicing(state, rows, columns);
  renderEditor(state);
}

function exportJson(state: EditorState): void {
  downloadText(serializeProject(state.project), 'hitbox-animation.json');
  setStatus(state, state.ui.statusExported);
}

function exportSheet(state: EditorState): void {
  downloadContactSheet(state.project, state.images);
  setStatus(state, state.ui.statusExported);
}

function resetState(state: EditorState): void {
  state.project = createProject(state.project.images, state.project.rows, state.project.columns);
  state.project.fps = state.preferences.fps;
  state.currentFrame = 0;
  state.selectedId = '';
  state.undoStack = [];
  state.redoStack = [];
  setStatus(state, state.ui.statusReady);
  renderEditor(state);
}

function bindClicks(state: EditorState, setPlaying: (playing: boolean) => void): void {
  const actions = actionHandlers(state, setPlaying);
  state.root.addEventListener('click', (event) => {
    const target = (event.target as Element).closest<HTMLElement>('[data-action], [data-type], [data-geometry], [data-mode], [data-frame]');
    if (!target) return;
    if (target.dataset.type) state.collisionType = target.dataset.type as CollisionType;
    if (target.dataset.geometry) state.geometry = target.dataset.geometry as ShapeGeometry;
    if (target.dataset.mode) state.mode = target.dataset.mode as EditorState['mode'];
    if (target.dataset.frame !== undefined) state.currentFrame = Number(target.dataset.frame);
    if (target.dataset.action) actions[target.dataset.action]?.();
    renderEditor(state);
  });
}

function bindKeyboard(state: EditorState): void {
  state.root.addEventListener('keydown', (event) => {
    if ((event.target as Element).matches('input')) return;
    const modified = event.ctrlKey || event.metaKey;
    const key = modified ? `mod-${event.key.toLowerCase()}` : event.key;
    const handlers: Record<string, () => void> = {
      ArrowLeft: () => stepFrame(state, -1),
      ArrowRight: () => stepFrame(state, 1),
      Delete: () => runMutation(state, deleteSelected),
      'mod-z': () => runMutation(state, undoProject),
      'mod-y': () => runMutation(state, redoProject),
    };
    handlers[key]?.();
  });
}

export function mountHitboxHurtboxAnimator(root: HTMLElement): void {
  if (root.dataset.ready) return;
  root.dataset.ready = 'true';
  const state = createState(root);
  bindFiles(state);
  bindPreferences(state);
  bindFields(state);
  bindCanvas(state);
  bindClicks(state, bindPlayback(state));
  bindKeyboard(state);
  setStatus(state, state.ui.statusReady);
  renderEditor(state);
}
