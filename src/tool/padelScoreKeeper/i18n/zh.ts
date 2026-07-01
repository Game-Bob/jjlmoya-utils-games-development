import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { PadelScoreKeeperLocaleContent } from '../entry';

const slug = 'padel-scorekeeper';
const title = '高级板式网球记分器: 金球制与轮转追踪';
const description = '使用官方 Punto de Oro（金球制）规则、发球轮转提醒、抢七局和动态换边动画来追踪板式网球比分。';

const faq = [
  {
    question: '板式网球中的金球制（Punto de Oro）是什么？',
    answer: '金球制是在比分达到40-40（平分）时进行的一球定胜负规则。没有占先制。接发球队可以选择在左侧或右侧接发球，赢得这一球的一方直接赢得该局。',
  },
  {
    question: '板式网球中的盘制是如何运作的？',
    answer: '标准比赛采用三盘两胜制，每盘先赢得6局（领先2局）的队伍获胜。如果比分达到6-6，则进行7分抢七局。可选的金盘制在4局时结束，4-4时进行抢七。',
  },
  {
    question: '板式网球中球员何时交换场地？',
    answer: '球员在每盘的第一局结束后交换场地，之后每2局交换一次（当前盘的总局数为奇数时，例如1、3、5）。在抢七局中，每6分交换一次场地。',
  },
];

const howTo = [
  {
    name: '配置比赛格式',
    text: '选择标准比赛格式（先赢6局）或较短的金盘格式（先赢4局）。',
  },
  {
    name: '输入球员姓名',
    text: '输入队伍名称以个性化记分板。您的配置会自动保存。',
  },
  {
    name: '在球场上记录得分',
    text: '点击可视化等角板式网球场的任意一侧来记录得分。发球指示器将引导您完成对角线轮转。',
  },
  {
    name: '决定金球',
    text: '当达到平分时，选择接球方（左或右接发球员），点击获胜队伍以结束该局。',
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

export const content: PadelScoreKeeperLocaleContent = {
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
      text: '免费在线板式网球记分板 & 比赛追踪器',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '板式网球的比分跟踪可能因快速往返球、抢七、换边以及官方Punto de Oro（金球制）规则而变得混乱。这个免费在线板式网球记分板让记分变得轻松。只需点击可视球场记录得分，让工具自动实时管理发球轮转、接发球方、盘次历史记录和场地交换。',
    },
    {
      type: 'title',
      text: '了解板式网球计分、金球制和轮转',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '板式网球采用类似网球的计分方式（15、30、40、局），但引入了特定规则以加快比赛节奏。根据职业FIP规则，当比分达到40-40时，将进行决定性的金球（Punto de Oro）。接发球队选择接发球的一侧（左或右），赢得这一球的一方赢得该局。此外，每当一盘中的总局数为奇数时，球队必须交换场地，抢七局中每6分交换一次。',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '友谊赛',
          description: '与板式网球伙伴进行友谊赛的快速简洁记分。',
          icon: 'mdi:tennis',
          points: ['一键添加得分', '移动优先布局', '离线也可使用'],
        },
        {
          title: '俱乐部与联赛',
          description: '轻松跟踪俱乐部比赛和本地锦标赛。',
          icon: 'mdi:trophy-outline',
          points: ['盘次历史存档', '6局或4局盘制', '支持金球制'],
        },
        {
          title: '裁判模式',
          description: '用于裁判正式比赛或训练课程的全功能工具。',
          icon: 'mdi:school',
          points: ['发球与接发球标记', '交互式球场旋转', '全屏控制台模式'],
        },
      ],
    },
    {
      type: 'title',
      text: '为板式网球球员打造的先进数字功能',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>官方金球制逻辑</strong>让接发球队在平分时选择接发球方，并显示发球路径。',
        '<strong>可视化球场指示器</strong>动态显示发球方（S）和接发球方（R）的位置，避免轮转错误。',
        '<strong>自动换边</strong>在奇数局或抢七间隔时翻转球场布局180度，始终与您的实际视角保持一致。',
        '<strong>自定义盘制</strong>支持标准的6局盘和快速的4局金盘。',
        '<strong>本地浏览器自动保存</strong>即使刷新页面也能安全保留球员姓名和当前比赛比分。',
      ],
    },
    {
      type: 'title',
      text: '板式网球抢七规则：标准 vs 超级抢七',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '在标准板式网球盘中，如果局分达到6-6，则进行7分抢七局。在抢七局中，得分按数字顺序计算（1、2、3等）。率先达到7分并领先2分的队伍赢得该盘。轮到发球的球员从右侧（平分）发球区发第一分。此后，每位球员从左（占先）侧开始连续发两分。在某些锦标赛制中，如果盘分1-1平，则进行10分超级抢七局，而不是完整的第三盘来决定比赛胜负。',
    },
    {
      type: 'title',
      text: '场地交换与轮转：保持板式网球的公平性',
      level: 2},
    {
      type: 'paragraph',
      html: '场地交换在板式网球中是必不可少的，以确保太阳、风或场地缺陷等环境因素不会对某一方有利。球员必须在每盘的第一局后交换场地，之后每两局交换一次（例如1-0、2-1、3-2、4-3、5-4）。我们的数字板式网球记分板具有动态换边动画功能，当球员需要物理换边时，会自动将球场布局旋转180度。这确保屏幕顶部显示的球队始终与实际球场远端比赛的球队一致。',
    },
    {
      type: 'title',
      text: '标准盘 vs 金盘格式',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '标准比赛每盘进行6局，但许多休闲联赛和快节奏比赛采用"金盘"格式，每盘只进行4局（4-4时抢七）。此记分板允许您通过工具栏中的一键点击在这些格式之间切换。无论选择何种格式，记分板都会自动处理所有抢七、发球轮转和比分计算。',
    },
    {
      type: 'title',
      text: '球场上有效记分的技巧',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>使用球场支架或手机支架：</strong>将手机或平板电脑安装在板式网球场的网高围栏上。这样两边的球员都可以轻松看到当前比分和发球指示器。',
        '<strong>开始前个性化姓名：</strong>花10秒钟输入球员或队伍的真实姓名。这使语音播报（如果启用）和视觉记分板更具吸引力和正式感。',
        '<strong>启用全屏模式：</strong>点击顶部面板中的全屏按钮。这将最大化记分板界面，并有助于防止在长时间比赛中屏幕自动关闭。',
      ],
    },
    {
      type: 'title',
      text: '为什么使用数字板式网球记分器？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '与其不断争论谁在发球、轮到谁接发球或比分是多少，不如使用数字追踪器让所有人保持一致。通过直接在屏幕上直观显示发球方和接球方位置，球员只需快速看一眼凳子上的手机就能准确知道应该站在哪里。这提高了比赛节奏并防止了轮转错误。',
    },
  ],
  ui: {
    playerA: '队伍1',
    playerB: '队伍2',
    game: '局',
    set: '盘',
    tiebreak: '抢七',
    goldPoint: '金球',
    selectReceiver: '选择接发球方',
    leftReceiver: '左接发球员',
    rightReceiver: '右接发球员',
    server: '发球方',
    receiver: '接发球方',
    changeEnds: '交换场地',
    matchWon: '比赛获胜',
    reset: '重置',
    resetConfirm: '重置比赛？所有数据将丢失。',
    cancel: '取消',
    fullscreen: '全屏',
    exitFullscreen: '退出全屏',
    deuce: '平分',
    advantage: '占先',
    formatStandard: '6局',
    formatGoldenSet: '4局',
    goldenSet: '金盘',
    goldPointTitle: '金球决胜',
  },
};
