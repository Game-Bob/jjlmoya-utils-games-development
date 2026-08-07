import type { ToolLocaleContent } from '../../../types';
import type { AudioLoopPointFinderUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<AudioLoopPointFinderUI> = {
  slug: 'detecteur-points-boucle-audio-jeux',
  title: 'Détecteur de Points de Boucle Audio et Injecteur de Métadonnées',
  description: 'Localisez les points de boucle audio exacts, ajustez les passages par zéro pour éliminer les clics et exportez des fichiers WAV avec des métadonnées LOOPSTART et LOOPEND.',
  ui: {
    title: 'Détecteur de Points de Boucle Audio pour Jeux',
    subtitle: 'Analyseur de forme d onde interactif, détecteur de passage par zéro et marqueur de métadonnées WAV',
    dropzoneTitle: 'Déposez le fichier audio ici ou cliquez pour parcourir',
    dropzoneSubtitle: 'Prend en charge les pistes audio WAV, OGG, MP3 et FLAC',
    dropzoneButton: 'Sélectionner le Fichier Audio',
    audioInfoTitle: 'Propriétés de la Piste Audio',
    durationLabel: 'Durée',
    sampleRateLabel: 'Taux d Échantillonnage',
    channelsLabel: 'Canaux Audio',
    totalSamplesLabel: 'Nombre Total d Échantillons',
    loopControlsTitle: 'Configuration de la Région de Boucle',
    loopStartLabel: 'Marqueur de Début de Boucle',
    loopEndLabel: 'Marqueur de Fin de Boucle',
    loopDurationLabel: 'Durée de la Boucle',
    zeroCrossingLabel: 'Ajustement Passage par Zéro',
    snapZeroCrossingButton: 'Ajuster au Passage par Zéro le Plus Proche',
    playLoopButton: 'Aperçu de la Boucle Fluide',
    pauseLoopButton: 'Mettre en Pause',
    stopLoopButton: 'Arrêter la Lecture',
    exportWavButton: 'Exporter WAV avec Métadonnées',
    sampleUnitLabel: 'Échantillons',
    secondUnitLabel: 'Secondes',
    zoomLabel: 'Zoom Forme d Onde',
    zoomInButton: 'Zoom Avant',
    zoomOutButton: 'Zoom Arrière',
    resetZoomButton: 'Réinitialiser la Vue',
    noFileSelected: 'Aucun fichier audio chargé pour le moment',
    invalidAudioFile: 'Échec du décodage du fichier audio',
    presetsTitle: 'Préréglages Rapides',
    presetFullTrack: 'Boucle Piste Entière',
    presetIntroCut: 'Ignorer 10% d Intro',
    presetMiddleLoop: 'Section Centrale 50%',
    statusLooping: 'Lecture en Boucle Active',
    statusPaused: 'Lecture en Pause',
    statusReady: 'Audio Chargé et Prêt',
    statusLoaded: 'Piste audio chargée avec succès',
    statusDecodeError: 'Erreur lors du décodage du fichier audio',
    statusSnapped: 'Marqueurs ajustés aux passages par zéro',
    statusStopped: 'Lecture arrêtée',
    statusExported: 'Fichier WAV exporté avec métadonnées intégrées',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Bouclage Audio Fluide et Alignement d Échantillons pour Jeux Vidéo',
    },
    {
      type: 'paragraph',
      html: 'Obtenir une lecture continue de musique de fond dans les jeux vidéo nécessite un alignement exact des échantillons aux limites de la boucle. Les moteurs de jeu modernes comme Unity, Godot, Unreal Engine, FMOD et Wwise utilisent des métadonnées de boucle intégrées telles que LOOPSTART et LOOPEND.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Précision d Échantillonnage', value: '44.1 kHz / 48 kHz' },
        { label: 'Seuil de Passage par Zéro', value: 'Amplitude 0.00' },
        { label: 'Standard de Métadonnées', value: 'RIFF smpl et INFO' },
        { label: 'Réduction des Clics', value: '100% Phase Alignée' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Stratégie de Passage par Zéro',
    },
    {
      type: 'tip',
      title: 'Réduction des Clics Acoustiques',
      html: 'Alignez toujours les marqueurs de début et de fin de boucle sur les passages par zéro positifs. Cela évite les bruits de clic et le déplacement brusque de la membrane du haut-parleur.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Tableau Comparatif de Compatibilité',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Marqueur de Bloc RIFF smpl',
          description: 'Métadonnées binaires intégrées dans l en-tête WAV',
          points: [
            'Prise en charge native par Godot, FMOD, Wwise et GameMaker',
            'Précision exacte à l échantillon près sans dérive',
            'Incorpore les marqueurs directement dans le fichier WAV',
            'Élimine les clics acoustiques avec l ajustement par zéro',
          ],
        },
        {
          title: 'Découpage Audio Manuel',
          description: 'Séparation de l intro et de la boucle en fichiers distincts',
          points: [
            'Utilisé par les lecteurs multimédias basiques',
            'Sujet aux micro-pauses et imprécisions temporelles',
            'Nécessite la gestion de plusieurs fichiers dans le projet',
            'Risque élevé de clics lors des transitions',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Tableau de Référence des Taux d Échantillonnage',
    },
    {
      type: 'table',
      headers: ['Taux d Échantillonnage', 'Échantillons par Seconde', 'Domaine d Utilisation Recommandé', 'Résolution Temporelle'],
      rows: [
        ['44,100 Hz', '44,100', 'Qualité CD Standard pour Musique de Jeu', '0.0226 ms par échantillon'],
        ['48,000 Hz', '48,000', 'Jeux Modernes sur PC et Consoles', '0.0208 ms par échantillon'],
        ['96,000 Hz', '96,000', 'Fichiers Audio Master Haute Définition', '0.0104 ms par échantillon'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Injection Automatique de Métadonnées en Octets',
    },
    {
      type: 'paragraph',
      html: 'Lors de l export des pistes depuis cet outil, les structures de métadonnées sont injectées directement dans l en-tête RIFF du fichier WAV. L outil crée un bloc d échantillon standard et un bloc LIST INFO.',
    },
  ],
  faqTitle: 'Foire Aux Questions',
  faq: [
    {
      question: 'Que sont les balises de métadonnées LOOPSTART et LOOPEND?',
      answer: 'LOOPSTART et LOOPEND sont des champs de métadonnées mesurés en nombre absolu d échantillons.',
    },
    {
      question: 'Pourquoi des clics audibles se produisent-ils aux points de boucle?',
      answer: 'Des clics se produisent lorsque la forme d onde à la fin ne correspond pas à l amplitude ou à la phase du début.',
    },
    {
      question: 'Mon fichier audio d origine est-il téléversé?',
      answer: 'Non. Tout le traitement et le décodage s effectuent localement dans la mémoire de votre navigateur.',
    },
  ],
  howTo: [
    {
      name: 'Charger la Piste Audio',
      text: 'Glissez-déposez votre fichier de musique ou sélectionnez un fichier WAV, OGG, MP3 ou FLAC.',
    },
    {
      name: 'Positionner les Marqueurs',
      text: 'Ajustez le début et la fin de la boucle via la vue de forme d onde ou les champs numériques.',
    },
    {
      name: 'Ajuster aux Passages par Zéro',
      text: 'Cliquez sur le bouton d ajustement au passage par zéro.',
    },
    {
      name: 'Tester et Exporter',
      text: 'Écoutez la boucle fluide puis exportez le fichier WAV avec métadonnées.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Détecteur de Points de Boucle Audio pour Jeux',
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
          name: 'Que sont les balises de métadonnées LOOPSTART et LOOPEND?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'LOOPSTART et LOOPEND sont des champs de métadonnées mesurés en nombre d échantillons.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Comment trouver et injecter des points de boucle audio',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Charger la Piste Audio',
          text: 'Glissez-déposez votre fichier de musique ou sélectionnez un fichier audio.',
        },
      ],
    },
  ],
  bibliographyTitle: 'Références et Lectures Complémentaires',
  bibliography: bibliographyEntries,
};
