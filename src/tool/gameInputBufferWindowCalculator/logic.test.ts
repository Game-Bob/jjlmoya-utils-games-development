import { describe, expect, it } from 'vitest';
import { calculateInputBufferWindow, normalizeInputBufferWindowConfig, validateInputBufferWindowConfig } from './logic';

describe('game input buffer window calculator', () => {
  it('converts active animation frames into a usable timing window', () => {
    const result = calculateInputBufferWindow({ fps: 60, activeStartFrame: 8, activeEndFrame: 12, bufferMs: 100, latencyMs: 50 });

    expect(result.frameMs).toBeCloseTo(16.6667, 3);
    expect(result.activeFrameCount).toBe(5);
    expect(result.activeWindowMs).toBeCloseTo(83.333, 2);
    expect(result.usableBufferMs).toBe(50);
    expect(result.effectiveWindowMs).toBeCloseTo(133.333, 2);
    expect(result.status).toBe('ready');
  });

  it('flags a buffer that is consumed by latency', () => {
    const result = calculateInputBufferWindow({ bufferMs: 30, latencyMs: 55, activeStartFrame: 10, activeEndFrame: 10 });

    expect(result.usableBufferMs).toBe(0);
    expect(result.lateByMs).toBe(25);
    expect(result.status).toBe('late');
  });

  it('shows a tight but not late window when less than one frame remains', () => {
    const result = calculateInputBufferWindow({ fps: 60, bufferMs: 15, latencyMs: 0, activeStartFrame: 4, activeEndFrame: 4 });

    expect(result.usableBufferMs).toBe(15);
    expect(result.framesAvailable).toBe(1);
    expect(result.status).toBe('tight');
  });

  it('normalizes invalid values to safe bounds and preserves frame order', () => {
    const config = normalizeInputBufferWindowConfig({ fps: 0, activeStartFrame: 0, activeEndFrame: 0, bufferMs: 2000, latencyMs: -4 });

    expect(config.fps).toBe(1);
    expect(config.activeStartFrame).toBe(1);
    expect(config.activeEndFrame).toBe(1);
    expect(config.bufferMs).toBe(1000);
    expect(config.latencyMs).toBe(0);
  });

  it('reports an incompatible frame range instead of hiding it', () => {
    expect(validateInputBufferWindowConfig({ fps: 60, activeStartFrame: 12, activeEndFrame: 8, bufferMs: 100, latencyMs: 20 })).toContain('frame-order');
  });
});
