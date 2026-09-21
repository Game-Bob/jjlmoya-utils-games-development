export interface IWorkspaceProjectActions {
  openProject(): Promise<void>;
  syncProject(): void;
}
