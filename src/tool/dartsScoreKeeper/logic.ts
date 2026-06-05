import type { DartsScoreKeeperUI } from './ui';
import {
  type DartsMatchScore,
  type DartsFormat,
  createInitialScore,
  processThrow,
} from './game-logic';
import {
  el,
  render,
} from './render';
import { buildDartboardSVG } from './dartboard';

const STORAGE_KEY = 'dt_match_state';
const NAMES_KEY = 'dt_names';

interface GameContext {
  stateRef: { score: DartsMatchScore; history: DartsMatchScore[] };
  t: DartsScoreKeeperUI;
  saveFn: (s: DartsMatchScore) => void;
}

function saveNames(a: string, b: string): void {
  localStorage.setItem(NAMES_KEY, JSON.stringify({ a, b }));
}

function loadNames(): { a: string; b: string } {
  try {
    return JSON.parse(localStorage.getItem(NAMES_KEY) || '{"a":"Player 1","b":"Player 2"}');
  } catch {
    return { a: 'Player 1', b: 'Player 2' };
  }
}

function bindNames(t: DartsScoreKeeperUI, score: DartsMatchScore): void {
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
      const a = (el('tn-name-a') as HTMLInputElement)?.value || 'Player 1';
      const b = (el('tn-name-b') as HTMLInputElement)?.value || 'Player 2';
      saveNames(a, b);
      t.playerA = a;
      t.playerB = b;
      render(score, t);
    });
  });
}

function getThrowLabel(mod: number, val: number): string {
  if (mod === 3) return `T${val}`;
  if (mod === 2) return `D${val}`;
  return `${val}`;
}

function animateHit(val: number, mod: number): void {
  const container = el('tn-dartboard-container');
  if (!container) return;
  const pop = document.createElement('div');
  pop.className = 'tn-hit-pop';
  pop.textContent = getThrowLabel(mod, val);
  pop.style.left = `${50 + (Math.random() - 0.5) * 20}%`;
  pop.style.top = `${40 + (Math.random() - 0.5) * 20}%`;
  container.appendChild(pop);
  setTimeout(() => pop.remove(), 1000);
}

function updateBustAnimate(ctx: GameContext, nextState: DartsMatchScore): void {
  const activeCard = el(`tn-card-${ctx.stateRef.score.activePlayer}`);
  if (nextState.turn.isBusted) {
    activeCard?.classList.add('tn-bust-shake');
    setTimeout(() => activeCard?.classList.remove('tn-bust-shake'), 600);
  }
}

function handleThrowAction(val: number, mod: 1 | 2 | 3, ctx: GameContext): void {
  animateHit(val, mod);
  let beforeScore = ctx.stateRef.score.playerB.remainingScore;
  if (ctx.stateRef.score.activePlayer === 'a') {
    beforeScore = ctx.stateRef.score.playerA.remainingScore;
  }
  const nextState = processThrow(ctx.stateRef.score, mod, val);
  let afterScore = nextState.playerB.remainingScore;
  if (nextState.activePlayer === 'a') {
    afterScore = nextState.playerA.remainingScore;
  }
  ctx.saveFn(nextState);
  updateBustAnimate(ctx, nextState);
  if (!nextState.turn.isBusted && beforeScore !== afterScore) {
    const activeCard = el(`tn-card-${ctx.stateRef.score.activePlayer}`);
    activeCard?.classList.add('tn-score-pulse');
    setTimeout(() => activeCard?.classList.remove('tn-score-pulse'), 400);
  }
}

function bindClickDelegation(ctx: GameContext, multRef: { val: 1 | 2 | 3; set: (m: 1 | 2 | 3) => void }): void {
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const sector = target.closest('.tn-board-sector') as HTMLElement;
    if (sector) {
      const val = parseInt(sector.getAttribute('data-dt-val') || '0');
      const mod = parseInt(sector.getAttribute('data-dt-mod') || '1') as 1 | 2 | 3;
      handleThrowAction(val, mod, ctx);
      return;
    }
    const valBtn = target.closest('[data-dt-val]') as HTMLElement;
    if (valBtn) {
      const val = parseInt(valBtn.getAttribute('data-dt-val') || '0');
      handleThrowAction(val, multRef.val, ctx);
      multRef.set(1);
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

function setupUndoAndFormat(card: HTMLElement, api: { undo: () => void; setFormat: (f: DartsFormat) => void; toggleDoubleOut: () => void }): void {
  card.querySelectorAll('[data-dt-undo]').forEach((btn) => {
    btn.addEventListener('click', () => api.undo());
  });
  card.querySelectorAll('[data-dt-format]').forEach((btn) => {
    btn.addEventListener('click', () => {
      api.setFormat(btn.getAttribute('data-dt-format') as DartsFormat);
    });
  });
  card.querySelector('[data-dt-doubleout]')?.addEventListener('click', () => {
    api.toggleDoubleOut();
  });
}

function setupMultiplier(card: HTMLElement, multRef: { val: 1 | 2 | 3; set(m: 1 | 2 | 3): void }): void {
  card.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const modBtn = target.closest('[data-dt-mod]') as HTMLElement;
    if (modBtn) {
      multRef.set(parseInt(modBtn.getAttribute('data-dt-mod') || '1') as 1 | 2 | 3);
    }
  });
}

function setupViewToggles(card: HTMLElement): void {
  card.querySelector('[data-tn-fs]')?.addEventListener('click', () => {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else if (card.classList.contains('tn-fullscreen-fallback')) {
      card.classList.remove('tn-fullscreen-fallback');
    } else {
      card.requestFullscreen().catch(() => card.classList.add('tn-fullscreen-fallback'));
    }
  });
  card.querySelector('#tn-toggle-view-btn')?.addEventListener('click', () => {
    card.classList.toggle('tn-view-keypad');
  });
  document.addEventListener('fullscreenchange', () => {
    const isFs = !!document.fullscreenElement;
    card.classList.toggle('tn-fullscreen-on', isFs);
    if (!isFs) {
      card.classList.remove('tn-fullscreen-fallback');
    }
  });
}

function loadInitialScore(): DartsMatchScore {
  try {
    const s = localStorage.getItem(STORAGE_KEY);
    if (s) return JSON.parse(s);
  } catch {
    return createInitialScore();
  }
  return createInitialScore();
}

function createSaveFn(stateRef: { score: DartsMatchScore; history: DartsMatchScore[] }, t: DartsScoreKeeperUI): (s: DartsMatchScore, pushHistory?: boolean) => void {
  return (s: DartsMatchScore, pushHistory = true) => {
    if (pushHistory) stateRef.history.push(JSON.parse(JSON.stringify(stateRef.score)));
    stateRef.score = s;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stateRef.score));
    render(stateRef.score, t);
  };
}

function createApiObject(stateRef: { score: DartsMatchScore; history: DartsMatchScore[] }, save: (s: DartsMatchScore, pushHistory?: boolean) => void, t: DartsScoreKeeperUI) {
  return {
    resetAll() {
      localStorage.removeItem(STORAGE_KEY);
      stateRef.history = [];
      save(createInitialScore(stateRef.score.format, stateRef.score.doubleOut), false);
    },
    setFormat(f: DartsFormat) {
      document.querySelectorAll('.tn-format-btn').forEach((b) => b.classList.remove('tn-format-active'));
      document.querySelector(`[data-dt-format="${f}"]`)?.classList.add('tn-format-active');
      save(createInitialScore(f, stateRef.score.doubleOut));
    },
    toggleDoubleOut() {
      const nextD = !stateRef.score.doubleOut;
      document.querySelector('[data-dt-doubleout]')?.classList.toggle('tn-doubleout-active', nextD);
      save(createInitialScore(stateRef.score.format, nextD));
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
  const t: DartsScoreKeeperUI = JSON.parse(card.getAttribute('data-tn-ui') || '{}') as DartsScoreKeeperUI;
  const boardSvg = el('tn-dartboard-svg');
  if (boardSvg) boardSvg.innerHTML = buildDartboardSVG(160, 160);
  const stateRef = { score: loadInitialScore(), history: [] as DartsMatchScore[] };
  const save = createSaveFn(stateRef, t);
  bindNames(t, stateRef.score);
  save(stateRef.score, false);
  const multRef = {
    val: 1 as 1 | 2 | 3,
    set(m: 1 | 2 | 3) {
      multRef.val = m;
      document.querySelectorAll('.tn-mod-btn').forEach((b) => b.classList.remove('tn-mod-active'));
      document.querySelector(`[data-dt-mod="${m}"]`)?.classList.add('tn-mod-active');
    }
  };
  const api = createApiObject(stateRef, save, t);
  bindClickDelegation({ stateRef, t, saveFn: save }, multRef);
  setupResetModal(card, api);
  setupUndoAndFormat(card, api);
  setupMultiplier(card, multRef);
  setupViewToggles(card);
}

export function initDartsScoreKeeper(): void {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runInit);
  } else {
    runInit();
  }
}
