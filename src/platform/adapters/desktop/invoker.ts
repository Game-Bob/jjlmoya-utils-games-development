import { invoke } from '@tauri-apps/api/core';

export type CommandInvoker = <T>(cmd: string, args?: Record<string, unknown>) => Promise<T>;

export const defaultInvoker: CommandInvoker = async <T>(
    cmd: string,
    args?: Record<string, unknown>
): Promise<T> => {
    return await invoke<T>(cmd, args);
};
