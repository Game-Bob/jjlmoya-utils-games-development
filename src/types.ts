import type { SEOSection } from '@jjlmoya/utils-shared';
import type { UtilityLocale } from '@jjlmoya/utils-shared/routing';
import type { WithContext, Thing } from 'schema-dts';

export type { SEOSection };

export type KnownLocale = UtilityLocale;

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BibliographyEntry {
  name: string;
  url: string;
}

export interface HowToStep {
  name: string;
  text: string;
}

export interface ToolLocaleContent<TUI extends object = Record<string, string>> {
  slug: string;
  title: string;
  description: string;
  ui: TUI;
  wordPool?: string[];
  seo: SEOSection[];
  faqTitle?: string;
  faq: FAQItem[];
  bibliographyTitle?: string;
  bibliography: BibliographyEntry[];
  howTo: HowToStep[];
  schemas: WithContext<Thing>[];
}

export interface CategoryLocaleContent {
  slug: string;
  title: string;
  description: string;
  seo: SEOSection[];
}

export type LocaleLoader<T> = () => Promise<T>;

export type LocaleMap<T> = Partial<Record<KnownLocale, LocaleLoader<T>>>;

export interface GamesToolEntry<TUI extends object = Record<string, string>> {
  id: string;
  icons: {
    bg: string;
    fg: string;
  };
  i18n: LocaleMap<ToolLocaleContent<TUI>>;
}

export interface GamesCategoryEntry {
  icon: string;
  tools: GamesToolEntry[];
  i18n: LocaleMap<CategoryLocaleContent>;
}

export interface ToolDefinition {
  entry: GamesToolEntry;
  Component: unknown;
  SEOComponent: unknown;
  BibliographyComponent: unknown;
}
