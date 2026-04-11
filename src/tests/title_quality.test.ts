import { describe, it } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

function getFiles(dir: string, ext: string[]): string[] {
  const results: string[] = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results.push(...getFiles(fullPath, ext));
    } else if (ext.some((e) => file.endsWith(e))) {
      results.push(fullPath);
    }
  }
  return results;
}

const SRC_DIR = path.join(process.cwd(), 'src');

describe('Project Titles - Separator Validation', () => {
  const files = [
    ...getFiles(path.join(SRC_DIR, 'tool'), ['.ts']),
    ...getFiles(path.join(SRC_DIR, 'category'), ['.ts']),
  ].filter(f => f.includes('i18n'));

  it.each(files)('Verify that titles in %s do not contain | or -', (filePath) => {
    const content = fs.readFileSync(filePath, 'utf-8');
    const relativePath = path.relative(process.cwd(), filePath);

    const titlePatterns = [
      /const\s+title\s*=\s*['"]([^'"]+)['"]/g,
      /title\s*:\s*['"]([^'"]+)['"]/g,
    ];

    const findings: string[] = [];

    for (const pattern of titlePatterns) {
      let match;
      while ((match = pattern.exec(content)) !== null) {
        const title = match[1];
        if (title.includes('|') || title.includes('-')) {
          findings.push(title);
        }
      }
    }

    if (findings.length > 0) {
      const list = findings.map((f) => `  - "${f}"`).join('\n');
      throw new Error(`Forbidden separators (| or -) found in titles in ${relativePath}:\n${list}`);
    }
  });
});
