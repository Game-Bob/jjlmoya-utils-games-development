import { evaluatePair } from './evaluator';
import { createComparisonSheet, downloadCanvas } from './dom-views';
import { downloadStructuredReport } from './report';
import { clearSettings } from './storage';
import type { TesterState } from './controller';

function required<T extends Element>(root: ParentNode, selector: string): T {
  const element = root.querySelector<T>(selector);
  if (!element) throw new Error(`Missing tester element ${selector}`);
  return element;
}

function setStatus(state: TesterState, message: string): void {
  required<HTMLElement>(state.root, '[data-status]').textContent = message;
}

function addFinding(state: TesterState): void {
  const input = required<HTMLInputElement>(state.root, '[data-finding-input]');
  const finding = input.value.trim();
  if (!finding) return;
  state.findings.push(finding);
  const item = document.createElement('li');
  item.textContent = finding;
  required(state.root, '[data-findings]').append(item);
  required<HTMLElement>(state.root, '[data-findings-empty]').hidden = true;
  input.value = '';
}

function exportReport(state: TesterState): void {
  const [first, second] = state.samples;
  if (!first || !second) return;
  downloadStructuredReport({
    mode: state.settings.mode,
    blur: state.settings.blur,
    downscale: state.settings.downscale,
    firstName: required<HTMLInputElement>(state.root, '[data-name="0"]').value,
    secondName: required<HTMLInputElement>(state.root, '[data-name="1"]').value,
    first,
    second,
    diagnostic: evaluatePair(first, second, state.settings.mode),
    findings: state.findings,
  }, state.ui);
  setStatus(state, state.ui.reportDownloaded);
}

function exportSheet(state: TesterState): void {
  if (!state.source) return;
  const simulated = required<HTMLCanvasElement>(state.root, '[data-simulated-canvas]');
  const settings = `${state.ui.lensLabel}: ${state.settings.mode}, ${state.ui.blurLabel}: ${state.settings.blur}px`;
  const sheet = createComparisonSheet(state.source, simulated, {
    title: state.ui.reportTitle,
    original: state.ui.originalView,
    simulated: state.ui.simulatedView,
    settings,
    localOnly: state.ui.localOnlyDisclosure,
  });
  downloadCanvas(sheet, 'game-ui-accessibility-comparison.png');
  setStatus(state, state.ui.sheetDownloaded);
}

function reset(state: TesterState): void {
  clearSettings();
  state.source = null;
  state.samples = [null, null];
  state.findings = [];
  state.root.dataset.ready = 'false';
  state.root.querySelectorAll<HTMLButtonElement>('[data-export-sheet], [data-export-report]')
    .forEach((button) => { button.disabled = true; });
  required(state.root, '[data-findings]').replaceChildren();
  required<HTMLElement>(state.root, '[data-findings-empty]').hidden = false;
  required<HTMLInputElement>(state.root, '[data-file-input]').value = '';
  setStatus(state, state.ui.noSample);
  const diagnostic = required<HTMLElement>(state.root, '[data-diagnostic]');
  diagnostic.textContent = state.ui.statusPending;
  diagnostic.dataset.level = 'pending';
}

function bindHold(state: TesterState): void {
  const hold = required(state.root, '[data-hold-original]');
  hold.addEventListener('pointerdown', () => { state.root.dataset.hold = 'true'; });
  ['pointerup', 'pointerleave', 'blur'].forEach((event) => {
    hold.addEventListener(event, () => { delete state.root.dataset.hold; });
  });
}

export function bindActions(state: TesterState): void {
  required(state.root, '[data-add-finding]').addEventListener('click', () => addFinding(state));
  required(state.root, '[data-export-report]').addEventListener('click', () => exportReport(state));
  required(state.root, '[data-export-sheet]').addEventListener('click', () => exportSheet(state));
  required(state.root, '[data-reset]').addEventListener('click', () => reset(state));
  bindHold(state);
}
