const TIMER_STORAGE_KEY = 'jjlmoya-gym-tracker-data-timer';

interface TimerState {
  interval: number | null;
  timeLeft: number;
  initialTime: number;
}

interface TimerElements {
  display: HTMLElement | null;
  startBtn: HTMLElement | null;
  resetBtn: HTMLElement | null;
  progress: HTMLElement | null;
  customInput: HTMLInputElement | null;
  setCustomBtn: HTMLElement | null;
  presets: NodeListOf<Element>;
}

export function initTimer() {
  const els = getTimerElements();
  if (!els.display) return;

  const state: TimerState = {
    interval: null,
    timeLeft: 0,
    initialTime: 0
  };

  setupTimerEvents(els, state);
  restoreTimerState(els, state);
  updateTimerUI(els, state);
}

function getTimerElements(): TimerElements {
  return {
    display: document.getElementById('timerDisplay'),
    startBtn: document.getElementById('startTimerBtn'),
    resetBtn: document.getElementById('resetTimerBtn'),
    progress: document.getElementById('timerProgress'),
    customInput: document.getElementById('customTimerInput') as HTMLInputElement | null,
    setCustomBtn: document.getElementById('setCustomTimerBtn'),
    presets: document.querySelectorAll('.preset-btn')
  };
}

function setupTimerEvents(els: TimerElements, state: TimerState) {
  els.startBtn?.addEventListener('click', () => {
    if (state.timeLeft > 0 && !state.interval) startTimer(els, state, state.timeLeft);
  });

  els.resetBtn?.addEventListener('click', () => {
    stopTimer(els, state);
    state.timeLeft = 0;
    state.initialTime = 0;
    updateTimerUI(els, state);
  });

  els.presets.forEach((btn: Element) => {
    (btn as HTMLElement).onclick = () => startTimer(els, state, parseInt((btn as HTMLElement).dataset.seconds || '0'));
  });

  if (els.setCustomBtn) {
    els.setCustomBtn.onclick = () => {
      const s = parseInt(els.customInput?.value || '0');
      if (!isNaN(s) && s > 0) startTimer(els, state, s);
    };
  }
}

function startTimer(els: TimerElements, state: TimerState, seconds: number) {
  stopTimer(els, state);
  state.timeLeft = seconds;
  state.initialTime = seconds;
  els.display?.classList.add('gt-timer-active');
  
  state.interval = window.setInterval(() => {
    state.timeLeft--;
    if (state.timeLeft <= 0) {
      state.timeLeft = 0;
      stopTimer(els, state);
    } else {
      saveTimerState(state);
    }
    updateTimerUI(els, state);
  }, 1000);
  
  saveTimerState(state);
  updateTimerUI(els, state);
}

function stopTimer(els: TimerElements, state: TimerState) {
  if (state.interval) clearInterval(state.interval);
  state.interval = null;
  localStorage.removeItem(TIMER_STORAGE_KEY);
  els.display?.classList.remove('gt-timer-active');
}

function updateTimerUI(els: TimerElements, state: TimerState) {
  if (!els.display) return;
  const m = Math.floor(state.timeLeft / 60);
  const s = state.timeLeft % 60;
  els.display.textContent = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  if (els.progress && state.initialTime > 0) {
    els.progress.style.width = `${(state.timeLeft / state.initialTime) * 100}%`;
  }
}

function saveTimerState(state: TimerState) {
  if (state.interval && state.timeLeft > 0) {
    const endTime = Date.now() + (state.timeLeft * 1000);
    localStorage.setItem(TIMER_STORAGE_KEY, JSON.stringify({ endTime, initialTime: state.initialTime }));
  }
}

function restoreTimerState(els: TimerElements, state: TimerState) {
  const data = localStorage.getItem(TIMER_STORAGE_KEY);
  if (!data) return;
  const { endTime, initialTime } = JSON.parse(data);
  const remaining = Math.round((endTime - Date.now()) / 1000);
  if (remaining > 0) {
    state.initialTime = initialTime;
    startTimer(els, state, remaining);
  } else {
    localStorage.removeItem(TIMER_STORAGE_KEY);
  }
}
