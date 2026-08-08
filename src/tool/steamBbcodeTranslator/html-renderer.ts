import type { Node, TagNode } from './types';

export function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => {
    if (character === '&') return '&amp;';
    if (character === '<') return '&lt;';
    if (character === '>') return '&gt;';
    if (character === '"') return '&quot;';
    return '&#39;';
  });
}

export function inlineHtml(nodes: Node[]): string {
  return nodes.map((node) => node.kind === 'text' ? escapeHtml(node.value) : renderHtmlNode(node, true)).join('');
}

export function renderHtmlList(node: TagNode, ordered: boolean): string {
  const items = node.children.filter((child): child is TagNode => child.kind === 'tag' && child.name === '*');
  const tagName = ordered ? 'ol' : 'ul';
  const listItems = items.map((item) => {
    const inner = item.children.map((child) => {
      if (child.kind === 'tag' && (child.name === 'list' || child.name === 'olist')) return renderHtmlNode(child);
      if (child.kind === 'text') return escapeHtml(child.value);
      return renderHtmlNode(child, true);
    }).join('');
    return `<li>${inner}</li>`;
  }).join('');
  return `<${tagName}>${listItems}</${tagName}>`;
}

function renderHtmlHeading(name: string, content: string): string | null {
  if (name === 'h1') return `<h1>${content.trim()}</h1>`;
  if (name === 'h2') return `<h2>${content.trim()}</h2>`;
  if (name === 'h3') return `<h3>${content.trim()}</h3>`;
  return null;
}

function renderHtmlInlineStyle(name: string, content: string): string | null {
  if (name === 'b' || name === 'strong') return `<strong>${content}</strong>`;
  if (name === 'i' || name === 'em') return `<em>${content}</em>`;
  if (name === 'u') return `<u>${content}</u>`;
  if (name === 's' || name === 'strike') return `<del>${content}</del>`;
  return null;
}

function renderHtmlUrlOrCode(name: string, content: string, value?: string, inline = false): string {
  if (name === 'url') return value ? `<a href="${escapeHtml(value)}">${content || escapeHtml(value)}</a>` : content;
  if (name === 'code') return inline ? `<code>${content}</code>` : `<pre><code>${content}</code></pre>`;
  return content;
}

function renderHtmlFormatNode(name: string, content: string, value?: string, inline = false): string {
  const heading = renderHtmlHeading(name, content);
  if (heading !== null) return heading;
  const inlineStyle = renderHtmlInlineStyle(name, content);
  if (inlineStyle !== null) return inlineStyle;
  return renderHtmlUrlOrCode(name, content, value, inline);
}

export function renderHtmlNode(node: TagNode, inline = false): string {
  const content = inlineHtml(node.children);
  if (node.name === 'quote') return `<blockquote>${content}</blockquote>`;
  if (node.name === 'spoiler') return `<details><summary>Spoiler</summary>${content}</details>`;
  if (node.name === 'list') return renderHtmlList(node, false);
  if (node.name === 'olist') return renderHtmlList(node, true);
  return renderHtmlFormatNode(node.name, content, node.value, inline);
}

export function renderHtml(nodes: Node[]): string {
  return nodes.map((node) => node.kind === 'text' ? escapeHtml(node.value) : renderHtmlNode(node)).join('').replace(/\n{2,}/g, '<br>');
}
