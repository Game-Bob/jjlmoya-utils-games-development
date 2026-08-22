import { buildCurve, evaluateExpression, evaluateFormula } from "./logic";
import type {
  CombatSettings,
  FormulaResult,
  FormulaVariables,
  SamplePoint,
  SweepRange,
} from "./logic";

export type DiagnosticKind = "ok" | "warning" | "error";

export interface FormulaEvaluation {
  result?: FormulaResult;
  diagnostics: string[];
  kind: DiagnosticKind;
}

function curveDiagnostics(points: SamplePoint[]): string[] {
  const messages: string[] = [];
  if (points.some((point) => point.roundedDamage <= 0))
    messages.push("The sweep contains a zero damage region.");
  const cliffs = points.slice(1).filter((point, index) => {
    const previous = points[index]?.roundedDamage ?? 0;
    return (
      previous > 0 && Math.abs(point.roundedDamage - previous) / previous > 0.5
    );
  });
  if (cliffs.length > 0)
    messages.push("The sweep contains a damage jump above 50%.");
  const ttkSteps = new Set(points.map((point) => point.hitsToKill));
  if (ttkSteps.size > Math.ceil(points.length * 0.65))
    messages.push(
      "Small attack changes create frequent hit count breakpoints.",
    );
  return messages;
}

export function inspectFormula(
  expression: string,
  variables: FormulaVariables,
  settings: CombatSettings,
): FormulaEvaluation {
  try {
    const raw = evaluateExpression(expression, variables);
    const result = evaluateFormula(expression, variables, settings);
    const diagnostics: string[] = [];
    if (raw < 0)
      diagnostics.push(
        "The formula is negative before modifiers and clamping.",
      );
    if (result.roundedDamage <= 0)
      diagnostics.push("This setup cannot damage the target.");
    if (Math.abs(result.expectedDamage - result.roundedDamage) >= 0.5)
      diagnostics.push("Rounding changes expected damage by at least 0.5.");
    return {
      result,
      diagnostics,
      kind: diagnostics.length > 0 ? "warning" : "ok",
    };
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "The formula could not be evaluated";
    return { diagnostics: [message], kind: "error" };
  }
}

export function inspectSweep(
  expression: string,
  variables: FormulaVariables,
  settings: CombatSettings,
  range: SweepRange,
): string[] {
  try {
    return curveDiagnostics(buildCurve(expression, variables, settings, range));
  } catch (error) {
    return [
      error instanceof Error
        ? error.message
        : "The sweep could not be evaluated",
    ];
  }
}
