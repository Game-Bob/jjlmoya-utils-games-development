import type { SportsCategoryEntry } from '../types';
import { scoreKeeper } from '../tool/scoreKeeper/index';
import { tournamentBracket } from '../tool/tournamentBracket/index';

export const sportsCategory: SportsCategoryEntry = {
  icon: 'mdi:basketball',
  tools: [scoreKeeper, tournamentBracket],
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

