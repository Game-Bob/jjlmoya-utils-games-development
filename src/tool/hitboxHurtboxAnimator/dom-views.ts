import type { EditorState } from './editor-state';
import type { AnimationFrame, CollisionShape, CollisionType } from './logic';
import { evaluateProject } from './evaluator';

const COLORS: Record<CollisionType, string> = {
  hitbox: '#ff4d6d',
  hurtbox: '#2dd4bf',
  pushbox: '#8b5cf6',
  grabbox: '#f59e0b',
  sensor: '#38bdf8',
  custom: '#f472b6',
};

const element = <T extends Element>(root: ParentNode, selector: string): T | null => root.querySelector<T>(selector);

export function formatCopy(template: string, values: Record<string, string | number>): string {
  return Object.entries(values).reduce((copy, [key, value]) => copy.replace(`{${key}}`, String(value)), template);
}

interface ShapePaint {
  context: CanvasRenderingContext2D;
  shape: CollisionShape;
  scale: number;
  selected: boolean;
  alpha?: number | undefined;
}

function drawShape(input: ShapePaint): void {
  const { context, shape, scale, selected } = input;
  const alpha = input.alpha ?? 1;
  const color = COLORS[shape.type];
  context.save();
  context.globalAlpha = alpha;
  context.fillStyle = `${color}33`;
  context.strokeStyle = selected ? '#fff' : color;
  context.lineWidth = selected ? 3 : 2;
  context.setLineDash(selected ? [] : [5, 3]);
  const x = shape.x * scale;
  const y = shape.y * scale;
  const width = shape.width * scale;
  const height = shape.height * scale;
  context.beginPath();
  if (shape.geometry === 'circle') context.ellipse(x + width / 2, y + height / 2, width / 2, height / 2, 0, 0, Math.PI * 2);
  else context.rect(x, y, width, height);
  context.fill();
  context.stroke();
  context.restore();
}

interface FramePaint {
  context: CanvasRenderingContext2D;
  frame: AnimationFrame;
  image?: HTMLImageElement | undefined;
  scale: number;
  selectedId?: string;
  alpha?: number;
}

export function paintFrame(input: FramePaint): void {
  const { context, frame, image, scale } = input;
  if (image) context.drawImage(image, frame.sourceX, frame.sourceY, frame.width, frame.height, 0, 0, frame.width * scale, frame.height * scale);
  frame.shapes.forEach((shape) => drawShape({ context, shape, scale, selected: shape.id === input.selectedId, alpha: input.alpha }));
}

function paintOnion(state: EditorState, context: CanvasRenderingContext2D, index: number, scale: number): void {
  const frame = state.project.frames[index];
  if (!frame) return;
  context.save();
  context.globalAlpha = 0.18;
  paintFrame({ context, frame, image: state.images[frame.imageIndex], scale, alpha: 0.55 });
  context.restore();
}

function canvasScale(frame: AnimationFrame): number {
  return Math.max(1, Math.min(8, 720 / frame.width, 520 / frame.height));
}

function renderCanvas(state: EditorState): void {
  const canvas = element<HTMLCanvasElement>(state.root, '[data-role="stage"]');
  const frame = state.project.frames[state.currentFrame];
  if (!canvas || !frame) return;
  const scale = canvasScale(frame);
  canvas.width = Math.round(frame.width * scale);
  canvas.height = Math.round(frame.height * scale);
  canvas.dataset.scale = String(scale);
  const context = canvas.getContext('2d');
  if (!context) return;
  context.imageSmoothingEnabled = false;
  context.clearRect(0, 0, canvas.width, canvas.height);
  if (state.preferences.onionPrevious) paintOnion(state, context, state.currentFrame - 1, scale);
  if (state.preferences.onionNext) paintOnion(state, context, state.currentFrame + 1, scale);
  paintFrame({ context, frame, image: state.images[frame.imageIndex], scale, selectedId: state.selectedId });
  context.fillStyle = '#fff';
  context.beginPath();
  context.arc(frame.pivot.x * scale, frame.pivot.y * scale, 3, 0, Math.PI * 2);
  context.fill();
}

function typeMarks(frame: AnimationFrame): string {
  return Array.from(new Set(frame.shapes.map(({ type }) => type))).map((type) => `<i style="--mark:${COLORS[type]}"></i>`).join('');
}

function renderTimeline(state: EditorState): void {
  const timeline = element<HTMLElement>(state.root, '[data-role="timeline"]');
  if (!timeline) return;
  timeline.innerHTML = state.project.frames.map((frame) => {
    const active = frame.index === state.currentFrame ? ' is-active' : '';
    const label = formatCopy(state.ui.frameReadout, { current: frame.index + 1, total: state.project.frames.length });
    return `<button type="button" class="hha-frame${active}" data-frame="${frame.index}" aria-label="${label}"><span>${frame.index + 1}</span><b>${frame.shapes.length}</b><em>${typeMarks(frame)}</em></button>`;
  }).join('');
}

function setField(root: HTMLElement, field: string, value: string | number, disabled: boolean): void {
  const input = element<HTMLInputElement>(root, `[data-field="${field}"]`);
  if (!input) return;
  input.value = String(value);
  input.disabled = disabled;
}

function renderShapeFields(state: EditorState, shape?: CollisionShape): void {
  if (!shape) {
    ['name', 'x', 'y', 'width', 'height', 'radius'].forEach((field) => setField(state.root, field, field === 'name' ? '' : 0, true));
    return;
  }
  setField(state.root, 'name', shape.name, false);
  setField(state.root, 'x', shape.x, false);
  setField(state.root, 'y', shape.y, false);
  setField(state.root, 'width', shape.width, false);
  setField(state.root, 'height', shape.height, false);
  setField(state.root, 'radius', shape.width / 2, false);
}

function toggleInspector(state: EditorState, shape?: CollisionShape): void {
  const empty = element<HTMLElement>(state.root, '[data-role="no-selection"]');
  const fields = element<HTMLElement>(state.root, '[data-role="shape-fields"]');
  if (empty) empty.hidden = Boolean(shape);
  if (fields) fields.hidden = !shape;
  const radius = element<HTMLElement>(state.root, '[data-radius-row]');
  if (radius) radius.hidden = !shape || shape.geometry !== 'circle';
}

function renderInspector(state: EditorState): void {
  const frame = state.project.frames[state.currentFrame];
  if (!frame) return;
  const shape = frame.shapes.find(({ id }) => id === state.selectedId);
  toggleInspector(state, shape);
  renderShapeFields(state, shape);
  setField(state.root, 'pivotX', frame.pivot.x, false);
  setField(state.root, 'pivotY', frame.pivot.y, false);
}

function renderDiagnostics(state: EditorState): void {
  const diagnostics = evaluateProject(state.project);
  const frames = element<HTMLElement>(state.root, '[data-role="frames-badge"]');
  const shapes = element<HTMLElement>(state.root, '[data-role="shapes-badge"]');
  const coverage = element<HTMLElement>(state.root, '[data-role="coverage-badge"]');
  if (frames) frames.textContent = formatCopy(state.ui.framesBadge, { count: diagnostics.frameCount });
  if (shapes) shapes.textContent = formatCopy(state.ui.shapesBadge, { count: diagnostics.shapeCount });
  if (coverage) coverage.textContent = formatCopy(state.ui.coverageBadge, { percent: diagnostics.coveragePercent });
}

function renderControls(state: EditorState): void {
  state.root.classList.toggle('has-images', state.images.length > 0);
  state.root.querySelectorAll<HTMLElement>('[data-type]').forEach((item) => item.classList.toggle('is-active', item.dataset.type === state.collisionType));
  state.root.querySelectorAll<HTMLElement>('[data-geometry]').forEach((item) => item.classList.toggle('is-active', item.dataset.geometry === state.geometry));
  state.root.querySelectorAll<HTMLElement>('[data-mode]').forEach((item) => item.classList.toggle('is-active', item.dataset.mode === state.mode));
  const play = element<HTMLElement>(state.root, '[data-action="play"]');
  if (play) play.textContent = state.playing ? state.ui.pause : state.ui.play;
}

export function renderEditor(state: EditorState): void {
  renderCanvas(state);
  renderTimeline(state);
  renderInspector(state);
  renderDiagnostics(state);
  renderControls(state);
}

export function renderDraft(state: EditorState, start: { x: number; y: number }, end: { x: number; y: number }): void {
  renderCanvas(state);
  const canvas = element<HTMLCanvasElement>(state.root, '[data-role="stage"]');
  const context = canvas?.getContext('2d');
  if (!canvas || !context) return;
  const scale = Number(canvas.dataset.scale ?? 1);
  const width = state.geometry === 'circle' ? Math.min(Math.abs(end.x - start.x), Math.abs(end.y - start.y)) : Math.abs(end.x - start.x);
  const height = state.geometry === 'circle' ? width : Math.abs(end.y - start.y);
  const shape: CollisionShape = { id: '', name: '', type: state.collisionType, geometry: state.geometry, x: Math.min(start.x, end.x), y: Math.min(start.y, end.y), width, height };
  drawShape({ context, shape, scale, selected: true, alpha: 0.9 });
}

export function setStatus(state: EditorState, copy: string): void {
  const status = element<HTMLElement>(state.root, '[data-role="status"]');
  if (status) status.textContent = copy;
}
