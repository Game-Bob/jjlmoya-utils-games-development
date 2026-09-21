import type {
    IPlatformBridge,
    RuntimePlatform
} from '../../contracts/IPlatformBridge';
import type { IFileReader } from '../../contracts/IFileReader';
import type { IFileWriter } from '../../contracts/IFileWriter';
import type { IDialogService } from '../../contracts/IDialogService';
import type { IDirectoryWatcher } from '../../contracts/IDirectoryWatcher';
import type { IProjectStorageService } from '../../contracts/IProjectStorageService';
import type { IProjectAccessService } from '../../contracts/IProjectAccessService';
import { WebFileReader } from './WebFileReader';
import { WebFileWriter } from './WebFileWriter';
import { WebDialogService } from './WebDialogService';
import { WebDirectoryWatcher } from './WebDirectoryWatcher';
import { WebProjectStorageService } from './WebProjectStorageService';
import { WebProjectAccessService } from './WebProjectAccessService';

export interface WebPlatformServices {
    fileReader?: IFileReader;
    fileWriter?: IFileWriter;
    dialogService?: IDialogService;
    directoryWatcher?: IDirectoryWatcher;
    projectStorage?: IProjectStorageService;
    projectAccess?: IProjectAccessService;
}

interface ResolvedWebServices {
    fileReader: IFileReader;
    fileWriter: IFileWriter;
    dialogService: IDialogService;
    directoryWatcher: IDirectoryWatcher;
    projectStorage: IProjectStorageService;
    projectAccess: IProjectAccessService;
}

function createDefaultServices(): ResolvedWebServices {
    const dialogService = new WebDialogService();
    return {
        fileReader: new WebFileReader(),
        fileWriter: new WebFileWriter(),
        dialogService,
        directoryWatcher: new WebDirectoryWatcher(),
        projectStorage: new WebProjectStorageService(),
        projectAccess: new WebProjectAccessService(dialogService)
    };
}

function resolveServices(custom?: WebPlatformServices): ResolvedWebServices {
    const defaults = createDefaultServices();
    if (!custom) {
        return defaults;
    }
    const resolved = Object.assign(defaults, custom);
    if (custom.dialogService && !custom.projectAccess) {
        resolved.projectAccess = new WebProjectAccessService(custom.dialogService);
    }
    return resolved;
}

export class WebPlatformBridge implements IPlatformBridge {
    readonly platform: RuntimePlatform = 'web';
    readonly fileReader: IFileReader;
    readonly fileWriter: IFileWriter;
    readonly dialogService: IDialogService;
    readonly directoryWatcher: IDirectoryWatcher;
    readonly projectStorage: IProjectStorageService;
    readonly projectAccess: IProjectAccessService;

    constructor(services?: WebPlatformServices) {
        const resolved = resolveServices(services);
        this.fileReader = resolved.fileReader;
        this.fileWriter = resolved.fileWriter;
        this.dialogService = resolved.dialogService;
        this.directoryWatcher = resolved.directoryWatcher;
        this.projectStorage = resolved.projectStorage;
        this.projectAccess = resolved.projectAccess;
    }

    isNativeDesktop(): boolean {
        return false;
    }
}
