import type { TournamentBracketUI } from '../ui';

const g = (id: string) => document.getElementById(id);

export class TournamentUIMediator {
  setupView: HTMLElement | null;
  bracketView: HTMLElement | null;
  activeControls: HTMLElement | null;
  inputName: HTMLInputElement | null;
  inputPlayer: HTMLInputElement | null;
  btnAdd: HTMLButtonElement | null;
  btnGenerate: HTMLButtonElement | null;
  btnReset: HTMLButtonElement | null;
  btnClearPlayers: HTMLButtonElement | null;
  btnNextMatch: HTMLButtonElement | null;
  titleDisplay: HTMLElement | null;
  dateDisplay: HTMLElement | null;
  private ui: TournamentBracketUI;

  constructor(ui: TournamentBracketUI) {
    this.ui = ui;
    this.setupView = g('setup-view');
    this.bracketView = g('bracket-view');
    this.activeControls = g('active-controls');
    this.inputName = g('tournament-name-input') as HTMLInputElement;
    this.inputPlayer = g('new-player-input') as HTMLInputElement;
    this.btnAdd = g('add-player-btn') as HTMLButtonElement;
    this.btnGenerate = g('generate-btn') as HTMLButtonElement;
    this.btnReset = g('reset-btn') as HTMLButtonElement;
    this.btnClearPlayers = g('clear-players-btn') as HTMLButtonElement;
    this.btnNextMatch = g('next-match-btn') as HTMLButtonElement;
    this.titleDisplay = g('tournament-title-display');
    this.dateDisplay = g('tournament-date-display');
  }

  setVisibility(state: 'SETUP' | 'ACTIVE') {
    const isActive = state === 'ACTIVE';
    this.setupView?.classList.toggle('tb-hidden', isActive);
    this.bracketView?.classList.toggle('tb-hidden', !isActive);
    this.activeControls?.classList.toggle('tb-hidden', !isActive);
  }

  updateHeader(name: string, date: string) {
    if (this.titleDisplay && !this.titleDisplay.querySelector('input')) {
      this.titleDisplay.innerHTML = `${name} <span class="tb-edit-icon" title="Editar"></span>`;
    }
    if (this.dateDisplay) this.dateDisplay.textContent = date;
  }

  enableTitleEditing(onSave: (n: string) => void) {
    if (!this.titleDisplay) return;
    this.titleDisplay.addEventListener('click', () => this.openTitleInput(onSave));
  }

  private openTitleInput(onSave: (n: string) => void) {
    if (!this.titleDisplay || this.titleDisplay.querySelector('input')) return;
    const raw = this.titleDisplay.textContent?.trim() ?? '';
    const input = document.createElement('input');
    input.type = 'text';
    input.value = raw;
    input.className = 'tb-title-input';
    this.titleDisplay.innerHTML = '';
    this.titleDisplay.appendChild(input);
    input.focus();
    const finish = () => onSave(input.value.trim() || raw);
    input.onblur = finish;
    input.onkeydown = (e) => { if (e.key === 'Enter') input.blur(); };
    input.onclick = (e) => e.stopPropagation();
  }

  getPlayerInput(): string { return this.inputPlayer?.value ?? ''; }
  clearPlayerInput() { if (this.inputPlayer) { this.inputPlayer.value = ''; this.inputPlayer.focus(); } }
  getTournamentName(): string {
    return this.inputName?.value.trim() || `${this.ui.defaultName} ${new Date().toLocaleDateString()}`;
  }

  showVictoryToast() {
    const toast = document.createElement('div');
    toast.className = 'tb-toast tb-toast-victory';
    toast.textContent = this.ui.toastFinished;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  }

  showToast(message: string, type: 'success' | 'error' | 'info' = 'info') {
    const toast = document.createElement('div');
    toast.className = `tb-toast tb-toast-${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 300ms';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }
}
