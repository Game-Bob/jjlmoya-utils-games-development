import type { SportsToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import ScoreKeeperComponent from './component.astro';
import ScoreKeeperSEO from './seo.astro';
import ScoreKeeperBibliography from './bibliography.astro';

import type { ScoreKeeperUI } from './ui';

export type { ScoreKeeperUI };
export type ScoreKeeperLocaleContent = ToolLocaleContent<ScoreKeeperUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const scoreKeeper: SportsToolEntry<ScoreKeeperUI> = {
  id: 'score-keeper',
  icons: {
    bg: 'mdi:scoreboard-outline',
    fg: 'mdi:trophy-variant-outline',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { ScoreKeeperComponent, ScoreKeeperSEO, ScoreKeeperBibliography };

export const SCORE_KEEPER_TOOL: ToolDefinition = {
  entry: scoreKeeper,
  Component: ScoreKeeperComponent,
  SEOComponent: ScoreKeeperSEO,
  BibliographyComponent: ScoreKeeperBibliography,
};
