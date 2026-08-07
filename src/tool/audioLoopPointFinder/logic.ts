export interface AudioMetadata {
  duration: number;
  sampleRate: number;
  numberOfChannels: number;
  length: number;
}

export interface LoopPoints {
  startSample: number;
  endSample: number;
}

export interface LoopValidationResult {
  isValid: boolean;
  error?: string;
}

export interface SmplChunkConfig {
  buffer: Uint8Array;
  view: DataView;
  sampleRate: number;
  loopStart: number;
  loopEnd: number;
  offset: number;
}

export interface WavHeaderConfig {
  buffer: Uint8Array;
  view: DataView;
  sampleRate: number;
  numChannels: number;
  totalFileSize: number;
  blockAlign: number;
}

export {
  parseWavLoopTags,
  parseCommentKV,
  parseOggVorbisComments,
  parseAudioLoopMetadata,
} from './metadata-parser';
export type { ParsedLoopMetadata } from './metadata-parser';

export function samplesToSeconds(samples: number, sampleRate: number): number {
  if (sampleRate <= 0) return 0;
  return samples / sampleRate;
}

export function secondsToSamples(seconds: number, sampleRate: number): number {
  if (sampleRate <= 0) return 0;
  return Math.round(seconds * sampleRate);
}

export function formatTime(seconds: number): string {
  if (isNaN(seconds) || seconds < 0) return '00:00.000';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  const ms = Math.floor((seconds - Math.floor(seconds)) * 1000);
  const pad = (n: number, z = 2) => String(n).padStart(z, '0');
  return `${pad(mins)}:${pad(secs)}.${pad(ms, 3)}`;
}

export function validateLoopPoints(startSample: number, endSample: number, totalSamples: number): LoopValidationResult {
  if (startSample < 0) return { isValid: false, error: 'Start sample cannot be negative' };
  if (endSample > totalSamples) return { isValid: false, error: 'End sample exceeds total audio length' };
  if (startSample >= endSample) return { isValid: false, error: 'Start sample must be before end sample' };
  if (endSample - startSample < 100) return { isValid: false, error: 'Loop duration is too short' };
  return { isValid: true };
}

export function isZeroCrossingPoint(v1: number, v2: number): boolean {
  return (v1 <= 0 && v2 >= 0) || (v1 >= 0 && v2 <= 0);
}

export function checkZeroCrossingCandidate(
  data: Float32Array,
  idx: number,
  clamped: number,
  best: { sample: number; dist: number }
): void {
  const val = data[idx] ?? 0;
  const nextVal = data[idx + 1] ?? 0;
  if (isZeroCrossingPoint(val, nextVal)) {
    const zeroPoint = Math.abs(val) < Math.abs(nextVal) ? idx : idx + 1;
    const dist = Math.abs(zeroPoint - clamped);
    if (dist < best.dist) {
      best.dist = dist;
      best.sample = zeroPoint;
    }
  }
}

export function findNearestZeroCrossing(
  channelData: Float32Array,
  targetSample: number,
  searchRadius: number = 500
): number {
  if (!channelData || channelData.length === 0) return 0;
  const clamped = Math.max(0, Math.min(channelData.length - 1, targetSample));
  const minIdx = Math.max(0, clamped - searchRadius);
  const maxIdx = Math.min(channelData.length - 2, clamped + searchRadius);

  const best = { sample: clamped, dist: Infinity };
  for (let i = minIdx; i <= maxIdx; i++) {
    checkZeroCrossingCandidate(channelData, i, clamped, best);
  }

  return best.sample;
}

export function encodePcmSamples(
  view: DataView,
  audioBuffer: AudioBuffer,
  offset: number
): void {
  const numChannels = audioBuffer.numberOfChannels;
  const numSamples = audioBuffer.length;
  let currentOffset = offset;

  const channels: Float32Array[] = [];
  for (let c = 0; c < numChannels; c++) {
    channels.push(audioBuffer.getChannelData(c));
  }

  for (let i = 0; i < numSamples; i++) {
    for (let c = 0; c < numChannels; c++) {
      const chData = channels[c];
      const rawSample = chData ? (chData[i] ?? 0) : 0;
      const sample = Math.max(-1, Math.min(1, rawSample));
      const intSample = sample < 0 ? sample * 0x8000 : sample * 0x7FFF;
      view.setInt16(currentOffset, Math.round(intSample), true);
      currentOffset += 2;
    }
  }
}

export function writeSmplChunkData(cfg: SmplChunkConfig): number {
  let offset = cfg.offset;
  const writeStr = (s: string) => {
    for (let i = 0; i < s.length; i++) cfg.buffer[offset++] = s.charCodeAt(i);
  };
  const write32 = (v: number) => {
    cfg.view.setUint32(offset, v, true);
    offset += 4;
  };

  writeStr('smpl');
  write32(60);
  write32(0);
  write32(0);
  write32(Math.round(1000000000 / cfg.sampleRate));
  write32(60);
  write32(0);
  write32(0);
  write32(0);
  write32(1);
  write32(0);
  write32(0);
  write32(0);
  write32(cfg.loopStart);
  write32(cfg.loopEnd);
  write32(0);
  write32(0);

  return offset;
}

export function writeWavFmtHeader(cfg: WavHeaderConfig): number {
  let offset = 0;
  for (const c of 'RIFF') cfg.buffer[offset++] = c.charCodeAt(0);
  cfg.view.setUint32(offset, cfg.totalFileSize - 8, true);
  offset += 4;
  for (const c of 'WAVEfmt ') cfg.buffer[offset++] = c.charCodeAt(0);
  cfg.view.setUint32(offset, 16, true);
  offset += 4;
  cfg.view.setUint16(offset, 1, true);
  offset += 2;
  cfg.view.setUint16(offset, cfg.numChannels, true);
  offset += 2;
  cfg.view.setUint32(offset, cfg.sampleRate, true);
  offset += 4;
  cfg.view.setUint32(offset, cfg.sampleRate * cfg.blockAlign, true);
  offset += 4;
  cfg.view.setUint16(offset, cfg.blockAlign, true);
  offset += 2;
  cfg.view.setUint16(offset, 16, true);
  offset += 2;
  return offset;
}

export function createWavWithLoopMetadata(
  audioBuffer: AudioBuffer,
  loopStart: number,
  loopEnd: number
): Uint8Array {
  const numChannels = audioBuffer.numberOfChannels;
  const sampleRate = audioBuffer.sampleRate;
  const blockAlign = numChannels * 2;
  const dataSize = audioBuffer.length * blockAlign;
  const totalFileSize = 112 + dataSize;

  const buffer = new Uint8Array(totalFileSize);
  const view = new DataView(buffer.buffer);

  let offset = writeWavFmtHeader({ buffer, view, sampleRate, numChannels, totalFileSize, blockAlign });
  offset = writeSmplChunkData({ buffer, view, sampleRate, loopStart, loopEnd, offset });

  for (const char of 'data') buffer[offset++] = char.charCodeAt(0);
  view.setUint32(offset, dataSize, true);
  offset += 4;

  encodePcmSamples(view, audioBuffer, offset);
  return buffer;
}
