import { createExportCanvas } from './dom-views';
import { createFrameMetadata, createProjectFile } from './logic';
import type { ControllerContext } from './controller';
import type { ProjectFile } from './types';

function downloadBlob(blob: Blob, name: string): void {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = name;
  link.click();
  URL.revokeObjectURL(url);
}

function projectFor(context: ControllerContext): ProjectFile | null {
  const { state } = context;
  if (!state.image) return null;
  return createProjectFile({ sourceName: state.sourceName, sourceWidth: state.image.naturalWidth, sourceHeight: state.image.naturalHeight, grid: state.grid, adjustments: state.adjustments });
}

export function exportProject(context: ControllerContext): void {
  const project = projectFor(context);
  if (!project) return;
  context.persistDraft();
  downloadBlob(new Blob([JSON.stringify(project, null, 2)], { type: 'application/json' }), 'fixer-editor-project.json');
  context.refs.status.textContent = context.ui.statusSaved;
}

export function exportMetadata(context: ControllerContext): void {
  const project = projectFor(context);
  if (!project) return;
  const frames = createFrameMetadata(context.state.frames, context.state.adjustments);
  downloadBlob(new Blob([JSON.stringify({ ...project, frames }, null, 2)], { type: 'application/json' }), 'fixer-editor-metadata.json');
  context.refs.status.textContent = context.ui.statusExported;
}

export function exportSheet(context: ControllerContext): void {
  if (!context.state.image) return;
  const canvas = createExportCanvas(context.state.image, context.state.frames, context.state.adjustments);
  canvas.toBlob((blob) => { if (blob) downloadBlob(blob, 'fixer-editor-corrected.png'); }, 'image/png');
  context.refs.status.textContent = context.ui.statusExported;
}
