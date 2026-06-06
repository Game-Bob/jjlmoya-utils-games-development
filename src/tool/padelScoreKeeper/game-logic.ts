export type TeamKey = 'a' | 'b';
export type MatchFormat = 'standard' | 'golden';

export interface TeamState {
  score: string;
  games: number;
  sets: number[];
  tiebreakPoints: number;
}

export interface PadelMatchState {
  format: MatchFormat;
  teamA: TeamState;
  teamB: TeamState;
  isTiebreak: boolean;
  isSuperTiebreak: boolean;
  isGoldPoint: boolean;
  receiverSelectionSide: 'left' | 'right' | null;
  serverTeam: TeamKey;
  serverPosition: 'deuce' | 'ad';
  endsSwapped: boolean;
  winner: TeamKey | null;
}

export function createInitialTeam(): TeamState {
  return {
    score: '0',
    games: 0,
    sets: [],
    tiebreakPoints: 0,
  };
}

export function createInitialMatch(format: MatchFormat = 'standard'): PadelMatchState {
  return {
    format,
    teamA: createInitialTeam(),
    teamB: createInitialTeam(),
    isTiebreak: false,
    isSuperTiebreak: false,
    isGoldPoint: false,
    receiverSelectionSide: null,
    serverTeam: 'a',
    serverPosition: 'deuce',
    endsSwapped: false,
    winner: null,
  };
}

function alternateServer(state: PadelMatchState): void {
  state.serverTeam = state.serverTeam === 'a' ? 'b' : 'a';
  state.serverPosition = 'deuce';
}

function checkEndsSwapAlert(state: PadelMatchState): boolean {
  if (state.isTiebreak) {
    const totalTbPoints = state.teamA.tiebreakPoints + state.teamB.tiebreakPoints;
    return totalTbPoints > 0 && totalTbPoints % 6 === 0;
  }
  const totalGames = state.teamA.games + state.teamB.games;
  return totalGames % 2 === 1;
}

function updateTiebreakServer(state: PadelMatchState): void {
  const totalTb = state.teamA.tiebreakPoints + state.teamB.tiebreakPoints;
  if (totalTb % 2 === 1) {
    state.serverTeam = state.serverTeam === 'a' ? 'b' : 'a';
    state.serverPosition = 'ad';
  } else {
    state.serverPosition = state.serverPosition === 'deuce' ? 'ad' : 'deuce';
  }
}

function concludeSet(state: PadelMatchState): void {
  state.teamA.sets.push(state.isTiebreak ? 7 : state.teamA.games);
  state.teamB.sets.push(state.isTiebreak ? 6 : state.teamB.games);
  state.teamA.games = 0;
  state.teamB.games = 0;
  state.teamA.tiebreakPoints = 0;
  state.teamB.tiebreakPoints = 0;
  state.isTiebreak = false;
  state.isSuperTiebreak = false;
  const setsWonA = state.teamA.sets.reduce((acc, v, idx) => acc + (v > state.teamB.sets[idx] ? 1 : 0), 0);
  const setsWonB = state.teamB.sets.reduce((acc, v, idx) => acc + (v > state.teamA.sets[idx] ? 1 : 0), 0);
  if (setsWonA >= 2) {
    state.winner = 'a';
  } else if (setsWonB >= 2) {
    state.winner = 'b';
  } else if (setsWonA === 1 && setsWonB === 1 && state.teamA.sets.length === 2) {
    state.isSuperTiebreak = true;
    state.isTiebreak = true;
  }
}

function handleTiebreakPoint(state: PadelMatchState, winner: TeamKey): void {
  const team = winner === 'a' ? state.teamA : state.teamB;
  const other = winner === 'a' ? state.teamB : state.teamA;
  team.tiebreakPoints += 1;
  updateTiebreakServer(state);
  const target = state.isSuperTiebreak ? 10 : 7;
  if (team.tiebreakPoints >= target && team.tiebreakPoints - other.tiebreakPoints >= 2) {
    concludeSet(state);
  }
}

function handleGameWin(state: PadelMatchState, winner: TeamKey): void {
  const team = winner === 'a' ? state.teamA : state.teamB;
  const other = winner === 'a' ? state.teamB : state.teamA;
  team.games += 1;
  state.teamA.score = '0';
  state.teamB.score = '0';
  state.isGoldPoint = false;
  state.receiverSelectionSide = null;
  alternateServer(state);
  const targetGames = state.format === 'golden' ? 4 : 6;
  if (team.games >= targetGames && team.games - other.games >= 2) {
    concludeSet(state);
  } else if (team.games === targetGames && other.games === targetGames) {
    state.isTiebreak = true;
  }
}

export function processReceiverSelection(state: PadelMatchState, side: 'left' | 'right'): PadelMatchState {
  const next = { ...state, teamA: { ...state.teamA }, teamB: { ...state.teamB } };
  next.receiverSelectionSide = side;
  return next;
}

function getNextScore(current: string): string {
  if (current === '0') return '15';
  if (current === '15') return '30';
  return '40';
}

function handleStandardPoint(next: PadelMatchState, winner: TeamKey): void {
  const team = winner === 'a' ? next.teamA : next.teamB;
  if (team.score === '40') {
    handleGameWin(next, winner);
  } else {
    team.score = getNextScore(team.score);
  }
  if (next.teamA.score === '40' && next.teamB.score === '40') {
    next.isGoldPoint = true;
  }
  if (!next.isGoldPoint && next.teamA.score !== '0') {
    next.serverPosition = next.serverPosition === 'deuce' ? 'ad' : 'deuce';
  }
}

export function processPoint(state: PadelMatchState, winner: TeamKey): PadelMatchState {
  if (state.winner) return state;
  const next = JSON.parse(JSON.stringify(state)) as PadelMatchState;
  if (next.isTiebreak) {
    handleTiebreakPoint(next, winner);
  } else {
    handleStandardPoint(next, winner);
  }
  next.endsSwapped = checkEndsSwapAlert(next);
  return next;
}
