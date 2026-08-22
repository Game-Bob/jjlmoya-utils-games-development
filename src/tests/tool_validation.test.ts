import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';
import { gamesCategory } from '../data';

describe('Tool Validation Suite', () => {
  describe('Library Registration', () => {
    it('should have 12 tools in ALL_TOOLS', () => {
      expect(ALL_TOOLS.length).toBe(12);
    });

    it('gamesCategory should be defined', () => {
      expect(gamesCategory).toBeDefined();
      expect(gamesCategory.i18n).toBeDefined();
    });
  });
});
