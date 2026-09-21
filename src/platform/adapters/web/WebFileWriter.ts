import type { IFileWriter } from '../../contracts/IFileWriter';

export class WebFileWriter implements IFileWriter {
    private readonly inMemoryStorage: Map<string, Uint8Array>;
    private readonly directories: Set<string>;

    constructor(storage?: Map<string, Uint8Array>) {
        this.inMemoryStorage = storage ?? new Map<string, Uint8Array>();
        this.directories = new Set<string>();
    }

    async writeText(path: string, content: string): Promise<void> {
        const encoder = new TextEncoder();
        const data = encoder.encode(content);
        this.inMemoryStorage.set(path, data);
        if (typeof document !== 'undefined' && typeof window !== 'undefined' && !path.startsWith('virtual:')) {
            const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
            this.triggerBrowserDownload(path, blob);
        }
    }

    async writeBinary(path: string, data: Uint8Array): Promise<void> {
        this.inMemoryStorage.set(path, data);
        if (typeof document !== 'undefined' && typeof window !== 'undefined' && !path.startsWith('virtual:')) {
            const blob = new Blob([data as unknown as BlobPart], { type: 'application/octet-stream' });
            this.triggerBrowserDownload(path, blob);
        }
    }

    async createDirectory(path: string): Promise<void> {
        this.directories.add(path);
    }

    getStoredData(path: string): Uint8Array | undefined {
        return this.inMemoryStorage.get(path);
    }

    private triggerBrowserDownload(filename: string, blob: Blob): void {
        const cleanName = filename.split(/[/\\]/).pop() ?? filename;
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = cleanName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(() => URL.revokeObjectURL(link.href), 1000);
    }
}
