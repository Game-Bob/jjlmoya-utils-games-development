import type { ToolLocaleContent } from '../../../types';
import type { SaveFileEditorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<SaveFileEditorUI> = {
  slug: 'spiel-speicherstand-editor',
  title: 'Spiel Speicherstand Editor und Obfuskator',
  description: 'Entschlüsseln, überprüfen, bearbeiten Sie JSON Payloads und verschlüsseln Sie Spiel Speicherstände lokal mit Base64, XOR Maskierung oder Klartext.',
  ui: {
    title: 'Spiel Speicherstand Editor & Obfuskator',
    subtitle: 'Lokale Speicherstände sicher prüfen, bearbeiten und verschlüsseln ohne Serverübertragung',
    dropSaveFile: 'Ziehen Sie die Speicherdatei hierher oder klicken Sie',
    orSelectFile: 'oder klicken Sie, um eine lokale Datei auszuwählen',
    encryptionMethod: 'Verschlüsselungsformat',
    methodBase64: 'Base64 Kodierung',
    methodXor: 'XOR Maske + Base64',
    methodRaw: 'Unverschlüsseltes JSON',
    xorKeyLabel: 'Geheimer XOR Schlüssel',
    xorKeyPlaceholder: 'z.B. MeinGeheimerSchluessel2026',
    jsonRawTitle: 'Entschlüsseltes JSON Payload (Live Editor)',
    encodeAndDownload: 'Verschlüsseln & Datei Herunterladen',
    copyEncoded: 'Verschlüsselten Text Kopieren',
    copiedNotice: 'In die Zwischenablage kopiert!',
    decodedKeysCount: 'Gesamte Parameter',
    dataSize: 'Payload Größe',
    detectedFormat: 'Erkanntes Format',
    exportPreviewLabel: 'Vorschau der Verschlüsselten Ausgabe',
    decodePanelTitle: 'Entschlüsselung und Live JSON Editor',
    exportPanelTitle: 'Neu Verschlüsselte Ausgabe',
    decodeError: 'Fehler beim Entschlüsseln der Speicherdatei',
    bytesUnit: 'B',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Sicherheit und Obfuskationsprotokolle für Spielspeicherstände',
    },
    {
      type: 'paragraph',
      html: 'Videospiele serialisieren den Fortschritt des Spielers in persistenten Speicherformaten, um Inventarbestände, freigeschaltete Level und Spielerattribute über Spielsitzungen hinweg zu bewahren. Um einfaches Ändern im Texteditor durch Endnutzer zu verhindern, obfuszieren Entwickler Speicherstände mit Kodierungsschemata wie Base64 oder XOR Bitmaskierung mit einem geheimen Schlüssel. Während der Qualitätssicherung und des Live Operations Debuggings benötigen Entwicklungsteams sofortigen Zugriff auf rohe JSON Strukturen, um Grenzwerttests durchzuführen und modifizierte Daten ohne erneutes Kompilieren von Spielbinärdateien bereitzustellen.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Client Verarbeitung', value: '100% Lokal' },
        { label: 'Unterstützte Dekoder', value: 'Base64 / XOR / JSON' },
        { label: 'Dekodierungslatenz', value: '0 ms' },
        { label: 'Datenverlust Risiko', value: 'Null' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Vergleich der Obfuskationsverfahren',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Base64 Kodierung',
          description: 'Schnelle Zeichenkonvertierung gegen einfaches Bearbeiten im Texteditor ohne kryptografische Sicherheit.',
        },
        {
          title: 'XOR Maskierung + Base64',
          description: 'Standard in der Indie Spieleentwicklung. Mischt String Bytes mit einem Schlüssel gegen Cheat Engines.',
        },
        {
          title: 'Unverschlüsseltes JSON',
          description: 'Lesbarer Speicherstand für Prototypen und interne Team Iterationen.',
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'QS Testpraxis für Speicherstandsüberprüfung',
    },
    {
      type: 'tip',
      title: 'Best Practices für Speicherstandssicherheit in der QS',
      html: 'Verwenden Sie getrennte Debug Schlüssel für interne Builds. Nutzen Sie lokale Inspektoren zur Überprüfung von Grenzwerten ohne Neukompilierung des Spielcodes.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Richtlinien für Spielzustandsparameter',
    },
    {
      type: 'table',
      headers: ['Datentyp', 'Empfohlenes Format', 'Typischer Anwendungsfall', 'Obfuskationsschicht'],
      rows: [
        ['Numerische Zahlen', '32-Bit-Integer', 'Münzen, Level, XP, Munition', 'XOR-maskiert'],
        ['Booleche Flags', 'Standard-Boolean', 'Tutorial Abgeschlossen', 'Base64 / XOR'],
        ['Verschachtelte Objekte', 'JSON-Hierarchie', 'Inventar, Fähigkeiten', 'Base64-kodiert'],
        ['Zeitstempel', 'ISO 8601 UTC', 'Tägliches Login', 'XOR-maskiert'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Reverse Engineering und Anti Tamper Überlegungen',
    },
    {
      type: 'paragraph',
      html: 'Obfuskation auf Client Seite verhindert einfaches Ändern durch Gelegenheitsspieler, jedoch sind XOR und Base64 keine echten kryptografischen Algorithmen. Werkzeuge zur Speicheranalyse wie RenderDoc oder x64dbg können Schlüsselgenerierungsroutinen direkt in kompilierten C++ oder C# Baugruppen untersuchen. Für kompetitive Titel sind serverseitige Validierungen oder kryptografische HMAC Signaturen unerlässlich.',
    },
  ],
  faqTitle: 'Häufig Gestellte Fragen',
  faq: [
    {
      question: 'Werden meine Speicherdaten auf einen Server hochgeladen?',
      answer: 'Nein. Alle Vorgänge finden zu 100% lokal in Ihrem Browser statt.',
    },
    {
      question: 'Wie funktioniert die XOR Obfuskation in Unity oder Godot?',
      answer: 'Die XOR Obfuskation wendet bitweise XOR Operationen auf UTF-8 Bytes gegen einen geheimen Schlüssel an.',
    },
  ],
  howTo: [
    {
      name: 'Datei Laden oder Einfügen',
      text: 'Laden Sie Ihre verschlüsselte Speicherdatei hoch.',
    },
    {
      name: 'Methode und Schlüssel Wählen',
      text: 'Wählen Sie Base64 oder XOR und geben Sie den Schlüssel ein.',
    },
    {
      name: 'JSON Bearbeiten',
      text: 'Ändern Sie die Werte direkt im Live Editor.',
    },
    {
      name: 'Verschlüsseln und Exportieren',
      text: 'Laden Sie die neue Datei für Tests herunter.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Spiel Speicherstand Editor',
      applicationCategory: 'DeveloperApplication',
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
          name: 'Werden meine Speicherdaten hochgeladen?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nein. Alle Vorgänge finden zu 100% lokal statt.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'So bearbeiten Sie Speicherstände',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Datei Laden',
          text: 'Laden Sie Ihre Speicherdatei hoch.',
        },
      ],
    },
  ],
  bibliographyTitle: 'Referenzen und Weiterführende Literatur',
  bibliography: bibliographyEntries,
};
