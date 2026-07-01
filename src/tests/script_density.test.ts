import { describe, expect, it } from 'vitest';
import { ALL_TOOLS } from '../tools';

type ScriptLocale = keyof typeof SCRIPT_RULES;

const SCRIPT_RULES = {
  ja: {
    language: 'Japanese',
    scriptName: 'kana/kanji',
    scriptCharacters: /[\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Han}]/gu,
    minScriptRatio: 0.45,
  },
  ko: {
    language: 'Korean',
    scriptName: 'hangul',
    scriptCharacters: /\p{Script=Hangul}/gu,
    minScriptRatio: 0.55,
  },
  ru: {
    language: 'Russian',
    scriptName: 'cyrillic',
    scriptCharacters: /\p{Script=Cyrillic}/gu,
    minScriptRatio: 0.65,
  },
  zh: {
    language: 'Chinese',
    scriptName: 'han',
    scriptCharacters: /\p{Script=Han}/gu,
    minScriptRatio: 0.45,
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

function scriptCount(text: string, locale: ScriptLocale): number {
  return text.match(SCRIPT_RULES[locale].scriptCharacters)?.length ?? 0;
}

function scriptRatio(text: string, locale: ScriptLocale): number {
  const letters = letterCount(text);
  if (letters === 0) return 0;
  return scriptCount(text, locale) / letters;
}

describe('Native script density validation', () => {
  ALL_TOOLS.forEach((tool) => {
    describe(`Tool: ${tool.entry.id}`, () => {
      Object.keys(SCRIPT_RULES).forEach((locale) => {
        it(`${locale} keeps most translated text in its native script`, async () => {
          const typedLocale = locale as ScriptLocale;
          const loader = tool.entry.i18n[typedLocale];
          if (!loader) return;

          const content = await loader();
          const rule = SCRIPT_RULES[typedLocale];
          const text = normalizeText(translatableContent(content as Record<string, unknown>));
          const letters = letterCount(text);
          const matches = scriptCount(text, typedLocale);
          const ratio = scriptRatio(text, typedLocale);

          expect(
            ratio,
            [
              `Possible broken translation detected in ${tool.entry.id}/${typedLocale} (${rule.language}).`,
              `The text has ${matches} ${rule.scriptName} characters out of ${letters} analyzed letters (${(ratio * 100).toFixed(1)}%).`,
              `Most translatable content should be written in ${rule.scriptName} script.`,
              'Non-translatable fields such as slug, bibliography, and schemas are ignored to avoid false positives.',
            ].join(' '),
          ).toBeGreaterThanOrEqual(rule.minScriptRatio);
        });
      });
    });
  });
});
