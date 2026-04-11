import type { TournamentBracketUI } from '../ui';

const CROWN_ICON = `<svg xmlns="http://www.w3.org/2000/svg" class="tb-icon-xs" viewBox="0 0 24 24" fill="currentColor"><path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5M19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V18H19V19Z"/></svg>`;
const TRASH_ICON = `<svg xmlns="http://www.w3.org/2000/svg" class="tb-icon-sm" viewBox="0 0 24 24" fill="currentColor"><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"/></svg>`;
const CLOCK_ICON = `<svg xmlns="http://www.w3.org/2000/svg" class="tb-icon-xs" viewBox="0 0 24 24" fill="currentColor"><path d="M12 20C7.6 20 4 16.4 4 12S7.6 4 12 4S20 7.6 20 12S16.4 20 12 20M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22S22 17.5 22 12S17.5 2 12 2M16.2 16.2L11 11V7H12.5V10.2L17 14.9L16.2 16.2Z"/></svg>`;

export class SetupRenderer {
  listPlayers: HTMLElement | null;
  countPlayers: HTMLElement | null;
  btnGenerate: HTMLButtonElement | null;
  shuffleWrapper: HTMLElement | null;
  historyContainer: HTMLElement | null;
  private ui: TournamentBracketUI;

  constructor(ui: TournamentBracketUI) {
    this.ui = ui;
    this.listPlayers = document.getElementById('player-list');
    this.countPlayers = document.getElementById('player-count');
    this.btnGenerate = document.getElementById('generate-btn') as HTMLButtonElement;
    this.shuffleWrapper = document.getElementById('shuffle-wrapper');
    this.historyContainer = document.getElementById('history-container');
  }

  public updatePlayerList(players: string[], onRemove: (i: number) => void) {
    if (!this.listPlayers || !this.countPlayers || !this.btnGenerate) return;
    this.countPlayers.textContent = String(players.length);
    const clearBtn = document.getElementById('clear-players-btn');
    if (players.length === 0) {
      this.listPlayers.innerHTML = `<li class="tb-player-empty">${this.ui.emptyList}</li>`;
      this.setGenerateBtn(false, 0);
      clearBtn?.classList.add('tb-hidden');
      return;
    }
    clearBtn?.classList.remove('tb-hidden');
    this.listPlayers.innerHTML = '';
    const frag = document.createDocumentFragment();
    players.forEach((player, i) => frag.appendChild(this.buildPlayerItem(player, i, onRemove)));
    this.listPlayers.appendChild(frag);
    this.setGenerateBtn(players.length >= 2, players.length);
  }

  private buildPlayerItem(player: string, i: number, onRemove: (i: number) => void): HTMLElement {
    const li = document.createElement('li');
    li.className = 'tb-player-item';
    const span = document.createElement('span');
    span.textContent = player;
    span.className = 'tb-player-name';
    const btn = document.createElement('button');
    btn.innerHTML = TRASH_ICON;
    btn.className = 'tb-player-remove';
    btn.onclick = () => onRemove(i);
    li.appendChild(span);
    li.appendChild(btn);
    return li;
  }

  private setGenerateBtn(enabled: boolean, count: number) {
    if (!this.btnGenerate) return;
    this.btnGenerate.disabled = !enabled;
    this.btnGenerate.classList.toggle('tb-btn-disabled', !enabled);
    this.btnGenerate.textContent = enabled ? `${this.ui.generateBtn} (${count})` : this.ui.generateBtn;
  }

  public renderShuffleControl(isEnabled: boolean, onToggle: (v: boolean) => void) {
    if (!this.shuffleWrapper) return;
    if (!this.shuffleWrapper.querySelector('#shuffle-check')) {
      this.shuffleWrapper.appendChild(this.buildToggleGroup());
      this.shuffleWrapper.querySelector('#shuffle-check')?.addEventListener('change', (e) => {
        onToggle((e.target as HTMLInputElement).checked);
      });
    }
    const check = this.shuffleWrapper.querySelector('#shuffle-check') as HTMLInputElement;
    if (check) check.checked = isEnabled;
  }

  private buildToggleGroup(): HTMLElement {
    const div = document.createElement('div');
    div.className = 'tb-toggle-group';
    div.innerHTML = `
      <label class="tb-toggle-label"><div class="tb-toggle"><input type="checkbox" id="shuffle-check" class="tb-toggle-input"><div class="tb-toggle-track"></div><div class="tb-toggle-thumb"></div></div><span class="tb-toggle-text">${this.ui.shuffleLabel}</span></label>
      <label class="tb-toggle-label"><div class="tb-toggle"><input type="checkbox" id="score-check" class="tb-toggle-input"><div class="tb-toggle-track"></div><div class="tb-toggle-thumb"></div></div><span class="tb-toggle-text">${this.ui.scoreLabel}</span></label>
    `;
    return div;
  }

  public renderScoreControl(isEnabled: boolean, onToggle: (v: boolean) => void) {
    const check = this.shuffleWrapper?.querySelector('#score-check') as HTMLInputElement;
    if (check) { check.checked = isEnabled; check.onchange = (e) => onToggle((e.target as HTMLInputElement).checked); }
  }

  public renderHistoryList(history: TournamentData[], onLoad: (id: string) => void, onDelete: (id: string) => void) {
    if (!this.historyContainer) return;
    if (history.length === 0) {
      this.historyContainer.innerHTML = `<div class="tb-history-empty">${this.ui.noOldTournaments}</div>`;
      return;
    }
    this.historyContainer.innerHTML = '';
    const frag = document.createDocumentFragment();
    [...history].sort((a, b) => b.createdAt - a.createdAt).forEach((item) => {
      frag.appendChild(this.buildHistoryItem(item, onLoad, onDelete));
    });
    this.historyContainer.appendChild(frag);
  }

  private buildHistoryItem(item: TournamentData, onLoad: (id: string) => void, onDelete: (id: string) => void): HTMLElement {
    const el = document.createElement('div');
    el.className = 'tb-history-item';
    const date = new Date(item.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
    const finished = item.status === 'FINISHED';
    let statusHtml = '';
    if (finished && item.winner) statusHtml = `<span class="tb-history-badge-winner">${CROWN_ICON} ${(item.winner as { name: string }).name}</span>`;
    else if (!finished) statusHtml = `<span class="tb-history-badge-active">${CLOCK_ICON}</span>`;
    el.innerHTML = `<button class="tb-history-load" data-id="${item.id}"><span class="tb-history-name">${item.name}</span><span class="tb-history-date">${date} ${statusHtml}</span></button><button class="tb-history-delete" data-id="${item.id}" title="Borrar">${TRASH_ICON}</button>`;
    el.querySelector('.tb-history-load')?.addEventListener('click', () => onLoad(item.id));
    el.querySelector('.tb-history-delete')?.addEventListener('click', (e) => { e.stopPropagation(); onDelete(item.id); });
    return el;
  }
}

interface TournamentData { id: string; name: string; createdAt: number; status: string; winner?: unknown; }
