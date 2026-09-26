import type { IProjectFileBrowser, ProjectDirectoryListing } from '../../contracts/IProjectFileBrowser';

export class WebProjectFileBrowser implements IProjectFileBrowser {
    public async listDirectory(): Promise<ProjectDirectoryListing> {
        return { entries: [], truncated: false };
    }
}
