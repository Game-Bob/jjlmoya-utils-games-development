export { gamesCategory } from './category';
export const GamesCategorySEO = () => import('./category/GamesCategorySEO.astro').then((m) => m.default);

export type {
  KnownLocale,
  FAQItem,
  BibliographyEntry,
  HowToStep,
  ToolLocaleContent,
  CategoryLocaleContent,
  LocaleLoader,
  LocaleMap,
  GamesToolEntry,
  GamesCategoryEntry,
  ToolDefinition,
} from './types';

export { ALL_ENTRIES, ALL_TOOLS } from './tools';
export { STEAM_CAPSULE_GENERATOR_TOOL, steamCapsuleGenerator } from './tool/steamCapsuleGenerator';

export type { ToolLocaleContent as GamesToolLocaleContent } from './types';
