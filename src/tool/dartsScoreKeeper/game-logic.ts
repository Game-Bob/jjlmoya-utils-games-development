export type PlayerKey = 'a' | 'b';
export type DartsFormat = '501' | '301';

export interface PlayerState {
  remainingScore: number;
  legsWon: number;
  setsWon: number;
  dartsThrown: number;
  totalPointsScored: number;
}

export interface DartThrow {
  multiplier: 1 | 2 | 3;
  value: number;
  label: string;
  points: number;
}

export interface TurnState {
  throws: DartThrow[];
  isBusted: boolean;
}

export interface TurnRecord {
  player: PlayerKey;
  scoreBefore: number;
  scoreAfter: number;
  points: number;
  isBusted: boolean;
}

export interface DartsMatchScore {
  format: DartsFormat;
  doubleOut: boolean;
  playerA: PlayerState;
  playerB: PlayerState;
  activePlayer: PlayerKey;
  turn: TurnState;
  winner: PlayerKey | null;
  history: TurnRecord[];
}

export function createInitialPlayer(score: number): PlayerState {
  return {
    remainingScore: score,
    legsWon: 0,
    setsWon: 0,
    dartsThrown: 0,
    totalPointsScored: 0,
  };
}

export function createInitialScore(format: DartsFormat = '501', doubleOut: boolean = true): DartsMatchScore {
  const start = format === '501' ? 501 : 301;
  return {
    format,
    doubleOut,
    playerA: createInitialPlayer(start),
    playerB: createInitialPlayer(start),
    activePlayer: 'a',
    turn: {
      throws: [],
      isBusted: false,
    },
    winner: null,
    history: [],
  };
}

const ALL_SINGLE_THROWS: { val: number; label: string; mult: 1 | 2 | 3 }[] = [];

function initThrows(): void {
  if (ALL_SINGLE_THROWS.length > 0) return;
  ALL_SINGLE_THROWS.push({ val: 0, label: 'Miss', mult: 1 });
  for (let i = 1; i <= 20; i++) {
    ALL_SINGLE_THROWS.push({ val: i, label: `S${i}`, mult: 1 });
    ALL_SINGLE_THROWS.push({ val: i * 2, label: `D${i}`, mult: 2 });
    ALL_SINGLE_THROWS.push({ val: i * 3, label: `T${i}`, mult: 3 });
  }
  ALL_SINGLE_THROWS.push({ val: 25, label: 'OB', mult: 1 });
  ALL_SINGLE_THROWS.push({ val: 50, label: 'DB', mult: 2 });
}

function getCheckout1(score: number): string[] | null {
  const t = ALL_SINGLE_THROWS.find((x) => x.mult === 2 && x.val === score);
  return t ? [t.label] : null;
}

function getCheckout2(score: number): string[] | null {
  for (const t1 of ALL_SINGLE_THROWS) {
    const rem = score - t1.val;
    if (rem <= 0) continue;
    const t2 = ALL_SINGLE_THROWS.find((t) => t.mult === 2 && t.val === rem);
    if (t2) {
      return [t1.label, t2.label];
    }
  }
  return null;
}

function getCheckout3(score: number): string[] | null {
  for (const t1 of ALL_SINGLE_THROWS) {
    const rem1 = score - t1.val;
    if (rem1 <= 0) continue;
    for (const t2 of ALL_SINGLE_THROWS) {
      const rem2 = rem1 - t2.val;
      if (rem2 <= 0) continue;
      const t3 = ALL_SINGLE_THROWS.find((t) => t.mult === 2 && t.val === rem2);
      if (t3) {
        return [t1.label, t2.label, t3.label];
      }
    }
  }
  return null;
}

export function getCheckoutSuggestion(score: number, darts: number): string[] | null {
  if (score < 2) return null;
  initThrows();
  if (darts === 1) return getCheckout1(score);
  if (darts === 2) return getCheckout2(score);
  if (darts === 3) return getCheckout3(score);
  return null;
}

function getThrowLabel(multiplier: 1 | 2 | 3, value: number): string {
  if (multiplier === 3) return `T${value}`;
  if (multiplier === 2) return `D${value}`;
  return `S${value}`;
}

function checkBustAndWin(nextRemaining: number, multiplier: number, doubleOut: boolean): { isBusted: boolean; isLegWon: boolean } {
  if (doubleOut) {
    if (nextRemaining < 0 || nextRemaining === 1) {
      return { isBusted: true, isLegWon: false };
    }
    if (nextRemaining === 0) {
      return { isBusted: multiplier !== 2, isLegWon: multiplier === 2 };
    }
  } else {
    if (nextRemaining < 0) {
      return { isBusted: true, isLegWon: false };
    }
    if (nextRemaining === 0) {
      return { isBusted: false, isLegWon: true };
    }
  }
  return { isBusted: false, isLegWon: false };
}

function resetLegScores(score: DartsMatchScore): void {
  const start = score.format === '501' ? 501 : 301;
  score.playerA.remainingScore = start;
  score.playerB.remainingScore = start;
  score.turn = {
    throws: [],
    isBusted: false,
  };
  score.activePlayer = 'a';
}

function handleLegWin(next: DartsMatchScore, player: PlayerState, currentTotalTurnPoints: number, t: DartThrow): void {
  next.turn.throws.push(t);
  player.remainingScore = 0;
  player.dartsThrown += next.turn.throws.length;
  player.totalPointsScored += currentTotalTurnPoints;
  player.legsWon += 1;
  if (player.legsWon >= 3) {
    next.winner = next.activePlayer;
  }
  if (!next.winner) {
    resetLegScores(next);
  }
}

function concludeTurn(score: DartsMatchScore): void {
  const player = score.activePlayer === 'a' ? score.playerA : score.playerB;
  const turnPoints = score.turn.isBusted ? 0 : score.turn.throws.reduce((acc, curr) => acc + curr.points, 0);
  const record: TurnRecord = {
    player: score.activePlayer,
    scoreBefore: player.remainingScore + turnPoints,
    scoreAfter: player.remainingScore,
    points: turnPoints,
    isBusted: score.turn.isBusted,
  };
  score.history.push(record);
  score.activePlayer = score.activePlayer === 'a' ? 'b' : 'a';
  score.turn = {
    throws: [],
    isBusted: false,
  };
}

export function processThrow(score: DartsMatchScore, multiplier: 1 | 2 | 3, value: number): DartsMatchScore {
  if (score.winner) return score;
  const next = { ...score };
  next.turn = { ...next.turn, throws: [...next.turn.throws] };
  const points = value * multiplier;
  const label = getThrowLabel(multiplier, value);
  const t: DartThrow = { multiplier, value, label, points };
  const player = next.activePlayer === 'a' ? next.playerA : next.playerB;
  const currentTotalTurnPoints = next.turn.throws.reduce((acc, curr) => acc + curr.points, 0) + points;
  const nextRemaining = player.remainingScore - currentTotalTurnPoints;
  const { isBusted, isLegWon } = checkBustAndWin(nextRemaining, multiplier, next.doubleOut);

  if (isBusted) {
    next.turn.isBusted = true;
    next.turn.throws.push(t);
    concludeTurn(next);
  } else if (isLegWon) {
    handleLegWin(next, player, currentTotalTurnPoints, t);
  } else {
    next.turn.throws.push(t);
    if (next.turn.throws.length === 3) {
      player.remainingScore = nextRemaining;
      player.dartsThrown += 3;
      player.totalPointsScored += currentTotalTurnPoints;
      concludeTurn(next);
    }
  }
  return next;
}
