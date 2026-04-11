import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';
import type { ToolLocaleContent } from '../types';

describe('Schemas Fulfillment Validation', () => {
  ALL_TOOLS.forEach((tool) => {
    describe(`Tool: ${tool.entry.id}`, () => {
      Object.keys(tool.entry.i18n).forEach((locale) => {
        it(`Locale: ${locale} should have faqSchema, appSchema and howToSchema`, async () => {
          const loader = tool.entry.i18n[locale as keyof typeof tool.entry.i18n];
          if (!loader) return;
          const content = (await loader()) as ToolLocaleContent;

          const schemaTypes = content.schemas.map((s: any) => s['@type']);

          expect(schemaTypes, `Tool "${tool.entry.id}" locale "${locale}" is missing FAQPage schema`).toContain('FAQPage');
          expect(schemaTypes, `Tool "${tool.entry.id}" locale "${locale}" is missing SoftwareApplication schema`).toContain('SoftwareApplication');
          expect(schemaTypes, `Tool "${tool.entry.id}" locale "${locale}" is missing HowTo schema`).toContain('HowTo');
        });
      });
    });
  });
});
