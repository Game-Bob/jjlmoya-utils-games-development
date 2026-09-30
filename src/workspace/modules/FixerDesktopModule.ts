import type { LocalImageSelection } from '../../platform/contracts/ILocalImagePicker';
import type { ProjectFileEntry } from '../../platform/contracts/IProjectFileBrowser';
import type {
  DesktopToolDeactivationReason,
  DesktopToolInstance,
  DesktopToolManifest,
  DesktopToolModule,
  DesktopToolMountContext,
  DesktopToolRuntimeContext,
  DesktopToolSurface,
  JsonObject,
  JsonValue,
} from './DesktopToolModule';
import { FixerDesktopView } from './FixerDesktopView';
import { fixerOutputPaths } from './FixerProjectFiles';

const MANIFEST: DesktopToolManifest = {
  id: 'fixerEditor',
  version: '1.0.0',
  name: 'Sprite Sheet Fixer',
  description: 'Correct sprite grid spacing and frame offsets inside a local game project.',
  capabilities: [{ id: 'sprite.correct-sheet', title: 'Correct a project sprite sheet' }],
  commands: [{ id: 'save-corrected-sprite', title: 'Save corrected sprite', requiresProject: true }],
  inputs: [{ type: 'SpriteSheet', title: 'Project sprite sheet', schemaVersion: 1 }],
  outputs: [{ type: 'CorrectedSpriteSheet', title: 'Corrected PNG and editing metadata', schemaVersion: 1 }],
};

type FixerLifecycle = 'created' | 'mounted' | 'active' | 'inactive' | 'disposed';

export class FixerDesktopModule implements DesktopToolModule {
  public readonly manifest = MANIFEST;

  public create(): DesktopToolInstance {
    return new FixerDesktopInstance();
  }
}

class FixerDesktopInstance implements DesktopToolInstance {
  private state: FixerLifecycle = 'created';
  private context: DesktopToolRuntimeContext | undefined;
  private surface: DesktopToolSurface | undefined;
  private view: FixerDesktopView | undefined;
  private openedPath: string | undefined;
  private loadingPath: string | undefined;
  private loadRequest = 0;
  private saving = false;

  public async mount(context: DesktopToolMountContext): Promise<void> {
    this.requireState('mount', 'created');
    this.context = context;
    this.surface = context.surface;
    this.view = new FixerDesktopView({ save: () => this.save() });
    await context.surface.show(this.view);
    this.state = 'mounted';
  }

  public async updateContext(context: DesktopToolRuntimeContext): Promise<void> {
    this.requireUsable('update context');
    if (this.context?.project?.path !== context.project?.path) this.openedPath = undefined;
    this.context = context;
    if (this.state === 'active') void this.loadSelected();
  }

  public async activate(): Promise<void> {
    if (this.state === 'active') return;
    if (this.state !== 'mounted' && this.state !== 'inactive') throw this.lifecycleError('activate');
    this.state = 'active';
    void this.loadSelected();
  }

  public async deactivate(_reason: DesktopToolDeactivationReason): Promise<void> {
    if (this.state === 'mounted' || this.state === 'inactive') return;
    this.requireState('deactivate', 'active');
    this.loadRequest += 1;
    this.state = 'inactive';
  }

  public isCommandEnabled(commandId: string): boolean {
    return commandId === 'save-corrected-sprite' && this.state === 'active' && Boolean(this.openedPath);
  }

  public async executeCommand(commandId: string, _payload?: JsonValue): Promise<JsonValue | undefined> {
    if (!this.isCommandEnabled(commandId)) throw this.lifecycleError(`execute ${commandId}`);
    await this.save();
    return undefined;
  }

  public serializeSession(): JsonObject {
    this.requireUsable('serialize session');
    return { sourcePath: this.openedPath ?? null };
  }

  public async dispose(): Promise<void> {
    if (this.state === 'disposed') return;
    this.loadRequest += 1;
    if (this.state === 'active') await this.deactivate('dispose');
    await this.surface?.clear();
    this.view = undefined;
    this.context = undefined;
    this.surface = undefined;
    this.state = 'disposed';
  }

  private async loadSelected(): Promise<void> {
    const selection = this.selectedProjectImage();
    if (!selection) return;
    const { context, file } = selection;
    const request = ++this.loadRequest;
    this.loadingPath = file.path;
    try {
      await this.readAndShow(context, file, request);
    } catch (error) {
      if (this.isCurrent(request, context)) this.reportError(context, 'Unable to open sprite', error);
    } finally {
      if (this.loadingPath === file.path) this.loadingPath = undefined;
    }
  }

  private selectedProjectImage(): { context: DesktopToolRuntimeContext; file: ProjectFileEntry } | null {
    const context = this.context;
    const file = context?.selectedProjectFile;
    if (!context?.project || !file || !/\.(png|webp)$/i.test(file.name)) return null;
    if (file.path === this.openedPath || file.path === this.loadingPath) return null;
    return { context, file };
  }

  private async readAndShow(
    context: DesktopToolRuntimeContext,
    file: ProjectFileEntry,
    request: number,
  ): Promise<void> {
    const bytes = await context.platform.fileReader.readBinary(file.path);
    const metadata = await this.readMetadata(context, file.path);
    if (!this.isCurrent(request, context)) return;
    const source: LocalImageSelection = { path: file.path, name: file.name, bytes };
    const loaded = await this.view?.loadSource(source, metadata);
    if (!loaded || !this.isCurrent(request, context)) return;
    this.openedPath = file.path;
    this.view?.setOutputPath(fixerOutputPaths(file.path).image);
    context.reportActivity({ severity: 'success', message: `Opened ${file.name} in Sprite Sheet Fixer` });
  }

  private async readMetadata(context: DesktopToolRuntimeContext, sourcePath: string): Promise<unknown> {
    const path = fixerOutputPaths(sourcePath).metadata;
    if (!await context.platform.fileReader.exists(path)) return null;
    try {
      return JSON.parse(await context.platform.fileReader.readText(path)) as unknown;
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      context.reportActivity({ severity: 'warn', message: `Ignoring invalid sprite settings: ${message}` });
      return null;
    }
  }

  private isCurrent(request: number, context: DesktopToolRuntimeContext): boolean {
    return request === this.loadRequest && this.state === 'active' && !context.signal.aborted;
  }

  private async save(): Promise<void> {
    if (this.saving) return;
    const target = this.saveTarget();
    if (!target) return;
    const { context, view, sourcePath } = target;
    this.saving = true;
    view.showStatus('Saving corrected sprite...');
    try {
      await this.writeOutputs(context, view, sourcePath);
    } catch (error) {
      this.reportError(context, 'Unable to save corrected sprite', error);
    } finally {
      this.saving = false;
    }
  }

  private saveTarget(): {
    context: DesktopToolRuntimeContext;
    view: FixerDesktopView;
    sourcePath: string;
  } | null {
    const context = this.context;
    const view = this.view;
    const sourcePath = this.openedPath;
    if (!context?.project || !view || !sourcePath || this.state !== 'active') return null;
    return { context, view, sourcePath };
  }

  private async writeOutputs(
    context: DesktopToolRuntimeContext,
    view: FixerDesktopView,
    sourcePath: string,
  ): Promise<void> {
    const paths = fixerOutputPaths(sourcePath);
    const metadata = view.createProjectFile();
    if (!metadata) throw new Error('No sprite is ready to save');
    const image = await view.exportPng();
    if (context.signal.aborted) return;
    await context.platform.fileWriter.writeBinary(paths.image, image);
    await context.platform.fileWriter.writeText(paths.metadata, JSON.stringify(metadata, null, 2));
    view.showStatus(`Saved ${paths.image.split(/[\\/]/).at(-1)}`);
    context.projectFilesChanged?.();
    context.reportActivity({ severity: 'success', message: `Saved corrected sprite to ${paths.image}` });
  }

  private reportError(context: DesktopToolRuntimeContext, prefix: string, error: unknown): void {
    const message = error instanceof Error ? error.message : String(error);
    this.view?.showStatus(`${prefix}: ${message}`);
    context.reportActivity({ severity: 'error', message: `${prefix}: ${message}` });
  }

  private requireUsable(operation: string): void {
    if (this.state === 'created' || this.state === 'disposed') throw this.lifecycleError(operation);
  }

  private requireState(operation: string, expected: FixerLifecycle): void {
    if (this.state !== expected) throw this.lifecycleError(operation);
  }

  private lifecycleError(operation: string): Error {
    return new Error(`Cannot ${operation} Sprite Sheet Fixer while it is ${this.state}`);
  }
}
