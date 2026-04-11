import type { LogEntry } from "./types";
import { defaultExercises } from "./exercises";
import { getCustomExercises } from "./storage";

export function updateExerciseOptions(select: HTMLSelectElement, history: Record<string, LogEntry[]>, ui: Record<string, string>) {
  const customEx = getCustomExercises();
  const options = Array.from(select.options) as HTMLOptionElement[];
  options.forEach(option => {
    const id = option.value;
    const exerciseLogs = history[id] || [];
    const exerciseDef = defaultExercises.find(ex => ex.id === id);
    const name = exerciseDef ? ui[exerciseDef.nameKey] : (customEx.find(ex => ex.id === id)?.name || id);
    
    if (exerciseLogs.length > 0) {
      const lastWeight = exerciseLogs[exerciseLogs.length - 1].weight;
      option.textContent = `${name} (${lastWeight}${ui.units})`;
      option.classList.add('gt-option-highlight');
    } else {
      option.textContent = name;
      option.classList.remove('gt-option-highlight');
    }
  });
}

export function renderHistoryTable(container: HTMLElement, logs: LogEntry[], ui: Record<string, string>, onDelete: (idx: number) => void) {
  container.innerHTML = '';
  [...logs].reverse().slice(0, 5).forEach((log, rIndex) => {
    const originalIndex = logs.length - 1 - rIndex;
    const date = new Date(log.date).toLocaleDateString(undefined, { day: '2-digit', month: 'short' });
    const item = document.createElement('div');
    item.className = 'gt-history-item';
    item.innerHTML = `<span>${date}</span><div class="gt-history-row"><span class="gt-history-weight">${log.weight} ${ui.units}</span><button class="gt-btn-delete-log" data-index="${originalIndex}">X</button></div>`;
    container.appendChild(item);
  });

  container.querySelectorAll('.gt-btn-delete-log').forEach((btn: Element) => {
    (btn as HTMLElement).onclick = () => onDelete(parseInt((btn as HTMLElement).dataset.index || '0'));
  });
}

export function drawProgressChart(path: SVGPathElement | null, pointsContainer: HTMLElement | null, logs: LogEntry[]) {
  if (!path || !pointsContainer) return;
  if (logs.length === 0) {
    path.setAttribute('d', '');
    pointsContainer.innerHTML = '';
    return;
  }
  const w = 400, h = 200, pad = 30;
  const cw = w - pad * 2, ch = h - pad * 2;
  const weights = logs.map((l: LogEntry) => l.weight);
  const minW = Math.min(...weights) * 0.95, maxW = Math.max(...weights) * 1.05;
  const range = maxW - minW || 1;
  const points = logs.map((log: LogEntry, i: number) => ({
    x: logs.length === 1 ? w / 2 : pad + (i / (logs.length - 1)) * cw,
    y: h - pad - ((log.weight - minW) / range) * ch
  }));
  path.setAttribute('d', logs.length >= 2 ? `M ${points.map(p => `${p.x} ${p.y}`).join(' L ')}` : '');
  pointsContainer.innerHTML = points.map(p => `<circle cx="${p.x}" cy="${p.y}" r="6" class="gt-chart-dot" />`).join('');
}
