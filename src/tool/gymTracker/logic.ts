import { getHistory, saveLog, deleteLog, getCustomExercises, saveCustomExercise, deleteExerciseHistory } from "./storage";
import { initTimer } from "./timer";
import { updateExerciseOptions, renderHistoryTable, drawProgressChart } from "./ui-utils";
import type { CustomExercise, HistoryData } from "./types";

interface GTElements {
  exerciseSelect: HTMLSelectElement;
  weightInput: HTMLInputElement;
  addLogBtn: HTMLElement | null;
  clearHistoryBtn: HTMLElement | null;
  customExerciseInput: HTMLInputElement;
  addCustomExerciseBtn: HTMLElement | null;
  toggleFormBtn: HTMLElement | null;
  closeFormBtn: HTMLElement | null;
  form: HTMLElement | null;
  exportBtn: HTMLElement | null;
  exportMenu: HTMLElement | null;
  jsonBtn: HTMLElement | null;
  csvBtn: HTMLElement | null;
  modal: HTMLElement | null;
  confirmBtn: HTMLElement | null;
  cancelBtn: HTMLElement | null;
  list: HTMLElement | null;
  maxEl: HTMLElement | null;
  lastEl: HTMLElement | null;
  empty: HTMLElement | null;
  chartPath: SVGPathElement | null;
  chartPoints: HTMLElement | null;
}

export function initGymTracker() {
  const container = document.getElementById('gym-tracker-app');
  if (!container) return;
  const ui = JSON.parse(container.dataset.gtUi || '{}') as Record<string, string>;
  const els = getElements();
  if (!els.exerciseSelect) return;
  setupEventListeners(els, ui);
  initTimer();
  getCustomExercises().forEach(ex => addExerciseToSelect(els.exerciseSelect, ex.id, ex.name, ui));
  updateUI(els, ui);
}

function getElements(): GTElements {
  return {
    exerciseSelect: document.getElementById('exerciseSelect') as HTMLSelectElement,
    weightInput: document.getElementById('weightInput') as HTMLInputElement,
    addLogBtn: document.getElementById('addLogBtn'),
    clearHistoryBtn: document.getElementById('clearHistoryBtn'),
    customExerciseInput: document.getElementById('customExerciseInput') as HTMLInputElement,
    addCustomExerciseBtn: document.getElementById('addCustomExerciseBtn'),
    toggleFormBtn: document.getElementById('toggleCustomExerciseBtn'),
    closeFormBtn: document.getElementById('closeCustomExerciseBtn'),
    form: document.getElementById('customExerciseForm'),
    exportBtn: document.getElementById('exportDataBtn'),
    exportMenu: document.getElementById('exportMenu'),
    jsonBtn: document.getElementById('exportJsonBtn'),
    csvBtn: document.getElementById('exportCsvBtn'),
    modal: document.getElementById('confirmModal'),
    confirmBtn: document.getElementById('confirmDeleteBtn'),
    cancelBtn: document.getElementById('cancelDeleteBtn'),
    list: document.getElementById('historyList'),
    maxEl: document.getElementById('maxWeight'),
    lastEl: document.getElementById('lastWeight'),
    empty: document.getElementById('emptyState'),
    chartPath: document.getElementById('chartPath') as unknown as SVGPathElement | null,
    chartPoints: document.getElementById('chartPoints'),
  };
}

function setupEventListeners(els: GTElements, ui: Record<string, string>) {
  els.addLogBtn?.addEventListener('click', () => {
    const w = parseFloat(els.weightInput.value);
    if (!isNaN(w) && w > 0) {
      saveLog(els.exerciseSelect.value, w);
      els.weightInput.value = '';
      updateUI(els, ui);
    }
  });
  els.toggleFormBtn?.addEventListener('click', () => {
    els.form?.classList.toggle('gt-hidden');
    if (!els.form?.classList.contains('gt-hidden')) els.customExerciseInput?.focus();
  });
  els.closeFormBtn?.addEventListener('click', () => els.form?.classList.add('gt-hidden'));
  els.addCustomExerciseBtn?.addEventListener('click', () => {
    const name = els.customExerciseInput.value.trim();
    if (name) {
      const id = saveCustomExercise(name);
      addExerciseToSelect(els.exerciseSelect, id, name, ui);
      els.exerciseSelect.value = id;
      els.customExerciseInput.value = '';
      els.form?.classList.add('gt-hidden');
      updateUI(els, ui);
    }
  });
  setupExportAndModals(els, ui);
}

function setupExportAndModals(els: GTElements, ui: Record<string, string>) {
  els.exportBtn?.addEventListener('click', (e: Event) => {
    e.stopPropagation();
    els.exportMenu?.classList.toggle('gt-hidden');
  });
  els.jsonBtn?.addEventListener('click', () => {
    exportJSON(getHistory(), getCustomExercises());
    els.exportMenu?.classList.add('gt-hidden');
  });
  els.csvBtn?.addEventListener('click', () => {
    exportCSV(getHistory());
    els.exportMenu?.classList.add('gt-hidden');
  });
  els.clearHistoryBtn?.addEventListener('click', () => els.modal?.classList.remove('gt-hidden'));
  els.confirmBtn?.addEventListener('click', () => {
    deleteExerciseHistory(els.exerciseSelect.value);
    els.modal?.classList.add('gt-hidden');
    updateUI(els, ui);
  });
  els.cancelBtn?.addEventListener('click', () => els.modal?.classList.add('gt-hidden'));
  els.exerciseSelect?.addEventListener('change', () => updateUI(els, ui));
}

function addExerciseToSelect(select: HTMLSelectElement, id: string, name: string, ui: Record<string, string>) {
  let group = select.querySelector('optgroup[data-group="custom"]') as HTMLOptGroupElement;
  if (!group) {
    group = document.createElement('optgroup');
    group.label = ui.customExerciseCategory;
    group.dataset.group = "custom";
    select.appendChild(group);
  }
  const opt = document.createElement('option');
  opt.value = id;
  opt.textContent = name;
  group.appendChild(opt);
}

function updateUI(els: GTElements, ui: Record<string, string>) {
  const history = getHistory();
  const logs = history[els.exerciseSelect.value] || [];
  updateExerciseOptions(els.exerciseSelect, history, ui);
  if (els.maxEl) els.maxEl.textContent = logs.length ? `${Math.max(...logs.map(l => l.weight))} ${ui.units}` : `0 ${ui.units}`;
  if (els.lastEl) els.lastEl.textContent = logs.length ? `${logs[logs.length-1].weight} ${ui.units}` : `0 ${ui.units}`;
  if (els.empty) els.empty.classList.toggle('gt-hidden', logs.length > 0);
  if (els.list) renderHistoryTable(els.list, logs, ui, (idx) => {
    deleteLog(els.exerciseSelect.value, idx);
    updateUI(els, ui);
  });
  drawProgressChart(els.chartPath, els.chartPoints, logs);
}

function exportJSON(history: HistoryData, customExercises: CustomExercise[]) {
  downloadFile(JSON.stringify({ exportDate: new Date().toISOString(), history, customExercises }, null, 2), `gym-tracker-${new Date().toISOString().split('T')[0]}.json`, 'application/json');
}

function exportCSV(history: HistoryData) {
  const rows = ['Exercise,Date,Weight'];
  Object.entries(history).forEach(([id, logs]) => {
    logs.forEach(l => rows.push(`"${id}",${new Date(l.date).toLocaleDateString()},${l.weight}`));
  });
  downloadFile(rows.join('\n'), `gym-tracker-${new Date().toISOString().split('T')[0]}.csv`, 'text/csv');
}

function downloadFile(content: string, filename: string, type: string) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
