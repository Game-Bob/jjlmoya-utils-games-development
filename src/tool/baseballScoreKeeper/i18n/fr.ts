import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { BaseballScoreKeeperLocaleContent } from '../entry';

const slug = 'marqueur-baseball';
const title = 'Marqueur Premium de Baseball et Softball avec Suivi des Coureurs';
const description = 'Suivez les scores de baseball en direct avec les points, les coups surs et les erreurs. Diamant visuel avec positions des coureurs, compteur de balles et de prises, et historique manche par manche.';

const faqData = [
  {
    question: 'Comment fonctionne le compteur de lancers au baseball?',
    answer: 'Le compteur indique le nombre de balles et de prises sur le frappeur actuel. Les balles vont jusqu\'a 4 pour un but sur balles. Les prises vont jusqu\'a 3 pour un retrait sur des prises. Limites reglables pour les ligues de jeunes.',
  },
  {
    question: 'Que montre le diamant de baseball interactif?',
    answer: 'Le diamant montre les premieres, deuxieme et troisieme bases. Toucher une base la surligne en orange pour indiquer qu\'un coureur est sur cette base. Les coureurs avancent automatiquement sur les coups surs.',
  },
  {
    question: 'Comment les points, les coups surs et les erreurs sont-ils suivis?',
    answer: 'La matrice P C E affiche les points, les coups surs et les erreurs pour les deux equipes. L\'historique manche par manche montre comment le score s\'est construit au fil des manches.',
  },
];

const howToData = [
  {
    name: 'Enregistrer Chaque Lancer',
    text: 'Touchez Prise, Balle, Fausse, Coup sur ou Retrait pour enregistrer chaque lancer. Le compteur se met a jour automatiquement selon le resultat.',
  },
  {
    name: 'Gerer les Coureurs',
    text: 'Touchez les bases sur le diamant pour placer ou retirer des coureurs. Sur un coup sur, les coureurs avancent automatiquement.',
  },
  {
    name: 'Suivre la Progression des Manches',
    text: 'L\'affichage de la manche montre la demi-manche en cours. Apres trois retraits, le jeu bascule automatiquement entre les moities haute et basse.',
  },
  {
    name: 'Consulter la Feuille de Match',
    text: 'Verifiez le resume P C E et la grille d\'historique des manches pour voir la progression complete du score.',
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
    image: undefined,
    url: undefined,
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

export const content: BaseballScoreKeeperLocaleContent = {
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
      text: 'Marqueur de Baseball Gratuit en Ligne: Suivez les Points les Coups Surs et les Erreurs avec un Diamant en Direct',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Besoin d\'un marqueur de baseball fiable pour votre prochain match? Cet outil gratuit en ligne suit les points, les coups surs et les erreurs tout en affichant un diamant interactif en direct avec les positions des coureurs en temps reel. Chaque lancer compte et notre tableau de bord numerique vous garantit de ne jamais perdre la trace du compteur, des retraits ou de la manche. Que vous entrainiez une ligue de jeunes, que vous teniez le score pour un tournoi de softball ou que vous dirigiez un match de lycee, cet outil gere automatiquement toute la feuille de match pour que vous puissiez vous concentrer sur l\'action sur le terrain.',
    },
    {
      type: 'title',
      text: 'Comment Ce Tableau de Bord de Baseball Vous Fait Gagner du Temps et Evite les Erreurs',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La tenue manuelle du score est sujette aux erreurs, surtout pendant les matchs rapides. Une prise manquee ou un coureur oublie peut fausser toute la feuille de match. Ce marqueur numerique automatise les parties fastidieuses. Touchez Prise, Balle, Fausse, Coup sur ou Retrait et le tableau met a jour le compteur instantanement. Quand un frappeur obtient un but sur balles ou est retire sur des prises, l\'outil remet le compteur a zero automatiquement. Apres trois retraits, il bascule la manche de haute a basse et enregistre les points. La matrice P C E et la grille d\'historique manche par manche vous donnent une image complete du match en un coup d\'oeil.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Compteur de Lancers en Direct',
          description: 'Suivi automatise des balles et des prises avec detection des buts sur balles et des retraits sur des prises pour chaque presence au baton.',
          icon: 'mdi:baseball',
          points: ['Balles comptees jusqu\'a 4', 'Prises comptees jusqu\'a 3', 'Remise a zero automatique sur decision'],
        },
        {
          title: 'Gestion des Coureurs',
          description: 'Diamant interactif montrant exactement qui est sur la premiere, deuxieme ou troisieme base.',
          icon: 'mdi:diamond-stone',
          points: ['Touchez les bases pour placer les coureurs', 'Surlignage visuel quand occupee', 'Vidage au changement de manche'],
        },
        {
          title: 'Feuille de Match Complete',
          description: 'Statistiques P C E completes avec historique des scores manche par manche.',
          icon: 'mdi:scoreboard-outline',
          points: ['Points coups surs et erreurs', 'Grille manche par manche', 'Totaux cumules pour les deux equipes'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Qui a Besoin de Ce Suivi de Baseball',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Cet outil est concu pour tous ceux qui ont besoin de tenir le score: les entraineurs de baseball juniors qui veulent un affichage numerique clair pour leurs joueurs, les benevoles de ligues de softball qui gerent des matchs sans marqueur dedie, les parents qui suivent les matchs de leurs enfants depuis les tribunes et les arbitres qui veulent un systeme de verification secondaire. L\'interface fonctionne sur tous les appareils, des smartphones dans l\'abri des joueurs aux tablettes montees sur la cloture ou aux ordinateurs portables sur le banc. Aucune installation requise, ouvrez simplement le navigateur et commencez a marquer.',
    },
    {
      type: 'list',
      items: [
        '<strong>Gestion Automatique du Compteur:</strong> Les balles et les prises se remettent a zero automatiquement apres les buts sur balles, les retraits sur des prises, les coups surs et les retraits. Aucune remise a zero manuelle necessaire.',
        '<strong>Diamant Tactile:</strong> Touchez la premiere, deuxieme ou troisieme base pour placer ou retirer des coureurs. Le diamant s\'allume en or pour montrer les bases occupees.',
        '<strong>Scores Manche par Manche:</strong> Chaque demi-manche est enregistree dans la grille. Voyez exactement comment chaque equipe a marque sur les neuf manches.',
        '<strong>Aucune Configuration Requise:</strong> Ouvrez la page et commencez a marquer immediatement. Personnalisez les noms des equipes en touchant les etiquettes au-dessus des scores.',
      ],
    },
    {
      type: 'title',
      text: 'Marquage de Baseball Simplifie: Compteur Diamant et Feuille de Match en Un Seul Endroit',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tenir le score au baseball necessite de suivre plusieurs choses a la fois: le compteur de balles et de prises, le nombre de retraits, les bases avec des coureurs, les points de chaque equipe et la manche en cours. Perdre la trace de l\'un d\'entre eux cree de la confusion et des releves inexacts. Cet outil consolide tout en un seul ecran. Les points du compteur montrent les balles et les prises en un coup d\'oeil. Le diamant montre les positions des coureurs. Le tableau P C E affiche la feuille de match complete. Et la grille des manches defile horizontalement pour montrer l\'historique complet des scores. Tout se met a jour en temps reel a chaque toucher.',
    },
    {
      type: 'grid',
      columns: [
        { type: 'card', title: 'Entraineurs', html: '<p>Gardez un tableau de bord numerique clair visible pour toute votre equipe depuis l\'abri.</p>' },
        { type: 'card', title: 'Benevoles', html: '<p>Aucune experience de marquage requise. L\'outil gere tout le suivi complexe automatiquement.</p>' },
        { type: 'card', title: 'Parents', html: '<p>Suivez le match depuis les tribunes avec un affichage des scores fiable en temps reel sur votre telephone.</p>' },
        { type: 'card', title: 'Joueurs', html: '<p>Consultez les scores manche par manche apres le match pour analyser les performances.</p>' },
      ],
    },
  ],
  ui: {
    title: 'Marqueur de Baseball',
    description: 'Suivez les points, les coups surs et les erreurs avec vue diamant.',
    away: 'Exterieur',
    home: 'Domicile',
    runs: 'P',
    hits: 'C',
    errors: 'E',
    inning: 'Manche',
    topInning: 'Haute',
    bottomInning: 'Basse',
    balls: 'Balles',
    strikes: 'Prises',
    outs: 'Retraits',
    strikeBtn: 'Prise',
    ballBtn: 'Balle',
    foulBtn: 'Fausse',
    hitBtn: 'Coup sur',
    outBtn: 'Retrait',
    walkBtn: 'But sur balles',
    runBtn: '+1 Point',
    errorBtn: 'Erreur',
    newBatter: 'Nouveau Frappeur',
    resetMatch: 'Reinitialiser le Match',
    resetConfirm: 'Reinitialiser le match en cours? Tous les scores seront perdus.',
    cancel: 'Annuler',
    confirm: 'Confirmer',
    total: 'Total',
    fullscreen: 'Plein Ecran',
    toggleSound: 'Activer le Son',
  },
};
