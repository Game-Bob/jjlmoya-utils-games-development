export type SfxWaveform = 'square' | 'sawtooth' | 'sine' | 'triangle' | 'noise';

export type SfxPreset = 'explosion' | 'laser' | 'jump' | 'coin' | 'powerUp';

export interface SfxParams {
  waveform: SfxWaveform;
  frequency: number;
  frequencyEnd: number;
  duration: number;
  decay: number;
  sweep: number;
  vibrato: number;
  lowpass: number;
  highpass: number;
  noiseMix: number;
}

export interface GeneratedSfx {
  samples: Float32Array;
  sampleRate: number;
  duration: number;
}

export const MIN_SAMPLE_RATE = 8000;
export const DEFAULT_SAMPLE_RATE = 44100;

const PRESET_RANGES: Record<SfxPreset, Omit<SfxParams, 'frequencyEnd'>> = {
  explosion: {
    waveform: 'noise',
    frequency: 180,
    duration: 0.65,
    decay: 0.84,
    sweep: -0.55,
    vibrato: 0.08,
    lowpass: 3600,
    highpass: 70,
    noiseMix: 0.9,
  },
  laser: {
    waveform: 'sawtooth',
    frequency: 1200,
    duration: 0.32,
    decay: 0.56,
    sweep: -0.7,
    vibrato: 0.03,
    lowpass: 9000,
    highpass: 180,
    noiseMix: 0.04,
  },
  jump: {
    waveform: 'square',
    frequency: 260,
    duration: 0.42,
    decay: 0.35,
    sweep: 0.75,
    vibrato: 0.06,
    lowpass: 7600,
    highpass: 100,
    noiseMix: 0.02,
  },
  coin: {
    waveform: 'square',
    frequency: 880,
    duration: 0.24,
    decay: 0.44,
    sweep: 0.28,
    vibrato: 0.02,
    lowpass: 11000,
    highpass: 140,
    noiseMix: 0,
  },
  powerUp: {
    waveform: 'triangle',
    frequency: 330,
    duration: 0.78,
    decay: 0.24,
    sweep: 0.82,
    vibrato: 0.11,
    lowpass: 10000,
    highpass: 90,
    noiseMix: 0.01,
  },
};

export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

export function createDefaultParams(): SfxParams {
  return getPresetParams('explosion', () => 0.5);
}

export function getPresetParams(preset: SfxPreset, random: () => number = Math.random): SfxParams {
  const base = PRESET_RANGES[preset];
  const frequencyJitter = 1 + (random() - 0.5) * 0.18;
  const durationJitter = 1 + (random() - 0.5) * 0.12;
  const sweepJitter = (random() - 0.5) * 0.16;
  const frequency = clamp(base.frequency * frequencyJitter, 60, 8000);
  const duration = clamp(base.duration * durationJitter, 0.08, 2.5);
  const sweep = clamp(base.sweep + sweepJitter, -1, 1);

  return {
    ...base,
    frequency,
    frequencyEnd: calculateEndFrequency(frequency, sweep),
    duration,
    sweep,
  };
}

export function calculateEndFrequency(frequency: number, sweep: number): number {
  const normalizedSweep = clamp(sweep, -1, 1);
  const ratio = normalizedSweep >= 0
    ? 1 + normalizedSweep * 11
    : 1 / (1 + Math.abs(normalizedSweep) * 11);
  return clamp(frequency * ratio, 40, 12000);
}

export function updateSweep(params: SfxParams, sweep: number): SfxParams {
  const safeSweep = clamp(sweep, -1, 1);
  return { ...params, sweep: safeSweep, frequencyEnd: calculateEndFrequency(params.frequency, safeSweep) };
}

function seededNoise(index: number): number {
  const value = Math.sin((index + 1) * 12.9898) * 43758.5453;
  return (value - Math.floor(value)) * 2 - 1;
}

function waveformSample(waveform: SfxWaveform, phase: number, index: number): number {
  const cycle = phase - Math.floor(phase);
  if (waveform === 'square') return cycle < 0.5 ? 1 : -1;
  if (waveform === 'sawtooth') return cycle * 2 - 1;
  if (waveform === 'triangle') return 1 - 4 * Math.abs(Math.round(cycle) - cycle);
  if (waveform === 'noise') return seededNoise(index);
  return Math.sin(cycle * Math.PI * 2);
}

function filterAlpha(cutoff: number, sampleRate: number): number {
  const safeCutoff = clamp(cutoff, 1, sampleRate * 0.45);
  return 1 - Math.exp((-2 * Math.PI * safeCutoff) / sampleRate);
}

export function generateSfx(params: SfxParams, sampleRate = DEFAULT_SAMPLE_RATE): GeneratedSfx {
  const safeSampleRate = Math.max(MIN_SAMPLE_RATE, Math.round(sampleRate));
  const duration = clamp(params.duration, 0.04, 4);
  const frameCount = Math.max(1, Math.round(duration * safeSampleRate));
  const samples = new Float32Array(frameCount);
  const lowAlpha = filterAlpha(params.lowpass, safeSampleRate);
  const highAlpha = filterAlpha(params.highpass, safeSampleRate);
  const noiseMix = clamp(params.noiseMix, 0, 1);
  const vibrato = clamp(params.vibrato, 0, 1);
  let phase = 0;
  let lowState = 0;
  let highState = 0;

  for (let index = 0; index < frameCount; index += 1) {
    const progress = frameCount === 1 ? 1 : index / (frameCount - 1);
    const frequency = Math.max(20, params.frequency + (params.frequencyEnd - params.frequency) * progress);
    const vibratoFactor = 1 + Math.sin(progress * Math.PI * 2 * 7) * vibrato * 0.08;
    phase += (frequency * vibratoFactor) / safeSampleRate;
    const tone = waveformSample(params.waveform, phase, index);
    const noise = seededNoise(index + 1987);
    const mixed = tone * (1 - noiseMix) + noise * noiseMix;
    lowState += lowAlpha * (mixed - lowState);
    highState += highAlpha * (mixed - highState);
    const filtered = lowState * 0.7 + (mixed - highState) * 0.3;
    const attack = Math.min(1, progress / 0.025);
    const decayPower = 0.35 + clamp(params.decay, 0, 1) * 4;
    const envelope = attack * Math.pow(1 - progress, decayPower);
    samples[index] = clamp(filtered * envelope * 0.92, -1, 1);
  }

  return { samples, sampleRate: safeSampleRate, duration: frameCount / safeSampleRate };
}

export function encodeWav(samples: Float32Array, sampleRate: number): Uint8Array {
  const safeSampleRate = Math.max(MIN_SAMPLE_RATE, Math.round(sampleRate));
  const dataSize = samples.length * 2;
  const buffer = new Uint8Array(44 + dataSize);
  const view = new DataView(buffer.buffer);
  const writeText = (offset: number, value: string): void => {
    for (let index = 0; index < value.length; index += 1) buffer[offset + index] = value.charCodeAt(index);
  };

  writeText(0, 'RIFF');
  view.setUint32(4, 36 + dataSize, true);
  writeText(8, 'WAVE');
  writeText(12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, safeSampleRate, true);
  view.setUint32(28, safeSampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  writeText(36, 'data');
  view.setUint32(40, dataSize, true);

  for (let index = 0; index < samples.length; index += 1) {
    const sample = clamp(samples[index] ?? 0, -1, 1);
    view.setInt16(44 + index * 2, Math.round(sample < 0 ? sample * 0x8000 : sample * 0x7fff), true);
  }

  return buffer;
}

export function formatFrequency(value: number): string {
  if (value >= 1000) return `${(value / 1000).toFixed(value >= 10000 ? 0 : 1)} kHz`;
  return `${Math.round(value)} Hz`;
}

export function formatDuration(value: number): string {
  return `${value.toFixed(2)} s`;
}
