import type { ToolLocaleContent } from '../../../types';
import type { SaveFileEditorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<SaveFileEditorUI> = {
  slug: 'editeur-fichier-sauvegarde-jeu',
  title: 'Éditeur et Obfuscateur de Sauvegarde de Jeu',
  description: 'Décryptez, inspectez, modifiez les payloads JSON et ré-encryptez les sauvegardes de jeu en utilisant Base64, masques XOR ou texte brut 100% localement dans votre navigateur.',
  ui: {
    title: 'Éditeur et Obfuscateur de Sauvegarde de Jeu',
    subtitle: 'Inspectez, modifiez et chiffrez les fichiers de sauvegarde locaux en toute sécurité sans fuites de serveur',
    dropSaveFile: 'Glissez-déposez le fichier de sauvegarde ici',
    orSelectFile: 'ou cliquez pour parcourir un fichier local',
    encryptionMethod: 'Format de Chiffrement',
    methodBase64: 'Encodage Base64',
    methodXor: 'Masque XOR + Base64',
    methodRaw: 'JSON Brut / Non Chiffré',
    xorKeyLabel: 'Clé Secrète XOR',
    xorKeyPlaceholder: 'ex. MaCléSecrète2026',
    jsonRawTitle: 'Payload JSON Décodé (Éditeur en Direct)',
    encodeAndDownload: 'Chiffrer et Télécharger le Fichier',
    copyEncoded: 'Copier le Texte Chiffré',
    copiedNotice: 'Copié dans le Presse-papier !',
    decodedKeysCount: 'Paramètres Totaux',
    dataSize: 'Taille du Payload',
    detectedFormat: 'Format Détecté',
    exportPreviewLabel: 'Aperçu de la Sortie Chiffrée',
    decodePanelTitle: 'Décodage et Éditeur JSON en Direct',
    exportPanelTitle: 'Payload de Sortie Ré Encrypté',
    decodeError: 'Échec du décodage du fichier de sauvegarde',
    bytesUnit: 'Octets',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Sécurité et Protocoles d Obfuscation des Sauvegardes de Jeu',
    },
    {
      type: 'paragraph',
      html: 'Les jeux vidéo sérialisent l état de progression des joueurs dans des formats de stockage persistant afin de conserver l inventaire, les niveaux débloqués et les attributs du personnage au fil des sessions. Pour éviter toute altération directe dans des éditeurs de texte par les utilisateurs, les studios obfusquent les sauvegardes avec des schémas d encodage binaire comme Base64 ou des masques XOR bit à bit associées à une clé secrète. Lors des tests d assurance qualité QA et du débogage d opérations en direct, les équipes de développement ont besoin d un accès immédiat pour inspecter les structures JSON brutes, forcer des états limites et ré-encoder les données modifiées sans recompiler les exécutables.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Confidentialité Traitement', value: '100% Local' },
        { label: 'Décodeurs Supportés', value: 'Base64 / XOR / JSON' },
        { label: 'Latence de Décodage', value: '0 ms' },
        { label: 'Risque de Fuite', value: 'Zéro' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Comparaison des Schémas d Obfuscation',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Encodage Base64',
          description: 'Conversion rapide empêchant les modifications basiques au bloc-notes sans offrir de sécurité cryptographique réelle.',
        },
        {
          title: 'Masquage XOR + Base64',
          description: 'Pratique courante dans le développement indie. Mélange les octets avec une clé secrète contre les éditeurs de mémoire.',
        },
        {
          title: 'Payload JSON Brut',
          description: 'Sauvegarde lisible non chiffrée. Idéal pour le prototypage initial et les builds de débogage internes.',
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Pratiques de Tests QA pour la Vérification d État',
    },
    {
      type: 'tip',
      title: 'Bonnes Pratiques de Sécurité des Sauvegardes en QA',
      html: 'Conservez toujours des clés de débogage séparées pour les builds internes. Utilisez des inspecteurs locaux pour forcer les limites d inventaire sans recompiler le code du jeu.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Guide des Paramètres d État du Jeu',
    },
    {
      type: 'table',
      headers: ['Type de Données', 'Format Recommandé', 'Cas d Usage', 'Couche d Obfuscation'],
      rows: [
        ['Entiers Numériques', 'Entier 32 bits', 'Pièces, Niveau, XP, Munitions', 'Masqué XOR'],
        ['Drapeaux Booléens', 'Booléen Standard', 'Tutoriel Terminé, Boss Vaincu', 'Base64 / XOR'],
        ['Objets Imbriqués', 'Hiérarchie JSON', 'Inventaire, Compétences', 'Encodé Base64'],
        ['Horodatages', 'ISO 8601 UTC', 'Récompense Quotidienne', 'Masqué XOR'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Considérations d Ingestion Inverse et Anti Altération',
    },
    {
      type: 'paragraph',
      html: 'Bien que l obfuscation côté client empêche les modifications occasionnelles, XOR et Base64 ne sont pas de vrais algorithmes cryptographiques. Des outils d analyse de mémoire comme RenderDoc ou x64dbg peuvent inspecter les routines de génération de clés dans les assemblages compilés. Pour les titres compétitifs, la validation serveur ou les signatures HMAC sont indispensables pour détecter toute altération.',
    },
  ],
  faqTitle: 'Foire Aux Questions',
  faq: [
    {
      question: 'Mes fichiers de sauvegarde sont-ils envoyés à un serveur ?',
      answer: 'Non. Tout le traitement se déroule à 100% localement dans votre navigateur web.',
    },
    {
      question: 'Comment fonctionne l obfuscation XOR dans Unity ou Godot ?',
      answer: 'L obfuscation XOR applique une opération bit à bit sur les octets UTF-8 de la chaîne JSON contre une clé secrète.',
    },
  ],
  howTo: [
    {
      name: 'Charger un Fichier',
      text: 'Téléversez votre fichier de sauvegarde chiffré.',
    },
    {
      name: 'Sélectionner la Clé',
      text: 'Sélectionnez Base64 ou XOR et entrez la clé secrète.',
    },
    {
      name: 'Éditer le JSON',
      text: 'Modifiez les valeurs directement dans l éditeur en direct.',
    },
    {
      name: 'Exporter et Télécharger',
      text: 'Téléchargez le nouveau fichier pour vos tests.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Éditeur de Sauvegarde de Jeu',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'EUR',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Mes fichiers de sauvegarde sont-ils envoyés à un serveur ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Non. Tout le traitement se déroule à 100% localement.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Comment Éditer des Sauvegardes de Jeu',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Charger un Fichier',
          text: 'Téléversez votre fichier de sauvegarde.',
        },
      ],
    },
  ],
  bibliographyTitle: 'Références et Lectures Complémentaires',
  bibliography: bibliographyEntries,
};
