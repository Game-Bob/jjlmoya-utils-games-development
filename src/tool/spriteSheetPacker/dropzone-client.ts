import { spawnParticle, type LoadedImageItem } from './packer-ui';

export async function handleFilesUpload(files: File[], loadedImages: LoadedImageItem[], updatePacker: () => void): Promise<void> {
  const promises = files.map((file) => {
    return new Promise<void>((resolve) => {
      const img = new Image();
      const url = URL.createObjectURL(file);
      img.onload = () => {
        const item = {
          file,
          img,
          id: Math.random().toString(36).substring(2, 9),
          name: file.name.replace(/\.[^/.]+$/, ''),
        };
        const existingIndex = loadedImages.findIndex((loaded) => loaded.name === item.name);
        if (existingIndex >= 0) loadedImages.splice(existingIndex, 1, item);
        else loadedImages.push(item);
        URL.revokeObjectURL(url);
        resolve();
      };
      img.onerror = () => {
        URL.revokeObjectURL(url);
        resolve();
      };
      img.src = url;
    });
  });

  await Promise.all(promises);
  updatePacker();
}

export function bindDropzone(
  loadedImages: LoadedImageItem[],
  updatePacker: () => void,
  selectFiles?: () => Promise<void>,
): void {
  const dropzone = document.getElementById('ssp-dropzone');
  const fileInput = document.getElementById('ssp-file-input') as HTMLInputElement | null;

  const openSelector = () => selectFiles ? void selectFiles() : fileInput?.click();
  document.getElementById('ssp-btn-select')?.addEventListener('click', openSelector);
  dropzone?.addEventListener('click', openSelector);

  bindDropEvents(dropzone, loadedImages, updatePacker);
  bindFileInput(fileInput, loadedImages, updatePacker);
}

function bindDropEvents(
  dropzone: HTMLElement | null,
  loadedImages: LoadedImageItem[],
  updatePacker: () => void,
): void {
  dropzone?.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropzone.classList.add('dragover');
  });

  dropzone?.addEventListener('dragleave', (e) => {
    e.preventDefault();
    dropzone.classList.remove('dragover');
  });

  dropzone?.addEventListener('drop', (e: DragEvent) => {
    e.preventDefault();
    dropzone.classList.remove('dragover');
    if (e.dataTransfer?.files?.length) {
      handleFilesUpload(Array.from(e.dataTransfer.files), loadedImages, updatePacker);
      spawnParticle(e.clientX, e.clientY, 'PACKED!');
    }
  });
}

function bindFileInput(
  fileInput: HTMLInputElement | null,
  loadedImages: LoadedImageItem[],
  updatePacker: () => void,
): void {
  fileInput?.addEventListener('change', () => {
    if (fileInput.files?.length) {
      handleFilesUpload(Array.from(fileInput.files), loadedImages, updatePacker);
    }
  });
}
