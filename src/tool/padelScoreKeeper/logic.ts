import type { PadelScoreKeeperUI } from './ui';
import {
  type PadelMatchState,
  type MatchFormat,
  createInitialMatch,
  processPoint,
  processReceiverSelection,
} from './game-logic';
import {
  el,
  render,
} from './render';

const STORAGE_KEY = 'pd_match_state';
const NAMES_KEY = 'pd_names';

interface GameContext {
  stateRef: { score: PadelMatchState; history: PadelMatchState[] };
  t: PadelScoreKeeperUI;
  saveFn: (s: PadelMatchState) => void;
}

function saveNames(a: string, b: string): void {
  localStorage.setItem(NAMES_KEY, JSON.stringify({ a, b }));
}

function loadNames(): { a: string; b: string } {
  try {
    return JSON.parse(localStorage.getItem(NAMES_KEY) || '{"a":"Team 1","b":"Team 2"}');
  } catch {
    return { a: 'Team 1', b: 'Team 2' };
  }
}

function bindNames(t: PadelScoreKeeperUI, score: PadelMatchState): void {
  const na = el('tn-name-a') as HTMLInputElement;
  const nb = el('tn-name-b') as HTMLInputElement;
  const saved = loadNames();
  t.playerA = saved.a;
  t.playerB = saved.b;
  if (na) na.value = saved.a;
  if (nb) nb.value = saved.b;
  [na, nb].forEach((inp) => {
    if (!inp) return;
    inp.addEventListener('input', () => {
      const a = (el('tn-name-a') as HTMLInputElement)?.value || 'Team 1';
      const b = (el('tn-name-b') as HTMLInputElement)?.value || 'Team 2';
      saveNames(a, b);
      t.playerA = a;
      t.playerB = b;
      const bA = el('tn-btn-name-a');
      const bB = el('tn-btn-name-b');
      if (bA) bA.textContent = a;
      if (bB) bB.textContent = b;
      render(score, t);
    });
  });
}

function handlePadelPointAction(winner: 'a' | 'b', ctx: GameContext): void {
  const nextState = processPoint(ctx.stateRef.score, winner);
  ctx.saveFn(nextState);
}

function resolveCourtHalfClick(target: HTMLElement, endsSwapped: boolean): 'a' | 'b' | null {
  if (target.closest('#tn-court-half-b')) {
    return endsSwapped ? 'a' : 'b';
  }
  if (target.closest('#tn-court-half-a')) {
    return endsSwapped ? 'b' : 'a';
  }
  return null;
}

function resolveClickWinner(target: HTMLElement, state: PadelMatchState): 'a' | 'b' | null {
  if (target.closest('#tn-btn-score-a') || target.closest('#tn-score-a')) {
    return 'a';
  }
  if (target.closest('#tn-btn-score-b') || target.closest('#tn-score-b')) {
    return 'b';
  }
  return resolveCourtHalfClick(target, state.endsSwapped);
}

function bindClickDelegation(ctx: GameContext): void {
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (ctx.stateRef.score.isGoldPoint && !ctx.stateRef.score.receiverSelectionSide) {
      return;
    }
    const winner = resolveClickWinner(target, ctx.stateRef.score);
    if (winner) {
      handlePadelPointAction(winner, ctx);
    }
  });
}

function setupResetModal(card: HTMLElement, api: { resetAll: () => void }): void {
  card.querySelector('[data-tn-reset]')?.addEventListener('click', () => {
    el('tn-modal')?.classList.add('tn-reset-active');
  });
  el('tn-modal-cancel')?.addEventListener('click', () => {
    el('tn-modal')?.classList.remove('tn-reset-active');
  });
  el('tn-modal-confirm')?.addEventListener('click', () => {
    api.resetAll();
    el('tn-modal')?.classList.remove('tn-reset-active');
  });
  el('tn-winner')?.addEventListener('click', (e) => {
    if ((e.target as HTMLElement).closest('[data-close-winner]')) {
      el('tn-winner')?.classList.remove('tn-winner-active');
      api.resetAll();
    }
  });
}

function setupUndoAndFormat(card: HTMLElement, api: { undo: () => void; setFormat: (f: MatchFormat) => void }): void {
  card.querySelectorAll('[data-dt-undo]').forEach((btn) => {
    btn.addEventListener('click', () => api.undo());
  });
  card.querySelectorAll('[data-dt-format]').forEach((btn) => {
    btn.addEventListener('click', () => {
      api.setFormat(btn.getAttribute('data-dt-format') as MatchFormat);
    });
  });
}

function setupFullscreen(card: HTMLElement): void {
  card.querySelector('[data-tn-fs]')?.addEventListener('click', () => {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else if (card.classList.contains('tn-fullscreen-fallback')) {
      card.classList.remove('tn-fullscreen-fallback');
    } else {
      card.requestFullscreen().catch(() => card.classList.add('tn-fullscreen-fallback'));
    }
  });
  document.addEventListener('fullscreenchange', () => {
    const isFs = !!document.fullscreenElement;
    card.classList.toggle('tn-fullscreen-on', isFs);
    if (!isFs) {
      card.classList.remove('tn-fullscreen-fallback');
    }
  });
}

function setupGoldPointSelection(ctx: GameContext): void {
  el('tn-goldpoint-modal')?.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const btn = target.closest('[data-gp-side]') as HTMLElement;
    if (btn) {
      const side = btn.getAttribute('data-gp-side') as 'left' | 'right';
      const next = processReceiverSelection(ctx.stateRef.score, side);
      ctx.saveFn(next);
    }
  });
}

function loadInitialScore(): PadelMatchState {
  try {
    const s = localStorage.getItem(STORAGE_KEY);
    if (s) return JSON.parse(s);
  } catch {
    return createInitialMatch();
  }
  return createInitialMatch();
}

function createSaveFn(stateRef: { score: PadelMatchState; history: PadelMatchState[] }, t: PadelScoreKeeperUI): (s: PadelMatchState, pushHistory?: boolean) => void {
  return (s: PadelMatchState, pushHistory = true) => {
    if (pushHistory) stateRef.history.push(JSON.parse(JSON.stringify(stateRef.score)));
    stateRef.score = s;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stateRef.score));
    render(stateRef.score, t);
  };
}

function createApiObject(stateRef: { score: PadelMatchState; history: PadelMatchState[] }, save: (s: PadelMatchState, pushHistory?: boolean) => void, t: PadelScoreKeeperUI) {
  return {
    resetAll() {
      localStorage.removeItem(STORAGE_KEY);
      stateRef.history = [];
      save(createInitialMatch(stateRef.score.format), false);
    },
    setFormat(f: MatchFormat) {
      document.querySelectorAll('.tn-format-btn').forEach((b) => b.classList.remove('tn-format-active'));
      document.querySelector(`[data-dt-format="${f}"]`)?.classList.add('tn-format-active');
      save(createInitialMatch(f));
    },
    undo() {
      const prev = stateRef.history.pop();
      if (prev) {
        stateRef.score = prev;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(stateRef.score));
        render(stateRef.score, t);
      }
    }
  };
}

function runInit(): void {
  const card = el('tn-card');
  if (!card) return;
  const t: PadelScoreKeeperUI = JSON.parse(card.getAttribute('data-tn-ui') || '{}') as PadelScoreKeeperUI;
  const stateRef = { score: loadInitialScore(), history: [] as PadelMatchState[] };
  const save = createSaveFn(stateRef, t);
  bindNames(t, stateRef.score);
  save(stateRef.score, false);
  const api = createApiObject(stateRef, save, t);
  bindClickDelegation({ stateRef, t, saveFn: save });
  setupResetModal(card, api);
  setupUndoAndFormat(card, api);
  setupFullscreen(card);
  setupGoldPointSelection({ stateRef, t, saveFn: save });
  const bA = el('tn-btn-name-a');
  const bB = el('tn-btn-name-b');
  if (bA) bA.textContent = t.playerA;
  if (bB) bB.textContent = t.playerB;
}

export function initPadelScoreKeeper(): void {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runInit);
  } else {
    runInit();
  }
}
