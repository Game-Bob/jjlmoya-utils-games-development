export const root = document.getElementById('alpf-root');
export const dropzone = document.getElementById('alpf-dropzone');
export const browseBtn = document.getElementById('alpf-browse-btn');
export const fileInput = document.getElementById('alpf-file-input') as HTMLInputElement;
export const workspace = document.getElementById('alpf-workspace');
export const canvas = document.getElementById('alpf-canvas') as HTMLCanvasElement;

export const statDuration = document.getElementById('alpf-stat-duration');
export const statSampleRate = document.getElementById('alpf-stat-samplerate');
export const statChannels = document.getElementById('alpf-stat-channels');
export const statSamples = document.getElementById('alpf-stat-samples');

export const startInput = document.getElementById('alpf-start-sample-input') as HTMLInputElement;
export const endInput = document.getElementById('alpf-end-sample-input') as HTMLInputElement;
export const durationInput = document.getElementById('alpf-loop-duration-input') as HTMLInputElement;

export const snapBtn = document.getElementById('alpf-snap-btn');
export const playBtn = document.getElementById('alpf-play-btn');
export const stopBtn = document.getElementById('alpf-stop-btn');
export const exportBtn = document.getElementById('alpf-export-btn');

export const presetFull = document.getElementById('alpf-preset-full');
export const presetIntro = document.getElementById('alpf-preset-intro');
export const presetMiddleLoop = document.getElementById('alpf-preset-middle');
export const statusText = document.getElementById('alpf-status-text');

export function measureCanvasParentWidth(): number {
  return canvas?.parentElement?.clientWidth || 800;
}

export function measureCanvasBoundingRect(): DOMRect | null {
  return canvas ? canvas.getBoundingClientRect() : null;
}

export function setElementText(element: HTMLElement | null, textContentValue: string) {
  if (element) {
    element.textContent = textContentValue;
  }
}

export function getI18nText(keyName: string): string {
  if (!root) return '';
  return root.getAttribute('data-status-' + keyName) || '';
}

export function spawnParticle(particleText: string, posX: number, posY: number) {
  if (!root) return;
  const particleEl = document.createElement('div');
  particleEl.className = 'alpf-particle';
  setElementText(particleEl, particleText);
  particleEl.style.left = posX + 'px';
  particleEl.style.top = posY + 'px';
  root.appendChild(particleEl);
  setTimeout(() => particleEl.remove(), 800);
}
