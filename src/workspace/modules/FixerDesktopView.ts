import {
  createFrameSpecs,
  createProjectFile,
  DEFAULT_GRID,
  normalizeGrid,
  parseProjectFile,
  updateAdjustment,
} from '../../tool/fixerEditor/logic';
import type { FrameAdjustment, FrameSpec, GridSettings, ProjectFile } from '../../tool/fixerEditor/types';
import type { LocalImageSelection } from '../../platform/contracts/ILocalImagePicker';
import { FixerCanvasRenderer } from './FixerCanvasRenderer';
import { FIXER_DESKTOP_TEMPLATE } from './FixerDesktopTemplate';

interface FixerDesktopViewDependencies {
  readonly save: () => Promise<void>;
}

const GRID_FIELDS = ['cellWidth', 'cellHeight', 'gapX', 'gapY', 'marginX', 'marginY'] as const;
type GridField = (typeof GRID_FIELDS)[number];

export class FixerDesktopView {
  private root: HTMLElement | undefined;
  private image: ImageBitmap | undefined;
  private source: LocalImageSelection | undefined;
  private grid: GridSettings = { ...DEFAULT_GRID };
  private frames: FrameSpec[] = [];
  private adjustments: Record<string, FrameAdjustment> = {};
  private selected = 0;
  private zoom = 2;
  private loadRequest = 0;
  private readonly renderer = new FixerCanvasRenderer();

  constructor(private readonly dependencies: FixerDesktopViewDependencies) {}

  public mount(target: Element): void {
    const root = target.ownerDocument.createElement('div');
    root.innerHTML = FIXER_DESKTOP_TEMPLATE;
    root.addEventListener('click', this.handleClick);
    root.addEventListener('change', this.handleChange);
    this.root = root;
    target.replaceChildren(root);
  }

  public dispose(): void {
    this.loadRequest += 1;
    this.image?.close();
    this.image = undefined;
    this.root?.removeEventListener('click', this.handleClick);
    this.root?.removeEventListener('change', this.handleChange);
    this.root?.remove();
    this.root = undefined;
  }

  public async loadSource(source: LocalImageSelection, savedSettings: unknown): Promise<boolean> {
    const request = ++this.loadRequest;
    const mime = source.name.toLowerCase().endsWith('.webp') ? 'image/webp' : 'image/png';
    const bitmap = await createImageBitmap(new Blob([new Uint8Array(source.bytes)], { type: mime }));
    if (request !== this.loadRequest || !this.root) {
      bitmap.close();
      return false;
    }
    this.image?.close();
    this.image = bitmap;
    this.source = source;
    this.restoreSettings(savedSettings, bitmap);
    this.text('source-name', `${source.name} · ${bitmap.width} × ${bitmap.height}`);
    this.render();
    this.showStatus(`${this.frames.length} frames ready`);
    return true;
  }

  public setOutputPath(path: string): void {
    this.text('output-path', path.split(/[\\/]/).at(-1) ?? path);
    const output = this.root?.querySelector<HTMLOutputElement>('[data-role="output-path"]');
    if (output) output.title = path;
  }

  public showStatus(message: string): void {
    this.text('status', message);
  }

  public createProjectFile(): ProjectFile | null {
    if (!this.source || !this.image) return null;
    return createProjectFile({
      sourceName: this.source.name,
      sourceWidth: this.image.width,
      sourceHeight: this.image.height,
      grid: this.grid,
      adjustments: this.adjustments,
    });
  }

  public async exportPng(): Promise<Uint8Array> {
    if (!this.image) throw new Error('Select a project sprite before saving');
    const canvas = this.renderer.createExportCanvas(this.image, this.frames, this.adjustments);
    const blob = await new Promise<Blob>((resolve, reject) => {
      canvas.toBlob((result) => result ? resolve(result) : reject(new Error('Unable to encode PNG')), 'image/png');
    });
    return new Uint8Array(await blob.arrayBuffer());
  }

  private restoreSettings(savedSettings: unknown, image: ImageBitmap): void {
    const project = parseProjectFile(savedSettings);
    if (project && project.sourceName === this.source?.name
      && project.sourceWidth === image.width && project.sourceHeight === image.height) {
      this.grid = project.grid;
      this.adjustments = project.adjustments;
    } else {
      this.grid = this.defaultGrid(image.width, image.height);
      this.adjustments = {};
    }
    this.selected = 0;
    this.rebuildFrames();
  }

  private defaultGrid(width: number, height: number): GridSettings {
    const cellWidth = Math.min(DEFAULT_GRID.cellWidth, width);
    const cellHeight = Math.min(DEFAULT_GRID.cellHeight, height);
    return normalizeGrid({
      ...DEFAULT_GRID,
      cellWidth,
      cellHeight,
      columns: Math.min(128, Math.max(1, Math.floor(width / cellWidth))),
      rows: Math.min(128, Math.max(1, Math.floor(height / cellHeight))),
    });
  }

  private rebuildFrames(): void {
    if (!this.image) return;
    const grid = this.grid;
    const columns = Math.floor((this.image.width - grid.marginX + grid.gapX) / (grid.cellWidth + grid.gapX));
    const rows = Math.floor((this.image.height - grid.marginY + grid.gapY) / (grid.cellHeight + grid.gapY));
    this.grid = normalizeGrid({ ...grid, columns: Math.max(1, columns), rows: Math.max(1, rows) });
    this.frames = createFrameSpecs(this.image.width, this.image.height, this.grid);
    this.selected = Math.min(this.selected, Math.max(0, this.frames.length - 1));
  }

  private render(): void {
    if (!this.root || !this.image) return;
    const sourceCanvas = this.require<HTMLCanvasElement>('[data-role="source-canvas"]');
    const previewCanvas = this.require<HTMLCanvasElement>('[data-role="preview-canvas"]');
    this.renderer.renderSource(sourceCanvas, this.image, this.frames, this.selected);
    sourceCanvas.hidden = false;
    sourceCanvas.style.width = `${this.image.width * this.zoom}px`;
    sourceCanvas.style.height = `${this.image.height * this.zoom}px`;
    this.root.querySelector<HTMLElement>('[data-role="empty"]')?.setAttribute('hidden', '');
    const frame = this.frames[this.selected];
    if (frame) {
      this.renderer.renderPreview(previewCanvas, this.image, frame, this.adjustmentFor(frame));
      previewCanvas.hidden = false;
    }
    this.text('frame-count', frame ? `Frame ${this.selected + 1} / ${this.frames.length}` : 'No frame detected');
    this.text('zoom', `${this.zoom * 100}%`);
    this.writeFields();
    const save = this.root.querySelector<HTMLButtonElement>('[data-action="save"]');
    if (save) save.disabled = !frame;
  }

  private writeFields(): void {
    for (const key of GRID_FIELDS) this.setField(key, this.grid[key]);
    const frame = this.frames[this.selected];
    const adjustment = frame ? this.adjustmentFor(frame) : undefined;
    this.setField('offsetX', adjustment?.offsetX ?? 0);
    this.setField('offsetY', adjustment?.offsetY ?? 0);
  }

  private adjustmentFor(frame: FrameSpec): FrameAdjustment {
    return this.adjustments[String(frame.index)] ?? frame.adjustment;
  }

  private setField(key: string, value: number): void {
    const input = this.root?.querySelector<HTMLInputElement>(`[data-field="${key}"]`);
    if (input) input.value = String(value);
  }

  private readonly handleClick = (event: MouseEvent): void => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    if (target.matches('[data-role="source-canvas"]')) {
      this.selectCanvasFrame(target as HTMLCanvasElement, event);
      return;
    }
    const action = target.closest<HTMLElement>('[data-action]')?.dataset.action;
    this.performAction(action);
  };

  private performAction(action?: string): void {
    if (action === 'save') void this.dependencies.save();
    if (action === 'previous') this.selectFrame(this.selected - 1);
    if (action === 'next') this.selectFrame(this.selected + 1);
    if (action === 'zoom-out') this.changeZoom(-1);
    if (action === 'zoom-in') this.changeZoom(1);
  }

  private selectCanvasFrame(canvas: HTMLCanvasElement, event: MouseEvent): void {
    const rectangle = canvas.getBoundingClientRect();
    const x = (event.clientX - rectangle.left) * canvas.width / rectangle.width;
    const y = (event.clientY - rectangle.top) * canvas.height / rectangle.height;
    const index = this.frames.findIndex((frame) => x >= frame.sourceX && x < frame.sourceX + frame.width
      && y >= frame.sourceY && y < frame.sourceY + frame.height);
    if (index >= 0) this.selectFrame(index);
  }

  private selectFrame(index: number): void {
    if (index < 0 || index >= this.frames.length) return;
    this.selected = index;
    this.render();
  }

  private changeZoom(delta: number): void {
    this.zoom = Math.max(1, Math.min(6, this.zoom + delta));
    this.render();
  }

  private readonly handleChange = (event: Event): void => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement) || !Number.isFinite(target.valueAsNumber)) return;
    const field = target.dataset.field;
    if (field === 'offsetX' || field === 'offsetY') {
      this.updateOffset(field, target.valueAsNumber);
      return;
    }
    if (GRID_FIELDS.some((key) => key === field)) this.updateGrid(field as GridField, target.valueAsNumber);
  };

  private updateGrid(field: GridField, value: number): void {
    this.grid = normalizeGrid({ ...this.grid, [field]: value });
    this.adjustments = {};
    this.rebuildFrames();
    this.render();
  }

  private updateOffset(field: 'offsetX' | 'offsetY', value: number): void {
    const frame = this.frames[this.selected];
    if (!frame) return;
    this.adjustments[String(frame.index)] = updateAdjustment(frame, this.adjustmentFor(frame), { [field]: value });
    this.render();
  }

  private text(role: string, value: string): void {
    const element = this.root?.querySelector<HTMLElement>(`[data-role="${role}"]`);
    if (element) element.textContent = value;
  }

  private require<T extends Element>(selector: string): T {
    const element = this.root?.querySelector<T>(selector);
    if (!element) throw new Error(`Sprite Sheet Fixer view is missing ${selector}`);
    return element;
  }
}
