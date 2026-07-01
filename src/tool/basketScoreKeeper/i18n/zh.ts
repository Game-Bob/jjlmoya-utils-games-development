import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BasketScoreKeeperUI } from '../ui';

const slug = 'basketball-scoreboard';
const title = '篮球记分板在线: 免费计分器';
const description =
  '免费在线篮球记分板，支持 +1、+2 和 +3 按钮。为街头篮球、高中比赛和地方联赛计分。无需注册、无需下载、离线可用。';

const faqData = [
  {
    question: '如何记录篮球比赛的得分？',
    answer:
      '篮球使用三种得分值：罚球（+1分）、投篮得分（+2分）和三分球（+3分）。每当球队得分时，点击相应的按钮。记分板会自动跟踪总分。要纠正错误，请使用得分旁边的减号按钮。',
  },
  {
    question: '篮球比赛中 +1、+2 和 +3 有什么区别？',
    answer:
      '+1 是犯规后获得的罚球得分。+2 是在三分线内命中的常规投篮得分。+3 是在三分线外投中的进球。每个分值都有独立的按钮，比普通计数器计分更快、更不易出错。',
  },
  {
    question: '我可以用这个记分板记录正式的篮球比赛吗？',
    answer:
      '可以。这个记分板是为正式比赛设计的：街头篮球、高中比赛、地方联赛和训练赛。它会在浏览器中保存比分，因此你可以重新加载页面而不会丢失比赛状态。',
  },
  {
    question: '如何在街头篮球或野球比赛中计分？',
    answer:
      '街头篮球通常打到目标分数（如 21 或 16），使用 1 分和 2 分（或仅用 1 分）。这个记分板适用于任何赛制。常规进球用 +1，三分线外的投篮用 +2。设定你自己的获胜条件，如果出错就使用减号按钮。',
  },
  {
    question: '在手机上可以离线使用吗？',
    answer:
      '可以。页面加载完成后，记分板可以完全离线工作。非常适合室外球场、没有 WiFi 的体育馆或信号差的任何地方。你还可以开启全屏模式，屏幕将保持唤醒状态，不会在比赛中锁定。',
  },
  {
    question: '如何跟踪球队犯规和罚球状态？',
    answer:
      '这个记分板专注于比分本身。对于球队犯规，你可以使用球队名称字段手动记录（例如，将"主队"改为"主队 3F"）。对于正式比赛，我们建议将此工具与单独的犯规记录器配合使用。',
  },
  {
    question: '我可以在手机上使用这个篮球计分器吗？',
    answer:
      '可以。界面专门为移动端优化设计。+1、+2 和 +3 按钮尺寸大，易于用拇指点击。全屏模式隐藏浏览器界面，让记分板占据整个屏幕，屏幕唤醒锁可防止手机在比赛中熄屏。',
  },
];

const howToData = [
  {
    name: '命名你的球队',
    text: '点击"主队"或"客队"输入球队名称。名称会自动保存在浏览器中，即使重新加载页面也仍然保留。',
  },
  {
    name: '记录罚球得分（+1）',
    text: '球员罚球命中时点击 +1 按钮。每次罚球得 1 分，通常是在犯规后获得。',
  },
  {
    name: '记录投篮得分（+2）',
    text: '在三分线内命中常规投篮时点击 +2 按钮。这是篮球中最常见的得分方式。',
  },
  {
    name: '记录三分球（+3）',
    text: '球员在三分线外命中时点击 +3 按钮。三分球用红色按钮高亮显示，并触发额外的庆祝效果。',
  },
  {
    name: '纠正计分错误',
    text: '如果不小心加了分数，点击减号按钮减去即可。分数不会低于零。没有必要因为一个小错误就重新开始整场比赛。',
  },
  {
    name: '中场换边',
    text: '在中场休息时使用换边按钮切换主队和客队的左右位置。比分和队名都会同步交换，不会丢失任何数据。',
  },
  {
    name: '开始新比赛',
    text: '点击重置按钮并确认，清除所有分数并开始新比赛。球队名称会被保留，无需重新输入。',
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

export const content: ToolLocaleContent<BasketScoreKeeperUI> = {
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
      text: '免费在线篮球记分板: 无需注册、无需下载',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '记录篮球比分应该很简单。罚球是 +1。投篮得分是 +2。三分球是 +3。这个记分板为每个分值提供了专用按钮，只需点击一下即可继续比赛。没有菜单、没有模式、无需配置。只需命名球队，然后开始计分。比分会自动保存在浏览器中，因此你可以重新加载页面、关闭手机或稍后回来，都不会丢失比赛记录。',
    },
    {
      type: 'title',
      text: '为什么专用篮球计分器比普通计数器更好',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '大多数记分应用要求你多次点击同一个按钮才能增加两分或三分。在 40 分钟的比赛中，这些额外的点击会累积起来，增加在快攻或快速换人时数错分数的风险。这个记分板有 <strong>三个独立按钮</strong>::每个分值对应一个::每次得分只需点击一次。+3 按钮以红色亮起，并触发爆炸动画，与三分球命中的兴奋感相匹配。',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '街头篮球',
          description:
            '以 1 分和 2 分制打到 16 或 21 分的比赛。这个记分板支持两种分值。按街头规则比赛时，只需使用 +1 和 +2，忽略 +3 即可。',
          icon: 'mdi:basketball',
          points: ['无需设置', '适用于任何目标分数', '屏幕保持常亮'],
        },
        {
          title: '高中及地方联赛',
          description:
            '标准的 FIBA 或 NFHS 规则，包含罚球、投篮得分和三分球。专用按钮使其足够快速，可胜任官方记分员工作。',
          icon: 'mdi:school',
          points: ['三种分值齐全', '可编辑的球队名称', '全屏保持手机常亮'],
        },
        {
          title: '训练与练习',
          description:
            '在投篮训练、队内对抗赛或一对一比赛中记录命中次数。历史记录不会被保存，因此每次训练都从零开始。',
          icon: 'mdi:whistle',
          points: ['训练间快速重置', '在体育馆可离线使用', '无需账户'],
        },
      ],
    },
    {
      type: 'title',
      text: '篮球计分机制介绍',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '篮球有三种得分值。<strong>罚球</strong>值 1 分，在犯规后从罚球线执行。<strong>投篮得分</strong>值 2 分，适用于常规比赛中在三分线内命中的任何进球。<strong>三分球</strong>值 3 分，适用于在三分线外投中的进球。大多数职业和大学联赛使用所有三种分值。街头篮球通常只使用 1 分和 2 分，或仅用 1 分。这个记分板适用于任何赛制。',
    },
    {
      type: 'title',
      text: '多种玩法：按比分取胜、按时取胜或先到目标分取胜',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '篮球没有固定的得分上限::比赛在时间结束时终止。但街头篮球经常使用目标分数，如先到 16、21 或 11 分（需领先 2 分）。这个记分板不强制设定获胜条件，因为篮球不以分数定胜负。由你决定何时结束比赛，重置按钮可清空记分板进入下一局。球队名称会保留，因此你可以连续进行多场比赛而无需重新输入。',
    },
    {
      type: 'title',
      text: '这个记分板的与众不同之处',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>三个专用按钮</strong>::+1、+2 和 +3。无需循环切换数值、无需长按、无需额外点击。',
        '<strong>可编辑的球队名称</strong>::点击名称即可更改。名称保存在浏览器中，页面刷新后仍然保留。',
        '<strong>屏幕唤醒锁</strong>::进入全屏后，记分板会阻止手机屏幕熄灭。不再需要为了保持屏幕常亮而反复点击。',
        '<strong>全屏模式</strong>::隐藏浏览器标签页和地址栏，让记分板占据整个屏幕。点击一次全屏按钮即可展开。',
        '<strong>离线优先</strong>::首次加载后，整个记分板无需网络即可运行。无广告、无追踪器、无数据收集。',
        '<strong>反馈效果出色</strong>::每次点击触发分数动画、浮动粒子，以及在支持设备上的轻微震动。+3 还会触发额外的爆炸效果。',
        '<strong>游戏状态自动保存</strong>::重新加载页面、关闭浏览器或明天再回来。比分和球队名称都存储在本地。',
      ],
    },
    {
      type: 'title',
      text: '篮球记分板 vs. 纸质记分表',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '纸质记分表能用，但需要笔、平整的台面，以及一个能同时写字和看比赛的人。数字记分板解决了这三个问题。按钮足够大，无需观看即可点击。数字从球场另一端也清晰可读。比分永远不会弄脏、丢失或意外擦除。而且与纸质不同，这个记分板会保存比赛状态，你可以在中场时关闭，稍后回来继续。',
    },
  ],
  ui: {
    playerA: '主队',
    playerB: '客队',
    swapSides: '交换场地',
    reset: '重置',
    resetConfirm: '重置比赛？所有分数将被清空。',
    cancel: '取消',
    fullscreen: '全屏',
    exitFullscreen: '退出全屏',
    winnerLabel: '获胜方',
  },
};
