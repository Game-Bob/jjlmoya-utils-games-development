import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { gameDeltaTimeFixedTimestepLab } from './entry';

describe('Game delta time SEO loader contract', () => {
  it('provides translated SEO sections for every registered locale', async () => {
    const locales = Object.keys(gameDeltaTimeFixedTimestepLab.i18n);
    const contents = await Promise.all(locales.map(async (locale) => gameDeltaTimeFixedTimestepLab.i18n[locale as keyof typeof gameDeltaTimeFixedTimestepLab.i18n]!()));

    expect(locales).toHaveLength(15);
    contents.forEach((content) => {
      expect(content.seo.length).toBeGreaterThan(0);
      expect(content.faq.length).toBe(5);
      expect(content.howTo.length).toBe(5);
      expect(content.schemas).toHaveLength(3);
    });
  });

  it('loads the requested locale before passing its SEO sections to the renderer', () => {
    const source = readFileSync(new URL('./seo.astro', import.meta.url), 'utf8');

    expect(source).toContain('gameDeltaTimeFixedTimestepLab.i18n[locale]');
    expect(source).toContain('sections: content.seo');
  });
});
