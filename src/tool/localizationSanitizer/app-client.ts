import { detectTranslationFormat, sanitizeTranslationFile, type SanitizerIssue, type SanitizerResult, type TranslationFormat } from './logic';

const SAMPLE_CSV = 'key,en,es,fr\nmenu.play,Play,"Jugar, ahora",Jouer\nmenu.pause,Pause,,Pause\nmenu.play,Play again,Reproducir,Jouer encore\nmenu.quit,Quit,Salir,\n';

function createElement<K extends keyof HTMLElementTagNameMap>(tagName: K, className?: string): HTMLElementTagNameMap[K] {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  return element;
}

function datasetText(root: HTMLElement, key: string): string { return root.dataset[key] || ''; }

function issueLabel(root: HTMLElement, item: SanitizerIssue): string {
  const labels: Record<SanitizerIssue['kind'], string> = {
    empty: datasetText(root, 'emptyIssue'),
    duplicate: datasetText(root, 'duplicateIssue'),
    malformed: datasetText(root, 'malformedIssue'),
    parse: datasetText(root, 'parseIssue'),
  };
  return labels[item.kind];
}

function renderIssueCard(root: HTMLElement, item: SanitizerIssue): HTMLElement {
  const card = createElement('div', `ls-issue-card ls-issue-${item.kind}`);
  const marker = createElement('span', 'ls-issue-marker');
  const copy = createElement('div', 'ls-issue-copy');
  const title = createElement('strong');
  title.textContent = issueLabel(root, item);
  const detail = createElement('span');
  const location = item.kind === 'parse' ? '' : `${datasetText(root, 'rowLabel')} ${item.row} · ${item.column ? `${datasetText(root, 'columnLabel')} ${item.column}` : datasetText(root, 'keyLabel')} ${item.key || '—'}`;
  detail.textContent = location;
  copy.append(title, detail);
  card.append(marker, copy);
  return card;
}

function renderIssues(root: HTMLElement, result: SanitizerResult | null): void {
  const list = root.querySelector<HTMLElement>('#ls-issue-list');
  if (!list) return;
  list.replaceChildren();
  if (!result) return;
  if (result.issues.length === 0) {
    const success = createElement('div', 'ls-no-issues');
    success.textContent = datasetText(root, 'noIssues');
    list.append(success);
    return;
  }
  result.issues.slice(0, 40).forEach((item) => list.append(renderIssueCard(root, item)));
  if (result.issues.length > 40) {
    const more = createElement('span', 'ls-issue-more');
    more.textContent = `+${result.issues.length - 40}`;
    list.append(more);
  }
}

function renderEmptyState(root: HTMLElement): HTMLElement {
  const empty = createElement('div', 'ls-empty-state');
  const grid = createElement('span', 'ls-empty-grid');
  grid.setAttribute('aria-hidden', 'true');
  const title = createElement('strong');
  title.textContent = datasetText(root, 'waitingTitle');
  const subtitle = createElement('span');
  subtitle.textContent = datasetText(root, 'waitingSubtitle');
  empty.append(grid, title, subtitle);
  return empty;
}

function renderPreviewTable(result: SanitizerResult): HTMLElement {
  const table = createElement('table', 'ls-table');
  const thead = createElement('thead');
  const headingRow = createElement('tr');
  result.headers.forEach((header) => {
    const heading = createElement('th');
    heading.textContent = header;
    headingRow.append(heading);
  });
  thead.append(headingRow);
  const body = createElement('tbody');
  result.rows.slice(0, 12).forEach((row) => {
    const tableRow = createElement('tr');
    row.forEach((value) => {
      const cell = createElement('td');
      cell.textContent = value;
      if (!value.trim()) cell.classList.add('is-empty');
      tableRow.append(cell);
    });
    body.append(tableRow);
  });
  table.append(thead, body);
  return table;
}

function renderPreview(root: HTMLElement, result: SanitizerResult | null): void {
  const preview = root.querySelector<HTMLElement>('#ls-preview');
  if (!preview) return;
  preview.replaceChildren();
  if (!result || !result.valid) {
    preview.append(renderEmptyState(root));
    return;
  }
  preview.append(renderPreviewTable(result));
  if (result.rows.length > 12) {
    const note = createElement('span', 'ls-preview-note');
    note.textContent = `+${result.rows.length - 12}`;
    preview.append(note);
  }
}

function updateElementText(root: HTMLElement, selector: string, text: string): void {
  const element = root.querySelector<HTMLElement>(selector);
  if (element) element.textContent = text;
}

function updateCounts(root: HTMLElement, result: SanitizerResult | null): void {
  updateElementText(root, '#ls-empty-count', result ? String(result.stats.emptyCells) : '0');
  updateElementText(root, '#ls-duplicate-count', result ? String(result.stats.duplicateKeys) : '0');
  updateElementText(root, '#ls-malformed-count', result ? String(result.stats.malformedRows) : '0');
  updateElementText(root, '#ls-clean-count', result ? String(result.stats.cleanRows) : '0');
}

function updateHealth(root: HTMLElement, result: SanitizerResult | null): void {
  const ring = root.querySelector<HTMLElement>('#ls-health-ring');
  if (!result) {
    updateElementText(root, '#ls-health-value', '--');
    updateElementText(root, '#ls-health-status', datasetText(root, 'waitingTitle'));
    updateElementText(root, '#ls-health-subtitle', datasetText(root, 'waitingSubtitle'));
    if (ring) ring.style.setProperty('--health-angle', '0deg');
    return;
  }
  const { stats } = result;
  const score = result.valid ? Math.max(0, 100 - (stats.emptyCells * 4) - (stats.duplicateKeys * 18) - (stats.malformedRows * 12)) : 0;
  updateElementText(root, '#ls-health-value', `${score}`);
  updateElementText(root, '#ls-health-status', score === 100 ? datasetText(root, 'readyStatus') : datasetText(root, 'reviewStatus'));
  updateElementText(root, '#ls-health-subtitle', result.valid ? `${stats.totalRows} → ${stats.cleanRows}` : datasetText(root, 'parseIssue'));
  if (ring) ring.style.setProperty('--health-angle', `${score * 3.6}deg`);
}

function updateButtons(root: HTMLElement, result: SanitizerResult | null): void {
  const downloadButton = root.querySelector<HTMLButtonElement>('#ls-download-button');
  const copyButton = root.querySelector<HTMLButtonElement>('#ls-copy-button');
  const disabled = !result || !result.valid || result.cleanText.length === 0;
  if (downloadButton) downloadButton.disabled = disabled;
  if (copyButton) copyButton.disabled = disabled;
}

function renderResult(root: HTMLElement, result: SanitizerResult | null): void {
  updateCounts(root, result);
  updateHealth(root, result);
  updateButtons(root, result);
}

function setFormatButtons(root: HTMLElement, format: TranslationFormat): void {
  root.querySelectorAll<HTMLButtonElement>('.ls-format-button[data-format]').forEach((button) => {
    const isActive = button.dataset.format === format;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
}

interface AppState {
  source: string;
  format: TranslationFormat;
  fileName: string;
  result: SanitizerResult | null;
}

function bindDragEvents(dropZone: HTMLElement, onFile: (file: File) => void): void {
  dropZone.addEventListener('dragover', (e) => { e.preventDefault(); dropZone.classList.add('is-dragging'); });
  dropZone.addEventListener('dragleave', () => dropZone.classList.remove('is-dragging'));
  dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('is-dragging');
    if (e.dataTransfer?.files[0]) onFile(e.dataTransfer.files[0]);
  });
}

function bindDropZoneInput(dropZone: HTMLElement, fileInput: HTMLInputElement, onFile: (file: File) => void): void {
  dropZone.addEventListener('click', (e) => { if (!(e.target as HTMLElement).closest('button')) fileInput.click(); });
  dropZone.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); fileInput.click(); } });
  bindDragEvents(dropZone, onFile);
}

function bindExportActions(root: HTMLElement, getState: () => AppState, announce: (msg: string) => void): void {
  root.querySelector('#ls-download-button')?.addEventListener('click', () => {
    const state = getState();
    if (!state.result?.valid) return;
    const blob = new Blob([state.result.cleanText], { type: state.format === 'csv' ? 'text/csv;charset=utf-8' : 'application/json;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = createElement('a');
    a.href = url;
    a.download = `${state.fileName}.clean.${state.format === 'csv' ? 'csv' : 'json'}`;
    a.click();
    URL.revokeObjectURL(url);
  });
  root.querySelector('#ls-copy-button')?.addEventListener('click', async () => {
    const state = getState();
    if (!state.result?.valid) return;
    try {
      await navigator.clipboard.writeText(state.result.cleanText);
      announce(datasetText(root, 'copiedMessage'));
    } catch { announce(datasetText(root, 'parseIssue')); }
  });
}

interface AppHandlers {
  processSource: (source: string, name: string, format?: TranslationFormat) => void;
  clearWorkspace: () => void;
  readFile: (file: File) => void;
}

function bindAppEvents(root: HTMLElement, state: AppState, handlers: AppHandlers, announce: (msg: string) => void): void {
  const fileInput = root.querySelector<HTMLInputElement>('#ls-file-input');
  const dropZone = root.querySelector<HTMLElement>('#ls-drop-zone');
  root.querySelector('#ls-browse-button')?.addEventListener('click', () => fileInput?.click());
  if (dropZone && fileInput) bindDropZoneInput(dropZone, fileInput, handlers.readFile);
  fileInput?.addEventListener('change', () => { if (fileInput.files?.[0]) handlers.readFile(fileInput.files[0]); });
  root.querySelectorAll<HTMLButtonElement>('.ls-format-button').forEach((b) => {
    b.addEventListener('click', () => {
      const fmt = b.dataset.format as TranslationFormat;
      state.format = fmt;
      setFormatButtons(root, fmt);
      if (state.source) handlers.processSource(state.source, `${state.fileName}.${fmt}`, fmt);
    });
  });
  root.querySelector('#ls-sample-button')?.addEventListener('click', () => handlers.processSource(SAMPLE_CSV, datasetText(root, 'sampleFileName'), 'csv'));
  root.querySelector('#ls-clear-button')?.addEventListener('click', handlers.clearWorkspace);
  bindExportActions(root, () => state, announce);
}

function createSourceProcessor(root: HTMLElement, state: AppState, announce: (msg: string) => void) {
  const fileNameEl = root.querySelector<HTMLElement>('#ls-file-name');
  return (source: string, name: string, format = detectTranslationFormat(name, source)) => {
    state.source = source;
    state.fileName = name.replace(/\.[^/.]+$/, '') || 'localization';
    state.format = format;
    setFormatButtons(root, format);
    state.result = sanitizeTranslationFile(source, format);
    if (fileNameEl) fileNameEl.textContent = name;
    renderResult(root, state.result);
    renderIssues(root, state.result);
    renderPreview(root, state.result);
    announce(state.result.valid ? `${state.result.stats.cleanRows}` : datasetText(root, 'parseIssue'));
  };
}

export function initLocalizationSanitizerApp(): void {
  const root = document.getElementById('localization-sanitizer-root');
  if (!root || root.dataset.initialized === 'true') return;
  root.dataset.initialized = 'true';
  const fileInput = root.querySelector<HTMLInputElement>('#ls-file-input');
  const fileNameEl = root.querySelector<HTMLElement>('#ls-file-name');
  const liveStatus = root.querySelector<HTMLElement>('#ls-live-status');
  const state: AppState = { source: '', format: 'csv', fileName: 'localization', result: null };
  const announce = (msg: string) => { if (liveStatus) liveStatus.textContent = msg; };
  const processSource = createSourceProcessor(root, state, announce);
  const clearWorkspace = () => {
    state.source = ''; state.result = null; state.fileName = 'localization';
    if (fileInput) fileInput.value = '';
    if (fileNameEl) fileNameEl.textContent = datasetText(root, 'waitingTitle');
    renderResult(root, null); renderIssues(root, null); renderPreview(root, null); announce('');
  };
  const readFile = (file: File) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => processSource(String(reader.result || ''), file.name));
    reader.addEventListener('error', () => announce(datasetText(root, 'parseIssue')));
    reader.readAsText(file);
  };
  bindAppEvents(root, state, { processSource, clearWorkspace, readFile }, announce);
  renderResult(root, null);
}
