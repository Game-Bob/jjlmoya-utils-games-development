import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { PLATFORM_COMMAND_NAMES } from './commands';

describe('Tauri IPC command contract', () => {
  it('registers every typed frontend command in the Rust handler', () => {
    const rustSource = readFileSync(resolve('src-tauri/src/lib.rs'), 'utf8');
    const handler = rustSource.match(/generate_handler!\[([\s\S]*?)\]/)?.[1] ?? '';
    for (const command of PLATFORM_COMMAND_NAMES) {
      expect(handler, `${command} is absent from generate_handler`).toContain(command);
    }
  });
});
