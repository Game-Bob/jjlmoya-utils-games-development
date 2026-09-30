import { createLegacyIframeDesktopToolModule } from '../host/legacy';
import { PIPELINE_PHASES } from '../pipelinePhases';
import { DesktopToolRegistry } from './DesktopToolRegistry';
import { SpriteSheetPackerDesktopModule } from './SpriteSheetPackerDesktopModule';
import { FixerDesktopModule } from './FixerDesktopModule';
import type { RuntimePlatform } from '../../platform/contracts/IPlatformBridge';

const INTEGRATED_MODULE_IDS = new Set(['spriteSheetPacker']);

export function createWorkspaceToolRegistry(platform: RuntimePlatform = 'web'): DesktopToolRegistry {
  const integratedIds = platform === 'desktop-tauri'
    ? new Set([...INTEGRATED_MODULE_IDS, 'fixerEditor'])
    : INTEGRATED_MODULE_IDS;
  const legacyModules = PIPELINE_PHASES
    .flatMap((phase) => phase.tools)
    .filter((tool) => !integratedIds.has(tool.id))
    .map(createLegacyIframeDesktopToolModule);

  return new DesktopToolRegistry([
    new SpriteSheetPackerDesktopModule(),
    ...(platform === 'desktop-tauri' ? [new FixerDesktopModule()] : []),
    ...legacyModules,
  ]);
}
