import { spawnParticle, type LoadedImageItem } from './packer-ui';

export function handleFilesUpload(files: File[], loadedImages: LoadedImageItem[], updatePacker: () => void): void {
  const promises = files.map((file) => {
    return new Promise<void>((resolve) => {
      const img = new Image();
      const url = URL.createObjectURL(file);
      img.onload = () => {
        loadedImages.push({
          file,
          img,
          id: Math.random().toString(36).substring(2, 9),
          name: file.name.replace(/\.[^/.]+$/, ''),
        });
        resolve();
      };
      img.src = url;
    });
  });

  Promise.all(promises).then(() => updatePacker());
}

export function bindDropzone(loadedImages: LoadedImageItem[], updatePacker: () => void): void {
  const dropzone = document.getElementById('ssp-dropzone');
  const fileInput = document.getElementById('ssp-file-input') as HTMLInputElement | null;

  document.getElementById('ssp-btn-select')?.addEventListener('click', () => fileInput?.click());
  dropzone?.addEventListener('click', () => fileInput?.click());

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

  fileInput?.addEventListener('change', () => {
    if (fileInput.files?.length) {
      handleFilesUpload(Array.from(fileInput.files), loadedImages, updatePacker);
    }
  });
}
