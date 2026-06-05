import type { TennisScoreKeeperUI } from './ui';
import type { MatchScore, PlayerSide } from './game-logic';
import {
  setsNeededForMatchWin,
  getPointLabel,
  checkPointWinnerOpportunity,
  isSetPoint,
  isMatchPoint,
  checkSetOver,
} from './game-logic';

export function el(id: string): HTMLElement | null {
  return document.getElementById(id);
}

export function spawnParticles(container: HTMLElement): void {
  const rect = container.getBoundingClientRect();
  const parent = el('tn-card');
  if (!parent) return;
  const parentRect = parent.getBoundingClientRect();
  const x = rect.left - parentRect.left + rect.width / 2;
  const y = rect.top - parentRect.top + rect.height / 2;

  for (let i = 0; i < 8; i++) {
    const p = document.createElement('div');
    p.className = 'tn-glow-particle';
    p.style.left = `${x}px`;
    p.style.top = `${y}px`;
    const angle = Math.random() * Math.PI * 2;
    const distance = 40 + Math.random() * 60;
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance;
    p.style.setProperty('--tx', `${tx}px`);
    p.style.setProperty('--ty', `${ty}px`);
    p.style.animationDelay = `${Math.random() * 0.05}s`;
    parent.appendChild(p);
    setTimeout(() => p.remove(), 850);
  }
}

export function spawnRipple(e: MouseEvent): void {
  const container = el('tn-ripples');
  if (!container) return;
  const rect = container.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const r = document.createElement('div');
  r.className = 'tn-ripple';
  r.style.left = `${x}px`;
  r.style.top = `${y}px`;
  container.appendChild(r);
  setTimeout(() => r.remove(), 600);
}

function getStatusPlayerName(side: PlayerSide | null, t: TennisScoreKeeperUI): string {
  if (!side) return '';
  const input = document.getElementById(`tn-name-${side}`) as HTMLInputElement;
  return input?.value?.trim() || (side === 'a' ? t.playerA : t.playerB);
}

function isDeuceScore(score: MatchScore): boolean {
  return score.currentGamePointsA >= 3 && score.currentGamePointsB >= 3 && score.currentGamePointsA === score.currentGamePointsB;
}

function renderStatus(score: MatchScore, t: TennisScoreKeeperUI): void {
  const st = el('tn-status');
  if (!st) return;
  const mp = isMatchPoint(score);
  if (mp) { st.textContent = `${getStatusPlayerName(mp, t)} ${t.matchPoint}`; return; }
  const sp = isSetPoint(score);
  if (sp) { st.textContent = `${getStatusPlayerName(sp, t)} ${t.setPoint}`; return; }
  const gp = checkPointWinnerOpportunity(score);
  if (gp) { st.textContent = `${getStatusPlayerName(gp, t)} ${t.gamePoint}`; return; }
  if (score.inTiebreak) { st.textContent = t.tiebreak; return; }
  if (isDeuceScore(score)) { st.textContent = t.deuce; return; }
  st.textContent = '';
}

function buildSetBox(score: MatchScore, i: number): { boxA: HTMLDivElement; boxB: HTMLDivElement } {
  const boxA = document.createElement('div');
  boxA.className = 'tn-set-box';
  const boxB = document.createElement('div');
  boxB.className = 'tn-set-box';
  const activeIndex = score.setHistory.length;

  if (i < score.setHistory.length) {
    const set = score.setHistory[i];
    boxA.textContent = String(set.gamesA);
    boxB.textContent = String(set.gamesB);
    if (set.tiebreakPointsA !== undefined) {
      appendTiebreakScore(boxA, String(set.tiebreakPointsA));
      appendTiebreakScore(boxB, String(set.tiebreakPointsB));
    }
  } else if (i === activeIndex && !checkSetOver(score)) {
    boxA.classList.add('tn-set-box-active');
    boxB.classList.add('tn-set-box-active');
    boxA.textContent = String(score.gamesWonInCurrentSetA);
    boxB.textContent = String(score.gamesWonInCurrentSetB);
    if (score.inTiebreak) {
      appendTiebreakScore(boxA, String(score.tiebreakPointsA));
      appendTiebreakScore(boxB, String(score.tiebreakPointsB));
    }
  } else {
    boxA.textContent = '';
    boxB.textContent = '';
  }
  return { boxA, boxB };
}

function appendTiebreakScore(box: HTMLDivElement, text: string): void {
  const span = document.createElement('span');
  span.className = 'tn-tb-score';
  span.textContent = text;
  box.appendChild(span);
}

function updateSetBoxes(score: MatchScore): void {
  const maxSets = setsNeededForMatchWin(score.format) * 2 - 1;
  const listA = el('tn-set-list-a');
  const listB = el('tn-set-list-b');
  if (!listA || !listB) return;

  listA.innerHTML = '';
  listB.innerHTML = '';

  for (let i = 0; i < maxSets; i++) {
    const { boxA, boxB } = buildSetBox(score, i);
    listA.appendChild(boxA);
    listB.appendChild(boxB);
  }
}

function renderSetDots(score: MatchScore): void {
  const setsA = el('tn-sets-a');
  const setsB = el('tn-sets-b');
  if (!setsA || !setsB) return;
  const need = setsNeededForMatchWin(score.format);
  setsA.innerHTML = '';
  setsB.innerHTML = '';
  for (let i = 0; i < need; i++) {
    const dotA = document.createElement('div');
    dotA.className = 'tn-hud-dot' + (i < score.setsWonA ? ' tn-hud-dot-won' : '');
    setsA.appendChild(dotA);
    const dotB = document.createElement('div');
    dotB.className = 'tn-hud-dot' + (i < score.setsWonB ? ' tn-hud-dot-won' : '');
    setsB.appendChild(dotB);
  }
}

function renderServeIndicators(score: MatchScore): void {
  const reqA = el('tn-racquet-a');
  const reqB = el('tn-racquet-b');
  if (reqA) reqA.classList.toggle('tn-racquet-serving', score.servingPlayer === 'a');
  if (reqB) reqB.classList.toggle('tn-racquet-serving', score.servingPlayer === 'b');

  const serveA = el('tn-hist-serve-a');
  const serveB = el('tn-hist-serve-b');
  if (serveA && serveB) {
    const ballSvg = `<svg class="tn-ball-indicator" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="#ccff00"/><path d="M6 6C8.5 8.5 8.5 15.5 6 18" stroke="#ffffff" stroke-width="1.5" fill="none" stroke-linecap="round"/><path d="M18 6C15.5 8.5 15.5 15.5 18 18" stroke="#ffffff" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>`;
    serveA.innerHTML = score.servingPlayer === 'a' ? ballSvg : '';
    serveB.innerHTML = score.servingPlayer === 'b' ? ballSvg : '';
  }
}

function renderHistoryOrder(score: MatchScore): void {
  const histGrid = el('tn-history');
  const rowA = el('tn-row-a');
  const rowB = el('tn-row-b');
  if (histGrid && rowA && rowB) {
    if (score.areSidesSwapped) histGrid.insertBefore(rowB, rowA);
    else histGrid.insertBefore(rowA, rowB);
  }
}

function getInputName(side: PlayerSide, fallback: string): string {
  const inp = document.getElementById(`tn-name-${side}`) as HTMLInputElement;
  return inp?.value?.trim() || fallback;
}

function renderPlayerNames(score: MatchScore, t: TennisScoreKeeperUI): void {
  const nameA = getInputName('a', t.playerA);
  const nameB = getInputName('b', t.playerB);
  const hA = el('tn-hist-name-a');
  if (hA) hA.textContent = nameA;
  const hB = el('tn-hist-name-b');
  if (hB) hB.textContent = nameB;
}

function renderScores(score: MatchScore, t: TennisScoreKeeperUI): void {
  const labelA = getPointLabel(score.currentGamePointsA, score.currentGamePointsB, score.inTiebreak);
  const labelB = getPointLabel(score.currentGamePointsB, score.currentGamePointsA, score.inTiebreak);
  const sA = el('tn-score-val-a');
  if (sA) sA.textContent = labelA;
  const sB = el('tn-score-val-b');
  if (sB) sB.textContent = labelB;
  const gA = el('tn-games-a');
  if (gA) gA.textContent = `${t.game}: ${score.gamesWonInCurrentSetA}`;
  const gB = el('tn-games-b');
  if (gB) gB.textContent = `${t.game}: ${score.gamesWonInCurrentSetB}`;
}

export function render(score: MatchScore, t: TennisScoreKeeperUI): void {
  renderScores(score, t);
  renderPlayerNames(score, t);
  renderSetDots(score);
  updateSetBoxes(score);
  renderServeIndicators(score);

  const board = el('tn-interactive-court');
  if (board) board.classList.toggle('tn-swapped', score.areSidesSwapped);

  renderHistoryOrder(score);
  renderStatus(score, t);
}

export function showWinner(name: string, score: MatchScore): void {
  const w = el('tn-winner');
  const n = el('tn-winner-team');
  const s = el('tn-winner-score');
  if (!w || !n || !s) return;

  n.textContent = name;
  s.textContent = score.setHistory.map((set) => `${set.gamesA}-${set.gamesB}`).join(', ');
  w.classList.add('tn-winner-active');

  const c = el('tn-confetti');
  if (!c) return;
  c.innerHTML = '';

  const colors = ['#ccff00', '#b89047', '#ffffff', '#22c55e', '#ef4444'];
  for (let i = 0; i < 50; i++) {
    const d = document.createElement('div');
    d.className = 'tn-confetti-particle';
    d.style.left = `${Math.random() * 100}%`;
    d.style.background = colors[Math.floor(Math.random() * colors.length)];
    d.style.animationDuration = `${2 + Math.random() * 3}s`;
    d.style.animationDelay = `${Math.random() * 0.6}s`;
    c.appendChild(d);
  }
}

export function restoreDomOrder(): void {
  const board = el('tn-interactive-court');
  if (board) {
    const sideA = el('tn-court-half-a');
    const sideB = el('tn-court-half-b');
    if (sideA && sideB) board.insertBefore(sideA, sideB);
  }
  const histGrid = el('tn-history');
  if (histGrid) {
    const rowA = el('tn-row-a');
    const rowB = el('tn-row-b');
    if (rowA && rowB) histGrid.insertBefore(rowA, rowB);
  }
}
