import type { PingPongScoreKeeperUI } from './ui';
import {
  type MatchScore, type PlayerSide, type MatchFormat,
  createInitialScore, checkMatchOver,
  awardPointToPlayer, undoLastPoint, concludeGame,
  checkGameOver, createCleanMatch,
} from './game-logic';
import { el, spawnParticles, render, showWinner } from './render';

const STORAGE_KEY = 'pp_match_state';
const NAMES_KEY = 'pp_names';
const HISTORY_KEY = 'pp_history';

let _score: MatchScore;
let _t: PingPongScoreKeeperUI;

function restoreDomOrder(): void {
  const board = el('pp-board');
  if (!board || board.children.length < 2) return;
  if (board.children[0]?.id !== 'pp-side-a') {
    board.insertBefore(board.children[1], board.children[0]);
  }
}

function saveNames(a: string, b: string): void {
  localStorage.setItem(NAMES_KEY, JSON.stringify({ a, b }));
}

function loadNames(): { a: string; b: string } {
  try { return JSON.parse(localStorage.getItem(NAMES_KEY) || '{"a":"Player 1","b":"Player 2"}'); }
  catch { return { a: 'Player 1', b: 'Player 2' }; }
}

function recordMatchOutcome(winner: string, loser: string): void {
  const w = winner.trim();
  const l = loser.trim();
  const h: Record<string, { w: number; l: number }> = JSON.parse(localStorage.getItem(HISTORY_KEY) || '{}');
  if (w) { h[w] = h[w] || { w: 0, l: 0 }; h[w].w += 1; }
  if (l) { h[l] = h[l] || { w: 0, l: 0 }; h[l].l += 1; }
  localStorage.setItem(HISTORY_KEY, JSON.stringify(h));
  renderHistory();
  const names = getAllKnownNames();
  ['pp-names-a', 'pp-names-b'].forEach((id) => {
    const dl = document.getElementById(id) as HTMLDataListElement;
    if (dl) dl.innerHTML = names.map((n) => `<option value="${n}">`).join('');
  });
}

function renderHistory(): void {
  const h: Record<string, { w: number; l: number }> = JSON.parse(localStorage.getItem(HISTORY_KEY) || '{}');
  const c = el('pp-history');
  if (!c) return;
  const entries = Object.entries(h).sort((a, b) => b[1].w - a[1].w);
  c.innerHTML = entries.length
    ? entries.map(([n, r]) => `<span class="pp-history-item"><span class="pp-history-name">${n}</span> <span class="pp-history-wins">${r.w}W ${r.l}L</span></span>`).join('')
    : '';
}

function getAllKnownNames(): string[] {
  const h: Record<string, { w: number; l: number }> = JSON.parse(localStorage.getItem(HISTORY_KEY) || '{}');
  return Object.keys(h).sort();
}

function getPlayerName(side: PlayerSide): string {
  const inp = document.getElementById(`pp-name-${side}`) as HTMLInputElement;
  return inp?.value?.trim() || (side === 'a' ? 'Player 1' : 'Player 2');
}

function populateDatalists(): void {
  const names = getAllKnownNames();
  ['pp-names-a', 'pp-names-b'].forEach((id) => {
    const dl = document.getElementById(id) as HTMLDataListElement;
    if (!dl) return;
    dl.innerHTML = names.map((n) => `<option value="${n}">`).join('');
  });
}

function persistScore(): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(_score));
}

function save(s: MatchScore): void {
  _score = s;
  persistScore();
  render(_score, _t);
}

function handleGameWinner(winner: PlayerSide): void {
  const resolved = concludeGame(_score, winner);
  const mw = checkMatchOver(resolved);
  if (mw) {
    const pn = getPlayerName(mw);
    const loser = getPlayerName(mw === 'a' ? 'b' : 'a');
    save(resolved);
    recordMatchOutcome(pn, loser);
    showWinner(pn, resolved.gamesWonByA, resolved.gamesWonByB);
  } else {
    save(resolved);
    el('pp-swap')?.classList.add('pp-swap-on');
    const board = el('pp-board');
    if (board) {
      board.classList.remove('pp-board-swap');
      void board.offsetWidth;
      board.classList.add('pp-board-swap');
    }
  }
}

const api: PingPongAPI = {
  addPoint(side) {
    if (checkMatchOver(_score)) return;
    if (checkGameOver(_score)) return;
    const after = awardPointToPlayer(_score, side);
    save(after);
    const pe = el(`pp-particles-${side}`);
    if (pe) spawnParticles(pe);
    const sd = el(`pp-score-${side}`);
    if (sd) { sd.classList.remove('pp-score-pop'); void sd.offsetWidth; sd.classList.add('pp-score-pop'); }
    const gw = checkGameOver(after);
    if (gw) setTimeout(() => handleGameWinner(gw), 600);
  },

  minusPoint(side) {
    if (checkMatchOver(_score)) return;
    if (checkGameOver(_score)) return;
    const after = undoLastPoint(_score, side);
    if (after !== _score) save(after);
  },

  newGame() { save({ ..._score, currentGamePointsA: 0, currentGamePointsB: 0, servesSinceLastChange: 0 }); },

  confirmSwap() {
    const board = el('pp-board');
    if (!board) return;
    const first = board.firstElementChild;
    const second = first?.nextElementSibling;
    if (!first || !second) return;
    board.classList.remove('pp-board-swap');
    void board.offsetWidth;
    board.classList.add('pp-board-swap');
    el('pp-swap')?.classList.remove('pp-swap-on');
    setTimeout(() => {
      board.classList.remove('pp-board-swap');
      board.insertBefore(second, first);
      save({ ..._score, areSidesSwapped: !_score.areSidesSwapped });
    }, 400);
  },

  setMode(mode) {
    document.querySelectorAll('.pp-mode-btn').forEach((b) => b.classList.remove('pp-mode-active'));
    const btn = document.querySelector(`[data-mode-${mode}]`);
    if (btn) btn.classList.add('pp-mode-active');
    restoreDomOrder();
    save({ ...createInitialScore(), format: mode });
  },

  reset() { el('pp-modal')?.classList.add('pp-modal-on'); },

  resetAll() {
    localStorage.removeItem(STORAGE_KEY);
    restoreDomOrder();
    save(createCleanMatch(_score));
  },

  confirmReset() {
    restoreDomOrder();
    save(createCleanMatch(_score));
    el('pp-modal')?.classList.remove('pp-modal-on');
  },
  cancelReset() { el('pp-modal')?.classList.remove('pp-modal-on'); },

  toggleFullscreen() {
    const card = el('pp-card');
    if (!card) return;
    if (document.fullscreenElement) document.exitFullscreen();
    else card.requestFullscreen();
  },
};

function setupClickMap(): Record<string, () => void> {
  return {
    'data-pp-a': () => api.addPoint('a'), 'data-pp-b': () => api.addPoint('b'),
    'data-minus-a': () => api.minusPoint('a'), 'data-minus-b': () => api.minusPoint('b'),
    'data-pp-new': () => api.newGame(),
    'data-pp-reset': () => api.reset(), 'data-pp-fs': () => api.toggleFullscreen(),
    'data-mode-bo1': () => api.setMode('bo1'), 'data-mode-bo3': () => api.setMode('bo3'),
    'data-mode-bo5': () => api.setMode('bo5'), 'data-mode-bo7': () => api.setMode('bo7'),
  };
}

function setupEvents(): void {
  const clickMap = setupClickMap();

  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (target.closest('[data-close-winner]')) { el('pp-winner')?.classList.remove('pp-winner-on'); api.resetAll(); return; }
    if (target.closest('[data-pp-swap]')) { api.confirmSwap(); return; }
    if (target.closest('#pp-modal-cancel')) { api.cancelReset(); return; }
    if (target.closest('#pp-modal-confirm')) { api.confirmReset(); return; }
    for (const [k, fn] of Object.entries(clickMap)) { if (target.closest(`[${k}]`)) { fn(); return; } }
  });

  const na = document.getElementById('pp-name-a') as HTMLInputElement;
  const nb = document.getElementById('pp-name-b') as HTMLInputElement;

  [na, nb].forEach((inp) => {
    if (!inp) return;
    inp.addEventListener('input', () => {
      const a = (document.getElementById('pp-name-a') as HTMLInputElement)?.value || 'Player 1';
      const b = (document.getElementById('pp-name-b') as HTMLInputElement)?.value || 'Player 2';
      saveNames(a, b);
    });
  });

  document.querySelectorAll('.pp-pencil').forEach((p) => {
    p.addEventListener('click', (e) => {
      e.stopPropagation();
      const input = p.parentElement?.querySelector('.pp-name') as HTMLInputElement;
      if (input) input.focus();
    });
  });
}

export interface PingPongAPI {
  addPoint: (player: PlayerSide) => void;
  minusPoint: (player: PlayerSide) => void;
  newGame: () => void;
  confirmSwap: () => void;
  setMode: (mode: MatchFormat) => void;
  reset: () => void;
  resetAll: () => void;
  confirmReset: () => void;
  cancelReset: () => void;
  toggleFullscreen: () => void;
}

function loadScore(): MatchScore {
  const initial = createInitialScore();
  try {
    const s = localStorage.getItem(STORAGE_KEY);
    if (s) return JSON.parse(s);
  } catch {}
  return initial;
}

function applySideSwap(score: MatchScore): void {
  if (!score.areSidesSwapped) return;
  const board = el('pp-board');
  if (board && board.children.length >= 2 && board.children[0]?.id === 'pp-side-a') {
    board.insertBefore(board.children[1], board.children[0]);
  }
}

function setupUI(): void {
  const saved = loadNames();
  _t.playerA = saved.a;
  _t.playerB = saved.b;
  const na = document.getElementById('pp-name-a') as HTMLInputElement;
  const nb = document.getElementById('pp-name-b') as HTMLInputElement;
  if (na) na.value = saved.a;
  if (nb) nb.value = saved.b;
}

export function initPingPongScoreKeeper(): void {
  const card = el('pp-card');
  if (!card) return;
  _t = JSON.parse(card.getAttribute('data-pp-ui') || '{}') as PingPongScoreKeeperUI;

  setupUI();
  _score = loadScore();
  applySideSwap(_score);
  save(_score);
  renderHistory();
  populateDatalists();

  (window as unknown as Record<string, PingPongAPI>).pingPong = api;
  setupEvents();
}
