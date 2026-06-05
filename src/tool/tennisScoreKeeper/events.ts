import type { TennisScoreKeeperUI } from './ui';
import { type PlayerSide, type MatchFormat } from './game-logic';
import { el } from './render';

export interface TennisAPI {
  addPoint: (player: PlayerSide, e?: MouseEvent) => void;
  minusPoint: (player: PlayerSide) => void;
  setMode: (mode: MatchFormat) => void;
  reset: () => void;
  resetAll: () => void;
  confirmReset: () => void;
  cancelReset: () => void;
  toggleFullscreen: () => void;
  confirmSwap: () => void;
}

const NAMES_KEY = 'tn_names';
const HISTORY_KEY = 'tn_history';

export function saveNames(a: string, b: string): void {
  localStorage.setItem(NAMES_KEY, JSON.stringify({ a, b }));
}

export function loadNames(): { a: string; b: string } {
  try {
    return JSON.parse(localStorage.getItem(NAMES_KEY) || '{"a":"Player 1","b":"Player 2"}');
  } catch {
    return { a: 'Player 1', b: 'Player 2' };
  }
}

export function getAllKnownNames(): string[] {
  const h: Record<string, { w: number; l: number }> = JSON.parse(localStorage.getItem(HISTORY_KEY) || '{}');
  return Object.keys(h).sort();
}

export function recordMatchOutcome(winner: string, loser: string): void {
  const w = winner.trim();
  const l = loser.trim();
  const h: Record<string, { w: number; l: number }> = JSON.parse(localStorage.getItem(HISTORY_KEY) || '{}');
  if (w) { h[w] = h[w] || { w: 0, l: 0 }; h[w].w += 1; }
  if (l) { h[l] = h[l] || { w: 0, l: 0 }; h[l].l += 1; }
  localStorage.setItem(HISTORY_KEY, JSON.stringify(h));

  const names = getAllKnownNames();
  ['tn-names-a', 'tn-names-b'].forEach((id) => {
    const dl = document.getElementById(id) as HTMLDataListElement;
    if (dl) dl.innerHTML = names.map((n) => `<option value="${n}">`).join('');
  });
}

function isModeButton(target: HTMLElement, api: TennisAPI): boolean {
  if (target.closest('[data-mode-bo3]')) { api.setMode('bo3'); return true; }
  if (target.closest('[data-mode-bo5]')) { api.setMode('bo5'); return true; }
  return false;
}

function isCourtClick(target: HTMLElement, e: MouseEvent, api: TennisAPI): boolean {
  const halfA = target.closest('#tn-court-half-a');
  if (halfA && !target.closest('.tn-player-input') && !target.closest('.tn-hud-sets')) { api.addPoint('a', e); return true; }
  const halfB = target.closest('#tn-court-half-b');
  if (halfB && !target.closest('.tn-player-input') && !target.closest('.tn-hud-sets')) { api.addPoint('b', e); return true; }
  return false;
}

function isMinusButton(target: HTMLElement, api: TennisAPI): boolean {
  if (target.closest('[data-minus-a]')) { api.minusPoint('a'); return true; }
  if (target.closest('[data-minus-b]')) { api.minusPoint('b'); return true; }
  return false;
}

function isSpecialButton(target: HTMLElement, api: TennisAPI): boolean {
  if (target.closest('[data-close-winner]')) { el('tn-winner')?.classList.remove('tn-winner-active'); api.resetAll(); return true; }
  if (target.closest('[data-tn-swap-btn]')) { api.confirmSwap(); return true; }
  if (target.closest('#tn-modal-cancel')) { api.cancelReset(); return true; }
  if (target.closest('#tn-modal-confirm')) { api.confirmReset(); return true; }
  if (target.closest('[data-tn-reset]')) { api.reset(); return true; }
  return false;
}

export function setupClickEvents(api: TennisAPI): void {
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (isSpecialButton(target, api)) return;
    if (isModeButton(target, api)) return;
    if (isCourtClick(target, e, api)) return;
    isMinusButton(target, api);
  });
}

export function setupFullscreen(card: HTMLElement, api: TennisAPI): void {
  const fsBtn = card.querySelector('[data-tn-fs]');
  fsBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    api.toggleFullscreen();
  });

  document.addEventListener('fullscreenchange', () => {
    const isFs = !!document.fullscreenElement;
    card.classList.toggle('tn-fullscreen-on', isFs);
    if (!isFs) card.classList.remove('tn-fullscreen-fallback');
  });
}

export function setupNameInputs(score: Record<string, unknown>, save: () => void): void {
  const na = document.getElementById('tn-name-a') as HTMLInputElement;
  const nb = document.getElementById('tn-name-b') as HTMLInputElement;
  [na, nb].forEach((inp) => {
    if (!inp) return;
    inp.addEventListener('input', () => {
      const a = (document.getElementById('tn-name-a') as HTMLInputElement)?.value || 'Player 1';
      const b = (document.getElementById('tn-name-b') as HTMLInputElement)?.value || 'Player 2';
      saveNames(a, b);
      save();
    });
  });
}

export function populateDatalists(): void {
  const names = getAllKnownNames();
  ['tn-names-a', 'tn-names-b'].forEach((id) => {
    const dl = document.getElementById(id) as HTMLDataListElement;
    if (!dl) return;
    dl.innerHTML = names.map((n) => `<option value="${n}">`).join('');
  });
}

export function setupUI(t: TennisScoreKeeperUI): void {
  const saved = loadNames();
  t.playerA = saved.a;
  t.playerB = saved.b;
  const na = document.getElementById('tn-name-a') as HTMLInputElement;
  const nb = document.getElementById('tn-name-b') as HTMLInputElement;
  if (na) na.value = saved.a;
  if (nb) nb.value = saved.b;
}
