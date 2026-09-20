export function isTauriEnvironment(): boolean {
    if (typeof window === 'undefined') {
        return false;
    }
    const win = window as unknown as Record<string, unknown>;
    return Boolean(win.__TAURI_INTERNALS__ || win.__TAURI__);
}
