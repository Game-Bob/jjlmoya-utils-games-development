import type { StreetballScoreKeeperUI } from './ui';
import {
  type StreetballMatchState, createInitialMatch, processPoint, processFoul,
  togglePossession, clearBall, triggerTimeout, tickGame
} from './game-logic';
import { el, render } from './render';
import { spawnParticle } from './particles';
import { setMuted, getMuted } from './audio';

const STORAGE_KEY = 'sb_match_state';
const NAMES_KEY = 'sb_names';

interface MatchContext {
  state: StreetballMatchState;
  history: StreetballMatchState[];
}

class StreetballController {
  constructor(
    private ctx: MatchContext,
    private t: StreetballScoreKeeperUI,
    private save: (s: StreetballMatchState) => void
  ) {}

  handlePoint(team: 'a' | 'b', points: number, e: MouseEvent): void {
    const next = processPoint(this.ctx.state, team, points);
    spawnParticle(e.clientX, e.clientY, `+${points}`);
    this.save(next);
  }

  handleFoul(team: 'a' | 'b', e: MouseEvent): void {
    const next = processFoul(this.ctx.state, team);
    spawnParticle(e.clientX, e.clientY, 'FOUL');
    this.save(next);
  }

  handleCourtClick(target: HTMLElement, e: MouseEvent): void {
    const team = this.ctx.state.possession;
    const isOutside = target.classList.contains('tn-court-arc-inner');
    const points = isOutside ? 2 : 1;
    this.handlePoint(team, points, e);
  }
}

function loadNames(): { a: string; b: string } {
  try {
    return JSON.parse(localStorage.getItem(NAMES_KEY) || '{"a":"Team 1","b":"Team 2"}');
  } catch {
    return { a: 'Team 1', b: 'Team 2' };
  }
}

function saveNames(a: string, b: string): void {
  localStorage.setItem(NAMES_KEY, JSON.stringify({ a, b }));
}

function setupNames(ctx: MatchContext, t: StreetballScoreKeeperUI): void {
  const nA = el('tn-name-a') as HTMLInputElement;
  const nB = el('tn-name-b') as HTMLInputElement;
  const saved = loadNames();
  t.teamA = saved.a;
  t.teamB = saved.b;
  if (nA) nA.value = saved.a;
  if (nB) nB.value = saved.b;
  [nA, nB].forEach((inp) => {
    inp?.addEventListener('input', () => {
      const a = (el('tn-name-a') as HTMLInputElement)?.value || 'Team 1';
      const b = (el('tn-name-b') as HTMLInputElement)?.value || 'Team 2';
      saveNames(a, b);
      t.teamA = a;
      t.teamB = b;
      render(ctx.state, t);
    });
  });
}

function runTimerTick(ctx: MatchContext, t: StreetballScoreKeeperUI, save: (s: StreetballMatchState) => void): void {
  setInterval(() => {
    if (ctx.state.gameTimeActive || ctx.state.shotClockActive || ctx.state.timeoutActive) {
      const next = tickGame(ctx.state, 100);
      save(next);
    }
  }, 100);
}

function setupShotClockActions(ctx: MatchContext, save: (s: StreetballMatchState) => void): void {
  const sc = el('tn-shot-clock-box');
  sc?.addEventListener('click', () => {
    const next = { ...ctx.state, shotClockMs: 12 * 1000, shotClockActive: ctx.state.gameTimeActive };
    save(next);
  });
  sc?.addEventListener('dblclick', (e) => {
    e.stopPropagation();
    const next = { ...ctx.state, shotClockActive: !ctx.state.shotClockActive };
    save(next);
  });
  el('tn-btn-reset-14')?.addEventListener('click', () => {
    const next = { ...ctx.state, shotClockMs: 14 * 1000, shotClockActive: ctx.state.gameTimeActive };
    save(next);
  });
}

function setupClockToggle(ctx: MatchContext, save: (s: StreetballMatchState) => void): void {
  el('tn-btn-start-clock')?.addEventListener('click', () => {
    const next = {
      ...ctx.state,
      gameTimeActive: !ctx.state.gameTimeActive,
      shotClockActive: !ctx.state.gameTimeActive,
      shotClockMs: (!ctx.state.gameTimeActive && ctx.state.shotClockMs === 0) ? 12 * 1000 : ctx.state.shotClockMs
    };
    save(next);
  });
}

function setupClearBallToggle(ctx: MatchContext, save: (s: StreetballMatchState) => void): void {
  el('tn-clear-ball-alert')?.addEventListener('click', () => {
    save(clearBall(ctx.state));
  });
}

function setupPossessionToggle(ctx: MatchContext, save: (s: StreetballMatchState) => void): void {
  el('tn-poss-toggle')?.addEventListener('click', () => {
    const next = togglePossession(ctx.state);
    next.gameTimeActive = true;
    next.shotClockActive = true;
    save(next);
  });
}

function setupUndoAction(ctx: MatchContext, t: StreetballScoreKeeperUI): void {
  el('tn-undo-btn')?.addEventListener('click', () => {
    const prev = ctx.history.pop();
    if (prev) {
      ctx.state = prev;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(ctx.state));
      render(ctx.state, t);
      const card = el('tn-card');
      if (card) {
        card.classList.remove('tn-undo-anim');
        requestAnimationFrame(() => card.classList.add('tn-undo-anim'));
        setTimeout(() => card.classList.remove('tn-undo-anim'), 300);
      }
    }
  });
}

function setupMainControls(ctx: MatchContext, t: StreetballScoreKeeperUI, save: (s: StreetballMatchState) => void): void {
  setupClockToggle(ctx, save);
  setupClearBallToggle(ctx, save);
  setupPossessionToggle(ctx, save);
  setupUndoAction(ctx, t);
}

function setupResetModal(ctx: MatchContext, t: StreetballScoreKeeperUI, save: (s: StreetballMatchState) => void): void {
  el('tn-reset-btn')?.addEventListener('click', () => el('tn-modal')?.classList.add('tn-reset-active'));
  el('tn-modal-cancel')?.addEventListener('click', () => el('tn-modal')?.classList.remove('tn-reset-active'));
  el('tn-modal-confirm')?.addEventListener('click', () => {
    ctx.history = [];
    el('tn-modal')?.classList.remove('tn-reset-active');
    save(createInitialMatch());
  });
  el('tn-winner')?.addEventListener('click', (e) => {
    if ((e.target as HTMLElement).closest('[data-close-winner]')) {
      el('tn-winner')?.classList.remove('tn-winner-active');
      ctx.history = [];
      save(createInitialMatch());
    }
  });
}

function handleButtonPressFeedback(target: HTMLElement): void {
  const btn = target.closest('button, .tn-clock-box, .tn-stat-box');
  if (btn) {
    btn.classList.remove('tn-btn-press-anim');
    requestAnimationFrame(() => btn.classList.add('tn-btn-press-anim'));
    setTimeout(() => btn.classList.remove('tn-btn-press-anim'), 150);
  }
}

function handleInteractionDelegates(ctrl: StreetballController, target: HTMLElement, e: MouseEvent): void {
  if (target.closest('.tn-court-quadrant') || target.closest('.tn-court-arc-outer')) {
    ctrl.handleCourtClick(target, e);
    return;
  }
  const btnPoint = target.closest('[data-point-team]') as HTMLElement;
  if (btnPoint) {
    const team = btnPoint.getAttribute('data-point-team') as 'a' | 'b';
    const pts = parseInt(btnPoint.getAttribute('data-points') || '1', 10);
    ctrl.handlePoint(team, pts, e);
  }
  const btnFoul = target.closest('[data-foul-team]') as HTMLElement;
  if (btnFoul) {
    ctrl.handleFoul(btnFoul.getAttribute('data-foul-team') as 'a' | 'b', e);
  }
  const btnTimeout = target.closest('[data-timeout-team]') as HTMLElement;
  if (btnTimeout) {
    const next = triggerTimeout(ctrl['ctx'].state, btnTimeout.getAttribute('data-timeout-team') as 'a' | 'b');
    ctrl['save'](next);
  }
}

function bindInteractions(ctrl: StreetballController): void {
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    handleButtonPressFeedback(target);
    handleInteractionDelegates(ctrl, target, e);
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
  document.addEventListener('fullscreenchange', () => {
    const isFs = !!document.fullscreenElement;
    card.classList.toggle('tn-fullscreen-on', isFs);
    if (!isFs) card.classList.remove('tn-fullscreen-fallback');
  });
}

function setupSoundAndTimeoutControls(ctx: MatchContext, save: (s: StreetballMatchState) => void): void {
  el('tn-sound-btn')?.addEventListener('click', () => {
    setMuted(!getMuted());
  });
  el('tn-timeout-overlay')?.addEventListener('click', () => {
    if (ctx.state.timeoutActive) {
      const next = { ...ctx.state, timeoutActive: false, timeoutTimeMs: 0, timeoutTeam: null };
      save(next);
    }
  });
}

export function initStreetballScoreKeeper(): void {
  const card = el('tn-card');
  if (!card) return;
  const t: StreetballScoreKeeperUI = JSON.parse(card.getAttribute('data-tn-ui') || '{}') as StreetballScoreKeeperUI;
  const rawState = localStorage.getItem(STORAGE_KEY);
  const ctx: MatchContext = {
    state: rawState ? JSON.parse(rawState) : createInitialMatch(),
    history: [],
  };
  const save = (s: StreetballMatchState) => {
    ctx.history.push(JSON.parse(JSON.stringify(ctx.state)));
    if (ctx.history.length > 50) ctx.history.shift();
    ctx.state = s;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
    render(s, t);
  };
  const ctrl = new StreetballController(ctx, t, save);
  setupNames(ctx, t);
  setupShotClockActions(ctx, save);
  setupMainControls(ctx, t, save);
  setupResetModal(ctx, t, save);
  bindInteractions(ctrl);
  setupFullscreen();
  setupSoundAndTimeoutControls(ctx, save);
  setMuted(getMuted());
  runTimerTick(ctx, t, save);
  render(ctx.state, t);
}
