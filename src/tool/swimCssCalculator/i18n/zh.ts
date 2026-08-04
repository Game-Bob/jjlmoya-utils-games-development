import { bibliographyEntries } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SwimCssCalculatorUI } from '../ui';

const slug = 'css-swim-calculator';
const title = '临界游泳速度 CSS 计算器';
const description = '根据400米和200米游泳测试成绩计算您的临界游泳速度 CSS 及每100米或100码的目标配速。';

const faqData = [
  {
    question: '游泳运动员应该多久测试一次 CSS？',
    answer: '建议游泳运动员和三铁选手每4至6周进行一次400米和200米 CSS 测试，以调整目标配速。',
  },
  {
    question: '能在以码为单位的泳池中使用 CSS 计算吗？',
    answer: '可以。临界游泳速度公式同样适用于短池码制泳池。',
  },
];

const howToData = [
  {
    name: '选择泳池距离单位',
    text: '在顶部切换开关中选择米（25米或50米池）或码（25码池）。',
  },
  {
    name: '输入 400 米测试成绩',
    text: '输入您全力完成 400 米测试的分钟和秒数。',
  },
  {
    name: '输入 200 米测试成绩',
    text: '输入您全力完成 200 米测试的分钟和秒数。',
  },
  {
    name: '计算并查看目标分段成绩',
    text: '点击计算查看您的有氧速度以及各区间的目标分段成绩。',
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

const ui: SwimCssCalculatorUI = {
  title: '临界游泳速度 CSS 计算器',
  subtitle: '根据400米和200米测试成绩计算有氧阈值配速及各强度区间的分段目标。',
  unitLabel: '泳池距离单位',
  unitMeters: '米（25米 / 50米池）',
  unitYards: '码（25码池）',
  t400Label: '400米 / 400码 测试成绩',
  t200Label: '200米 / 200码 测试成绩',
  minutesLabel: '分',
  secondsLabel: '秒',
  calculateButton: '计算 CSS 及分段目标',
  resetButton: '重置',
  cssResultTitle: '临界游泳速度计算结果',
  cssSpeedLabel: '有氧速度',
  cssPace100Label: '每100米 CSS 配速',
  lapPaceLabel: '25米 / 25码 趟目标',
  unitMeterPerSec: '米/秒',
  unitYardPerSec: '码/秒',
  pace100mUnit: '/100米',
  pace100ydUnit: '/100码',
  trainingZonesTitle: '泳池训练目标配速矩阵',
  zoneHeader: '强度区间',
  pace100Header: '目标配速 / 100',
  split50Header: '50米分段',
  split100Header: '100米分段',
  split200Header: '200米分段',
  split400Header: '400米分段',
  zoneAerobic: '有氧耐力',
  zoneAerobicDesc: '用于长距离有氧组及热身（约 CSS 配速的 104%）',
  zoneAerobicRest: '休息：每组 10秒 - 15秒',
  zoneCss: 'CSS 阈值',
  zoneCssDesc: '用于阈值组及比赛 Pace 练习（约 CSS 配速的 100%）',
  zoneCssRest: '休息：每组 15秒 - 20秒',
  zoneVo2Max: 'VO2 Max 速度',
  zoneVo2MaxDesc: '用于高强度间歇训练（约 CSS 配速的 96%）',
  zoneVo2MaxRest: '休息：每组 30秒 - 45秒',
  invalidNotice: '400米测试成绩必须严格大于200米测试成绩。',
  copySplitsButton: '复制分段成绩',
  copiedNotice: '分段成绩已复制',
  seo: {
    title: '临界游泳速度 CSS 计算器 游泳训练配速',
    description: '根据400米和200米游泳测试成绩计算您的临界游泳速度 CSS 及每100米或100码的目标配速。',
    h1: '临界游泳速度 CSS 计算器与泳池训练配速',
    intro: '临界游泳速度 CSS 是游泳运动员和三铁选手基于功能性有氧阈值制定泳池训练计划的黄金标准。',
    statsTitle: '核心关键指标',
    stat1Label: '基准测试 1',
    stat1Value: '400米 全力测试',
    stat2Label: '基准测试 2',
    stat2Value: '200米 全力测试',
    stat3Label: '阈值指标',
    stat3Value: '100米 基础CSS配速',
    stat4Label: '实操应用',
    stat4Value: '泳池计时钟分段目标',
    comparativeTitle: 'CSS 配速与心率游泳训练对比',
    comparativeItem1Title: '临界游泳速度 CSS 方法',
    comparativeItem1Desc: '直接测量水中的实际推进速度，准确反映转身技术和流线型姿态。',
    comparativeItem2Title: '传统心率监测',
    comparativeItem2Desc: '在水中存在延迟和误报，无法实时体现因疲劳导致的动作变形。',
    tableTitle: '强度区间与休息时间汇总表',
    tableCol1: '训练区间',
    tableCol2: '生理适应目标',
    tableCol3: '推荐包干距离',
    tableRow1Col1: '有氧耐力',
    tableRow1Col2: '毛细血管密度提升与脂肪代谢优化。',
    tableRow1Col3: '400米至800米重复组（短休息10-15秒）。',
    tableRow2Col1: 'CSS 阈值',
    tableRow2Col2: '乳酸清除能力与有氧功率维持。',
    tableRow2Col3: '100米至300米重复组（休息15-20秒）。',
    tableRow3Col1: 'VO2 Max 速度',
    tableRow3Col2: '最大摄氧量与划臂频率。',
    tableRow3Col3: '50米至100米高强度间歇（充裕休息）。',
    tipTitle: '精准测试教练建议',
    tipText: '在400米测试中合理分配体力，避免在前100米冲得太快导致乳酸过早堆积。',
    faqTitle: '关于临界游泳速度的常见问题',
    faq1Q: '应该多久重新测试一次？',
    faq1A: '建议每4至6周测试一次。',
    faq2Q: '适用于码制泳池吗？',
    faq2A: '适用。数学计算公式完全相同。',
    glossaryTitle: '游泳生理学词汇表',
    term1Name: '临界游泳速度',
    term1Def: '在不发生快速衰竭的情况下可持续维持的理论最大游泳速度。',
    term2Name: '分段成绩',
    term2Def: '在泳池边计时钟上核对的转身目标点时间。',
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
      text: '临界游泳速度的生物力学原理',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '临界游泳速度 CSS 代表游泳距离与时间线性关系的斜率。通过从400米成绩中减去200米成绩，可以剔除无氧能力的干扰。',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '400m & 200m', label: '标准测试组合' },
        { value: '100米基准', label: '配速标准' },
        { value: '3 大区间', label: '强度矩阵' },
        { value: '4 个分段', label: '计时钟目标' },
      ],
    },
    {
      type: 'title',
      text: 'CSS 配速与水中心率监测对比',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'CSS 实测配速',
          description: '测量水中实际滑行速度，包含转身蹬壁效能。',
        },
        {
          title: '水下心率传感器',
          description: '受水温与心率漂移影响，数据响应通常存在滞后。',
        },
      ],
    },
    {
      type: 'title',
      text: '训练区间与休息间歇参照表',
      level: 2,
    },
    {
      type: 'table',
      headers: ['区间名称', '相对CSS配速比例', '主要训练目的', '推荐休息时间'],
      rows: [
        ['有氧耐力', 'CSS时间的104%', '基础有氧能力', '10秒至15秒'],
        ['CSS 阈值', '100% (与CSS时间相同)', '乳酸耐受与比赛配速', '15秒至20秒'],
        ['VO2 Max 速度', 'CSS时间的96%', '最大摄氧功率', '30秒至45秒'],
      ],
    },
    {
      type: 'title',
      text: '泳池间歇组训练实操策略',
      level: 2,
    },
    {
      type: 'tip',
      title: '保持目标配速的技巧',
      html: '严格遵守前50米的分段计时点。如果前50米快了2秒，后半程速度将会出现断崖式下降。',
    },
  ],
  ui,
};
