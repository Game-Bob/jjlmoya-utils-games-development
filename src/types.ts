import type { SEOSection } from '@jjlmoya/utils-shared';
import type { WithContext, Thing } from 'schema-dts';

export type { SEOSection };

export type KnownLocale =
  | 'ar' | 'da' | 'de' | 'en' | 'es' | 'fi'
  | 'fr' | 'it' | 'ja' | 'ko' | 'nb' | 'nl'
  | 'pl' | 'pt' | 'ru' | 'sv' | 'tr' | 'zh';

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

export interface ToolLocaleContent<TUI extends Record<string, string> = Record<string, string>> {
  slug: string;
  title: string;
  description: string;
  ui: TUI;
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

export interface SportsToolEntry<TUI extends Record<string, string> = Record<string, string>> {
  id: string;
  icons: {
    bg: string;
    fg: string;
  };
  i18n: LocaleMap<ToolLocaleContent<TUI>>;
}

export interface SportsCategoryEntry {
  icon: string;
  tools: SportsToolEntry[];
  i18n: LocaleMap<CategoryLocaleContent>;
}

export interface ToolDefinition {
  entry: SportsToolEntry<any>;
  Component: unknown;
  SEOComponent: unknown;
  BibliographyComponent: unknown;
}

