import type { ToolLocaleContent } from '../../../types';
import type { AudioLoopPointFinderUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<AudioLoopPointFinderUI> = {
  slug: 'game-audio-loop-punt-zoeker',
  title: 'Game Audio Loop Punt Zoeker en Metadata Injector',
  description: 'Vind exacte audio-looppunten, lijn uit op nuldoorgangen om kliks te elimineren en exporteer WAV-bestanden met LOOPSTART- en LOOPEND-metadata.',
  ui: {
    title: 'Game Audio Loop Punt Zoeker',
    subtitle: 'Interactieve golfvormanalysator, nuldoorgangdetector en WAV metadatatagger',
    dropzoneTitle: 'Sleep audiobestand hierheen of klik om te bladeren',
    dropzoneSubtitle: 'Ondersteunt WAV, OGG, MP3 en FLAC audiotracks',
    dropzoneButton: 'Selecteer Audiobestand',
    audioInfoTitle: 'Eigenschappen Audiotrack',
    durationLabel: 'Duur',
    sampleRateLabel: 'Sample-frequentie',
    channelsLabel: 'Audiokanalen',
    totalSamplesLabel: 'Totaal Aantal Samples',
    loopControlsTitle: 'Loopregio Configuratie',
    loopStartLabel: 'Loop-start Marker',
    loopEndLabel: 'Loop-einde Marker',
    loopDurationLabel: 'Loop-duur',
    zeroCrossingLabel: 'Nuldoorgang Uitlijning',
    snapZeroCrossingButton: 'Lijn Markers Uit op Dichtstbijzijnde Nuldoorgang',
    playLoopButton: 'Naadloze Loop Voorvertoning',
    pauseLoopButton: 'Pauzeer Afspelen',
    stopLoopButton: 'Stop Afspelen',
    exportWavButton: 'Exporteer WAV met Loop-metadata',
    sampleUnitLabel: 'Samples',
    secondUnitLabel: 'Seconden',
    zoomLabel: 'Golfvorm Zoom',
    zoomInButton: 'Inzoomen',
    zoomOutButton: 'Uitzoomen',
    resetZoomButton: 'Weergave Herstellen',
    noFileSelected: 'Nog geen audiobestand geladen',
    invalidAudioFile: 'Kan audiobestand niet decoderen',
    presetsTitle: 'Snelle Voorinstellingen',
    presetFullTrack: 'Volledige Track Loopen',
    presetIntroCut: '10% Intro Overslaan',
    presetMiddleLoop: 'Middelste 50% Sectie',
    statusLooping: 'Loop-afspelen Actief',
    statusPaused: 'Afspelen Gepauzeerd',
    statusReady: 'Audio Geladen en Gereed',
    statusLoaded: 'Audiotrack succesvol geladen',
    statusDecodeError: 'Fout bij decoderen van audiobestand',
    statusSnapped: 'Markers uitgelijnd op nuldoorgangen',
    statusStopped: 'Afspelen gestopt',
    statusExported: 'WAV-bestand geëxporteerd met ingebouwde loop-tags',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Naadloze Game Audio Looping en Sample Uitlijning',
    },
    {
      type: 'paragraph',
      html: 'Het bereiken van continue achtergrondmuziek in videogames vereist exacte sample-uitlijning bij loopgrenzen. Moderne game-engines zoals Unity, Godot, Unreal Engine, FMOD en Wwise gebruiken ingebouwde loop-metadata zoals LOOPSTART en LOOPEND.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Sample-frequentie Precisie', value: '44.1 kHz / 48 kHz' },
        { label: 'Nuldoorgang Drempel', value: '0.00 Amplitude' },
        { label: 'Metadata Standaard', value: 'RIFF smpl en INFO' },
        { label: 'Klik Reductie', value: '100% Fase Uitgelijnd' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Nuldoorgangen voor Klikreductie',
    },
    {
      type: 'tip',
      title: 'Nuldoorgang Strategie',
      html: 'Lijn loop-start en loop-einde markers altijd uit op positieve nuldoorgangpunten. Dit voorkomt vervelende tikjes en faseverschillen tijdens het afspelen.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Vergelijkingstabel Metadata Compatibiliteit',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'RIFF smpl Chunk Marker',
          description: 'Standaard binaire metadata ingebouwd in de WAV-header',
          points: [
            'Direct ondersteund door Godot, FMOD, Wwise en GameMaker',
            'Exacte precisie per sample zonder verloop',
            'Slaat loop-markers direct op in het WAV-bestand',
            'Voorkomt akoestische tikken in combinatie met nuldoorgang',
          ],
        },
        {
          title: 'Handmatig Audio Knippen',
          description: 'Intro en loop splitsen in afzonderlijke bestanden',
          points: [
            'Gebuikt door eenvoudige mediaspelers',
            'Gevoelig voor kleine pauzes en milliseconde-afwijkingen',
            'Vereist het beheren van meerdere bestanden',
            'Hoog risico op tikjes bij overgangen',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Referentietabel Sample-frequenties',
    },
    {
      type: 'table',
      headers: ['Sample-frequentie', 'Samples per Second', 'Aanbevolen Toepassing', 'Tijdsresolutie'],
      rows: [
        ['44,100 Hz', '44,100', 'Standaard CD-kwaliteit Soundtrack', '0.0226 ms per sample'],
        ['48,000 Hz', '48,000', 'Moderne Desktop en Console Games', '0.0208 ms per sample'],
        ['96,000 Hz', '96,000', 'High Definition Master Audio', '0.0104 ms per sample'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Geautomatiseerde Metadata Injectie op Byte-niveau',
    },
    {
      type: 'paragraph',
      html: 'Bij het exporteren van audiotracks vanuit deze tool worden nieuwe metadatastructuren direct in de RIFF-header van het WAV-bestand geplaatst.',
    },
  ],
  faqTitle: 'Veelgestelde Vragen',
  faq: [
    {
      question: 'Wat zijn LOOPSTART en LOOPEND metadata tags?',
      answer: 'LOOPSTART en LOOPEND zijn velden gemeten in het exacte aantal samples.',
    },
    {
      question: 'Waarom ontstaan er tikjes bij looppunten?',
      answer: 'Tikjes ontstaan wanneer de golfvorm aan het einde niet aansluit op de amplicude of fase van het begin.',
    },
    {
      question: 'Wordt mijn originele audiobestand geüpload?',
      answer: 'Nee. Alles gebeurt lokaal in het geheugen van uw browser.',
    },
  ],
  howTo: [
    {
      name: 'Laad Audiotrack',
      text: 'Sleep uw muziekbestand of selecteer een WAV-, OGG-, MP3- of FLAC-bestand.',
    },
    {
      name: 'Plaats Loopmarkers',
      text: 'Stel de start en het einde van de loop in via de golfvorm.',
    },
    {
      name: 'Lijn Uit op Nuldoorgang',
      text: 'Klik op de knop om uit te lijnen op nuldoorgangen.',
    },
    {
      name: 'Test en Exporteer',
      text: 'Beluister de loop en exporteer het WAV-bestand met metadata.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Game Audio Loop Punt Zoeker',
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
          name: 'Wat zijn LOOPSTART en LOOPEND metadata tags?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'LOOPSTART en LOOPEND zijn velden gemeten in het exacte aantal samples.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Hoe vind en injecteer je audio-looppunten',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Laad Audiotrack',
          text: 'Sleep uw muziekbestand of selecteer een audiobestand.',
        },
      ],
    },
  ],
  bibliographyTitle: 'Referenties en Verder Lezen',
  bibliography: bibliographyEntries,
};
