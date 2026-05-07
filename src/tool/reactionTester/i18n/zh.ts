import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ReactionTesterUI } from '../ui';

const slug = 'reaction-test';
const title = '反应速度测试（反射神经）：在线基准';
const description = '使用我们的专业反应测试以毫秒为单位测量你的反射神经。与"乌龟"到"网络运动员"的等级竞争，并分析你的表现。';

const ui: ReactionTesterUI = {
  title: '反应测试',
  subtitle: '以毫秒为单位测量你的反应速度。5次尝试的平均值。',
  startBtn: '点击开始',
  goTitle: '开始！',
  goSubtitle: '现在点击！',
  earlyTitle: '太早了！',
  earlySubtitle: '等待绿色。',
  earlyRetry: '点击重新尝试',
  promptNext: '点击进行尝试',
  promptFinal: '查看最终结果',
  avgLabel: '最终平均值',
  copyBtn: '复制',
  tweetBtn: '推文',
  retryBtn: '重试',
  inputMouse: '鼠标',
  inputTouch: '触摸',
  inputSpace: '空格',
  historyTitle: '本地历史',
  historyBest: '前5名最佳',
  historyWorst: '前5名最差',
  historyEmpty: '玩游戏以记录你的第一个得分',
  copySuccess: '已复制！',
  shareText: '我在反应测试中得到了{ms}ms！\n等级：{rank}\n\n你能击败我吗？\n{url}',
  rankCiberatleta: '网络运动员',
  rankTigre: '老虎',
  rankHumano: '人类',
  rankTortuga: '乌龟',
  rankDormido: '睡着',
  f150: '你是机器人吗？!',
  f180: '不可思议！',
  f210: '非常快！',
  f250: '好的反应',
  f300: '还不错...',
  f400: '有点慢...',
  f600: '你睡着了',
  fSlow: '醒来...',
  wp0t: '等待...', wp0s: '屏住呼吸...',
  wp1t: '静止...', wp1s: '现在不要眨眼',
  wp2t: '准备...', wp2s: '手指准备好了...',
  wp3t: '保持...', wp3s: '耐心，年轻的蝗虫',
  wp4t: '聚焦...', wp4s: '要来了...'
};

const faqData = [
  { question: '人类的平均反应时间是多少？', answer: '人类对视觉刺激的平均反应时间约为250至270毫秒。高性能运动员和职业游戏玩家通常低于200毫秒。' },
  { question: '我如何改进我的反射？', answer: '关键是持续练习和休息。玩动作视频游戏（FPS）、练习乒乓球等快速运动，以及保持良好的水合状态可以帮助保持神经系统警觉。' },
  { question: '屏幕会影响我的结果吗？', answer: '是的。有一个叫做"输入延迟"的东西。刷新率低的屏幕（60Hz）或旧的无线鼠标会给你实际的反应时间增加15到50毫秒。' },
  { question: '我们在什么年龄开始失去反射？', answer: '从生理上讲，人类的反射在20至24岁之间达到峰值。之后，如果不进行训练，会有非常缓慢的下降（大约每十年2-6毫秒）。' },
];

const howTo = [
  { name: '等待红色', text: '点击开始区域，耐心等待屏幕颜色改变。' },
  { name: '对绿色做出反应', text: '一旦你看到绿色，尽快点击或点击屏幕。' },
  { name: '看看你的结果', text: '系统会计算颜色变化和你的点击之间的确切差异（以毫秒为单位）。' },
  { name: '分析你的等级', text: '重复测试5次以获得可靠的平均值，并发现你是"乌龟"还是"网络运动员"。' },
];

const seo = [
  { type: 'title' as const, text: '这个反应测试如何工作？', level: 2 as const },
  {
    type: 'paragraph' as const,
    html: '该工具以外科手术的精确度测量你的<strong>视觉反应时间</strong>。我们计算从屏幕点亮到信号从眼睛传递到大脑，然后传递到手指的确切间隔。测试需要<strong>5次连续尝试</strong>来计算你的真实平均值，消除幸运因素。'
  },
  {
    type: 'list' as const,
    items: [
      '<strong>5次尝试的平均值：</strong>我们通过要求一致性来消除"幸运"因素。单次幸运点击不会让你成为网络运动员。',
      '<strong>反作弊系统：</strong>随机等待时间（1.5秒 - 4.5秒）和早期点击检测以防止预测。',
      '<strong>真实科学：</strong>大脑处理~180-200毫秒+运动反应+20-40毫秒=你的总反应时间。',
    ]
  },
  { type: 'title' as const, text: '世界排名表', level: 2 as const },
  {
    type: 'table' as const,
    headers: ['时间', '等级', '描述'],
    rows: [
      ['&lt; 180 ms', '网络运动员', '电竞专业人士或战斗机飞行员特有的超人水平。'],
      ['180 - 230 ms', '老虎', '敏锐的反射。你可能在射击游戏中表现很好。'],
      ['230 - 280 ms', '人类', '健康的平均值。你清醒并正常运作。'],
      ['280 - 350 ms', '乌龟', '低于平均水平。多休息或训练。'],
      ['&gt; 350 ms', '睡着', '可能疲劳、困倦或硬件缓慢（输入延迟）。'],
    ]
  },
  { type: 'title' as const, text: '为什么你很慢？责怪硬件', level: 2 as const },
  {
    type: 'comparative' as const,
    columns: 3 as const,
    items: [
      {
        title: '显示器（赫兹）',
        description: '60Hz显示器需要约16毫秒来绘制一帧。144Hz只需要7毫秒。这10毫秒的差异在你的最终分数中计算。',
        icon: 'mdi:monitor',
        points: ['60Hz = 每帧约16毫秒', '144Hz = 每帧约7毫秒', '测试中明显差异']
      },
      {
        title: '无线鼠标',
        description: '廉价的办公蓝牙鼠标延迟很高。对于这个测试，使用低延迟的电缆或2.4GHz无线技术。',
        icon: 'mdi:mouse-variant',
        points: ['便宜蓝牙：+15-50毫秒', '2.4GHz游戏：<1毫秒额外', 'USB电缆：参考']
      },
      {
        title: '浏览器',
        description: '阻止广告的扩展程序或较重的脚本可能导致卡顿。尝试隐私模式获得真实记录。',
        icon: 'mdi:web',
        points: ['关闭重扩展', '隐私=更清洁', '推荐Chrome/Firefox']
      },
    ]
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

export const content: ToolLocaleContent<ReactionTesterUI> = { slug, title, description, ui, seo, faq: faqData, bibliography, howTo, schemas };
