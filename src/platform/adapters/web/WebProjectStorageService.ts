import type {
    IProjectStorageService,
    ProjectMetadata
} from '../../contracts/IProjectStorageService';
import { PlatformError } from '../../errors/PlatformError';

export class WebProjectStorageService implements IProjectStorageService {
    private readonly storageKeyPrefix: string;
    private readonly inMemoryFallback: Map<string, string>;

    constructor(prefix = 'gamebob_project_') {
        this.storageKeyPrefix = prefix;
        this.inMemoryFallback = new Map<string, string>();
    }

    async saveRecentProject(metadata: ProjectMetadata): Promise<void> {
        const recents = await this.getRecentProjects();
        const filtered = recents.filter((p) => p.id !== metadata.id && p.path !== metadata.path);
        filtered.unshift(metadata);
        const maxProjects = 15;
        const trimmed = filtered.slice(0, maxProjects);
        this.setItem(`${this.storageKeyPrefix}recents`, JSON.stringify(trimmed));
    }

    async getRecentProjects(): Promise<ProjectMetadata[]> {
        const raw = this.getItem(`${this.storageKeyPrefix}recents`);
        if (!raw) {
            return [];
        }
        const parsed = this.parseJson(raw, 'Recent project storage');
        return Array.isArray(parsed) ? parsed as ProjectMetadata[] : [];
    }

    async clearRecentProjects(): Promise<void> {
        this.removeItem(`${this.storageKeyPrefix}recents`);
    }

    async loadProjectConfig<T>(projectPath: string): Promise<T | null> {
        const key = `${this.storageKeyPrefix}cfg_${encodeURIComponent(projectPath)}`;
        const raw = this.getItem(key);
        if (!raw) {
            return null;
        }
        return this.parseJson(raw, 'Project configuration') as T;
    }

    async saveProjectConfig<T>(projectPath: string, config: T): Promise<void> {
        const key = `${this.storageKeyPrefix}cfg_${encodeURIComponent(projectPath)}`;
        this.setItem(key, JSON.stringify(config));
    }

    private getItem(key: string): string | null {
        if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
            try {
                return window.localStorage.getItem(key);
            } catch {
                return this.inMemoryFallback.get(key) ?? null;
            }
        }
        return this.inMemoryFallback.get(key) ?? null;
    }

    private setItem(key: string, value: string): void {
        if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
            try {
                window.localStorage.setItem(key, value);
                return;
            } catch {
                this.inMemoryFallback.set(key, value);
                return;
            }
        }
        this.inMemoryFallback.set(key, value);
    }

    private removeItem(key: string): void {
        if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
            try {
                window.localStorage.removeItem(key);
                return;
            } catch {
                this.inMemoryFallback.delete(key);
                return;
            }
        }
        this.inMemoryFallback.delete(key);
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
