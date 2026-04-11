export type SportId = 'simple' | 'tennis' | 'padel' | 'pingpong' | 'volleyball' | 'basket';

export type ScoreType = 'numeric' | 'tennis';

export interface SportConfig {
  id: SportId;
  type: ScoreType;
  maxScore?: number;
  winBy?: number;
  hasSets?: boolean;
  hasGames?: boolean;
  serviceRotationPoints?: number;
  increments: number[];
}

export const SPORT_NAME_KEYS: Record<SportId, string> = {
  simple: 'sportSimple',
  tennis: 'sportTennis',
  padel: 'sportPadel',
  pingpong: 'sportPingpong',
  volleyball: 'sportVolleyball',
  basket: 'sportBasket',
};

export const SPORTS: Record<SportId, SportConfig> = {
  simple: {
    id: 'simple',
    type: 'numeric',
    increments: [1],
    serviceRotationPoints: 0,
  },
  tennis: {
    id: 'tennis',
    type: 'tennis',
    hasSets: true,
    hasGames: true,
    increments: [1],
    serviceRotationPoints: 0,
  },
  padel: {
    id: 'padel',
    type: 'tennis',
    hasSets: true,
    hasGames: true,
    increments: [1],
    serviceRotationPoints: 0,
  },
  pingpong: {
    id: 'pingpong',
    type: 'numeric',
    maxScore: 11,
    winBy: 2,
    increments: [1],
    serviceRotationPoints: 2,
  },
  volleyball: {
    id: 'volleyball',
    type: 'numeric',
    maxScore: 25,
    winBy: 2,
    increments: [1],
    serviceRotationPoints: 1,
  },
  basket: {
    id: 'basket',
    type: 'numeric',
    increments: [1, 2, 3],
    serviceRotationPoints: 0,
  },
};
