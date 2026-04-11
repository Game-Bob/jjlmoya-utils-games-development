import type { Match, Player, Round } from '../models';

export interface RoundNames {
  final: string;
  semifinal: string;
  quarter: string;
  prefix: string;
}

export class BracketGenerator {
  static generate(players: Player[], names: RoundNames): Round[] {
    const count = players.length;
    if (count < 2) return [];
    const roundsCount = Math.ceil(Math.log2(count));
    const bracketSize = Math.pow(2, roundsCount);
    const rounds: Round[] = [];
    const round0 = this.buildRound0(players, count, bracketSize / 2);
    rounds.push({ index: 0, name: this.getRoundName(0, roundsCount, names), matches: round0 });
    for (let r = 1; r < roundsCount; r++) {
      const matches = this.buildRoundN(r, rounds[r - 1]);
      rounds.push({ index: r, name: this.getRoundName(r, roundsCount, names), matches });
    }
    this.linkMatches(rounds, roundsCount);
    return rounds;
  }

  private static getPlayer(players: Player[], count: number, idx: number): Player | null {
    return idx < count ? (players[idx] ?? null) : null;
  }

  private static isByeMatch(p1: Player | null, p2: Player | null): boolean {
    return (p1 !== null && p2 === null) || (p1 === null && p2 !== null);
  }

  private static buildRound0(players: Player[], count: number, total: number): Match[] {
    const matches: Match[] = [];
    for (let m = 0; m < total; m++) {
      const p1 = this.getPlayer(players, count, m * 2);
      const p2 = this.getPlayer(players, count, m * 2 + 1);
      if (!p1 && !p2) continue;
      matches.push({ id: `r0-m${m}`, roundIndex: 0, matchIndex: m, player1: p1, player2: p2, winner: null, nextMatchId: null, isBye: this.isByeMatch(p1, p2) });
    }
    return matches;
  }

  private static buildRoundN(r: number, prevRound: Round): Match[] {
    const maxMatchIndex = Math.max(...prevRound.matches.map((m) => m.matchIndex));
    const expected = Math.ceil((maxMatchIndex + 1) / 2);
    const matches: Match[] = [];
    for (let m = 0; m < expected; m++) {
      const has1 = prevRound.matches.some((x) => x.matchIndex === m * 2);
      const has2 = prevRound.matches.some((x) => x.matchIndex === m * 2 + 1);
      if (!has1 && !has2) continue;
      matches.push({ id: `r${r}-m${m}`, roundIndex: r, matchIndex: m, player1: null, player2: null, winner: null, nextMatchId: null });
    }
    return matches;
  }

  private static linkMatches(rounds: Round[], roundsCount: number) {
    for (let r = 0; r < roundsCount - 1; r++) {
      rounds[r].matches.forEach((match) => { match.nextMatchId = `r${r + 1}-m${Math.floor(match.matchIndex / 2)}`; });
    }
  }

  private static getRoundName(index: number, total: number, names: RoundNames): string {
    if (index === total - 1) return names.final;
    if (index === total - 2) return names.semifinal;
    if (index === total - 3) return names.quarter;
    return `${names.prefix} ${index + 1}`;
  }
}
