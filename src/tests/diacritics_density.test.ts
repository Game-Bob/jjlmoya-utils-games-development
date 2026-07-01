import { describe, expect, it } from 'vitest';
import { ALL_TOOLS } from '../tools';

type LocaleWithDiacritics = keyof typeof DIACRITIC_RULES;

const DIACRITIC_RULES = {
  de: {
    language: 'German',
    expectedCharacters: 'ä ö ü ß',
    characters: /[äöüÄÖÜß]/g,
    minPerThousandLetters: 0.1,
  },
  es: {
    language: 'Spanish',
    expectedCharacters: 'á é í ó ú ü ñ',
    characters: /[áéíóúüñÁÉÍÓÚÜÑ]/g,
    minPerThousandLetters: 0.1,
  },
  fr: {
    language: 'French',
    expectedCharacters: 'à â æ ç é è ê ë î ï ô œ ù û ü ÿ',
    characters: /[àâæçéèêëîïôœùûüÿÀÂÆÇÉÈÊËÎÏÔŒÙÛÜŸ]/g,
    minPerThousandLetters: 0.1,
  },
  it: {
    language: 'Italian',
    expectedCharacters: 'à è é ì í î ò ó ù ú',
    characters: /[àèéìíîòóùúÀÈÉÌÍÎÒÓÙÚ]/g,
    minPerThousandLetters: 0.1,
  },
  pl: {
    language: 'Polish',
    expectedCharacters: 'ą ć ę ł ń ó ś ź ż',
    characters: /[ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]/g,
    minPerThousandLetters: 0.1,
  },
  pt: {
    language: 'Portuguese',
    expectedCharacters: 'á â ã à ç é ê í ó ô õ ú ü',
    characters: /[áâãàçéêíóôõúüÁÂÃÀÇÉÊÍÓÔÕÚÜ]/g,
    minPerThousandLetters: 0.1,
  },
  sv: {
    language: 'Swedish',
    expectedCharacters: 'å ä ö',
    characters: /[åäöÅÄÖ]/g,
    minPerThousandLetters: 0.1,
  },
  tr: {
    language: 'Turkish',
    expectedCharacters: 'ç ğ ı İ ö ş ü',
    characters: /[çğıöşüÇĞİÖŞÜ]/g,
    minPerThousandLetters: 0.1,
  },
} as const;

const LETTERS = /\p{L}/gu;
const TRANSLATABLE_KEYS = ['title', 'description', 'ui', 'seo', 'faq', 'howTo'] as const;

function collectStrings(value: unknown): string[] {
  if (typeof value === 'string') return [value];
  if (!value || typeof value !== 'object') return [];
  if (Array.isArray(value)) return value.flatMap(collectStrings);
  return Object.values(value).flatMap(collectStrings);
}

function normalizeText(value: unknown): string {
  return collectStrings(value).join(' ').normalize('NFC');
}

function translatableContent(content: Record<string, unknown>) {
  return TRANSLATABLE_KEYS.map((key) => content[key]);
}

function letterCount(text: string): number {
  return text.match(LETTERS)?.length ?? 0;
}

function diacriticCount(text: string, locale: LocaleWithDiacritics): number {
  return text.match(DIACRITIC_RULES[locale].characters)?.length ?? 0;
}

function diacriticsPerThousandLetters(text: string, locale: LocaleWithDiacritics): number {
  const letters = letterCount(text);
  if (letters === 0) return 0;
  return diacriticCount(text, locale) / letters * 1000;
}

describe('Diacritics density validation', () => {
  ALL_TOOLS.forEach((tool) => {
    describe(`Tool: ${tool.entry.id}`, () => {
      Object.keys(DIACRITIC_RULES).forEach((locale) => {
        it(`${locale} keeps the expected accent and special-letter set`, async () => {
          const typedLocale = locale as LocaleWithDiacritics;
          const loader = tool.entry.i18n[typedLocale];
          if (!loader) return;

          const content = await loader();
          const text = normalizeText(translatableContent(content as Record<string, unknown>));
          const rule = DIACRITIC_RULES[typedLocale];
          const letters = letterCount(text);
          const matches = diacriticCount(text, typedLocale);
          const density = diacriticsPerThousandLetters(text, typedLocale);

          expect(
            density,
            [
              `Possible spelling or encoding issue detected in ${tool.entry.id}/${typedLocale} (${rule.language}).`,
              `The text has ${matches} special characters (${density.toFixed(2)} per 1000 letters, ${letters} letters analyzed).`,
              `This locale should include some of these characters: ${rule.expectedCharacters}.`,
              'If the count is 0 or near 0, accents, tildes, or special letters were probably stripped by encoding or normalization.',
            ].join(' '),
          ).toBeGreaterThanOrEqual(rule.minPerThousandLetters);
        });
      });
    });
  });
});
