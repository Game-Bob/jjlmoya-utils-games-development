import type { WorkspaceProjectConfig } from './types/WorkspaceProjectConfig';

export type PipelinePhaseId = 'assets' | 'audio' | 'logic' | 'publishing';

export type EngineType = 'godot' | 'unity' | 'defold' | 'raylib' | 'custom';

export type LogSeverity = 'info' | 'warn' | 'error' | 'success';

export interface WorkspaceToolItem {
  id: string;
  name: string;
  phaseId: PipelinePhaseId;
  description: string;
  routePath: string;
}

export interface PipelinePhase {
  id: PipelinePhaseId;
  title: string;
  subtitle: string;
  tools: WorkspaceToolItem[];
}

export interface ProjectSummary {
  name: string;
  path: string;
  engine: EngineType;
  lastSyncedAt: number;
}

export interface WorkspaceLogEntry {
  id: string;
  timestamp: number;
  severity: LogSeverity;
  sourceToolId?: string | undefined;
  message: string;
}

export interface WorkspaceStateModel {
  currentProject: ProjectSummary | null;
  currentProjectConfig: WorkspaceProjectConfig | null;
  activePhaseId: PipelinePhaseId;
  activeToolId: string;
  logs: WorkspaceLogEntry[];
  isDockExpanded: boolean;
  activeLogFilter: 'all' | LogSeverity;
  isRealtimeSyncEnabled: boolean;
}

export type WorkspaceStateListener = (state: Readonly<WorkspaceStateModel>) => void;
