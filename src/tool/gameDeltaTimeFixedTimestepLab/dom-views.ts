import type { GameDeltaTimeFixedTimestepLabUI } from './ui';
import type { LoopResult, LoopSample } from './logic';
import type { Diagnostic } from './evaluator';

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character] ?? character);
}

function number(value: number, digits = 2): string {
  return value.toLocaleString('en-US', { maximumFractionDigits: digits, minimumFractionDigits: digits });
}

function samplePoints(samples: LoopSample[]): LoopSample[] {
  const stride = Math.max(1, Math.ceil(samples.length / 80));
  return samples.filter((_, index) => index % stride === 0 || index === samples.length - 1);
}

interface PathOptions {
  samples: LoopSample[];
  key: 'variablePosition' | 'fixedPosition';
  max: number;
  top?: number;
  height?: number;
}

function pathFor(options: PathOptions): string {
  const { samples, key, max, top = 190, height = 140 } = options;
  return samples.map((sample, index) => {
    const x = 54 + (index / Math.max(1, samples.length - 1)) * 672;
    const y = top - (sample[key] / max) * height;
    return `${index === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
  }).join(' ');
}

function differencePath(samples: LoopSample[], max: number): string {
  return samples.map((sample, index) => {
    const x = 54 + (index / Math.max(1, samples.length - 1)) * 672;
    const difference = sample.variablePosition - sample.fixedPosition;
    const y = 247 - ((difference + max) / (max * 2)) * 54;
    return `${index === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
  }).join(' ');
}

function frameBars(samples: LoopSample[], baseMs: number, maxMs: number): string {
  return samples.map((sample, index) => {
    const x = 54 + (index / Math.max(1, samples.length - 1)) * 672;
    const height = (sample.frameMs / maxMs) * 30;
    const isSpike = sample.frameMs > baseMs * 1.25;
    return `<rect class="${isSpike ? 'gll-spike-bar' : 'gll-frame-bar'}" x="${(x - 3).toFixed(1)}" y="${(76 - height).toFixed(1)}" width="6" height="${height.toFixed(1)}" rx="2" />`;
  }).join('');
}

export function renderStage(target: HTMLElement, result: LoopResult, ui: GameDeltaTimeFixedTimestepLabUI): void {
  const points = samplePoints(result.samples);
  const maxPosition = Math.max(1, result.variablePosition, result.fixedPosition);
  const maxDifference = Math.max(1, ...points.map((sample) => Math.abs(sample.variablePosition - sample.fixedPosition)));
  const baseMs = 1000 / result.config.fps;
  const maxMs = Math.max(baseMs, ...points.map((sample) => sample.frameMs));
  const bars = frameBars(points, baseMs, maxMs);
  const variablePath = pathFor({ samples: points, key: 'variablePosition', max: maxPosition, top: 170, height: 60 });
  const fixedPath = pathFor({ samples: points, key: 'fixedPosition', max: maxPosition, top: 170, height: 60 });
  const deltaPath = differencePath(points, maxDifference);
  const variableY = 170 - (result.variablePosition / maxPosition) * 60;
  const fixedY = 170 - (result.fixedPosition / maxPosition) * 60;
  target.innerHTML = `<svg class="gll-stage-svg" viewBox="0 0 760 330" role="img" aria-label="${escapeHtml(ui.stageTitle)}"><rect class="gll-paper" x="0" y="0" width="760" height="330" rx="18" /><text class="gll-plot-title" x="24" y="28">${escapeHtml(ui.frameTraceLabel)}</text><line class="gll-base-line" x1="54" y1="76" x2="726" y2="76" />${bars}<text class="gll-plot-axis" x="726" y="94" text-anchor="end">${number(maxMs, 1)} ${escapeHtml(ui.unitMs)}</text><text class="gll-plot-title" x="24" y="112">${escapeHtml(ui.positionPlotLabel)}</text><line class="gll-grid-line" x1="54" y1="170" x2="726" y2="170" /><text class="gll-plot-label" x="24" y="140">${escapeHtml(ui.variableLane)}</text><text class="gll-plot-label" x="24" y="165">${escapeHtml(ui.fixedLane)}</text><path class="gll-variable-line gll-stage-position-line" d="${variablePath}" /><path class="gll-fixed-line gll-stage-position-line" d="${fixedPath}" /><circle class="gll-variable-token" cx="726" cy="${variableY.toFixed(1)}" r="7" /><circle class="gll-fixed-token" cx="726" cy="${fixedY.toFixed(1)}" r="7" /><text class="gll-plot-axis" x="726" y="184" text-anchor="end">${number(maxPosition)} ${escapeHtml(ui.unitPixels)}</text><text class="gll-plot-title" x="24" y="210">${escapeHtml(ui.differencePlotLabel)}</text><line class="gll-zero-line" x1="54" y1="247" x2="726" y2="247" />${deltaPath ? `<path class="gll-difference-line" d="${deltaPath}" />` : ''}<text class="gll-plot-axis" x="726" y="268" text-anchor="end">+/- ${number(maxDifference)} ${escapeHtml(ui.unitPixels)}</text><text class="gll-stage-axis" x="54" y="302">0 ${escapeHtml(ui.unitSeconds)}</text><text class="gll-stage-axis" x="726" y="302" text-anchor="end">${number(result.totalWallTime)} ${escapeHtml(ui.unitSeconds)}</text></svg>`;
}

export function renderChart(target: HTMLElement, result: LoopResult, ui: GameDeltaTimeFixedTimestepLabUI): void {
  const points = samplePoints(result.samples);
  const max = Math.max(1, ...points.map((sample) => Math.max(sample.variablePosition, sample.fixedPosition)));
  const variablePath = pathFor({ samples: points, key: 'variablePosition', max });
  const fixedPath = pathFor({ samples: points, key: 'fixedPosition', max });
  target.innerHTML = `<svg class="gll-chart-svg" viewBox="0 0 760 250" role="img" aria-label="${escapeHtml(ui.timelineTitle)}"><line class="gll-chart-axis" x1="54" y1="190" x2="726" y2="190" /><line class="gll-chart-axis" x1="54" y1="32" x2="54" y2="190" /><path class="gll-variable-line" d="${variablePath}" /><path class="gll-fixed-line" d="${fixedPath}" /><text class="gll-chart-label" x="54" y="220">0 ${escapeHtml(ui.unitSeconds)}</text><text class="gll-chart-label" x="726" y="220" text-anchor="end">${number(result.totalWallTime)} ${escapeHtml(ui.unitSeconds)}</text><text class="gll-chart-label" x="42" y="38" text-anchor="end">${number(max)} ${escapeHtml(ui.unitPixels)}</text><text class="gll-chart-label" x="390" y="244" text-anchor="middle">${escapeHtml(ui.frameAxis)}</text><text class="gll-chart-label" x="14" y="110" transform="rotate(-90 14 110)" text-anchor="middle">${escapeHtml(ui.positionAxis)}</text></svg>`;
}

function diagnosticText(diagnostic: Diagnostic, ui: GameDeltaTimeFixedTimestepLabUI): string {
  const labels = { stable: ui.stableStatus, variable: ui.variableStatus, fixed: ui.fixedStatus, clamped: ui.clampStatus };
  return labels[diagnostic.key];
}

export function renderSummary(target: HTMLElement, result: LoopResult, diagnostic: Diagnostic, ui: GameDeltaTimeFixedTimestepLabUI): void {
  target.innerHTML = `<div class="gll-summary-grid"><div><span>${escapeHtml(ui.frameCountLabel)}</span><strong>${result.frameCount.toLocaleString('en-US')}</strong></div><div><span>${escapeHtml(ui.wallTimeLabel)}</span><strong>${number(result.totalWallTime)} ${escapeHtml(ui.unitSeconds)}</strong></div><div><span>${escapeHtml(ui.variableTimeLabel)}</span><strong>${number(result.variableTime)} ${escapeHtml(ui.unitSeconds)}</strong></div><div><span>${escapeHtml(ui.fixedTimeLabel)}</span><strong>${number(result.fixedTime)} ${escapeHtml(ui.unitSeconds)}</strong></div><div><span>${escapeHtml(ui.divergenceLabel)}</span><strong>${number(result.divergence)} ${escapeHtml(ui.unitPixels)}</strong></div><div><span>${escapeHtml(ui.stepsLabel)}</span><strong>${result.fixedSteps.toLocaleString('en-US')}</strong></div></div><p class="gll-diagnostic gll-diagnostic-${diagnostic.severity}">${escapeHtml(ui.diagnosticsTitle)}: ${escapeHtml(diagnosticText(diagnostic, ui))}</p>`;
}

export function renderAccessibleTable(target: HTMLElement, result: LoopResult, ui: GameDeltaTimeFixedTimestepLabUI): void {
  const rows = samplePoints(result.samples).slice(-8).map((sample) => `<tr><td>${sample.frame}</td><td>${number(sample.wallTime)} ${escapeHtml(ui.unitSeconds)}</td><td>${number(sample.variablePosition)} ${escapeHtml(ui.unitPixels)}</td><td>${number(sample.fixedPosition)} ${escapeHtml(ui.unitPixels)}</td><td>${number(sample.variablePosition - sample.fixedPosition)} ${escapeHtml(ui.unitPixels)}</td></tr>`).join('');
  target.innerHTML = `<h3>${escapeHtml(ui.tableTitle)}</h3><table><thead><tr><th>${escapeHtml(ui.tableFrame)}</th><th>${escapeHtml(ui.tableWall)}</th><th>${escapeHtml(ui.tableVariable)}</th><th>${escapeHtml(ui.tableFixed)}</th><th>${escapeHtml(ui.tableDelta)}</th></tr></thead><tbody>${rows}</tbody></table>`;
}
