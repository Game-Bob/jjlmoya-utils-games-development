import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';
import type { ToolLocaleContent } from '../types';

describe('Locale Completeness and Slug Validation', () => {
  it('all tools registered in ALL_TOOLS', () => {
    expect(ALL_TOOLS.length).toBeGreaterThan(0);
  });

  ALL_TOOLS.forEach((tool) => {
    describe(`Tool entry: ${tool.entry.id}`, () => {
      it('every registered locale content must have a valid non-empty slug', async () => {
        const locales = Object.keys(tool.entry.i18n);
        expect(locales.length).toBeGreaterThan(0);

        for (const locale of locales) {
          const loader = tool.entry.i18n[locale as keyof typeof tool.entry.i18n];
          expect(loader).toBeDefined();
          const content = (await loader?.()) as ToolLocaleContent;
          expect(content, `Locale "${locale}" for tool "${tool.entry.id}" failed to load content object`).toBeDefined();
          expect(content.slug, `Locale "${locale}" for tool "${tool.entry.id}" has undefined or empty slug`).toBeDefined();
          expect(typeof content.slug).toBe('string');
          expect(content.slug.length).toBeGreaterThan(0);
          expect(content.title, `Locale "${locale}" for tool "${tool.entry.id}" has undefined title`).toBeDefined();
        }
      });
    });
  });
});
