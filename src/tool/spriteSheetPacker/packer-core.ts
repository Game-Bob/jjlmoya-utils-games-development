import type { PackerOptions, PackedFrame, PackedResult, SpriteFrameInput } from './types';
import { generateAtlasJson, generateCssSnippet, generateEngineCodeSnippet } from './exporter';

export function nextPowerOfTwo(value: number): number {
  let power = 1;
  while (power < value) {
    power *= 2;
  }
  return power;
}

function emptyPackingResult(): PackedResult {
  return {
    textureWidth: 0,
    textureHeight: 0,
    efficiency: 0,
    totalFrames: 0,
    frames: [],
    atlasJson: '{}',
    cssSnippet: '',
    codeSnippet: '',
    drawCallsBefore: 0,
    drawCallsAfter: 0,
  };
}

function getFrameOffsets(item: SpriteFrameInput) {
  const tx = item.trimmedX ? item.trimmedX : 0;
  const ty = item.trimmedY ? item.trimmedY : 0;
  const ow = item.originalWidth ? item.originalWidth : item.width;
  const oh = item.originalHeight ? item.originalHeight : item.height;
  const px = item.pivotX !== undefined ? item.pivotX : 0.5;
  const py = item.pivotY !== undefined ? item.pivotY : 0.5;
  return { tx, ty, ow, oh, px, py };
}

function createPackedFrame(item: SpriteFrameInput, x: number, y: number): PackedFrame {
  const { tx, ty, ow, oh, px, py } = getFrameOffsets(item);
  return {
    id: item.id,
    name: item.name,
    x,
    y,
    width: item.width,
    height: item.height,
    rotated: false,
    trimmed: tx > 0 || ty > 0,
    spriteSourceSize: { x: tx, y: ty, w: item.width, h: item.height },
    sourceSize: { w: ow, h: oh },
    pivot: { x: px, y: py },
  };
}

function packSortedFrames(sorted: SpriteFrameInput[], options: PackerOptions) {
  const padding = Math.max(0, options.padding);
  const extrusion = Math.max(0, options.borderExtrusion);
  const totalOffset = padding + extrusion * 2;

  let currentX = padding;
  let currentY = padding;
  let rowHeight = 0;
  let maxW = 0;
  let maxH = 0;
  const packedFrames: PackedFrame[] = [];

  for (const item of sorted) {
    const itemW = item.width + totalOffset;
    const itemH = item.height + totalOffset;

    if (currentX + itemW > options.maxTextureWidth && currentX > padding) {
      currentX = padding;
      currentY += rowHeight + padding;
      rowHeight = 0;
    }

    packedFrames.push(createPackedFrame(item, currentX + extrusion, currentY + extrusion));

    currentX += itemW + padding;
    rowHeight = Math.max(rowHeight, itemH);
    maxW = Math.max(maxW, currentX);
    maxH = Math.max(maxH, currentY + rowHeight + padding);
  }

  return { packedFrames, maxW, maxH };
}

export function calculateBinPacking(frames: SpriteFrameInput[], options: PackerOptions): PackedResult {
  if (frames.length === 0) {
    return emptyPackingResult();
  }

  const sorted = [...frames].sort((a, b) => Math.max(b.width, b.height) - Math.max(a.width, a.height));
  const { packedFrames, maxW, maxH } = packSortedFrames(sorted, options);

  let finalWidth = options.forcePowerOfTwo ? nextPowerOfTwo(maxW) : maxW;
  let finalHeight = options.forcePowerOfTwo ? nextPowerOfTwo(maxH) : maxH;

  finalWidth = Math.min(finalWidth, options.maxTextureWidth);
  finalHeight = Math.min(finalHeight, options.maxTextureHeight);

  let usedArea = 0;
  for (const f of packedFrames) {
    usedArea += f.width * f.height;
  }

  const totalArea = Math.max(1, finalWidth * finalHeight);
  const efficiency = Math.min(100, Math.round((usedArea / totalArea) * 1000) / 10);

  return {
    textureWidth: finalWidth,
    textureHeight: finalHeight,
    efficiency,
    totalFrames: packedFrames.length,
    frames: packedFrames,
    atlasJson: generateAtlasJson(packedFrames, finalWidth, finalHeight, options.format),
    cssSnippet: generateCssSnippet(packedFrames),
    codeSnippet: generateEngineCodeSnippet(options.format),
    drawCallsBefore: frames.length,
    drawCallsAfter: 1,
  };
}
