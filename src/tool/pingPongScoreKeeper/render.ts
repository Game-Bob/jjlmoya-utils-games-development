import type { PingPongScoreKeeperUI } from './ui';
import type { MatchScore, PlayerSide } from './game-logic';
import { gamesNeededForMatchWin, checkGamePointOpportunity, checkMatchPointOpportunity } from './game-logic';

const PARTICLE_TEXTS = ['+1', 'ACE', 'YES', 'NICE'];

function rand<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function el(id: string): HTMLElement | null {
  return document.getElementById(id);
}

export function spawnParticles(container: HTMLElement): void {
  for (let i = 0; i < 6; i++) {
    const p = document.createElement('div');
    p.className = 'pp-p';
    p.textContent = rand(PARTICLE_TEXTS);
    p.style.left = `${Math.random() * 100}%`;
    p.style.top = `${Math.random() * 100}%`;
    p.style.fontSize = `${0.7 + Math.random() * 1}rem`;
    p.style.transform = `rotate(${Math.random() * 40 - 20}deg)`;
    p.style.animationDelay = `${i * 0.07}s`;
    container.appendChild(p);
    setTimeout(() => p.remove(), 900 + i * 70);
  }
}

function renderDots(id: string, won: number, need: number, side: string): void {
  const c = el(id);
  if (!c) return;
  c.innerHTML = '';
  for (let i = 0; i < need; i++) {
    const d = document.createElement('div');
    d.className = `pp-dot${i < won ? ' pp-dot-on' : ''} pp-dot-${side}`;
    c.appendChild(d);
  }
}

function renderStatus(score: MatchScore, t: PingPongScoreKeeperUI): void {
  const st = el('pp-status');
  if (!st) return;
  const getN = (s: PlayerSide) => (document.getElementById(`pp-name-${s}`) as HTMLInputElement)?.value || (s === 'a' ? t.playerA : t.playerB);
  const mp = checkMatchPointOpportunity(score);
  const gp = checkGamePointOpportunity(score);
  if (mp) st.textContent = `${getN(mp)} ${t.matchPoint}`;
  else if (gp) st.textContent = `${getN(gp)} ${t.gamePoint}`;
  else st.textContent = '';
}

export function render(score: MatchScore, t: PingPongScoreKeeperUI): void {
  const set = (id: string, v: string | number) => { const e = el(id); if (e) e.textContent = String(v); };
  set('pp-score-a', score.currentGamePointsA);
  set('pp-score-b', score.currentGamePointsB);
  const ba = el('pp-ball-a');
  const bb = el('pp-ball-b');
  if (ba) ba.classList.toggle('pp-ball-on', score.servingPlayer === 'a');
  if (bb) bb.classList.toggle('pp-ball-on', score.servingPlayer === 'b');
  renderDots('pp-dots-a', score.gamesWonByA, gamesNeededForMatchWin(score.format), 'a');
  renderDots('pp-dots-b', score.gamesWonByB, gamesNeededForMatchWin(score.format), 'b');
  renderStatus(score, t);
}

export function showWinner(name: string, gamesA: number, gamesB: number): void {
  const w = el('pp-winner');
  const n = el('pp-winner-team');
  const s = el('pp-winner-score');
  if (!w || !n || !s) return;
  n.textContent = name;
  s.textContent = `${gamesA} \u2212 ${gamesB}`;
  w.classList.add('pp-winner-on');
  const c = el('pp-confetti');
  if (!c) return;
  const colors = ['#1a5276', '#2ecc71', '#f1c40f', '#e74c3c', '#8e44ad'];
  for (let i = 0; i < 40; i++) {
    const d = document.createElement('div');
    d.className = 'pp-c';
    d.style.left = `${Math.random() * 100}%`;
    d.style.background = colors[Math.floor(Math.random() * colors.length)];
    d.style.animationDuration = `${2 + Math.random() * 3}s`;
    d.style.animationDelay = `${Math.random() * 0.6}s`;
    c.appendChild(d);
  }
  setTimeout(() => { c.innerHTML = ''; }, 5000);
}
