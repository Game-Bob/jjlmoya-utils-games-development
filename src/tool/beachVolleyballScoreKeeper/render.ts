import type { BeachVolleyballState } from './game-logic';
import type { BeachVolleyballUI } from './ui';

export function el(id: string): HTMLElement | null {
  return document.getElementById(id);
}

let lastScoreA = 0;
let lastScoreB = 0;
let wakeLock: WakeLockSentinel | null = null;

export async function requestWakeLock(): Promise<void> {
  if ('wakeLock' in navigator) {
    try {
      wakeLock = await navigator.wakeLock.request('screen');
    } catch {}
  }
}

export function releaseWakeLock(): void {
  if (wakeLock) {
    wakeLock.release().then(() => {
      wakeLock = null;
    });
  }
}

export function spawnSandSplash(x: number, y: number): void {
  const container = el('tn-particle-container');
  if (!container) return;
  requestAnimationFrame(() => {
    const rect = container.getBoundingClientRect();
    const relX = x - rect.left;
    const relY = y - rect.top;

    const colors = ['#f4d06f', '#f7d684', '#e9c46a', '#e0b54d', '#f8dd95'];
    for (let i = 0; i < 12; i++) {
      const dot = document.createElement('div');
      dot.className = 'tn-sand-particle';
      dot.style.left = `${relX}px`;
      dot.style.top = `${relY}px`;
      dot.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      const angle = Math.random() * Math.PI * 2;
      const distance = 20 + Math.random() * 40;
      const tx = Math.cos(angle) * distance;
      const ty = -30 - Math.random() * 50;
      dot.style.setProperty('--tx', `${tx}px`);
      dot.style.setProperty('--ty', `${ty}px`);
      container.appendChild(dot);
      setTimeout(() => dot.remove(), 800);
    }
  });
}

export function triggerScreenShake(): void {
  const card = el('tn-card');
  if (card) {
    card.classList.remove('tn-shaking');
    requestAnimationFrame(() => card.classList.add('tn-shaking'));
    setTimeout(() => card.classList.remove('tn-shaking'), 300);
  }
}

function updateSingleTeamServer(isA: boolean, team: 'a' | 'b', server: number): void {
  const activeTeam = isA === (team === 'a');
  const s1 = el(`tn-serve-${team}1`);
  const s2 = el(`tn-serve-${team}2`);
  if (s1) s1.style.display = (activeTeam && server === 1) ? 'inline-block' : 'none';
  if (s2) s2.style.display = (activeTeam && server === 2) ? 'inline-block' : 'none';
}

function updateServerLabels(isA: boolean, serverA: number, serverB: number): void {
  updateSingleTeamServer(isA, 'a', serverA);
  updateSingleTeamServer(isA, 'b', serverB);
}

function updateServingState(state: BeachVolleyballState): void {
  const isA = state.servingTeam === 'a';
  updateServerLabels(isA, state.teamA.lastServer, state.teamB.lastServer);
}

function renderSetHistory(state: BeachVolleyballState): void {
  const container = el('tn-set-history');
  if (!container) return;
  container.innerHTML = '';
  state.setHistory.forEach((score, idx) => {
    const item = document.createElement('div');
    item.className = 'tn-set-score-pill';
    item.textContent = `Set ${idx + 1}: ${score.a} - ${score.b}`;
    container.appendChild(item);
  });
}

function updateCourtVisuals(state: BeachVolleyballState): void {
  const court = el('tn-court');
  if (court) {
    court.classList.toggle('tn-court-swapped', state.swappedCourt);
  }
}

function renderScores(state: BeachVolleyballState): void {
  const scoreA = el('tn-score-a');
  const scoreB = el('tn-score-b');
  if (scoreA) {
    scoreA.textContent = state.teamA.score.toString();
    if (state.teamA.score !== lastScoreA) {
      scoreA.classList.remove('tn-pop-anim');
      requestAnimationFrame(() => scoreA.classList.add('tn-pop-anim'));
      setTimeout(() => scoreA.classList.remove('tn-pop-anim'), 300);
      triggerScreenShake();
    }
  }
  if (scoreB) {
    scoreB.textContent = state.teamB.score.toString();
    if (state.teamB.score !== lastScoreB) {
      scoreB.classList.remove('tn-pop-anim');
      requestAnimationFrame(() => scoreB.classList.add('tn-pop-anim'));
      setTimeout(() => scoreB.classList.remove('tn-pop-anim'), 300);
      triggerScreenShake();
    }
  }
}

function updateSetsScoreCounters(state: BeachVolleyballState): void {
  const setsA = el('tn-sets-a');
  const setsB = el('tn-sets-b');
  if (setsA) setsA.textContent = state.teamA.setsWon.toString();
  if (setsB) setsB.textContent = state.teamB.setsWon.toString();
}

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 0 || !parts[0]) return '?';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + (parts[1] ? parts[1][0] : '')).toUpperCase();
}

function updatePlayerInitials(state: BeachVolleyballState): void {
  const a1 = el('tn-player-a1-initials');
  const a2 = el('tn-player-a2-initials');
  const b1 = el('tn-player-b1-initials');
  const b2 = el('tn-player-b2-initials');
  if (a1) a1.textContent = getInitials(state.teamA.player1);
  if (a2) a2.textContent = getInitials(state.teamA.player2);
  if (b1) b1.textContent = getInitials(state.teamB.player1);
  if (b2) b2.textContent = getInitials(state.teamB.player2);
}

function updateWinnerOverlay(state: BeachVolleyballState): void {
  const winnerOverlay = el('tn-winner-overlay');
  const winnerName = el('tn-winner-name');
  if (!winnerOverlay || !winnerName) return;
  if (state.winner) {
    winnerName.textContent = state.winner === 'a' ? state.teamA.name : state.teamB.name;
    winnerOverlay.classList.add('tn-winner-active');
  } else {
    winnerOverlay.classList.remove('tn-winner-active');
  }
}

export function render(state: BeachVolleyballState, _t: BeachVolleyballUI): void {
  renderScores(state);
  updateSetsScoreCounters(state);

  const setLabel = el('tn-set-label');
  if (setLabel) setLabel.textContent = `SET ${state.currentSet}`;

  updateServingState(state);
  renderSetHistory(state);
  updateCourtVisuals(state);
  updatePlayerInitials(state);

  const swapBanner = el('tn-swap-banner');
  if (swapBanner) {
    swapBanner.style.display = state.showSwapWarning ? 'flex' : 'none';
  }

  updateWinnerOverlay(state);

  lastScoreA = state.teamA.score;
  lastScoreB = state.teamB.score;
}
