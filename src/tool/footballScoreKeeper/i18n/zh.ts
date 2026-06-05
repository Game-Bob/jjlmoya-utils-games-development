import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FootballScoreKeeperUI } from '../ui';

const slug = 'football-scorekeeper';
const title = '足球记分员：免费在线足球比赛比分追踪工具';
const description =
  '在线免费记录足球比赛比分。适用于足球赛、友谊赛和锦标赛的简易进球计数器。无需注册。';

const faqData = [
  {
    question: '如何使用这个足球记分员？',
    answer:
      '点击每队下方的 + 按钮添加进球。比分即时更新并伴有庆祝动画。使用减号按钮可撤销误操作。球队名称可编辑，点击默认名称即可输入自定义名称。所有数据自动保存在浏览器中，关闭页面后回来仍可继续使用。',
  },
  {
    question: '比赛中能在手机上使用吗？',
    answer:
      '可以。界面专为移动端设计，大按钮无需看屏幕即可点击。全屏模式隐藏浏览器界面并在整场比赛中保持屏幕常亮。垂直布局让您用拇指即可轻松触达双方球队区域。',
  },
  {
    question: '比赛数据会保存吗？',
    answer:
      '会。当前比分和球队名称自动保存在您的浏览器中。您可以刷新页面、关闭浏览器或第二天回来，比赛数据依然存在。',
  },
  {
    question: '可以记录加时赛或点球大战吗？',
    answer:
      '可以。此记分员适用于任何比赛形式。在加时赛或点球大战中继续使用 + 按钮即可。比赛结束时，点击"结束比赛"查看最终结果。',
  },
  {
    question: '真的完全免费没有任何隐藏限制吗？',
    answer:
      '是的，完全免费，没有任何限制。没有付费计划，没有参与人数限制，没有水印，没有广告。一切都在浏览器中离线运行。无需账户或电子邮件。',
  },
];

const howToData = [
  {
    name: '命名球队',
    text: '点击默认球队名称并输入自定义名称。新名称会自动保存在浏览器中。',
  },
  {
    name: '添加进球',
    text: '点击得分球队的大圆形 + 按钮。比分数字会伴随庆祝动画跳升。',
  },
  {
    name: '撤销进球',
    text: '如果误加了进球，点击 + 按钮下方的减号按钮。比分会立即调整。',
  },
  {
    name: '结束比赛',
    text: '点击底部的"结束比赛"查看冠军宣布，伴有奖杯和彩纸动画。点击周围区域可关闭庆祝画面。',
  },
  {
    name: '重置比赛',
    text: '点击顶部栏的重置图标并确认，即可清除双方比分。球队名称会保留，无需重新输入。',
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

export const content: ToolLocaleContent<FootballScoreKeeperUI> = {
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
      text: '免费在线足球记分员：实时比赛比分追踪',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '在足球比赛中记录比分应该是比赛中最简单的部分。这款在线足球记分员让您只需轻轻一按，即可实时记录两支球队的进球。无需注册、无需下载、无需复杂的菜单。打开页面，命名球队，开始计分。无论您是在场边指导青少年足球、组织朋友间的友谊赛，还是在地方联赛中记录比分，这款工具都专为速度和简洁性而设计。每支球队都有自己颜色编码的区域，配有大比分显示和专用 +1 按钮。点击添加进球，点击减号按钮撤销误操作。整个比赛记录始终显示在屏幕上，让您随时了解何时发生了什么。',
    },
    {
      type: 'title',
      text: '为什么需要专用足球记分板而不是通用计数器',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '通用数字计数器可以计算任何东西，但专用足球记分员理解比赛的工作原理。它用不同颜色将两支球队视觉上分开，确保您不会点错。进球按钮大而富有触感，即使在场边单手拿手机也能轻松按下。减号按钮让您无需重置整场比赛即可立即纠正错误。比赛结束时，"结束比赛"按钮会触发庆祝画面，以彩纸和奖杯展示最终结果。通用计数器无法做到这些。它们以同样的方式对待每一个得分。足球不是通用的，您的记分员也不应该是。',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '友谊赛与训练',
          description: '练习赛和训练课的快节奏进球记录。一键重置切换比赛。离线可用，可在任何球场使用。',
          icon: 'mdi:soccer',
          points: ['一键添加进球', '完全离线运行', '无需账户或邮箱', '比赛间即时重置'],
        },
        {
          title: '地方联赛与锦标赛',
          description: '为每球必争的联赛保持清晰的连续比分。大屏幕显示从球场另一端也能看清。球队颜色避免混淆。',
          icon: 'mdi:trophy-outline',
          points: ['颜色编码的球队区域', '可编辑的球队名称', '带庆祝的结束比赛', '远距离可读的大比分'],
        },
        {
          title: '青少年与校园足球',
          description: '简单到年轻球员自己就能操作。教练可专注于比赛同时追踪进球。全屏模式保持屏幕常亮。',
          icon: 'mdi:school',
          points: ['孩子也能轻松使用', '全屏保持屏幕常亮', '可编辑的球队名称', '无干扰功能的简洁设计'],
        },
      ],
    },
    {
      type: 'title',
      text: '如何用这款在线记分员实时追踪足球比赛',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '使用这个足球记分板非常简单。打开页面后，您会看到两个球队区域。主队以红色显示，客队以蓝色显示。每个区域中央有一个大比分数字，顶部有球队名称字段，底部有两个按钮。点击大圆形 + 按钮为该队添加进球。每次记录进球时，比分数字都会以庆祝效果动画呈现。八种不同的进球动画随机轮换，让每一次进球都感觉独特。GOAL 和 SIUUU 等文字会以浮动粒子的形式从按钮区域喷出。屏幕会短暂闪烁以标记这一时刻。如果操作有误，点击小减号按钮移除最后一个进球。球队名称字段可编辑。点击默认名称输入自定义球队名称。名称与当前比分一起自动保存在浏览器中。这意味着您可以关闭页面，稍后回来，比赛数据依然存在。比赛结束时，点击"结束比赛"查看冠军宣布，伴有奖杯动画和飘落的彩纸。您可以关闭庆祝画面，比分仍会保持显示。',
    },
    {
      type: 'title',
      text: '为场边使用而设计的移动端友好足球计分',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '此工具以移动端优先为设计理念。垂直布局将一支球队置于上方，另一支置于下方，让您拿着手机时用拇指即可轻松触及两个区域。按钮足够大，无需看屏幕即可点击。全屏模式隐藏浏览器工具栏并在整场比赛中保持手机屏幕常亮。不再需要每隔几分钟点击屏幕防止变暗。界面同时支持横屏和竖屏方向。首次加载后也可离线运行，因此在场边无需互联网连接。没有广告、没有跟踪器、没有数据收集。您的比赛数据永远不会离开您的设备。',
    },
    {
      type: 'title',
      text: '这款足球记分员的独特之处',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>颜色编码球队</strong> 主队红色，客队蓝色。无需阅读文字即可立即判断是哪一方。',
        '<strong>进球庆祝动画</strong> 每次进球触发随机庆祝。包括爆裂、升起、发光和弹球等八种不同动画。',
        '<strong>浮动粒子特效</strong> 每次进球产生带有 GOAL 和 SIUUU 等信息的浮动文字。每次庆祝都独具特色。',
        '<strong>结束比赛仪式</strong> 点击"结束比赛"触发胜者宣布，带有奖杯动画、球队名称和彩纸雨。',
        '<strong>可编辑球队名称</strong> 点击名称字段重命名球队。名称保存在浏览器本地存储中。',
        '<strong>屏幕常亮锁定</strong> 全屏模式防止手机屏幕在比赛中关闭。',
        '<strong>全屏模式</strong> 隐藏浏览器界面，记分板无干扰地填满整个屏幕。',
        '<strong>离线优先</strong> 首次访问后无需互联网即可运行。无广告、无跟踪、无数据收集。',
        '<strong>即时数据持久化</strong> 比分和球队名称自动保存。刷新页面或关闭浏览器后比赛数据依然存在。',
        '<strong>带确认的重置</strong> 重置按钮在清除比分前要求确认。防止意外数据丢失。',
      ],
    },
    {
      type: 'title',
      text: '足球记分员 vs 纸质记分表：为什么数字更好',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '纸质记分表已经使用了数十年，但它们存在实际问题。你需要一支能用的笔、一个平坦的书写表面，以及边看比赛边记录的足够注意力。一不留神就可能错过一个进球或写错数字。一旦写在纸上，比分就无法干净地修正。划掉的数字使表格难以阅读。纸可能被雨淋湿、被风吹走或在比赛之间丢失。数字足球记分员解决了所有这些问题。按钮足够大，无需查看即可通过触摸点击。数字以大字体清晰显示，从球场另一端也能阅读。错误可以通过减号按钮立即修正。比分自动保存，永远不会丢失。而且与纸张不同，记分员添加了庆祝动画和视觉反馈，使记分更加有趣。无论您是执教青少年球队、运营周日联赛还是与朋友踢球，这款免费在线足球记分员都能为您提供所需的一切，并且没有任何多余的东西。',
    },
    {
      type: 'title',
      text: '为各级别比赛提供免费足球计分',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '此工具完全免费使用，没有任何限制。没有付费层级、没有隐藏在付费墙后的功能、没有屏幕水印。它适用于任何级别的足球，从朋友间的休闲踢球到有组织的联赛比赛。简单的界面意味着任何人都可以使用它，从学习比赛的小球员到管理锦标赛的经验丰富的教练。无需注册。无需电子邮件地址。不收集个人数据。打开页面，开始比赛，点击进球。仅此而已。',
    },
  ],
  ui: {
    playerA: '主队',
    playerB: '客队',
    winnerLabel: '冠军',
    finishMatch: '结束比赛',
    reset: '重置',
    resetConfirm: '重置比赛？所有数据将丢失。',
    cancel: '取消',
    fullscreen: '全屏',
    exitFullscreen: '退出全屏',
  },
};
