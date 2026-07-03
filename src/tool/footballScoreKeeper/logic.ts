import type { FootballScoreKeeperUI } from './ui';

export type TeamSide = 'home' | 'away';

interface MatchState {
  home: number;
  away: number;
}

const STORAGE_KEY = 'fk_match_state';

function loadState(): MatchState | null {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return null;
    const parsed = JSON.parse(saved);
    if (typeof parsed.home === 'number' && typeof parsed.away === 'number') return parsed;
    if (parsed.home && typeof parsed.home.goals === 'number') {
      return { home: parsed.home.goals, away: parsed.away.goals };
    }
    return null;
  } catch {
    return null;
  }
}

function saveState(s: MatchState): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
}

function initialState(): MatchState {
  return { home: 0, away: 0 };
}

function el(id: string): HTMLElement | null {
  return document.getElementById(id);
}

const SCORE_ANIMS = ['fk-score-boom', 'fk-score-rise', 'fk-score-ball', 'fk-score-glow', 'fk-score-quake', 'fk-score-wave', 'fk-score-warp', 'fk-score-breath'];
const TEAM_ANIMS = ['fk-team-terremoto', 'fk-team-elevate', 'fk-team-flash'];
const PARTICLE_TEXTS = ['+1', 'GOAL!', 'SIUUU', '!', 'YES', 'OLE', 'VAMOS', 'BOOM'];

function rand<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function animScore(score: HTMLElement, prefix: string): void {
  score.className = `fk-score fk-score-${prefix}`;
  requestAnimationFrame(() => score.classList.add(rand(SCORE_ANIMS)));
}

function animTeam(teamEl: HTMLElement, prefix: string): void {
  teamEl.className = `fk-team fk-team-${prefix}`;
  requestAnimationFrame(() => teamEl.classList.add(rand(TEAM_ANIMS)));
}

function spawnParticles(container: HTMLElement, prefix: string): void {
  for (let i = 0; i < 10; i++) {
    const p = document.createElement('div');
    p.className = `fk-p fk-p-${prefix}`;
    p.textContent = rand(PARTICLE_TEXTS);
    p.style.left = `${Math.random() * 100}%`;
    p.style.top = `${Math.random() * 100}%`;
    p.style.fontSize = `${0.8 + Math.random() * 1.5}rem`;
    p.style.transform = `rotate(${Math.random() * 60 - 30}deg)`;
    p.style.animationDelay = `${i * 0.05}s`;
    container.appendChild(p);
    setTimeout(() => p.remove(), 1000 + i * 50);
  }
}

function retrigger(el: HTMLElement, cls: string): void {
  el.classList.remove(cls);
  requestAnimationFrame(() => el.classList.add(cls));
}

function explodeGoal(team: TeamSide): void {
  const p = team === 'home' ? 'a' : 'b';
  const score = el(`fk-score-${p}`);
  if (score) animScore(score, p);
  const panel = el(`fk-team-${p}`);
  if (panel) {
    animTeam(panel, p);
    const pbtn = panel.querySelector('.fk-btn-plus') as HTMLElement;
    if (pbtn) retrigger(pbtn, 'fk-btn-plus-pop');
  }
  const flash = el(`fk-flash-${p}`);
  if (flash) retrigger(flash, 'fk-goal-flash-on');
  const gtext = el(`fk-goal-text-${p}`);
  if (gtext) retrigger(gtext, 'fk-goal-text-show');
  const pe = el(`fk-particles-${p}`);
  if (pe) spawnParticles(pe, p);
}

function showWinner(name: string, h: number, a: number): void {
  const w = el('fk-winner');
  const n = el('fk-winner-team');
  const s = el('fk-winner-score');
  if (!w || !n || !s) return;
  n.textContent = name;
  s.textContent = `${h} \u2212 ${a}`;
  w.classList.add('fk-winner-on');
  spawnConfetti();
}

function hideWinner(): void {
  el('fk-winner')?.classList.remove('fk-winner-on');
}

function spawnConfetti(): void {
  const c = el('fk-confetti');
  if (!c) return;
  const colors = ['#e74c3c', '#f1c40f', '#3498db', '#2ecc71', '#9b59b6', '#e67e22', '#1abc9c'];
  for (let i = 0; i < 80; i++) {
    const d = document.createElement('div');
    d.className = 'fk-c';
    d.style.left = `${Math.random() * 100}%`;
    d.style.background = colors[Math.floor(Math.random() * colors.length)];
    d.style.width = `${4 + Math.random() * 8}px`;
    d.style.height = `${4 + Math.random() * 8}px`;
    d.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    d.style.animationDuration = `${2 + Math.random() * 4}s`;
    d.style.animationDelay = `${Math.random() * 1}s`;
    c.appendChild(d);
  }
  setTimeout(() => { c.innerHTML = ''; }, 7000);
}

function getNames(t: FootballScoreKeeperUI): void {
  const a = document.getElementById('fk-name-a') as HTMLInputElement;
  const b = document.getElementById('fk-name-b') as HTMLInputElement;
  if (a) t.playerA = a.value || 'Local';
  if (b) t.playerB = b.value || 'Visitante';
}

export interface FootballAPI {
  addGoal: (team: TeamSide) => void;
  minusGoal: (team: TeamSide) => void;
  finishMatch: () => void;
  reset: () => void;
  confirmReset: () => void;
  cancelReset: () => void;
  toggleFullscreen: () => void;
}

function addGoal(get: () => MatchState, team: TeamSide, t: FootballScoreKeeperUI, update: (s: MatchState) => void): void {
  const next = { ...get() };
  if (team === 'home') next.home += 1;
  else next.away += 1;
  update(next);
  explodeGoal(team);
}

function removeGoal(get: () => MatchState, team: TeamSide, update: (s: MatchState) => void): void {
  const next = { ...get() };
  if (team === 'home' && next.home > 0) next.home -= 1;
  else if (team === 'away' && next.away > 0) next.away -= 1;
  else return;
  update(next);
}

function makeAPI(get: () => MatchState, t: FootballScoreKeeperUI, update: (s: MatchState) => void): FootballAPI {
  return {
    addGoal(team) { addGoal(get, team, t, update); },
    minusGoal(team) { removeGoal(get, team, update); },
    finishMatch() {
      const s = get();
      getNames(t);
      let winner = 'Draw';
      if (s.home > s.away) winner = t.playerA;
      else if (s.away > s.home) winner = t.playerB;
      showWinner(winner, s.home, s.away);
    },
    reset() { el('fk-modal')?.classList.add('fk-modal-on'); },
    confirmReset() { update(initialState()); el('fk-modal')?.classList.remove('fk-modal-on'); },
    cancelReset() { el('fk-modal')?.classList.remove('fk-modal-on'); },
    toggleFullscreen() {
      const card = el('fk-card');
      if (!card) return;
      if (document.fullscreenElement) { document.exitFullscreen(); }
      else { card.requestFullscreen(); }
    },
  };
}

function bind(api: FootballAPI): void {
  const A: Record<string, () => void> = {
    'data-goal-a': () => api.addGoal('home'), 'data-goal-b': () => api.addGoal('away'),
    'data-minus-a': () => api.minusGoal('home'), 'data-minus-b': () => api.minusGoal('away'),
    'data-finish': () => api.finishMatch(),
    'data-reset': () => api.reset(), 'data-fs': () => api.toggleFullscreen(),
  };
  document.addEventListener('click', (e) => {
    const t = e.target as HTMLElement;
    if (t.closest('[data-close-winner]')) { hideWinner(); return; }
    if (t.closest('#fk-modal-cancel')) { api.cancelReset(); return; }
    if (t.closest('#fk-modal-confirm')) { api.confirmReset(); return; }
    for (const [k, fn] of Object.entries(A)) { if (t.closest(`[${k}]`)) { fn(); return; } }
  });
}

export function initFootballScoreKeeper(): void {
  const card = el('fk-card');
  if (!card) return;
  const t: FootballScoreKeeperUI = JSON.parse(card.getAttribute('data-fk-ui') || '{}') as FootballScoreKeeperUI;
  let state = loadState() || initialState();
  saveState(state);
  const render = () => {
    const sa = el('fk-score-a'); const sb = el('fk-score-b');
    if (sa) sa.textContent = String(state.home);
    if (sb) sb.textContent = String(state.away);
  };
  render();
  const api = makeAPI(() => state, t, (next) => { state = next; saveState(state); render(); });
  (window as unknown as Record<string, FootballAPI>).football = api;
  bind(api);
}
