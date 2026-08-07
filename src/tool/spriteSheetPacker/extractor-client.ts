import JSZip from 'jszip';
import { calculateGridSlices } from './logic';
import { drawEmptyCanvasMessage, setupStepper, triggerButtonFeedback } from './packer-ui';

let extImage: HTMLImageElement | null = null;

function parseInputValue(id: string, fallback: string): number {
  const el = document.getElementById(id) as HTMLInputElement | null;
  return parseInt(el?.value || fallback, 10);
}

function getExtractorInputs() {
  return {
    fw: parseInputValue('ssp-ext-width', '32'),
    fh: parseInputValue('ssp-ext-height', '32'),
    margin: parseInputValue('ssp-ext-margin', '0'),
    spacing: parseInputValue('ssp-ext-spacing', '0'),
  };
}

export function updateExtractor(): void {
  const canvas = document.getElementById('ssp-ext-canvas') as HTMLCanvasElement | null;
  if (!canvas) return;

  if (!extImage) {
    drawEmptyCanvasMessage(canvas, 'Upload sprite sheet to slice frames');
    return;
  }

  canvas.width = extImage.width;
  canvas.height = extImage.height;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(extImage, 0, 0);

  const { fw, fh, margin, spacing } = getExtractorInputs();
  const slices = calculateGridSlices({
    imageWidth: extImage.width,
    imageHeight: extImage.height,
    frameWidth: fw,
    frameHeight: fh,
    margin,
    spacing,
  });

  const countEl = document.getElementById('ssp-ext-count');
  if (countEl) countEl.textContent = slices.length.toString();

  ctx.strokeStyle = '#38bdf8';
  ctx.lineWidth = 1;
  for (const slice of slices) {
    ctx.strokeRect(slice.x, slice.y, slice.width, slice.height);
  }
}

function processExtractedZip(e: MouseEvent, fw: number, fh: number, slices: ReturnType<typeof calculateGridSlices>) {
  triggerButtonFeedback(document.getElementById('ssp-btn-extract-zip'), 'SPLIT ZIP!', e);

  const zip = new JSZip();
  const tempCanvas = document.createElement('canvas');
  tempCanvas.width = fw;
  tempCanvas.height = fh;
  const tempCtx = tempCanvas.getContext('2d');
  if (!tempCtx || !extImage) return;

  slices.forEach((slice) => {
    tempCtx.clearRect(0, 0, fw, fh);
    tempCtx.drawImage(extImage!, slice.x, slice.y, slice.width, slice.height, 0, 0, fw, fh);
    const dataUrl = tempCanvas.toDataURL('image/png').split(',')[1] ?? '';
    zip.file(`frame_${slice.index}.png`, dataUrl, { base64: true });
  });

  zip.generateAsync({ type: 'blob' }).then((content) => {
    const link = document.createElement('a');
    link.href = URL.createObjectURL(content);
    link.download = 'extracted-sprites.zip';
    link.click();
  });
}

export function downloadExtractedZip(e: MouseEvent): void {
  if (!extImage) return;
  const { fw, fh, margin, spacing } = getExtractorInputs();
  const slices = calculateGridSlices({
    imageWidth: extImage.width,
    imageHeight: extImage.height,
    frameWidth: fw,
    frameHeight: fh,
    margin,
    spacing,
  });

  if (slices.length === 0) return;
  processExtractedZip(e, fw, fh, slices);
}

export function initExtractor(): void {
  const extDrop = document.getElementById('ssp-ext-dropzone');
  const extInput = document.getElementById('ssp-ext-file-input') as HTMLInputElement | null;

  extDrop?.addEventListener('click', () => extInput?.click());
  extInput?.addEventListener('change', () => {
    if (extInput.files && extInput.files[0]) {
      const file = extInput.files[0];
      const img = new Image();
      img.onload = () => {
        extImage = img;
        updateExtractor();
      };
      img.src = URL.createObjectURL(file);
    }
  });

  setupStepper('ssp-fw-dec', 'ssp-fw-inc', 'ssp-ext-width', updateExtractor);
  setupStepper('ssp-fh-dec', 'ssp-fh-inc', 'ssp-ext-height', updateExtractor);
  setupStepper('ssp-mar-dec', 'ssp-mar-inc', 'ssp-ext-margin', updateExtractor);
  setupStepper('ssp-spc-dec', 'ssp-spc-inc', 'ssp-ext-spacing', updateExtractor);

  ['ssp-ext-width', 'ssp-ext-height', 'ssp-ext-margin', 'ssp-ext-spacing'].forEach((id) => {
    document.getElementById(id)?.addEventListener('input', updateExtractor);
  });

  document.getElementById('ssp-btn-extract-zip')?.addEventListener('click', (e) => downloadExtractedZip(e));
}
