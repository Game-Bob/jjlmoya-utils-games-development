import { spawnParticle, type LoadedImageItem } from './packer-ui';

let currentAnimFrameIndex = 0;
let animFps = 12;
let isPlayingAnim = true;
let lastFrameTime = 0;

export function renderFlipbookFrame(loadedImages: LoadedImageItem[]): void {
  const canvas = document.getElementById('ssp-flipbook-canvas') as HTMLCanvasElement | null;
  if (!canvas || loadedImages.length === 0) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const item = loadedImages[currentAnimFrameIndex % loadedImages.length];

  if (item && item.img) {
    const scale = Math.min(canvas.width / item.img.width, canvas.height / item.img.height);
    const drawW = item.img.width * scale;
    const drawH = item.img.height * scale;
    const drawX = (canvas.width - drawW) / 2;
    const drawY = (canvas.height - drawH) / 2;
    ctx.drawImage(item.img, drawX, drawY, drawW, drawH);
  }
}

export function startFlipbookLoop(loadedImages: LoadedImageItem[]): void {
  function loop(timestamp: number) {
    if (isPlayingAnim && loadedImages.length > 0) {
      const interval = 1000 / animFps;
      if (timestamp - lastFrameTime > interval) {
        currentAnimFrameIndex = (currentAnimFrameIndex + 1) % loadedImages.length;
        lastFrameTime = timestamp;
        renderFlipbookFrame(loadedImages);
      }
    }
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
}

export function bindFlipbook(): void {
  const fpsSlider = document.getElementById('ssp-fps-slider') as HTMLInputElement | null;
  fpsSlider?.addEventListener('input', () => {
    animFps = parseInt(fpsSlider.value, 10);
    const valEl = document.getElementById('ssp-fps-val');
    if (valEl) valEl.textContent = `${animFps} FPS`;
  });

  document.getElementById('ssp-btn-play')?.addEventListener('click', (e) => {
    isPlayingAnim = true;
    spawnParticle(e.clientX, e.clientY, 'PLAYING');
  });

  document.getElementById('ssp-btn-pause')?.addEventListener('click', (e) => {
    isPlayingAnim = false;
    spawnParticle(e.clientX, e.clientY, 'PAUSED');
  });
}
