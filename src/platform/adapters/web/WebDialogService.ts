import type {
    IDialogService,
    OpenDialogOptions,
    SaveDialogOptions
} from '../../contracts/IDialogService';
import { PlatformError } from '../../errors/PlatformError';

function extractFileUrls(selectedFiles: FileList | null): string[] {
    if (!selectedFiles || selectedFiles.length === 0) {
        return [];
    }
    const urls: string[] = [];
    for (let i = 0; i < selectedFiles.length; i += 1) {
        const file = selectedFiles.item(i);
        if (file) {
            urls.push(URL.createObjectURL(file));
        }
    }
    return urls;
}

export class WebDialogService implements IDialogService {
    async openFile(options?: OpenDialogOptions): Promise<string | null> {
        const files = await this.openFiles({ ...options, multiple: false });
        return files.length > 0 ? (files[0] ?? null) : null;
    }

    async openFiles(options?: OpenDialogOptions): Promise<string[]> {
        if (typeof document === 'undefined') {
            return [];
        }
        return new Promise<string[]>((resolve) => {
            const input = document.createElement('input');
            input.type = 'file';
            input.multiple = Boolean(options?.multiple);
            if (options?.filters && options.filters.length > 0) {
                input.accept = options.filters
                    .flatMap((f) => f.extensions.map((ext) => `.${ext}`))
                    .join(',');
            }
            input.onchange = () => resolve(extractFileUrls(input.files));
            input.oncancel = () => resolve([]);
            input.click();
        });
    }

    async openDirectory(): Promise<string | null> {
        if (typeof document === 'undefined') {
            return null;
        }
        return new Promise<string | null>((resolve) => {
            const input = document.createElement('input');
            input.type = 'file';
            input.setAttribute('webkitdirectory', '');
            input.setAttribute('directory', '');
            input.onchange = () => {
                const files = input.files;
                if (!files || files.length === 0) {
                    resolve(null);
                    return;
                }
                const first = files.item(0);
                const relPath = first?.webkitRelativePath ?? '';
                const dirName = relPath.split('/')[0] || 'virtual_directory';
                resolve(`virtual://${dirName}`);
            };
            input.oncancel = () => resolve(null);
            input.click();
        });
    }

    async saveFile(options?: SaveDialogOptions): Promise<string | null> {
        const defaultName = options?.defaultName ?? 'export.json';
        if (typeof window !== 'undefined' && 'showSaveFilePicker' in window) {
            try {
                const picker = (window as unknown as { showSaveFilePicker: (opts: unknown) => Promise<{ name: string }> });
                const handle = await picker.showSaveFilePicker({
                    suggestedName: defaultName
                });
                return handle.name;
            } catch (error) {
                if (error instanceof DOMException && error.name === 'AbortError') {
                    return null;
                }
                throw PlatformError.fromUnknown(error);
            }
        }
        return defaultName;
    }
}
