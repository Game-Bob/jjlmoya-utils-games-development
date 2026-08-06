import { describe, expect, it } from 'vitest';
import {
  CAPSULE_PRESETS,
  calculateCrop,
  clamp,
  formatFileName,
  getPreset,
  validateMasterImage,
} from './logic';

describe('Steam capsule generator logic', () => {
  it('keeps the four requested Steam output sizes', () => {
    expect(CAPSULE_PRESETS.map(({ width, height }) => [width, height])).toEqual([
      [460, 215],
      [616, 353],
      [374, 448],
      [184, 184],
    ]);
  });

  it('accepts the minimum master image and rejects smaller images', () => {
    expect(validateMasterImage(1920, 1080).valid).toBe(true);
    expect(validateMasterImage(1919, 1080).valid).toBe(false);
    expect(validateMasterImage(1920, 1079).valid).toBe(false);
    expect(validateMasterImage(Number.NaN, 1080).valid).toBe(false);
  });

  it('crops a wide source around the focal point', () => {
    expect(calculateCrop({ width: 4000, height: 1200 }, { width: 460, height: 215 }, 0, 0)).toMatchObject({ x: 0, y: 0, width: 2567.441860465116 });
    expect(calculateCrop({ width: 4000, height: 1200 }, { width: 460, height: 215 }, 1, 0).x).toBeCloseTo(1432.5581, 3);
  });

  it('crops a tall source vertically and clamps invalid focal values', () => {
    const crop = calculateCrop({ width: 1200, height: 2400 }, { width: 616, height: 353 }, 2, -1);
    expect(crop.x).toBe(0);
    expect(crop.width).toBe(1200);
    expect(crop.y).toBe(0);
    expect(clamp(3)).toBe(1);
    expect(clamp(-2)).toBe(0);
    expect(clamp(Number.POSITIVE_INFINITY)).toBe(0);
  });

  it('returns safe file names and lookup results', () => {
    expect(formatFileName('main-capsule')).toBe('main-capsule.png');
    expect(getPreset('community-icon')?.width).toBe(184);
    expect(getPreset('unknown')).toBeUndefined();
  });
});
