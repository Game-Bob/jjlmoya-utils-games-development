import { csvEscape, parseCsvRows } from './csv-parser';
import { EMPTY_STATS, type IssueInput, type ParsedCsvRow, type SanitizerIssue, type SanitizerResult, type TranslationFormat } from './types';

export function normalizedHeaders(headers: string[]): string[] {
  return headers.map((header, index) => header.trim() || `column_${index + 1}`);
}

export function keyColumnIndex(headers: string[]): number {
  const index = headers.findIndex((header) => /^(key|id|identifier|loc[_-]?key)$/i.test(header.trim()));
  return index >= 0 ? index : 0;
}

export function issue(input: IssueInput): SanitizerIssue {
  return { ...input };
}

export function emptyResult(format: TranslationFormat, detail: string): SanitizerResult {
  return {
    format, valid: false, headers: [], rows: [], cleanText: '',
    issues: [issue({ kind: 'parse', row: 1, column: '', key: '', detail })],
    stats: { ...EMPTY_STATS },
  };
}

function normalizeCsvRowValues(originalValues: string[], expectedColumns: number): string[] {
  if (originalValues.length > expectedColumns) {
    return originalValues.slice(0, expectedColumns - 1).concat(originalValues.slice(expectedColumns - 1).join(','));
  }
  return originalValues.concat(Array.from({ length: Math.max(0, expectedColumns - originalValues.length) }, () => ''));
}

interface CheckRowParams {
  parsedRow: ParsedCsvRow;
  rowNumber: number;
  expectedColumns: number;
  keyIndex: number;
  headers: string[];
}

function checkRowIssues(params: CheckRowParams): { values: string[]; key: string; rowIssues: SanitizerIssue[] } {
  const { parsedRow, rowNumber, expectedColumns, keyIndex, headers } = params;
  const values = normalizeCsvRowValues(parsedRow.values, expectedColumns);
  const key = (values[keyIndex] ?? '').trim();
  const rowIssues: SanitizerIssue[] = [];

  if (parsedRow.malformed || parsedRow.values.length !== expectedColumns) {
    rowIssues.push(issue({ kind: 'malformed', row: rowNumber, column: '', key, detail: parsedRow.malformed ? 'unescaped_quote' : `expected_${expectedColumns}_columns` }));
  }
  if (!key) {
    rowIssues.push(issue({ kind: 'empty', row: rowNumber, column: headers[keyIndex] ?? '', key: '', detail: 'empty_key' }));
  }
  values.forEach((value, columnIndex) => {
    if (columnIndex !== keyIndex && value.trim() === '') {
      rowIssues.push(issue({ kind: 'empty', row: rowNumber, column: headers[columnIndex] ?? '', key, detail: 'empty_translation' }));
    }
  });

  return { values, key, rowIssues };
}

function computeCsvStats(totalRows: number, cleanRowsCount: number, issues: SanitizerIssue[]) {
  return {
    totalRows, cleanRows: cleanRowsCount,
    emptyCells: issues.filter((item) => item.kind === 'empty').length,
    duplicateKeys: issues.filter((item) => item.kind === 'duplicate').length,
    malformedRows: new Set(issues.filter((item) => item.kind === 'malformed').map((item) => item.row)).size,
  };
}

export function sanitizeCsv(source: string): SanitizerResult {
  const parsedRows = parseCsvRows(source.replace(/^\uFEFF/, ''));
  if (parsedRows.length === 0) return emptyResult('csv', 'empty_file');

  const headers = normalizedHeaders(parsedRows[0]?.values ?? []);
  const keyIndex = keyColumnIndex(headers);
  const expectedColumns = headers.length;
  const issues: SanitizerIssue[] = [];
  const rows: string[][] = [];
  const seenKeys = new Set<string>();

  parsedRows.slice(1).forEach((parsedRow, sourceIndex) => {
    const rowNumber = sourceIndex + 2;
    const { values, key, rowIssues } = checkRowIssues({ parsedRow, rowNumber, expectedColumns, keyIndex, headers });
    issues.push(...rowIssues);
    if (key && seenKeys.has(key)) {
      issues.push(issue({ kind: 'duplicate', row: rowNumber, column: headers[keyIndex] ?? '', key, detail: 'duplicate_key' }));
    } else if (key) {
      seenKeys.add(key);
      rows.push(values);
    }
  });

  return {
    format: 'csv', valid: true, headers, rows,
    cleanText: [headers, ...rows].map((row) => row.map(csvEscape).join(',')).join('\n'),
    issues, stats: computeCsvStats(parsedRows.length - 1, rows.length, issues),
  };
}
