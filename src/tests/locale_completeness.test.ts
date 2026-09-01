import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';
import { fixerEditor } from '../tool/fixerEditor/entry';

describe('Locale Completeness Validation', () => {
  it('sixteen tools are registered', () => {
    expect(ALL_TOOLS.length).toBe(16);
  });

  it('sprite sheet fixer editor exposes every supported locale', () => {
    expect(Object.keys(fixerEditor.i18n).sort()).toEqual([
      'de', 'en', 'es', 'fr', 'id', 'it', 'ja', 'ko', 'nl', 'pl', 'pt', 'ru', 'sv', 'tr', 'zh'
    ]);
  });
});
