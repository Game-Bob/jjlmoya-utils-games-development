import { createFrameSpecs, detectGridFromImageData } from './logic';
import { saveDraftImage } from './storage';
import type { ControllerContext } from './controller';

export function loadImage(context: ControllerContext, file: File): void {
  const image = new Image();
  image.onload = () => rememberImage(context, image, file.name, file);
  image.onerror = () => { context.refs.status.textContent = context.ui.statusInvalidImage; URL.revokeObjectURL(image.src); };
  image.src = URL.createObjectURL(file);
}

function rememberImage(context: ControllerContext, image: HTMLImageElement, sourceName: string, file: File): void {
  const reader = new FileReader();
  reader.onload = () => {
    const imageDataUrl = typeof reader.result === 'string' ? reader.result : undefined;
    if (imageDataUrl) saveDraftImage(imageDataUrl);
    applyImage(context, image, sourceName, imageDataUrl);
  };
  reader.onerror = () => applyImage(context, image, sourceName);
  reader.readAsDataURL(file);
}

export function restoreDraftImage(context: ControllerContext, sourceImage: string, sourceName: string): void {
  const image = new Image();
  image.onload = () => applyImage(context, image, sourceName, sourceImage);
  image.onerror = () => { context.refs.status.textContent = context.ui.statusInvalidImage; };
  image.src = sourceImage;
}

function applyImage(context: ControllerContext, image: HTMLImageElement, sourceName: string, imageDataUrl?: string): void {
  const pending = context.state.pendingProject;
  const matchesProject = !pending || hasMatchingSize(pending, image);
  context.state.image = image;
  if (imageDataUrl) context.state.imageDataUrl = imageDataUrl;
  else delete context.state.imageDataUrl;
  context.state.sourceName = sourceName;
  context.state.grid = chooseGrid(pending, matchesProject, context.state.grid, image);
  context.state.adjustments = chooseAdjustments(pending, matchesProject);
  context.state.pendingProject = null;
  context.state.frames = createFrameSpecs(image.naturalWidth, image.naturalHeight, context.state.grid);
  context.state.selected = Math.min(context.state.selected, Math.max(0, context.state.frames.length - 1));
  context.updateView(matchesProject ? context.ui.loaded : context.ui.statusImageMismatch);
  URL.revokeObjectURL(image.src);
}

function chooseGrid(project: NonNullable<ControllerContext['state']['pendingProject']> | null, matches: boolean, current: ControllerContext['state']['grid'], image: HTMLImageElement): ControllerContext['state']['grid'] {
  if (matches && project) return project.grid;
  return detectImageGrid(image) ?? current;
}

function chooseAdjustments(project: NonNullable<ControllerContext['state']['pendingProject']> | null, matches: boolean): ControllerContext['state']['adjustments'] {
  if (!matches) return {};
  return project?.adjustments ?? {};
}

function hasMatchingSize(project: NonNullable<ControllerContext['state']['pendingProject']>, image: HTMLImageElement): boolean {
  return project.sourceWidth === image.naturalWidth && project.sourceHeight === image.naturalHeight;
}

function detectImageGrid(image: HTMLImageElement) {
  const canvas = document.createElement('canvas');
  canvas.width = image.naturalWidth;
  canvas.height = image.naturalHeight;
  const context = canvas.getContext('2d');
  if (!context) return null;
  context.drawImage(image, 0, 0);
  return detectGridFromImageData(context.getImageData(0, 0, canvas.width, canvas.height).data, canvas.width, canvas.height);
}

export function autoDetectGrid(context: ControllerContext): void {
  const { state, ui } = context;
  if (!state.image) return;
  const grid = detectImageGrid(state.image);
  if (!grid) return;
  context.recordHistory();
  state.grid = grid;
  state.frames = createFrameSpecs(state.image.naturalWidth, state.image.naturalHeight, state.grid);
  state.selected = Math.min(state.selected, Math.max(0, state.frames.length - 1));
  context.updateView(ui.ready);
}

export function animate(context: ControllerContext): void {
  const { state } = context;
  if (!state.playing || !state.image || state.frames.length === 0) return;
  state.selected = (state.selected + 1) % state.frames.length;
  context.updateView(context.ui.ready);
  state.animationId = window.setTimeout(() => animate(context), 1000 / state.fps);
}
