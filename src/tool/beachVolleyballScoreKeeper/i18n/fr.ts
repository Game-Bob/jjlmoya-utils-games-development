import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { BeachVolleyballLocaleContent } from '../entry';

const slug = 'scoreur-volleyball-plage';
const title = 'Scoreur de Volleyball de Plage et Suivi de Rotation';
const description = 'Suivez les scores du volleyball de plage, l ordre de service, les changements de cote et les sets avec une visualisation interactive de terrain en sable dore vu du dessus.';

const faq = [
  {
    question: 'Quand les equipes changent-elles de cote au volleyball de plage?',
    answer: 'Pour garantir l equite dans des conditions exterieures (vent, soleil, sable), les equipes changent de cote tous les 7 points lors des deux premiers sets, et tous les 5 points lors du set decisif.',
  },
  {
    question: 'Comment fonctionne la rotation de service au volleyball de plage?',
    answer: 'Chaque equipe a 2 joueurs qui doivent alterner le service. Quand une equipe remporte un break de service (side-out), elle doit faire pivoter le serveur pour que le joueur qui n a pas servi la derniere fois serve ensuite.',
  },
  {
    question: 'Combien de points faut-il pour gagner un set au volleyball de plage?',
    answer: 'Les sets 1 et 2 se jouent en 21 points. Si un troisieme set est necessaire, il se joue en 15 points. Dans tous les cas, une equipe doit gagner avec au moins 2 points d avance.',
  },
];

const howTo = [
  {
    name: 'Configurer la Composition',
    text: 'Saisissez les noms personnalises des deux joueurs de chaque equipe A et B.',
  },
  {
    name: 'Enregistrer les Points',
    text: 'Appuyez sur la carte d une equipe ou cliquez sur le terrain interactif pour ajouter des points. La composition et la rotation se mettent a jour automatiquement.',
  },
  {
    name: 'Suivre les Alertes de Changement de Cote',
    text: 'Quand la banniere d echange glisse vers le bas, effectuez un changement de cote physique et cliquez sur le bouton d echange pour inverser l orientation du terrain.',
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
      html: 'Garder la trace de l ordre de service et des positions des equipes sous le soleil brulant peut etre difficile. Ce scoreur professionnel de volleyball de plage propose un affichage digital de terrain texture sable a haut contraste, optimise pour la visibilite en exterieur. Il evite les problemes de lecture dus a l eblouissement, automatise les regles de changement de cote et suit lequel des deux joueurs doit servir apres chaque point de side-out.',
    },
    {
      type: 'title',
      text: 'Comprendre la Rotation et les Regles de Service au Volleyball de Plage',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bien qu il n y ait pas de positions fixes ni de fautes de rotation basees sur l emplacement sur le terrain en volleyball de plage 2v2, les joueurs doivent strictement alterner le service. Chaque fois que l equipe recevante gagne un echange (appele side-out), elle obtient le droit de servir. Le joueur qui n a pas servi la derniere fois que son equipe a servi doit etre le nouveau serveur. Servir hors ordre est une faute et donne un point a l adversaire. Ce tableau de bord numerique comporte des indicateurs de service actifs et des balles rebondissantes a cote des cercles de joueurs pour eviter les erreurs de rotation.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Regles Officielles FIVB',
          description: 'Respectez les directives officielles de score, y compris les limites de sets et les changements de cote.',
          icon: 'mdi:volleyball',
          points: ['Sets a 21 (set decisif a 15)', 'Marge stricte de 2 points', 'Changements de cote automatises'],
        },
        {
          title: 'Suivi de Rotation',
          description: 'Ne discutez jamais et ne vous trompez jamais sur le joueur dont c est le tour de servir.',
          icon: 'mdi:account-sync-outline',
          points: ['Indicateurs de service lumineux', 'Initiales placees sur le sable', 'Fenetre de composition d equipe'],
        },
        {
          title: 'Optimise Exterieur',
          description: 'Concu pour jouer sur les terrains de sable en plein soleil.',
          icon: 'mdi:weather-sunny',
          points: ['Theme jaune a haut contraste', 'Persistance d ecran Wake Lock', 'Geste de balayage pour annuler le score'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Fonctionnalites Interactives et Parametres du Jeu',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Terrain SVG Sable Dore:</strong> Reflete visuellement l etat du jeu. Appuyez directement sur n importe quelle moitie du terrain pour attribuer un point a cette equipe.',
        '<strong>Animation de Rotation du Terrain:</strong> Quand l alerte de changement de cote se declenche, cliquer sur le bouton d echange fait pivoter tout le terrain SVG de 180 degres pour aligner l affichage avec vos positions physiques.',
        '<strong>Alertes de Changement de Cote FIVB:</strong> Affiche une banniere d avertissement tres visible quand le score combine est un multiple de 7 (dans les sets 1 et 2) ou un multiple de 5 (dans le set final).',
        '<strong>Particules de Sable:</strong> Ajoute un retour visuel lors des changements de score avec des particules de sable animees jaillissant des coordonnees de l appui.',
        '<strong>Controle d Annulation par Geste:</strong> Balayez vers le bas sur la carte pour annuler le dernier point enregistre instantanement.',
      ],
    },
    {
      type: 'title',
      text: 'Pourquoi les Equipes Changent elles de Cote au Volleyball de Plage',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Contrairement au volleyball en salle, les matchs de volleyball de plage sont fortement influences par les elements environnementaux comme l eblouissement du soleil, la chaleur, la force du vent et la consistance du sable. Changer de cote frequemment garantit qu aucune equipe ne recoit un avantage indu du a une direction de vent favorable ou au soleil dans les yeux. Les regles imposent de changer de cote tous les 7 points pendant les deux premiers sets, et tous les 5 points pendant le troisieme set.',
    },
  ],
  ui: {
    teamA: 'Equipe 1',
    teamB: 'Equipe 2',
    points: 'Points',
    sets: 'Sets',
    reset: 'Reinitialiser',
    resetConfirm: 'Reinitialiser le match? Tous les scores et compositions seront perdus.',
    cancel: 'Annuler',
    switchSides: 'Changer de Cote',
    switchSidesDesc: 'Le score cumule a atteint le seuil d echange!',
    fullscreen: 'Plein Ecran',
    exitFullscreen: 'Quitter le Plein Ecran',
    player1: 'Joueur 1',
    player2: 'Joueur 2',
    serving: 'Sert',
    winner: 'Gagnant',
    undo: 'Annuler',
  },
};
