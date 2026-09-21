export interface IWorkspaceProjectActions {
  newProject(): Promise<void>;
  openProject(): Promise<void>;
  saveProjectAs(): Promise<void>;
  syncProject(): Promise<void>;
}
