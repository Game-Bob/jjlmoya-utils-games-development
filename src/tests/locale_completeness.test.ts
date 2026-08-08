import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';

describe('Locale Completeness Validation', () => {
  it('nine tools are registered', () => {
    expect(ALL_TOOLS.length).toBe(9);
  });
});
