import type { InputBufferWindowResult } from './logic';
import type { GameInputBufferWindowCalculatorUI } from './ui';

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character] ?? character);
}

function number(value: number, digits = 1): string {
  return value.toLocaleString('en-US', { maximumFractionDigits: digits, minimumFractionDigits: digits });
}

function resultText(status: InputBufferWindowResult['status'], ui: GameInputBufferWindowCalculatorUI): string {
  if (status === 'late') return ui.lateResult;
  if (status === 'tight') return ui.tightResult;
  return ui.readyResult;
}

export function renderTimingMap(target: HTMLElement, result: InputBufferWindowResult, ui: GameInputBufferWindowCalculatorUI): void {
  const left = 52;
  const right = 720;
  const totalMs = Math.max(result.activeEndMs + result.frameMs * 3, result.activeEndMs + result.config.latencyMs);
  const x = (milliseconds: number) => left + ((milliseconds - result.bufferStartMs) / Math.max(1, totalMs - result.bufferStartMs)) * (right - left);
  const bufferStart = x(result.bufferStartMs);
  const activeStart = x(result.activeStartMs);
  const activeEnd = x(result.activeEndMs);
  const inputArrival = x(result.activeStartMs - result.usableBufferMs);
  const frameLines = Array.from({ length: result.config.activeEndFrame + 3 }, (_, index) => {
    const frameX = x(index * result.frameMs);
    if (frameX < left || frameX > right) return '';
    const active = index + 1 >= result.config.activeStartFrame && index + 1 <= result.config.activeEndFrame;
    return `<line class="gibw-frame-line${active ? ' gibw-frame-line-active' : ''}" x1="${frameX.toFixed(1)}" y1="92" x2="${frameX.toFixed(1)}" y2="145" /><text class="gibw-frame-number" x="${frameX.toFixed(1)}" y="166" text-anchor="middle">${index + 1}</text>`;
  }).join('');
  const late = result.lateByMs > 0 ? `<path class="gibw-latency-arrow" d="M ${activeStart.toFixed(1)} 60 C ${(activeStart - 22).toFixed(1)} 38 ${(activeStart - 60).toFixed(1)} 38 ${(x(result.activeStartMs - result.config.latencyMs)).toFixed(1)} 60" /><text class="gibw-latency-label" x="${((activeStart + x(result.activeStartMs - result.config.latencyMs)) / 2).toFixed(1)}" y="30" text-anchor="middle">${escapeHtml(ui.latencyLabelShort)}</text>` : '';
  target.innerHTML = `<svg class="gibw-timing-svg" viewBox="0 0 760 230" role="img" aria-label="${escapeHtml(ui.timingTitle)}"><rect class="gibw-paper" x="0" y="0" width="760" height="230" rx="18" /><text class="gibw-plot-title" x="24" y="28">${escapeHtml(ui.timingTitle)}</text><rect class="gibw-buffer-zone" x="${bufferStart.toFixed(1)}" y="92" width="${Math.max(0, activeStart - bufferStart).toFixed(1)}" height="53" rx="8" /><rect class="gibw-active-zone" x="${activeStart.toFixed(1)}" y="92" width="${Math.max(1, activeEnd - activeStart).toFixed(1)}" height="53" rx="8" /><line class="gibw-axis" x1="${left}" y1="145" x2="${right}" y2="145" />${frameLines}<text class="gibw-zone-label gibw-buffer-label" x="${((bufferStart + activeStart) / 2).toFixed(1)}" y="123" text-anchor="middle">${escapeHtml(ui.inputBufferLabel)}</text><text class="gibw-zone-label gibw-active-label" x="${((activeStart + activeEnd) / 2).toFixed(1)}" y="123" text-anchor="middle">${escapeHtml(ui.activeFramesLabel)}</text><line class="gibw-arrival-line" x1="${inputArrival.toFixed(1)}" y1="75" x2="${inputArrival.toFixed(1)}" y2="153" />${late}<text class="gibw-axis-label" x="${left}" y="202">${escapeHtml(ui.zeroLabel)}</text><text class="gibw-axis-label" x="${activeStart.toFixed(1)}" y="185" text-anchor="middle">${escapeHtml(ui.startLabel)}</text><text class="gibw-axis-label" x="${activeEnd.toFixed(1)}" y="185" text-anchor="middle">${escapeHtml(ui.endLabel)}</text><text class="gibw-axis-label" x="${right}" y="202" text-anchor="end">${number(totalMs)} ${escapeHtml(ui.unitMs)}</text><text class="gibw-axis-label" x="${((left + right) / 2).toFixed(1)}" y="221" text-anchor="middle">${escapeHtml(ui.frameAxis)} · ${number(result.frameMs, 2)} ${escapeHtml(ui.unitMs)} / ${escapeHtml(ui.unitFps)}</text></svg>`;
}

export function renderSummary(target: HTMLElement, result: InputBufferWindowResult, ui: GameInputBufferWindowCalculatorUI): void {
  const statusText = resultText(result.status, ui);
  target.innerHTML = `<div class="gibw-summary-grid"><div><span>${escapeHtml(ui.frameDurationLabel)}</span><strong>${number(result.frameMs, 2)} ${escapeHtml(ui.unitMs)}</strong></div><div><span>${escapeHtml(ui.activeWindowLabel)}</span><strong>${number(result.activeWindowMs)} ${escapeHtml(ui.unitMs)}</strong></div><div><span>${escapeHtml(ui.usableBufferLabel)}</span><strong>${number(result.usableBufferMs)} ${escapeHtml(ui.unitMs)}</strong></div><div><span>${escapeHtml(ui.effectiveWindowLabel)}</span><strong>${number(result.effectiveWindowMs)} ${escapeHtml(ui.unitMs)}</strong></div><div><span>${escapeHtml(ui.framesAvailableLabel)}</span><strong>${result.framesAvailable.toLocaleString('en-US')} ${escapeHtml(ui.unitFrames)}</strong></div><div><span>${escapeHtml(ui.lateByLabel)}</span><strong>${number(result.lateByMs)} ${escapeHtml(ui.unitMs)}</strong></div></div><p class="gibw-result gibw-result-${result.status}"><strong>${escapeHtml(ui.resultTitle)}:</strong> ${escapeHtml(statusText)}</p>`;
}

export function renderError(target: HTMLElement, messages: string[], ui: GameInputBufferWindowCalculatorUI): void {
  target.innerHTML = `<div class="gibw-error" role="alert"><strong>${escapeHtml(ui.errorTitle)}</strong><p>${escapeHtml(messages.join(' '))}</p></div>`;
}
