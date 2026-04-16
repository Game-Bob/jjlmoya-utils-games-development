import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';

const EXPECTED_LOCALES = [
  'de', 'en', 'es', 'fr', 'id', 'it', 'ja', 'ko', 'nl', 'pl', 'pt', 'ru', 'sv', 'tr', 'zh'
];

describe('I18n Coverage Validation', () => {
  it('all tools should be registered', () => {
    expect(ALL_TOOLS.length).toBeGreaterThan(0);
  });

  ALL_TOOLS.forEach(({ entry }: { entry: any }) => {
    describe(`Tool: ${entry.id}`, () => {
      it('should have all 15 required locales', () => {
        const registeredLocales = Object.keys(entry.i18n);
        EXPECTED_LOCALES.forEach((locale) => {
          expect(
            registeredLocales,
            `Tool "${entry.id}" is missing locale "${locale}"`,
          ).toContain(locale);
        });
      });

      it('all locale loaders should be functions', () => {
        EXPECTED_LOCALES.forEach((locale) => {
          const loader = entry.i18n[locale as keyof typeof entry.i18n];
          expect(
            typeof loader,
            `Tool "${entry.id}" locale "${locale}" loader is not a function`,
          ).toBe('function');
        });
      });
    });
  });
});
