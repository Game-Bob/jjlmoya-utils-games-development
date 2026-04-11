import type { TournamentData, Match } from '../models';
import type { TournamentBracketUI } from '../ui';

const COL_W = 260;
const COL_GAP = 80;
const CARD_H = 100;
const UNIT_H = 110;

const TROPHY = `<svg xmlns="http://www.w3.org/2000/svg" class="tb-trophy-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M20.2,2H19.5H18C17.1,2 16,3 16,4H8C8,3 6.9,2 6,2H4.5H3.8C2.8,2 2,2.8 2,3.8V4.5C2,8.9 5.6,12.5 10,12.5V15H7V17H17V15H14V12.5C18.4,12.5 22,8.9 22,4.5V3.8C22,2.8 21.2,2 20.2,2M4,4.5V3.8C4,3.6 4.2,3.5 4.5,3.5H6C6.5,3.5 7,4 7,4.5V9.5C4.2,9.5 4,4.5 4,4.5M20,4.5C20,4.5 19.8,9.5 17,9.5V4.5C17,4 17.5,3.5 18,3.5H19.5C19.8,3.5 20,3.6 20,3.8V4.5Z"/></svg>`;

export class DesktopBracketRenderer {
  container: HTMLElement | null;
  private ui: TournamentBracketUI;

  constructor(ui: TournamentBracketUI) {
    this.ui = ui;
    this.container = document.querySelector('.desktop-bracket-container');
  }

  public render(data: TournamentData) {
    if (!this.container) return;
    this.container.innerHTML = '';
    const totalW = data.rounds.length * (COL_W + COL_GAP) + 120;
    const totalH = (data.rounds[0]?.matches.length ?? 0) * UNIT_H + 200;
    const wrapper = document.createElement('div');
    wrapper.className = 'tb-bracket-wrapper';
    wrapper.style.cssText = `position:relative;width:${totalW}px;height:${totalH}px;min-width:100%;min-height:100%`;
    data.rounds.forEach((round, rIndex) => wrapper.appendChild(this.buildColumn(round, rIndex, data.scoreEnabled)));
    wrapper.appendChild(this.buildConnectors(data, totalW, totalH));
    this.container.appendChild(wrapper);
    this.enableDragScroll(this.container);
  }

  private buildColumn(round: { name: string; matches: Match[] }, rIndex: number, scoreEnabled?: boolean): HTMLElement {
    const col = document.createElement('div');
    col.style.cssText = `position:absolute;left:${rIndex * (COL_W + COL_GAP) + 60}px;top:40px;width:${COL_W}px`;
    const header = document.createElement('div');
    header.className = 'tb-round-header';
    header.textContent = round.name;
    col.appendChild(header);
    round.matches.forEach((match, mIndex) => col.appendChild(this.buildMatchEl(match, rIndex, mIndex, scoreEnabled)));
    return col;
  }

  private buildMatchEl(match: Match, rIndex: number, mIndex: number, scoreEnabled?: boolean): HTMLElement {
    const spacing = UNIT_H * Math.pow(2, rIndex);
    const topPos = mIndex * spacing + (spacing / 2 - CARD_H / 2) + 40;
    const el = document.createElement('div');
    el.style.cssText = `position:absolute;top:${topPos}px;width:100%`;
    el.innerHTML = this.getMatchCardHTML(match, scoreEnabled);
    return el;
  }

  private buildConnectors(data: TournamentData, totalW: number, totalH: number): SVGSVGElement {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'tb-connectors');
    svg.style.cssText = `position:absolute;inset:0;width:${totalW}px;height:${totalH}px;z-index:0;pointer-events:none`;
    data.rounds.forEach((round, rIndex) => {
      if (rIndex === data.rounds.length - 1) return;
      round.matches.forEach((_, mIndex) => svg.appendChild(this.buildPath(rIndex, mIndex)));
    });
    return svg;
  }

  private buildPath(rIndex: number, mIndex: number): SVGPathElement {
    const spacing = UNIT_H * Math.pow(2, rIndex);
    const nextSpacing = UNIT_H * Math.pow(2, rIndex + 1);
    const myY = mIndex * spacing + (spacing / 2 - CARD_H / 2) + 40 + CARD_H / 2;
    const nextY = Math.floor(mIndex / 2) * nextSpacing + (nextSpacing / 2 - CARD_H / 2) + 40 + CARD_H / 2;
    const myX = rIndex * (COL_W + COL_GAP) + COL_W + 66;
    const nextX = (rIndex + 1) * (COL_W + COL_GAP) + 54;
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    const midX = myX + COL_GAP / 2 - 6;
    path.setAttribute('d', `M ${myX} ${myY} L ${midX} ${myY} L ${midX} ${nextY} L ${nextX} ${nextY}`);
    path.setAttribute('stroke', '#cbd5e1');
    path.setAttribute('stroke-width', '2');
    path.setAttribute('fill', 'none');
    return path;
  }

  private isDefinitiveBye(match: Match): boolean {
    return !!(match.isBye || (match.winner && !match.player1) || (match.winner && !match.player2));
  }

  private getMatchCardHTML(match: Match, scoreEnabled?: boolean): string {
    if (this.isDefinitiveBye(match)) return this.getByeCardHTML(match);
    return this.getRegularDesktopCard(match, scoreEnabled);
  }

  private getByeCardHTML(match: Match): string {
    const player = match.player1 ?? match.player2;
    return `<div class="tb-desktop-card tb-desktop-card-bye"><div class="tb-connector-dot-right"></div><div class="tb-bye-label">${this.ui.byeLabel}</div><div class="tb-bye-name">${player?.name ?? this.ui.waiting}</div></div>`;
  }

  private isWinner(match: Match, p: { id: string } | null): boolean {
    return !!(match.winner?.id && match.winner.id === p?.id);
  }

  private buildScoreInput(matchId: string, side: number, val: string | number): string {
    return `<input type="number" class="tb-score-input" data-match-id="${matchId}" data-player="${side}" value="${val}" onclick="event.stopPropagation()">`;
  }

  private getScoreInput(match: Match, side: 1 | 2, scoreEnabled?: boolean): string {
    if (!scoreEnabled || !match.player1 || !match.player2) return '';
    const raw = side === 1 ? match.score1 : match.score2;
    return this.buildScoreInput(match.id, side, raw != null ? raw : '');
  }

  private renderBtn(matchId: string, p: { id: string; name: string } | null, isWinner: boolean): string {
    const cls = isWinner ? 'tb-match-btn tb-match-btn-winner' : 'tb-match-btn';
    const label = p ? 'tb-player-label' : 'tb-player-empty-label';
    const name = p ? p.name : '...';
    const wid = p ? p.id : '';
    const dis = p ? '' : 'disabled';
    return `<button class="${cls}" data-match-id="${matchId}" data-winner-id="${wid}" ${dis}><span class="${label}">${name}</span>${isWinner ? TROPHY : ''}</button>`;
  }

  private buildDesktopPlayerRow(match: Match, side: 1 | 2, scoreEnabled?: boolean): string {
    const p = side === 1 ? match.player1 : match.player2;
    const btn = this.renderBtn(match.id, p, this.isWinner(match, p));
    const input = this.getScoreInput(match, side, scoreEnabled);
    return `<div class="tb-match-row">${btn}${input}</div>`;
  }

  private getRegularDesktopCard(match: Match, scoreEnabled?: boolean): string {
    const row1 = this.buildDesktopPlayerRow(match, 1, scoreEnabled);
    const row2 = this.buildDesktopPlayerRow(match, 2, scoreEnabled);
    return `<div class="tb-desktop-card"><div class="tb-connector-dot-left"></div><div class="tb-connector-dot-right"></div>${row1}<div class="tb-match-divider"></div>${row2}</div>`;
  }

  private enableDragScroll(el: HTMLElement) {
    let pos = { top: 0, left: 0, x: 0, y: 0 };
    const onMove = (e: MouseEvent) => { el.scrollLeft = pos.left - (e.clientX - pos.x); el.scrollTop = pos.top - (e.clientY - pos.y); };
    const onUp = () => { el.classList.remove('tb-cursor-grabbing'); el.classList.add('tb-cursor-grab'); document.removeEventListener('mousemove', onMove); document.removeEventListener('mouseup', onUp); };
    el.onmousedown = (e: MouseEvent) => {
      el.classList.add('tb-cursor-grabbing');
      el.classList.remove('tb-cursor-grab');
      pos = { left: el.scrollLeft, top: el.scrollTop, x: e.clientX, y: e.clientY };
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onUp);
    };
  }
}
