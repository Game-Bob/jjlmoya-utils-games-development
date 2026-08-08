import { describe, expect, it } from 'vitest';
import { detectTranslationFormat, sanitizeTranslationFile } from './logic';

describe('localization sanitizer', () => {
  it('repairs quoted commas, reports blanks, and removes duplicate CSV keys', () => {
    const result = sanitizeTranslationFile('key,en,es\nmenu.play,Play,"Jugar, ahora"\nmenu.play,Play again,\nmenu.quit,,Salir\n', 'csv');

    expect(result.valid).toBe(true);
    expect(result.stats.duplicateKeys).toBe(1);
    expect(result.stats.emptyCells).toBe(2);
    expect(result.stats.cleanRows).toBe(2);
    expect(result.cleanText).toContain('"Jugar, ahora"');
  });

  it('pads missing CSV cells and joins an extra comma into the final translation', () => {
    const result = sanitizeTranslationFile('key,en,es\nhello,Hello\nbye,Bye,Adios,unexpected\n', 'csv');

    expect(result.stats.malformedRows).toBe(2);
    expect(result.rows[0]).toEqual(['hello', 'Hello', '']);
    expect(result.rows[1]).toEqual(['bye', 'Bye', 'Adios,unexpected']);
  });

  it('normalizes JSON arrays while keeping the first duplicate record', () => {
    const result = sanitizeTranslationFile('[{"key":"start","en":"Start","es":""},{"key":"start","en":"Begin","es":"Comenzar"}]', 'json');

    expect(result.valid).toBe(true);
    expect(result.stats.duplicateKeys).toBe(1);
    expect(result.stats.emptyCells).toBe(1);
    expect(JSON.parse(result.cleanText)).toHaveLength(1);
  });

  it('rejects invalid JSON and detects format from file names or content', () => {
    expect(sanitizeTranslationFile('{broken', 'json').valid).toBe(false);
    expect(detectTranslationFormat('strings.json')).toBe('json');
    expect(detectTranslationFormat('strings.txt', '[{"key":"x"}]')).toBe('json');
    expect(detectTranslationFormat('strings.txt', 'key,en\nx,Hello')).toBe('csv');
  });
});
