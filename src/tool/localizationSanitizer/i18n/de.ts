import type { ToolLocaleContent } from '../../../types';
import type { LocalizationSanitizerUI } from '../ui';

export const content: ToolLocaleContent<LocalizationSanitizerUI> = {
  slug: 'bereinigung-lokalisierungsdateien-godot-unity',
  title: 'Godot und Unity Lokalisierungs CSV Bereinigung',
  description: 'Pruefen Sie CSV oder JSON Uebersetzungsdateien auf leere Zellen, doppelte Schluessel und defekte Zeilen und exportieren Sie eine bereinigte Kopie.',
  ui: {
    csvTab: 'CSV Datei',
    jsonTab: 'JSON Datei',
    dropTitle: 'Uebersetzungsdatei hier ablegen',
    dropSubtitle: 'Struktur im Browser pruefen und Quelldatei lokal behalten.',
    browseButton: 'Dateien durchsuchen',
    sampleButton: 'Beispiel laden',
    clearButton: 'Leeren',
    inputLabel: 'Uebersetzungsdateieingabe',
    formatLabel: 'Format',
    healthLabel: 'Dateizustand',
    readyStatus: 'Bereit zum Import',
    reviewStatus: 'Ueberpruefung erforderlich',
    emptyCellsLabel: 'Leere Zellen',
    duplicateKeysLabel: 'Doppelte Schluessel',
    malformedRowsLabel: 'Defekte Zeilen',
    cleanRowsLabel: 'Saubere Zeilen',
    issueListTitle: 'Befunde',
    noIssues: 'Keine Probleme in diesem Durchgang gefunden.',
    previewTitle: 'Uebersetzungsvorschau',
    previewSubtitle: 'Die ersten Zeilen zeigen die normalisierte Struktur fuer den Export.',
    exportTitle: 'Saubere Datei exportieren',
    exportSubtitle: 'Duplikate werden entfernt fehlende Spalten aufgefuellt und CSV Werte maskiert.',
    downloadButton: 'Saubere Datei herunterladen',
    copyButton: 'Ausgabe kopieren',
    copiedMessage: 'Bereinigte Ausgabe in Zwischenablage kopiert.',
    emptyIssue: 'Leere Uebersetzungszelle',
    duplicateIssue: 'Doppelter Schluessel entfernt',
    malformedIssue: 'Spalten oder Anfuehrungszeichenfehler',
    parseIssue: 'Die Datei konnte nicht gelesen werden.',
    rowLabel: 'Zeile',
    columnLabel: 'Spalte',
    keyLabel: 'Schluessel',
    sampleFileName: 'lokalisierungs-beispiel.csv',
    privacyNote: 'Lokale Browserverarbeitung',
    waitingTitle: 'Warten auf eine Datei',
    waitingSubtitle: 'Legen Sie eine CSV oder JSON Datei ab um die Pruefung zu starten.',
    fileTypeNote: 'UTF8 CSV oder strukturiertes JSON',
  },
  seo: [
    { type: 'title', level: 2, text: 'Warum Lokalisierungsdateien beim Engine Import fehlschlagen' },
    {
      type: 'paragraph',
      html: 'Uebersetzungstabellen sind einfach zu bearbeiten und leicht zu beschaedigen. Ein Komma in einem Text oder fehlende Anfuehrungszeichen koennen alle Werte in die falsche Sprachspalte verschieben. Ein doppelter Schluessel führt ebenfalls zu Problemen beim Import.',
    },
    {
      type: 'paragraph',
      html: 'Der CSV Import von Godot erwartet eine Kopfzeile, eine erste Bezeichnerspalte und konsistente Uebersetzungsspalten. Das Unity Localization Paket nutzt ebenfalls CSV. Dieses Tool prueft die Struktur vor dem Import.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'CSV', label: 'Kommapruefung' },
        { value: 'JSON', label: 'Array und Map Eingabe' },
        { value: '0 Uploads', label: 'Nur im Browser' },
        { value: '1 Klick', label: 'Sauberer Export' },
      ],
    },
    { type: 'title', level: 2, text: 'Was das Tool ueberprueft' },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Vor dem Import erkannt',
          description: 'Schwer zu findende Probleme in grossen Tabellen',
          points: ['Leere Zellen', 'Doppelte Bezeichner', 'Zeilen mit fehlenden Spalten', 'Ungültige Anfuehrungszeichen'],
        },
        {
          title: 'Fuer Export normalisiert',
          description: 'Sichere automatische Reparaturen',
          points: ['Fehlende Zellen werden aufgefuellt', 'Zusaetzliche Felder zusammengefuehrt', 'Erste Vorkommen behalten', 'Originaldatei bleibt unberuehrt'],
        },
      ],
    },
    { type: 'title', level: 2, text: 'Ueberpruefung der bereinigten Datei' },
    {
      type: 'paragraph',
      html: 'Eine strukturelle Bereinigung ersetzt keine sprachliche Ueberpruefung. Nutzen Sie die Befundliste zur Nachbearbeitung.',
    },
    {
      type: 'table',
      headers: ['Befund', 'Bedeutung', 'Naechster Schritt'],
      rows: [
        ['Leere Zelle', 'Eine Sprachspalte ist leer', 'Uebersetzen oder als beabsichtigt bestaetigen'],
        ['Doppelter Schluessel', 'Schluessel mehrfach vorhanden', 'Zeilen vergleichen und erste Vorkommen verwenden'],
        ['Defekte Zeile', 'Spaltenanzahl weicht ab', 'Normalisiertes Ergebnis pruefen'],
        ['Parse Fehler', 'JSON ungueltig', 'Syntax vor Import korrigieren'],
      ],
    },
    { type: 'title', level: 2, text: 'CSV Konventionen fuer Spiele' },
    {
      type: 'paragraph',
      html: 'Standard CSV Regeln: Felder sind durch Kommas getrennt, Sonderzeichen werden in Anfuehrungszeichen eingeschlossen.',
    },
    {
      type: 'tip',
      title: 'Originaldatei aufbewahren',
      html: 'Vergleichen Sie den Export stets mit der Originaldatei vor der Einbindung ins Spiel.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Uebersetzungsschluessel', definition: 'Stabil bezeichneter Bezeichner fuer einen Spieltext.' },
        { term: 'CSV Feld', definition: 'Ein Einzelwert zwischen Trennzeichen.' },
        { term: 'Escaping', definition: 'Einschluss in Anfuehrungszeichen fuer Sonderzeichen.' },
        { term: 'Locale', definition: 'Sprach und Regionalkennung wie de oder en.' },
      ],
    },
  ],
  faq: [
    {
      question: 'Werden Dateien hochgeladen?',
      answer: 'Nein, die Verarbeitung findet vollstaendig lokal im Browser statt.',
    },
    {
      question: 'Was passiert bei zusaetzlichen Kommas?',
      answer: 'Zusaetzliche Felder werden in die letzte Spalte zusammengefuehrt.',
    },
    {
      question: 'Wie werden Duplikate bereinigt?',
      answer: 'Das erste Vorkommen wird behalten, weitere werden entfernt.',
    },
    {
      question: 'Prueft das Tool die Uebersetzungsqualitaet?',
      answer: 'Nein, es prueft nur die Dateistruktur und Vollstaendigkeit.',
    },
  ],
  howTo: [
    { name: 'Dateiformat waehlen', text: 'Waehlen Sie CSV oder JSON aus.' },
    { name: 'Befunde pruefen', text: 'Datei ablegen und Fehlerliste durchgehen.' },
    { name: 'Exportieren und testen', text: 'Saubere Datei herunterladen und in der Engine testen.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Godot und Unity Lokalisierungs CSV Bereinigung',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [{
        '@type': 'Question',
        name: 'Werden Dateien hochgeladen?',
        acceptedAnswer: { '@type': 'Answer', text: 'Nein, die Verarbeitung findet vollstaendig lokal im Browser statt.' },
      }],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Lokalisierungsdatei bereinigen',
      step: [
        { '@type': 'HowToStep', name: 'Dateiformat waehlen', text: 'Waehlen Sie CSV oder JSON aus.' },
        { '@type': 'HowToStep', name: 'Befunde pruefen', text: 'Datei ablegen und Fehlerliste durchgehen.' },
        { '@type': 'HowToStep', name: 'Exportieren und testen', text: 'Saubere Datei herunterladen und in der Engine testen.' },
      ],
    },
  ],
  bibliography: [
    { name: 'Godot ResourceImporterCSVTranslation Dokus', url: 'https://docs.godotengine.org/en/stable/classes/class_resourceimportercsvtranslation.html' },
    { name: 'Unity Localization CSV Import Doku', url: 'https://docs.unity3d.com/Packages/com.unity.localization@1.5/manual/CSV.html' },
    { name: 'RFC 4180 CSV Spezifikation', url: 'https://datatracker.ietf.org/doc/html/rfc4180' },
  ],
};
