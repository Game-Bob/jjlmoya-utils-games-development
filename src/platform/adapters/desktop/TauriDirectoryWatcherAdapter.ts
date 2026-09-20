import type {
    IDirectoryWatcher,
    WatchEvent,
    WatchListener
} from '../../contracts/IDirectoryWatcher';
import { defaultInvoker, type CommandInvoker } from './invoker';

export class TauriDirectoryWatcherAdapter implements IDirectoryWatcher {
    private readonly invoker: CommandInvoker;
    private readonly activeWatchers: Map<string, Set<WatchListener>>;

    constructor(invoker: CommandInvoker = defaultInvoker) {
        this.invoker = invoker;
        this.activeWatchers = new Map<string, Set<WatchListener>>();
    }

    async watch(directoryPath: string, listener: WatchListener): Promise<() => void> {
        let listeners = this.activeWatchers.get(directoryPath);
        if (!listeners) {
            listeners = new Set<WatchListener>();
            this.activeWatchers.set(directoryPath, listeners);
            try {
                await this.invoker<void>('watch_directory', { path: directoryPath });
            } catch {
                return () => {};
            }
        }
        listeners.add(listener);

        return () => {
            const current = this.activeWatchers.get(directoryPath);
            if (current) {
                current.delete(listener);
                if (current.size === 0) {
                    this.activeWatchers.delete(directoryPath);
                    void this.invoker<void>('unwatch_directory', { path: directoryPath }).catch(() => {});
                }
            }
        };
    }

    isWatching(directoryPath: string): boolean {
        return this.activeWatchers.has(directoryPath);
    }

    async stopAll(): Promise<void> {
        const paths = Array.from(this.activeWatchers.keys());
        this.activeWatchers.clear();
        await Promise.all(
            paths.map((p) => this.invoker<void>('unwatch_directory', { path: p }).catch(() => {}))
        );
    }

    dispatchFileEvent(directoryPath: string, event: WatchEvent): void {
        const listeners = this.activeWatchers.get(directoryPath);
        if (listeners) {
            for (const listener of listeners) {
                listener(event);
            }
        }
    }
}
