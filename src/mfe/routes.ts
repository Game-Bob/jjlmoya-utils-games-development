import {
    getCategoryNamespace,
    getCategoryPath as getSharedCategoryPath,
    getUtilitiesPath as getSharedUtilitiesPath,
    getUtilityNamespace,
    getUtilityPath as getSharedUtilityPath,
    type UtilityLocale,
} from "@jjlmoya/utils-shared/routing";

export type { UtilityLocale };
export { getCategoryNamespace, getUtilityNamespace };

export const INTERNAL_LOCALES = [
    "en", "fr", "de", "it", "pt", "nl", "sv", "pl", "id", "tr", "ru", "ja", "ko", "zh",
] as const satisfies readonly UtilityLocale[];

const getDevelopmentPath = (url: string): string => {
    if (!import.meta.env.DEV) return url;
    try {
        return new URL(url, "http://localhost:4324").pathname;
    } catch {
        return url;
    }
};

export const getUtilitiesPath = (locale: UtilityLocale): string =>
    getDevelopmentPath(getSharedUtilitiesPath(locale));

export const getCategoryPath = (locale: UtilityLocale, categorySlug: string): string =>
    getDevelopmentPath(getSharedCategoryPath(locale, categorySlug));

export const getUtilityPath = (
    locale: UtilityLocale,
    categorySlug: string,
    toolSlug: string,
): string => getDevelopmentPath(getSharedUtilityPath(locale, categorySlug, toolSlug));

export const getCategoryRoute = (locale: UtilityLocale, categorySlug: string): string =>
    getCategoryPath(locale, categorySlug);

export const getUtilityRoute = (locale: UtilityLocale, categorySlug: string, toolSlug: string): string =>
    getUtilityPath(locale, categorySlug, toolSlug);

export const getUtilityIndexRoute = (locale: UtilityLocale): string => getUtilitiesPath(locale);

export const getInternalCategoryRoute = (locale: Exclude<UtilityLocale, "es">, categorySlug: string): string =>
    getCategoryPath(locale, categorySlug);

export const getInternalUtilityRoute = (locale: Exclude<UtilityLocale, "es">, categorySlug: string, toolSlug: string): string =>
    getUtilityPath(locale, categorySlug, toolSlug);
