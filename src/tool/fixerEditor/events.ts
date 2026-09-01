import { exportMetadata, exportProject, exportSheet } from './exporter';
import { cloneAdjustments, createFrameSpecs, parseProjectFile } from './logic';
import type { ControllerContext, EditorInputs } from './controller';

export interface EventActions {
  loadImage: (file: File) => void;
  updateGrid: (inputs: EditorInputs, changed: keyof EditorInputs) => void;
  updateSelectedAdjustment: (inputs: EditorInputs) => void;
  selectFrame: (index: number) => void;
  nudge: (axis: 'x' | 'y', direction: number) => void;
  trimFrame: () => void;
  trimAll: () => void;
  autoDetect: () => void;
  resetFrame: () => void;
  resetAll: () => void;
  undo: () => void;
  redo: () => void;
  applyProject: (project: ReturnType<typeof parseProjectFile>) => void;
}

function required<T extends Element>(root: ParentNode, id: string): T {
  const element = root.querySelector(`#${id}`);
  if (!element) throw new Error(`Missing fixer-editor element: ${id}`);
  return element as T;
}

function handleProjectFile(context: ControllerContext, file: File, applyProject: EventActions['applyProject']): void {
  file.text().then((text) => {
    const project = parseProjectFile(JSON.parse(text));
    if (!project) { context.refs.status.textContent = context.ui.statusInvalidProject; return; }
    if (context.state.image) applyProject(project);
    else { context.state.pendingProject = project; context.refs.status.textContent = context.ui.statusProjectNeedsImage; }
  }).catch(() => { context.refs.status.textContent = context.ui.statusInvalidProject; });
}

function bindFileEvents(context: ControllerContext, actions: EventActions): void {
  const { refs } = context;
  const fileInput = required<HTMLInputElement>(refs.shell, 'fe-file-input');
  const dropZone = required<HTMLElement>(refs.shell, 'fe-drop-zone');
  dropZone.onclick = () => fileInput.click();
  fileInput.onchange = () => { const file = fileInput.files?.[0]; if (file) actions.loadImage(file); };
  dropZone.ondragover = (event) => { event.preventDefault(); dropZone.classList.add('is-dragging'); };
  dropZone.ondragleave = () => dropZone.classList.remove('is-dragging');
  dropZone.ondrop = (event) => { event.preventDefault(); dropZone.classList.remove('is-dragging'); const file = event.dataTransfer?.files[0]; if (file) actions.loadImage(file); };
  dropZone.onkeydown = (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); fileInput.click(); } };
}

function bindFrameEvents(context: ControllerContext, inputs: EditorInputs, actions: EventActions): void {
  const { refs } = context;
  const gridInputIds: Array<keyof EditorInputs> = ['columns', 'rows', 'cell-width', 'cell-height', 'margin-x', 'margin-y', 'gap-x', 'gap-y'];
  gridInputIds.forEach((id) => { inputs[id].onchange = () => actions.updateGrid(inputs, id); });
  const adjustmentInputIds: Array<keyof EditorInputs> = ['crop-x', 'crop-y', 'crop-width', 'crop-height', 'offset-x', 'offset-y'];
  adjustmentInputIds.forEach((id) => { inputs[id].onchange = () => actions.updateSelectedAdjustment(inputs); });
  refs.filmstrip.onclick = (event: MouseEvent) => { const button = (event.target as HTMLElement).closest<HTMLButtonElement>('[data-frame]'); if (button) actions.selectFrame(Number(button.dataset.frame)); };
  refs.shell.querySelectorAll<HTMLButtonElement>('.fe-nudge').forEach((button: HTMLButtonElement) => { button.onclick = () => actions.nudge(button.dataset.axis as 'x' | 'y', Number(button.dataset.direction)); });
  refs.shell.querySelectorAll<HTMLButtonElement>('.fe-step').forEach((button: HTMLButtonElement) => { button.onclick = () => { context.state.step = Number(button.dataset.step); refs.shell.querySelectorAll<HTMLButtonElement>('.fe-step').forEach((item: HTMLButtonElement) => item.classList.toggle('is-active', item === button)); context.persistDraft(); }; });
  required<HTMLButtonElement>(refs.shell, 'fe-trim').onclick = actions.trimFrame;
  required<HTMLButtonElement>(refs.shell, 'fe-trim-all').onclick = actions.trimAll;
  required<HTMLButtonElement>(refs.shell, 'fe-reset-frame').onclick = actions.resetFrame;
}

function bindHistoryEvents(context: ControllerContext, actions: EventActions): void {
  const { refs } = context;
  required<HTMLButtonElement>(refs.shell, 'fe-auto-detect').onclick = actions.autoDetect;
  required<HTMLButtonElement>(refs.shell, 'fe-reset-all').onclick = actions.resetAll;
  required<HTMLButtonElement>(refs.shell, 'fe-undo').onclick = actions.undo;
  required<HTMLButtonElement>(refs.shell, 'fe-redo').onclick = actions.redo;
}

function bindOutputEvents(context: ControllerContext, actions: EventActions): void {
  const { refs, state } = context;
  required<HTMLButtonElement>(refs.shell, 'fe-save-project').onclick = () => exportProject(context);
  required<HTMLButtonElement>(refs.shell, 'fe-load-project-button').onclick = () => refs.loadProject.click();
  refs.loadProject.onchange = () => { const file = refs.loadProject.files?.[0]; if (file) handleProjectFile(context, file, actions.applyProject); };
  refs.exportJson.onclick = () => exportMetadata(context);
  refs.exportSheet.onclick = () => exportSheet(context);
  required<HTMLInputElement>(refs.shell, 'fe-zoom').oninput = (event) => { state.zoom = Number((event.target as HTMLInputElement).value); required<HTMLOutputElement>(refs.shell, 'fe-zoom-value').value = `${state.zoom}x`; context.refs.shell.style.setProperty('--fe-zoom', `${state.zoom}`); context.persistDraft(); };
  required<HTMLInputElement>(refs.shell, 'fe-fps').oninput = (event) => { state.fps = Number((event.target as HTMLInputElement).value); required<HTMLOutputElement>(refs.shell, 'fe-fps-value').value = String(state.fps); context.persistDraft(); };
  required<HTMLButtonElement>(refs.shell, 'fe-play').onclick = () => { state.playing = true; context.animate(); };
  required<HTMLButtonElement>(refs.shell, 'fe-pause').onclick = () => { state.playing = false; if (state.animationId) window.clearTimeout(state.animationId); state.animationId = null; };
  window.addEventListener('keydown', (event) => { if (!state.image || event.target instanceof HTMLInputElement || event.target instanceof HTMLButtonElement) return; const directions: Record<string, ['x' | 'y', number]> = { ArrowLeft: ['x', -1], ArrowRight: ['x', 1], ArrowUp: ['y', -1], ArrowDown: ['y', 1] }; const direction = directions[event.key]; if (direction) { event.preventDefault(); actions.nudge(direction[0], direction[1]); } });
}

export function bindEvents(input: { context: ControllerContext; inputs: EditorInputs; actions: EventActions }): void {
  bindFileEvents(input.context, input.actions);
  bindFrameEvents(input.context, input.inputs, input.actions);
  bindHistoryEvents(input.context, input.actions);
  bindOutputEvents(input.context, input.actions);
}

export function applyProjectToContext(context: ControllerContext, project: ReturnType<typeof parseProjectFile>): void {
  if (!project) return;
  context.state.grid = project.grid;
  context.state.adjustments = cloneAdjustments(project.adjustments);
  context.state.frames = context.state.image ? createFrameSpecs(context.state.image.naturalWidth, context.state.image.naturalHeight, context.state.grid) : [];
  context.state.selected = 0;
  context.updateView(context.ui.statusLoaded);
}
