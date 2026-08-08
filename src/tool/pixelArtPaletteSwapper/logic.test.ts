import { describe, expect, it } from 'vitest';
import {
  PRESET_PALETTES,
  findNearestColor,
  hexToRgb,
  parsePaletteInput,
  quantizeImageData,
  rgbToHex,
} from './logic';

describe('pixel art palette swapper logic', () => {
  it('parses short and full hex colors into normalized values', () => {
    expect(hexToRgb('#0f8')).toEqual({ r: 0, g: 255, b: 136 });
    expect(rgbToHex({ r: 18, g: 52, b: 86 })).toBe('#123456');
  });

  it('removes invalid and duplicate custom colors', () => {
    expect(parsePaletteInput('#000, #ffffff, nope, #000000')).toEqual([
      { r: 0, g: 0, b: 0, hex: '#000000' },
      { r: 255, g: 255, b: 255, hex: '#ffffff' },
    ]);
  });

  it('chooses the closest palette color in RGB space', () => {
    const palette = parsePaletteInput('#000000 #ffffff');
    expect(findNearestColor({ r: 220, g: 220, b: 220 }, palette)?.hex).toBe('#ffffff');
    expect(findNearestColor({ r: 30, g: 30, b: 30 }, palette)?.hex).toBe('#000000');
  });

  it('maps opaque pixels while preserving transparent pixels and alpha', () => {
    const source = new Uint8ClampedArray([
      240, 20, 20, 255,
      10, 10, 10, 128,
      255, 255, 255, 0,
    ]);
    const result = quantizeImageData(source, PRESET_PALETTES.pico8);
    expect(Array.from(result.data.slice(0, 4))).toEqual([255, 0, 77, 255]);
    expect(result.data[7]).toBe(128);
    expect(Array.from(result.data.slice(8, 12))).toEqual([255, 255, 255, 0]);
    expect(result.sourceColors).toBe(2);
    expect(result.mappedColors).toBe(2);
  });
});
