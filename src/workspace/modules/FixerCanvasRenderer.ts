import { normalizeAdjustment } from '../../tool/fixerEditor/logic';
import type { FrameAdjustment, FrameSpec } from '../../tool/fixerEditor/types';

interface AdjustedFrameInput {
  readonly context: CanvasRenderingContext2D;
  readonly image: ImageBitmap;
  readonly frame: FrameSpec;
  readonly adjustment: FrameAdjustment;
  readonly destinationX: number;
  readonly destinationY: number;
}

export class FixerCanvasRenderer {
  public renderSource(
    canvas: HTMLCanvasElement,
    image: ImageBitmap,
    frames: readonly FrameSpec[],
    selected: number,
  ): void {
    const context = this.prepare(canvas, image.width, image.height);
    context.drawImage(image, 0, 0);
    frames.forEach((frame, index) => {
      context.lineWidth = index === selected ? 2 : 1;
      context.strokeStyle = index === selected ? '#38ddb0' : '#d9e3e7';
      context.strokeRect(frame.sourceX + 0.5, frame.sourceY + 0.5, frame.width - 1, frame.height - 1);
    });
  }

  public renderPreview(
    canvas: HTMLCanvasElement,
    image: ImageBitmap,
    frame: FrameSpec,
    adjustment: FrameAdjustment,
  ): void {
    const context = this.prepare(canvas, frame.width, frame.height);
    this.drawAdjustedFrame({ context, image, frame, adjustment, destinationX: 0, destinationY: 0 });
  }

  public createExportCanvas(
    image: ImageBitmap,
    frames: readonly FrameSpec[],
    adjustments: Readonly<Record<string, FrameAdjustment>>,
  ): HTMLCanvasElement {
    const canvas = document.createElement('canvas');
    const context = this.prepare(canvas, image.width, image.height);
    frames.forEach((frame) => {
      const adjustment = adjustments[String(frame.index)] ?? frame.adjustment;
      this.drawAdjustedFrame({
        context,
        image,
        frame,
        adjustment,
        destinationX: frame.sourceX,
        destinationY: frame.sourceY,
      });
    });
    return canvas;
  }

  private prepare(canvas: HTMLCanvasElement, width: number, height: number): CanvasRenderingContext2D {
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext('2d');
    if (!context) throw new Error('Canvas rendering is unavailable');
    context.imageSmoothingEnabled = false;
    context.clearRect(0, 0, width, height);
    return context;
  }

  private drawAdjustedFrame(input: AdjustedFrameInput): void {
    const { context, image, frame, adjustment, destinationX, destinationY } = input;
    const normalized = normalizeAdjustment(adjustment, frame);
    context.save();
    context.beginPath();
    context.rect(destinationX, destinationY, frame.width, frame.height);
    context.clip();
    context.drawImage(
      image,
      frame.sourceX + normalized.crop.x,
      frame.sourceY + normalized.crop.y,
      normalized.crop.width,
      normalized.crop.height,
      destinationX + normalized.offsetX,
      destinationY + normalized.offsetY,
      normalized.crop.width,
      normalized.crop.height,
    );
    context.restore();
  }
}
