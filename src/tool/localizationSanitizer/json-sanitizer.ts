import { emptyResult, issue } from './csv-sanitizer';
import type { JsonRowRecord, SanitizerIssue, SanitizerResult } from './types';

function textValue(value: unknown): string {
  if (value === null || value === undefined) return '';
  if (typeof value === 'string') return value;
  if (typeof value === 'object') return JSON.stringify(value);
  return String(value);
}

function objectRecords(value: unknown): JsonRowRecord[] | null {
  if (!Array.isArray(value)) return null;
  return value.map((item, index) => ({
    source: item !== null && typeof item === 'object' && !Array.isArray(item) ? (item as Record<string, unknown>) : {},
    row: index + 1,
  }));
}

function parseJsonRecords(source: string): { records: JsonRowRecord[]; isMap: boolean; mapValuesAreObjects: boolean } | null {
  let parsed: unknown;
  try {
    parsed = JSON.parse(source.replace(/^\uFEFF/, ''));
  } catch {
    return null;
  }
  const arrayRecords = objectRecords(parsed);
  const isMap = !Array.isArray(parsed) && parsed !== null && typeof parsed === 'object';
  const mapEntries = isMap ? Object.entries(parsed as Record<string, unknown>) : [];
  const mapValuesAreObjects = mapEntries.length > 0 && mapEntries.every(([, value]) => value !== null && typeof value === 'object' && !Array.isArray(value));
  const records: JsonRowRecord[] = arrayRecords ?? (mapEntries.length > 0
    ? mapEntries.map(([key, value], index) => ({ source: mapValuesAreObjects ? { ...(value as Record<string, unknown>), key } : { key, value }, row: index + 1 }))
    : []);
  return { records, isMap, mapValuesAreObjects };
}

function buildCleanMapValue(cleanRecords: Record<string, unknown>[], keyHeader: string, mapValuesAreObjects: boolean): Record<string, unknown> {
  return Object.fromEntries(cleanRecords.map((record) => {
    const key = String(record[keyHeader]);
    if (mapValuesAreObjects) {
      const nested = { ...record };
      delete nested[keyHeader];
      return [key, nested];
    }
    return [key, record.value ?? ''];
  }));
}

interface ProcessRecordParams {
  record: JsonRowRecord;
  headers: string[];
  keyHeader: string;
  seenKeys: Set<string>;
  issues: SanitizerIssue[];
}

function processJsonRecord(params: ProcessRecordParams): { values: string[]; key: string; cleanRecord: Record<string, unknown> } | null {
  const { record, headers, keyHeader, seenKeys, issues } = params;
  const values = headers.map((header) => textValue(record.source[header]));
  const key = (values[0] ?? '').trim();

  if (!key) {
    issues.push(issue({ kind: 'empty', row: record.row, column: keyHeader, key: '', detail: 'empty_key' }));
  }
  values.forEach((value, columnIndex) => {
    if (columnIndex !== 0 && value.trim() === '') {
      issues.push(issue({ kind: 'empty', row: record.row, column: headers[columnIndex] ?? '', key, detail: 'empty_translation' }));
    }
  });

  if (key && seenKeys.has(key)) {
    issues.push(issue({ kind: 'duplicate', row: record.row, column: keyHeader, key, detail: 'duplicate_key' }));
    return null;
  }
  if (!key) return null;

  seenKeys.add(key);
  const cleanRecord: Record<string, unknown> = {};
  headers.forEach((header, columnIndex) => {
    cleanRecord[header] = columnIndex === 0 ? key : record.source[header] ?? '';
  });
  return { values, key, cleanRecord };
}

function resolveJsonHeaders(records: JsonRowRecord[]): { headers: string[]; keyHeader: string } {
  const sourceHeaders = Array.from(new Set(records.flatMap((record) => Object.keys(record.source))));
  const keyHeader = sourceHeaders.find((header) => /^(key|id|identifier|loc[_-]?key)$/i.test(header)) || sourceHeaders[0] || 'key';
  return { headers: [keyHeader, ...sourceHeaders.filter((header) => header !== keyHeader)], keyHeader };
}

export function sanitizeJson(source: string): SanitizerResult {
  const parsedData = parseJsonRecords(source);
  if (!parsedData) return emptyResult('json', 'invalid_json');
  const { records, isMap, mapValuesAreObjects } = parsedData;
  if (records.length === 0) return emptyResult('json', 'expected_array_or_object');

  const { headers, keyHeader } = resolveJsonHeaders(records);
  const issues: SanitizerIssue[] = [];
  const rows: string[][] = [];
  const seenKeys = new Set<string>();
  const cleanRecords: Record<string, unknown>[] = [];

  records.forEach((record) => {
    const res = processJsonRecord({ record, headers, keyHeader, seenKeys, issues });
    if (res) { rows.push(res.values); cleanRecords.push(res.cleanRecord); }
  });

  return {
    format: 'json', valid: true, headers, rows,
    cleanText: JSON.stringify(isMap ? buildCleanMapValue(cleanRecords, keyHeader, mapValuesAreObjects) : cleanRecords, null, 2),
    issues,
    stats: {
      totalRows: records.length, cleanRows: rows.length,
      emptyCells: issues.filter((item) => item.kind === 'empty').length,
      duplicateKeys: issues.filter((item) => item.kind === 'duplicate').length,
      malformedRows: 0,
    },
  };
}
