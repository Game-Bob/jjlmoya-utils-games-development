import type { SEOSection } from '../../../types';
import type { SteamCapsuleGeneratorLocaleContent, SteamCapsuleGeneratorUI } from '../entry';

interface LocalizedContentInput {
  slug: string;
  title: string;
  description: string;
  ui: SteamCapsuleGeneratorUI;
  seo: SEOSection[];
  faq: Array<{ question: string; answer: string }>;
  howTo: Array<{ name: string; text: string }>;
}

export function createSteamContent(input: LocalizedContentInput): SteamCapsuleGeneratorLocaleContent {
  return {
    ...input,
    bibliography: [
      { name: 'Steamworks Graphical Assets Overview', url: 'https://partner.steamgames.com/doc/store/assets' },
      { name: 'Steamworks Store Graphical Assets', url: 'https://partner.steamgames.com/doc/store/assets/standard' },
      { name: 'Steamworks Graphical Asset Rules', url: 'https://partner.steamgames.com/doc/store/assets/rules' },
    ],
    schemas: [
      {
        '@context': 'https://schema.org' as const,
        '@type': 'FAQPage' as const,
        mainEntity: input.faq.map((item) => ({ '@type': 'Question' as const, name: item.question, acceptedAnswer: { '@type': 'Answer' as const, text: item.answer } })),
      },
      {
        '@context': 'https://schema.org' as const,
        '@type': 'HowTo' as const,
        name: input.title,
        description: input.description,
        step: input.howTo.map((item) => ({ '@type': 'HowToStep' as const, name: item.name, text: item.text })),
      },
      {
        '@context': 'https://schema.org' as const,
        '@type': 'SoftwareApplication' as const,
        name: input.title,
        description: input.description,
        applicationCategory: 'MultimediaApplication' as const,
        operatingSystem: 'Web' as const,
        offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'EUR' },
      },
    ],
  };
}
