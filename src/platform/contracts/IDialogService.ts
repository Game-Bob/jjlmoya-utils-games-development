export interface FileFilterOption {
    name: string;
    extensions: string[];
}

export interface OpenDialogOptions {
    title?: string;
    defaultPath?: string;
    filters?: FileFilterOption[];
    multiple?: boolean;
}

export interface SaveDialogOptions {
    title?: string;
    defaultPath?: string;
    defaultName?: string;
    filters?: FileFilterOption[];
}

export interface IDialogService {
    openFile(options?: OpenDialogOptions): Promise<string | null>;
    openFiles(options?: OpenDialogOptions): Promise<string[]>;
    openDirectory(options?: OpenDialogOptions): Promise<string | null>;
    saveFile(options?: SaveDialogOptions): Promise<string | null>;
}
