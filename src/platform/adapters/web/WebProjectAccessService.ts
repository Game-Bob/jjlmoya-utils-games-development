import type { IProjectAccessService } from '../../contracts/IProjectAccessService';
import type { IDialogService, OpenDialogOptions } from '../../contracts/IDialogService';

export class WebProjectAccessService implements IProjectAccessService {
    constructor(private readonly dialogService: IDialogService) {}

    async selectRoot(options?: OpenDialogOptions): Promise<string | null> {
        return await this.dialogService.openDirectory(options);
    }
}
