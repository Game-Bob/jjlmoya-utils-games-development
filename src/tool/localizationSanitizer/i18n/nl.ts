import type { ToolLocaleContent } from '../../../types';
import type { LocalizationSanitizerUI } from '../ui';

export const content: ToolLocaleContent<LocalizationSanitizerUI> = {
  slug: 'lokalisatie-csv-opschonen-godot-unity',
  title: 'Godot en Unity Lokalisatie CSV en JSON Opschoonhulp',
  description: 'Inspecteer CSV of JSON vertaalbestanden op lege cellen, dubbele sleutels en beschadigde rijen en exporteer een schone kopie voor uw game engine.',
  ui: {
    csvTab: 'CSV bestand',
    jsonTab: 'JSON bestand',
    dropTitle: 'Sleep een vertaalbestand hierheen',
    dropSubtitle: 'Inspecteer de structuur in uw browser en behoud het bronbestand op uw apparaat.',
    browseButton: 'Bestanden zoeken',
    sampleButton: 'Voorbeeld laden',
    clearButton: 'Wis',
    inputLabel: 'Invoer vertaalbestand',
    formatLabel: 'Formaat',
    healthLabel: 'Bestandsstatus',
    readyStatus: 'Klaar voor import',
    reviewStatus: 'Controle vereist',
    emptyCellsLabel: 'Lege cellen',
    duplicateKeysLabel: 'Dubbele sleutels',
    malformedRowsLabel: 'Beschadigde rijen',
    cleanRowsLabel: 'Schone rijen',
    issueListTitle: 'Bevindingen',
    noIssues: 'Geen problemen gevonden.',
    previewTitle: 'Vertaalvoorbeeld',
    previewSubtitle: 'De eerste rijen tonen de genormaliseerde structuur die geexporteerd wordt.',
    exportTitle: 'Schoon bestand exporteren',
    exportSubtitle: 'Dubbele sleutels worden verwijderd en ontbrekende kolommen opgevuld.',
    downloadButton: 'Download schoon bestand',
    copyButton: 'Kopieer resultaat',
    copiedMessage: 'Resultaat gekopieerd naar klembord.',
    emptyIssue: 'Lege vertaalcel',
    duplicateIssue: 'Dubbele sleutel verwijderd',
    malformedIssue: 'Kolom of aanhalingstekenartikel',
    parseIssue: 'Bestand kon niet gelezen worden.',
    rowLabel: 'Rij',
    columnLabel: 'Kolom',
    keyLabel: 'Sleutel',
    sampleFileName: 'lokalisatie-voorbeeld.csv',
    privacyNote: 'Lokale verwerking in browser',
    waitingTitle: 'Wachten op bestand',
    waitingSubtitle: 'Sleep een CSV of JSON bestand om de inspectie te starten.',
    fileTypeNote: 'UTF8 CSV of gestructureerde JSON',
  },
  seo: [
    { type: 'title', level: 2, text: 'Waarom lokalisatiebestanden fouten geven bij import' },
    {
      type: 'paragraph',
      html: 'Vertaaltafels zijn eenvoudig aan te passen maar ook kwetsbaar voor opmaakfouten. Een komma in een tekst of een missend aanhalingsteken kan kolommen verschuiven.',
    },
    {
      type: 'paragraph',
      html: 'De Godot CSV importer en het Unity Localization pakket vereisen een strakke opbouw. Deze tool controleert uw bestanden vooraf.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'CSV', label: 'Kommacontrole' },
        { value: 'JSON', label: 'Array & map ondersteuning' },
        { value: '0 uploads', label: '100% lokaal' },
        { value: '1 klik', label: 'Schone export' },
      ],
    },
    { type: 'title', level: 2, text: 'Wat de tool controleert' },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Gedetecteerd voor import',
          description: 'Moeilijk te vinden fouten in grote bestanden',
          points: ['Leere cellen', 'Dubbele sleutels', 'Rijen met verkeerd aantal kolommen', 'Ongeldige aanhalingstekens'],
        },
        {
          title: 'Genormaliseerd bij export',
          description: 'Veilige automatische correcties',
          points: ['Ontbrekende kolommen opgevuld', 'Extra kolommen samengevoegd', 'Eerste sleutel behouden', 'Origineel bestand blijft intact'],
        },
      ],
    },
    { type: 'title', level: 2, text: 'Het opgeschoonde bestand controleren' },
    {
      type: 'paragraph',
      html: 'Structurele opschoning vervangt geen taalkundige controle. Gebruik de lijst met bevindingen om vertalingen aan te vullen.',
    },
    {
      type: 'table',
      headers: ['Bevinding', 'Betekenis', 'Vervolgactie'],
      rows: [
        ['Lege cel', 'Taalkolom bevat geen tekst', 'Vertaal of bevestig als bewust leeg'],
        ['Dubbele sleutel', 'Meerdere rijen gebruiken dezelfde sleutel', 'Vergelijk rijen en gebruik de eerste'],
        ['Beschadigde rij', 'Kolomaantal afwijkend', 'Controleer de samengevoegde kolom'],
        ['Leesfout', 'JSON ongeldig', 'Herstel syntaxis voor import'],
      ],
    },
    { type: 'title', level: 2, text: 'CSV conventies voor games' },
    {
      type: 'paragraph',
      html: 'Tekst met komma s of nieuwe regels moet altijd tussen dubbele aanhalingstekens staan.',
    },
    {
      type: 'tip',
      title: 'Bewaar het origineel',
      html: 'Behoud altijd het originele bronbestand van de vertaler ter vergelijking.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Vertaalsleutel', definition: 'Unieke id gebruikt door de game code.' },
        { term: 'CSV veld', definition: 'Enkele waarde tussen scheidingstekens.' },
        { term: 'Escaping', definition: 'Aanhalingstekens om leestekens als tekst te behouden.' },
        { term: 'Locale', definition: 'Taal en regio id zoals nl, en of ja.' },
      ],
    },
  ],
  faq: [
    {
      question: 'Worden er bestanden geupload?',
      answer: 'Nee, alle verwerking vindt lokaal plaats in de browser.',
    },
    {
      question: 'Wat gebeurt er bij extra komma s in een rij?',
      answer: 'De rij wordt gemarkeerd en extra velden worden samengevoegd in de laatste kolom.',
    },
    {
      question: 'Hoe worden dubbele sleutels opgelost?',
      answer: 'De eerste rij blijft behouden, latere rijen worden weggelaten.',
    },
    {
      question: 'Controleert de tool de vertaalkwaliteit?',
      answer: 'Nee, alleen de bestandsstructuur en ontbrekende cellen.',
    },
  ],
  howTo: [
    { name: 'Kies formaat', text: 'Selecteer CSV of JSON.' },
    { name: 'Controleer bevindingen', text: 'Sleep het bestand en bekijk de foutenlijst.' },
    { name: 'Exporteer en test', text: 'Download het schone bestand en importeer het in uw engine.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Godot en Unity Lokalisatie CSV en JSON Opschoonhulp',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [{
        '@type': 'Question',
        name: 'Worden er bestanden geupload?',
        acceptedAnswer: { '@type': 'Answer', text: 'Nee, alle verwerking vindt lokaal plaats in de browser.' },
      }],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Lokalisatiebestand opschonen',
      step: [
        { '@type': 'HowToStep', name: 'Kies formaat', text: 'Selecteer CSV of JSON.' },
        { '@type': 'HowToStep', name: 'Controleer bevindingen', text: 'Sleep het bestand en bekijk de foutenlijst.' },
        { '@type': 'HowToStep', name: 'Exporteer en test', text: 'Download het schone bestand en importeer het in uw engine.' },
      ],
    },
  ],
  bibliography: [
    { name: 'Godot ResourceImporterCSVTranslation Documentatie', url: 'https://docs.godotengine.org/en/stable/classes/class_resourceimportercsvtranslation.html' },
    { name: 'Unity Localization CSV Import Documentatie', url: 'https://docs.unity3d.com/Packages/com.unity.localization@1.5/manual/CSV.html' },
    { name: 'RFC 4180 CSV Specificatie', url: 'https://datatracker.ietf.org/doc/html/rfc4180' },
  ],
};
