import type {
    IProjectStorageService,
    ProjectMetadata
} from '../../contracts/IProjectStorageService';
import type { IFileReader } from '../../contracts/IFileReader';
import type { IFileWriter } from '../../contracts/IFileWriter';

export class TauriProjectStorageAdapter implements IProjectStorageService {
    private readonly fileReader: IFileReader;
    private readonly fileWriter: IFileWriter;
    private readonly recentsFilePath: string;

    constructor(fileReader: IFileReader, fileWriter: IFileWriter, recentsPath = 'gamebob_recents.json') {
        this.fileReader = fileReader;
        this.fileWriter = fileWriter;
        this.recentsFilePath = recentsPath;
    }

    async saveRecentProject(metadata: ProjectMetadata): Promise<void> {
        const recents = await this.getRecentProjects();
        const filtered = recents.filter((p) => p.id !== metadata.id && p.path !== metadata.path);
        filtered.unshift(metadata);
        const maxProjects = 15;
        const trimmed = filtered.slice(0, maxProjects);
        await this.fileWriter.writeText(this.recentsFilePath, JSON.stringify(trimmed, null, 2));
    }

    async getRecentProjects(): Promise<ProjectMetadata[]> {
        const exists = await this.fileReader.exists(this.recentsFilePath);
        if (!exists) {
            return [];
        }
        try {
            const raw = await this.fileReader.readText(this.recentsFilePath);
            const parsed = JSON.parse(raw);
            return Array.isArray(parsed) ? parsed : [];
        } catch {
            return [];
        }
    }

    async clearRecentProjects(): Promise<void> {
        await this.fileWriter.writeText(this.recentsFilePath, '[]');
    }

    async loadProjectConfig<T>(projectPath: string): Promise<T | null> {
        const configPath = this.resolveConfigPath(projectPath);
        const exists = await this.fileReader.exists(configPath);
        if (!exists) {
            return null;
        }
        try {
            const raw = await this.fileReader.readText(configPath);
            return JSON.parse(raw) as T;
        } catch {
            return null;
        }
    }

    async saveProjectConfig<T>(projectPath: string, config: T): Promise<void> {
        const configPath = this.resolveConfigPath(projectPath);
        await this.fileWriter.writeText(configPath, JSON.stringify(config, null, 2));
    }

    private resolveConfigPath(projectPath: string): string {
        const clean = projectPath.replace(/[/\\]+$/, '');
        return `${clean}/.gbtoolkit.json`;
    }
}
