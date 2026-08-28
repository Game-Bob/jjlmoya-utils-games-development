import type { ToolLocaleContent } from '../../../types';
import type { RetroSfxGeneratorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<RetroSfxGeneratorUI> = {
  slug: 'retro-geluidseffect-generator-games',
  title: 'Retro Geluidseffect Generator voor Games',
  description: 'Maak korte retro game geluidseffecten in je browser met presets, golfvormbediening, een live oscilloscoop en WAV-export.',
  ui: {
    waveformLabel: 'Golfvorm',
    waveformSquare: 'Vierkant',
    waveformSawtooth: 'Zaagtand',
    waveformSine: 'Sinus',
    waveformTriangle: 'Driehoek',
    waveformNoise: 'Ruis',
    presetLabel: 'Snelle geluidsbank',
    presetExplosion: 'Explosie',
    presetLaser: 'Laser',
    presetJump: 'Sprong',
    presetCoin: 'Munt',
    presetPowerUp: 'Power-up',
    frequencyLabel: 'Startfrequentie',
    frequencyEndLabel: 'Eindfrequentie',
    durationLabel: 'Lengte',
    decayLabel: 'Uitsterven',
    sweepLabel: 'Toonhoogte sweep',
    vibratoLabel: 'Vibrato',
    lowpassLabel: 'Laagdoorlaat',
    highpassLabel: 'Hoogdoorlaat',
    noiseMixLabel: 'Ruis mix',
    toneSection: 'Toon',
    dynamicsSection: 'Dynamiek',
    filterSection: 'Textuur',
    playButton: 'Geluid afspelen',
    stopButton: 'Stoppen',
    downloadButton: 'Download WAV',
    randomizeButton: 'Willekeurig',
    resetButton: 'Resetten',
    waveformPreviewLabel: 'Live golfvorm',
    generatedLabel: 'Gegenereerd',
    statusReady: 'Klaar om te beluisteren',
    statusPlaying: 'Speelt af in je browser',
    statusStopped: 'Afspelen gestopt',
    statusDownloaded: 'WAV gedownload',
    statusAudioBlocked: 'Afspelen vereist audio-toestemming in het browsertabblad',
    statusGenerating: 'Geluid wordt gerenderd',
    presetHint: 'Kies een startpunt en pas het signaal aan met de regelaars.',
    monoWavHint: '44.1 kHz · 16-bit mono WAV',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Maak game audio tijdens een jam rechtstreeks in je browser',
    },
    {
      type: 'paragraph',
      html: 'Een goed game geluidseffect moet direct een actie communiceren. Een stijgende toonhoogte voelt als een sprong, een snelle daling als een laser en een ruisgeluid als een explosie. Deze generator maakt het eenvoudig om deze patronen aan te passen.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Geluids-presets', value: '5 startpatronen' },
        { label: 'Oscillator keuzes', value: '5 golfvormen' },
        { label: 'Exportformaat', value: '16-bit PCM WAV' },
        { label: 'Verwerking', value: 'In de browser' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Wat de regelaars veranderen',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Toonhoogte en beweging',
          description: 'De toonregelaars bepalen de identiteit van het geluid.',
          points: [
            'Startfrequentie bepaalt de begintoon',
            'Sweep verandert de frequentie naar het eindpunt',
            'Vibrato voegt een lichte trilling toe',
            'Verschillende golfvormen maken unieke klankkleuren',
          ],
        },
        {
          title: 'Vorm en textuur',
          description: 'Dynamiek en filters bepalen hoe het geluid uitklinkt.',
          points: [
            'Lengte bepaalt de totale tijdsduur',
            'Decay regelt hoe snel het volume afneemt',
            'Laagdoorlaatfilter maakt scherpe tonen zachter',
            'Hoogdoorlaatfilter verwijdert lage tonen',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Praktische recepten voor game-events',
    },
    {
      type: 'table',
      headers: ['Event', 'Handige startpreset', 'Eerste aanpassing om te proberen'],
      rows: [
        ['Explosie', 'Ruis met lage frequentie', 'Verleng de duur en verlaag de laagdoorlaat voor meer impact'],
        ['Laser', 'Zaagtand met dalende sweep', 'Verkort de duur en verhoog de hoogdoorlaat'],
        ['Sprong', 'Vierkant met stijgende sweep', 'Verminder decay om de stijging duidelijk te horen'],
        ['Munt', 'Vierkant met korte stijgende sweep', 'Verhoog startfrequentie voor een helder geluid'],
        ['Power-up', 'Driehoek met lange stijgende sweep', 'Voeg vibrato toe voor meer dynamiek'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Waarom WAV ideaal is voor prototypes',
    },
    {
      type: 'paragraph',
      html: 'WAV is een universeel formaat dat zonder extra bibliotheken direct kan worden geimporteerd in game engines.',
    },
    {
      type: 'tip',
      title: 'Luister op het gewenste spelvolume',
      html: 'Test het gedownloade WAV-bestand direct in je game om te kijken of het past bij de achtergrondmuziek.',
    },
    { type: 'paragraph', html: 'Luister het geluid ook in de echte gamemix: een helder effect kan afzonderlijk goed klinken maar dialoog of muziek maskeren. Controleer volume, clipping en duur voordat je het als definitief asset gebruikt.' },
  ],
  faqTitle: 'Veelgestelde Vragen',
  faq: [
    {
      question: 'Worden mijn geluiden geupload naar een server?',
      answer: 'Nee. Alle synthese en WAV-codering vinden plaats in je browser.',
    },
    {
      question: 'Kan ik de geluiden gebruiken in mijn commerciele game?',
      answer: 'Ja, de gegeneerde geluiden zijn vrij te gebruiken in je projecten.',
    },
    {
      question: 'Hoe werkt de toonhoogte sweep?',
      answer: 'De slider berekent de eindfrequentie evenredig aan de startfrequentie.',
    },
    {
      question: 'Wat te doen als er geen geluid is?',
      answer: 'Controleer of audio is toegestaan in je browser en klik opnieuw op Geluid afspelen.',
    },
  ],
  howTo: [
    {
      name: 'Kies een preset',
      text: 'Kies Explosie, Laser, Sprong, Munt of Power-up.',
    },
    {
      name: 'Vorm het signaal',
      text: 'Pas golfvorm, frequentie, duur en filters aan.',
    },
    {
      name: 'Beluister het resultaat',
      text: 'Klik op Geluid afspelen voor een live preview.',
    },
    {
      name: 'Download WAV',
      text: 'Klik op Download WAV om het bestand op te slaan.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Retro Geluidseffect Generator voor Games',
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'EUR',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Worden mijn geluiden geupload naar een server?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nee. Alle synthese vindt plaats in je browser.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Hoe maak je een retro geluidseffect',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Kies een preset',
          text: 'Kies een geluidspreset.',
        },
      ],
    },
  ],
  bibliographyTitle: 'Referenties',
  bibliography: bibliographyEntries,
};
