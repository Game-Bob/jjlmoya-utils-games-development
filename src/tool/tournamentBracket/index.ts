import type { SportsToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import TournamentBracketComponent from './component.astro';
import TournamentBracketSEO from './seo.astro';
import TournamentBracketBibliography from './bibliography.astro';
import type { TournamentBracketUI } from './ui';

export type { TournamentBracketUI };
export type TournamentBracketLocaleContent = ToolLocaleContent<TournamentBracketUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const tournamentBracket: SportsToolEntry<TournamentBracketUI> = {
  id: 'tournament-bracket',
  icons: {
    bg: 'mdi:sitemap',
    fg: 'mdi:trophy',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { TournamentBracketComponent, TournamentBracketSEO, TournamentBracketBibliography };

export const TOURNAMENT_BRACKET_TOOL: ToolDefinition = {
  entry: tournamentBracket,
  Component: TournamentBracketComponent,
  SEOComponent: TournamentBracketSEO,
  BibliographyComponent: TournamentBracketBibliography,
};
