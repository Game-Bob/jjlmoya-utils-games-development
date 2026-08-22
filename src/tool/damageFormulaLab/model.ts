import type {
  CombatSettings,
  FormulaVariables,
  ModifierOrder,
  RoundingMode,
  SweepRange,
} from "./logic";

export interface LabConfig {
  version: 1;
  formulaA: string;
  formulaB: string;
  variables: FormulaVariables;
  settings: CombatSettings;
  attackRange: SweepRange;
  defenseRange: SweepRange;
}

export const defaultConfig: LabConfig = {
  version: 1,
  formulaA: "max(1, attack * power - defense)",
  formulaB: "max(1, attack * power * 100 / (100 + defense))",
  variables: {
    attack: 80,
    defense: 35,
    level: 20,
    power: 1.4,
    resistance: 15,
    flat: 3,
    criticalChance: 20,
    criticalMultiplier: 1.75,
  },
  settings: {
    health: 450,
    attacksPerSecond: 1.5,
    rounding: "round",
    modifierOrder: "resistance-first",
  },
  attackRange: { min: 40, max: 160, steps: 17 },
  defenseRange: { min: 10, max: 90, steps: 9 },
};

export const formulaPresets = {
  linear: "max(1, attack * power - defense)",
  ratio: "max(1, attack * power * 100 / (100 + defense))",
  level:
    "max(1, ((2 * level + 10) / 250) * (attack / max(1, defense)) * power + 2)",
};

export const scenarios: Record<
  string,
  Partial<FormulaVariables> & { health: number }
> = {
  skirmisher: { defense: 20, resistance: 5, health: 220 },
  guardian: { defense: 70, resistance: 25, health: 700 },
  boss: { defense: 110, resistance: 35, health: 2200 },
};

function finite(value: unknown, fallback: number): number {
  return typeof value === "number" && Number.isFinite(value) ? value : fallback;
}

function rounding(value: unknown): RoundingMode {
  if (value === "none" || value === "floor" || value === "ceil") return value;
  return "round";
}

function order(value: unknown): ModifierOrder {
  return value === "flat-first" ? "flat-first" : "resistance-first";
}

function variables(value: unknown): FormulaVariables {
  const source =
    typeof value === "object" && value
      ? (value as Partial<FormulaVariables>)
      : {};
  const base = defaultConfig.variables;
  return {
    attack: finite(source.attack, base.attack),
    defense: finite(source.defense, base.defense),
    level: finite(source.level, base.level),
    power: finite(source.power, base.power),
    resistance: finite(source.resistance, base.resistance),
    flat: finite(source.flat, base.flat),
    criticalChance: finite(source.criticalChance, base.criticalChance),
    criticalMultiplier: finite(
      source.criticalMultiplier,
      base.criticalMultiplier,
    ),
  };
}

function range(value: unknown, fallback: SweepRange): SweepRange {
  const source =
    typeof value === "object" && value ? (value as Partial<SweepRange>) : {};
  return {
    min: finite(source.min, fallback.min),
    max: finite(source.max, fallback.max),
    steps: finite(source.steps, fallback.steps),
  };
}

function combatSettings(value: unknown): CombatSettings {
  const source =
    typeof value === "object" && value
      ? (value as Partial<CombatSettings>)
      : {};
  return {
    health: finite(source.health, defaultConfig.settings.health),
    attacksPerSecond: finite(
      source.attacksPerSecond,
      defaultConfig.settings.attacksPerSecond,
    ),
    rounding: rounding(source.rounding),
    modifierOrder: order(source.modifierOrder),
  };
}

export function parseConfig(value: unknown): LabConfig {
  if (typeof value !== "object" || !value)
    throw new Error("Invalid configuration");
  const source = value as Partial<LabConfig>;
  return {
    version: 1,
    formulaA:
      typeof source.formulaA === "string"
        ? source.formulaA
        : defaultConfig.formulaA,
    formulaB:
      typeof source.formulaB === "string"
        ? source.formulaB
        : defaultConfig.formulaB,
    variables: variables(source.variables),
    settings: combatSettings(source.settings),
    attackRange: range(source.attackRange, defaultConfig.attackRange),
    defenseRange: range(source.defenseRange, defaultConfig.defenseRange),
  };
}

export function configFromHash(hash: string): LabConfig | undefined {
  try {
    if (!hash.startsWith("#damage=")) return undefined;
    return parseConfig(JSON.parse(decodeURIComponent(hash.slice(8))));
  } catch {
    return undefined;
  }
}

export function configToHash(config: LabConfig): string {
  return `#damage=${encodeURIComponent(JSON.stringify(config))}`;
}
