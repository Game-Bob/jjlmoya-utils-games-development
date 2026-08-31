export interface PixelPerUnitConfig {
  displayWidth: number;
  displayHeight: number;
  spriteWidth: number;
  spriteHeight: number;
  worldWidth: number;
  worldHeight: number;
  targetScale: number;
}

export interface CrispScaleStep {
  scale: number;
  renderedWidth: number;
  renderedHeight: number;
  fitsViewport: boolean;
  deltaFromTarget: number;
}

export type BleedRisk = 'low' | 'medium' | 'high';

export interface PixelPerUnitResult {
  config: PixelPerUnitConfig;
  ppuX: number;
  ppuY: number;
  viewportWorldWidth: number;
  viewportWorldHeight: number;
  renderedSpriteWidth: number;
  renderedSpriteHeight: number;
  fitScale: number;
  recommendedScale: number;
  scaleIsInteger: boolean;
  axisMismatch: number;
  bleedRisk: BleedRisk;
  steps: CrispScaleStep[];
}

export const DEFAULT_PIXEL_CONFIG: PixelPerUnitConfig = {
  displayWidth: 320,
  displayHeight: 180,
  spriteWidth: 64,
  spriteHeight: 64,
  worldWidth: 1,
  worldHeight: 1,
  targetScale: 4,
};

function clamp(value: number, minimum: number, maximum: number): number {
  return Math.min(maximum, Math.max(minimum, value));
}

function finiteOr(value: number | undefined, fallback: number): number {
  return Number.isFinite(value) ? value as number : fallback;
}

function normalizeInteger(value: number | undefined, fallback: number, minimum: number, maximum: number): number {
  return Math.round(clamp(finiteOr(value, fallback), minimum, maximum));
}

function normalizePositive(value: number | undefined, fallback: number, minimum: number, maximum: number): number {
  return clamp(finiteOr(value, fallback), minimum, maximum);
}

function normalizeScale(value: number | undefined): number {
  const raw = normalizePositive(value, DEFAULT_PIXEL_CONFIG.targetScale, 0.5, 16);
  return Math.round(raw * 4) / 4;
}

export function normalizePixelConfig(input: Partial<PixelPerUnitConfig> = {}): PixelPerUnitConfig {
  return {
    displayWidth: normalizeInteger(input.displayWidth, DEFAULT_PIXEL_CONFIG.displayWidth, 160, 7680),
    displayHeight: normalizeInteger(input.displayHeight, DEFAULT_PIXEL_CONFIG.displayHeight, 90, 4320),
    spriteWidth: normalizeInteger(input.spriteWidth, DEFAULT_PIXEL_CONFIG.spriteWidth, 1, 4096),
    spriteHeight: normalizeInteger(input.spriteHeight, DEFAULT_PIXEL_CONFIG.spriteHeight, 1, 4096),
    worldWidth: normalizePositive(input.worldWidth, DEFAULT_PIXEL_CONFIG.worldWidth, 0.01, 1000),
    worldHeight: normalizePositive(input.worldHeight, DEFAULT_PIXEL_CONFIG.worldHeight, 0.01, 1000),
    targetScale: normalizeScale(input.targetScale),
  };
}

function makeScaleSteps(config: PixelPerUnitConfig): CrispScaleStep[] {
  const start = Math.max(1, Math.floor(config.targetScale) - 2);
  const end = Math.min(16, Math.ceil(config.targetScale) + 2);
  return Array.from({ length: end - start + 1 }, (_, index) => {
    const scale = start + index;
    return {
      scale,
      renderedWidth: config.spriteWidth * scale,
      renderedHeight: config.spriteHeight * scale,
      fitsViewport: config.spriteWidth * scale <= config.displayWidth && config.spriteHeight * scale <= config.displayHeight,
      deltaFromTarget: Math.abs(scale - config.targetScale),
    };
  });
}

function findRecommendedScale(config: PixelPerUnitConfig, steps: CrispScaleStep[]): number {
  const fitting = steps.filter((step) => step.fitsViewport);
  const candidates = fitting.length > 0 ? fitting : steps;
  return candidates.reduce((best, step) => step.deltaFromTarget < best.deltaFromTarget ? step : best).scale;
}

function calculateRisk(config: PixelPerUnitConfig, axisMismatch: number, fitScale: number): BleedRisk {
  if (!Number.isInteger(config.targetScale) || axisMismatch > 0.08) return 'high';
  if (axisMismatch > 0.01 || config.targetScale > fitScale) return 'medium';
  return 'low';
}

export function calculatePixelPlan(input: Partial<PixelPerUnitConfig> = {}): PixelPerUnitResult {
  const config = normalizePixelConfig(input);
  const ppuX = config.spriteWidth * config.targetScale / config.worldWidth;
  const ppuY = config.spriteHeight * config.targetScale / config.worldHeight;
  const axisMismatch = Math.abs(ppuX - ppuY) / Math.max(ppuX, ppuY);
  const fitScale = Math.min(config.displayWidth / config.spriteWidth, config.displayHeight / config.spriteHeight);
  const steps = makeScaleSteps(config);
  return {
    config,
    ppuX,
    ppuY,
    viewportWorldWidth: config.displayWidth / ppuX,
    viewportWorldHeight: config.displayHeight / ppuY,
    renderedSpriteWidth: config.spriteWidth * config.targetScale,
    renderedSpriteHeight: config.spriteHeight * config.targetScale,
    fitScale,
    recommendedScale: findRecommendedScale(config, steps),
    scaleIsInteger: Number.isInteger(config.targetScale),
    axisMismatch,
    bleedRisk: calculateRisk(config, axisMismatch, fitScale),
    steps,
  };
}
