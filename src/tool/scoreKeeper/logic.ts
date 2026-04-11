import { SPORTS, SPORT_NAME_KEYS } from './sports';
import type { SportConfig, SportId } from './sports';
import type { ScoreKeeperUI } from './ui';

const g = (id: string) => document.getElementById(id);
class GameManager {
  currentSport: SportConfig;
  t: ScoreKeeperUI;
  scoreA = 0; scoreB = 0;
  setsA = 0; setsB = 0;
  gamesA = 0; gamesB = 0;
  isTieBreak = false;
  server: 'A' | 'B' | null = null;
  pointsSinceServeChange = 0; hasShownWin = false;
  ui = {
    select: g('sport-select') as HTMLSelectElement,
    scoreA: g('score-a'), scoreB: g('score-b'),
    touchLayerA: g('touch-layer-a'), touchLayerB: g('touch-layer-b'),
    statsA: g('stats-a'), statsB: g('stats-b'),
    setsA: g('sets-a'), setsB: g('sets-b'),
    gamesA: g('games-a'), gamesB: g('games-b'),
    serveA: g('serve-a'), serveB: g('serve-b'),
    modal: g('winner-modal'), winnerName: g('winner-name'),
  };

  constructor() {
    const root = g('scoreboard-app');
    this.t = JSON.parse(root?.dataset.skUi ?? '{}') as ScoreKeeperUI;
    this.currentSport = SPORTS.simple;
    this.populateSportSelect();
    this.bindEvents();
    this.setSport('simple');
    (window as unknown as Record<string, unknown>).game = this;
  }

  private populateSportSelect() {
    Object.entries(SPORTS).forEach(([id, s]) => {
      const o = document.createElement('option');
      o.value = s.id;
      o.text = this.t[SPORT_NAME_KEYS[id as SportId]] || id;
      this.ui.select.appendChild(o);
    });
  }

  private bindEvents() {
    this.ui.select.addEventListener('change', (e) => {
      this.setSport((e.target as HTMLSelectElement).value as SportId);
    });
    g('btn-reset')?.addEventListener('click', () => {
      if (confirm(this.t.resetConfirm)) this.reset();
    });
    g('btn-swap')?.addEventListener('click', () => this.swap());
    g('btn-modal-reset')?.addEventListener('click', () => {
      this.reset(); this.ui.modal?.classList.add('sk-hidden');
    });
    g('btn-modal-continue')?.addEventListener('click', () => {
      this.ui.modal?.classList.add('sk-hidden');
    });
  }

  setSport(id: string) {
    this.currentSport = SPORTS[id as SportId] || SPORTS.simple;
    this.reset();
    this.updateLayout();
  }

  private updateLayout() {
    this.setupTouchLayer(this.ui.touchLayerA, 'A');
    this.setupTouchLayer(this.ui.touchLayerB, 'B');
    this.toggleStats(this.currentSport.hasSets ?? this.currentSport.hasGames ?? false);
  }

  private setupTouchLayer(layer: HTMLElement | null, team: 'A' | 'B') {
    if (!layer) return;
    layer.innerHTML = '';
    const incs = this.currentSport.increments;
    if (incs.length === 1) {
      layer.className = 'sk-touch-layer';
      layer.appendChild(this.buildTouchBtn(team, incs[0]!, false));
    } else {
      layer.className = 'sk-touch-layer sk-touch-layer-multi';
      incs.forEach((val) => layer.appendChild(this.buildTouchBtn(team, val, true)));
    }
  }

  private buildTouchBtn(team: 'A' | 'B', val: number, multi: boolean): HTMLButtonElement {
    const btn = document.createElement('button');
    if (multi) {
      btn.className = 'sk-plus-btn'; btn.innerText = `+${val}`;
      btn.onclick = (e) => { e.stopPropagation(); this.addScore(team, val); };
    } else {
      btn.className = 'sk-touch-btn'; btn.ariaLabel = `+${val}`;
      btn.onclick = () => this.addScore(team, val);
    }
    return btn;
  }

  private toggleStats(show: boolean) {
    this.ui.statsA?.classList.toggle('sk-hidden', !show);
    this.ui.statsB?.classList.toggle('sk-hidden', !show);
  }
  private findNumericWinner(): 'A' | 'B' | null {
    const max = this.currentSport.maxScore!;
    const by = this.currentSport.winBy ?? 1;
    if (this.scoreA >= max && this.scoreA - this.scoreB >= by) return 'A';
    if (this.scoreB >= max && this.scoreB - this.scoreA >= by) return 'B';
    return null;
  }
  private checkWinCondition() {
    if (this.hasShownWin || !this.currentSport.maxScore) return;
    const w = this.findNumericWinner();
    if (w) this.triggerWin(w);
  }

  private triggerWin(winner: 'A' | 'B') {
    this.hasShownWin = true;
    const inputs = document.querySelectorAll('input[type="text"]');
    let name = winner === 'A' ? this.t.playerA : this.t.playerB;
    const el = inputs.length === 2 ? inputs[winner === 'A' ? 0 : 1] as HTMLInputElement : null;
    if (el?.value.trim()) name = el.value;
    if (this.ui.winnerName) this.ui.winnerName.innerText = name;
    this.ui.modal?.classList.remove('sk-hidden');
  }

  reset() {
    this.scoreA = 0; this.scoreB = 0;
    this.setsA = 0; this.setsB = 0;
    this.gamesA = 0; this.gamesB = 0;
    this.isTieBreak = false;
    this.pointsSinceServeChange = 0; this.hasShownWin = false;
    this.ui.modal?.classList.add('sk-hidden');
    this.render();
  }

  addScore(team: 'A' | 'B', val: number) {
    if (this.currentSport.type === 'tennis') {
      this.handleTennisPoint(team);
    } else {
      this.addNumericScore(team, val);
    }
    this.render();
  }

  private addNumericScore(team: 'A' | 'B', val: number) {
    if (team === 'A') this.scoreA += val; else this.scoreB += val;
    this.animate(team === 'A' ? this.ui.scoreA : this.ui.scoreB);
    this.checkWinCondition();
    if (this.currentSport.serviceRotationPoints && this.server) this.tickServiceRotation();
  }

  private tickServiceRotation() {
    this.pointsSinceServeChange++;
    let limit = this.currentSport.serviceRotationPoints!;
    if (this.currentSport.id === 'pingpong' && this.scoreA >= 10 && this.scoreB >= 10) limit = 1;
    if (this.pointsSinceServeChange >= limit) this.swapServe();
  }

  private handleTennisPoint(winner: 'A' | 'B') {
    this.animate(winner === 'A' ? this.ui.scoreA : this.ui.scoreB);
    if (this.isTieBreak) { this.handleTieBreakPoint(winner); }
    else { this.handleNormalGamePoint(winner); }
  }

  private handleTieBreakPoint(winner: 'A' | 'B') {
    if (winner === 'A') this.scoreA++; else this.scoreB++;
    if ((this.scoreA + this.scoreB) % 2 === 1) this.swapServe();
    const wScore = winner === 'A' ? this.scoreA : this.scoreB;
    const lScore = winner === 'A' ? this.scoreB : this.scoreA;
    if (wScore >= 7 && wScore >= lScore + 2) this.winSet(winner);
  }

  private handleNormalGamePoint(winner: 'A' | 'B') {
    const wv = winner === 'A' ? this.scoreA : this.scoreB;
    const lv = winner === 'A' ? this.scoreB : this.scoreA;
    if (lv >= 4) { this.scoreA = 3; this.scoreB = 3; return; }
    if (wv === 4 || (wv === 3 && lv < 3)) { this.winGame(winner); return; }
    if (winner === 'A') this.scoreA++; else this.scoreB++;
  }

  private tryWinSet(team: 'A' | 'B', w: number, l: number): boolean {
    if ((w === 6 && l <= 4) || (w === 7 && l === 5)) {
      if (team === 'A') this.gamesA = w; else this.gamesB = w;
      this.winSet(team); return true;
    }
    return false;
  }

  private winGame(winner: 'A' | 'B') {
    const gA = winner === 'A' ? this.gamesA + 1 : this.gamesA;
    const gB = winner === 'B' ? this.gamesB + 1 : this.gamesB;
    this.scoreA = 0; this.scoreB = 0; this.swapServe();
    if (this.tryWinSet('A', gA, gB) || this.tryWinSet('B', gB, gA)) return;
    if (gA === 6 && gB === 6) {
      this.gamesA = 6; this.gamesB = 6; this.isTieBreak = true; this.render(); return;
    }
    this.gamesA = gA; this.gamesB = gB;
  }

  winSet(winner: 'A' | 'B') {
    if (winner === 'A') this.setsA++; else this.setsB++;
    this.gamesA = 0; this.gamesB = 0; this.scoreA = 0; this.scoreB = 0;
    this.isTieBreak = false; this.swapServe();
  }
  private swapServe() {
    if (!this.server) return;
    this.server = this.server === 'A' ? 'B' : 'A';
    this.pointsSinceServeChange = 0;
  }

  adjScore(team: 'A' | 'B', val: number) {
    if (team === 'A') this.scoreA = Math.max(0, this.scoreA + val);
    else this.scoreB = Math.max(0, this.scoreB + val);
    this.render();
  }
  adjSet(team: 'A' | 'B', val: number) {
    if (team === 'A') this.setsA = Math.max(0, this.setsA + val);
    else this.setsB = Math.max(0, this.setsB + val);
    this.render();
  }
  adjGame(team: 'A' | 'B', val: number) {
    if (team === 'A') this.gamesA = Math.max(0, this.gamesA + val);
    else this.gamesB = Math.max(0, this.gamesB + val);
    this.render();
  }
  setServe(team: 'A' | 'B') {
    this.server = team; this.pointsSinceServeChange = 0; this.render();
  }

  swap() {
    [this.scoreA, this.scoreB] = [this.scoreB, this.scoreA];
    [this.setsA, this.setsB] = [this.setsB, this.setsA];
    [this.gamesA, this.gamesB] = [this.gamesB, this.gamesA];
    if (this.server) this.server = this.server === 'A' ? 'B' : 'A';
    const inputs = document.querySelectorAll('input[type="text"]');
    if (inputs.length === 2) {
      const [i1, i2] = [inputs[0] as HTMLInputElement, inputs[1] as HTMLInputElement];
      [i1.value, i2.value] = [i2.value, i1.value];
    }
    this.render();
  }

  private animate(el: HTMLElement | null) {
    if (!el) return;
    el.classList.add('sk-score-pop');
    setTimeout(() => el.classList.remove('sk-score-pop'), 100);
  }
  private getTennisLabel(val: number): string | number {
    if (this.isTieBreak) return val;
    return (['0', '15', '30', '40', 'AD'] as const)[val] ?? val;
  }

  private renderScores() {
    const isTennis = this.currentSport.type === 'tennis';
    const lA = isTennis ? String(this.getTennisLabel(this.scoreA)) : String(this.scoreA);
    const lB = isTennis ? String(this.getTennisLabel(this.scoreB)) : String(this.scoreB);
    if (this.ui.scoreA) this.ui.scoreA.innerText = lA;
    if (this.ui.scoreB) this.ui.scoreB.innerText = lB;
    const tiebreak = isTennis && this.isTieBreak;
    this.ui.scoreA?.classList.toggle('sk-score-tiebreak', tiebreak);
    this.ui.scoreB?.classList.toggle('sk-score-tiebreak', tiebreak);
  }

  render() {
    this.renderScores();
    if (this.ui.setsA) this.ui.setsA.innerText = String(this.setsA);
    if (this.ui.setsB) this.ui.setsB.innerText = String(this.setsB);
    if (this.ui.gamesA) this.ui.gamesA.innerText = String(this.gamesA);
    if (this.ui.gamesB) this.ui.gamesB.innerText = String(this.gamesB);
    this.ui.serveA?.classList.toggle('sk-serve-hidden', this.server !== 'A');
    this.ui.serveB?.classList.toggle('sk-serve-hidden', this.server !== 'B');
  }
}
export function initScoreKeeper() {
  document.addEventListener('DOMContentLoaded', () => new GameManager());
}
