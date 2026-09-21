import { updateExtractor } from "./extractor-client";
import type { calculateBinPacking } from "./logic";
import { setupStepper, spawnParticle, triggerButtonFeedback } from "./packer-ui";
import type { SpriteSheetPlatformController } from "./SpriteSheetPlatformController";

type AtlasData = ReturnType<typeof calculateBinPacking>;

interface PackerControlsDependencies {
  controller: SpriteSheetPlatformController;
  clearImages: () => void;
  readAtlasData: () => AtlasData | null;
  readCanvas: () => HTMLCanvasElement | null;
  renderAtlas: () => void;
  updatePacker: () => void;
}

interface PackerPreset {
  extrusion: number;
  maxSize: string;
  padding: number;
  powerOfTwo: boolean;
}

interface TabSelectionTarget {
  classList: Pick<DOMTokenList, "toggle">;
  setAttribute(name: string, value: string): void;
}

export function setTabSelected(
  tab: TabSelectionTarget | null,
  selected: boolean,
): void {
  if (!tab) return;
  tab.classList.toggle("active", selected);
  tab.setAttribute("aria-selected", selected.toString());
}

function setInputValue(id: string, value: string): void {
  const input = document.getElementById(id) as HTMLInputElement | null;
  if (input) input.value = value;
}

function setPresetValues(
  preset: PackerPreset,
  updatePacker: () => void,
): void {
  setInputValue("ssp-padding", preset.padding.toString());
  setInputValue("ssp-extrusion", preset.extrusion.toString());
  setInputValue("ssp-max-size", preset.maxSize);
  const powerOfTwo = document.getElementById(
    "ssp-power-two",
  ) as HTMLInputElement | null;
  if (powerOfTwo) powerOfTwo.checked = preset.powerOfTwo;
  document
    .getElementById("ssp-padding-val")
    ?.replaceChildren(`${preset.padding}`);
  document
    .getElementById("ssp-extrusion-val")
    ?.replaceChildren(`${preset.extrusion}`);
  updatePacker();
}

function bindTabs(dependencies: PackerControlsDependencies): void {
  const packerTab = document.getElementById("ssp-tab-packer");
  const extractorTab = document.getElementById("ssp-tab-extractor");
  const packerPanel = document.getElementById("ssp-packer-panel");
  const extractorPanel = document.getElementById("ssp-extractor-panel");
  packerTab?.addEventListener("click", () => {
    setTabSelected(packerTab, true);
    setTabSelected(extractorTab, false);
    if (packerPanel) packerPanel.style.display = "grid";
    if (extractorPanel) extractorPanel.style.display = "none";
    dependencies.renderAtlas();
  });
  extractorTab?.addEventListener("click", () => {
    setTabSelected(extractorTab, true);
    setTabSelected(packerTab, false);
    if (packerPanel) packerPanel.style.display = "none";
    if (extractorPanel) extractorPanel.style.display = "grid";
    updateExtractor();
  });
}

function activatePreset(target: HTMLElement): void {
  document
    .querySelectorAll(".ssp-chip-btn")
    .forEach((element) => element.classList.remove("active"));
  target.classList.add("active");
}

function bindPreset(
  id: string,
  preset: PackerPreset,
  label: string,
  dependencies: PackerControlsDependencies,
): void {
  document.getElementById(id)?.addEventListener("click", (event) => {
    activatePreset(event.target as HTMLElement);
    setPresetValues(preset, dependencies.updatePacker);
    spawnParticle(event.clientX, event.clientY, label);
  });
}

function bindPresets(dependencies: PackerControlsDependencies): void {
  bindPreset(
    "ssp-preset-pixel",
    { padding: 2, extrusion: 0, maxSize: "512", powerOfTwo: true },
    "PIXEL 16x16",
    dependencies,
  );
  bindPreset(
    "ssp-preset-hd",
    { padding: 4, extrusion: 1, maxSize: "1024", powerOfTwo: true },
    "HD 1024",
    dependencies,
  );
  bindPreset(
    "ssp-preset-mobile",
    { padding: 2, extrusion: 0, maxSize: "2048", powerOfTwo: true },
    "MOBILE 2048",
    dependencies,
  );
}

function bindSlider(id: string, labelId: string, update: () => void): void {
  const slider = document.getElementById(id) as HTMLInputElement | null;
  slider?.addEventListener("input", () => {
    document.getElementById(labelId)?.replaceChildren(slider.value);
    update();
  });
}

function bindCopies(dependencies: PackerControlsDependencies): void {
  bindCopyButton("ssp-btn-copy-json", "Copied!", () =>
    dependencies.readAtlasData()?.atlasJson ?? null,
  );
  bindCopyButton("ssp-btn-copy-code", "Copied Code!", () =>
    dependencies.readAtlasData()?.codeSnippet ?? null,
  );
}

function bindCopyButton(
  id: string,
  message: string,
  readText: () => string | null,
): void {
  document.getElementById(id)?.addEventListener("click", (event) => {
    const text = readText();
    if (!text) return;
    triggerButtonFeedback(document.getElementById(id), message, event);
    void navigator.clipboard.writeText(text);
  });
}

function bindExports(dependencies: PackerControlsDependencies): void {
  bindExportButton("ssp-btn-download-png", "Downloaded!", async () => {
    const canvas = dependencies.readCanvas();
    if (canvas) await dependencies.controller.exportPng(canvas);
  }, dependencies.controller);
  bindExportButton("ssp-btn-download-zip", "ZIP Generated!", async () => {
    const canvas = dependencies.readCanvas();
    if (canvas && dependencies.readAtlasData()?.frames.length) {
      await dependencies.controller.exportPackage(canvas);
    }
  }, dependencies.controller);
}

function bindExportButton(
  id: string,
  message: string,
  action: () => Promise<void>,
  controller: SpriteSheetPlatformController,
): void {
  document.getElementById(id)?.addEventListener("click", async (event) => {
    triggerButtonFeedback(document.getElementById(id), message, event);
    try {
      await action();
    } catch (error) {
      controller.reportError(error);
    }
  });
}

function bindSettings(dependencies: PackerControlsDependencies): void {
  setupStepper("ssp-pad-dec", "ssp-pad-inc", "ssp-padding", dependencies.updatePacker);
  setupStepper("ssp-ext-dec", "ssp-ext-inc", "ssp-extrusion", dependencies.updatePacker);
  bindSlider("ssp-padding", "ssp-padding-val", dependencies.updatePacker);
  bindSlider("ssp-extrusion", "ssp-extrusion-val", dependencies.updatePacker);
  ["ssp-export-format", "ssp-max-size", "ssp-power-two"].forEach((id) =>
    document.getElementById(id)?.addEventListener("change", dependencies.updatePacker),
  );
}

function bindClear(dependencies: PackerControlsDependencies): void {
  document.getElementById("ssp-btn-clear")?.addEventListener("click", (event) => {
    dependencies.clearImages();
    dependencies.updatePacker();
    spawnParticle(event.clientX, event.clientY, "CLEARED!");
  });
}

export function bindPackerControls(
  dependencies: PackerControlsDependencies,
): void {
  bindTabs(dependencies);
  bindPresets(dependencies);
  bindSettings(dependencies);
  bindCopies(dependencies);
  bindExports(dependencies);
  bindClear(dependencies);
}
