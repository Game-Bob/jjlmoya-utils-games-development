import { resolvePlatformBridge } from '../../platform/resolver';
import { ToolWorkspaceChannel } from '../../workspace/channel/ToolWorkspaceChannel';
import type { WorkspaceToToolMessage } from '../../workspace/channel/WorkspaceToolMessages';
import { formatCopy, renderEditor, setStatus } from './dom-views';
import type { EditorState } from './editor-state';
import { loadLocalImages } from './file-io';
import { reloadProjectImages } from './logic';

export class HitboxWorkspaceIntegration {
  private readonly channel = new ToolWorkspaceChannel('hitboxHurtboxAnimator');

  constructor(private readonly state: EditorState) {}

  public attach(): void {
    this.channel.subscribe((message) => this.handle(message));
    this.channel.attach();
  }

  private handle(message: WorkspaceToToolMessage): void {
    if (message.type !== 'workspace:file-change'
      || message.event.type === 'deleted'
      || message.event.type === 'error') return;
    void this.reload(message.rootPath, message.event.path)
      .then(() => this.channel.log('success', `Reloaded collision frame: ${message.event.path}`))
      .catch((error: unknown) => {
        const detail = error instanceof Error ? error.message : String(error);
        this.channel.log('error', `Unable to reload collision frame: ${detail}`);
      });
  }

  private async reload(rootPath: string, relativePath: string): Promise<void> {
    if (!/\.(?:png|jpe?g|webp)$/i.test(relativePath)) return;
    const path = this.joinPath(rootPath, relativePath);
    const bytes = await resolvePlatformBridge().fileReader.readBinary(path);
    const name = relativePath.split(/[\\/]/).pop() ?? 'sprite.png';
    const file = new File([bytes as unknown as BlobPart], name, { type: 'image/png' });
    const loaded = await loadLocalImages([file]);
    const references = this.replaceImage(name, loaded.references[0]!, loaded.elements[0]!);
    this.state.project = reloadProjectImages(this.state.project, references);
    this.state.currentFrame = Math.min(
      this.state.currentFrame,
      Math.max(0, this.state.project.frames.length - 1),
    );
    setStatus(this.state, formatCopy(this.state.ui.statusImageLoaded, { count: this.state.project.images.length }));
    renderEditor(this.state);
  }

  private replaceImage(
    name: string,
    reference: { name: string; width: number; height: number },
    element: HTMLImageElement,
  ): Array<{ name: string; width: number; height: number }> {
    const existingIndex = this.state.project.images.findIndex((image) => image.name === name);
    const references = [...this.state.project.images];
    const elements = [...this.state.images];
    if (existingIndex >= 0) {
      references.splice(existingIndex, 1, reference);
      elements.splice(existingIndex, 1, element);
    } else {
      references.push(reference);
      elements.push(element);
    }
    this.state.images = elements;
    return references;
  }

  private joinPath(rootPath: string, relativePath: string): string {
    const separator = rootPath.includes('\\') ? '\\' : '/';
    return `${rootPath.replace(/[\\/]+$/, '')}${separator}${relativePath.replace(/^[\\/]+/, '')}`;
  }
}
