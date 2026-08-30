import {
  findNearestZeroCrossing,
  samplesToSeconds,
  formatTime,
  parseAudioLoopMetadata,
} from './logic';
import {
  dropzone,
  browseBtn,
  fileInput,
  workspace,
  canvas,
  statDuration,
  statSampleRate,
  statChannels,
  statSamples,
  startInput,
  endInput,
  durationInput,
  snapBtn,
  playBtn,
  stopBtn,
  exportBtn,
  presetFull,
  presetIntro,
  presetMiddleLoop,
  statusText,
  measureCanvasParentWidth,
  measureCanvasBoundingRect,
  setElementText,
  getI18nText,
  spawnParticle,
} from './dom-utils';
import { renderWaveformBars, renderWaveformOverlay } from './waveform-renderer';
import { initAudioContext, playLoop, stopLoop, exportWav } from './audio-player';

let audioBuffer: AudioBuffer | null = null;

let loopStartSample = 0;
let loopEndSample = 0;
let totalSamples = 0;
let isDraggingStart = false;
let isDraggingEnd = false;

function updateStats() {
  if (!audioBuffer) return;
  setElementText(statDuration, formatTime(audioBuffer.duration));
  setElementText(statSampleRate, String(audioBuffer.sampleRate) + ' Hz');
  setElementText(statChannels, String(audioBuffer.numberOfChannels));
  setElementText(statSamples, audioBuffer.length.toLocaleString());
}

function updateInputs() {
  if (!audioBuffer) return;
  if (startInput) {
    startInput.max = String(totalSamples);
    startInput.value = String(loopStartSample);
  }
  if (endInput) {
    endInput.max = String(totalSamples);
    endInput.value = String(loopEndSample);
  }
  if (durationInput) {
    const durSec = samplesToSeconds(loopEndSample - loopStartSample, audioBuffer.sampleRate);
    durationInput.value = formatTime(durSec);
  }
}

function drawWaveform() {
  if (!canvas || !audioBuffer) return;
  const width = measureCanvasParentWidth();
  const height = 180;
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  ctx.fillStyle = '#020617';
  ctx.fillRect(0, 0, width, height);
  renderWaveformBars(ctx, audioBuffer, width, height);
  renderWaveformOverlay({
    ctx,
    loopStartSample,
    loopEndSample,
    totalSamples,
    width,
    height,
  });
}

function decodeAudioDataPromise(ctx: AudioContext, buffer: ArrayBuffer): Promise<AudioBuffer> {
  return new Promise((resolve, reject) => {
    ctx.decodeAudioData(
      buffer,
      (decoded) => resolve(decoded),
      (err) => reject(err)
    );
  });
}

function handleFile(file: File) {
  const ctx = initAudioContext();
  if (ctx.state === 'suspended') {
    ctx.resume();
  }
  const reader = new FileReader();
  reader.onload = async (e) => {
    try {
      const arrayBuf = e.target?.result as ArrayBuffer;
      if (!ctx || !arrayBuf) return;
      const rawBytes = new Uint8Array(arrayBuf);
      const parsedMeta = parseAudioLoopMetadata(rawBytes);

      const bufferCopy = arrayBuf.slice(0);
      audioBuffer = await decodeAudioDataPromise(ctx, bufferCopy);
      totalSamples = audioBuffer.length;

      loopStartSample = parsedMeta.loopStart ?? 0;
      loopEndSample = parsedMeta.loopEnd ?? totalSamples;

      updateStats();
      updateInputs();
      drawWaveform();
      if (workspace) workspace.style.display = 'flex';
      setElementText(statusText, getI18nText('loaded'));
    } catch {
      setElementText(statusText, getI18nText('decode-error'));
    }
  };
  reader.readAsArrayBuffer(file);
}

function snapToZeroCrossing() {
  if (!audioBuffer) return;
  const channelData = audioBuffer.getChannelData(0);
  loopStartSample = findNearestZeroCrossing(channelData, loopStartSample);
  loopEndSample = findNearestZeroCrossing(channelData, loopEndSample);
  updateInputs();
  drawWaveform();
  setElementText(statusText, getI18nText('snapped'));
}

dropzone?.addEventListener('click', () => fileInput?.click());
browseBtn?.addEventListener('click', (e) => {
  e.stopPropagation();
  fileInput?.click();
});

fileInput?.addEventListener('change', (e) => {
  const files = (e.target as HTMLInputElement).files;
  if (files && files[0]) handleFile(files[0]);
});

dropzone?.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropzone?.classList.add('drag-over');
});

dropzone?.addEventListener('dragleave', () => dropzone?.classList.remove('drag-over'));
dropzone?.addEventListener('drop', (e) => {
  e.preventDefault();
  dropzone?.classList.remove('drag-over');
  const files = e.dataTransfer?.files;
  if (files && files[0]) handleFile(files[0]);
});

startInput?.addEventListener('change', () => {
  loopStartSample = Math.max(0, Math.min(totalSamples, parseInt(startInput.value) || 0));
  updateInputs();
  drawWaveform();
});

endInput?.addEventListener('change', () => {
  loopEndSample = Math.max(0, Math.min(totalSamples, parseInt(endInput.value) || 0));
  updateInputs();
  drawWaveform();
});

snapBtn?.addEventListener('click', (e) => {
  snapToZeroCrossing();
  spawnParticle('ZERO SNAP!', e.clientX, e.clientY);
});

playBtn?.addEventListener('click', () => playLoop(audioBuffer, loopStartSample, loopEndSample, totalSamples));
stopBtn?.addEventListener('click', () => stopLoop());
exportBtn?.addEventListener('click', (e) => {
  exportWav(audioBuffer, loopStartSample, loopEndSample);
  spawnParticle('EXPORTED!', e.clientX, e.clientY);
});

presetFull?.addEventListener('click', () => {
  loopStartSample = 0;
  loopEndSample = totalSamples;
  updateInputs();
  drawWaveform();
});

presetIntro?.addEventListener('click', () => {
  loopStartSample = Math.round(totalSamples * 0.1);
  loopEndSample = totalSamples;
  updateInputs();
  drawWaveform();
});

presetMiddleLoop?.addEventListener('click', () => {
  loopStartSample = Math.round(totalSamples * 0.25);
  loopEndSample = Math.round(totalSamples * 0.75);
  updateInputs();
  drawWaveform();
});

canvas?.addEventListener('mousedown', (e) => {
  if (!totalSamples) return;
  const rect = measureCanvasBoundingRect();
  if (!rect) return;

  const x = e.clientX - rect.left;
  const clickedSample = Math.round((x / rect.width) * totalSamples);
  const startX = (loopStartSample / totalSamples) * rect.width;
  const endX = (loopEndSample / totalSamples) * rect.width;

  if (Math.abs(x - startX) < 15) {
    isDraggingStart = true;
  } else if (Math.abs(x - endX) < 15) {
    isDraggingEnd = true;
  } else {
    if (Math.abs(clickedSample - loopStartSample) < Math.abs(clickedSample - loopEndSample)) {
      loopStartSample = clickedSample;
    } else {
      loopEndSample = clickedSample;
    }
    updateInputs();
    drawWaveform();
  }
});

window.addEventListener('mousemove', (e) => {
  if (!isDraggingStart && !isDraggingEnd) return;
  const rect = measureCanvasBoundingRect();
  if (!rect) return;

  const x = Math.max(0, Math.min(rect.width, e.clientX - rect.left));
  const sample = Math.round((x / rect.width) * totalSamples);

  if (isDraggingStart) {
    loopStartSample = Math.min(sample, loopEndSample - 100);
  } else if (isDraggingEnd) {
    loopEndSample = Math.max(sample, loopStartSample + 100);
  }
  updateInputs();
  drawWaveform();
});

window.addEventListener('mouseup', () => {
  isDraggingStart = false;
  isDraggingEnd = false;
});

window.addEventListener('resize', () => {
  drawWaveform();
});
