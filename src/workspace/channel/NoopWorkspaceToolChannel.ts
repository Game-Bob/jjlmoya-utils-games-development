import type { WatchEvent } from '../../platform/contracts/IDirectoryWatcher';
import type { ProjectSummary } from '../types';
import type { WorkspaceProjectConfig } from '../types/WorkspaceProjectConfig';
import type { IWorkspaceToolChannel } from './IWorkspaceToolChannel';

export class NoopWorkspaceToolChannel implements IWorkspaceToolChannel {
  sendContext(_project: ProjectSummary | null, _config: WorkspaceProjectConfig | null, _activeToolId: string): void {}
  sendFileChange(_rootPath: string, _event: WatchEvent): void {}
  sendSync(): void {}
}
