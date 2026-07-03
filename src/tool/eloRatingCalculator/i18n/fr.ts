import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { EloRatingCalculatorUI } from '../ui';

const slug = 'calculateur-elo';
const title = 'Calculateur de Classement ELO pour Échecs, Esports et Sports';
const description = 'Calculateur ELO gratuit pour victoires, nuls et défaites. Saisissez les deux classements, choisissez un facteur K et obtenez le changement exact de points, le score attendu, le nouvel ELO et l\'ELO adverse.';

const ui: EloRatingCalculatorUI = {
  playerLabel: 'Classement du joueur',
  opponentLabel: 'Classement de l\'adversaire',
  kFactorLabel: 'Facteur K',
  resultLabel: 'Résultat du match',
  winLabel: 'Victoire',
  drawLabel: 'Nul',
  lossLabel: 'Défaite',
  calculateLabel: 'Calculer',
  resetLabel: 'Réinitialiser',
  expectedLabel: 'Attendu',
  deltaLabel: 'Variation',
  newRatingLabel: 'Nouveau classement',
  opponentNewRatingLabel: 'Nouvel ELO adverse',
  kFactorHelpTitle: 'Qu\'est-ce que le facteur K ?',
  kFactorHelpText: 'K contrôle l\'agressivité de la mise à jour. Un K faible signifie des classements stables. Un K élevé fait que chaque résultat déplace les classements plus vite.',
  kFactorLowText: 'Stable',
  kFactorHighText: 'Volatil',
  resultSummaryLabel: 'Impact du match',
  initialImpactText: 'Le nul garde la table serrée',
  historyVersusLabel: 'vs',
  historyToLabel: 'à',
  playerPointsLabel: 'points du joueur',
  opponentEloLabel: 'ELO adverse',
  particleEloLabel: 'ELO',
  particleRatingLabel: 'CLASSEMENT',
  upsetLabel: 'Chance de surprise',
  favoriteLabel: 'Pression du favori',
  balancedLabel: 'Match équilibré',
  historyLabel: 'Calculs locaux',
  noHistoryLabel: 'Lancez un calcul pour l\'enregistrer ici',
  copiedLabel: 'Copié',
  copyLabel: 'Copier',
  clearLabel: 'Effacer',
  kBeginner: 'Débutant',
  kClub: 'Club',
  kTournament: 'Tournoi',
  kElite: 'Élite',
};

const faqData = [
  { question: 'Comment calculer le changement de classement ELO après un match ?', answer: 'Saisissez votre ELO actuel, l\'ELO adverse, le résultat du match et le facteur K. Le calculateur estime votre score attendu, le compare avec le résultat réel, puis retourne les points exacts gagnés ou perdus.' },
  { question: 'Que signifie le facteur K en ELO ?', answer: 'Le facteur K contrôle la sensibilité du classement. Un facteur K faible rend les classements stables et lents à évoluer. Un facteur K élevé fait réagir les classements plus vite, ce qui est utile pour les nouveaux joueurs, les saisons courtes ou les échelles locales actives.' },
  { question: 'Pourquoi est-ce que je gagne moins de points ELO quand je bats un adversaire moins bien classé ?', answer: 'Parce que la formule s\'attendait déjà à ce que vous gagniez. Battre un adversaire beaucoup moins bien classé confirme la prédiction, donc le gain de classement est faible. Battre un adversaire plus fort est plus surprenant, donc le gain est plus grand.' },
  { question: 'L\'adversaire perd-il le même nombre de points ELO ?', answer: 'Dans un échange ELO standard à deux joueurs, oui. Les points gagnés par un côté sont soustraits de l\'autre, donc le calculateur montre à la fois le nouvel ELO du joueur et le nouvel ELO adverse.' },
  { question: 'Puis-je utiliser ce calculateur ELO en dehors des échecs ?', answer: 'Oui. L\'ELO fonctionne pour toute compétition répétée en tête-à-tête où les joueurs plus forts devraient être plus susceptibles de gagner, y compris esports, échelles de tennis, groupes de padel, tennis de table, clubs de débat et ligues fantasy.' },
];

const howTo = [
  { name: 'Saisir le classement du joueur', text: 'Indiquez le classement actuel du joueur dont vous voulez calculer le changement.' },
  { name: 'Saisir le classement adverse', text: 'Ajoutez le classement adverse pour que le calculateur puisse estimer le score attendu.' },
  { name: 'Choisir le facteur K et le résultat', text: 'Utilisez un facteur K plus faible pour des classements stables ou un facteur K plus élevé quand les classements doivent s\'ajuster rapidement, puis choisissez victoire, nul ou défaite.' },
  { name: 'Lire les nouveaux classements', text: 'Le calculateur affiche le score attendu, la variation de classement, votre nouvel ELO et le nouvel ELO adverse après l\'échange de points.' },
];

const seo = [
  { type: 'title' as const, text: 'Calculer les Points ELO Après N\'importe Quel Match', level: 2 as const },
  {
    type: 'paragraph' as const,
    html: 'Utilisez ce calculateur de classement ELO quand vous avez besoin d\'une réponse rapide à une question très pratique: <strong>combien de points ELO est-ce que je gagne ou perds après ce résultat ?</strong> Saisissez votre classement, le classement adverse, le résultat du match et le facteur K. L\'outil calcule le score attendu, la variation de classement, votre nouvel ELO et le nouvel ELO adverse dans la même fiche de résultats.'
  },
  {
    type: 'summary' as const,
    title: 'Ce que ce calculateur répond',
    items: [
      'Combien de points ELO vous gagnez après une victoire contre un adversaire plus fort ou plus faible.',
      'Combien de points ELO vous perdez après une défaite surprise.',
      'Si un match nul devrait augmenter ou diminuer votre classement.',
      'Quel est le classement adverse après le même échange de points.',
      'Comment changer le facteur K rend le mouvement du classement stable ou volatil.',
    ]
  },
  {
    type: 'stats' as const,
    items: [
      { value: '1.0', label: 'score de victoire', description: 'Une victoire compte comme un point complet avant d\'être comparée au score attendu.' },
      { value: '0.5', label: 'score de nul', description: 'Un nul est exactement entre une victoire et une défaite, il peut donc faire gagner des points contre un adversaire plus fort.' },
      { value: '0.0', label: 'score de défaite', description: 'Une défaite contre un adversaire moins bien classé coûte généralement plus car elle était inattendue.' },
    ]
  },
  { type: 'title' as const, text: 'Ce Que Fait la Formule ELO', level: 2 as const },
  {
    type: 'diagnostic' as const,
    title: 'Les trois étapes derrière chaque résultat',
    description: 'Le calculateur suit l\'idée standard ELO sans vous faire travailler manuellement la formule.',
    items: [
      { label: 'Score attendu', value: 'L\'écart de classement est converti en un score de type probabiliste. Les joueurs mieux classés sont censés obtenir plus de points.' },
      { label: 'Score réel', value: 'Une victoire compte comme 1, un nul comme 0.5 et une défaite comme 0.' },
      { label: 'Variation de classement', value: 'La différence entre le score réel et attendu est multipliée par le facteur K et arrondie en points.' },
    ]
  },
  {
    type: 'table' as const,
    headers: ['Situation', 'Ce qui se passe généralement', 'Pourquoi cela arrive'],
    rows: [
      ['Vous battez un adversaire plus fort', 'Gros gain ELO', 'Votre score réel était bien supérieur aux attentes'],
      ['Vous battez un adversaire plus faible', 'Petit gain ELO', 'La formule s\'attendait déjà à ce que vous gagniez'],
      ['Vous faites nul contre un plus fort', 'Petit gain ELO', 'Un nul peut dépasser votre score attendu'],
      ['Vous perdez contre un plus faible', 'Grosse perte ELO', 'Le résultat était pire que prévu'],
    ]
  },
  { type: 'title' as const, text: 'Choisir le Bon Facteur K pour Votre Système de Classement', level: 2 as const },
  {
    type: 'paragraph' as const,
    html: '<strong>Le facteur K est le bouton de sensibilité d\'un système ELO.</strong> Il ne décide pas qui méritait de gagner. Il décide avec quelle force la table de classement réagit à un résultat. Si votre ligue a beaucoup de matchs et des classements matures, un K plus faible garde la table calme. Si les joueurs sont nouveaux ou les saisons courtes, un K plus élevé aide les classements à se rattraper plus vite.'
  },
  {
    type: 'table' as const,
    headers: ['Facteur K', 'Utiliser pour', 'Ce que l\'utilisateur doit attendre'],
    rows: [
      ['10 à 16', 'Clubs d\'échecs établis, groupes d\'experts, classements de longue durée', 'Classements très stables avec de petits changements après chaque match'],
      ['20 à 32', 'Ligues locales, échelles de club, tournois récurrents', 'Mouvement équilibré qui semble réactif sans surréagir'],
      ['40 à 60', 'Nouveaux joueurs, saisons courtes, échelles esports, groupes informels', 'Correction rapide quand le classement actuel peut être inexact'],
      ['60 et plus', 'Formats expérimentaux ou classements provisoires uniquement', 'Classements très volatils où un match peut fortement modifier la table'],
    ]
  },
  {
    type: 'tip' as const,
    title: 'Meilleure valeur par défaut pour la plupart des utilisateurs',
    html: 'Si vous ne suivez pas une règle officielle de fédération, commencez avec <strong>K 32</strong>. C\'est assez réactif pour les échelles actives et assez stable pour qu\'un résultat chanceux ne réécrive pas complètement le classement.'
  },
  { type: 'title' as const, text: 'Comment Lire le Résultat de Votre Calculateur ELO', level: 2 as const },
  {
    type: 'list' as const,
    items: [
      '<strong>Attendu :</strong> le score que la formule a prédit avant le match. Un score attendu plus élevé signifie que vous étiez favori.',
      '<strong>Variation :</strong> les points ELO exacts ajoutés ou retirés du classement du joueur.',
      '<strong>Nouveau classement :</strong> le classement du joueur après application du résultat.',
      '<strong>Nouvel ELO adverse :</strong> le classement adverse après le mouvement de points opposé.',
      '<strong>Impact du match :</strong> un résumé en langage clair de la force avec laquelle le résultat a déplacé la table.',
    ]
  },
  {
    type: 'comparative' as const,
    columns: 3 as const,
    items: [
      {
        title: 'Échecs et jeux de société',
        description: 'Calculez les classements d\'après-match pour les soirées club, les événements en ligne et les groupes de classement privés.',
        icon: 'mdi:chess-knight',
        points: ['Support victoire-nul-défaite', 'ELO adverse affiché', 'Idéal pour classements long terme']
      },
      {
        title: 'Échelles esports',
        description: 'Mettez à jour les classements des joueurs ou des équipes après des matchs répétés en tête-à-tête où les compétences peuvent changer rapidement.',
        icon: 'mdi:gamepad-variant',
        points: ['Options de facteur K plus élevé', 'Correction rapide du classement', 'Récompenses claires pour surprises']
      },
      {
        title: 'Échelles sportives',
        description: 'Maintenez des classements équitables pour le tennis, le padel, le squash, le tennis de table, le badminton et les ligues locales.',
        icon: 'mdi:tennis',
        points: ['Mises à jour manuelles simples', 'Fonctionne pour les clubs', 'Facile pour les organisateurs']
      },
    ]
  },
  {
    type: 'proscons' as const,
    title: 'Quand l\'ELO est un bon choix de classement',
    items: [
      {
        pro: 'Excellent pour les matchs répétés en tête-à-tête où les joueurs plus forts devraient gagner plus souvent.',
        con: 'Moins idéal pour les sports d\'équipe où la contribution individuelle est difficile à isoler.'
      },
      {
        pro: 'Facile à expliquer car les victoires contre des adversaires plus forts valent plus de points.',
        con: 'Nécessite assez de matchs avant que les classements ne paraissent précis pour les joueurs tout nouveaux.'
      },
      {
        pro: 'Assez simple à maintenir dans un tableur, une échelle de club ou un tableau de ligue.',
        con: 'Les règles du facteur K doivent être cohérentes, sinon les classements deviennent difficiles à faire confiance.'
      },
    ]
  },
  {
    type: 'message' as const,
    title: 'Important pour les organisateurs de ligues',
    html: 'Choisissez votre facteur K avant le début de la saison et publiez-le. Les joueurs font davantage confiance aux tables ELO quand tout le monde sait comment les classements sont calculés avant que les résultats ne soient saisis.'
  },
];

const schemas: [WithContext<FAQPage>, WithContext<HowTo>, WithContext<SoftwareApplication>] = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } }))
  },
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description,
    step: howTo.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text }))
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description,
    applicationCategory: 'SportsApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }
  },
];

export const content: ToolLocaleContent<EloRatingCalculatorUI> = { slug, title, description, ui, seo, faq: faqData, bibliography, howTo, schemas };
