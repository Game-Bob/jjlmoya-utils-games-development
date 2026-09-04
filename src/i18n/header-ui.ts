import type { HeaderLabels } from "@jjlmoya/identity/types";
import { LANGUAGE_CODES, type Language } from "./languages";

const DEFAULT_LABELS: HeaderLabels = {
    menu: "Menu",
    closeMenu: "Close menu",
    theme: "Theme",
    switchToLight: "Switch to light theme",
    switchToDark: "Switch to dark theme",
    switchToSystem: "Use system theme",
};

export const HEADER_UI = Object.fromEntries(
    LANGUAGE_CODES.map((language) => [language, DEFAULT_LABELS]),
) as Record<Language, HeaderLabels>;
