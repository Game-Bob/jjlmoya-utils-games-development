import type { CollisionProject, ImageReference } from './logic';
import { paintFrame } from './dom-views';

export interface LoadedImages {
  elements: HTMLImageElement[];
  references: ImageReference[];
}

function decodeImage(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    const url = URL.createObjectURL(file);
    image.onload = () => {
      URL.revokeObjectURL(url);
      resolve(image);
    };
    image.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error(file.name));
    };
    image.src = url;
  });
}

export async function loadLocalImages(files: File[]): Promise<LoadedImages> {
  const ordered = [...files].sort((left, right) => left.name.localeCompare(right.name, undefined, { numeric: true }));
  const elements = await Promise.all(ordered.map(decodeImage));
  const references = elements.map((image, index) => ({ name: ordered[index]?.name ?? '', width: image.naturalWidth, height: image.naturalHeight }));
  return { elements, references };
}

export function downloadText(source: string, fileName: string): void {
  const blob = new Blob([source], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = fileName;
  anchor.click();
  URL.revokeObjectURL(url);
}

function sheetMetrics(project: CollisionProject): { columns: number; rows: number; width: number; height: number } {
  const columns = Math.max(1, Math.ceil(Math.sqrt(project.frames.length)));
  const rows = Math.max(1, Math.ceil(project.frames.length / columns));
  const width = Math.max(1, ...project.frames.map((frame) => frame.width));
  const height = Math.max(1, ...project.frames.map((frame) => frame.height));
  return { columns, rows, width, height };
}

function drawSheet(project: CollisionProject, images: HTMLImageElement[]): HTMLCanvasElement {
  const metrics = sheetMetrics(project);
  const padding = 18;
  const canvas = document.createElement('canvas');
  canvas.width = metrics.columns * (metrics.width + padding) + padding;
  canvas.height = metrics.rows * (metrics.height + padding) + padding;
  const context = canvas.getContext('2d');
  if (!context) return canvas;
  context.fillStyle = '#15111f';
  context.fillRect(0, 0, canvas.width, canvas.height);
  project.frames.forEach((frame, index) => {
    const column = index % metrics.columns;
    const row = Math.floor(index / metrics.columns);
    context.save();
    context.translate(padding + column * (metrics.width + padding), padding + row * (metrics.height + padding));
    paintFrame({ context, frame, image: images[frame.imageIndex], scale: 1 });
    context.restore();
  });
  return canvas;
}

export function downloadContactSheet(project: CollisionProject, images: HTMLImageElement[]): void {
  const canvas = drawSheet(project, images);
  canvas.toBlob((blob) => {
    if (!blob) return;
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'collision-contact-sheet.png';
    anchor.click();
    URL.revokeObjectURL(url);
  }, 'image/png');
}
