import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BasketScoreKeeperUI } from '../ui';

const slug = 'tableau-de-basket';
const title = 'Tableau de basket en ligne: Compteur de points gratuit';
const description =
  'Tableau de basket en ligne gratuit avec boutons +1, +2 et +3. Comptez les points pour le streetball, les matchs scolaires et les ligues locales. Sans inscription, sans téléchargement, fonctionne hors connexion.';

const faqData = [
  {
    question: 'Comment compter les points dans un match de basket ?',
    answer:
      'Le basket utilise trois valeurs de score: lancer franc (+1 point), panier (+2 points) et panier à trois points (+3 points). Appuyez sur le bouton correspondant à chaque fois qu\'une équipe marque. Le tableau totalise automatiquement les points. Pour corriger une erreur, utilisez le bouton moins à côté du score.',
  },
  {
    question: 'Quelle est la différence entre +1, +2 et +3 au basket ?',
    answer:
      '+1 correspond aux lancers francs accordés après une faute. +2 est pour un panier classique marqué à l\'intérieur de la ligne à trois points. +3 est pour les tirs effectués au-delà de la ligne à trois points. Avoir des boutons séparés pour chaque valeur permet de marquer plus vite et réduit les erreurs par rapport à un simple compteur.',
  },
  {
    question: 'Puis-je utiliser ce tableau pour un vrai match de basket ?',
    answer:
      'Oui. Le tableau est conçu pour de vrais matchs: streetball, matchs scolaires, ligues locales et entraînements. Il enregistre le score dans votre navigateur pour que vous puissiez recharger la page sans perdre l\'état du match.',
  },
  {
    question: 'Comment compter les points pour le streetball ou les matchs improvisés ?',
    answer:
      'Le streetball se joue généralement avec un score cible (comme 21 ou 16) avec des 1 et des 2 points (ou seulement des 1). Ce tableau fonctionne pour tous les formats. Utilisez +1 pour les paniers classiques, +2 pour les tirs derrière l\'arc. Fixez votre propre condition de victoire et servez-vous du bouton moins en cas d\'erreur.',
  },
  {
    question: 'Est-ce que ça fonctionne hors connexion sur mobile ?',
    answer:
      'Oui. Une fois la page chargée, le tableau fonctionne entièrement hors connexion. Parfait pour les terrains extérieurs, les gymnases sans WiFi ou partout où le signal est faible. Vous pouvez aussi passer en plein écran et l\'écran reste allumé pour ne pas se verrouiller pendant le match.',
  },
  {
    question: 'Comment suivre les fautes d\'équipe et le bonus ?',
    answer:
      'Ce tableau se concentre sur l\'affichage du score. Pour les fautes d\'équipe, vous pouvez utiliser les champs de nom d\'équipe pour noter manuellement les fautes (ex. renommer "DOMICILE" en "DOMICILE 3F"). Nous recommandons d\'utiliser cet outil avec un compteur de fautes séparé pour les matchs officiels.',
  },
  {
    question: 'Puis-je utiliser ce compteur de basket sur mon téléphone ?',
    answer:
      'Oui. L\'interface est conçue d\'abord pour le mobile. Les boutons +1, +2 et +3 sont grands et faciles à taper avec le pouce. Le mode plein écran masque les éléments du navigateur pour que le tableau occupe tout l\'écran, et le verrouillage d\'écran empêche votre téléphone de s\'éteindre.',
  },
];

const howToData = [
  {
    name: 'Nommer vos équipes',
    text: 'Appuyez sur DOMICILE ou EXTÉRIEUR pour saisir les noms des équipes. Les noms sont automatiquement enregistrés dans votre navigateur et persistent même après un rechargement de la page.',
  },
  {
    name: 'Marquer un lancer franc (+1)',
    text: 'Appuyez sur le bouton +1 quand un joueur réussit un lancer franc. Chaque lancer franc vaut un point et est généralement accordé après une faute.',
  },
  {
    name: 'Marquer un panier (+2)',
    text: 'Appuyez sur le bouton +2 pour un panier classique à l\'intérieur de la ligne à trois points. C\'est l\'action de score la plus courante au basket.',
  },
  {
    name: 'Marquer un panier à trois points (+3)',
    text: 'Appuyez sur le bouton +3 quand un joueur marque depuis au-delà de l\'arc à trois points. Un panier à trois points est mis en évidence par un bouton rouge et déclenche un effet de célébration supplémentaire.',
  },
  {
    name: 'Corriger une erreur de score',
    text: 'Si vous ajoutez des points par erreur, appuyez sur le bouton moins pour les retirer. Il ne descendra pas en dessous de zéro. Pas besoin de recommencer tout le match pour une petite erreur.',
  },
  {
    name: 'Échanger les côtés à la mi-temps',
    text: 'Utilisez le bouton d\'échange pour inverser les positions DOMICILE et EXTÉRIEUR à la mi-temps. Les scores et les noms d\'équipe sont échangés, vous ne perdez donc aucune donnée.',
  },
  {
    name: 'Commencer un nouveau match',
    text: 'Appuyez sur le bouton de réinitialisation et confirmez pour effacer tous les scores et démarrer un nouveau match. Les noms d\'équipe sont conservés pour ne pas avoir à les ressaisir.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'SportsApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'fr',
};

export const content: ToolLocaleContent<BasketScoreKeeperUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Tableau de basket en ligne gratuit: Sans inscription, sans téléchargement',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Compter les points au basket devrait être simple. Un lancer franc, c\'est +1. Un panier, c\'est +2. Un panier à trois points, c\'est +3. Ce tableau vous offre un bouton dédié pour chaque valeur, pour que vous puissiez taper et continuer à jouer. Pas de menus, pas de modes, pas de configuration. Donnez simplement un nom à vos équipes et commencez à compter. Le score est automatiquement enregistré dans votre navigateur, vous pouvez donc recharger la page, fermer votre téléphone ou revenir plus tard sans perdre le match.',
    },
    {
      type: 'title',
      text: 'Pourquoi un compteur de basket dédié surpasse un compteur générique',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La plupart des applications de tableau de score vous obligent à appuyer plusieurs fois sur le même bouton pour ajouter deux ou trois points. Ces appuis supplémentaires s\'accumulent sur un match de 40 minutes et augmentent le risque de perdre le compte pendant un contre-attaque ou un changement rapide. Ce tableau a <strong>trois boutons séparés</strong>: un pour chaque valeur de score: pour que vous tapiez exactement une fois par action. Le bouton +3 s\'allume en rouge et déclenche une animation explosive pour accompagner l\'excitation d\'un panier à trois points réussi.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Streetball & improvisé',
          description:
            'Matchs en 16 ou 21 avec des 1 et des 2 points. Ce tableau gère les deux valeurs. Utilisez simplement +1 et +2 et ignorez le +3 quand vous jouez selon les règles de rue.',
          icon: 'mdi:basketball',
          points: ['Aucune configuration requise', 'Fonctionne pour tout objectif', 'L\'écran reste allumé'],
        },
        {
          title: 'Lycée & ligues locales',
          description:
            'Règles FIBA ou NFHS standard avec lancers francs, paniers et tirs à trois points. Les boutons dédiés le rendent assez rapide pour un marqueur officiel.',
          icon: 'mdi:school',
          points: ['Les trois valeurs de score', 'Noms d\'équipe modifiables', 'Plein écran maintient le téléphone éveillé'],
        },
        {
          title: 'Entraînement & pratique',
          description:
            'Suivez les tirs réussis pendant les exercices, les entraînements ou les matchs en un-contre-un. L\'historique n\'est pas conservé, chaque séance repart donc à zéro.',
          icon: 'mdi:whistle',
          points: ['Réinitialisation rapide entre les exercices', 'Fonctionne hors ligne au gymnase', 'Aucun compte nécessaire'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Comment fonctionne le score au basket',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Le basket a trois valeurs de score. Un <strong>lancer franc</strong> vaut 1 point et est tiré depuis la ligne des lancers francs après une faute. Un <strong>panier</strong> vaut 2 points et compte pour tout tir marqué à l\'intérieur de l\'arc à trois points pendant le jeu normal. Un <strong>panier à trois points</strong> vaut 3 points pour les tirs effectués depuis au-delà de l\'arc, délimité par la ligne à trois points. La plupart des matchs professionnels et universitaires utilisent les trois valeurs. Le streetball n\'utilise souvent que des 1 et des 2, ou seulement des 1. Ce tableau s\'adapte à tous les formats.',
    },
    {
      type: 'title',
      text: 'Jouez dans tous les formats: gagner au score, au temps ou au premier atteint',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Le basket n\'a pas de limite de score fixe: le match se termine quand le chronomètre arrive à zéro. Mais le streetball utilise souvent des scores cibles comme le premier à 16, 21 ou 11 (gagner par 2). Ce tableau n\'impose pas de condition de victoire car le basket ne se termine pas sur un score. C\'est vous qui décidez quand le match est fini, et le bouton de réinitialisation efface le tableau pour le match suivant. Les noms d\'équipe sont conservés pour que vous puissiez enchaîner les matchs sans les retaper.',
    },
    {
      type: 'title',
      text: 'Ce qui rend ce tableau différent',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Trois boutons dédiés</strong>: +1, +2 et +3. Pas de changement de valeur, pas d\'appui long, pas de touches supplémentaires.',
        '<strong>Noms d\'équipe modifiables</strong>: appuyez sur le nom pour le changer. Les noms sont stockés dans votre navigateur et persistent après un rechargement.',
        '<strong>Verrouillage d\'écran actif</strong>: en plein écran, le tableau empêche l\'écran de votre téléphone de s\'éteindre. Fini de taper sur l\'écran juste pour le garder allumé.',
        '<strong>Mode plein écran</strong>: masque les onglets et la barre d\'adresse du navigateur pour que le tableau occupe tout l\'écran. Appuyez une fois sur le bouton plein écran et l\'outil se déploie.',
        '<strong>Hors connexion d\'abord</strong>: tout le tableau fonctionne sans connexion internet après le premier chargement. Pas de pub, pas de traqueurs, pas de collecte de données.',
        '<strong>Réponses satisfaisantes</strong>: chaque appui déclenche une animation de score, des particules flottantes et une légère vibration sur les appareils compatibles. Le +3 bénéficie d\'un effet d\'explosion supplémentaire.',
        '<strong>L\'état du match est sauvegardé</strong>: rechargez la page, fermez le navigateur ou revenez demain. Les scores et les noms d\'équipe sont stockés localement.',
      ],
    },
    {
      type: 'title',
      text: 'Tableau de basket vs. feuille de score papier',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Une feuille de score papier fonctionne, mais elle nécessite un stylo, une surface plane et quelqu\'un qui peut écrire et regarder le match en même temps. Un tableau de score numérique résout les trois problèmes. Les boutons sont assez grands pour être tapés sans regarder. Les nombres sont lisibles depuis n\'importe quel endroit du terrain. Le score ne se tache jamais, ne se perd pas et ne s\'efface pas accidentellement. Et contrairement au papier, ce tableau sauvegarde l\'état du match, vous pouvez donc le fermer à la mi-temps et y revenir plus tard.',
    },
  ],
  ui: {
    playerA: 'DOMICILE',
    playerB: 'EXTÉRIEUR',
    swapSides: 'Échanger les côtés',
    reset: 'Réinitialiser',
    resetConfirm: 'Réinitialiser le match ? Tous les points seront perdus.',
    cancel: 'Annuler',
    fullscreen: 'Plein écran',
    exitFullscreen: 'Quitter le plein écran',
    winnerLabel: 'VAINQUEUR',
  },
};
