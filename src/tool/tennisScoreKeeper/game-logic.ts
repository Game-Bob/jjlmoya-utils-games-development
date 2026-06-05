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

export function getPointLabel(points: number, opponentPoints: number, inTiebreak: boolean): string {
  if (inTiebreak) {
    return String(points);
  }
  if (points === 0) return '0';
  if (points === 1) return '15';
  if (points === 2) return '30';
  if (points === 3) return '40';
  if (points > 3) {
    if (points === opponentPoints) return '40';
    if (points - opponentPoints === 1) return 'Ad';
  }
  return '0';
}

export function checkMatchOver(score: MatchScore): PlayerSide | null {
  const need = setsNeededForMatchWin(score.format);
  if (score.setsWonA >= need) return 'a';
  if (score.setsWonB >= need) return 'b';
  return null;
}

export function checkSetOver(score: MatchScore): PlayerSide | null {
  const a = score.gamesWonInCurrentSetA;
  const b = score.gamesWonInCurrentSetB;
  if (score.inTiebreak) {
    if (score.tiebreakPointsA >= 7 && score.tiebreakPointsA - score.tiebreakPointsB >= 2) return 'a';
    if (score.tiebreakPointsB >= 7 && score.tiebreakPointsB - score.tiebreakPointsA >= 2) return 'b';
  } else {
    if (a >= 6 && a - b >= 2) return 'a';
    if (b >= 6 && b - a >= 2) return 'b';
  }
  return null;
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

export function checkPointWinnerOpportunity(score: MatchScore): PlayerSide | null {
  if (checkMatchOver(score)) return null;
  if (score.inTiebreak) {
    const a = score.tiebreakPointsA;
    const b = score.tiebreakPointsB;
    if (a >= 6 && a > b) return 'a';
    if (b >= 6 && b > a) return 'b';
    return null;
  }
  const a = score.currentGamePointsA;
  const b = score.currentGamePointsB;
  if (a >= 3 && a > b) return 'a';
  if (b >= 3 && b > a) return 'b';
  return null;
}

export function isSetPoint(score: MatchScore): PlayerSide | null {
  const opp = checkPointWinnerOpportunity(score);
  if (!opp) return null;
  const gA = score.gamesWonInCurrentSetA;
  const gB = score.gamesWonInCurrentSetB;
  if (score.inTiebreak) {
    return opp;
  }
  if (opp === 'a' && ((gA === 5 && gB <= 4) || (gA === 6 && gB === 5))) return 'a';
  if (opp === 'b' && ((gB === 5 && gA <= 4) || (gB === 6 && gA === 5))) return 'b';
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

export function awardPointToPlayer(score: MatchScore, side: PlayerSide): MatchScore {
  if (checkMatchOver(score)) return score;
  const next = { ...score };
  if (next.inTiebreak) {
    if (side === 'a') next.tiebreakPointsA += 1;
    else next.tiebreakPointsB += 1;
    const totalPoints = next.tiebreakPointsA + next.tiebreakPointsB;
    if (totalPoints % 2 === 1) {
      next.servingPlayer = next.servingPlayer === 'a' ? 'b' : 'a';
    } else {
      next.servingPlayer = ((totalPoints / 2) % 2 === 1)
        ? (next.firstServerOfSet === 'a' ? 'b' : 'a')
        : next.firstServerOfSet;
    }
  } else {
    if (side === 'a') next.currentGamePointsA += 1;
    else next.currentGamePointsB += 1;
  }
  return next;
}

export function undoLastPoint(score: MatchScore, side: PlayerSide): MatchScore {
  if (checkMatchOver(score)) return score;
  const next = { ...score };
  if (next.inTiebreak) {
    if (side === 'a' && next.tiebreakPointsA > 0) next.tiebreakPointsA -= 1;
    else if (side === 'b' && next.tiebreakPointsB > 0) next.tiebreakPointsB -= 1;
    else return score;
    const totalPoints = next.tiebreakPointsA + next.tiebreakPointsB;
    if (totalPoints % 2 === 1) {
      next.servingPlayer = next.servingPlayer === 'a' ? 'b' : 'a';
    } else {
      next.servingPlayer = ((totalPoints / 2) % 2 === 1)
        ? (next.firstServerOfSet === 'a' ? 'b' : 'a')
        : next.firstServerOfSet;
    }
  } else {
    if (side === 'a' && next.currentGamePointsA > 0) next.currentGamePointsA -= 1;
    else if (side === 'b' && next.currentGamePointsB > 0) next.currentGamePointsB -= 1;
    else return score;
  }
  return next;
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

export function concludeSet(score: MatchScore, setWinner: PlayerSide): MatchScore {
  const next = { ...score };
  const historyItem: SetScore = {
    gamesA: next.gamesWonInCurrentSetA,
    gamesB: next.gamesWonInCurrentSetB,
  };
  if (next.inTiebreak) {
    historyItem.tiebreakPointsA = next.tiebreakPointsA;
    historyItem.tiebreakPointsB = next.tiebreakPointsB;
    if (setWinner === 'a') {
      historyItem.gamesA = 7;
      historyItem.gamesB = 6;
    } else {
      historyItem.gamesA = 6;
      historyItem.gamesB = 7;
    }
  }
  next.setHistory = [...next.setHistory, historyItem];
  if (setWinner === 'a') {
    next.setsWonA += 1;
  } else {
    next.setsWonB += 1;
  }
  next.gamesWonInCurrentSetA = 0;
  next.gamesWonInCurrentSetB = 0;
  next.currentGamePointsA = 0;
  next.currentGamePointsB = 0;
  next.inTiebreak = false;
  next.tiebreakPointsA = 0;
  next.tiebreakPointsB = 0;
  next.firstServerOfSet = next.firstServerOfSet === 'a' ? 'b' : 'a';
  next.servingPlayer = next.firstServerOfSet;
  return next;
}

export function createCleanMatch(score: MatchScore): MatchScore {
  return { ...createInitialScore(), format: score.format };
}
