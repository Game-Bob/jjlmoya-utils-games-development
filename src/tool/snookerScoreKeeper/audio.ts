import { el } from './render';

let isMuted = false;

try {
  isMuted = localStorage.getItem('sn_muted') === 'true';
} catch {}

function updateSoundIcon(): void {
  const onIcon = el('sn-sound-icon-on');
  const offIcon = el('sn-sound-icon-off');
  if (onIcon && offIcon) {
    onIcon.style.display = isMuted ? 'none' : 'block';
    offIcon.style.display = isMuted ? 'block' : 'none';
  }
}

export function setMuted(muted: boolean): void {
  isMuted = muted;
  try {
    localStorage.setItem('sn_muted', String(muted));
  } catch {}
  updateSoundIcon();
}

export function getMuted(): boolean {
  return isMuted;
}

export function playPocket(): void {
  if (isMuted) return;
  try {
    const webkitCtx = (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new (window.AudioContext || webkitCtx)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(160, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(50, ctx.currentTime + 0.2);
    osc.connect(gain);
    gain.connect(ctx.destination);
    gain.gain.setValueAtTime(0.4, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
    osc.start();
    osc.stop(ctx.currentTime + 0.2);
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
    osc.frequency.setValueAtTime(100, ctx.currentTime);
    osc.connect(gain);
    gain.connect(ctx.destination);
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.8);
    osc.start();
    osc.stop(ctx.currentTime + 0.8);
  } catch {}
}

export function playChime(): void {
  if (isMuted) return;
  try {
    const webkitCtx = (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new (window.AudioContext || webkitCtx)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(523.25, ctx.currentTime);
    osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1);
    osc.connect(gain);
    gain.connect(ctx.destination);
    gain.gain.setValueAtTime(0.25, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
    osc.start();
    osc.stop(ctx.currentTime + 0.4);
  } catch {}
}
