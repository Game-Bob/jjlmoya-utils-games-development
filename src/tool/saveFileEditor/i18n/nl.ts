import type { ToolLocaleContent } from '../../../types';
import type { SaveFileEditorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<SaveFileEditorUI> = {
  slug: 'game-save-bestand-editor',
  title: 'Game Save Bestand Obfuscator en Editor',
  description: 'Ontsleutel, inspecteer, bewerk JSON payloads en versleutel game save bestanden opnieuw met Base64, XOR masking of platte tekst 100% lokaal in je browser.',
  ui: {
    title: 'Game Save Bestand Obfuscator & Editor',
    subtitle: 'Inspecteer, wijzig en versleutel lokale save bestanden veilig zonder serverlekken',
    dropSaveFile: 'Sleep het game save bestand hier naartoe',
    orSelectFile: 'of klik om een lokaal bestand te kiezen',
    encryptionMethod: 'Versleutelingsformaat',
    methodBase64: 'Base64 Codering',
    methodXor: 'XOR Masker + Base64',
    methodRaw: 'Platte JSON / Onversleuteld',
    xorKeyLabel: 'XOR Geheime Sleutel',
    xorKeyPlaceholder: 'bijv. MijnGeheimeSleutel2026',
    jsonRawTitle: 'Gedecodeerde JSON Payload (Live Editor)',
    encodeAndDownload: 'Versleutelen & Bestand Downloaden',
    copyEncoded: 'Kopieer Versleutelde Tekst',
    copiedNotice: 'Gekopieerd naar Klembord!',
    decodedKeysCount: 'Totaal Aantal Parameters',
    dataSize: 'Payload Grootte',
    detectedFormat: 'Gedetecteerd Formaat',
    exportPreviewLabel: 'Voorbeeld van Versleutelde Uitvoer',
    decodePanelTitle: 'Decoderen en Live JSON Editor',
    exportPanelTitle: 'Opnieuw Versleutelde Uitvoer',
    decodeError: 'Het ontcijferen van het save bestand is mislukt',
    bytesUnit: 'B',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Veiligheid en Obfuscantie Protocollen voor Game Saves',
    },
    {
      type: 'paragraph',
      html: 'Videogames serialiseren de voortgang van spelers naar permanente opslagformaten om inventarissen, vrijgespeelde niveaus en spelerattributen te bewaren tussen speelsessies. Om onbevoegde aanpassingen in gewone tekstverwerkers door eindgebruikers te voorkomen, obfusceren gamestudio s savebestanden met binaire coderingen zoals Base64 of bitwise XOR-maskering met een geheime sleutel. Tijdens interne QA-tests en live operaties debugging hebben ontwikkelingsteams directe toegang nodig om ruwe JSON-structuren te inspecteren, grenswaarden te testen en gewijzigde gegevens opnieuw te versleutelen zonder de game opnieuw te compileren.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Client Verwerkingsprivacy', value: '100% Lokaal' },
        { label: 'Ondersteunde Decoders', value: 'Base64 / XOR / JSON' },
        { label: 'Decodeer Latentie', value: '0 ms' },
        { label: 'Datalek Risico', value: 'Nul' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Vergelijking van Obfuscantie Schema s',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Base64 Codering',
          description: 'Snelle tekstconversie die eenvoudige bewerkingen in Kladblok voorkomt, maar geen echte cryptografische beveiliging biedt.',
        },
        {
          title: 'XOR Maskering + Base64',
          description: 'Standaardpraktijk bij indie gameontwikkeling. Mengt tekstbytes met een geheime sleutel tegen geheugen-editors.',
        },
        {
          title: 'Platte JSON Payload',
          description: 'Leesbare save-status zonder versleuteling. Ideaal voor prototypes en interne team-iteraties.',
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'QA Testpraktijken voor Verificatie van Save Status',
    },
    {
      type: 'tip',
      title: 'Beste Praktijken voor Game Save Beveiliging tijdens QA',
      html: 'Gebruik altijd afzonderlijke debugsleutels voor interne builds. Gebruik lokale inspecteurs om grenswaarden en statistieken te testen zonder de gamecode opnieuw te compileren.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Tabel met Richtlijnen voor Spelstatus Parameters',
    },
    {
      type: 'table',
      headers: ['Datatype', 'Aanbevolen Formaat', 'Veelvoorkomende Toepassing', 'Obfuscantielaag'],
      rows: [
        ['Numerieke Gehele Getallen', '32-bit Integer', 'Munten, Level, XP, Munitie', 'XOR Gemaskerd'],
        ['Booleaanse Vlaggen', 'Standaard Boolean', 'Tutorial Voltooid, Baas Verslagen', 'Base64 / XOR'],
        ['Geneste Objecten', 'JSON Hiërarchie', 'Spelersinventaris, Vaardigheden', 'Base64 Gecodeerd'],
        ['Tijdstempel Strings', 'ISO 8601 UTC', 'Dagelijkse Login, Opslagtijdstempel', 'XOR Gemaskerd'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Reverse Engineering en Anti Tamper Overwegingen',
    },
    {
      type: 'paragraph',
      html: 'Hoewel obfuscantie aan de clientzijde voorkomt dat incidentele spelers opslagbestanden wijzigen in standaard tekstverwerkers, zijn XOR en Base64 geen cryptografische algoritmen. Geheugenscanners en tools zoals RenderDoc of x64dbg kunnen sleutelgeneratieroutines in gecompileerde bestanden inspecteren. Voor competitieve games zijn serververificatie of cryptografische HMAC-handtekeningen essentieel.',
    },
  ],
  faqTitle: 'Veelgestelde Vragen',
  faq: [
    {
      question: 'Worden mijn game save bestanden geüpload naar een externe server?',
      answer: 'Nee. Alle decodering, JSON-structuurbewerking en her-versleuteling vinden 100% plaats binnen je eigen webbrowser.',
    },
    {
      question: 'Hoe werkt XOR-sleutelobfuscantie in game-engines zoals Unity of Godot?',
      answer: 'XOR-obfuscantie voert bitwise XOR-operaties uit op UTF-8 bytes van de JSON-string met de tekens van een geheime sleutel.',
    },
  ],
  howTo: [
    {
      name: 'Bestand Laden of Plakken',
      text: 'Upload je versleutelde savebestand of sleep het naar de uploadzone.',
    },
    {
      name: 'Selecteer Decodeermethode en Sleutel',
      text: 'Kies Base64 of XOR Maskering en voer de geheime sleutel in.',
    },
    {
      name: 'JSON Status Bewerken',
      text: 'Pas waarden voor niveau, goud, inventaris en spelvlaggen direct aan in de live editor.',
    },
    {
      name: 'Versleutelen en Exporteren',
      text: 'Download het gewijzigde savebestand gereed voor testen in de game.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Game Save Bestand Editor',
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
          name: 'Worden mijn game save bestanden geüpload naar een externe server?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nee. Alle verwerkingen vinden 100% lokaal in je browser plaats.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Hoe Versleutelde Game Save Bestanden te Bewerken',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Bestand Laden',
          text: 'Upload je versleutelde savebestand.',
        },
      ],
    },
  ],
  bibliographyTitle: 'Referenties en Verder Lezen',
  bibliography: bibliographyEntries,
};
