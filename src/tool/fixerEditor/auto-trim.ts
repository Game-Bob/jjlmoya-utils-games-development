import { trimTransparent, updateAdjustment } from './logic';
import type { ControllerContext } from './controller';
import type { FrameSpec } from './types';

export function trimFrame(context: ControllerContext): void {
  const { state, ui } = context;
  const frame = state.frames[state.selected];
  if (!frame || !state.image) return;
  const crop = getTrimCrop(state.image, frame);
  if (!crop) return;
  context.recordHistory();
  state.adjustments[String(frame.index)] = updateAdjustment(frame, state.adjustments[String(frame.index)] ?? frame.adjustment, { crop });
  context.updateView(ui.ready);
}

export function trimAll(context: ControllerContext): void {
  const { state, ui } = context;
  if (!state.image || state.frames.length === 0) return;
  const image = state.image;
  context.recordHistory();
  state.frames.forEach((frame) => {
    const crop = getTrimCrop(image, frame);
    if (crop) state.adjustments[String(frame.index)] = updateAdjustment(frame, state.adjustments[String(frame.index)] ?? frame.adjustment, { crop });
  });
  context.updateView(ui.ready);
}

function getTrimCrop(image: HTMLImageElement, frame: FrameSpec) {
  const sourceCanvas = document.createElement('canvas');
  sourceCanvas.width = frame.width;
  sourceCanvas.height = frame.height;
  const source = sourceCanvas.getContext('2d');
  if (!source) return null;
  source.imageSmoothingEnabled = false;
  source.drawImage(image, frame.sourceX, frame.sourceY, frame.width, frame.height, 0, 0, frame.width, frame.height);
  return trimTransparent(source.getImageData(0, 0, frame.width, frame.height).data, frame.width, frame.height);
}
