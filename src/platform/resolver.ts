import type { IPlatformBridge } from './contracts/IPlatformBridge';
import { WebPlatformBridge } from './adapters/web/WebPlatformBridge';

let customBridgeInstance: IPlatformBridge | null = null;

export function setPlatformBridge(bridge: IPlatformBridge | null): void {
    customBridgeInstance = bridge;
}

export function resolvePlatformBridge(): IPlatformBridge {
    if (customBridgeInstance) {
        return customBridgeInstance;
    }
    return new WebPlatformBridge();
}
