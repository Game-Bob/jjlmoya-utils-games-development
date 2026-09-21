import { resolvePlatformBridge } from "../../platform/resolver";
import { bindPackerControls } from "./app-controls";
import { bindDropzone } from "./dropzone-client";
import { initExtractor, updateExtractor } from "./extractor-client";
import { bindFlipbook, startFlipbookLoop } from "./flipbook-client";
import {
  calculateBinPacking,
  type ExportFormat,
  type SpriteFrameInput,
} from "./logic";
import {
  drawEmptyCanvasMessage,
  type LoadedImageItem,
} from "./packer-ui";
import { SpriteSheetPlatformController } from "./SpriteSheetPlatformController";

const loadedImages: LoadedImageItem[] = [];
let currentAtlasData: ReturnType<typeof calculateBinPacking> | null = null;

function parseInputValue(id: string, fallback: string): number {
  const el = document.getElementById(id) as HTMLInputElement | null;
  return parseInt(el?.value || fallback, 10);
}

function renderAtlasCanvas(): void {
  const canvas = document.getElementById(
    "ssp-atlas-canvas",
  ) as HTMLCanvasElement | null;
  if (!canvas) return;

  if (!currentAtlasData || loadedImages.length === 0) {
    drawEmptyCanvasMessage(
      canvas,
      "Upload PNG frames to preview packed texture atlas",
    );
    return;
  }

  canvas.width = currentAtlasData.textureWidth;
  canvas.height = currentAtlasData.textureHeight;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (const frame of currentAtlasData.frames) {
    const found = loadedImages.find((img) => img.id === frame.id);
    if (found) {
      ctx.drawImage(found.img, frame.x, frame.y, frame.width, frame.height);
      ctx.strokeStyle = "rgba(99, 102, 241, 0.4)";
      ctx.lineWidth = 1;
      ctx.strokeRect(frame.x, frame.y, frame.width, frame.height);
    }
  }
}

function updateStatsUI(): void {
  if (!currentAtlasData) return;

  const effEl = document.getElementById("ssp-stat-efficiency");
  const dcEl = document.getElementById("ssp-stat-drawcalls");
  const framesEl = document.getElementById("ssp-stat-frames");
  const sizeEl = document.getElementById("ssp-stat-size");
  const codeEl = document.getElementById("ssp-code-snippet");

  if (effEl) effEl.textContent = `${currentAtlasData.efficiency}%`;
  if (dcEl)
    dcEl.textContent = `${currentAtlasData.drawCallsBefore} -> ${currentAtlasData.drawCallsAfter}`;
  if (framesEl) framesEl.textContent = currentAtlasData.totalFrames.toString();
  if (sizeEl)
    sizeEl.textContent = `${currentAtlasData.textureWidth}x${currentAtlasData.textureHeight}`;
  if (codeEl) codeEl.textContent = currentAtlasData.codeSnippet;
}

function getPackerSettings() {
  const pad = parseInputValue("ssp-padding", "2");
  const ext = parseInputValue("ssp-extrusion", "0");
  const max = parseInputValue("ssp-max-size", "2048");
  const fmt = ((
    document.getElementById("ssp-export-format") as HTMLSelectElement
  )?.value || "generic-json-hash") as ExportFormat;
  const pot =
    (document.getElementById("ssp-power-two") as HTMLInputElement)?.checked ??
    true;
  return {
    padding: pad,
    borderExtrusion: ext,
    format: fmt,
    maxTextureWidth: max,
    forcePowerOfTwo: pot,
  };
}

function updatePacker(): void {
  const { padding, borderExtrusion, format, maxTextureWidth, forcePowerOfTwo } =
    getPackerSettings();

  const frameInputs: SpriteFrameInput[] = loadedImages.map((item) => ({
    id: item.id,
    name: item.name,
    width: item.img.width,
    height: item.img.height,
  }));

  currentAtlasData = calculateBinPacking(frameInputs, {
    padding,
    borderExtrusion,
    forcePowerOfTwo,
    maxTextureWidth,
    maxTextureHeight: maxTextureWidth,
    allowRotation: false,
    trimTransparency: false,
    format,
  });

  renderAtlasCanvas();
  updateStatsUI();
}

export function initSpriteSheetPackerApp(): void {
  const platformController = new SpriteSheetPlatformController(
    resolvePlatformBridge(),
    {
      loadedImages,
      updateAtlas: updatePacker,
      readAtlasJson: () => currentAtlasData?.atlasJson ?? null,
      readAtlasCanvas: () =>
        document.getElementById("ssp-atlas-canvas") as HTMLCanvasElement | null,
    },
  );
  initializePackerUi(platformController);
  platformController.attach();
}

function initializePackerUi(
  platformController: SpriteSheetPlatformController,
): void {
  bindPackerControls({
    controller: platformController,
    clearImages: () => loadedImages.splice(0, loadedImages.length),
    readAtlasData: () => currentAtlasData,
    readCanvas: () =>
      document.getElementById("ssp-atlas-canvas") as HTMLCanvasElement | null,
    renderAtlas: renderAtlasCanvas,
    updatePacker,
  });
  bindDropzone(loadedImages, updatePacker, () =>
    platformController.selectImages().catch((error) =>
      platformController.reportError(error),
    ),
  );
  bindFlipbook();
  initExtractor();
  startFlipbookLoop(loadedImages);
  renderAtlasCanvas();
  updateExtractor();
}
