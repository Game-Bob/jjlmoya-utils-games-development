import type { WatchEvent } from '../../platform/contracts/IDirectoryWatcher';
import type { ProjectSummary } from '../types';
import type { WorkspaceProjectConfig } from '../types/WorkspaceProjectConfig';

export interface IWorkspaceToolChannel {
  sendContext(project: ProjectSummary | null, config: WorkspaceProjectConfig | null, activeToolId: string): void;
  sendFileChange(rootPath: string, event: WatchEvent): void;
  sendSync(): void;
}
