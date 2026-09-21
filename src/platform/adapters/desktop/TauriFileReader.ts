import type { IFileReader } from '../../contracts/IFileReader';
import { defaultInvoker, type CommandInvoker } from './invoker';
import { PLATFORM_COMMANDS } from '../../commands';

export class TauriFileReader implements IFileReader {
    private readonly invoker: CommandInvoker;

    constructor(invoker: CommandInvoker = defaultInvoker) {
        this.invoker = invoker;
    }

    async readText(path: string): Promise<string> {
        return await this.invoker<string>(PLATFORM_COMMANDS.readFileText, { path });
    }

    async readBinary(path: string): Promise<Uint8Array> {
        const raw = await this.invoker<number[] | Uint8Array>(PLATFORM_COMMANDS.readFileBinary, { path });
        if (raw instanceof Uint8Array) {
            return raw;
        }
        return new Uint8Array(raw);
    }

    async exists(path: string): Promise<boolean> {
        return await this.invoker<boolean>(PLATFORM_COMMANDS.fileExists, { path });
    }
}
