export type WatchEventType = 'created' | 'modified' | 'deleted' | 'renamed';

export interface WatchEvent {
    type: WatchEventType;
    path: string;
    timestamp: number;
}

export type WatchListener = (event: WatchEvent) => void;

export interface IDirectoryWatcher {
    watch(directoryPath: string, listener: WatchListener): Promise<() => void>;
    isWatching(directoryPath: string): boolean;
    stopAll(): Promise<void>;
}
