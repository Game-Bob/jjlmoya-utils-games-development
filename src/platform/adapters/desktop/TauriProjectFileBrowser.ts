import { PLATFORM_COMMANDS } from '../../commands';
import type { IProjectFileBrowser, ProjectDirectoryListing } from '../../contracts/IProjectFileBrowser';
import { defaultInvoker, type CommandInvoker } from './invoker';

export class TauriProjectFileBrowser implements IProjectFileBrowser {
    constructor(private readonly invoker: CommandInvoker = defaultInvoker) {}

    public async listDirectory(path: string): Promise<ProjectDirectoryListing> {
        return await this.invoker<ProjectDirectoryListing>(PLATFORM_COMMANDS.listProjectDirectory, { path });
    }
}
