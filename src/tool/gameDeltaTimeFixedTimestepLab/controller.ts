import { evaluateLoop } from './evaluator';
import { DEFAULT_LOOP_CONFIG, normalizeLoopConfig, simulateLoop, type LoopConfig } from './logic';
import { renderAccessibleTable, renderChart, renderStage, renderSummary } from './dom-views';
import { loadLoopConfig, saveLoopConfig } from './storage';
import type { GameDeltaTimeFixedTimestepLabUI } from './ui';

const fieldNames: (keyof LoopConfig)[] = ['fps', 'spikeMs', 'spikeEveryFrames', 'fixedDtMs', 'velocity', 'durationSeconds', 'clampMs'];

function input(root: HTMLElement, name: string): HTMLInputElement {
  return root.querySelector<HTMLInputElement>(`[data-field="${name}"]`) as HTMLInputElement;
}

function readConfig(root: HTMLElement): LoopConfig {
  const values = Object.fromEntries(fieldNames.map((name) => [name, Number(input(root, name).value)]));
  const clampEnabled = root.querySelector<HTMLInputElement>('[data-field="clampEnabled"]')?.checked ?? false;
  return normalizeLoopConfig({ ...values, clampEnabled });
}

function syncOutputs(root: HTMLElement): void {
  fieldNames.forEach((name) => {
    const field = input(root, name);
    const output = root.querySelector<HTMLOutputElement>(`[data-output="${name}"]`);
    if (output) output.value = field.value;
  });
}

function syncClamp(root: HTMLElement): void {
  const enabled = root.querySelector<HTMLInputElement>('[data-field="clampEnabled"]')?.checked ?? false;
  input(root, 'clampMs').disabled = !enabled;
  root.querySelector<HTMLElement>('[data-clamp-detail]')?.toggleAttribute('data-disabled', !enabled);
}

function render(root: HTMLElement, ui: GameDeltaTimeFixedTimestepLabUI, config: LoopConfig): void {
  const result = simulateLoop(config);
  const diagnostic = evaluateLoop(result);
  const stage = root.querySelector<HTMLElement>('[data-stage]');
  const summary = root.querySelector<HTMLElement>('[data-summary]');
  const chart = root.querySelector<HTMLElement>('[data-chart]');
  const table = root.querySelector<HTMLElement>('[data-table]');
  if (stage) renderStage(stage, result, ui);
  if (summary) renderSummary(summary, result, diagnostic, ui);
  if (chart) renderChart(chart, result, ui);
  if (table) renderAccessibleTable(table, result, ui);
  root.querySelector<HTMLElement>('[data-live]')!.textContent = ui.statusReady;
  saveLoopConfig(config);
}

function bindInputs(root: HTMLElement, ui: GameDeltaTimeFixedTimestepLabUI): void {
  fieldNames.forEach((name) => input(root, name).addEventListener('input', () => {
    syncOutputs(root);
    render(root, ui, readConfig(root));
  }));
  root.querySelector<HTMLInputElement>('[data-field="clampEnabled"]')?.addEventListener('change', () => {
    syncClamp(root);
    render(root, ui, readConfig(root));
  });
  root.querySelector<HTMLButtonElement>('[data-run]')?.addEventListener('click', () => {
    render(root, ui, readConfig(root));
  });
  root.querySelector<HTMLButtonElement>('[data-reset]')?.addEventListener('click', () => {
    fieldNames.forEach((name) => { input(root, name).value = String(DEFAULT_LOOP_CONFIG[name]); });
    const checkbox = root.querySelector<HTMLInputElement>('[data-field="clampEnabled"]');
    if (checkbox) checkbox.checked = DEFAULT_LOOP_CONFIG.clampEnabled;
    syncOutputs(root);
    syncClamp(root);
    render(root, ui, readConfig(root));
  });
}

export function mountGameDeltaTimeFixedTimestepLab(root: HTMLElement, ui: GameDeltaTimeFixedTimestepLabUI): void {
  const stored = normalizeLoopConfig(loadLoopConfig());
  fieldNames.forEach((name) => { input(root, name).value = String(stored[name]); });
  const checkbox = root.querySelector<HTMLInputElement>('[data-field="clampEnabled"]');
  if (checkbox) checkbox.checked = stored.clampEnabled;
  syncOutputs(root);
  syncClamp(root);
  bindInputs(root, ui);
  render(root, ui, stored);
}
