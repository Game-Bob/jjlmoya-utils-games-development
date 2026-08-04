export type DistanceUnit = 'metric' | 'imperial';

export interface SwimCssInput {
  t400Min: number;
  t400Sec: number;
  t200Min: number;
  t200Sec: number;
  unit: DistanceUnit;
}

export interface IntensityZoneSplit {
  distance: number;
  timeSeconds: number;
  formattedTime: string;
}

export interface IntensityZone {
  key: 'aerobic' | 'css' | 'vo2max';
  pace100Seconds: number;
  formattedPace100: string;
  splits: IntensityZoneSplit[];
}

export interface SwimCssResult {
  cssSpeed: number;
  pace100Seconds: number;
  formattedPace100: string;
  zones: IntensityZone[];
  unit: DistanceUnit;
}

export function parseTimeToSeconds(minutes: number, seconds: number): number {
  const m = Math.max(0, isNaN(minutes) ? 0 : minutes);
  const s = Math.max(0, isNaN(seconds) ? 0 : seconds);
  return m * 60 + s;
}

export function formatTimeSeconds(seconds: number): string {
  if (isNaN(seconds) || seconds < 0 || !isFinite(seconds)) {
    return '--:--';
  }
  const totalRounded = Math.round(seconds);
  const m = Math.floor(totalRounded / 60);
  const s = totalRounded % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

function calculateZoneSplits(zonePace100: number): IntensityZoneSplit[] {
  return [50, 100, 200, 400].map((dist) => {
    const splitTime = (zonePace100 * dist) / 100;
    return {
      distance: dist,
      timeSeconds: splitTime,
      formattedTime: formatTimeSeconds(splitTime),
    };
  });
}

function calculateIntensityZone(key: 'aerobic' | 'css' | 'vo2max', factor: number, basePace100: number): IntensityZone {
  const zonePace100 = basePace100 * factor;
  return {
    key,
    pace100Seconds: zonePace100,
    formattedPace100: formatTimeSeconds(zonePace100),
    splits: calculateZoneSplits(zonePace100),
  };
}

export function calculateSwimCss(input: SwimCssInput): SwimCssResult | null {
  const t400 = parseTimeToSeconds(input.t400Min, input.t400Sec);
  const t200 = parseTimeToSeconds(input.t200Min, input.t200Sec);

  if (t400 <= 0 || t200 <= 0 || t400 <= t200) return null;

  const cssSpeed = 200 / (t400 - t200);
  if (!isFinite(cssSpeed) || cssSpeed <= 0) return null;

  const basePace100 = 100 / cssSpeed;

  const zones: IntensityZone[] = [
    calculateIntensityZone('aerobic', 1.04, basePace100),
    calculateIntensityZone('css', 1.0, basePace100),
    calculateIntensityZone('vo2max', 0.96, basePace100),
  ];

  return {
    cssSpeed,
    pace100Seconds: basePace100,
    formattedPace100: formatTimeSeconds(basePace100),
    zones,
    unit: input.unit,
  };
}

const STORAGE_KEY = 'swim_css_calculator_state';

export function saveSwimCssState(input: SwimCssInput): void {
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(input));
    }
  } catch {
    return;
  }
}

export function getDefaultSwimCssState(): SwimCssInput {
  return {
    t400Min: 6,
    t400Sec: 0,
    t200Min: 2,
    t200Sec: 50,
    unit: 'metric',
  };
}

export function parseStoredSwimCssState(stored: string): SwimCssInput {
  try {
    const parsed = JSON.parse(stored);
    const def = getDefaultSwimCssState();
    return {
      t400Min: Number(parsed.t400Min) || def.t400Min,
      t400Sec: Number(parsed.t400Sec) || 0,
      t200Min: Number(parsed.t200Min) || def.t200Min,
      t200Sec: Number(parsed.t200Sec) || 0,
      unit: parsed.unit === 'imperial' ? 'imperial' : 'metric',
    };
  } catch {
    return getDefaultSwimCssState();
  }
}

export function loadSwimCssState(): SwimCssInput {
  if (typeof localStorage === 'undefined') return getDefaultSwimCssState();
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? parseStoredSwimCssState(stored) : getDefaultSwimCssState();
}
