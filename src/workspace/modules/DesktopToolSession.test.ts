import { describe, expect, it } from 'vitest';
import {
  assertSerializableSession,
  DesktopToolSessionError,
} from './DesktopToolSession';

describe('DesktopToolSession', () => {
  it('accepts nested JSON state', () => {
    const state = {
      selection: 'hero-idle',
      zoom: 1.5,
      flags: [true, false],
      viewport: { x: 12, y: 8 },
      optional: null,
    };

    expect(() => assertSerializableSession(state)).not.toThrow();
  });

  it('rejects undefined values with their exact path', () => {
    expect(() => assertSerializableSession({ selection: undefined })).toThrow(
      new DesktopToolSessionError('$.selection', 'unsupported value of type undefined'),
    );
  });

  it('rejects cyclic state', () => {
    const state: Record<string, unknown> = {};
    state.self = state;

    expect(() => assertSerializableSession(state)).toThrow('cyclic references are not allowed');
  });

  it('rejects class instances and native-style handles', () => {
    class NativeHandle {
      public readonly id = 4;
    }

    expect(() => assertSerializableSession({ handle: new NativeHandle() })).toThrow(
      'unsupported value of type object',
    );
  });

  it('rejects non-finite numbers', () => {
    expect(() => assertSerializableSession({ zoom: Number.NaN })).toThrow(
      'numbers must be finite',
    );
  });

  it('requires a plain object at the root', () => {
    expect(() => assertSerializableSession(['invalid'])).toThrow(
      'the root must be a plain object',
    );
  });
});
