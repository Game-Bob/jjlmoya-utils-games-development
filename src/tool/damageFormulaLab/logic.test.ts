import { describe, expect, it } from "vitest";
import {
  buildCurve,
  buildHeatmap,
  evaluateExpression,
  evaluateFormula,
  makeRange,
  roundDamage,
} from "./logic";
import type { CombatSettings, FormulaVariables } from "./logic";

const variables: FormulaVariables = {
  attack: 80,
  defense: 30,
  level: 12,
  power: 1.5,
  resistance: 20,
  flat: 4,
  criticalChance: 25,
  criticalMultiplier: 2,
};

const settings: CombatSettings = {
  health: 500,
  attacksPerSecond: 2,
  rounding: "round",
  modifierOrder: "resistance-first",
};

describe("damage formula parser", () => {
  it("evaluates precedence, unary values, exponentiation and variables", () => {
    expect(evaluateExpression("attack + defense * 2", variables)).toBe(140);
    expect(evaluateExpression("-(2 + 3) ^ 2", variables)).toBe(-25);
  });

  it("evaluates the documented safe functions", () => {
    expect(evaluateExpression("min(9, max(2, 7)) + abs(-3)", variables)).toBe(
      10,
    );
    expect(
      evaluateExpression("floor(2.9) + ceil(2.1) + round(2.5)", variables),
    ).toBe(8);
    expect(
      evaluateExpression("sqrt(16) + pow(2, 3) + clamp(20, 0, 10)", variables),
    ).toBe(22);
  });

  it("rejects empty, unknown and non-finite expressions", () => {
    expect(() => evaluateExpression("", variables)).toThrow(
      "Enter a damage formula",
    );
    expect(() => evaluateExpression("mystery + 1", variables)).toThrow(
      "Unknown variable",
    );
    expect(() => evaluateExpression("attack / 0", variables)).toThrow(
      "non-finite",
    );
    expect(() => evaluateExpression("attack; alert(1)", variables)).toThrow(
      "Unsupported character",
    );
  });

  it("rejects malformed syntax and unsupported functions", () => {
    expect(() => evaluateExpression("(attack + 1", variables)).toThrow(
      "Expected )",
    );
    expect(() => evaluateExpression("noise(1)", variables)).toThrow(
      "Unknown function",
    );
    expect(() => evaluateExpression("attack defense", variables)).toThrow(
      "Unexpected token",
    );
  });
});

describe("combat modelling", () => {
  it("calculates expected damage, hit count and time to kill", () => {
    const result = evaluateFormula(
      "attack * power - defense",
      variables,
      settings,
    );
    expect(result.baseDamage).toBe(90);
    expect(result.expectedDamage).toBe(94);
    expect(result.roundedDamage).toBe(94);
    expect(result.hitsToKill).toBe(6);
    expect(result.timeToKill).toBe(2.5);
  });

  it("makes modifier order and rounding explicit", () => {
    const flatFirst = evaluateFormula("100", variables, {
      ...settings,
      modifierOrder: "flat-first",
      rounding: "floor",
    });
    const resistanceFirst = evaluateFormula("100", variables, {
      ...settings,
      modifierOrder: "resistance-first",
      rounding: "ceil",
    });
    expect(flatFirst.roundedDamage).toBe(103);
    expect(resistanceFirst.roundedDamage).toBe(104);
    expect(roundDamage(2.4, "none")).toBe(2.4);
    expect(roundDamage(2.4, "floor")).toBe(2);
    expect(roundDamage(2.4, "round")).toBe(2);
    expect(roundDamage(2.4, "ceil")).toBe(3);
  });

  it("reports unreachable kills for zero damage or cadence", () => {
    expect(evaluateFormula("-100", variables, settings).hitsToKill).toBe(
      Number.POSITIVE_INFINITY,
    );
    expect(
      evaluateFormula("100", variables, { ...settings, attacksPerSecond: 0 })
        .timeToKill,
    ).toBe(Number.POSITIVE_INFINITY);
  });

  it("builds bounded curves and heatmaps from the same evaluator", () => {
    expect(makeRange({ min: 10, max: 20, steps: 1 })).toEqual([10, 20]);
    expect(makeRange({ min: 10, max: 20, steps: 50 })).toHaveLength(25);
    const curve = buildCurve("attack - defense", variables, settings, {
      min: 40,
      max: 60,
      steps: 3,
    });
    const heatmap = buildHeatmap({
      expression: "attack - defense",
      variables,
      settings,
      attackRange: { min: 40, max: 60, steps: 3 },
      defenseRange: { min: 10, max: 20, steps: 2 },
    });
    expect(curve.map((point) => point.attack)).toEqual([40, 50, 60]);
    expect(heatmap).toHaveLength(2);
    expect(heatmap[0]).toHaveLength(3);
  });
});
