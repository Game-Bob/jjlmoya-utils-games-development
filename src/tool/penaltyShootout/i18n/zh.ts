import { bibliographyEntries } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PenaltyShootoutUI } from '../ui';

const slug = 'penalty-shootout-calculator';
const title = '点球大战在线记分牌：足球点球实时计数器';
const description =
  '实时记录足球点球大战。支持前5轮点球计数、数学胜负判定、猝死决胜规则及胜利庆祝动画。';

const faqData = [
  {
    question: '点球大战会在什么情况下提前结束？',
    answer:
      '当一方领先的进球数超过另一方在剩余罚球轮次中可能达到的最高进球数时，点球大战立即提前结束。',
  },
  {
    question: '点球大战的猝死规则（突然死亡法）是如何运作的？',
    answer:
      '如果前5轮点球结束后双方打平，则进入猝死阶段。双方轮流各罚一球，直到出现一方罚中而另一方罚失的情况。',
  },
  {
    question: '点球大战中由哪一方先主罚？',
    answer:
      '主裁判通过掷硬币决定比赛球门，随后进行第二次掷硬币决定哪一方先主罚点球。',
  },
  {
    question: '点球大战期间可以更换守门员吗？',
    answer:
      '因伤无法继续比赛的守门员，在所在球队尚未用完换人名额的前提下，可以由指定的替补守门员替换。',
  },
];

const howToData = [
  {
    name: '输入球队名称',
    text: '在点球主罚开始前，在输入框中填入参赛两队的自定义名称。',
  },
  {
    name: '记录每轮罚球',
    text: '每次罚球后点击"进球"或"未进"。应用将自动更新比分、指示灯及出场顺序。',
  },
  {
    name: '进入猝死阶段',
    text: '若前5轮罚球战平，记分牌将自动切换至猝死决胜模式。',
  },
  {
    name: '宣布获胜球队',
    text: '在确认数学胜利或猝死决胜后，全屏冠军弹窗将隆重宣布获胜球队。',
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

export const content: ToolLocaleContent<PenaltyShootoutUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography: bibliographyEntries,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'IFAB官方点球大战规则详解',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '点球大战（官方称为<em>罚球点球决胜</em>）是根据IFAB足球比赛规则第10条，在淘汰赛平局时决定胜负的法定方式。',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '5轮', label: '常规罚球数' },
        { value: '11米', label: '罚球点距离' },
        { value: '1v1', label: '主罚者vs门将' },
        { value: 'ABBA / AB', label: '主罚顺序模式' },
      ],
    },
    {
      type: 'tip',
      title: '数学提前终结规则',
      html: '若一方领先的比分已经超过对手剩余所有罚球轮次可能获得的最大进球数，裁判员应立即终止点球大战。',
    },
    {
      type: 'title',
      text: '常规5轮 vs 猝死阶段对比',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '常规阶段（前5轮）',
          description: '两队轮流各主罚5次点球。仅在对手数学上无法追平时提前结束。',
        },
        {
          title: '猝死阶段（第6轮起）',
          description: '单轮一对一决胜。在完成相同主罚次数后，出现净胜球即判定比赛结束。',
        },
      ],
    },
    {
      type: 'title',
      text: 'IFAB点球决胜核心要点',
      level: 2,
    },
    {
      type: 'table',
      headers: ['规则项目', 'IFAB官方标准要求'],
      rows: [
        ['主罚资格', '仅在终场哨响时留在场上的队员方有资格参加点球决胜。'],
        ['守门员位置', '主罚瞬间，守门员必须至少有一只脚的一部分踩在或接触球门线上。'],
        ['助跑假动作', '助跑过程中的假动作是被允许的；但完成助跑后的假动作属于违规。'],
        ['人数对等原则', '若一方因红牌导致人数减少，另一方必须减少相应人数以保持人数一致。'],
      ],
    },
    {
      type: 'title',
      text: '点球大战决胜方式的优缺点',
      level: 2,
    },
    {
      type: 'proscons',
      title: '点球机制评估',
      items: [
        {
          pro: '能在可预测的时间范围内确保决出明确的胜者。',
          con: '极高的心理压力可能会掩盖球队在120分钟常规比赛中的出色表现。',
        },
        {
          pro: '为现场及电视观众带来极强的紧张感与戏剧观赏性。',
          con: '单个队员的罚失往往会承受不成比例的巨大心理负担。',
        },
      ],
    },
  ],
  ui: {
    teamALabel: '主队',
    teamBLabel: '客队',
    scoreGoal: '进球',
    scoreMiss: '未进',
    undo: '撤销',
    reset: '重置',
    suddenDeath: '猝死阶段',
    regularRounds: '常规轮次',
    roundLabel: '轮次',
    turnLabel: '主罚顺序',
    winnerTitle: '获胜球队确定',
    unreachableLead: '常规轮次不可逆转分差',
    regularRoundsWin: '常规5轮点球获胜',
    suddenDeathWin: '猝死阶段点球获胜',
    statusPending: '等待主罚',
    statusScored: '主罚命中',
    statusMissed: '主罚未中',
  },
};
