import type { SportsToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import GymTrackerComponent from './component.astro';
import GymTrackerSEO from './seo.astro';
import GymTrackerBibliography from './bibliography.astro';
import type { GymTrackerUI } from './ui';

export type { GymTrackerUI };
export type GymTrackerLocaleContent = ToolLocaleContent<GymTrackerUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const gymTracker: SportsToolEntry<GymTrackerUI> = {
  id: 'gym-tracker',
  icons: {
    bg: 'mdi:weight-lifter',
    fg: 'mdi:chart-line',
  },
  i18n: {
    es: async () => es as ToolLocaleContent<GymTrackerUI>,
    en: async () => en as ToolLocaleContent<GymTrackerUI>,
    fr: async () => fr as ToolLocaleContent<GymTrackerUI>,
  },
};

export { GymTrackerComponent, GymTrackerSEO, GymTrackerBibliography };

export const GYM_TRACKER_TOOL: ToolDefinition = {
  entry: gymTracker,
  Component: GymTrackerComponent,
  SEOComponent: GymTrackerSEO,
  BibliographyComponent: GymTrackerBibliography,
};
