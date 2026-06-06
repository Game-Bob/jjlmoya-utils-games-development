import type { SnookerMatchState } from './game-logic';
import type { SnookerScoreKeeperUI } from './ui';

export function el(id: string): HTMLElement | null {
  return document.getElementById(id);
}

function renderPanelActive(state: SnookerMatchState): void {
  const pA = el('sn-panel-a');
  const pB = el('sn-panel-b');
  if (pA && pB) {
    pA.classList.toggle('sn-active', state.activePlayer === 'a');
    pB.classList.toggle('sn-active', state.activePlayer === 'b');
  }
}

function renderScores(state: SnookerMatchState, t: SnookerScoreKeeperUI): void {
  renderPanelActive(state);

  const sA = el('sn-score-a');
  const sB = el('sn-score-b');
  if (sA) sA.textContent = String(state.scoreA);
  if (sB) sB.textContent = String(state.scoreB);

  const bA = el('sn-break-a');
  const bB = el('sn-break-b');
  if (bA) bA.textContent = state.activePlayer === 'a' ? `${t.currentBreak}: ${state.currentBreak}` : '';
  if (bB) bB.textContent = state.activePlayer === 'b' ? `${t.currentBreak}: ${state.currentBreak}` : '';
}

function renderPottedStrip(state: SnookerMatchState): void {
  const strip = el('sn-potted-strip');
  if (!strip) return;
  strip.innerHTML = '';
  state.breakBalls.forEach((b) => {
    const ball = document.createElement('div');
    ball.className = `sn-potted-ball sn-ball-${b}`;
    strip.appendChild(ball);
  });
}

function disableAllButtons(btns: { btn: HTMLButtonElement | null; color: string }[]): void {
  btns.forEach(({ btn }) => {
    if (btn) btn.disabled = true;
  });
}

function enableRedIfAvailable(state: SnookerMatchState, btns: { btn: HTMLButtonElement | null; color: string }[]): void {
  const redBtn = btns.find((b) => b.color === 'red')?.btn;
  if (redBtn && state.redsOnTable > 0) redBtn.disabled = false;
}

function enableColorsOnly(btns: { btn: HTMLButtonElement | null; color: string }[]): void {
  btns.forEach(({ btn, color }) => {
    if (btn && color !== 'red') btn.disabled = false;
  });
}

function enableExpectedButtons(
  state: SnookerMatchState,
  btns: { btn: HTMLButtonElement | null; color: string }[]
): void {
  if (state.expecting === 'red') {
    enableRedIfAvailable(state, btns);
  } else if (state.expecting === 'color') {
    enableColorsOnly(btns);
  } else if (state.expecting !== 'ended') {
    const match = btns.find((b) => b.color === state.expecting);
    if (match?.btn) {
      match.btn.disabled = false;
    }
  }
}

function updateButtonsState(
  state: SnookerMatchState,
  btns: { btn: HTMLButtonElement | null; color: string }[]
): void {
  disableAllButtons(btns);
  enableExpectedButtons(state, btns);
}

function renderBallsRack(state: SnookerMatchState): void {
  const btns = ['red', 'yellow', 'green', 'brown', 'blue', 'pink', 'black'].map((color) => ({
    btn: el(`sn-btn-${color}`) as HTMLButtonElement | null,
    color,
  }));
  updateButtonsState(state, btns);
}

function renderStatusBadge(state: SnookerMatchState, t: SnookerScoreKeeperUI): void {
  const badge = el('sn-status-badge');
  if (!badge) return;
  badge.className = 'sn-status-badge';
  if (state.status === 'safe') {
    badge.classList.add('sn-status-safe');
    badge.textContent = t.statusSafe;
  } else if (state.status === 'need-snookers') {
    badge.classList.add('sn-status-need-snookers');
    badge.textContent = t.statusNeedSnookers;
  } else if (state.status === 'deciding-black') {
    badge.classList.add('sn-status-deciding-black');
    badge.textContent = t.statusDecidingBlack;
  } else {
    badge.classList.add('sn-status-normal');
    badge.textContent = t.statusNormal;
  }
}

function renderGauge(state: SnookerMatchState): void {
  const gauge = el('sn-gauge-bar');
  if (!gauge) return;
  const diff = Math.abs(state.scoreA - state.scoreB);
  const rem = state.remainingPoints;
  let pct = 0;
  if (rem > 0) {
    pct = Math.min(100, Math.max(0, (diff / rem) * 100));
  } else {
    pct = diff > 0 ? 100 : 0;
  }
  gauge.style.width = `${pct}%`;
}

export function render(state: SnookerMatchState, t: SnookerScoreKeeperUI): void {
  renderScores(state, t);
  renderPottedStrip(state);
  renderBallsRack(state);
  renderStatusBadge(state, t);
  renderGauge(state);

  const reds = el('sn-reds-remaining');
  if (reds) reds.textContent = String(state.redsOnTable);

  const pts = el('sn-points-remaining');
  if (pts) pts.textContent = String(state.remainingPoints);
}
