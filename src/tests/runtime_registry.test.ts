import { describe, expect, it } from 'vitest';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { ALL_ENTRIES } from '../entries';
import { ALL_TOOLS } from '../tools';

describe('runtime registry', () => {
  it('keeps every runtime tool represented in the data registry', () => {
    const toolIds = ALL_TOOLS.map(({ entry }) => entry.id).sort();
    const entryIds = ALL_ENTRIES.map(({ id }) => id).sort();

    expect(entryIds).toEqual(toolIds);
  });

  it('keeps every runtime directory represented in the data registry', () => {
    const runtimeIds = readdirSync(join(process.cwd(), 'src', 'tool'), { withFileTypes: true })
      .filter((directory) => directory.isDirectory())
      .map((directory) => join(process.cwd(), 'src', 'tool', directory.name))
      .filter((directory) => existsSync(join(directory, 'index.ts')) && existsSync(join(directory, 'entry.ts')))
      .map((directory) => readFileSync(join(directory, 'entry.ts'), 'utf8').match(/\bid\s*:\s*['"]([^'"]+)['"]/)?.[1])
      .filter((id): id is string => Boolean(id))
      .sort();

    const entryIds = ALL_ENTRIES.map(({ id }) => id).sort();
    expect(entryIds).toEqual(runtimeIds);
  });
});
