import type { BeachVolleyballUI } from './ui';
import {
  type BeachVolleyballState,
  createInitialMatch,
  processPoint,
  triggerManualSwap
} from './game-logic';
import { el, render, spawnSandSplash, requestWakeLock, releaseWakeLock } from './render';

const STORAGE_KEY = 'bv_match_state';
const NAMES_KEY = 'bv_lineups';

interface MatchHistory {
  state: BeachVolleyballState;
  history: BeachVolleyballState[];
}

class BeachController {
  constructor(
    public ctx: MatchHistory,
    private t: BeachVolleyballUI,
    private save: (s: BeachVolleyballState) => void
  ) {}

  addPoint(team: 'a' | 'b', x: number, y: number): void {
    const next = processPoint(this.ctx.state, team);
    spawnSandSplash(x, y);
    this.save(next);
  }

  undo(): void {
    const prev = this.ctx.history.pop();
    if (prev) {
      this.ctx.state = prev;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.ctx.state));
      render(this.ctx.state, this.t);
      triggerUndoAnimation();
    }
  }

  manualSwap(): void {
    const next = triggerManualSwap(this.ctx.state);
    this.save(next);
  }
}

function triggerUndoAnimation(): void {
  const card = el('tn-card');
  if (card) {
    card.classList.remove('tn-undo-anim');
    requestAnimationFrame(() => card.classList.add('tn-undo-anim'));
    setTimeout(() => card.classList.remove('tn-undo-anim'), 300);
  }
}

function loadLineups(): Record<string, string> {
  try {
    return JSON.parse(localStorage.getItem(NAMES_KEY) || '{}');
  } catch {
    return {};
  }
}

function saveLineups(data: Record<string, string>): void {
  localStorage.setItem(NAMES_KEY, JSON.stringify(data));
}

function bindInput(id: string, key: string, ctrl: BeachController): void {
  const inp = el(id) as HTMLInputElement;
  if (!inp) return;
  inp.addEventListener('input', () => {
    const val = inp.value || 'Player';
    const activeState = ctrl.ctx.state;
    if (key === 'a1') activeState.teamA.player1 = val;
    else if (key === 'a2') activeState.teamA.player2 = val;
    else if (key === 'b1') activeState.teamB.player1 = val;
    else if (key === 'b2') activeState.teamB.player2 = val;
    
    const saved = loadLineups();
    saved[key] = val;
    saveLineups(saved);
    render(activeState, ctrl['t']);
  });
}

function initLineupInputs(ctrl: BeachController): void {
  const saved = loadLineups();
  const state = ctrl.ctx.state;

  if (saved.a1) state.teamA.player1 = saved.a1;
  if (saved.a2) state.teamA.player2 = saved.a2;
  if (saved.b1) state.teamB.player1 = saved.b1;
  if (saved.b2) state.teamB.player2 = saved.b2;

  const inputs = [
    { id: 'tn-name-a1', key: 'a1' },
    { id: 'tn-name-a2', key: 'a2' },
    { id: 'tn-name-b1', key: 'b1' },
    { id: 'tn-name-b2', key: 'b2' }
  ];

  inputs.forEach((inp) => {
    const elem = el(inp.id) as HTMLInputElement;
    if (elem) {
      if (inp.key === 'a1') elem.value = state.teamA.player1;
      else if (inp.key === 'a2') elem.value = state.teamA.player2;
      else if (inp.key === 'b1') elem.value = state.teamB.player1;
      else if (inp.key === 'b2') elem.value = state.teamB.player2;
    }
    bindInput(inp.id, inp.key, ctrl);
  });
}

function setupSwipeGestures(ctrl: BeachController): void {
  const card = el('tn-card');
  if (!card) return;
  let startY = 0;
  let startX = 0;

  card.addEventListener('touchstart', (e) => {
    startY = e.touches[0].clientY;
    startX = e.touches[0].clientX;
  }, { passive: true });

  card.addEventListener('touchend', (e) => {
    const diffY = e.changedTouches[0].clientY - startY;
    const diffX = e.changedTouches[0].clientX - startX;
    if (diffY > 60 && Math.abs(diffX) < 40) {
      ctrl.undo();
    }
  }, { passive: true });
}

function handleBaseClicks(e: MouseEvent, ctrl: BeachController): void {
  const target = e.target as HTMLElement;
  const courtHalfA = target.closest('#tn-court-half-a');
  const courtHalfB = target.closest('#tn-court-half-b');

  if (courtHalfA) {
    ctrl.addPoint('a', e.clientX, e.clientY);
  } else if (courtHalfB) {
    ctrl.addPoint('b', e.clientX, e.clientY);
  }
}

function handleActionClicks(target: HTMLElement, ctrl: BeachController): void {
  if (target.closest('[data-team-point]')) {
    const team = target.closest('[data-team-point]')?.getAttribute('data-team-point') as 'a' | 'b';
    ctrl.addPoint(team, window.innerWidth / 2, window.innerHeight / 2);
  } else if (target.closest('[data-action-undo]')) {
    ctrl.undo();
  } else if (target.closest('[data-action-swap]')) {
    ctrl.manualSwap();
  }
}

function bindInteractions(ctrl: BeachController): void {
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    handleBaseClicks(e, ctrl);
    if (target.closest('#tn-court-half-a') || target.closest('#tn-court-half-b')) return;
    handleActionClicks(target, ctrl);
  });
}

function setupModal(ctrl: BeachController): void {
  el('tn-reset-btn')?.addEventListener('click', () => el('tn-modal')?.classList.add('tn-reset-active'));
  el('tn-modal-cancel')?.addEventListener('click', () => el('tn-modal')?.classList.remove('tn-reset-active'));
  el('tn-modal-confirm')?.addEventListener('click', () => {
    el('tn-modal')?.classList.remove('tn-reset-active');
    ctrl.ctx.history = [];
    ctrl.manualSwap();
    ctrl['save'](createInitialMatch());
  });
  el('tn-winner-reset')?.addEventListener('click', () => {
    el('tn-winner-overlay')?.classList.remove('tn-winner-active');
    ctrl.ctx.history = [];
    ctrl['save'](createInitialMatch());
  });
}

function setupFullscreen(): void {
  const card = el('tn-card');
  if (!card) return;
  card.querySelector('[data-tn-fs]')?.addEventListener('click', () => {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else {
      card.requestFullscreen().catch(() => card.classList.add('tn-fullscreen-fallback'));
    }
  });
}

function setupInteractiveHandlers(ctrl: BeachController): void {
  initLineupInputs(ctrl);
  
  el('tn-open-lineup-btn')?.addEventListener('click', () => {
    el('tn-lineup-overlay')?.style.setProperty('display', 'flex');
  });
  el('tn-close-lineup-btn')?.addEventListener('click', () => {
    el('tn-lineup-overlay')?.style.setProperty('display', 'none');
  });

  bindInteractions(ctrl);
  setupModal(ctrl);
  setupSwipeGestures(ctrl);
  setupFullscreen();
  requestWakeLock();
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      requestWakeLock();
    } else {
      releaseWakeLock();
    }
  });
}

export function initBeachVolleyballScoreKeeper(): void {
  const card = el('tn-card');
  if (!card) return;
  const t: BeachVolleyballUI = JSON.parse(card.getAttribute('data-tn-ui') || '{}') as BeachVolleyballUI;
  const rawState = localStorage.getItem(STORAGE_KEY);
  const ctx: MatchHistory = {
    state: rawState ? JSON.parse(rawState) : createInitialMatch(),
    history: [],
  };
  const save = (s: BeachVolleyballState) => {
    ctx.history.push(JSON.parse(JSON.stringify(ctx.state)));
    if (ctx.history.length > 50) ctx.history.shift();
    ctx.state = s;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
    render(s, t);
  };
  const ctrl = new BeachController(ctx, t, save);
  setupInteractiveHandlers(ctrl);
  render(ctx.state, t);
}
