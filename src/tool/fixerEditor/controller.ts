import { renderEditor } from './dom-views';
import { summarizeEditor } from './evaluator';
import { createDefaultAdjustment, createFrameSpecs, createHistoryState, createProjectFile, DEFAULT_GRID, nudgeAdjustment, recalculateGrid, updateAdjustment, cloneAdjustments, normalizeGrid } from './logic';
import { trimAll, trimFrame } from './auto-trim';
import { createInitialState } from './state';
import { applyProjectToContext, bindEvents } from './events';
import { animate, autoDetectGrid, loadImage, restoreDraftImage } from './runtime';
import { loadDraft, saveDraft } from './storage';
import type { FixerEditorUI } from './ui';
import type { DraftSession, FrameAdjustment, FrameSpec, GridSettings, HistoryState, ProjectFile } from './types';
import type { EditorRefs } from './dom-views';

export interface EditorState {
  image: HTMLImageElement | null;
  imageDataUrl?: string;
  sourceName: string;
  grid: GridSettings;
  frames: FrameSpec[];
  adjustments: Record<string, FrameAdjustment>;
  selected: number;
  step: number;
  zoom: number;
  fps: number;
  playing: boolean;
  animationId: number | null;
  history: HistoryState[];
  future: HistoryState[];
  pendingProject: ProjectFile | null;
}

export interface ControllerContext {
  refs: EditorRefs;
  ui: FixerEditorUI;
  state: EditorState;
  tools: HTMLElement;
  updateView: (statusText: string) => void;
  animate: () => void;
  persistDraft: () => void;
  recordHistory: () => void;
}

export interface EditorInputs {
  columns: HTMLInputElement;
  rows: HTMLInputElement;
  'cell-width': HTMLInputElement;
  'cell-height': HTMLInputElement;
  'margin-x': HTMLInputElement;
  'margin-y': HTMLInputElement;
  'gap-x': HTMLInputElement;
  'gap-y': HTMLInputElement;
  'crop-x': HTMLInputElement;
  'crop-y': HTMLInputElement;
  'crop-width': HTMLInputElement;
  'crop-height': HTMLInputElement;
  'offset-x': HTMLInputElement;
  'offset-y': HTMLInputElement;
}

function required<T extends Element>(root: ParentNode, id: string): T {
  const element = root.querySelector(`#${id}`);
  if (!element) throw new Error(`Missing fixer-editor element: ${id}`);
  return element as T;
}

function getRefs(shell: HTMLElement): EditorRefs {
  return {
    shell,
    sourceCanvas: required<HTMLCanvasElement>(shell, 'fe-source-canvas'),
    resultCanvas: required<HTMLCanvasElement>(shell, 'fe-result-canvas'),
    frameCanvas: required<HTMLCanvasElement>(shell, 'fe-frame-canvas'),
    filmstrip: required<HTMLElement>(shell, 'fe-filmstrip'),
    status: required<HTMLElement>(shell, 'fe-status'),
    sourceName: required<HTMLElement>(shell, 'fe-source-name'),
    frameNumber: required<HTMLElement>(shell, 'fe-frame-number'),
    frameState: required<HTMLElement>(shell, 'fe-frame-state'),
    frameCount: required<HTMLElement>(shell, 'fe-frame-count'),
    correctionCount: required<HTMLElement>(shell, 'fe-correction-count'),
    imageSize: required<HTMLElement>(shell, 'fe-image-size'),
    workbench: required<HTMLElement>(shell, 'fe-workbench'),
    exportSheet: required<HTMLButtonElement>(shell, 'fe-export-sheet'),
    exportJson: required<HTMLButtonElement>(shell, 'fe-export-json'),
    loadProject: required<HTMLInputElement>(shell, 'fe-load-project'),
  };
}

function getInputs(shell: HTMLElement): EditorInputs {
  return {
    columns: required<HTMLInputElement>(shell, 'fe-columns'),
    rows: required<HTMLInputElement>(shell, 'fe-rows'),
    'cell-width': required<HTMLInputElement>(shell, 'fe-cell-width'),
    'cell-height': required<HTMLInputElement>(shell, 'fe-cell-height'),
    'margin-x': required<HTMLInputElement>(shell, 'fe-margin-x'),
    'margin-y': required<HTMLInputElement>(shell, 'fe-margin-y'),
    'gap-x': required<HTMLInputElement>(shell, 'fe-gap-x'),
    'gap-y': required<HTMLInputElement>(shell, 'fe-gap-y'),
    'crop-x': required<HTMLInputElement>(shell, 'fe-crop-x'),
    'crop-y': required<HTMLInputElement>(shell, 'fe-crop-y'),
    'crop-width': required<HTMLInputElement>(shell, 'fe-crop-width'),
    'crop-height': required<HTMLInputElement>(shell, 'fe-crop-height'),
    'offset-x': required<HTMLInputElement>(shell, 'fe-offset-x'),
    'offset-y': required<HTMLInputElement>(shell, 'fe-offset-y'),
  };
}

function readGrid(inputs: EditorInputs): GridSettings {
  return normalizeGrid({ columns: Number(inputs.columns.value), rows: Number(inputs.rows.value), cellWidth: Number(inputs['cell-width'].value), cellHeight: Number(inputs['cell-height'].value), marginX: Number(inputs['margin-x'].value), marginY: Number(inputs['margin-y'].value), gapX: Number(inputs['gap-x'].value), gapY: Number(inputs['gap-y'].value) });
}

function writeGrid(inputs: EditorInputs, grid: GridSettings): void {
  inputs.columns.value = String(grid.columns);
  inputs.rows.value = String(grid.rows);
  inputs['cell-width'].value = String(grid.cellWidth);
  inputs['cell-height'].value = String(grid.cellHeight);
  inputs['margin-x'].value = String(grid.marginX);
  inputs['margin-y'].value = String(grid.marginY);
  inputs['gap-x'].value = String(grid.gapX);
  inputs['gap-y'].value = String(grid.gapY);
}

function getAdjustment(state: EditorState): FrameAdjustment {
  const frame = state.frames[state.selected];
  return frame ? state.adjustments[String(frame.index)] ?? createDefaultAdjustment(frame.width, frame.height) : createDefaultAdjustment(1, 1);
}

function writeAdjustment(shell: HTMLElement, adjustment: FrameAdjustment): void {
  const values: Record<string, number> = { 'crop-x': adjustment.crop.x, 'crop-y': adjustment.crop.y, 'crop-width': adjustment.crop.width, 'crop-height': adjustment.crop.height, 'offset-x': adjustment.offsetX, 'offset-y': adjustment.offsetY };
  Object.entries(values).forEach(([id, value]) => { required<HTMLInputElement>(shell, `fe-${id}`).value = String(value); });
}

function snapshot(state: EditorState): HistoryState {
  return createHistoryState(state.grid, state.adjustments, state.selected);
}

function recordHistory(state: EditorState): void {
  state.history.push(snapshot(state));
  state.history = state.history.slice(-40);
  state.future = [];
}

function restoreState(context: ControllerContext, historyState: HistoryState): void {
  const { state } = context;
  state.grid = historyState.grid;
  state.adjustments = cloneAdjustments(historyState.adjustments);
  state.selected = Math.min(historyState.selected, Math.max(0, state.frames.length - 1));
  state.frames = state.image ? createFrameSpecs(state.image.naturalWidth, state.image.naturalHeight, state.grid) : [];
  updateView(context, context.ui.ready);
}

function updateView(context: ControllerContext, statusText: string): void {
  const { refs, state, ui } = context;
  const summary = state.image ? summarizeEditor({ frames: state.frames, adjustments: state.adjustments, imageWidth: state.image.naturalWidth, imageHeight: state.image.naturalHeight }) : null;
  context.tools.hidden = !state.image;
  renderEditor({ refs, image: state.image, frames: state.frames, adjustments: state.adjustments, grid: state.grid, selected: state.selected, zoom: state.zoom, sourceName: state.sourceName, statusText, noImageText: ui.noImage, modifiedText: ui.modified, unchangedText: ui.unchanged, selectFrameText: ui.selectFrame });
  if (state.image) writeGrid(getInputs(context.refs.shell), state.grid);
  if (summary) refs.correctionCount.textContent = String(summary.modifiedCount);
  if (state.frames[state.selected]) writeAdjustment(context.refs.shell, getAdjustment(state));
  context.persistDraft();
}

function getDraftSession(state: EditorState): DraftSession {
  return { selected: state.selected, step: state.step, zoom: state.zoom, fps: state.fps };
}

function persistState(context: ControllerContext): void {
  const { state } = context;
  if (!state.image) return;
  const project = createProjectFile({ sourceName: state.sourceName, sourceWidth: state.image.naturalWidth, sourceHeight: state.image.naturalHeight, grid: state.grid, adjustments: state.adjustments });
  saveDraft(project, getDraftSession(state));
}

function updateGrid(context: ControllerContext, inputs: EditorInputs, changed: keyof EditorInputs): void {
  const { state, ui } = context;
  recordHistory(state);
  state.grid = readGrid(inputs);
  if (state.image && changed === 'cell-width') state.grid = recalculateGrid(state.grid, state.image.naturalWidth, state.image.naturalHeight, 'columns');
  if (state.image && changed === 'cell-height') state.grid = recalculateGrid(state.grid, state.image.naturalWidth, state.image.naturalHeight, 'rows');
  writeGrid(inputs, state.grid);
  state.frames = state.image ? createFrameSpecs(state.image.naturalWidth, state.image.naturalHeight, state.grid) : [];
  state.selected = Math.min(state.selected, Math.max(0, state.frames.length - 1));
  updateView(context, ui.ready);
}

function updateSelectedAdjustment(context: ControllerContext, inputs: EditorInputs): void {
  const { state, ui } = context;
  const frame = state.frames[state.selected];
  if (!frame) return;
  recordHistory(state);
  const patch = { crop: { x: Number(inputs['crop-x'].value), y: Number(inputs['crop-y'].value), width: Number(inputs['crop-width'].value), height: Number(inputs['crop-height'].value) }, offsetX: Number(inputs['offset-x'].value), offsetY: Number(inputs['offset-y'].value) };
  state.adjustments[String(frame.index)] = updateAdjustment(frame, getAdjustment(state), patch);
  updateView(context, ui.ready);
}

function selectFrame(context: ControllerContext, index: number): void {
  const { state, ui } = context;
  state.selected = Math.max(0, Math.min(index, state.frames.length - 1));
  updateView(context, ui.ready);
}

function nudge(context: ControllerContext, axis: 'x' | 'y', direction: number): void {
  const { state, ui } = context;
  const frame = state.frames[state.selected];
  if (!frame) return;
  recordHistory(state);
  state.adjustments[String(frame.index)] = nudgeAdjustment(frame, getAdjustment(state), axis, direction * state.step);
  updateView(context, ui.ready);
}

function resetFrame(context: ControllerContext): void {
  const { state, ui } = context;
  const frame = state.frames[state.selected];
  if (!frame) return;
  recordHistory(state);
  state.adjustments[String(frame.index)] = createDefaultAdjustment(frame.width, frame.height);
  updateView(context, ui.ready);
}

function resetAll(context: ControllerContext): void {
  const { state, ui } = context;
  recordHistory(state);
  state.adjustments = {};
  state.grid = DEFAULT_GRID;
  state.frames = state.image ? createFrameSpecs(state.image.naturalWidth, state.image.naturalHeight, state.grid) : [];
  state.selected = 0;
  updateView(context, ui.ready);
}

function undo(context: ControllerContext): void {
  const { state } = context;
  const previous = state.history.pop();
  if (!previous) return;
  state.future.push(snapshot(state));
  restoreState(context, previous);
}

function redo(context: ControllerContext): void {
  const { state } = context;
  const next = state.future.pop();
  if (!next) return;
  state.history.push(snapshot(state));
  restoreState(context, next);
}

function createActions(context: ControllerContext) {
  return {
    loadImage: loadImage.bind(null, context),
    updateGrid: updateGrid.bind(null, context),
    updateSelectedAdjustment: updateSelectedAdjustment.bind(null, context),
    selectFrame: selectFrame.bind(null, context),
    nudge: nudge.bind(null, context),
    trimFrame: trimFrame.bind(null, context),
    trimAll: trimAll.bind(null, context),
    resetFrame: resetFrame.bind(null, context),
    resetAll: resetAll.bind(null, context),
    undo: undo.bind(null, context),
    redo: redo.bind(null, context),
    applyProject: applyProjectToContext.bind(null, context),
  };
}

export function initFixerEditor(): void {
  const shell = document.querySelector<HTMLElement>('[data-tool="fixer-editor"]');
  if (!shell || shell.dataset.initialized) return;
  shell.dataset.initialized = 'true';
  const ui = JSON.parse(shell.dataset.ui ?? '{}') as FixerEditorUI;
  const refs = getRefs(shell);
  const tools = required<HTMLElement>(shell, 'fe-tools');
  const draft = loadDraft();
  const state = createInitialState(draft);
  const context: ControllerContext = { refs, ui, state, tools, updateView: (statusText) => updateView(context, statusText), animate: () => animate(context), persistDraft: () => persistState(context), recordHistory: () => recordHistory(state) };
  const inputs = getInputs(shell);
  writeGrid(inputs, state.grid);
  updateView(context, ui.statusEmpty);
  bindEvents({ context, inputs, actions: { ...createActions(context), autoDetect: () => autoDetectGrid(context) } });
  if (state.imageDataUrl) restoreDraftImage(context, state.imageDataUrl, state.sourceName);
}
