import type { ExtractionGridConfig } from '../../tool/spriteSheetPacker/types';
import type { JsonValue } from './DesktopToolModule';

interface SpriteSheetPackerDesktopViewDependencies {
  readonly initialGrid: ExtractionGridConfig;
  readonly preview: (grid: ExtractionGridConfig) => Promise<JsonValue | undefined>;
}

const GRID_FIELDS: readonly {
  key: keyof ExtractionGridConfig;
  label: string;
  min: number;
}[] = [
  { key: 'imageWidth', label: 'Sheet width', min: 1 },
  { key: 'imageHeight', label: 'Sheet height', min: 1 },
  { key: 'frameWidth', label: 'Frame width', min: 1 },
  { key: 'frameHeight', label: 'Frame height', min: 1 },
  { key: 'margin', label: 'Margin', min: 0 },
  { key: 'spacing', label: 'Spacing', min: 0 },
];

export class SpriteSheetPackerDesktopView {
  private form: HTMLFormElement | undefined;
  private result: HTMLElement | undefined;
  private previewGrid: HTMLElement | undefined;
  private inputs = new Map<keyof ExtractionGridConfig, HTMLInputElement>();
  private readonly submitListener = (event: SubmitEvent): void => {
    event.preventDefault();
    void this.preview();
  };

  constructor(private readonly dependencies: SpriteSheetPackerDesktopViewDependencies) {}

  public mount(target: Element): void {
    const ownerDocument = target.ownerDocument;
    const layout = ownerDocument.createElement('div');
    layout.className = 'sprite-packer-workbench';
    layout.append(this.createEditor(ownerDocument), this.createPreview(ownerDocument));
    target.replaceChildren(layout);
  }

  public dispose(): void {
    this.form?.removeEventListener('submit', this.submitListener);
    this.form?.remove();
    this.form = undefined;
    this.result = undefined;
    this.previewGrid = undefined;
    this.inputs.clear();
  }

  private createEditor(ownerDocument: Document): HTMLElement {
    const editor = ownerDocument.createElement('section');
    editor.className = 'sprite-packer-editor';
    editor.setAttribute('aria-labelledby', 'sprite-packer-editor-title');

    const eyebrow = ownerDocument.createElement('span');
    eyebrow.className = 'desktop-tool-eyebrow';
    eyebrow.textContent = 'Integrated module';

    const title = ownerDocument.createElement('h3');
    title.id = 'sprite-packer-editor-title';
    title.textContent = 'Grid slicing';

    const description = ownerDocument.createElement('p');
    description.textContent = 'Describe the source sheet and inspect its frame boundaries instantly.';

    const form = ownerDocument.createElement('form');
    form.className = 'sprite-packer-form';
    form.addEventListener('submit', this.submitListener);
    this.form = form;

    const fields = ownerDocument.createElement('div');
    fields.className = 'sprite-packer-fields';
    for (const field of GRID_FIELDS) fields.append(this.createField(ownerDocument, field));

    const submit = ownerDocument.createElement('button');
    submit.type = 'submit';
    submit.className = 'sprite-packer-preview-button';
    submit.textContent = 'Preview slices';

    form.append(fields, submit);
    editor.append(eyebrow, title, description, form);
    return editor;
  }

  private createField(
    ownerDocument: Document,
    field: (typeof GRID_FIELDS)[number],
  ): HTMLLabelElement {
    const label = ownerDocument.createElement('label');
    label.className = 'sprite-packer-field';
    const text = ownerDocument.createElement('span');
    text.textContent = field.label;
    const input = ownerDocument.createElement('input');
    input.type = 'number';
    input.name = field.key;
    input.min = String(field.min);
    input.step = '1';
    input.required = true;
    input.value = String(this.dependencies.initialGrid[field.key]);
    this.inputs.set(field.key, input);
    label.append(text, input);
    return label;
  }

  private createPreview(ownerDocument: Document): HTMLElement {
    const preview = ownerDocument.createElement('section');
    preview.className = 'sprite-packer-preview';
    preview.setAttribute('aria-labelledby', 'sprite-packer-preview-title');

    const header = ownerDocument.createElement('div');
    header.className = 'sprite-packer-preview-header';
    const title = ownerDocument.createElement('h3');
    title.id = 'sprite-packer-preview-title';
    title.textContent = 'Frame map';
    const result = ownerDocument.createElement('output');
    result.className = 'sprite-packer-result';
    result.textContent = 'Ready to preview';
    this.result = result;
    header.append(title, result);

    const grid = ownerDocument.createElement('div');
    grid.className = 'sprite-packer-grid';
    grid.setAttribute('aria-label', 'Sprite frame preview');
    this.previewGrid = grid;
    this.renderEmptyPreview();

    preview.append(header, grid);
    return preview;
  }

  private async preview(): Promise<void> {
    const grid = this.readGrid();
    this.setBusy(true);
    try {
      const result = await this.dependencies.preview(grid);
      const sliceCount = readSliceCount(result);
      this.renderGrid(grid, sliceCount);
    } catch (error) {
      if (this.result) this.result.textContent = describeError(error);
    } finally {
      this.setBusy(false);
    }
  }

  private readGrid(): ExtractionGridConfig {
    return {
      imageWidth: this.readInput('imageWidth'),
      imageHeight: this.readInput('imageHeight'),
      frameWidth: this.readInput('frameWidth'),
      frameHeight: this.readInput('frameHeight'),
      margin: this.readInput('margin'),
      spacing: this.readInput('spacing'),
    };
  }

  private readInput(key: keyof ExtractionGridConfig): number {
    const value = this.inputs.get(key)?.valueAsNumber;
    if (value === undefined || !Number.isFinite(value)) {
      throw new TypeError(`Enter a valid ${key}`);
    }
    return value;
  }

  private renderGrid(grid: ExtractionGridConfig, sliceCount: number): void {
    if (!this.previewGrid || !this.result) return;
    this.previewGrid.replaceChildren();
    const columns = countAxis(grid.imageWidth, grid.frameWidth, grid.margin, grid.spacing);
    const rows = countAxis(grid.imageHeight, grid.frameHeight, grid.margin, grid.spacing);
    this.previewGrid.style.setProperty('--sprite-grid-columns', String(Math.max(columns, 1)));
    const visibleCount = Math.min(sliceCount, 120);
    for (let index = 0; index < visibleCount; index += 1) {
      const frame = this.previewGrid.ownerDocument.createElement('span');
      frame.className = 'sprite-packer-frame';
      frame.textContent = String(index + 1);
      this.previewGrid.append(frame);
    }
    this.result.textContent = `${sliceCount} frames · ${columns} × ${rows}`;
  }

  private renderEmptyPreview(): void {
    if (!this.previewGrid) return;
    const hint = this.previewGrid.ownerDocument.createElement('p');
    hint.className = 'sprite-packer-preview-hint';
    hint.textContent = 'Your frame layout will appear here.';
    this.previewGrid.replaceChildren(hint);
  }

  private setBusy(busy: boolean): void {
    const button = this.form?.querySelector<HTMLButtonElement>('button[type="submit"]');
    if (!button) return;
    button.disabled = busy;
    button.textContent = busy ? 'Calculating...' : 'Preview slices';
  }
}

function countAxis(total: number, frame: number, margin: number, spacing: number): number {
  if (frame <= 0 || total < margin + frame) return 0;
  return Math.floor((total - margin - frame) / (frame + spacing)) + 1;
}

function readSliceCount(result: JsonValue | undefined): number {
  if (!result || Array.isArray(result) || typeof result !== 'object') return 0;
  const sliceCount = result.sliceCount;
  return typeof sliceCount === 'number' && Number.isFinite(sliceCount) ? sliceCount : 0;
}

function describeError(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}
