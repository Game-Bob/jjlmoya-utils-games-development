import JSZip from 'jszip';
import type { IPlatformBridge } from '../../platform/contracts/IPlatformBridge';
import { ToolWorkspaceChannel } from '../../workspace/channel/ToolWorkspaceChannel';
import type { WorkspaceToToolMessage } from '../../workspace/channel/WorkspaceToolMessages';
import type { ProjectSummary } from '../../workspace/types';
import type { WorkspaceProjectConfig } from '../../workspace/types/WorkspaceProjectConfig';
import { handleFilesUpload } from './dropzone-client';
import type { LoadedImageItem } from './packer-ui';

type AtlasUpdater = () => void;
type AtlasJsonReader = () => string | null;
type AtlasCanvasReader = () => HTMLCanvasElement | null;

export interface SpriteSheetPlatformDependencies {
  loadedImages: LoadedImageItem[];
  updateAtlas: AtlasUpdater;
  readAtlasJson: AtlasJsonReader;
  readAtlasCanvas: AtlasCanvasReader;
}

export class SpriteSheetPlatformController {
  private readonly channel = new ToolWorkspaceChannel('spriteSheetPacker');
  private pendingAutomation: Promise<void> = Promise.resolve();
  private project: ProjectSummary | null = null;
  private config: WorkspaceProjectConfig | null = null;

  constructor(
    private readonly platform: IPlatformBridge,
    private readonly dependencies: SpriteSheetPlatformDependencies,
  ) {}

  public attach(): void {
    this.channel.subscribe((message) => this.handleWorkspaceMessage(message));
    this.channel.attach();
  }

  public reportError(error: unknown): void {
    const detail = error instanceof Error ? error.message : String(error);
    this.channel.log('error', detail);
  }

  public async selectImages(): Promise<void> {
    const paths = await this.platform.dialogService.openFiles({
      title: 'Select Sprite Frames',
      multiple: true,
      filters: [{ name: 'Images', extensions: ['png', 'jpg', 'jpeg', 'webp'] }],
    });
    if (paths.length === 0) {
      return;
    }
    await this.loadPaths(paths);
  }

  public async exportPng(canvas: HTMLCanvasElement): Promise<string | null> {
    const data = await this.canvasBytes(canvas);
    const path = await this.platform.dialogService.saveFile({
      title: 'Export Sprite Sheet',
      defaultName: 'spritesheet.png',
      filters: [{ name: 'PNG image', extensions: ['png'] }],
    });
    if (!path) {
      return null;
    }
    await this.platform.fileWriter.writeBinary(path, data);
    this.channel.exportComplete([path]);
    return path;
  }

  public async exportPackage(canvas: HTMLCanvasElement): Promise<string | null> {
    const atlasJson = this.dependencies.readAtlasJson();
    if (!atlasJson) {
      return null;
    }
    const zip = new JSZip();
    zip.file('spritesheet.png', await this.canvasBytes(canvas));
    zip.file('spritesheet.json', atlasJson);
    const data = await zip.generateAsync({ type: 'uint8array' });
    const path = await this.platform.dialogService.saveFile({
      title: 'Export Sprite Package',
      defaultName: 'sprite-sheet-package.zip',
      filters: [{ name: 'ZIP archive', extensions: ['zip'] }],
    });
    if (!path) {
      return null;
    }
    await this.platform.fileWriter.writeBinary(path, data);
    this.channel.exportComplete([path]);
    return path;
  }

  private handleWorkspaceMessage(message: WorkspaceToToolMessage): void {
    if (message.type === 'workspace:context') {
      this.project = message.project;
      this.config = message.config;
      return;
    }
    if (message.type === 'workspace:sync') {
      this.queueAutomation(async () => this.autoExport());
      return;
    }
    if (message.event.type === 'deleted'
      || message.event.type === 'error'
      || !/\.(?:png|jpe?g|webp)$/i.test(message.event.path)) {
      return;
    }
    const fullPath = this.joinPath(message.rootPath, message.event.path);
    this.queueAutomation(async () => {
      await this.loadPaths([fullPath]);
      this.channel.log('success', `Reloaded sprite source: ${message.event.path}`);
      await this.autoExport();
    });
  }

  private queueAutomation(action: () => Promise<void>): void {
    this.pendingAutomation = this.pendingAutomation.then(action).catch((error: unknown) => {
      const detail = error instanceof Error ? error.message : String(error);
      this.channel.log('error', `Automatic sprite pipeline failed: ${detail}`);
    });
  }

  private async autoExport(): Promise<void> {
    const outputDirectory = this.config?.pipeline.spriteSheetPacker?.outputDirectory;
    const canvas = this.dependencies.readAtlasCanvas();
    const atlasJson = this.dependencies.readAtlasJson();
    if (!this.project || !outputDirectory || !canvas || !atlasJson
      || this.dependencies.loadedImages.length === 0) {
      return;
    }
    const directoryPath = this.joinPath(this.project.path, outputDirectory);
    const pngPath = this.joinPath(directoryPath, 'spritesheet.png');
    const jsonPath = this.joinPath(directoryPath, 'spritesheet.json');
    await this.platform.fileWriter.createDirectory(directoryPath);
    await Promise.all([
      this.platform.fileWriter.writeBinary(pngPath, await this.canvasBytes(canvas)),
      this.platform.fileWriter.writeText(jsonPath, atlasJson),
    ]);
    this.channel.exportComplete([pngPath, jsonPath]);
  }

  private async loadPaths(paths: string[]): Promise<void> {
    const files = await Promise.all(paths.map(async (path) => {
      const bytes = await this.platform.fileReader.readBinary(path);
      const name = path.split(/[\\/]/).pop() ?? 'sprite.png';
      return new File([bytes as unknown as BlobPart], name, { type: this.mimeType(name) });
    }));
    await handleFilesUpload(
      files,
      this.dependencies.loadedImages,
      this.dependencies.updateAtlas,
    );
  }

  private async canvasBytes(canvas: HTMLCanvasElement): Promise<Uint8Array> {
    const blob = await new Promise<Blob>((resolve, reject) => {
      canvas.toBlob((result) => {
        if (result) resolve(result);
        else reject(new Error('Unable to encode the sprite sheet canvas'));
      }, 'image/png');
    });
    return new Uint8Array(await blob.arrayBuffer());
  }

  private joinPath(rootPath: string, relativePath: string): string {
    const separator = rootPath.includes('\\') ? '\\' : '/';
    return `${rootPath.replace(/[\\/]+$/, '')}${separator}${relativePath.replace(/^[\\/]+/, '')}`;
  }

  private mimeType(name: string): string {
    if (/\.webp$/i.test(name)) return 'image/webp';
    if (/\.jpe?g$/i.test(name)) return 'image/jpeg';
    return 'image/png';
  }
}
