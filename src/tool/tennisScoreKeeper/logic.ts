import type { TennisScoreKeeperUI } from './ui';
import {
  type MatchScore,
  type PlayerSide,
  createInitialScore,
  checkGameOver,
  checkSetOver,
  checkMatchOver,
  awardPointToPlayer,
  undoLastPoint,
  concludeGame,
  concludeSet,
  createCleanMatch,
} from './game-logic';
import {
  el,
  render,
  showWinner,
  restoreDomOrder,
  spawnParticles,
  spawnRipple,
} from './render';
import {
  type TennisAPI,
  recordMatchOutcome,
  setupUI,
  populateDatalists,
  setupClickEvents,
  setupFullscreen,
  setupNameInputs,
} from './events';

const STORAGE_KEY = 'tn_match_state';

let _score: MatchScore;
let _t: TennisScoreKeeperUI;

function persistScore(): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(_score));
}

function save(s: MatchScore): void {
  _score = s;
  persistScore();
  render(_score, _t);
}

function getPlayerName(side: PlayerSide): string {
  const inp = document.getElementById(`tn-name-${side}`) as HTMLInputElement;
  return inp?.value?.trim() || (side === 'a' ? 'Player 1' : 'Player 2');
}

function shouldSwitchEnds(gamesA: number, gamesB: number): boolean {
  return (gamesA + gamesB) % 2 === 1;
}

function handleSetWinner(winner: PlayerSide): void {
  const afterSet = concludeSet(_score, winner);
  const matchWinner = checkMatchOver(afterSet);
  if (matchWinner) {
    const pn = getPlayerName(matchWinner);
    const loser = getPlayerName(matchWinner === 'a' ? 'b' : 'a');
    save(afterSet);
    recordMatchOutcome(pn, loser);
    showWinner(pn, afterSet);
  } else {
    save(afterSet);
    el('tn-swap')?.classList.add('tn-swap-active');
  }
}

function handleGameWinner(winner: PlayerSide): void {
  const afterGame = concludeGame(_score, winner);
  const setWinner = checkSetOver(afterGame);
  if (setWinner) {
    save(afterGame);
    setTimeout(() => handleSetWinner(setWinner), 600);
  } else {
    save(afterGame);
    if (shouldSwitchEnds(afterGame.gamesWonInCurrentSetA, afterGame.gamesWonInCurrentSetB)) {
      el('tn-swap')?.classList.add('tn-swap-active');
    }
  }
}

function handleAddPointRipple(e: MouseEvent | undefined, side: PlayerSide): void {
  if (e) spawnRipple(e);
  const scoreEl = el(`tn-score-val-${side}`);
  if (scoreEl) {
    scoreEl.classList.remove('tn-court-score-pop');
    void scoreEl.offsetWidth;
    scoreEl.classList.add('tn-court-score-pop');
    spawnParticles(scoreEl);
  }
}

function handleAddPointPostScore(after: MatchScore): void {
  const gw = checkGameOver(after);
  if (gw) {
    setTimeout(() => handleGameWinner(gw), 650);
  } else if (_score.inTiebreak) {
    const sw = checkSetOver(after);
    if (sw) {
      setTimeout(() => handleSetWinner(sw), 650);
    } else {
      const totalPoints = after.tiebreakPointsA + after.tiebreakPointsB;
      if (totalPoints % 6 === 0) {
        el('tn-swap')?.classList.add('tn-swap-active');
      }
    }
  }
}

export { type TennisAPI };

const api: TennisAPI = {
  addPoint(side, e) {
    if (checkMatchOver(_score)) return;
    if (checkSetOver(_score)) return;
    const after = awardPointToPlayer(_score, side);
    save(after);
    handleAddPointRipple(e, side);
    handleAddPointPostScore(after);
  },

  minusPoint(side) {
    if (checkMatchOver(_score)) return;
    const after = undoLastPoint(_score, side);
    if (after !== _score) save(after);
  },

  setMode(mode) {
    document.querySelectorAll('.tn-btn-mode').forEach((b) => b.classList.remove('tn-mode-active'));
    const btn = document.querySelector(`[data-mode-${mode}]`);
    if (btn) btn.classList.add('tn-mode-active');
    restoreDomOrder();
    save({ ...createInitialScore(), format: mode });
  },

  reset() { el('tn-modal')?.classList.add('tn-reset-active'); },

  resetAll() {
    localStorage.removeItem(STORAGE_KEY);
    restoreDomOrder();
    save(createCleanMatch(_score));
  },

  confirmReset() {
    restoreDomOrder();
    save(createCleanMatch(_score));
    el('tn-modal')?.classList.remove('tn-reset-active');
  },

  cancelReset() { el('tn-modal')?.classList.remove('tn-reset-active'); },

  toggleFullscreen() {
    const container = el('tn-card');
    if (!container) return;
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else if (container.classList.contains('tn-fullscreen-fallback')) {
      container.classList.remove('tn-fullscreen-fallback');
    } else {
      container.requestFullscreen()
        .catch(() => { container.classList.add('tn-fullscreen-fallback'); });
    }
  },

  confirmSwap() {
    el('tn-swap')?.classList.remove('tn-swap-active');
    setTimeout(() => { save({ ..._score, areSidesSwapped: !_score.areSidesSwapped }); }, 500);
  },
};

function loadScore(): MatchScore {
  try {
    const s = localStorage.getItem(STORAGE_KEY);
    if (s) return JSON.parse(s);
  } catch {}
  return createInitialScore();
}

function init(): void {
  const card = el('tn-card');
  if (!card) return;
  _t = JSON.parse(card.getAttribute('data-tn-ui') || '{}') as TennisScoreKeeperUI;

  setupUI(_t);
  _score = loadScore();
  save(_score);
  populateDatalists();

  (window as unknown as Record<string, TennisAPI>).tennis = api;
  setupFullscreen(card, api);
  setupClickEvents(api);
  setupNameInputs(_score, () => save(_score));
}

export function initTennisScoreKeeper(): void {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
}
