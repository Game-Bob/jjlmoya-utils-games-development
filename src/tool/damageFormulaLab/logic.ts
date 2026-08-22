import { evaluateExpression } from "./expression";

export { evaluateExpression } from "./expression";

export type RoundingMode = "none" | "floor" | "round" | "ceil";
export type ModifierOrder = "resistance-first" | "flat-first";

export interface FormulaVariables {
  attack: number;
  defense: number;
  level: number;
  power: number;
  resistance: number;
  flat: number;
  criticalChance: number;
  criticalMultiplier: number;
}

export interface CombatSettings {
  health: number;
  attacksPerSecond: number;
  rounding: RoundingMode;
  modifierOrder: ModifierOrder;
}

export interface FormulaResult {
  baseDamage: number;
  expectedDamage: number;
  roundedDamage: number;
  hitsToKill: number;
  timeToKill: number;
}

export interface SamplePoint extends FormulaResult {
  attack: number;
  defense: number;
}

export interface SweepRange {
  min: number;
  max: number;
  steps: number;
}

export interface HeatmapRequest {
  expression: string;
  variables: FormulaVariables;
  settings: CombatSettings;
  attackRange: SweepRange;
  defenseRange: SweepRange;
}

function applyModifiers(
  value: number,
  variables: FormulaVariables,
  order: ModifierOrder,
): number {
  const resistanceMultiplier =
    1 - Math.min(Math.max(variables.resistance, 0), 100) / 100;
  if (order === "flat-first")
    return (value + variables.flat) * resistanceMultiplier;
  return value * resistanceMultiplier + variables.flat;
}

export function roundDamage(value: number, mode: RoundingMode): number {
  if (mode === "floor") return Math.floor(value);
  if (mode === "ceil") return Math.ceil(value);
  if (mode === "round") return Math.round(value);
  return value;
}

export function evaluateFormula(
  expression: string,
  variables: FormulaVariables,
  settings: CombatSettings,
): FormulaResult {
  const baseDamage = evaluateExpression(expression, variables);
  const chance = Math.min(Math.max(variables.criticalChance, 0), 100) / 100;
  const criticalFactor = 1 + chance * (variables.criticalMultiplier - 1);
  const modified = applyModifiers(
    baseDamage * criticalFactor,
    variables,
    settings.modifierOrder,
  );
  const expectedDamage = Math.max(0, modified);
  const roundedDamage = Math.max(
    0,
    roundDamage(expectedDamage, settings.rounding),
  );
  const hitsToKill =
    roundedDamage > 0
      ? Math.ceil(settings.health / roundedDamage)
      : Number.POSITIVE_INFINITY;
  const validCadence =
    Number.isFinite(hitsToKill) && settings.attacksPerSecond > 0;
  const timeToKill = validCadence
    ? Math.max(0, hitsToKill - 1) / settings.attacksPerSecond
    : Number.POSITIVE_INFINITY;
  return { baseDamage, expectedDamage, roundedDamage, hitsToKill, timeToKill };
}

export function makeRange(range: SweepRange): number[] {
  const steps = Math.min(Math.max(Math.round(range.steps), 2), 25);
  const span = range.max - range.min;
  return Array.from(
    { length: steps },
    (_, index) => range.min + (span * index) / (steps - 1),
  );
}

export function buildCurve(
  expression: string,
  variables: FormulaVariables,
  settings: CombatSettings,
  range: SweepRange,
): SamplePoint[] {
  return makeRange(range).map((attack) => ({
    attack,
    defense: variables.defense,
    ...evaluateFormula(expression, { ...variables, attack }, settings),
  }));
}

export function buildHeatmap(request: HeatmapRequest): SamplePoint[][] {
  const { expression, variables, settings, attackRange, defenseRange } =
    request;
  return makeRange(defenseRange).map((defense) =>
    makeRange(attackRange).map((attack) => ({
      attack,
      defense,
      ...evaluateFormula(
        expression,
        { ...variables, attack, defense },
        settings,
      ),
    })),
  );
}
