export type SimulationMode =
  | 'original'
  | 'protanopia'
  | 'deuteranopia'
  | 'tritanopia'
  | 'achromatopsia'
  | 'reduced-contrast'
  | 'desaturation';

export interface RGBColor {
  r: number;
  g: number;
  b: number;
}

type Matrix3 = readonly [
  number, number, number,
  number, number, number,
  number, number, number,
];

const CVD_MATRICES: Partial<Record<SimulationMode, Matrix3>> = {
  protanopia: [
    0.152286, 1.052583, -0.204868,
    0.114503, 0.786281, 0.099216,
    -0.003882, -0.048116, 1.051998,
  ],
  deuteranopia: [
    0.367322, 0.860646, -0.227968,
    0.280085, 0.672501, 0.047413,
    -0.011820, 0.042940, 0.968881,
  ],
  tritanopia: [
    1.255528, -0.076749, -0.178779,
    -0.078411, 0.930809, 0.147602,
    0.004733, 0.691367, 0.303900,
  ],
};

function clamp(value: number, minimum: number, maximum: number): number {
  if (!Number.isFinite(value)) return minimum;
  return Math.min(maximum, Math.max(minimum, value));
}

function normalizeChannel(value: number): number {
  return clamp(value, 0, 255) / 255;
}

function linearize(value: number): number {
  const channel = normalizeChannel(value);
  return channel <= 0.04045
    ? channel / 12.92
    : ((channel + 0.055) / 1.055) ** 2.4;
}

function encodeLinear(value: number): number {
  const channel = clamp(value, 0, 1);
  const encoded = channel <= 0.0031308
    ? 12.92 * channel
    : 1.055 * channel ** (1 / 2.4) - 0.055;
  return Math.round(encoded * 255);
}

function multiplyMatrix(color: RGBColor, matrix: Matrix3): RGBColor {
  const [red, green, blue] = [linearize(color.r), linearize(color.g), linearize(color.b)];
  return {
    r: encodeLinear(matrix[0] * red + matrix[1] * green + matrix[2] * blue),
    g: encodeLinear(matrix[3] * red + matrix[4] * green + matrix[5] * blue),
    b: encodeLinear(matrix[6] * red + matrix[7] * green + matrix[8] * blue),
  };
}

function grayscale(color: RGBColor): RGBColor {
  const value = encodeLinear(relativeLuminance(color));
  return { r: value, g: value, b: value };
}

function reduceContrast(color: RGBColor): RGBColor {
  const midpoint = 128;
  const factor = 0.55;
  return {
    r: Math.round(midpoint + (clamp(color.r, 0, 255) - midpoint) * factor),
    g: Math.round(midpoint + (clamp(color.g, 0, 255) - midpoint) * factor),
    b: Math.round(midpoint + (clamp(color.b, 0, 255) - midpoint) * factor),
  };
}

function desaturate(color: RGBColor): RGBColor {
  const gray = grayscale(color);
  const saturation = 0.25;
  return {
    r: Math.round(gray.r + (clamp(color.r, 0, 255) - gray.r) * saturation),
    g: Math.round(gray.g + (clamp(color.g, 0, 255) - gray.g) * saturation),
    b: Math.round(gray.b + (clamp(color.b, 0, 255) - gray.b) * saturation),
  };
}

export function simulateColor(color: RGBColor, mode: SimulationMode): RGBColor {
  const matrix = CVD_MATRICES[mode];
  if (matrix) return multiplyMatrix(color, matrix);
  if (mode === 'achromatopsia') return grayscale(color);
  if (mode === 'reduced-contrast') return reduceContrast(color);
  if (mode === 'desaturation') return desaturate(color);
  return {
    r: Math.round(clamp(color.r, 0, 255)),
    g: Math.round(clamp(color.g, 0, 255)),
    b: Math.round(clamp(color.b, 0, 255)),
  };
}

export function relativeLuminance(color: RGBColor): number {
  return 0.2126 * linearize(color.r)
    + 0.7152 * linearize(color.g)
    + 0.0722 * linearize(color.b);
}

export function contrastRatio(first: RGBColor, second: RGBColor): number {
  const firstLuminance = relativeLuminance(first);
  const secondLuminance = relativeLuminance(second);
  const lighter = Math.max(firstLuminance, secondLuminance);
  const darker = Math.min(firstLuminance, secondLuminance);
  return (lighter + 0.05) / (darker + 0.05);
}

export function colorDistance(first: RGBColor, second: RGBColor): number {
  const red = linearize(first.r) - linearize(second.r);
  const green = linearize(first.g) - linearize(second.g);
  const blue = linearize(first.b) - linearize(second.b);
  return Math.sqrt(red ** 2 + green ** 2 + blue ** 2);
}

export function separationRetention(
  originalFirst: RGBColor,
  originalSecond: RGBColor,
  simulatedFirst: RGBColor,
  simulatedSecond: RGBColor,
): number {
  const original = colorDistance(originalFirst, originalSecond);
  if (original === 0) return 0;
  const simulated = colorDistance(simulatedFirst, simulatedSecond);
  return clamp((simulated / original) * 100, 0, 100);
}

export function toHex(color: RGBColor): string {
  const channel = (value: number) => Math.round(clamp(value, 0, 255)).toString(16).padStart(2, '0');
  return `#${channel(color.r)}${channel(color.g)}${channel(color.b)}`;
}

export function fromHex(value: string): RGBColor | null {
  const match = value.trim().match(/^#([\da-f]{6})$/i)?.[1];
  if (!match) return null;
  return {
    r: Number.parseInt(match.slice(0, 2), 16),
    g: Number.parseInt(match.slice(2, 4), 16),
    b: Number.parseInt(match.slice(4, 6), 16),
  };
}
