import { bibliographyEntries } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RunningPacePredictorUI } from '../ui';

const slug = 'running-pace-predictor';
const title = '跑步配速计算器与完赛成绩预测';
const description =
  '计算您的跑步配速，使用里格尔公式（Riegel Formula）预测5公里、10公里、半程马拉松和全程马拉松的完赛时间，并自动生成目标训练区间。';

const faqData = [
  {
    question: '彼得·里格尔公式在预测马拉松成绩时的准确度如何？',
    answer:
      '里格尔公式 T2 = T1 * (D2 / D1)^1.06 在跑者具备良好有氧耐力基础时准确度极高。对于全程马拉松，最终成绩还很大程度取决于周训练里程、25公里以上的长距离LSD训练以及比赛中的碳水补给策略。',
  },
  {
    question: '分钟/公里（min/km）与分钟/英里（min/mile）的精确转换公式是什么？',
    answer:
      '将每公里总秒数乘以1.609344即可转换为每英里秒数。例如5:00 min/km（300秒）相当于482.8秒/英里，即8:03 min/mile。',
  },
  {
    question: '为什么长距离预测成绩有时看起来过于理想？',
    answer:
      '标准疲劳指数1.06假设跑者具备理想的抗疲劳能力。如果缺乏有氧耐力积累，肌肉疲劳与糖原耗尽会导致后程明显失速，实际成绩将慢于预测值。',
  },
  {
    question: '间歇跑与节奏跑的配速区间应如何设定？',
    answer:
      '间歇跑（VO2 max区间）应在5公里比赛配速的95%~105%之间执行；节奏跑（乳酸阈值区间）在110%~120%之间；轻松恢复跑在125%~145%之间。',
  },
];

const howToData = [
  {
    name: '选择单位制',
    text: '通过顶部切换按钮选择公制（公里、min/km）或英制（英里、min/mile）。',
  },
  {
    name: '选择比赛距离',
    text: '点击常用比赛快捷按钮（5K、10K、半马、42K）或输入自定义距离。',
  },
  {
    name: '设置参考成绩',
    text: '使用微调按钮（+1分、+5分等）或输入框设置您近期比赛的实际用时。',
  },
  {
    name: '查看预测与训练区间',
    text: '实时查看您的平均配速、基于里格尔公式的各距离预测成绩以及个性化训练区间。',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'CNY' },
  inLanguage: 'zh',
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
      text: '跑步配速计算与成绩预测的生物力学原理',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '跑步配速计算与比赛成绩预测依赖于对代谢能量系统、肌纤维募集以及疲劳积累规律的深入理解。耐力跑步表现主要由最大摄氧量（VO2 max）、乳酸阈值和跑步经济性决定。在从短距离路跑向全程马拉松过渡时，机械效率和肌糖原储备成为决定能否维持配速的关键因素。',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '1.06', label: '里格尔疲劳指数' },
        { value: '4大核心', label: '标准路跑距离' },
        { value: '3维联动', label: '实时配速计算' },
        { value: '3级区间', label: '目标训练配速' },
      ],
    },
    {
      type: 'title',
      text: '里格尔公式的数学建模',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '由彼得·里格尔工程师于1977年提出的 T2 = T1 * (D2 / D1)^1.06 公式数学化地建模了距离增加带来的配速衰减。疲劳指数1.06代表训练有素跑者的平均衰减率。精英耐力运动员的疲劳指数可降至1.03左右，而缺乏有氧基础的初学者疲劳指数可能达到1.08至1.10。',
    },
    {
      type: 'title',
      text: '公制与英制跑步单位对比',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '公制单位（min/km）',
          description: '国际田联及欧洲路跑标准单位。便于以1000米为单位精确掌控分段计时与乳酸阈值。',
        },
        {
          title: '英制单位（min/mile）',
          description: '北美及英国路跑比赛标准单位。1英里约等于1.609344公里。',
        },
      ],
    },
    {
      type: 'title',
      text: '官方标准路跑比赛距离对比',
      level: 2,
    },
    {
      type: 'table',
      headers: ['比赛项目', '公制距离 (km)', '英制距离 (mi)', '主要供能系统'],
      rows: [
        ['5公里路跑', '5.00 km', '3.11 mi', '90% 有氧 / 10% 无氧糖酵解'],
        ['10公里路跑', '10.00 km', '6.21 mi', '95% 有氧 / 5% 无氧糖酵解'],
        ['半程马拉松', '21.0975 km', '13.11 mi', '99% 有氧 (乳酸阈值主导)'],
        ['全程马拉松', '42.195 km', '26.22 mi', '100% 有氧 (脂肪氧化与糖原极限)'],
      ],
    },
    {
      type: 'title',
      text: '比赛节奏策略与负分段配速（Negative Split）',
      level: 2,
    },
    {
      type: 'tip',
      title: '负分段配速的科学优势',
      html: '马拉松世界纪录统计表明，后半程用时略快于前半程的负分段配速能最大化代谢效率。比赛前半程比目标配速慢2%左右，可防止乳酸过早堆积并节省肝糖原。',
    },
  ],
  ui: {
    title: '跑步配速计算器与完赛成绩预测',
    subtitle: '基于里格尔公式计算配速与目标完赛时间',
    paceCalculatorTitle: '配速、距离与时间计算器',
    racePredictorTitle: '完赛成绩预测（里格尔公式）',
    trainingZonesTitle: '目标训练配速区间',
    distanceLabel: '距离',
    timeLabel: '时间',
    paceLabel: '平均配速',
    hoursLabel: '小时',
    minutesLabel: '分钟',
    secondsLabel: '秒',
    unitKm: '公里',
    unitMiles: '英里',
    paceUnitKm: 'min/km',
    paceUnitMiles: 'min/mile',
    presetsTitle: '快捷距离选择',
    calculateButton: '计算',
    resetButton: '重置',
    recentRaceTitle: '近期参考成绩',
    predictedTimesTitle: '各项目预测完赛时间',
    distanceHeader: '距离',
    estimatedTimeHeader: '预测时间',
    targetPaceHeader: '目标配速',
    trainingZoneHeader: '训练区间',
    paceRangeHeader: '配速范围',
    zoneEasy: '轻松跑与恢复跑',
    zoneEasyDesc: '有氧基础构建与身体恢复',
    zoneTempo: '节奏跑与法特莱克',
    zoneTempoDesc: '提高乳酸阈值与比赛配速维持能力',
    zoneIntervals: '间歇跑与速度训练',
    zoneIntervalsDesc: '提升最大摄氧量与速度耐力',
    riegelExplanation: '预测成绩基于近期表现并应用里格尔公式 T2 = T1 * (D2 / D1)^1.06。',
    seo: {
      title: '跑步配速计算器与完赛成绩预测',
      description: '计算跑步配速，预测5K、10K、半马和全马完赛时间，生成训练区间。',
      h1: '跑步配速计算器与完赛成绩预测',
      intro: '准确的配速计算与成绩预测是耐力跑者的必备工具。',
      statsTitle: '表现指标',
      stat1Label: '里格尔指数',
      stat1Value: '1.06',
      stat2Label: '核心距离',
      stat2Value: '4大项目',
      stat3Label: '配速计算',
      stat3Value: '3维联动',
      stat4Label: '目标区间',
      stat4Value: '3级训练',
      comparativeTitle: '单位对比',
      comparativeItem1Title: '公制（min/km）',
      comparativeItem1Desc: '国际通用标准。',
      comparativeItem2Title: '英制（min/mile）',
      comparativeItem2Desc: '欧美常用标准。',
      tableTitle: '比赛距离概览',
      tableCol1: '项目',
      tableCol2: '公里',
      tableCol3: '英里',
      tableRow1Col1: '5K 路跑',
      tableRow1Col2: '5.00 km',
      tableRow1Col3: '3.11 mi',
      tableRow2Col1: '10K 路跑',
      tableRow2Col2: '10.00 km',
      tableRow2Col3: '6.21 mi',
      tableRow3Col1: '半程马拉松',
      tableRow3Col2: '21.10 km',
      tableRow3Col3: '13.11 mi',
      tipTitle: '节奏策略',
      tipText: '负分段配速能帮助创造最佳完赛成绩。',
      faqTitle: '常见问题',
      faq1Q: '里格尔公式准确吗？',
      faq1A: '需要有良好的有氧耐力基础。',
      faq2Q: 'min/km与min/mile区别？',
      faq2A: '分别是每公里和每英里所需时间。',
      glossaryTitle: '跑步术语',
      term1Name: '里格尔公式',
      term1Def: '彼得·里格尔提出的成绩预测数学公式。',
      term2Name: '乳酸阈值',
      term2Def: '乳酸开始快速堆积的运动强度。',
    },
  },
};
