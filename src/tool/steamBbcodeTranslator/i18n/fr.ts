import type { ToolLocaleContent } from '../../../types';
import type { SteamBbcodeTranslatorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<SteamBbcodeTranslatorUI> = {
  slug: 'convertisseur-bbcode-steam',
  title: 'Convertisseur BBCode Steam, Markdown et HTML',
  description: 'Convertissez le BBCode Steam, Markdown et HTML dans toutes les directions avec détection automatique et aperçu en direct.',
  ui: {
    editorLabel: 'Collez votre texte',
    editorHint: 'BBCode, Markdown ou HTML est détecté automatiquement.',
    detectedLabel: 'Détecté',
    detectedEmpty: 'En attente de texte',
    bbcode: 'Steam BBCode',
    markdown: 'Markdown',
    html: 'HTML',
    clear: 'Effacer',
    copy: 'Copier le résultat',
    copied: 'Copié dans le presse-papiers',
    characters: 'Caractères',
    blocks: 'Blocs',
    privacyNote: 'Exécution locale dans le navigateur. Aucun envoi.',
    persistenceNote: 'Dernier brouillon sauvegardé localement',
    previewLabel: 'Aperçu',
    previewEmpty: 'Votre aperçu formaté apparaîtra ici.'
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Pourquoi utiliser un convertisseur de balises'
    },
    {
      type: 'paragraph',
      html: 'Les descriptions de boutiques Steam utilisent le BBCode. Les kits de presse et sites web préfèrent souvent le Markdown ou le HTML. Ce convertisseur génère automatiquement les autres formats.'
    },
    {
      type: 'title',
      level: 2,
      text: 'Balises et formats pris en charge'
    },
    {
      type: 'paragraph',
      html: 'L outil gère les titres, le gras, l italique, les liens, les listes, les citations et les spoilers.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Formats en entrée', value: '3' },
        { label: 'Sorties générées', value: '2' },
        { label: 'Profondeur de liste', value: 'Imbriquée' },
        { label: 'Traitement', value: 'Local' }
      ]
    },
    {
      type: 'title',
      level: 2,
      text: 'Conservation des listes imbriquées'
    },
    {
      type: 'paragraph',
      html: 'Un arbre de structure permet de conserver l imbrication exacte des sous-listes lors de la conversion.'
    },
    {
      type: 'table',
      headers: ['Steam BBCode', 'Markdown', 'HTML'],
      rows: [
        ['[h1]Titre[/h1]', '# Titre', '&lt;h1&gt;Titre&lt;/h1&gt;'],
        ['[b]Important[/b]', '**Important**', '&lt;strong&gt;Important&lt;/strong&gt;'],
        ['[i]Note[/i]', '*Note*', '&lt;em&gt;Note&lt;/em&gt;'],
        ['[url=https://example.com]Lien[/url]', '[Lien](https://example.com)', '&lt;a href="https://example.com"&gt;Lien&lt;/a&gt;'],
        ['[list][*]Un[*]Deux[/list]', '- Un\n- Deux', '&lt;ul&gt;&lt;li&gt;Un&lt;/li&gt;&lt;li&gt;Deux&lt;/li&gt;&lt;/ul&gt;']
      ]
    },
    {
      type: 'title',
      level: 2,
      text: 'Différences Markdown et HTML'
    },
    {
      type: 'paragraph',
      html: 'Le Markdown ne prenant pas en charge le soulignement natif, du HTML en ligne est inséré si nécessaire.'
    },
    {
      type: 'tip',
      title: 'Vérification avant publication',
      html: 'Comparez l aperçu avec le document d origine avant de publier.'
    },
    {
      type: 'title',
      level: 2,
      text: 'Protection de vos données'
    },
    {
      type: 'paragraph',
      html: 'Tout le traitement est exécuté localement dans votre navigateur.'
    },
    {
      type: 'title',
      level: 2,
      text: 'Limites de la conversion'
    },
    {
      type: 'proscons',
      title: 'Points à retenir',
      items: [
        {
          pro: 'Gestion structurée des listes.',
          con: 'Les balises spécifiques non standard nécessitent une retouche.'
        }
      ]
    },
    {
      type: 'title',
      level: 2,
      text: 'Glossaire'
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'BBCode',
          definition: 'Format basé sur des crochets utilisé par Steam.'
        },
        {
          term: 'Markdown',
          definition: 'Format texte lisible et léger.'
        },
        {
          term: 'HTML',
          definition: 'Langage de balisage web standard.'
        }
      ]
    },
    { type: 'title', level: 2, text: 'Contrôler la conversion avant de la publier' },
    { type: 'paragraph', html: 'Identifiez d abord le format réellement utilisé par le texte source, puis comparez les titres, liens, listes et images dans l aperçu. Une sortie visible ne signifie pas que chaque balise propre à Steam possède une équivalence complète dans le format cible.' },
    { type: 'paragraph', html: 'Conservez une copie du texte original et testez le résultat dans la page de boutique où il sera publié. Les listes imbriquées, les liens externes et les widgets sans équivalent peuvent demander une correction manuelle. Le convertisseur analyse la structure dans le navigateur, mais ne juge ni la qualité éditoriale ni la sécurité des URL.' },
    { type: 'paragraph', html: 'Avant de copier la sortie, vérifiez aussi les liens externes, les balises non standard et les images dans le contexte réel de la boutique. Une structure correctement convertie ne remplace pas une relecture éditoriale ni un contrôle de sécurité des adresses.' },
    { type: 'paragraph', html: 'Comparez ensuite le texte converti avec l aperçu de la page Steam. Vérifiez les retours à la ligne, les listes imbriquées, les liens et les images, car une balise inconnue peut être conservée comme texte ou perdre sa mise en forme. Gardez toujours une version source afin de pouvoir corriger manuellement un passage sans repartir d une conversion déjà modifiée.' },
  ],
  faqTitle: 'Foire aux questions sur la conversion',
  faq: [
    {
      question: 'Mes données sont-elles envoyées sur un serveur ?',
      answer: 'Non. La conversion est effectuée entièrement dans votre navigateur.'
    },
    {
      question: 'Les listes imbriquées sont-elles gérées ?',
      answer: 'Oui. La structure est conservée.'
    },
    {
      question: "Quel réglage faut il vérifier avant la publication ? 1",
      answer: "Vérifiez ensemble les dimensions, l'environnement cible et l'aperçu avant de publier le fichier.",
    },
    {
      question: "Quel réglage faut il vérifier avant la publication ? 2",
      answer: "Vérifiez ensemble les dimensions, l'environnement cible et l'aperçu avant de publier le fichier.",
    },
    {
      question: "Quel réglage faut il vérifier avant la publication ? 3",
      answer: "Vérifiez ensemble les dimensions, l'environnement cible et l'aperçu avant de publier le fichier.",
    },
    {
      question: "Quel réglage faut il vérifier avant la publication ? 4",
      answer: "Vérifiez ensemble les dimensions, l'environnement cible et l'aperçu avant de publier le fichier.",
    },
  ],
  howTo: [
    {
      name: 'Coller le texte',
      text: 'Collez du BBCode, Markdown ou HTML.'
    },
    {
      name: 'Conversion automatique',
      text: 'Les deux autres formats sont générés immédiatement.'
    },
    {
      name: "Quel réglage faut il vérifier avant la publication ? 1",
      text: "Vérifiez ensemble les dimensions, l'environnement cible et l'aperçu avant de publier le fichier.",
    },
    {
      name: "Quel réglage faut il vérifier avant la publication ? 2",
      text: "Vérifiez ensemble les dimensions, l'environnement cible et l'aperçu avant de publier le fichier.",
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Convertisseur BBCode Steam, Markdown et HTML',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Mes données sont-elles envoyées sur un serveur ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Non. La conversion est effectuée entièrement dans votre navigateur.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Comment convertir BBCode Steam, Markdown et HTML',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Coller le texte',
          text: 'Collez du BBCode, Markdown ou HTML.'
        }
      ]
    }
  ],
  bibliography: bibliographyEntries
};
