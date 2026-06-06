export { ALL_ENTRIES } from './entries';
import type { ToolDefinition } from './types';
import { BASKET_SCORE_KEEPER_TOOL } from './tool/basketScoreKeeper/index';
import { SCORE_KEEPER_TOOL } from './tool/scoreKeeper/index';
import { TOURNAMENT_BRACKET_TOOL } from './tool/tournamentBracket/index';
import { GYM_TRACKER_TOOL } from './tool/gymTracker/index';
import { REACTION_TESTER_TOOL } from './tool/reactionTester/index';
import { FOOTBALL_SCORE_KEEPER_TOOL } from './tool/footballScoreKeeper/index';
import { PING_PONG_SCORE_KEEPER_TOOL } from './tool/pingPongScoreKeeper/index';
import { TENNIS_SCORE_KEEPER_TOOL } from './tool/tennisScoreKeeper/index';
import { DARTS_SCORE_KEEPER_TOOL } from './tool/dartsScoreKeeper/index';
import { PADEL_SCOREKEEPER_TOOL } from './tool/padelScoreKeeper/index';
import { STREETBALL_SCOREKEEPER_TOOL } from './tool/streetballScoreKeeper/index';
import { BEACH_VOLLEYBALL_SCOREKEEPER_TOOL } from './tool/beachVolleyballScoreKeeper/index';
import { SNOOKER_SCOREKEEPER_TOOL } from './tool/snookerScoreKeeper/index';
import { RUGBY_SCOREKEEPER_TOOL } from './tool/rugbyScoreKeeper/index';
import { BASEBALL_SCOREKEEPER_TOOL } from './tool/baseballScoreKeeper/index';

export const ALL_TOOLS: ToolDefinition[] = [
  BASKET_SCORE_KEEPER_TOOL,
  SCORE_KEEPER_TOOL,
  TOURNAMENT_BRACKET_TOOL,
  GYM_TRACKER_TOOL,
  REACTION_TESTER_TOOL,
  FOOTBALL_SCORE_KEEPER_TOOL,
  PING_PONG_SCORE_KEEPER_TOOL,
  TENNIS_SCORE_KEEPER_TOOL,
  DARTS_SCORE_KEEPER_TOOL,
  PADEL_SCOREKEEPER_TOOL,
  STREETBALL_SCOREKEEPER_TOOL,
  BEACH_VOLLEYBALL_SCOREKEEPER_TOOL,
  SNOOKER_SCOREKEEPER_TOOL,
  RUGBY_SCOREKEEPER_TOOL,
  BASEBALL_SCOREKEEPER_TOOL,
];



