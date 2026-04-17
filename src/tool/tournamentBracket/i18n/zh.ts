import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TournamentBracketUI } from '../ui';

const slug = 'tournament';
const title = '免费在线对阵图生成器及锦标赛组织工具';
const description = '无需注册，免费组织锦标赛并创建单败淘汰赛对阵图。非常适合 FIFA、板网球、电子竞技和桌游。100% 适配移动端。';

const ui: TournamentBracketUI = {
  tournamentInProgress: '锦标赛进行中',
  nextMatch: '下一场比赛',
  share: '分享',
  backNew: '返回 / 新建',
  back: '返回',
  newTournament: '新建锦标赛',
  setupSubtitle: '设置并生成您的竞赛对阵图。',
  tournamentNameLabel: '锦标赛名称',
  tournamentNamePlaceholder: '例如：夏季锦标赛',
  addPlayersLabel: '添加参赛者',
  addPlayerPlaceholder: '姓名... 或多个姓名以逗号隔开',
  playersLabel: '玩家',
  clearAll: '清空全部',
  emptyList: '列表为空',
  howItWorks: '它是如何工作的？',
  howItWorksText: '添加参赛者，命名并生成。系统将自动创建对阵，并在人数为奇数时处理“轮空”（直通下一轮）。',
  historyLabel: '历史记录',
  noHistory: '暂无保存的锦标赛',
  noOldTournaments: '暂无过往锦标赛',
  generateBtn: '生成对阵图',
  shuffleLabel: '随机对阵',
  scoreLabel: '开启计分（可选）',
  dragHint: '拖动以移动',
  roundFinal: '决赛',
  roundSemifinal: '半决赛',
  roundQuarter: '四分之一决赛',
  roundPrefix: '第',
  byeLabel: '轮空',
  waiting: '等待中...',
  emptyRound: '空回合',
  confirmClearPlayers: '清空整个玩家列表吗？',
  alertMinPlayers: '您至少需要 2 名玩家。',
  alertLoadFailed: '无法加载锦标赛。',
  confirmDeleteTournament: '从历史记录中永久删除此锦标赛吗？',
  toastShareLimit: '仅支持分享 32 人以内的锦标赛',
  toastShareError: '生成链接出错',
  toastShareCopied: '链接已复制到剪贴板',
  toastShareFailed: '无法复制。URL：',
  toastFinished: '锦标赛结束！',
  defaultName: '锦标赛',
};

const faqData = [
  { question: '单败淘汰赛是如何进行的？', answer: '这是一种竞赛系统，在比赛中失利的参与者将自动从锦标赛中淘汰。胜者进入下一轮（16 强、8 强、半决赛），直到最后剩下两名选手进行总决赛。' },
  { question: '如果玩家人数是奇数怎么办？', answer: '我们的工具会自动处理“轮空”（BYE）。部分玩家将跳过第一轮直接进入第二轮，从而使对阵图始终以 2 的幂次方（2, 4, 8, 16...）结束。' },
  { question: '我可以保存并分享锦标赛对阵图吗？', answer: '可以，您可以通过即时生成的唯一链接分享对阵图。作为免注册工具，只要标签页开启，数据就会保存在您的浏览器中，同时也会存入历史记录。' },
  { question: '它适用于 FIFA 或 LoL 等电子竞技比赛吗？', answer: '绝对适用。它被设计得快速且直观，是管理快速主机游戏、电脑游戏甚至桌游和卡牌游戏比赛的理想选择。' },
  { question: '创建锦标赛是免费的吗？', answer: '是的，完全免费且无限制。没有高级方案、参与者人数限制、水印或干扰性广告。一切都能在您的浏览器中脱机运行。' },
  { question: '如果我关闭浏览器，数据会被删除吗？', answer: '不会。我们使用 LocalStorage 将您所有的锦标赛自动保存在您的设备上。您可以关闭标签页、关机，并在几天后回来：您的锦标赛依然会在那里。' },
  { question: '“下一场比赛”按钮是如何工作的？', answer: '系统会自动检测下一场已准备好（双方参与者已确定）但尚未有结果的对阵。按下“下一场比赛”将视图直接跳至该场比赛。' },
];

const howTo = [
  { name: '输入参赛者', text: '写下参加比赛的玩家或队伍名称。' },
  { name: '生成对阵图', text: '点击生成按钮。系统将自动创建对阵和必要的轮次。' },
  { name: '更新结果', text: '点击每场比赛的获胜者，使他们自动晋级对阵图的下一阶段。' },
  { name: '结束', text: '锦标赛完成后，将显示最终冠军。' },
];

const seo = [
  {
    type: 'title' as const,
    text: '免费在线对阵图生成器及锦标赛组织工具',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: '使用功能最全、免费且无需注册的锦标赛组织器管理您的体育、视频游戏或桌游竞赛。在秒级时间内通过<strong>集成计分系统</strong>、自动历史记录和智能比赛导航，创建直观互动的单败淘汰赛对阵图。一切都能在您的浏览器中直接脱机运行。',
  },
  {
    type: 'title' as const,
    text: '如何创建单败淘汰赛锦标赛？',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: '<strong>为您的锦标赛命名</strong>，添加参赛者（逐个添加或通过英文逗号分隔的列表粘贴），根据需要随机对阵，生成对阵图，通过点击每场比赛的获胜者管理结果，并使用“下一场比赛”按钮在未决比赛之间切换。',
  },
  {
    type: 'title' as const,
    text: '高级功能',
    level: 2 as const,
  },
  {
    type: 'list' as const,
    items: [
      '<strong>批量输入：</strong> 一次性添加多个以逗号隔开的参赛者。',
      '<strong>精确计分：</strong> 支持输入 3-1 或 21-19 等比分的计分系统。',
      '<strong>智能导航：</strong> “下一场比赛”按钮可跳至下一个待定对阵。',
      '<strong>可拖拽对阵图：</strong> 桌面端支持自由滚动的视图，适用于大型锦标赛。',
      '<strong>持久历史记录：</strong> 所有锦标赛都会自动保存在您的浏览器中。',
      '<strong>自动轮空处理：</strong> 轮空和直接晋级无需手动操作。',
      '<strong>通过 URL 分享：</strong> 生成压缩链接，将对阵图发送给任何人。',
    ],
  },
  {
    type: 'title' as const,
    text: '适用于任何竞赛',
    level: 2 as const,
  },
  {
    type: 'comparative' as const,
    columns: 3 as const,
    items: [
      {
        title: '视频游戏 & 电子竞技',
        description: '非常适合 FIFA、FC25、Valorant、英雄联盟、街霸、铁拳、任天堂明星大乱斗或火箭联盟。',
        icon: 'mdi:controller-classic',
        points: ['快速对阵', '无队伍限制', '即时分享'],
      },
      {
        title: '体育 & 球拍运动',
        description: '管理板网球、网球、乒乓球、羽毛球、室内五人制足球或 3x3 篮球的对阵。',
        icon: 'mdi:trophy-outline',
        points: ['集成比分', '优化的移动端视图', '告别纸笔'],
      },
      {
        title: '桌游 & 卡牌游戏',
        description: '组织万智牌、宝可梦 TCG、游戏王、卡坦岛、国际象棋或多米诺骨牌比赛。',
        icon: 'mdi:cards-playing-outline',
        points: ['高达 64 名玩家', '轮次历史', '轮空管理'],
      },
    ],
  },
  {
    type: 'title' as const,
    text: '什么是“轮空” (Byes) 或直通名额？',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: '在理想的单败淘汰赛中，参赛者人数必须是 2 的幂次方（4, 8, 16, 32...）。当人数为奇数或非 2 的幂次方时（例如 7, 10 或 13 人），系统将在第一轮自动分配<strong>“轮空”</strong>。轮空意味着参赛者无需比赛直接晋级下一阶段。我们的算法会公平地自动计算并分配这些名额。',
  },
  {
    type: 'title' as const,
    text: '即时、免费且无需注册',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: '零门槛。无账户、无安装、无等待。添加参赛者并在瞬间生成您的锦标赛。一切都会通过 <strong>LocalStorage</strong> 自动保存在您的浏览器中：关闭标签页、关机并在几天后回来，您的锦标赛和完整历史记录依然会在那里。',
  },
];

const schemas: [WithContext<FAQPage>, WithContext<HowTo>, WithContext<SoftwareApplication>] = [
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) },
  { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })) },
  { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'SportsApplication', operatingSystem: 'Web', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } },
];

export const content: ToolLocaleContent<TournamentBracketUI> = { slug, title, description, ui, seo, faqTitle: '常见问题', faq: faqData, bibliography: [], howTo, schemas };
