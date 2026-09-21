import type {
    OpenDialogOptions,
    SaveDialogOptions
} from '../../contracts/IDialogService';

export interface TauriOpenDialogOptions extends OpenDialogOptions {
    directory: boolean;
}

export interface ITauriDialogGateway {
    open(options: TauriOpenDialogOptions): Promise<string | string[] | null>;
    save(options: SaveDialogOptions): Promise<string | null>;
}
