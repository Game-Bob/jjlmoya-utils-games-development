export type CollisionType = 'hitbox' | 'hurtbox' | 'pushbox' | 'grabbox' | 'sensor' | 'custom';
export type ShapeGeometry = 'rectangle' | 'circle';

export interface ImageReference {
  name: string;
  width: number;
  height: number;
}

export interface CollisionShape {
  id: string;
  name: string;
  type: CollisionType;
  geometry: ShapeGeometry;
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface AnimationFrame {
  index: number;
  imageIndex: number;
  sourceX: number;
  sourceY: number;
  width: number;
  height: number;
  pivot: { x: number; y: number };
  shapes: CollisionShape[];
}

export interface CollisionProject {
  schema: 'jjlmoya.hitbox-animation';
  version: 1;
  coordinateSystem: 'top-left-pixels';
  images: ImageReference[];
  rows: number;
  columns: number;
  fps: number;
  frames: AnimationFrame[];
}

interface ShapeInput {
  frame: AnimationFrame;
  type: CollisionType;
  geometry: ShapeGeometry;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  name: string;
}

const round = (value: number): number => Math.round(value * 1000) / 1000;
const clamp = (value: number, minimum: number, maximum: number): number => Math.min(maximum, Math.max(minimum, value));

export function createSheetFrames(image: ImageReference, rows: number, columns: number): AnimationFrame[] {
  const safeRows = Math.max(1, Math.floor(rows));
  const safeColumns = Math.max(1, Math.floor(columns));
  const width = image.width / safeColumns;
  const height = image.height / safeRows;
  return Array.from({ length: safeRows * safeColumns }, (_, index) => createFrame({ index, imageIndex: 0, width, height, columns: safeColumns }));
}

interface FrameInput {
  index: number;
  imageIndex: number;
  width: number;
  height: number;
  columns: number;
}

function createFrame(input: FrameInput): AnimationFrame {
  const column = input.index % input.columns;
  const row = Math.floor(input.index / input.columns);
  return {
    index: input.index,
    imageIndex: input.imageIndex,
    sourceX: round(column * input.width),
    sourceY: round(row * input.height),
    width: round(input.width),
    height: round(input.height),
    pivot: { x: round(input.width / 2), y: round(input.height / 2) },
    shapes: [],
  };
}

export function createSequenceFrames(images: ImageReference[]): AnimationFrame[] {
  return images.map((image, index) => ({
    ...createFrame({ index, imageIndex: index, width: image.width, height: image.height, columns: 1 }),
    sourceX: 0,
    sourceY: 0,
  }));
}

export function createProject(images: ImageReference[], rows = 1, columns = 1): CollisionProject {
  const frames = images.length > 1 ? createSequenceFrames(images) : createSheetFrames(images[0] ?? { name: '', width: 1, height: 1 }, rows, columns);
  return {
    schema: 'jjlmoya.hitbox-animation',
    version: 1,
    coordinateSystem: 'top-left-pixels',
    images,
    rows: images.length > 1 ? 1 : Math.max(1, Math.floor(rows)),
    columns: images.length > 1 ? 1 : Math.max(1, Math.floor(columns)),
    fps: 12,
    frames,
  };
}

function shapeId(frame: AnimationFrame): string {
  const numbers = frame.shapes.map(({ id }) => Number(id.match(/(\d+)$/)?.[1] ?? 0));
  return `shape-${frame.index + 1}-${Math.max(0, ...numbers) + 1}`;
}

export function createShape(input: ShapeInput): CollisionShape {
  const left = clamp(Math.min(input.startX, input.endX), 0, input.frame.width);
  const top = clamp(Math.min(input.startY, input.endY), 0, input.frame.height);
  const right = clamp(Math.max(input.startX, input.endX), 0, input.frame.width);
  const bottom = clamp(Math.max(input.startY, input.endY), 0, input.frame.height);
  const size = input.geometry === 'circle' ? Math.min(right - left, bottom - top) : 0;
  const width = input.geometry === 'circle' ? size : right - left;
  const height = input.geometry === 'circle' ? size : bottom - top;
  return { id: shapeId(input.frame), name: input.name, type: input.type, geometry: input.geometry, x: round(left), y: round(top), width: round(width), height: round(height) };
}

export function clampShape(shape: CollisionShape, frame: AnimationFrame): CollisionShape {
  const width = clamp(Math.abs(shape.width), 1, frame.width);
  const heightValue = shape.geometry === 'circle' ? width : Math.abs(shape.height);
  const height = clamp(heightValue, 1, frame.height);
  return { ...shape, x: round(clamp(shape.x, 0, frame.width - width)), y: round(clamp(shape.y, 0, frame.height - height)), width: round(width), height: round(height) };
}

export function moveShape(shape: CollisionShape, frame: AnimationFrame, deltaX: number, deltaY: number): CollisionShape {
  return clampShape({ ...shape, x: shape.x + deltaX, y: shape.y + deltaY }, frame);
}

export function mirrorShape(shape: CollisionShape, frameWidth: number): CollisionShape {
  return { ...shape, x: round(frameWidth - shape.x - shape.width) };
}

export function duplicateShape(shape: CollisionShape, frame: AnimationFrame): CollisionShape {
  return clampShape({ ...shape, id: shapeId(frame), name: `${shape.name} copy`, x: shape.x + 2, y: shape.y + 2 }, frame);
}

export function copyShapesToFrame(source: AnimationFrame, target: AnimationFrame): AnimationFrame {
  const base = { ...target, shapes: [] as CollisionShape[] };
  const shapes = source.shapes.map((shape) => duplicateShape({ ...shape, name: shape.name }, { ...base, shapes: base.shapes })).map((shape, index) => ({ ...shape, id: `shape-${target.index + 1}-${index + 1}`, name: source.shapes[index]?.name ?? shape.name }));
  return { ...target, shapes };
}

export function shapeAtPoint(shapes: CollisionShape[], x: number, y: number): CollisionShape | undefined {
  return [...shapes].reverse().find((shape) => x >= shape.x && y >= shape.y && x <= shape.x + shape.width && y <= shape.y + shape.height);
}

export function cloneProject(project: CollisionProject): CollisionProject {
  return JSON.parse(JSON.stringify(project)) as CollisionProject;
}

export function serializeProject(project: CollisionProject): string {
  return JSON.stringify(project, null, 2);
}

function isProject(value: unknown): value is CollisionProject {
  if (!value || typeof value !== 'object') return false;
  const candidate = value as Partial<CollisionProject>;
  return candidate.schema === 'jjlmoya.hitbox-animation' && candidate.version === 1 && Array.isArray(candidate.images) && Array.isArray(candidate.frames);
}

export function parseProject(source: string): CollisionProject {
  const value: unknown = JSON.parse(source);
  if (!isProject(value)) throw new Error('Invalid collision project');
  return cloneProject(value);
}
