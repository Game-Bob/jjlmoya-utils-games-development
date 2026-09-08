import { existsSync, readdirSync, statSync } from 'node:fs';
import { basename, join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { ALL_TOOLS } from '../tools';
import { CATEGORY_OG_IMAGE, getUtilityOgImage } from '../mfe/assets';

const categoryImageMatch = CATEGORY_OG_IMAGE.match(
  /^(\/_utilities\/[^/]+\/images)\/([^/]+\.webp)\?version=(.+)$/,
);

if (!categoryImageMatch) {
  throw new Error(`Unexpected CATEGORY_OG_IMAGE format: ${CATEGORY_OG_IMAGE}`);
}

const [, imageUrlRoot, categoryImage, assetVersion] = categoryImageMatch;
const assetRoot = join(process.cwd(), 'public', imageUrlRoot.slice(1));
const categorySlug = basename(categoryImage, '.webp');

describe('MFE asset contract', () => {
  it('has one non-empty English-slug OG image per category and registered tool', async () => {
    const expectedSlugs = new Set([categorySlug]);

    for (const { entry } of ALL_TOOLS) {
      const englishLoader = entry.i18n.en;
      if (!englishLoader) throw new Error(`Missing English locale for ${entry.id}`);

      const englishContent = await englishLoader();
      expectedSlugs.add(englishContent.slug);
    }

    const actualSlugs = new Set(
      readdirSync(assetRoot)
        .filter((filename) => filename.endsWith('.webp'))
        .map((filename) => filename.slice(0, -'.webp'.length)),
    );

    expect(actualSlugs).toEqual(expectedSlugs);

    for (const slug of expectedSlugs) {
      const imagePath = join(assetRoot, `${slug}.webp`);
      expect(existsSync(imagePath), `${imagePath} should exist`).toBe(true);
      expect(statSync(imagePath).size, `${imagePath} should not be empty`).toBeGreaterThan(0);
      expect(getUtilityOgImage(slug)).toBe(
        `${imageUrlRoot}/${slug}.webp?version=${assetVersion}`,
      );
    }
  }, 30000);
});
