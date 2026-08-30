import type { ExtractionGridConfig, ExtractedFrameSlice } from './types';

export * from './types';
export * from './packer-core';
export * from './exporter';

export function calculateGridSlices(config: ExtractionGridConfig): ExtractedFrameSlice[] {
  const { imageWidth, imageHeight, frameWidth, frameHeight, margin, spacing } = config;

  if (frameWidth <= 0 || frameHeight <= 0) {
    return [];
  }

  const slices: ExtractedFrameSlice[] = [];
  let index = 0;

  for (let y = margin; y + frameHeight <= imageHeight; y += frameHeight + spacing) {
    for (let x = margin; x + frameWidth <= imageWidth; x += frameWidth + spacing) {
      slices.push({
        id: `slice_${index}`,
        index,
        x,
        y,
        width: frameWidth,
        height: frameHeight,
      });
      index++;
    }
  }

  return slices;
}
