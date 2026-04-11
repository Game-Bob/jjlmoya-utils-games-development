import type { SportsToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import ReactionTesterComponent from './component.astro';
import ReactionTesterSEO from './seo.astro';
import ReactionTesterBibliography from './bibliography.astro';
import type { ReactionTesterUI } from './ui';

export type { ReactionTesterUI };
export type ReactionTesterLocaleContent = ToolLocaleContent<ReactionTesterUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const reactionTester: SportsToolEntry<ReactionTesterUI> = {
  id: 'reaction-tester',
  icons: {
    bg: 'mdi:lightning-bolt',
    fg: 'mdi:timer-outline',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { ReactionTesterComponent, ReactionTesterSEO, ReactionTesterBibliography };

export const REACTION_TESTER_TOOL: ToolDefinition = {
  entry: reactionTester,
  Component: ReactionTesterComponent,
  SEOComponent: ReactionTesterSEO,
  BibliographyComponent: ReactionTesterBibliography,
};
