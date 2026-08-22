import { buildCurve } from "./logic";
import { configToHash } from "./model";
import type { LabConfig } from "./model";

export function download(name: string, type: string, body: BlobPart): void {
  const link = document.createElement("a");
  link.href = URL.createObjectURL(new Blob([body], { type }));
  link.download = name;
  link.click();
  URL.revokeObjectURL(link.href);
}

function curveRows(config: LabConfig): Array<Array<number | undefined>> {
  const a = buildCurve(
    config.formulaA,
    config.variables,
    config.settings,
    config.attackRange,
  );
  const b = buildCurve(
    config.formulaB,
    config.variables,
    config.settings,
    config.attackRange,
  );
  return a.map((point, index) => [
    point.attack,
    point.defense,
    point.roundedDamage,
    point.hitsToKill,
    point.timeToKill,
    b[index]?.roundedDamage,
    b[index]?.hitsToKill,
    b[index]?.timeToKill,
  ]);
}

export function exportCsv(config: LabConfig): void {
  const header = [
    "attack",
    "defense",
    "formula_a_damage",
    "formula_a_hits",
    "formula_a_ttk",
    "formula_b_damage",
    "formula_b_hits",
    "formula_b_ttk",
  ];
  const body = [header, ...curveRows(config)]
    .map((row) => row.join(","))
    .join("\n");
  download("damage-formula-sweep.csv", "text/csv", body);
}

export function exportJson(config: LabConfig): void {
  download(
    "damage-formula-lab.json",
    "application/json",
    JSON.stringify(config, null, 2),
  );
}

function drawPng(image: HTMLImageElement): void {
  const canvas = document.createElement("canvas");
  canvas.width = 1200;
  canvas.height = 700;
  const context = canvas.getContext("2d");
  if (!context) return;
  context.fillStyle = "#f7f4ee";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.drawImage(image, 70, 70, 1060, 560);
  canvas.toBlob((blob) => {
    if (blob) download("damage-formula-curve.png", "image/png", blob);
  }, "image/png");
}

export function exportChartPng(root: HTMLElement): void {
  const svg = root.querySelector<SVGSVGElement>("[data-chart]");
  if (!svg) return;
  const source = new XMLSerializer().serializeToString(svg);
  const image = new Image();
  image.onload = () => drawPng(image);
  image.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(source)}`;
}

export async function copyShareLink(config: LabConfig): Promise<void> {
  const url = `${location.origin}${location.pathname}${configToHash(config)}`;
  await navigator.clipboard.writeText(url);
}
