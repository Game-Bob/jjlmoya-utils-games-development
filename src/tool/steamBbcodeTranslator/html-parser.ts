import type { TranslationResult } from './types';

export function decodeHtml(value: string): string {
  return value
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&');
}

function countBlocks(source: string): number {
  return source.trim() ? source.split(/\n{2,}/).filter(Boolean).length : 0;
}

export function htmlToBbcode(source: string): TranslationResult {
  let output = source.replace(/<!--[\s\S]*?-->/g, '');
  const warnings: string[] = [];
  output = output.replace(/<h([1-3])\b[^>]*>/gi, (_, level: string) => `[h${level}]`);
  output = output.replace(/<\/h([1-3])>/gi, (_, level: string) => `[/h${level}]`);
  const replacements: [RegExp, string][] = [
    [/<(?:strong|b)\b[^>]*>/gi, '[b]'], [/<\/(?:strong|b)>/gi, '[/b]'],
    [/<(?:em|i)\b[^>]*>/gi, '[i]'], [/<\/(?:em|i)>/gi, '[/i]'],
    [/<u\b[^>]*>/gi, '[u]'], [/<\/u>/gi, '[/u]'],
    [/<(?:del|s|strike)\b[^>]*>/gi, '[s]'], [/<\/(?:del|s|strike)>/gi, '[/s]'],
    [/<blockquote\b[^>]*>/gi, '[quote]'], [/<\/blockquote>/gi, '[/quote]'],
    [/<code\b[^>]*>/gi, '[code]'], [/<\/code>/gi, '[/code]'],
    [/<pre\b[^>]*>/gi, ''], [/<\/pre>/gi, ''],
    [/<details\b[^>]*>/gi, '[spoiler]'], [/<\/details>/gi, '[/spoiler]'],
    [/<summary\b[^>]*>.*?<\/summary>/gi, ''],
    [/<ul\b[^>]*>/gi, '[list]'], [/<\/ul>/gi, '[/list]'],
    [/<ol\b[^>]*>/gi, '[olist]'], [/<\/ol>/gi, '[/olist]'],
    [/<li\b[^>]*>/gi, '[*]'], [/<\/li>/gi, '\n'],
    [/<br\s*\/?>/gi, '\n'], [/<p\b[^>]*>/gi, ''], [/<\/p>/gi, '\n\n']
  ];
  for (const [pattern, replacement] of replacements) output = output.replace(pattern, replacement);
  output = output.replace(/<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi, '[url=$1]$2[/url]');
  if (/<[a-z][^>]*>/i.test(output)) warnings.push('Unsupported HTML tags were removed from the BBCode result.');
  output = decodeHtml(output.replace(/<[^>]+>/g, '')).replace(/[ \t]+\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim();
  const tagsCount = (source.match(/<\/?[a-z][^>]*>/gi) ?? []).length;
  return { output, warnings, stats: { characters: output.length, tags: tagsCount, blocks: countBlocks(output) } };
}
