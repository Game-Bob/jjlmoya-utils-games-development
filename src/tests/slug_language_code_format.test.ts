import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';
import type { ToolLocaleContent } from '../types';

describe('Slug Language Code Format Validation', () => {
  ALL_TOOLS.forEach((tool) => {
    describe(`Tool: ${tool.entry.id}`, () => {
      it('slug should not end with 2-letter language codes like -ja, -ru, -ko', async () => {
        const locales = Object.keys(tool.entry.i18n);

        for (const locale of locales) {
          const loader = tool.entry.i18n[locale as keyof typeof tool.entry.i18n];
          const content = (await loader?.()) as ToolLocaleContent;

          expect(
            content.slug,
            `Tool "${tool.entry.id}" locale "${locale}" slug ("${content.slug}") cannot end with a 2-letter language code (e.g., -ja, -ru, -ko).`,
          ).not.toMatch(/-[a-z]{2}$/);
        }
      });
    });
  });
});
