import type {
    IPlatformBridge,
    RuntimePlatform
} from '../../contracts/IPlatformBridge';
import type { IFileReader } from '../../contracts/IFileReader';
import type { IFileWriter } from '../../contracts/IFileWriter';
import type { IDialogService } from '../../contracts/IDialogService';
import type { IDirectoryWatcher } from '../../contracts/IDirectoryWatcher';
import type { IProjectStorageService } from '../../contracts/IProjectStorageService';
import { WebFileReader } from './WebFileReader';
import { WebFileWriter } from './WebFileWriter';
import { WebDialogService } from './WebDialogService';
import { WebDirectoryWatcher } from './WebDirectoryWatcher';
import { WebProjectStorageService } from './WebProjectStorageService';

export interface WebPlatformServices {
    fileReader?: IFileReader;
    fileWriter?: IFileWriter;
    dialogService?: IDialogService;
    directoryWatcher?: IDirectoryWatcher;
    projectStorage?: IProjectStorageService;
}

interface ResolvedWebServices {
    fileReader: IFileReader;
    fileWriter: IFileWriter;
    dialogService: IDialogService;
    directoryWatcher: IDirectoryWatcher;
    projectStorage: IProjectStorageService;
}

function createDefaultServices(): ResolvedWebServices {
    return {
        fileReader: new WebFileReader(),
        fileWriter: new WebFileWriter(),
        dialogService: new WebDialogService(),
        directoryWatcher: new WebDirectoryWatcher(),
        projectStorage: new WebProjectStorageService()
    };
}

function resolveServices(custom?: WebPlatformServices): ResolvedWebServices {
    const defaults = createDefaultServices();
    if (!custom) {
        return defaults;
    }
    return Object.assign(defaults, custom);
}

export class WebPlatformBridge implements IPlatformBridge {
    readonly platform: RuntimePlatform = 'web';
    readonly fileReader: IFileReader;
    readonly fileWriter: IFileWriter;
    readonly dialogService: IDialogService;
    readonly directoryWatcher: IDirectoryWatcher;
    readonly projectStorage: IProjectStorageService;

    constructor(services?: WebPlatformServices) {
        const resolved = resolveServices(services);
        this.fileReader = resolved.fileReader;
        this.fileWriter = resolved.fileWriter;
        this.dialogService = resolved.dialogService;
        this.directoryWatcher = resolved.directoryWatcher;
        this.projectStorage = resolved.projectStorage;
    }

    isNativeDesktop(): boolean {
        return false;
    }
}
