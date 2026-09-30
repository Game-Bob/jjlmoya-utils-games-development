import { describe, expect, it } from 'vitest';
import { PIPELINE_PHASES } from '../pipelinePhases';
import { createWorkspaceToolRegistry } from './createWorkspaceToolRegistry';

describe('createWorkspaceToolRegistry', () => {
  it('registers every pipeline tool exactly once', () => {
    const registry = createWorkspaceToolRegistry();
    const expectedIds = PIPELINE_PHASES.flatMap((phase) => phase.tools.map((tool) => tool.id));

    expect(registry.list().map((module) => module.manifest.id)).toEqual(expectedIds);
  });

  it('keeps the reference tool integrated and isolates remaining legacy modules', () => {
    const registry = createWorkspaceToolRegistry();

    expect(registry.require('spriteSheetPacker').manifest.capabilities).not.toContainEqual(
      expect.objectContaining({ id: 'legacy.iframe' }),
    );
    expect(
      registry.list().filter((module) => (
        module.manifest.capabilities.some((capability) => capability.id === 'legacy.iframe')
      )),
    ).toHaveLength(16);
  });

  it('integrates Sprite Sheet Fixer only in the native desktop runtime', () => {
    const web = createWorkspaceToolRegistry('web');
    const desktop = createWorkspaceToolRegistry('desktop-tauri');

    expect(web.require('fixerEditor').manifest.capabilities).toContainEqual(
      expect.objectContaining({ id: 'legacy.iframe' }),
    );
    expect(desktop.require('fixerEditor').manifest.capabilities).toContainEqual(
      expect.objectContaining({ id: 'sprite.correct-sheet' }),
    );
    expect(desktop.list()).toHaveLength(web.list().length);
  });
});
