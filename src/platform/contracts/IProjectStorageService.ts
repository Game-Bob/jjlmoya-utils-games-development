export interface ProjectMetadata {
    id: string;
    name: string;
    path: string;
    lastOpened: number;
    targetEngine?: 'godot4' | 'unity' | 'defold' | 'generic';
}

export interface IProjectStorageService {
    saveRecentProject(metadata: ProjectMetadata): Promise<void>;
    getRecentProjects(): Promise<ProjectMetadata[]>;
    clearRecentProjects(): Promise<void>;
    loadProjectConfig<T>(projectPath: string): Promise<T | null>;
    saveProjectConfig<T>(projectPath: string, config: T): Promise<void>;
}
