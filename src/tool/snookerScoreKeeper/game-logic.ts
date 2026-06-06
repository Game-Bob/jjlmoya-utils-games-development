export interface SnookerMatchState {
  scoreA: number;
  scoreB: number;
  activePlayer: 'a' | 'b';
  currentBreak: number;
  breakBalls: string[];
  redsOnTable: number;
  expecting: 'red' | 'color' | 'yellow' | 'green' | 'brown' | 'blue' | 'pink' | 'black' | 'ended';
  remainingPoints: number;
  status: 'normal' | 'safe' | 'need-snookers' | 'deciding-black';
  leader: 'a' | 'b' | null;
}

export function createInitialMatch(): SnookerMatchState {
  return {
    scoreA: 0,
    scoreB: 0,
    activePlayer: 'a',
    currentBreak: 0,
    breakBalls: [],
    redsOnTable: 15,
    expecting: 'red',
    remainingPoints: 147,
    status: 'normal',
    leader: null,
  };
}

const COLOR_VALUES: Record<string, number> = {
  red: 1,
  yellow: 2,
  green: 3,
  brown: 4,
  blue: 5,
  pink: 6,
  black: 7,
};

const SEQUENCE_ORDER = ['yellow', 'green', 'brown', 'blue', 'pink', 'black'];

function calculateRemainingPoints(
  reds: number,
  expecting: SnookerMatchState['expecting']
): number {
  if (reds > 0) {
    if (expecting === 'color') {
      return (reds * 8) + 34;
    }
    return (reds * 8) + 27;
  }
  const idx = SEQUENCE_ORDER.indexOf(expecting as string);
  if (idx === -1) {
    if (expecting === 'black') return 7;
    return 0;
  }
  let sum = 0;
  for (let i = idx; i < SEQUENCE_ORDER.length; i++) {
    sum += COLOR_VALUES[SEQUENCE_ORDER[i]];
  }
  return sum;
}

function getLeader(scoreA: number, scoreB: number): 'a' | 'b' | null {
  if (scoreA > scoreB) return 'a';
  if (scoreB > scoreA) return 'b';
  return null;
}

function determineStatus(
  scoreA: number,
  scoreB: number,
  rem: number,
  activePlayer: 'a' | 'b'
): SnookerMatchState['status'] {
  if (rem === 0) {
    return scoreA === scoreB ? 'deciding-black' : 'safe';
  }
  const diff = Math.abs(scoreA - scoreB);
  if (diff > rem) return 'safe';
  if (diff === rem) return 'normal';
  
  const activeScore = activePlayer === 'a' ? scoreA : scoreB;
  const opponentScore = activePlayer === 'a' ? scoreB : scoreA;
  if (opponentScore > activeScore + rem) return 'need-snookers';
  return 'normal';
}

function updateStatus(state: SnookerMatchState): SnookerMatchState {
  const rem = state.remainingPoints;
  return {
    ...state,
    leader: getLeader(state.scoreA, state.scoreB),
    status: determineStatus(state.scoreA, state.scoreB, rem, state.activePlayer),
  };
}

function getNextExpecting(
  color: string,
  redsOnTable: number,
  currentExpecting: SnookerMatchState['expecting']
): SnookerMatchState['expecting'] {
  if (color === 'red') return 'color';
  if (redsOnTable > 0) return 'red';
  
  const currentIdx = SEQUENCE_ORDER.indexOf(currentExpecting as string);
  if (currentIdx !== -1 && currentIdx < SEQUENCE_ORDER.length - 1) {
    return SEQUENCE_ORDER[currentIdx + 1] as SnookerMatchState['expecting'];
  }
  return 'ended';
}

export function potBall(state: SnookerMatchState, color: string): SnookerMatchState {
  const val = COLOR_VALUES[color] || 0;
  const isPlayerA = state.activePlayer === 'a';
  const nextScoreA = isPlayerA ? state.scoreA + val : state.scoreA;
  const nextScoreB = isPlayerA ? state.scoreB : state.scoreB + val;

  const nextBreak = state.currentBreak + val;
  const nextBreakBalls = [...state.breakBalls, color];

  const nextReds = color === 'red' ? Math.max(0, state.redsOnTable - 1) : state.redsOnTable;
  const nextExpecting = getNextExpecting(color, nextReds, state.expecting);
  const nextRem = calculateRemainingPoints(nextReds, nextExpecting);

  return updateStatus({
    ...state,
    scoreA: nextScoreA,
    scoreB: nextScoreB,
    currentBreak: nextBreak,
    breakBalls: nextBreakBalls,
    redsOnTable: nextReds,
    expecting: nextExpecting,
    remainingPoints: nextRem,
  });
}

export function endTurn(state: SnookerMatchState): SnookerMatchState {
  const nextPlayer = state.activePlayer === 'a' ? 'b' : 'a';
  let nextExpecting = state.expecting;
  if (state.redsOnTable > 0) {
    nextExpecting = 'red';
  }
  const nextRem = calculateRemainingPoints(state.redsOnTable, nextExpecting);

  return updateStatus({
    ...state,
    activePlayer: nextPlayer,
    currentBreak: 0,
    breakBalls: [],
    expecting: nextExpecting,
    remainingPoints: nextRem,
  });
}

export function commitFoul(state: SnookerMatchState, penaltyPoints: number): SnookerMatchState {
  let nextScoreA = state.scoreA;
  let nextScoreB = state.scoreB;
  if (state.activePlayer === 'a') {
    nextScoreB += penaltyPoints;
  } else {
    nextScoreA += penaltyPoints;
  }

  const nextPlayer = state.activePlayer === 'a' ? 'b' : 'a';
  let nextExpecting = state.expecting;
  if (state.redsOnTable > 0) {
    nextExpecting = 'red';
  }
  const nextRem = calculateRemainingPoints(state.redsOnTable, nextExpecting);

  return updateStatus({
    ...state,
    scoreA: nextScoreA,
    scoreB: nextScoreB,
    activePlayer: nextPlayer,
    currentBreak: 0,
    breakBalls: [],
    expecting: nextExpecting,
    remainingPoints: nextRem,
  });
}
