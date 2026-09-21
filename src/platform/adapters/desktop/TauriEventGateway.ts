import { listen } from '@tauri-apps/api/event';
import type {
    ITauriEventGateway,
    TauriEventListener,
    TauriEventUnlisten
} from './ITauriEventGateway';

export class TauriEventGateway implements ITauriEventGateway {
    async listen<T>(eventName: string, listener: TauriEventListener<T>): Promise<TauriEventUnlisten> {
        return await listen<T>(eventName, (event) => listener(event.payload));
    }
}
