import type { ToolLocaleContent } from '../../../types';
import type { ItchioGameTesterUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<ItchioGameTesterUI> = {
  slug: 'itch-io-spiel-tester',
  title: 'Itch.io Webspiel Inspektor und Echtzeit Auflösungs Optimierer',
  description: 'HTML5-Exportdateien oder ZIP-Archive hochladen, Viewports live testen, Scrollbars beheben, Godot- und Unity-WebGL-Builds prüfen und Itch.io-Embed-Einstellungen generieren.',
  ui: {
    dropzoneTitle: 'Spiel-Build oder ZIP-Archiv hier ablegen',
    dropzoneHint: 'Eine .ZIP-Datei, exportierten Ordner oder HTML5-Build-Dateien in diesen Bereich ziehen.',
    chooseFiles: 'Spieldatei oder Ordner auswählen',
    engineDetected: 'Erkannte Engine',
    compatibilityScore: 'Itch.io-Kompatibilitätsbewertung',
    viewportWidth: 'Viewport-Breite (px)',
    viewportHeight: 'Viewport-Höhe (px)',
    presets: 'Schnelle Auflösungs-Presets',
    fitTest: 'Live-Layout- und Scrollbar-Test',
    copySettings: 'Itch.io Embed-Einstellungen kopieren',
    copied: 'In Zwischenablage kopiert',
    embedMode: 'Embed-Modus',
    scrollbars: 'Scrollbars aktivieren',
    noIssuesFound: 'Alle Prüfungen erfolgreich bestanden. Das Paket ist zu 100% mit den Itch.io-Standards konform.',
    filesInspected: 'Inspizierte Dateien',
    resetViewport: 'Viewport zurücksetzen',
    autoScaleToggle: 'Viewport automatisch auf Bildschirmbreite skalieren',
    scaledNotice: 'Der Viewport überschreitet die Bildschirmbreite. Künstlicher Zoom-Out angewendet, damit der Canvas vollständig sichtbar ist. Deaktiviere die automatische Skalierung, um das echte Layout zu sehen.',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Formatierungsrichtlinien für Itch.io HTML5-Spielexporte'
    },
    {
      type: 'paragraph',
      html: 'Das Veröffentlichen von HTML5- und WebGL-Spielen auf Itch.io erfordert eine präzise Konfiguration von Viewport-Dimensionen, Archivdateistrukturen und Cross-Origin-Sicherheitsheadern.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Standard-Web-Seitenverhältnis', value: '16:9 Querformat' },
        { label: 'Klassische Itch-Auflösung', value: '960 x 540 px' },
        { label: 'Einstiegspunkt-Datei', value: 'index.html im Root' },
        { label: 'Godot 4 Anforderung', value: 'COOP / COEP Header' }
      ]
    },
    {
      type: 'tip',
      html: 'Beim Einbetten eines 1280x720 WebGL-Spiels auf Itch.io die Embed-Viewport-Dimensionen genau auf 1280x720 setzen.'
    },
    {
      type: 'title',
      level: 3,
      text: 'HTML5 Spiele für Itch.io vorbereiten'
    },
    {
      type: 'paragraph',
      html: 'Ein sauberer Webexport benötigt eine index.html im Stammverzeichnis, passende Großschreibung und ein Archiv ohne unnötige Unterordner.'
    },
    {
      type: 'list',
      items: [
        'Build Ordner oder ZIP Archiv mit dem Testwerkzeug öffnen.',
        'Viewport und Seitenverhältnis auf das geplante Einbettungsfenster abstimmen.',
        'Kompatibilitätsbericht vor der Veröffentlichung vollständig lesen.'
      ]
    },
    {
      type: 'title',
      level: 3,
      text: 'Godot und WebGL Fehler vermeiden'
    },
    {
      type: 'paragraph',
      html: 'Bei Godot Webexporten müssen die benötigten Sicherheitsheader und Browserfunktionen verfügbar sein. Testen Sie das Spiel zusätzlich in einem privaten Browserfenster.'
    },
    {
      type: 'title',
      level: 2,
      text: 'Viewport, Canvas und Einbettung gemeinsam prüfen',
    },
    {
      type: 'paragraph',
      html: 'Vergleichen Sie die tatsächliche Canvasgröße mit dem geplanten Itch.io-Viewport. Ein Seitenverhältnis von 16:9 verhindert allein noch keine Scrollbars: CSS-Ränder, feste Mindestbreiten und ein nicht skaliertes Canvas können weiterhin Überlauf erzeugen.',
    },
    {
      type: 'paragraph',
      html: 'Lesen Sie den Bericht nach jedem Build erneut, weil sich Dateinamen, Einstiegspunkt und Engine-Ausgabe ändern können. Der Tester zeigt strukturelle und geometrische Hinweise; er ersetzt keinen Test auf verschiedenen Browsern und Geräten.',
    },
  ],
  faq: [
    {
      question: 'Warum zeigt mein Godot 4-Spiel auf Itch.io einen schwarzen Bildschirm?',
      answer: 'Godot 4 Web-Exporte verwenden WebAssembly-Multithreading, das SharedArrayBuffer-Unterstützung erfordert. Aktiviere dies in den Frame-Optionen deines Itch.io-Spiels.'
    },
    {
      question: "Welche Einstellung sollte ich vor der Veröffentlichung prüfen? 1",
      answer: "Prüfen Sie Abmessungen, Zielumgebung und Vorschau gemeinsam, bevor Sie die Datei veröffentlichen.",
    },
  ],
  howTo: [
    { name: 'Spieldateien oder ZIP hochladen', text: 'ZIP-Archiv oder Build-Verzeichnis mit index.html per Drag & Drop hinzufügen.' },
    { name: 'Kompatibilitätsbericht prüfen', text: 'Automatischen Auditbericht auf root-index.html, Groß-/Kleinschreibung und Engine-Erkennung prüfen.' },
    { name: 'Viewport live anpassen', text: 'Auflösungsregler und Seitenverhältnis-Chips nutzen, um das Iframe-Embedding live zu testen.' },
    { name: 'Itch.io-Einstellungen kopieren', text: 'Auf Einstellungen kopieren klicken, um Breite und Höhe für die Itch.io-Einreichungsseite zu übernehmen.' }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Itch.io Webspiel Inspektor',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Warum zeigt mein Godot 4-Spiel auf Itch.io einen schwarzen Bildschirm?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Godot 4 Web-Exporte verwenden WebAssembly-Multithreading, das SharedArrayBuffer-Unterstützung erfordert. Aktiviere dies in den Frame-Optionen deines Itch.io-Spiels.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'So prüfst und testest du deinen Itch.io Game Viewport',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Spieldateien oder ZIP hochladen',
          text: 'ZIP-Archiv oder Build-Verzeichnis mit index.html per Drag & Drop hinzufügen.'
        },
        {
          '@type': 'HowToStep',
          name: 'Viewport live anpassen',
          text: 'Auflösungsregler und Seitenverhältnis-Chips nutzen, um das Iframe-Embedding live zu testen.'
        }
      ]
    }
  ],
  bibliography: bibliographyEntries
};
