import { bibliographyEntries } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RunningPacePredictorUI } from '../ui';

const slug = 'running-pace-predictor';
const title = 'Running Pace Calculator and Race Time Predictor';
const description =
  'Calculate running pace, estimate finish times for 5K, 10K, Half Marathon, and Marathon using Riegel formula, and generate target training zones.';

const faqData = [
  {
    question: 'How accurate is Peter Riegel formula for predicting marathon race times?',
    answer:
      'Peter Riegel formula T2 = T1 * (D2 / D1)^1.06 provides high accuracy for runners transitioning between aerobically similar events. However, for marathons, accuracy relies heavily on weekly mileage volume, long runs exceeding 25km, and proper carbohydrate fueling strategies during the race.',
  },
  {
    question: 'What is the exact conversion formula between min/km and min/mile?',
    answer:
      'To convert pace from min/km to min/mile, multiply the total seconds per kilometer by 1.609344. For instance, a 5:00 min/km pace equals 300 seconds per kilometer, which converts to 482.8 seconds per mile, or 8:03 min/mile.',
  },
  {
    question: 'Why do predicted race times sometimes seem ambitious for longer distances?',
    answer:
      'The standard exponent 1.06 assumes optimal fatigue resistance. If a runner lacks sufficient endurance base, cardiac drift, glycogen depletion, and muscular fatigue cause performance degradation, making actual marathon times slower than theoretical Riegel predictions.',
  },
  {
    question: 'How should I structure target pace zones for interval and tempo workouts?',
    answer:
      'Interval workouts (VO2 max series) should be executed between 95% and 105% of your current 5K race pace. Tempo runs (lactate threshold) should be sustained at 110% to 120% of your 5K pace, while easy recovery runs should remain at 125% to 145% of 5K pace.',
  },
];

const howToData = [
  {
    name: 'Select Unit Measurement System',
    text: 'Choose between Metric (kilometers, min/km) or Imperial (miles, min/mile) using the top unit toggle switch.',
  },
  {
    name: 'Choose Quick Distance Preset or Custom Input',
    text: 'Click a standard race preset chip (5K, 10K, Half Marathon, 42K) or enter a custom distance in the numeric input field.',
  },
  {
    name: 'Adjust Race Time Benchmark',
    text: 'Use the tactile stepper buttons (-5m, -1m, +1m, +5m) or input fields to set your exact hours, minutes, and seconds achieved in a recent race.',
  },
  {
    name: 'Analyze Race Predictions and Training Zones',
    text: 'Instantly view your average pace, projected finish times across major distances via Riegel formula, and customized training pace ranges for easy, tempo, and series workouts.',
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
  inLanguage: 'en',
};

export const content: ToolLocaleContent<RunningPacePredictorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography: bibliographyEntries,
  seo: [
    {
      type: 'title',
      text: 'Biomechanical Principles of Running Pace and Race Time Prediction',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Calculating running pace and predicting race performance requires an understanding of physiological energy systems, muscle fiber recruitment, and fatigue accumulation across varying race durations. Endurance running performance is primarily dictated by maximal oxygen uptake (VO2 max), lactate threshold, and running economy. When transitioning between short distance events such as a 5K road race and prolonged endurance events like a full marathon, mechanical efficiency and glycogen storage capacity become critical determinants of sustainable pace.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '1.06', label: 'Riegel Exponent' },
        { value: '4 Major', label: 'Standard Distances' },
        { value: '3 Way', label: 'Pace Calculation' },
        { value: '3 Levels', label: 'Training Zones' },
      ],
    },
    {
      type: 'title',
      text: 'Mathematical Mechanics of Riegel Formula',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Formulated by research engineer Peter Riegel in 1977, the Riegel race prediction formula T2 = T1 * (D2 / D1)^1.06 models expected performance decay over extended distances. The fatigue exponent of 1.06 accounts for the average breakdown in aerobic speed experienced by well trained athletes as distance increases. For elite endurance athletes with exceptionally developed aerobic bases, the fatigue exponent may drop closer to 1.03, whereas novice runners lacking long distance mileage adaptation may experience a higher fatigue rate corresponding to exponents of 1.08 to 1.10.',
    },
    {
      type: 'title',
      text: 'Metric vs Imperial Running Units Breakdown',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Kilometers Metric System (min/km)',
          description: 'Standard unit for international track, field, and European road races. Allows granular tracking over 1000-meter splits, facilitating precise interval control and physiological threshold management.',
        },
        {
          title: 'Miles Imperial System (min/mile)',
          description: 'Standard unit for North American and United Kingdom road racing. One mile equals 1.609344 kilometers, providing longer split benchmarks suitable for marathon pacing strategies.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Official Road Race Standard Distances Comparison',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Event Name', 'Metric Distance (km)', 'Imperial Distance (mi)', 'Primary Energy System'],
      rows: [
        ['5K Road Race', '5.00 km', '3.11 mi', '90% Aerobic / 10% Anaerobic Glycolytic'],
        ['10K Road Race', '10.00 km', '6.21 mi', '95% Aerobic / 5% Anaerobic Glycolytic'],
        ['Half Marathon', '21.0975 km', '13.11 mi', '99% Aerobic (Lactate Threshold Dominant)'],
        ['Full Marathon', '42.195 km', '26.22 mi', '100% Aerobic (Fat Oxidation & Glycogen Limited)'],
      ],
    },
    {
      type: 'title',
      text: 'Pacing Strategy and Negative Split Execution',
      level: 2,
    },
    {
      type: 'tip',
      title: 'Optimal Race Execution via Negative Splitting',
      html: 'Statistical analysis of world record performances demonstrates that negative splitting running the second half of a race slightly faster than the first half optimizes metabolic efficiency. Starting a race 2% to 3% slower than target Riegel pace prevents premature intramuscular acidosis and conserves liver and muscle glycogen stores for the closing miles.',
    },
    {
      type: 'title',
      text: 'Structuring Scientific Training Zones',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Effective endurance training requires deliberate polarization of training intensity across distinct physiological zones. Easy base runs promote mitochondrial biogenesis and capillary density, tempo workouts elevate lactate threshold clearance rate, and high intensity interval series maximize VO2 max ceiling. Utilizing personalized pace ranges calculated from recent race performances prevents overtraining while maximizing adaptation stimulus.',
    },
  ],
  ui: {
    title: 'Running Pace & Race Predictor',
    subtitle: 'Calculate workout paces and predict target finish times with Riegel formula',
    paceCalculatorTitle: 'Pace, Distance & Time Calculator',
    racePredictorTitle: 'Race Time Predictor',
    trainingZonesTitle: 'Target Training Pace Zones',
    distanceLabel: 'Distance',
    timeLabel: 'Time',
    paceLabel: 'Pace',
    hoursLabel: 'Hours',
    minutesLabel: 'Minutes',
    secondsLabel: 'Seconds',
    unitKm: 'Kilometers',
    unitMiles: 'Miles',
    paceUnitKm: 'min/km',
    paceUnitMiles: 'min/mile',
    presetsTitle: 'Quick Distance Presets',
    calculateButton: 'Calculate Pace & Predictions',
    resetButton: 'Reset Calculator',
    recentRaceTitle: 'Recent Performance Distance & Time',
    predictedTimesTitle: 'Estimated Finish Times across Distances',
    distanceHeader: 'Distance',
    estimatedTimeHeader: 'Estimated Time',
    targetPaceHeader: 'Target Pace',
    trainingZoneHeader: 'Training Zone',
    paceRangeHeader: 'Pace Range',
    zoneEasy: 'Easy & Recovery Runs',
    zoneEasyDesc: 'Aerobic base building and recovery workouts',
    zoneTempo: 'Tempo & Fartlek',
    zoneTempoDesc: 'Lactate threshold enhancement and sustained race effort',
    zoneIntervals: 'Intervals & Speed Series',
    zoneIntervalsDesc: 'VO2 max development and speed endurance workouts',
    riegelExplanation: 'Predictions use Riegel Formula T2 = T1 * (D2 / D1)^1.06 based on your recent performance.',
    seo: {
      title: 'Running Pace Calculator and Race Time Predictor',
      description: 'Calculate running pace, estimate finish times for 5K, 10K, Half Marathon, and Marathon using Riegel formula, and generate target training zones.',
      h1: 'Running Pace Calculator and Race Time Predictor',
      intro: 'Accurate pace calculation and race time prediction are essential tools for endurance runners. Utilizing established biomechanical formulas, this tool converts time, distance, and pace while estimating performance metrics across classic distances.',
      statsTitle: 'Endurance Performance Benchmarks',
      stat1Label: 'Riegel Exponent',
      stat1Value: '1.06',
      stat2Label: 'Standard Distances',
      stat2Value: '4 Major',
      stat3Label: 'Pace Calculation',
      stat3Value: '3 Way',
      stat4Label: 'Training Zones',
      stat4Value: '3 Levels',
      comparativeTitle: 'Pace Units Comparison',
      comparativeItem1Title: 'Kilometers Metric System',
      comparativeItem1Desc: 'Standard measurement for European, international, and Olympic events focusing on precise 1000m intervals.',
      comparativeItem2Title: 'Miles Imperial System',
      comparativeItem2Desc: 'Standard measurement for US and UK road races, where 1 mile equals approximately 1.60934 kilometers.',
      tableTitle: 'Standard Race Distances Overview',
      tableCol1: 'Event',
      tableCol2: 'Kilometers',
      tableCol3: 'Miles',
      tableRow1Col1: '5K Road Race',
      tableRow1Col2: '5.00 km',
      tableRow1Col3: '3.11 mi',
      tableRow2Col1: '10K Road Race',
      tableRow2Col2: '10.00 km',
      tableRow2Col3: '6.21 mi',
      tableRow3Col1: 'Half Marathon',
      tableRow3Col2: '21.10 km',
      tableRow3Col3: '13.11 mi',
      tipTitle: 'Pacing Strategy Recommendation',
      tipText: 'Avoid starting races significantly faster than your target Riegel pace. Negative splitting, where the second half is completed slightly faster than the first, consistently yields superior finish times.',
      faqTitle: 'Frequently Asked Questions',
      faq1Q: 'How accurate is Riegel Formula for marathon predictions?',
      faq1A: 'Riegel formula assumes adequate aerobic endurance training. For long distances like marathons, actual times depend heavily on mileage volume and fueling strategy.',
      faq2Q: 'What is the difference between min/km and min/mile?',
      faq2A: 'Min/km indicates minutes required per kilometer, while min/mile measures pace per mile. Multiply min/km by 1.60934 to find the corresponding min/mile value.',
      glossaryTitle: 'Running Terminology',
      term1Name: 'Riegel Formula',
      term1Def: 'A mathematical formula developed by Peter Riegel to predict race times across varying distances based on a recent performance.',
      term2Name: 'Lactate Threshold',
      term2Def: 'The exercise intensity at which lactate accumulates in the bloodstream faster than it can be cleared.',
    },
  },
};
