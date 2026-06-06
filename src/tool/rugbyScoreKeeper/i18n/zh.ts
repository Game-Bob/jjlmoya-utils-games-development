import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { RugbyScoreKeeperLocaleContent } from '../entry';

const slug = 'rugby-scorekeeper';
const title = '高级橄榄球计分板：罚时计时与比赛时钟功能';
const description = '通过触地得分、转换攻门、罚踢和落踢射门实时追踪橄榄球比赛得分。配备罚时倒数计时器和半场管理的互动式体育场计分板。';

const faqData = [
  {
    question: '英式橄榄球比赛中如何得分？',
    answer: '达阵得5分，当球员在对方阵区将球触地时获得。达阵后的转换攻门踢进球门得2分。罚踢和落踢射门各得3分。',
  },
  {
    question: '橄榄球比赛中球员收到黄牌会发生什么？',
    answer: '黄牌会导致罚时离场处罚。该球员必须在比赛进行时间内离场10分钟。在此期间，其球队将以少一人的状态比赛。罚时计时器仅在比赛时钟运行时才会倒计时。',
  },
  {
    question: '英式橄榄球比赛时长是多少？',
    answer: '标准英式橄榄球比赛由两个40分钟的半场组成，中场休息10分钟。在受伤或严重事件期间，比赛时钟会暂停。可能会因中断时间而增加额外时间。',
  },
];

const howToData = [
  {
    name: '记录得分事件',
    text: '点击达阵、转换攻门、罚踢或落踢射门按钮来记录得分。点击达阵后，转换攻门按钮会自动亮起。',
  },
  {
    name: '管理罚时处罚',
    text: '点击黄卡将球员罚出场。输入其姓名或号码，10分钟倒计时将自动开始。',
  },
  {
    name: '控制比赛时间',
    text: '使用比赛时钟追踪两个40分钟的半场。在受伤时暂停时钟，并在比赛重新开始后续时。',
  },
  {
    name: '查看得分进程',
    text: '在实时计分板上监控主客队得分。查看得分摘要，了解达阵、转换攻门、罚踢和落踢射门的详细数据。',
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

export const content: RugbyScoreKeeperLocaleContent = {
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
      text: '免费在线橄榄球计分板：实时比赛追踪',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '使用我们的互动数字计分板掌控橄榄球比赛得分。实时记录达阵、转换攻门、罚踢和落踢射门。罚时管理系统自动倒计时球员处罚时间，比赛时钟精准计时两个半场。无论您是裁判本地俱乐部比赛还是执教青年队，此工具都能自动处理所有得分和计时细节。',
    },
    {
      type: 'title',
      text: '英式橄榄球得分系统详解',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '英式橄榄球有四种得分方式，每种都需要不同的技能和策略。达阵是最有价值的进攻手段，奖励突破防守线并成功将球触地于达阵区的球队。达阵后，得分球队尝试转换攻门射门争取额外两分。罚踢和落踢射门增加了战术深度，让球队可以在开放比赛或因对方犯规后得分。',
    },
    {
      type: 'comparative',
      columns: 4,
      items: [
        {
          title: '达阵',
          description: '在达阵区将球触地得5分。',
          icon: 'mdi:rugby',
          points: ['获得5分', '获得转换攻门机会', '需要球触地'],
        },
        {
          title: '转换攻门',
          description: '达阵后踢球穿过门柱，成功得2分。',
          icon: 'mdi:goal',
          points: ['成功得2分', '从达阵位置踢球', '必须越过横梁'],
        },
        {
          title: '罚踢',
          description: '对方犯规后踢球射门，成功得3分。',
          icon: 'mdi:alert-octagon',
          points: ['获得3分', '可选择踢球或快踢', '常决定焦灼比赛胜负'],
        },
        {
          title: '落踢射门',
          description: '开放比赛中反弹踢球穿过门柱，得3分。',
          icon: 'mdi:circle-outline',
          points: ['获得3分', '球必须先触地', '高压下决定胜负的关键球'],
        },
      ],
    },
    {
      type: 'title',
      text: '了解罚时系统',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '罚时系统是针对危险行为或重复犯规的临时处罚机制。当裁判出示黄牌时，球员必须在比赛进行时间内离场十分钟。在此期间，其球队将以少一人的状态比赛，为对方创造人数优势。罚时计时器仅在比赛时钟运行时倒计时，确保无论比赛中断与否都能公平执行处罚。',
    },
    {
      type: 'list',
      items: [
        '<strong>黄牌处罚：</strong>因危险比赛或球队重复犯规，罚时十分钟。',
        '<strong>人数劣势：</strong>处罚期间，犯规球队以14人而非15人比赛。',
        '<strong>自动回归：</strong>计时器到期后，球员自动从中线重新加入比赛。',
        '<strong>升级为红牌：</strong>第二张黄牌或一次严重违规将导致红牌并永久罚下。',
      ],
    },
    {
      type: 'title',
      text: '比赛计时与半场管理',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '标准英式橄榄球比赛分为两个40分钟的半场，中场休息10分钟。比赛时钟在活跃比赛期间持续运行，但在受伤、严重犯规审核或其他中断时可由裁判暂停。此数字计分板包含精确的比赛时钟，具备暂停和恢复控制、自动半场追踪以及每个比赛时段的清晰视觉指示器。',
    },
    {
      type: 'title',
      text: '为何使用数字橄榄球计分板',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '由于得分方式多样、罚时计时要求和半场管理需求，橄榄球的手动计分颇具挑战性。此浏览器工具提供准确的实时计分、自动罚时倒计时和精确的比赛计时。教练可以专注于比赛策略而非算术，裁判拥有可靠的备用计分系统，球员则能一目了然地查看比赛状态。',
    },
  ],
  ui: {
    title: '橄榄球计分板',
    description: '追踪比赛得分和罚时计时器。',
    home: '主队',
    away: '客队',
    score: '得分',
    tryLabel: '达阵 +5',
    conversion: '转换攻门 +2',
    penalty: '罚踢 +3',
    dropGoal: '落踢射门 +3',
    conversionYes: '是',
    conversionNo: '否',
    sinBin: '黄牌',
    sinBinTitle: '罚时离场',
    sinBinPlayer: '球员姓名或号码：',
    sinBinAdd: '开始处罚',
    sinBinEmpty: '无执行中的处罚',
    sinBinReturn: '已回归',
    matchClock: '比赛时钟',
    half: '半场',
    half1: '上半场',
    half2: '下半场',
    startMatch: '开球',
    pauseMatch: '暂停',
    resumeMatch: '继续',
    resetMatch: '重置比赛',
    resetConfirm: '重置当前比赛？所有得分和计时器都将丢失。',
    cancel: '取消',
    confirm: '确认重置',
    period: '时段',
    scoringSummary: '得分摘要',
    tryScored: '达阵',
    conversionSuccess: '转换攻门成功',
    conversionMiss: '转换攻门失败',
    penaltyScored: '罚踢',
    dropGoalScored: '落踢射门',
    totalPoints: '总计',
    fullscreen: '全屏',
    toggleSound: '切换音效',
    eventLog: '事件日志',
    eventEmpty: '暂无事件',
    undoBtn: '撤销上一步',
    timeOff: '时间停',
    timeOn: '时间开',
  },
};
