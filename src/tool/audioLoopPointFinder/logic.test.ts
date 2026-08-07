import { describe, it, expect } from 'vitest';
import {
  samplesToSeconds,
  secondsToSamples,
  formatTime,
  validateLoopPoints,
  findNearestZeroCrossing,
  createWavWithLoopMetadata,
  parseAudioLoopMetadata,
  parseCommentKV,
} from './logic';

describe('audioLoopPointFinder logic', () => {
  it('converts samples to seconds and seconds to samples', () => {
    expect(samplesToSeconds(44100, 44100)).toBe(1);
    expect(samplesToSeconds(22050, 44100)).toBe(0.5);
    expect(samplesToSeconds(100, 0)).toBe(0);

    expect(secondsToSamples(1, 44100)).toBe(44100);
    expect(secondsToSamples(0.5, 44100)).toBe(22050);
    expect(secondsToSamples(1, 0)).toBe(0);
  });

  it('formats time accurately', () => {
    expect(formatTime(0)).toBe('00:00.000');
    expect(formatTime(65.432)).toBe('01:05.432');
    expect(formatTime(-5)).toBe('00:00.000');
  });

  it('validates loop points correctly', () => {
    expect(validateLoopPoints(-10, 1000, 5000).isValid).toBe(false);
    expect(validateLoopPoints(1000, 6000, 5000).isValid).toBe(false);
    expect(validateLoopPoints(2000, 1000, 5000).isValid).toBe(false);
    expect(validateLoopPoints(1000, 1050, 5000).isValid).toBe(false);
    expect(validateLoopPoints(1000, 4000, 5000).isValid).toBe(true);
  });

  it('finds nearest zero crossing in waveform data', () => {
    const data = new Float32Array([-0.5, -0.2, 0.1, 0.4, 0.2, -0.1, -0.3]);
    const zeroCrossing = findNearestZeroCrossing(data, 1, 3);
    expect(zeroCrossing).toBe(2);
  });

  it('generates valid WAV file buffer', () => {
    const mockChannel = new Float32Array([0, 0.5, -0.5, 0]);
    const mockAudioBuffer = {
      numberOfChannels: 1,
      sampleRate: 44100,
      length: 4,
      duration: 4 / 44100,
      getChannelData: () => mockChannel,
    } as unknown as AudioBuffer;

    const wavBuffer = createWavWithLoopMetadata(mockAudioBuffer, 1, 3);
    expect(wavBuffer).toBeInstanceOf(Uint8Array);
    expect(wavBuffer.length).toBeGreaterThan(44);

    const riffHeader = String.fromCharCode(wavBuffer[0] ?? 0, wavBuffer[1] ?? 0, wavBuffer[2] ?? 0, wavBuffer[3] ?? 0);
    expect(riffHeader).toBe('RIFF');
  });

  it('parses audio loop metadata from WAV and comment KVs', () => {
    const res: { loopStart?: number; loopEnd?: number } = {};
    parseCommentKV('LOOPSTART=1200', res);
    parseCommentKV('LOOPEND=4800', res);
    expect(res.loopStart).toBe(1200);
    expect(res.loopEnd).toBe(4800);

    const emptyMeta = parseAudioLoopMetadata(new Uint8Array([0, 1, 2, 3]));
    expect(emptyMeta.loopStart).toBeUndefined();
  });
});
