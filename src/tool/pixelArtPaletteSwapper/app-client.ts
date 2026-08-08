import {
  PRESET_PALETTES,
  parsePaletteInput,
  quantizeImageData,
  type PaletteColor,
} from './logic';

interface SourceImageState {
  name: string;
  width: number;
  height: number;
  data: Uint8ClampedArray;
}

interface AppEls {
  root: HTMLElement;
  fileInput: HTMLInputElement;
  chooseButton: HTMLButtonElement;
  dropZone: HTMLElement;
  sourceCanvas: HTMLCanvasElement;
  resultCanvas: HTMLCanvasElement;
  emptyState: HTMLElement;
  canvasPair: HTMLElement;
  customPaletteInput: HTMLTextAreaElement;
  downloadButton: HTMLButtonElement;
  zoomInput: HTMLInputElement;
  zoomValue: HTMLOutputElement;
}

let initialized = false;

function getEl<T extends HTMLElement>(root: HTMLElement, sel: string): T | null {
  return root.querySelector<T>(sel);
}

function queryAppElements(root: HTMLElement): AppEls | null {
  const req = [
    '#pas-file-input', '#pas-choose-image', '#pas-drop-zone',
    '#pas-source-canvas', '#pas-result-canvas', '#pas-empty-state',
    '#pas-canvas-pair', '#pas-custom-palette', '#pas-download',
    '#pas-zoom', '#pas-zoom-value',
  ];
  const found = req.map((s) => root.querySelector(s));
  if (found.some((el) => !el)) return null;

  return {
    root,
    fileInput: found[0] as HTMLInputElement,
    chooseButton: found[1] as HTMLButtonElement,
    dropZone: found[2] as HTMLElement,
    sourceCanvas: found[3] as HTMLCanvasElement,
    resultCanvas: found[4] as HTMLCanvasElement,
    emptyState: found[5] as HTMLElement,
    canvasPair: found[6] as HTMLElement,
    customPaletteInput: found[7] as HTMLTextAreaElement,
    downloadButton: found[8] as HTMLButtonElement,
    zoomInput: found[9] as HTMLInputElement,
    zoomValue: found[10] as HTMLOutputElement,
  };
}

function renderSwatches(root: HTMLElement): void {
  root.querySelectorAll<HTMLElement>('[data-swatch-palette]').forEach((strip) => {
    const palette = PRESET_PALETTES[strip.dataset.swatchPalette ?? ''] ?? [];
    strip.replaceChildren(...palette.map((c) => {
      const s = document.createElement('span');
      s.style.backgroundColor = c.hex;
      return s;
    }));
  });
}

function fitCanvas(canvas: HTMLCanvasElement, width: number, height: number, zoom: number): void {
  const displayWidth = Math.min(620, Math.max(32, width * zoom));
  const displayHeight = Math.max(32, Math.round(displayWidth * height / width));
  canvas.style.width = `${displayWidth}px`;
  canvas.style.height = `${displayHeight}px`;
}

interface CanvasDrawOptions {
  canvas: HTMLCanvasElement;
  width: number;
  height: number;
  data: Uint8ClampedArray;
  zoom: number;
}

function drawCanvas(opts: CanvasDrawOptions): void {
  opts.canvas.width = opts.width;
  opts.canvas.height = opts.height;
  const context = opts.canvas.getContext('2d');
  if (!context) return;
  context.imageSmoothingEnabled = false;
  context.putImageData(new ImageData(new Uint8ClampedArray(opts.data), opts.width, opts.height), 0, 0);
  fitCanvas(opts.canvas, opts.width, opts.height, opts.zoom);
}

function setStatus(root: HTMLElement, message: string, tone = 'idle'): void {
  const statusEl = getEl<HTMLElement>(root, '#pas-status');
  if (!statusEl) return;
  statusEl.textContent = message;
  statusEl.dataset.tone = tone;
}

function updateSummaryTexts(root: HTMLElement, q: { sourceColors: number; mappedColors: number }, width: number, height: number): void {
  const scc = getEl<HTMLElement>(root, '#pas-source-colors');
  const mcc = getEl<HTMLElement>(root, '#pas-mapped-colors');
  const isz = getEl<HTMLElement>(root, '#pas-image-size');
  const rn = getEl<HTMLElement>(root, '#pas-render-note');
  if (scc) scc.textContent = String(q.sourceColors);
  if (mcc) mcc.textContent = String(q.mappedColors);
  if (isz) isz.textContent = `${width} × ${height}`;
  if (rn) rn.textContent = (root.dataset.mappedSummary ?? '').replace('{source}', String(q.sourceColors)).replace('{mapped}', String(q.mappedColors));
}

function processImageLoad(els: AppEls, file: File, img: HTMLImageElement): SourceImageState | null {
  const canvas = document.createElement('canvas');
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  if (!ctx) return null;
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(img, 0, 0);
  const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
  const fn = getEl<HTMLElement>(els.root, '#pas-file-name');
  if (fn) fn.textContent = file.name;
  getEl<HTMLElement>(els.root, '.pas-command-bar')?.classList.add('has-image');
  els.chooseButton.textContent = els.root.dataset.replaceImage ?? 'Replace image';
  els.emptyState.hidden = true;
  els.canvasPair.hidden = false;
  return { name: file.name, width: canvas.width, height: canvas.height, data };
}

function setupFileHandler(els: AppEls, onLoaded: (src: SourceImageState) => void): void {
  els.chooseButton.addEventListener('click', () => els.fileInput.click());
  els.dropZone.addEventListener('click', () => els.fileInput.click());
  els.fileInput.addEventListener('change', () => {
    const file = els.fileInput.files?.[0];
    if (!file || !file.type.startsWith('image/')) return;
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      const src = processImageLoad(els, file, img);
      if (src) onLoaded(src);
      URL.revokeObjectURL(url);
    };
    img.src = url;
  });
}

function setupPresetButtons(els: AppEls, onApply: (p: PaletteColor[], id: string) => void): void {
  els.root.querySelectorAll<HTMLButtonElement>('[data-palette-id]').forEach((b) => b.addEventListener('click', () => {
    const id = b.dataset.paletteId ?? 'gameBoy';
    els.customPaletteInput.value = PRESET_PALETTES[id].map((c) => c.hex).join(', ');
    onApply(PRESET_PALETTES[id], id);
  }));
}

function setupCustomAndDownload(els: AppEls, onCustomApply: (hexList: string) => void, onCustomReset: () => void, onDownload: () => void): void {
  getEl<HTMLButtonElement>(els.root, '#pas-apply-custom')?.addEventListener('click', () => onCustomApply(els.customPaletteInput.value));
  getEl<HTMLButtonElement>(els.root, '#pas-reset-custom')?.addEventListener('click', () => onCustomReset());
  els.downloadButton.addEventListener('click', onDownload);
}

export function initPixelArtPaletteSwapper(): void {
  if (initialized) return;
  initialized = true;
  const root = getEl<HTMLElement>(document.body, '[data-tool="pixel-art-palette-swapper"]');
  if (!root) return;
  const els = queryAppElements(root);
  if (!els) return;

  let activePalette = PRESET_PALETTES.gameBoy;
  let sourceImage: SourceImageState | null = null;
  let resultData: Uint8ClampedArray | null = null;
  let activePaletteId = 'gameBoy';

  const renderResult = (): void => {
    if (!sourceImage) return;
    setStatus(els.root, els.root.dataset.processing ?? 'Mapping pixels', 'working');
    const alpha = getEl<HTMLInputElement>(els.root, '#pas-preserve-alpha')?.checked ?? true;
    const q = quantizeImageData(sourceImage.data, activePalette, alpha);
    resultData = q.data;
    drawCanvas({ canvas: els.resultCanvas, width: sourceImage.width, height: sourceImage.height, data: resultData, zoom: Number(els.zoomInput.value) });
    const ip = getEl<HTMLElement>(els.root, '#pas-inspector-preview');
    if (ip) ip.style.backgroundImage = `url(${els.resultCanvas.toDataURL('image/png')})`;
    updateSummaryTexts(els.root, q, sourceImage.width, sourceImage.height);
    setStatus(els.root, els.root.dataset.ready ?? 'Ready', 'ready');
    els.downloadButton.disabled = false;
  };

  const applyPalette = (palette: PaletteColor[], paletteId: string): void => {
    if (palette.length === 0) return;
    activePalette = palette;
    activePaletteId = paletteId;
    els.root.querySelectorAll<HTMLButtonElement>('[data-palette-id]').forEach((b) => b.classList.toggle('is-selected', b.dataset.paletteId === paletteId));
    if (sourceImage) renderResult();
  };

  setupFileHandler(els, (src) => {
    sourceImage = src;
    drawCanvas({ canvas: els.sourceCanvas, width: src.width, height: src.height, data: src.data, zoom: Number(els.zoomInput.value) });
    renderResult();
  });

  setupPresetButtons(els, applyPalette);

  setupCustomAndDownload(els,
    (val) => applyPalette(parsePaletteInput(val), 'custom'),
    () => { els.customPaletteInput.value = PRESET_PALETTES.gameBoy.map((c) => c.hex).join(', '); applyPalette(PRESET_PALETTES.gameBoy, 'gameBoy'); },
    () => {
      if (!sourceImage || !resultData) return;
      els.resultCanvas.toBlob((blob) => {
        if (!blob) return;
        const a = document.createElement('a');
        a.download = `${sourceImage?.name.replace(/\.[^.]+$/, '') || 'pixel-art'}-${activePaletteId}.png`;
        a.href = URL.createObjectURL(blob);
        a.click();
      }, 'image/png');
    }
  );

  renderSwatches(els.root);
}
