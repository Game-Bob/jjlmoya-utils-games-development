export interface LoopConfig {
  fps: number;
  spikeMs: number;
  spikeEveryFrames: number;
  fixedDtMs: number;
  velocity: number;
  durationSeconds: number;
  clampEnabled: boolean;
  clampMs: number;
}

export interface LoopSample {
  frame: number;
  wallTime: number;
  variableTime: number;
  fixedTime: number;
  variablePosition: number;
  fixedPosition: number;
  fixedSteps: number;
  frameMs: number;
}

export interface LoopResult {
  config: LoopConfig;
  samples: LoopSample[];
  frameCount: number;
  totalWallTime: number;
  variableTime: number;
  fixedTime: number;
  variablePosition: number;
  fixedPosition: number;
  divergence: number;
  fixedSteps: number;
  maxCatchUp: number;
}

export const DEFAULT_LOOP_CONFIG: LoopConfig = {
  fps: 60,
  spikeMs: 80,
  spikeEveryFrames: 30,
  fixedDtMs: 16.666,
  velocity: 20,
  durationSeconds: 6,
  clampEnabled: false,
  clampMs: 100,
};

function clampNumber(value: number, minimum: number, maximum: number): number {
  return Math.min(maximum, Math.max(minimum, value));
}

function finiteOr(value: number | undefined, fallback: number): number {
  return Number.isFinite(value) ? value as number : fallback;
}

function positiveOr(value: number | undefined, fallback: number): number {
  const candidate = finiteOr(value, fallback);
  return candidate > 0 ? candidate : fallback;
}

export function normalizeLoopConfig(input: Partial<LoopConfig> = {}): LoopConfig {
  return {
    fps: clampNumber(positiveOr(input.fps, DEFAULT_LOOP_CONFIG.fps), 1, 240),
    spikeMs: clampNumber(finiteOr(input.spikeMs, DEFAULT_LOOP_CONFIG.spikeMs), 0, 500),
    spikeEveryFrames: clampNumber(Math.round(positiveOr(input.spikeEveryFrames, DEFAULT_LOOP_CONFIG.spikeEveryFrames)), 1, 600),
    fixedDtMs: clampNumber(positiveOr(input.fixedDtMs, DEFAULT_LOOP_CONFIG.fixedDtMs), 1, 100),
    velocity: clampNumber(finiteOr(input.velocity, DEFAULT_LOOP_CONFIG.velocity), 0, 100),
    durationSeconds: clampNumber(positiveOr(input.durationSeconds, DEFAULT_LOOP_CONFIG.durationSeconds), 1, 30),
    clampEnabled: input.clampEnabled === true,
    clampMs: clampNumber(positiveOr(input.clampMs, DEFAULT_LOOP_CONFIG.clampMs), 1, 250),
  };
}

function frameDeltaMs(config: LoopConfig, frame: number): number {
  const isSpike = config.spikeMs > 0 && frame % config.spikeEveryFrames === 0;
  return 1000 / config.fps + (isSpike ? config.spikeMs : 0);
}

function fixedStepCount(accumulator: number, fixedDt: number): number {
  return Math.floor((accumulator + Number.EPSILON) / fixedDt);
}

interface SimulationState {
  wallTime: number;
  variableTime: number;
  fixedTime: number;
  variablePosition: number;
  fixedPosition: number;
  accumulator: number;
  fixedSteps: number;
  maxCatchUp: number;
}

function sampleFrame(config: LoopConfig, frame: number, state: SimulationState): LoopSample {
  const actualMs = frameDeltaMs(config, frame);
  const variableMs = config.clampEnabled ? Math.min(actualMs, config.clampMs) : actualMs;
  const actualSeconds = actualMs / 1000;
  const variableSeconds = variableMs / 1000;
  const fixedDt = config.fixedDtMs / 1000;
  state.wallTime += actualSeconds;
  state.variableTime += variableSeconds;
  state.variablePosition += config.velocity * variableSeconds;
  state.accumulator += actualSeconds;
  const steps = fixedStepCount(state.accumulator, fixedDt);
  state.accumulator -= steps * fixedDt;
  state.fixedTime += steps * fixedDt;
  state.fixedPosition += steps * config.velocity * fixedDt;
  state.fixedSteps += steps;
  state.maxCatchUp = Math.max(state.maxCatchUp, steps);
  return {
    frame,
    wallTime: state.wallTime,
    variableTime: state.variableTime,
    fixedTime: state.fixedTime,
    variablePosition: state.variablePosition,
    fixedPosition: state.fixedPosition,
    fixedSteps: state.fixedSteps,
    frameMs: actualMs,
  };
}

export function simulateLoop(input: Partial<LoopConfig> = {}): LoopResult {
  const config = normalizeLoopConfig(input);
  const frameCount = Math.ceil(config.durationSeconds * config.fps);
  const state: SimulationState = { wallTime: 0, variableTime: 0, fixedTime: 0, variablePosition: 0, fixedPosition: 0, accumulator: 0, fixedSteps: 0, maxCatchUp: 0 };
  const samples = Array.from({ length: frameCount }, (_, index) => sampleFrame(config, index + 1, state));
  return {
    config,
    samples,
    frameCount,
    totalWallTime: state.wallTime,
    variableTime: state.variableTime,
    fixedTime: state.fixedTime,
    variablePosition: state.variablePosition,
    fixedPosition: state.fixedPosition,
    divergence: state.variablePosition - state.fixedPosition,
    fixedSteps: state.fixedSteps,
    maxCatchUp: state.maxCatchUp,
  };
}
