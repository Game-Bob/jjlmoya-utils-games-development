export interface GridSettings {
  columns: number;
  rows: number;
  cellWidth: number;
  cellHeight: number;
  marginX: number;
  marginY: number;
  gapX: number;
  gapY: number;
}

export interface CropRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface FrameAdjustment {
  crop: CropRect;
  offsetX: number;
  offsetY: number;
}

export interface FrameSpec {
  index: number;
  row: number;
  column: number;
  sourceX: number;
  sourceY: number;
  width: number;
  height: number;
  adjustment: FrameAdjustment;
}

export interface FrameMetadata {
  index: number;
  x: number;
  y: number;
  width: number;
  height: number;
  crop: CropRect;
  offset: { x: number; y: number };
  modified: boolean;
}

export interface ProjectFile {
  version: 1;
  sourceName: string;
  sourceWidth: number;
  sourceHeight: number;
  grid: GridSettings;
  adjustments: Record<string, FrameAdjustment>;
}

export interface DraftSession {
  selected: number;
  step: number;
  zoom: number;
  fps: number;
  sourceImage?: string;
}

export type DraftFile = ProjectFile & DraftSession;

export interface HistoryState {
  grid: GridSettings;
  adjustments: Record<string, FrameAdjustment>;
  selected: number;
}
