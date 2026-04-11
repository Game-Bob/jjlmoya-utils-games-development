export { sportsCategory } from './category';
export { default as sportsCategorySEO } from './category/seo.astro';

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

export { ALL_TOOLS } from './tools';

export {
  ScoreKeeperComponent,
  ScoreKeeperSEO,
  ScoreKeeperBibliography,
  SCORE_KEEPER_TOOL,
  scoreKeeper,
} from './tool/scoreKeeper/index';
export type { ScoreKeeperUI, ScoreKeeperLocaleContent } from './tool/scoreKeeper/index';

export {
  TournamentBracketComponent,
  TournamentBracketSEO,
  TournamentBracketBibliography,
  TOURNAMENT_BRACKET_TOOL,
  tournamentBracket,
} from './tool/tournamentBracket/index';
export type { TournamentBracketUI, TournamentBracketLocaleContent } from './tool/tournamentBracket/index';

export {
  GymTrackerComponent,
  GymTrackerSEO,
  GymTrackerBibliography,
  GYM_TRACKER_TOOL,
  gymTracker,
} from './tool/gymTracker/index';
export type { GymTrackerUI, GymTrackerLocaleContent } from './tool/gymTracker/index';

export {
  ReactionTesterComponent,
  ReactionTesterSEO,
  ReactionTesterBibliography,
  REACTION_TESTER_TOOL,
  reactionTester,
} from './tool/reactionTester/index';
export type { ReactionTesterUI, ReactionTesterLocaleContent } from './tool/reactionTester/index';

