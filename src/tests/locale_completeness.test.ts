import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';
import type { ToolLocaleContent } from '../types';

describe('Locale Completeness Validation', () => {
  ALL_TOOLS.forEach((tool) => {
    describe(`Tool: ${tool.entry.id}`, () => {
      Object.keys(tool.entry.i18n).forEach((locale) => {
        describe(`Locale: ${locale}`, () => {
          it('faqTitle should be defined when faq items exist', async () => {
            const loader = tool.entry.i18n[locale as keyof typeof tool.entry.i18n];
            const content = (await loader?.()) as ToolLocaleContent;

            if (content.faq.length > 0) {
              expect(
                content.faqTitle,
                `Tool "${tool.entry.id}" locale "${locale}" has ${content.faq.length} FAQ items but is missing faqTitle`,
              ).toBeTruthy();
            }
          });

          it('bibliographyTitle should be defined when bibliography items exist', async () => {
            const loader = tool.entry.i18n[locale as keyof typeof tool.entry.i18n];
            const content = (await loader?.()) as ToolLocaleContent;

            if (content.bibliography.length > 0) {
              expect(
                content.bibliographyTitle,
                `Tool "${tool.entry.id}" locale "${locale}" has ${content.bibliography.length} bibliography items but is missing bibliographyTitle`,
              ).toBeTruthy();
            }
          });
        });
      });
    });
  });

  it('no tools registered yet', () => {
    expect(ALL_TOOLS.length).toBe(0);
  });
});

