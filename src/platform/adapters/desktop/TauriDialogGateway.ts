import { open, save } from '@tauri-apps/plugin-dialog';
import type {
    ITauriDialogGateway,
    TauriOpenDialogOptions
} from './ITauriDialogGateway';
import type { SaveDialogOptions } from '../../contracts/IDialogService';
import { PlatformError } from '../../errors/PlatformError';

export class TauriDialogGateway implements ITauriDialogGateway {
    async open(options: TauriOpenDialogOptions): Promise<string | string[] | null> {
        try {
            return await open(options);
        } catch (error) {
            throw PlatformError.fromUnknown(error);
        }
    }

    async save(options: SaveDialogOptions): Promise<string | null> {
        const { defaultName, ...dialogOptions } = options;
        const defaultPath = dialogOptions.defaultPath ?? defaultName;
        try {
            return await save(defaultPath ? { ...dialogOptions, defaultPath } : dialogOptions);
        } catch (error) {
            throw PlatformError.fromUnknown(error);
        }
    }
}
