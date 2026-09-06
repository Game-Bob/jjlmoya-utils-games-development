export interface InputBufferWindowConfig {
  fps: number;
  activeStartFrame: number;
  activeEndFrame: number;
  bufferMs: number;
  latencyMs: number;
}

export interface InputBufferWindowResult {
  config: InputBufferWindowConfig;
  frameMs: number;
  activeFrameCount: number;
  activeWindowMs: number;
  usableBufferMs: number;
  effectiveWindowMs: number;
  framesAvailable: number;
  lateByMs: number;
  activeStartMs: number;
  activeEndMs: number;
  bufferStartMs: number;
  status: 'ready' | 'tight' | 'late';
}

export const DEFAULT_INPUT_BUFFER_WINDOW_CONFIG: InputBufferWindowConfig = {
  fps: 60,
  activeStartFrame: 8,
  activeEndFrame: 12,
  bufferMs: 100,
  latencyMs: 50,
};

function finiteOr(value: number | undefined, fallback: number): number {
  return Number.isFinite(value) ? value as number : fallback;
}

function clamp(value: number, minimum: number, maximum: number): number {
  return Math.min(maximum, Math.max(minimum, value));
}

function positiveIntOr(value: number | undefined, fallback: number): number {
  return Math.round(finiteOr(value, fallback));
}

function validateFiniteRange(value: number | undefined, numberError: string, rangeError: string, bounds: readonly [number, number]): string | undefined {
  const [minimum, maximum] = bounds;
  if (!Number.isFinite(value)) return numberError;
  if (value! < minimum || value! > maximum) return rangeError;
  return undefined;
}

function getStatus(lateByMs: number, usableBufferMs: number, frameMs: number): InputBufferWindowResult['status'] {
  if (lateByMs > 0) return 'late';
  if (usableBufferMs < frameMs) return 'tight';
  return 'ready';
}

export function normalizeInputBufferWindowConfig(input: Partial<InputBufferWindowConfig> = {}): InputBufferWindowConfig {
  const start = clamp(positiveIntOr(input.activeStartFrame, DEFAULT_INPUT_BUFFER_WINDOW_CONFIG.activeStartFrame), 1, 240);
  const end = clamp(positiveIntOr(input.activeEndFrame, DEFAULT_INPUT_BUFFER_WINDOW_CONFIG.activeEndFrame), start, 240);
  return {
    fps: clamp(finiteOr(input.fps, DEFAULT_INPUT_BUFFER_WINDOW_CONFIG.fps), 1, 240),
    activeStartFrame: start,
    activeEndFrame: end,
    bufferMs: clamp(finiteOr(input.bufferMs, DEFAULT_INPUT_BUFFER_WINDOW_CONFIG.bufferMs), 0, 1000),
    latencyMs: clamp(finiteOr(input.latencyMs, DEFAULT_INPUT_BUFFER_WINDOW_CONFIG.latencyMs), 0, 1000),
  };
}

export function validateInputBufferWindowConfig(input: Partial<InputBufferWindowConfig>): string[] {
  const errors = [
    validateFiniteRange(input.fps, 'fps-number', 'fps-range', [1, 240]),
    validateFiniteRange(input.activeStartFrame, 'start-number', 'start-range', [1, 240]),
    validateFiniteRange(input.activeEndFrame, 'end-number', 'end-range', [1, 240]),
    validateFiniteRange(input.bufferMs, 'buffer-number', 'buffer-range', [0, 1000]),
    validateFiniteRange(input.latencyMs, 'latency-number', 'latency-range', [0, 1000]),
  ].filter((error): error is string => Boolean(error));
  if (Number.isFinite(input.activeStartFrame) && Number.isFinite(input.activeEndFrame) && input.activeEndFrame! < input.activeStartFrame!) errors.push('frame-order');
  return errors;
}

export function calculateInputBufferWindow(input: Partial<InputBufferWindowConfig> = {}): InputBufferWindowResult {
  const config = normalizeInputBufferWindowConfig(input);
  const frameMs = 1000 / config.fps;
  const activeFrameCount = config.activeEndFrame - config.activeStartFrame + 1;
  const activeWindowMs = activeFrameCount * frameMs;
  const usableBufferMs = Math.max(0, config.bufferMs - config.latencyMs);
  const effectiveWindowMs = usableBufferMs + activeWindowMs;
  const lateByMs = Math.max(0, config.latencyMs - config.bufferMs);
  const activeStartMs = (config.activeStartFrame - 1) * frameMs;
  const activeEndMs = config.activeEndFrame * frameMs;
  const bufferStartMs = activeStartMs - config.bufferMs;
  return {
    config,
    frameMs,
    activeFrameCount,
    activeWindowMs,
    usableBufferMs,
    effectiveWindowMs,
    framesAvailable: Math.max(0, Math.floor((effectiveWindowMs + Number.EPSILON) / frameMs)),
    lateByMs,
    activeStartMs,
    activeEndMs,
    bufferStartMs,
    status: getStatus(lateByMs, usableBufferMs, frameMs),
  };
}
