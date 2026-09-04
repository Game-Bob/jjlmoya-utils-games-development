interface UtilityMfeEnvironment {
    ASSETS: { fetch(request: Request): Promise<Response> };
}

export const LONG_LIVED_ASSET_CACHE = "public, max-age=31536000, immutable";

export const getCacheControl = (pathname: string): string | undefined => {
    if (pathname.endsWith("/manifest.json")) return LONG_LIVED_ASSET_CACHE;
    if (pathname.startsWith("/_utilities/")) {
        return LONG_LIVED_ASSET_CACHE;
    }
    return undefined;
};

export default {
    async fetch(request: Request, environment: UtilityMfeEnvironment): Promise<Response> {
        const response = await environment.ASSETS.fetch(request);
        const cacheControl = getCacheControl(new URL(request.url).pathname);
        if (!cacheControl) return response;

        const headers = new Headers(response.headers);
        headers.set("Cache-Control", cacheControl);
        return new Response(response.body, { status: response.status, headers });
    },
};
