import { describe, expect, it, vi } from 'vitest';
import type { IProjectStorageService, ProjectMetadata } from '../../platform/contracts/IProjectStorageService';
import { RecentProjectsManager } from './RecentProjectsManager';

function createStorage(projects: ProjectMetadata[]): IProjectStorageService {
  return {
    saveRecentProject: vi.fn(async () => undefined),
    getRecentProjects: async () => projects,
    clearRecentProjects: vi.fn(async () => undefined),
    loadProjectConfig: async () => null,
    saveProjectConfig: async () => undefined,
  };
}

describe('RecentProjectsManager', () => {
  it('filters invalid entries, sorts newest first and limits the result', async () => {
    const valid = Array.from({ length: 18 }, (_, index): ProjectMetadata => ({
      id: `project-${index}`,
      name: `Project ${index}`,
      path: `/projects/${index}`,
      lastOpened: index,
      targetEngine: 'generic',
    }));
    const invalid = { id: '', name: '', path: '', lastOpened: Number.NaN } as ProjectMetadata;
    const manager = new RecentProjectsManager(createStorage([invalid, ...valid]));
    const result = await manager.list();
    expect(result).toHaveLength(15);
    expect(result[0]?.id).toBe('project-17');
    expect(result.at(-1)?.id).toBe('project-3');
  });

  it('rejects invalid metadata before persistence', async () => {
    const storage = createStorage([]);
    const manager = new RecentProjectsManager(storage);
    await expect(manager.record({ id: '', name: '', path: '', lastOpened: 0 })).rejects.toThrow('invalid');
    expect(storage.saveRecentProject).not.toHaveBeenCalled();
  });
});
