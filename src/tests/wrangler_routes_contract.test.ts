import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { ALL_TOOLS } from '../tools';

type WranglerConfig = {
  routes?: Array<{ pattern?: string; zone_name?: string }>;
};

const wranglerConfig = JSON.parse(
  readFileSync(join(process.cwd(), 'wrangler.jsonc'), 'utf8'),
) as WranglerConfig;

const productionRoutes = wranglerConfig.routes ?? [];

describe('Wrangler production route contract', () => {
  it('routes every registered Spanish utility page to this worker', async () => {
    const missingRoutes: string[] = [];

    for (const { entry } of ALL_TOOLS) {
      const spanishLoader = entry.i18n.es;
      if (!spanishLoader) {
        throw new Error(`Missing Spanish locale for ${entry.id}`);
      }

      const content = await spanishLoader();
      const expectedPath = `/utilidades/${content.slug}`;
      const hasRoute = productionRoutes.some(
        (route) =>
          route.zone_name === 'jjlmoya.es' &&
          route.pattern === `www.jjlmoya.es${expectedPath}*`,
      );

      if (!hasRoute) missingRoutes.push(`${entry.id}: ${expectedPath}`);
    }

    expect(missingRoutes).toEqual([]);
  });
});
