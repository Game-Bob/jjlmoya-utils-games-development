import { describe, expect, it } from 'vitest';
import { detectSyntax, getPreviewHtml, markdownToBbcode, sampleBbcode, translate, translateToAll } from './logic';

describe('steam BBCode translator', () => {
  it('converts headings, inline emphasis and links to Markdown', () => {
    const result = translate('[h1]Signal Lost[/h1]\n[b]Bold[/b] [url=https://example.com]Read[/url]', 'bbcode-to-output', 'markdown');
    expect(result.output).toContain('# Signal Lost');
    expect(result.output).toContain('**Bold**');
    expect(result.output).toContain('[Read](https://example.com)');
  });

  it('keeps nested BBCode lists nested in Markdown and HTML', () => {
    const markdown = translate('[list][*]Parent[list][*]Child[/list][*]Sibling[/list]', 'bbcode-to-output', 'markdown');
    const html = translate('[list][*]Parent[list][*]Child[/list][*]Sibling[/list]', 'bbcode-to-output', 'html');
    expect(markdown.output).toContain('- Parent\n  - Child');
    expect(html.output).toContain('<ul><li>Parent<ul><li>Child</li></ul></li><li>Sibling</li></ul>');
  });

  it('translates Markdown list indentation back to Steam list tags', () => {
    const result = markdownToBbcode('- Parent\n  - Child\n- Sibling');
    expect(result.output).toBe('[list]\n[*]Parent\n[list]\n[*]Child\n[/list]\n[*]Sibling\n[/list]');
  });

  it('handles empty input and exposes a safe preview', () => {
    expect(translate('   ', 'bbcode-to-output', 'html').stats.characters).toBe(0);
    expect(getPreviewHtml(sampleBbcode, 'bbcode-to-output', 'html')).not.toContain('<script');
  });

  it('detects the pasted syntax and returns only the other two formats', () => {
    expect(detectSyntax('[b]Steam[/b]')).toBe('bbcode');
    expect(detectSyntax('# Markdown')).toBe('markdown');
    expect(detectSyntax('<strong>HTML</strong>')).toBe('html');
    expect(Object.keys(translateToAll(sampleBbcode).outputs).sort()).toEqual(['html', 'markdown']);
  });

  it('reports malformed closing tags without throwing', () => {
    const result = translate('[b]Unfinished[/i]', 'bbcode-to-output', 'markdown');
    expect(result.output).toContain('Unfinished');
    expect(result.warnings.length).toBeGreaterThan(0);
  });
});
