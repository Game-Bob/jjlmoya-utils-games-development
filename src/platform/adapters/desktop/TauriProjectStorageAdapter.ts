import type {
    IProjectStorageService,
    ProjectMetadata
} from '../../contracts/IProjectStorageService';
import type { IFileReader } from '../../contracts/IFileReader';
import type { IFileWriter } from '../../contracts/IFileWriter';
import { PLATFORM_COMMANDS } from '../../commands';
import { PlatformError } from '../../errors/PlatformError';
import { defaultInvoker, type CommandInvoker } from './invoker';

export class TauriProjectStorageAdapter implements IProjectStorageService {
    private readonly fileReader: IFileReader;
    private readonly fileWriter: IFileWriter;
    private readonly invoker: CommandInvoker;

    constructor(fileReader: IFileReader, fileWriter: IFileWriter, invoker: CommandInvoker = defaultInvoker) {
        this.fileReader = fileReader;
        this.fileWriter = fileWriter;
        this.invoker = invoker;
    }

    async saveRecentProject(metadata: ProjectMetadata): Promise<void> {
        const recents = await this.getRecentProjects();
        const filtered = recents.filter((p) => p.id !== metadata.id && p.path !== metadata.path);
        filtered.unshift(metadata);
        const maxProjects = 15;
        const trimmed = filtered.slice(0, maxProjects);
        await this.invoker<void>(PLATFORM_COMMANDS.writeRecentProjects, {
            content: JSON.stringify(trimmed, null, 2)
        });
    }

    async getRecentProjects(): Promise<ProjectMetadata[]> {
        const raw = await this.invoker<string>(PLATFORM_COMMANDS.readRecentProjects);
        const parsed = this.parseJson(raw, 'Recent project storage');
        return Array.isArray(parsed) ? parsed as ProjectMetadata[] : [];
    }

    async clearRecentProjects(): Promise<void> {
        await this.invoker<void>(PLATFORM_COMMANDS.clearRecentProjects);
    }

    async loadProjectConfig<T>(projectPath: string): Promise<T | null> {
        const configPath = this.resolveConfigPath(projectPath);
        const exists = await this.fileReader.exists(configPath);
        if (!exists) {
            return null;
        }
        const raw = await this.fileReader.readText(configPath);
        return this.parseJson(raw, 'Project configuration') as T;
    }

    async saveProjectConfig<T>(projectPath: string, config: T): Promise<void> {
        const configPath = this.resolveConfigPath(projectPath);
        await this.fileWriter.writeText(configPath, JSON.stringify(config, null, 2));
    }

    private resolveConfigPath(projectPath: string): string {
        const clean = projectPath.replace(/[/\\]+$/, '');
        return `${clean}/.gbtoolkit.json`;
    }

    private parseJson(source: string, label: string): unknown {
        try {
            return JSON.parse(source) as unknown;
        } catch (error) {
            const detail = error instanceof Error ? error.message : String(error);
            throw new PlatformError('IO_ERROR', `${label} contains invalid JSON: ${detail}`);
        }
    }
}
