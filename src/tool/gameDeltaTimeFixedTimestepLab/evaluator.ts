import type { LoopResult } from './logic';

export type DiagnosticKey = 'stable' | 'variable' | 'fixed' | 'clamped';

export interface Diagnostic {
  key: DiagnosticKey;
  severity: 'calm' | 'notice' | 'warning';
}

export function evaluateLoop(result: LoopResult): Diagnostic {
  if (result.config.clampEnabled && Math.abs(result.divergence) > 0.01) {
    return { key: 'clamped', severity: 'warning' };
  }
  if (Math.abs(result.divergence) > 0.01 && result.variablePosition > result.fixedPosition) {
    return { key: 'variable', severity: 'warning' };
  }
  if (result.maxCatchUp > 1) {
    return { key: 'fixed', severity: 'notice' };
  }
  return { key: 'stable', severity: 'calm' };
}
