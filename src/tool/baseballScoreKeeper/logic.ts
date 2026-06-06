export type BaseKey = 'first' | 'second' | 'third';

export interface CountState {
  balls: number;
  strikes: number;
  outs: number;
}

export interface TeamStats {
  runs: number;
  hits: number;
  errors: number;
}

export interface GameState {
  away: TeamStats;
  home: TeamStats;
  inning: number;
  topHalf: boolean;
  count: CountState;
  bases: BaseKey[];
  awayInnings: number[];
  homeInnings: number[];
  lastRun: number;
}

export function createTeamStats(): TeamStats {
  return { runs: 0, hits: 0, errors: 0 };
}

function emptyCount(): CountState {
  return { balls: 0, strikes: 0, outs: 0 };
}

export function createInitialState(): GameState {
  return {
    away: createTeamStats(),
    home: createTeamStats(),
    inning: 1,
    topHalf: true,
    count: emptyCount(),
    bases: [],
    awayInnings: [],
    homeInnings: [],
    lastRun: 0,
  };
}

function battingTeam(state: GameState): TeamStats {
  return state.topHalf ? state.away : state.home;
}

function halfInningRuns(state: GameState): number {
  const total = battingTeam(state).runs;
  const prev = state.lastRun;
  state.lastRun = total;
  return total - prev;
}

function endHalf(state: GameState) {
  const runs = halfInningRuns(state);
  if (state.topHalf) {
    state.awayInnings.push(runs);
  } else {
    state.homeInnings.push(runs);
  }
  state.count = emptyCount();
  state.bases = [];
  if (state.topHalf) {
    state.topHalf = false;
  } else {
    state.topHalf = true;
    state.inning++;
  }
}

export function recordStrike(state: GameState): GameState {
  const s = structuredClone(state);
  s.count.strikes++;
  if (s.count.strikes >= 3) {
    s.count.strikes = 0;
    s.count.balls = 0;
    s.count.outs++;
    if (s.count.outs >= 3) {
      s.count.outs = 0;
      endHalf(s);
    }
  }
  return s;
}

export function recordBall(state: GameState): GameState {
  const s = structuredClone(state);
  s.count.balls++;
  if (s.count.balls >= 4) {
    s.count.balls = 0;
    s.count.strikes = 0;
    s.bases.push('first');
  }
  return s;
}

export function recordFoul(state: GameState): GameState {
  const s = structuredClone(state);
  if (s.count.strikes < 2) {
    s.count.strikes++;
  }
  return s;
}

export function recordHit(state: GameState): GameState {
  const s = structuredClone(state);
  s.count = emptyCount();
  battingTeam(s).hits++;
  battingTeam(s).runs += s.bases.length + 1;
  s.bases = [];
  s.bases.push('first');
  return s;
}

export function recordOut(state: GameState): GameState {
  const s = structuredClone(state);
  s.count = emptyCount();
  s.count.outs++;
  if (s.count.outs >= 3) {
    s.count.outs = 0;
    endHalf(s);
  }
  return s;
}

export function formatInning(state: GameState): string {
  return state.topHalf ? `Top ${state.inning}` : `Bot ${state.inning}`;
}
