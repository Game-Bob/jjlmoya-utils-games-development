import { getAdjustmentState } from './evaluator';
import { countModified, isModified } from './logic';
import type { FrameAdjustment, FrameSpec, GridSettings } from './types';

export interface EditorRefs {
  shell: HTMLElement;
  sourceCanvas: HTMLCanvasElement;
  resultCanvas: HTMLCanvasElement;
  frameCanvas: HTMLCanvasElement;
  filmstrip: HTMLElement;
  status: HTMLElement;
  sourceName: HTMLElement;
  frameNumber: HTMLElement;
  frameState: HTMLElement;
  frameCount: HTMLElement;
  correctionCount: HTMLElement;
  imageSize: HTMLElement;
  workbench: HTMLElement;
  exportSheet: HTMLButtonElement;
  exportJson: HTMLButtonElement;
  loadProject: HTMLInputElement;
}

export interface RenderInput {
  refs: EditorRefs;
  image: HTMLImageElement | null;
  frames: FrameSpec[];
  adjustments: Record<string, FrameAdjustment>;
  grid: GridSettings;
  selected: number;
  zoom: number;
  sourceName: string;
  statusText: string;
  noImageText: string;
  modifiedText: string;
  unchangedText: string;
  selectFrameText: string;
}

export function renderEditor(input: RenderInput): void {
  const { refs } = input;
  refs.shell.classList.toggle('has-image', Boolean(input.image));
  refs.workbench.hidden = !input.image;
  refs.sourceName.textContent = input.sourceName || input.noImageText;
  refs.shell.style.setProperty('--fe-zoom', `${input.zoom}`);
  refs.status.textContent = input.statusText;
  if (!input.image || input.frames.length === 0) return;
  renderSheet({ canvas: refs.sourceCanvas, image: input.image, frames: input.frames, grid: input.grid, selected: input.selected, corrected: false });
  renderCorrectedSheet({ canvas: refs.resultCanvas, image: input.image, frames: input.frames, adjustments: input.adjustments, grid: input.grid });
  renderActiveFrame(refs.frameCanvas, input.image, input.frames[input.selected], input.adjustments);
  renderFilmstrip(input);
  updateSummary(input);
}

function renderSheet(input: { canvas: HTMLCanvasElement; image: HTMLImageElement; frames: FrameSpec[]; grid: GridSettings; selected: number; corrected: boolean }): void {
  const { canvas, image, frames, grid, selected, corrected } = input;
  canvas.width = image.naturalWidth;
  canvas.height = image.naturalHeight;
  const context = canvas.getContext('2d');
  if (!context) return;
  context.imageSmoothingEnabled = false;
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(image, 0, 0);
  context.lineWidth = 1;
  frames.forEach((frame, framePosition) => drawFrameMark({ context, frame, selected: framePosition === selected, corrected, grid }));
  drawGridGuides({ context, width: canvas.width, height: canvas.height, grid, corrected });
}

function drawFrameMark(input: { context: CanvasRenderingContext2D; frame: FrameSpec; selected: boolean; corrected: boolean; grid: GridSettings }): void {
  const { context, frame, selected, corrected } = input;
  context.strokeStyle = getCorrectedStroke(corrected);
  context.lineWidth = selected ? 2 : 1;
  context.fillStyle = selected ? 'rgba(255, 202, 88, 0.18)' : 'rgba(15, 23, 42, 0.08)';
  context.fillRect(frame.sourceX, frame.sourceY, frame.width, frame.height);
  context.strokeRect(frame.sourceX + 0.5, frame.sourceY + 0.5, frame.width - 1, frame.height - 1);
  context.fillStyle = selected ? '#ffca58' : '#ffffff';
  context.font = 'bold 10px sans-serif';
  context.fillText(String(frame.index + 1).padStart(2, '0'), frame.sourceX + 4, frame.sourceY + 13);
}

function getCorrectedStroke(corrected: boolean): string {
  return corrected ? '#68d6c0' : '#ffca58';
}

function renderCorrectedSheet(input: { canvas: HTMLCanvasElement; image: HTMLImageElement; frames: FrameSpec[]; adjustments: Record<string, FrameAdjustment>; grid?: GridSettings }): void {
  const { canvas, image, frames, adjustments, grid } = input;
  canvas.width = image.naturalWidth;
  canvas.height = image.naturalHeight;
  const context = canvas.getContext('2d');
  if (!context) return;
  context.imageSmoothingEnabled = false;
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(image, 0, 0);
  frames.forEach((frame) => renderCorrectedFrame({ context, image, frame, adjustment: adjustments[String(frame.index)] }));
  if (grid) drawGridGuides({ context, width: canvas.width, height: canvas.height, grid, corrected: true });
}

function drawGridGuides(input: { context: CanvasRenderingContext2D; width: number; height: number; grid: GridSettings; corrected: boolean }): void {
  const { context, width, height, grid, corrected } = input;
  context.save();
  context.strokeStyle = corrected ? '#68d6c0' : '#ffca58';
  context.lineWidth = 2;
  context.setLineDash([5, 3]);
  for (let row = 0; row < grid.rows; row += 1) {
    for (let column = 0; column < grid.columns; column += 1) {
      const x = grid.marginX + column * (grid.cellWidth + grid.gapX);
      const y = grid.marginY + row * (grid.cellHeight + grid.gapY);
      if (x >= width || y >= height) continue;
      const cellWidth = Math.min(grid.cellWidth, width - x);
      const cellHeight = Math.min(grid.cellHeight, height - y);
      context.strokeRect(x + 1, y + 1, Math.max(0, cellWidth - 2), Math.max(0, cellHeight - 2));
    }
  }
  context.restore();
}

function renderCorrectedFrame(input: { context: CanvasRenderingContext2D; image: HTMLImageElement; frame: FrameSpec; adjustment: FrameAdjustment | undefined }): void {
  const { context, image, frame } = input;
  const adjustment = input.adjustment ?? frame.adjustment;
  context.save();
  context.beginPath();
  context.rect(frame.sourceX, frame.sourceY, frame.width, frame.height);
  context.clip();
  context.clearRect(frame.sourceX, frame.sourceY, frame.width, frame.height);
  context.drawImage(image, frame.sourceX + adjustment.crop.x, frame.sourceY + adjustment.crop.y, adjustment.crop.width, adjustment.crop.height, frame.sourceX + adjustment.offsetX, frame.sourceY + adjustment.offsetY, adjustment.crop.width, adjustment.crop.height);
  context.restore();
}

function renderActiveFrame(canvas: HTMLCanvasElement, image: HTMLImageElement, frame: FrameSpec | undefined, adjustments: Record<string, FrameAdjustment>): void {
  if (!frame) return;
  canvas.width = frame.width;
  canvas.height = frame.height;
  const context = canvas.getContext('2d');
  if (!context) return;
  const adjustment = adjustments[String(frame.index)] ?? frame.adjustment;
  context.imageSmoothingEnabled = false;
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.save();
  context.beginPath();
  context.rect(0, 0, canvas.width, canvas.height);
  context.clip();
  context.drawImage(image, frame.sourceX + adjustment.crop.x, frame.sourceY + adjustment.crop.y, adjustment.crop.width, adjustment.crop.height, adjustment.offsetX, adjustment.offsetY, adjustment.crop.width, adjustment.crop.height);
  context.restore();
  context.strokeStyle = '#ffca58';
  context.strokeRect(adjustment.offsetX + 0.5, adjustment.offsetY + 0.5, adjustment.crop.width - 1, adjustment.crop.height - 1);
}

function renderFilmstrip(input: RenderInput): void {
  const { refs, frames, adjustments, selected, modifiedText, unchangedText, selectFrameText } = input;
  refs.filmstrip.replaceChildren();
  refs.filmstrip.style.setProperty('--fe-frame-columns', String(input.grid.columns));
  frames.forEach((frame, framePosition) => {
    const button = document.createElement('button');
    const adjustment = adjustments[String(frame.index)] ?? frame.adjustment;
    const state = getAdjustmentState(adjustment, frame);
    button.type = 'button';
    button.className = `fe-frame-button${framePosition === selected ? ' is-selected' : ''}${state === 'modified' ? ' is-modified' : ''}`;
    button.dataset.frame = String(framePosition);
    button.style.gridRow = String(frame.row + 1);
    button.style.gridColumn = String(frame.column + 1);
    button.ariaLabel = `${selectFrameText} ${frame.index + 1}, ${state === 'modified' ? modifiedText : unchangedText}`;
    button.textContent = String(frame.index + 1).padStart(2, '0');
    refs.filmstrip.append(button);
  });
}

function updateSummary(input: RenderInput): void {
  const { refs, frames, adjustments, selected, sourceName, image } = input;
  const selectedFrame = frames[selected];
  const selectedAdjustment = getSelectedAdjustment(selectedFrame, adjustments);
  refs.frameNumber.textContent = getFrameNumber(selectedFrame, frames.length);
  refs.frameState.textContent = getFrameState(selectedFrame, selectedAdjustment, input);
  refs.frameCount.textContent = String(frames.length);
  refs.correctionCount.textContent = String(countModified(frames, adjustments));
  refs.imageSize.textContent = image ? `${image.naturalWidth} x ${image.naturalHeight} px` : '0 x 0 px';
  refs.sourceName.textContent = sourceName || input.noImageText;
}

function getSelectedAdjustment(frame: FrameSpec | undefined, adjustments: Record<string, FrameAdjustment>): FrameAdjustment | null {
  return frame ? adjustments[String(frame.index)] ?? frame.adjustment : null;
}

function getFrameNumber(frame: FrameSpec | undefined, total: number): string {
  return frame ? `${frame.index + 1} / ${total}` : '0 / 0';
}

function getFrameState(frame: FrameSpec | undefined, adjustment: FrameAdjustment | null, input: RenderInput): string {
  if (frame && adjustment && isModified(adjustment, frame)) return input.modifiedText;
  return input.unchangedText;
}

export function drawPreviewFrame(input: { canvas: HTMLCanvasElement; image: HTMLImageElement; frame: FrameSpec; adjustment: FrameAdjustment }): void {
  renderActiveFrame(input.canvas, input.image, input.frame, { [String(input.frame.index)]: input.adjustment });
}

export function createExportCanvas(image: HTMLImageElement, frames: FrameSpec[], adjustments: Record<string, FrameAdjustment>): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  renderCorrectedSheet({ canvas, image, frames, adjustments });
  return canvas;
}
