import type { PixelPerUnitResult } from './logic';

export type DiagnosticKey = 'low' | 'medium' | 'high';

export interface Diagnostic {
  key: DiagnosticKey;
  messageKey: 'riskLowMessage' | 'riskMediumMessage' | 'riskHighMessage';
}

export function evaluatePixelPlan(result: PixelPerUnitResult): Diagnostic {
  if (result.bleedRisk === 'high') return { key: 'high', messageKey: 'riskHighMessage' };
  if (result.bleedRisk === 'medium') return { key: 'medium', messageKey: 'riskMediumMessage' };
  return { key: 'low', messageKey: 'riskLowMessage' };
}
