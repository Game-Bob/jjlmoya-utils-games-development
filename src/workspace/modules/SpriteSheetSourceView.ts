import type { LocalImageSelection } from '../../platform/contracts/ILocalImagePicker';

interface SpriteSheetSourceViewDependencies {
  readonly chooseSource: () => Promise<LocalImageSelection | null>;
  readonly onReady: (source: LocalImageSelection, width: number, height: number) => void;
  readonly onError: (message: string) => void;
}

interface DecodedImage {
  readonly blob: Blob;
  readonly width: number;
  readonly height: number;
}

export class SpriteSheetSourceView {
  private button: HTMLButtonElement | undefined;
  private name: HTMLElement | undefined;
  private path: HTMLElement | undefined;
  private image: HTMLImageElement | undefined;
  private imageUrl: string | undefined;
  private disposed = false;
  private readonly chooseListener = (): void => {
    void this.choose();
  };

  constructor(private readonly dependencies: SpriteSheetSourceViewDependencies) {}

  public createPicker(ownerDocument: Document): HTMLElement {
    const source = ownerDocument.createElement('div');
    source.className = 'sprite-packer-source';
    const button = ownerDocument.createElement('button');
    button.type = 'button';
    button.className = 'sprite-packer-source-button';
    button.textContent = 'Choose local sprite image';
    button.addEventListener('click', this.chooseListener);
    this.button = button;
    const name = ownerDocument.createElement('strong');
    name.textContent = 'No image selected';
    this.name = name;
    const path = ownerDocument.createElement('span');
    path.className = 'sprite-packer-source-path';
    path.textContent = 'PNG or WebP · read directly from your device';
    this.path = path;
    source.append(button, name, path);
    return source;
  }

  public createImage(ownerDocument: Document): HTMLImageElement {
    const image = ownerDocument.createElement('img');
    image.className = 'sprite-packer-source-image';
    image.alt = 'Selected local sprite sheet';
    image.hidden = true;
    this.image = image;
    return image;
  }

  public dispose(): void {
    this.disposed = true;
    this.button?.removeEventListener('click', this.chooseListener);
    this.releaseImageUrl();
    this.button = undefined;
    this.name = undefined;
    this.path = undefined;
    this.image = undefined;
  }

  private async choose(): Promise<void> {
    if (!this.button || this.disposed) return;
    this.button.disabled = true;
    try {
      await this.pickAndShow();
    } catch (error) {
      this.reportError(error);
    } finally {
      this.restoreButton();
    }
  }

  private async pickAndShow(): Promise<void> {
    const selection = await this.dependencies.chooseSource();
    if (!selection || this.disposed) return;
    const decoded = await decodeImage(selection);
    if (this.disposed) return;
    this.showSelection(selection, decoded);
    this.dependencies.onReady(selection, decoded.width, decoded.height);
  }

  private reportError(error: unknown): void {
    if (!this.disposed) this.dependencies.onError(describeError(error));
  }

  private restoreButton(): void {
    if (this.button && !this.disposed) this.button.disabled = false;
  }

  private showSelection(source: LocalImageSelection, decoded: DecodedImage): void {
    const url = URL.createObjectURL(decoded.blob);
    this.releaseImageUrl();
    this.imageUrl = url;
    if (this.image) {
      this.image.src = url;
      this.image.hidden = false;
    }
    if (this.name) this.name.textContent = `${source.name} · ${decoded.width} × ${decoded.height}`;
    if (this.path) this.path.textContent = source.path;
  }

  private releaseImageUrl(): void {
    if (!this.imageUrl) return;
    this.image?.removeAttribute('src');
    URL.revokeObjectURL(this.imageUrl);
    this.imageUrl = undefined;
  }
}

async function decodeImage(source: LocalImageSelection): Promise<DecodedImage> {
  const mimeType = source.name.toLowerCase().endsWith('.webp') ? 'image/webp' : 'image/png';
  const blob = new Blob([new Uint8Array(source.bytes)], { type: mimeType });
  const bitmap = await createImageBitmap(blob);
  const width = bitmap.width;
  const height = bitmap.height;
  bitmap.close();
  if (width < 1 || height < 1) throw new Error('The image has no usable dimensions');
  return { blob, width, height };
}

function describeError(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}
