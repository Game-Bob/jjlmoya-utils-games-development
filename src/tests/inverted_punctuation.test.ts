import { describe, expect, it } from 'vitest';
import { ALL_TOOLS } from '../tools';

const INVERTED_PUNCTUATION_LOCALES = {
  es: {
    language: 'Spanish',
    questionStart: '¿',
    questionEnd: '?',
    exclamationStart: '¡',
    exclamationEnd: '!',
  },
} as const;

type InvertedPunctuationLocale = keyof typeof INVERTED_PUNCTUATION_LOCALES;

const TRANSLATABLE_KEYS = ['title', 'description', 'ui', 'seo', 'faq', 'howTo'] as const;

function collectStrings(value: unknown): string[] {
  if (typeof value === 'string') return [value];
  if (!value || typeof value !== 'object') return [];
  if (Array.isArray(value)) return value.flatMap(collectStrings);
  return Object.values(value).flatMap(collectStrings);
}

function translatableStrings(content: Record<string, unknown>): string[] {
  return TRANSLATABLE_KEYS.flatMap((key) => collectStrings(content[key]));
}

function sentenceStart(text: string, endIndex: number): string {
  const beforeMark = text.slice(0, endIndex).trimEnd();
  const boundary = Math.max(
    beforeMark.lastIndexOf('.'),
    beforeMark.lastIndexOf(':'),
    beforeMark.lastIndexOf(';'),
    beforeMark.lastIndexOf('\n'),
  );

  return beforeMark.slice(boundary + 1).trimStart();
}

function findMissingInvertedMarks(
  text: string,
  startMark: string,
  endMark: string,
): string[] {
  return [...text.matchAll(new RegExp(`\\${endMark}`, 'g'))]
    .map((match) => sentenceStart(text, match.index ?? 0))
    .filter((segment) => segment.length > 0 && !segment.includes(startMark))
    .map((segment) => `${segment}${endMark}`);
}

describe('Inverted punctuation validation', () => {
  ALL_TOOLS.forEach((tool) => {
    describe(`Tool: ${tool.entry.id}`, () => {
      Object.keys(INVERTED_PUNCTUATION_LOCALES).forEach((locale) => {
        it(`${locale} uses opening punctuation marks for questions and exclamations`, async () => {
          const typedLocale = locale as InvertedPunctuationLocale;
          const loader = tool.entry.i18n[typedLocale];
          if (!loader) return;

          const rule = INVERTED_PUNCTUATION_LOCALES[typedLocale];
          const content = await loader();
          const strings = translatableStrings(content as Record<string, unknown>);
          const missingQuestions = strings.flatMap((text) =>
            findMissingInvertedMarks(text, rule.questionStart, rule.questionEnd)
          );
          const missingExclamations = strings.flatMap((text) =>
            findMissingInvertedMarks(text, rule.exclamationStart, rule.exclamationEnd)
          );
          const failures = [...missingQuestions, ...missingExclamations];

          expect(
            failures,
            [
              `Missing opening punctuation marks in ${tool.entry.id}/${typedLocale} (${rule.language}).`,
              `Questions must use ${rule.questionStart}...${rule.questionEnd} and exclamations must use ${rule.exclamationStart}...${rule.exclamationEnd}.`,
              `Examples: ${failures.slice(0, 5).join(' | ')}`,
            ].join(' '),
          ).toHaveLength(0);
        });
      });
    });
  });
});
