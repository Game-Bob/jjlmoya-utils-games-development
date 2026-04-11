import type { Match, Player, Round, TournamentData } from '../models';
import { BracketGenerator, type RoundNames } from './generator';

export class TournamentManager implements TournamentData {
  public id: string;
  public name: string;
  public createdAt: number;
  public status: 'SETUP' | 'ACTIVE' | 'FINISHED';
  public rounds: Round[];
  public players: Player[];
  public winner?: Player | null;
  public scoreEnabled: boolean = false;

  constructor(players: string[] = [], name = '', id = '', createdAt = 0) {
    this.id = id || crypto.randomUUID();
    this.name = name;
    this.createdAt = createdAt || Date.now();
    this.players = players.map((p, i) => ({ id: `p-${i}-${Date.now()}`, name: p }));
    this.status = 'SETUP';
    this.rounds = [];
  }

  public shufflePlayers(): void {
    for (let i = this.players.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.players[i], this.players[j]] = [this.players[j]!, this.players[i]!];
    }
  }

  public startTournament(roundNames: RoundNames): void {
    if (this.players.length < 2) return;
    this.rounds = BracketGenerator.generate(this.players, roundNames);
    this.status = 'ACTIVE';
    this.resolveWalkovers();
  }

  private applyScore(match: Match, matchId: string): void {
    const both = match.score1 != null && match.score2 != null;
    if (!both) return;
    if (match.score1! > match.score2! && match.player1) this.setWinner(matchId, match.player1.id);
    else if (match.score2! > match.score1! && match.player2) this.setWinner(matchId, match.player2.id);
  }

  public setScore(matchId: string, s1: number | null, s2: number | null): void {
    const match = this.findMatch(matchId);
    if (!match) return;
    if (s1 !== null) match.score1 = s1;
    if (s2 !== null) match.score2 = s2;
    this.applyScore(match, matchId);
  }

  public findMatch(matchId: string): Match | undefined {
    for (const round of this.rounds) {
      const m = round.matches.find((x) => x.id === matchId);
      if (m) return m;
    }
    return undefined;
  }

  private findMatchWithRound(matchId: string): { match: Match; roundIndex: number } | null {
    for (let i = 0; i < this.rounds.length; i++) {
      const m = this.rounds[i].matches.find((x) => x.id === matchId);
      if (m) return { match: m, roundIndex: i };
    }
    return null;
  }

  private resolveWinner(match: Match, winnerId: string): Player | null {
    if (match.player1?.id === winnerId) return match.player1;
    if (match.player2?.id === winnerId) return match.player2;
    return null;
  }

  public setWinner(matchId: string, winnerId: string): void {
    const found = this.findMatchWithRound(matchId);
    if (!found) return;
    const { match, roundIndex } = found;
    const winner = this.resolveWinner(match, winnerId);
    if (!winner) return;
    match.winner = winner;
    if (match.nextMatchId) this.propagateWinner(match.nextMatchId, roundIndex + 1, winner, match.matchIndex);
    this.checkStatus();
  }

  private propagateWinner(nextMatchId: string, nextRound: number, player: Player, originIdx: number) {
    if (nextRound >= this.rounds.length) return;
    const nextMatch = this.rounds[nextRound].matches.find((m) => m.id === nextMatchId);
    if (!nextMatch) return;
    const isSlot1 = originIdx % 2 === 0;
    const current = isSlot1 ? nextMatch.player1 : nextMatch.player2;
    if (current?.id === player.id) return;
    if (isSlot1) nextMatch.player1 = player; else nextMatch.player2 = player;
    nextMatch.winner = null;
    if (nextMatch.nextMatchId) this.clearFuture(nextMatch.nextMatchId, nextRound + 1, nextMatch.matchIndex);
  }

  private clearFuture(matchId: string, roundIndex: number, originIdx: number) {
    if (roundIndex >= this.rounds.length) return;
    const match = this.rounds[roundIndex].matches.find((m) => m.id === matchId);
    if (!match) return;
    if (originIdx % 2 === 0) match.player1 = null; else match.player2 = null;
    match.winner = null;
    if (match.nextMatchId) this.clearFuture(match.nextMatchId, roundIndex + 1, match.matchIndex);
  }

  private resolveByeMatch(match: Match, round: Round): boolean {
    if (match.winner) return false;
    if (match.player1 && !match.player2) return this.tryAutoWin(match, match.player1, round, 1);
    if (!match.player1 && match.player2) return this.tryAutoWin(match, match.player2, round, 0);
    return false;
  }

  private tryAutoWin(match: Match, player: Player, round: Round, offset: number): boolean {
    if (round.index === 0) { this.setWinner(match.id, player.id); return true; }
    const sourceIdx = match.matchIndex * 2 + offset;
    const prevRound = this.rounds[round.index - 1];
    const hasSource = prevRound?.matches.some((m) => m.matchIndex === sourceIdx);
    if (!hasSource) { this.setWinner(match.id, player.id); return true; }
    return false;
  }

  private resolveWalkoversRound(round: Round): boolean {
    let changed = false;
    for (const match of round.matches) {
      if (this.resolveByeMatch(match, round)) changed = true;
    }
    return changed;
  }

  private resolveWalkovers() {
    let changed = true;
    while (changed) {
      changed = this.rounds.some((round) => this.resolveWalkoversRound(round));
    }
  }

  private checkStatus(): void {
    const last = this.rounds[this.rounds.length - 1];
    if (last?.matches.every((m) => m.winner)) {
      this.status = 'FINISHED';
      if (last.matches.length === 1) this.winner = last.matches[0]!.winner;
    }
  }

  toJSON(): TournamentData {
    return { id: this.id, name: this.name, createdAt: this.createdAt, players: this.players, rounds: this.rounds, status: this.status, winner: this.winner, scoreEnabled: this.scoreEnabled };
  }

  private static applyData(m: TournamentManager, data: Partial<TournamentData>): void {
    m.id = data.id ?? m.id;
    m.name = data.name ?? m.name;
    m.createdAt = data.createdAt ?? m.createdAt;
    m.players = data.players ?? [];
    m.rounds = data.rounds ?? [];
    m.status = data.status ?? 'SETUP';
  }

  static fromJSON(data: Partial<TournamentData>): TournamentManager {
    const m = new TournamentManager();
    TournamentManager.applyData(m, data);
    m.winner = data.winner ?? null;
    m.scoreEnabled = data.scoreEnabled ?? false;
    return m;
  }
}
