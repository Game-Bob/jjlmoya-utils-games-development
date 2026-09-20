export interface IFileWriter {
    writeText(path: string, content: string): Promise<void>;
    writeBinary(path: string, data: Uint8Array): Promise<void>;
    createDirectory(path: string): Promise<void>;
}
