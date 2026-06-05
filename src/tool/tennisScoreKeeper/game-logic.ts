export type PlayerSide = 'a' | 'b';
export type MatchFormat = 'bo3' | 'bo5';

export interface SetScore {
  gamesA: number;
  gamesB: number;
  tiebreakPointsA?: number;
  tiebreakPointsB?: number;
}

export interface MatchScore {
  currentGamePointsA: number;
  currentGamePointsB: number;
  setHistory: SetScore[];
  gamesWonInCurrentSetA: number;
  gamesWonInCurrentSetB: number;
  setsWonA: number;
  setsWonB: number;
  servingPlayer: PlayerSide;
  format: MatchFormat;
  areSidesSwapped: boolean;
  inTiebreak: boolean;
  tiebreakPointsA: number;
  tiebreakPointsB: number;
  firstServerOfSet: PlayerSide;
}

export function createInitialScore(): MatchScore {
  return {
    currentGamePointsA: 0,
    currentGamePointsB: 0,
    setHistory: [],
    gamesWonInCurrentSetA: 0,
    gamesWonInCurrentSetB: 0,
    setsWonA: 0,
    setsWonB: 0,
    servingPlayer: 'a',
    format: 'bo3',
    areSidesSwapped: false,
    inTiebreak: false,
    tiebreakPointsA: 0,
    tiebreakPointsB: 0,
    firstServerOfSet: 'a',
  };
}

export function setsNeededForMatchWin(format: MatchFormat): number {
  return format === 'bo3' ? 2 : 3;
}

function standardPointLabel(points: number, opponentPoints: number): string {
  if (points <= 1) return points === 0 ? '0' : '15';
  if (points === 2) return '30';
  if (points === 3 || points === opponentPoints) return '40';
  if (points - opponentPoints === 1) return 'Ad';
  return '0';
}

export function getPointLabel(points: number, opponentPoints: number, inTiebreak: boolean): string {
  return inTiebreak ? String(points) : standardPointLabel(points, opponentPoints);
}

export function checkMatchOver(score: MatchScore): PlayerSide | null {
  const need = setsNeededForMatchWin(score.format);
  if (score.setsWonA >= need) return 'a';
  if (score.setsWonB >= need) return 'b';
  return null;
}

function tiebreakSetWinner(score: MatchScore): PlayerSide | null {
  if (score.tiebreakPointsA >= 7 && score.tiebreakPointsA - score.tiebreakPointsB >= 2) return 'a';
  if (score.tiebreakPointsB >= 7 && score.tiebreakPointsB - score.tiebreakPointsA >= 2) return 'b';
  return null;
}

function regularSetWinner(a: number, b: number): PlayerSide | null {
  if (a >= 6 && a - b >= 2) return 'a';
  if (b >= 6 && b - a >= 2) return 'b';
  return null;
}

export function checkSetOver(score: MatchScore): PlayerSide | null {
  if (score.inTiebreak) return tiebreakSetWinner(score);
  return regularSetWinner(score.gamesWonInCurrentSetA, score.gamesWonInCurrentSetB);
}

export function checkGameOver(score: MatchScore): PlayerSide | null {
  if (score.inTiebreak) {
    return null;
  }
  const a = score.currentGamePointsA;
  const b = score.currentGamePointsB;
  if (a >= 4 && a - b >= 2) return 'a';
  if (b >= 4 && b - a >= 2) return 'b';
  return null;
}

function tiebreakPointWinner(a: number, b: number): PlayerSide | null {
  if (a >= 6 && a > b) return 'a';
  if (b >= 6 && b > a) return 'b';
  return null;
}

function gamePointWinner(a: number, b: number): PlayerSide | null {
  if (a >= 3 && a > b) return 'a';
  if (b >= 3 && b > a) return 'b';
  return null;
}

export function checkPointWinnerOpportunity(score: MatchScore): PlayerSide | null {
  if (checkMatchOver(score)) return null;
  return score.inTiebreak
    ? tiebreakPointWinner(score.tiebreakPointsA, score.tiebreakPointsB)
    : gamePointWinner(score.currentGamePointsA, score.currentGamePointsB);
}

function isSetPointForSide(gamesLeader: number, gamesTrailer: number): boolean {
  return (gamesLeader === 5 && gamesTrailer <= 4) || (gamesLeader === 6 && gamesTrailer === 5);
}

export function isSetPoint(score: MatchScore): PlayerSide | null {
  const opp = checkPointWinnerOpportunity(score);
  if (!opp) return null;
  if (score.inTiebreak) return opp;
  const gA = score.gamesWonInCurrentSetA;
  const gB = score.gamesWonInCurrentSetB;
  if (opp === 'a' && isSetPointForSide(gA, gB)) return 'a';
  if (opp === 'b' && isSetPointForSide(gB, gA)) return 'b';
  return null;
}

export function isMatchPoint(score: MatchScore): PlayerSide | null {
  const sp = isSetPoint(score);
  if (!sp) return null;
  const need = setsNeededForMatchWin(score.format);
  if (sp === 'a' && score.setsWonA === need - 1) return 'a';
  if (sp === 'b' && score.setsWonB === need - 1) return 'b';
  return null;
}

function getTiebreakServer(firstServer: PlayerSide, totalPoints: number): PlayerSide {
  if (totalPoints % 2 === 1) return oppositeSide(firstServer);
  return ((totalPoints / 2) % 2 === 1) ? oppositeSide(firstServer) : firstServer;
}

function oppositeSide(side: PlayerSide): PlayerSide {
  return side === 'a' ? 'b' : 'a';
}

function awardTiebreakPoint(next: MatchScore, side: PlayerSide): void {
  if (side === 'a') next.tiebreakPointsA += 1;
  else next.tiebreakPointsB += 1;
  next.servingPlayer = getTiebreakServer(next.firstServerOfSet, next.tiebreakPointsA + next.tiebreakPointsB);
}

function awardRegularPoint(next: MatchScore, side: PlayerSide): void {
  if (side === 'a') next.currentGamePointsA += 1;
  else next.currentGamePointsB += 1;
}

export function awardPointToPlayer(score: MatchScore, side: PlayerSide): MatchScore {
  if (checkMatchOver(score)) return score;
  const next = { ...score };
  if (next.inTiebreak) awardTiebreakPoint(next, side);
  else awardRegularPoint(next, side);
  return next;
}

function undoLastTiebreakPoint(next: MatchScore, side: PlayerSide): boolean {
  if (side === 'a' && next.tiebreakPointsA > 0) next.tiebreakPointsA -= 1;
  else if (side === 'b' && next.tiebreakPointsB > 0) next.tiebreakPointsB -= 1;
  else return false;
  next.servingPlayer = getTiebreakServer(next.firstServerOfSet, next.tiebreakPointsA + next.tiebreakPointsB);
  return true;
}

function undoLastRegularPoint(next: MatchScore, side: PlayerSide): boolean {
  if (side === 'a' && next.currentGamePointsA > 0) next.currentGamePointsA -= 1;
  else if (side === 'b' && next.currentGamePointsB > 0) next.currentGamePointsB -= 1;
  else return false;
  return true;
}

export function undoLastPoint(score: MatchScore, side: PlayerSide): MatchScore {
  if (checkMatchOver(score)) return score;
  const next = { ...score };
  const ok = next.inTiebreak
    ? undoLastTiebreakPoint(next, side)
    : undoLastRegularPoint(next, side);
  return ok ? next : score;
}

export function concludeGame(score: MatchScore, gameWinner: PlayerSide): MatchScore {
  const next = { ...score };
  if (gameWinner === 'a') {
    next.gamesWonInCurrentSetA += 1;
  } else {
    next.gamesWonInCurrentSetB += 1;
  }
  next.currentGamePointsA = 0;
  next.currentGamePointsB = 0;
  next.servingPlayer = next.servingPlayer === 'a' ? 'b' : 'a';
  if (next.gamesWonInCurrentSetA === 6 && next.gamesWonInCurrentSetB === 6) {
    next.inTiebreak = true;
    next.tiebreakPointsA = 0;
    next.tiebreakPointsB = 0;
  }
  return next;
}

function makeSetHistoryItem(next: MatchScore, setWinner: PlayerSide): SetScore {
  const item: SetScore = {
    gamesA: next.gamesWonInCurrentSetA,
    gamesB: next.gamesWonInCurrentSetB,
  };
  if (next.inTiebreak) {
    item.tiebreakPointsA = next.tiebreakPointsA;
    item.tiebreakPointsB = next.tiebreakPointsB;
    item.gamesA = setWinner === 'a' ? 7 : 6;
    item.gamesB = setWinner === 'a' ? 6 : 7;
  }
  return item;
}

function resetSetState(next: MatchScore): void {
  next.gamesWonInCurrentSetA = 0;
  next.gamesWonInCurrentSetB = 0;
  next.currentGamePointsA = 0;
  next.currentGamePointsB = 0;
  next.inTiebreak = false;
  next.tiebreakPointsA = 0;
  next.tiebreakPointsB = 0;
  next.firstServerOfSet = next.firstServerOfSet === 'a' ? 'b' : 'a';
  next.servingPlayer = next.firstServerOfSet;
}

export function concludeSet(score: MatchScore, setWinner: PlayerSide): MatchScore {
  const next = { ...score };
  next.setHistory = [...next.setHistory, makeSetHistoryItem(next, setWinner)];
  if (setWinner === 'a') next.setsWonA += 1;
  else next.setsWonB += 1;
  resetSetState(next);
  return next;
}

export function createCleanMatch(score: MatchScore): MatchScore {
  return { ...createInitialScore(), format: score.format };
}
