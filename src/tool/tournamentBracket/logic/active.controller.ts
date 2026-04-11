import type { TournamentUIMediator } from '../ui/mediator';
import type { TournamentRenderer } from '../tournament.renderer';
import type { TournamentBracketUI } from '../ui';
import type { TournamentManager } from './manager';
import { TournamentStorage } from './storage';
import { TournamentNavigator } from '../ui/navigator';
import { TournamentSharing } from './sharing';

export class ActiveController {
  private activeRoundMobile = 0;
  private manager: TournamentManager | null = null;

  constructor(
    private mediator: TournamentUIMediator,
    private renderer: TournamentRenderer,
    private ui: TournamentBracketUI
  ) {
    this.bindEvents();
  }

  public setManager(manager: TournamentManager) { this.manager = manager; this.activeRoundMobile = 0; }

  private bindEvents() {
    this.mediator.btnNextMatch?.addEventListener('click', () => this.scrollToNextMatch());
    this.mediator.enableTitleEditing((name) => {
      if (this.manager && name !== this.manager.name) { this.manager.name = name; this.saveCurrentState(); }
      this.render();
    });
    document.getElementById('share-tournament-btn')?.addEventListener('click', () => { void this.shareTournament(); });
  }

  public render() {
    if (!this.manager) return;
    this.mediator.updateHeader(this.manager.name, new Date(this.manager.createdAt).toLocaleDateString());
    this.renderer.renderMobileView(this.manager, this.activeRoundMobile, (i) => { this.activeRoundMobile = i; this.render(); });
    this.renderer.renderDesktopView(this.manager);
    this.attachMatchListeners();
  }

  private attachMatchListeners() {
    document.querySelectorAll('.tb-match-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const t = e.currentTarget as HTMLElement;
        if (!t.hasAttribute('disabled')) this.selectWinner(t.dataset.matchId!, t.dataset.winnerId!);
      });
    });
    document.querySelectorAll('.tb-score-input').forEach((input) => {
      input.addEventListener('change', (e) => {
        const t = e.target as HTMLInputElement;
        if (t.dataset.matchId && t.dataset.player) this.updateScore(t.dataset.matchId, t.dataset.player, t.value);
      });
      input.addEventListener('click', (e) => e.stopPropagation());
    });
  }

  private parseScore(value: string): number | null {
    if (value.trim() === '') return null;
    const n = parseInt(value);
    return isNaN(n) ? null : n;
  }

  private updateScore(matchId: string, playerNum: string, value: string) {
    if (!this.manager) return;
    const match = this.manager.findMatch(matchId);
    if (!match) return;
    const val = this.parseScore(value);
    const s1 = playerNum === '1' ? val : (match.score1 ?? null);
    const s2 = playerNum === '2' ? val : (match.score2 ?? null);
    this.manager.setScore(matchId, s1, s2);
    this.saveCurrentState();
    this.render();
    if (this.manager.status === 'FINISHED') this.mediator.showVictoryToast();
  }

  private selectWinner(matchId: string, winnerId: string) {
    if (!this.manager) return;
    this.manager.setWinner(matchId, winnerId);
    this.saveCurrentState();
    this.render();
    if (this.manager.status === 'FINISHED') this.mediator.showVictoryToast();
  }

  private saveCurrentState() {
    if (!this.manager) return;
    TournamentStorage.saveTournament(this.manager, TournamentStorage.loadHistory());
  }

  private scrollToNextMatch() {
    if (!this.manager) return;
    const next = TournamentNavigator.findNextPlayableMatch(this.manager);
    if (!next) { if (!TournamentNavigator.isTournamentUnfinished(this.manager)) this.mediator.showVictoryToast(); return; }
    TournamentNavigator.scrollToMatch(next.id, this.manager, this.activeRoundMobile, {
      onMobileRoundChange: (i) => { this.activeRoundMobile = i; this.render(); },
      onShowToast: () => this.mediator.showVictoryToast(),
    });
  }

  private async shareTournament() {
    if (!this.manager) return;
    if (!TournamentSharing.canShare(this.manager)) { this.mediator.showToast(this.ui.toastShareLimit, 'error'); return; }
    const url = TournamentSharing.generateShareUrl(this.manager);
    if (!url) { this.mediator.showToast(this.ui.toastShareError, 'error'); return; }
    const ok = await TournamentSharing.copyToClipboard(url);
    this.mediator.showToast(ok ? this.ui.toastShareCopied : `${this.ui.toastShareFailed} ${url}`, ok ? 'success' : 'error');
  }
}
