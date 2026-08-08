import type { ToolLocaleContent } from '../../../types';
import type { RetroSfxGeneratorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<RetroSfxGeneratorUI> = {
  slug: 'generateur-effets-sonores-retro',
  title: 'Generateur d Effets Sonores Retro pour Jeux',
  description: 'Creez de courts effets sonores retro pour vos jeux dans votre navigateur avec des prereglages, oscilliscope en direct et export WAV.',
  ui: {
    waveformLabel: 'Forme d onde',
    waveformSquare: 'Carree',
    waveformSawtooth: 'Dent de scie',
    waveformSine: 'Sinusoidale',
    waveformTriangle: 'Triangulaire',
    waveformNoise: 'Bruit',
    presetLabel: 'Banque de sons rapides',
    presetExplosion: 'Explosion',
    presetLaser: 'Laser',
    presetJump: 'Saut',
    presetCoin: 'Piece',
    presetPowerUp: 'Bonus',
    frequencyLabel: 'Frequence initiale',
    frequencyEndLabel: 'Frequence finale',
    durationLabel: 'Duree',
    decayLabel: 'Declin',
    sweepLabel: 'Balayage de hauteur',
    vibratoLabel: 'Vibrato',
    lowpassLabel: 'Passe-bas',
    highpassLabel: 'Passe-haut',
    noiseMixLabel: 'Melange de bruit',
    toneSection: 'Tonalite',
    dynamicsSection: 'Dynamique',
    filterSection: 'Texture',
    playButton: 'Jouer le son',
    stopButton: 'Arreter',
    downloadButton: 'Telecharger WAV',
    randomizeButton: 'Aleatoire',
    resetButton: 'Reinitialiser',
    waveformPreviewLabel: 'Forme d onde en direct',
    generatedLabel: 'Genere',
    statusReady: 'Pret pour l ecoute',
    statusPlaying: 'Lecture dans votre navigateur',
    statusStopped: 'Lecture arretee',
    statusDownloaded: 'WAV telecharge',
    statusAudioBlocked: 'La lecture necessite un onglet autorisant l audio',
    statusGenerating: 'Rendu du son en cours',
    presetHint: 'Choisissez un point de depart puis ajustez les parametres.',
    monoWavHint: '44.1 kHz · WAV mono 16 bits',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Concevez l audio de votre jeu pendant une game jam directement dans votre navigateur',
    },
    {
      type: 'paragraph',
      html: 'Un bon effet sonore retro doit communiquer une action rapidement. Une montee de ton dynamique evoque un saut ou un bonus, un balayage descendant rapel un laser, et un bruit sourd avec declin simule une explosion. Ce generateur permet de personnaliser ces signaux en temps réel.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Prereglages sonores', value: '5 modeles de base' },
        { label: 'Formes d onde', value: '5 types d oscillateur' },
        { label: 'Format d export', value: 'WAV PCM 16 bits' },
        { label: 'Traitement', value: 'Navigateur local' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Explication des parametres',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Hauteur et mouvement',
          description: 'Les parametres de hauteur definissent l identite du son.',
          points: [
            'La frequence initiale fixe le ton de depart',
            'Le balayage modifie la frequence vers la valeur finale',
            'Le vibrato ajoute une modulation sinusoidale douce',
            'Les oscillateurs generent diverses textures harmoniques',
          ],
        },
        {
          title: 'Forme et texture',
          description: 'La dynamique et les filtres faconnent l enveloppe.',
          points: [
            'La duree definit le temps total de l effet',
            'Le declin reduit l amplitude au cours du temps',
            'Le filtre passe-bas adoucit les hautes frequences',
            'Le filtre passe-haut et le bruit apportent du grain',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Recettes pratiques pour evenements de jeu',
    },
    {
      type: 'table',
      headers: ['Evenement', 'Prereglage conseille', 'Premier ajustement a tester'],
      rows: [
        ['Explosion', 'Bruit a basse frequence', 'Augmenter la duree et baisser le passe-bas'],
        ['Laser', 'Dent de scie avec balayage descendant', 'Raccourcir la duree et monter le passe-haut'],
        ['Saut', 'Carree avec balayage ascendant', 'Reduire le declin pour garder la montee claire'],
        ['Piece', 'Carree avec court balayage ascendant', 'Augmenter la frequence initiale pour un son brillant'],
        ['Bonus', 'Triangulaire avec long balayage ascendant', 'Ajouter un peu de vibrato pour donner du mouvement'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Pourquoi le format WAV est ideal pour le prototypage',
    },
    {
      type: 'paragraph',
      html: 'Le format WAV est directement compatible avec la plupart des moteurs de jeu et logiciels d edition sans necessiter de bibliotheques tierces.',
    },
    {
      type: 'tip',
      title: 'Tester au volume reel du jeu',
      html: 'Un son tres fort en solo peut devenir agressif s il est repete frequemment. Testez directement dans votre moteur de jeu.',
    },
  ],
  faqTitle: 'Foire Aux Questions',
  faq: [
    {
      question: 'Mes sons sont-ils envoyes sur un serveur ?',
      answer: 'Non. Tout le traitement est effectue localement dans votre navigateur.',
    },
    {
      question: 'Puis-je utiliser ces sons dans mon jeu ?',
      answer: 'Oui, ces sons sont conçus pour vos prototypes et jeux de jam.',
    },
    {
      question: 'Comment fonctionne le balayage de hauteur ?',
      answer: 'Le curseur calcule la frequence finale proportionnellement a la frequence de depart.',
    },
    {
      question: 'Que faire en cas de silence ?',
      answer: 'Verifiez que l audio est autorise dans les parametres de votre navigateur.',
    },
  ],
  howTo: [
    {
      name: 'Choisir un prereglage',
      text: 'Selectionnez Explosion, Laser, Saut, Piece ou Bonus.',
    },
    {
      name: 'Ajuster le signal',
      text: 'Modifiez la forme d onde, la hauteur, la duree et les filtres.',
    },
    {
      name: 'Ecouter le rendu',
      text: 'Cliquez sur Jouer le son pour tester le resultat.',
    },
    {
      name: 'Telecharger le WAV',
      text: 'Cliquez sur Telecharger WAV pour obtenir le fichier audio.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Generateur d Effets Sonores Retro pour Jeux',
      applicationCategory: 'MultimediaApplication',
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
          name: 'Mes sons sont-ils envoyes sur un serveur ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Non. Tout le traitement est effectue localement dans votre navigateur.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Comment creer un effet sonore retro',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Choisir un prereglage',
          text: 'Selectionnez un son de base.',
        },
      ],
    },
  ],
  bibliographyTitle: 'References',
  bibliography: bibliographyEntries,
};
