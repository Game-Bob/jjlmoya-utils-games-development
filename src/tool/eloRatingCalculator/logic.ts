export type EloResult = 'win' | 'draw' | 'loss';

export interface EloInput {
  playerRating: number;
  opponentRating: number;
  kFactor: number;
  result: EloResult;
}

export interface EloOutput {
  expectedScore: number;
  actualScore: number;
  ratingDelta: number;
  newRating: number;
  opponentNewRating: number;
  advantage: number;
}

const resultScores: Record<EloResult, number> = {
  win: 1,
  draw: 0.5,
  loss: 0,
};

export function calculateElo(input: EloInput): EloOutput {
  const expectedScore = 1 / (1 + 10 ** ((input.opponentRating - input.playerRating) / 400));
  const actualScore = resultScores[input.result];
  const ratingDelta = Math.round(input.kFactor * (actualScore - expectedScore));
  const newRating = input.playerRating + ratingDelta;
  return {
    expectedScore,
    actualScore,
    ratingDelta,
    newRating,
    opponentNewRating: input.opponentRating - ratingDelta,
    advantage: input.playerRating - input.opponentRating,
  };
}

export function clampRating(value: number): number {
  return Math.min(3000, Math.max(100, Math.round(value)));
}

export function clampKFactor(value: number): number {
  return Math.min(80, Math.max(4, Math.round(value)));
}
