export const POINTS_TO_WIN_GAME = 11;
export const MIN_POINT_LEAD = 2;

export type PlayerSide = 'a' | 'b';
export type MatchFormat = 'bo1' | 'bo3' | 'bo5' | 'bo7';

export interface MatchScore {
  currentGamePointsA: number;
  currentGamePointsB: number;
  gamesWonByA: number;
  gamesWonByB: number;
  servingPlayer: PlayerSide;
  servesSinceLastChange: number;
  format: MatchFormat;
  areSidesSwapped: boolean;
}

export function createInitialScore(): MatchScore {
  return {
    currentGamePointsA: 0,
    currentGamePointsB: 0,
    gamesWonByA: 0,
    gamesWonByB: 0,
    servingPlayer: 'a',
    servesSinceLastChange: 0,
    format: 'bo5',
    areSidesSwapped: false,
  };
}

export function gamesNeededForMatchWin(format: MatchFormat): number {
  if (format === 'bo1') return 1;
  if (format === 'bo3') return 2;
  if (format === 'bo5') return 3;
  return 4;
}

export function checkGameOver(score: MatchScore): PlayerSide | null {
  if (score.currentGamePointsA >= POINTS_TO_WIN_GAME && score.currentGamePointsA - score.currentGamePointsB >= MIN_POINT_LEAD) return 'a';
  if (score.currentGamePointsB >= POINTS_TO_WIN_GAME && score.currentGamePointsB - score.currentGamePointsA >= MIN_POINT_LEAD) return 'b';
  return null;
}

export function checkMatchOver(score: MatchScore): PlayerSide | null {
  const need = gamesNeededForMatchWin(score.format);
  if (score.gamesWonByA >= need) return 'a';
  if (score.gamesWonByB >= need) return 'b';
  return null;
}

export function checkGamePointOpportunity(score: MatchScore): PlayerSide | null {
  if (score.currentGamePointsA >= POINTS_TO_WIN_GAME - 1 && score.currentGamePointsA > score.currentGamePointsB) return 'a';
  if (score.currentGamePointsB >= POINTS_TO_WIN_GAME - 1 && score.currentGamePointsB > score.currentGamePointsA) return 'b';
  return null;
}

function isOneGameAway(leader: number, trailing: number, need: number): boolean {
  return leader >= need - 1 && leader > trailing;
}

function isAtGamePoint(leaderPoints: number, trailingPoints: number): boolean {
  return leaderPoints >= POINTS_TO_WIN_GAME - 1 && leaderPoints > trailingPoints;
}

export function checkMatchPointOpportunity(score: MatchScore): PlayerSide | null {
  const need = gamesNeededForMatchWin(score.format);
  if (isOneGameAway(score.gamesWonByA, score.gamesWonByB, need) && isAtGamePoint(score.currentGamePointsA, score.currentGamePointsB)) return 'a';
  if (isOneGameAway(score.gamesWonByB, score.gamesWonByA, need) && isAtGamePoint(score.currentGamePointsB, score.currentGamePointsA)) return 'b';
  return null;
}

export function awardPointToPlayer(score: MatchScore, side: PlayerSide): MatchScore {
  if (checkMatchOver(score)) return score;
  const next = { ...score };
  if (side === 'a') next.currentGamePointsA += 1;
  else next.currentGamePointsB += 1;
  next.servesSinceLastChange += 1;
  if (next.servesSinceLastChange >= 2) {
    next.servingPlayer = next.servingPlayer === 'a' ? 'b' : 'a';
    next.servesSinceLastChange = 0;
  }
  return next;
}

export function undoLastPoint(score: MatchScore, side: PlayerSide): MatchScore {
  if (checkMatchOver(score)) return score;
  const next = { ...score };
  if (side === 'a' && next.currentGamePointsA > 0) next.currentGamePointsA -= 1;
  else if (side === 'b' && next.currentGamePointsB > 0) next.currentGamePointsB -= 1;
  else return score;
  if (next.servesSinceLastChange > 0) next.servesSinceLastChange -= 1;
  return next;
}

export function concludeGame(score: MatchScore, gameWinner: PlayerSide): MatchScore {
  const next = { ...score };
  if (gameWinner === 'a') next.gamesWonByA += 1;
  else next.gamesWonByB += 1;
  next.currentGamePointsA = 0;
  next.currentGamePointsB = 0;
  next.servesSinceLastChange = 0;
  next.servingPlayer = next.servingPlayer === 'a' ? 'b' : 'a';
  return next;
}

export function swapPlayerSides(score: MatchScore): MatchScore {
  return {
    ...score,
    gamesWonByA: score.gamesWonByB,
    gamesWonByB: score.gamesWonByA,
    currentGamePointsA: 0,
    currentGamePointsB: 0,
    servesSinceLastChange: 0,
    areSidesSwapped: !score.areSidesSwapped,
  };
}

export function createCleanMatch(score: MatchScore): MatchScore {
  return { ...createInitialScore(), format: score.format };
}
