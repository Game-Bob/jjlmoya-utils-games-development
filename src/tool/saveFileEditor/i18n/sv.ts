import type { ToolLocaleContent } from '../../../types';
import type { SaveFileEditorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<SaveFileEditorUI> = {
  slug: 'spelsparfils-editor',
  title: 'Spelsparfils Obfuskator och Editor',
  description: 'Avkoda, inspektera, redigera JSON data och kryptera om spelsparfiler med Base64, XOR maskering eller klartext 100% lokalt i din webbläsare.',
  ui: {
    title: 'Spelsparfils Obfuskator & Editor',
    subtitle: 'Inspektera, ändra och kryptera lokala sparfiler säkert utan serverläckor',
    dropSaveFile: 'Dra och släpp spelsparfilen här',
    orSelectFile: 'eller klicka för att välja lokal fil',
    encryptionMethod: 'Krypteringsformat',
    methodBase64: 'Base64 Kodning',
    methodXor: 'XOR Mask + Base64',
    methodRaw: 'Klartext JSON / Okrypterad',
    xorKeyLabel: 'XOR Hemlig Nyckel',
    xorKeyPlaceholder: 't.ex. MinHemligaSpelnyckel2026',
    jsonRawTitle: 'Avkodad JSON Data (Live Editor)',
    encodeAndDownload: 'Kryptera och Ladda Ner Sparfil',
    copyEncoded: 'Kopiera Krypterad Text',
    copiedNotice: 'Kopierat till Urklipp!',
    decodedKeysCount: 'Totalt Antal Parametrar',
    dataSize: 'Datastorlek',
    detectedFormat: 'Identifierat Format',
    exportPreviewLabel: 'Förhandsgranskning av Krypterad Utdata',
    decodePanelTitle: 'Avkodning och Live JSON Editor',
    exportPanelTitle: 'Omkrypterad Utdata',
    decodeError: 'Misslyckades med att avkoda sparfilen',
    bytesUnit: 'B',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Säkerhets och Obfuskationsprotokoll för Spelsparfiler',
    },
    {
      type: 'paragraph',
      html: 'Datorspel serialiserar regelbundet spelarens framsteg, inventarieförråd, upplåsta nivåer och karaktärsegenskaper till permanenta lagringsformat mellan spelsessioner. För att förhindra obehöriga ändringar i vanliga textredigerare obfuskerar spelstudior sparfiler med binära kodningsscheman som Base64 eller bitvis XOR maskering mot en hemlig nyckel. Under interna kvalitetssäkringstester QA och felsökning behöver utvecklingsteam omedelbar tillgång till att inspektera råa JSON strukturer, testa gränsvärden och återkryptera ändrade data utan att behöva kompilera om hela spelet.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Klientens Integritet', value: '100% Lokal' },
        { label: 'Avkodare Som Stöds', value: 'Base64 / XOR / JSON' },
        { label: 'Avkodningsfördröjning', value: '0 ms' },
        { label: 'Dataintegritetsrisk', value: 'Noll' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Jämförelse av Obfuskationsmetoder',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Base64 Kodning',
          description: 'Snabb textkonvertering som förhindrar enkla ändringar i Anteckningar men saknar kryptografisk säkerhet.',
        },
        {
          title: 'XOR Maskering + Base64',
          description: 'Standardmetod inom oberoende spelutveckling. Blandar textbytes med en hemlig nyckel mot minnesredigerare.',
        },
        {
          title: 'Klartext JSON',
          description: 'Läsbar sparfil utan kryptering. Idealisk för tidiga prototypbyggen och interna felsökningar.',
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'QA Testmetoder för Verifiering av Sparfiler',
    },
    {
      type: 'tip',
      title: 'Bästa Praxis för Säkerhet i Sparfiler under QA',
      html: 'Använd alltid separata felsökningsnycklar för interna testbyggen. Använd lokala inspektörer för att verifiera gränsvärden utan att kompilera om spelkoden.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Vägledningstabell för Spelparametrar',
    },
    {
      type: 'table',
      headers: ['Datatyp', 'Rekommenderat Format', 'Vanligt Användningsområde', 'Obfuskationslager'],
      rows: [
        ['Numeriska Heltal', '32-bitars Heltal', 'Mynt, Nivå, XP, Ammunition', 'XOR-maskerad'],
        ['Boolska Flaggor', 'Standard Boolean', 'Tutorial Slutförd, Boss Besegrad', 'Base64 / XOR'],
        ['Nästlade Objekt', 'JSON Hierarki', 'Spelarinventarium, Färdighetsträd', 'Base64-kodad'],
        ['Tidsstämplar', 'ISO 8601 UTC', 'Daglig Inloggning, Spartidsstämpel', 'XOR-maskerad'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Reverse Engineering och Skydd Mot Manipulation',
    },
    {
      type: 'paragraph',
      html: 'Även om obfuskering på klientsidan förhindrar vanliga spelare från att ändra sparfiler, är XOR och Base64 inte fullständiga kryptografiska algoritmer. Verktyg för minnesanalys som RenderDoc eller x64dbg kan utläsa nyckelgenerering direkt från kompilerade filer. För tävlingsinriktade flerspelarspel krävs validering på serversidan eller kryptografiska HMAC signaturer.',
    },
  ],
  faqTitle: 'Vanliga Frågor',
  faq: [
    {
      question: 'Laddas mina sparfiler upp till en extern server?',
      answer: 'Nej. All avkodning, JSON redigering och återkryptering sker till 100% lokalt i din webbläsare.',
    },
    {
      question: 'Hur fungerar XOR maskering i spelmotorer som Unity eller Godot?',
      answer: 'XOR maskering utför bitvisa XOR operationer på UTF-8 bytes i JSON strängen med tecknen från en hemlig nyckel.',
    },
  ],
  howTo: [
    {
      name: 'Ladda eller Klistra In Sparfil',
      text: 'Ladda upp din krypterade sparfil eller dra den till uppladdningsytan.',
    },
    {
      name: 'Välj Avkodningsmetod och Nyckel',
      text: 'Välj Base64 eller XOR Maskering och ange nyckeln.',
    },
    {
      name: 'Redigera JSON Data',
      text: 'Ändra nivåer, guld, föremål och spelinställningar direkt i live editorn.',
    },
    {
      name: 'Kryptera och Exportera',
      text: 'Ladda ner den modifierade sparfilen redo för testning.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Spelsparfils Editor',
      applicationCategory: 'DeveloperApplication',
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
          name: 'Laddas mina sparfiler upp till en extern server?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nej. All behandling sker 100% lokalt i webbläsaren.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Hur man Redigerar Krypterade Spelsparfiler',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Ladda Sparfil',
          text: 'Ladda upp din krypterade sparfil.',
        },
      ],
    },
  ],
  bibliographyTitle: 'Referenser och Vidare Läsning',
  bibliography: bibliographyEntries,
};
