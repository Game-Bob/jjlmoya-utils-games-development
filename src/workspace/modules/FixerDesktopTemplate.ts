export const FIXER_DESKTOP_TEMPLATE = `
  <div class="fixer-desktop-workbench">
    <section class="fixer-desktop-canvas-panel" aria-label="Sprite sheet editor">
      <div class="fixer-desktop-toolbar">
        <span data-role="source-name">Select a sprite in Project files</span>
        <div class="fixer-desktop-zoom-controls">
          <button type="button" data-action="zoom-out" aria-label="Zoom out">−</button>
          <span data-role="zoom">200%</span>
          <button type="button" data-action="zoom-in" aria-label="Zoom in">+</button>
        </div>
      </div>
      <div class="fixer-desktop-canvas-scroll">
        <canvas data-role="source-canvas" aria-label="Sprite sheet with selectable frames" hidden></canvas>
        <p data-role="empty">Select a PNG or WebP from Project files to start editing.</p>
      </div>
      <div class="fixer-desktop-frame-bar">
        <button type="button" data-action="previous" aria-label="Previous frame">‹</button>
        <span data-role="frame-count">No frame selected</span>
        <button type="button" data-action="next" aria-label="Next frame">›</button>
      </div>
    </section>
    <aside class="fixer-desktop-inspector" aria-label="Sprite properties">
      <h3>Sprite sheet</h3>
      <div class="fixer-desktop-field-grid">
        <label>Frame width <input data-field="cellWidth" type="number" min="1" max="4096" step="1"></label>
        <label>Frame height <input data-field="cellHeight" type="number" min="1" max="4096" step="1"></label>
        <label>Spacing X <input data-field="gapX" type="number" min="0" max="4096" step="1"></label>
        <label>Spacing Y <input data-field="gapY" type="number" min="0" max="4096" step="1"></label>
        <label>Margin X <input data-field="marginX" type="number" min="0" max="4096" step="1"></label>
        <label>Margin Y <input data-field="marginY" type="number" min="0" max="4096" step="1"></label>
      </div>
      <div class="fixer-desktop-inspector-divider"></div>
      <h3>Selected frame</h3>
      <div class="fixer-desktop-field-grid">
        <label>Offset X <input data-field="offsetX" type="number" step="1"></label>
        <label>Offset Y <input data-field="offsetY" type="number" step="1"></label>
      </div>
      <div class="fixer-desktop-preview">
        <canvas data-role="preview-canvas" aria-label="Corrected frame preview" hidden></canvas>
      </div>
      <div class="fixer-desktop-inspector-divider"></div>
      <label class="fixer-desktop-output-label">Output file <output data-role="output-path"></output></label>
      <button class="fixer-desktop-save" type="button" data-action="save" disabled>Save corrected sprite</button>
      <p data-role="status" role="status">No project sprite selected</p>
    </aside>
  </div>
`;
