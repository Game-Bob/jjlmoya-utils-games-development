import { el } from './render';

let isMuted = false;

try {
  isMuted = localStorage.getItem('sb_muted') === 'true';
} catch {}

function updateSoundIcon(): void {
  const onIcon = el('tn-sound-icon-on');
  const offIcon = el('tn-sound-icon-off');
  if (onIcon && offIcon) {
    onIcon.style.display = isMuted ? 'none' : 'block';
    offIcon.style.display = isMuted ? 'block' : 'none';
  }
}

export function setMuted(muted: boolean): void {
  isMuted = muted;
  try {
    localStorage.setItem('sb_muted', String(muted));
  } catch {}
  updateSoundIcon();
}

export function getMuted(): boolean {
  return isMuted;
}

export function playBeep(): void {
  if (isMuted) return;
  try {
    const webkitCtx = (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new (window.AudioContext || webkitCtx)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    osc.connect(gain);
    gain.connect(ctx.destination);
    gain.gain.setValueAtTime(0.25, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
    osc.start();
    osc.stop(ctx.currentTime + 0.15);
  } catch {}
}

export function playBuzzer(): void {
  if (isMuted) return;
  try {
    const webkitCtx = (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new (window.AudioContext || webkitCtx)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(120, ctx.currentTime);
    osc.connect(gain);
    gain.connect(ctx.destination);
    gain.gain.setValueAtTime(0.5, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 1.2);
    osc.start();
    osc.stop(ctx.currentTime + 1.2);
  } catch {}
}
