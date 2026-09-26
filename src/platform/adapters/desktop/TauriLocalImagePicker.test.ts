import { describe, expect, it, vi } from 'vitest';
import { PLATFORM_COMMANDS } from '../../commands';
import type { CommandInvoker } from './invoker';
import { TauriLocalImagePicker } from './TauriLocalImagePicker';

describe('TauriLocalImagePicker', () => {
    it('uses the native picker and returns local bytes without a browser file input', async () => {
        const invoke = vi.fn(async () => ({
            path: 'C:\\games\\sprites\\hero.png',
            name: 'hero.png',
            bytes: [137, 80, 78, 71],
        })) as unknown as CommandInvoker;
        const picker = new TauriLocalImagePicker(invoke);

        await expect(picker.pickImage()).resolves.toEqual({
            path: 'C:\\games\\sprites\\hero.png',
            name: 'hero.png',
            bytes: new Uint8Array([137, 80, 78, 71]),
        });
        expect(invoke).toHaveBeenCalledWith(PLATFORM_COMMANDS.pickLocalImage);
    });

    it('preserves native cancellation', async () => {
        const invoke = vi.fn(async () => null) as unknown as CommandInvoker;
        await expect(new TauriLocalImagePicker(invoke).pickImage()).resolves.toBeNull();
    });
});
