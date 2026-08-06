import JSZip from 'jszip';
import { validateGameFiles, calculateAspectRatio, generateItchioEmbedConfig, type WebGameFileInfo } from './logic';
import { displayAudit } from './audit';

const STATE_KEY = 'jjl_itchio_game_tester_state';
const currentViewport = { w: 960, h: 540 };


interface ScaleArgs {
  frame: HTMLElement;
  container: HTMLElement;
  cW: number;
  w: number;
  h: number;
}

function applyScaleActive(args: ScaleArgs, sc: number) {
  args.frame.style.transform = `scale(${sc})`;
  args.container.style.width = `${Math.round(args.w * sc)}px`;
  args.container.style.height = `${Math.round(args.h * sc)}px`;
  args.container.style.overflow = 'hidden';
  const notice = document.getElementById('igt-scale-notice');
  if (notice) notice.style.display = 'block';
}

function applyScaleNone(args: ScaleArgs) {
  args.frame.style.transform = 'none';
  args.container.style.width = '';
  args.container.style.height = '';
  args.container.style.overflow = 'auto';
  const notice = document.getElementById('igt-scale-notice');
  if (notice) notice.style.display = 'none';
}

function applyTransformScale(args: ScaleArgs) {
  const autoScale = document.getElementById('igt-auto-scale') as HTMLInputElement;
  const sc = autoScale?.checked && args.w > args.cW ? args.cW / args.w : 1;
  if (sc < 1) { applyScaleActive(args, sc); } else { applyScaleNone(args); }
}

function applyViewportStyle(w: number, h: number) {
  currentViewport.w = w;
  currentViewport.h = h;
  const frame = document.getElementById('igt-emulator-frame');
  const container = document.getElementById('igt-emulator-container');
  if (frame && container) {
    frame.style.width = `${w}px`;
    frame.style.height = `${h}px`;
    applyTransformScale({ frame, container, cW: window.innerWidth || 1000, w, h });
  }
  const wInput = document.getElementById('igt-width-input') as HTMLInputElement;
  const hInput = document.getElementById('igt-height-input') as HTMLInputElement;
  const rDisplay = document.getElementById('igt-ratio-display');
  if (wInput) wInput.value = w.toString();
  if (hInput) hInput.value = h.toString();
  if (rDisplay) rDisplay.textContent = calculateAspectRatio(w, h);
  localStorage.setItem(STATE_KEY, JSON.stringify({ w, h }));
}

function bindInputEvents(currentRatio: { value: number }) {
  const widthInput = document.getElementById('igt-width-input') as HTMLInputElement;
  const heightInput = document.getElementById('igt-height-input') as HTMLInputElement;
  const ratioLock = document.getElementById('igt-ratio-lock') as HTMLInputElement;
  const autoScale = document.getElementById('igt-auto-scale') as HTMLInputElement;
  widthInput?.addEventListener('input', () => {
    const w = parseInt(widthInput.value, 10) || 960;
    const h = ratioLock?.checked ? Math.round(w / currentRatio.value) : (parseInt(heightInput.value, 10) || 540);
    if (!ratioLock?.checked) currentRatio.value = w / h;
    applyViewportStyle(w, h);
  });
  heightInput?.addEventListener('input', () => {
    const h = parseInt(heightInput.value, 10) || 540;
    const w = ratioLock?.checked ? Math.round(h * currentRatio.value) : (parseInt(widthInput.value, 10) || 960);
    if (!ratioLock?.checked) currentRatio.value = w / h;
    applyViewportStyle(w, h);
  });
  autoScale?.addEventListener('change', () => {
    applyViewportStyle(parseInt(widthInput.value, 10) || 960, parseInt(heightInput.value, 10) || 540);
  });
}

function bindPresetEvents(currentRatio: { value: number }) {
  const resetBtn = document.getElementById('igt-reset-btn');
  const presetsContainer = document.getElementById('igt-presets-container');
  presetsContainer?.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains('igt-chip')) {
      const w = parseInt(target.getAttribute('data-w') || '960', 10);
      const h = parseInt(target.getAttribute('data-h') || '540', 10);
      currentRatio.value = w / h;
      applyViewportStyle(w, h);
      presetsContainer.querySelectorAll('.igt-chip').forEach((c) => c.classList.remove('active'));
      target.classList.add('active');
    }
  });
  resetBtn?.addEventListener('click', () => { currentRatio.value = 960 / 540; applyViewportStyle(960, 540); });
}

interface DragState {
  iframe: HTMLElement | null;
  ratioLock: HTMLInputElement | null;
  currentRatio: { value: number };
  start: { x: number; y: number; w: number; h: number };
}

function attachDragListeners(st: DragState) {
  let isResizing = true;
  if (st.iframe) st.iframe.classList.add('igt-iframe-resizing');
  const onMouseMove = (e: MouseEvent) => {
    if (!isResizing) return;
    const constW = Math.max(320, Math.min(1920, st.start.w + (e.clientX - st.start.x)));
    const constH = st.ratioLock?.checked ? Math.round(constW / st.currentRatio.value) : Math.max(240, Math.min(1080, st.start.h + (e.clientY - st.start.y)));
    if (!st.ratioLock?.checked) st.currentRatio.value = constW / constH;
    applyViewportStyle(constW, constH);
  };
  const onMouseUp = () => {
    isResizing = false;
    if (st.iframe) st.iframe.classList.remove('igt-iframe-resizing');
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
  };
  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('mouseup', onMouseUp);
}

function bindLiveDragResizer(currentRatio: { value: number }) {
  const handle = document.getElementById('igt-resize-handle');
  const frame = document.getElementById('igt-emulator-frame');
  const iframe = document.getElementById('igt-iframe');
  const ratioLock = document.getElementById('igt-ratio-lock') as HTMLInputElement;
  if (!handle || !frame) return;
  handle.addEventListener('mousedown', (e) => {
    e.preventDefault();
    attachDragListeners({ iframe, ratioLock, currentRatio, start: { x: e.clientX, y: e.clientY, w: currentViewport.w, h: currentViewport.h } });
  });
}

function setupViewportController() {
  const widthInput = document.getElementById('igt-width-input') as HTMLInputElement;
  const heightInput = document.getElementById('igt-height-input') as HTMLInputElement;
  const currentRatio = { value: 16 / 9 };
  const savedState = localStorage.getItem(STATE_KEY);
  if (savedState) {
    try {
      const parsed = JSON.parse(savedState);
      if (parsed.w) widthInput.value = parsed.w;
      if (parsed.h) heightInput.value = parsed.h;
      applyViewportStyle(parsed.w, parsed.h);
    } catch {}
  }
  bindInputEvents(currentRatio);
  bindPresetEvents(currentRatio);
  bindLiveDragResizer(currentRatio);
}

function getMimeType(filename: string): string {
  const ext = filename.split('.').pop()?.toLowerCase() || '';
  const map: Record<string, string> = { js: 'text/javascript', mjs: 'text/javascript', wasm: 'application/wasm', html: 'text/html', css: 'text/css', png: 'image/png', jpg: 'image/jpeg', svg: 'image/svg+xml' };
  return map[ext] || 'application/octet-stream';
}

async function buildZipBlobUrls(zip: JSZip) {
  const blobUrls: Record<string, string> = {};
  let indexPath = '';
  const entries: Array<{ path: string; entry: JSZip.JSZipObject }> = [];
  zip.forEach((path, entry) => entries.push({ path, entry }));
  for (const { path, entry } of entries) {
    if (!entry.dir) {
      const blob = new Blob([await entry.async('arraybuffer')], { type: getMimeType(path) });
      blobUrls[path] = URL.createObjectURL(blob);
      if (path.toLowerCase().replace(/\\/g, '/').endsWith('index.html')) indexPath = path;
    }
  }
  return { blobUrls, indexPath };
}

async function loadZipIntoIframe(zip: JSZip, iframe: HTMLIFrameElement) {
  const { blobUrls, indexPath } = await buildZipBlobUrls(zip);
  if (!indexPath || !blobUrls[indexPath]) return;
  const indexFileObj = zip.file(indexPath);
  if (!indexFileObj) return;
  const text = await indexFileObj.async('string');
  const doc = new DOMParser().parseFromString(text, 'text/html');
  doc.querySelectorAll('script[src], link[rel="stylesheet"][href], img[src], audio[src], source[src]').forEach((el) => {
    const attrName = el.hasAttribute('src') ? 'src' : 'href';
    const val = el.getAttribute(attrName);
    if (val) {
      const cleanPath = val.replace(/^\.\//, '').replace(/^\//, '');
      for (const [relPath, bUrl] of Object.entries(blobUrls)) {
        if (relPath.endsWith(cleanPath) || relPath.endsWith(val)) { el.setAttribute(attrName, bUrl); break; }
      }
    }
  });
  iframe.src = URL.createObjectURL(new Blob([doc.documentElement.outerHTML], { type: 'text/html' }));
}



function processZipFile(zipFile: File, iframe: HTMLIFrameElement) {
  JSZip.loadAsync(zipFile).then(async (zip) => {
    const webFiles: WebGameFileInfo[] = [];
    zip.forEach((path, entry) => webFiles.push({ name: path, size: 1024, isDirectory: entry.dir }));
    displayAudit(validateGameFiles(webFiles));
    await loadZipIntoIframe(zip, iframe);
  }).catch(() => {});
}

function processFileList(files: FileList | File[], iframe: HTMLIFrameElement) {
  const filesArr = Array.from(files);
  if (filesArr.length === 0) return;
  const zipFile = filesArr.find((f) => f.name.toLowerCase().endsWith('.zip'));
  if (zipFile) { processZipFile(zipFile, iframe); return; }
  const webFiles: WebGameFileInfo[] = filesArr.map((f) => ({ name: f.webkitRelativePath || f.name, size: f.size, isDirectory: false }));
  displayAudit(validateGameFiles(webFiles));
  const indexFile = filesArr.find((f) => f.name === 'index.html' || (f.webkitRelativePath && f.webkitRelativePath.endsWith('/index.html')));
  if (indexFile && iframe) iframe.src = URL.createObjectURL(indexFile);
}

function setupCopyButton() {
  const copyBtn = document.getElementById('igt-copy-btn');
  if (!copyBtn) return;
  copyBtn.addEventListener('click', () => {
    const widthInput = document.getElementById('igt-width-input') as HTMLInputElement;
    const heightInput = document.getElementById('igt-height-input') as HTMLInputElement;
    const config = generateItchioEmbedConfig(parseInt(widthInput?.value || '960', 10), parseInt(heightInput?.value || '540', 10));
    navigator.clipboard.writeText(config.codeSnippet);
    const r = document.getElementById('igt-root');
    copyBtn.textContent = r?.getAttribute('data-copied') || 'Copied!';
    setTimeout(() => { copyBtn.textContent = r?.getAttribute('data-copy-settings') || 'Copy Settings'; }, 2000);
  });
}

function setupFileHandling() {
  const fileInput = document.getElementById('igt-file-input') as HTMLInputElement;
  const dropzone = document.getElementById('igt-dropzone');
  const iframe = document.getElementById('igt-iframe') as HTMLIFrameElement;
  setupCopyButton();
  if (dropzone) {
    ['dragenter', 'dragover'].forEach((ev) => dropzone.addEventListener(ev, (e) => { e.preventDefault(); dropzone.classList.add('igt-dragover'); }));
    ['dragleave', 'drop'].forEach((ev) => dropzone.addEventListener(ev, (e) => { e.preventDefault(); dropzone.classList.remove('igt-dragover'); }));
    dropzone.addEventListener('drop', (e: DragEvent) => { if (e.dataTransfer?.files) processFileList(e.dataTransfer.files, iframe); });
  }
  fileInput?.addEventListener('change', () => { if (fileInput.files) processFileList(fileInput.files, iframe); });
}

document.addEventListener('DOMContentLoaded', () => {
  setupViewportController();
  setupFileHandling();
});
