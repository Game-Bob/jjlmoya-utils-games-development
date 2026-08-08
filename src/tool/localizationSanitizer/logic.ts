import { sanitizeCsv } from './csv-sanitizer';
import { emptyResult } from './csv-sanitizer';
import { sanitizeJson } from './json-sanitizer';
import type { SanitizerResult, TranslationFormat } from './types';

export type { TranslationFormat, SanitizerIssueKind, SanitizerIssue, SanitizerStats, SanitizerResult } from './types';

export function detectTranslationFormat(fileName: string, source = ''): TranslationFormat {
  if (/\.json$/i.test(fileName)) {
    return 'json';
  }
  if (/\.csv$/i.test(fileName)) {
    return 'csv';
  }
  return source.trim().startsWith('{') || source.trim().startsWith('[') ? 'json' : 'csv';
}

export function sanitizeTranslationFile(source: string, format: TranslationFormat): SanitizerResult {
  if (!source.trim()) {
    return emptyResult(format, 'empty_file');
  }
  return format === 'csv' ? sanitizeCsv(source) : sanitizeJson(source);
}
