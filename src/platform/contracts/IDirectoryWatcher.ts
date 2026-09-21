export type WatchEventType = 'created' | 'modified' | 'deleted' | 'renamed' | 'error';

export interface WatchEvent {
    type: WatchEventType;
    path: string;
    timestamp: number;
    message?: string;
}

export type WatchListener = (event: WatchEvent) => void;
export type StopWatching = () => Promise<void>;

export interface IDirectoryWatcher {
    watch(directoryPath: string, listener: WatchListener): Promise<StopWatching>;
    isWatching(directoryPath: string): boolean;
    stopAll(): Promise<void>;
}
