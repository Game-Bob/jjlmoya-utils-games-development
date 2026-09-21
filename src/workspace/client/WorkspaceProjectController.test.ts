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
import type { IWorkspaceToolChannel } from '../channel/IWorkspaceToolChannel';
import type { WatchEvent } from '../../platform/contracts/IDirectoryWatcher';

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
        { version: 1, name: 'Starfall', targetEngine: 'godot4', pipeline: {} },
        saveRecentProject,
      ),
    });
    const controller = new WorkspaceProjectController(state, platform, { clock: () => 1234 });

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
    const controller = new WorkspaceProjectController(state, platform, { clock: () => 2000 });

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

  it('starts and pauses real-time synchronization with typed tool events', async () => {
    const state = new WorkspaceStateManager();
    const stopWatching = vi.fn(async () => undefined);
    const watch = vi.fn(async (_path: string, listener: (event: WatchEvent) => void) => {
      listener({ type: 'modified', path: 'hero.png', timestamp: 1 });
      return stopWatching;
    });
    const createDirectory = vi.fn(async () => undefined);
    const channel: IWorkspaceToolChannel = {
      sendContext: vi.fn(),
      sendFileChange: vi.fn(),
      sendSync: vi.fn(),
    };
    const config: WorkspaceProjectConfig = {
      version: 1,
      name: 'Realtime',
      targetEngine: 'generic',
      pipeline: {
        spriteSheetPacker: {
          inputDirectory: 'assets/sprites',
          outputDirectory: 'build/sprites',
        },
      },
    };
    const platform = new WebPlatformBridge({
      dialogService: createDialogService('D:\\games\\realtime'),
      projectStorage: createProjectStorage(config, async () => undefined),
      directoryWatcher: {
        watch,
        isWatching: () => true,
        stopAll: async () => undefined,
      },
      fileWriter: {
        writeText: async () => undefined,
        writeBinary: async () => undefined,
        createDirectory,
      },
    });
    const controller = new WorkspaceProjectController(state, platform, {
      clock: () => 5,
      toolChannel: channel,
    });

    await controller.openProject();
    await controller.syncProject();

    expect(createDirectory).toHaveBeenCalledWith('D:\\games\\realtime\\assets/sprites');
    expect(watch).toHaveBeenCalledOnce();
    expect(channel.sendFileChange).toHaveBeenCalledWith(
      'D:\\games\\realtime\\assets/sprites',
      expect.objectContaining({ path: 'hero.png' }),
    );
    expect(channel.sendSync).toHaveBeenCalledOnce();
    expect(state.getState().isRealtimeSyncEnabled).toBe(true);

    const watchListener = watch.mock.calls[0]?.[1];
    watchListener?.({
      type: 'error',
      path: '',
      timestamp: 2,
      message: 'Native watch handle stopped',
    });
    expect(state.getState().logs.at(-1)).toEqual(expect.objectContaining({
      severity: 'error',
      message: 'Directory watcher failed: Native watch handle stopped',
    }));

    await controller.syncProject();

    expect(stopWatching).toHaveBeenCalledOnce();
    expect(state.getState().isRealtimeSyncEnabled).toBe(false);
  });
});
