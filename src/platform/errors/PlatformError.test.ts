import { describe, expect, it } from 'vitest';
import { PlatformError } from './PlatformError';

describe('PlatformError', () => {
  it('preserves structured native error codes', () => {
    const error = PlatformError.fromUnknown({
      code: 'PERMISSION_DENIED',
      message: 'Path is outside the project',
    });
    expect(error).toBeInstanceOf(PlatformError);
    expect(error.code).toBe('PERMISSION_DENIED');
    expect(error.message).toBe('Path is outside the project');
  });

  it('maps missing IPC commands to a stable code', () => {
    const error = PlatformError.fromUnknown(new Error('unknown command read_everything'));
    expect(error.code).toBe('COMMAND_UNAVAILABLE');
  });

  it('maps opaque failures without discarding their detail', () => {
    const error = PlatformError.fromUnknown('native bridge failed');
    expect(error.code).toBe('INTERNAL_ERROR');
    expect(error.message).toBe('native bridge failed');
  });
});
