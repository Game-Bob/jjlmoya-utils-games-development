import type { StreetballMatchState } from './game-logic';
import type { StreetballScoreKeeperUI } from './ui';
import { playBeep, playBuzzer } from './audio';

export function el(id: string): HTMLElement | null {
  return document.getElementById(id);
}

let lastShotClockMs = 12000;
let lastWinner: 'a' | 'b' | null = null;
let lastScoreA = 0;
let lastScoreB = 0;
let lastFoulsA = 0;
let lastFoulsB = 0;

export function triggerScreenShake(): void {
  const card = el('tn-card');
  if (card) {
    card.classList.remove('tn-shaking');
    requestAnimationFrame(() => card.classList.add('tn-shaking'));
    setTimeout(() => card.classList.remove('tn-shaking'), 300);
  }
}

function formatTime(ms: number): string {
  const totalSecs = Math.floor(ms / 1000);
  const mins = Math.floor(totalSecs / 60);
  const secs = totalSecs % 60;
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

function checkShouldBeep(lastSecs: number, currentSecs: number): boolean {
  if (lastSecs === 4 && currentSecs === 3) return true;
  if (lastSecs === 3 && currentSecs === 2) return true;
  if (lastSecs === 2 && currentSecs === 1) return true;
  return false;
}

function triggerShotClockAudioAlert(state: StreetballMatchState, currentSecs: number, lastSecs: number): void {
  if (state.shotClockMs === 0 && lastShotClockMs > 0) {
    playBuzzer();
    return;
  }
  if (!state.shotClockActive || lastShotClockMs <= state.shotClockMs) {
    return;
  }
  if (checkShouldBeep(lastSecs, currentSecs)) {
    playBeep();
  }
}

function triggerShotClockPopAnimation(sEl: HTMLElement, state: StreetballMatchState): void {
  if (Math.abs(state.shotClockMs - lastShotClockMs) > 200) {
    sEl.classList.remove('tn-shot-clock-pop-anim');
    requestAnimationFrame(() => sEl.classList.add('tn-shot-clock-pop-anim'));
    setTimeout(() => sEl.classList.remove('tn-shot-clock-pop-anim'), 300);
  }
}

function updateShotClock(state: StreetballMatchState): void {
  const sEl = el('tn-shot-clock');
  if (!sEl) return;
  const secs = state.shotClockMs / 1000;
  const currentSecs = Math.ceil(secs);
  sEl.textContent = currentSecs.toString();
  sEl.classList.toggle('tn-shot-clock-urgent', secs < 4);
  sEl.classList.toggle('tn-shot-clock-buzzer', state.shotClockMs === 0);

  const lastSecs = Math.ceil(lastShotClockMs / 1000);
  triggerShotClockAudioAlert(state, currentSecs, lastSecs);
  triggerShotClockPopAnimation(sEl, state);
}

function updatePossession(state: StreetballMatchState): void {
  const pA = el('tn-poss-a');
  const pB = el('tn-poss-b');
  if (pA) pA.style.display = state.possession === 'a' ? 'inline-block' : 'none';
  if (pB) pB.style.display = state.possession === 'b' ? 'inline-block' : 'none';
  const court = el('tn-court');
  if (court) {
    court.classList.toggle('tn-poss-a', state.possession === 'a');
    court.classList.toggle('tn-poss-b', state.possession === 'b');
  }
}

function updateFouls(key: 'a' | 'b', state: StreetballMatchState): void {
  const fouls = key === 'a' ? state.teamA.fouls : state.teamB.fouls;
  const fEl = el(`tn-fouls-${key}`);
  if (fEl) {
    const prevFouls = key === 'a' ? lastFoulsA : lastFoulsB;
    fEl.textContent = fouls.toString();
    fEl.classList.toggle('tn-fouls-penalty', fouls >= 7);
    fEl.classList.toggle('tn-fouls-critical', fouls >= 10);
    if (fouls !== prevFouls) {
      fEl.classList.remove('tn-foul-pop-anim');
      requestAnimationFrame(() => fEl.classList.add('tn-foul-pop-anim'));
      setTimeout(() => fEl.classList.remove('tn-foul-pop-anim'), 400);
    }
  }
}

function updateTeamHUD(key: 'a' | 'b', state: StreetballMatchState): void {
  const team = key === 'a' ? state.teamA : state.teamB;
  const sEl = el(`tn-score-${key}`);
  if (sEl) {
    const prevScore = key === 'a' ? lastScoreA : lastScoreB;
    sEl.textContent = team.score.toString();
    if (team.score !== prevScore) {
      sEl.classList.remove('tn-score-pop-anim');
      requestAnimationFrame(() => sEl.classList.add('tn-score-pop-anim'));
      setTimeout(() => sEl.classList.remove('tn-score-pop-anim'), 300);
      triggerScreenShake();
    }
  }
  const tEl = el(`tn-timeouts-${key}`);
  if (tEl) tEl.textContent = team.timeouts.toString();
  updateFouls(key, state);
}

interface Coords {
  top: number;
  left: number;
}

function getBubbleCoordinates(): Coords {
  let top = Math.random() * 60 + 10;
  let left = Math.random() * 60 + 10;
  if (top > 30 && top < 70 && left > 30 && left < 70) {
    if (Math.random() > 0.5) {
      top = top < 50 ? top - 25 : top + 25;
    } else {
      left = left < 50 ? left - 25 : left + 25;
    }
  }
  return { top, left };
}

function styleBubbleElement(bubble: HTMLElement, top: number, left: number): void {
  const isTeamA = Math.random() > 0.5;
  const colorVar = isTeamA ? 'var(--sb-color-accent)' : 'var(--sb-color-pink)';
  bubble.style.setProperty('--bubble-color', colorVar);
  bubble.style.left = `${left}%`;
  bubble.style.top = `${top}%`;
  const dx = (Math.random() - 0.5) * 60;
  const dy = -40 - Math.random() * 40;
  bubble.style.setProperty('--dx', `${dx}px`);
  bubble.style.setProperty('--dy', `${dy}px`);
  const isLeft = Math.random() > 0.5;
  bubble.style.setProperty('--tail-left', isLeft ? '20px' : 'auto');
  bubble.style.setProperty('--tail-right', isLeft ? 'auto' : '20px');
}

let lastBubbleTime = 0;
function spawnTimeoutBubble(): void {
  const ov = el('tn-timeout-overlay');
  if (!ov) return;
  const now = Date.now();
  if (now - lastBubbleTime < 500) return;
  lastBubbleTime = now;

  const bubble = document.createElement('div');
  bubble.className = 'tn-timeout-bubble';
  const texts = ['BLA BLA BLA', 'BLA BLA BLA!', 'BLA...', 'BLA BLA BLA!!!'];
  bubble.textContent = texts[Math.floor(Math.random() * texts.length)];

  const coords = getBubbleCoordinates();
  styleBubbleElement(bubble, coords.top, coords.left);

  ov.appendChild(bubble);
  setTimeout(() => bubble.remove(), 2000);
}

function updateTimeoutOverlay(state: StreetballMatchState): void {
  const ov = el('tn-timeout-overlay');
  const timer = el('tn-timeout-timer');
  if (ov && timer) {
    const wasHidden = ov.style.display === 'none' || ov.style.display === '';
    ov.style.display = state.timeoutActive ? 'flex' : 'none';
    if (state.timeoutActive && wasHidden) {
      ov.classList.remove('tn-timeout-in-anim');
      requestAnimationFrame(() => ov.classList.add('tn-timeout-in-anim'));
    }
    timer.textContent = (state.timeoutTimeMs / 1000).toFixed(1);
    if (state.timeoutActive) {
      spawnTimeoutBubble();
    }
  }
}

export function showWinner(name: string, state: StreetballMatchState): void {
  const w = el('tn-winner');
  const n = el('tn-winner-team');
  if (!w || !n) return;
  n.textContent = name;
  w.classList.add('tn-winner-active');
  if (state.winner && lastWinner !== state.winner) {
    playBuzzer();
  }
}

export function render(state: StreetballMatchState, t: StreetballScoreKeeperUI): void {
  updateTeamHUD('a', state);
  updateTeamHUD('b', state);
  updatePossession(state);
  updateShotClock(state);
  const gEl = el('tn-game-clock');
  if (gEl) gEl.textContent = formatTime(state.gameTimeMs);
  const cb = el('tn-clear-ball-alert');
  if (cb) cb.style.display = state.clearBallNeeded ? 'block' : 'none';
  updateTimeoutOverlay(state);
  if (state.winner) {
    const winnerName = state.winner === 'a' ? t.teamA : t.teamB;
    showWinner(winnerName, state);
  }
  lastShotClockMs = state.shotClockMs;
  lastWinner = state.winner;
  lastScoreA = state.teamA.score;
  lastScoreB = state.teamB.score;
  lastFoulsA = state.teamA.fouls;
  lastFoulsB = state.teamB.fouls;
}
