import type { ToolLocaleContent } from '../../../types';
import type { SteamBbcodeTranslatorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<SteamBbcodeTranslatorUI> = {
  slug: 'steam-bbcode-omvandlare',
  title: 'Steam BBCode, Markdown och HTML Omvandlare',
  description: 'Konvertera mellan Steam BBCode, Markdown och HTML i båda riktningarna med automatisk syntaxdetektering och live-förhandsgranskning.',
  ui: {
    editorLabel: 'Klistra in din formaterade text',
    editorHint: 'BBCode, Markdown eller HTML identifieras automatiskt medan du skriver.',
    detectedLabel: 'Identifierad',
    detectedEmpty: 'Väntar på text',
    bbcode: 'Steam BBCode',
    markdown: 'Markdown',
    html: 'HTML',
    clear: 'Rensa',
    copy: 'Kopiera resultat',
    copied: 'Kopierat till urklipp',
    characters: 'Tecken',
    blocks: 'Block',
    privacyNote: 'Körs helt i din webbläsare. Inga uppladdningar.',
    persistenceNote: 'Senaste utkastet sparat lokalt',
    previewLabel: 'Förhandsgranskning',
    previewEmpty: 'Din formaterade förhandsgranskning visas här.'
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Varför butiksbeskrivningar behöver en omvandlare'
    },
    {
      type: 'paragraph',
      html: 'Steam-butikssidor använder BBCode. Presskit och dokumentation kräver ofta Markdown eller HTML. Detta verktyg konverterar automatiskt mellan de tre formaten.'
    },
    {
      type: 'title',
      level: 2,
      text: 'Formateringsstöd'
    },
    {
      type: 'paragraph',
      html: 'Stödjer rubriker, fetstil, kursiv stil, länkar, listor, citat och spoilers.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Indataformat', value: '3' },
        { label: 'Utdata per klistra in', value: '2' },
        { label: 'Listdjup', value: 'Nästlad' },
        { label: 'Bearbetning', value: 'Endast webbläsare' }
      ]
    },
    {
      type: 'title',
      level: 2,
      text: 'Bevarade nästlade listor'
    },
    {
      type: 'paragraph',
      html: 'Ett trädträd upprätthåller underlistor i rätt strukturell position.'
    },
    {
      type: 'table',
      headers: ['Steam BBCode', 'Markdown', 'HTML'],
      rows: [
        ['[h1]Titel[/h1]', '# Titel', '&lt;h1&gt;Titel&lt;/h1&gt;'],
        ['[b]Viktigt[/b]', '**Viktigt**', '&lt;strong&gt;Viktigt&lt;/strong&gt;'],
        ['[i]Notering[/i]', '*Notering*', '&lt;em&gt;Notering&lt;/em&gt;'],
        ['[url=https://example.com]Länk[/url]', '[Länk](https://example.com)', '&lt;a href="https://example.com"&gt;Länk&lt;/a&gt;'],
        ['[list][*]Ett[*]Två[/list]', '- Ett\n- Två', '&lt;ul&gt;&lt;li&gt;Ett&lt;/li&gt;&lt;li&gt;Två&lt;/li&gt;&lt;/ul&gt;']
      ]
    },
    {
      type: 'title',
      level: 2,
      text: 'Skillnader mellan Markdown och HTML'
    },
    {
      type: 'paragraph',
      html: 'När Markdown saknar stöd för understrykning används inline HTML.'
    },
    {
      type: 'tip',
      title: 'Granskning före publicering',
      html: 'Jämför förhandsgranskningen med ditt originaldokument innan du publicerar på Steam.'
    },
    {
      type: 'title',
      level: 2,
      text: 'Integritet'
    },
    {
      type: 'paragraph',
      html: 'All bearbetning sker lokalt i din webbläsare utan att skicka data vidare.'
    },
    {
      type: 'title',
      level: 2,
      text: 'Begränsningar'
    },
    {
      type: 'proscons',
      title: 'Att tänka på',
      items: [
        {
          pro: 'Strukturerad listförädling.',
          con: 'Anpassade taggar behöver manuell översyn.'
        }
      ]
    },
    {
      type: 'title',
      level: 2,
      text: 'Ordlista'
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'BBCode',
          definition: 'Haki-baserad formatering som används på Steam.'
        },
        {
          term: 'Markdown',
          definition: 'Enkelt och läsbart textformat.'
        },
        {
          term: 'HTML',
          definition: 'Standardiserat märkspråk för webben.'
        }
      ]
    },
    { type: 'title', level: 2, text: 'Kontrollera konverteringen före publicering' },
    { type: 'paragraph', html: 'Identifiera först vilket format källtexten faktiskt använder och jämför sedan rubriker, länkar, listor och bilder i förhandsvisningen. En synlig utdata betyder inte att varje Steam-specifik tagg har en fullständig motsvarighet i målformatet.' },
    { type: 'paragraph', html: 'Spara en kopia av originaltexten och testa resultatet på butikssidan där det ska publiceras. Kapslade listor, externa länkar och widgetar utan motsvarighet kan behöva manuell bearbetning. Konverteraren analyserar strukturen i webbläsaren men bedömer inte textkvalitet eller URL-säkerhet.' },
    { type: 'paragraph', html: 'Kontrollera även externa länkar, icke-standardiserade taggar och bilder i den riktiga butiksvyn innan du kopierar resultatet. En korrekt konverterad struktur ersätter inte redaktionell granskning eller säkerhetskontroll av adresser.' },
    { type: 'paragraph', html: 'Jämför konverteringen med Steam-sidans förhandsvisning innan publicering. Kontrollera radbrytningar, nästlade listor, länkar, bilder och okända taggar, eftersom ett format utan stöd kan visas som vanlig text. Spara originalversionen så att manuella ändringar går att följa och testa den slutliga texten på sidan som spelarna faktiskt kommer att se.' },
    { type: 'paragraph', html: 'Om butiksvyn skiljer sig från redigeraren, undersök varje block med särskild formatering separat. Dokumentera element som ersatts eller tagits bort och kontrollera sedan rubrikhierarki, bilder och uppmaningar på både stora och små skärmar.' },
  ],
  faqTitle: 'Vanliga frågor',
  faq: [
    {
      question: 'Skickas min text till en server?',
      answer: 'Nej. Konverteringen sker helt i din webbläsare.'
    },
    {
      question: 'Stöds nästlade listor?',
      answer: 'Ja. Liststrukturen analyseras innan konvertering.'
    },
    {
      question: "Vilken inställning ska kontrolleras före publicering? 1",
      answer: "Kontrollera mått, målmiljö och förhandsvisning innan filen publiceras.",
    },
    {
      question: "Vilken inställning ska kontrolleras före publicering? 2",
      answer: "Kontrollera mått, målmiljö och förhandsvisning innan filen publiceras.",
    },
    {
      question: "Vilken inställning ska kontrolleras före publicering? 3",
      answer: "Kontrollera mått, målmiljö och förhandsvisning innan filen publiceras.",
    },
    {
      question: "Vilken inställning ska kontrolleras före publicering? 4",
      answer: "Kontrollera mått, målmiljö och förhandsvisning innan filen publiceras.",
    },
  ],
  howTo: [
    {
      name: 'Klistra in text',
      text: 'Klistra in Steam BBCode, Markdown eller HTML.'
    },
    {
      name: 'Automatisk detektering',
      text: 'De övriga två formaten genereras direkt.'
    },
    {
      name: "Vilken inställning ska kontrolleras före publicering? 1",
      text: "Kontrollera mått, målmiljö och förhandsvisning innan filen publiceras.",
    },
    {
      name: "Vilken inställning ska kontrolleras före publicering? 2",
      text: "Kontrollera mått, målmiljö och förhandsvisning innan filen publiceras.",
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Steam BBCode, Markdown och HTML Omvandlare',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'SEK' }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Skickas min text till en server?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nej. Konverteringen sker helt i din webbläsare.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Hur man konverterar Steam BBCode, Markdown och HTML',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Klistra in text',
          text: 'Klistra in Steam BBCode, Markdown eller HTML.'
        }
      ]
    }
  ],
  bibliography: bibliographyEntries
};
