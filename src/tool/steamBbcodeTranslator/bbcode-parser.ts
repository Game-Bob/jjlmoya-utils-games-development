import type { Node, TagNode, TextNode } from './types';

const BB_TAG_PATTERN = /\[(\/)?([a-z][a-z0-9]*|\*)(?:=([^\]]*))?\]/gi;
const SUPPORTED_TAGS = new Set(['h1', 'h2', 'h3', 'b', 'strong', 'i', 'em', 'u', 's', 'strike', 'url', 'code', 'quote', 'spoiler', 'list', 'olist', '*']);

export function text(value: string): TextNode {
  return { kind: 'text', value };
}

export function tag(name: string, value: string | undefined, children: Node[] = []): TagNode {
  return { kind: 'tag', name, value, children };
}

interface ParseStackEntry {
  node: TagNode;
  parent: Node[];
}

interface ParseContext {
  stack: ParseStackEntry[];
  root: Node[];
  warnings: string[];
  append: (n: Node) => void;
}

function handleAsteriskTag(ctx: ParseContext, full: string): void {
  const inList = ctx.stack.some((entry) => entry.node.name === 'list' || entry.node.name === 'olist');
  if (!inList) {
    ctx.warnings.push('A list item marker was found outside a list.');
    ctx.append(text(full));
    return;
  }
  while (ctx.stack.length) {
    const top = ctx.stack[ctx.stack.length - 1];
    if (top && top.node.name === '*') ctx.stack.pop();
    else break;
  }
  const listParent = ctx.stack[ctx.stack.length - 1];
  if (listParent && (listParent.node.name === 'list' || listParent.node.name === 'olist')) {
    const item = tag('*', undefined);
    listParent.node.children.push(item);
    ctx.stack.push({ node: item, parent: listParent.node.children });
  }
}

function handleClosingTag(ctx: ParseContext, name: string, full: string): void {
  const matchingIndex = [...ctx.stack].reverse().findIndex((entry) => entry.node.name === name);
  if (matchingIndex === -1) {
    ctx.warnings.push(`Closing tag [/${name}] has no matching opening tag.`);
    ctx.append(text(full));
    return;
  }
  for (let i = 0; i <= matchingIndex; i += 1) ctx.stack.pop();
}

function handleOpeningTag(ctx: ParseContext, name: string, value?: string): void {
  const node = tag(name, value);
  ctx.append(node);
  if (name !== 'br') {
    const top = ctx.stack[ctx.stack.length - 1];
    ctx.stack.push({ node, parent: top ? top.node.children : ctx.root });
  }
}

function processMatch(ctx: ParseContext, match: RegExpExecArray, full: string, rawName: string): void {
  const closing = Boolean(match[1]);
  const name = rawName.toLowerCase();
  const value = match[3]?.trim();

  if (!SUPPORTED_TAGS.has(name)) {
    ctx.warnings.push(`Unsupported tag [${name}] was kept as text.`);
    ctx.append(text(full));
  } else if (name === '*') {
    handleAsteriskTag(ctx, full);
  } else if (closing) {
    handleClosingTag(ctx, name, full);
  } else {
    handleOpeningTag(ctx, name, value);
  }
}

export function parseBbcode(source: string): { nodes: Node[]; warnings: string[]; tagCount: number } {
  const root: Node[] = [];
  const stack: ParseStackEntry[] = [];
  let cursor = 0;
  let tagCount = 0;
  const warnings: string[] = [];

  const append = (nodeToAppend: Node) => {
    const top = stack[stack.length - 1];
    const target = top ? top.node.children : root;
    target.push(nodeToAppend);
  };
  const ctx: ParseContext = { stack, root, warnings, append };

  for (const match of source.matchAll(BB_TAG_PATTERN)) {
    const full = match[0];
    const index = match.index ?? 0;
    if (index > cursor) append(text(source.slice(cursor, index)));
    cursor = index + full.length;
    if (!match[2]) continue;
    tagCount += 1;
    processMatch(ctx, match, full, match[2]);
  }

  if (cursor < source.length) append(text(source.slice(cursor)));
  const top = stack[stack.length - 1];
  if (top) warnings.push(`Unclosed tag [${top.node.name}] was closed automatically.`);
  return { nodes: root, warnings: [...new Set(warnings)], tagCount };
}
