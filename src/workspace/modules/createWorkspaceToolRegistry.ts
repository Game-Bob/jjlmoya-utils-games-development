import { createLegacyIframeDesktopToolModule } from '../host/legacy';
import { PIPELINE_PHASES } from '../pipelinePhases';
import { DesktopToolRegistry } from './DesktopToolRegistry';
import { SpriteSheetPackerDesktopModule } from './SpriteSheetPackerDesktopModule';

const INTEGRATED_MODULE_IDS = new Set(['spriteSheetPacker']);

export function createWorkspaceToolRegistry(): DesktopToolRegistry {
  const legacyModules = PIPELINE_PHASES
    .flatMap((phase) => phase.tools)
    .filter((tool) => !INTEGRATED_MODULE_IDS.has(tool.id))
    .map(createLegacyIframeDesktopToolModule);

  return new DesktopToolRegistry([
    new SpriteSheetPackerDesktopModule(),
    ...legacyModules,
  ]);
}
