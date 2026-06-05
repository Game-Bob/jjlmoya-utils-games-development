import type { TennisScoreKeeperUI } from './ui';
import {
  type MatchScore,
  type PlayerSide,
  type MatchFormat,
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

const STORAGE_KEY = 'tn_match_state';
const NAMES_KEY = 'tn_names';
const HISTORY_KEY = 'tn_history';

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

function getAllKnownNames(): string[] {
  const h: Record<string, { w: number; l: number }> = JSON.parse(localStorage.getItem(HISTORY_KEY) || '{}');
  return Object.keys(h).sort();
}

function recordMatchOutcome(winner: string, loser: string): void {
  const w = winner.trim();
  const l = loser.trim();
  const h: Record<string, { w: number; l: number }> = JSON.parse(localStorage.getItem(HISTORY_KEY) || '{}');
  if (w) {
    h[w] = h[w] || { w: 0, l: 0 };
    h[w].w += 1;
  }
  if (l) {
    h[l] = h[l] || { w: 0, l: 0 };
    h[l].l += 1;
  }
  localStorage.setItem(HISTORY_KEY, JSON.stringify(h));

  const names = getAllKnownNames();
  ['tn-names-a', 'tn-names-b'].forEach((id) => {
    const dl = document.getElementById(id) as HTMLDataListElement;
    if (dl) dl.innerHTML = names.map((n) => `<option value="${n}">`).join('');
  });
}

export interface TennisAPI {
  addPoint: (player: PlayerSide, e?: MouseEvent) => void;
  minusPoint: (player: PlayerSide) => void;
  setMode: (mode: MatchFormat) => void;
  reset: () => void;
  resetAll: () => void;
  confirmReset: () => void;
  cancelReset: () => void;
  toggleFullscreen: () => void;
  confirmSwap: () => void;
}

export function initTennisScoreKeeper(): void {
  const init = () => {
    const card = el('tn-card');
    if (!card) return;
    const t: TennisScoreKeeperUI = JSON.parse(card.getAttribute('data-tn-ui') || '{}') as TennisScoreKeeperUI;

    const saved = loadNames();
    t.playerA = saved.a;
    t.playerB = saved.b;
    const na = document.getElementById('tn-name-a') as HTMLInputElement;
    const nb = document.getElementById('tn-name-b') as HTMLInputElement;
    if (na) na.value = saved.a;
    if (nb) nb.value = saved.b;

    let score: MatchScore = createInitialScore();
    try {
      const s = localStorage.getItem(STORAGE_KEY);
      if (s) score = JSON.parse(s);
    } catch {
      score = createInitialScore();
    }



    function save(s: MatchScore): void {
      score = s;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(score));
      render(score, t);
    }

    save(score);

    function populateDatalists(): void {
      const names = getAllKnownNames();
      ['tn-names-a', 'tn-names-b'].forEach((id) => {
        const dl = document.getElementById(id) as HTMLDataListElement;
        if (!dl) return;
        dl.innerHTML = names.map((n) => `<option value="${n}">`).join('');
      });
    }
    populateDatalists();

    function getPlayerName(side: PlayerSide): string {
      const inp = document.getElementById(`tn-name-${side}`) as HTMLInputElement;
      return inp?.value?.trim() || (side === 'a' ? 'Player 1' : 'Player 2');
    }

    function shouldSwitchEnds(gamesA: number, gamesB: number): boolean {
      return (gamesA + gamesB) % 2 === 1;
    }

    function handleSetWinner(winner: PlayerSide): void {
      const afterSet = concludeSet(score, winner);
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
      const afterGame = concludeGame(score, winner);
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

    const api: TennisAPI = {
      addPoint(side, e) {
        if (checkMatchOver(score)) return;
        if (checkSetOver(score)) return;
        const after = awardPointToPlayer(score, side);
        save(after);

        if (e) {
          spawnRipple(e);
        }

        const scoreEl = el(`tn-score-val-${side}`);
        if (scoreEl) {
          scoreEl.classList.remove('tn-court-score-pop');
          void scoreEl.offsetWidth;
          scoreEl.classList.add('tn-court-score-pop');
          spawnParticles(scoreEl);
        }

        const gw = checkGameOver(after);
        if (gw) {
          setTimeout(() => handleGameWinner(gw), 650);
        } else if (score.inTiebreak) {
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
      },

      minusPoint(side) {
        if (checkMatchOver(score)) return;
        const after = undoLastPoint(score, side);
        if (after !== score) save(after);
      },

      setMode(mode) {
        document.querySelectorAll('.tn-btn-mode').forEach((b) => b.classList.remove('tn-mode-active'));
        const btn = document.querySelector(`[data-mode-${mode}]`);
        if (btn) btn.classList.add('tn-mode-active');
        restoreDomOrder();
        save({ ...createInitialScore(), format: mode });
      },

      reset() {
        el('tn-modal')?.classList.add('tn-reset-active');
      },

      resetAll() {
        localStorage.removeItem(STORAGE_KEY);
        restoreDomOrder();
        save(createCleanMatch(score));
      },

      confirmReset() {
        restoreDomOrder();
        save(createCleanMatch(score));
        el('tn-modal')?.classList.remove('tn-reset-active');
      },

      cancelReset() {
        el('tn-modal')?.classList.remove('tn-reset-active');
      },

      toggleFullscreen() {
        const container = el('tn-card');
        if (!container) return;
        if (document.fullscreenElement) {
          document.exitFullscreen().catch(() => {});
        } else if (container.classList.contains('tn-fullscreen-fallback')) {
          container.classList.remove('tn-fullscreen-fallback');
        } else {
          container.requestFullscreen()
            .catch(() => {
              container.classList.add('tn-fullscreen-fallback');
            });
        }
      },

      confirmSwap() {
        el('tn-swap')?.classList.remove('tn-swap-active');
        setTimeout(() => {
          save({ ...score, areSidesSwapped: !score.areSidesSwapped });
        }, 500);
      },
    };

    (window as unknown as Record<string, TennisAPI>).tennis = api;

    const fsBtn = card.querySelector('[data-tn-fs]');
    fsBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      api.toggleFullscreen();
    });

    document.addEventListener('fullscreenchange', () => {
      const isFs = !!document.fullscreenElement;
      card.classList.toggle('tn-fullscreen-on', isFs);
      if (!isFs) {
        card.classList.remove('tn-fullscreen-fallback');
      }
    });

    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (target.closest('[data-close-winner]')) {
        el('tn-winner')?.classList.remove('tn-winner-active');
        api.resetAll();
        return;
      }
      if (target.closest('[data-tn-swap-btn]')) {
        api.confirmSwap();
        return;
      }
      if (target.closest('#tn-modal-cancel')) {
        api.cancelReset();
        return;
      }
      if (target.closest('#tn-modal-confirm')) {
        api.confirmReset();
        return;
      }
      if (target.closest('[data-tn-reset]')) {
        api.reset();
        return;
      }
      if (target.closest('[data-mode-bo3]')) {
        api.setMode('bo3');
        return;
      }
      if (target.closest('[data-mode-bo5]')) {
        api.setMode('bo5');
        return;
      }

      const halfA = target.closest('#tn-court-half-a');
      if (halfA && !target.closest('.tn-player-input') && !target.closest('.tn-hud-sets')) {
        api.addPoint('a', e);
        return;
      }
      const halfB = target.closest('#tn-court-half-b');
      if (halfB && !target.closest('.tn-player-input') && !target.closest('.tn-hud-sets')) {
        api.addPoint('b', e);
        return;
      }
      if (target.closest('[data-minus-a]')) {
        api.minusPoint('a');
        return;
      }
      if (target.closest('[data-minus-b]')) {
        api.minusPoint('b');
        return;
      }
    });

    [na, nb].forEach((inp) => {
      if (!inp) return;
      inp.addEventListener('input', () => {
        const a = (document.getElementById('tn-name-a') as HTMLInputElement)?.value || 'Player 1';
        const b = (document.getElementById('tn-name-b') as HTMLInputElement)?.value || 'Player 2';
        saveNames(a, b);
        save(score);
      });
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
}
