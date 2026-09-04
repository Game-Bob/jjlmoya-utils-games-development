import { describe, expect, it } from "vitest";
import { createUtilityManifestResponse } from "../mfe/manifest";

describe("MFE utility manifest", () => {
    it("returns a versioned installable manifest for the current utility", async () => {
        const response = createUtilityManifestResponse({
            title: "Card draw odds calculator",
            description: "Calculate card draw probabilities.",
            startUrl: "/en/utilities/categories/games-development/card-draw-odds-calculator/",
            englishSlug: "card-draw-odds-calculator",
        });
        const manifest = await response.json() as {
            name: string;
            start_url: string;
            scope: string;
            icons: { src: string; sizes: string; type: string; purpose: string }[];
        };

        expect(response.headers.get("Content-Type")).toContain("application/manifest+json");
        expect(response.headers.get("Cache-Control")).toContain("immutable");
        expect(manifest.name).toBe("Card draw odds calculator");
        expect(manifest.start_url).toBe(manifest.scope);
        expect(manifest.icons[0]?.src).toContain("/_utilities/games-development/images/card-draw-odds-calculator.webp?version=");
        expect(manifest.icons[0]?.sizes).toBe("512x512");
        expect(manifest.icons[0]?.type).toBe("image/webp");
        expect(manifest.icons[0]?.purpose).toBe("any");
    });
});
