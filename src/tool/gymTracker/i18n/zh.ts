import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GymTrackerUI } from '../ui';

const slug = 'gym-workout-tracker';
const title = '健身训练追踪器：进度图表与力量日志';
const description = '记录您的训练重量，选择练习项目，并通过力量图表直观查看您的进步。优化您在健身房的渐进性超负荷。';

const faqData = [
  {
    question: '追踪训练的目的是什么？',
    answer:
      '它的目的是科学地应用渐进性超负荷。通过确切知道您在上一次训练中举起了多少重量，您可以尝试超越那个记录，从而确保肌肉增长和长期力量提升。',
  },
  {
    question: '我应该记录哪些数据？',
    answer:
      '最重要的是您以良好的动作形式在设定次数内达到的最大重量（正式组重量）。我们的工具专注于记录每次训练的重量，以生成您的进度图表。',
  },
  {
    question: '如何解读图表？',
    answer:
      '上升的线条表示您正在进步。平缓的线条（平台期）表明您需要调整训练量、强度或恢复情况。持续下降 loyal 的线条可能是过度训练的迹象。',
  },
  {
    question: '我的数据存储在哪里？',
    answer:
      '数据存储在您浏览器的本地（本地存储）。这意味着您的隐私得到了完全保障，无需创建账户；但如果您清除浏览器数据，历史记录将会丢失。',
  },
];

const howToData = [
  {
    name: '选择练习项目',
    text: '从下拉菜单中选择深蹲、卧推或硬拉等基础复合动作。',
  },
  {
    name: '输入重量',
    text: '在完成最重的一组训练后，在相应字段中输入所举起的公斤/磅数。',
  },
  {
    name: '点击添加',
    text: '保存您的成绩。系统将自动更新您的历史记录和进度图表。',
  },
  {
    name: '分析您的进化',
    text: '定期查阅图表以识别平台期，并通过看到真实的实力增长来激励自己。',
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
  applicationCategory: 'HealthApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'zh',
};

export const content: ToolLocaleContent<GymTrackerUI & Record<string, string>> = {
  slug,
  title,
  description,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '科学参考资料',
  bibliography: [
    {
      name: '筋力与体能研究期刊 - 渐进性超负荷研究',
      url: 'https://journals.lww.com/nsca-jscr/Fulltext/2010/10000/The_Mechanisms_of_Muscle_Hypertrophy_and_Their.40.aspx',
    },
    {
      name: '国家运动医学学会 - 渐进性超负荷详解',
      url: 'https://blog.nasm.org/progressive-overload-explained',
    },
    {
      name: '力量科学 - 抗阻训练中的数据追踪',
      url: 'https://pubmed.ncbi.nlm.nih.gov/30558493/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '健身追踪：通往真正进步的关键',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '在健身和健美界，有一个基本原则区分了那些获得惊人成果的人和那些迅速陷入平台期的人：<strong>渐进性超负荷 (progressive overload)</strong>。然而，如果您不详细记录您的力量水平，就不可能有效地应用这一原则。在本指南中，我们将探讨为什么追踪训练至关重要，如何使用我们的<strong>健身追踪器</strong>来最大化您的收益，以及支持这一实践的科学基础。',
    },
    {
      type: 'title',
      text: '什么是渐进性超负荷？',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '渐进性超负荷是指在体育锻炼过程中逐渐增加对身体施加的压力。为了让肌肉增长或变得更强，它必须承受比平时更大的刺激。如果您去健身房总是举起同样的重量，重复同样的次数，并保持同样的休息时间，您的身体就没有生物学上的理由去适应和成长。',
    },
    {
      type: 'list',
      items: [
        '增加重量：举起比上一次训练更重的重量。',
        '增加次数：用同样的重量完成更多的次数。',
        '增加容量：增加每个肌肉群的总组数。',
        '减少休息：在更短的时间内完成同样的工作。',
        '改善动作：以更出色的控制力、更大的动作范围来执行练习。',
      ],
    },
    {
      type: 'title',
      text: '为什么手动日志优于记忆',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '许多健身者犯了一个错误，即依靠记忆来回想上周举起了多少重量。然而，在包含 5 到 10 个不同动作的典型训练中，很容易忘记卧推是用了 80 公斤还是 82.5 公斤，或者是完成了 10 次还是 12 次。这种精度的缺失会导致训练效果平庸。',
    },
    {
      type: 'tip',
      title: '进度可视化的力量',
      html: '在图表上看到不断上升的线条，能为您提供所需的动力去挑战那额外的一次重复，而这正是停滞与持续肌肉增长之间的区别。',
    },
    {
      type: 'title',
      text: '追踪必备的基础练习',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '虽然所有练习都有价值，但某些复合动作能提供您整体力量和身体发育的最佳视角。这些是您在追踪时应优先考虑的项目：水平推类的<strong>卧推</strong>、垂直推类的<strong>肩推</strong>、拉类项目的<strong>引体向上</strong>，以及针对臀部的<strong>臀推</strong>。',
    },
    {
      type: 'title',
      text: '如何分析您的进度图表',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '一旦您记录了几次训练，就会开始看到模式：<strong>持续上升的线条</strong>表示走在正确的道路上；<strong>平台期</strong>表明您需要调整训练量或休息时间；而<strong>下降趋势</strong>可能是疲劳累积的信号。',
    },
    {
      type: 'title',
      text: '健身成功的心理学',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '训练既是身体上的挑战，也是心理上的挑战。通过使用直观展示您今天比两周前强 1% 的视觉工具，您正在刺激您的多巴胺奖励系统。这创造了一个积极的反馈循环，将训练变成一种可持续的习惯。',
    },
  ],
  ui: {
    exerciseLabel: '练习项目',
    pushCategory: '推类 (Push)',
    pullCategory: '拉类 (Pull)',
    gluteCategory: '臀部',
    customExerciseCategory: '自定义',
    addCustomExercisetitle: '添加项目',
    newExerciseLabel: '新项目',
    exercisePlaceholder: '输入练习名称...',
    addBtn: '添加',
    registerWeightLabel: '记录重量',
    weightPlaceholder: '00.0',
    startBtn: '开始',
    resetBtn: '重置',
    okBtn: '确定',
    noData: '暂无数据',
    recordLabel: '最高纪录',
    lastLabel: '上次记录',
    historyTitle: '记录日志',
    exportBtn: '导出',
    confirmDeletetitle: '清空历史？',
    confirmDeleteText: '此操作无法撤销。所选项目的所有记录将被删除。',
    deleteBtn: '删除',
    cancelBtn: '取消',
    units: 'kg',

    benchPress: '卧推',
    overheadPress: '肩上推举',
    pushPress: '借力推举',
    inclineDbPress: '上斜哑铃卧推',
    dipsTriceps: '三头肌双杠臂屈伸',
    tricepsExtensions: '绳索三头肌下压',
    pullUp: '引体向上',
    barbellRow: '杠铃划船',
    latPulldown: '高位下拉',
    dbRow: '哑铃划船',
    facePulls: '面拉',
    bicepsCurl: '杠铃弯举',
    hipThrust: '臀推',
    rdl: '罗马尼亚硬拉',
    lunges: '箭步蹲',
    gluteKick: '绳索后踢',
    hipAbduction: '器械髋外展',
    stepUp: '登台阶',
  },
};
