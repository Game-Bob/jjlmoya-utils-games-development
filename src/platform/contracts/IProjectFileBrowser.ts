export interface ProjectFileEntry {
    readonly name: string;
    readonly path: string;
    readonly isDirectory: boolean;
}

export interface ProjectDirectoryListing {
    readonly entries: readonly ProjectFileEntry[];
    readonly truncated: boolean;
}

export interface IProjectFileBrowser {
    listDirectory(path: string): Promise<ProjectDirectoryListing>;
}
