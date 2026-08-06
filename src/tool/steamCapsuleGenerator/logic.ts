export interface CapsulePreset {
  id: string;
  width: number;
  height: number;
  safeLeft: number;
  safeTop: number;
  safeRight: number;
  safeBottom: number;
}

export interface CropRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface ImageDimensions {
  width: number;
  height: number;
}

export interface ImageValidation {
  valid: boolean;
  reason: 'ok' | 'too-small' | 'unsupported-ratio';
}

export const MASTER_MIN_WIDTH = 1920;
export const MASTER_MIN_HEIGHT = 1080;

export const CAPSULE_PRESETS: CapsulePreset[] = [
  { id: 'header-capsule', width: 460, height: 215, safeLeft: 0.03, safeTop: 0.08, safeRight: 0.25, safeBottom: 0.08 },
  { id: 'main-capsule', width: 616, height: 353, safeLeft: 0.03, safeTop: 0.08, safeRight: 0.2, safeBottom: 0.08 },
  { id: 'vertical-capsule', width: 374, height: 448, safeLeft: 0.06, safeTop: 0.08, safeRight: 0.06, safeBottom: 0.18 },
  { id: 'community-icon', width: 184, height: 184, safeLeft: 0.08, safeTop: 0.08, safeRight: 0.08, safeBottom: 0.08 },
];

export function clamp(value: number, min = 0, max = 1): number {
  if (!Number.isFinite(value)) return min;
  return Math.min(max, Math.max(min, value));
}

export function validateMasterImage(width: number, height: number): ImageValidation {
  if (!Number.isFinite(width) || !Number.isFinite(height) || width <= 0 || height <= 0) {
    return { valid: false, reason: 'too-small' };
  }
  if (width < MASTER_MIN_WIDTH || height < MASTER_MIN_HEIGHT) {
    return { valid: false, reason: 'too-small' };
  }
  return { valid: true, reason: 'ok' };
}

export function calculateCrop(
  source: ImageDimensions,
  target: ImageDimensions,
  focalX = 0.5,
  focalY = 0.5,
): CropRect {
  const { width: sourceWidth, height: sourceHeight } = source;
  const { width: targetWidth, height: targetHeight } = target;
  if (![sourceWidth, sourceHeight, targetWidth, targetHeight].every((value) => Number.isFinite(value) && value > 0)) {
    return { x: 0, y: 0, width: 0, height: 0 };
  }
  const targetRatio = targetWidth / targetHeight;
  const sourceRatio = sourceWidth / sourceHeight;
  const focusX = clamp(focalX);
  const focusY = clamp(focalY);
  if (sourceRatio > targetRatio) {
    const width = sourceHeight * targetRatio;
    return { x: (sourceWidth - width) * focusX, y: 0, width, height: sourceHeight };
  }
  const height = sourceWidth / targetRatio;
  return { x: 0, y: (sourceHeight - height) * focusY, width: sourceWidth, height };
}

export function getPreset(id: string): CapsulePreset | undefined {
  return CAPSULE_PRESETS.find((preset) => preset.id === id);
}

export function formatFileName(id: string): string {
  return `${id}.png`;
}
