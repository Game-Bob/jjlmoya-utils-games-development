import { bibliographyEntries } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PenaltyShootoutUI } from '../ui';

const slug = 'calculateur-tirs-au-but';
const title = 'Marqueur de Tirs au But en Ligne: Tableau de Score Football';
const description =
  'Suivez les séances de tirs au but en direct. Comptage sur 5 tirs, détection d\'élimination mathématique, mort subite et célébration du vainqueur.';

const faqData = [
  {
    question: 'Quand une séance de tirs au but prend-elle fin prématurément ?',
    answer:
      'La séance s\'arrête dès qu\'une équipe obtient un écart de buts que l\'autre équipe ne peut plus combler mathématiquement avec ses tirs restants.',
  },
  {
    question: 'Comment fonctionne la mort subite lors des tirs au but ?',
    answer:
      'En cas d\'égalité après 5 tirs par équipe, les tirs se poursuivent par séries d\'un tir par équipe jusqu\'à ce qu\'une équipe marque et l\'autre échoue.',
  },
  {
    question: 'Qui tire en premier lors de la séance de tirs au but ?',
    answer:
      'L\'arbitre procède à un tirage au sort à pile ou face pour choisir le but, puis un second tirage détermine l\'équipe qui commence à tirer.',
  },
  {
    question: 'Un gardien peut-il être remplacé pendant les tirs au but ?',
    answer:
      'Un gardien blessé dans l\'impossibilité de continuer peut être remplacé par un remplaçant désigné si son équipe n\'a pas épuisé son quota de changements.',
  },
];

const howToData = [
  {
    name: 'Saisir les noms des équipes',
    text: 'Entrez les noms personnalisés des deux équipes avant le début des tirs.',
  },
  {
    name: 'Enregistrer chaque tir',
    text: 'Cliquez sur BUT ou RATÉ à chaque tentative. L\'application met à jour le score, les indicateurs et l\'ordre de passage.',
  },
  {
    name: 'Passage en Mort Subite',
    text: 'En cas d\'égalité après 5 tirs par équipe, la mort subite est activée automatiquement.',
  },
  {
    name: 'Annonce du Vainqueur',
    text: 'Dès la victoire mathématique ou en mort subite, une fenêtre animée proclame l\'équipe championne.',
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

export const content: ToolLocaleContent<PenaltyShootoutUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography: bibliographyEntries,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Règlement Officiel IFAB des Tirs au But',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La séance de tirs au but (officiellement <em>tirs du point de réparation</em>) permet de départager les équipes en cas d\'égalité à la fin du temps réglementaire selon la Loi 10 de l\'IFAB.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '5', label: 'Tirs Initiaux' },
        { value: '11m', label: 'Distance du But' },
        { value: '1v1', label: 'Tireur vs Gardien' },
        { value: 'ABBA / AB', label: 'Ordre de Passage' },
      ],
    },
    {
      type: 'tip',
      title: 'Règle de l\'Élimination Mathématique',
      html: 'Si une équipe compte plus de buts d\'avance que le nombre de tirs restant à exécuter par l\'adversaire, la séance s\'arrête immédiatement.',
    },
    {
      type: 'title',
      text: 'Comparatif Phase Régulière vs Mort Subite',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Phase Régulière (5 Tirs)',
          description: 'Série de 5 tirs alternés par équipe. Arrêt prématuré uniquement en cas d\'impossibilité mathématique de revenir.',
        },
        {
          title: 'Phase de Mort Subite',
          description: 'Séries individuelles après le 5ème tir. Toute différence de buts après un nombre égal de tirs désigne le vainqueur.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Synthèse des Règles IFAB',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Règle / Exigence', 'Norme Officielle IFAB'],
      rows: [
        ['Joueurs Éligibles', 'Seuls les joueurs présents sur le terrain au coup de sifflet final peuvent participer.'],
        ['Position du Gardien', 'Doit conserver au moins une partie d\'un pied sur la ligne de but au moment du tir.'],
        ['Feintes lors de la Course', 'Les feintes pendant la course sont autorisées ; feinter à la fin de la course est sanctionné.'],
        ['Égalité Numérique', 'Si une équipe a moins de joueurs suite à un carton rouge, l\'adversaire doit réduire son effectif pour égaliser.'],
      ],
    },
    {
      type: 'title',
      text: 'Avantages et Inconvénients des Tirs au But',
      level: 2,
    },
    {
      type: 'proscons',
      title: 'Évaluation du Format',
      items: [
        {
          pro: 'Garantit un vainqueur incontestable dans une durée maîtrisée.',
          con: 'La pression psychologique extrême peut masquer la performance de 120 minutes de jeu.',
        },
        {
          pro: 'Offre un spectacle intense et dramatique pour les supporters.',
          con: 'L\'échec d\'un seul tireur peut susciter une responsabilité disproportionnée.',
        },
      ],
    },
  ],
  ui: {
    teamALabel: 'Équipe Domicile',
    teamBLabel: 'Équipe Extérieur',
    scoreGoal: 'BUT',
    scoreMiss: 'RATÉ',
    undo: 'Annuler',
    reset: 'Réinitialiser',
    suddenDeath: 'Mort Subite',
    regularRounds: 'Tour Régulier',
    roundLabel: 'Tour',
    turnLabel: 'Au Tour de',
    winnerTitle: 'Vainqueur Déclaré',
    unreachableLead: 'Avance immanquable au tour régulier',
    regularRoundsWin: 'Victoire après 5 tirs réguliers',
    suddenDeathWin: 'Victoire en mort subite',
    statusPending: 'En attente',
    statusScored: 'Marqué',
    statusMissed: 'Manqué',
  },
};
