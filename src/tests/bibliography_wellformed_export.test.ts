import { describe, it, expect } from 'vitest';
import { readdirSync, readFileSync, existsSync } from 'fs';
import { join, relative } from 'path';

function findBibliographyAstroFiles(dir: string): string[] {
  const files: string[] = [];
  if (!existsSync(dir)) return files;
  const entries = readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...findBibliographyAstroFiles(fullPath));
    } else if (entry.isFile() && entry.name === 'bibliography.astro') {
      files.push(fullPath);
    }
  }

  return files;
}

const toolDir = join(process.cwd(), 'src', 'tool');
const bibliographyFiles = findBibliographyAstroFiles(toolDir);

describe('Bibliography Component Wellformed Export', () => {
  it('found tool bibliography.astro components', () => {
    expect(bibliographyFiles.length).toBeGreaterThan(0);
  });

  bibliographyFiles.forEach((file) => {
    const relativePath = relative(process.cwd(), file);

    it(`${relativePath} should use SharedBibliography from @jjlmoya/utils-shared`, () => {
      const content = readFileSync(file, 'utf-8');

      const usesSharedComponent =
        content.includes('@jjlmoya/utils-shared') &&
        (content.includes('Bibliography') || content.includes('SharedBibliography'));

      expect(
        usesSharedComponent,
        `File "${relativePath}" does not use the standard Bibliography component from @jjlmoya/utils-shared, resulting in unstyled or raw bibliography output.`,
      ).toBe(true);
    });
  });
});
