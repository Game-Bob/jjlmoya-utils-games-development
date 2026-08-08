import type { AutoTranslationResult, MarkupSyntax, TranslationResult } from './types';
import { clearSourceFromStorage, loadSourceFromStorage, saveSourceToStorage } from './storage';
import { detectSyntax, getAutoPreviewHtml, translateToAll } from './logic';

interface AppElements {
  root: HTMLElement;
  source: HTMLTextAreaElement;
  detected: HTMLElement;
  outputGrid: HTMLElement;
  preview: HTMLElement;
  characterCount: HTMLElement;
  blockCount: HTMLElement;
}

function getElements(root: HTMLElement): AppElements | null {
  const source = root.querySelector('#bbcode-source') as HTMLTextAreaElement | null;
  const detected = root.querySelector('#bbcode-detected') as HTMLElement | null;
  const outputGrid = root.querySelector('#bbcode-output-grid') as HTMLElement | null;
  const preview = root.querySelector('#bbcode-preview') as HTMLElement | null;
  const characterCount = root.querySelector('#bbcode-character-count') as HTMLElement | null;
  const blockCount = root.querySelector('#bbcode-block-count') as HTMLElement | null;

  if (!source || !detected || !outputGrid || !preview || !characterCount || !blockCount) {
    return null;
  }

  return { root, source, detected, outputGrid, preview, characterCount, blockCount };
}

async function copyText(value: string, button: HTMLButtonElement, copiedText: string): Promise<void> {
  await navigator.clipboard?.writeText(value);
  const original = button.textContent;
  button.textContent = copiedText;
  window.setTimeout(() => {
    button.textContent = original;
  }, 1200);
}

function createCard(target: MarkupSyntax, translation: TranslationResult, names: Record<MarkupSyntax, string>, dataset: DOMStringMap): HTMLElement {
  const card = document.createElement('article');
  card.className = 'bbcode-output-card';

  const heading = document.createElement('div');
  heading.className = 'bbcode-output-card-head';

  const label = document.createElement('h3');
  label.textContent = names[target];

  const actions = document.createElement('div');
  actions.className = 'bbcode-output-actions';

  const copyButton = document.createElement('button');
  copyButton.type = 'button';
  copyButton.className = 'bbcode-icon-button';
  copyButton.textContent = dataset.copy ?? 'Copy';
  copyButton.addEventListener('click', () => copyText(translation.output, copyButton, dataset.copied ?? 'Copied'));

  actions.append(copyButton);
  heading.append(label, actions);

  const pre = document.createElement('pre');
  pre.textContent = translation.output;
  card.append(heading, pre);

  return card;
}

function updateMeta(elements: AppElements, names: Record<MarkupSyntax, string>, result: AutoTranslationResult): void {
  const { root, source, detected, characterCount, blockCount } = elements;
  const syntax = detectSyntax(source.value);
  detected.textContent = source.value.trim()
    ? `${root.dataset.detectedLabel ?? 'Detected'}: ${names[syntax]}`
    : root.dataset.detectedEmpty ?? '';

  characterCount.textContent = String(source.value.length);
  const firstOutputKey = Object.keys(result.outputs)[0] as MarkupSyntax | undefined;
  const firstBlockCount = firstOutputKey ? result.outputs[firstOutputKey]?.stats.blocks ?? 0 : 0;
  blockCount.textContent = String(firstBlockCount);
}

function renderOutputCards(elements: AppElements, names: Record<MarkupSyntax, string>, result: AutoTranslationResult): void {
  elements.outputGrid.innerHTML = '';
  Object.entries(result.outputs).forEach(([target, translation]) => {
    if (!translation) return;
    const card = createCard(target as MarkupSyntax, translation, names, elements.root.dataset);
    elements.outputGrid.append(card);
  });
}

function renderApp(elements: AppElements, names: Record<MarkupSyntax, string>): void {
  const result = translateToAll(elements.source.value);
  updateMeta(elements, names, result);
  renderOutputCards(elements, names, result);
  elements.preview.innerHTML = getAutoPreviewHtml(elements.source.value) || `<p>${elements.root.dataset.previewEmpty ?? ''}</p>`;
}

export function initSteamBbcodeTranslatorApp(): void {
  const root = document.getElementById('steam-bbcode-translator');
  if (!root) return;
  const elements = getElements(root);
  if (!elements) return;

  const names: Record<MarkupSyntax, string> = {
    bbcode: root.dataset.bbcode ?? 'Steam BBCode',
    markdown: root.dataset.markdown ?? 'Markdown',
    html: root.dataset.html ?? 'HTML'
  };

  const stored = loadSourceFromStorage();
  if (stored) elements.source.value = stored;

  elements.source.addEventListener('input', () => {
    saveSourceToStorage(elements.source.value);
    renderApp(elements, names);
  });

  root.querySelector('#bbcode-clear')?.addEventListener('click', () => {
    elements.source.value = '';
    clearSourceFromStorage();
    renderApp(elements, names);
    elements.source.focus();
  });

  renderApp(elements, names);
}
