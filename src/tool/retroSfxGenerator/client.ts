import {
  calculateEndFrequency,
  createDefaultParams,
  encodeWav,
  formatDuration,
  formatFrequency,
  generateSfx,
  getPresetParams,
  type SfxParams,
  type SfxPreset,
  type SfxWaveform,
} from './logic';

const root = document.querySelector<HTMLElement>('#rsfx-root');

if (root) {
  const canvas = root.querySelector<HTMLCanvasElement>('#rsfx-waveform');
  const status = root.querySelector<HTMLElement>('#rsfx-status');
  const readout = root.querySelector<HTMLElement>('#rsfx-readout');
  const led = root.querySelector<HTMLElement>('#rsfx-led');
  const frequencyReadout = root.querySelector<HTMLElement>('#rsfx-frequency-readout');
  const durationReadout = root.querySelector<HTMLElement>('#rsfx-duration-readout');
  const waveformSelect = root.querySelector<HTMLSelectElement>('#rsfx-waveform-select');
  const playButton = root.querySelector<HTMLButtonElement>('#rsfx-play');
  const stopButton = root.querySelector<HTMLButtonElement>('#rsfx-stop');
  const downloadButton = root.querySelector<HTMLButtonElement>('#rsfx-download');
  const randomizeButton = root.querySelector<HTMLButtonElement>('#rsfx-randomize');
  const resetButton = root.querySelector<HTMLButtonElement>('#rsfx-reset');
  const presetButtons = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-preset]'));
  const statusReady = root.dataset.statusReady ?? 'Ready';
  const statusPlaying = root.dataset.statusPlaying ?? 'Playing';
  const statusStopped = root.dataset.statusStopped ?? 'Stopped';
  const statusDownloaded = root.dataset.statusDownloaded ?? 'Downloaded';
  const statusAudioBlocked = root.dataset.statusAudioBlocked ?? 'Audio playback is unavailable';
  const statusGenerating = root.dataset.statusGenerating ?? 'Generating';
  const generatedLabel = root.dataset.generatedLabel ?? 'Generated';
  const frequencyLabel = root.dataset.frequencyLabel ?? 'Frequency';
  const frequencyEndLabel = root.dataset.frequencyEndLabel ?? 'End frequency';
  const durationLabel = root.dataset.durationLabel ?? 'Duration';
  const activePresetButton = presetButtons.find((button) => button.classList.contains('is-active'));
  let currentPreset = (activePresetButton?.dataset.preset as SfxPreset | undefined) ?? 'explosion';
  let params = createDefaultParams();
  let generated = generateSfx(params);
  let audioContext: AudioContext | undefined;
  let source: AudioBufferSourceNode | undefined;

  const input = (id: string): HTMLInputElement | null => root.querySelector<HTMLInputElement>(id);
  const output = (id: string): HTMLOutputElement | null => root.querySelector<HTMLOutputElement>(id);

  function drawCenterLine(ctx: CanvasRenderingContext2D, width: number, height: number, color: string): void {
    ctx.shadowBlur = 0;
    ctx.strokeStyle = color;
    ctx.globalAlpha = 0.45;
    ctx.beginPath();
    ctx.moveTo(0, height / 2);
    ctx.lineTo(width, height / 2);
    ctx.stroke();
    ctx.globalAlpha = 1;
  }

  function drawSamplesPath(ctx: CanvasRenderingContext2D, samples: Float32Array, width: number, height: number): void {
    ctx.beginPath();
    const step = Math.max(1, Math.floor(samples.length / width));
    for (let x = 0; x < width; x += 1) {
      const index = Math.min(samples.length - 1, x * step);
      const sample = samples[index] ?? 0;
      const y = height / 2 - sample * height * 0.38;
      if (x === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.stroke();
  }

  function drawWaveform(): void {
    if (!canvas || !root) return;
    const rect = canvas.getBoundingClientRect();
    const ratio = window.devicePixelRatio || 1;
    const width = Math.max(320, Math.round(rect.width * ratio));
    const height = Math.max(160, Math.round(rect.height * ratio));
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext('2d');
    if (!context) return;
    const styles = getComputedStyle(root);
    const waveformColor = styles.getPropertyValue('--rsfx-waveform').trim() || '#72f2c8';
    const waveformGlow = styles.getPropertyValue('--rsfx-waveform-glow').trim() || 'rgba(114, 242, 200, 0.75)';
    context.clearRect(0, 0, width, height);
    context.lineWidth = Math.max(1, ratio * 1.5);
    context.strokeStyle = waveformColor;
    context.shadowColor = waveformGlow;
    context.shadowBlur = 8 * ratio;
    drawSamplesPath(context, generated.samples, width, height);
    drawCenterLine(context, width, height, waveformGlow);
  }

  function setStatus(value: string): void {
    if (status) status.textContent = value;
  }

  function setOutputValue(id: string, value: string): void {
    const target = output(id);
    if (target) target.value = value;
  }

  function updateOutputReadouts(): void {
    setOutputValue('#rsfx-frequency-value', formatFrequency(params.frequency));
    setOutputValue('#rsfx-sweep-value', `${Math.round(params.sweep * 100)}%`);
    setOutputValue('#rsfx-duration-value', formatDuration(params.duration));
    setOutputValue('#rsfx-decay-value', `${Math.round(params.decay * 100)}%`);
    setOutputValue('#rsfx-vibrato-value', `${Math.round(params.vibrato * 100)}%`);
    setOutputValue('#rsfx-lowpass-value', formatFrequency(params.lowpass));
    setOutputValue('#rsfx-highpass-value', formatFrequency(params.highpass));
    setOutputValue('#rsfx-noise-mix-value', `${Math.round(params.noiseMix * 100)}%`);
  }

  function renderReadouts(): void {
    updateOutputReadouts();
    if (readout) readout.textContent = `${generatedLabel} · ${params.waveform}`;
    if (frequencyReadout) frequencyReadout.textContent = `${frequencyLabel} ${formatFrequency(params.frequency)} → ${frequencyEndLabel} ${formatFrequency(params.frequencyEnd)}`;
    if (durationReadout) durationReadout.textContent = `${durationLabel} ${formatDuration(params.duration)}`;
  }

  function syncInputs(): void {
    const values: Record<string, string> = {
      '#rsfx-frequency': String(Math.round(params.frequency)),
      '#rsfx-sweep': String(Math.round(params.sweep * 100)),
      '#rsfx-duration': params.duration.toFixed(2),
      '#rsfx-decay': String(Math.round(params.decay * 100)),
      '#rsfx-vibrato': String(Math.round(params.vibrato * 100)),
      '#rsfx-lowpass': String(Math.round(params.lowpass)),
      '#rsfx-highpass': String(Math.round(params.highpass)),
      '#rsfx-noise-mix': String(Math.round(params.noiseMix * 100)),
    };
    Object.entries(values).forEach(([selector, value]) => {
      const element = input(selector);
      if (element) element.value = value;
    });
    if (waveformSelect) waveformSelect.value = params.waveform;
    renderReadouts();
  }

  function regenerate(nextParams: SfxParams, nextStatus = statusReady): void {
    setStatus(statusGenerating);
    params = { ...nextParams, frequencyEnd: calculateEndFrequency(nextParams.frequency, nextParams.sweep) };
    generated = generateSfx(params);
    syncInputs();
    drawWaveform();
    setStatus(nextStatus);
  }

  function parseInputValue(selector: string, fallback: number, divisor = 1): number {
    const raw = input(selector)?.value;
    if (raw === undefined) return fallback;
    const val = Number(raw) / divisor;
    return Number.isFinite(val) ? val : fallback;
  }

  function readParams(): SfxParams {
    const frequency = parseInputValue('#rsfx-frequency', params.frequency);
    const sweep = parseInputValue('#rsfx-sweep', params.sweep * 100, 100);
    const duration = parseInputValue('#rsfx-duration', params.duration);
    const decay = parseInputValue('#rsfx-decay', params.decay * 100, 100);
    const vibrato = parseInputValue('#rsfx-vibrato', params.vibrato * 100, 100);
    const lowpass = parseInputValue('#rsfx-lowpass', params.lowpass);
    const highpass = parseInputValue('#rsfx-highpass', params.highpass);
    const noiseMix = parseInputValue('#rsfx-noise-mix', params.noiseMix * 100, 100);
    const waveform = (waveformSelect?.value ?? params.waveform) as SfxWaveform;
    return {
      ...params,
      waveform,
      frequency,
      frequencyEnd: calculateEndFrequency(frequency, sweep),
      duration,
      decay,
      sweep,
      vibrato,
      lowpass,
      highpass,
      noiseMix,
    };
  }

  function stopAudio(): void {
    if (source) {
      source.stop();
      source.disconnect();
      source = undefined;
    }
    if (led) led.classList.remove('is-on');
    setStatus(statusStopped);
  }

  async function playAudio(): Promise<void> {
    try {
      if (!audioContext) audioContext = new AudioContext();
      await audioContext.resume();
      stopAudio();
      const buffer = audioContext.createBuffer(1, generated.samples.length, generated.sampleRate);
      buffer.getChannelData(0).set(generated.samples);
      source = audioContext.createBufferSource();
      source.buffer = buffer;
      source.connect(audioContext.destination);
      source.onended = () => {
        source = undefined;
        if (led) led.classList.remove('is-on');
        setStatus(statusReady);
      };
      source.start();
      if (led) led.classList.add('is-on');
      setStatus(statusPlaying);
    } catch {
      setStatus(statusAudioBlocked);
    }
  }

  function downloadWav(): void {
    const wav = encodeWav(generated.samples, generated.sampleRate);
    const url = URL.createObjectURL(new Blob([wav.buffer as ArrayBuffer], { type: 'audio/wav' }));
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `retro-${params.waveform}-${Math.round(params.frequency)}hz.wav`;
    anchor.click();
    URL.revokeObjectURL(url);
    setStatus(statusDownloaded);
  }

  function bindControls(): void {
    const ids = ['#rsfx-frequency', '#rsfx-sweep', '#rsfx-duration', '#rsfx-decay', '#rsfx-vibrato', '#rsfx-lowpass', '#rsfx-highpass', '#rsfx-noise-mix'];
    ids.forEach((selector) => {
      input(selector)?.addEventListener('input', () => regenerate(readParams()));
    });
    waveformSelect?.addEventListener('change', () => regenerate(readParams()));
    presetButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const preset = button.dataset.preset as SfxPreset;
        currentPreset = preset;
        presetButtons.forEach((item) => item.classList.toggle('is-active', item === button));
        regenerate(getPresetParams(preset));
      });
    });
    playButton?.addEventListener('click', () => void playAudio());
    stopButton?.addEventListener('click', stopAudio);
    downloadButton?.addEventListener('click', downloadWav);
    randomizeButton?.addEventListener('click', () => {
      regenerate(getPresetParams(currentPreset));
      void playAudio();
    });
    resetButton?.addEventListener('click', () => {
      currentPreset = 'explosion';
      presetButtons.forEach((item) => item.classList.toggle('is-active', item.dataset.preset === 'explosion'));
      regenerate(createDefaultParams());
    });
    window.addEventListener('resize', drawWaveform);
  }

  syncInputs();
  bindControls();
  drawWaveform();
  void canvas?.getContext('2d');
}
