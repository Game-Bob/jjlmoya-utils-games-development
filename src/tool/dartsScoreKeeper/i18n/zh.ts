import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DartsScoreKeeperUI } from '../ui';

const slug = 'darts-scorekeeper';
const title = '在线飞镖记分员: 回合和盘次追踪器';
const description = '使用回合和盘次比分追踪飞镖比赛。适用于501和301比赛的免费在线飞镖记分员，带有实时结算计算和统计数据。';

const faqData = [
  {
    question: '501和301飞镖计分规则是怎样的？',
    answer: '选手从501或301分的固定分数开始。每位选手轮流投掷三支飞镖，投掷的总分值从他们的分数中扣除。目标是恰好达到零分。如果启用了双倍结束规则，最后一支获胜飞镖必须落在双倍区域或内靶心。',
  },
  {
    question: '飞镖中的爆镖是什么？何时发生？',
    answer: '爆镖发生在选手得分超过剩余总分时，或者在双倍结束规则激活时分数恰好降至一分的情况。当选手爆镖时，其回合立即结束，分数重置为该回合开始时的总分。',
  },
  {
    question: '如何计算飞镖平均分？',
    answer: '飞镖平均分通过将总得分除以总投掷飞镖数，再乘以三来计算。这代表选手每标准三镖回合获得的平均分数。',
  },
  {
    question: '飞镖中的结算是什么？',
    answer: '结算是将剩余分数减至零并赢得该回合所需的具体投掷组合。专业记分员会显示170分及以下的结算建议，指导选手应瞄准哪些单倍、双倍或三倍区。',
  },
];

const howToData = [
  {
    name: '选择起始分数和规则',
    text: '选择501或301作为起始分数，并根据所需比赛级别开启或关闭双倍结束规则。',
  },
  {
    name: '输入选手姓名',
    text: '点击记分板顶部的选手姓名栏以自定义姓名。数值将自动保存在您的浏览器中。',
  },
  {
    name: '记录投掷飞镖',
    text: '使用交互式键盘或直接点击飞镖盘区域来记录您的投掷。先选择倍数（单倍、双倍或三倍），然后选择击中的数字。',
  },
  {
    name: '遵循结算建议',
    text: '当您的剩余分数降至170以下时，查看结算面板以了解结束该回合的最佳目标。',
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
  inLanguage: 'zh',
};

export const content: ToolLocaleContent<DartsScoreKeeperUI> = {
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
      text: '免费在线飞镖记分员和比赛追踪器',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '管理飞镖分数需要快速的心算和专注力。这款数字飞镖回合追踪器为您处理所有计算，让您完全专注于投掷。无论您是在独自练习还是与朋友进行竞技比赛，此记分板都会跟踪分数、回合、盘次、投掷平均分和双倍结束结算目标。',
    },
    {
      type: 'title',
      text: '标准飞镖计分格式说明',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '飞镖比赛以回合和盘次进行。全球最流行的格式是501和301，两者都是减法游戏，选手需将分数减至零。',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '501锦标赛',
          description: '全球专业锦标赛的标准格式。',
          icon: 'mdi:trophy-outline',
          points: ['标准起始分数', '必须双倍结束', '注重高分'],
        },
        {
          title: '301休闲',
          description: '减法游戏的更快版本，适合快速休闲比赛。',
          icon: 'mdi:clock-outline',
          points: ['更快的比赛节奏', '双倍开始选项常见', '非常适合练习'],
        },
        {
          title: '板球模式',
          description: '酒吧和休闲联赛中流行的策略性击靶游戏。',
          icon: 'mdi:bullseye',
          points: ['聚焦15-20分', '靶心追踪', '替代规则系统'],
        },
      ],
    },
    {
      type: 'title',
      text: '理解飞镖结算数学',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '飞镖中可能的最高结算是170分，通过投掷三倍20、三倍20和双倍靶心实现。当您的分数达到170或以下时，您进入了结算范围，此时特定的飞镖序列可以赢得比赛。',
    },
    {
      type: 'table',
      headers: ['分数', '飞镖1目标', '飞镖2目标', '飞镖3目标'],
      rows: [
        ['170', '三倍20 (60)', '三倍20 (60)', '双倍靶心 (50)'],
        ['120', '三倍20 (60)', '单倍20 (20)', '双倍20 (40)'],
        ['100', '三倍20 (60)', '单倍20 (20)', '双倍10 (20)'],
        ['80', '三倍20 (60)', '双倍10 (20)', '-'],
        ['40', '双倍20 (40)', '-', '-'],
      ],
    },
    {
      type: 'title',
      text: '此数字飞镖记分板的功能',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>交互式输入方式</strong> 在可视化径向飞镖盘和快速数字键盘之间切换。',
        '<strong>智能结算引擎</strong> 实时显示结束回合的组合。',
        '<strong>爆镖检测</strong> 自动重置无效投掷并提醒用户。',
        '<strong>回合历史记录</strong> 追踪前几轮和剩余分数。',
        '<strong>详细比赛统计</strong> 动态计算三镖平均分。',
      ],
    },
    {
      type: 'title',
      text: '手动 vs 数字飞镖追踪',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '传统黑板需要书写、擦除和持续计算。此在线记分板消除了错误风险，自动计算平均分，并显示结算目标。将设备放在镖盘旁，进入全屏模式以保持屏幕常亮，享受无忧的计分体验。',
    },
  ],
  ui: {
    playerA: '选手1',
    playerB: '选手2',
    winnerLabel: '冠军',
    reset: '重置',
    resetConfirm: '重置比赛？所有数据将丢失。',
    cancel: '取消',
    fullscreen: '全屏',
    exitFullscreen: '退出全屏',
    leg: '回合',
    set: '盘',
    average: '平均',
    checkout: '结算',
    busted: '爆镖',
    dart: '飞镖回合',
    score301: '301',
    score501: '501',
    doubleOut: '双倍结束',
    noCheckout: '无法结算',
  },
};
