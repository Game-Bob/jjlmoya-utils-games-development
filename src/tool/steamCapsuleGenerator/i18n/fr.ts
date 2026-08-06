import type { ToolLocaleContent } from '../../../types';
import type { SteamCapsuleGeneratorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<SteamCapsuleGeneratorUI> = {
  slug: 'generateur-de-capsules-steam',
  title: 'Générateur et Prévisualisation de Capsules Steam',
  description: 'Radrer, prévisualiser et traiter les capsules officielles du magasin et de la bibliothèque Steam avec vérification des zones de sécurité.',
  ui: {
    uploadTitle: 'Téléverser une Illustration',
    uploadHint: 'Téléversez une illustration haute résolution (recommandé 3840x1240 px ou plus).',
    chooseFile: 'Choisir un Fichier',
    minimumSize: 'Taille minimale recommandée: 1920x1080 px',
    horizontalFocus: 'Ajustement Horizontal (X)',
    verticalFocus: 'Ajustement Vertical (Y)',
    zoomLevel: 'Niveau de Zoom',
    resetFocus: 'Réinitialiser le Point Focal',
    safeZone: 'Zone de Sécurité',
    downloadZip: 'Télécharger Tous les Fichiers (ZIP)',
    headerCapsule: 'Capsule En Tete (460x215 / HD 920x430)',
    smallCapsule: 'Petite Capsule (231x87 / HD 462x174)',
    mainCapsule: 'Capsule Principale (616x353 / HD 1232x706)',
    verticalCapsule: 'Capsule Verticale de Bibliothèque (300x450 / HD 600x900)',
    libraryHero: 'Bannière de Bibliothèque (1920x620 / HD 3840x1240)',
    communityIcon: 'Icône Application (32x32 / HD 184x184)',
    storePreviewTab: 'Magasin Steam',
    libraryPreviewTab: 'Bibliothèque Steam',
    allAssetsTab: 'Toutes les Tailles',
    toggleSafeZones: 'Guides de Sécurité',
    toggleSteamOverlay: 'Interface Steam'
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Spécifications des Capsules Graphiques Steam'
    },
    {
      type: 'paragraph',
      html: 'Les pages du magasin Steam et la bibliothèque nécessitent des images capsules standardisées pour afficher votre jeu sur divers écrans.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Résolution HD En Tete', value: '920 x 430 px' },
        { label: 'Ratio Capsule Verticale', value: '2:3 Vertical' },
        { label: 'Résolution Max Bannière', value: '3840 x 1240 px' },
        { label: 'Taille Icône Communauté', value: '184 x 184 px' }
      ]
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Capsules Magasin En Tete et Principale',
          description: 'Format paysage centré sur le titre et le visuel principal.',
          points: [
            'Format paysage centré sur le titre et le visuel principal',
            'Coin inférieur droit réservé aux badges de réduction et prix'
          ]
        },
        {
          title: 'Éléments de Bibliothèque Bannière et Verticale',
          description: 'La capsule verticale agit comme une pochette de jeu.',
          points: [
            'La capsule verticale agit comme une pochette de jeu'
          ]
        }
      ]
    },
    {
      type: 'table',
      headers: ['Type Element', 'Taille Standard (px)', 'Taille HD Cible (px)', 'Ratio d Aspect', 'Format'],
      rows: [
        ['Capsule En Tete', '460 x 215', '920 x 430', '2.14:1', 'JPG / PNG'],
        ['Petite Capsule', '231 x 87', '462 x 174', '2.65:1', 'JPG / PNG'],
        ['Capsule Principale', '616 x 353', '1232 x 706', '1.74:1', 'JPG / PNG'],
        ['Capsule Verticale', '300 x 450', '600 x 900', '2:3', 'JPG / PNG'],
        ['Bannière Bibliothèque', '1920 x 620', '3840 x 1240', '3.1:1', 'JPG / PNG'],
        ['Logo Bibliothèque', '1280 x 720', '1280 x 720', '16:9', 'PNG Transparent'],
        ['Icône Communauté', '32 x 32', '184 x 184', '1:1', 'PNG']
      ]
    },
    {
      type: 'tip',
      title: 'Optimisation des Zones de Sécurité',
      html: 'Gardez les éléments importants dans les deux tiers supérieurs gauches de l image.'
    },
    {
      type: 'proscons',
      title: 'Évaluation du Processus',
      items: [
        {
          pro: 'Génération instantanée de toutes les dimensions Steam',
          con: 'Les visuels complexes peuvent nécessiter des calques séparés'
        }
      ]
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Capsule',
          definition: 'Terme utilisé par Valve pour désigner les conteneurs d images.'
        }
      ]
    }
  ],
  faqTitle: 'Foire Aux Questions sur les Images Steam',
  faq: [
    {
      question: 'Quel format de fichier utiliser pour les capsules Steam ?',
      answer: 'Steam accepte les fichiers JPG ou PNG pour les capsules principales.'
    }
  ],
  howTo: [
    {
      name: 'Téléverser l Illustration',
      text: 'Sélectionnez une image haute résolution.'
    }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Générateur et Prévisualisation de Capsules Steam',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'EUR'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Quel format de fichier utiliser pour les capsules Steam ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Steam accepte les fichiers JPG ou PNG.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Comment générer des capsules Steam',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Téléverser l Illustration',
          text: 'Sélectionnez une image haute résolution.'
        }
      ]
    }
  ],
  bibliography: bibliographyEntries
};
