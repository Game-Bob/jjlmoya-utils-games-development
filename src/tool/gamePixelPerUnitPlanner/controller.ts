import { evaluatePixelPlan } from './evaluator';
import { calculatePixelPlan, DEFAULT_PIXEL_CONFIG, normalizePixelConfig, type PixelPerUnitConfig } from './logic';
import { renderAccessibleTable, renderPixelField, renderScaleSteps, renderSummary } from './dom-views';
import { loadPixelConfig, savePixelConfig } from './storage';
import type { GamePixelPerUnitPlannerUI } from './ui';

const DEFAULT_SPRITE_URL = '/assets/game-pixel-per-unit-planner/default-sprite.png';

const fieldNames: (keyof PixelPerUnitConfig)[] = ['displayWidth', 'displayHeight', 'spriteWidth', 'spriteHeight', 'worldWidth', 'worldHeight', 'targetScale'];

function field(root: HTMLElement, name: keyof PixelPerUnitConfig): HTMLInputElement {
  return root.querySelector<HTMLInputElement>(`[data-field="${name}"]`) as HTMLInputElement;
}

function readConfig(root: HTMLElement): PixelPerUnitConfig {
  const values = Object.fromEntries(fieldNames.map((name) => [name, Number(field(root, name).value)]));
  return normalizePixelConfig(values);
}

function syncOutputs(root: HTMLElement): void {
  fieldNames.forEach((name) => {
    const output = root.querySelector<HTMLOutputElement>(`[data-output="${name}"]`);
    if (output) output.value = field(root, name).value;
  });
}

function render(root: HTMLElement, ui: GamePixelPerUnitPlannerUI, config: PixelPerUnitConfig, spriteUrl?: string): void {
  const result = calculatePixelPlan(config);
  const diagnostic = evaluatePixelPlan(result);
  const fieldTarget = root.querySelector<HTMLElement>('[data-pixel-field]');
  const stepsTarget = root.querySelector<HTMLElement>('[data-scale-steps]');
  const summaryTarget = root.querySelector<HTMLElement>('[data-summary]');
  const tableTarget = root.querySelector<HTMLElement>('[data-table]');
  if (fieldTarget) renderPixelField(fieldTarget, result, ui, spriteUrl);
  if (stepsTarget) renderScaleSteps(stepsTarget, result, ui, spriteUrl);
  if (summaryTarget) renderSummary(summaryTarget, result, diagnostic, ui);
  if (tableTarget) renderAccessibleTable(tableTarget, result, ui);
  root.querySelector<HTMLElement>('[data-live]')!.textContent = ui.statusReady;
  savePixelConfig(config);
}

function setConfig(root: HTMLElement, config: PixelPerUnitConfig): void {
  fieldNames.forEach((name) => { field(root, name).value = String(config[name]); });
  syncOutputs(root);
}

function bindPresets(root: HTMLElement, ui: GamePixelPerUnitPlannerUI, state: { spriteUrl?: string }): void {
  root.querySelectorAll<HTMLButtonElement>('[data-resolution-preset]').forEach((button) => button.addEventListener('click', () => {
    const [displayWidth, displayHeight] = (button.dataset.resolutionPreset ?? '').split('x').map(Number);
    const config = { ...readConfig(root), displayWidth, displayHeight };
    setConfig(root, config);
    render(root, ui, config, state.spriteUrl);
  }));
  root.querySelectorAll<HTMLButtonElement>('[data-scale-preset]').forEach((button) => button.addEventListener('click', () => {
    const config = { ...readConfig(root), targetScale: Number(button.dataset.scalePreset) };
    setConfig(root, config);
    render(root, ui, config, state.spriteUrl);
  }));
}

function bindReset(root: HTMLElement, ui: GamePixelPerUnitPlannerUI, state: { spriteUrl?: string }): void {
  root.querySelector<HTMLButtonElement>('[data-reset]')?.addEventListener('click', () => {
    if (state.spriteUrl && state.spriteUrl !== DEFAULT_SPRITE_URL) URL.revokeObjectURL(state.spriteUrl);
    state.spriteUrl = DEFAULT_SPRITE_URL;
    const fileInput = root.querySelector<HTMLInputElement>('[data-sprite-upload]');
    if (fileInput) fileInput.value = '';
    const fileName = root.querySelector<HTMLElement>('[data-file-name]');
    if (fileName) fileName.textContent = ui.defaultSpriteLabel;
    const clearButton = root.querySelector<HTMLButtonElement>('[data-clear-sprite]');
    if (clearButton) clearButton.hidden = false;
    setConfig(root, DEFAULT_PIXEL_CONFIG);
    render(root, ui, DEFAULT_PIXEL_CONFIG, state.spriteUrl);
  });
}

function bindSpriteUpload(root: HTMLElement, ui: GamePixelPerUnitPlannerUI, state: { spriteUrl?: string }): void {
  const upload = root.querySelector<HTMLInputElement>('[data-sprite-upload]');
  upload?.addEventListener('change', () => {
    const file = upload.files?.[0];
    if (!file) return;
    const nextUrl = URL.createObjectURL(file);
    const image = new Image();
    image.onload = () => {
      if (state.spriteUrl && state.spriteUrl !== DEFAULT_SPRITE_URL) URL.revokeObjectURL(state.spriteUrl);
      state.spriteUrl = nextUrl;
      const config = normalizePixelConfig({ ...readConfig(root), spriteWidth: image.naturalWidth, spriteHeight: image.naturalHeight });
      setConfig(root, config);
      root.querySelector<HTMLElement>('[data-file-name]')!.textContent = `${ui.loadedSpriteLabel}: ${file.name}`;
      root.querySelector<HTMLButtonElement>('[data-clear-sprite]')!.hidden = false;
      render(root, ui, config, state.spriteUrl);
    };
    image.onerror = () => URL.revokeObjectURL(nextUrl);
    image.src = nextUrl;
  });
}

function bindClearSprite(root: HTMLElement, ui: GamePixelPerUnitPlannerUI, state: { spriteUrl?: string }): void {
  root.querySelector<HTMLButtonElement>('[data-clear-sprite]')?.addEventListener('click', () => {
    if (state.spriteUrl && state.spriteUrl !== DEFAULT_SPRITE_URL) URL.revokeObjectURL(state.spriteUrl);
    state.spriteUrl = undefined;
    const uploadInput = root.querySelector<HTMLInputElement>('[data-sprite-upload]');
    if (uploadInput) uploadInput.value = '';
    root.querySelector<HTMLElement>('[data-file-name]')!.textContent = ui.noSpriteLabel;
    root.querySelector<HTMLButtonElement>('[data-clear-sprite]')!.hidden = true;
    render(root, ui, readConfig(root));
  });
}

function bindInputs(root: HTMLElement, ui: GamePixelPerUnitPlannerUI, state: { spriteUrl?: string }): void {
  fieldNames.forEach((name) => field(root, name).addEventListener('input', () => {
    syncOutputs(root);
    render(root, ui, readConfig(root), state.spriteUrl);
  }));
  bindReset(root, ui, state);
  bindSpriteUpload(root, ui, state);
  bindClearSprite(root, ui, state);
  bindPresets(root, ui, state);
}

export function mountGamePixelPerUnitPlanner(root: HTMLElement, ui: GamePixelPerUnitPlannerUI): void {
  const state: { spriteUrl?: string } = { spriteUrl: DEFAULT_SPRITE_URL };
  root.querySelector<HTMLElement>('[data-file-name]')!.textContent = ui.defaultSpriteLabel;
  const config = normalizePixelConfig(loadPixelConfig());
  setConfig(root, config);
  bindInputs(root, ui, state);
  render(root, ui, config, state.spriteUrl);
}
