import { describe, expect, it } from 'vitest';
import { calculatePixelPlan, normalizePixelConfig } from './logic';

describe('game pixel per unit planner logic', () => {
  it('calculates the reference Bob sprite plan', () => {
    const result = calculatePixelPlan({ spriteWidth: 64, spriteHeight: 64, targetScale: 2, worldWidth: 1, worldHeight: 1, displayWidth: 320, displayHeight: 180 });
    expect(result.ppuX).toBe(128);
    expect(result.ppuY).toBe(128);
    expect(result.viewportWorldWidth).toBe(2.5);
    expect(result.viewportWorldHeight).toBe(1.40625);
  });

  it('finds integer scales that fit and recommends the closest one', () => {
    const result = calculatePixelPlan({ spriteWidth: 16, spriteHeight: 16, targetScale: 4, displayWidth: 320, displayHeight: 180 });
    expect(result.steps.some((step) => step.scale === 4 && step.fitsViewport)).toBe(true);
    expect(result.recommendedScale).toBe(4);
    expect(result.fitScale).toBe(11.25);
  });

  it('marks fractional and mismatched plans as risky', () => {
    const result = calculatePixelPlan({ spriteWidth: 17, spriteHeight: 16, targetScale: 2.5, worldWidth: 1, worldHeight: 1 });
    expect(result.scaleIsInteger).toBe(false);
    expect(result.axisMismatch).toBeGreaterThan(0);
    expect(result.bleedRisk).toBe('high');
  });

  it('normalizes invalid values at documented boundaries', () => {
    const config = normalizePixelConfig({ displayWidth: Number.NaN, spriteWidth: -4, worldHeight: 0, targetScale: 99 });
    expect(config.displayWidth).toBe(320);
    expect(config.spriteWidth).toBe(1);
    expect(config.worldHeight).toBe(0.01);
    expect(config.targetScale).toBe(16);
  });
});
