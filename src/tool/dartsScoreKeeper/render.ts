import type { DartsScoreKeeperUI } from './ui';
import type { DartsMatchScore, PlayerKey } from './game-logic';
import { getCheckoutSuggestion } from './game-logic';

export function el(id: string): HTMLElement | null {
  return document.getElementById(id);
}

function getAverage(totalPoints: number, dartsThrown: number): string {
  if (dartsThrown === 0) return '0.00';
  return ((totalPoints / dartsThrown) * 3).toFixed(2);
}

function updatePlayerUI(key: PlayerKey, score: DartsMatchScore, t: DartsScoreKeeperUI): void {
  const player = key === 'a' ? score.playerA : score.playerB;
  const card = el(`tn-card-${key}`);
  if (card) {
    card.classList.toggle('tn-player-card-active', score.activePlayer === key);
  }
  const scoreEl = el(`tn-score-${key}`);
  if (scoreEl) {
    scoreEl.textContent = String(player.remainingScore);
  }
  const avgEl = el(`tn-avg-${key}`);
  if (avgEl) {
    avgEl.textContent = `${t.average}: ${getAverage(player.totalPointsScored, player.dartsThrown)}`;
  }
  const legsContainer = el(`tn-legs-indicator-${key}`);
  if (legsContainer) {
    const dots = legsContainer.querySelectorAll('.tn-legs-dot');
    dots.forEach((dot, idx) => {
      dot.classList.toggle('tn-legs-dot-won', idx < player.legsWon);
    });
  }
}

function renderCheckoutSuggestion(score: DartsMatchScore, t: DartsScoreKeeperUI): void {
  const activePlayer = score.activePlayer === 'a' ? score.playerA : score.playerB;
  const suggestEl = el('tn-checkout-suggest');
  if (suggestEl) {
    const suggestions = getCheckoutSuggestion(activePlayer.remainingScore, 3 - score.turn.throws.length);
    if (suggestions) {
      suggestEl.textContent = `${t.checkout}: ${suggestions.join(' -> ')}`;
    } else {
      suggestEl.textContent = activePlayer.remainingScore <= 170 ? t.noCheckout : '';
    }
  }
}

function renderTurnDots(score: DartsMatchScore): void {
  const turnDarts = el('tn-turn-darts');
  if (turnDarts) {
    turnDarts.innerHTML = '';
    for (let i = 0; i < 3; i++) {
      const dot = document.createElement('div');
      dot.className = 'tn-dart-dot';
      if (i < score.turn.throws.length) {
        dot.classList.add('tn-dart-dot-thrown');
        dot.textContent = score.turn.throws[i].label;
      }
      turnDarts.appendChild(dot);
    }
  }
}

function renderHistoryHeader(t: DartsScoreKeeperUI, histGrid: HTMLElement): void {
  const nameA = el('tn-name-a') as HTMLInputElement;
  const nameB = el('tn-name-b') as HTMLInputElement;
  const labelA = nameA ? nameA.value : t.playerA;
  const labelB = nameB ? nameB.value : t.playerB;
  const headerRow = document.createElement('div');
  headerRow.className = 'tn-history-header-row';
  headerRow.innerHTML = `
    <span class="tn-hist-name tn-hist-a">${labelA}</span>
    <span class="tn-hist-round-lbl">Rnd</span>
    <span class="tn-hist-name tn-hist-b">${labelB}</span>
  `;
  histGrid.appendChild(headerRow);
}

function renderHistoryRow(round: { roundNum: number; a?: typeof score.history[0]; b?: typeof score.history[0] }, histGrid: HTMLElement): void {
  const row = document.createElement('div');
  row.className = 'tn-history-row';
  const renderTurn = (turn?: typeof round.a) => {
    if (!turn) return `<span class="tn-hist-empty">-</span>`;
    if (turn.isBusted) {
      return `<span class="tn-hist-val tn-hist-busted">Bust <span class="tn-hist-sub">(${turn.scoreBefore})</span></span>`;
    }
    return `<span class="tn-hist-val">${turn.points} <span class="tn-hist-sub">(${turn.scoreAfter})</span></span>`;
  };
  row.innerHTML = `
    <div class="tn-hist-cell tn-hist-cell-a">${renderTurn(round.a)}</div>
    <div class="tn-hist-cell tn-hist-cell-round">${round.roundNum}</div>
    <div class="tn-hist-cell tn-hist-cell-b">${renderTurn(round.b)}</div>
  `;
  histGrid.appendChild(row);
}

function renderHistoryList(score: DartsMatchScore, t: DartsScoreKeeperUI): void {
  const histGrid = el('tn-history-list');
  if (!histGrid) return;
  histGrid.innerHTML = '';
  renderHistoryHeader(t, histGrid);
  interface RoundRow {
    roundNum: number;
    a?: typeof score.history[0];
    b?: typeof score.history[0];
  }
  const rounds: RoundRow[] = [];
  score.history.forEach((rec) => {
    if (rec.player === 'a') {
      rounds.push({ roundNum: rounds.length + 1, a: rec });
    } else {
      const last = rounds[rounds.length - 1];
      if (last && !last.b) {
        last.b = rec;
      } else {
        rounds.push({ roundNum: rounds.length + 1, b: rec });
      }
    }
  });
  rounds.slice(-6).reverse().forEach((round) => {
    renderHistoryRow(round, histGrid);
  });
}

export function render(score: DartsMatchScore, t: DartsScoreKeeperUI): void {
  updatePlayerUI('a', score, t);
  updatePlayerUI('b', score, t);
  renderCheckoutSuggestion(score, t);
  renderTurnDots(score);
  renderHistoryList(score, t);
  if (score.winner) {
    const na = el('tn-name-a') as HTMLInputElement;
    const nb = el('tn-name-b') as HTMLInputElement;
    let winnerName = t.playerB;
    if (score.winner === 'a') {
      winnerName = na ? na.value : t.playerA;
    } else {
      winnerName = nb ? nb.value : t.playerB;
    }
    showWinner(winnerName, score, t);
  }
}

export function showWinner(name: string, score: DartsMatchScore, t: DartsScoreKeeperUI): void {
  const w = el('tn-winner');
  const n = el('tn-winner-team');
  const s = el('tn-winner-score');
  if (!w || !n || !s) return;
  n.textContent = name;
  s.textContent = `${t.leg}: ${score.playerA.legsWon} - ${score.playerB.legsWon}`;
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
