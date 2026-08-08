import type { Node, TagNode } from './types';

function escapeMarkdown(value: string): string {
  return value.replace(/([\\`*_{}[\]()#+!|>])/g, '\\$1');
}

function escapeMarkdownUrl(value: string): string {
  return value.replace(/[()\\ ]/g, (character) => `\\${character}`);
}

function cleanInline(value: string): string {
  return value.replace(/[ \t]+\n/g, '\n').replace(/\n[ \t]+/g, '\n');
}

function indent(value: string): string {
  return value.split('\n').map((line) => line ? `  ${line}` : line).join('\n');
}

export function inlineMarkdown(nodes: Node[]): string {
  return cleanInline(nodes.map((node) => {
    if (node.kind === 'text') return escapeMarkdown(node.value);
    return renderMarkdownNode(node, true);
  }).join(''));
}

export function renderMarkdownList(node: TagNode, ordered: boolean): string {
  const items = node.children.filter((child): child is TagNode => child.kind === 'tag' && child.name === '*');
  return items.map((item, index) => {
    const content = item.children.map((child) => {
      if (child.kind === 'tag' && (child.name === 'list' || child.name === 'olist')) {
        return `\n${indent(renderMarkdownList(child, child.name === 'olist'))}`;
      }
      if (child.kind === 'text') return escapeMarkdown(child.value);
      return renderMarkdownNode(child, true);
    }).join('').trim();
    return `${ordered ? `${index + 1}.` : '-'} ${content}`;
  }).join('\n');
}

function renderCodeNode(node: TagNode, inline: boolean): string {
  const inner = node.children.map((child) => child.kind === 'text' ? child.value : renderMarkdownNode(child, true)).join('');
  return inline ? `\`${inner}\`` : `\`\`\`\n${inner}\n\`\`\`\n\n`;
}

function renderQuoteNode(node: TagNode): string {
  return node.children.map((child) => inlineMarkdown([child])).join('').split('\n').map((line) => `> ${line}`).join('\n') + '\n\n';
}

function renderMarkdownBasicInline(name: string, content: string): string | null {
  if (name === 'b' || name === 'strong') return `**${content}**`;
  if (name === 'i' || name === 'em') return `*${content}*`;
  if (name === 'u') return `<u>${content}</u>`;
  if (name === 's' || name === 'strike') return `~~${content}~~`;
  return null;
}

function renderMarkdownInlineNode(name: string, content: string, value?: string): string {
  const basic = renderMarkdownBasicInline(name, content);
  if (basic !== null) return basic;
  if (name === 'url') return value ? `[${content || escapeMarkdown(value)}](${escapeMarkdownUrl(value)})` : content;
  return content;
}

function renderMarkdownHeadingOrBlock(name: string, content: string, node: TagNode, inline: boolean): string | null {
  if (name === 'h1') return `# ${content.trim()}\n\n`;
  if (name === 'h2') return `## ${content.trim()}\n\n`;
  if (name === 'h3') return `### ${content.trim()}\n\n`;
  if (name === 'code') return renderCodeNode(node, inline);
  if (name === 'quote') return renderQuoteNode(node);
  if (name === 'spoiler') return `<details><summary>Spoiler</summary>${content}</details>`;
  return null;
}

export function renderMarkdownNode(node: TagNode, inline = false): string {
  const content = inlineMarkdown(node.children);
  const headingOrBlock = renderMarkdownHeadingOrBlock(node.name, content, node, inline);
  if (headingOrBlock !== null) return headingOrBlock;
  if (node.name === 'list') return `${renderMarkdownList(node, false)}\n\n`;
  if (node.name === 'olist') return `${renderMarkdownList(node, true)}\n\n`;
  return renderMarkdownInlineNode(node.name, content, node.value);
}

export function renderMarkdown(nodes: Node[]): string {
  return nodes.map((node) => node.kind === 'text' ? escapeMarkdown(node.value) : renderMarkdownNode(node)).join('').replace(/\n{3,}/g, '\n\n').trim();
}
