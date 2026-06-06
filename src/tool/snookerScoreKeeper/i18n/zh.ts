import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SnookerScoreKeeperLocaleContent } from '../entry';

const slug = 'snooker-frame-tracker-break-calculator';
const title = '高级斯诺克单局追踪与单杆计算器';
const description = '实时追踪斯诺克单局比分，计算当前单杆得分，显示台面剩余分数，并获取实时分差状态（如是否需要做斯诺克）。';

const faqData = [
  {
    question: '斯诺克台面上的最大剩余分数是如何计算的？',
    answer: '每颗剩余红球价值8分（红球本身1分加上击落黑球的7分）。所有红球被打进后，剩余彩球总分为27分。',
  },
  {
    question: '这个计算器中的"需要斯诺克"是什么意思？',
    answer: '这意味着比分差距大于台面剩余总分，球员必须迫使对手犯规才能追回比分。',
  },
  {
    question: '什么是决胜黑球局面？',
    answer: '当所有球都被打进且单局比分打平时，需要将黑球重新摆回点位来决定胜负，这就是决胜黑球局面。',
  },
];

const howToData = [
  {
    name: '配置球员姓名',
    text: '为两位斯诺克球员输入自定义名称，定制记分板显示。',
  },
  {
    name: '击球入袋与累积单杆',
    text: '点击发光绒布质感的球体，依次记录击打入袋的球。计算器会根据规则自动锁定不符合条件的彩球。',
  },
  {
    name: '检查分差状态',
    text: '监控实时状态栏，查看球员是否安全、是否需要做斯诺克，或者该局是否仍然开放。',
  },
  {
    name: '记录犯规罚分',
    text: '打开犯规菜单，将罚分直接加给对手，并切换当前击球球员。',
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
    image: undefined,
    url: undefined,
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

export const content: SnookerScoreKeeperLocaleContent = {
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
      text: '免费在线斯诺克单局记分员与单杆计数器',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '使用我们的数字记分板，轻松管理斯诺克单局比赛。该工具可计算当前单杆得分、剩余台面分数以及精确的比分差。绒布风格界面提供交互式指示器，根据斯诺克规则顺序动态亮起。无论您是在裁判本地俱乐部锦标赛，还是在家中记录友谊赛，这个应用程序都会自动处理所有计算。',
    },
    {
      type: 'title',
      text: '理解斯诺克计分与分差计算',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '标准斯诺克比赛以15颗红球开始，每颗价值1分。球员必须交替击打红球和彩球。每次打进彩球后，将其放回原位，直到所有红球打完。之后，彩球必须按照从黄球到黑球的数字顺序依次击入袋中。本计算器会追踪击球顺序，并在需要做斯诺克时发出警告。通过计算分差和台面最大剩余分数，精确判定单局是否已达到胜利阈值。',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '单局记分板',
          description: '在高对比度显示屏上追踪单局比分和球员轮次。',
          icon: 'mdi:scoreboard-outline',
          points: ['清晰的当前球员高亮显示', '自定义球员姓名输入', '一键撤销支持'],
        },
        {
          title: '单杆计算器',
          description: '实时追踪当前连续击球得分，附带彩球颜色记录。',
          icon: 'mdi:billiards',
          points: ['击球历史时间轴展示', '按规则自动锁定球种', '颜色编码的单杆状态'],
        },
        {
          title: '剩余分数仪表',
          description: '追踪绿色绒布台面上的最大剩余分数。',
          icon: 'mdi:percent-outline',
          points: ['分差实时追踪', '动态斯诺克需求警告', '决胜黑球检测'],
        },
      ],
    },
    {
      type: 'title',
      text: '交互式控制与声音反馈',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>触感绒布HUD</strong>，点击球体即可加分并记录在单杆时间轴上。',
        '<strong>犯规操作按钮</strong>，对对手施加4至7分的罚分并结束当前回合。',
        '<strong>动态状态指示灯</strong>，更新显示正常击球、安全领先或需要做斯诺克。',
        '<strong>音频合成</strong>，击球入袋时播放落袋音效，犯规时播放蜂鸣声。',
      ],
    },
    {
      type: 'title',
      text: '斯诺克犯规规则与罚分系统详解',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '斯诺克中的犯规会使对手获得加分。罚分值取决于目标球或涉及犯规的球的价值，最低罚分为4分。例如，打进白色母球、击打红球时先碰到彩球、或未击中任何球，都会受到罚分。如果目标球是蓝球、粉球或黑球时犯规，罚分分别为5分、6分和7分。本数字记分卡设有快速犯规面板，可轻松添加罚分值并自动将击球权转给下一位球员。',
    },
    {
      type: 'title',
      text: '决胜黑球局面的流程',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '当所有球都被击入袋中且单局比分打平时，黑球将被重新摆回原位。球员抽签决定谁先击球，先打进黑球或犯规的球员输掉该局。决胜黑球规则确保了激烈比赛无需额外完整局数即可公平决出胜负，我们的追踪器会自动检测这种平局终局状态，并通知双方球员。',
    },
    {
      type: 'title',
      text: '为什么使用数字斯诺克追踪器',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '在紧张的单局比赛中手动计算剩余分数和分差容易出现人为错误。本浏览器工具提供准确的实时统计数据，让球员能够专注于技术和策略。通过保留击球入袋的交互式时间轴，裁判可以轻松核查有争议的单杆得分，并保持正式比赛的连续性。',
    },
  ],
  ui: {
    title: '斯诺克记分员',
    description: '追踪单局比分和单杆得分。',
    player1: '球员1',
    player2: '球员2',
    score: '比分',
    currentBreak: '单杆',
    remainingPoints: '剩余',
    deficit: '分差',
    statusSafe: '安全',
    statusNeedSnookers: '需要斯诺克',
    statusDecidingBlack: '决胜黑球',
    statusNormal: '正常',
    foul: '犯规',
    foulTitle: '选择犯规罚分',
    foulPoints: '罚分',
    foulOnRed: '红/黄/绿/棕',
    foulOnYellow: '黄球',
    foulOnGreen: '绿球',
    foulOnBrown: '棕球',
    foulOnBlue: '蓝球',
    foulOnPink: '粉球',
    foulOnBlack: '黑球',
    reset: '重置',
    resetConfirm: '重置当前单局？所有比分将被清除。',
    cancel: '取消',
    confirm: '确认重置',
    endTurn: '结束回合',
    miss: '未击中',
    redsRemaining: '红球',
    pocketedBalls: '已击入',
    toggleSound: '切换音效',
    fullscreen: '全屏',
  },
};
