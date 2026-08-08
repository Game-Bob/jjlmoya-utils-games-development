export interface RGBColor {
  r: number;
  g: number;
  b: number;
}

export interface PaletteColor extends RGBColor {
  hex: string;
}

export interface QuantizationResult {
  data: Uint8ClampedArray;
  sourceColors: number;
  mappedColors: number;
}

export const PRESET_PALETTES: Record<string, PaletteColor[]> = {
  gameBoy: ['#0f380f', '#306230', '#8bac0f', '#9bbc0f'].map(createPresetPaletteColor),
  nes: [
    '#000000', '#fcfcfc', '#f8f8f8', '#b8b8b8', '#7c7c7c', '#a80000', '#e45c10', '#f8b800',
    '#f8d878', '#00a800', '#58d854', '#b8f8b8', '#0058f8', '#00a8e8', '#3cbcfc', '#a4e4fc',
  ].map(createPresetPaletteColor),
  pico8: [
    '#000000', '#1d2b53', '#7e2553', '#008751', '#ab5236', '#5f574f', '#c2c3c7', '#fff1e8',
    '#ff004d', '#ffa300', '#ffec27', '#00e436', '#29adff', '#83769c', '#ff77a8', '#ffccaa',
  ].map(createPresetPaletteColor),
  commodore64: [
    '#000000', '#ffffff', '#813338', '#75cec8', '#8e3c97', '#56ac4d', '#2e2c9b', '#edf171',
    '#8e5029', '#553800', '#c46c71', '#4a4a4a', '#7b7b7b', '#a9ff9f', '#706deb', '#b2b2b2',
  ].map(createPresetPaletteColor),
  dawnBringer16: [
    '#140c1c', '#442434', '#30346d', '#4e4a4e', '#854c30', '#346524', '#d04648', '#757161',
    '#597dce', '#d27d2c', '#8595a1', '#6daa2c', '#d2aa99', '#6dc2ca', '#dad45e', '#deeed6',
  ].map(createPresetPaletteColor),
};

export function createPaletteColor(hex: string): PaletteColor {
  const rgb = hexToRgb(hex);
  if (!rgb) {
    throw new Error(`Invalid color: ${hex}`);
  }

  return { ...rgb, hex: rgbToHex(rgb) };
}

export function hexToRgb(value: string): RGBColor | null {
  const normalized = value.trim().replace(/^#/, '');
  const expanded = normalized.length === 3
    ? normalized.split('').map((channel) => `${channel}${channel}`).join('')
    : normalized;

  if (!/^[0-9a-f]{6}$/i.test(expanded)) {
    return null;
  }

  return {
    r: Number.parseInt(expanded.slice(0, 2), 16),
    g: Number.parseInt(expanded.slice(2, 4), 16),
    b: Number.parseInt(expanded.slice(4, 6), 16),
  };
}

export function rgbToHex(color: RGBColor): string {
  return `#${[color.r, color.g, color.b]
    .map((channel) => Math.max(0, Math.min(255, Math.round(channel))).toString(16).padStart(2, '0'))
    .join('')}`;
}

export function parsePaletteInput(value: string): PaletteColor[] {
  const colors = value
    .split(/[\s,;]+/)
    .map((token) => token.trim())
    .filter(Boolean);
  const seen = new Set<string>();
  const palette: PaletteColor[] = [];

  for (const color of colors) {
    const parsed = hexToRgb(color);
    if (!parsed) {
      continue;
    }
    const hex = rgbToHex(parsed);
    if (!seen.has(hex)) {
      seen.add(hex);
      palette.push({ ...parsed, hex });
    }
  }

  return palette;
}

export function findNearestColor(source: RGBColor, palette: PaletteColor[]): PaletteColor | null {
  if (palette.length === 0) {
    return null;
  }

  let nearest = palette[0];
  let distance = colorDistanceSquared(source, nearest);

  for (let index = 1; index < palette.length; index += 1) {
    const candidate = palette[index];
    const candidateDistance = colorDistanceSquared(source, candidate);
    if (candidateDistance < distance) {
      nearest = candidate;
      distance = candidateDistance;
    }
  }

  return nearest;
}

export function colorDistanceSquared(first: RGBColor, second: RGBColor): number {
  const red = first.r - second.r;
  const green = first.g - second.g;
  const blue = first.b - second.b;
  return red * red + green * green + blue * blue;
}

export function quantizeImageData(
  source: Uint8ClampedArray,
  palette: PaletteColor[],
  preserveTransparency = true,
): QuantizationResult {
  const data = new Uint8ClampedArray(source);
  const sourceColors = new Set<string>();
  const mappedColors = new Set<string>();

  if (palette.length === 0) {
    return { data, sourceColors: 0, mappedColors: 0 };
  }

  for (let index = 0; index < data.length; index += 4) {
    const alpha = data[index + 3];
    if (alpha === 0 && preserveTransparency) {
      continue;
    }

    const sourceColor = { r: data[index], g: data[index + 1], b: data[index + 2] };
    const sourceHex = rgbToHex(sourceColor);
    const mapped = findNearestColor(sourceColor, palette);
    if (!mapped) {
      continue;
    }

    sourceColors.add(sourceHex);
    mappedColors.add(mapped.hex);
    data[index] = mapped.r;
    data[index + 1] = mapped.g;
    data[index + 2] = mapped.b;
    if (!preserveTransparency) {
      data[index + 3] = 255;
    }
  }

  return { data, sourceColors: sourceColors.size, mappedColors: mappedColors.size };
}

function createPresetPaletteColor(hex: string): PaletteColor {
  const rgb = hexToRgb(hex);
  if (!rgb) {
    throw new Error(`Invalid color: ${hex}`);
  }
  return { ...rgb, hex: rgbToHex(rgb) };
}
