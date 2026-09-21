import { PLATFORM_COMMANDS } from '../../commands';
import type { IProjectAccessService } from '../../contracts/IProjectAccessService';
import { defaultInvoker, type CommandInvoker } from './invoker';

export class TauriProjectAccessService implements IProjectAccessService {
    constructor(private readonly invoker: CommandInvoker = defaultInvoker) {}

    async selectRoot(options?: { title?: string }): Promise<string | null> {
        return await this.invoker<string | null>(PLATFORM_COMMANDS.selectProjectRoot, {
            title: options?.title ?? 'Select Game Project'
        });
    }
}
