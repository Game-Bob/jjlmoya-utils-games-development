import { SetupRenderer } from './ui/setup';
import { MobileBracketRenderer } from './ui/bracket-mobile';
import { DesktopBracketRenderer } from './ui/bracket-desktop';
import type { TournamentData } from './models';
import type { TournamentBracketUI } from './ui';

export class TournamentRenderer {
  private setup: SetupRenderer;
  private mobile: MobileBracketRenderer;
  private desktop: DesktopBracketRenderer;

  constructor(ui: TournamentBracketUI) {
    this.setup = new SetupRenderer(ui);
    this.mobile = new MobileBracketRenderer(ui);
    this.desktop = new DesktopBracketRenderer(ui);
  }

  public updatePlayerList(players: string[], onRemove: (i: number) => void) {
    this.setup.updatePlayerList(players, onRemove);
  }

  public renderShuffleControl(isEnabled: boolean, onToggle: (v: boolean) => void) {
    this.setup.renderShuffleControl(isEnabled, onToggle);
  }

  public renderScoreControl(isEnabled: boolean, onToggle: (v: boolean) => void) {
    this.setup.renderScoreControl(isEnabled, onToggle);
  }

  public renderHistoryList(
    history: Parameters<SetupRenderer['renderHistoryList']>[0],
    onLoad: (id: string) => void,
    onDelete: (id: string) => void
  ) {
    this.setup.renderHistoryList(history, onLoad, onDelete);
  }

  public renderMobileView(data: TournamentData, activeRound: number, onTabClick: (i: number) => void) {
    this.mobile.render(data, activeRound, onTabClick);
  }

  public renderDesktopView(data: TournamentData) {
    this.desktop.render(data);
  }
}
