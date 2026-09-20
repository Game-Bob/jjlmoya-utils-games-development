import type { IPlatformBridge } from './contracts/IPlatformBridge';
import { isTauriEnvironment } from './detector';
import { WebPlatformBridge } from './adapters/web/WebPlatformBridge';
import { TauriPlatformBridge } from './adapters/desktop/TauriPlatformBridge';

let customBridgeInstance: IPlatformBridge | null = null;

export function setPlatformBridge(bridge: IPlatformBridge | null): void {
    customBridgeInstance = bridge;
}

export function resolvePlatformBridge(): IPlatformBridge {
    if (customBridgeInstance) {
        return customBridgeInstance;
    }
    if (isTauriEnvironment()) {
        return new TauriPlatformBridge();
    }
    return new WebPlatformBridge();
}
