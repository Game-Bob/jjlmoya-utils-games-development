import type { CropRect, FrameAdjustment, FrameMetadata, FrameSpec, GridSettings, HistoryState, ProjectFile } from './types';

export const DEFAULT_GRID: GridSettings = {
  columns: 4,
  rows: 2,
  cellWidth: 64,
  cellHeight: 64,
  marginX: 0,
  marginY: 0,
  gapX: 0,
  gapY: 0,
};

const MIN_VALUE = 1;

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function normalizeGrid(grid: GridSettings): GridSettings {
  return {
    columns: clampInteger(grid.columns, 1, 128),
    rows: clampInteger(grid.rows, 1, 128),
    cellWidth: clampInteger(grid.cellWidth, MIN_VALUE, 4096),
    cellHeight: clampInteger(grid.cellHeight, MIN_VALUE, 4096),
    marginX: clampInteger(grid.marginX, 0, 4096),
    marginY: clampInteger(grid.marginY, 0, 4096),
    gapX: clampInteger(grid.gapX, 0, 4096),
    gapY: clampInteger(grid.gapY, 0, 4096),
  };
}

export function recalculateGrid(grid: GridSettings, imageWidth: number, imageHeight: number, axis: 'columns' | 'rows'): GridSettings {
  const safeGrid = normalizeGrid(grid);
  if (axis === 'columns') {
    const availableWidth = Math.max(0, imageWidth - safeGrid.marginX);
    const columns = Math.max(1, Math.floor((availableWidth + safeGrid.gapX) / (safeGrid.cellWidth + safeGrid.gapX)));
    return normalizeGrid({ ...safeGrid, columns });
  }
  const availableHeight = Math.max(0, imageHeight - safeGrid.marginY);
  const rows = Math.max(1, Math.floor((availableHeight + safeGrid.gapY) / (safeGrid.cellHeight + safeGrid.gapY)));
  return normalizeGrid({ ...safeGrid, rows });
}

export function detectGridFromImageData(data: Uint8ClampedArray, width: number, height: number): GridSettings {
  const columns = buildProjection(data, width, height, 'x');
  const rows = buildProjection(data, width, height, 'y');
  const marginX = findLeadingBlank(columns);
  const marginY = findLeadingBlank(rows);
  return normalizeGrid({ columns: detectAxis(columns, DEFAULT_GRID.columns), rows: detectAxis(rows, DEFAULT_GRID.rows), cellWidth: Math.max(1, Math.floor((width - marginX) / detectAxis(columns, DEFAULT_GRID.columns))), cellHeight: Math.max(1, Math.floor((height - marginY) / detectAxis(rows, DEFAULT_GRID.rows))), marginX, marginY, gapX: 0, gapY: 0 });
}

function buildProjection(data: Uint8ClampedArray, width: number, height: number, axis: 'x' | 'y'): number[] {
  const isColumn = axis === 'x';
  const length = isColumn ? width : height;
  const projection = Array.from({ length }, () => 0);
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      if ((data[(y * width + x) * 4 + 3] ?? 0) <= 8) continue;
      const targetIndex = isColumn ? x : y;
      projection[targetIndex] = (projection[targetIndex] ?? 0) + 1;
    }
  }
  return projection;
}

function findLeadingBlank(projection: number[]): number {
  const firstInk = projection.findIndex((value) => value > 0);
  return firstInk < 0 ? 0 : firstInk;
}

function detectAxis(projection: number[], fallback: number): number {
  const maxParts = Math.min(32, Math.max(1, Math.floor(projection.length / 8)));
  let bestScore = Number.POSITIVE_INFINITY;
  let bestParts = 1;
  for (let parts = 2; parts <= maxParts; parts += 1) {
    const score = boundaryScore(projection, parts);
    if (score < bestScore) {
      bestScore = score;
      bestParts = parts;
    } else if (score <= bestScore + 0.03) {
      bestParts = Math.max(bestParts, parts);
    }
  }
  return bestScore < 0.98 ? bestParts : Math.min(fallback, maxParts);
}

function boundaryScore(projection: number[], parts: number): number {
  const totalInk = projection.reduce((sum, value) => sum + value, 0);
  if (totalInk === 0) return 1;
  const cellWidth = projection.length / parts;
  const boundaryInk = Array.from({ length: parts - 1 }, (_, index) => Math.round((index + 1) * cellWidth)).reduce((sum, boundary) => sum + getBoundaryInk(projection, boundary), 0);
  return boundaryInk / (totalInk * 0.02 + 1);
}

function getBoundaryInk(projection: number[], boundary: number): number {
  return [-2, -1, 0, 1, 2].reduce((sum, offset) => sum + (projection[boundary + offset] ?? 0), 0);
}

function clampInteger(value: number, min: number, max: number): number {
  return clamp(Math.round(Number.isFinite(value) ? value : min), min, max);
}

export function createDefaultAdjustment(width: number, height: number): FrameAdjustment {
  return { crop: { x: 0, y: 0, width, height }, offsetX: 0, offsetY: 0 };
}

export function createFrameSpecs(imageWidth: number, imageHeight: number, grid: GridSettings): FrameSpec[] {
  const safeGrid = normalizeGrid(grid);
  const frames: FrameSpec[] = [];
  for (let row = 0; row < safeGrid.rows; row += 1) {
    for (let column = 0; column < safeGrid.columns; column += 1) {
      const index = row * safeGrid.columns + column;
      const sourceX = safeGrid.marginX + column * (safeGrid.cellWidth + safeGrid.gapX);
      const sourceY = safeGrid.marginY + row * (safeGrid.cellHeight + safeGrid.gapY);
      frames.push({ index, row, column, sourceX, sourceY, width: safeGrid.cellWidth, height: safeGrid.cellHeight, adjustment: createDefaultAdjustment(safeGrid.cellWidth, safeGrid.cellHeight) });
    }
  }
  return frames.filter((frame) => frame.sourceX < imageWidth && frame.sourceY < imageHeight);
}

export function normalizeAdjustment(adjustment: FrameAdjustment, frame: FrameSpec): FrameAdjustment {
  const width = clampInteger(adjustment.crop.width, 1, frame.width);
  const height = clampInteger(adjustment.crop.height, 1, frame.height);
  const x = clampInteger(adjustment.crop.x, 0, frame.width - width);
  const y = clampInteger(adjustment.crop.y, 0, frame.height - height);
  const offsetX = clampInteger(adjustment.offsetX, -frame.width, frame.width);
  const offsetY = clampInteger(adjustment.offsetY, -frame.height, frame.height);
  return { crop: { x, y, width, height }, offsetX, offsetY };
}

export function updateAdjustment(frame: FrameSpec, current: FrameAdjustment, patch: { crop?: Partial<CropRect>; offsetX?: number; offsetY?: number }): FrameAdjustment {
  const nextCrop = { ...current.crop, ...patch.crop };
  return normalizeAdjustment({ crop: nextCrop, offsetX: patch.offsetX ?? current.offsetX, offsetY: patch.offsetY ?? current.offsetY }, frame);
}

export function nudgeAdjustment(frame: FrameSpec, current: FrameAdjustment, axis: 'x' | 'y', delta: number): FrameAdjustment {
  const patch = axis === 'x' ? { offsetX: current.offsetX + delta } : { offsetY: current.offsetY + delta };
  return updateAdjustment(frame, current, patch);
}

export function isModified(adjustment: FrameAdjustment, frame: FrameSpec): boolean {
  const offsets = [adjustment.crop.x, adjustment.crop.y, adjustment.offsetX, adjustment.offsetY];
  return offsets.some((value) => value !== 0) || adjustment.crop.width !== frame.width || adjustment.crop.height !== frame.height;
}

export function countModified(frames: FrameSpec[], adjustments: Record<string, FrameAdjustment>): number {
  return frames.reduce((total, frame) => total + (isModified(adjustments[String(frame.index)] ?? frame.adjustment, frame) ? 1 : 0), 0);
}

export function trimTransparent(data: Uint8ClampedArray, width: number, height: number): CropRect {
  let minX = width;
  let minY = height;
  let maxX = -1;
  let maxY = -1;
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      if ((data[(y * width + x) * 4 + 3] ?? 0) > 0) {
        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
        maxX = Math.max(maxX, x);
        maxY = Math.max(maxY, y);
      }
    }
  }
  if (maxX < 0) return { x: 0, y: 0, width, height };
  return { x: minX, y: minY, width: maxX - minX + 1, height: maxY - minY + 1 };
}

export function createHistoryState(grid: GridSettings, adjustments: Record<string, FrameAdjustment>, selected: number): HistoryState {
  return { grid: normalizeGrid(grid), adjustments: cloneAdjustments(adjustments), selected };
}

export function cloneAdjustments(adjustments: Record<string, FrameAdjustment>): Record<string, FrameAdjustment> {
  return JSON.parse(JSON.stringify(adjustments)) as Record<string, FrameAdjustment>;
}

export function createProjectFile(input: { sourceName: string; sourceWidth: number; sourceHeight: number; grid: GridSettings; adjustments: Record<string, FrameAdjustment> }): ProjectFile {
  return { version: 1, sourceName: input.sourceName, sourceWidth: input.sourceWidth, sourceHeight: input.sourceHeight, grid: normalizeGrid(input.grid), adjustments: cloneAdjustments(input.adjustments) };
}

export function parseProjectFile(value: unknown): ProjectFile | null {
  if (!value || typeof value !== 'object') return null;
  const candidate = value as Partial<ProjectFile>;
  if (!hasProjectHeader(candidate)) return null;
  if (!hasProjectSourceSize(candidate)) return null;
  if (!isGridSettings(candidate.grid) || !isAdjustmentMap(candidate.adjustments)) return null;
  return createProjectFile({ sourceName: typeof candidate.sourceName === 'string' ? candidate.sourceName : '', sourceWidth: candidate.sourceWidth, sourceHeight: candidate.sourceHeight, grid: candidate.grid, adjustments: candidate.adjustments });
}

function hasProjectHeader(value: Partial<ProjectFile>): boolean {
  return value.version === 1 && Boolean(value.grid) && Boolean(value.adjustments) && typeof value.adjustments === 'object';
}

function hasProjectSourceSize(value: Partial<ProjectFile>): value is ProjectFile {
  return isFinitePositiveInteger(value.sourceWidth) && isFinitePositiveInteger(value.sourceHeight);
}

function isFinitePositiveInteger(value: unknown): value is number {
  return typeof value === 'number' && Number.isFinite(value) && Number.isInteger(value) && value > 0;
}

function isGridSettings(value: unknown): value is GridSettings {
  if (!value || typeof value !== 'object') return false;
  const candidate = value as Record<string, unknown>;
  return ['columns', 'rows', 'cellWidth', 'cellHeight', 'marginX', 'marginY', 'gapX', 'gapY'].every((key) => typeof candidate[key] === 'number' && Number.isFinite(candidate[key]));
}

function isAdjustmentMap(value: object): value is Record<string, FrameAdjustment> {
  return Object.values(value).every((candidate) => isAdjustment(candidate));
}

function isAdjustment(value: unknown): value is FrameAdjustment {
  if (!value || typeof value !== 'object') return false;
  const candidate = value as Record<string, unknown>;
  return isCropRect(candidate.crop) && isFiniteNumber(candidate.offsetX) && isFiniteNumber(candidate.offsetY);
}

function isCropRect(value: unknown): boolean {
  if (!value || typeof value !== 'object') return false;
  const crop = value as Record<string, unknown>;
  return ['x', 'y', 'width', 'height'].every((key) => isFiniteNumber(crop[key]));
}

function isFiniteNumber(value: unknown): value is number {
  return typeof value === 'number' && Number.isFinite(value);
}

export function createFrameMetadata(frames: FrameSpec[], adjustments: Record<string, FrameAdjustment>): FrameMetadata[] {
  return frames.map((frame) => {
    const adjustment = normalizeAdjustment(adjustments[String(frame.index)] ?? frame.adjustment, frame);
    return { index: frame.index, x: frame.sourceX, y: frame.sourceY, width: frame.width, height: frame.height, crop: adjustment.crop, offset: { x: adjustment.offsetX, y: adjustment.offsetY }, modified: isModified(adjustment, frame) };
  });
}
