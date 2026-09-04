import type { APIRoute } from "astro";
import { ALL_TOOLS, gamesCategory } from "../../../../../../index";
import type { CategoryLocaleContent, ToolLocaleContent } from "../../../../../../types";
import { LANGUAGE_CODES, type Language } from "../../../../../../i18n/languages";
import { getCategoryNamespace, getUtilityNamespace, getUtilityPath } from "../../../../../../mfe/routes";
import { createUtilityManifestResponse, type UtilityManifestInput } from "../../../../../../mfe/manifest";

const loadCategories = async () => Object.fromEntries(await Promise.all(LANGUAGE_CODES.map(async (language) => [
    language,
    await gamesCategory.i18n[language]!(),
]))) as Record<Language, CategoryLocaleContent>;

const loadContents = async (entry: (typeof ALL_TOOLS)[number]["entry"]) => Object.fromEntries(await Promise.all(LANGUAGE_CODES.map(async (language) => {
    const loader = entry.i18n[language] ?? entry.i18n.en;
    if (!loader) throw new Error(`Missing ${language} locale for ${entry.id}`);
    return [language, await loader()];
}))) as Record<Language, ToolLocaleContent>;

const createManifestPath = (locale: Exclude<Language, "es">, category: CategoryLocaleContent, content: ToolLocaleContent, englishContent: ToolLocaleContent) => ({
    params: {
        locale,
        utilities: getUtilityNamespace(locale),
        categories: getCategoryNamespace(locale),
        category: category.slug,
        slug: content.slug,
    },
    props: {
        title: content.title,
        description: content.description,
        startUrl: getUtilityPath(locale, category.slug, content.slug),
        englishSlug: englishContent.slug,
    },
});

export async function getStaticPaths() {
    const categories = await loadCategories();
    const paths = [];
    for (const { entry } of ALL_TOOLS) {
        const contents = await loadContents(entry);
        for (const locale of LANGUAGE_CODES.filter((candidate) => candidate !== "es")) {
            const content = contents[locale];
            const category = categories[locale];
            paths.push(createManifestPath(locale, category, content, contents.en));
        }
    }
    return paths;
}

export const GET: APIRoute = ({ props }) => createUtilityManifestResponse(props as unknown as UtilityManifestInput);
