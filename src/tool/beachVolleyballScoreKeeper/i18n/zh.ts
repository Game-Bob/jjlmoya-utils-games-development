import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { BeachVolleyballLocaleContent } from '../entry';

const slug = 'beach-volleyball-scorekeeper';
const title = '沙滩排球记分员 & 轮转追踪器';
const description = '通过交互式俯视金色沙滩球场可视化界面，追踪沙滩排球比分、发球轮转顺序、风向换边和局数。';

const faq = [
  {
    question: '沙滩排球中，队伍什么时候交换场地？',
    answer: '为确保户外条件（风、阳光、沙地）下的公平性，队伍在前两局每7分交换一次场地，在决胜局每5分交换一次场地。',
  },
  {
    question: '沙滩排球的发球轮转是如何工作的？',
    answer: '每队有2名球员，必须交替发球。当一队赢得一次发球权（侧出）时，他们必须轮换发球手，让上次没有发球的球员下次发球。',
  },
  {
    question: '赢得一局沙滩排球需要多少分？',
    answer: '第1局和第2局打至21分。如果需要第三局，则打至15分。在任何情况下，一队必须至少领先2分才能获胜。',
  },
];

const howTo = [
  {
    name: '设置阵容',
    text: '为A队和B队的两名球员输入自定义名字。',
  },
  {
    name: '记录得分',
    text: '点击队伍卡片或点击交互式沙地场地来增加分数。阵容和轮转会自动更新。',
  },
  {
    name: '遵循换边警告',
    text: '当换边横幅滑下时，进行物理换边并点击交换按钮来反转场地方向。',
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

export const content: BeachVolleyballLocaleContent = {
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
      text: '在线沙滩排球记分板 & 发球轮转追踪器',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '在烈日下追踪发球顺序和队伍位置可能很困难。这款专业沙滩排球记分员采用沙地质感的高对比度数字球场布局，针对户外可见性进行了优化。它避免了眩光阅读问题，自动执行换边规则，并追踪在每次侧出得分后两名球员中谁应该发球。',
    },
    {
      type: 'title',
      text: '理解沙滩排球轮转和发球规则',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '虽然在2对2的沙滩排球中没有基于球场位置的固定位置或轮转犯规，但球员必须严格交替发球。每当接发球队赢得一次 rally（称为侧出），他们就获得发球权。上次本队发球时没有发球的球员必须成为新的发球手。发球顺序错误属于犯规，对手将获得一分。这款数字记分板在球员圆形节点旁设有活动发球指示和弹跳球标识，以防止轮转错误。',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '官方FIVB规则',
          description: '符合官方得分指南，包括局数限制和换边规则。',
          icon: 'mdi:volleyball',
          points: ['21分制（决胜局15分）', '严格2分领先获胜', '自动换边'],
        },
        {
          title: '轮转追踪',
          description: '再也不用争论或困惑轮到谁发球了。',
          icon: 'mdi:account-sync-outline',
          points: ['发光发球指示器', '沙地上映射的姓名缩写', '阵容叠加弹窗'],
        },
        {
          title: '户外优化',
          description: '专为在直射阳光下的沙地球场实际比赛而设计。',
          icon: 'mdi:weather-sunny',
          points: ['高对比度黄色主题', 'Wake Lock屏幕常亮', '滑动手势撤销分数'],
        },
      ],
    },
    {
      type: 'title',
      text: '交互功能 & 游戏设置',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>金色沙地SVG球场:</strong> 直观反映比赛状态。直接点击任一球场半场为该队加分。',
        '<strong>球场旋转动画:</strong> 当换边警告触发时，点击切换按钮将整个SVG球场旋转180度，使显示与您的实际位置对齐。',
        '<strong>FIVB换边警报:</strong> 当总分是7的倍数（第1、2局）或5的倍数（最后一局）时，显示高可见性警告横幅。',
        '<strong>沙溅粒子效果:</strong> 分数变化时，从点击坐标迸发动画沙粒，提供视觉反馈。',
        '<strong>手势撤销控制:</strong> 在卡片上向下滑动即可立即撤销最后记录的分数。',
      ],
    },
    {
      type: 'title',
      text: '为什么沙滩排球中队伍要交换场地',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '与室内排球不同，沙滩排球比赛深受环境因素的影响，如阳光眩光、高温、风力强度和沙地状况。频繁换边确保没有队伍因有利的风向或太阳位置而获得不公平优势。规则规定在前两局每7分换边一次，在第三局每5分换边一次。',
    },
  ],
  ui: {
    teamA: '队伍1',
    teamB: '队伍2',
    points: '得分',
    sets: '局数',
    reset: '重置',
    resetConfirm: '重置比赛？所有分数和阵容都将丢失。',
    cancel: '取消',
    switchSides: '交换场地',
    switchSidesDesc: '累计得分已达到换边阈值！',
    fullscreen: '全屏',
    exitFullscreen: '退出全屏',
    player1: '球员1',
    player2: '球员2',
    serving: '发球中',
    winner: '胜方',
    undo: '撤销',
  },
};
