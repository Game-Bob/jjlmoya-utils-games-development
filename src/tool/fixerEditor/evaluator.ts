import { countModified } from './logic';
import type { FrameAdjustment, FrameSpec } from './types';

export interface EditorSummary {
  frameCount: number;
  modifiedCount: number;
  imageSize: string;
}

export function summarizeEditor(input: { frames: FrameSpec[]; adjustments: Record<string, FrameAdjustment>; imageWidth: number; imageHeight: number }): EditorSummary {
  return { frameCount: input.frames.length, modifiedCount: countModified(input.frames, input.adjustments), imageSize: `${input.imageWidth} x ${input.imageHeight} px` };
}

export function getAdjustmentState(adjustment: FrameAdjustment, frame: FrameSpec): 'modified' | 'unchanged' {
  const changed = adjustment.crop.x !== 0 || adjustment.crop.y !== 0 || adjustment.crop.width !== frame.width || adjustment.crop.height !== frame.height || adjustment.offsetX !== 0 || adjustment.offsetY !== 0;
  return changed ? 'modified' : 'unchanged';
}
