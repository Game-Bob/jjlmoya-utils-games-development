import { describe, it, expect } from 'vitest';
import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';

const EXCLUDED_DIRS = ['node_modules', 'pages', 'layouts'];

function findAstroFiles(dir: string): string[] {
  const files: string[] = [];
  const entries = readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory() && !EXCLUDED_DIRS.includes(entry.name)) {
      files.push(...findAstroFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.astro')) {
      files.push(fullPath);
    }
  }

  return files;
}

function hasH1(content: string): boolean {
  return /<h1[\s>]/i.test(content);
}

const srcDir = join(process.cwd(), 'src');
const astroFiles = findAstroFiles(srcDir);

describe('No H1 in Components', () => {
  if (astroFiles.length === 0) {
    it('no astro components found', () => {
      expect(true).toBe(true);
    });
  }

  astroFiles.forEach((file) => {
    const relativePath = file.replace(process.cwd(), '');
    it(`${relativePath} should not contain <h1>`, () => {
      const content = readFileSync(file, 'utf-8');
      expect(
        hasH1(content),
        `File "${relativePath}" contains a <h1> element. Use <h2> or lower inside components — h1 belongs to the page layout.`,
      ).toBe(false);
    });
  });
});

