import { calculateInputBufferWindow, DEFAULT_INPUT_BUFFER_WINDOW_CONFIG, normalizeInputBufferWindowConfig, validateInputBufferWindowConfig, type InputBufferWindowConfig } from './logic';
import { renderError, renderSummary, renderTimingMap } from './dom-views';
import { loadInputBufferWindowConfig, saveInputBufferWindowConfig } from './storage';
import type { GameInputBufferWindowCalculatorUI } from './ui';

const fields: (keyof InputBufferWindowConfig)[] = ['fps', 'activeStartFrame', 'activeEndFrame', 'bufferMs', 'latencyMs'];

function input(root: HTMLElement, name: keyof InputBufferWindowConfig): HTMLInputElement {
  return root.querySelector<HTMLInputElement>(`[data-field="${name}"]`) as HTMLInputElement;
}

function readConfig(root: HTMLElement): Partial<InputBufferWindowConfig> {
  return Object.fromEntries(fields.map((name) => [name, Number(input(root, name).value)]));
}

function errorText(errors: string[], ui: GameInputBufferWindowCalculatorUI): string[] {
  if (errors.includes('frame-order')) return [ui.invalidOrder];
  if (errors.some((error) => error.endsWith('-number'))) return [ui.invalidNumber];
  return [ui.invalidRange];
}

function liveStatus(status: 'ready' | 'tight' | 'late', ui: GameInputBufferWindowCalculatorUI): string {
  if (status === 'late') return ui.statusLate;
  if (status === 'tight') return ui.statusTight;
  return ui.statusReady;
}

function render(root: HTMLElement, ui: GameInputBufferWindowCalculatorUI): void {
  const raw = readConfig(root);
  const errors = validateInputBufferWindowConfig(raw);
  const summary = root.querySelector<HTMLElement>('[data-summary]');
  const timing = root.querySelector<HTMLElement>('[data-timing]');
  const live = root.querySelector<HTMLElement>('[data-live]');
  if (errors.length > 0) {
    if (summary) renderError(summary, errorText(errors, ui), ui);
    if (timing) timing.innerHTML = '';
    if (live) live.textContent = ui.statusInvalid;
    return;
  }
  const result = calculateInputBufferWindow(raw);
  if (summary) renderSummary(summary, result, ui);
  if (timing) renderTimingMap(timing, result, ui);
  if (live) live.textContent = liveStatus(result.status, ui);
  saveInputBufferWindowConfig(result.config);
}

function syncOutputs(root: HTMLElement): void {
  fields.forEach((name) => {
    const output = root.querySelector<HTMLOutputElement>(`[data-output="${name}"]`);
    if (output) output.value = input(root, name).value;
  });
}

export function mountGameInputBufferWindowCalculator(root: HTMLElement, ui: GameInputBufferWindowCalculatorUI): void {
  const stored = normalizeInputBufferWindowConfig(loadInputBufferWindowConfig());
  fields.forEach((name) => { input(root, name).value = String(stored[name]); });
  syncOutputs(root);
  fields.forEach((name) => input(root, name).addEventListener('input', () => { syncOutputs(root); render(root, ui); }));
  root.querySelector<HTMLButtonElement>('[data-calculate]')?.addEventListener('click', () => render(root, ui));
  root.querySelector<HTMLButtonElement>('[data-reset]')?.addEventListener('click', () => {
    fields.forEach((name) => { input(root, name).value = String(DEFAULT_INPUT_BUFFER_WINDOW_CONFIG[name]); });
    syncOutputs(root);
    render(root, ui);
  });
  render(root, ui);
}
