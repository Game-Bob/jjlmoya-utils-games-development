import { describe, expect, it } from 'vitest';
import {
  colorDistance,
  contrastRatio,
  fromHex,
  relativeLuminance,
  separationRetention,
  simulateColor,
  toHex,
} from './logic';

describe('game UI accessibility stress tester logic', () => {
  it('matches WCAG reference luminance and contrast cases', () => {
    expect(relativeLuminance({ r: 0, g: 0, b: 0 })).toBe(0);
    expect(relativeLuminance({ r: 255, g: 255, b: 255 })).toBe(1);
    expect(contrastRatio({ r: 0, g: 0, b: 0 }, { r: 255, g: 255, b: 255 })).toBe(21);
    expect(contrastRatio({ r: 119, g: 119, b: 119 }, { r: 255, g: 255, b: 255 })).toBeCloseTo(4.478, 2);
  });

  it('applies documented severity one CVD matrices in linear RGB', () => {
    const red = { r: 255, g: 0, b: 0 };
    expect(simulateColor(red, 'protanopia')).toEqual({ r: 109, g: 95, b: 0 });
    expect(simulateColor(red, 'deuteranopia')).toEqual({ r: 163, g: 144, b: 0 });
    expect(simulateColor(red, 'tritanopia')).toEqual({ r: 255, g: 0, b: 15 });
  });

  it('preserves black and white through every CVD matrix', () => {
    const modes = ['protanopia', 'deuteranopia', 'tritanopia'] as const;
    modes.forEach((mode) => {
      expect(simulateColor({ r: 0, g: 0, b: 0 }, mode)).toEqual({ r: 0, g: 0, b: 0 });
      expect(simulateColor({ r: 255, g: 255, b: 255 }, mode)).toEqual({ r: 255, g: 255, b: 255 });
    });
  });

  it('supports grayscale, desaturation, reduced contrast and original modes', () => {
    expect(simulateColor({ r: 255, g: 0, b: 0 }, 'achromatopsia')).toEqual({ r: 127, g: 127, b: 127 });
    expect(simulateColor({ r: 255, g: 0, b: 0 }, 'desaturation')).toEqual({ r: 159, g: 95, b: 95 });
    expect(simulateColor({ r: 255, g: 0, b: 0 }, 'reduced-contrast')).toEqual({ r: 198, g: 58, b: 58 });
    expect(simulateColor({ r: 300, g: -10, b: Number.NaN }, 'original')).toEqual({ r: 255, g: 0, b: 0 });
  });

  it('measures separation loss with stable limits', () => {
    const black = { r: 0, g: 0, b: 0 };
    const white = { r: 255, g: 255, b: 255 };
    expect(colorDistance(black, black)).toBe(0);
    expect(separationRetention(black, white, black, white)).toBe(100);
    expect(separationRetention(black, white, black, black)).toBe(0);
    expect(separationRetention(black, black, black, white)).toBe(0);
  });

  it('formats clamped RGB colors as lowercase hexadecimal', () => {
    expect(toHex({ r: 255, g: 16, b: 0 })).toBe('#ff1000');
    expect(toHex({ r: -1, g: 300, b: Number.NaN })).toBe('#00ff00');
    expect(fromHex('#1aB2c3')).toEqual({ r: 26, g: 178, b: 195 });
    expect(fromHex('invalid')).toBeNull();
  });
});
