import type { SnookerScoreKeeperUI } from './ui';
import {
  type SnookerMatchState, createInitialMatch, potBall, endTurn, commitFoul
} from './game-logic';
import { el, render } from './render';
import { spawnParticle } from './particles';
import { setMuted, getMuted, playPocket, playBuzzer, playChime } from './audio';

const STORAGE_KEY = 'sn_match_state';
const NAMES_KEY = 'sn_names';

interface MatchContext {
  state: SnookerMatchState;
  history: SnookerMatchState[];
}

function loadNames(): { a: string; b: string } {
  try {
    return JSON.parse(localStorage.getItem(NAMES_KEY) || '{"a":"Player 1","b":"Player 2"}');
  } catch {
    return { a: 'Player 1', b: 'Player 2' };
  }
}

function saveNames(a: string, b: string): void {
  localStorage.setItem(NAMES_KEY, JSON.stringify({ a, b }));
}

function setupNames(ctx: MatchContext, t: SnookerScoreKeeperUI): void {
  const nA = el('sn-name-a') as HTMLInputElement;
  const nB = el('sn-name-b') as HTMLInputElement;
  const saved = loadNames();
  t.player1 = saved.a;
  t.player2 = saved.b;
  if (nA) nA.value = saved.a;
  if (nB) nB.value = saved.b;

  [nA, nB].forEach((inp) => {
    inp?.addEventListener('input', () => {
      const a = (el('sn-name-a') as HTMLInputElement)?.value || 'Player 1';
      const b = (el('sn-name-b') as HTMLInputElement)?.value || 'Player 2';
      saveNames(a, b);
      t.player1 = a;
      t.player2 = b;
      render(ctx.state, t);
    });
  });
}

function setupFullscreen(): void {
  const card = el('sn-card');
  if (!card) return;
  card.querySelector('[data-sn-fs]')?.addEventListener('click', () => {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else {
      card.requestFullscreen().catch(() => card.classList.add('sn-fullscreen-fallback'));
    }
  });

  document.addEventListener('fullscreenchange', () => {
    const isFs = !!document.fullscreenElement;
    card.classList.toggle('sn-fullscreen-on', isFs);
    if (!isFs) card.classList.remove('sn-fullscreen-fallback');
  });
}

function setupSoundAndModal(ctx: MatchContext, save: (s: SnookerMatchState) => void): void {
  el('sn-sound-btn')?.addEventListener('click', () => {
    setMuted(!getMuted());
  });

  setMuted(getMuted());

  el('sn-reset-btn')?.addEventListener('click', () => {
    el('sn-modal')?.classList.add('sn-modal-open');
  });

  el('sn-modal-cancel')?.addEventListener('click', () => {
    el('sn-modal')?.classList.remove('sn-modal-open');
  });

  el('sn-modal-confirm')?.addEventListener('click', () => {
    el('sn-modal')?.classList.remove('sn-modal-open');
    ctx.history = [];
    save(createInitialMatch());
  });
}

function setupInteractionListeners(
  ctx: MatchContext,
  save: (s: SnookerMatchState) => void,
  t: SnookerScoreKeeperUI
): void {
  const undoBtn = el('sn-undo-btn');
  undoBtn?.addEventListener('click', () => {
    const prev = ctx.history.pop();
    if (prev) {
      ctx.state = prev;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(ctx.state));
      render(prev, t);
    }
  });

  const endTurnBtn = el('sn-btn-end-turn');
  endTurnBtn?.addEventListener('click', () => {
    playChime();
    save(endTurn(ctx.state));
  });

  const foulBtn = el('sn-btn-foul');
  foulBtn?.addEventListener('click', () => {
    el('sn-foul-panel')?.classList.toggle('sn-active-foul');
  });
}

const colorHex: Record<string, string> = {
  red: '#ff4d4d',
  yellow: '#ffeb3b',
  green: '#4caf50',
  brown: '#8d6e63',
  blue: '#2196f3',
  pink: '#f48fb1',
  black: '#000000',
};
const valMap: Record<string, number> = {
  red: 1,
  yellow: 2,
  green: 3,
  brown: 4,
  blue: 5,
  pink: 6,
  black: 7,
};

function setupBallButtons(
  ctx: MatchContext,
  save: (s: SnookerMatchState) => void
): void {
  const ballColors = ['red', 'yellow', 'green', 'brown', 'blue', 'pink', 'black'];
  ballColors.forEach((color) => {
    el(`sn-btn-${color}`)?.addEventListener('click', (e) => {
      playPocket();
      const next = potBall(ctx.state, color);
      const points = valMap[color] || 0;
      spawnParticle(e.clientX, e.clientY, `+${points}`, colorHex[color]);
      save(next);
    });
  });
}

function setupFoulButtons(
  ctx: MatchContext,
  save: (s: SnookerMatchState) => void
): void {
  const foulPenalties = [4, 5, 6, 7];
  foulPenalties.forEach((pts) => {
    el(`sn-btn-foul-${pts}`)?.addEventListener('click', (e) => {
      playBuzzer();
      const next = commitFoul(ctx.state, pts);
      spawnParticle(e.clientX, e.clientY, `FOUL +${pts}`, '#f87171');
      el('sn-foul-panel')?.classList.remove('sn-active-foul');
      save(next);
    });
  });
}

function setupPressAnimation(): void {
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const btn = target.closest('button, .sn-action-btn');
    if (btn) {
      btn.classList.remove('sn-btn-press-anim');
      void (btn as HTMLElement).offsetWidth;
      btn.classList.add('sn-btn-press-anim');
      setTimeout(() => btn.classList.remove('sn-btn-press-anim'), 150);
    }
  });
}

export function initSnookerScoreKeeper(): void {
  const card = el('sn-card');
  if (!card) return;

  const t: SnookerScoreKeeperUI = JSON.parse(card.getAttribute('data-sn-ui') || '{}') as SnookerScoreKeeperUI;
  const rawState = localStorage.getItem(STORAGE_KEY);
  
  const ctx: MatchContext = {
    state: rawState ? JSON.parse(rawState) : createInitialMatch(),
    history: [],
  };

  const save = (s: SnookerMatchState) => {
    ctx.history.push(JSON.parse(JSON.stringify(ctx.state)));
    if (ctx.history.length > 50) ctx.history.shift();
    ctx.state = s;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
    render(s, t);
  };

  setupNames(ctx, t);
  setupFullscreen();
  setupSoundAndModal(ctx, save);
  setupInteractionListeners(ctx, save, t);
  setupBallButtons(ctx, save);
  setupFoulButtons(ctx, save);
  setupPressAnimation();

  render(ctx.state, t);
}
