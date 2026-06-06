export interface TeamState {
  score: number;
  fouls: number;
  timeouts: number;
}

export interface StreetballMatchState {
  teamA: TeamState;
  teamB: TeamState;
  possession: 'a' | 'b';
  clearBallNeeded: boolean;
  isOvertime: boolean;
  winner: 'a' | 'b' | null;
  gameTimeMs: number;
  gameTimeActive: boolean;
  shotClockMs: number;
  shotClockActive: boolean;
  timeoutTimeMs: number;
  timeoutActive: boolean;
  timeoutTeam: 'a' | 'b' | null;
}

export function createInitialTeam(): TeamState {
  return {
    score: 0,
    fouls: 0,
    timeouts: 1,
  };
}

export function createInitialMatch(): StreetballMatchState {
  return {
    teamA: createInitialTeam(),
    teamB: createInitialTeam(),
    possession: 'a',
    clearBallNeeded: false,
    isOvertime: false,
    winner: null,
    gameTimeMs: 10 * 60 * 1000,
    gameTimeActive: false,
    shotClockMs: 12 * 1000,
    shotClockActive: false,
    timeoutTimeMs: 0,
    timeoutActive: false,
    timeoutTeam: null,
  };
}

export function checkWinner(state: StreetballMatchState): void {
  if (state.winner) return;
  if (!state.isOvertime) {
    if (state.teamA.score >= 21) {
      state.winner = 'a';
      state.gameTimeActive = false;
      state.shotClockActive = false;
    } else if (state.teamB.score >= 21) {
      state.winner = 'b';
      state.gameTimeActive = false;
      state.shotClockActive = false;
    }
  } else {
    if (state.teamA.score >= 2) {
      state.winner = 'a';
      state.gameTimeActive = false;
      state.shotClockActive = false;
    } else if (state.teamB.score >= 2) {
      state.winner = 'b';
      state.gameTimeActive = false;
      state.shotClockActive = false;
    }
  }
}

export function processPoint(state: StreetballMatchState, team: 'a' | 'b', points: number): StreetballMatchState {
  if (state.winner) return state;
  const next = JSON.parse(JSON.stringify(state)) as StreetballMatchState;
  const t = team === 'a' ? next.teamA : next.teamB;
  t.score += points;
  checkWinner(next);
  if (!next.winner) {
    next.shotClockMs = 12 * 1000;
  }
  return next;
}

export function processFoul(state: StreetballMatchState, team: 'a' | 'b'): StreetballMatchState {
  if (state.winner) return state;
  const next = JSON.parse(JSON.stringify(state)) as StreetballMatchState;
  const t = team === 'a' ? next.teamA : next.teamB;
  t.fouls += 1;
  return next;
}

export function togglePossession(state: StreetballMatchState): StreetballMatchState {
  if (state.winner) return state;
  const next = JSON.parse(JSON.stringify(state)) as StreetballMatchState;
  next.possession = next.possession === 'a' ? 'b' : 'a';
  next.clearBallNeeded = true;
  next.shotClockMs = 12 * 1000;
  return next;
}

export function clearBall(state: StreetballMatchState): StreetballMatchState {
  const next = JSON.parse(JSON.stringify(state)) as StreetballMatchState;
  next.clearBallNeeded = false;
  return next;
}

export function triggerTimeout(state: StreetballMatchState, team: 'a' | 'b'): StreetballMatchState {
  if (state.winner || state.timeoutActive) return state;
  const next = JSON.parse(JSON.stringify(state)) as StreetballMatchState;
  const t = team === 'a' ? next.teamA : next.teamB;
  if (t.timeouts > 0) {
    t.timeouts -= 1;
    next.timeoutActive = true;
    next.timeoutTimeMs = 30 * 1000;
    next.timeoutTeam = team;
    next.gameTimeActive = false;
    next.shotClockActive = false;
  }
  return next;
}

function tickTimeout(next: StreetballMatchState, elapsedMs: number): void {
  next.timeoutTimeMs = Math.max(0, next.timeoutTimeMs - elapsedMs);
  if (next.timeoutTimeMs === 0) {
    next.timeoutActive = false;
    next.timeoutTeam = null;
  }
}

function tickGameClock(next: StreetballMatchState, elapsedMs: number): void {
  next.gameTimeMs = Math.max(0, next.gameTimeMs - elapsedMs);
  if (next.gameTimeMs === 0) {
    next.gameTimeActive = false;
    next.shotClockActive = false;
    if (next.teamA.score === next.teamB.score) {
      next.isOvertime = true;
      next.teamA.score = 0;
      next.teamB.score = 0;
    } else {
      next.winner = next.teamA.score > next.teamB.score ? 'a' : 'b';
    }
  }
}

export function tickGame(state: StreetballMatchState, elapsedMs: number): StreetballMatchState {
  const next = JSON.parse(JSON.stringify(state)) as StreetballMatchState;
  if (next.winner) return next;
  if (next.timeoutActive) {
    tickTimeout(next, elapsedMs);
    return next;
  }
  if (next.gameTimeActive) {
    tickGameClock(next, elapsedMs);
    if (next.shotClockActive) {
      next.shotClockMs = Math.max(0, next.shotClockMs - elapsedMs);
      if (next.shotClockMs === 0) {
        next.shotClockActive = false;
        next.gameTimeActive = false;
      }
    }
  }
  return next;
}
