export type TauriEventListener<T> = (payload: T) => void;
export type TauriEventUnlisten = () => void;

export interface ITauriEventGateway {
    listen<T>(eventName: string, listener: TauriEventListener<T>): Promise<TauriEventUnlisten>;
}
