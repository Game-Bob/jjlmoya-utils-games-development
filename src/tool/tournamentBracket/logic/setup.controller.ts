import type { TournamentUIMediator } from '../ui/mediator';
import type { TournamentRenderer } from '../tournament.renderer';
import { TournamentStorage } from './storage';
import { TournamentManager } from './manager';
import type { TournamentBracketUI } from '../ui';

export interface SetupCallbacks {
  onStart: (m: TournamentManager) => void;
  onLoad: (m: TournamentManager) => void;
}

export class SetupController {
  private players: string[] = [];
  private isScoreEnabled = false;
  private isShuffleEnabled = false;
  private history: ReturnType<typeof TournamentStorage.loadHistory> = [];
  private onStartTournament: SetupCallbacks['onStart'];
  private onLoadTournament: SetupCallbacks['onLoad'];

  constructor(
    private mediator: TournamentUIMediator,
    private renderer: TournamentRenderer,
    private ui: TournamentBracketUI,
    callbacks: SetupCallbacks
  ) {
    this.onStartTournament = callbacks.onStart;
    this.onLoadTournament = callbacks.onLoad;
    this.loadHistory();
    this.bindEvents();
  }

  private bindEvents() {
    this.mediator.btnAdd?.addEventListener('click', () => this.addPlayer());
    this.mediator.inputPlayer?.addEventListener('keypress', (e) => { if (e.key === 'Enter') this.addPlayer(); });
    this.mediator.btnClearPlayers?.addEventListener('click', () => {
      if (confirm(this.ui.confirmClearPlayers)) { this.players = []; this.render(); }
    });
    this.mediator.btnGenerate?.addEventListener('click', () => this.generateTournament());
  }

  public render() {
    this.renderer.updatePlayerList(this.players, (i) => this.removePlayer(i));
    this.renderer.renderShuffleControl(this.isShuffleEnabled, (v) => { this.isShuffleEnabled = v; });
    this.renderer.renderScoreControl(this.isScoreEnabled, (v) => { this.isScoreEnabled = v; });
    this.renderer.renderHistoryList(this.history, (id) => this.loadTournament(id), (id) => this.deleteTournament(id));
  }

  public refreshHistory() { this.loadHistory(); this.render(); }

  private addPlayer() {
    const names = this.mediator.getPlayerInput().split(',').map((n) => n.trim()).filter((n) => n.length > 0);
    if (names.length > 0) { this.players.push(...names); this.mediator.clearPlayerInput(); this.render(); }
  }

  private removePlayer(index: number) { this.players.splice(index, 1); this.render(); }

  private buildRoundNames() {
    return { final: this.ui.roundFinal, semifinal: this.ui.roundSemifinal, quarter: this.ui.roundQuarter, prefix: this.ui.roundPrefix };
  }

  private generateTournament() {
    if (this.players.length < 2) { alert(this.ui.alertMinPlayers); return; }
    const manager = new TournamentManager([...this.players], this.mediator.getTournamentName());
    if (this.isShuffleEnabled) manager.shufflePlayers();
    manager.scoreEnabled = this.isScoreEnabled;
    manager.startTournament(this.buildRoundNames());
    this.onStartTournament(manager);
  }

  private loadHistory() { this.history = TournamentStorage.loadHistory(); }

  private loadTournament(id: string) {
    const found = this.history.find((t) => t.id === id);
    if (found) { this.onLoadTournament(TournamentManager.fromJSON(found)); }
    else { alert(this.ui.alertLoadFailed); }
  }

  private deleteTournament(id: string) {
    if (!confirm(this.ui.confirmDeleteTournament)) return;
    this.history = this.history.filter((t) => t.id !== id);
    TournamentStorage.saveHistory(this.history);
    this.render();
  }
}
