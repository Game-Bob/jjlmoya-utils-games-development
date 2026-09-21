import type { IFileWriter } from '../../contracts/IFileWriter';
import { defaultInvoker, type CommandInvoker } from './invoker';
import { PLATFORM_COMMANDS } from '../../commands';

export class TauriFileWriter implements IFileWriter {
    private readonly invoker: CommandInvoker;

    constructor(invoker: CommandInvoker = defaultInvoker) {
        this.invoker = invoker;
    }

    async writeText(path: string, content: string): Promise<void> {
        await this.invoker<void>(PLATFORM_COMMANDS.writeFileText, { path, content });
    }

    async writeBinary(path: string, data: Uint8Array): Promise<void> {
        const payload = Array.from(data);
        await this.invoker<void>(PLATFORM_COMMANDS.writeFileBinary, { path, data: payload });
    }

    async createDirectory(path: string): Promise<void> {
        await this.invoker<void>(PLATFORM_COMMANDS.createDirectory, { path });
    }
}
