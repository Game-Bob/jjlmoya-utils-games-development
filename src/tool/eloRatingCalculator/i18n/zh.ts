import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { EloRatingCalculatorUI } from '../ui';

const slug = 'elo-rating-calculator';
const title = 'ELO评分计算器：国际象棋、电竞和体育';
const description = '免费的ELO评分计算器，支持胜负平。输入双方评分，选择K系数，即可获得精确的分数变化、预期得分、新ELO和对手ELO。';

const ui: EloRatingCalculatorUI = {
  playerLabel: '玩家评分',
  opponentLabel: '对手评分',
  kFactorLabel: 'K系数',
  resultLabel: '比赛结果',
  winLabel: '胜',
  drawLabel: '平',
  lossLabel: '负',
  calculateLabel: '计算',
  resetLabel: '重置',
  expectedLabel: '预期',
  deltaLabel: '变化',
  newRatingLabel: '新评分',
  opponentNewRatingLabel: '对手新ELO',
  kFactorHelpTitle: '什么是K系数？',
  kFactorHelpText: 'K控制更新的激进程度。低K值意味着排名稳定。高K值意味着每次结果都会更快地变动评分。',
  kFactorLowText: '稳定',
  kFactorHighText: '波动',
  resultSummaryLabel: '比赛影响',
  initialImpactText: '平局保持积分榜紧凑',
  historyVersusLabel: 'vs',
  historyToLabel: '对',
  playerPointsLabel: '玩家得分',
  opponentEloLabel: '对手ELO',
  particleEloLabel: 'ELO',
  particleRatingLabel: '评分',
  upsetLabel: '爆冷概率',
  favoriteLabel: '热门压力',
  balancedLabel: '势均力敌',
  historyLabel: '本地计算记录',
  noHistoryLabel: '运行计算以保存到此处',
  copiedLabel: '已复制',
  copyLabel: '复制',
  clearLabel: '清除',
  kBeginner: '初学者',
  kClub: '俱乐部',
  kTournament: '锦标赛',
  kElite: '精英',
};

const faqData = [
  { question: '比赛后如何计算ELO评分变化？', answer: '输入您当前的ELO、对手ELO、比赛结果和K系数。计算器会估算您的预期得分，与实际结果比较，然后返回精确的增减分数。' },
  { question: 'ELO中K系数是什么意思？', answer: 'K系数控制评分敏感度。低K系数使评分稳定且变动缓慢。高K系数使评分反应更快，这对新玩家、短赛季或活跃的本地天梯很有用。' },
  { question: '为什么击败低分对手时获得更少的ELO分？', answer: '因为公式已经预判你会赢。击败评分远低于你的对手只是证实了预测，所以评分涨幅很小。击败更强的对手更出人意料，因此得分更多。' },
  { question: '对手会失去相同数量的ELO分吗？', answer: '在标准的双人ELO交换中，是的。一方获得的分数从另一方扣除，因此计算器同时显示玩家的新ELO和对手的新ELO。' },
  { question: '我可以在国际象棋之外使用这个ELO计算器吗？', answer: '可以。ELO适用于任何重复的一对一竞技，其中更强的玩家更有可能获胜，包括电竞、网球天梯、板式网球群组、乒乓球、辩论俱乐部和梦幻联赛。' },
];

const howTo = [
  { name: '输入玩家评分', text: '输入您要计算变化的玩家的当前评分。' },
  { name: '输入对手评分', text: '添加对手评分，以便计算器估算预期得分。' },
  { name: '选择K系数和结果', text: '使用较低的K系数获得稳定的排名，或在需要快速调整评分时使用较高的K系数，然后选择胜、平或负。' },
  { name: '查看新评分', text: '计算器显示预期得分、评分变化、您的新ELO和分数交换后对手的新ELO。' },
];

const seo = [
  { type: 'title' as const, text: '计算任何比赛后的ELO分数', level: 2 as const },
  {
    type: 'paragraph' as const,
    html: '当您需要快速回答一个非常实际的问题时，使用此ELO评分计算器：<strong>这个结果之后我会获得或失去多少ELO分？</strong>输入您的评分、对手评分、比赛结果和K系数。该工具在同一结果卡中计算预期得分、评分变化、您的新ELO和对手的新ELO。'
  },
  {
    type: 'summary' as const,
    title: '此计算器回答的问题',
    items: [
      '击败更强或更弱对手后您获得多少ELO分。',
      '爆冷失利后您失去多少ELO分。',
      '平局应该提高还是降低您的评分。',
      '相同分数交换后对手的评分是多少。',
      '更改K系数如何使评分变动趋于稳定或波动。',
    ]
  },
  {
    type: 'stats' as const,
    items: [
      { value: '1.0', label: '胜利得分', description: '胜利在与预期得分比较前被视为满分。' },
      { value: '0.5', label: '平局得分', description: '平局恰好处于胜负之间，因此对抗更强的对手时可以获得分数。' },
      { value: '0.0', label: '失败得分', description: '输给评分较低的对手通常代价更大，因为这是意料之外的。' },
    ]
  },
  { type: 'title' as const, text: 'ELO公式在做什么', level: 2 as const },
  {
    type: 'diagnostic' as const,
    title: '每个结果背后的三个步骤',
    description: '计算器遵循标准ELO思路，无需您手动处理公式。',
    items: [
      { label: '预期得分', value: '评分差距被转换为概率风格的得分。评分更高的玩家预期获得更多分数。' },
      { label: '实际得分', value: '胜计为1，平计为0.5，负计为0。' },
      { label: '评分变化', value: '实际得分与预期得分之差乘以K系数并四舍五入为分数。' },
    ]
  },
  {
    type: 'table' as const,
    headers: ['情况', '通常发生什么', '为什么会发生'],
    rows: [
      ['你击败了更强的对手', '大幅ELO增长', '你的实际得分远超预期'],
      ['你击败了较弱的对手', '小幅ELO增长', '公式已经预期你会赢'],
      ['你与更强的对手打平', '小幅ELO增长', '平局可能超出你的预期得分'],
      ['你输给了较弱的对手', '大幅ELO下降', '结果比预期更差'],
    ]
  },
  { type: 'title' as const, text: '为你的评分系统选择合适的K系数', level: 2 as const },
  {
    type: 'paragraph' as const,
    html: '<strong>K系数是ELO系统的灵敏度旋钮。</strong>它不决定谁应该赢。它决定评分表对结果的反应有多强烈。如果您的联赛有很多比赛和成熟的评分，较低的K值可以保持表格平稳。如果玩家是新手或赛季较短，较高的K值有助于评分更快跟上。'
  },
  {
    type: 'table' as const,
    headers: ['K系数', '适用场景', '用户应有的期望'],
    rows: [
      ['10到16', '成熟的国际象棋俱乐部、专家池、长期排名', '每次比赛后变化很小的非常稳定的评分'],
      ['20到32', '本地联赛、俱乐部天梯、定期锦标赛', '平衡的变动，感觉反应灵敏但不过度'],
      ['40到60', '新玩家、短赛季、电竞天梯、非正式群组', '当前评分可能不准确时的快速修正'],
      ['60以上', '仅实验性赛制或临时评分', '一场比赛就能大幅改变积分的极其波动的评分'],
    ]
  },
  {
    type: 'tip' as const,
    title: '大多数用户的最佳默认值',
    html: '如果您不遵循官方联合会规则，从<strong>K 32</strong>开始。它对活跃的天梯足够灵敏，同时又足够稳定，不会让一次幸运的结果完全改写排名。'
  },
  { type: 'title' as const, text: '如何阅读您的ELO计算器结果', level: 2 as const },
  {
    type: 'list' as const,
    items: [
      '<strong>预期：</strong>公式在赛前预测的分数。预期得分越高，意味着您当时是热门。',
      '<strong>变化：</strong>玩家评分中增加或扣除的精确ELO分数。',
      '<strong>新评分：</strong>应用结果后的玩家评分。',
      '<strong>对手新ELO：</strong>反向分数变动后的对手评分。',
      '<strong>比赛影响：</strong>用通俗语言总结结果对积分表的移动力度。',
    ]
  },
  {
    type: 'comparative' as const,
    columns: 3 as const,
    items: [
      {
        title: '国际象棋和桌面游戏',
        description: '为俱乐部之夜、在线活动和私人评分池计算赛后评分。',
        icon: 'mdi:chess-knight',
        points: ['支持胜负平', '显示对手ELO', '适合长期排名']
      },
      {
        title: '电竞天梯',
        description: '在技能可能快速变化的重复一对一比赛后，更新玩家或团队排名。',
        icon: 'mdi:gamepad-variant',
        points: ['更高的K系数选项', '快速评分修正', '明确的爆冷奖励']
      },
      {
        title: '体育天梯',
        description: '为网球、板式网球、壁球、乒乓球、羽毛球和本地联赛维护公平排名。',
        icon: 'mdi:tennis',
        points: ['简单的手动更新', '适用于俱乐部', '对组织者友好']
      },
    ]
  },
  {
    type: 'proscons' as const,
    title: 'ELO何时是好的评分选择',
    items: [
      {
        pro: '非常适合重复的一对一比赛，其中更强的玩家应该更频繁地获胜。',
        con: '不太适合难以区分个人贡献的团队运动。'
      },
      {
        pro: '易于解释，因为击败更强的对手值更多分。',
        con: '需要足够的比赛场次，评分才能对全新玩家显得准确。'
      },
      {
        pro: '足够简单，可以在电子表格、俱乐部天梯或联赛表中维护。',
        con: 'K系数规则必须一致，否则排名可信度降低。'
      },
    ]
  },
  {
    type: 'message' as const,
    title: '联赛组织者须知',
    html: '在赛季开始前选择您的K系数并公布。当每个人都知道在输入结果之前评分是如何计算的，玩家就会更信任ELO表。'
  },
];

const schemas: [WithContext<FAQPage>, WithContext<HowTo>, WithContext<SoftwareApplication>] = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } }))
  },
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description,
    step: howTo.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text }))
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description,
    applicationCategory: 'SportsApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }
  },
];

export const content: ToolLocaleContent<EloRatingCalculatorUI> = { slug, title, description, ui, seo, faq: faqData, bibliography, howTo, schemas };
