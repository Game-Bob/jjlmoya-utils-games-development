import { describe, expect, it } from 'vitest';
import {
  calculateDistanceFromTimeAndPace,
  calculatePaceFromTimeAndDistance,
  calculateTimeFromDistanceAndPace,
  calculateTrainingZones,
  formatPace,
  formatTimeHMS,
  generateAllRacePredictions,
  hmsToTotalSeconds,
  predictRaceTimeRiegel,
  totalSecondsToHMS,
} from './logic';

describe('Running Pace & Race Predictor Logic', () => {
  it('converts HMS to total seconds and back correctly', () => {
    const sec = hmsToTotalSeconds({ hours: 1, minutes: 45, seconds: 30 });
    expect(sec).toBe(6330);
    expect(totalSecondsToHMS(6330)).toEqual({ hours: 1, minutes: 45, seconds: 30 });
  });

  it('formats pace strings accurately', () => {
    expect(formatPace(300)).toBe('5:00');
    expect(formatPace(325)).toBe('5:25');
    expect(formatPace(359.6)).toBe('6:00');
  });

  it('formats HMS time strings accurately', () => {
    expect(formatTimeHMS(3665)).toBe('1:01:05');
    expect(formatTimeHMS(1500)).toBe('25:00');
  });

  it('calculates pace from time and distance', () => {
    const result = calculatePaceFromTimeAndDistance(3000, 10);
    expect(result.secPerKm).toBe(300);
    expect(formatPace(result.secPerKm)).toBe('5:00');
  });

  it('calculates time from distance and pace', () => {
    const totalSec = calculateTimeFromDistanceAndPace(10, 300);
    expect(totalSec).toBe(3000);
  });

  it('calculates distance from time and pace', () => {
    const dist = calculateDistanceFromTimeAndPace(3000, 300);
    expect(dist).toBe(10);
  });

  it('predicts race times accurately using Riegel formula', () => {
    const predicted10k = predictRaceTimeRiegel(10, 3000, 21.0975);
    expect(predicted10k).toBeGreaterThan(6300);
    expect(predicted10k).toBeLessThan(6900);
  });

  it('generates all race predictions for 10K baseline', () => {
    const predictions = generateAllRacePredictions(10, 3000);
    expect(predictions).toHaveLength(4);
    const hm = predictions.find((p) => p.id === 'half-marathon');
    expect(hm).toBeDefined();
    expect(hm?.timeSeconds).toBeGreaterThan(6000);
  });

  it('calculates training zones based on 5K pace', () => {
    const zones = calculateTrainingZones(300);
    expect(zones).toHaveLength(3);
    const easy = zones.find((z) => z.id === 'easy');
    expect(easy?.minPaceSecPerKm).toBe(375);
    expect(easy?.maxPaceSecPerKm).toBe(435);
  });
});
