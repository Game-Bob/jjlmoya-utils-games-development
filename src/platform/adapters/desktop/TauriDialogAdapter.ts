import type {
    IDialogService,
    OpenDialogOptions,
    SaveDialogOptions
} from '../../contracts/IDialogService';
import type { ITauriDialogGateway } from './ITauriDialogGateway';
import { TauriDialogGateway } from './TauriDialogGateway';

export class TauriDialogAdapter implements IDialogService {
    private readonly gateway: ITauriDialogGateway;

    constructor(gateway: ITauriDialogGateway = new TauriDialogGateway()) {
        this.gateway = gateway;
    }

    async openFile(options?: OpenDialogOptions): Promise<string | null> {
        const result = await this.gateway.open({
            ...options,
            directory: false,
            multiple: false
        });
        return Array.isArray(result) ? (result[0] ?? null) : result;
    }

    async openFiles(options?: OpenDialogOptions): Promise<string[]> {
        const result = await this.gateway.open({
            ...options,
            directory: false,
            multiple: true
        });
        if (!result) {
            return [];
        }
        return Array.isArray(result) ? result : [result];
    }

    async openDirectory(options?: OpenDialogOptions): Promise<string | null> {
        const result = await this.gateway.open({
            ...options,
            directory: true,
            multiple: false
        });
        return Array.isArray(result) ? (result[0] ?? null) : result;
    }

    async saveFile(options?: SaveDialogOptions): Promise<string | null> {
        return await this.gateway.save(options ?? {});
    }
}
