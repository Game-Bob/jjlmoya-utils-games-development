import { renderLab } from "./dom-views";
import {
  configFromHash,
  defaultConfig,
  formulaPresets,
  parseConfig,
  scenarios,
} from "./model";
import type { LabConfig } from "./model";
import { loadPreferences, savePreferences } from "./storage";
import {
  copyShareLink,
  exportChartPng,
  exportCsv,
  exportJson,
} from "./transfers";
import type { DamageFormulaLabUI } from "./ui";

type Update = (config: LabConfig) => void;
type GetConfig = () => LabConfig;

function input(root: HTMLElement, name: string): HTMLInputElement | null {
  return root.querySelector<HTMLInputElement>(`[name="${name}"]`);
}

function numberValue(
  root: HTMLElement,
  name: string,
  fallback: number,
): number {
  const value = Number(input(root, name)?.value);
  return Number.isFinite(value) ? value : fallback;
}

function setActive(root: HTMLElement, selector: string, value: string): void {
  root.querySelectorAll<HTMLElement>(selector).forEach((item) => {
    const candidate = item.dataset.rounding ?? item.dataset.order;
    item.dataset.active = String(candidate === value);
  });
}

function writeInputs(root: HTMLElement, config: LabConfig): void {
  const values: Record<string, number | string> = {
    formulaA: config.formulaA,
    formulaB: config.formulaB,
    ...config.variables,
    health: config.settings.health,
    attacksPerSecond: config.settings.attacksPerSecond,
  };
  Object.entries(values).forEach(([name, value]) => {
    const field = input(root, name);
    if (field) field.value = String(value);
  });
  setActive(root, "[data-rounding]", config.settings.rounding);
  setActive(root, "[data-order]", config.settings.modifierOrder);
}

function readVariables(
  root: HTMLElement,
  current: LabConfig,
): Record<string, number> {
  return Object.fromEntries(
    Object.keys(current.variables).map((name) => [
      name,
      numberValue(
        root,
        name,
        current.variables[name as keyof typeof current.variables],
      ),
    ]),
  );
}

function readConfig(root: HTMLElement, current: LabConfig): LabConfig {
  return parseConfig({
    ...current,
    formulaA: input(root, "formulaA")?.value,
    formulaB: input(root, "formulaB")?.value,
    variables: readVariables(root, current),
    settings: {
      ...current.settings,
      health: numberValue(root, "health", current.settings.health),
      attacksPerSecond: numberValue(
        root,
        "attacksPerSecond",
        current.settings.attacksPerSecond,
      ),
    },
  });
}

function save(config: LabConfig): void {
  savePreferences({
    formulaA: config.formulaA,
    formulaB: config.formulaB,
    rounding: config.settings.rounding,
    modifierOrder: config.settings.modifierOrder,
  });
}

function initialConfig(): LabConfig {
  const preferences = loadPreferences();
  return (
    configFromHash(location.hash) ?? {
      ...structuredClone(defaultConfig),
      formulaA: preferences.formulaA,
      formulaB: preferences.formulaB,
      settings: {
        ...defaultConfig.settings,
        rounding: preferences.rounding,
        modifierOrder: preferences.modifierOrder,
      },
    }
  );
}

function applyScenario(config: LabConfig, name: string): LabConfig {
  const scenario = scenarios[name];
  if (!scenario) return config;
  const { health, ...variables } = scenario;
  return {
    ...config,
    variables: { ...config.variables, ...variables },
    settings: { ...config.settings, health },
  };
}

function bindModes(root: HTMLElement, get: GetConfig, update: Update): void {
  root
    .querySelectorAll<HTMLButtonElement>("[data-rounding]")
    .forEach((button) =>
      button.addEventListener("click", () => {
        const config = get();
        update({
          ...config,
          settings: {
            ...config.settings,
            rounding: button.dataset
              .rounding as LabConfig["settings"]["rounding"],
          },
        });
      }),
    );
  root.querySelectorAll<HTMLButtonElement>("[data-order]").forEach((button) =>
    button.addEventListener("click", () => {
      const config = get();
      update({
        ...config,
        settings: {
          ...config.settings,
          modifierOrder: button.dataset
            .order as LabConfig["settings"]["modifierOrder"],
        },
      });
    }),
  );
}

function bindPresets(root: HTMLElement, get: GetConfig, update: Update): void {
  root.querySelectorAll<HTMLButtonElement>("[data-preset]").forEach((button) =>
    button.addEventListener("click", () => {
      const formula =
        formulaPresets[button.dataset.preset as keyof typeof formulaPresets];
      update({ ...get(), formulaB: formula });
    }),
  );
  root
    .querySelectorAll<HTMLButtonElement>("[data-scenario]")
    .forEach((button) =>
      button.addEventListener("click", () => {
        update(applyScenario(get(), button.dataset.scenario ?? ""));
      }),
    );
}

function bindImport(
  root: HTMLElement,
  update: Update,
  ui: DamageFormulaLabUI,
): void {
  const picker = root.querySelector<HTMLInputElement>("[data-import]");
  picker?.addEventListener("change", async () => {
    try {
      const file = picker.files?.[0];
      if (file) update(parseConfig(JSON.parse(await file.text())));
    } catch {
      const status = root.querySelector<HTMLElement>("[data-status]");
      if (status) status.textContent = ui.importError;
    }
  });
}

function bindExports(
  root: HTMLElement,
  get: GetConfig,
  update: Update,
  ui: DamageFormulaLabUI,
): void {
  root
    .querySelector("[data-reset]")
    ?.addEventListener("click", () => update(structuredClone(defaultConfig)));
  root
    .querySelector("[data-json]")
    ?.addEventListener("click", () => exportJson(get()));
  root
    .querySelector("[data-csv]")
    ?.addEventListener("click", () => exportCsv(get()));
  root
    .querySelector("[data-png]")
    ?.addEventListener("click", () => exportChartPng(root));
  root.querySelector("[data-share]")?.addEventListener("click", async () => {
    await copyShareLink(get());
    const status = root.querySelector<HTMLElement>("[data-status]");
    if (status) status.textContent = ui.copiedStatus;
  });
  bindImport(root, update, ui);
}

export function mountDamageFormulaLab(
  root: HTMLElement,
  ui: DamageFormulaLabUI,
): void {
  let config = initialConfig();
  const update: Update = (next) => {
    config = next;
    writeInputs(root, config);
    save(config);
    renderLab(root, config, ui);
  };
  root.addEventListener("input", () => update(readConfig(root, config)));
  bindModes(root, () => config, update);
  bindPresets(root, () => config, update);
  bindExports(root, () => config, update, ui);
  update(config);
}
