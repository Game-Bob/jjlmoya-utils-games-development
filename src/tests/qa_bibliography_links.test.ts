import { describe, expect, it } from 'vitest';
import { ALL_TOOLS } from '../tools';
import type { ToolLocaleContent } from '../types';

interface LinkFailure {
  tool: string;
  message: string;
}

function inspectEntry(tool: string, entry: { url: string }, seen: Set<string>): LinkFailure[] {
  let url: URL;
  try {
    url = new URL(entry.url);
  } catch {
    return [{ tool, message: `invalid URL: ${entry.url}` }];
  }

  const failures: LinkFailure[] = [];
  if (url.protocol !== 'https:') failures.push({ tool, message: `non-HTTPS URL: ${entry.url}` });
  if (url.pathname === '/' && !url.search && !url.hash) failures.push({ tool, message: `generic homepage, cite the exact document: ${entry.url}` });
  if (seen.has(url.href)) failures.push({ tool, message: `duplicate source URL: ${entry.url}` });
  seen.add(url.href);
  return failures;
}

async function inspectTool(tool: (typeof ALL_TOOLS)[number]): Promise<LinkFailure[]> {
  const loader = tool.entry.i18n.en;
  if (!loader) return [{ tool: tool.entry.id, message: 'English locale loader is missing' }];
  const content = await loader() as ToolLocaleContent;
  const seen = new Set<string>();
  return (content.bibliography ?? []).flatMap((entry) => inspectEntry(tool.entry.id, entry, seen));
}

describe('QA: bibliography links are specific and usable', () => {
  it('uses unique HTTPS links to exact source pages instead of generic homepages', async () => {
    const failures = (await Promise.all(ALL_TOOLS.map(inspectTool))).flat();

    const messages = failures.map(({ tool, message }) => `${tool}: ${message}`);
    expect(messages, `Bibliography hygiene failures:\n${messages.join('\n')}`).toEqual([]);
  });
});
