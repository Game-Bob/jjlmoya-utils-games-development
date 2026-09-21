export interface WorkspaceDomElements {
  projectName: HTMLElement | null;
  projectEngine: HTMLElement | null;
  projectPath: HTMLElement | null;
  projectStatusIndicator: HTMLElement | null;
  projectStatusText: HTMLElement | null;
  syncBtn: HTMLButtonElement | null;
  openBtn: HTMLButtonElement | null;
  sidebar: HTMLElement | null;
  toolButtons: NodeListOf<HTMLButtonElement>;
  viewportIframe: HTMLIFrameElement | null;
  viewportTitle: HTMLElement | null;
  viewportDesc: HTMLElement | null;
  viewportPhaseBadge: HTMLElement | null;
  viewportExternalLink: HTMLAnchorElement | null;
  viewportLoader: HTMLElement | null;
  dock: HTMLElement | null;
  dockToggleBtn: HTMLButtonElement | null;
  dockClearBtn: HTMLButtonElement | null;
  dockLogList: HTMLElement | null;
  dockEmptyState: HTMLElement | null;
  dockTotalBadge: HTMLElement | null;
  filterChips: NodeListOf<HTMLButtonElement>;
  filterCounts: {
    all: HTMLElement | null;
    info: HTMLElement | null;
    warn: HTMLElement | null;
    error: HTMLElement | null;
    success: HTMLElement | null;
  };
}
