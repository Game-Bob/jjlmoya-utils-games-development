import type { APIRoute } from "astro";
import { ALL_TOOLS, gamesCategory } from "../../../index";
import type { ToolLocaleContent } from "../../../types";
import { getUtilityPath } from "../../../mfe/routes";
import { createUtilityManifestResponse, type UtilityManifestInput } from "../../../mfe/manifest";

export async function getStaticPaths() {
    const category = await gamesCategory.i18n.es!();
    const paths = [];
    for (const { entry } of ALL_TOOLS) {
        const loader = entry.i18n.es ?? entry.i18n.en;
        if (!loader) continue;
        const content = await loader() as ToolLocaleContent;
        const englishContent = await (entry.i18n.en ?? loader)() as ToolLocaleContent;
        paths.push({
            params: { slug: content.slug },
            props: {
                title: content.title,
                description: content.description,
                startUrl: getUtilityPath("es", category.slug, content.slug),
                englishSlug: englishContent.slug,
            },
        });
    }
    return paths;
}

export const GET: APIRoute = ({ props }) => createUtilityManifestResponse(props as unknown as UtilityManifestInput);
