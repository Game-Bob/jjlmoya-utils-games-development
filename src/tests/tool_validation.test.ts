import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';
import { sportsCategory } from '../data';

describe('Tool Validation Suite', () => {
  describe('Library Registration', () => {
    it('should have tools registered in ALL_TOOLS', () => {
      expect(ALL_TOOLS.length).toBeGreaterThan(0);
    });

    it('sportsCategory should be defined', () => {
      expect(sportsCategory).toBeDefined();
      expect(sportsCategory.i18n).toBeDefined();
    });
  });
});

