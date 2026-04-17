import type { SportsToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import GymTrackerComponent from './component.astro';
import GymTrackerSEO from './seo.astro';
import GymTrackerBibliography from './bibliography.astro';
import type { GymTrackerUI } from './ui';

export type { GymTrackerUI };
export type GymTrackerLocaleContent = ToolLocaleContent<GymTrackerUI>;

export const gymTracker: SportsToolEntry<GymTrackerUI> = {
  id: 'gym-tracker',
  icons: {
    bg: 'mdi:weight-lifter',
    fg: 'mdi:chart-line',
  },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content as ToolLocaleContent<GymTrackerUI>),
    en: () => import('./i18n/en').then((m) => m.content as ToolLocaleContent<GymTrackerUI>),
    fr: () => import('./i18n/fr').then((m) => m.content as ToolLocaleContent<GymTrackerUI>),
    de: () => import('./i18n/de').then((m) => m.content as ToolLocaleContent<GymTrackerUI>),
    id: () => import('./i18n/id').then((m) => m.content as ToolLocaleContent<GymTrackerUI>),
    it: () => import('./i18n/it').then((m) => m.content as ToolLocaleContent<GymTrackerUI>),
    ja: () => import('./i18n/ja').then((m) => m.content as ToolLocaleContent<GymTrackerUI>),
    ko: () => import('./i18n/ko').then((m) => m.content as ToolLocaleContent<GymTrackerUI>),
    nl: () => import('./i18n/nl').then((m) => m.content as ToolLocaleContent<GymTrackerUI>),
    pl: () => import('./i18n/pl').then((m) => m.content as ToolLocaleContent<GymTrackerUI>),
    pt: () => import('./i18n/pt').then((m) => m.content as ToolLocaleContent<GymTrackerUI>),
    ru: () => import('./i18n/ru').then((m) => m.content as ToolLocaleContent<GymTrackerUI>),
    sv: () => import('./i18n/sv').then((m) => m.content as ToolLocaleContent<GymTrackerUI>),
    tr: () => import('./i18n/tr').then((m) => m.content as ToolLocaleContent<GymTrackerUI>),
    zh: () => import('./i18n/zh').then((m) => m.content as ToolLocaleContent<GymTrackerUI>),
  },
};

export { GymTrackerComponent, GymTrackerSEO, GymTrackerBibliography };

export const GYM_TRACKER_TOOL: ToolDefinition = {
  entry: gymTracker,
  Component: GymTrackerComponent,
  SEOComponent: GymTrackerSEO,
  BibliographyComponent: GymTrackerBibliography,
};
