import type { TournamentManager } from '../logic/manager';

const _bcr = (el: Element) => el.getBoundingClientRect();
const _ow = (el: HTMLElement): number => el.offsetWidth;
const _oh = (el: HTMLElement): number => el.offsetHeight;
const _cw = (el: HTMLElement): number => el.clientWidth;
const _ch = (el: HTMLElement): number => el.clientHeight;
const _sl = (el: HTMLElement): number => el.scrollLeft;
const _st = (el: HTMLElement): number => el.scrollTop;

export class TournamentNavigator {
  static findNextPlayableMatch(manager: TournamentManager) {
    for (const round of manager.rounds) {
      const m = round.matches.find((x) => !x.winner && x.player1 && x.player2);
      if (m) return m;
    }
    return null;
  }

  static isTournamentUnfinished(manager: TournamentManager): boolean {
    return manager.rounds.some((r) => r.matches.some((m) => !m.winner));
  }

  static scrollToMatch(
    matchId: string,
    manager: TournamentManager,
    activeRound: number,
    callbacks: { onMobileRoundChange: (i: number) => void; onShowToast: () => void }
  ) {
    const desktop = document.querySelector('.desktop-bracket-container') as HTMLElement;
    if (desktop?.offsetParent !== null) {
      this.handleDesktopScroll(desktop, matchId);
    } else {
      this.handleMobileScroll(matchId, manager, activeRound, callbacks.onMobileRoundChange);
    }
  }

  private static handleDesktopScroll(container: HTMLElement, matchId: string) {
    const btn = container.querySelector(`button[data-match-id="${matchId}"]`) as HTMLElement;
    if (!btn) return;
    const card = (btn.closest('div[style*="position: absolute"]') as HTMLElement) ?? btn;
    requestAnimationFrame(() => this.scrollDesktopToCard(container, card));
    this.highlightElement(card);
  }

  private static scrollDesktopToCard(container: HTMLElement, card: HTMLElement) {
    if (card.style.position === 'absolute') {
      const top = parseInt(card.style.top ?? '0');
      const left = parseInt(card.parentElement?.style.left ?? '0');
      container.scrollTo({
        left: Math.max(0, left - _cw(container) / 2 + _ow(card) / 2),
        top: Math.max(0, top - _ch(container) / 2 + _oh(card) / 2),
        behavior: 'smooth',
      });
    } else {
      const cr = _bcr(card);
      const co = _bcr(container);
      container.scrollTo({
        left: _sl(container) + (cr.left + cr.width / 2) - (co.left + co.width / 2),
        top: _st(container) + (cr.top + cr.height / 2) - (co.top + co.height / 2),
        behavior: 'smooth',
      });
    }
  }

  private static handleMobileScroll(
    matchId: string, manager: TournamentManager, activeRound: number, onChange: (i: number) => void
  ) {
    const rIdx = manager.rounds.findIndex((r) => r.matches.some((m) => m.id === matchId));
    if (rIdx !== -1 && rIdx !== activeRound) {
      onChange(rIdx);
      setTimeout(() => {
        const btn = document.querySelector(`.bracket-mobile button[data-match-id="${matchId}"]`) as HTMLElement;
        if (btn) this.scrollMobileIntoView(btn);
      }, 100);
      return;
    }
    const btn = document.querySelector(`.bracket-mobile button[data-match-id="${matchId}"]`) as HTMLElement;
    if (btn) this.scrollMobileIntoView(btn);
  }

  private static scrollMobileIntoView(btn: HTMLElement) {
    const card = (btn.closest('.tb-match-card') as HTMLElement) ?? btn;
    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    this.highlightElement(card);
  }

  private static highlightElement(el: HTMLElement) {
    el.classList.add('tb-highlight');
    setTimeout(() => el.classList.remove('tb-highlight'), 2000);
  }
}
