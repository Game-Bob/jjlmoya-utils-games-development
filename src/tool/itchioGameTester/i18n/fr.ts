import type { ToolLocaleContent } from '../../../types';
import type { ItchioGameTesterUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<ItchioGameTesterUI> = {
  slug: 'testeur-jeux-web-itchio',
  title: 'Inspecteur de Jeux Web Itch.io et Optimiseur de Résolution en Direct',
  description: 'Téléchargez des fichiers HTML5 ou des archives ZIP pour tester les viewports en direct, corriger les scrollbars, inspecter les builds Godot et Unity WebGL, et générer les paramètres d\'intégration Itch.io.',
  ui: {
    dropzoneTitle: 'Déposez votre Build ou Archive ZIP ici',
    dropzoneHint: 'Déposez un fichier .ZIP, dossier exporté ou fichiers de build HTML5 dans cette zone pour les inspecter immédiatement.',
    chooseFiles: 'Sélectionner un Fichier ou Dossier',
    engineDetected: 'Moteur Détecté',
    compatibilityScore: 'Score de Compatibilité Itch.io',
    viewportWidth: 'Largeur du Viewport (px)',
    viewportHeight: 'Hauteur du Viewport (px)',
    aspectRatio: 'Rapport d\'Aspect',
    lockAspectRatio: 'Verrouiller le Rapport d\'Aspect',
    presets: 'Préréglages de Résolution Rapides',
    fitTest: 'Test de Mise en Page et Scrollbars en Direct',
    copySettings: 'Copier les Paramètres d\'Intégration Itch.io',
    copied: 'Copié dans le Presse-papiers',
    embedMode: 'Mode d\'Intégration',
    scrollbars: 'Activer les Scrollbars',
    noIssuesFound: 'Toutes les vérifications ont réussi. Le package est conforme à 100% aux standards Itch.io.',
    filesInspected: 'Fichiers Inspectés',
    resetViewport: 'Réinitialiser le Viewport',
    autoScaleToggle: 'Redimensionner Automatiquement le Viewport à la Largeur de l\'Écran',
    scaledNotice: 'Le viewport dépasse la largeur de l\'écran. Un zoom artificiel a été appliqué pour que le canvas complet soit visible. Désactivez le redimensionnement automatique pour voir la mise en page réelle.',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Directives de Formatage pour les Exports HTML5 sur Itch.io'
    },
    {
      type: 'paragraph',
      html: 'Publier des jeux HTML5 et WebGL sur Itch.io nécessite une configuration précise des dimensions du viewport, des structures d\'archives et des en-têtes de sécurité cross-origin.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Rapport d\'Aspect Web Standard', value: '16:9 Paysage' },
        { label: 'Résolution Classique Itch', value: '960 x 540 px' },
        { label: 'Fichier d\'Entrée Requis', value: 'index.html à la Racine' },
        { label: 'Exigence Godot 4', value: 'En-têtes COOP / COEP' }
      ]
    },
    {
      type: 'tip',
      html: 'Pour intégrer un jeu WebGL 1280x720 sur Itch.io, définissez les dimensions du viewport à exactement 1280x720 avec "Embed in page" activé.'
    }
  ],
  faq: [
    {
      question: 'Pourquoi mon jeu Godot 4 affiche-t-il un écran noir sur Itch.io?',
      answer: 'Les exports web Godot 4 utilisent le multi-threading WebAssembly qui nécessite le support SharedArrayBuffer. Activez "SharedArrayBuffer support" dans les options de frame de votre jeu Itch.io.'
    }
  ],
  howTo: [
    { name: 'Télécharger les Fichiers du Jeu ou ZIP', text: 'Déposez votre archive ZIP d\'export HTML5 ou sélectionnez votre répertoire de build contenant index.html.' },
    { name: 'Examiner le Rapport de Compatibilité', text: 'Vérifiez le rapport d\'audit automatique pour le placement de l\'index.html, les avertissements de casse et la détection du moteur.' },
    { name: 'Redimensionner le Viewport en Direct', text: 'Utilisez les curseurs de résolution et les préréglages de rapport d\'aspect pour tester l\'intégration iframe en direct.' },
    { name: 'Copier les Paramètres Itch.io', text: 'Cliquez sur Copier les Paramètres pour obtenir les valeurs exactes de largeur et de hauteur pour votre page de soumission Itch.io.' }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Inspecteur de Jeux Web Itch.io',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Pourquoi mon jeu Godot 4 affiche-t-il un écran noir sur Itch.io?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Les exports web Godot 4 utilisent le multi-threading WebAssembly qui nécessite le support SharedArrayBuffer. Activez "SharedArrayBuffer support" dans les options de frame de votre jeu Itch.io.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Comment auditer et tester le viewport de votre jeu sur Itch.io',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Télécharger les Fichiers du Jeu ou ZIP',
          text: 'Déposez votre archive ZIP d\'export HTML5 ou sélectionnez votre répertoire de build contenant index.html.'
        },
        {
          '@type': 'HowToStep',
          name: 'Redimensionner le Viewport en Direct',
          text: 'Utilisez les curseurs de résolution et les préréglages de rapport d\'aspect pour tester l\'intégration iframe en direct.'
        }
      ]
    }
  ],
  bibliography: bibliographyEntries
};
