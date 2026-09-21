import { readFileSync, readdirSync } from 'node:fs';
import { extname, join } from 'node:path';
import { describe, expect, it } from 'vitest';

const TOOL_ROOT = join(process.cwd(), 'src', 'tool');
const SOURCE_EXTENSIONS = new Set(['.astro', '.ts', '.tsx']);

describe('Tool style integration', () => {
  for (const tool of readdirSync(TOOL_ROOT, { withFileTypes: true })) {
    if (!tool.isDirectory()) continue;
    const directory = join(TOOL_ROOT, tool.name);
    const files = readdirSync(directory, { withFileTypes: true });
    const styleFiles = files
      .filter((file) => file.isFile() && extname(file.name) === '.css')
      .map((file) => file.name);
    const source = files
      .filter((file) => file.isFile() && SOURCE_EXTENSIONS.has(extname(file.name)))
      .map((file) => readFileSync(join(directory, file.name), 'utf8'))
      .join('\n');

    for (const styleFile of styleFiles) {
      it(`${tool.name} imports ${styleFile}`, () => {
        expect(source).toContain(`./${styleFile}`);
      });
    }
  }
});
