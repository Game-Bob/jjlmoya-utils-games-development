import {
  contrastRatio,
  separationRetention,
  simulateColor,
  type RGBColor,
  type SimulationMode,
} from './logic';

export type DiagnosticStatus = 'strong' | 'watch' | 'review';

export interface PairDiagnostic {
  originalContrast: number;
  simulatedContrast: number;
  retained: number;
  status: DiagnosticStatus;
  simulatedFirst: RGBColor;
  simulatedSecond: RGBColor;
}

function diagnosticStatus(contrast: number, retained: number): DiagnosticStatus {
  if (contrast < 3 || retained < 45) return 'review';
  if (contrast < 4.5 || retained < 70) return 'watch';
  return 'strong';
}

export function evaluatePair(
  first: RGBColor,
  second: RGBColor,
  mode: SimulationMode,
): PairDiagnostic {
  const simulatedFirst = simulateColor(first, mode);
  const simulatedSecond = simulateColor(second, mode);
  const simulatedContrast = contrastRatio(simulatedFirst, simulatedSecond);
  const retained = separationRetention(first, second, simulatedFirst, simulatedSecond);
  return {
    originalContrast: contrastRatio(first, second),
    simulatedContrast,
    retained,
    status: diagnosticStatus(simulatedContrast, retained),
    simulatedFirst,
    simulatedSecond,
  };
}
