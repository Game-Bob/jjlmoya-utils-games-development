export { ALL_ENTRIES } from './entries';
import type { ToolDefinition } from './types';
import { STEAM_CAPSULE_GENERATOR_TOOL } from './tool/steamCapsuleGenerator';

export const ALL_TOOLS: ToolDefinition[] = [
  STEAM_CAPSULE_GENERATOR_TOOL,
];

