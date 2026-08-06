export { ALL_ENTRIES } from './entries';
import type { ToolDefinition } from './types';
import { STEAM_CAPSULE_GENERATOR_TOOL } from './tool/steamCapsuleGenerator';
import { ITCHIO_GAME_TESTER_TOOL } from './tool/itchioGameTester';

export const ALL_TOOLS: ToolDefinition[] = [
  STEAM_CAPSULE_GENERATOR_TOOL,
  ITCHIO_GAME_TESTER_TOOL,
];
