export interface TimeHMS {
  hours: number;
  minutes: number;
  seconds: number;
}

export type DistanceUnit = 'km' | 'mi';

export interface RacePreset {
  id: string;
  distanceKm: number;
  distanceMiles: number;
}

export const RACE_PRESETS: RacePreset[] = [
  { id: '5k', distanceKm: 5, distanceMiles: 3.10686 },
  { id: '10k', distanceKm: 10, distanceMiles: 6.21371 },
  { id: 'half-marathon', distanceKm: 21.0975, distanceMiles: 13.1094 },
  { id: 'marathon', distanceKm: 42.195, distanceMiles: 26.2188 },
];

export interface RacePrediction {
  id: string;
  distanceKm: number;
  distanceMiles: number;
  timeSeconds: number;
  paceSecPerKm: number;
  paceSecPerMile: number;
}

export interface TrainingZone {
  id: 'easy' | 'tempo' | 'intervals';
  minPaceSecPerKm: number;
  maxPaceSecPerKm: number;
  minPaceSecPerMile: number;
  maxPaceSecPerMile: number;
}

export function hmsToTotalSeconds(hms: TimeHMS): number {
  const h = Math.max(0, Math.floor(hms.hours || 0));
  const m = Math.max(0, Math.floor(hms.minutes || 0));
  const s = Math.max(0, Math.floor(hms.seconds || 0));
  return h * 3600 + m * 60 + s;
}

export function totalSecondsToHMS(totalSec: number): TimeHMS {
  const safeSec = Math.max(0, Math.round(totalSec));
  const hours = Math.floor(safeSec / 3600);
  const minutes = Math.floor((safeSec % 3600) / 60);
  const seconds = safeSec % 60;
  return { hours, minutes, seconds };
}

export function formatPace(totalSecPerUnit: number): string {
  if (!isFinite(totalSecPerUnit) || totalSecPerUnit <= 0) {
    return '0:00';
  }
  const minutes = Math.floor(totalSecPerUnit / 60);
  const seconds = Math.round(totalSecPerUnit % 60);
  if (seconds === 60) {
    return `${minutes + 1}:00`;
  }
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

export function formatTimeHMS(totalSec: number): string {
  const { hours, minutes, seconds } = totalSecondsToHMS(totalSec);
  const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);
  if (hours > 0) {
    return `${hours}:${pad(minutes)}:${pad(seconds)}`;
  }
  return `${minutes}:${pad(seconds)}`;
}

export function calculatePaceFromTimeAndDistance(totalSeconds: number, distanceKm: number): {
  secPerKm: number;
  secPerMile: number;
} {
  if (totalSeconds <= 0 || distanceKm <= 0) {
    return { secPerKm: 0, secPerMile: 0 };
  }
  const secPerKm = totalSeconds / distanceKm;
  const secPerMile = secPerKm * 1.609344;
  return { secPerKm, secPerMile };
}

export function calculateTimeFromDistanceAndPace(distanceKm: number, secPerKm: number): number {
  if (distanceKm <= 0 || secPerKm <= 0) {
    return 0;
  }
  return distanceKm * secPerKm;
}

export function calculateDistanceFromTimeAndPace(totalSeconds: number, secPerKm: number): number {
  if (totalSeconds <= 0 || secPerKm <= 0) {
    return 0;
  }
  return totalSeconds / secPerKm;
}

export function predictRaceTimeRiegel(
  baseDistanceKm: number,
  baseTimeSeconds: number,
  targetDistanceKm: number,
  exponent = 1.06
): number {
  if (baseDistanceKm <= 0 || baseTimeSeconds <= 0 || targetDistanceKm <= 0) {
    return 0;
  }
  return baseTimeSeconds * Math.pow(targetDistanceKm / baseDistanceKm, exponent);
}

export function generateAllRacePredictions(
  baseDistanceKm: number,
  baseTimeSeconds: number
): RacePrediction[] {
  if (baseDistanceKm <= 0 || baseTimeSeconds <= 0) {
    return [];
  }

  return RACE_PRESETS.map((preset) => {
    const predictedTime = predictRaceTimeRiegel(baseDistanceKm, baseTimeSeconds, preset.distanceKm);
    const paces = calculatePaceFromTimeAndDistance(predictedTime, preset.distanceKm);
    return {
      id: preset.id,
      distanceKm: preset.distanceKm,
      distanceMiles: preset.distanceMiles,
      timeSeconds: predictedTime,
      paceSecPerKm: paces.secPerKm,
      paceSecPerMile: paces.secPerMile,
    };
  });
}

function buildZone(id: string, minMult: number, maxMult: number, basePace: number): TrainingZone {
  const minPace = basePace * minMult;
  const maxPace = basePace * maxMult;
  return {
    id,
    minPaceSecPerKm: minPace,
    maxPaceSecPerKm: maxPace,
    minPaceSecPerMile: minPace * 1.609344,
    maxPaceSecPerMile: maxPace * 1.609344,
  };
}

export function calculateTrainingZones(fiveKPaceSecPerKm: number): TrainingZone[] {
  if (fiveKPaceSecPerKm <= 0) {
    return [
      { id: 'easy', minPaceSecPerKm: 0, maxPaceSecPerKm: 0, minPaceSecPerMile: 0, maxPaceSecPerMile: 0 },
      { id: 'tempo', minPaceSecPerKm: 0, maxPaceSecPerKm: 0, minPaceSecPerMile: 0, maxPaceSecPerMile: 0 },
      { id: 'intervals', minPaceSecPerKm: 0, maxPaceSecPerKm: 0, minPaceSecPerMile: 0, maxPaceSecPerMile: 0 },
    ];
  }

  return [
    buildZone('easy', 1.25, 1.45, fiveKPaceSecPerKm),
    buildZone('tempo', 1.10, 1.20, fiveKPaceSecPerKm),
    buildZone('intervals', 0.95, 1.05, fiveKPaceSecPerKm),
  ];
}
