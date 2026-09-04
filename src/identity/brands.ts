import type { Language } from "../i18n/languages";
import type { Identity } from "@jjlmoya/identity/types";

export type Brand = Identity;
export const getBrand = (language: Language): Brand => language === "es" ? "jjlmoya" : "gamebob";
