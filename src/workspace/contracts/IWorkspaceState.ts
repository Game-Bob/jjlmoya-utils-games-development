import type {
  LogSeverity,
  PipelinePhaseId,
  ProjectSummary,
  WorkspaceStateListener,
  WorkspaceStateModel,
} from '../types';
import type { WorkspaceProjectConfig } from '../types/WorkspaceProjectConfig';

export interface IWorkspaceState {
  getState(): Readonly<WorkspaceStateModel>;
  subscribe(listener: WorkspaceStateListener): () => void;
  activateProject(project: ProjectSummary, config: WorkspaceProjectConfig): void;
  enterLabs(): void;
  setProject(project: ProjectSummary | null): void;
  setProjectConfig(config: WorkspaceProjectConfig | null): void;
  selectPhase(phaseId: PipelinePhaseId): void;
  selectTool(toolId: string): void;
  addLog(severity: LogSeverity, message: string, sourceToolId?: string): void;
  clearLogs(): void;
  toggleDock(): void;
  setDockExpanded(expanded: boolean): void;
  setLogFilter(filter: 'all' | LogSeverity): void;
  setRealtimeSyncEnabled(enabled: boolean): void;
}
