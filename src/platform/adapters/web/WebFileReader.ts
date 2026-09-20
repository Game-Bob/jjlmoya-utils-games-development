import type { IFileReader } from '../../contracts/IFileReader';

export class WebFileReader implements IFileReader {
    private readonly inMemoryCache: Map<string, Uint8Array>;

    constructor(initialCache?: Map<string, Uint8Array>) {
        this.inMemoryCache = initialCache ?? new Map<string, Uint8Array>();
    }

    async readText(path: string): Promise<string> {
        const cached = this.inMemoryCache.get(path);
        if (cached) {
            const decoder = new TextDecoder('utf-8');
            return decoder.decode(cached);
        }
        if (typeof window !== 'undefined' && (path.startsWith('blob:') || path.startsWith('http:') || path.startsWith('https:'))) {
            const response = await fetch(path);
            if (!response.ok) {
                throw new Error(`Failed to read path: ${path}`);
            }
            return await response.text();
        }
        throw new Error(`File not found in web storage: ${path}`);
    }

    async readBinary(path: string): Promise<Uint8Array> {
        const cached = this.inMemoryCache.get(path);
        if (cached) {
            return cached;
        }
        if (typeof window !== 'undefined' && (path.startsWith('blob:') || path.startsWith('http:') || path.startsWith('https:'))) {
            const response = await fetch(path);
            if (!response.ok) {
                throw new Error(`Failed to read binary path: ${path}`);
            }
            const buffer = await response.arrayBuffer();
            return new Uint8Array(buffer);
        }
        throw new Error(`Binary file not found in web storage: ${path}`);
    }

    async exists(path: string): Promise<boolean> {
        if (this.inMemoryCache.has(path)) {
            return true;
        }
        if (typeof window !== 'undefined' && (path.startsWith('blob:') || path.startsWith('http:') || path.startsWith('https:'))) {
            try {
                const response = await fetch(path, { method: 'HEAD' });
                return response.ok;
            } catch {
                return false;
            }
        }
        return false;
    }

    registerVirtualFile(path: string, data: Uint8Array): void {
        this.inMemoryCache.set(path, data);
    }
}
