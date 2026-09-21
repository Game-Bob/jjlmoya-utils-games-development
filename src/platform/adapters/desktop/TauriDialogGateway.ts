import { open, save } from '@tauri-apps/plugin-dialog';
import type {
    ITauriDialogGateway,
    TauriOpenDialogOptions
} from './ITauriDialogGateway';
import type { SaveDialogOptions } from '../../contracts/IDialogService';

export class TauriDialogGateway implements ITauriDialogGateway {
    async open(options: TauriOpenDialogOptions): Promise<string | string[] | null> {
        return await open(options);
    }

    async save(options: SaveDialogOptions): Promise<string | null> {
        const { defaultName, ...dialogOptions } = options;
        const defaultPath = dialogOptions.defaultPath ?? defaultName;
        return await save(defaultPath ? { ...dialogOptions, defaultPath } : dialogOptions);
    }
}
