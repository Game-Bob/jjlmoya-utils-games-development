import type { WatchEvent } from '../../platform/contracts/IDirectoryWatcher';
import type { ProjectSummary } from '../types';
import type { WorkspaceProjectConfig } from '../types/WorkspaceProjectConfig';

export type WorkspaceToToolMessage =
  | {
      type: 'workspace:context';
      project: ProjectSummary | null;
      config: WorkspaceProjectConfig | null;
      activeToolId: string;
    }
  | {
      type: 'workspace:file-change';
      rootPath: string;
      event: WatchEvent;
    }
  | {
      type: 'workspace:sync';
    };

export type ToolToWorkspaceMessage =
  | {
      type: 'tool:ready';
      toolId: string;
    }
  | {
      type: 'tool:log';
      toolId: string;
      severity: 'info' | 'warn' | 'error' | 'success';
      message: string;
    }
  | {
      type: 'tool:export-complete';
      toolId: string;
      outputPaths: string[];
    };

export function isToolToWorkspaceMessage(value: unknown): value is ToolToWorkspaceMessage {
  if (!value || typeof value !== 'object') return false;
  const candidate = value as Partial<ToolToWorkspaceMessage>;
  return isReadyMessage(candidate) || isLogMessage(candidate) || isExportMessage(candidate);
}

function isReadyMessage(candidate: Partial<ToolToWorkspaceMessage>): boolean {
  return candidate.type === 'tool:ready' && typeof candidate.toolId === 'string';
}

function isLogMessage(candidate: Partial<ToolToWorkspaceMessage>): boolean {
  return candidate.type === 'tool:log'
    && typeof candidate.toolId === 'string'
    && typeof candidate.message === 'string'
    && ['info', 'warn', 'error', 'success'].includes(String(candidate.severity));
}

function isExportMessage(candidate: Partial<ToolToWorkspaceMessage>): boolean {
  return candidate.type === 'tool:export-complete'
    && typeof candidate.toolId === 'string'
    && Array.isArray(candidate.outputPaths)
    && candidate.outputPaths.every((path) => typeof path === 'string');
}

export function isWorkspaceToToolMessage(value: unknown): value is WorkspaceToToolMessage {
  if (!value || typeof value !== 'object') {
    return false;
  }
  const candidate = value as Partial<WorkspaceToToolMessage>;
  return candidate.type === 'workspace:context'
    || candidate.type === 'workspace:file-change'
    || candidate.type === 'workspace:sync';
}
