import type { IPlatformBridge } from '../../platform/contracts/IPlatformBridge';
import type { ProjectMetadata } from '../../platform/contracts/IProjectStorageService';
import type { IWorkspaceProjectActions } from '../contracts/IWorkspaceProjectActions';
import type { IWorkspaceState } from '../contracts/IWorkspaceState';
import type { EngineType, ProjectSummary } from '../types';
import type {
  WorkspaceProjectConfig,
  WorkspaceTargetEngine,
} from '../types/WorkspaceProjectConfig';
import { ProjectConfigValidator } from '../project/ProjectConfigValidator';
import { RecentProjectsManager } from '../project/RecentProjectsManager';
import type { StopWatching } from '../../platform/contracts/IDirectoryWatcher';
import type { IWorkspaceToolChannel } from '../channel/IWorkspaceToolChannel';
import { NoopWorkspaceToolChannel } from '../channel/NoopWorkspaceToolChannel';

type Clock = () => number;

export interface WorkspaceProjectControllerDependencies {
  clock?: Clock;
  validator?: ProjectConfigValidator;
  toolChannel?: IWorkspaceToolChannel;
  recentProjects?: RecentProjectsManager;
}

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

export class WorkspaceProjectController implements IWorkspaceProjectActions {
  private currentConfig: WorkspaceProjectConfig | null = null;
  private stopWatching: StopWatching | null = null;
  private readonly clock: Clock;
  private readonly validator: ProjectConfigValidator;
  private readonly toolChannel: IWorkspaceToolChannel;
  private readonly recentProjects: RecentProjectsManager;

  constructor(
    private readonly state: IWorkspaceState,
    private readonly platform: IPlatformBridge,
    dependencies: WorkspaceProjectControllerDependencies = {},
  ) {
    this.clock = dependencies.clock ?? Date.now;
    this.validator = dependencies.validator ?? new ProjectConfigValidator();
    this.toolChannel = dependencies.toolChannel ?? new NoopWorkspaceToolChannel();
    this.recentProjects = dependencies.recentProjects
      ?? new RecentProjectsManager(platform.projectStorage);
  }

  public async newProject(): Promise<void> {
    await this.selectAndLoadProject('Choose New Game Project Directory', true);
  }

  public async openProject(): Promise<void> {
    await this.selectAndLoadProject('Open Game Project', false);
  }

  public async saveProjectAs(): Promise<void> {
    const currentProject = this.state.getState().currentProject;
    if (!currentProject) {
      this.state.addLog('warn', 'Open a project before using Save As');
      return;
    }
    try {
      const projectPath = await this.platform.projectAccess.selectRoot({
        title: 'Save Project As',
      });
      if (!projectPath) {
        return;
      }
      const config: WorkspaceProjectConfig = this.currentConfig
        ? {
            ...this.currentConfig,
            name: currentProject.name,
            targetEngine: this.toTargetEngine(currentProject.engine),
            pipeline: { ...this.currentConfig.pipeline },
          }
        : {
            ...this.validator.createDefault(currentProject.name),
            targetEngine: this.toTargetEngine(currentProject.engine),
          };
      await this.platform.projectStorage.saveProjectConfig(projectPath, config);
      await this.activateProject(projectPath, config, 'Project saved as');
    } catch (error) {
      this.reportError('Unable to save project', error);
    }
  }

  public async syncProject(): Promise<void> {
    const currentState = this.state.getState();
    if (!currentState.currentProject) {
      this.state.addLog('warn', 'Open a project before synchronizing the pipeline');
      return;
    }
    try {
      if (this.stopWatching) {
        await this.pauseSynchronization();
        return;
      }
      await this.startSynchronization(
        currentState.currentProject.path,
        currentState.activeToolId,
      );
    } catch (error) {
      this.state.setRealtimeSyncEnabled(false);
      this.reportError('Unable to synchronize project', error);
    }
  }

  private async pauseSynchronization(): Promise<void> {
    await this.stopWatching?.();
    this.stopWatching = null;
    this.state.setRealtimeSyncEnabled(false);
    this.state.addLog('info', 'Real-time synchronization paused');
  }

  private async startSynchronization(projectPath: string, activeToolId: string): Promise<void> {
    const inputDirectory = this.currentConfig?.pipeline[activeToolId]?.inputDirectory;
    const watchPath = this.resolveProjectPath(projectPath, inputDirectory);
    if (inputDirectory) {
      await this.platform.fileWriter.createDirectory(watchPath);
    }
    this.stopWatching = await this.platform.directoryWatcher.watch(
      watchPath,
      (event) => this.handleFileChange(watchPath, activeToolId, event),
    );
    this.state.setRealtimeSyncEnabled(true);
    this.toolChannel.sendSync();
    this.state.addLog(
      'success',
      `Real-time synchronization enabled for ${watchPath}`,
      activeToolId,
    );
  }

  private handleFileChange(
    watchPath: string,
    activeToolId: string,
    event: Parameters<IWorkspaceToolChannel['sendFileChange']>[1],
  ): void {
    if (event.type === 'error') {
      this.state.addLog(
        'error',
        `Directory watcher failed: ${event.message ?? 'Unknown native watcher error'}`,
        activeToolId,
      );
      return;
    }
    this.toolChannel.sendFileChange(watchPath, event);
    this.state.addLog('info', `Source ${event.type}: ${event.path}`, activeToolId);
  }

  private async selectAndLoadProject(title: string, persistDefault: boolean): Promise<void> {
    try {
      const projectPath = await this.platform.projectAccess.selectRoot({ title });
      if (!projectPath) {
        return;
      }
      const rawConfig = await this.platform.projectStorage.loadProjectConfig<unknown>(projectPath);
      const config = this.validator.validate(rawConfig, extractProjectName(projectPath));
      if (persistDefault || rawConfig === null) {
        await this.platform.projectStorage.saveProjectConfig(projectPath, config);
      }
      await this.activateProject(projectPath, config, persistDefault ? 'Project created' : 'Project opened');
    } catch (error) {
      this.reportError('Unable to open project', error);
    }
  }

  private async activateProject(
    projectPath: string,
    config: WorkspaceProjectConfig,
    successMessage: string,
  ): Promise<void> {
    if (this.stopWatching) {
      await this.stopWatching();
      this.stopWatching = null;
      this.state.setRealtimeSyncEnabled(false);
    }
    this.currentConfig = config;
    const project = this.createProjectSummary(projectPath, config);
    const recentProject = this.createProjectMetadata(project, config.targetEngine);
    await this.recentProjects.record(recentProject);
    this.state.activateProject(project, config);
    this.state.addLog('success', `${successMessage}: ${project.name}`);
  }

  private resolveProjectPath(projectPath: string, configuredPath?: string): string {
    if (!configuredPath) {
      return projectPath;
    }
    if (/^(?:[A-Za-z]:[\\/]|\/)/.test(configuredPath)) {
      return configuredPath;
    }
    const separator = projectPath.includes('\\') ? '\\' : '/';
    return `${projectPath.replace(/[\\/]+$/, '')}${separator}${configuredPath.replace(/^[\\/]+/, '')}`;
  }

  private reportError(prefix: string, error: unknown): void {
    const message = error instanceof Error ? error.message : 'Unknown platform error';
    this.state.addLog('error', `${prefix}: ${message}`);
  }

  private toTargetEngine(engine: EngineType): WorkspaceTargetEngine {
    if (engine === 'godot') return 'godot4';
    if (engine === 'unity') return 'unity';
    if (engine === 'defold') return 'defold';
    return 'generic';
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
