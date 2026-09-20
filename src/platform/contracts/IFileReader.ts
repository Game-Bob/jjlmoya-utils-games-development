export interface IFileReader {
    readText(path: string): Promise<string>;
    readBinary(path: string): Promise<Uint8Array>;
    exists(path: string): Promise<boolean>;
}
