import { LANGUAGE_CODES, type Language } from "./languages";

export const LANGUAGE_UI = Object.fromEntries(
    LANGUAGE_CODES.map((language) => [language, {
            change: "Change language",
            select: "Select language",
            close: "Close language selector",
        }]),
) as Record<Language, { change: string; select: string; close: string }>;
