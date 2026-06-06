import type { PadelScoreKeeperUI } from './ui';
import type { PadelMatchState, TeamKey } from './game-logic';

export function el(id: string): HTMLElement | null {
  return document.getElementById(id);
}

function updateServerIndicators(state: PadelMatchState): void {
  const ballA = el('tn-ball-a');
  const ballB = el('tn-ball-b');
  if (ballA) ballA.style.display = state.serverTeam === 'a' ? 'inline-block' : 'none';
  if (ballB) ballB.style.display = state.serverTeam === 'b' ? 'inline-block' : 'none';
  const cardA = el('tn-card-a');
  const cardB = el('tn-card-b');
  if (cardA) cardA.classList.toggle('tn-player-card-active', state.serverTeam === 'a');
  if (cardB) cardB.classList.toggle('tn-player-card-active', state.serverTeam === 'b');
}

function getArrowPath(state: PadelMatchState): string {
  if (state.isGoldPoint && !state.receiverSelectionSide) {
    return '';
  }
  const { serverHalf, serverSide, receiverHalf, receiverSide } = getRolePositions(state);
  const x1 = serverSide === 'left' ? 50 : 150;
  const y1 = serverHalf === 'top' ? 50 : 250;
  const x2 = receiverSide === 'left' ? 50 : 150;
  const y2 = receiverHalf === 'top' ? 50 : 250;
  return `M ${x1} ${y1} L ${x2} ${y2}`;
}

function updateServeArrow(state: PadelMatchState): void {
  const path = el('tn-serve-path');
  if (path) {
    const dAttr = getArrowPath(state);
    path.setAttribute('d', dAttr);
  }
}

function updateSetsWon(key: TeamKey, state: PadelMatchState): void {
  const team = key === 'a' ? state.teamA : state.teamB;
  const setsContainer = el(`tn-sets-${key}`);
  if (setsContainer) {
    setsContainer.innerHTML = '';
    team.sets.forEach((setVal) => {
      const box = document.createElement('span');
      box.className = 'tn-set-box';
      box.textContent = String(setVal);
      setsContainer.appendChild(box);
    });
    if (!state.winner) {
      const currentBox = document.createElement('span');
      currentBox.className = 'tn-set-box tn-set-box-current';
      currentBox.textContent = String(team.games);
      setsContainer.appendChild(currentBox);
    }
  }
}

function getScoreDisplay(teamPoints: number, teamScore: string, state: PadelMatchState, gpLabel: string): string {
  if (state.isTiebreak) {
    return String(teamPoints);
  }
  if (state.isGoldPoint) {
    return gpLabel;
  }
  return teamScore;
}

function updatePointScores(state: PadelMatchState, t: PadelScoreKeeperUI): void {
  const sa = el('tn-score-a');
  const sb = el('tn-score-b');
  if (sa) {
    sa.textContent = getScoreDisplay(state.teamA.tiebreakPoints, state.teamA.score, state, t.goldPoint);
  }
  if (sb) {
    sb.textContent = getScoreDisplay(state.teamB.tiebreakPoints, state.teamB.score, state, t.goldPoint);
  }
}

function updateGoldPointModal(state: PadelMatchState): void {
  const gpModal = el('tn-goldpoint-modal');
  if (gpModal) {
    const showGp = state.isGoldPoint && !state.receiverSelectionSide;
    gpModal.classList.toggle('tn-gp-active', !!showGp);
  }
}

function clearQuadRoles(): void {
  const quads = document.querySelectorAll('.tn-court-quadrant');
  quads.forEach((q) => {
    q.classList.remove('tn-active-server', 'tn-active-receiver');
  });
}

interface CourtPositions {
  serverHalf: 'top' | 'bottom';
  serverSide: 'left' | 'right';
  receiverHalf: 'top' | 'bottom';
  receiverSide: 'left' | 'right';
}

function getStandardRolePositions(state: PadelMatchState): CourtPositions {
  const isServerA = state.serverTeam === 'a';
  const serverHalf: 'top' | 'bottom' = ((isServerA && state.endsSwapped) || (!isServerA && !state.endsSwapped)) ? 'top' : 'bottom';
  const serverSide: 'left' | 'right' = state.serverPosition === 'deuce' ? 'right' : 'left';
  const receiverHalf: 'top' | 'bottom' = serverHalf === 'top' ? 'bottom' : 'top';
  const receiverSide: 'left' | 'right' = serverSide === 'right' ? 'left' : 'right';
  return { serverHalf, serverSide, receiverHalf, receiverSide };
}

function getGoldPointRolePositions(state: PadelMatchState, side: 'left' | 'right'): CourtPositions {
  const isServerA = state.serverTeam === 'a';
  const serverHalf: 'top' | 'bottom' = ((isServerA && state.endsSwapped) || (!isServerA && !state.endsSwapped)) ? 'top' : 'bottom';
  const receiverHalf: 'top' | 'bottom' = serverHalf === 'top' ? 'bottom' : 'top';
  return {
    serverHalf,
    serverSide: side,
    receiverHalf,
    receiverSide: side
  };
}

function getRolePositions(state: PadelMatchState): CourtPositions {
  if (state.isGoldPoint && state.receiverSelectionSide) {
    return getGoldPointRolePositions(state, state.receiverSelectionSide);
  }
  return getStandardRolePositions(state);
}

function updateQuadRoles(state: PadelMatchState): void {
  clearQuadRoles();
  const { serverHalf, serverSide, receiverHalf, receiverSide } = getRolePositions(state);
  const serverEl = document.querySelector(`#tn-court-half-${serverHalf === 'top' ? 'b' : 'a'} [data-quad="${serverSide}"]`);
  if (serverEl) {
    serverEl.classList.add('tn-active-server');
  }
  const receiverEl = document.querySelector(`#tn-court-half-${receiverHalf === 'top' ? 'b' : 'a'} [data-quad="${receiverSide}"]`);
  if (receiverEl) {
    receiverEl.classList.add('tn-active-receiver');
  }
}

function updateSideLabels(state: PadelMatchState, labelA: string, labelB: string): void {
  const lblTop = el('tn-court-label-top');
  const lblBottom = el('tn-court-label-bottom');
  if (!lblTop || !lblBottom) return;
  if (state.endsSwapped) {
    lblTop.textContent = labelA;
    lblTop.className = 'tn-court-side-label tn-side-label-top tn-label-team-a';
    lblBottom.textContent = labelB;
    lblBottom.className = 'tn-court-side-label tn-side-label-bottom tn-label-team-b';
  } else {
    lblTop.textContent = labelB;
    lblTop.className = 'tn-court-side-label tn-side-label-top tn-label-team-b';
    lblBottom.textContent = labelA;
    lblBottom.className = 'tn-court-side-label tn-side-label-bottom tn-label-team-a';
  }
}

function updateCourtHalves(state: PadelMatchState): void {
  const halfB = el('tn-court-half-b');
  const halfA = el('tn-court-half-a');
  if (!halfB || !halfA) return;
  if (state.endsSwapped) {
    halfB.className = 'tn-court-half tn-court-top tn-team-a-side';
    halfA.className = 'tn-court-half tn-court-bottom tn-team-b-side';
  } else {
    halfB.className = 'tn-court-half tn-court-top tn-team-b-side';
    halfA.className = 'tn-court-half tn-court-bottom tn-team-a-side';
  }
  const isServerA = state.serverTeam === 'a';
  const serverOnTop = (isServerA && state.endsSwapped) || (!isServerA && !state.endsSwapped);
  if (serverOnTop) {
    halfB.classList.add('tn-serving-side');
  } else {
    halfA.classList.add('tn-serving-side');
  }
}

function updateCourtShatter(state: PadelMatchState, t: PadelScoreKeeperUI): void {
  const court = el('tn-court');
  if (court) {
    court.classList.toggle('tn-swapped', state.endsSwapped);
  }
  const nameA = el('tn-name-a') as HTMLInputElement;
  const nameB = el('tn-name-b') as HTMLInputElement;
  const labelA = nameA ? nameA.value : t.playerA;
  const labelB = nameB ? nameB.value : t.playerB;
  updateSideLabels(state, labelA, labelB);
  updateCourtHalves(state);
}

export function render(state: PadelMatchState, t: PadelScoreKeeperUI): void {
  updateServerIndicators(state);
  updateServeArrow(state);
  updateSetsWon('a', state);
  updateSetsWon('b', state);
  updatePointScores(state, t);
  updateGoldPointModal(state);
  updateCourtShatter(state, t);
  updateQuadRoles(state);
  if (state.winner) {
    const winnerName = state.winner === 'a' ? t.playerA : t.playerB;
    showWinner(winnerName);
  }
}

export function showWinner(name: string): void {
  const w = el('tn-winner');
  const n = el('tn-winner-team');
  if (!w || !n) return;
  n.textContent = name;
  w.classList.add('tn-winner-active');
  const c = el('tn-confetti');
  if (!c) return;
  c.innerHTML = '';
  const colors = ['#10b981', '#0d9488', '#ffffff', '#ef4444', '#f59e0b'];
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
