import { describe, expect, it } from 'vitest';
import {
  calculateEndFrequency,
  createDefaultParams,
  encodeWav,
  generateSfx,
  getPresetParams,
  updateSweep,
  type SfxPreset,
  type SfxWaveform,
} from './logic';

describe('retroSfxGenerator logic', () => {
  it('creates deterministic preset parameters when random is injected', () => {
    const first = getPresetParams('coin', () => 0.5);
    const second = getPresetParams('coin', () => 0.5);
    expect(first).toEqual(second);
    expect(first.frequencyEnd).toBe(calculateEndFrequency(first.frequency, first.sweep));
  });

  it('keeps random variations inside the selected preset family', () => {
    const families: Array<[SfxPreset, SfxWaveform]> = [
      ['explosion', 'noise'],
      ['laser', 'sawtooth'],
      ['jump', 'square'],
      ['coin', 'square'],
      ['powerUp', 'triangle'],
    ];

    families.forEach(([preset, waveform]) => {
      expect(getPresetParams(preset, () => 0.25).waveform).toBe(waveform);
    });
  });

  it('uses the visible explosion preset as the default family', () => {
    expect(createDefaultParams().waveform).toBe('noise');
  });

  it('maps sweep to a bounded end frequency', () => {
    expect(calculateEndFrequency(440, -1)).toBeGreaterThanOrEqual(40);
    expect(calculateEndFrequency(440, 1)).toBeLessThanOrEqual(12000);
    expect(updateSweep(getPresetParams('laser', () => 0.5), 0.25).frequencyEnd).toBeGreaterThan(440);
  });

  it('generates samples within the PCM range and expected duration', () => {
    const params = getPresetParams('explosion', () => 0.5);
    const generated = generateSfx(params, 8000);
    expect(generated.samples.length).toBeGreaterThan(0);
    expect(generated.duration).toBeCloseTo(params.duration, 2);
    expect(Math.max(...generated.samples)).toBeLessThanOrEqual(1);
    expect(Math.min(...generated.samples)).toBeGreaterThanOrEqual(-1);
  });

  it('encodes a mono 16-bit WAV with a valid RIFF header', () => {
    const wav = encodeWav(new Float32Array([0, 0.5, -0.5, 0]), 44100);
    expect(wav.length).toBe(52);
    expect(String.fromCharCode(...wav.slice(0, 4))).toBe('RIFF');
    expect(String.fromCharCode(...wav.slice(8, 12))).toBe('WAVE');
    expect(new DataView(wav.buffer).getUint32(40, true)).toBe(8);
  });
});
