export { ALL_ENTRIES } from './entries';
import type { ToolDefinition } from './types';
import { BASKET_SCORE_KEEPER_TOOL } from './tool/basketScoreKeeper/index';
import { SCORE_KEEPER_TOOL } from './tool/scoreKeeper/index';
import { TOURNAMENT_BRACKET_TOOL } from './tool/tournamentBracket/index';
import { GYM_TRACKER_TOOL } from './tool/gymTracker/index';
import { REACTION_TESTER_TOOL } from './tool/reactionTester/index';
import { FOOTBALL_SCORE_KEEPER_TOOL } from './tool/footballScoreKeeper/index';

export const ALL_TOOLS: ToolDefinition[] = [
  BASKET_SCORE_KEEPER_TOOL,
  SCORE_KEEPER_TOOL,
  TOURNAMENT_BRACKET_TOOL,
  GYM_TRACKER_TOOL,
  REACTION_TESTER_TOOL,
  FOOTBALL_SCORE_KEEPER_TOOL,
];


