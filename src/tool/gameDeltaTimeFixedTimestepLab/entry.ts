import type { GamesToolEntry, ToolLocaleContent } from '../../types';
import type { GameDeltaTimeFixedTimestepLabUI } from './ui';

export type { GameDeltaTimeFixedTimestepLabUI };
export type GameDeltaTimeFixedTimestepLabLocaleContent = ToolLocaleContent<GameDeltaTimeFixedTimestepLabUI>;

export const gameDeltaTimeFixedTimestepLab: GamesToolEntry<GameDeltaTimeFixedTimestepLabUI> = {
  id: 'game-delta-time-fixed-timestep-lab',
  icons: { bg: 'mdi:timer-sand', fg: 'mdi:gamepad-variant' },
  i18n: {
    de: () => import('./i18n/de').then((module) => module.content),
    en: () => import('./i18n/en').then((module) => module.content),
    es: () => import('./i18n/es').then((module) => module.content),
    fr: () => import('./i18n/fr').then((module) => module.content),
    id: () => import('./i18n/id').then((module) => module.content),
    it: () => import('./i18n/it').then((module) => module.content),
    ja: () => import('./i18n/ja').then((module) => module.content),
    ko: () => import('./i18n/ko').then((module) => module.content),
    nl: () => import('./i18n/nl').then((module) => module.content),
    pl: () => import('./i18n/pl').then((module) => module.content),
    pt: () => import('./i18n/pt').then((module) => module.content),
    ru: () => import('./i18n/ru').then((module) => module.content),
    sv: () => import('./i18n/sv').then((module) => module.content),
    tr: () => import('./i18n/tr').then((module) => module.content),
    zh: () => import('./i18n/zh').then((module) => module.content),
  },
};
