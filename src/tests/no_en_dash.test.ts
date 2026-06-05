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

const srcDir = path.join(process.cwd(), 'src');
const scriptsDir = path.join(process.cwd(), 'scripts');
const filesToTest = [
  ...getFiles(srcDir),
  ...getFiles(scriptsDir),
];

describe('En-Dash Character Validation', () => {
  filesToTest.forEach((filePath) => {
    const relativePath = path.relative(process.cwd(), filePath);
    it(`should not contain en-dash in ${relativePath}`, () => {
      const content = fs.readFileSync(filePath, 'utf-8');
      const hasEnDash = content.includes('\u2013') || content.includes('–');
      expect(hasEnDash).toBe(false);
    });
  });
});
