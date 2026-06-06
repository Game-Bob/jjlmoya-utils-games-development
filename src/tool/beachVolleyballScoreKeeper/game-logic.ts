export interface SetScore {
  a: number;
  b: number;
}

export interface BeachTeamState {
  name: string;
  player1: string;
  player2: string;
  score: number;
  setsWon: number;
  lastServer: 1 | 2;
}

export interface BeachVolleyballState {
  teamA: BeachTeamState;
  teamB: BeachTeamState;
  currentSet: number;
  servingTeam: 'a' | 'b';
  setHistory: SetScore[];
  winner: 'a' | 'b' | null;
  swappedCourt: boolean;
  showSwapWarning: boolean;
}

export function createInitialMatch(): BeachVolleyballState {
  return {
    teamA: {
      name: 'Team 1',
      player1: 'Player A1',
      player2: 'Player A2',
      score: 0,
      setsWon: 0,
      lastServer: 1,
    },
    teamB: {
      name: 'Team 2',
      player1: 'Player B1',
      player2: 'Player B2',
      score: 0,
      setsWon: 0,
      lastServer: 1,
    },
    currentSet: 1,
    servingTeam: 'a',
    setHistory: [],
    winner: null,
    swappedCourt: false,
    showSwapWarning: false,
  };
}

export function checkSetWinner(state: BeachVolleyballState): void {
  const targetScore = state.currentSet === 3 ? 15 : 21;
  const scoreA = state.teamA.score;
  const scoreB = state.teamB.score;

  if (scoreA >= targetScore && scoreA - scoreB >= 2) {
    state.teamA.setsWon += 1;
    state.setHistory.push({ a: scoreA, b: scoreB });
    if (state.teamA.setsWon === 2) {
      state.winner = 'a';
    } else {
      state.currentSet += 1;
      state.teamA.score = 0;
      state.teamB.score = 0;
      state.showSwapWarning = false;
    }
  } else if (scoreB >= targetScore && scoreB - scoreA >= 2) {
    state.teamB.setsWon += 1;
    state.setHistory.push({ a: scoreA, b: scoreB });
    if (state.teamB.setsWon === 2) {
      state.winner = 'b';
    } else {
      state.currentSet += 1;
      state.teamA.score = 0;
      state.teamB.score = 0;
      state.showSwapWarning = false;
    }
  }
}

export function checkSideSwapNeeded(state: BeachVolleyballState): void {
  if (state.winner) return;
  const total = state.teamA.score + state.teamB.score;
  if (total === 0) {
    state.showSwapWarning = false;
    return;
  }
  const interval = state.currentSet === 3 ? 5 : 7;
  if (total % interval === 0) {
    state.showSwapWarning = true;
  } else {
    state.showSwapWarning = false;
  }
}

export function processPoint(state: BeachVolleyballState, team: 'a' | 'b'): BeachVolleyballState {
  if (state.winner) return state;
  const next = JSON.parse(JSON.stringify(state)) as BeachVolleyballState;
  const oldServing = next.servingTeam;
  
  if (team === 'a') {
    next.teamA.score += 1;
    next.servingTeam = 'a';
  } else {
    next.teamB.score += 1;
    next.servingTeam = 'b';
  }

  if (next.servingTeam !== oldServing) {
    const activeTeam = next.servingTeam === 'a' ? next.teamA : next.teamB;
    activeTeam.lastServer = activeTeam.lastServer === 1 ? 2 : 1;
  }

  checkSetWinner(next);
  checkSideSwapNeeded(next);
  return next;
}

export function triggerManualSwap(state: BeachVolleyballState): BeachVolleyballState {
  const next = JSON.parse(JSON.stringify(state)) as BeachVolleyballState;
  next.swappedCourt = !next.swappedCourt;
  next.showSwapWarning = false;
  return next;
}
