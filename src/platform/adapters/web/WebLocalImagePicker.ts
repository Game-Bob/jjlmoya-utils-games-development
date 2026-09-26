import type { ILocalImagePicker, LocalImageSelection } from '../../contracts/ILocalImagePicker';

export class WebLocalImagePicker implements ILocalImagePicker {
    async pickImage(): Promise<LocalImageSelection | null> {
        if (typeof document === 'undefined') return null;
        return new Promise<LocalImageSelection | null>((resolve, reject) => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/png,image/webp';
            input.oncancel = () => resolve(null);
            input.onchange = () => {
                const file = input.files?.item(0);
                if (!file) {
                    resolve(null);
                    return;
                }
                file.arrayBuffer()
                    .then((buffer) => resolve({
                        path: file.name,
                        name: file.name,
                        bytes: new Uint8Array(buffer),
                    }))
                    .catch(reject);
            };
            input.click();
        });
    }
}
