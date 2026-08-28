import { describe, it, expect } from 'vitest';
import { readdirSync, readFileSync, existsSync } from 'fs';
import { join, relative } from 'path';

function findSeoAstroFiles(dir: string): string[] {
  const files: string[] = [];
  if (!existsSync(dir)) return files;
  const entries = readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...findSeoAstroFiles(fullPath));
    } else if (entry.isFile() && entry.name === 'seo.astro') {
      files.push(fullPath);
    }
  }

  return files;
}

const toolDir = join(process.cwd(), 'src', 'tool');
const seoFiles = findSeoAstroFiles(toolDir);

describe('SEO Component Wellformed Export', () => {
  it('found tool seo.astro components', () => {
    expect(seoFiles.length).toBeGreaterThan(0);
  });

  seoFiles.forEach((file) => {
    const relativePath = relative(process.cwd(), file);

    it(`${relativePath} should dynamically load SEO sections and use SEORenderer`, () => {
      const content = readFileSync(file, 'utf-8');

      const usesSeoRenderer =
        content.includes('@jjlmoya/utils-shared') &&
        (content.includes('SEORenderer') || content.includes('SEOArticle'));

      const acquiresDynamicContent =
        content.includes('.i18n') ||
        content.includes('loader') ||
        content.includes('await loader') ||
        content.includes('.seo');

      const isBrokenPattern =
        /sections\s*=\s*\[\s*\]/.test(content) && !acquiresDynamicContent;

      expect(
        usesSeoRenderer,
        `File "${relativePath}" does not import or use SEORenderer from @jjlmoya/utils-shared.`,
      ).toBe(true);

      expect(
        isBrokenPattern,
        `File "${relativePath}" relies on a static sections=[] prop default without fetching content from entry.i18n, resulting in empty SEO text on consumers.`,
      ).toBe(false);

      expect(
        acquiresDynamicContent,
        `File "${relativePath}" does not fetch dynamic i18n content for SEO rendering.`,
      ).toBe(true);
    });
  });
});
