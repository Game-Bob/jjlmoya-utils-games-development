import type { IPlatformBridge } from '../../platform/contracts/IPlatformBridge';
import type { ProjectMetadata } from '../../platform/contracts/IProjectStorageService';
import type { IWorkspaceProjectActions } from '../contracts/IWorkspaceProjectActions';
import type { IWorkspaceState } from '../contracts/IWorkspaceState';
import type { EngineType, ProjectSummary } from '../types';
import type {
  WorkspaceProjectConfig,
  WorkspaceTargetEngine,
} from '../types/WorkspaceProjectConfig';

type Clock = () => number;

const ENGINE_MAP: Record<WorkspaceTargetEngine, EngineType> = {
  godot4: 'godot',
  unity: 'unity',
  defold: 'defold',
  generic: 'custom',
};

function extractProjectName(projectPath: string): string {
  const normalized = projectPath.replace(/[\\/]+$/, '');
  const segments = normalized.split(/[\\/]/);
  return segments.at(-1) || 'Untitled Project';
}

function resolveEngine(targetEngine?: WorkspaceTargetEngine): EngineType {
  return targetEngine ? ENGINE_MAP[targetEngine] : 'custom';
}

function resolveTargetEngine(config?: WorkspaceProjectConfig | null): WorkspaceTargetEngine {
  return config?.targetEngine ?? 'generic';
}

export class WorkspaceProjectController implements IWorkspaceProjectActions {
  constructor(
    private readonly state: IWorkspaceState,
    private readonly platform: IPlatformBridge,
    private readonly clock: Clock = Date.now,
  ) {}

  public async openProject(): Promise<void> {
    try {
      const projectPath = await this.platform.dialogService.openDirectory({
        title: 'Open Game Project',
      });
      if (!projectPath) {
        return;
      }

      const config = await this.platform.projectStorage.loadProjectConfig<WorkspaceProjectConfig>(projectPath);
      const project = this.createProjectSummary(projectPath, config);
      const recentProject = this.createProjectMetadata(project, resolveTargetEngine(config));

      await this.platform.projectStorage.saveRecentProject(recentProject);
      this.state.setProject(project);
      this.state.addLog('success', `Project opened: ${project.name}`);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown platform error';
      this.state.addLog('error', `Unable to open project: ${message}`);
    }
  }

  public syncProject(): void {
    const currentState = this.state.getState();
    if (!currentState.currentProject) {
      this.state.addLog('warn', 'Open a project before synchronizing the pipeline');
      return;
    }
    this.state.addLog(
      'info',
      `Synchronizing pipeline assets for tool: ${currentState.activeToolId}`,
      currentState.activeToolId,
    );
  }

  private createProjectSummary(
    projectPath: string,
    config: WorkspaceProjectConfig | null,
  ): ProjectSummary {
    return {
      name: config?.name?.trim() || extractProjectName(projectPath),
      path: projectPath,
      engine: resolveEngine(config?.targetEngine),
      lastSyncedAt: this.clock(),
    };
  }

  private createProjectMetadata(
    project: ProjectSummary,
    targetEngine: WorkspaceTargetEngine,
  ): ProjectMetadata {
    return {
      id: project.path,
      name: project.name,
      path: project.path,
      lastOpened: project.lastSyncedAt,
      targetEngine,
    };
  }
}
