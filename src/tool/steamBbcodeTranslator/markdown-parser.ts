import type { TranslationResult } from './types';

export function convertInlineMarkdown(value: string): string {
  let output = value;
  output = output.replace(/`([^`\n]+)`/g, '[code]$1[/code]');
  output = output.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '$1');
  output = output.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '[url=$2]$1[/url]');
  output = output.replace(/\*\*([^*\n]+)\*\*/g, '[b]$1[/b]');
  output = output.replace(/__([^_\n]+)__/g, '[b]$1[/b]');
  output = output.replace(/~~([^~\n]+)~~/g, '[s]$1[/s]');
  output = output.replace(/(?<!\*)\*([^*\n]+)\*(?!\*)/g, '[i]$1[/i]');
  output = output.replace(/(?<!_)_([^_\n]+)_(?!_)/g, '[i]$1[/i]');
  return output;
}

function countBlocks(source: string): number {
  return source.trim() ? source.split(/\n{2,}/).filter(Boolean).length : 0;
}

interface ListState {
  level: number;
  orderedLevel: number;
}

function adjustListDepth(state: ListState, targetLevel: number, isOrdered: boolean, output: string[]): ListState {
  let { level, orderedLevel } = state;
  while (level > targetLevel) {
    output.push(level === orderedLevel ? '[/olist]' : '[/list]');
    if (level === orderedLevel) orderedLevel -= 1;
    level -= 1;
  }
  while (level < targetLevel) {
    level += 1;
    if (isOrdered) orderedLevel = level;
    output.push(isOrdered ? '[olist]' : '[list]');
  }
  return { level, orderedLevel };
}

function processListLine(state: ListState, listMatch: RegExpExecArray, output: string[]): ListState {
  const indentStr = listMatch[1] ?? '';
  const marker = listMatch[2] ?? '-';
  const textContent = listMatch[3] ?? '';
  const targetLevel = Math.floor(indentStr.length / 2);
  const isOrdered = /\d+\./.test(marker);
  const newState = adjustListDepth(state, targetLevel, isOrdered, output);
  output.push(`[*]${convertInlineMarkdown(textContent)}`);
  return newState;
}

function closeAllLists(state: ListState, output: string[]): ListState {
  let { level, orderedLevel } = state;
  while (level >= 0) {
    output.push(level === orderedLevel ? '[/olist]' : '[/list]');
    if (level === orderedLevel) orderedLevel -= 1;
    level -= 1;
  }
  return { level: -1, orderedLevel: -1 };
}

function processCodeBlock(lines: string[], lineIndex: number, output: string[], warnings: string[]): number {
  const codeLines: string[] = [];
  let next = lineIndex + 1;
  while (next < lines.length) {
    const nextLine = lines[next];
    if (nextLine && /^```/.test(nextLine)) break;
    if (nextLine !== undefined) codeLines.push(nextLine);
    next += 1;
  }
  if (next >= lines.length) warnings.push('An unclosed Markdown code fence was closed automatically.');
  output.push(`[code]${codeLines.join('\n')}[/code]`);
  return next;
}

function parseMarkdownLine(line: string, output: string[]): boolean {
  const heading = /^(#{1,3})\s+(.+)$/.exec(line);
  if (heading) {
    const level = heading[1]?.length ?? 1;
    output.push(`[h${level}]${convertInlineMarkdown(heading[2] ?? '')}[/h${level}]`);
    return true;
  }
  const quote = /^>\s?(.*)$/.exec(line);
  if (quote) {
    output.push(`[quote]${convertInlineMarkdown(quote[1] ?? '')}[/quote]`);
    return true;
  }
  return false;
}

export function markdownToBbcode(source: string): TranslationResult {
  const lines = source.replace(/\r/g, '').split('\n');
  const output: string[] = [];
  const warnings: string[] = [];
  let state: ListState = { level: -1, orderedLevel: -1 };

  for (let idx = 0; idx < lines.length; idx += 1) {
    const line = lines[idx] ?? '';
    const listMatch = /^(\s*)([-+*]|\d+\.)\s+(.+)$/.exec(line);
    if (listMatch) {
      state = processListLine(state, listMatch, output);
      continue;
    }
    state = closeAllLists(state, output);
    if (!line.trim()) {
      output.push('');
    } else if (/^```/.test(line)) {
      idx = processCodeBlock(lines, idx, output, warnings);
    } else if (!parseMarkdownLine(line, output)) {
      output.push(convertInlineMarkdown(line));
    }
  }
  closeAllLists(state, output);
  const result = output.join('\n').replace(/\n{3,}/g, '\n\n').trim();
  return { output: result, warnings, stats: { characters: result.length, tags: (result.match(/\[[a-z*]/gi) ?? []).length, blocks: countBlocks(result) } };
}
