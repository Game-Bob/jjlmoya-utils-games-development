import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

describe('Desktop security configuration', () => {
  it('enables a restrictive content security policy', () => {
    const config = JSON.parse(readFileSync(resolve('src-tauri/tauri.conf.json'), 'utf8')) as {
      app: { security: { csp: string | null } };
    };
    expect(config.app.security.csp).toBeTypeOf('string');
    expect(config.app.security.csp).toContain("default-src 'self'");
    expect(config.app.security.csp).not.toContain("script-src *");
  });

  it('keeps the main window capability intentionally small', () => {
    const capability = JSON.parse(readFileSync(resolve('src-tauri/capabilities/default.json'), 'utf8')) as {
      windows: string[];
      permissions: string[];
    };
    expect(capability.windows).toEqual(['main']);
    expect(capability.permissions).toEqual([
      'core:default',
      'dialog:allow-open',
      'dialog:allow-save',
    ]);
  });

  it('does not expose an arbitrary project authorization command', () => {
    const source = readFileSync(resolve('src-tauri/src/lib.rs'), 'utf8');
    expect(source).not.toContain('authorize_project_root');
    expect(source).toContain('select_project_root');
  });
});
