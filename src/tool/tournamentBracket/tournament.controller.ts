import { TournamentManager } from './logic/manager';
import { TournamentRenderer } from './tournament.renderer';
import { TournamentStorage } from './logic/storage';
import { TournamentUIMediator } from './ui/mediator';
import { SetupController } from './logic/setup.controller';
import { ActiveController } from './logic/active.controller';
import { TournamentSharing } from './logic/sharing';
import type { TournamentBracketUI } from './ui';

export class TournamentController {
  private renderer: TournamentRenderer;
  private mediator: TournamentUIMediator;
  private setupController: SetupController;
  private activeController: ActiveController;
  private currentView: 'SETUP' | 'ACTIVE' = 'SETUP';
  private ui: TournamentBracketUI;

  constructor() {
    const root = document.getElementById('tb-app');
    this.ui = JSON.parse(root?.dataset.tbUi ?? '{}') as TournamentBracketUI;
    this.renderer = new TournamentRenderer(this.ui);
    this.mediator = new TournamentUIMediator(this.ui);
    this.setupController = new SetupController(
      this.mediator, this.renderer, this.ui,
      { onStart: (m) => this.startTournament(m), onLoad: (m) => this.startTournament(m) }
    );
    this.activeController = new ActiveController(this.mediator, this.renderer, this.ui);
    this.mediator.btnReset?.addEventListener('click', () => this.resetToSetup());
    this.init();
  }

  private init() { this.loadCurrentTournament(); this.updateView(); }

  private startTournament(manager: TournamentManager) {
    this.currentView = 'ACTIVE';
    TournamentStorage.saveCurrentId(manager.id);
    TournamentStorage.saveTournament(manager, TournamentStorage.loadHistory());
    this.activeController.setManager(manager);
    this.updateView();
  }

  private resetToSetup() {
    TournamentStorage.removeCurrentId();
    TournamentSharing.clearHash();
    this.currentView = 'SETUP';
    this.setupController.refreshHistory();
    this.updateView();
  }

  private loadCurrentTournament() {
    const shared = TournamentSharing.loadFromHash();
    if (shared) { this.startTournament(TournamentManager.fromJSON(shared)); TournamentSharing.clearHash(); return; }
    const currentId = TournamentStorage.loadCurrentId();
    if (!currentId) { this.currentView = 'SETUP'; return; }
    const found = TournamentStorage.loadHistory().find((t) => t.id === currentId);
    if (found) { this.startTournament(TournamentManager.fromJSON(found)); return; }
    this.currentView = 'SETUP';
  }

  private updateView() {
    this.mediator.setVisibility(this.currentView);
    if (this.currentView === 'SETUP') this.setupController.render();
    else this.activeController.render();
  }
}
