import { invoke } from '@tauri-apps/api/core';
import { PlatformError } from '../../errors/PlatformError';
import type { PlatformCommandName } from '../../commands';

export type CommandInvoker = <T>(cmd: PlatformCommandName, args?: Record<string, unknown>) => Promise<T>;

export const defaultInvoker: CommandInvoker = async <T>(
    cmd: PlatformCommandName,
    args?: Record<string, unknown>
): Promise<T> => {
    try {
        return await invoke<T>(cmd, args);
    } catch (error) {
        throw PlatformError.fromUnknown(error);
    }
};
