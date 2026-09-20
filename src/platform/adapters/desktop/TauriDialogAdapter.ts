import type {
    IDialogService,
    OpenDialogOptions,
    SaveDialogOptions
} from '../../contracts/IDialogService';
import { defaultInvoker, type CommandInvoker } from './invoker';

export class TauriDialogAdapter implements IDialogService {
    private readonly invoker: CommandInvoker;

    constructor(invoker: CommandInvoker = defaultInvoker) {
        this.invoker = invoker;
    }

    async openFile(options?: OpenDialogOptions): Promise<string | null> {
        try {
            return await this.invoker<string | null>('open_file_dialog', { options });
        } catch {
            return null;
        }
    }

    async openFiles(options?: OpenDialogOptions): Promise<string[]> {
        try {
            const result = await this.invoker<string[] | null>('open_files_dialog', { options });
            return result ?? [];
        } catch {
            return [];
        }
    }

    async openDirectory(options?: OpenDialogOptions): Promise<string | null> {
        try {
            return await this.invoker<string | null>('open_directory_dialog', { options });
        } catch {
            return null;
        }
    }

    async saveFile(options?: SaveDialogOptions): Promise<string | null> {
        try {
            return await this.invoker<string | null>('save_file_dialog', { options });
        } catch {
            return null;
        }
    }
}
