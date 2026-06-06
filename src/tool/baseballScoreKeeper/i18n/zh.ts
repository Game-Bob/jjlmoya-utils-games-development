import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { BaseballScoreKeeperLocaleContent } from '../entry';

const slug = 'baseball-scorekeeper';
const title = '高级棒球与垒球记分员 内置钻石跑垒追踪器';
const description = '实时追踪比赛得分、安打和失误。交互式钻石图形显示跑垒员位置，球数统计，逐局积分历史网格。';

const faqData = [
  {
    question: '球数统计器如何工作？',
    answer: '球数统计器显示当前击球员的坏球数和好球数。四坏球保送，三好球三振出局。可为青少年联赛调整限制。',
  },
  {
    question: '交互式钻石图形显示什么？',
    answer: '钻石图形显示一垒、二垒和三垒。点击垒位会高亮显示橙色，表明该垒有跑垒员。安打时跑垒员自动进垒。',
  },
  {
    question: '得分、安打和失误如何记录？',
    answer: 'R H E矩阵显示两队的得分、安打和失误。逐局历史记录显示所有局中的得分过程。',
  },
];

const howToData = [
  {
    name: '记录每次投球',
    text: '点击好球、坏球、界外球、安打或出局来记录每次投球。球数会根据结果自动更新。',
  },
  {
    name: '管理跑垒员',
    text: '点击钻石上的垒位来放置或移除跑垒员。安打时跑垒员自动进垒。',
  },
  {
    name: '追踪局数进程',
    text: '局数显示当前半局。三出局后自动切换上半局和下半局。',
  },
  {
    name: '查看比赛计分表',
    text: '查看R H E总结和滚动逐局历史网格，了解完整得分过程。',
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

export const content: BaseballScoreKeeperLocaleContent = {
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
      text: '棒球记分员 免费在线 实时追踪得分安打失误',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '需要为下一场比赛找一个可靠的棒球记分员吗？这款免费在线工具不仅追踪得分、安打和失误，还提供实时显示跑垒员位置的交互式钻石图形。每一球都很关键，我们的数字记分板确保您不会遗漏球数、出局数或当前局数。无论是执教少年棒球联赛、为垒球锦标赛记分，还是管理高中校队比赛，这款工具都能自动处理完整的比赛计分表，让您专注于赛场上的每一个动作。',
    },
    {
      type: 'title',
      text: '这个棒球记分板如何节省时间并防止错误',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '手动记分容易出错，尤其是在节奏紧凑的比赛中。一次好球的遗漏或一个跑垒员的忽视都可能打乱整个计分表。这款数字记分员将繁琐的部分自动化。点击好球、坏球、界外球、安打或出局，记分板会立即更新球数。当击球员被保送或三振出局时，工具会自动重置球数。三出局后，它会自动切换上下半局并记录得分。R H E矩阵和逐局历史网格让您一目了然地看到比赛的完整画面。',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '实时投球计数',
          description: '自动追踪坏球好球，检测每次击球的保送和三振。',
          icon: 'mdi:baseball',
          points: ['坏球追踪至4个', '好球追踪至3个', '判定后自动重置'],
        },
        {
          title: '跑垒员管理',
          description: '交互式钻石精确显示谁在一垒、二垒或三垒。',
          icon: 'mdi:diamond-stone',
          points: ['点击垒位设置跑垒员', '占用时视觉高亮', '换局时自动清除'],
        },
        {
          title: '完整比赛计分表',
          description: '完整的R H E统计数据与滚动逐局得分历史。',
          icon: 'mdi:scoreboard-outline',
          points: ['得分安打失误', '逐局网格', '两队累计总数'],
        },
      ],
    },
    {
      type: 'title',
      text: '谁需要这个棒球得分追踪器',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '这款工具专为需要记分的所有人打造：希望为球员提供清晰数字显示的青少年棒球教练、在没有专职记分员的情况下管理比赛的垒球联赛志愿者、在看台上追踪孩子比赛的家长，以及希望拥有辅助确认系统的裁判。界面支持任何设备，无论是在休息区使用的手机、挂在围栏上的平板还是板凳上的笔记本电脑。无需安装，打开浏览器即可开始记分。',
    },
    {
      type: 'list',
      items: [
        '<strong>自动球数管理:</strong> 坏球和好球在保送、三振、安打和出局后自动重置。无需手动重置。',
        '<strong>触控钻石图形:</strong> 点击一垒、二垒或三垒放置或移除跑垒员。钻石以金色高亮显示已占垒位。',
        '<strong>逐局得分:</strong> 每个半局记录在滚动网格中。精确查看每支球队在全部九局中的得分情况。',
        '<strong>无需设置:</strong> 打开页面立即开始记分。点击得分上方的标签即可自定义球队名称。',
      ],
    },
    {
      type: 'title',
      text: '棒球记分如此简单 计数 钻石 计分表 一屏尽览',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '棒球记分需要同时追踪多个信息：坏球好球数、出局数、跑垒员所在的垒位、每队得分以及当前局数。任何一个信息的遗漏都会造成混乱和不准确的记录。这款工具将所有信息整合到一个屏幕中。计数圆点让坏球好球一目了然。钻石图形显示跑垒员位置。R H E表格展示完整计分表。局数网格水平滚动显示完整的得分历史。每次点击都会实时更新所有内容。',
    },
    {
      type: 'grid',
      columns: [
        { type: 'card', title: '教练', html: '<p>在休息区为全队保持一个清晰可见的数字记分板。</p>' },
        { type: 'card', title: '志愿者', html: '<p>无需记分经验。工具自动处理所有复杂的追踪工作。</p>' },
        { type: 'card', title: '家长', html: '<p>在看台上通过手机上的实时比分显示可靠地追踪比赛。</p>' },
        { type: 'card', title: '球员', html: '<p>赛后查看逐局得分以分析表现。</p>' },
      ],
    },
  ],
  ui: {
    title: '棒球记分员',
    description: '通过钻石视图追踪得分、安打和失误。',
    away: '客队',
    home: '主队',
    runs: 'R',
    hits: 'H',
    errors: 'E',
    inning: '局',
    topInning: '上半局',
    bottomInning: '下半局',
    balls: '坏球',
    strikes: '好球',
    outs: '出局',
    strikeBtn: '好球',
    ballBtn: '坏球',
    foulBtn: '界外',
    hitBtn: '安打',
    outBtn: '出局',
    walkBtn: '保送',
    runBtn: '+1 得分',
    errorBtn: '失误',
    newBatter: '新击球员',
    resetMatch: '重置比赛',
    resetConfirm: '重置当前比赛？所有得分将丢失。',
    cancel: '取消',
    confirm: '确认',
    total: '总计',
    fullscreen: '全屏',
    toggleSound: '切换声音',
  },
};
