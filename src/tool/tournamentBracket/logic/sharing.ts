import LZString from 'lz-string';
import type { TournamentData } from '../models';

export class TournamentSharing {
  private static readonly MAX_PLAYERS_TO_SHARE = 32;

  public static canShare(tournament: TournamentData): boolean {
    return tournament.players.length <= this.MAX_PLAYERS_TO_SHARE;
  }

  public static generateShareUrl(tournament: TournamentData): string | null {
    if (!this.canShare(tournament)) return null;
    try {
      const json = JSON.stringify(tournament);
      const compressed = LZString.compressToEncodedURIComponent(json);
      const baseUrl = window.location.origin + window.location.pathname;
      return `${baseUrl}#${compressed}`;
    } catch {
      return null;
    }
  }

  public static loadFromHash(): TournamentData | null {
    const hash = window.location.hash.slice(1);
    if (!hash) return null;
    try {
      const decompressed = LZString.decompressFromEncodedURIComponent(hash);
      if (!decompressed) return null;
      const tournament = JSON.parse(decompressed) as TournamentData;
      if (!this.isValidTournament(tournament)) return null;
      return tournament;
    } catch {
      return null;
    }
  }

  public static clearHash(): void {
    if (window.location.hash) {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }

  private static isValidTournament(data: unknown): data is TournamentData {
    if (!data || typeof data !== 'object') return false;
    const d = data as Record<string, unknown>;
    return (
      typeof d['id'] === 'string' &&
      typeof d['name'] === 'string' &&
      typeof d['createdAt'] === 'number' &&
      Array.isArray(d['players']) &&
      Array.isArray(d['rounds']) &&
      ['SETUP', 'ACTIVE', 'FINISHED'].includes(d['status'] as string)
    );
  }

  public static async copyToClipboard(url: string): Promise<boolean> {
    try {
      await navigator.clipboard.writeText(url);
      return true;
    } catch {
      return this.fallbackCopy(url);
    }
  }

  private static fallbackCopy(url: string): boolean {
    const textArea = document.createElement('textarea');
    textArea.value = url;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      document.body.removeChild(textArea);
      return true;
    } catch {
      document.body.removeChild(textArea);
      return false;
    }
  }
}
