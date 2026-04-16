import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';
import type { ToolLocaleContent } from '../types';

const sharingLocales = ['ja', 'ko', 'zh'];

interface ValidateParams {
  toolId: string;
  locale: string;
  content: ToolLocaleContent;
  enSlug: string;
  slugs: Map<string, string>;
}

const validateLocaleSlug = ({
  toolId,
  locale,
  content,
  enSlug,
  slugs,
}: ValidateParams) => {
  expect(
    content.slug,
    `Tool "${toolId}" locale "${locale}" has an invalid slug ("${content.slug}"). Slugs must be transliterated (only a-z, 0-9, and -).`,
  ).toMatch(/^[a-z0-9-]+$/);

  if (locale === 'en') {
    return;
  }

  if (sharingLocales.includes(locale)) {
    expect(
      content.slug,
      `Tool "${toolId}" locale "${locale}" must use the same slug as "en" ("${enSlug}").`,
    ).toBe(enSlug);
  } else {
    expect(
      content.slug,
      `Tool "${toolId}" locale "${locale}" has the same slug as "en" ("${enSlug}"). Cada slug tiene que estar en su propia idioma`,
    ).not.toBe(enSlug);

    if (slugs.has(content.slug)) {
      const previousLocale = slugs.get(content.slug);
      expect(
        false,
        `Tool "${toolId}" locales "${locale}" and "${previousLocale}" share the same slug ("${content.slug}"). Cada slug tiene que estar en su propia idioma`,
      ).toBe(true);
    }
    slugs.set(content.slug, locale);
  }
};

describe('Slug Localization and Uniqueness Validation', () => {
  ALL_TOOLS.forEach((tool) => {
    describe(`Tool: ${tool.entry.id}`, () => {
      it('every locale should have a unique, translated slug', async () => {
        const slugs = new Map<string, string>();
        const locales = Object.keys(tool.entry.i18n);

        let enSlug = '';
        if (locales.includes('en')) {
          const enLoader = tool.entry.i18n['en' as keyof typeof tool.entry.i18n];
          const enContent = (await enLoader?.()) as ToolLocaleContent;
          enSlug = enContent.slug;
        }

        for (const locale of locales) {
          const loader = tool.entry.i18n[locale as keyof typeof tool.entry.i18n];
          const content = (await loader?.()) as ToolLocaleContent;
          validateLocaleSlug({
            toolId: tool.entry.id,
            locale,
            content,
            enSlug,
            slugs,
          });
        }
      });
    });
  });
});