import type { ToolLocaleContent } from '../../../types';
import type { LocalizationSanitizerUI } from '../ui';

export const content: ToolLocaleContent<LocalizationSanitizerUI> = {
  slug: 'localization-sanitizer',
  title: 'Godot and Unity Localization CSV Sanitizer',
  description: 'Inspect translation CSV or JSON files for empty cells, duplicate keys, and broken rows, then export a clean local copy ready for engine import.',
  ui: {
    csvTab: 'CSV file',
    jsonTab: 'JSON file',
    dropTitle: 'Drop a translation file here',
    dropSubtitle: 'Inspect the structure in your browser and keep the source file on your device.',
    browseButton: 'Browse files',
    sampleButton: 'Load sample',
    clearButton: 'Clear',
    inputLabel: 'Translation file input',
    formatLabel: 'Format',
    healthLabel: 'File health',
    readyStatus: 'Ready to import',
    reviewStatus: 'Needs review',
    emptyCellsLabel: 'Empty cells',
    duplicateKeysLabel: 'Duplicate keys',
    malformedRowsLabel: 'Broken rows',
    cleanRowsLabel: 'Clean rows',
    issueListTitle: 'Findings',
    noIssues: 'No issues found in this pass.',
    previewTitle: 'Translation preview',
    previewSubtitle: 'The first rows show the normalized structure that will be exported.',
    exportTitle: 'Export clean file',
    exportSubtitle: 'Duplicates are removed missing columns are padded and CSV values are escaped again.',
    downloadButton: 'Download clean file',
    copyButton: 'Copy output',
    copiedMessage: 'Clean output copied to clipboard.',
    emptyIssue: 'Empty translation cell',
    duplicateIssue: 'Duplicate key removed',
    malformedIssue: 'Column or quote mismatch',
    parseIssue: 'The file could not be parsed.',
    rowLabel: 'Row',
    columnLabel: 'Column',
    keyLabel: 'Key',
    sampleFileName: 'localization-sample.csv',
    privacyNote: 'Local browser processing',
    waitingTitle: 'Waiting for a file',
    waitingSubtitle: 'Drop CSV or JSON to start the inspection.',
    fileTypeNote: 'UTF8 CSV or structured JSON',
  },
  seo: [
    { type: 'title', level: 2, text: 'Why localization files break during engine import' },
    {
      type: 'paragraph',
      html: 'Translation tables are simple to edit and surprisingly easy to damage. A comma inside a phrase, a missing pair of quotes, or one row with a different number of fields can shift every value to the wrong language column. A repeated key can be just as disruptive because the engine no longer has one unambiguous source string to import.',
    },
    {
      type: 'paragraph',
      html: 'Godot CSV translation importer expects a header row, a first column of identifiers, and consistent translation columns. Unity Localization package also uses CSV to exchange string table data with translators. This sanitizer gives you a small inspection pass before you hand a file back to an engine: it checks the shape, highlights unfinished cells, keeps the first copy of a repeated key, and writes a normalized export.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'CSV', label: 'Quoted commas checked' },
        { value: 'JSON', label: 'Array and map input' },
        { value: '0 uploads', label: 'Browser-only workflow' },
        { value: '1 click', label: 'Clean export' },
      ],
    },
    { type: 'title', level: 2, text: 'What the sanitizer checks' },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Detected before import',
          description: 'Problems that are hard to spot in a long translation table',
          points: ['Empty language cells that still need a translation', 'Repeated identifiers that would create ambiguous rows', 'CSV records with missing or extra columns', 'Quotes that do not follow the normal CSV field rules'],
        },
        {
          title: 'Normalized for export',
          description: 'Small, predictable repairs that are safe to review',
          points: ['Missing CSV cells are padded so every row matches the header', 'Extra CSV fields are joined into the final cell and escaped', 'The first row for a duplicate key is retained', 'The original file remains untouched for comparison or rollback'],
        },
      ],
    },
    { type: 'title', level: 2, text: 'How to review a cleaned localization file' },
    {
      type: 'paragraph',
      html: 'A clean parse is a structural result, not a language review. Use the findings list to locate missing work, then read the exported file in the engine that will consume it. Check that the identifier column is the column your project expects, that locale headers match the project settings, and that intentional empty values are understood by the runtime. The sanitizer does not judge grammar, placeholders, plural rules, or context-sensitive terminology.',
    },
    {
      type: 'table',
      headers: ['Finding', 'What it means', 'Next action'],
      rows: [
        ['Empty cell', 'A non-key column contains no text', 'Translate it or confirm that an empty value is intentional'],
        ['Duplicate key', 'More than one row uses the same identifier', 'Compare the rows before keeping the exported first occurrence'],
        ['Broken row', 'The row shape or quote syntax differs from the header', 'Review the normalized final cell and compare with the source'],
        ['Parse error', 'The JSON structure cannot be read', 'Fix the syntax in a JSON editor before importing'],
      ],
    },
    { type: 'title', level: 2, text: 'CSV conventions that matter for game localization' },
    {
      type: 'paragraph',
      html: 'The common CSV rules are deliberately modest: fields are separated by commas, records have a consistent field count, and a field containing a comma, a line break, or a quote can be enclosed in double quotes. A quote inside a quoted field is represented by two quotes. These details matter for translated phrases because punctuation is part of natural language, not a reliable delimiter.',
    },
    {
      type: 'tip',
      title: 'Keep the original beside the clean export',
      html: 'The export is a repair aid, not a replacement for source control. Keep the translator original file, inspect any broken row whose comma was joined into the final column, and run the cleaned file through the target engine before committing it to your project.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Translation key', definition: 'A stable identifier used by game code to request a localized string.' },
        { term: 'CSV field', definition: 'One value between separators in a comma-separated record.' },
        { term: 'Escaping', definition: 'The quoting convention that lets punctuation remain part of a value instead of becoming a separator.' },
        { term: 'Locale', definition: 'A language and regional convention such as en, es, or ja used to select a translation column.' },
      ],
    },
  ],
  faq: [
    {
      question: 'Does this tool upload my translation file?',
      answer: 'No network upload is used by the sanitizer interface. The selected text is read by the browser, analyzed locally, and turned into a download in the same browser session. As with any web tool, review your site own analytics and deployment policy if you embed or customize this component.',
    },
    {
      question: 'What happens when a CSV row has an extra comma?',
      answer: 'The row is flagged as malformed and the extra fields are joined into the final column before export. This is useful for the common case where a last translation contains an unescaped comma, but you should review the flagged row because a comma in a middle column cannot be inferred with certainty.',
    },
    {
      question: 'How are duplicate translation keys cleaned?',
      answer: 'The first occurrence is kept in the clean output and later occurrences are omitted from the exported file. The findings list shows each removed duplicate so you can compare the source rows and decide whether the first row is the intended one.',
    },
    {
      question: 'Can it validate the quality of a translation?',
      answer: 'It checks file structure and missing values, not grammar or meaning. It does not validate placeholders, plurals, gender, context, or whether the wording is correct for your game. Those checks still need a translator, reviewer, or engine-specific validation step.',
    },
  ],
  howTo: [
    { name: 'Choose the file format', text: 'Select CSV or JSON, or let the tool detect the format from the file name and contents.' },
    { name: 'Inspect the findings', text: 'Drop the translation file, review the health score, and use the findings list to locate empty cells, duplicate keys, and malformed rows.' },
    { name: 'Export and test', text: 'Download or copy the normalized output, compare any repaired rows with the original, and import it into your Godot or Unity project.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Godot and Unity Localization CSV Sanitizer',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [{
        '@type': 'Question',
        name: 'What happens when a CSV row has an extra comma?',
        acceptedAnswer: { '@type': 'Answer', text: 'The row is flagged as malformed and the extra fields are joined into the final column before export for review.' },
      }],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'How to sanitize a game localization file',
      step: [
        { '@type': 'HowToStep', name: 'Choose the file format', text: 'Select CSV or JSON and load the translation file.' },
        { '@type': 'HowToStep', name: 'Inspect the findings', text: 'Review empty cells, duplicate keys, and malformed rows.' },
        { '@type': 'HowToStep', name: 'Export and test', text: 'Download the clean output and import it into the target engine.' },
      ],
    },
  ],
  bibliography: [
    { name: 'Godot ResourceImporterCSVTranslation Documentation', url: 'https://docs.godotengine.org/en/stable/classes/class_resourceimportercsvtranslation.html' },
    { name: 'Unity Localization CSV Import and Export Documentation', url: 'https://docs.unity3d.com/Packages/com.unity.localization@1.5/manual/CSV.html' },
    { name: 'RFC 4180 Common Format and MIME Type for CSV Files', url: 'https://datatracker.ietf.org/doc/html/rfc4180' },
  ],
};
