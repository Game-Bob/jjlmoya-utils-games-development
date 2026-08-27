import { describe, expect, it } from 'vitest';
import { normalizeLoopConfig, simulateLoop } from './logic';

describe('game delta time fixed timestep lab', () => {
  it('keeps both models aligned without frame spikes', () => {
    const result = simulateLoop({ fps: 60, spikeMs: 0, durationSeconds: 1, velocity: 10 });

    expect(result.variablePosition).toBeCloseTo(10, 4);
    expect(result.fixedPosition).toBeCloseTo(10, 3);
    expect(result.divergence).toBeCloseTo(0, 3);
  });

  it('makes an unclamped variable model run ahead after spikes', () => {
    const result = simulateLoop({ fps: 60, spikeMs: 80, spikeEveryFrames: 30, durationSeconds: 1, velocity: 10 });

    expect(result.variablePosition).toBeGreaterThan(result.fixedPosition);
    expect(result.maxCatchUp).toBeGreaterThan(1);
  });

  it('shows the time discarded by a delta clamp', () => {
    const result = simulateLoop({ fps: 60, spikeMs: 80, spikeEveryFrames: 30, durationSeconds: 1, velocity: 10, clampEnabled: true, clampMs: 20 });

    expect(result.variableTime).toBeLessThan(result.totalWallTime);
    expect(result.variablePosition).toBeLessThan(result.fixedPosition);
  });

  it('normalizes invalid values to safe experiment bounds', () => {
    const config = normalizeLoopConfig({ fps: 0, fixedDtMs: -1, durationSeconds: Number.NaN, spikeMs: 900 });

    expect(config.fps).toBe(60);
    expect(config.fixedDtMs).toBeCloseTo(16.666, 3);
    expect(config.durationSeconds).toBe(6);
    expect(config.spikeMs).toBe(500);
  });
});
