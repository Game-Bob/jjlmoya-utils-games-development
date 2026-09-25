import type { IWorkspaceState } from '../contracts/IWorkspaceState';
import { PIPELINE_PHASES } from '../pipelinePhases';
import type { WorkspaceProjectConfig } from '../types/WorkspaceProjectConfig';
import type {
  LogSeverity,
  PipelinePhaseId,
  ProjectSummary,
  WorkspaceLogEntry,
  WorkspaceStateListener,
  WorkspaceStateModel,
} from '../types';

const DEFAULT_STATE: WorkspaceStateModel = {
  workspaceMode: 'launcher',
  currentProject: null,
  currentProjectConfig: null,
  activePhaseId: PIPELINE_PHASES[0]!.id,
  activeToolId: PIPELINE_PHASES[0]!.tools[0]!.id,
  logs: [],
  isDockExpanded: false,
  activeLogFilter: 'all',
  isRealtimeSyncEnabled: false,
};

export class WorkspaceStateManager implements IWorkspaceState {
  private static readonly MAX_LOGS = 500;

  private state: WorkspaceStateModel;
  private readonly listeners: Set<WorkspaceStateListener> = new Set();
  private logCounter = 0;

  constructor(initialState?: Partial<WorkspaceStateModel>) {
    this.state = initialState ? { ...DEFAULT_STATE, ...initialState } : { ...DEFAULT_STATE };
  }

  public getState(): Readonly<WorkspaceStateModel> {
    return this.state;
  }

  public subscribe(listener: WorkspaceStateListener): () => void {
    this.listeners.add(listener);
    listener(this.state);
    return () => {
      this.listeners.delete(listener);
    };
  }

  public setProject(project: ProjectSummary | null): void {
    this.updateState({
      currentProject: project,
      workspaceMode: project ? 'project' : 'launcher',
    });
  }

  public activateProject(project: ProjectSummary, config: WorkspaceProjectConfig): void {
    this.updateState({
      currentProject: project,
      currentProjectConfig: config,
      workspaceMode: 'project',
    });
  }

  public enterLabs(): void {
    if (this.state.currentProject || this.state.workspaceMode === 'labs') return;
    this.updateState({ workspaceMode: 'labs' });
  }

  public setProjectConfig(config: WorkspaceProjectConfig | null): void {
    this.updateState({ currentProjectConfig: config });
  }

  public selectPhase(phaseId: PipelinePhaseId): void {
    if (this.state.activePhaseId === phaseId) {
      return;
    }

    const phase = PIPELINE_PHASES.find((p) => p.id === phaseId);
    if (!phase || phase.tools.length === 0) {
      return;
    }

    const currentToolInPhase = phase.tools.some((t) => t.id === this.state.activeToolId);
    const nextToolId = currentToolInPhase ? this.state.activeToolId : (phase.tools[0]?.id ?? this.state.activeToolId);

    this.updateState({
      activePhaseId: phaseId,
      activeToolId: nextToolId,
    });
  }

  public selectTool(toolId: string): void {
    if (this.state.activeToolId === toolId) {
      return;
    }

    for (const phase of PIPELINE_PHASES) {
      const toolMatch = phase.tools.find((t) => t.id === toolId);
      if (toolMatch) {
        this.updateState({
          activePhaseId: phase.id,
          activeToolId: toolId,
        });
        return;
      }
    }
  }

  public addLog(severity: LogSeverity, message: string, sourceToolId?: string): void {
    this.logCounter += 1;
    const entry: WorkspaceLogEntry = {
      id: `log-${Date.now()}-${this.logCounter}`,
      timestamp: Date.now(),
      severity,
      message,
      sourceToolId,
    };

    const nextLogs = [...this.state.logs, entry];
    if (nextLogs.length > WorkspaceStateManager.MAX_LOGS) {
      nextLogs.splice(0, nextLogs.length - WorkspaceStateManager.MAX_LOGS);
    }

    this.updateState({ logs: nextLogs });
  }

  public clearLogs(): void {
    if (this.state.logs.length === 0) {
      return;
    }
    this.updateState({ logs: [] });
  }

  public toggleDock(): void {
    this.updateState({ isDockExpanded: !this.state.isDockExpanded });
  }

  public setDockExpanded(expanded: boolean): void {
    if (this.state.isDockExpanded === expanded) {
      return;
    }
    this.updateState({ isDockExpanded: expanded });
  }

  public setLogFilter(filter: 'all' | LogSeverity): void {
    if (this.state.activeLogFilter === filter) {
      return;
    }
    this.updateState({ activeLogFilter: filter });
  }

  public setRealtimeSyncEnabled(enabled: boolean): void {
    if (this.state.isRealtimeSyncEnabled === enabled) {
      return;
    }
    this.updateState({ isRealtimeSyncEnabled: enabled });
  }

  private updateState(partial: Partial<WorkspaceStateModel>): void {
    this.state = {
      ...this.state,
      ...partial,
    };
    this.notify();
  }

  private notify(): void {
    for (const listener of this.listeners) {
      listener(this.state);
    }
  }
}
