import type { EditorState } from './editor-state';
import { renderDraft, renderEditor, setStatus } from './dom-views';
import { canvasPoint } from './canvas-metrics';
import { shapeAtPoint } from './logic';
import { addDrawnShape, checkpoint, moveSelected } from './project-actions';

interface PointerSession {
  start: { x: number; y: number };
  last: { x: number; y: number };
  dragging: boolean;
  checkpointed: boolean;
}

export function bindCanvas(state: EditorState): void {
  const canvas = state.root.querySelector<HTMLCanvasElement>('[data-role="stage"]');
  if (!canvas) return;
  let session: PointerSession | undefined;
  canvas.addEventListener('pointerdown', (event) => {
    const point = canvasPoint(canvas, event);
    session = { start: point, last: point, dragging: false, checkpointed: false };
    canvas.setPointerCapture(event.pointerId);
    if (state.mode === 'draw') return;
    const frame = state.project.frames[state.currentFrame];
    state.selectedId = frame ? shapeAtPoint(frame.shapes, point.x, point.y)?.id ?? '' : '';
    renderEditor(state);
  });
  canvas.addEventListener('pointermove', (event) => movePointer(state, canvas, event, session));
  canvas.addEventListener('pointerup', (event) => {
    endPointer(state, canvas, event, session);
    session = undefined;
  });
  canvas.addEventListener('pointercancel', () => {
    session = undefined;
    renderEditor(state);
  });
}

function movePointer(state: EditorState, canvas: HTMLCanvasElement, event: PointerEvent, session?: PointerSession): void {
  if (!session) return;
  const point = canvasPoint(canvas, event);
  session.dragging = Math.abs(point.x - session.start.x) > 0.5 || Math.abs(point.y - session.start.y) > 0.5;
  if (state.mode === 'draw') {
    renderDraft(state, session.start, point);
  } else if (state.selectedId && session.dragging) {
    if (!session.checkpointed) checkpoint(state);
    session.checkpointed = true;
    moveSelected(state, point.x - session.last.x, point.y - session.last.y);
    renderEditor(state);
  }
  session.last = point;
}

function endPointer(state: EditorState, canvas: HTMLCanvasElement, event: PointerEvent, session?: PointerSession): void {
  if (!session) return;
  const point = canvasPoint(canvas, event);
  if (state.mode === 'draw' && addDrawnShape(state, session.start, point)) setStatus(state, state.ui.statusShapeCreated);
  else if (session.checkpointed) setStatus(state, state.ui.statusShapeUpdated);
  renderEditor(state);
}
