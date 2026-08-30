import JSZip from 'jszip';

export interface LoadedImageItem {
  file: File;
  img: HTMLImageElement;
  id: string;
  name: string;
}

export function spawnParticle(x: number, y: number, text: string): void {
  const container = document.getElementById('ssp-particle-container');
  if (!container) return;

  const el = document.createElement('div');
  el.className = 'ssp-particle';
  el.textContent = text;
  el.style.left = `${x}px`;
  el.style.top = `${y}px`;
  container.appendChild(el);

  setTimeout(() => el.remove(), 1000);
}

export function triggerButtonFeedback(btn: HTMLElement | null, text: string, event?: MouseEvent): void {
  if (!btn) return;
  btn.classList.add('ssp-btn-success');
  const originalText = btn.textContent;
  btn.textContent = text;

  if (event) {
    spawnParticle(event.clientX, event.clientY, text);
  }

  setTimeout(() => {
    btn.classList.remove('ssp-btn-success');
    if (originalText) btn.textContent = originalText;
  }, 1800);
}

export function setupStepper(decId: string, incId: string, inputId: string, callback: () => void): void {
  const input = document.getElementById(inputId) as HTMLInputElement | null;
  document.getElementById(decId)?.addEventListener('click', () => {
    if (!input) return;
    const current = parseInt(input.value || '0', 10);
    const min = parseInt(input.min || '0', 10);
    input.value = Math.max(min, current - 1).toString();
    input.dispatchEvent(new Event('input'));
    callback();
  });
  document.getElementById(incId)?.addEventListener('click', () => {
    if (!input) return;
    const current = parseInt(input.value || '0', 10);
    const max = parseInt(input.max || '9999', 10);
    input.value = Math.min(max, current + 1).toString();
    input.dispatchEvent(new Event('input'));
    callback();
  });
}

export function drawEmptyCanvasMessage(canvas: HTMLCanvasElement, text: string): void {
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'rgba(148, 163, 184, 0.4)';
  ctx.font = '600 15px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);
}

export function downloadZipFromCanvas(canvas: HTMLCanvasElement, jsonContent: string): void {
  const zip = new JSZip();
  canvas.toBlob((blob) => {
    if (!blob) return;
    zip.file('spritesheet.png', blob);
    zip.file('spritesheet.json', jsonContent);
    zip.generateAsync({ type: 'blob' }).then((content) => {
      const link = document.createElement('a');
      link.href = URL.createObjectURL(content);
      link.download = 'sprite-sheet-package.zip';
      link.click();
    });
  });
}
