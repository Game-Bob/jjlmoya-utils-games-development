import type { Diagnostic } from './evaluator';
import type { CrispScaleStep, PixelPerUnitResult } from './logic';
import type { GamePixelPerUnitPlannerUI } from './ui';

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character] ?? character);
}

function number(value: number, digits = 2): string {
  return value.toLocaleString('en-US', { maximumFractionDigits: digits, minimumFractionDigits: digits });
}

export function renderPixelField(target: HTMLElement, result: PixelPerUnitResult, ui: GamePixelPerUnitPlannerUI, spriteUrl?: string): void {
  const image = spriteUrl
    ? `<div class="gppu-hero-canvas"><img src="${escapeHtml(spriteUrl)}" width="${result.renderedSpriteWidth}" height="${result.renderedSpriteHeight}" alt="${escapeHtml(ui.sourceImageAlt)}" /></div>`
    : `<div class="gppu-empty-preview"><span aria-hidden="true">+</span><strong>${escapeHtml(ui.previewPlaceholder)}</strong></div>`;
  target.innerHTML = `<div class="gppu-preview-shell"><div class="gppu-preview-topline"><span>${escapeHtml(ui.viewportLabel)} ${number(result.config.displayWidth, 0)} x ${number(result.config.displayHeight, 0)} ${escapeHtml(ui.unitPixels)}</span><strong>${escapeHtml(ui.previewScaleLabel)} ${number(result.config.targetScale, 2)}x</strong></div>${image}<div class="gppu-preview-meta"><span>${escapeHtml(ui.spriteLabel)} ${number(result.config.spriteWidth, 0)} x ${number(result.config.spriteHeight, 0)} ${escapeHtml(ui.unitPixels)}</span><span>${number(result.renderedSpriteWidth, 0)} x ${number(result.renderedSpriteHeight, 0)} ${escapeHtml(ui.unitPixels)} on screen</span></div></div>`;
}

function stepCard(step: CrispScaleStep, result: PixelPerUnitResult, ui: GamePixelPerUnitPlannerUI, spriteUrl?: string): string {
  const status = step.fitsViewport ? ui.yesLabel : ui.noLabel;
  const recommended = step.scale === result.recommendedScale ? `<span class="gppu-recommended">${escapeHtml(ui.recommendedLabel)}</span>` : '';
  const preview = spriteUrl ? `<div class="gppu-step-canvas"><img src="${escapeHtml(spriteUrl)}" width="${step.renderedWidth}" height="${step.renderedHeight}" alt="${escapeHtml(ui.sourceImageAlt)} at ${step.scale}x" /></div>` : '';
  return `<div class="gppu-step ${step.fitsViewport ? 'gppu-step-fit' : 'gppu-step-over'} ${step.scale === Math.round(result.config.targetScale) ? 'gppu-step-current' : ''}">${preview}<div><strong>${step.scale}x</strong>${recommended}</div><span>${number(step.renderedWidth, 0)} x ${number(step.renderedHeight, 0)} ${escapeHtml(ui.unitPixels)}</span><small>${escapeHtml(ui.fitLabel)} ${escapeHtml(status)}</small></div>`;
}

export function renderScaleSteps(target: HTMLElement, result: PixelPerUnitResult, ui: GamePixelPerUnitPlannerUI, spriteUrl?: string): void {
  target.innerHTML = result.steps.map((step) => stepCard(step, result, ui, spriteUrl)).join('');
}

function riskLabel(result: PixelPerUnitResult, ui: GamePixelPerUnitPlannerUI): string {
  const labels = { low: ui.lowRisk, medium: ui.mediumRisk, high: ui.highRisk };
  return labels[result.bleedRisk];
}

function diagnosticMessage(diagnostic: Diagnostic, ui: GamePixelPerUnitPlannerUI): string {
  return ui[diagnostic.messageKey];
}

export function renderSummary(target: HTMLElement, result: PixelPerUnitResult, diagnostic: Diagnostic, ui: GamePixelPerUnitPlannerUI): void {
  target.innerHTML = `<h3 class="gppu-summary-title">${escapeHtml(ui.summaryTitle)}</h3><div class="gppu-summary-grid"><div><span>${escapeHtml(ui.ppuXLabel)}</span><strong>${number(result.ppuX)} ${escapeHtml(ui.unitPixels)} / ${escapeHtml(ui.unitUnits)}</strong></div><div><span>${escapeHtml(ui.ppuYLabel)}</span><strong>${number(result.ppuY)} ${escapeHtml(ui.unitPixels)} / ${escapeHtml(ui.unitUnits)}</strong></div><div><span>${escapeHtml(ui.viewportWorldLabel)}</span><strong>${number(result.viewportWorldWidth)} x ${number(result.viewportWorldHeight)} ${escapeHtml(ui.unitUnits)}</strong></div><div><span>${escapeHtml(ui.fitScaleLabel)}</span><strong>${number(result.fitScale, 2)}x</strong></div><div><span>${escapeHtml(ui.bleedingRiskLabel)}</span><strong class="gppu-risk-${diagnostic.key}">${escapeHtml(riskLabel(result, ui))}</strong></div></div><p class="gppu-diagnostic gppu-diagnostic-${diagnostic.key}"><strong>${escapeHtml(ui.alignmentLabel)}:</strong> ${escapeHtml(diagnosticMessage(diagnostic, ui))}</p>`;
}

export function renderAccessibleTable(target: HTMLElement, result: PixelPerUnitResult, ui: GamePixelPerUnitPlannerUI): void {
  const rows = result.steps.map((step) => `<tr><td>${step.scale}x</td><td>${number(step.renderedWidth, 0)} ${escapeHtml(ui.unitPixels)}</td><td>${number(step.renderedHeight, 0)} ${escapeHtml(ui.unitPixels)}</td><td>${escapeHtml(step.fitsViewport ? ui.yesLabel : ui.noLabel)}</td></tr>`).join('');
  target.innerHTML = `<h3>${escapeHtml(ui.tableTitle)}</h3><table><thead><tr><th>${escapeHtml(ui.tableScale)}</th><th>${escapeHtml(ui.tableWidth)}</th><th>${escapeHtml(ui.tableHeight)}</th><th>${escapeHtml(ui.tableFits)}</th></tr></thead><tbody>${rows}</tbody></table>`;
}
