import type { ToolLocaleContent } from '../../../types';
import type { AudioLoopPointFinderUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<AudioLoopPointFinderUI> = {
  slug: 'spiel-audio-loop-punkt-finder',
  title: 'Spiel Audio Loop Punkt Finder und Metadaten Injektor',
  description: 'Finden Sie präzise Audio-Loop-Punkte, richten Sie sie an Nulldurchgängen aus und exportieren Sie WAV-Dateien mit LOOPSTART- und LOOPEND-Metadaten.',
  ui: {
    title: 'Spiel Audio Loop Punkt Finder',
    subtitle: 'Interaktiver Wellenform Analyzer, Nulldurchgangs Detector und WAV Metadaten Tagger',
    dropzoneTitle: 'Audiodatei hier ablegen oder zum Durchsuchen klicken',
    dropzoneSubtitle: 'Unterstützt WAV, OGG, MP3 und FLAC Audiodateien',
    dropzoneButton: 'Audiodatei Auswählen',
    audioInfoTitle: 'Eigenschaften der Tonspur',
    durationLabel: 'Dauer',
    sampleRateLabel: 'Abtastrate',
    channelsLabel: 'Audiokanäle',
    totalSamplesLabel: 'Gesamtzahl der Samples',
    loopControlsTitle: 'Loop-Region Konfiguration',
    loopStartLabel: 'Loop-Start Marker',
    loopEndLabel: 'Loop-Ende Marker',
    loopDurationLabel: 'Loop Dauer',
    zeroCrossingLabel: 'Nulldurchgangsausrichtung',
    snapZeroCrossingButton: 'Marker am Nächsten Nulldurchgang Ausrichten',
    playLoopButton: 'Nahtlosen Loop Vorschauen',
    pauseLoopButton: 'Wiedergabe Pausieren',
    stopLoopButton: 'Wiedergabe Stoppen',
    exportWavButton: 'WAV mit Loop-Metadaten Exportieren',
    sampleUnitLabel: 'Samples',
    secondUnitLabel: 'Sekunden',
    zoomLabel: 'Wellenform Zoom',
    zoomInButton: 'Vergrößern',
    zoomOutButton: 'Verkleinern',
    resetZoomButton: 'Ansicht Zurücksetzen',
    noFileSelected: 'Noch keine Audiodatei geladen',
    invalidAudioFile: 'Audiodatei konnte nicht dekodiert werden',
    presetsTitle: 'Schnell-Presets',
    presetFullTrack: 'Ganze Spur Loopen',
    presetIntroCut: '10% Intro Überspringen',
    presetMiddleLoop: 'Mittlerer 50% Bereich',
    statusLooping: 'Loop-Wiedergabe Aktiv',
    statusPaused: 'Wiedergabe Pausiert',
    statusReady: 'Audio Geladen und Bereit',
    statusLoaded: 'Tonspur erfolgreich geladen',
    statusDecodeError: 'Fehler beim Dekodieren der Audiodatei',
    statusSnapped: 'Marker an Nulldurchgängen ausgerichtet',
    statusStopped: 'Wiedergabe gestoppt',
    statusExported: 'WAV-Datei mit Loop-Metadaten exportiert',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Nahtlose Spiel-Audio-Loops und Sample-Ausrichtung',
    },
    {
      type: 'paragraph',
      html: 'Für eine kontinuierliche Hintergrundmusik in Videospielen ist eine exakte Sample-Ausrichtung an den Loop-Grenzen erforderlich. Moderne Game-Engines wie Unity, Godot, Unreal Engine, FMOD und Wwise nutzen eingebettete Loop-Metadaten wie LOOPSTART und LOOPEND direkt aus den WAV-Headern.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Abtastraten-Präzision', value: '44.1 kHz / 48 kHz' },
        { label: 'Nulldurchgangs-Schwelle', value: '0.00 Amplitude' },
        { label: 'Metadaten-Standard', value: 'RIFF smpl und INFO' },
        { label: 'Klick-Reduzierung', value: '100% Phasen-Ausgerichtet' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Nulldurchgänge zur Klick Reduzierung Nutzen',
    },
    {
      type: 'tip',
      title: 'Nulldurchgangs Strategie',
      html: 'Richten Sie Loop-Start- und Loop-Ende-Marker immer an positiven Nulldurchgängen aus. Dies verhindert Knackgeräusche und Lautsprecherausschläge beim Loopen.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Vergleich der Metadaten Kompatibilität',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'RIFF smpl Chunk Marker',
          description: 'Standard Binär Metadaten im WAV Header',
          points: [
            'Unterstützt von Godot, FMOD, Wwise und GameMaker',
            'Exakte Sample Präzision ohne Drift',
            'Bündelt Loops direkt in der WAV Datei',
            'Verhindert Klicks mit Nulldurchgangsausrichtung',
          ],
        },
        {
          title: 'Manuelles Audio Schneiden',
          description: 'Trennen von Intro und Loop in separate Dateien',
          points: [
            'Genutzt von einfachen Medienplayern',
            'Anfällig für Milisekunden-Lücken',
            'Erfordert mehrere Dateien im Projekt',
            'Hohes Klick-Risiko an den Übergängen',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Standard Abtastraten Übersicht',
    },
    {
      type: 'table',
      headers: ['Abtastrate', 'Samples pro Sekunde', 'Empfohlener Einsatzbereich', 'Zeitauflösung'],
      rows: [
        ['44,100 Hz', '44,100', 'Standard CD Qualität Soundtrack', '0.0226 ms pro Sample'],
        ['48,000 Hz', '48,000', 'Moderne Desktop und Konsolenspiele', '0.0208 ms pro Sample'],
        ['96,000 Hz', '96,000', 'High Definition Master Audio', '0.0104 ms pro Sample'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Automatische Metadaten-Injektion auf Byte-Ebene',
    },
    {
      type: 'paragraph',
      html: 'Beim Exportieren von Tonspuren aus diesem Tool werden neue Metadatenstrukturen direkt in den RIFF-Header der ausgegebenen WAV-Binärdatei eingebettet. Die Anwendung erstellt sowohl einen Standard-Sample-Chunk als auch einen LIST-INFO-Chunk mit Text-Tags.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Loop-Länge und Phasenübergang beurteilen',
    },
    {
      type: 'paragraph',
      html: 'Ein Nulldurchgang reduziert Sprünge der Amplitude, garantiert aber nicht automatisch einen musikalisch passenden Übergang. Hören Sie den Anfang und das Ende gemeinsam an und prüfen Sie zusätzlich, ob Rhythmus, Harmonie und Hallfahne beim Wiederholen logisch weiterlaufen.',
    },
    {
      type: 'paragraph',
      html: 'Die Marker werden in Samples gespeichert und bleiben dadurch unabhängig von einer gerundeten Millisekundenanzeige. Exportieren Sie erst nach der akustischen Kontrolle und testen Sie die WAV-Datei anschließend in der Engine, die sie im Spiel abspielen soll.',
    },
  ],
  faqTitle: 'Häufig gestellte Fragen',
  faq: [
    {
      question: 'Was sind LOOPSTART- und LOOPEND-Metadaten-Tags?',
      answer: 'LOOPSTART und LOOPEND sind Metadatenfelder, die in absoluten Sample-Anzahlen gemessen werden. Game-Engines springen damit direkt vom Ende zum Anfang zurück.',
    },
    {
      question: 'Warum entstehen hörbare Klicks an Loop-Punkten?',
      answer: 'Klicks entstehen, wenn die Wellenform am Ende nicht mit der Amplitude oder Phase am Anfang übereinstimmt.',
    },
    {
      question: 'Wird meine originale Audiodatei hochgeladen?',
      answer: 'Nein. Die gesamte Verarbeitung erfolgt lokal im Speicher Ihres Browsers.',
    },
  ],
  howTo: [
    {
      name: 'Audiodatei Laden',
      text: 'Ziehen Sie Ihre Musikdatei per Drag and Drop oder wählen Sie eine WAV-, OGG-, MP3- oder FLAC-Datei aus.',
    },
    {
      name: 'Loop-Marker Positionieren',
      text: 'Nutzen Sie die Wellenformansicht oder die numerische Eingabe zur Feinjustierung der Marker.',
    },
    {
      name: 'An Nulldurchgängen Ausrichten',
      text: 'Klicken Sie auf die Schaltfläche zur Nulldurchgangsausrichtung.',
    },
    {
      name: 'Vorschauen und Exportieren',
      text: 'Hören Sie den nahtlosen Loop an und exportieren Sie die WAV-Datei mit Metadaten.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Spiel Audio Loop Punkt Finder',
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
          name: 'Was sind LOOPSTART- und LOOPEND-Metadaten-Tags?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'LOOPSTART und LOOPEND sind Metadatenfelder, die in absoluten Sample-Anzahlen gemessen werden.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'So finden und injizieren Sie Audio-Loop-Punkte',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Audiodatei Laden',
          text: 'Ziehen Sie Ihre Musikdatei per Drag and Drop oder wählen Sie eine Audiodatei aus.',
        },
      ],
    },
  ],
  bibliographyTitle: 'Referenzen und Weiterführende Literatur',
  bibliography: bibliographyEntries,
};
