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

let initialized = false;

function renderSwatches(root: HTMLElement): void {
  root.querySelectorAll<HTMLElement>('[data-swatch-palette]').forEach((strip) => {
    const palette = PRESET_PALETTES[strip.dataset.swatchPalette ?? ''] ?? [];
    strip.replaceChildren(...palette.map((color) => {
      const swatch = document.createElement('span');
      swatch.style.backgroundColor = color.hex;
      return swatch;
    }));
  });
}

function bindDragAndDrop(
  root: HTMLElement,
  dropZone: HTMLElement,
  strings: Record<string, string>,
  loadFile: (file: File) => void,
): void {
  ['dragenter', 'dragover'].forEach((eventName) => dropZone.addEventListener(eventName, (event) => {
    event.preventDefault();
    dropZone.classList.add('is-dragging');
    const dropTitle = root.querySelector<HTMLElement>('#pas-drop-title');
    if (dropTitle) dropTitle.textContent = strings.dropActive;
  }));
  ['dragleave', 'drop'].forEach((eventName) => dropZone.addEventListener(eventName, (event) => {
    event.preventDefault();
    dropZone.classList.remove('is-dragging');
    const dropTitle = root.querySelector<HTMLElement>('#pas-drop-title');
    if (dropTitle) dropTitle.textContent = strings.uploadTitle;
  }));
  dropZone.addEventListener('drop', (event) => {
    const file = (event as DragEvent).dataTransfer?.files[0];
    if (file) loadFile(file);
  });
}

export function initPixelArtPaletteSwapper(): void {
  if (initialized) return;
  initialized = true;

  const root = document.querySelector<HTMLElement>('[data-tool="pixel-art-palette-swapper"]');
  if (!root) return;

  const fileInput = root.querySelector<HTMLInputElement>('#pas-file-input');
  const chooseButton = root.querySelector<HTMLButtonElement>('#pas-choose-image');
  const dropZone = root.querySelector<HTMLElement>('#pas-drop-zone');
  const fileName = root.querySelector<HTMLElement>('#pas-file-name');
  const status = root.querySelector<HTMLElement>('#pas-status');
  const sourceCanvas = root.querySelector<HTMLCanvasElement>('#pas-source-canvas');
  const resultCanvas = root.querySelector<HTMLCanvasElement>('#pas-result-canvas');
  const emptyState = root.querySelector<HTMLElement>('#pas-empty-state');
  const canvasPair = root.querySelector<HTMLElement>('#pas-canvas-pair');
  const customPaletteInput = root.querySelector<HTMLTextAreaElement>('#pas-custom-palette');
  const paletteCount = root.querySelector<HTMLElement>('#pas-palette-count');
  const inspectorPaletteCount = root.querySelector<HTMLElement>('#pas-inspector-palette-count');
  const sourceColorCount = root.querySelector<HTMLElement>('#pas-source-colors');
  const mappedColorCount = root.querySelector<HTMLElement>('#pas-mapped-colors');
  const imageSize = root.querySelector<HTMLElement>('#pas-image-size');
  const downloadButton = root.querySelector<HTMLButtonElement>('#pas-download');
  const downloadHint = root.querySelector<HTMLElement>('#pas-download-hint');
  const renderNote = root.querySelector<HTMLElement>('#pas-render-note');
  const zoomInput = root.querySelector<HTMLInputElement>('#pas-zoom');
  const zoomValue = root.querySelector<HTMLOutputElement>('#pas-zoom-value');
  const preserveAlpha = root.querySelector<HTMLInputElement>('#pas-preserve-alpha');
  const inspectorPreview = root.querySelector<HTMLElement>('#pas-inspector-preview');

  if (!fileInput || !chooseButton || !dropZone || !sourceCanvas || !resultCanvas || !emptyState || !canvasPair || !customPaletteInput || !downloadButton || !zoomInput || !zoomValue) {
    return;
  }

  let activePalette: PaletteColor[] = PRESET_PALETTES.gameBoy;
  let sourceImage: SourceImageState | null = null;
  let resultData: Uint8ClampedArray | null = null;
  let activePaletteId = 'gameBoy';
  const strings = {
    processing: root.dataset.processing ?? 'Mapping pixels',
    ready: root.dataset.ready ?? 'Ready',
    dropActive: root.dataset.dropActive ?? 'Release to load',
    uploadTitle: root.dataset.uploadTitle ?? 'Drop a sprite or spritesheet',
    invalidPalette: root.dataset.invalidPalette ?? 'Add at least one valid hex color',
    invalidImage: root.dataset.invalidImage ?? 'Choose a supported image',
    mappedSummary: root.dataset.mappedSummary ?? 'Mapped {source} source colors to {mapped} palette colors',
  };

  const setStatus = (message: string, tone = 'idle'): void => {
    if (status) {
      status.textContent = message;
      status.dataset.tone = tone;
    }
  };

  const updatePaletteCounts = (): void => {
    const label = `${activePalette.length} palette colors`;
    if (paletteCount) paletteCount.textContent = label;
    if (inspectorPaletteCount) inspectorPaletteCount.textContent = String(activePalette.length);
  };

  const fitCanvas = (canvas: HTMLCanvasElement, width: number, height: number): void => {
    const zoom = Number(zoomInput.value);
    const displayWidth = Math.min(620, Math.max(32, width * zoom));
    const displayHeight = Math.max(32, Math.round(displayWidth * height / width));
    canvas.style.width = `${displayWidth}px`;
    canvas.style.height = `${displayHeight}px`;
  };

  const drawSource = (): void => {
    if (!sourceImage) return;
    sourceCanvas.width = sourceImage.width;
    sourceCanvas.height = sourceImage.height;
    const context = sourceCanvas.getContext('2d');
    if (!context) return;
    context.imageSmoothingEnabled = false;
    context.putImageData(new ImageData(new Uint8ClampedArray(sourceImage.data), sourceImage.width, sourceImage.height), 0, 0);
    fitCanvas(sourceCanvas, sourceImage.width, sourceImage.height);
  };

  const drawResult = (): void => {
    if (!sourceImage || !resultData) return;
    resultCanvas.width = sourceImage.width;
    resultCanvas.height = sourceImage.height;
    const context = resultCanvas.getContext('2d');
    if (!context) return;
    context.imageSmoothingEnabled = false;
    context.putImageData(new ImageData(new Uint8ClampedArray(resultData), sourceImage.width, sourceImage.height), 0, 0);
    fitCanvas(resultCanvas, sourceImage.width, sourceImage.height);
    if (inspectorPreview) inspectorPreview.style.backgroundImage = `url(${resultCanvas.toDataURL('image/png')})`;
  };

  const renderResult = (): void => {
    if (!sourceImage) return;
    setStatus(strings.processing, 'working');
    const quantized = quantizeImageData(sourceImage.data, activePalette, preserveAlpha?.checked ?? true);
    resultData = quantized.data;
    drawResult();
    if (sourceColorCount) sourceColorCount.textContent = String(quantized.sourceColors);
    if (mappedColorCount) mappedColorCount.textContent = String(quantized.mappedColors);
    if (imageSize) imageSize.textContent = `${sourceImage.width} × ${sourceImage.height}`;
    if (renderNote) renderNote.textContent = strings.mappedSummary.replace('{source}', String(quantized.sourceColors)).replace('{mapped}', String(quantized.mappedColors));
    setStatus(strings.ready, 'ready');
    downloadButton.disabled = false;
    if (downloadHint) downloadHint.textContent = 'Rendered locally in your browser';
  };

  const loadFile = (file: File): void => {
    if (!file.type.startsWith('image/')) {
      setStatus(strings.invalidImage, 'error');
      return;
    }
    const objectUrl = URL.createObjectURL(file);
    const image = new Image();
    image.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;
      const context = canvas.getContext('2d', { willReadFrequently: true });
      if (!context) {
        URL.revokeObjectURL(objectUrl);
        setStatus('The image could not be read', 'error');
        return;
      }
      context.imageSmoothingEnabled = false;
      context.drawImage(image, 0, 0);
      sourceImage = { name: file.name, width: canvas.width, height: canvas.height, data: context.getImageData(0, 0, canvas.width, canvas.height).data };
      if (fileName) fileName.textContent = file.name;
      root.querySelector<HTMLElement>('.pas-command-bar')?.classList.add('has-image');
      chooseButton.textContent = root.dataset.replaceImage ?? 'Replace image';
      emptyState.hidden = true;
      canvasPair.hidden = false;
      drawSource();
      renderResult();
      URL.revokeObjectURL(objectUrl);
    };
    image.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      setStatus('The image could not be read', 'error');
    };
    image.src = objectUrl;
  };

  const applyPalette = (palette: PaletteColor[], paletteId: string): void => {
    if (palette.length === 0) {
      setStatus(strings.invalidPalette, 'error');
      return;
    }
    activePalette = palette;
    activePaletteId = paletteId;
    root.querySelectorAll<HTMLButtonElement>('[data-palette-id]').forEach((button) => {
      button.classList.toggle('is-selected', button.dataset.paletteId === paletteId);
    });
    updatePaletteCounts();
    if (sourceImage) renderResult();
  };

  chooseButton.addEventListener('click', () => fileInput.click());
  dropZone.addEventListener('click', () => fileInput.click());
  dropZone.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      fileInput.click();
    }
  });
  fileInput.addEventListener('change', () => {
    const file = fileInput.files?.[0];
    if (file) loadFile(file);
  });

  bindDragAndDrop(root, dropZone, strings, loadFile);

  root.querySelectorAll<HTMLButtonElement>('[data-palette-id]').forEach((button) => {
    button.addEventListener('click', () => {
      const paletteId = button.dataset.paletteId ?? 'gameBoy';
      customPaletteInput.value = PRESET_PALETTES[paletteId].map((color) => color.hex).join(', ');
      applyPalette(PRESET_PALETTES[paletteId], paletteId);
    });
  });
  root.querySelector<HTMLButtonElement>('#pas-apply-custom')?.addEventListener('click', () => {
    applyPalette(parsePaletteInput(customPaletteInput.value), 'custom');
  });
  root.querySelector<HTMLButtonElement>('#pas-reset-custom')?.addEventListener('click', () => {
    customPaletteInput.value = PRESET_PALETTES.gameBoy.map((color) => color.hex).join(', ');
    applyPalette(PRESET_PALETTES.gameBoy, 'gameBoy');
  });
  preserveAlpha?.addEventListener('change', renderResult);
  zoomInput.addEventListener('input', () => {
    zoomValue.value = `${zoomInput.value}x`;
    if (sourceImage) {
      fitCanvas(sourceCanvas, sourceImage.width, sourceImage.height);
      fitCanvas(resultCanvas, sourceImage.width, sourceImage.height);
    }
  });
  window.addEventListener('resize', () => {
    if (sourceImage) {
      fitCanvas(sourceCanvas, sourceImage.width, sourceImage.height);
      fitCanvas(resultCanvas, sourceImage.width, sourceImage.height);
    }
  });
  downloadButton.addEventListener('click', () => {
    if (!sourceImage || !resultData) return;
    resultCanvas.toBlob((blob) => {
      if (!blob) return;
      const link = document.createElement('a');
      const baseName = sourceImage?.name.replace(/\.[^.]+$/, '') || 'pixel-art';
      link.download = `${baseName}-${activePaletteId}.png`;
      link.href = URL.createObjectURL(blob);
      link.click();
      window.setTimeout(() => URL.revokeObjectURL(link.href), 1000);
    }, 'image/png');
  });

  renderSwatches(root);
  updatePaletteCounts();
}
