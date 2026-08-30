import { describe, expect, it } from 'vitest';
import type { CategoryLocaleContent } from '../types';

const EXPECTED_LOCALES = [
  'de', 'en', 'es', 'fr', 'id', 'it', 'ja', 'ko', 'nl', 'pl', 'pt', 'ru', 'sv', 'tr', 'zh',
] as const;
const COMPACT_LOCALES = new Set(['ja', 'ko', 'zh']);

const localeModules = import.meta.glob('../category/i18n/*.ts', { eager: true }) as Record<
  string,
  { content: CategoryLocaleContent }
>;

function textFrom(value: unknown): string {
  if (typeof value === 'string') return value.replace(/<[^>]*>/g, ' ');
  if (Array.isArray(value)) return value.map(textFrom).join(' ');
  if (value && typeof value === 'object') return Object.values(value).map(textFrom).join(' ');
  return '';
}

const STRONG_CLAIM = /\b(?:garantiz\w*|guarante\w*|validat(?:ed)|valid(?:ated|ado|ada|ados|adas|ée|ées)|actualizad\w*)\b/iu;

function getContents(): Map<string, CategoryLocaleContent> {
  return new Map(
    Object.entries(localeModules).map(([file, module]) => [file.match(/\/([a-z]{2})\.ts$/u)?.[1] ?? file, module.content]),
  );
}

function validateContent(locale: string, content: CategoryLocaleContent): string[] {
  const failures: string[] = [];
  const check = (condition: boolean, message: string) => { if (!condition) failures.push(`${locale}: ${message}`); };
  const minimumTitleLength = COMPACT_LOCALES.has(locale) ? 4 : 12;
  const minimumDescriptionLength = COMPACT_LOCALES.has(locale) ? 20 : 60;
  check(content.title.trim().length >= minimumTitleLength && content.title.trim().length <= 70, 'title must use a useful 4/12–70 character length');
  check(content.description.trim().length >= minimumDescriptionLength && content.description.trim().length <= 180, 'description must use a useful 20/60–180 character length');
  check(content.seo.length >= 2, 'SEO needs at least two sections');
  check(content.seo.some((section) => section.type === 'paragraph'), 'SEO needs visible explanatory copy');

  const seoText = textFrom(content.seo).replace(/\s+/g, ' ').trim();
  const minimumSeoLength = COMPACT_LOCALES.has(locale) ? 120 : 240;
  check(seoText.length >= minimumSeoLength, 'SEO copy must contain the minimum visible copy for its script');
  check(content.seo.filter((section) => section.type === 'title').length >= 1, 'SEO needs a section heading');
  check(!/[�]/u.test(seoText), 'SEO contains replacement characters');
  check(!/ {2,}/u.test(seoText), 'SEO contains duplicated whitespace');
  check(!STRONG_CLAIM.test(seoText), 'SEO contains an unsupported strong claim');

  check(content.slug.trim().length > 0 && /^[a-z0-9-]+$/u.test(content.slug), 'slug must be a non-empty URL-safe value');
  return failures;
}

describe('Category SEO quality contract', () => {
  it('has one content file for every configured locale', () => {
    const contents = getContents();
    expect([...contents.keys()].sort()).toEqual([...EXPECTED_LOCALES].sort());
  });

  it('keeps metadata, SEO structure and copy quality above the minimum in every locale', () => {
    const contents = getContents();
    const english = contents.get('en');
    expect(english, 'English category content is required as the structural reference').toBeDefined();

    const failures = EXPECTED_LOCALES.flatMap((locale) => {
      const content = contents.get(locale);
      return content ? validateContent(locale, content) : [];
    });

    for (const locale of EXPECTED_LOCALES) {
      const content = contents.get(locale);
      if (!content) failures.push(`${locale}: category content is missing`);
    }

    expect(failures, 'category SEO quality failures').toEqual([]);
  }, 30000);
});
