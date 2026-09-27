import { describe, expect, it } from 'vitest';
import { displayProjectPath } from './displayProjectPath';

describe('displayProjectPath', () => {
  it('hides the Windows verbatim prefix without changing the native path', () => {
    expect(displayProjectPath('\\\\?\\D:\\code\\Lexi-Crash')).toBe('D:\\code\\Lexi-Crash');
    expect(displayProjectPath('\\\\?\\UNC\\server\\share')).toBe('\\\\server\\share');
    expect(displayProjectPath('/games/quest')).toBe('/games/quest');
  });
});
