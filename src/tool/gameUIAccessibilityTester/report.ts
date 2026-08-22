import type { PairDiagnostic } from './evaluator';
import { toHex, type RGBColor, type SimulationMode } from './logic';
import { triggerDownload } from './dom-views';
import type { GameUiAccessibilityTesterUI } from './ui';

export interface ReportInput {
  mode: SimulationMode;
  blur: number;
  downscale: number;
  firstName: string;
  secondName: string;
  first: RGBColor;
  second: RGBColor;
  diagnostic: PairDiagnostic;
  findings: string[];
}

function reportFindings(input: ReportInput, ui: GameUiAccessibilityTesterUI): string[] {
  const findings = [...input.findings];
  if (input.diagnostic.status === 'review') findings.unshift(ui.reportFindingReview);
  return findings;
}

function createReport(input: ReportInput, ui: GameUiAccessibilityTesterUI): Record<string, unknown> {
  return {
    title: ui.reportTitle,
    generatedAt: new Date().toISOString(),
    scope: 'manual-review-aid',
    processing: 'local-browser-only',
    settings: {
      simulation: input.mode,
      blurPixels: input.blur,
      downscale: input.downscale,
    },
    samples: [
      { name: input.firstName, color: toHex(input.first) },
      { name: input.secondName, color: toHex(input.second) },
    ],
    measurements: {
      originalContrastRatio: Number(input.diagnostic.originalContrast.toFixed(3)),
      simulatedContrastRatio: Number(input.diagnostic.simulatedContrast.toFixed(3)),
    },
    heuristic: {
      separationRetainedPercent: Number(input.diagnostic.retained.toFixed(1)),
      reviewStatus: input.diagnostic.status,
    },
    findings: reportFindings(input, ui),
    limitations: ui.limitationDisclosure,
  };
}

export function downloadStructuredReport(
  input: ReportInput,
  ui: GameUiAccessibilityTesterUI,
): void {
  const report = createReport(input, ui);
  const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' });
  triggerDownload(blob, 'game-ui-accessibility-review.json');
}
