import type { IPlatformBridge } from '../../platform/contracts/IPlatformBridge';
import type { IWorkspaceState } from '../contracts/IWorkspaceState';
import { DesktopToolHost, DomDesktopToolSurfaceManager } from '../host';
import { createWorkspaceToolRegistry } from '../modules';
import type { ProjectSummary, WorkspaceStateModel } from '../types';
import type { WorkspaceProjectConfig } from '../types/WorkspaceProjectConfig';
import { WorkspaceDockView } from './WorkspaceDockView';
import { WorkspaceKeybindings } from './WorkspaceKeybindings';
import { WorkspaceLauncherView } from './WorkspaceLauncherView';
import { WorkspaceProjectBarView } from './WorkspaceProjectBarView';
import { WorkspaceProjectController } from './WorkspaceProjectController';
import { WorkspaceSidebarView } from './WorkspaceSidebarView';
import { WorkspaceViewportView } from './WorkspaceViewportView';

export class WorkspaceShellController {
  private readonly projectBarView: WorkspaceProjectBarView;
  private readonly launcherView: WorkspaceLauncherView;
  private readonly sidebarView: WorkspaceSidebarView;
  private readonly viewportView: WorkspaceViewportView;
  private readonly dockView: WorkspaceDockView;
  private readonly keybindings: WorkspaceKeybindings;
  private readonly toolHost: DesktopToolHost;
  private unsubscribe: (() => void) | undefined;
  private renderedToolId: string | undefined;
  private renderedProject: ProjectSummary | null | undefined;
  private renderedProjectConfig: WorkspaceProjectConfig | null | undefined;

  constructor(
    root: HTMLElement,
    private readonly state: IWorkspaceState,
    platform: IPlatformBridge,
  ) {
    this.viewportView = this.createViewportView(root, state);
    this.toolHost = this.createToolHost(root, state, platform);
    const projectController = new WorkspaceProjectController(state, platform);
    this.projectBarView = new WorkspaceProjectBarView(root, projectController);
    this.launcherView = new WorkspaceLauncherView(root, state, projectController);
    this.sidebarView = new WorkspaceSidebarView(root, state);
    this.dockView = new WorkspaceDockView(root, state);
    this.keybindings = new WorkspaceKeybindings(
      state,
      this.projectBarView,
      this.sidebarView,
    );
  }

  private createViewportView(
    root: HTMLElement,
    state: IWorkspaceState,
  ): WorkspaceViewportView {
    return new WorkspaceViewportView(root, {
      log: (severity, message, sourceToolId) => state.addLog(severity, message, sourceToolId),
      retry: () => {
        void this.toolHost.retry();
      },
      selectTool: (toolId) => state.selectTool(toolId),
    });
  }

  private createToolHost(
    root: HTMLElement,
    state: IWorkspaceState,
    platform: IPlatformBridge,
  ): DesktopToolHost {
    const hostRoot = root.querySelector<HTMLElement>('#desktop-tool-host-root');
    if (!hostRoot) throw new Error('Desktop tool host root is missing');
    return new DesktopToolHost({
      registry: createWorkspaceToolRegistry(),
      surfaces: new DomDesktopToolSurfaceManager(hostRoot),
      createContext: (signal, moduleId) => {
        const current = state.getState();
        return {
          project: current.currentProject,
          projectConfig: current.currentProjectConfig,
          platform,
          signal,
          reportActivity: (event) => state.addLog(event.severity, event.message, moduleId),
        };
      },
      onStateChange: (snapshot) => this.viewportView.renderHost(snapshot),
    });
  }

  public init(): void {
    this.keybindings.attach();
    this.unsubscribe = this.state.subscribe((state) => this.render(state));
  }

  public destroy(): void {
    void this.toolHost.dispose();
    this.viewportView.destroy();
    this.launcherView.destroy();
    this.keybindings.detach();
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = undefined;
    }
  }

  private render(state: Readonly<WorkspaceStateModel>): void {
    this.launcherView.render(state);
    this.projectBarView.render(state);
    this.sidebarView.render(state);
    this.viewportView.render(state);
    this.dockView.render(state);
    this.syncToolHost(state);
  }

  private syncToolHost(state: Readonly<WorkspaceStateModel>): void {
    if (state.workspaceMode === 'launcher') return;
    const toolChanged = state.activeToolId !== this.renderedToolId;
    const contextChanged = state.currentProject !== this.renderedProject
      || state.currentProjectConfig !== this.renderedProjectConfig;
    this.renderedToolId = state.activeToolId;
    this.renderedProject = state.currentProject;
    this.renderedProjectConfig = state.currentProjectConfig;

    if (toolChanged) {
      if (this.toolHost.getSnapshot().activeModuleId === state.activeToolId) {
        this.toolHost.restoreActive();
      } else {
        void this.toolHost.open(state.activeToolId);
      }
      return;
    }
    if (contextChanged) void this.toolHost.updateContext();
  }
}
