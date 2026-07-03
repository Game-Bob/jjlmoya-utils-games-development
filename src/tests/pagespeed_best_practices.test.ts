import { describe, expect, it } from 'vitest';
import { readdirSync, readFileSync } from 'fs';
import { join, relative } from 'path';
import { ALL_TOOLS } from '../tools';
import type { SEOSection, ToolLocaleContent } from '../types';

const srcDir = join(process.cwd(), 'src');
const toolDir = join(srcDir, 'tool');
const geometryReads = [
  'offsetWidth',
  'offsetHeight',
  'offsetTop',
  'offsetLeft',
  'clientWidth',
  'clientHeight',
  'clientTop',
  'clientLeft',
  'scrollWidth',
  'scrollHeight',
  'scrollTop',
  'scrollLeft',
  'getBoundingClientRect',
  'getClientRects',
  'computedStyle',
  'getComputedStyle',
];
const domWrites = [
  '.style.',
  '.classList.add',
  '.classList.remove',
  '.classList.toggle',
  '.appendChild',
  '.insertBefore',
  '.prepend',
  '.append',
  '.remove',
  '.innerHTML',
  '.textContent',
  '.setAttribute',
];

function findFiles(dir: string, extensions: string[]): string[] {
  const files: string[] = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...findFiles(fullPath, extensions));
    else if (extensions.some((extension) => entry.name.endsWith(extension))) files.push(fullPath);
  }
  return files;
}

function relativePath(file: string): string {
  return relative(process.cwd(), file).replace(/\\/g, '/');
}

function findFormControls(content: string, tagName: 'input' | 'select'): RegExpMatchArray[] {
  return Array.from(content.matchAll(new RegExp(`<${tagName}\\b[^>]*>`, 'gi')));
}

function attrValue(tag: string, attr: string): string | null {
  const match = tag.match(new RegExp(`\\b${attr}\\s*=\\s*(?:"([^"]+)"|'([^']+)'|\\{([^}]+)\\})`, 'i'));
  return match?.[1] ?? match?.[2] ?? match?.[3] ?? null;
}

function booleanAttr(tag: string, attr: string): boolean {
  return new RegExp(`\\b${attr}\\b`, 'i').test(tag);
}

function controlStartIndex(content: string, tag: RegExpMatchArray): number {
  return tag.index ?? content.indexOf(tag[0]);
}

function hasWrappingLabel(content: string, tag: RegExpMatchArray): boolean {
  const index = controlStartIndex(content, tag);
  const before = content.slice(0, index);
  const labelOpen = before.lastIndexOf('<label');
  const labelClose = before.lastIndexOf('</label>');
  const nextLabelClose = content.indexOf('</label>', index + tag[0].length);
  return labelOpen > labelClose && nextLabelClose !== -1;
}

function hasAccessibleName(content: string, tag: RegExpMatchArray): boolean {
  const source = tag[0];
  if (attrValue(source, 'aria-label')) return true;
  if (attrValue(source, 'aria-labelledby')) return true;
  const id = attrValue(source, 'id');
  if (id && hasExplicitLabel(content, id)) return true;
  return hasWrappingLabel(content, tag);
}

function isVisuallyHiddenFileInput(tag: string): boolean {
  const type = attrValue(tag, 'type')?.toLowerCase() ?? 'text';
  const attributes = `${attrValue(tag, 'style') ?? ''} ${attrValue(tag, 'class') ?? ''}`.toLowerCase();
  const hiddenPatterns = ['display:none', 'display: none', 'file-input'];
  return type === 'file' && hiddenPatterns.some((pattern) => attributes.includes(pattern));
}

function isIgnoredInput(tag: string): boolean {
  const type = attrValue(tag, 'type')?.toLowerCase() ?? 'text';
  return ['hidden', 'button', 'submit', 'reset'].includes(type) || booleanAttr(tag, 'aria-hidden') || isVisuallyHiddenFileInput(tag);
}

function controlFailures(content: string, tagName: 'input' | 'select'): string[] {
  return findFormControls(content, tagName)
    .filter((tag) => tagName !== 'input' || !isIgnoredInput(tag[0]))
    .filter((tag) => !hasAccessibleName(content, tag))
    .map((tag) => tag[0]);
}

function explicitLabelMessage(tagName: string, path: string, failures: string[]): string {
  return `${tagName} controls without label, wrapping label, aria-label or aria-labelledby in ${path}:\n${failures.join('\n')}`;
}

function hasExplicitLabel(content: string, id: string): boolean {
  const escapedId = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return (
    new RegExp(`<label\\b[^>]*\\bfor\\s*=\\s*["']${escapedId}["'][^>]*>`, 'i').test(content)
    || new RegExp(`<label\\b[^>]*\\bfor\\s*=\\s*\\{${escapedId}\\}[^>]*>`, 'i').test(content)
  );
}

function headingLevels(sections: SEOSection[]): number[] {
  return sections
    .filter((section) => section.type === 'title')
    .map((section) => Number('level' in section ? section.level : 0))
    .filter((level) => Number.isInteger(level) && level > 0);
}

function findHeadingLevelJumps(levels: number[]): string[] {
  const failures: string[] = [];
  levels.forEach((level, index) => {
    const previous = index === 0 ? 1 : levels[index - 1];
    if (previous && level > previous + 1) {
      failures.push(`h${previous} -> h${level}`);
    }
  });
  return failures;
}

function hasDomWriteBeforeGeometryRead(content: string): boolean {
  const normalized = content.replace(/\s+/g, ' ');
  return domWrites.some((write) => {
    const writeIndex = normalized.indexOf(write);
    if (writeIndex === -1) return false;
    return geometryReads.some((read) => normalized.indexOf(read, writeIndex + write.length) !== -1);
  });
}

describe('PageSpeed best-practice guards', () => {
  const astroToolFiles = findFiles(toolDir, ['.astro']);
  const scriptFiles = findFiles(toolDir, ['.astro', '.ts', '.js']);

  astroToolFiles.forEach((file) => {
    const displayPath = relativePath(file);

    it(`${displayPath} labels every input with an explicit label`, () => {
      const content = readFileSync(file, 'utf-8');
      const failures = controlFailures(content, 'input');

      expect(failures, explicitLabelMessage('Input', displayPath, failures)).toEqual([]);
    });

    it(`${displayPath} labels every select with an explicit label`, () => {
      const content = readFileSync(file, 'utf-8');
      const failures = controlFailures(content, 'select');

      expect(failures, explicitLabelMessage('Select', displayPath, failures)).toEqual([]);
    });
  });

  ALL_TOOLS.forEach((tool) => {
    Object.entries(tool.entry.i18n).forEach(([locale, loader]) => {
      it(`${tool.entry.id}/${locale} keeps SEO headings sequential`, async () => {
        if (!loader) return;
        const content = (await loader()) as ToolLocaleContent;
        const levels = headingLevels(content.seo);
        const failures = findHeadingLevelJumps(levels);

        expect(
          failures,
          `SEO headings in ${tool.entry.id}/${locale} skip levels: ${failures.join(', ')}`,
        ).toEqual([]);
      });
    });
  });

  scriptFiles.forEach((file) => {
    const displayPath = relativePath(file);

    it(`${displayPath} avoids static forced-reflow patterns`, () => {
      const content = readFileSync(file, 'utf-8');
      expect(
        hasDomWriteBeforeGeometryRead(content),
        `${displayPath} appears to read layout geometry after DOM/style mutations. Split writes and reads across frames or measure before mutating.`,
      ).toBe(false);
    });
  });
});
