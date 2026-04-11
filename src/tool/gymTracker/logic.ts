import { defaultExercises } from "./exercises";

interface LogEntry { date: string; weight: number; }
type HistoryData = Record<string, LogEntry[]>;
interface CustomExercise { id: string; name: string; }

export function initGymTracker() {
  const container = document.getElementById('gym-tracker-app');
  if (!container) return;

  const ui = JSON.parse(container.dataset.gtUi || '{}');
  
  const exerciseSelect = document.getElementById('exerciseSelect') as HTMLSelectElement;
  const weightInput = document.getElementById('weightInput') as HTMLInputElement;
  const addLogBtn = document.getElementById('addLogBtn');
  const clearHistoryBtn = document.getElementById('clearHistoryBtn');
  const customExerciseInput = document.getElementById('customExerciseInput') as HTMLInputElement;
  const addCustomExerciseBtn = document.getElementById('addCustomExerciseBtn');
  const toggleCustomExerciseBtn = document.getElementById('toggleCustomExerciseBtn');
  const closeCustomExerciseBtn = document.getElementById('closeCustomExerciseBtn');
  const customExerciseForm = document.getElementById('customExerciseForm');
  const exportDataBtn = document.getElementById('exportDataBtn');
  const exportMenu = document.getElementById('exportMenu');
  const exportJsonBtn = document.getElementById('exportJsonBtn');
  const exportCsvBtn = document.getElementById('exportCsvBtn');
  const confirmModal = document.getElementById('confirmModal');
  const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
  const cancelDeleteBtn = document.getElementById('cancelDeleteBtn');
  const historyList = document.getElementById('historyList');
  const maxWeightEl = document.getElementById('maxWeight');
  const lastWeightEl = document.getElementById('lastWeight');
  const emptyState = document.getElementById('emptyState');
  const chartPath = document.getElementById('chartPath') as unknown as SVGPathElement;
  const chartPoints = document.getElementById('chartPoints');
  
  const timerDisplay = document.getElementById('timerDisplay');
  const startTimerBtn = document.getElementById('startTimerBtn');
  const resetTimerBtn = document.getElementById('resetTimerBtn');
  const customTimerInput = document.getElementById('customTimerInput') as HTMLInputElement;
  const setCustomTimerBtn = document.getElementById('setCustomTimerBtn');
  const timerProgress = document.getElementById('timerProgress');
  const presetBtns = document.querySelectorAll('.preset-btn');

  let timerInterval: number | null = null;
  let timeLeft = 0;
  let initialTime = 0;

  const STORAGE_KEY = 'jjlmoya-gym-tracker-data';
  const CUSTOM_EXERCISES_KEY = 'jjlmoya-gym-tracker-custom';
  const TIMER_STORAGE_KEY = 'jjlmoya-gym-tracker-timer';

  function getHistory(): HistoryData {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  }

  function getCustomExercises(): CustomExercise[] {
    const data = localStorage.getItem(CUSTOM_EXERCISES_KEY);
    return data ? JSON.parse(data) : [];
  }

  function saveCustomExercise(name: string) {
    const custom = getCustomExercises();
    const id = `custom-${Date.now()}`;
    custom.push({ id, name });
    localStorage.setItem(CUSTOM_EXERCISES_KEY, JSON.stringify(custom));
    addExerciseToSelect(id, name);
    exerciseSelect.value = id;
    updateUI();
  }

  function addExerciseToSelect(id: string, name: string) {
    const existingOption = exerciseSelect.querySelector(`option[value="${id}"]`);
    if (existingOption) return;

    let customGroup = exerciseSelect.querySelector('optgroup[data-group="custom"]') as HTMLOptGroupElement;
    if (!customGroup) {
      customGroup = document.createElement('optgroup');
      customGroup.label = ui.customExerciseCategory;
      customGroup.dataset.group = "custom";
      exerciseSelect.appendChild(customGroup);
    }

    const option = document.createElement('option');
    option.value = id;
    option.textContent = name;
    customGroup.appendChild(option);
  }

  function saveLog(exerciseId: string, weight: number) {
    const history = getHistory();
    if (!history[exerciseId]) history[exerciseId] = [];
    history[exerciseId].push({ date: new Date().toISOString(), weight: weight });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
    updateUI();
  }

  function deleteLog(exerciseId: string, index: number) {
    const history = getHistory();
    if (history[exerciseId]) {
      history[exerciseId].splice(index, 1);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
      updateUI();
    }
  }

  function updateUI() {
    const history = getHistory();
    const exerciseId = exerciseSelect.value;
    const logs = history[exerciseId] || [];

    Array.from(exerciseSelect.options).forEach(option => {
      const id = option.value;
      const exerciseLogs = history[id] || [];
      const exerciseDef = defaultExercises.find(ex => ex.id === id);
      const originalName = exerciseDef ? ui[exerciseDef.nameKey] : 
                         (getCustomExercises().find(ex => ex.id === id)?.name || id);
      
      if (exerciseLogs.length > 0) {
        const lastWeight = exerciseLogs[exerciseLogs.length - 1].weight;
        option.textContent = `★ ${originalName} (${lastWeight}${ui.units})`;
        option.classList.add('gt-option-highlight');
      } else {
        option.textContent = originalName;
        option.classList.remove('gt-option-highlight');
      }
    });

    if (maxWeightEl) maxWeightEl.textContent = logs.length ? `${Math.max(...logs.map(l => l.weight))} ${ui.units}` : `0 ${ui.units}`;
    if (lastWeightEl) lastWeightEl.textContent = logs.length ? `${logs[logs.length-1].weight} ${ui.units}` : `0 ${ui.units}`;
    if (emptyState) emptyState.classList.toggle('gt-hidden', logs.length > 0);

    if (historyList) {
      historyList.innerHTML = '';
      const reversedLogs = [...logs].reverse().slice(0, 5);
      reversedLogs.forEach((log, rIndex) => {
        const originalIndex = logs.length - 1 - rIndex;
        const date = new Date(log.date).toLocaleDateString(undefined, { day: '2-digit', month: 'short' });
        const item = document.createElement('div');
        item.className = 'gt-history-item';
        item.innerHTML = `
          <span>${date}</span>
          <div class="gt-history-row">
            <span class="gt-history-weight">${log.weight} ${ui.units}</span>
            <button class="gt-btn-delete-log" data-index="${originalIndex}" title="${ui.deleteBtn}">✕</button>
          </div>
        `;
        historyList.appendChild(item);
      });

      historyList.querySelectorAll('.gt-btn-delete-log').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const index = parseInt((e.currentTarget as HTMLButtonElement).dataset.index || '0');
          deleteLog(exerciseSelect.value, index);
        });
      });
    }
    drawChart(logs);
  }

  function drawChart(logs: LogEntry[]) {
    if (!chartPath || !chartPoints) return;
    if (logs.length === 0) { 
      chartPath.setAttribute('d', ''); 
      chartPoints.innerHTML = ''; 
      return; 
    }

    const w = 400, h = 200, pad = 30;
    const cw = w - pad * 2, ch = h - pad * 2;
    const weights = logs.map(l => l.weight);
    const minW = Math.min(...weights) * 0.95, maxW = Math.max(...weights) * 1.05;
    const range = maxW - minW || 1;

    const points = logs.map((log, i) => ({
      x: logs.length === 1 ? w / 2 : pad + (i / (logs.length - 1)) * cw,
      y: h - pad - ((log.weight - minW) / range) * ch
    }));

    if (logs.length >= 2) {
        chartPath.setAttribute('d', `M ${points.map(p => `${p.x} ${p.y}`).join(' L ')}`);
    } else {
        chartPath.setAttribute('d', '');
    }
    
    chartPoints.innerHTML = points.map(p => `<circle cx="${p.x}" cy="${p.y}" r="6" class="gt-chart-dot" />`).join('');
  }

  function downloadFile(content: string, filename: string, type: string) {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function exportJSON() {
    const history = getHistory();
    const customExercises = getCustomExercises();
    const data = {
      exportDate: new Date().toISOString(),
      history,
      customExercises
    };
    const json = JSON.stringify(data, null, 2);
    const filename = `gym-tracker-${new Date().toISOString().split('T')[0]}.json`;
    downloadFile(json, filename, 'application/json');
    if (exportMenu) exportMenu.classList.add('gt-hidden');
  }

  function exportCSV() {
    const history = getHistory();
    const rows: string[] = ['Exercise,Date,Weight'];

    for (const [exerciseId, logs] of Object.entries(history)) {
      const exerciseDef = defaultExercises.find(ex => ex.id === exerciseId);
      const exerciseName = exerciseDef ? ui[exerciseDef.nameKey] : 
                          (getCustomExercises().find(ex => ex.id === exerciseId)?.name || exerciseId);

      logs.forEach(log => {
        const date = new Date(log.date).toLocaleDateString();
        rows.push(`"${exerciseName}",${date},${log.weight}`);
      });
    }

    const csv = rows.join('\n');
    const filename = `gym-tracker-${new Date().toISOString().split('T')[0]}.csv`;
    downloadFile(csv, filename, 'text/csv');
    if (exportMenu) exportMenu.classList.add('gt-hidden');
  }

  addLogBtn?.addEventListener('click', () => {
    const w = parseFloat(weightInput.value);
    if (!isNaN(w) && w > 0) { 
      saveLog(exerciseSelect.value, w); 
      weightInput.value = ''; 
    }
  });

  toggleCustomExerciseBtn?.addEventListener('click', () => {
    if (customExerciseForm) {
      customExerciseForm.classList.toggle('gt-hidden');
      if (!customExerciseForm.classList.contains('gt-hidden')) {
        customExerciseInput?.focus();
      }
    }
  });

  closeCustomExerciseBtn?.addEventListener('click', () => {
    customExerciseForm?.classList.add('gt-hidden');
  });

  addCustomExerciseBtn?.addEventListener('click', () => {
    const name = customExerciseInput.value.trim();
    if (name) {
      saveCustomExercise(name);
      customExerciseInput.value = '';
      customExerciseForm?.classList.add('gt-hidden');
    }
  });

  customExerciseInput?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addCustomExerciseBtn?.click();
  });

  exportDataBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    exportMenu?.classList.toggle('gt-hidden');
  });

  exportJsonBtn?.addEventListener('click', exportJSON);
  exportCsvBtn?.addEventListener('click', exportCSV);

  document.addEventListener('click', (e) => {
    if (exportMenu && exportDataBtn && !exportDataBtn.contains(e.target as Node) && !exportMenu.contains(e.target as Node)) {
      exportMenu.classList.add('gt-hidden');
    }
  });

  clearHistoryBtn?.addEventListener('click', () => {
    confirmModal?.classList.remove('gt-hidden');
  });

  confirmDeleteBtn?.addEventListener('click', () => {
    const h = getHistory();
    delete h[exerciseSelect.value];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(h));
    confirmModal?.classList.add('gt-hidden');
    updateUI();
  });

  cancelDeleteBtn?.addEventListener('click', () => {
    confirmModal?.classList.add('gt-hidden');
  });

  function updateTimerDisplay() {
    if (!timerDisplay) return;
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    timerDisplay.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    
    if (timerProgress && initialTime > 0) {
      const percentage = (timeLeft / initialTime) * 100;
      (timerProgress as HTMLElement).style.width = `${percentage}%`;
    }
  }

  function startTimer(seconds: number) {
    if (timerInterval) clearInterval(timerInterval);
    timeLeft = seconds;
    initialTime = seconds;
    updateTimerDisplay();
    
    timerInterval = window.setInterval(() => {
      timeLeft--;
      if (timeLeft <= 0) {
        timeLeft = 0;
        if (timerInterval) clearInterval(timerInterval);
        timerInterval = null;
        localStorage.removeItem(TIMER_STORAGE_KEY);
        timerDisplay?.classList.remove('gt-timer-active');
      } else {
        saveTimerState();
      }
      updateTimerDisplay();
    }, 1000);
    
    saveTimerState();
    timerDisplay?.classList.add('gt-timer-active');
  }

  function saveTimerState() {
    if (timerInterval && timeLeft > 0) {
      const endTime = Date.now() + (timeLeft * 1000);
      localStorage.setItem(TIMER_STORAGE_KEY, JSON.stringify({ endTime, initialTime }));
    } else {
      localStorage.removeItem(TIMER_STORAGE_KEY);
    }
  }

  function restoreTimerState() {
    const data = localStorage.getItem(TIMER_STORAGE_KEY);
    if (!data) return;
    
    const { endTime, initialTime: savedInitial } = JSON.parse(data);
    const remaining = Math.round((endTime - Date.now()) / 1000);
    
    if (remaining > 0) {
      initialTime = savedInitial;
      startTimer(remaining);
    } else {
      localStorage.removeItem(TIMER_STORAGE_KEY);
    }
  }

  startTimerBtn?.addEventListener('click', () => {
    if (timeLeft > 0 && !timerInterval) startTimer(timeLeft);
  });

  resetTimerBtn?.addEventListener('click', () => {
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = null;
    timeLeft = 0;
    initialTime = 0;
    localStorage.removeItem(TIMER_STORAGE_KEY);
    timerDisplay?.classList.remove('gt-timer-active');
    updateTimerDisplay();
  });

  presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const seconds = parseInt((btn as HTMLElement).dataset.seconds || '0');
      startTimer(seconds);
    });
  });

  setCustomTimerBtn?.addEventListener('click', () => {
    const seconds = parseInt(customTimerInput.value);
    if (!isNaN(seconds) && seconds > 0) startTimer(seconds);
  });

  exerciseSelect?.addEventListener('change', updateUI);

  getCustomExercises().forEach(ex => {
    addExerciseToSelect(ex.id, ex.name);
  });

  restoreTimerState();
  updateUI();
}
