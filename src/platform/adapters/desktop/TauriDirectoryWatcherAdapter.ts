import { PLATFORM_COMMANDS } from '../../commands';
import type {
    IDirectoryWatcher,
    StopWatching,
    WatchEvent,
    WatchListener
} from '../../contracts/IDirectoryWatcher';
import type { ITauriEventGateway, TauriEventUnlisten } from './ITauriEventGateway';
import { TauriEventGateway } from './TauriEventGateway';
import { defaultInvoker, type CommandInvoker } from './invoker';

interface DirectoryChangePayload {
    rootPath: string;
    event: WatchEvent;
}

export class TauriDirectoryWatcherAdapter implements IDirectoryWatcher {
    private readonly activeWatchers = new Map<string, Set<WatchListener>>();
    private readonly pendingEvents = new Map<string, ReturnType<typeof setTimeout>>();
    private eventUnlisten: TauriEventUnlisten | undefined;

    constructor(
        private readonly invoker: CommandInvoker = defaultInvoker,
        private readonly eventGateway: ITauriEventGateway = new TauriEventGateway(),
        private readonly debounceMilliseconds = 150
    ) {}

    async watch(directoryPath: string, listener: WatchListener): Promise<StopWatching> {
        await this.ensureEventListener();
        let listeners = this.activeWatchers.get(directoryPath);
        if (!listeners) {
            listeners = new Set<WatchListener>();
            this.activeWatchers.set(directoryPath, listeners);
            try {
                await this.invoker<void>(PLATFORM_COMMANDS.watchDirectory, { path: directoryPath });
            } catch (error) {
                this.activeWatchers.delete(directoryPath);
                this.releaseEventListenerWhenIdle();
                throw error;
            }
        }
        listeners.add(listener);

        return async () => {
            const current = this.activeWatchers.get(directoryPath);
            if (!current) {
                return;
            }
            current.delete(listener);
            if (current.size > 0) {
                return;
            }
            await this.invoker<void>(PLATFORM_COMMANDS.unwatchDirectory, { path: directoryPath });
            this.activeWatchers.delete(directoryPath);
            this.releaseEventListenerWhenIdle();
        };
    }

    isWatching(directoryPath: string): boolean {
        return this.activeWatchers.has(directoryPath);
    }

    async stopAll(): Promise<void> {
        const paths = Array.from(this.activeWatchers.keys());
        await Promise.all(paths.map((path) => this.invoker<void>(PLATFORM_COMMANDS.unwatchDirectory, { path })));
        this.activeWatchers.clear();
        for (const timeout of this.pendingEvents.values()) {
            clearTimeout(timeout);
        }
        this.pendingEvents.clear();
        this.releaseEventListenerWhenIdle();
    }

    dispatchFileEvent(directoryPath: string, event: WatchEvent): void {
        const listeners = this.activeWatchers.get(directoryPath);
        if (!listeners) {
            return;
        }
        for (const listener of listeners) {
            listener(event);
        }
    }

    private async ensureEventListener(): Promise<void> {
        if (this.eventUnlisten) {
            return;
        }
        this.eventUnlisten = await this.eventGateway.listen<DirectoryChangePayload>(
            'directory-change',
            (payload) => this.queueEvent(payload)
        );
    }

    private queueEvent(payload: DirectoryChangePayload): void {
        const key = `${payload.rootPath}:${payload.event.path}`;
        const pending = this.pendingEvents.get(key);
        if (pending) {
            clearTimeout(pending);
        }
        const timeout = setTimeout(() => {
            this.pendingEvents.delete(key);
            this.dispatchFileEvent(payload.rootPath, payload.event);
        }, this.debounceMilliseconds);
        this.pendingEvents.set(key, timeout);
    }

    private releaseEventListenerWhenIdle(): void {
        if (this.activeWatchers.size !== 0 || !this.eventUnlisten) {
            return;
        }
        this.eventUnlisten();
        this.eventUnlisten = undefined;
    }
}
