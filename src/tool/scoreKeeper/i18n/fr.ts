import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ScoreKeeperUI } from '../ui';

const slug = 'tableau-de-score-sportif';
const title = 'Tableau de Score Sportif en Ligne : Compteur de Points Gratuit ';
const description =
  'Tableau de score numérique avec grands boutons pour mobile. Idéal pour le padel, le ping-pong et le football. Sans publicités pendant le match. Simple et rapide.';

const faqData = [
  {
    question: 'Fonctionne-t-il sans connexion internet ?',
    answer:
      'Oui, une fois la page chargée, le tableau de score fonctionne entièrement hors ligne. Vous n\'avez pas besoin de données ni de WiFi pendant le match. Tout est sauvegardé localement dans votre navigateur.'
  },
  {
    question: 'Puis-je utiliser le tableau de score pour le tennis et le padel ?',
    answer:
      'Oui, le mode Tennis/Padel gère automatiquement la séquence 15-30-40-AD et comptabilise les sets et les jeux selon le règlement officiel. Parfait pour les matchs amicaux.'
  },
  {
    question: 'Peut-il être mis en plein écran ?',
    answer:
      'Oui, vous pouvez activer le mode plein écran depuis votre navigateur (F11 sur PC, ou le bouton plein écran sur mobile). Les chiffres occupent 80% de l\'écran pour une visibilité maximale.'
  },
  {
    question: 'Comment corriger un point si je me trompe ?',
    answer:
      'Il y a un bouton séparé pour soustraire des points sur chaque carte de joueur. Vous pouvez corriger rapidement les erreurs sans avoir à redémarrer le tableau de score complet.'
  },
  {
    question: 'Fonctionne-t-il pour le basketball avec des paniers de 1, 2 et 3 points ?',
    answer:
      'Oui, en mode Basketball, des boutons dédiés +1, +2 et +3 apparaissent pour marquer n\'importe quelle action rapidement sans appuis supplémentaires.'
  },
  {
    question: 'Le tableau de score gère-t-il automatiquement le service au ping-pong ?',
    answer:
      'Oui, en mode Ping Pong, l\'indicateur de service tourne automatiquement tous les 2 points (ou à chaque point en deuce), suivant les règles officielles de l\'ITTF.'
  },
];

const howToData = [
  {
    name: 'Sélectionnez votre sport',
    text: 'Choisissez le sport dans le sélecteur en haut : Libre, Tennis, Padel, Ping Pong, Volleyball ou Basketball.'
  },
  {
    name: 'Personnalisez les noms',
    text: 'Appuyez sur "DOMICILE" ou "VISITEUR" pour changer les noms des joueurs ou des équipes.'
  },
  {
    name: 'Ajoutez des points en un toucher',
    text: 'Appuyez sur la grande zone du tableau de score pour ajouter un point. Au basketball, utilisez les boutons +1, +2 ou +3.'
  },
  {
    name: 'Indiquez le service',
    text: 'Utilisez le bouton de service dans le coin inférieur pour indiquer qui sert. L\'indicateur jaune apparaît automatiquement.'
  },
  {
    name: 'Corrigez les erreurs',
    text: 'Utilisez le bouton "−" si vous avez ajouté un point par erreur. Il n\'est pas nécessaire de redémarrer le tableau de score complet.'
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer }
  }))
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
    text: step.text
  }))
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'fr'
};

export const content: ToolLocaleContent<ScoreKeeperUI> = {
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
      text: 'Votre Arbitre Numérique de Poche',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Dans le feu du match, il est facile de perdre le compte. "On était à 4-3 ou 3-4 ?". Ce tableau de score est conçu pour régler ces disputes avant qu\'elles ne commencent. Avec une interface de <strong>grands boutons</strong> qui occupent presque toute la carte, vous pouvez ajouter des points sans regarder l\'écran, en tendant simplement le bras vers le téléphone sur le banc.'
    },
    {
      type: 'title',
      text: 'Sélecteur de Sport Intelligent',
      level: 2
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Mode Tennis / Padel',
          description:
            'Interface adaptée avec compteurs de Sets et Jeux. Le système gère automatiquement la séquence 15-30-40-AD.',
          icon: 'mdi:tennis',
          points: ['Règlement officiel', 'Gestion des avantages', 'Compteur de sets']
        },
        {
          title: 'Mode Basketball',
          description:
            'Le tableau de score détecte le sport et change son interface. Boutons dédiés +1, +2 et +3.',
          icon: 'mdi:basketball',
          points: ['Paniers à 3 pts', 'Lancers francs', 'Sans appuis superflus']
        },
        {
          title: 'Mode Ping Pong',
          description:
            'Oubliez de mémoriser à qui le tour de servir. L\'indicateur visuel tourne automatiquement tous les 2 points.',
          icon: 'mdi:table-tennis',
          points: ['Règles ITTF', 'Rotation du service', 'Mode Deuce (11 pts)']
        },
      ]
    },
    {
      type: 'title',
      text: 'Fonctionnalités Conçues pour le Sport',
      level: 2
    },
    {
      type: 'list',
      items: [
        '<strong>Mode Haute Visibilité :</strong> Des chiffres qui occupent 80% de l\'écran pour une lisibilité maximale en plein soleil.',
        '<strong>Noms Modifiables :</strong> Appuyez sur "DOMICILE" ou "VISITEUR" pour définir les noms des joueurs.',
        '<strong>Prévention des Erreurs :</strong> Bouton moins séparé pour corriger rapidement les erreurs sans redémarrer.',
        '<strong>Fonctionne Hors Ligne :</strong> Une fois chargé, aucune connexion internet n\'est nécessaire pendant le match.',
      ]
    },
  ],
  ui: {
    playerA: 'DOMICILE',
    playerB: 'VISITEUR',
    swapSides: 'Changer de Côté',
    reset: 'Réinitialiser',
    serve: 'Service',
    sets: 'Sets',
    games: 'Jeux',
    victory: 'VICTOIRE !',
    newGame: 'Nouvelle Partie',
    continueGame: 'Continuer à Jouer',
    resetConfirm: 'Réinitialiser le tableau de score ?',
    sportSimple: 'Libre (Football, Morpion...)',
    sportTennis: 'Tennis',
    sportPadel: 'Padel',
    sportPingpong: 'Ping Pong',
    sportVolleyball: 'Volleyball',
    sportBasket: 'Basketball'
  }
};
