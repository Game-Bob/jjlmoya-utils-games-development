import type { EditorState } from './editor-state';
import type { CollisionShape } from './logic';
import {
  clampShape,
  cloneProject,
  copyShapesToFrame,
  createProject,
  createShape,
  duplicateShape,
  mirrorShape,
  moveShape,
} from './logic';

export function checkpoint(state: EditorState): void {
  state.undoStack.push(cloneProject(state.project));
  if (state.undoStack.length > 50) state.undoStack.shift();
  state.redoStack = [];
}

export function undoProject(state: EditorState): boolean {
  const previous = state.undoStack.pop();
  if (!previous) return false;
  state.redoStack.push(cloneProject(state.project));
  state.project = previous;
  normalizeSelection(state);
  return true;
}

export function redoProject(state: EditorState): boolean {
  const next = state.redoStack.pop();
  if (!next) return false;
  state.undoStack.push(cloneProject(state.project));
  state.project = next;
  normalizeSelection(state);
  return true;
}

function normalizeSelection(state: EditorState): void {
  state.currentFrame = Math.min(state.currentFrame, Math.max(0, state.project.frames.length - 1));
  const exists = state.project.frames[state.currentFrame]?.shapes.some(({ id }) => id === state.selectedId);
  if (!exists) state.selectedId = '';
}

export function replaceSlicing(state: EditorState, rows: number, columns: number): void {
  if (state.project.images.length !== 1) return;
  checkpoint(state);
  const next = createProject(state.project.images, rows, columns);
  next.fps = state.project.fps;
  state.project = next;
  state.currentFrame = 0;
  state.selectedId = '';
}

export function addDrawnShape(state: EditorState, start: { x: number; y: number }, end: { x: number; y: number }): boolean {
  const frame = state.project.frames[state.currentFrame];
  if (!frame || Math.abs(end.x - start.x) < 1 || Math.abs(end.y - start.y) < 1) return false;
  checkpoint(state);
  const typeName = state.ui[`type${state.collisionType[0]?.toUpperCase()}${state.collisionType.slice(1)}`] ?? state.collisionType;
  const shape = createShape({ frame, type: state.collisionType, geometry: state.geometry, startX: start.x, startY: start.y, endX: end.x, endY: end.y, name: `${typeName} ${frame.shapes.length + 1}` });
  frame.shapes.push(shape);
  state.selectedId = shape.id;
  return true;
}

export function updateSelected(state: EditorState, update: Partial<CollisionShape>): boolean {
  const frame = state.project.frames[state.currentFrame];
  const index = frame?.shapes.findIndex(({ id }) => id === state.selectedId) ?? -1;
  if (!frame || index < 0) return false;
  checkpoint(state);
  frame.shapes[index] = clampShape({ ...frame.shapes[index]!, ...update }, frame);
  return true;
}

export function moveSelected(state: EditorState, deltaX: number, deltaY: number): boolean {
  const frame = state.project.frames[state.currentFrame];
  const index = frame?.shapes.findIndex(({ id }) => id === state.selectedId) ?? -1;
  if (!frame || index < 0) return false;
  frame.shapes[index] = moveShape(frame.shapes[index]!, frame, deltaX, deltaY);
  return true;
}

export function deleteSelected(state: EditorState): boolean {
  const frame = state.project.frames[state.currentFrame];
  const index = frame?.shapes.findIndex(({ id }) => id === state.selectedId) ?? -1;
  if (!frame || index < 0) return false;
  checkpoint(state);
  frame.shapes.splice(index, 1);
  state.selectedId = '';
  return true;
}

export function duplicateSelected(state: EditorState): boolean {
  const frame = state.project.frames[state.currentFrame];
  const shape = frame?.shapes.find(({ id }) => id === state.selectedId);
  if (!frame || !shape) return false;
  checkpoint(state);
  const duplicate = duplicateShape(shape, frame);
  frame.shapes.push(duplicate);
  state.selectedId = duplicate.id;
  return true;
}

export function mirrorSelected(state: EditorState): boolean {
  const frame = state.project.frames[state.currentFrame];
  const index = frame?.shapes.findIndex(({ id }) => id === state.selectedId) ?? -1;
  if (!frame || index < 0) return false;
  checkpoint(state);
  frame.shapes[index] = mirrorShape(frame.shapes[index]!, frame.width);
  return true;
}

export function copyPreviousFrame(state: EditorState): boolean {
  const target = state.project.frames[state.currentFrame];
  const source = state.project.frames[state.currentFrame - 1];
  if (!source || !target) return false;
  checkpoint(state);
  state.project.frames[state.currentFrame] = copyShapesToFrame(source, target);
  state.selectedId = '';
  return true;
}

export function copyCurrentToAll(state: EditorState): boolean {
  const source = state.project.frames[state.currentFrame];
  if (!source) return false;
  checkpoint(state);
  state.project.frames = state.project.frames.map((frame) => frame.index === source.index ? frame : copyShapesToFrame(source, frame));
  return true;
}
