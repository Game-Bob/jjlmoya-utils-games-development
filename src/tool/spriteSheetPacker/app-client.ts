import JSZip from 'jszip';
import { bindDropzone } from './dropzone-client';
import { initExtractor, updateExtractor } from './extractor-client';
import { bindFlipbook, startFlipbookLoop } from './flipbook-client';
import { calculateBinPacking, type ExportFormat, type SpriteFrameInput } from './logic';
import { drawEmptyCanvasMessage, setupStepper, spawnParticle, triggerButtonFeedback, type LoadedImageItem } from './packer-ui';

let loadedImages: LoadedImageItem[] = [];
let currentAtlasData: ReturnType<typeof calculateBinPacking> | null = null;

function parseInputValue(id: string, fallback: string): number {
  const el = document.getElementById(id) as HTMLInputElement | null;
  return parseInt(el?.value || fallback, 10);
}

function renderAtlasCanvas(): void {
  const canvas = document.getElementById('ssp-atlas-canvas') as HTMLCanvasElement | null;
  if (!canvas) return;

  if (!currentAtlasData || loadedImages.length === 0) {
    drawEmptyCanvasMessage(canvas, 'Upload PNG frames to preview packed texture atlas');
    return;
  }

  canvas.width = currentAtlasData.textureWidth;
  canvas.height = currentAtlasData.textureHeight;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (const frame of currentAtlasData.frames) {
    const found = loadedImages.find((img) => img.id === frame.id);
    if (found) {
      ctx.drawImage(found.img, frame.x, frame.y, frame.width, frame.height);
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.4)';
      ctx.lineWidth = 1;
      ctx.strokeRect(frame.x, frame.y, frame.width, frame.height);
    }
  }
}

function updateStatsUI(): void {
  if (!currentAtlasData) return;

  const effEl = document.getElementById('ssp-stat-efficiency');
  const dcEl = document.getElementById('ssp-stat-drawcalls');
  const framesEl = document.getElementById('ssp-stat-frames');
  const sizeEl = document.getElementById('ssp-stat-size');
  const codeEl = document.getElementById('ssp-code-snippet');

  if (effEl) effEl.textContent = `${currentAtlasData.efficiency}%`;
  if (dcEl) dcEl.textContent = `${currentAtlasData.drawCallsBefore} -> ${currentAtlasData.drawCallsAfter}`;
  if (framesEl) framesEl.textContent = currentAtlasData.totalFrames.toString();
  if (sizeEl) sizeEl.textContent = `${currentAtlasData.textureWidth}x${currentAtlasData.textureHeight}`;
  if (codeEl) codeEl.textContent = currentAtlasData.codeSnippet;
}

function getPackerSettings() {
  const pad = parseInputValue('ssp-padding', '2');
  const ext = parseInputValue('ssp-extrusion', '0');
  const max = parseInputValue('ssp-max-size', '2048');
  const fmt = ((document.getElementById('ssp-export-format') as HTMLSelectElement)?.value || 'generic-json-hash') as ExportFormat;
  const pot = (document.getElementById('ssp-power-two') as HTMLInputElement)?.checked ?? true;
  return { padding: pad, borderExtrusion: ext, format: fmt, maxTextureWidth: max, forcePowerOfTwo: pot };
}

function updatePacker(): void {
  const { padding, borderExtrusion, format, maxTextureWidth, forcePowerOfTwo } = getPackerSettings();

  const frameInputs: SpriteFrameInput[] = loadedImages.map((item) => ({
    id: item.id,
    name: item.name,
    width: item.img.width,
    height: item.img.height,
  }));

  currentAtlasData = calculateBinPacking(frameInputs, {
    padding,
    borderExtrusion,
    forcePowerOfTwo,
    maxTextureWidth,
    maxTextureHeight: maxTextureWidth,
    allowRotation: false,
    trimTransparency: false,
    format,
  });

  renderAtlasCanvas();
  updateStatsUI();
}

function setPresetValues(padding: number, extrusion: number, maxSize: string, pot: boolean): void {
  const padInput = document.getElementById('ssp-padding') as HTMLInputElement | null;
  const extInput = document.getElementById('ssp-extrusion') as HTMLInputElement | null;
  const maxSelect = document.getElementById('ssp-max-size') as HTMLSelectElement | null;
  const potCheck = document.getElementById('ssp-power-two') as HTMLInputElement | null;

  if (padInput) {
    padInput.value = padding.toString();
    const valEl = document.getElementById('ssp-padding-val');
    if (valEl) valEl.textContent = padding.toString();
  }
  if (extInput) {
    extInput.value = extrusion.toString();
    const valEl = document.getElementById('ssp-extrusion-val');
    if (valEl) valEl.textContent = extrusion.toString();
  }
  if (maxSelect) maxSelect.value = maxSize;
  if (potCheck) potCheck.checked = pot;

  updatePacker();
}

function downloadZipPackage(e: MouseEvent): void {
  if (!currentAtlasData || currentAtlasData.frames.length === 0) return;
  const canvas = document.getElementById('ssp-atlas-canvas') as HTMLCanvasElement | null;
  if (!canvas) return;

  triggerButtonFeedback(document.getElementById('ssp-btn-download-zip'), 'ZIP Generated!', e);

  const zip = new JSZip();
  canvas.toBlob((blob) => {
    if (!blob) return;
    zip.file('spritesheet.png', blob);
    zip.file('spritesheet.json', currentAtlasData!.atlasJson);
    zip.generateAsync({ type: 'blob' }).then((content) => {
      const link = document.createElement('a');
      link.href = URL.createObjectURL(content);
      link.download = 'sprite-sheet-package.zip';
      link.click();
    });
  });
}

function bindTabs(): void {
  const tabPacker = document.getElementById('ssp-tab-packer');
  const tabExtractor = document.getElementById('ssp-tab-extractor');
  const panelPacker = document.getElementById('ssp-packer-panel');
  const panelExtractor = document.getElementById('ssp-extractor-panel');

  tabPacker?.addEventListener('click', () => {
    tabPacker.classList.add('active');
    tabExtractor?.classList.remove('active');
    if (panelPacker) panelPacker.style.display = 'grid';
    if (panelExtractor) panelExtractor.style.display = 'none';
    renderAtlasCanvas();
  });

  tabExtractor?.addEventListener('click', () => {
    tabExtractor.classList.add('active');
    tabPacker?.classList.remove('active');
    if (panelPacker) panelPacker.style.display = 'none';
    if (panelExtractor) panelExtractor.style.display = 'grid';
    updateExtractor();
  });
}

function bindPresets(): void {
  const setActivePreset = (target: HTMLElement) => {
    document.querySelectorAll('.ssp-chip-btn').forEach((el) => el.classList.remove('active'));
    target.classList.add('active');
  };

  document.getElementById('ssp-preset-pixel')?.addEventListener('click', (e) => {
    setActivePreset(e.target as HTMLElement);
    setPresetValues(2, 0, '512', true);
    spawnParticle(e.clientX, e.clientY, 'PIXEL 16x16');
  });
  document.getElementById('ssp-preset-hd')?.addEventListener('click', (e) => {
    setActivePreset(e.target as HTMLElement);
    setPresetValues(4, 1, '1024', true);
    spawnParticle(e.clientX, e.clientY, 'HD 1024');
  });
  document.getElementById('ssp-preset-mobile')?.addEventListener('click', (e) => {
    setActivePreset(e.target as HTMLElement);
    setPresetValues(2, 0, '2048', true);
    spawnParticle(e.clientX, e.clientY, 'MOBILE 2048');
  });
}

function bindSliders(): void {
  const paddingSlider = document.getElementById('ssp-padding') as HTMLInputElement | null;
  const extrusionSlider = document.getElementById('ssp-extrusion') as HTMLInputElement | null;

  paddingSlider?.addEventListener('input', () => {
    const valEl = document.getElementById('ssp-padding-val');
    if (valEl) valEl.textContent = paddingSlider.value;
    updatePacker();
  });

  extrusionSlider?.addEventListener('input', () => {
    const valEl = document.getElementById('ssp-extrusion-val');
    if (valEl) valEl.textContent = extrusionSlider.value;
    updatePacker();
  });
}

function bindExportCopies(): void {
  document.getElementById('ssp-btn-copy-json')?.addEventListener('click', (e) => {
    if (!currentAtlasData) return;
    triggerButtonFeedback(document.getElementById('ssp-btn-copy-json'), 'Copied!', e);
    navigator.clipboard.writeText(currentAtlasData.atlasJson);
  });
  document.getElementById('ssp-btn-download-png')?.addEventListener('click', (e) => {
    const canvas = document.getElementById('ssp-atlas-canvas') as HTMLCanvasElement | null;
    if (!canvas) return;
    triggerButtonFeedback(document.getElementById('ssp-btn-download-png'), 'Downloaded!', e);
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'spritesheet.png';
    link.click();
  });
  document.getElementById('ssp-btn-copy-code')?.addEventListener('click', (e) => {
    if (!currentAtlasData) return;
    triggerButtonFeedback(document.getElementById('ssp-btn-copy-code'), 'Copied Code!', e);
    navigator.clipboard.writeText(currentAtlasData.codeSnippet);
  });
}

function bindActionButtons(): void {
  setupStepper('ssp-pad-dec', 'ssp-pad-inc', 'ssp-padding', updatePacker);
  setupStepper('ssp-ext-dec', 'ssp-ext-inc', 'ssp-extrusion', updatePacker);
  bindSliders();
  bindExportCopies();

  document.getElementById('ssp-export-format')?.addEventListener('change', updatePacker);
  document.getElementById('ssp-max-size')?.addEventListener('change', updatePacker);
  document.getElementById('ssp-power-two')?.addEventListener('change', updatePacker);
  document.getElementById('ssp-btn-download-zip')?.addEventListener('click', (e) => downloadZipPackage(e));
  document.getElementById('ssp-btn-clear')?.addEventListener('click', (e) => {
    loadedImages = [];
    updatePacker();
    spawnParticle(e.clientX, e.clientY, 'CLEARED!');
  });
}

export function initSpriteSheetPackerApp(): void {
  bindTabs();
  bindPresets();
  bindDropzone(loadedImages, updatePacker);
  bindActionButtons();
  bindFlipbook();
  initExtractor();
  startFlipbookLoop(loadedImages);
  renderAtlasCanvas();
  updateExtractor();
}
