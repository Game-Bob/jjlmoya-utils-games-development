import type { TeamKey, MatchState, TeamScore } from './logic';
import {
  createInitialState, scoreTry, scoreConversion, scorePenalty, scoreDropGoal,
  addSinBin, tickClock, startMatch, toggleClock, teamTotal,
  formatTime, formatSinBinTime, undoLast, bonusPoints, losingBonus,
} from './logic';

interface RGUI {
  home: string; away: string; tryLabel: string; conversion: string; penalty: string;
  dropGoal: string; sinBin: string; sinBinPlayer: string; sinBinAdd: string;
  sinBinEmpty: string; matchClock: string; half: string; half1: string;
  half2: string; startMatch: string; resetMatch: string; resetConfirm: string;
  cancel: string; confirm: string; scoringSummary: string; tryScored: string;
  conversionSuccess: string; penaltyScored: string; dropGoalScored: string;
  totalPoints: string; fullscreen: string; toggleSound: string;
  eventLog: string; eventEmpty: string; undoBtn: string; timeOff: string; timeOn: string;
}

function getUI(): RGUI {
  const app = document.getElementById('rg-app') as HTMLElement;
  return JSON.parse(app?.dataset.rgUi ?? '{}') as RGUI;
}

function q<T extends HTMLElement = HTMLElement>(id: string): T | null {
  return document.getElementById(id) as T | null;
}

function renderScoreboard(s: MatchState) {
  const sh = q('rg-score-home');
  const sa = q('rg-score-away');
  const ct = q('rg-clock-time');
  const hl = q('rg-half-label');
  if (sh) sh.textContent = String(teamTotal(s.home));
  if (sa) sa.textContent = String(teamTotal(s.away));
  if (ct) ct.textContent = formatTime(s.elapsed);
  if (hl) hl.textContent = String(s.half);
  const cf = q<SVGPathElement>('rg-clock-fill');
  if (cf) {
    const max = s.half === 1 ? 2400 : 4800;
    const pct = Math.min(s.elapsed / max, 1);
    const circ = 2 * Math.PI * 54;
    cf.style.strokeDasharray = String(circ);
    cf.style.strokeDashoffset = String(circ * (1 - pct));
  }
  renderSinBin(s);
  renderSummary(s);
  renderHistory(s);
  renderBonuses(s);
}

function renderHistory(s: MatchState) {
  const list = q('rg-history-list');
  const undo = q('rg-btn-undo');
  if (!list) return;
  if (s.history.length === 0) {
    list.innerHTML = `<div class="rg-history-empty">${getUI().eventEmpty}</div>`;
    if (undo) undo.setAttribute('disabled', '');
    return;
  }
  if (undo) undo.removeAttribute('disabled');
  list.innerHTML = s.history.map((e) => {
    const cls = e.team === 'home' ? 'rg-ev-home' : 'rg-ev-away';
    return `<div class="rg-history-event ${cls}"><span class="rg-ev-min">${e.minute}</span><span class="rg-ev-label">${e.label}</span></div>`;
  }).join('');
  list.scrollTop = list.scrollHeight;
}

function renderBonuses(s: MatchState) {
  const bh = q('rg-bonus-home');
  const ba = q('rg-bonus-away');
  if (bh) {
    const b = bonusPoints(s.home);
    const lb = losingBonus(s.home, s.away, 'home') ? ['LBP'] : [];
    bh.textContent = [...b, ...lb].join(' ');
  }
  if (ba) {
    const b = bonusPoints(s.away);
    const lb = losingBonus(s.home, s.away, 'away') ? ['LBP'] : [];
    ba.textContent = [...b, ...lb].join(' ');
  }
}

function renderSinBin(s: MatchState) {
  const sl = q('rg-sinbin-list');
  if (!sl) return;
  if (s.sinBin.length === 0) {
    sl.innerHTML = `<div class="rg-sinbin-empty">${getUI().sinBinEmpty}</div>`;
    return;
  }
  sl.innerHTML = s.sinBin.map((e) => {
    const pct = (e.remaining / e.total) * 100;
    let cls = 'rg-sinbin-safe';
    if (pct < 25) cls = 'rg-sinbin-critical';
    else if (pct < 60) cls = 'rg-sinbin-warn';
    return `<div class="rg-sinbin-card ${cls}"><div class="rg-sinbin-player">${e.player}</div><div class="rg-sinbin-time">${formatSinBinTime(e.remaining)}</div><div class="rg-sinbin-bar"><div class="rg-sinbin-fill" style="width:${pct}%"></div></div><div class="rg-sinbin-return">${pct <= 0 ? getUI().sinBinEmpty : ''}</div></div>`;
  }).join('');
}

function renderSummary(s: MatchState) {
  const rows: (keyof TeamScore)[] = ['tries', 'conversions', 'penalties', 'dropGoals'];
  const sb = q('rg-summary-body');
  if (!sb) return;
  const bodyRows = sb.querySelectorAll('tr');
  bodyRows.forEach((row, i) => {
    if (i >= rows.length) return;
    const tds = row.querySelectorAll('td');
    if (tds[1]) tds[1].textContent = String(s.home[rows[i]]);
    if (tds[2]) tds[2].textContent = String(s.away[rows[i]]);
  });
  const hTotal = teamTotal(s.home);
  const aTotal = teamTotal(s.away);
  const th = q('rg-total-home');
  const ta = q('rg-total-away');
  if (th) { th.textContent = String(hTotal); }
  if (ta) { ta.textContent = String(aTotal); }
}

function showBanner(html: string, isPeak: boolean) {
  const bn = q('rg-banner');
  const bt = q('rg-banner-text');
  if (!bn || !bt) return;
  bt.innerHTML = html;
  bn.className = `rg-banner ${isPeak ? 'rg-banner-peak' : 'rg-banner-warn'}`;
  bn.style.display = 'flex';
  bn.classList.remove('rg-banner-hide');
  void bn.offsetWidth;
  bn.classList.add('rg-banner-show');
  setTimeout(() => {
    bn.classList.add('rg-banner-hide');
    setTimeout(() => { bn.style.display = 'none'; }, 400);
  }, 2000);
}

function toggleConv(team: TeamKey | null) {
  const ch = q(`rg-conv-home`);
  const ca = q(`rg-conv-away`);
  if (ch) ch.disabled = team !== 'home';
  if (ca) ca.disabled = team !== 'away';
}

function onBtn(id: string, fn: () => void) {
  const el = q(id);
  if (el) el.addEventListener('click', fn);
}

function teamName(team: TeamKey): string {
  const inp = team === 'home' ? q<HTMLInputElement>('rg-name-home') : q<HTMLInputElement>('rg-name-away');
  const ui = getUI();
  return inp?.value || (team === 'home' ? ui.home : ui.away);
}

function handleScoreClick(ctx: { state: MatchState; convTeam: TeamKey | null }, team: TeamKey, action: string) {
  const name = teamName(team);
  if (action === 'try') {
    ctx.state = scoreTry(ctx.state, team);
    ctx.convTeam = team;
    toggleConv(team);
    showBanner(`TRY! ${name} +5`, true);
    renderScoreboard(ctx.state);
    return;
  }
  if (action === 'conv' && ctx.convTeam) {
    ctx.state = scoreConversion(ctx.state, ctx.convTeam, true);
    toggleConv(null);
    ctx.convTeam = null;
    showBanner(`CONVERSION! +2`, true);
    renderScoreboard(ctx.state);
    return;
  }
  if (action === 'pen') {
    ctx.state = scorePenalty(ctx.state, team);
    showBanner(`PENALTY! ${name} +3`, true);
    renderScoreboard(ctx.state);
    return;
  }
  if (action === 'drop') {
    ctx.state = scoreDropGoal(ctx.state, team);
    showBanner(`DROP GOAL! ${name} +3`, true);
    renderScoreboard(ctx.state);
  }
}

function wireScoreButtons(ctx: { state: MatchState; convTeam: TeamKey | null }) {
  document.querySelectorAll('.rg-col[data-team]').forEach((col) => {
    const team = (col as HTMLElement).dataset.team as TeamKey;
    col.querySelectorAll('button[data-action]').forEach((btn) => {
      btn.addEventListener('click', () => handleScoreClick(ctx, team, (btn as HTMLElement).dataset.action!));
    });
  });
}

function handleClock(ctx: { state: MatchState }, clockId: { v: number }, ui: RGUI) {
  const btn = q('rg-btn-clock');
  if (!btn) return;
  if (!ctx.state.matchStarted) {
    ctx.state = startMatch(ctx.state);
    btn.textContent = ui.timeOff;
    renderScoreboard(ctx.state);
    clockId.v = setInterval(() => {
      ctx.state = tickClock(ctx.state, 1);
      renderScoreboard(ctx.state);
      if (ctx.state.matchEnded) {
        clearInterval(clockId.v);
        btn.textContent = ui.startMatch;
        showBanner('FULL TIME! Match is over', false);
      }
    }, 1000);
  } else if (ctx.state.clockRunning) {
    ctx.state = toggleClock(ctx.state);
    btn.textContent = ui.timeOn;
  } else {
    ctx.state = toggleClock(ctx.state);
    btn.textContent = ui.timeOff;
  }
}

function handleSinBin(ctx: { state: MatchState }) {
  const inp = q<HTMLInputElement>('rg-sinbin-input');
  const dur = q<HTMLSelectElement>('rg-sinbin-duration');
  if (!inp || !dur || !inp.value.trim()) return;
  ctx.state = addSinBin(ctx.state, inp.value.trim(), Number(dur.value));
  showBanner(`SIN BIN ${dur.value === '600' ? '10min' : '5min'}`, false);
  inp.value = '';
  renderScoreboard(ctx.state);
}

function handleUndo(ctx: { state: MatchState; convTeam: TeamKey | null }) {
  ctx.state = undoLast(ctx.state);
  ctx.convTeam = null;
  toggleConv(null);
  renderScoreboard(ctx.state);
}

function confirmReset(ctx: { state: MatchState; convTeam: TeamKey | null }, clockId: { v: number }, ui: RGUI) {
  clearInterval(clockId.v);
  ctx.state = createInitialState();
  ctx.convTeam = null;
  toggleConv(null);
  const btn = q('rg-btn-clock');
  if (btn) btn.textContent = ui.startMatch;
  q('rg-modal')!.style.display = 'none';
  renderScoreboard(ctx.state);
}

export function initRugbyScorekeeper() {
  const ui = getUI();
  const ctx = { state: createInitialState(), convTeam: null as TeamKey | null };
  const clockId = { v: 0 };

  wireScoreButtons(ctx);
  onBtn('rg-btn-clock', () => handleClock(ctx, clockId, ui));
  onBtn('rg-btn-sinbin', () => handleSinBin(ctx));
  onBtn('rg-btn-undo', () => handleUndo(ctx));
  onBtn('rg-btn-reset', () => q('rg-modal')!.style.display = 'flex');
  onBtn('rg-modal-cancel', () => q('rg-modal')!.style.display = 'none');
  onBtn('rg-modal-confirm', () => confirmReset(ctx, clockId, ui));
  const inp = q<HTMLInputElement>('rg-sinbin-input');
  if (inp) inp.addEventListener('keydown', (e) => { if (e.key === 'Enter') handleSinBin(ctx); });
  renderScoreboard(ctx.state);
}
