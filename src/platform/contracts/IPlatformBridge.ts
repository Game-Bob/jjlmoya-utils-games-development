import type { IFileReader } from './IFileReader';
import type { IFileWriter } from './IFileWriter';
import type { IDialogService } from './IDialogService';
import type { IDirectoryWatcher } from './IDirectoryWatcher';
import type { IProjectStorageService } from './IProjectStorageService';
import type { IProjectAccessService } from './IProjectAccessService';

export type RuntimePlatform = 'web' | 'desktop-tauri';

export interface IPlatformBridge {
    readonly platform: RuntimePlatform;
    readonly fileReader: IFileReader;
    readonly fileWriter: IFileWriter;
    readonly dialogService: IDialogService;
    readonly directoryWatcher: IDirectoryWatcher;
    readonly projectStorage: IProjectStorageService;
    readonly projectAccess: IProjectAccessService;
    isNativeDesktop(): boolean;
}
