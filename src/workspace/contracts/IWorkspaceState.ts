import type {
  LogSeverity,
  PipelinePhaseId,
  ProjectSummary,
  WorkspaceStateListener,
  WorkspaceStateModel,
} from '../types';

export interface IWorkspaceState {
  getState(): Readonly<WorkspaceStateModel>;
  subscribe(listener: WorkspaceStateListener): () => void;
  setProject(project: ProjectSummary | null): void;
  selectPhase(phaseId: PipelinePhaseId): void;
  selectTool(toolId: string): void;
  addLog(severity: LogSeverity, message: string, sourceToolId?: string): void;
  clearLogs(): void;
  toggleDock(): void;
  setDockExpanded(expanded: boolean): void;
  setLogFilter(filter: 'all' | LogSeverity): void;
}
