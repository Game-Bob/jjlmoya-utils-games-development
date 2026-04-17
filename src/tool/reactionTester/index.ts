import type { SportsToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import ReactionTesterComponent from './component.astro';
import ReactionTesterSEO from './seo.astro';
import ReactionTesterBibliography from './bibliography.astro';
import type { ReactionTesterUI } from './ui';

export type { ReactionTesterUI };
export type ReactionTesterLocaleContent = ToolLocaleContent<ReactionTesterUI>;

export const reactionTester: SportsToolEntry<ReactionTesterUI> = {
  id: 'reaction-tester',
  icons: {
    bg: 'mdi:lightning-bolt',
    fg: 'mdi:timer-outline',
  },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
    de: () => import('./i18n/de').then((m) => m.content),
    id: () => import('./i18n/id').then((m) => m.content),
    it: () => import('./i18n/it').then((m) => m.content),
    ja: () => import('./i18n/ja').then((m) => m.content),
    ko: () => import('./i18n/ko').then((m) => m.content),
    nl: () => import('./i18n/nl').then((m) => m.content),
    pl: () => import('./i18n/pl').then((m) => m.content),
    pt: () => import('./i18n/pt').then((m) => m.content),
    ru: () => import('./i18n/ru').then((m) => m.content),
    sv: () => import('./i18n/sv').then((m) => m.content),
    tr: () => import('./i18n/tr').then((m) => m.content),
    zh: () => import('./i18n/zh').then((m) => m.content),
  },
};

export { ReactionTesterComponent, ReactionTesterSEO, ReactionTesterBibliography };

export const REACTION_TESTER_TOOL: ToolDefinition = {
  entry: reactionTester,
  Component: ReactionTesterComponent,
  SEOComponent: ReactionTesterSEO,
  BibliographyComponent: ReactionTesterBibliography,
};
