import type { ModifierOrder, RoundingMode } from "./logic";

export interface LabPreferences {
  formulaA: string;
  formulaB: string;
  rounding: RoundingMode;
  modifierOrder: ModifierOrder;
}

const STORAGE_KEY = "jjlmoya-damage-formula-lab";

export const defaultPreferences: LabPreferences = {
  formulaA: "max(1, attack * power - defense)",
  formulaB: "max(1, attack * power * 100 / (100 + defense))",
  rounding: "round",
  modifierOrder: "resistance-first",
};

function isRounding(value: unknown): value is RoundingMode {
  return (
    value === "none" ||
    value === "floor" ||
    value === "round" ||
    value === "ceil"
  );
}

function isOrder(value: unknown): value is ModifierOrder {
  return value === "resistance-first" || value === "flat-first";
}

export function loadPreferences(): LabPreferences {
  try {
    const parsed = JSON.parse(
      localStorage.getItem(STORAGE_KEY) ?? "",
    ) as Partial<LabPreferences>;
    return {
      formulaA:
        typeof parsed.formulaA === "string"
          ? parsed.formulaA
          : defaultPreferences.formulaA,
      formulaB:
        typeof parsed.formulaB === "string"
          ? parsed.formulaB
          : defaultPreferences.formulaB,
      rounding: isRounding(parsed.rounding)
        ? parsed.rounding
        : defaultPreferences.rounding,
      modifierOrder: isOrder(parsed.modifierOrder)
        ? parsed.modifierOrder
        : defaultPreferences.modifierOrder,
    };
  } catch {
    return { ...defaultPreferences };
  }
}

export function savePreferences(preferences: LabPreferences): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
  } catch {}
}
