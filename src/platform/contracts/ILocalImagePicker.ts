export interface LocalImageSelection {
    path: string;
    name: string;
    bytes: Uint8Array;
}

export interface ILocalImagePicker {
    pickImage(): Promise<LocalImageSelection | null>;
}
