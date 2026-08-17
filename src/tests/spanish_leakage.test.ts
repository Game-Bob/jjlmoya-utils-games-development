import { describe, expect, it } from 'vitest';
import { ALL_ENTRIES } from '../entries';

const STRUCTURAL_KEYS = new Set([
  'id',
  'slug',
  'url',
  'icon',
  'image',
  'imageUrl',
  'keywords',
  'category',
  'tags',
  'toolId',
  'type',
  'locale',
  'language',
  'direction',
]);

const TRANSLATABLE_KEYS = [
  'title',
  'description',
  'faqTitle',
  'faq',
  'howTo',
  'seo',
  'schemas',
] as const;

const SPANISH_MARKERS = [
  ['sangre', /\bsangre\b/gi],
  ['molino', /\bmolino\b/gi],
  ['grano', /\bgrano\b/gi],
  ['paladar', /\bpaladar\b/gi],
  ['cuchillas', /\bcuchillas\b/gi],
  ['trozos', /\btrozos\b/gi],
  ['frescura', /\bfrescura\b/gi],
  ['ingresa', /\bingresa\b/gi],
  ['selecciona', /\bselecciona\b/gi],
  ['herramienta', /\bherramienta\b/gi],
  ['según', /\bsegún\b/gi],
  ['después', /\bdespués\b/gi],
  ['puedes', /\bpuedes\b/gi],
  ['debes', /\bdebes\b/gi],
  ['tus', /\btus\b/gi],
  ['a la vez', /\ba la vez\b/gi],
  ['los datos', /\blos datos\b/gi],
  ['las opciones', /\blas opciones\b/gi],
  ['el resultado', /\bel resultado\b/gi],
  ['método de extracción', /\bmétodo de extracción\b/gi],
  ['uniformidad del molino', /\buniformidad del molino\b/gi],
  ['café recién tostado', /\bcafé recién tostado\b/gi],
] as const;

type UnknownRecord = Record<string, unknown>;

function normalize(value: string): string {
  return value
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLocaleLowerCase('es');
}

function isTechnicalInvariant(text: string): boolean {
  return [
    'data:image/svg+xml;base64',
    'background-image: url',
    '.layout-playground {',
    'const samplerate =',
  ].some((pattern) => text.includes(pattern)) || (text.includes('presets') && text.includes('hz'));
}

function collectString(value: string, output: string[]): void {
  const text = normalize(value);
  if (!isTechnicalInvariant(text) && text.length >= 20) output.push(text);
}

function collectObject(value: UnknownRecord, output: string[]): void {
  Object.entries(value).forEach(([childKey, childValue]) => {
    collectText(childValue, output, childKey);
  });
}

function collectText(value: unknown, output: string[], key?: string): void {
  if (key && STRUCTURAL_KEYS.has(key)) return;
  if (typeof value === 'string') return collectString(value, output);
  if (Array.isArray(value)) return value.forEach((item) => collectText(item, output));
  if (value && typeof value === 'object') collectObject(value as UnknownRecord, output);
}

async function loadText(loader: unknown): Promise<string[]> {
  if (typeof loader !== 'function') return [];
  const module = await (loader as () => Promise<unknown>)();
  const output: string[] = [];
  if (module && typeof module === 'object') {
    const record = module as UnknownRecord;
    for (const key of TRANSLATABLE_KEYS) {
      collectText(record[key], output, key);
    }
  }
  return output;
}

function findSpanishMarkers(text: string[]): string[] {
  const corpus = text.join(' ');
  return SPANISH_MARKERS.flatMap(([label, pattern]) =>
    pattern.test(corpus) ? [label] : [],
  );
}

function findCopiedFragments(spanish: string[], translated: string[]): string[] {
  const corpus = translated.join(' ');
  return spanish
    .filter((fragment) => fragment.length >= 80 && corpus.includes(fragment))
    .sort((a, b) => b.length - a.length)
    .slice(0, 3);
}

describe('Locales must not contain copied Spanish content', () => {
  for (const entry of ALL_ENTRIES) {
    it(`${entry.id} has no untranslated Spanish blocks`, async () => {
      const spanish = await loadText(entry.i18n.es);
      const failures: string[] = [];

      for (const [locale, loader] of Object.entries(entry.i18n)) {
        if (locale === 'es') continue;

        const translated = await loadText(loader);
        const copiedFragments = findCopiedFragments(spanish, translated);
        const markerHits = findSpanishMarkers(translated);

        if (copiedFragments.length > 0 || markerHits.length >= 2) {
          const details = [
            copiedFragments.length > 0
              ? `copied fragments: ${copiedFragments
                  .map((fragment) => JSON.stringify(fragment.slice(0, 120)))
                  .join(', ')}`
              : '',
            markerHits.length >= 2 ? `Spanish markers: ${markerHits.join(', ')}` : '',
          ]
            .filter(Boolean)
            .join('; ');
          failures.push(`${locale}: ${details}`);
        }
      }

      expect(failures, failures.join('\n')).toEqual([]);
    });
  }
});
