import { describe, expect, it } from 'vitest';
import { readdirSync, readFileSync } from 'node:fs';
import { join, relative } from 'node:path';

type Color = { r: number; g: number; b: number; a: number };
type Declaration = { name: string; value: string };
type CssRule = { selector: string; declarations: Declaration[]; line: number };
type Theme = 'light' | 'dark';
type Variables = Record<string, string>;

const toolRoot = join(process.cwd(), 'src', 'tool');
const minimumTextContrast = 4.5;
const minimumReviewFontSizeRem = 0.75;
const themes: Theme[] = ['light', 'dark'];

function findFiles(directory: string, extensions: string[]): string[] {
  const files: string[] = [];

  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...findFiles(path, extensions));
    else if (extensions.some((extension) => entry.name.endsWith(extension))) files.push(path);
  }

  return files;
}

function relativePath(path: string): string {
  return relative(process.cwd(), path).replace(/\\/g, '/');
}

function lineAt(source: string, index: number): number {
  return source.slice(0, index).split('\n').length;
}

function removeComments(source: string): string {
  return source.replace(/\/\*[\s\S]*?\*\//g, (comment) => comment.replace(/[^\n]/g, ' '));
}

function cssSources(path: string): string[] {
  const source = readFileSync(path, 'utf8');
  if (path.endsWith('.css')) return [source];

  return Array.from(source.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/gi), (match) => match[1])
    .filter((style): style is string => style !== undefined);
}

function parseDeclarations(body: string): Declaration[] {
  return body
    .split(';')
    .map((declaration) => {
      const separator = declaration.indexOf(':');
      if (separator === -1) return null;
      return {
        name: declaration.slice(0, separator).trim().toLowerCase(),
        value: declaration.slice(separator + 1).trim(),
      };
    })
    .filter((declaration): declaration is Declaration => declaration !== null && declaration.name.length > 0);
}

function parseRules(source: string): CssRule[] {
  const css = removeComments(source);
  const rules: CssRule[] = [];
  const rulePattern = /([^{}]+)\{([^{}]*)\}/g;

  for (const match of css.matchAll(rulePattern)) {
    const selector = match[1]?.trim();
    const body = match[2];
    if (selector && body !== undefined) {
      const declarations = parseDeclarations(body);
      if (declarations.length > 0) {
      rules.push({ selector, declarations, line: lineAt(css, match.index ?? 0) });
      }
    }
  }

  return rules;
}

function channel(value: string): number | null {
  const trimmed = value.trim();
  if (trimmed.endsWith('%')) {
    const percentage = Number.parseFloat(trimmed);
    return Number.isFinite(percentage) ? (percentage / 100) * 255 : null;
  }

  const number = Number.parseFloat(trimmed);
  return Number.isFinite(number) ? number : null;
}

function expandHex(hex: string): string {
  return hex.length <= 4 ? hex.split('').map((part) => part + part).join('') : hex;
}

function hexValues(expanded: string): number[] | null {
  const values = expanded.match(/[\da-f]{2}/gi)?.map((part) => Number.parseInt(part, 16));
  if (!values || values.length < 3) return null;
  return values;
}

function parseHexColor(value: string): Color | null {
  const hex = value.match(/^#([\da-f]{3,8})$/i)?.[1];
  if (!hex) return null;
  const expanded = expandHex(hex);
  if (![6, 8].includes(expanded.length)) return null;
  const values = hexValues(expanded);
  if (!values) return null;
  const [r, g, b, alpha] = values;
  return { r: r!, g: g!, b: b!, a: alpha === undefined ? 1 : alpha / 255 };
}

function rgbChannels(parts: string[]): [number, number, number] | null {
  const [r, g, b] = parts.slice(0, 3).map(channel);
  if ([r, g, b].some((value) => value === null || value === undefined)) return null;
  return [r!, g!, b!];
}

function alphaValue(value: string | undefined): number | null {
  if (value === undefined) return 1;
  const alpha = Number.parseFloat(value);
  return Number.isFinite(alpha) ? alpha : null;
}

function parseRgbParts(rgb: string): Color | null {
  const parts = rgb.replace('/', ',').split(',').map((part) => part.trim());
  if (parts.length < 3) return null;
  const channels = rgbChannels(parts);
  const alpha = alphaValue(parts[3]);
  if (!channels || alpha === null) return null;
  const [r, g, b] = channels;
  return { r, g, b, a: alpha };
}

function parseRgbColor(value: string): Color | null {
  const rgb = value.match(/^rgba?\(([^)]+)\)$/)?.[1];
  return rgb ? parseRgbParts(rgb) : null;
}

function parseColor(value: string): Color | null {
  const trimmed = value.trim().toLowerCase();
  const fallback = trimmed.match(/^var\([^,]+,\s*(.+)\)$/)?.[1];
  if (fallback) return parseColor(fallback);
  if (trimmed === 'white') return { r: 255, g: 255, b: 255, a: 1 };
  if (trimmed === 'black') return { r: 0, g: 0, b: 0, a: 1 };
  if (trimmed === 'transparent') return { r: 0, g: 0, b: 0, a: 0 };
  return parseHexColor(trimmed) ?? parseRgbColor(trimmed);
}

function composite(foreground: Color, background: Color): Color | null {
  if (background.a < 1) return null;
  if (foreground.a >= 1) return foreground;
  const alpha = foreground.a;
  return {
    r: foreground.r * alpha + background.r * (1 - alpha),
    g: foreground.g * alpha + background.g * (1 - alpha),
    b: foreground.b * alpha + background.b * (1 - alpha),
    a: 1,
  };
}

function relativeLuminance(color: Color): number {
  const linear = [color.r, color.g, color.b].map((value) => {
    const channelValue = value / 255;
    return channelValue <= 0.03928
      ? channelValue / 12.92
      : ((channelValue + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * linear[0]! + 0.7152 * linear[1]! + 0.0722 * linear[2]!;
}

function contrastRatio(foreground: Color, background: Color): number | null {
  const compositedForeground = composite(foreground, background);
  if (!compositedForeground) return null;
  const foregroundLuminance = relativeLuminance(compositedForeground);
  const backgroundLuminance = relativeLuminance(background);
  return (Math.max(foregroundLuminance, backgroundLuminance) + 0.05)
    / (Math.min(foregroundLuminance, backgroundLuminance) + 0.05);
}

function lastDeclaration(declarations: Declaration[], names: string[]): Declaration | undefined {
  return [...declarations].reverse().find((declaration) => names.includes(declaration.name));
}

function simpleBackground(value: string): Color | null {
  if (value.includes('gradient') || value.includes('url(') || value.includes('color-mix(')) return null;
  return parseColor(value);
}

function isThemeSelector(selector: string, theme: Theme): boolean {
  return selector.includes(`.theme-${theme}`);
}

function isActiveRule(selector: string, theme: Theme): boolean {
  const otherTheme: Theme = theme === 'dark' ? 'light' : 'dark';
  return !isThemeSelector(selector, otherTheme);
}

function addVariables(target: Variables, rule: CssRule): void {
  rule.declarations
    .filter((declaration) => declaration.name.startsWith('--'))
    .forEach((declaration) => { target[declaration.name] = declaration.value; });
}

function collectVariables(rules: CssRule[], theme: Theme): Variables {
  const variables: Variables = {};
  rules.filter((rule) => !isThemeSelector(rule.selector, 'dark') && !isThemeSelector(rule.selector, 'light'))
    .forEach((rule) => addVariables(variables, rule));
  rules.filter((rule) => isThemeSelector(rule.selector, theme))
    .forEach((rule) => addVariables(variables, rule));
  return variables;
}

function resolveCssValue(value: string, variables: Variables): string {
  let resolved = value;
  for (let attempt = 0; attempt < 10; attempt += 1) {
    const next = resolved.replace(/var\(\s*(--[\w-]+)(?:\s*,\s*([^()]+))?\s*\)/g, (_, name, fallback) => variables[name] ?? fallback ?? '');
    if (next === resolved) return resolved;
    resolved = next;
  }
  return resolved;
}

function contrastFinding(path: string, rule: CssRule, theme: Theme, variables: Variables): string | null {
  const foreground = lastDeclaration(rule.declarations, ['color']);
  const background = lastDeclaration(rule.declarations, ['background-color', 'background']);
  const foregroundColor = foreground ? parseColor(resolveCssValue(foreground.value, variables)) : null;
  const backgroundColor = background ? simpleBackground(resolveCssValue(background.value, variables)) : null;
  const ratio = foregroundColor && backgroundColor ? contrastRatio(foregroundColor, backgroundColor) : null;
  return ratio !== null && ratio < minimumTextContrast
    ? `[A11Y-06][${theme}] ${relativePath(path)}:${rule.line} ${rule.selector} — ${ratio.toFixed(2)}:1 `
      + `(mínimo ${minimumTextContrast}:1)`
    : null;
}

function fontSizeFinding(path: string, rule: CssRule): string | null {
  const rem = lastDeclaration(rule.declarations, ['font-size'])?.value.match(/^(-?(?:\d+\.?\d*|\.\d+))rem$/i)?.[1];
  if (!rem || Number.parseFloat(rem) >= minimumReviewFontSizeRem || /(svg|icon|logo|decorative|sr-only)/i.test(rule.selector)) {
    return null;
  }
  return `[A11Y-06] ${relativePath(path)}:${rule.line} ${rule.selector} — font-size ${rem}rem `
    + `(revisar por debajo de ${minimumReviewFontSizeRem}rem)`;
}

function inspectSource(path: string, source: string): { contrastFailures: string[]; fontSizeCandidates: string[] } {
  const rules = parseRules(source);
  const contrastFailures = themes.flatMap((theme) => {
    const variables = collectVariables(rules, theme);
    return rules
      .filter((rule) => isActiveRule(rule.selector, theme))
      .map((rule) => contrastFinding(path, rule, theme, variables))
      .filter((finding): finding is string => finding !== null);
  });
  const fontSizeCandidates = rules
    .map((rule) => fontSizeFinding(path, rule))
    .filter((finding): finding is string => finding !== null);
  return {
    contrastFailures,
    fontSizeCandidates,
  };
}

function inspectStyles(): { contrastFailures: string[]; fontSizeCandidates: string[] } {
  const findings = findFiles(toolRoot, ['.css', '.astro'])
    .flatMap((path) => cssSources(path).map((source) => inspectSource(path, source)));
  return {
    contrastFailures: findings.flatMap((finding) => finding.contrastFailures),
    fontSizeCandidates: findings.flatMap((finding) => finding.fontSizeCandidates),
  };
}

describe('QA: contraste y legibilidad de las tools', () => {
  it('calcula ratios WCAG conocidos correctamente', () => {
    expect(contrastRatio(parseColor('#000')!, parseColor('#fff')!)).toBeCloseTo(21, 5);
    expect(contrastRatio(parseColor('#777')!, parseColor('#fff')!)).toBeCloseTo(4.478, 2);
    expect(contrastRatio(parseColor('rgba(0, 0, 0, 0.5)')!, parseColor('#fff')!)).toBeCloseTo(3.98, 2);
  });

  it('no contiene pares de texto y fondo explícitos por debajo de 4.5:1', () => {
    const { contrastFailures } = inspectStyles();
    expect(contrastFailures, `Contrastes insuficientes:\n${contrastFailures.join('\n')}`).toEqual([]);
  });

  it('no usa texto por debajo de 0.75rem fuera de elementos decorativos', () => {
    const { fontSizeCandidates } = inspectStyles();
    expect(
      fontSizeCandidates,
      'Candidatos de legibilidad. El umbral es una política de revisión del repositorio, no una validación completa de WCAG.',
    ).toEqual([]);
  });
});
