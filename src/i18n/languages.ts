import { UTILITY_LOCALES, type UtilityLocale } from "@jjlmoya/utils-shared/routing";

export const LANGUAGES = [
    ["es", "Español", "es-ES"],
    ["en", "English", "en-US"],
    ["fr", "Français", "fr-FR"],
    ["de", "Deutsch", "de-DE"],
    ["it", "Italiano", "it-IT"],
    ["pt", "Português", "pt-PT"],
    ["nl", "Nederlands", "nl-NL"],
    ["sv", "Svenska", "sv-SE"],
    ["pl", "Polski", "pl-PL"],
    ["id", "Bahasa Indonesia", "id-ID"],
    ["tr", "Türkçe", "tr-TR"],
    ["ru", "Русский", "ru-RU"],
    ["ja", "日本語", "ja-JP"],
    ["ko", "한국어", "ko-KR"],
    ["zh", "中文", "zh-CN"],
] as const satisfies readonly (readonly [UtilityLocale, string, string])[];

export type Language = UtilityLocale;
export const LANGUAGE_CODES = UTILITY_LOCALES;
export const LANGUAGE_NAMES = Object.fromEntries(LANGUAGES.map(([code, name]) => [code, name])) as Record<Language, string>;
export const LANGUAGE_LOCALES = Object.fromEntries(LANGUAGES.map(([code, , locale]) => [code, locale])) as Record<Language, string>;
