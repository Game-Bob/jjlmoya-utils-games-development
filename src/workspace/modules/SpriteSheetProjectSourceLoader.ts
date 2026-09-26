import type { ProjectFileEntry } from '../../platform/contracts/IProjectFileBrowser';
import type { DesktopToolRuntimeContext } from './DesktopToolModule';
import type { SpriteSheetPackerDesktopView } from './SpriteSheetPackerDesktopView';

export class SpriteSheetProjectSourceLoader {
  private openedPath: string | undefined;
  private loadingPath: string | undefined;

  constructor(
    private readonly getContext: () => DesktopToolRuntimeContext | undefined,
    private readonly getView: () => SpriteSheetPackerDesktopView | undefined,
    private readonly isActive: () => boolean,
  ) {}

  public async loadSelected(): Promise<void> {
    const selected = this.selectedProjectImage();
    if (!selected) return;
    const { context, file } = selected;
    this.loadingPath = file.path;
    try {
      await this.readAndShow(context, file);
    } catch (error) {
      this.reportError(context, file, error);
    } finally {
      if (this.loadingPath === file.path) this.loadingPath = undefined;
    }
  }

  private selectedProjectImage(): {
    context: DesktopToolRuntimeContext;
    file: ProjectFileEntry;
  } | null {
    const context = this.getContext();
    const file = context?.selectedProjectFile;
    if (!context?.project || !file || !/\.(png|webp)$/i.test(file.name)) return null;
    if (file.path === this.openedPath || file.path === this.loadingPath) return null;
    return { context, file };
  }

  private async readAndShow(
    context: DesktopToolRuntimeContext,
    file: ProjectFileEntry,
  ): Promise<void> {
    const bytes = await context.platform.fileReader.readBinary(file.path);
    if (context.signal.aborted || !this.isActive()) return;
    const loaded = await this.getView()?.loadSource({ path: file.path, name: file.name, bytes });
    if (loaded && !context.signal.aborted) this.openedPath = file.path;
  }

  private reportError(
    context: DesktopToolRuntimeContext,
    file: ProjectFileEntry,
    error: unknown,
  ): void {
    if (context.signal.aborted) return;
    const message = error instanceof Error ? error.message : String(error);
    this.getView()?.showSourceError(message);
    context.reportActivity({ severity: 'error', message: `Unable to open ${file.name}: ${message}` });
  }
}
