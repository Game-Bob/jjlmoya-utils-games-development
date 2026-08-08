import type { ToolLocaleContent } from '../../../types';
import type { RetroSfxGeneratorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<RetroSfxGeneratorUI> = {
  slug: 'retro-sfx-generator',
  title: 'Retro Sound Effect Generator for Games',
  description: 'Create short retro game sound effects in your browser with instant presets, waveform controls, a live oscilloscope, and one-click WAV export.',
  ui: {
    waveformLabel: 'Waveform',
    waveformSquare: 'Square',
    waveformSawtooth: 'Sawtooth',
    waveformSine: 'Sine',
    waveformTriangle: 'Triangle',
    waveformNoise: 'Noise',
    presetLabel: 'Quick sound bank',
    presetExplosion: 'Explosion',
    presetLaser: 'Laser',
    presetJump: 'Jump',
    presetCoin: 'Coin',
    presetPowerUp: 'Power-up',
    frequencyLabel: 'Start frequency',
    frequencyEndLabel: 'End frequency',
    durationLabel: 'Length',
    decayLabel: 'Decay',
    sweepLabel: 'Pitch sweep',
    vibratoLabel: 'Vibrato',
    lowpassLabel: 'Low-pass',
    highpassLabel: 'High-pass',
    noiseMixLabel: 'Noise mix',
    toneSection: 'Tone',
    dynamicsSection: 'Dynamics',
    filterSection: 'Texture',
    playButton: 'Play sound',
    stopButton: 'Stop',
    downloadButton: 'Download WAV',
    randomizeButton: 'Randomize',
    resetButton: 'Reset',
    waveformPreviewLabel: 'Live waveform',
    generatedLabel: 'Generated',
    statusReady: 'Ready to audition',
    statusPlaying: 'Playing in your browser',
    statusStopped: 'Playback stopped',
    statusDownloaded: 'WAV downloaded',
    statusAudioBlocked: 'Playback needs an audio-enabled browser tab',
    statusGenerating: 'Rendering sound',
    presetHint: 'Choose a starting point, then shape the signal with the controls below.',
    monoWavHint: '44.1 kHz · 16-bit mono WAV',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Make Game Audio During a Jam Without Leaving the Browser',
    },
    {
      type: 'paragraph',
      html: 'A good game sound effect needs to communicate an action quickly. A bright pitch rise can read as a jump or power-up, a fast downward sweep can feel like a laser or falling object, and a noisy decaying burst can suggest an explosion. This generator turns those familiar arcade patterns into editable browser audio. Pick a preset, listen immediately, and adjust the signal while the waveform preview shows how the sound changes over time.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Sound presets', value: '5 starting patterns' },
        { label: 'Oscillator choices', value: '5 waveform shapes' },
        { label: 'Export format', value: '16-bit PCM WAV' },
        { label: 'Processing', value: 'Browser-based' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'What the Controls Change',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Pitch and movement',
          description: 'The tone controls define the identity of the sound.',
          points: [
            'Start frequency sets the initial pitch of the oscillator',
            'Pitch sweep moves toward a calculated end frequency',
            'Vibrato adds a gentle periodic pitch movement',
            'Square, sawtooth, sine, triangle, and noise create different harmonic textures',
          ],
        },
        {
          title: 'Shape and texture',
          description: 'The dynamics and texture controls define how the sound lands.',
          points: [
            'Length controls the time available for the effect to speak',
            'Decay makes the amplitude fall away faster or more gradually',
            'Low-pass filtering softens bright high frequencies',
            'High-pass filtering removes some low-frequency weight and noise mix adds grit',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'A Practical Recipe for Common Game Events',
    },
    {
      type: 'table',
      headers: ['Event', 'Useful starting point', 'First adjustment to try'],
      rows: [
        ['Explosion', 'Noise with a low pitch', 'Increase length and lower the low-pass filter for a heavier burst'],
        ['Laser', 'Sawtooth with a falling sweep', 'Shorten the length and raise the high-pass filter for a sharper attack'],
        ['Jump', 'Square with a rising sweep', 'Reduce decay to keep the upward motion audible'],
        ['Coin', 'Square with a short rising sweep', 'Raise the start frequency for a brighter pickup sound'],
        ['Power-up', 'Triangle with a long rising sweep', 'Add a little vibrato for a more animated result'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Why WAV Is a Useful Jam Export',
    },
    {
      type: 'paragraph',
      html: 'WAV is a practical handoff format for a prototype because it is easy to import into common game engines, audio editors, and asset pipelines without requiring a particular compression library. This tool writes a small mono PCM WAV file in memory and downloads it directly. The generated file is intentionally short and uncompressed; after the game loop works, you can decide whether the final build should use a compressed format such as Ogg Vorbis or another platform-specific asset format.',
    },
    {
      type: 'tip',
      title: 'Listen at the intended game volume',
      html: 'A sound that feels exciting in isolation can become tiring when triggered many times per second. Test the downloaded WAV in the game, leave headroom for music and ambience, and keep repeated UI or pickup sounds short enough that they do not smear into one another.',
    },
  ],
  faqTitle: 'Frequently Asked Questions',
  faq: [
    {
      question: 'Does the generator upload my sounds?',
      answer: 'No. The synthesis, preview, and WAV encoding happen in the browser session. Nothing needs to be sent to a server to create or download the file.',
    },
    {
      question: 'Can I use the downloaded sounds in my game?',
      answer: 'The generated audio is designed as a starting asset for prototypes and game-jam projects. Check the rules of your project or event, and review the final sound in the context of your own game before shipping.',
    },
    {
      question: 'Why does the pitch sweep change the end frequency?',
      answer: 'The sweep slider maps a negative value to a falling frequency and a positive value to a rising frequency. The interface recalculates the end frequency from the starting pitch so the motion remains proportional when you retune a sound.',
    },
    {
      question: 'What should I do if there is no sound?',
      answer: 'Make sure the browser tab is allowed to play audio and click Play sound again. Browsers commonly require a user gesture before an audio context can start.',
    },
  ],
  howTo: [
    {
      name: 'Choose a sound pattern',
      text: 'Select Explosion, Laser, Jump, Coin, or Power-up from the quick sound bank.',
    },
    {
      name: 'Shape the signal',
      text: 'Adjust the waveform, pitch, sweep, length, decay, vibrato, and texture sliders while watching the live waveform.',
    },
    {
      name: 'Audition the result',
      text: 'Click Play sound to hear the current parameters through the browser audio output.',
    },
    {
      name: 'Download a WAV',
      text: 'Click Download WAV to save the current sound as a 44.1 kHz, 16-bit mono PCM file for your prototype.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Retro Sound Effect Generator for Games',
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does the generator upload my sounds?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. The synthesis, preview, and WAV encoding happen in the browser session.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use the downloaded sounds in my game?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The generated audio is designed as a starting asset for prototypes and game-jam projects.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'How to create a retro game sound effect',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Choose a sound pattern',
          text: 'Select a quick sound bank preset.',
        },
        {
          '@type': 'HowToStep',
          name: 'Shape and export',
          text: 'Adjust the controls, preview the result, and download a WAV file.',
        },
      ],
    },
  ],
  bibliographyTitle: 'References and Further Reading',
  bibliography: bibliographyEntries,
};
