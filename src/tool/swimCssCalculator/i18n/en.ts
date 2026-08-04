import { bibliographyEntries } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SwimCssCalculatorUI } from '../ui';

const slug = 'css-swim-calculator';
const title = 'Critical Swim Speed CSS Calculator';
const description = 'Calculate your Critical Swim Speed threshold pace per 100m or 100yd from 400m and 200m swim tests. Generate target splits for pool sets.';

const faqData = [
  {
    question: 'How often should swimmers re-test their Critical Swim Speed?',
    answer: 'Swimmers and triathletes should perform the 400m and 200m CSS benchmark protocol every 4 to 6 weeks during training macrocycles to adjust target interval times as aerobic fitness and stroke mechanics improve.',
  },
  {
    question: 'Can CSS be calculated using yards instead of meters?',
    answer: 'Yes. The Critical Swim Speed mathematical formula applies identically to short course yard pools. Switch the pool distance toggle to yards to receive pace recommendations per 100 yards and split target times.',
  },
  {
    question: 'Why is a 400m and 200m test combination used for CSS calculation?',
    answer: 'The 400m test measures continuous aerobic endurance capacity, while the 200m test captures maximal anaerobic swimming speed. The mathematical slope between these two maximal efforts isolates functional aerobic threshold velocity while eliminating anaerobic work capacity.',
  },
  {
    question: 'How should CSS target paces be applied during pool interval sets?',
    answer: 'For CSS threshold sets such as ten repetitions of 100 meters, aim to hit your exact calculated 100m CSS pace on every repetition with brief rest intervals of 15 to 20 seconds. Consistent pacing prevents early lactic acid buildup.',
  },
];

const howToData = [
  {
    name: 'Select Pool Measurement System',
    text: 'Choose between Metric (meters, 25m or 50m pool) or Imperial (yards, 25yd pool) using the top unit toggle switch.',
  },
  {
    name: 'Enter 400m Benchmark Test Time',
    text: 'Input the minutes and seconds recorded from your maximum effort 400 meter or 400 yard continuous swim test.',
  },
  {
    name: 'Enter 200m Benchmark Test Time',
    text: 'Input the minutes and seconds recorded from your maximum effort 200 meter or 200 yard continuous swim test.',
  },
  {
    name: 'Calculate and Review Target Splits',
    text: 'Click Calculate to view your aerobic speed in m/s or yd/s, base 100m pace, and split targets for 50, 100, 200, and 400 meter series.',
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

const ui: SwimCssCalculatorUI = {
  title: 'Critical Swim Speed CSS Calculator',
  subtitle: 'Calculate your swim threshold pace per 100 and target splits across intensity zones.',
  unitLabel: 'Pool Distance Unit',
  unitMeters: 'Meters (25m / 50m pool)',
  unitYards: 'Yards (25yd pool)',
  t400Label: '400m / 400yd Time Test',
  t200Label: '200m / 200yd Time Test',
  minutesLabel: 'Minutes',
  secondsLabel: 'Seconds',
  calculateButton: 'Calculate CSS and Splits',
  resetButton: 'Reset Defaults',
  cssResultTitle: 'Critical Swim Speed Results',
  cssSpeedLabel: 'Aerobic Velocity',
  cssPace100Label: 'CSS Pace per 100',
  lapPaceLabel: '25m / 25yd Lap Target',
  unitMeterPerSec: 'm/s',
  unitYardPerSec: 'yd/s',
  pace100mUnit: '/100m',
  pace100ydUnit: '/100yd',
  trainingZonesTitle: 'Target Pool Pacing Matrix',
  zoneHeader: 'Intensity Zone',
  pace100Header: 'Target Pace / 100',
  split50Header: '50 Split',
  split100Header: '100 Split',
  split200Header: '200 Split',
  split400Header: '400 Split',
  zoneAerobic: 'Aerobic Endurance',
  zoneAerobicDesc: 'For long distance aerobic sets and warmups (~104% CSS pace)',
  zoneAerobicRest: 'Rest: 10s - 15s per set',
  zoneCss: 'CSS Threshold',
  zoneCssDesc: 'Target pace for threshold sets and race pace endurance (~100% CSS pace)',
  zoneCssRest: 'Rest: 15s - 20s per set',
  zoneVo2Max: 'VO2 Max Speed',
  zoneVo2MaxDesc: 'High intensity interval training (~96% CSS pace)',
  zoneVo2MaxRest: 'Rest: 30s - 45s per set',
  invalidNotice: 'Please ensure 400m test time is strictly greater than 200m test time.',
  copySplitsButton: 'Copy Split Times',
  copiedNotice: 'Splits copied to clipboard',
  seo: {
    title: 'Critical Swim Speed CSS Calculator Swim Paces Matrix',
    description: 'Calculate your Critical Swim Speed CSS threshold pace per 100m or 100yd from 400m and 200m swim tests. Generate target splits for pool sets.',
    h1: 'Critical Swim Speed CSS Calculator and Swimming Pace Matrix',
    intro: 'Critical Swim Speed is a gold standard metric used by swimmers, triathletes, and endurance coaches to structure pool training sessions based on functional aerobic threshold. By performing two maximal effort benchmark swim tests over 400 meters and 200 meters, this calculator computes your theoretical aerobic swimming velocity in meters or yards per second and translates it into an actionable 100m pace standard.',
    statsTitle: 'Key Benchmark Indicators',
    stat1Label: 'Benchmark Test 1',
    stat1Value: '400m All Out Effort',
    stat2Label: 'Benchmark Test 2',
    stat2Value: '200m All Out Effort',
    stat3Label: 'Threshold Indicator',
    stat3Value: '100m Base CSS Pace',
    stat4Label: 'Training Application',
    stat4Value: 'Target Pool Pace Clock Splits',
    comparativeTitle: 'CSS Pacing vs Fixed Heart Rate Swimming Zones',
    comparativeItem1Title: 'Critical Swim Speed CSS Approach',
    comparativeItem1Desc: 'Measures functional swimming velocity directly from pool performance without requiring water resistance heart rate monitors. It reflects actual water propulsion efficiency, technique degradation under fatigue, and turn mechanics.',
    comparativeItem2Title: 'Traditional Heart Rate Pacing',
    comparativeItem2Desc: 'Relies on wrist or chest sensors that often suffer from water interference or lag. HR metrics do not account for stroke efficiency changes or hydrodynamic drag improvements in competitive swimmers.',
    tableTitle: 'Intensity Zone Split Reference Breakdown',
    tableCol1: 'Training Zone',
    tableCol2: 'Primary Physiological Adaptation',
    tableCol3: 'Recommended Interval Distances',
    tableRow1Col1: 'Aerobic Endurance',
    tableRow1Col2: 'Capillary density enhancement, lipid oxidation, and sustainable stroke rhythm.',
    tableRow1Col3: '400m to 800m repetitions with short rest periods of 10 to 15 seconds.',
    tableRow2Col1: 'CSS Threshold',
    tableRow2Col2: 'Lactate clearance capacity and aerobic power maintenance.',
    tableRow2Col3: '100m to 300m repetitions with 15 to 20 seconds rest between sets.',
    tableRow3Col1: 'VO2 Max Speed',
    tableRow3Col2: 'Maximum oxygen uptake, neuromuscular stroke rate, and high speed maintenance.',
    tableRow3Col3: '50m to 100m explosive intervals with equal or double rest intervals.',
    tipTitle: 'Coaching Tip for Accurate CSS Testing',
    tipText: 'Ensure complete recovery between the 400m and 200m test efforts, preferably testing on separate days or allowing at least 20 to 30 minutes of easy active recovery swimming between efforts. Pace the 400m test evenly to avoid premature muscle glycogen depletion in the initial 100 meters.',
    faqTitle: 'Frequently Asked Questions About Critical Swim Speed',
    faq1Q: 'How often should swimmers re-test their Critical Swim Speed?',
    faq1A: 'Swimmers and triathletes should perform the 400m and 200m CSS benchmark protocol every 4 to 6 weeks during training macrocycles to adjust target interval times as aerobic fitness and stroke mechanics improve.',
    faq2Q: 'Can CSS be calculated using yards instead of meters?',
    faq2A: 'Yes. The Critical Swim Speed mathematical formula applies identically to short course yard pools. Switch the pool distance toggle to yards to receive pace recommendations per 100 yards and split target times.',
    glossaryTitle: 'Swimming Physiology Glossary',
    term1Name: 'Critical Swim Speed',
    term1Def: 'The theoretical maximum swimming velocity that can be maintained continuously without exhaustion, approximating the anaerobic threshold in water.',
    term2Name: 'Pace Clock Split',
    term2Def: 'The designated elapsed target time a swimmer must hit at pool wall turns for 50, 100, 200, or 400 meter splits during interval training sets.',
  },
};

export const content: ToolLocaleContent<SwimCssCalculatorUI> = {
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
      text: 'Biomechanical Principles of Critical Swim Speed',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Critical Swim Speed represents the slope of the linear relationship between swimming distance and time. Developed in exercise physiology research by Wakayoshi et al., CSS isolates functional aerobic capacity by subtracting the 200-meter effort from the 400-meter effort. This mathematical derivation eliminates the contribution of initial anaerobic work capacity, yielding a precise aerobic velocity threshold that swimmers can maintain for continuous intervals without cumulative lactate accumulation.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '400m & 200m', label: 'Standard Test Pair' },
        { value: '100m Base', label: 'Pace Standard' },
        { value: '3 Zones', label: 'Intensity Matrix' },
        { value: '4 Splits', label: 'Pool Clock Targets' },
      ],
    },
    {
      type: 'title',
      text: 'Critical Swim Speed vs Heart Rate Training in Swimming',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Critical Swim Speed Pace Pacing',
          description: 'Uses direct swimming velocity measured in the water. Accounts for propulsion technique, turn mechanics, and streamlined body position without sensor delay or water interference.',
        },
        {
          title: 'Heart Rate Swimming Pacing',
          description: 'Relies on chest strap or optical wrist sensors that suffer from water lag, cardiovascular drift, and temperature variation in swimming pools.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Swim Training Intensity Zones Reference Table',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Zone Name', 'Pace Relative to CSS', 'Target Training Adaptation', 'Recommended Rest Interval'],
      rows: [
        ['Aerobic Endurance', '104% of CSS Pace Time', 'Capillary density enhancement and long aerobic sets', '10 to 15 seconds rest'],
        ['CSS Threshold', '100% of CSS Pace Time', 'Lactate clearance capacity and aerobic power maintenance', '15 to 20 seconds rest'],
        ['VO2 Max Speed', '96% of CSS Pace Time', 'Maximal oxygen uptake ceiling and neuromuscular speed', '30 to 45 seconds rest'],
      ],
    },
    {
      type: 'title',
      text: 'Coaching Execution for Pacing Sets',
      level: 2,
    },
    {
      type: 'tip',
      title: 'Pacing Strategy for Pool Sets',
      html: 'When executing threshold interval sets, maintain strict pace clock adherence on every 50m or 100m split. Swimming the first 50 meters 2 seconds faster than calculated CSS depletes anaerobic stores prematurely and causes severe velocity degradation in later repetitions.',
    },
  ],
  ui,
};
