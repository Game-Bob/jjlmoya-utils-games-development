import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { BeachVolleyballLocaleContent } from '../entry';

const slug = 'scoreur-volleyball-plage';
const title = 'Scoreur de Volleyball de Plage et Suivi de Rotation';
const description = 'Suivez les scores du volleyball de plage, l\'ordre de service, les changements de côté et les sets avec une visualisation interactive de terrain en sable doré vu du dessus.';

const faq = [
  {
    question: 'Quand les équipes changent-elles de côté au volleyball de plage?',
    answer: 'Pour garantir l\'équité dans des conditions extérieures (vent, soleil, sable), les équipes changent de côté tous les 7 points lors des deux premiers sets, et tous les 5 points lors du set décisif.',
  },
  {
    question: 'Comment fonctionne la rotation de service au volleyball de plage?',
    answer: 'Chaque équipe a 2 joueurs qui doivent alterner le service. Quand une équipe remporte un break de service (side-out), elle doit faire pivoter le serveur pour que le joueur qui n\'a pas servi la dernière fois serve ensuite.',
  },
  {
    question: 'Combien de points faut-il pour gagner un set au volleyball de plage?',
    answer: 'Les sets 1 et 2 se jouent en 21 points. Si un troisième set est nécessaire, il se joue en 15 points. Dans tous les cas, une équipe doit gagner avec au moins 2 points d\'avance.',
  },
];

const howTo = [
  {
    name: 'Configurer la Composition',
    text: 'Saisissez les noms personnalisés des deux joueurs de chaque équipe A et B.',
  },
  {
    name: 'Enregistrer les Points',
    text: 'Appuyez sur la carte d\'une équipe ou cliquez sur le terrain interactif pour ajouter des points. La composition et la rotation se mettent à jour automatiquement.',
  },
  {
    name: 'Suivre les Alertes de Changement de Côté',
    text: 'Quand la bannière d\'échange glisse vers le bas, effectuez un changement de côté physique et cliquez sur le bouton d\'échange pour inverser l\'orientation du terrain.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
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
  step: howTo.map((step, i) => ({
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

export const content: BeachVolleyballLocaleContent = {
  slug,
  title,
  description,
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Tableau de Score de Volleyball de Plage en Ligne et Suivi de Rotation de Service',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Garder la trace de l\'ordre de service et des positions des équipes sous le soleil brûlant peut être difficile. Ce scoreur professionnel de volleyball de plage propose un affichage digital de terrain texture sable à haut contraste, optimisé pour la visibilité en extérieur. Il évite les problèmes de lecture dus à l\'éblouissement, automatise les règles de changement de côté et suit lequel des deux joueurs doit servir après chaque point de side-out.',
    },
    {
      type: 'title',
      text: 'Comprendre la Rotation et les Règles de Service au Volleyball de Plage',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bien qu\'il n\'y ait pas de positions fixes ni de fautes de rotation basées sur l\'emplacement sur le terrain en volleyball de plage 2v2, les joueurs doivent strictement alterner le service. Chaque fois que l\'équipe recevante gagne un échange (appelé side-out), elle obtient le droit de servir. Le joueur qui n\'a pas servi la dernière fois que son équipe a servi doit être le nouveau serveur. Servir hors ordre est une faute et donne un point à l\'adversaire. Ce tableau de bord numérique comporte des indicateurs de service actifs et des balles rebondissantes à côté des cercles de joueurs pour éviter les erreurs de rotation.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Règles Officielles FIVB',
          description: 'Respectez les directives officielles de score, y compris les limites de sets et les changements de côté.',
          icon: 'mdi:volleyball',
          points: ['Sets à 21 (set décisif à 15)', 'Marge stricte de 2 points', 'Changements de côté automatisés'],
        },
        {
          title: 'Suivi de Rotation',
          description: 'Ne discutez jamais et ne vous trompez jamais sur le joueur dont c\'est le tour de servir.',
          icon: 'mdi:account-sync-outline',
          points: ['Indicateurs de service lumineux', 'Initiales placées sur le sable', 'Fenêtre de composition d\'équipe'],
        },
        {
          title: 'Optimisé Extérieur',
          description: 'Conçu pour jouer sur les terrains de sable en plein soleil.',
          icon: 'mdi:weather-sunny',
          points: ['Thème jaune à haut contraste', 'Persistance d\'écran Wake Lock', 'Geste de balayage pour annuler le score'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Fonctionnalités Interactives et Paramètres du Jeu',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Terrain SVG Sable Doré:</strong> Reflète visuellement l\'état du jeu. Appuyez directement sur n\'importe quelle moitié du terrain pour attribuer un point à cette équipe.',
        '<strong>Animation de Rotation du Terrain:</strong> Quand l\'alerte de changement de côté se déclenche, cliquer sur le bouton d\'échange fait pivoter tout le terrain SVG de 180 degrés pour aligner l\'affichage avec vos positions physiques.',
        '<strong>Alertes de Changement de Côté FIVB:</strong> Affiche une bannière d\'avertissement très visible quand le score combiné est un multiple de 7 (dans les sets 1 et 2) ou un multiple de 5 (dans le set final).',
        '<strong>Particules de Sable:</strong> Ajoute un retour visuel lors des changements de score avec des particules de sable animées jaillissant des coordonnées de l\'appui.',
        '<strong>Contrôle d\'Annulation par Geste:</strong> Balayez vers le bas sur la carte pour annuler le dernier point enregistré instantanément.',
      ],
    },
    {
      type: 'title',
      text: 'Pourquoi les Équipes Changent-elles de Côté au Volleyball de Plage',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Contrairement au volleyball en salle, les matchs de volleyball de plage sont fortement influencés par les éléments environnementaux comme l\'éblouissement du soleil, la chaleur, la force du vent et la consistance du sable. Changer de côté fréquemment garantit qu\'aucune équipe ne reçoit un avantage indu dû à une direction de vent favorable ou au soleil dans les yeux. Les règles imposent de changer de côté tous les 7 points pendant les deux premiers sets, et tous les 5 points pendant le troisième set.',
    },
  ],
  ui: {
    teamA: 'Équipe 1',
    teamB: 'Équipe 2',
    points: 'Points',
    sets: 'Sets',
    reset: 'Réinitialiser',
    resetConfirm: 'Réinitialiser le match? Tous les scores et compositions seront perdus.',
    cancel: 'Annuler',
    switchSides: 'Changer de Côté',
    switchSidesDesc: 'Le score cumulé a atteint le seuil d\'échange!',
    fullscreen: 'Plein Écran',
    exitFullscreen: 'Quitter le Plein Écran',
    player1: 'Joueur 1',
    player2: 'Joueur 2',
    serving: 'Sert',
    winner: 'Gagnant',
    undo: 'Annuler',
  },
};

