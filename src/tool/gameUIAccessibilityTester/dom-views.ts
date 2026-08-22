import { simulateColor, type RGBColor, type SimulationMode } from './logic';

export interface RenderOptions {
  source: HTMLCanvasElement;
  destination: HTMLCanvasElement;
  mode: SimulationMode;
  blur: number;
  downscale: number;
  heatmap: boolean;
}

export interface SheetLabels {
  title: string;
  original: string;
  simulated: string;
  settings: string;
  localOnly: string;
}

const MAX_IMAGE_EDGE = 1600;

function context(canvas: HTMLCanvasElement): CanvasRenderingContext2D {
  const value = canvas.getContext('2d', { willReadFrequently: true });
  if (!value) throw new Error('Canvas 2D context unavailable');
  return value;
}

function createCanvas(width: number, height: number): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  return canvas;
}

function fittedSize(width: number, height: number): { width: number; height: number } {
  const scale = Math.min(1, MAX_IMAGE_EDGE / Math.max(width, height));
  return {
    width: Math.max(1, Math.round(width * scale)),
    height: Math.max(1, Math.round(height * scale)),
  };
}

export async function loadImageFile(file: File): Promise<HTMLCanvasElement> {
  const bitmap = await createImageBitmap(file);
  const size = fittedSize(bitmap.width, bitmap.height);
  const canvas = createCanvas(size.width, size.height);
  const canvasContext = context(canvas);
  canvasContext.imageSmoothingEnabled = true;
  canvasContext.imageSmoothingQuality = 'high';
  canvasContext.drawImage(bitmap, 0, 0, size.width, size.height);
  bitmap.close();
  return canvas;
}

function stressedSource(source: HTMLCanvasElement, scale: number, blur: number): HTMLCanvasElement {
  const smallWidth = Math.max(1, Math.round(source.width * scale));
  const smallHeight = Math.max(1, Math.round(source.height * scale));
  const small = createCanvas(smallWidth, smallHeight);
  const smallContext = context(small);
  smallContext.imageSmoothingEnabled = true;
  smallContext.drawImage(source, 0, 0, smallWidth, smallHeight);
  const output = createCanvas(source.width, source.height);
  const outputContext = context(output);
  outputContext.imageSmoothingEnabled = scale === 1;
  outputContext.filter = `blur(${blur}px)`;
  outputContext.drawImage(small, 0, 0, source.width, source.height);
  return output;
}

function transformPixels(image: ImageData, mode: SimulationMode): ImageData {
  const output = new ImageData(new Uint8ClampedArray(image.data), image.width, image.height);
  for (let index = 0; index < output.data.length; index += 4) {
    const color = simulateColor({
      r: output.data[index] ?? 0,
      g: output.data[index + 1] ?? 0,
      b: output.data[index + 2] ?? 0,
    }, mode);
    output.data[index] = color.r;
    output.data[index + 1] = color.g;
    output.data[index + 2] = color.b;
  }
  return output;
}

function pixelDistance(data: Uint8ClampedArray, first: number, second: number): number {
  const red = (data[first] ?? 0) - (data[second] ?? 0);
  const green = (data[first + 1] ?? 0) - (data[second + 1] ?? 0);
  const blue = (data[first + 2] ?? 0) - (data[second + 2] ?? 0);
  return Math.sqrt(red ** 2 + green ** 2 + blue ** 2);
}

function collapsedSignal(original: ImageData, simulated: ImageData, index: number, neighbor: number): boolean {
  const before = pixelDistance(original.data, index, neighbor);
  const after = pixelDistance(simulated.data, index, neighbor);
  return before >= 32 && after / before < 0.48;
}

function heatmapPixels(original: ImageData, simulated: ImageData): ImageData {
  const output = new ImageData(new Uint8ClampedArray(simulated.data), simulated.width, simulated.height);
  const row = simulated.width * 4;
  for (let index = 0; index < output.data.length - row - 4; index += 4) {
    const collapsed = collapsedSignal(original, simulated, index, index + 4)
      || collapsedSignal(original, simulated, index, index + row);
    if (collapsed) {
      output.data[index] = 255;
      output.data[index + 1] = Math.round((output.data[index + 1] ?? 0) * 0.18);
      output.data[index + 2] = 72;
    }
  }
  return output;
}

export function renderSimulation(options: RenderOptions): void {
  const stressed = stressedSource(options.source, options.downscale, options.blur);
  const sourceContext = context(stressed);
  const original = sourceContext.getImageData(0, 0, stressed.width, stressed.height);
  const simulated = transformPixels(original, options.mode);
  const rendered = options.heatmap ? heatmapPixels(original, simulated) : simulated;
  options.destination.width = stressed.width;
  options.destination.height = stressed.height;
  context(options.destination).putImageData(rendered, 0, 0);
}

export function copyOriginal(source: HTMLCanvasElement, destination: HTMLCanvasElement): void {
  destination.width = source.width;
  destination.height = source.height;
  context(destination).drawImage(source, 0, 0);
}

export function sampleCanvas(canvas: HTMLCanvasElement, clientX: number, clientY: number): {
  color: RGBColor;
  left: number;
  top: number;
} {
  const bounds = canvas.getBoundingClientRect();
  const left = Math.min(1, Math.max(0, (clientX - bounds.left) / bounds.width));
  const top = Math.min(1, Math.max(0, (clientY - bounds.top) / bounds.height));
  return { color: sampleAtFraction(canvas, left, top), left, top };
}

export function sampleAtFraction(canvas: HTMLCanvasElement, left: number, top: number): RGBColor {
  const x = Math.min(canvas.width - 1, Math.floor(left * canvas.width));
  const y = Math.min(canvas.height - 1, Math.floor(top * canvas.height));
  const data = context(canvas).getImageData(x, y, 1, 1).data;
  return { r: data[0] ?? 0, g: data[1] ?? 0, b: data[2] ?? 0 };
}

function sheetDimensions(source: HTMLCanvasElement): { width: number; height: number; imageHeight: number } {
  const width = Math.max(960, source.width * 2 + 72);
  const imageHeight = Math.round((source.height / source.width) * ((width - 72) / 2));
  return { width, height: imageHeight + 190, imageHeight };
}

export function createComparisonSheet(
  original: HTMLCanvasElement,
  simulated: HTMLCanvasElement,
  labels: SheetLabels,
): HTMLCanvasElement {
  const size = sheetDimensions(original);
  const sheet = createCanvas(size.width, size.height);
  const sheetContext = context(sheet);
  const imageWidth = (size.width - 72) / 2;
  sheetContext.fillStyle = '#071018';
  sheetContext.fillRect(0, 0, size.width, size.height);
  sheetContext.fillStyle = '#e8fbff';
  sheetContext.font = '700 28px sans-serif';
  sheetContext.fillText(labels.title, 24, 42);
  sheetContext.font = '600 18px sans-serif';
  sheetContext.fillText(labels.original, 24, 80);
  sheetContext.fillText(labels.simulated, imageWidth + 48, 80);
  sheetContext.drawImage(original, 24, 98, imageWidth, size.imageHeight);
  sheetContext.drawImage(simulated, imageWidth + 48, 98, imageWidth, size.imageHeight);
  sheetContext.font = '500 16px sans-serif';
  sheetContext.fillText(labels.settings, 24, size.height - 48);
  sheetContext.fillStyle = '#90aab4';
  sheetContext.fillText(labels.localOnly, 24, size.height - 20);
  return sheet;
}

export function triggerDownload(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
}

export function downloadCanvas(canvas: HTMLCanvasElement, filename: string): void {
  canvas.toBlob((blob) => {
    if (blob) triggerDownload(blob, filename);
  }, 'image/png');
}
