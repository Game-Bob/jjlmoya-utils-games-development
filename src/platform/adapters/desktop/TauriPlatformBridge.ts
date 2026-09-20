import type {
    IPlatformBridge,
    RuntimePlatform
} from '../../contracts/IPlatformBridge';
import type { IFileReader } from '../../contracts/IFileReader';
import type { IFileWriter } from '../../contracts/IFileWriter';
import type { IDialogService } from '../../contracts/IDialogService';
import type { IDirectoryWatcher } from '../../contracts/IDirectoryWatcher';
import type { IProjectStorageService } from '../../contracts/IProjectStorageService';
import { TauriFileReader } from './TauriFileReader';
import { TauriFileWriter } from './TauriFileWriter';
import { TauriDialogAdapter } from './TauriDialogAdapter';
import { TauriDirectoryWatcherAdapter } from './TauriDirectoryWatcherAdapter';
import { TauriProjectStorageAdapter } from './TauriProjectStorageAdapter';

export interface DesktopPlatformServices {
    fileReader?: IFileReader;
    fileWriter?: IFileWriter;
    dialogService?: IDialogService;
    directoryWatcher?: IDirectoryWatcher;
    projectStorage?: IProjectStorageService;
}

interface ResolvedDesktopServices {
    fileReader: IFileReader;
    fileWriter: IFileWriter;
    dialogService: IDialogService;
    directoryWatcher: IDirectoryWatcher;
    projectStorage: IProjectStorageService;
}

function createDefaultDesktopServices(): ResolvedDesktopServices {
    const reader = new TauriFileReader();
    const writer = new TauriFileWriter();
    return {
        fileReader: reader,
        fileWriter: writer,
        dialogService: new TauriDialogAdapter(),
        directoryWatcher: new TauriDirectoryWatcherAdapter(),
        projectStorage: new TauriProjectStorageAdapter(reader, writer)
    };
}

function resolveDesktopServices(custom?: DesktopPlatformServices): ResolvedDesktopServices {
    const defaults = createDefaultDesktopServices();
    if (!custom) {
        return defaults;
    }
    return Object.assign(defaults, custom);
}

export class TauriPlatformBridge implements IPlatformBridge {
    readonly platform: RuntimePlatform = 'desktop-tauri';
    readonly fileReader: IFileReader;
    readonly fileWriter: IFileWriter;
    readonly dialogService: IDialogService;
    readonly directoryWatcher: IDirectoryWatcher;
    readonly projectStorage: IProjectStorageService;

    constructor(services?: DesktopPlatformServices) {
        const resolved = resolveDesktopServices(services);
        this.fileReader = resolved.fileReader;
        this.fileWriter = resolved.fileWriter;
        this.dialogService = resolved.dialogService;
        this.directoryWatcher = resolved.directoryWatcher;
        this.projectStorage = resolved.projectStorage;
    }

    isNativeDesktop(): boolean {
        return true;
    }
}
