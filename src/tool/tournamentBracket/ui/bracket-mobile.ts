import type { TournamentData, Match } from '../models';
import type { TournamentBracketUI } from '../ui';

export class MobileBracketRenderer {
  container: HTMLElement | null;
  private ui: TournamentBracketUI;

  constructor(ui: TournamentBracketUI) {
    this.ui = ui;
    this.container = document.querySelector('.bracket-mobile');
  }

  public render(data: TournamentData, activeRound: number, onTabClick: (i: number) => void) {
    if (!this.container) return;
    this.container.innerHTML = this.buildTabs(data, activeRound) + this.buildRounds(data, activeRound);
    this.container.querySelectorAll('.tb-round-tab').forEach((tab) => {
      tab.addEventListener('click', () => onTabClick(parseInt((tab as HTMLElement).dataset.roundIndex ?? '0')));
    });
  }

  private buildTabs(data: TournamentData, activeRound: number): string {
    const tabs = data.rounds.map((round, i) => `<button class="tb-round-tab${i === activeRound ? ' tb-round-tab-active' : ''}" data-round-index="${i}">${round.name}</button>`).join('');
    return `<div class="tb-tabs">${tabs}</div>`;
  }

  private buildRounds(data: TournamentData, activeRound: number): string {
    const rounds = data.rounds.map((round, i) => {
      const active = i === activeRound;
      const cards = round.matches.length === 0
        ? `<div class="tb-round-empty">${this.ui.emptyRound}</div>`
        : round.matches.map((m) => this.getMatchCardHTML(m)).join('');
      return `<div class="tb-round-content${active ? ' tb-round-active' : ''}">${cards}</div>`;
    }).join('');
    return `<div class="tb-rounds">${rounds}</div>`;
  }

  private isDefinitiveBye(match: Match): boolean {
    return !!(match.isBye || (match.winner && !match.player1) || (match.winner && !match.player2));
  }

  private getMatchCardHTML(match: Match): string {
    if (this.isDefinitiveBye(match)) {
      const player = match.player1 ?? match.player2;
      return `<div class="tb-match-card tb-match-card-bye"><span class="tb-bye-label">${this.ui.byeLabel}</span><div class="tb-bye-name">${player?.name ?? this.ui.waiting}</div></div>`;
    }
    return this.getRegularCardHTML(match);
  }

  private buildScoreInput(matchId: string, player: number, value: string | number, disabled: boolean): string {
    return `<input type="number" class="tb-score-input" data-match-id="${matchId}" data-player="${player}" value="${value}" min="0" placeholder="-" ${disabled ? 'disabled' : ''}>`;
  }

  private isWinner(match: Match, p: { id: string } | null): boolean {
    return !!(match.winner?.id && match.winner.id === p?.id);
  }

  private renderPlayerBtn(matchId: string, p: { id: string; name: string } | null, isWinner: boolean): string {
    const cls = isWinner ? 'tb-match-btn tb-match-btn-winner' : 'tb-match-btn';
    const label = p ? 'tb-player-label' : 'tb-player-empty-label';
    const trophy = isWinner ? '<span class="tb-winner-icon"></span>' : '';
    const name = p ? p.name : '...';
    const wid = p ? p.id : '';
    const dis = p ? '' : 'disabled';
    return `<button class="${cls}" data-match-id="${matchId}" data-winner-id="${wid}" ${dis}><span class="${label}">${name}</span>${trophy}</button>`;
  }

  private buildPlayerBtn(match: Match, side: 1 | 2): string {
    const p = side === 1 ? match.player1 : match.player2;
    return this.renderPlayerBtn(match.id, p, this.isWinner(match, p));
  }

  private getRegularCardHTML(match: Match): string {
    const hasWinner = !!match.winner?.id;
    const s1 = match.score1 != null ? match.score1 : '';
    const s2 = match.score2 != null ? match.score2 : '';
    const input1 = this.buildScoreInput(match.id, 1, s1, !match.player1 || hasWinner);
    const input2 = this.buildScoreInput(match.id, 2, s2, !match.player2 || hasWinner);
    const btn1 = this.buildPlayerBtn(match, 1);
    const btn2 = this.buildPlayerBtn(match, 2);
    return `<div class="tb-match-card"><div class="tb-match-row">${btn1}${input1}</div><div class="tb-match-divider"></div><div class="tb-match-row">${btn2}${input2}</div></div>`;
  }
}
