import type { IWorkspaceState } from '../contracts/IWorkspaceState';
import type { LogSeverity, WorkspaceLogEntry, WorkspaceStateModel } from '../types';

export class WorkspaceDockView {
  private readonly dockEl: HTMLElement | null;
  private readonly toggleBtn: HTMLButtonElement | null;
  private readonly clearBtn: HTMLButtonElement | null;
  private readonly listEl: HTMLElement | null;
  private readonly emptyEl: HTMLElement | null;
  private readonly totalBadge: HTMLElement | null;
  private readonly filterChips: NodeListOf<HTMLButtonElement>;

  constructor(root: HTMLElement, private readonly state: IWorkspaceState) {
    this.dockEl = root.querySelector('#output-dock');
    this.toggleBtn = root.querySelector('#dock-toggle-btn');
    this.clearBtn = root.querySelector('#dock-clear-btn');
    this.listEl = root.querySelector('#dock-log-list');
    this.emptyEl = root.querySelector('#dock-empty-state');
    this.totalBadge = root.querySelector('#dock-total-badge');
    this.filterChips = root.querySelectorAll<HTMLButtonElement>('.dock-filter-chip');
    this.attachEvents();
  }

  public render(state: Readonly<WorkspaceStateModel>): void {
    this.updateExpansion(state.isDockExpanded);
    this.updateFilterChips(state.activeLogFilter);
    this.updateCounts(state.logs);
    this.renderLogs(state.logs, state.activeLogFilter);
  }

  private updateExpansion(isExpanded: boolean): void {
    this.dockEl?.classList.toggle('collapsed', !isExpanded);
    this.toggleBtn?.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
  }

  private updateFilterChips(activeFilter: 'all' | LogSeverity): void {
    this.filterChips.forEach((chip) => {
      chip.classList.toggle('active', chip.dataset.filter === activeFilter);
    });
  }

  private updateCounts(logs: WorkspaceLogEntry[]): void {
    const severities: LogSeverity[] = ['info', 'warn', 'error', 'success'];
    this.setCount('all', logs.length);
    for (const sev of severities) {
      this.setCount(sev, logs.filter((l) => l.severity === sev).length);
    }
    if (this.totalBadge) {
      this.totalBadge.textContent = `${logs.length} events`;
    }
  }

  private setCount(id: string, count: number): void {
    const el = document.getElementById(`filter-count-${id}`);
    if (el) el.textContent = String(count);
  }

  private renderLogs(logs: WorkspaceLogEntry[], filter: 'all' | LogSeverity): void {
    const filtered = filter === 'all' ? logs : logs.filter((l) => l.severity === filter);
    if (!this.emptyEl || !this.listEl) return;

    if (filtered.length === 0) {
      this.emptyEl.style.display = 'flex';
      this.listEl.style.display = 'none';
      this.listEl.innerHTML = '';
      return;
    }

    this.emptyEl.style.display = 'none';
    this.listEl.style.display = 'flex';
    this.listEl.innerHTML = '';
    filtered.forEach((entry) => this.appendLogEntry(entry));
    this.listEl.scrollTop = this.listEl.scrollHeight;
  }

  private appendLogEntry(log: WorkspaceLogEntry): void {
    const li = document.createElement('li');
    li.className = `log-entry log-entry-${log.severity}`;

    const time = document.createElement('span');
    time.className = 'log-timestamp';
    time.textContent = new Date(log.timestamp).toLocaleTimeString();

    const badge = document.createElement('span');
    badge.className = `log-severity-badge badge-${log.severity}`;
    badge.textContent = log.severity.toUpperCase();

    const msg = document.createElement('span');
    msg.className = 'log-message';
    msg.textContent = log.message;

    li.appendChild(time);
    li.appendChild(badge);
    li.appendChild(msg);
    this.listEl?.appendChild(li);
  }

  private attachEvents(): void {
    this.toggleBtn?.addEventListener('click', () => this.state.toggleDock());
    this.clearBtn?.addEventListener('click', () => this.state.clearLogs());
    this.filterChips.forEach((chip) => {
      chip.addEventListener('click', () => {
        const filter = (chip.dataset.filter ?? 'all') as 'all' | LogSeverity;
        this.state.setLogFilter(filter);
      });
    });
  }
}
