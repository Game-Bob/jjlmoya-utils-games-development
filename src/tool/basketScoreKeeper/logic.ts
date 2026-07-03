import type { BasketScoreKeeperUI } from './ui';
const g = (id: string) => document.getElementById(id);
const _bcr = (el: Element) => el.getBoundingClientRect();
const COLORS: Record<number, string> = { 1: '#22c55e', 2: '#f97316', 3: '#ef4444' };
const MIX = ['#facc15', '#a78bfa', '#22d3ee', '#f472b6'];
const ANIMS = ['split', 'boom', 'spin', 'stretch', 'drop'];

function addParticle(container: HTMLElement, val: number, cx: number, cy: number) {
  const p = document.createElement('div'); p.className = 'bk-p'; p.innerText = `+${val}`;
  p.style.color = COLORS[val] ?? '#fff'; p.style.left = `${cx + (Math.random() - 0.5) * 30}%`; p.style.top = `${cy + (Math.random() - 0.5) * 20}%`;
  const a = Math.random() * Math.PI * 2; const d = 40 + Math.random() * 70;
  p.style.setProperty('--dx', `${Math.cos(a) * d}px`); p.style.setProperty('--dy', `${Math.sin(a) * d - 40}px`);
  p.style.setProperty('--rot', `${(Math.random() - 0.5) * 90}deg`);
  p.style.fontSize = `${1.2 + Math.random() * 1.3}rem`; p.style.animationDuration = `${0.5 + Math.random() * 0.5}s`;
  container.appendChild(p); setTimeout(() => p.remove(), 1500);
}

function addDot(container: HTMLElement, cx: number, cy: number, color: string) {
  const d = document.createElement('div'); d.className = 'bk-dot';
  d.style.background = Math.random() > 0.3 ? color : MIX[Math.floor(Math.random() * 4)];
  d.style.left = `${cx + (Math.random() - 0.5) * 20}%`; d.style.top = `${cy + (Math.random() - 0.5) * 15}%`;
  d.style.width = `${4 + Math.random() * 6}px`; d.style.height = d.style.width;
  const a = Math.random() * Math.PI * 2; const dist = 50 + Math.random() * 100;
  d.style.setProperty('--dx', `${Math.cos(a) * dist}px`); d.style.setProperty('--dy', `${Math.sin(a) * dist}px`);
  d.style.animationDuration = `${0.3 + Math.random() * 0.4}s`;
  container.appendChild(d); setTimeout(() => d.remove(), 1200);
}

function burst(container: HTMLElement | null, val: number, cx: number, cy: number) {
  if (!container) return;
  const color = COLORS[val] ?? '#fff';
  const count = 6 + val * 2;
  for (let i = 0; i < count; i++) {
    if (i < val) { addParticle(container, val, cx, cy); }
    addDot(container, cx, cy, color);
  }
}

class BasketGame {
  t: BasketScoreKeeperUI;
  scoreA = 0; scoreB = 0;
  ct3A = 0; ct3B = 0;
  runA = 0; runB = 0;
  lastBy: 'A' | 'B' | null = null;
  wakeLock: WakeLockSentinel | null = null;

  u = {
    root: g('basket-scoreboard'),
    sA: g('bk-score-a'), sB: g('bk-score-b'),
    stA: g('bk-stack-a'), stB: g('bk-stack-b'),
    pA: g('bk-particles-a'), pB: g('bk-particles-b'),
    fA: g('bk-fire-a'), fB: g('bk-fire-b'),
    skA: g('bk-streak-a'), skB: g('bk-streak-b'),
    svA: g('bk-streak-val-a'), svB: g('bk-streak-val-b'),
    fs: g('bk-btn-fs'),
    tA: g('bk-team-a'), tB: g('bk-team-b'),
    flash: g('bk-flash'),
    modal: g('bk-modal'), mC: g('bk-modal-cancel'), mCf: g('bk-modal-confirm'),
    win: g('bk-winner'), winN: g('bk-winner-name'), winS: g('bk-winner-score'), winC: g('bk-winner-confetti'),
  };

  constructor() {
    this.t = JSON.parse(this.u.root?.dataset.bkUi ?? '{}') as BasketScoreKeeperUI;
    this.load(); this.bind(); this.render();
    (window as unknown as Record<string, unknown>).basket = this;
    this.tryWake();
  }

  private tog(el: HTMLElement | null, cls: string, on: boolean) { if (el) el.classList.toggle(cls, on); }

  private setText(el: HTMLElement | null, v: string) { if (el) el.innerText = v; }

  private re(el: HTMLElement | null, cls: string) {
    if (!el) return; el.classList.remove(cls); requestAnimationFrame(() => el.classList.add(cls));
  }

  private bind() {
    g('bk-btn-reset')?.addEventListener('click', () => this.showModal());
    if (this.u.mC) this.u.mC.addEventListener('click', () => this.hideModal());
    if (this.u.mCf) this.u.mCf.addEventListener('click', () => { this.hideModal(); this.celebrate(); });
    if (this.u.modal) this.u.modal.addEventListener('click', (e) => { if (e.target === this.u.modal) this.hideModal(); });
    g('bk-btn-swap')?.addEventListener('click', () => this.swap());
    if (this.u.fs) this.u.fs.addEventListener('click', () => this.toggleFs());
    document.querySelectorAll<HTMLInputElement>('.bk-name').forEach((n) => n.addEventListener('input', () => this.save()));
    document.addEventListener('fullscreenchange', () => this.onFs());
  }

  private sVal(team: 'A' | 'B') { return team === 'A' ? this.scoreA : this.scoreB; }

  private score(team: 'A' | 'B', val: number) {
    if (team === 'A') this.scoreA += val; else this.scoreB += val;
  }

  private streak(team: 'A' | 'B', val: number) {
    const same = this.lastBy === team;
    if (team === 'A') {
      if (same) { if (val === 3) this.ct3A++; this.runA += val; }
      else { this.ct3A = val === 3 ? 1 : 0; this.runA = val; this.resetOpp(); }
    } else {
      if (same) { if (val === 3) this.ct3B++; this.runB += val; }
      else { this.ct3B = val === 3 ? 1 : 0; this.runB = val; this.resetOpp(); }
    }
    this.lastBy = team;
    this.syncUI();
  }

  private resetOpp() { this.ct3A = 0; this.ct3B = 0; this.runA = 0; this.runB = 0; }

  private syncUI() {
    this.tog(this.u.fA, 'bk-fire-on', this.ct3A >= 2); this.tog(this.u.fB, 'bk-fire-on', this.ct3B >= 2);
    const onA = this.runA >= 6; const onB = this.runB >= 6;
    this.tog(this.u.skA, 'bk-streak-on', onA); this.tog(this.u.skB, 'bk-streak-on', onB);
    this.tog(this.u.skA, 'bk-streak-hot', this.runA >= 10); this.tog(this.u.skB, 'bk-streak-hot', this.runB >= 10);
    this.setText(this.u.svA, onA ? String(this.runA) : ''); this.setText(this.u.svB, onB ? String(this.runB) : '');
  }

  addScore(team: 'A' | 'B', val: number, e?: Event) {
    const isA = team === 'A';
    const particlesContainer = isA ? this.u.pA : this.u.pB;
    let cx = 50, cy = 50;
    if (e && particlesContainer) {
      const r = _bcr(particlesContainer);
      cx = ((e.clientX - r.left) / r.width) * 100;
      cy = ((e.clientY - r.top) / r.height) * 100;
    }
    this.score(team, val); this.streak(team, val);
    this.flip(isA ? this.u.sA : this.u.stA, isA ? this.u.stA : this.u.stB, String(this.sVal(team)));
    burst(particlesContainer, val, cx, cy);
    if (val >= 3) { this.re(isA ? this.u.tA : this.u.tB, 'bk-shake-card'); }
    this.screenFlash(val); this.vibe(val); this.render();
  }

  adjScore(team: 'A' | 'B', val: number) {
    if (this.sVal(team) + val < 0) return;
    this.score(team, val);
    const el = team === 'A' ? this.u.sA : this.u.sB;
    if (el) {
      const slot = el.closest('.bk-score-slot') as HTMLElement;
      this.re(slot, 'bk-shake-slot'); this.re(el, 'bk-danger');
    }
    this.vibe(-1); this.render();
  }

  private flip(el: HTMLElement | null, stack: HTMLElement | null, nv: string) {
    if (!el || !stack) { this.setText(el, nv); return; }
    const slot = el.closest('.bk-score-slot') as HTMLElement;
    if (!slot) { el.innerText = nv; return; }
    const style = ANIMS[Math.floor(Math.random() * ANIMS.length)];
    const out = el.cloneNode(true) as HTMLElement;
    out.id = ''; out.classList.add('bk-out', `bk-out-${style}`); out.removeAttribute('style');
    slot.appendChild(out);
    el.innerText = nv; el.classList.add('bk-in', `bk-in-${style}`);
    requestAnimationFrame(() => { out.classList.add('bk-out-active'); el.classList.add('bk-in-active'); });
    setTimeout(() => {
      out.remove(); el.classList.remove('bk-in', 'bk-in-active', 'bk-in-split', 'bk-in-boom', 'bk-in-spin', 'bk-in-stretch', 'bk-in-drop');
    }, 500);
  }

  private screenFlash(val: number) {
    if (!this.u.flash) return;
    this.u.flash.style.background = COLORS[val] ?? '#fff';
    this.re(this.u.flash, 'bk-flash-on');
  }

  private vibe(val: number) {
    if (!navigator.vibrate) return;
    if (val === 1) navigator.vibrate(6);
    else if (val === 2) navigator.vibrate([6, 25, 6]);
    else if (val === 3) navigator.vibrate([12, 30, 16, 30, 12]);
    else if (val < 0) navigator.vibrate([20, 15, 8]);
  }

  private winName(win: 'A' | 'B'): string {
    const names = document.querySelectorAll<HTMLInputElement>('.bk-name');
    if (names.length >= 2) {
      const v = (win === 'A' ? names[0] : names[1]).value;
      if (v) return v;
    }
    return win === 'A' ? this.t.playerA : this.t.playerB;
  }

  private spawnConfetti() {
    const c = this.u.winC; if (!c) return; c.innerHTML = '';
    for (let i = 0; i < 80; i++) {
      const d = document.createElement('div'); d.className = 'bk-wc';
      d.style.left = `${Math.random() * 100}%`; d.style.background = MIX[Math.floor(Math.random() * 6)];
      d.style.width = `${4 + Math.random() * 8}px`; d.style.height = d.style.width;
      d.style.animationDelay = `${Math.random() * 1.5}s`; d.style.animationDuration = `${1.5 + Math.random() * 2}s`;
      c.appendChild(d);
    }
  }

  private celebrate() {
    if (this.scoreA + this.scoreB === 0) { this.reset(); return; }
    if (this.scoreA === this.scoreB) { this.reset(); return; }
    const win = this.scoreA > this.scoreB ? 'A' : 'B';
    this.setText(this.u.winN, this.winName(win));
    if (this.u.winS) {
      this.u.winS.innerText = `${Math.max(this.scoreA, this.scoreB)} - ${Math.min(this.scoreA, this.scoreB)}`;
    }
    this.spawnConfetti(); this.tog(this.u.win, 'bk-winner-off', false);
    setTimeout(() => { this.tog(this.u.win, 'bk-winner-off', true); this.reset(); }, 2500);
  }

  private showModal() { if (this.u.modal) { this.u.modal.style.removeProperty('display'); this.u.modal.classList.remove('bk-modal-off'); } }
  private hideModal() { if (this.u.modal) { this.u.modal.classList.add('bk-modal-off'); this.u.modal.style.display = 'none'; } }
  private STORAGE = 'bk_state';

  private save() {
    const n = document.querySelectorAll<HTMLInputElement>('.bk-name');
    try { localStorage.setItem(this.STORAGE, JSON.stringify({ scoreA: this.scoreA, scoreB: this.scoreB, nameA: n[0]?.value ?? '', nameB: n[1]?.value ?? '' })); } catch {}
  }

  private load() {
    try { const r = localStorage.getItem(this.STORAGE); if (!r) return; const s = JSON.parse(r);
      this.scoreA = s.scoreA ?? 0; this.scoreB = s.scoreB ?? 0;
      const n = document.querySelectorAll<HTMLInputElement>('.bk-name');
      if (n.length >= 2) { if (s.nameA) n[0].value = s.nameA; if (s.nameB) n[1].value = s.nameB; }
    } catch {}
  }

  private async toggleFs() {
    if (document.fullscreenElement) { await document.exitFullscreen(); } else { await this.u.root?.requestFullscreen(); }
  }

  private onFs() {
    this.tog(this.u.fs, 'bk-fs-on', !!document.fullscreenElement);
    if (document.fullscreenElement) { this.tryWake(); } else { this.releaseWake(); }
  }

  private async tryWake() { try { this.wakeLock = await navigator.wakeLock.request('screen'); } catch {} }
  private releaseWake() { if (this.wakeLock) { this.wakeLock.release(); this.wakeLock = null; } }

  swap() {
    [this.scoreA, this.scoreB] = [this.scoreB, this.scoreA];
    const n = document.querySelectorAll<HTMLInputElement>('.bk-name');
    if (n.length >= 2) [n[0].value, n[1].value] = [n[1].value, n[0].value];
    this.render();
  }

  reset() {
    this.scoreA = 0; this.scoreB = 0; this.ct3A = 0; this.ct3B = 0; this.runA = 0; this.runB = 0; this.lastBy = null;
    this.tog(this.u.fA, 'bk-fire-on', false); this.tog(this.u.fB, 'bk-fire-on', false);
    this.tog(this.u.skA, 'bk-streak-on', false); this.tog(this.u.skB, 'bk-streak-on', false);
    this.tog(this.u.skA, 'bk-streak-hot', false); this.tog(this.u.skB, 'bk-streak-hot', false);
    this.setText(this.u.svA, ''); this.setText(this.u.svB, '');
    this.render();
  }

  render() {
    this.setText(this.u.sA, String(this.scoreA)); this.setText(this.u.sB, String(this.scoreB));
    this.save();
  }
}

export function initBasketScoreKeeper() {
  if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', () => new BasketGame()); } else { new BasketGame(); }
}
