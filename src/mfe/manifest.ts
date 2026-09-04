import { getUtilityOgImage } from "./assets";

export interface UtilityManifestInput {
    title: string;
    description: string;
    startUrl: string;
    englishSlug: string;
}

const buildUtilityManifest = ({
    title,
    description,
    startUrl,
    englishSlug,
}: UtilityManifestInput) => {
    const shortName = title.length > 12
        ? title.split(/\s+/).map((word) => word[0]).join("")
        : title;
    const manifest = {
        name: title,
        short_name: shortName,
        description,
        start_url: startUrl,
        scope: startUrl,
        icons: [{
            src: getUtilityOgImage(englishSlug),
            sizes: "512x512",
            type: "image/webp",
            purpose: "any",
        }],
        theme_color: "#0f172a",
        background_color: "#0f172a",
        display: "standalone",
        orientation: "portrait",
    };

    return manifest;
};

export const createUtilityManifestResponse = (input: UtilityManifestInput): Response => new Response(JSON.stringify(buildUtilityManifest(input), null, 2), {
        headers: {
            "Content-Type": "application/manifest+json",
            "Cache-Control": "public, max-age=31536000, immutable",
        },
    });
