import type { SportsToolEntry, ToolLocaleContent } from '../../types';
import type { BaseballScoreKeeperUI } from './ui';

export type { BaseballScoreKeeperUI };
export type BaseballScoreKeeperLocaleContent = ToolLocaleContent<BaseballScoreKeeperUI>;

export const baseballScoreKeeper: SportsToolEntry<BaseballScoreKeeperUI> = {
  id: 'baseball-scorekeeper',
  icons: {
    bg: 'mdi:baseball',
    fg: 'mdi:scoreboard-outline',
  },
  i18n: {
    en: () => import('./i18n/en').then((m) => m.content),
  },
};
