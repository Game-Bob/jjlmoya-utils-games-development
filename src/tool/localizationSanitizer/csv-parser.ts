import type { ParsedCsvRow } from './types';

interface CsvState {
  rows: ParsedCsvRow[];
  row: string[];
  field: string;
  inQuotes: boolean;
  quoteClosed: boolean;
  malformed: boolean;
}

function createCsvState(): CsvState {
  return {
    rows: [],
    row: [],
    field: '',
    inQuotes: false,
    quoteClosed: false,
    malformed: false,
  };
}

function flushRow(state: CsvState): void {
  const values = [...state.row, state.field];
  if (values.some((value) => value.trim() !== '')) {
    state.rows.push({ values, malformed: state.malformed });
  }
  state.row = [];
  state.field = '';
  state.quoteClosed = false;
  state.malformed = false;
}

function handleQuotedChar(state: CsvState, character: string, nextCharacter: string): number {
  if (character === '"' && nextCharacter === '"') {
    state.field += '"';
    return 1;
  }
  if (character === '"') {
    state.inQuotes = false;
    state.quoteClosed = true;
  } else {
    state.field += character;
  }
  return 0;
}

function handleUnquotedChar(state: CsvState, character: string, nextCharacter: string): void {
  if (character === '"') {
    if (state.field.length === 0) {
      state.inQuotes = true;
    } else {
      state.malformed = true;
      state.field += character;
    }
  } else if (character === ',') {
    state.row.push(state.field);
    state.field = '';
    state.quoteClosed = false;
  } else if (character === '\n' || (character === '\r' && nextCharacter !== '\n')) {
    flushRow(state);
  } else {
    if (state.quoteClosed) state.malformed = true;
    state.field += character;
  }
}

function processCsvChar(state: CsvState, source: string, index: number): number {
  const character = source[index] ?? '';
  const nextCharacter = source[index + 1] ?? '';
  if (state.inQuotes) {
    return handleQuotedChar(state, character, nextCharacter);
  }
  handleUnquotedChar(state, character, nextCharacter);
  return 0;
}

export function parseCsvRows(source: string): ParsedCsvRow[] {
  const state = createCsvState();
  for (let index = 0; index < source.length; index += 1) {
    index += processCsvChar(state, source, index);
  }
  if (state.inQuotes) state.malformed = true;
  if (state.field.length > 0 || state.row.length > 0 || state.malformed) {
    flushRow(state);
  }
  return state.rows;
}

export function csvEscape(value: string): string {
  if (/[",\n\r]/.test(value)) {
    return `"${value.replaceAll('"', '""')}"`;
  }
  return value;
}
