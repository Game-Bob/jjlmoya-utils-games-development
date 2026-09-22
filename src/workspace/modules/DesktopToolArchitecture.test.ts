import { readdir, readFile } from 'node:fs/promises';
import { describe, expect, it } from 'vitest';

const MODULE_DIRECTORY = new URL('.', import.meta.url);
const FORBIDDEN_PATTERNS = [
  { label: 'Astro imports', pattern: /(?:from|import)\s*\(?['"][^'"]*(?:astro|\.astro)['"]/ },
  { label: 'Tauri imports', pattern: /@tauri-apps|src-tauri/ },
  { label: 'global document access', pattern: /\bdocument\s*(?:\.|\[)/ },
  { label: 'global window access', pattern: /\bwindow\s*(?:\.|\[)/ },
  { label: 'global navigation access', pattern: /\b(?:location|history)\s*(?:\.|\[)/ },
];

describe('Desktop tool module architecture', () => {
  it('keeps implementation modules independent from Astro, Tauri and global navigation', async () => {
    const files = (await readdir(MODULE_DIRECTORY))
      .filter((file) => file.endsWith('.ts') && !file.endsWith('.test.ts'));

    for (const file of files) {
      const source = await readFile(new URL(file, MODULE_DIRECTORY), 'utf8');
      for (const forbidden of FORBIDDEN_PATTERNS) {
        expect(source, `${file} contains ${forbidden.label}`).not.toMatch(forbidden.pattern);
      }
    }
  });

  it('reuses the public sprite kernel from the reference desktop module', async () => {
    const source = await readFile(
      new URL('SpriteSheetPackerDesktopModule.ts', MODULE_DIRECTORY),
      'utf8',
    );

    expect(source).toContain("from '../../tool/spriteSheetPacker/logic'");
    expect(source).not.toContain('function calculateGridSlices');
  });
});
