import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DartsScoreKeeperUI } from '../ui';

const slug = 'scoreur-de-dards';
const title = 'Scoreur de Fléchettes en Ligne: Suivi de Legs et Sets';
const description = 'Suivez les matchs de fléchettes avec le score des legs et des sets. Scoreur de fléchettes en ligne gratuit pour les matchs en 501 et 301 avec calculs de fermeture en direct et statistiques.';

const faqData = [
  {
    question: 'Comment fonctionne le score aux fléchettes en 501 et 301 ?',
    answer: 'Les joueurs commencent avec un score fixe de 501 ou 301 points. Chaque joueur lance trois fléchettes à son tour, et la valeur totale de ces lancers est soustraite de son score. L\'objectif est d\'atteindre exactement zéro point. Si la règle de la Double Sortie est activée, la fléchette gagnante finale doit atterrir sur un segment double ou le bullseye intérieur.',
  },
  {
    question: 'Qu\'est-ce qu\'un bust aux fléchettes et quand se produit-il ?',
    answer: 'Un bust se produit lorsqu\'un joueur marque plus de points que son total restant, ou que son score atteint exactement un point avec la règle de Double Sortie activée. Quand un joueur fait bust, son tour se termine immédiatement et son score est réinitialisé au total qu\'il avait au début de ce tour.',
  },
  {
    question: 'Comment calculer la moyenne aux fléchettes ?',
    answer: 'La moyenne aux fléchettes se calcule en prenant le nombre total de points marqués, en le divisant par le nombre total de fléchettes lancées et en multipliant le résultat par trois. Cela représente le score moyen qu\'un joueur obtient par tour standard de trois fléchettes.',
  },
  {
    question: 'Qu\'est-ce qu\'une fermeture aux fléchettes ?',
    answer: 'Une fermeture est la combinaison spécifique de lancers nécessaire pour réduire le score restant à zéro et gagner la manche. Les scoreurs professionnels affichent des suggestions de fermeture pour les scores de 170 et moins, guidant les joueurs sur les simples, doubles ou triples à viser.',
  },
];

const howToData = [
  {
    name: 'Choisir le score de départ et les règles',
    text: 'Sélectionnez 501 ou 301 comme score de départ et activez ou désactivez la règle de Double Sortie selon votre niveau de jeu souhaité.',
  },
  {
    name: 'Saisir les noms des joueurs',
    text: 'Cliquez sur les champs de nom en haut du tableau de bord pour personnaliser les noms. Les valeurs seront sauvegardées automatiquement dans votre navigateur.',
  },
  {
    name: 'Enregistrer les fléchettes lancées',
    text: 'Utilisez le clavier interactif ou appuyez directement sur les secteurs de la cible pour enregistrer vos lancers. Sélectionnez d\'abord le multiplicateur (Simple, Double ou Triple), puis le nombre touché.',
  },
  {
    name: 'Suivre les recommandations de fermeture',
    text: 'Quand votre score restant passe sous 170, regardez le panneau de fermeture pour voir les cibles optimales pour finir la manche.',
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

export const content: ToolLocaleContent<DartsScoreKeeperUI> = {
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
      text: 'Scoreur de Fléchettes en Ligne Gratuit et Suivi de Matchs',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Gérer les scores aux fléchettes requiert du calcul mental rapide et de la concentration. Ce scoreur numérique de manches effectue tous les calculs pour vous, vous permettant de vous concentrer entièrement sur le lancer. Que vous vous entraîniez seul ou que vous jouiez un match compétitif entre amis, ce tableau de bord suit les points, les manches, les sets, les moyennes de lancer et les cibles de fermeture en double.',
    },
    {
      type: 'title',
      text: 'Formats de Score Standards aux Fléchettes Expliqués',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Les matchs de fléchettes se jouent en manches et en sets. Les formats les plus populaires dans le monde sont le 501 et le 301, tous deux des jeux de soustraction où les joueurs réduisent leur score à zéro.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Tournoi 501',
          description: 'Le format standard pour les tournois professionnels dans le monde entier.',
          icon: 'mdi:trophy-outline',
          points: ['Score de départ standard', 'Double sortie requise', 'Accent sur les scores élevés'],
        },
        {
          title: '301 Décontracté',
          description: 'Une version plus rapide du jeu de soustraction idéale pour les matchs rapides.',
          icon: 'mdi:clock-outline',
          points: ['Rythme de jeu plus rapide', 'Option double entrée courante', 'Excellent pour l\'entraînement'],
        },
        {
          title: 'Mode Cricket',
          description: 'Un jeu de ciblage stratégique populaire dans les pubs et les ligues.',
          icon: 'mdi:bullseye',
          points: ['Accent sur les numéros 15-20', 'Suivi du bullseye', 'Système de règles alternatif'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Comprendre les Mathématiques de Fermeture aux Fléchettes',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La fermeture la plus élevée possible aux fléchettes est 170, réalisée en lançant Triple 20, Triple 20 et Double Bull. Quand votre score atteint 170 ou moins, vous entrez en zone de fermeture, où une séquence spécifique de fléchettes peut gagner la partie.',
    },
    {
      type: 'table',
      headers: ['Score', 'Cible Fléchette 1', 'Cible Fléchette 2', 'Cible Fléchette 3'],
      rows: [
        ['170', 'Triple 20 (60)', 'Triple 20 (60)', 'Double Bull (50)'],
        ['120', 'Triple 20 (60)', 'Simple 20 (20)', 'Double 20 (40)'],
        ['100', 'Triple 20 (60)', 'Simple 20 (20)', 'Double 10 (20)'],
        ['80', 'Triple 20 (60)', 'Double 10 (20)', '-'],
        ['40', 'Double 20 (40)', '-', '-'],
      ],
    },
    {
      type: 'title',
      text: 'Fonctionnalités de ce Tableau de Bord Numérique de Fléchettes',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Méthodes de Saisie Interactives</strong> basculez entre une cible radiale visuelle et un clavier numérique rapide.',
        '<strong>Moteur de Fermeture Intelligent</strong> affiche les combinaisons en direct pour terminer les manches.',
        '<strong>Détection de Bust</strong> réinitialise automatiquement les lancers invalides et alerte l\'utilisateur.',
        '<strong>Journal d\'Historique des Tours</strong> suit les rondes précédentes et les scores restants.',
        '<strong>Statistiques Détaillées du Match</strong> calcule les moyennes de trois fléchettes dynamiquement.',
      ],
    },
    {
      type: 'title',
      text: 'Suivi Manuel vs Numérique des Fléchettes',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Les tableaux noirs traditionnels nécessitent d\'écrire, d\'effacer et des calculs constants. Ce tableau de bord en ligne élimine les risques d\'erreur, automatise les moyennes et présente les cibles de fermeture. Placez votre appareil près de la cible, passez en mode plein écran pour garder l\'écran actif et profitez d\'un score sans tracas.',
    },
  ],
  ui: {
    playerA: 'Joueur 1',
    playerB: 'Joueur 2',
    winnerLabel: 'CHAMPION',
    reset: 'Réinitialiser',
    resetConfirm: 'Réinitialiser le match ? Toutes les données seront perdues.',
    cancel: 'Annuler',
    fullscreen: 'Plein écran',
    exitFullscreen: 'Quitter le plein écran',
    leg: 'Manche',
    set: 'Set',
    average: 'Moy',
    checkout: 'Fermeture',
    busted: 'Bust',
    dart: 'Tour de Fléchettes',
    score301: '301',
    score501: '501',
    doubleOut: 'Double Sortie',
    noCheckout: 'Pas de Fermeture',
  },
};
