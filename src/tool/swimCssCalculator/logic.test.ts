import { describe, it, expect } from 'vitest';
import {
  parseTimeToSeconds,
  formatTimeSeconds,
  calculateSwimCss,
} from './logic';

describe('swimCssCalculator logic', () => {
  it('parses minutes and seconds into total seconds', () => {
    expect(parseTimeToSeconds(5, 30)).toBe(330);
    expect(parseTimeToSeconds(0, 45)).toBe(45);
    expect(parseTimeToSeconds(-1, -5)).toBe(0);
    expect(parseTimeToSeconds(NaN, NaN)).toBe(0);
  });

  it('formats time seconds into mm:ss strings', () => {
    expect(formatTimeSeconds(90)).toBe('1:30');
    expect(formatTimeSeconds(65)).toBe('1:05');
    expect(formatTimeSeconds(0)).toBe('0:00');
    expect(formatTimeSeconds(-10)).toBe('--:--');
    expect(formatTimeSeconds(NaN)).toBe('--:--');
  });

  it('calculates CSS speed and paces correctly for valid inputs', () => {
    const result = calculateSwimCss({
      t400Min: 6,
      t400Sec: 0,
      t200Min: 2,
      t200Sec: 50,
      unit: 'metric',
    });

    expect(result).not.toBeNull();
    if (result) {
      expect(result.cssSpeed).toBeCloseTo(200 / (360 - 170), 4);
      expect(result.formattedPace100).toBe('1:35');
      expect(result.zones.length).toBe(3);

      const cssZone = result.zones.find((z) => z.key === 'css');
      expect(cssZone).toBeDefined();
      if (cssZone) {
        const split100 = cssZone.splits.find((s) => s.distance === 100);
        expect(split100?.formattedTime).toBe('1:35');
      }
    }
  });

  it('returns null when T400 is less than or equal to T200', () => {
    const invalidResult1 = calculateSwimCss({
      t400Min: 3,
      t400Sec: 0,
      t200Min: 3,
      t200Sec: 0,
      unit: 'metric',
    });
    expect(invalidResult1).toBeNull();

    const invalidResult2 = calculateSwimCss({
      t400Min: 2,
      t400Sec: 0,
      t200Min: 3,
      t200Sec: 0,
      unit: 'metric',
    });
    expect(invalidResult2).toBeNull();
  });

  it('handles imperial units mode configuration', () => {
    const result = calculateSwimCss({
      t400Min: 5,
      t400Sec: 30,
      t200Min: 2,
      t200Sec: 30,
      unit: 'imperial',
    });
    expect(result?.unit).toBe('imperial');
  });
});
