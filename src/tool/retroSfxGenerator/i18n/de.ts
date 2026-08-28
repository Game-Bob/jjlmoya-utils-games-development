import type { ToolLocaleContent } from '../../../types';
import type { RetroSfxGeneratorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<RetroSfxGeneratorUI> = {
  slug: 'retro-soundeffekt-generator',
  title: 'Retro Soundeffekt Generator fuer Spiele',
  description: 'Erstellen Sie kurze Retro-Spielsoundeffekte im Browser mit Vorlagen, Wellenformsteuerung, Oszilloskop und WAV-Export.',
  ui: {
    waveformLabel: 'Wellenform',
    waveformSquare: 'Rechteck',
    waveformSawtooth: 'Saegezahn',
    waveformSine: 'Sinus',
    waveformTriangle: 'Dreieck',
    waveformNoise: 'Rauschen',
    presetLabel: 'Schnell-Soundbank',
    presetExplosion: 'Explosion',
    presetLaser: 'Laser',
    presetJump: 'Sprung',
    presetCoin: 'Muenze',
    presetPowerUp: 'Power-up',
    frequencyLabel: 'Startfrequenz',
    frequencyEndLabel: 'Endfrequenz',
    durationLabel: 'Laenge',
    decayLabel: 'Ablauf',
    sweepLabel: 'Tonhoehen-Sweep',
    vibratoLabel: 'Vibrato',
    lowpassLabel: 'Tiefpass',
    highpassLabel: 'Hochpass',
    noiseMixLabel: 'Rausch-Mix',
    toneSection: 'Ton',
    dynamicsSection: 'Dynamik',
    filterSection: 'Textur',
    playButton: 'Sound abspielen',
    stopButton: 'Stopp',
    downloadButton: 'WAV herunterladen',
    randomizeButton: 'Zufall',
    resetButton: 'Zuruecksetzen',
    waveformPreviewLabel: 'Echtzeit-Wellenform',
    generatedLabel: 'Generiert',
    statusReady: 'Bereit zum Anhoeren',
    statusPlaying: 'Wird im Browser abgespielt',
    statusStopped: 'Wiedergabe gestoppt',
    statusDownloaded: 'WAV heruntergeladen',
    statusAudioBlocked: 'Wiedergabe erfordert ein audiofaehiges Browser-Tab',
    statusGenerating: 'Sound wird gerendert',
    presetHint: 'Waehlen Sie einen Startpunkt und formen Sie das Signal mit den Reglern.',
    monoWavHint: '44.1 kHz · 16-Bit Mono-WAV',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Erstellen Sie Game-Audio waehrend eines Jams direkt im Browser',
    },
    {
      type: 'paragraph',
      html: 'Ein guter Spielsoundeffekt muss eine Aktion sofort vermitteln. Ein ansteigender Ton signalisiert einen Sprung oder ein Power-up, waehrend ein abfallender Sweep einen Laser darstellt. Dieser Generator verwandelt Arcade-Muster in bearbeitbare Audiosignale.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Sound-Presets', value: '5 Startmuster' },
        { label: 'Oszillatoren', value: '5 Wellenformen' },
        { label: 'Exportformat', value: '16-Bit PCM WAV' },
        { label: 'Verarbeitung', value: 'Im Browser' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Was die Regler steuern',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Tonhoehe und Bewegung',
          description: 'Die Tonregler bestimmen die Identitaet des Sounds.',
          points: [
            'Die Startfrequenz legt die Anfangstonhoehe fest',
            'Der Sweep bewegt die Frequenz zum Endwert',
            'Vibrato fuegt periodische Schwankungen hinzu',
            'Wellenformen erzeugen unterschiedliche Klangfarben',
          ],
        },
        {
          title: 'Form und Textur',
          description: 'Dynamik- und Filterregler bestimmen das Ausklingen.',
          points: [
            'Die Laenge bestimmt die Gesamtdauer des Effekts',
            'Decay steuert das Abklingen der Amplitude',
            'Tiefpassfilter daempfen hohe Frequenzen',
            'Hochpassfilter entfernen tiefe Frequenzen',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Praktische Rezepte fuer Spielevent-Sounds',
    },
    {
      type: 'table',
      headers: ['Event', 'Nützliches Preset', 'Erster Anpassungsschritt'],
      rows: [
        ['Explosion', 'Rauschen mit tiefer Frequenz', 'Laenge erhoehen und Tiefpass senken fuer mehr Druck'],
        ['Laser', 'Saegezahn mit abfallendem Sweep', 'Dauer verkuerzen fuer schaerferen Anschlag'],
        ['Sprung', 'Rechteck mit ansteigendem Sweep', 'Decay verringern, um Aufwaertsbegegung klarer zu hoeren'],
        ['Muenze', 'Rechteck mit kurzem Anstieg', 'Startfrequenz erhoehen fuer hellen Aufklaub-Sound'],
        ['Power-up', 'Dreieck mit langem Anstieg', 'Vibrato hinzufuegen fuer dynamischen Klang'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Warum WAV das ideale Jam-Format ist',
    },
    {
      type: 'paragraph',
      html: 'WAV ist ein universelles Format fuer Prototypen, da es von allen gängigen Game-Engines unterstützt wird. Die Datei wird lokal ohne Serververbindung erzeugt.',
    },
    {
      type: 'tip',
      title: 'Bei gewuenschter Lautstaerke testen',
      html: 'Ein einzeln spektakulaerer Sound kann im Spiel anstrengend wirken. Testen Sie den Sound direkt im Spielkontext.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Frequenzverlauf und Hüllkurve gemeinsam abstimmen',
    },
    {
      type: 'paragraph',
      html: 'Ein Sweep verändert die Tonhöhe über die Zeit, während Decay und Filter die wahrgenommene Energie formen. Hören Sie beide Eigenschaften zusammen an: Ein langer Anstieg kann trotz hoher Startfrequenz weich wirken, und Rauschen benötigt oft einen kürzeren Verlauf, damit der Effekt präzise bleibt.',
    },
    {
      type: 'paragraph',
      html: 'Der WAV-Export ist ein Ausgangspunkt für Prototypen und ersetzt keinen Mix im Spiel. Prüfen Sie Lautheit, Übersteuerung und den Abstand zu Musik und Dialog, bevor Sie das Geräusch als endgültiges Asset übernehmen.',
    },
  ],
  faqTitle: 'Haeufig gestellte Fragen',
  faq: [
    {
      question: 'Werden meine Sounds hochgeladen?',
      answer: 'Nein. Synthese und WAV-Kodierung erfolgen vollstaendig im Browser.',
    },
    {
      question: 'Kann ich die Sounds kommerziell nutzen?',
      answer: 'Die Audiodateien sind fuer Prototypen und Game Jams gedacht.',
    },
    {
      question: 'Wie funktioniert der Tonhoehen-Sweep?',
      answer: 'Der Regler errechnet proportional die Endfrequenz ausgehend vom Startton.',
    },
    {
      question: 'Was tun bei fehlender Audioausgabe?',
      answer: 'Pruefen Sie die Browsereinstellungen fuer Soundwiedergabe.',
    },
  ],
  howTo: [
    {
      name: 'Preset waehlen',
      text: 'Waehlen Sie Explosion, Laser, Sprung, Muenze oder Power-up.',
    },
    {
      name: 'Signal formen',
      text: 'Passen Sie Wellenform, Tonhoehe, Dauer und Filter an.',
    },
    {
      name: 'Sound testen',
      text: 'Klicken Sie auf Sound abspielen fuer eine Live-Hörprobe.',
    },
    {
      name: 'WAV herunterladen',
      text: 'Klicken Sie auf WAV herunterladen, um die Datei zu speichern.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Retro Soundeffekt Generator fuer Spiele',
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
          name: 'Werden meine Sounds hochgeladen?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nein. Synthese und WAV-Kodierung erfolgen vollstaendig im Browser.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Erstellen eines Retro-Spielsoundeffekts',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Preset waehlen',
          text: 'Waehlen Sie ein Sound-Preset.',
        },
      ],
    },
  ],
  bibliographyTitle: 'Referenzen',
  bibliography: bibliographyEntries,
};
