import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TennisScoreKeeperUI } from '../ui';

const slug = 'tennis-scorekeeper';
const title = '在线网球记分员 : 免费比赛追踪器';
const description = '使用盘和局比分追踪网球比赛。适用于比赛和锦标赛的免费在线网球记分员。无需注册。';

const faqData = [

  {
    question: '网球计分规则是怎样的？',
    answer: '网球比赛由局和盘组成。一局计分为Love、15、30、40。40-40称为平分，需要选手连续赢得2分。一盘由率先以2局优势赢得6局的选手获胜。如果比分达到6-6，则进行抢七。',
  },
  {
    question: '如何使用此网球记分板？',
    answer: '选手得分时，点击其加号按钮。分数会自动更新。记分员会追踪发球顺序、局分、当前盘以及已完成盘的历史记录。',
  },
  {
    question: '网球选手何时交换场地？',
    answer: '网球选手在每盘的第一、第三及随后的每个奇数局后交换场地。他们也在盘末交换场地，除非总局数为偶数。在抢七中，选手每6分交换一次场地。',
  },
  {
    question: '此记分板支持抢七吗？',
    answer: '是的。当一盘达到6-6时，记分员自动进入抢七模式，分数以数字形式计算至7。选手必须以2分优势获胜才能结束抢七和该盘。',
  },
  {
    question: '我可以在手机上使用它吗？',
    answer: '可以。界面针对移动设备进行了优化，按钮大而清晰。您还可以进入全屏模式，在比赛期间保持屏幕常亮。',
  },
];

const howToData = [
  {
    name: '设置选手姓名',
    text: '点击选手姓名输入框输入自定义名称。它们会保存在您的浏览器中。',
  },
  {
    name: '添加分数',
    text: '点击赢得该回合的选手的加号按钮。分数将自动更新。',
  },
  {
    name: '管理盘结果',
    text: '追踪器自动结束局和盘。它会归档已完成的盘并进入下一盘。',
  },
  {
    name: '交换场地',
    text: '记分板在选手需要交换场地时提醒您。点击交换按钮即可交换显示侧。',
  },
  {
    name: '比赛结束',
    text: '追踪器根据网球规则自动结束比赛并宣布获胜者。',
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

export const content: ToolLocaleContent<TennisScoreKeeperUI> = {
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
      text: '免费在线网球记分员和比赛追踪器',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '使用平分、占先和抢七等术语进行网球计分可能具有挑战性。这款免费在线网球记分员完全自动化了整个流程。您只需在选手得分时点击加号按钮。该工具可实时自动管理分数、局、盘和场地交换。',
    },
    {
      type: 'title',
      text: '此记分员中的网球计分原理',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '网球使用独特的计分结构。标准一局依次经过Love、15、30、40和局点。当两名选手都达到40时，比分为平分。从平分开始，选手必须连续得两分才能赢得该局。第一分称为占先，下一分则锁定该局。如果对手赢得下一分，比分回到平分。一盘由率先以2局优势赢得6局的选手获胜。当盘分达到6-6时，进行7分制抢七。',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '休闲比赛',
          description: '与朋友进行轻松的网球比赛的快速简便计分。',
          icon: 'mdi:tennis',
          points: ['一键计分', '场地交换提示', '离线可用'],
        },
        {
          title: '俱乐部比赛',
          description: '俱乐部比赛和锦标赛的理想追踪工具。',
          icon: 'mdi:trophy-outline',
          points: ['盘历史记录存档', '三盘或五盘制', '移动端友好布局'],
        },
        {
          title: '锦标赛模式',
          description: '专为正式比赛追踪和裁判使用而设计。',
          icon: 'mdi:school',
          points: ['抢七支持', '全屏记分板', '本地数据安全'],
        },
      ],
    },
    {
      type: 'title',
      text: '记分员的特殊功能',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>自动网球规则逻辑</strong> 自动计算Love、15、30、40、平分、占先和抢七。',
        '<strong>盘历史记录存档</strong> 一目了然地显示前几盘的比分。',
        '<strong>场地交换助手</strong> 在选手需要交换场地时发出提示。',
        '<strong>生动的得分庆祝</strong> 为赢得的分数显示浮动粒子效果。',
        '<strong>三盘或五盘制</strong> 可配置的比赛格式设置。',
        '<strong>本地保存姓名</strong> 跨访问保留自定义名称。',
      ],
    },
    {
      type: 'title',
      text: '数字计分 vs 手动追踪',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '手动记分板需要持续集中注意力来更新数字、记住发球顺序、检查抢七和计算场地交换。这款数字网球记分员自动处理每一条网球规则。当工具更新盘历史记录并以庆祝仪式宣布获胜者时，您可以完全专注于比赛本身。',
    },
  ],
  ui: {
    playerA: '选手1',
    playerB: '选手2',
    winnerLabel: '冠军',
    finishMatch: '结束比赛',
    newGame: '新盘',
    serving: '发球中',
    changeSide: '交换场地',
    swapHint: '点击交换场地',
    game: '局',
    set: '盘',
    gamePoint: '局点',
    setPoint: '盘点',
    matchPoint: '赛点',
    mode: '盘数',
    bo3: '三盘制',
    bo5: '五盘制',
    points: '分数',
    reset: '重置',
    resetConfirm: '重置比赛？所有数据将丢失。',
    cancel: '取消',
    fullscreen: '全屏',
    exitFullscreen: '退出全屏',
    deuce: '平分',
    advantage: '占先',
    tiebreak: '抢七',
  },
};
