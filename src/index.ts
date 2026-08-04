export { sportsCategory } from './category';
export const sportsCategorySEO = () => import('./category/seo.astro').then((m) => m.default);

export type {
  KnownLocale,
  FAQItem,
  BibliographyEntry,
  HowToStep,
  ToolLocaleContent,
  CategoryLocaleContent,
  LocaleLoader,
  LocaleMap,
  SportsToolEntry,
  SportsCategoryEntry,
  ToolDefinition,
} from './types';

export { ALL_ENTRIES, ALL_TOOLS } from './tools';

export { SCORE_KEEPER_TOOL, scoreKeeper } from './tool/scoreKeeper/index';
export type { ScoreKeeperUI, ScoreKeeperLocaleContent } from './tool/scoreKeeper/index';

export { TOURNAMENT_BRACKET_TOOL, tournamentBracket } from './tool/tournamentBracket/index';
export type { TournamentBracketUI, TournamentBracketLocaleContent } from './tool/tournamentBracket/index';

export { GYM_TRACKER_TOOL, gymTracker } from './tool/gymTracker/index';
export type { GymTrackerUI, GymTrackerLocaleContent } from './tool/gymTracker/index';

export { REACTION_TESTER_TOOL, reactionTester } from './tool/reactionTester/index';
export type { ReactionTesterUI, ReactionTesterLocaleContent } from './tool/reactionTester/index';

export { ELO_RATING_CALCULATOR_TOOL, eloRatingCalculator } from './tool/eloRatingCalculator/index';
export type { EloRatingCalculatorUI, EloRatingCalculatorLocaleContent } from './tool/eloRatingCalculator/index';

export { PENALTY_SHOOTOUT_TOOL, penaltyShootout } from './tool/penaltyShootout/index';
export type { PenaltyShootoutUI, PenaltyShootoutLocaleContent } from './tool/penaltyShootout/index';
