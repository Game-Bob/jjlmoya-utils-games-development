export { ALL_ENTRIES } from './entries';
import type { ToolDefinition } from './types';
import { STEAM_CAPSULE_GENERATOR_TOOL } from './tool/steamCapsuleGenerator';
import { ITCHIO_GAME_TESTER_TOOL } from './tool/itchioGameTester';
import { SPRITE_SHEET_PACKER_TOOL } from './tool/spriteSheetPacker';
import { AUDIO_LOOP_POINT_FINDER_TOOL } from './tool/audioLoopPointFinder';

export const ALL_TOOLS: ToolDefinition[] = [
  STEAM_CAPSULE_GENERATOR_TOOL,
  ITCHIO_GAME_TESTER_TOOL,
  SPRITE_SHEET_PACKER_TOOL,
  AUDIO_LOOP_POINT_FINDER_TOOL,
];

