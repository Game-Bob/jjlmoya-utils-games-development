export type TeamKey = 'home' | 'away';

export type EventType = 'try' | 'conv' | 'missed-conv' | 'pen' | 'drop' | 'sinbin' | 'reset';

export interface HistoryEvent {
  type: EventType;
  team: TeamKey;
  label: string;
  minute: string;
}

export interface TeamScore {
  tries: number;
  conversions: number;
  missedConversions: number;
  penalties: number;
  dropGoals: number;
}

export interface SinBinEntry {
  id: number;
  player: string;
  remaining: number;
  total: number;
}

export interface MatchState {
  home: TeamScore;
  away: TeamScore;
  half: 1 | 2;
  clockRunning: boolean;
  elapsed: number;
  sinBin: SinBinEntry[];
  matchStarted: boolean;
  matchEnded: boolean;
  history: HistoryEvent[];
}

export function createTeamScore(): TeamScore {
  return { tries: 0, conversions: 0, missedConversions: 0, penalties: 0, dropGoals: 0 };
}

export function createInitialState(): MatchState {
  return {
    home: createTeamScore(),
    away: createTeamScore(),
    half: 1,
    clockRunning: false,
    elapsed: 0,
    sinBin: [],
    matchStarted: false,
    matchEnded: false,
    history: [],
  };
}

export function teamTotal(ts: TeamScore): number {
  return ts.tries * 5 + ts.conversions * 2 + ts.penalties * 3 + ts.dropGoals * 3;
}

function fmtMin(elapsed: number): string {
  return `Min ${Math.floor(elapsed / 60)}`;
}

function pushEvent(s: MatchState, type: EventType, team: TeamKey, label: string) {
  s.history.push({ type, team, label, minute: fmtMin(s.elapsed) });
}

export function scoreTry(state: MatchState, team: TeamKey): MatchState {
  const s = structuredClone(state);
  if (team === 'home') s.home.tries++; else s.away.tries++;
  pushEvent(s, 'try', team, 'TRY');
  return s;
}

export function scoreConversion(state: MatchState, team: TeamKey, success: boolean): MatchState {
  const s = structuredClone(state);
  if (success) {
    if (team === 'home') s.home.conversions++; else s.away.conversions++;
    pushEvent(s, 'conv', team, 'CONV +2');
  } else {
    if (team === 'home') s.home.missedConversions++; else s.away.missedConversions++;
    pushEvent(s, 'missed-conv', team, 'CONV miss');
  }
  return s;
}

export function scorePenalty(state: MatchState, team: TeamKey): MatchState {
  const s = structuredClone(state);
  if (team === 'home') s.home.penalties++; else s.away.penalties++;
  pushEvent(s, 'pen', team, 'PEN +3');
  return s;
}

export function scoreDropGoal(state: MatchState, team: TeamKey): MatchState {
  const s = structuredClone(state);
  if (team === 'home') s.home.dropGoals++; else s.away.dropGoals++;
  pushEvent(s, 'drop', team, 'DG +3');
  return s;
}

export function addSinBin(state: MatchState, player: string, duration: number): MatchState {
  const s = structuredClone(state);
  s.sinBin.push({ id: Date.now(), player, remaining: duration, total: duration });
  pushEvent(s, 'sinbin', 'home', `${player} SIN BIN`);
  return s;
}

export function tickSinBin(state: MatchState, delta: number): MatchState {
  const s = structuredClone(state);
  s.sinBin = s.sinBin
    .map((e) => ({ ...e, remaining: Math.max(0, e.remaining - delta) }))
    .filter((e) => e.remaining > 0);
  return s;
}

export function tickClock(state: MatchState, delta: number): MatchState {
  const s = structuredClone(state);
  if (!s.clockRunning || s.matchEnded) return s;
  s.elapsed += delta;
  if (s.elapsed >= 2400 && s.half === 1) {
    s.elapsed = 2400;
    s.clockRunning = false;
  }
  if (s.elapsed >= 4800) {
    s.elapsed = 4800;
    s.clockRunning = false;
    s.matchEnded = true;
  }
  return tickSinBin(s, delta);
}

export function startMatch(state: MatchState): MatchState {
  return { ...state, clockRunning: true, matchStarted: true };
}

export function toggleClock(state: MatchState): MatchState {
  return { ...state, clockRunning: !state.clockRunning };
}

export function undoLast(state: MatchState): MatchState {
  const s = structuredClone(state);
  const ev = s.history.pop();
  if (!ev) return s;
  const ts = ev.team === 'home' ? s.home : s.away;
  if (ev.type === 'try') ts.tries = Math.max(0, ts.tries - 1);
  else if (ev.type === 'conv') ts.conversions = Math.max(0, ts.conversions - 1);
  else if (ev.type === 'missed-conv') ts.missedConversions = Math.max(0, ts.missedConversions - 1);
  else if (ev.type === 'pen') ts.penalties = Math.max(0, ts.penalties - 1);
  else if (ev.type === 'drop') ts.dropGoals = Math.max(0, ts.dropGoals - 1);
  return s;
}

export function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  return `${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}

export function formatSinBinTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  return `${m}:${String(sec).padStart(2, '0')}`;
}

export function bonusPoints(ts: TeamScore): string[] {
  const b: string[] = [];
  if (ts.tries >= 4) b.push('TBP');
  return b;
}

export function losingBonus(home: TeamScore, away: TeamScore, team: TeamKey): boolean {
  const diff = Math.abs(teamTotal(home) - teamTotal(away));
  const losing = teamTotal(home) < teamTotal(away) ? 'home' : 'away';
  return losing === team && diff <= 7;
}
