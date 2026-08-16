import type { ToolLocaleContent } from '../../../types';
import type { SteamBbcodeTranslatorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<SteamBbcodeTranslatorUI> = {
  slug: 'steam-bbcode-konverter',
  title: 'Steam BBCode, Markdown und HTML Konverter',
  description: 'Konvertieren Sie zwischen Steam BBCode, Markdown und HTML in beide Richtungen mit automatischer Syntaxerkennung und Vorschau.',
  ui: {
    editorLabel: 'Fügen Sie Ihren Text ein',
    editorHint: 'BBCode, Markdown oder HTML wird beim Tippen automatisch erkannt.',
    detectedLabel: 'Erkannt',
    detectedEmpty: 'Warten auf Text',
    bbcode: 'Steam BBCode',
    markdown: 'Markdown',
    html: 'HTML',
    clear: 'Leeren',
    copy: 'Ausgabe kopieren',
    copied: 'In Zwischenablage kopiert',
    characters: 'Zeichen',
    blocks: 'Blöcke',
    privacyNote: 'Läuft lokal im Browser. Kein Upload.',
    persistenceNote: 'Letzter Entwurf lokal gespeichert',
    previewLabel: 'Vorschau',
    previewEmpty: 'Ihre formatierte Vorschau erscheint hier.'
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Warum Shopbeschreibungen einen Konverter benötigen'
    },
    {
      type: 'paragraph',
      html: 'Steam Shopbeschreibungen nutzen BBCode im Steamworks Editor. Pressekits oder Dokumentationen erwarten oft Markdown oder HTML. Die manuelle Konvertierung ist zeitraubend und fehleranfällig. Dieser Konverter generiert automatisch die anderen beiden Formate.'
    },
    {
      type: 'title',
      level: 2,
      text: 'Unterstützte Formate und Tags'
    },
    {
      type: 'paragraph',
      html: 'Der Konverter erkennt Überschriften, Fett- und Kursivdruck, Links, Listen, Zitate und Spoiler. Er überträgt Strukturen nahtlos zwischen allen drei Formaten.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Eingabeformate', value: '3' },
        { label: 'Ausgaben pro Einfügen', value: '2' },
        { label: 'Listen-Tiefe', value: 'Verschachtelt' },
        { label: 'Verarbeitung', value: 'Nur im Browser' }
      ]
    },
    {
      type: 'title',
      level: 2,
      text: 'Verschachtelte Listen bleiben erhalten'
    },
    {
      type: 'paragraph',
      html: 'Statt blinder Ersetzung baut das Tool einen leichten Strukturbaum auf. So bleiben untergeordnete Listenpunkte genau an ihrer Position.'
    },
    {
      type: 'table',
      headers: ['Steam BBCode', 'Markdown', 'HTML'],
      rows: [
        ['[h1]Titel[/h1]', '# Titel', '&lt;h1&gt;Titel&lt;/h1&gt;'],
        ['[b]Wichtig[/b]', '**Wichtig**', '&lt;strong&gt;Wichtig&lt;/strong&gt;'],
        ['[i]Hinweis[/i]', '*Hinweis*', '&lt;em&gt;Hinweis&lt;/em&gt;'],
        ['[url=https://example.com]Link[/url]', '[Link](https://example.com)', '&lt;a href="https://example.com"&gt;Link&lt;/a&gt;'],
        ['[list][*]Eins[*]Zwei[/list]', '- Eins\n- Zwei', '&lt;ul&gt;&lt;li&gt;Eins&lt;/li&gt;&lt;li&gt;Zwei&lt;/li&gt;&lt;/ul&gt;']
      ]
    },
    {
      type: 'title',
      level: 2,
      text: 'Unterschiede zwischen Markdown und HTML'
    },
    {
      type: 'paragraph',
      html: 'Markdown ist gut lesbar, unterstützt aber Unterstreichungen nicht nativ. In solchen Fällen nutzt der Konverter Inline HTML.'
    },
    {
      type: 'tip',
      title: 'Praktische Überprüfung vor der Veröffentlichung',
      html: 'Vergleichen Sie vor dem Veröffentlichen das Ergebnis in der Vorschau mit dem Originaldokument.'
    },
    {
      type: 'title',
      level: 2,
      text: 'Datenschutz für Ihren Shoptext'
    },
    {
      type: 'paragraph',
      html: 'Die Konvertierung erfolgt vollständig lokal im Browser. Es werden keine Entwürfe auf externe Server hochgeladen.'
    },
    {
      type: 'title',
      level: 2,
      text: 'Einschränkungen'
    },
    {
      type: 'proscons',
      title: 'Vor und Nachteile der Konvertierung',
      items: [
        {
          pro: 'Verschachtelte Listen werden strukturell verarbeitet.',
          con: 'Spezielle benutzerdefinierte Tags erfordern manuelle Nachbearbeitung.'
        },
        {
          pro: 'Sofortige Live Aktualisierung beim Tippen.',
          con: 'Steam-spezifische Widgets werden nicht konvertiert.'
        }
      ]
    },
    {
      type: 'title',
      level: 2,
      text: 'Begriffsglossar'
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'BBCode',
          definition: 'Eine Tag-basierte Auszeichnungssprache für Steam-Shopseiten.'
        },
        {
          term: 'Markdown',
          definition: 'Eine einfache Textformatierung für Dokumentation und Web.'
        },
        {
          term: 'HTML',
          definition: 'Die Standard-Auszeichnungssprache für Webseiten.'
        }
      ]
    }
  ],
  faqTitle: 'Häufig gestellte Fragen zur Konvertierung',
  faq: [
    {
      question: 'Werden Texte an einen Server gesendet?',
      answer: 'Nein. Die Konvertierung erfolgt vollständig lokal in Ihrem Browser.'
    },
    {
      question: 'Werden verschachtelte Listen unterstützt?',
      answer: 'Ja. Die Struktur wird vor der Generierung von Markdown oder HTML analysiert.'
    },
    {
      question: 'Kann ich auch Markdown als Eingabe nutzen?',
      answer: 'Ja. Das Format wird automatisch erkannt.'
    },
    {
      question: 'Bleiben Links und Bilder beim Konvertieren erhalten?',
      answer: 'Unterstützte Links und Bildmarkierungen werden in die Zielsprache des Formats übertragen. Prüfen Sie das Ergebnis vor der Veröffentlichung in Steam.'
    },
    {
      question: 'Kann ich Steam BBCode direkt als Markdown speichern?',
      answer: 'Ja. Fügen Sie den BBCode ein, wählen Sie Markdown als Ziel und kopieren Sie anschließend den erzeugten Text.'
    },
    {
      question: 'Warum sollte ich das Ergebnis vor dem Einfügen prüfen?',
      answer: 'Einige Steam Tags haben keine direkte Entsprechung in Markdown oder HTML. Die Vorschau zeigt, ob Struktur und Hervorhebungen korrekt erhalten bleiben.'
    },
  ],
  howTo: [
    {
      name: 'Text einfügen',
      text: 'Fügen Sie Steam BBCode, Markdown oder HTML in den Editor ein.'
    },
    {
      name: 'Automatische Erkennung nutzen',
      text: 'Das Tool generiert sofort die anderen Formate.'
    },
    {
      name: 'Ergebnis kopieren',
      text: 'Kopieren Sie das gewünschte Zielformat.'
    },
    {
      name: "Welche Einstellung sollte ich vor der Veröffentlichung prüfen? 1",
      text: "Prüfen Sie Abmessungen, Zielumgebung und Vorschau gemeinsam, bevor Sie die Datei veröffentlichen.",
    },
    {
      name: "Welche Einstellung sollte ich vor der Veröffentlichung prüfen? 2",
      text: "Prüfen Sie Abmessungen, Zielumgebung und Vorschau gemeinsam, bevor Sie die Datei veröffentlichen.",
    },
  ].slice(0, 4),
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Steam BBCode, Markdown und HTML Konverter',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Werden Texte an einen Server gesendet?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nein. Die Konvertierung erfolgt vollständig lokal in Ihrem Browser.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'So konvertieren Sie Steam BBCode, Markdown und HTML',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Text einfügen',
          text: 'Fügen Sie Steam BBCode, Markdown oder HTML in den Editor ein.'
        }
      ]
    }
  ],
  bibliography: bibliographyEntries
};
