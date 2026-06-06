import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { StreetballLocaleContent } from '../entry';

const slug = 'streetball-3x3-ji-fen-qi';
const title = '高级街头篮球3x3记分器（含进攻计时器）';
const description = '通过集成的12秒进攻计时器、团队犯规、突然死亡得分以及动态半场视觉指示器，追踪FIBA 3x3街头篮球比分。';

const faq = [
  {
    question: '3x3街头篮球的12秒进攻计时器如何工作？',
    answer: '在FIBA 3x3中，球队获得球权后只有12秒时间来尝试投篮。进攻计时器在球权转换时重置为12秒，在进攻篮板和特定条件下的犯规时重置为14秒。',
  },
  {
    question: '3x3篮球的突然死亡得分限制是什么？',
    answer: '比赛中率先得到21分的球队立即获胜，无论比赛时钟还剩多少时间。这就是突然死亡规则。',
  },
  {
    question: '团队犯规如何影响比赛？',
    answer: '从第7次团队犯规开始，对方获得2次罚球。第10次及之后的犯规，对方获得2次罚球外加球权，触发罚球状态。',
  },
];

const howTo = [
  {
    name: '设置球队名称',
    text: '为两支街头篮球队输入自定义名称，个性化您的显示界面。',
  },
  {
    name: '记录得分和球权',
    text: '点击交互式沥青球场，添加1分（弧线内）或2分（弧线外），并切换球权指示灯。',
  },
  {
    name: '控制进攻计时器',
    text: '点击进攻计时器重置为12秒，点击辅助重置按钮设为14秒，或双击暂停倒计时。',
  },
  {
    name: '管理团队犯规',
    text: '使用计数器追踪团队犯规，进入罚球状态（7次以上犯规）时计数器变为红色。',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
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
  step: howTo.map((step, i) => ({
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

export const content: StreetballLocaleContent = {
  slug,
  title,
  description,
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '免费在线3x3街头篮球记分板',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '在快节奏的3对3篮球比赛中，一边管理短暂的进攻计时器一边追踪团队犯规可能很困难。这款免费在线3x3街头篮球记分板采用工业沥青主题和高对比度霓虹风格，自动处理12秒进攻计时器、比赛时钟、犯规罚球系统和球权指示器。',
    },
    {
      type: 'title',
      text: 'FIBA 3x3街头篮球计分与进攻计时器规则',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'FIBA 3x3街头篮球不同于传统的5对5篮球。比赛进行一个10分钟时段，或当一支球队得到21分时立即结束（突然死亡）。弧线内投篮和罚球计1分，而6.75米弧线外投篮计2分。12秒进攻计时器确保快速进攻，球员在球权转换后必须将球清出弧线外。',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '休闲野球局',
          description: '在社区球场上与朋友快速记录街头篮球比分。',
          icon: 'mdi:basketball',
          points: ['简单的得分触发', '响应式布局', '可离线使用'],
        },
        {
          title: '锦标赛比赛',
          description: '完美适用于官方3x3锦标赛和街头篮球联赛。',
          icon: 'mdi:trophy-outline',
          points: ['10分钟倒计时', '21分突然死亡', '犯规罚球状态'],
        },
        {
          title: '裁判控制台',
          description: '专为裁判设计，用于快速管理进攻计时器重置和球权。',
          icon: 'mdi:school',
          points: ['12秒和14秒重置', '蜂鸣器声音', '触觉按钮手势'],
        },
      ],
    },
    {
      type: 'title',
      text: '交互式控制与触觉动画',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>12秒进攻计时器</strong>在4秒以下时闪烁红色并显示小数，随后模拟蜂鸣器响起。',
        '<strong>交互式混凝土半场</strong>让您可以直接点击1分和2分区域在场地示意图上记录得分。',
        '<strong>犯规计数器警告</strong>在团队犯规达到罚球状态（7次和10次以上）时变为红色并抖动。',
        '<strong>球权清除指示器</strong>在球权转换时显示提醒，直到球被清出弧线外。',
        '<strong>暂停计时器</strong>启动30秒倒计时并伴有自定义声音警告。',
      ],
    },
    {
      type: 'title',
      text: '为什么要使用数字街头篮球追踪器？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '数字记分板消除了球场上关于得分、犯规或进攻计时器违例的争议。明亮的霓虹数字从远处也清晰可读，自动球权和清除提醒确保比赛顺畅进行，不会中断。',
    },
  ],
  ui: {
    teamA: '球队1',
    teamB: '球队2',
    points: '得分',
    fouls: '犯规',
    timeouts: '暂停',
    shotClock: '进攻计时器',
    reset: '重置',
    resetConfirm: '重置比赛？所有数据将丢失。',
    cancel: '取消',
    gameTime: '时间',
    possession: '球权',
    clearBall: '清球',
    matchWon: '比赛获胜',
    timeoutActive: '暂停中',
    penalty: '罚球',
    fullscreen: '全屏',
    exitFullscreen: '退出全屏',
    overtime: '加时赛',
    ptsInside: '+1分',
    ptsOutside: '+2分',
    toggleSound: '切换声音',
    soundOn: '声音开',
    soundOff: '声音关',
  },
};
