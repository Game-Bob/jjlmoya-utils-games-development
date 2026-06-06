import type { SportsCategoryEntry, SportsToolEntry } from '../types';
import { basketScoreKeeper } from '../tool/basketScoreKeeper/index';
import { footballScoreKeeper } from '../tool/footballScoreKeeper/index';
import { scoreKeeper } from '../tool/scoreKeeper/index';
import { tournamentBracket } from '../tool/tournamentBracket/index';
import { gymTracker } from '../tool/gymTracker/index';
import { reactionTester } from '../tool/reactionTester/index';
import { pingPongScoreKeeper } from '../tool/pingPongScoreKeeper/index';
import { rugbyScoreKeeper } from '../tool/rugbyScoreKeeper/index';
import { baseballScoreKeeper } from '../tool/baseballScoreKeeper/index';

export const sportsCategory: SportsCategoryEntry = {
  icon: 'mdi:soccer',
  tools: [
    footballScoreKeeper,
    basketScoreKeeper,
    scoreKeeper,
    tournamentBracket,
    gymTracker,
    reactionTester,
    pingPongScoreKeeper,
    rugbyScoreKeeper,
    baseballScoreKeeper,
  ] as unknown as SportsToolEntry<Record<string, string>>[],
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

