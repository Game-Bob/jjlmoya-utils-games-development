import {
  samplesToSeconds,
  validateLoopPoints,
  createWavWithLoopMetadata,
} from './logic';
import {
  playBtn,
  stopBtn,
  statusText,
  setElementText,
  getI18nText,
} from './dom-utils';

let audioContext: AudioContext | null = null;
let sourceNode: AudioBufferSourceNode | null = null;

export function initAudioContext() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
  }
  return audioContext;
}

export function stopLoop() {
  if (sourceNode) {
    try {
      sourceNode.stop();
      sourceNode.disconnect();
    } catch {
      sourceNode = null;
    }
    sourceNode = null;
  }
  if (playBtn) playBtn.style.display = 'inline-flex';
  if (stopBtn) stopBtn.style.display = 'none';
  setElementText(statusText, getI18nText('stopped'));
}

export function playLoop(
  audioBuffer: AudioBuffer | null,
  loopStartSample: number,
  loopEndSample: number,
  totalSamples: number
) {
  if (!audioBuffer) return;
  const ctx = initAudioContext();
  if (!ctx) return;

  const validation = validateLoopPoints(loopStartSample, loopEndSample, totalSamples);
  if (!validation.isValid) {
    if (statusText && validation.error) setElementText(statusText, validation.error);
    return;
  }

  stopLoop();
  sourceNode = ctx.createBufferSource();
  sourceNode.buffer = audioBuffer;
  sourceNode.loop = true;
  sourceNode.loopStart = samplesToSeconds(loopStartSample, audioBuffer.sampleRate);
  sourceNode.loopEnd = samplesToSeconds(loopEndSample, audioBuffer.sampleRate);
  sourceNode.connect(ctx.destination);
  sourceNode.start(0, sourceNode.loopStart);

  if (playBtn) playBtn.style.display = 'none';
  if (stopBtn) stopBtn.style.display = 'inline-flex';
  setElementText(statusText, getI18nText('looping'));
}

export function exportWav(
  audioBuffer: AudioBuffer | null,
  loopStartSample: number,
  loopEndSample: number
) {
  if (!audioBuffer) return;
  const wavBytes = createWavWithLoopMetadata(audioBuffer, loopStartSample, loopEndSample);
  const blob = new Blob([wavBytes.buffer as ArrayBuffer], { type: 'audio/wav' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'looped_track_with_metadata.wav';
  a.click();
  URL.revokeObjectURL(url);
  setElementText(statusText, getI18nText('exported'));
}
