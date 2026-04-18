import type { ToolDefinition } from './types';
import { SCORE_KEEPER_TOOL } from './tool/scoreKeeper/index';
import { TOURNAMENT_BRACKET_TOOL } from './tool/tournamentBracket/index';
import { GYM_TRACKER_TOOL } from './tool/gymTracker/index';
import { REACTION_TESTER_TOOL } from './tool/reactionTester/index';

export const ALL_TOOLS: ToolDefinition[] = [
  SCORE_KEEPER_TOOL,
  TOURNAMENT_BRACKET_TOOL,
  GYM_TRACKER_TOOL,
  REACTION_TESTER_TOOL,
];


export const ALL_ENTRIES = ALL_TOOLS.map(t => t.entry);
