export interface PenaltyShootoutState {
  teamAName: string;
  teamBName: string;
  teamAScore: number;
  teamBScore: number;
  teamAShoots: ('scored' | 'missed' | 'pending')[];
  teamBShoots: ('scored' | 'missed' | 'pending')[];
  currentTurn: 'A' | 'B';
  currentRound: number;
  isFinished: boolean;
  winner: 'A' | 'B' | null;
  winReason: string | null;
  history: PenaltyShootoutState[];
}

export function createInitialState(teamAName = 'Team 1', teamBName = 'Team 2'): PenaltyShootoutState {
  return {
    teamAName,
    teamBName,
    teamAScore: 0,
    teamBScore: 0,
    teamAShoots: ['pending', 'pending', 'pending', 'pending', 'pending'],
    teamBShoots: ['pending', 'pending', 'pending', 'pending', 'pending'],
    currentTurn: 'A',
    currentRound: 1,
    isFinished: false,
    winner: null,
    winReason: null,
    history: [],
  };
}

export function recordShot(state: PenaltyShootoutState, result: 'scored' | 'missed'): PenaltyShootoutState {
  if (state.isFinished) return state;

  const previousState: PenaltyShootoutState = { ...state, history: [] };
  const nextState: PenaltyShootoutState = {
    ...state,
    teamAShoots: [...state.teamAShoots],
    teamBShoots: [...state.teamBShoots],
    history: [...state.history, previousState],
  };

  if (state.currentTurn === 'A') {
    if (state.currentRound <= nextState.teamAShoots.length) {
      nextState.teamAShoots[state.currentRound - 1] = result;
    } else {
      nextState.teamAShoots.push(result);
    }
    if (result === 'scored') nextState.teamAScore += 1;
    nextState.currentTurn = 'B';
  } else {
    if (state.currentRound <= nextState.teamBShoots.length) {
      nextState.teamBShoots[state.currentRound - 1] = result;
    } else {
      nextState.teamBShoots.push(result);
    }
    if (result === 'scored') nextState.teamBScore += 1;
    nextState.currentTurn = 'A';
    nextState.currentRound += 1;
  }

  return evaluateShootoutStatus(nextState);
}

export function undoShot(state: PenaltyShootoutState): PenaltyShootoutState {
  if (state.history.length === 0) return state;
  const lastState = state.history[state.history.length - 1];
  return {
    ...lastState,
    history: state.history.slice(0, -1),
  };
}

function checkUnreachableLead(scoreA: number, scoreB: number, shotsRemainingA: number, shotsRemainingB: number): 'A' | 'B' | null {
  if (scoreA > scoreB + shotsRemainingB) return 'A';
  if (scoreB > scoreA + shotsRemainingA) return 'B';
  return null;
}

function checkRegularPhaseWinner(state: PenaltyShootoutState, round: number): PenaltyShootoutState | null {
  const shotsRemainingA = 5 - round;
  const shotsRemainingB = 5 - (state.currentTurn === 'A' ? round : round - 1);

  const unreachableWinner = checkUnreachableLead(state.teamAScore, state.teamBScore, shotsRemainingA, shotsRemainingB);
  if (unreachableWinner) {
    return { ...state, isFinished: true, winner: unreachableWinner, winReason: 'Unreachable Lead' };
  }

  if (state.currentRound === 6 && state.currentTurn === 'A') {
    if (state.teamAScore !== state.teamBScore) {
      const winner = state.teamAScore > state.teamBScore ? 'A' : 'B';
      return { ...state, isFinished: true, winner, winReason: 'Regular Rounds' };
    }
    state.teamAShoots.push('pending');
    state.teamBShoots.push('pending');
  }
  return null;
}

function checkSuddenDeathWinner(state: PenaltyShootoutState): PenaltyShootoutState | null {
  const scoreA = state.teamAScore;
  const scoreB = state.teamBScore;

  if (state.currentTurn === 'A' && state.teamAShoots.length === state.teamBShoots.length) {
    if (scoreA > scoreB) {
      return { ...state, isFinished: true, winner: 'A', winReason: 'Sudden Death' };
    }
    if (scoreB > scoreA) {
      return { ...state, isFinished: true, winner: 'B', winReason: 'Sudden Death' };
    }
    state.teamAShoots.push('pending');
    state.teamBShoots.push('pending');
  }
  return null;
}

export function evaluateShootoutStatus(state: PenaltyShootoutState): PenaltyShootoutState {
  const round = state.currentTurn === 'B' ? state.currentRound : state.currentRound - 1;
  if (round <= 5) {
    const regularResult = checkRegularPhaseWinner(state, round);
    if (regularResult) return regularResult;
  } else {
    const suddenResult = checkSuddenDeathWinner(state);
    if (suddenResult) return suddenResult;
  }
  return state;
}
