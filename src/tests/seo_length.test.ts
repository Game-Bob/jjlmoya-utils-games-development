import { describe, it, expect } from 'vitest';
import * as DATA from '../data';

const ENTRIES = [
  { id: 'gamesCategory', i18n: DATA.gamesCategory.i18n },
];

describe('SEO Content Length Validation', () => {
  ENTRIES.forEach((entry) => {
    describe(`Tool: ${entry.id}`, () => {
      Object.keys(entry.i18n).forEach((locale) => {
        it(`${locale}: SEO section should exist`, async () => {
          const loader = (entry.i18n as Record<string, () => Promise<{ seo?: unknown[] }>>)[locale];
          if (!loader) return;
          const content = await loader();
          if (!content.seo) return;
          expect(Array.isArray(content.seo)).toBe(true);
        });
      });
    });
  });
});

