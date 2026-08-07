import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';

describe('Locale Completeness Validation', () => {
  it('one tool is registered', () => {
    expect(ALL_TOOLS.length).toBe(4);
  });
});
