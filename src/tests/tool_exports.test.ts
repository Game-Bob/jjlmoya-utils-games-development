import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';
import { validateToolExports } from './shared-test-helpers';

describe('Tool Exports Pattern Validation', () => {
  describe('Component Exports Format', () => {
    ALL_TOOLS.forEach((tool) => {
      it(`${tool.entry.id}: Component should be a lazy-loaded function`, () => {
        expect(typeof tool.Component).toBe('function');
        expect(tool.Component).toBeInstanceOf(Function);
      });

      it(`${tool.entry.id}: SEOComponent should be a lazy-loaded function`, () => {
        expect(typeof tool.SEOComponent).toBe('function');
        expect(tool.SEOComponent).toBeInstanceOf(Function);
      });

      it(`${tool.entry.id}: BibliographyComponent should be a lazy-loaded function`, () => {
        expect(typeof tool.BibliographyComponent).toBe('function');
        expect(tool.BibliographyComponent).toBeInstanceOf(Function);
      });
    });
  });

  describe('Dynamic Import Validation', () => {
    it('all tools must have functional dynamic imports', async () => {
      const result = await validateToolExports(ALL_TOOLS);
      if (!result.passed) {
        throw new Error(`Tool export validation failed:\n${result.failures.join('\n')}`);
      }
      expect(result.passed).toBe(true);
    });
  });
});
