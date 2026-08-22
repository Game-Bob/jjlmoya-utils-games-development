import type { GamesToolEntry, ToolLocaleContent } from '../../types';
import type { HitboxHurtboxAnimatorUI } from './ui';

export type { HitboxHurtboxAnimatorUI };

export type HitboxHurtboxAnimatorLocaleContent = ToolLocaleContent<HitboxHurtboxAnimatorUI>;

export const hitboxHurtboxAnimator: GamesToolEntry<HitboxHurtboxAnimatorUI> = {
  id: 'hitbox-hurtbox-animator',
  icons: { bg: 'mdi:animation-play-outline', fg: 'mdi:vector-rectangle' },
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
