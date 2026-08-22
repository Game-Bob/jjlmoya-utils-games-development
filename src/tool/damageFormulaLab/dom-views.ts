import { buildCurve, buildHeatmap } from "./logic";
import type { FormulaResult, SamplePoint } from "./logic";
import { inspectFormula, inspectSweep } from "./evaluator";
import type { LabConfig } from "./model";
import type { DamageFormulaLabUI } from "./ui";

function query(root: HTMLElement, selector: string): HTMLElement | null {
  return root.querySelector<HTMLElement>(selector);
}

function format(value: number, digits = 1): string {
  return Number.isFinite(value)
    ? value.toLocaleString("en", { maximumFractionDigits: digits })
    : "∞";
}

function setText(root: HTMLElement, selector: string, value: string): void {
  const target = query(root, selector);
  if (target) target.textContent = value;
}

function resultText(
  result: FormulaResult | undefined,
  key: keyof FormulaResult,
  suffix = "",
): string {
  return result ? `${format(result[key])}${suffix}` : "Error";
}

function setResult(
  root: HTMLElement,
  prefix: string,
  result: FormulaResult | undefined,
): void {
  setText(
    root,
    `[data-result="${prefix}-damage"]`,
    resultText(result, "roundedDamage"),
  );
  setText(
    root,
    `[data-result="${prefix}-hits"]`,
    resultText(result, "hitsToKill"),
  );
  setText(
    root,
    `[data-result="${prefix}-ttk"]`,
    resultText(result, "timeToKill", " s"),
  );
}

function pointPath(points: SamplePoint[], maximum: number): string {
  return points
    .map((point, index) => {
      const x = points.length === 1 ? 0 : (index * 100) / (points.length - 1);
      const y = 100 - Math.min(point.roundedDamage / maximum, 1) * 84 - 8;
      return `${index === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`;
    })
    .join(" ");
}

function renderCurve(
  root: HTMLElement,
  a: SamplePoint[],
  b: SamplePoint[],
): void {
  const maximum = Math.max(
    1,
    ...a.map((point) => point.roundedDamage),
    ...b.map((point) => point.roundedDamage),
  );
  const pathA = root.querySelector<SVGPathElement>('[data-curve="a"]');
  const pathB = root.querySelector<SVGPathElement>('[data-curve="b"]');
  if (pathA) pathA.setAttribute("d", pointPath(a, maximum));
  if (pathB) pathB.setAttribute("d", pointPath(b, maximum));
  setText(root, "[data-curve-max]", format(maximum));
}

function renderHeatmap(root: HTMLElement, rows: SamplePoint[][]): void {
  const target = query(root, "[data-heatmap]");
  if (!target) return;
  const maximum = Math.max(
    1,
    ...rows.flat().map((point) => point.roundedDamage),
  );
  target.replaceChildren(
    ...rows.flat().map((point) => {
      const cell = document.createElement("span");
      cell.className = "damage-lab-heat-cell";
      cell.style.setProperty(
        "--damage-intensity",
        String(Math.max(0.06, point.roundedDamage / maximum)),
      );
      cell.textContent = format(point.roundedDamage, 0);
      cell.title = `Attack ${format(point.attack)} · Defense ${format(point.defense)}`;
      return cell;
    }),
  );
}

function renderDiagnostics(
  root: HTMLElement,
  config: LabConfig,
  ui: DamageFormulaLabUI,
): void {
  const target = query(root, "[data-diagnostics]");
  if (!target) return;
  const a = inspectFormula(config.formulaA, config.variables, config.settings);
  const b = inspectFormula(config.formulaB, config.variables, config.settings);
  const messages = [
    ...a.diagnostics.map((item) => `A: ${item}`),
    ...b.diagnostics.map((item) => `B: ${item}`),
    ...inspectSweep(
      config.formulaA,
      config.variables,
      config.settings,
      config.attackRange,
    ),
  ];
  const output = messages.length > 0 ? messages : [ui.statusBalanced];
  target.replaceChildren(
    ...output.map((message) => {
      const item = document.createElement("li");
      item.textContent = message;
      return item;
    }),
  );
  target.dataset.state = diagnosticState(a.kind, b.kind, messages.length);
}

function diagnosticState(a: string, b: string, count: number): string {
  if (a === "error" || b === "error") return "error";
  return count > 0 ? "warning" : "ok";
}

function renderGap(
  root: HTMLElement,
  a: FormulaResult | undefined,
  b: FormulaResult | undefined,
): void {
  const gap = a && b ? b.roundedDamage - a.roundedDamage : Number.NaN;
  const sign = gap > 0 ? "+" : "";
  setText(
    root,
    '[data-result="gap"]',
    Number.isFinite(gap) ? `${sign}${format(gap)}` : "Error",
  );
}

export function renderLab(
  root: HTMLElement,
  config: LabConfig,
  ui: DamageFormulaLabUI,
): void {
  const a = inspectFormula(config.formulaA, config.variables, config.settings);
  const b = inspectFormula(config.formulaB, config.variables, config.settings);
  setResult(root, "a", a.result);
  setResult(root, "b", b.result);
  renderGap(root, a.result, b.result);
  renderDiagnostics(root, config, ui);
  renderVisuals(root, config);
}

function renderVisuals(root: HTMLElement, config: LabConfig): void {
  try {
    const curveA = buildCurve(
      config.formulaA,
      config.variables,
      config.settings,
      config.attackRange,
    );
    const curveB = buildCurve(
      config.formulaB,
      config.variables,
      config.settings,
      config.attackRange,
    );
    renderCurve(root, curveA, curveB);
    renderHeatmap(
      root,
      buildHeatmap({
        expression: config.formulaA,
        variables: config.variables,
        settings: config.settings,
        attackRange: { ...config.attackRange, steps: 9 },
        defenseRange: config.defenseRange,
      }),
    );
  } catch {
    renderCurve(root, [], []);
    renderHeatmap(root, []);
  }
}
