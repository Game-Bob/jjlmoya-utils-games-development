export type TranslationFormat = 'csv' | 'json';

export type SanitizerIssueKind = 'empty' | 'duplicate' | 'malformed' | 'parse';

export interface SanitizerIssue {
  kind: SanitizerIssueKind;
  row: number;
  column: string;
  key: string;
  detail: string;
}

export interface SanitizerStats {
  totalRows: number;
  cleanRows: number;
  emptyCells: number;
  duplicateKeys: number;
  malformedRows: number;
}

export interface SanitizerResult {
  format: TranslationFormat;
  valid: boolean;
  headers: string[];
  rows: string[][];
  cleanText: string;
  issues: SanitizerIssue[];
  stats: SanitizerStats;
}

export interface ParsedCsvRow {
  values: string[];
  malformed: boolean;
}

export interface JsonRowRecord {
  source: Record<string, unknown>;
  row: number;
}

export interface IssueInput {
  kind: SanitizerIssueKind;
  row: number;
  column: string;
  key: string;
  detail: string;
}

export const EMPTY_STATS: SanitizerStats = {
  totalRows: 0,
  cleanRows: 0,
  emptyCells: 0,
  duplicateKeys: 0,
  malformedRows: 0,
};
