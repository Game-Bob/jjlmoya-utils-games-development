import { readFile } from 'node:fs/promises';
import { describe, expect, it } from 'vitest';

const WORKSPACE_ROOT = new URL('../', import.meta.url);

describe('Tool Host composition', () => {
  it('keeps the primary viewport free of embedded documents', async () => {
    const viewport = await readFile(
      new URL('components/ToolViewport.astro', WORKSPACE_ROOT),
      'utf8',
    );

    expect(viewport).toContain('id="desktop-tool-host-root"');
    expect(viewport).not.toMatch(/<iframe\b/i);
    expect(viewport).not.toContain('tool-viewport-iframe');
  });

  it('assigns scrolling to the committed module surface', async () => {
    const styles = await readFile(new URL('styles/workspace.css', WORKSPACE_ROOT), 'utf8');

    expect(styles).toMatch(/\.desktop-tool-host-root\s*{[^}]*overflow:\s*hidden/s);
    expect(styles).toMatch(/\.desktop-tool-module-surface\s*{[^}]*overflow:\s*auto/s);
  });
});
