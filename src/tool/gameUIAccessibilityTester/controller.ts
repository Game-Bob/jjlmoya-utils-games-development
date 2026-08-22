import { evaluatePair, type PairDiagnostic } from './evaluator';
import {
  copyOriginal,
  loadImageFile,
  renderSimulation,
  sampleAtFraction,
  sampleCanvas,
} from './dom-views';
import { fromHex, toHex, type RGBColor } from './logic';
import { loadSettings, saveSettings, type StoredSettings } from './storage';
import type { GameUiAccessibilityTesterUI } from './ui';
import { bindActions } from './controller-actions';

export interface TesterState {
  root: HTMLElement;
  ui: GameUiAccessibilityTesterUI;
  settings: StoredSettings;
  source: HTMLCanvasElement | null;
  samples: [RGBColor | null, RGBColor | null];
  positions: [{ left: number; top: number }, { left: number; top: number }];
  activeSample: 0 | 1;
  findings: string[];
  frame: number;
}

const FALLBACK_SETTINGS: StoredSettings = {
  mode: 'deuteranopia', compare: 'side', blur: 0, downscale: 1, zoom: 1, heatmap: false,
};

function required<T extends Element>(root: ParentNode, selector: string): T {
  const element = root.querySelector<T>(selector);
  if (!element) throw new Error(`Missing tester element ${selector}`);
  return element;
}

function readUi(root: HTMLElement): GameUiAccessibilityTesterUI {
  const script = required<HTMLScriptElement>(root, '[data-ui]');
  return JSON.parse(script.textContent ?? '{}') as GameUiAccessibilityTesterUI;
}

function setStatus(state: TesterState, message: string): void {
  required<HTMLElement>(state.root, '[data-status]').textContent = message;
}

function setExportsEnabled(state: TesterState, enabled: boolean): void {
  state.root.querySelectorAll<HTMLButtonElement>('[data-export-sheet], [data-export-report]')
    .forEach((button) => { button.disabled = !enabled; });
}

function setActive(root: HTMLElement, selector: string, value: string): void {
  root.querySelectorAll<HTMLButtonElement>(selector).forEach((button) => {
    const active = button.value === value;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
}

function diagnosticLabel(state: TesterState, diagnostic: PairDiagnostic): string {
  if (diagnostic.status === 'review') return state.ui.statusReview;
  if (diagnostic.status === 'watch') return state.ui.statusWatch;
  return state.ui.statusStrong;
}

function renderMetrics(state: TesterState): void {
  const [first, second] = state.samples;
  if (!first || !second) return;
  const diagnostic = evaluatePair(first, second, state.settings.mode);
  required(state.root, '[data-original-contrast]').textContent = `${diagnostic.originalContrast.toFixed(2)}:1`;
  required(state.root, '[data-simulated-contrast]').textContent = `${diagnostic.simulatedContrast.toFixed(2)}:1`;
  required(state.root, '[data-retained]').textContent = `${diagnostic.retained.toFixed(0)}%`;
  const badge = required(state.root, '[data-diagnostic]');
  badge.textContent = diagnosticLabel(state, diagnostic);
  badge.setAttribute('data-level', diagnostic.status);
}

function renderNow(state: TesterState): void {
  state.frame = 0;
  if (!state.source) return;
  const original = required<HTMLCanvasElement>(state.root, '[data-original-canvas]');
  const simulated = required<HTMLCanvasElement>(state.root, '[data-simulated-canvas]');
  copyOriginal(state.source, original);
  renderSimulation({
    source: state.source,
    destination: simulated,
    mode: state.settings.mode,
    blur: state.settings.blur,
    downscale: state.settings.downscale,
    heatmap: state.settings.heatmap,
  });
  state.root.dataset.compare = state.settings.compare;
  state.root.dataset.zoom = String(state.settings.zoom);
  renderMetrics(state);
  saveSettings(state.settings);
}

function scheduleRender(state: TesterState): void {
  if (state.frame) cancelAnimationFrame(state.frame);
  state.frame = requestAnimationFrame(() => renderNow(state));
}

function placeMarker(state: TesterState, index: 0 | 1): void {
  const marker = required<HTMLElement>(state.root, `[data-marker="${index}"]`);
  const position = state.positions[index];
  marker.style.setProperty('--marker-x', `${position.left * 100}%`);
  marker.style.setProperty('--marker-y', `${position.top * 100}%`);
  marker.hidden = false;
}

function renderSample(state: TesterState, index: 0 | 1): void {
  const color = state.samples[index];
  if (!color) return;
  const chip = required<HTMLElement>(state.root, `[data-swatch="${index}"]`);
  chip.style.backgroundColor = toHex(color);
  required(state.root, `[data-hex="${index}"]`).textContent = toHex(color);
  required<HTMLInputElement>(state.root, `[data-color-input="${index}"]`).value = toHex(color);
  placeMarker(state, index);
  renderMetrics(state);
}

function selectSample(state: TesterState, index: 0 | 1): void {
  state.activeSample = index;
  setActive(state.root, '[data-sample-button]', String(index));
}

function sampleFromEvent(state: TesterState, event: MouseEvent): void {
  if (!state.source) return;
  const canvas = required<HTMLCanvasElement>(state.root, '[data-original-canvas]');
  const sample = sampleCanvas(canvas, event.clientX, event.clientY);
  const index = state.activeSample;
  state.samples[index] = sample.color;
  state.positions[index] = { left: sample.left, top: sample.top };
  renderSample(state, index);
  selectSample(state, index === 0 ? 1 : 0);
}

function seedSamples(state: TesterState): void {
  if (!state.source) return;
  state.positions = [{ left: 0.35, top: 0.5 }, { left: 0.65, top: 0.5 }];
  state.samples = [
    sampleAtFraction(state.source, 0.35, 0.5),
    sampleAtFraction(state.source, 0.65, 0.5),
  ];
  renderSample(state, 0);
  renderSample(state, 1);
}

async function acceptFile(state: TesterState, file: File): Promise<void> {
  if (!['image/png', 'image/jpeg', 'image/webp'].includes(file.type)) return setStatus(state, state.ui.uploadError);
  if (file.size > 16 * 1024 * 1024) return setStatus(state, state.ui.fileTooLarge);
  try {
    state.source = await loadImageFile(file);
    state.root.dataset.ready = 'true';
    setExportsEnabled(state, true);
    seedSamples(state);
    renderNow(state);
    setStatus(state, state.ui.imageReady);
  } catch {
    setStatus(state, state.ui.uploadError);
  }
}

function bindFileControls(state: TesterState): void {
  const input = required<HTMLInputElement>(state.root, '[data-file-input]');
  const dropzone = required<HTMLElement>(state.root, '[data-dropzone]');
  input.addEventListener('change', () => { if (input.files?.[0]) void acceptFile(state, input.files[0]); });
  dropzone.addEventListener('dragover', (event) => { event.preventDefault(); dropzone.dataset.drag = 'true'; });
  dropzone.addEventListener('dragleave', () => { delete dropzone.dataset.drag; });
  dropzone.addEventListener('drop', (event) => {
    event.preventDefault();
    delete dropzone.dataset.drag;
    if (event.dataTransfer?.files[0]) void acceptFile(state, event.dataTransfer.files[0]);
  });
}

function bindChoiceButtons(state: TesterState, selector: string, key: keyof StoredSettings): void {
  state.root.querySelectorAll<HTMLButtonElement>(selector).forEach((button) => {
    button.addEventListener('click', () => {
      const value = key === 'downscale' || key === 'zoom' ? Number(button.value) : button.value;
      Object.assign(state.settings, { [key]: value });
      setActive(state.root, selector, button.value);
      scheduleRender(state);
    });
  });
}

function bindStressControls(state: TesterState): void {
  const blur = required<HTMLInputElement>(state.root, '[data-blur]');
  const split = required<HTMLInputElement>(state.root, '[data-split]');
  const heatmap = required<HTMLInputElement>(state.root, '[data-heatmap]');
  blur.addEventListener('input', () => { state.settings.blur = Number(blur.value); scheduleRender(state); });
  split.addEventListener('input', () => state.root.style.setProperty('--split', `${split.value}%`));
  heatmap.addEventListener('change', () => { state.settings.heatmap = heatmap.checked; scheduleRender(state); });
}

function syncStoredControls(state: TesterState): void {
  required<HTMLInputElement>(state.root, '[data-blur]').value = String(state.settings.blur);
  required<HTMLInputElement>(state.root, '[data-heatmap]').checked = state.settings.heatmap;
  state.root.dataset.compare = state.settings.compare;
  state.root.dataset.zoom = String(state.settings.zoom);
}

function bindSampling(state: TesterState): void {
  required(state.root, '[data-original-canvas]').addEventListener('click', (event) => sampleFromEvent(state, event as MouseEvent));
  state.root.querySelectorAll<HTMLButtonElement>('[data-sample-button]').forEach((button) => {
    button.addEventListener('click', () => selectSample(state, Number(button.value) as 0 | 1));
  });
  state.root.querySelectorAll<HTMLInputElement>('[data-color-input]').forEach((input) => {
    input.addEventListener('input', () => {
      const index = Number(input.dataset.colorInput) as 0 | 1;
      state.samples[index] = fromHex(input.value);
      renderSample(state, index);
    });
  });
}

export function mountGameUiAccessibilityTester(root: HTMLElement): void {
  if (root.dataset.mounted === 'true') return;
  const state: TesterState = {
    root, ui: readUi(root), settings: loadSettings(FALLBACK_SETTINGS), source: null,
    samples: [null, null], positions: [{ left: 0.35, top: 0.5 }, { left: 0.65, top: 0.5 }],
    activeSample: 0, findings: [], frame: 0,
  };
  root.dataset.mounted = 'true';
  bindFileControls(state);
  bindChoiceButtons(state, '[data-mode]', 'mode');
  bindChoiceButtons(state, '[data-compare]', 'compare');
  bindChoiceButtons(state, '[data-downscale]', 'downscale');
  bindChoiceButtons(state, '[data-zoom]', 'zoom');
  bindStressControls(state);
  bindSampling(state);
  bindActions(state);
  setActive(root, '[data-mode]', state.settings.mode);
  setActive(root, '[data-compare]', state.settings.compare);
  setActive(root, '[data-downscale]', String(state.settings.downscale));
  setActive(root, '[data-zoom]', String(state.settings.zoom));
  syncStoredControls(state);
}
