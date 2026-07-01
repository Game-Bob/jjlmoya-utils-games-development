import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ScoreKeeperUI } from '../ui';

const slug = 'sports-scoreboard';
const title = '在线运动计分板：免费计分器';
const description =
  '专为移动端设计的巨型按钮数字计分板。非常适合板网球、乒乓球和足球。比赛过程中无烦人广告。简单快捷。';

const faqData = [
  {
    question: '在没有网络连接的情况下可以使用吗？',
    answer:
      '可以，页面加载完成后，计分板即可完全脱机工作。比赛期间您不需要数据流量或 WiFi。所有内容都保存在您浏览器的本地存储中。'
  },
  {
    question: '我可以使用此计分板进行网球和板网球比赛吗？',
    answer:
      '可以，网球/板网球模式会自动处理 15-30-40-AD 序列，并根据官方规则跟踪盘数和局数。非常适合友谊赛。'
  },
  {
    question: '可以全屏显示吗？',
    answer:
      '可以，您可以通过浏览器激活全屏模式（PC 端按 F11，移动端按全屏按钮）。数字占据屏幕 80% 的面积，以确保最大的可见度。'
  },
  {
    question: '如果记错了分，该如何修改？',
    answer:
      '每个选手卡片上都有一个独立的减分按钮。您可以快速修正错误，而无需重新启动整个计分板。'
  },
  {
    question: '它适用于有 1 分、2 分和 3 分投篮的篮球比赛吗？',
    answer:
      '是的，在篮球模式下，会出现专门的 +1、+2 和 +3 按钮，无需额外点击即可快速记录任何得分。'
  },
  {
    question: '计分板会自动处理乒乓球的发球权吗？',
    answer:
      '是的，在乒乓球模式下，发球指示器会根据官方 ITTF 规则每 2 分（或平局后每 1 分）自动轮转。'
  },
];

const howToData = [
  {
    name: '选择您的运动项目',
    text: '从顶部的选择器中选择运动：自由模式、网球、板网球、乒乓球、排球或篮球。'
  },
  {
    name: '自定义名称',
    text: '点击"主场"或"客场"更改球员或球队名称。'
  },
  {
    name: '一键加分',
    text: '点击巨大的计分区域即可加分。在篮球模式中，请使用 +1、+2 或 +3 按钮。'
  },
  {
    name: '指示发球',
    text: '使用底部角落的发球按钮标记谁正在发球。黄色指示器会自动出现。'
  },
  {
    name: '修正错误',
    text: '如果您误加了分，请使用"−"按钮。无需重新启动整个计分板。'
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer }
  }))
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
    text: step.text
  }))
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'zh'
};

export const content: ToolLocaleContent<ScoreKeeperUI> = {
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
      text: '您口袋里的数字裁判',
      level: 2
    },
    {
      type: 'paragraph',
      html: '在激烈的比赛中，很容易记混比分。"是 4-3 还是 3-4？"。这款计分板旨在纠纷发生前将其化解。其界面采用占据几乎整个卡片的<strong>巨型按钮</strong>，您无需看屏幕，只需伸手触碰长椅上的手机即可加分。'
    },
    {
      type: 'title',
      text: '智能运动选择器',
      level: 2
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '网球 / 板网球模式',
          description:
            '包含盘数和局数计数器的自适应界面。系统会自动处理 15-30-40-AD 序列。',
          icon: 'mdi:tennis',
          points: ['官方规则', '占先管理', '盘数计数器']
        },
        {
          title: '篮球模式',
          description:
            '计分板可识别运动项目并更改界面。配备专门的 +1、+2 和 +3 按钮。',
          icon: 'mdi:basketball',
          points: ['快速记录三分', '罚球记录', '无额外点击']
        },
        {
          title: '乒乓球模式',
          description:
            '无需再费心记忆该轮到谁发球。视觉指示器每 2 分会自动轮转。',
          icon: 'mdi:table-tennis',
          points: ['ITTF 规则', '发球轮转', '平分模式（11 分制）']
        },
      ]
    },
    {
      type: 'title',
      text: '专为运动设计的特性项目',
      level: 2
    },
    {
      type: 'list',
      items: [
        '<strong>高可见度：</strong> 数字占据屏幕 80% 的面积，确保在阳光下也能清晰阅读。',
        '<strong>可编辑名称：</strong> 点击"主场"或"客场"设置球员姓名。',
        '<strong>防止错误：</strong> 独立的减号按钮可在不重启的情况下快速修正错误。',
        '<strong>脱机工作：</strong> 加载完成后，比赛期间无需联网。',
      ]
    },
  ],
  ui: {
    playerA: '主场',
    playerB: '客场',
    swapSides: '交换场地',
    reset: '重置',
    serve: '发球',
    sets: '盘数',
    games: '局数',
    victory: '胜利！',
    newGame: '新比赛',
    continueGame: '继续比赛',
    resetConfirm: '重置计分板？',
    sportSimple: '自由模式（足球、井字棋...）',
    sportTennis: '网球',
    sportPadel: '板网球',
    sportPingpong: '乒乓球',
    sportVolleyball: '排球',
    sportBasket: '篮球'
  }
};
