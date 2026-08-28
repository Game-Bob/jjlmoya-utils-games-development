import type { ToolLocaleContent } from '../../../types';
import type { AudioLoopPointFinderUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<AudioLoopPointFinderUI> = {
  slug: 'spel-audio-loop-punkt-hittare',
  title: 'Spel Audio Loop Punkt Hittare och Metadata Injektor',
  description: 'Hitta exakta ljudslingpunkter, passa in på nollgenomgångar för att eliminera klick och exportera WAV-filer med LOOPSTART- och LOOPEND-metadata.',
  ui: {
    title: 'Spel Audio Loop Punkt Hittare',
    subtitle: 'Interaktiv vågformsanalysator, nollgenomgångsdetektor och WAV metadatataggare',
    dropzoneTitle: 'Släpp ljudfilen här eller klicka för att bläddra',
    dropzoneSubtitle: 'Stöder WAV, OGG, MP3 och FLAC ljudspår',
    dropzoneButton: 'Välj Ljudfil',
    audioInfoTitle: 'Egenskaper för Ljudspår',
    durationLabel: 'Varaktighet',
    sampleRateLabel: 'Samplingsfrekvens',
    channelsLabel: 'Ljudkanaler',
    totalSamplesLabel: 'Totalt Antal Samplar',
    loopControlsTitle: 'Konfiguration av Loopregion',
    loopStartLabel: 'Markör för Loopstart',
    loopEndLabel: 'Markör för Loopslut',
    loopDurationLabel: 'Loopvaraktighet',
    zeroCrossingLabel: 'Nollgenomgångsanpassning',
    snapZeroCrossingButton: 'Anpassa Markörer till Närmaste Nollgenomgång',
    playLoopButton: 'Förhandsgranska Sömlös Loop',
    pauseLoopButton: 'Pausa Uppspelning',
    stopLoopButton: 'Stoppa Uppspelning',
    exportWavButton: 'Exportera WAV med Loop-metadata',
    sampleUnitLabel: 'Samplar',
    secondUnitLabel: 'Sekunder',
    zoomLabel: 'Vågformszoom',
    zoomInButton: 'Zooma In',
    zoomOutButton: 'Zooma Ut',
    resetZoomButton: 'Återställ Vy',
    noFileSelected: 'Ingen ljudfil inläst ännu',
    invalidAudioFile: 'Kunde inte avkoda ljudfilen',
    presetsTitle: 'Snabbinställningar',
    presetFullTrack: 'Loopa Hela Spåret',
    presetIntroCut: 'Hoppa över 10% Intro',
    presetMiddleLoop: 'Mitten 50% Sektion',
    statusLooping: 'Loop-uppspelning Aktiv',
    statusPaused: 'Uppspelning Pausad',
    statusReady: 'Ljud Inläst och Redo',
    statusLoaded: 'Ljudspår har lästs in framgångsrikt',
    statusDecodeError: 'Fel vid avkodning av ljudfil',
    statusSnapped: 'Markörer anpassade till nollgenomgångar',
    statusStopped: 'Uppspelning stoppad',
    statusExported: 'WAV-fil exporterad med inbäddade loop-taggar',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Sömlös Spelljudslooping och Samplingsjustering',
    },
    {
      type: 'paragraph',
      html: 'Att uppnå kontinuerlig bakgrundsmusik i tv-spel kräver exakt samplingsjustering vid loopgränser. Moderna spelmotorer som Unity, Godot, Unreal Engine, FMOD och Wwise använder inbäddade loop-metadata som LOOPSTART och LOOPEND.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Samplingsprecision', value: '44.1 kHz / 48 kHz' },
        { label: 'Nollgenomgångströskel', value: '0.00 Amplitud' },
        { label: 'Metadatastandard', value: 'RIFF smpl och INFO' },
        { label: 'Klickreducering', value: '100% Fasjusterad' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Strategi för Nollgenomgång',
    },
    {
      type: 'tip',
      title: 'Eliminera Klickljud',
      html: 'Passa alltid in både start- och slutmarkörer för loopen vid positiva nollgenomgångar. Detta förhindrar plötsliga amplitudhopp och klickljud i högtalarna.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Jämförelsetabell för Metadatakompatibilitet',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'RIFF smpl Chunk Markör',
          description: 'Standard binära metadata inbäddade i WAV-headern',
          points: [
            'Stöds nativt av Godot, FMOD, Wwise och GameMaker',
            'Ger exakt samplingsprecision utan tidsdrift',
            'Sparar loop-markörer i samma WAV-fil',
            'Eliminerar klick vid nollgenomgångsanpassning',
          ],
        },
        {
          title: 'Manuell Ljudklippning',
          description: 'Uppdelning av intro och loop i separata filer',
          points: [
            'Används av enkla mediaspelare',
            'Känslig för små pauser och tidsavvikelser',
            'Kräver hantering av flera filer i projektet',
            'Hög risk för klick vid övergångar',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Referenstabell för Samplingsfrekvenser',
    },
    {
      type: 'table',
      headers: ['Samplingsfrekvens', 'Samplar per Sekund', 'Rekommenderad Användning', 'Tidsupplösning'],
      rows: [
        ['44,100 Hz', '44,100', 'Standard CD-kvalitet i Spelmusik', '0.0226 ms per sample'],
        ['48,000 Hz', '48,000', 'Moderna Dator- och Konsolspel', '0.0208 ms per sample'],
        ['96,000 Hz', '96,000', 'High Definition Masterljud', '0.0104 ms per sample'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Automatiserad Metadatainjektion på Bytenivå',
    },
    {
      type: 'paragraph',
      html: 'När du exporterar ljudspår från detta verktyg bäddas nya metadatastrukturer in direkt i RIFF-headern på den exporterade WAV-filen.',
    },
    { type: 'title', level: 2, text: 'Bedöm loopens längd och fasövergång' },
    { type: 'paragraph', html: 'En nollgenomgång minskar amplitudhopp, men garanterar inte automatiskt en naturlig musikalisk övergång. Lyssna på början och slutet efter varandra och kontrollera rytm, harmoni och efterklang när loopen upprepas.' },
    { type: 'paragraph', html: 'Markörerna sparas i samplingar och påverkas därför inte av avrundning till millisekunder. Exportera efter lyssningskontrollen och testa WAV-filen i motorn som ska spela den i spelet.' },
    { type: 'paragraph', html: 'Kontrollera också att loopens längd passar den musikaliska frasen och inte klipper en ton eller en effektklang. Markörer i samplingar behåller precision mellan enheter, men resultatet ska alltid lyssnas på i spelets verkliga tempo och volym.' },
  ],
  faqTitle: 'Vanliga Frågor',
  faq: [
    {
      question: 'Vad är LOOPSTART- och LOOPEND-metadatataggar?',
      answer: 'LOOPSTART och LOOPEND är fält som mäts i exakt antal samplar.',
    },
    {
      question: 'Varför uppstår klickljud vid looppunkter?',
      answer: 'Klick uppstår när vågformen vid slutet inte stämmer överens med amplituden eller fasen i början.',
    },
    {
      question: 'Laddas min originalljudfil upp någonstans?',
      answer: 'Nej. All bearbetning sker lokalt i din webbläsares minne.',
    },
  ],
  howTo: [
    {
      name: 'Ladda Ljudspår',
      text: 'Dra och släpp din musikfil eller välj en WAV-, OGG-, MP3- eller FLAC-fil.',
    },
    {
      name: 'Placera Loopmarkörer',
      text: 'Ställ in start och slut på loopen via vågformen.',
    },
    {
      name: 'Anpassa till Nollgenomgång',
      text: 'Klicka på knappen för nollgenomgångsanpassning.',
    },
    {
      name: 'Testa och Exportera',
      text: 'Lyssna på den sömlösa loopen och exportera WAV-filen.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Spel Audio Loop Punkt Hittare',
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'SEK',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Vad är LOOPSTART- och LOOPEND-metadatataggar?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'LOOPSTART och LOOPEND är fält som mäts i antal samplar.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Hur du hittar och injicerar looppunkter för ljud',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Ladda Ljudspår',
          text: 'Dra och släpp din musikfil eller välj en ljudfil.',
        },
      ],
    },
  ],
  bibliographyTitle: 'Referenser och Vidare Läsning',
  bibliography: bibliographyEntries,
};
