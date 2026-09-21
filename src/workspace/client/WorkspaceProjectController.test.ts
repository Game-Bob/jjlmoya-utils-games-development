import { describe, expect, it, vi } from 'vitest';
import { WebPlatformBridge } from '../../platform/adapters/web/WebPlatformBridge';
import type { IDialogService } from '../../platform/contracts/IDialogService';
import type {
  IProjectStorageService,
  ProjectMetadata,
} from '../../platform/contracts/IProjectStorageService';
import { WorkspaceStateManager } from '../state/WorkspaceStateManager';
import type { WorkspaceProjectConfig } from '../types/WorkspaceProjectConfig';
import { WorkspaceProjectController } from './WorkspaceProjectController';

function createDialogService(projectPath: string | null): IDialogService {
  return {
    openFile: async () => null,
    openFiles: async () => [],
    openDirectory: async () => projectPath,
    saveFile: async () => null,
  };
}

function createProjectStorage(
  config: WorkspaceProjectConfig | null,
  saveRecentProject: (metadata: ProjectMetadata) => Promise<void>,
): IProjectStorageService {
  return {
    saveRecentProject,
    getRecentProjects: async () => [],
    clearRecentProjects: async () => undefined,
    loadProjectConfig: async <T>() => config as T | null,
    saveProjectConfig: async () => undefined,
  };
}

describe('WorkspaceProjectController', () => {
  it('opens a selected project, loads its config and stores it as recent', async () => {
    const state = new WorkspaceStateManager();
    const saveRecentProject = vi.fn(async () => undefined);
    const platform = new WebPlatformBridge({
      dialogService: createDialogService('D:\\games\\starfall'),
      projectStorage: createProjectStorage(
        { name: 'Starfall', targetEngine: 'godot4' },
        saveRecentProject,
      ),
    });
    const controller = new WorkspaceProjectController(state, platform, () => 1234);

    await controller.openProject();

    expect(state.getState().currentProject).toEqual({
      name: 'Starfall',
      path: 'D:\\games\\starfall',
      engine: 'godot',
      lastSyncedAt: 1234,
    });
    expect(saveRecentProject).toHaveBeenCalledWith({
      id: 'D:\\games\\starfall',
      name: 'Starfall',
      path: 'D:\\games\\starfall',
      lastOpened: 1234,
      targetEngine: 'godot4',
    });
    expect(state.getState().logs.at(-1)?.severity).toBe('success');
  });

  it('uses the directory name and generic engine when no config exists', async () => {
    const state = new WorkspaceStateManager();
    const platform = new WebPlatformBridge({
      dialogService: createDialogService('/games/untitled-project/'),
      projectStorage: createProjectStorage(null, async () => undefined),
    });
    const controller = new WorkspaceProjectController(state, platform, () => 2000);

    await controller.openProject();

    expect(state.getState().currentProject).toEqual({
      name: 'untitled-project',
      path: '/games/untitled-project/',
      engine: 'custom',
      lastSyncedAt: 2000,
    });
  });

  it('leaves state unchanged when selection is canceled', async () => {
    const state = new WorkspaceStateManager();
    const saveRecentProject = vi.fn(async () => undefined);
    const platform = new WebPlatformBridge({
      dialogService: createDialogService(null),
      projectStorage: createProjectStorage(null, saveRecentProject),
    });
    const controller = new WorkspaceProjectController(state, platform);

    await controller.openProject();

    expect(state.getState().currentProject).toBeNull();
    expect(state.getState().logs).toEqual([]);
    expect(saveRecentProject).not.toHaveBeenCalled();
  });

  it('reports platform failures without changing the current project', async () => {
    const state = new WorkspaceStateManager();
    const dialogService = createDialogService('/games/broken');
    dialogService.openDirectory = async () => {
      throw new Error('Dialog permission denied');
    };
    const platform = new WebPlatformBridge({
      dialogService,
      projectStorage: createProjectStorage(null, async () => undefined),
    });
    const controller = new WorkspaceProjectController(state, platform);

    await controller.openProject();

    expect(state.getState().currentProject).toBeNull();
    expect(state.getState().logs.at(-1)).toEqual(
      expect.objectContaining({
        severity: 'error',
        message: 'Unable to open project: Dialog permission denied',
      }),
    );
  });

  it('requires an open project before synchronization', () => {
    const state = new WorkspaceStateManager();
    const platform = new WebPlatformBridge();
    const controller = new WorkspaceProjectController(state, platform);

    controller.syncProject();

    expect(state.getState().logs.at(-1)).toEqual(
      expect.objectContaining({
        severity: 'warn',
        message: 'Open a project before synchronizing the pipeline',
      }),
    );
  });
});
