export * from './adapters/desktop';

import { TauriPlatformBridge } from './adapters/desktop/TauriPlatformBridge';
import { isTauriEnvironment } from './detector';
import { setPlatformBridge } from './resolver';

export function configureDesktopPlatformBridge(): boolean {
    if (!isTauriEnvironment()) {
        return false;
    }
    setPlatformBridge(new TauriPlatformBridge());
    return true;
}
