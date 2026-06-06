import type { GameState, BaseKey } from './logic';
import { createInitialState, recordStrike, recordBall, recordFoul, recordHit, recordOut, recordRun, recordError, formatInning } from './logic';

interface BBUI {
  away: string; home: string; runs: string; hits: string; errors: string;
  inning: string; topInning: string; bottomInning: string; balls: string;
  strikes: string; outs: string; strikeBtn: string; ballBtn: string;
  foulBtn: string; hitBtn: string; outBtn: string; walkBtn: string;
  runBtn: string; errorBtn: string; newBatter: string;
  resetMatch: string; resetConfirm: string;
  cancel: string; confirm: string; total: string; fullscreen: string;
  toggleSound: string;
}

function getUI(): BBUI {
  const app = document.getElementById('bb-app') as HTMLElement;
  return JSON.parse(app?.dataset.bbUi ?? '{}') as BBUI;
}

function q<T extends HTMLElement = HTMLElement>(id: string): T | null {
  return document.getElementById(id) as T | null;
}

function renderAll(state: GameState) {
  const sA = q('bb-score-away');
  const sH = q('bb-score-home');
  const il = q('bb-inning-label');
  if (sA) sA.textContent = String(state.away.runs);
  if (sH) sH.textContent = String(state.home.runs);
  if (il) il.textContent = formatInning(state);

  renderDots('bb-dots-balls', state.count.balls, 4, '#e3b341');
  renderDots('bb-dots-strikes', state.count.strikes, 3, '#da3633');
  renderDots('bb-dots-outs', state.count.outs, 3, '#636363');

  renderBases(state.bases);
  renderRHE(state);
  renderInnings(state);
}

function renderDots(id: string, filled: number, total: number, color: string) {
  const el = q(id);
  if (!el) return;
  const dots = el.querySelectorAll('.bb-dot');
  dots.forEach((dot, i) => {
    (dot as HTMLElement).style.background = i < filled ? color : 'transparent';
    (dot as HTMLElement).style.borderColor = color;
  });
}

function renderBases(bases: BaseKey[]) {
  const map: Record<BaseKey, string> = { first: 'bb-base-first', second: 'bb-base-second', third: 'bb-base-third' };
  (Object.keys(map) as BaseKey[]).forEach((key) => {
    const el = q(map[key]);
    if (el) el.classList.toggle('bb-base-active', bases.includes(key));
  });
}

function renderRHE(state: GameState) {
  const ar = q('bb-rhe-away-r'); const ah = q('bb-rhe-away-h'); const ae = q('bb-rhe-away-e');
  const hr = q('bb-rhe-home-r'); const hh = q('bb-rhe-home-h'); const he = q('bb-rhe-home-e');
  if (ar) ar.textContent = String(state.away.runs);
  if (ah) ah.textContent = String(state.away.hits);
  if (ae) ae.textContent = String(state.away.errors);
  if (hr) hr.textContent = String(state.home.runs);
  if (hh) hh.textContent = String(state.home.hits);
  if (he) he.textContent = String(state.home.errors);
}

function renderInnings(state: GameState) {
  const ra = q('bb-inning-row-away');
  const rh = q('bb-inning-row-home');
  if (!ra || !rh) return;
  const maxInning = Math.max(state.awayInnings.length, state.homeInnings.length, 1);
  let awayHtml = `<span class="bb-inning-row-team">${getUI().away}</span>`;
  let homeHtml = `<span class="bb-inning-row-team">${getUI().home}</span>`;
  for (let i = 0; i < maxInning; i++) {
    awayHtml += `<span class="bb-inning-cell">${state.awayInnings[i] ?? ''}</span>`;
    homeHtml += `<span class="bb-inning-cell">${state.homeInnings[i] ?? ''}</span>`;
  }
  ra.innerHTML = awayHtml;
  rh.innerHTML = homeHtml;
}

function onBtn(id: string, fn: () => void) {
  const el = q(id);
  if (el) el.addEventListener('click', fn);
}

function wireActions(state: { v: GameState }) {
  function doAction(action: string) {
    if (action === 'strike') state.v = recordStrike(state.v);
    else if (action === 'ball') state.v = recordBall(state.v);
    else if (action === 'foul') state.v = recordFoul(state.v);
    else if (action === 'hit') state.v = recordHit(state.v);
    else state.v = recordOut(state.v);
    renderAll(state.v);
  }
  function toggleBase(key: BaseKey) {
    const idx = state.v.bases.indexOf(key);
    if (idx >= 0) { state.v.bases.splice(idx, 1); }
    else { state.v.bases.push(key); }
    renderAll(state.v);
  }
  function doConfirmReset() {
    state.v = createInitialState();
    q('bb-modal')!.style.display = 'none';
    renderAll(state.v);
  }
  ['strike', 'ball', 'foul', 'hit', 'out'].forEach((a) => onBtn(`bb-btn-${a}`, () => doAction(a)));
  onBtn('bb-btn-run', () => { state.v = recordRun(state.v); renderAll(state.v); });
  onBtn('bb-btn-error', () => { state.v = recordError(state.v); renderAll(state.v); });
  onBtn('bb-btn-reset', () => q('bb-modal')!.style.display = 'flex');
  onBtn('bb-modal-cancel', () => q('bb-modal')!.style.display = 'none');
  onBtn('bb-modal-confirm', doConfirmReset);
  const baseMap = { first: 'bb-base-first', second: 'bb-base-second', third: 'bb-base-third' } as const;
  (Object.keys(baseMap) as BaseKey[]).forEach((k) => q(baseMap[k])?.addEventListener('click', () => toggleBase(k)));
}

function wireEvents(state: { v: GameState }) {
  wireActions(state);
  renderAll(state.v);
}

export function initBaseballScorekeeper() {
  wireEvents({ v: createInitialState() });
}
