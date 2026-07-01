import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

function getFiles(dir: string): string[] {
  const results: string[] = [];
  if (!fs.existsSync(dir)) {
    return results;
  }
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      if (file !== 'tests' && file !== 'node_modules' && file !== '.astro') {
        results.push(...getFiles(fullPath));
      }
    } else {
      results.push(fullPath);
    }
  }
  return results;
}

function isContentFile(filePath: string): boolean {
  return /\\i18n\\/.test(filePath) || filePath.endsWith('bibliography.ts');
}

const srcDir = path.join(process.cwd(), 'src');
const scriptsDir = path.join(process.cwd(), 'scripts');
const filesToTest = [
  ...getFiles(srcDir).filter(isContentFile),
  ...getFiles(scriptsDir).filter(isContentFile),
];

const aiTypographyGarbage = [
  '\u2013',
  '\u2014',
  '\u2026',
  '\u201C',
  '\u201D',
  '\u2018',
  '\u2019',
  '\u00AB',
  '\u00BB',
  '\u200B',
  '\u201E',
];

describe('Typography Garbage Character Validation', () => {
  filesToTest.forEach((filePath) => {
    const relativePath = path.relative(process.cwd(), filePath);
    it(`should not contain typography garbage characters in ${relativePath}`, () => {
      const content = fs.readFileSync(filePath, 'utf-8');
      const hasAiPatterns = aiTypographyGarbage.some(char => content.includes(char));
      expect(hasAiPatterns).toBe(false);
    });

    it(`should not contain space before colon in ${relativePath}`, () => {
      const content = fs.readFileSync(filePath, 'utf-8');
      const spaceBeforeColon = / : /.test(content);
      expect(spaceBeforeColon).toBe(false);
    });

    it(`should not contain double hyphen in ${relativePath}`, () => {
      const content = fs.readFileSync(filePath, 'utf-8');
      expect(content).not.toContain('--');
    });
  });
});
