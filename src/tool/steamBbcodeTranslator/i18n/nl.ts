import type { ToolLocaleContent } from '../../../types';
import type { SteamBbcodeTranslatorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<SteamBbcodeTranslatorUI> = {
  slug: 'steam-bbcode-omzetter',
  title: 'Steam BBCode, Markdown en HTML Omzetter',
  description: 'Converteer tussen Steam BBCode, Markdown en HTML in beide richtingen met automatische syntaxisdetectie en live voorbeeld.',
  ui: {
    editorLabel: 'Plak uw opgemaakte tekst',
    editorHint: 'BBCode, Markdown of HTML wordt automatisch gedetecteerd.',
    detectedLabel: 'Gedetecteerd',
    detectedEmpty: 'Wachten op tekst',
    bbcode: 'Steam BBCode',
    markdown: 'Markdown',
    html: 'HTML',
    clear: 'Wis',
    copy: 'Kopieer resultaat',
    copied: 'Gekopieerd naar klembord',
    characters: 'Tekens',
    blocks: 'Blokken',
    privacyNote: 'Werkt in uw browser. Niets wordt geüpload.',
    persistenceNote: 'Laatste concept lokaal opgeslagen',
    previewLabel: 'Voorbeeld',
    previewEmpty: 'Uw geformatteerde voorbeeld verschijnt hier.'
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Waarom winkelbeschrijvingen een omzetter nodig hebben'
    },
    {
      type: 'paragraph',
      html: 'Steam winkelpagina s gebruiken BBCode. Perskits of documentatiewebsites verwachten vaak Markdown of HTML. Deze tool converteert automatisch tussen de drie formaten.'
    },
    {
      type: 'title',
      level: 2,
      text: 'Ondersteunde opmaak'
    },
    {
      type: 'paragraph',
      html: 'Ondersteunt koppen, vet, cursief, links, lijsten, citaten en spoilers.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Invoerformaten', value: '3' },
        { label: 'Uitvoeren per plak', value: '2' },
        { label: 'Lijstdiepte', value: 'Genoest' },
        { label: 'Verwerking', value: 'Alleen browser' }
      ]
    },
    {
      type: 'title',
      level: 2,
      text: 'Nesten van lijsten blijft behouden'
    },
    {
      type: 'paragraph',
      html: 'Een structuurboom zorgt ervoor dat sublijsten netjes binnen het hoofdelement blijven.'
    },
    {
      type: 'table',
      headers: ['Steam BBCode', 'Markdown', 'HTML'],
      rows: [
        ['[h1]Titel[/h1]', '# Titel', '&lt;h1&gt;Titel&lt;/h1&gt;'],
        ['[b]Belangrijk[/b]', '**Belangrijk**', '&lt;strong&gt;Belangrijk&lt;/strong&gt;'],
        ['[i]Notitie[/i]', '*Notitie*', '&lt;em&gt;Notitie&lt;/em&gt;'],
        ['[url=https://example.com]Link[/url]', '[Link](https://example.com)', '&lt;a href="https://example.com"&gt;Link&lt;/a&gt;'],
        ['[list][*]Een[*]Twee[/list]', '- Een\n- Twee', '&lt;ul&gt;&lt;li&gt;Een&lt;/li&gt;&lt;li&gt;Twee&lt;/li&gt;&lt;/ul&gt;']
      ]
    },
    {
      type: 'title',
      level: 2,
      text: 'Verschillen tussen Markdown en HTML'
    },
    {
      type: 'paragraph',
      html: 'Wanneer Markdown geen onderstreping ondersteunt, gebruikt de omzetter inline HTML.'
    },
    {
      type: 'tip',
      title: 'Controle voor publicatie',
      html: 'Vergelijk het geformatteerde voorbeeld met uw bronbestand voordat u publiceert.'
    },
    {
      type: 'title',
      level: 2,
      text: 'Privacy van uw teksten'
    },
    {
      type: 'paragraph',
      html: 'Alle verwerking vindt lokaal plaats in uw browser.'
    },
    {
      type: 'title',
      level: 2,
      text: 'Beperkingen'
    },
    {
      type: 'proscons',
      title: 'Aandachtspunten',
      items: [
        {
          pro: 'Geordende lijststructuur.',
          con: 'Aangepaste tags vereisen handmatige controle.'
        }
      ]
    },
    {
      type: 'title',
      level: 2,
      text: 'Begrippenlijst'
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'BBCode',
          definition: 'Opmaaksyntaxis met vierkante haakjes voor Steam.'
        },
        {
          term: 'Markdown',
          definition: 'Lichte en goed leesbare tekstopmaak.'
        },
        {
          term: 'HTML',
          definition: 'Standaard opmaaktaal voor het web.'
        }
      ]
    }
  ],
  faqTitle: 'Veelgestelde vragen',
  faq: [
    {
      question: 'Wordt mijn tekst naar een server gestuurd?',
      answer: 'Nee. De conversie gebeurt volledig lokaal in uw browser.'
    },
    {
      question: 'Worden geneste lijsten ondersteund?',
      answer: 'Ja. De lijststructuur wordt geanalyseerd voor de omzetting.'
    }
  ],
  howTo: [
    {
      name: 'Plak tekst',
      text: 'Plak Steam BBCode, Markdown of HTML.'
    },
    {
      name: 'Automatische omzetting',
      text: 'De andere twee formaten worden direct gegeneerd.'
    }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Steam BBCode, Markdown en HTML Omzetter',
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
          name: 'Wordt mijn tekst naar een server gestuurd?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nee. De conversie gebeurt volledig lokaal in uw browser.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Hoe Steam BBCode, Markdown en HTML om te zetten',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Plak tekst',
          text: 'Plak Steam BBCode, Markdown of HTML.'
        }
      ]
    }
  ],
  bibliography: bibliographyEntries
};
