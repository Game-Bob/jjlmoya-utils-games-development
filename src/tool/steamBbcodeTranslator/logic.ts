import type { AutoTranslationResult, MarkupSyntax, OutputFormat, TranslationDirection, TranslationResult } from './types';
import { parseBbcode } from './bbcode-parser';
import { renderHtml } from './html-renderer';
import { renderMarkdown } from './markdown-renderer';
import { htmlToBbcode } from './html-parser';
import { markdownToBbcode } from './markdown-parser';

export * from './types';
export * from './storage';
export { parseBbcode } from './bbcode-parser';
export { renderMarkdown } from './markdown-renderer';
export { renderHtml } from './html-renderer';
export { htmlToBbcode } from './html-parser';
export { markdownToBbcode } from './markdown-parser';

function countBlocks(source: string): number {
  return source.trim() ? source.split(/\n{2,}/).filter(Boolean).length : 0;
}

export function convertBbcode(source: string, format: OutputFormat): TranslationResult {
  const parsed = parseBbcode(source);
  const output = format === 'html' ? renderHtml(parsed.nodes) : renderMarkdown(parsed.nodes);
  return {
    output,
    warnings: parsed.warnings,
    stats: { characters: output.length, tags: parsed.tagCount, blocks: countBlocks(output) }
  };
}

export function detectSyntax(source: string): MarkupSyntax {
  const value = source.trim();
  if (!value) return 'markdown';
  if (/<(?:h[1-6]|p|strong|em|b|i|ul|ol|li|a|br|blockquote|code)\b[^>]*>/i.test(value)) return 'html';
  if (/\[(?:\/?(?:h[1-3]|b|strong|i|em|u|s|strike|url|code|quote|spoiler|list|olist)|\*)[^\]]*\]/i.test(value)) return 'bbcode';
  return 'markdown';
}

export function translate(source: string, direction: TranslationDirection, format: OutputFormat): TranslationResult {
  if (!source.trim()) return { output: '', warnings: [], stats: { characters: 0, tags: 0, blocks: 0 } };
  if (direction === 'bbcode-to-output') return convertBbcode(source, format);
  if (format === 'html') return htmlToBbcode(source);
  return markdownToBbcode(source);
}

function translateNonBbcode(source: string, detected: MarkupSyntax): AutoTranslationResult {
  const bbcode = detected === 'html' ? htmlToBbcode(source) : markdownToBbcode(source);
  const secondary = detected === 'html'
    ? { markdown: convertBbcode(bbcode.output, 'markdown') }
    : { html: convertBbcode(bbcode.output, 'html') };

  return {
    detected,
    outputs: {
      bbcode,
      ...secondary
    }
  };
}

export function translateToAll(source: string): AutoTranslationResult {
  const detected = detectSyntax(source);
  if (!source.trim()) return { detected, outputs: {} };
  if (detected === 'bbcode') {
    return {
      detected,
      outputs: {
        markdown: convertBbcode(source, 'markdown'),
        html: convertBbcode(source, 'html')
      }
    };
  }
  return translateNonBbcode(source, detected);
}

export function getPreviewHtml(source: string, direction: TranslationDirection, format: OutputFormat): string {
  if (!source.trim()) return '';
  if (direction === 'bbcode-to-output') {
    const result = translate(source, direction, format);
    return format === 'html' ? result.output : convertBbcode(markdownToBbcode(result.output).output, 'html').output;
  }
  return convertBbcode(translate(source, direction, format).output, 'html').output;
}

export function getAutoPreviewHtml(source: string): string {
  if (!source.trim()) return '';
  const detected = detectSyntax(source);
  if (detected === 'bbcode') return convertBbcode(source, 'html').output;
  const bbcode = detected === 'html' ? htmlToBbcode(source).output : markdownToBbcode(source).output;
  return convertBbcode(bbcode, 'html').output;
}

export const sampleBbcode = `[b]The Last Lantern[/b]\n\nA hand crafted survival adventure about a flooded city, a fragile airship, and the people you choose to rescue.\n\n[list][*]Scavenge abandoned districts[*]Upgrade your workshop[list][*]Solar engine[*]Deep water hull[/list][*]Make difficult choices[/list]\n\n[url=https://example.com/presskit]Read the press kit[/url]`;

export const sampleMarkdown = `# The Last Lantern\n\n**A hand crafted survival adventure**\nExplore a flooded city, rebuild your airship, and choose who gets a place on board.\n\n- Scavenge abandoned districts\n- Upgrade your workshop\n  - Solar engine\n  - Deep water hull\n- Make difficult choices\n\n[Read the press kit](https://example.com/presskit)`;

export const sampleHtml = `<h1>The Last Lantern</h1><p><strong>A hand crafted survival adventure</strong><br>Explore a flooded city, rebuild your airship, and choose who gets a place on board.</p><ul><li>Scavenge abandoned districts</li><li>Upgrade your workshop<ul><li>Solar engine</li><li>Deep water hull</li></ul></li><li>Make difficult choices</li></ul><a href="https://example.com/presskit">Read the press kit</a>`;
