import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PingPongScoreKeeperUI } from '../ui';

const slug = 'ping-pong-scorekeeper';
const title = '在线乒乓球记分员: 免费乒乓球追踪器';
const description =
  '使用游戏和局比分追踪乒乓球比赛。适用于友谊赛和锦标赛的免费在线乒乓球记分员。无需注册。';

const faqData = [
  {
    question: '乒乓球计分规则是怎样的？',
    answer:
      '标准乒乓球比赛采用11分制。必须领先2分获胜。如果比分达到10-10，则继续比赛直到有人领先2分。发球方每2分更换一次。此记分员自动处理所有这些规则。',
  },
  {
    question: '如何使用此记分员？',
    answer:
      '点击每位选手下方的+按钮添加分数。比赛分数会自动更新。当选手以2分优势达到11分时，该局结束并开始新一局。获胜局计数器记录每位选手赢得的局数。比赛结束时点击"结束比赛"。',
  },
  {
    question: '发球指示器如何工作？',
    answer:
      '发球方每2分更换一次。正在发球的选手旁边会出现一个圆点。这遵循官方乒乓球规则。您可以在比赛期间随时查看谁应该发球。',
  },
  {
    question: '我可以在比赛期间在手机上使用它吗？',
    answer:
      '可以。界面针对移动设备优化，按钮大而清晰。全屏模式可隐藏浏览器并保持屏幕常亮。',
  },
  {
    question: '它会保存我的比赛数据吗？',
    answer:
      '会的。当前比分、获胜局数和选手姓名会自动保存在您的浏览器中。',
  },
];

const howToData = [
  {
    name: '为选手命名',
    text: '点击默认选手姓名并输入您的姓名。姓名会自动保存。',
  },
  {
    name: '添加分数',
    text: '点击得分选手的大圆形+按钮。分数会伴随庆祝动画更新。',
  },
  {
    name: '取消分数',
    text: '如果您误加了分数，点击减号按钮。',
  },
  {
    name: '开始新一局',
    text: '当一局结束时，点击"新一局"开始下一局。或点击"结束比赛"结束整场比赛。',
  },
  {
    name: '结束比赛',
    text: '点击"结束比赛"，获胜者将在奖杯和五彩纸屑的庆祝中揭晓。',
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

export const content: ToolLocaleContent<PingPongScoreKeeperUI> = {
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
      text: '免费在线乒乓球记分员: 乒乓球比赛追踪器',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '乒乓球的计分应该很简单，但规则可能会让人困惑。下一个是谁发球？比分是10-10还是11-9？每位选手赢了多少局？这款免费在线乒乓球记分员会自动处理所有这些问题。您只需在有人得分时点击+按钮即可。记分员会追踪每局的得分、比赛中赢得的局数以及谁在发球。所有内容实时更新，配合庆祝动画让每一分都充满意义。无需注册、无需下载、没有复杂的菜单。',
    },
    {
      type: 'title',
      text: '本记分员中乒乓球计分的工作原理',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '乒乓球遵循标准计分系统。每局比赛采用11分制。选手必须以2分优势获胜，因此如果比分达到10-10，则继续比赛直到有人领先2分。比赛中发球方每2分更换一次。此记分员自动追踪所有这些规则。您无需记住谁发球或何时更换。发球指示器在当前发球选手旁边显示一个圆点。当选手赢下一局时，记分员自动进入下一局。获胜局计数器为获胜者增加。一场比赛可以是任意数量的局数，但通常采用5局3胜或7局4胜制。比赛完成后点击"结束比赛"，获胜者将在庆祝活动中宣布。',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '友谊赛',
          description: '与朋友进行休闲乒乓球的快速简便计分。自动追踪比赛和局分。',
          icon: 'mdi:table-tennis',
          points: ['每分一次点击', '自动发球追踪', '离线可用'],
        },
        {
          title: '俱乐部与联赛',
          description: '清晰记录比赛和结果。非常适合俱乐部锦标赛和联赛。',
          icon: 'mdi:trophy-outline',
          points: ['获胜局数追踪', '支持5局或7局制', '移动端友好'],
        },
        {
          title: '锦标赛',
          description: '在锦标赛环境中追踪多场比赛。比赛之间快速重置。',
          icon: 'mdi:school',
          points: ['快速比赛重置', '分数持久保存', '全屏模式'],
        },
      ],
    },
    {
      type: 'title',
      text: '这款乒乓球记分员的特别之处',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>自动计分</strong> 记分员了解乒乓球规则。11分制，领先2分获胜，自动更换发球方。',
        '<strong>获胜局数追踪</strong> 每一局获胜都会被记录。一目了然看到每位选手在比赛中赢了多少局。',
        '<strong>发球指示器</strong> 一个可见的圆点显示哪位选手正在发球，遵循每2分轮换的规则。',
        '<strong>庆祝动画</strong> 每得一分都会触发随机庆祝动画。八种不同效果让每一分都激动人心。',
        '<strong>浮动粒子</strong> 每次得分都会产生浮动文字，庆祝这一时刻。',
        '<strong>比赛结束仪式</strong> 点击"结束比赛"触发获胜者宣布，配合奖杯和五彩纸屑。',
        '<strong>可编辑选手姓名</strong> 点击姓名栏重命名选手。姓名保存在您的浏览器中。',
        '<strong>全屏模式</strong> 隐藏浏览器界面，让记分板填满屏幕并保持屏幕常亮。',
        '<strong>离线优先</strong> 无需网络即可使用。无广告、无追踪、无数据收集。',
      ],
    },
    {
      type: 'title',
      text: '乒乓球记分员 vs 手动计分',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '手动乒乓球计分需要追踪比分、记住谁发球、知道何时更换发球方并计算获胜局数。在快节奏的比赛中很容易搞混。这款数字记分员自动处理一切。您只需在得分时按一下按钮。记分员追踪比赛分数、检测何时一局结束、记录比赛中赢得的局数并显示谁在发球。每一分都有动画和粒子庆祝。分数永远不会混乱，也永远不会错过发球更换。无论您是与朋友进行休闲比赛还是参加锦标赛，这款免费在线乒乓球记分员都能满足您的所有需求。',
    },
  ],
  ui: {
    playerA: '选手1',
    playerB: '选手2',
    winnerLabel: '冠军',
    finishMatch: '结束比赛',
    newGame: '新一局',
    serving: '发球中',
    changeSide: '交换场地',
    swapHint: '点击交换',
    game: '局',
    set: '盘',
    gamePoint: '局点',
    matchPoint: '赛点',
    mode: '格式',
    bo1: 'BO1',
    bo3: 'BO3',
    bo5: 'BO5',
    bo7: 'BO7',
    points: '分数',
    reset: '重置',
    resetConfirm: '重置比赛？所有数据将丢失。',
    cancel: '取消',
    fullscreen: '全屏',
    exitFullscreen: '退出全屏',
  },
};
