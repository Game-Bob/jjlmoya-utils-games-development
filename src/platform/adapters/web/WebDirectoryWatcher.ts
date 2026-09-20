import type {
    IDirectoryWatcher,
    WatchEvent,
    WatchListener
} from '../../contracts/IDirectoryWatcher';

export class WebDirectoryWatcher implements IDirectoryWatcher {
    private readonly activeWatchers: Map<string, Set<WatchListener>>;

    constructor() {
        this.activeWatchers = new Map<string, Set<WatchListener>>();
    }

    async watch(directoryPath: string, listener: WatchListener): Promise<() => void> {
        let listeners = this.activeWatchers.get(directoryPath);
        if (!listeners) {
            listeners = new Set<WatchListener>();
            this.activeWatchers.set(directoryPath, listeners);
        }
        listeners.add(listener);

        return () => {
            const current = this.activeWatchers.get(directoryPath);
            if (current) {
                current.delete(listener);
                if (current.size === 0) {
                    this.activeWatchers.delete(directoryPath);
                }
            }
        };
    }

    isWatching(directoryPath: string): boolean {
        return this.activeWatchers.has(directoryPath);
    }

    async stopAll(): Promise<void> {
        this.activeWatchers.clear();
    }

    simulateFileChange(directoryPath: string, event: WatchEvent): void {
        const listeners = this.activeWatchers.get(directoryPath);
        if (listeners) {
            for (const listener of listeners) {
                listener(event);
            }
        }
    }
}
