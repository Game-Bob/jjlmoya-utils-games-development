import { describe, expect, it } from 'vitest';
import {
  calculateCropBounds,
  getInitialState,
  STEAM_ASSETS,
  validateImageDimensions
} from './logic';

describe('Steam Capsule Generator Logic', () => {
  it('contains mandatory Steam asset definitions', () => {
    expect(STEAM_ASSETS.length).toBeGreaterThanOrEqual(7);
    const header = STEAM_ASSETS.find((a) => a.id === 'header-capsule');
    expect(header).toBeDefined();
    expect(header?.hdWidth).toBe(920);
    expect(header?.hdHeight).toBe(430);
  });

  it('calculates crop bounds correctly with centered focal point', () => {
    const crop = calculateCropBounds({
      srcWidth: 1920,
      srcHeight: 1080,
      targetWidth: 460,
      targetHeight: 215,
      focusX: 0.5,
      focusY: 0.5,
      zoom: 1
    });
    expect(crop.sWidth).toBeGreaterThan(0);
    expect(crop.sHeight).toBeGreaterThan(0);
    expect(crop.sx).toBeGreaterThanOrEqual(0);
    expect(crop.sy).toBeGreaterThanOrEqual(0);
  });

  it('calculates crop bounds with zoom factor', () => {
    const unzoomed = calculateCropBounds({
      srcWidth: 1920,
      srcHeight: 1080,
      targetWidth: 460,
      targetHeight: 215,
      focusX: 0.5,
      focusY: 0.5,
      zoom: 1
    });
    const zoomed = calculateCropBounds({
      srcWidth: 1920,
      srcHeight: 1080,
      targetWidth: 460,
      targetHeight: 215,
      focusX: 0.5,
      focusY: 0.5,
      zoom: 2
    });
    expect(zoomed.sWidth).toBeLessThan(unzoomed.sWidth);
    expect(zoomed.sHeight).toBeLessThan(unzoomed.sHeight);
  });

  it('validates image resolution sufficiency against HD specs', () => {
    const headerSpec = STEAM_ASSETS.find((a) => a.id === 'header-capsule')!;
    const highRes = validateImageDimensions(1920, 1080, headerSpec);
    expect(highRes.isSufficient).toBe(true);

    const lowRes = validateImageDimensions(300, 200, headerSpec);
    expect(lowRes.isSufficient).toBe(false);
  });

  it('provides default tool state', () => {
    const state = getInitialState();
    expect(state.focalPoint.x).toBe(0.5);
    expect(state.focalPoint.y).toBe(0.5);
    expect(state.showSafeZones).toBe(true);
  });
});
