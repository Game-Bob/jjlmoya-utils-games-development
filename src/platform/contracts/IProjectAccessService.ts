import type { OpenDialogOptions } from './IDialogService';

export interface IProjectAccessService {
    selectRoot(options?: OpenDialogOptions): Promise<string | null>;
}
