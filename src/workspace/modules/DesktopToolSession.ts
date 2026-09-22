import type { JsonObject } from './DesktopToolModule';

export class DesktopToolSessionError extends Error {
  constructor(path: string, reason: string) {
    super(`Session state is not serializable at ${path}: ${reason}`);
    this.name = 'DesktopToolSessionError';
  }
}

export function assertSerializableSession(value: unknown): asserts value is JsonObject {
  if (!isPlainObject(value)) {
    throw new DesktopToolSessionError('$', 'the root must be a plain object');
  }
  validateJsonObject(value, '$', new Set<object>());
}

function validateJsonObject(
  value: Record<string, unknown>,
  path: string,
  ancestors: Set<object>,
): void {
  enter(value, path, ancestors);
  for (const [key, child] of Object.entries(value)) {
    validateJsonValue(child, `${path}.${key}`, ancestors);
  }
  ancestors.delete(value);
}

function validateJsonArray(value: unknown[], path: string, ancestors: Set<object>): void {
  enter(value, path, ancestors);
  value.forEach((child, index) => validateJsonValue(child, `${path}[${index}]`, ancestors));
  ancestors.delete(value);
}

function validateJsonValue(value: unknown, path: string, ancestors: Set<object>): void {
  if (value === null || typeof value === 'string' || typeof value === 'boolean') return;
  if (typeof value === 'number') {
    if (!Number.isFinite(value)) throw new DesktopToolSessionError(path, 'numbers must be finite');
    return;
  }
  if (Array.isArray(value)) {
    validateJsonArray(value, path, ancestors);
    return;
  }
  if (isPlainObject(value)) {
    validateJsonObject(value, path, ancestors);
    return;
  }
  throw new DesktopToolSessionError(path, `unsupported value of type ${typeof value}`);
}

function enter(value: object, path: string, ancestors: Set<object>): void {
  if (ancestors.has(value)) throw new DesktopToolSessionError(path, 'cyclic references are not allowed');
  ancestors.add(value);
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  if (!value || typeof value !== 'object') return false;
  const prototype = Object.getPrototypeOf(value);
  return prototype === Object.prototype || prototype === null;
}
