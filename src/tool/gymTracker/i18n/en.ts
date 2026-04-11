import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GymTrackerUI } from '../ui';

const slug = 'gym-workout-tracker';
const title = 'Gym Workout Tracker: Progress Charts and Strength Log';
const description =
  'Log your lifts, select exercises, and visualize your progress with strength charts. Optimize your progressive overload in the gym.';

const faqData = [
  {
    question: 'What is the purpose of workout tracking?',
    answer:
      'It serves to apply progressive overload scientifically. By knowing exactly how much you lifted in the previous session, you can try to beat that mark, guaranteeing muscle growth and long-term strength gains.',
  },
  {
    question: 'What data should I record?',
    answer:
      'The most important thing is the maximum weight (top set) you achieved with good form for a set number of repetitions. Our tool focuses on recording the weight per session to generate your progress chart.',
  },
  {
    question: 'How are the charts interpreted?',
    answer:
      'An upward line indicates you are progressing. A flat line (plateau) suggests you need to adjust your volume, intensity, or recovery. A persistent downward line may be a sign of overtraining.',
  },
  {
    question: 'Where is my data stored?',
    answer:
      'Data is stored locally in your browser (Local Storage). This means your privacy is total and you do not need to create an account, but if you clear browser data, the history will be lost.',
  },
];

const howToData = [
  {
    name: 'Select the exercise',
    text: 'Choose from fundamental lifts like Squat, Bench Press, or Deadlift in the dropdown menu.',
  },
  {
    name: 'Enter the weight',
    text: 'After your heaviest set, enter the kilograms/pounds lifted in the corresponding field.',
  },
  {
    name: 'Press Add',
    text: 'Save your mark. The system will automatically update your history and progress chart.',
  },
  {
    name: 'Analyze your evolution',
    text: 'Consult the chart periodically to identify plateaus and motivate yourself by seeing your real growth in strength.',
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
  applicationCategory: 'HealthApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'en',
};

export const content: ToolLocaleContent<GymTrackerUI & Record<string, string>> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Scientific References',
  bibliography: [
    {
      name: 'Journal of Strength and Conditioning Research - Progressive Overload Study',
      url: 'https://journals.lww.com/nsca-jscr/Fulltext/2010/10000/The_Mechanisms_of_Muscle_Hypertrophy_and_Their.40.aspx',
    },
    {
      name: 'National Academy of Sports Medicine - Progressive Overload Explained',
      url: 'https://blog.nasm.org/progressive-overload-explained',
    },
    {
      name: 'Science of Strength - Data Tracking in Resistance Training',
      url: 'https://pubmed.ncbi.nlm.nih.gov/30558493/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Gym Workout Tracking: The Key to Real Progress',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'In the world of fitness and bodybuilding, there is a fundamental principle that separates those who get amazing results from those who plateau quickly: <strong>progressive overload</strong>. However, it is impossible to apply this principle effectively if you do not keep a detailed record of your lifts. In this guide, we will explore why tracking your workout is vital, how to use our <strong>gym workout tracker</strong> to maximize your gains, and the scientific foundations that support this practice.',
    },
    {
      type: 'title',
      text: 'What is Progressive Overload?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Progressive overload is the gradual increase of stress applied to the body during physical exercise. For a muscle to grow or strengthen, it must be subjected to a stimulus greater than what it is accustomed to. If you go to the gym and always lift the same weight, with the same repetitions and the same rest time, your body will have no biological reason to adapt and grow.',
    },
    {
      type: 'list',
      items: [
        'Weight increase: Lifting more weight than the previous session.',
        'Repetition increase: Doing more reps with the same weight.',
        'Volume increase: Performing more total sets per muscle group.',
        'Rest reduction: Doing the same work in less time.',
        'Form improvement: Performing the exercise with superior control and greater range of motion.',
      ],
    },
    {
      type: 'title',
      text: 'Why Manual Logging Superior to Memory',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Many athletes make the mistake of trusting their memory to remember how much they lifted last week. However, in a typical workout that includes between 5 and 10 different exercises, it is very easy to forget if you did 180 lbs or 185 lbs on the press, or if you managed 10 reps or 12. This lack of precision leads to mediocrity.',
    },
    {
      type: 'tip',
      title: 'The Power of Visualizing Progress',
      html: 'Seeing an upward line on a chart gives you the boost needed to try that extra rep that marks the difference between stagnation and consistent muscle growth.',
    },
    {
      type: 'title',
      text: 'Fundamental Exercises for Tracking',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'While all exercises are valuable, certain compound lifts offer the best view of your overall strength and physical development. These are the ones you should prioritize in your tracking: <strong>Bench Press</strong> for horizontal push, <strong>Overhead Press</strong> for vertical push, <strong>Pull-ups</strong> for traction, and <strong>Hip Thrust</strong> for glutes.',
    },
    {
      type: 'title',
      text: 'How to Analyze Your Progress Charts',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Once you have recorded several workouts, you will start to see patterns: a <strong>constant upward line</strong> indicates the right path, a <strong>plateau</strong> suggests you need to adjust your volume or rest, and a <strong>downward trend</strong> can be a sign of accumulated fatigue.',
    },
    {
      type: 'title',
      text: 'The Psychology of Success in the Gym',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Training is as much a mental challenge as a physical one. By using a visual tool that shows you that today you are 1% stronger than fifteen days ago, you are feeding your dopamine reward system. This creates a positive feedback loop that turns training into a sustainable habit.',
    },
  ],
  ui: {
    exerciseLabel: 'Exercise',
    pushCategory: 'Push',
    pullCategory: 'Pull',
    gluteCategory: 'Glute',
    customExerciseCategory: 'Custom',
    addCustomExerciseTitle: 'Add custom exercise',
    newExerciseLabel: 'New exercise',
    exercisePlaceholder: 'Exercise name...',
    addBtn: 'Add',
    registerWeightLabel: 'Log Weight',
    weightPlaceholder: '00.0',
    startBtn: 'Start',
    resetBtn: 'Reset',
    okBtn: 'OK',
    noData: 'No data',
    recordLabel: 'Record',
    lastLabel: 'Last',
    historyTitle: 'Logs',
    exportBtn: 'Export',
    confirmDeleteTitle: 'Clear history?',
    confirmDeleteText: 'This action cannot be undone. All logs for the selected exercise will be deleted.',
    deleteBtn: 'Delete',
    cancelBtn: 'Cancel',
    units: 'lbs',

    benchPress: 'Bench Press',
    overheadPress: 'Overhead Press',
    pushPress: 'Push Press',
    inclineDbPress: 'Incline DB Press',
    dipsTriceps: 'Triceps Dips',
    tricepsExtensions: 'Cable Triceps Extensions',
    pullUp: 'Pull-ups',
    barbellRow: 'Barbell Row',
    latPulldown: 'Lat Pulldown',
    dbRow: 'Dumbbell Row',
    facePulls: 'Face Pulls',
    bicepsCurl: 'Barbell Biceps Curl',
    hipThrust: 'Hip Thrust',
    rdl: 'Romanian Deadlift',
    lunges: 'Lunges',
    gluteKick: 'Cable Glute Kickback',
    hipAbduction: 'Machine Hip Abduction',
    stepUp: 'Step Up',
  },
};
