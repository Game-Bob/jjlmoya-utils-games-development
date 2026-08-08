import type { ToolLocaleContent } from '../../../types';
import type { SteamBbcodeTranslatorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<SteamBbcodeTranslatorUI> = {
  slug: 'convertitore-bbcode-steam',
  title: 'Convertitore BBCode Steam, Markdown e HTML',
  description: 'Converti tra BBCode Steam, Markdown e HTML in tutte le direzioni con rilevamento automatico e anteprima dal vivo.',
  ui: {
    editorLabel: 'Incolla il tuo testo formattato',
    editorHint: 'BBCode, Markdown o HTML vengono rilevati automaticamente.',
    detectedLabel: 'Rilevato',
    detectedEmpty: 'In attesa di testo',
    bbcode: 'Steam BBCode',
    markdown: 'Markdown',
    html: 'HTML',
    clear: 'Pulisci',
    copy: 'Copia risultato',
    copied: 'Copiato negli appunti',
    characters: 'Caratteri',
    blocks: 'Blocchi',
    privacyNote: 'Funziona nel tuo browser. Nessun caricamento.',
    persistenceNote: 'Ultima bozza salvata localmente',
    previewLabel: 'Anteprima',
    previewEmpty: 'L anteprima formattata apparirà qui.'
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Perché le descrizioni degli store richiedono un convertitore'
    },
    {
      type: 'paragraph',
      html: 'Le descrizioni di Steam usano il BBCode. Cartelle stampa o siti web richiedono spesso Markdown o HTML. Questo strumento converte automaticamente tra i vari formati.'
    },
    {
      type: 'title',
      level: 2,
      text: 'Tag e formati supportati'
    },
    {
      type: 'paragraph',
      html: 'Supporta titoli, grassetto, corsivo, link, elenchi puntati, citazioni e spoiler.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Formati di input', value: '3' },
        { label: 'Output per incolla', value: '2' },
        { label: 'Livelli elenco', value: 'Annidati' },
        { label: 'Elaborazione', value: 'Solo browser' }
      ]
    },
    {
      type: 'title',
      level: 2,
      text: 'Elenchi annidati preservati'
    },
    {
      type: 'paragraph',
      html: 'L albero di struttura integrato assicura che gli elementi figli rimangano correttamente annidati.'
    },
    {
      type: 'table',
      headers: ['Steam BBCode', 'Markdown', 'HTML'],
      rows: [
        ['[h1]Titolo[/h1]', '# Titolo', '&lt;h1&gt;Titolo&lt;/h1&gt;'],
        ['[b]Importante[/b]', '**Importante**', '&lt;strong&gt;Importante&lt;/strong&gt;'],
        ['[i]Nota[/i]', '*Nota*', '&lt;em&gt;Nota&lt;/em&gt;'],
        ['[url=https://example.com]Link[/url]', '[Link](https://example.com)', '&lt;a href="https://example.com"&gt;Link&lt;/a&gt;'],
        ['[list][*]Uno[*]Due[/list]', '- Uno\n- Due', '&lt;ul&gt;&lt;li&gt;Uno&lt;/li&gt;&lt;li&gt;Due&lt;/li&gt;&lt;/ul&gt;']
      ]
    },
    {
      type: 'title',
      level: 2,
      text: 'Differenze tra Markdown e HTML'
    },
    {
      type: 'paragraph',
      html: 'Se il Markdown non supporta nativamente il sottolineato, vengono inseriti elementi HTML inline.'
    },
    {
      type: 'tip',
      title: 'Controllo prima della pubblicazione',
      html: 'Confronta l anteprima formattata con il documento originale prima di pubblicare.'
    },
    {
      type: 'title',
      level: 2,
      text: 'Riservatezza dei dati'
    },
    {
      type: 'paragraph',
      html: 'Tutta l elaborazione avviene in locale nel tuo browser senza inviare dati esternamente.'
    },
    {
      type: 'title',
      level: 2,
      text: 'Limitazioni'
    },
    {
      type: 'proscons',
      title: 'Considerazioni',
      items: [
        {
          pro: 'Struttura degli elenchi mantenuta.',
          con: 'I tag personalizzati richiedono una revisione manuale.'
        }
      ]
    },
    {
      type: 'title',
      level: 2,
      text: 'Glossario dei formati'
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'BBCode',
          definition: 'Sintassi con parentesi quadre usata su Steam.'
        },
        {
          term: 'Markdown',
          definition: 'Sintassi di testo semplice e ben leggibile.'
        },
        {
          term: 'HTML',
          definition: 'Linguaggio di markup standard per il web.'
        }
      ]
    }
  ],
  faqTitle: 'Domande frequenti sulla conversione',
  faq: [
    {
      question: 'Il testo viene inviato a un server?',
      answer: 'No. La conversione avviene interamente nel tuo browser.'
    },
    {
      question: 'Gli elenchi annidati sono supportati?',
      answer: 'Sì. La struttura viene analizzata prima di generare l output.'
    }
  ],
  howTo: [
    {
      name: 'Incolla il testo',
      text: 'Incolla BBCode Steam, Markdown o HTML.'
    },
    {
      name: 'Rilevamento automatico',
      text: 'Il sistema genererà subito gli altri due formati.'
    }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Convertitore BBCode Steam, Markdown e HTML',
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
          name: 'Il testo viene inviato a un server?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. La conversione avviene interamente nel tuo browser.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Come convertire BBCode Steam, Markdown e HTML',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Incolla il testo',
          text: 'Incolla BBCode Steam, Markdown o HTML.'
        }
      ]
    }
  ],
  bibliography: bibliographyEntries
};
