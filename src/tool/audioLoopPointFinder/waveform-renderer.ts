export interface WaveformOverlayConfig {
  ctx: CanvasRenderingContext2D;
  loopStartSample: number;
  loopEndSample: number;
  totalSamples: number;
  width: number;
  height: number;
}

export function renderWaveformBars(
  ctx: CanvasRenderingContext2D,
  audioBuffer: AudioBuffer,
  width: number,
  height: number
) {
  const channelData = audioBuffer.getChannelData(0);
  const step = Math.ceil(channelData.length / width);
  const amp = height / 2;

  ctx.fillStyle = '#4f46e5';
  for (let i = 0; i < width; i++) {
    let min = 1.0;
    let max = -1.0;
    for (let j = 0; j < step; j++) {
      const datum = channelData[i * step + j] ?? 0;
      if (datum < min) min = datum;
      if (datum > max) max = datum;
    }
    ctx.fillRect(i, (1 + min) * amp, 1, Math.max(1, (max - min) * amp));
  }
}

export function renderWaveformOverlay(cfg: WaveformOverlayConfig) {
  const startX = (cfg.loopStartSample / cfg.totalSamples) * cfg.width;
  const endX = (cfg.loopEndSample / cfg.totalSamples) * cfg.width;

  cfg.ctx.fillStyle = 'rgba(99, 102, 241, 0.2)';
  cfg.ctx.fillRect(startX, 0, Math.max(1, endX - startX), cfg.height);

  cfg.ctx.strokeStyle = '#10b981';
  cfg.ctx.lineWidth = 2;
  cfg.ctx.beginPath();
  cfg.ctx.moveTo(startX, 0);
  cfg.ctx.lineTo(startX, cfg.height);
  cfg.ctx.stroke();

  cfg.ctx.strokeStyle = '#ef4444';
  cfg.ctx.lineWidth = 2;
  cfg.ctx.beginPath();
  cfg.ctx.moveTo(endX, 0);
  cfg.ctx.lineTo(endX, cfg.height);
  cfg.ctx.stroke();
}
