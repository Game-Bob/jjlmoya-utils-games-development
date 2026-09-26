import { PLATFORM_COMMANDS } from '../../commands';
import type { ILocalImagePicker, LocalImageSelection } from '../../contracts/ILocalImagePicker';
import { defaultInvoker, type CommandInvoker } from './invoker';

interface NativeImageSelection {
    path: string;
    name: string;
    bytes: number[] | Uint8Array;
}

export class TauriLocalImagePicker implements ILocalImagePicker {
    constructor(private readonly invoker: CommandInvoker = defaultInvoker) {}

    async pickImage(): Promise<LocalImageSelection | null> {
        const selection = await this.invoker<NativeImageSelection | null>(PLATFORM_COMMANDS.pickLocalImage);
        if (!selection) return null;
        return {
            path: selection.path,
            name: selection.name,
            bytes: new Uint8Array(selection.bytes),
        };
    }
}
