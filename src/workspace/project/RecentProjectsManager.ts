import type {
  IProjectStorageService,
  ProjectMetadata,
} from '../../platform/contracts/IProjectStorageService';

const TARGET_ENGINES = new Set(['godot4', 'unity', 'defold', 'generic']);

export class RecentProjectsManager {
  constructor(private readonly storage: IProjectStorageService) {}

  public async record(project: ProjectMetadata): Promise<void> {
    this.assertValid(project);
    await this.storage.saveRecentProject(project);
  }

  public async list(): Promise<ProjectMetadata[]> {
    const projects = await this.storage.getRecentProjects();
    return projects
      .filter((project) => this.isValid(project))
      .sort((left, right) => right.lastOpened - left.lastOpened)
      .slice(0, 15);
  }

  public async clear(): Promise<void> {
    await this.storage.clearRecentProjects();
  }

  private assertValid(project: ProjectMetadata): void {
    if (!this.isValid(project)) {
      throw new Error('Recent project metadata is invalid');
    }
  }

  private isValid(project: ProjectMetadata): boolean {
    const requiredText = [project.id, project.name, project.path];
    const hasRequiredText = requiredText.every(
      (value) => typeof value === 'string' && value.length > 0,
    );
    const hasValidEngine = project.targetEngine === undefined
      || TARGET_ENGINES.has(project.targetEngine);
    return hasRequiredText && Number.isFinite(project.lastOpened) && hasValidEngine;
  }
}
