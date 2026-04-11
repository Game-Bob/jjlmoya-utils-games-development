import type { TournamentManager } from './manager';

const STORAGE_KEY_HISTORY = 'tournament_history_v2';
const STORAGE_KEY_CURRENT = 'tournament_current_id_v2';

export class TournamentStorage {
  static loadHistory(): TournamentData[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_HISTORY);
      return raw ? (JSON.parse(raw) as TournamentData[]) : [];
    } catch {
      return [];
    }
  }

  static saveHistory(history: TournamentData[]) {
    localStorage.setItem(STORAGE_KEY_HISTORY, JSON.stringify(history));
  }

  static loadCurrentId(): string | null {
    return localStorage.getItem(STORAGE_KEY_CURRENT);
  }

  static saveCurrentId(id: string) {
    localStorage.setItem(STORAGE_KEY_CURRENT, id);
  }

  static removeCurrentId() {
    localStorage.removeItem(STORAGE_KEY_CURRENT);
  }

  static saveTournament(manager: TournamentManager, history: TournamentData[]): TournamentData[] {
    const idx = history.findIndex((t) => t.id === manager.id);
    const json = manager.toJSON();
    const newHistory = [...history];
    if (idx >= 0) {
      newHistory[idx] = json;
    } else {
      newHistory.push(json);
    }
    this.saveHistory(newHistory);
    this.saveCurrentId(manager.id);
    return newHistory;
  }
}

interface TournamentData {
  id: string;
  name: string;
  createdAt: number;
  status: string;
  rounds: unknown[];
  players: unknown[];
  winner?: unknown;
  scoreEnabled?: boolean;
}
