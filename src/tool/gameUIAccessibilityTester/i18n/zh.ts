import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GameUiAccessibilityTesterUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'game-ui-accessibility-stress-tester';
const title = '游戏 UI 无障碍压力测试工具';
const description = '在浏览器本地检测游戏 UI 截图，支持色盲模拟、HUD 对比度取色、模糊、缩放及边缘坍塌热力图。';

const faq = [
  {
    question: '此工具能否为我的游戏 UI 提供官方无障碍认证？',
    answer: '不能。它结合了色觉模拟算法、对比度计算和 UI 设计审查清单。测试结果应用于指导设计审查和玩家测试，而非作为合规证书。',
  },
  {
    question: '我的游戏截图会被上传到服务器吗？',
    answer: '不会。图像解码、取色、色觉转换和报告生成完全在您的浏览器本地完成。本地仅保存视图偏好设置。',
  },
  {
    question: '我应该使用两个色彩探针测量什么？',
    answer: '选择代表不同游戏含义的一对颜色，例如盟友与敌人、激活与禁用、生命值与伤害或物品稀有度。',
  },
  {
    question: '为什么对比度达标后仍需要人工审查？',
    answer: '即使两色点对比度较高，微小图标、细体文字、动态背景或纯色传达机制仍可能导致玩家难以快速识别。',
  },
  {
    question: '热力图展示了什么信息？',
    answer: '热力图高亮显示在所选色盲模式下，相邻像素 RGB 颜色分离度急剧下降的边缘区域。',
  },
];

const howTo = [
  { name: '载入本地截图', text: '选择 PNG、JPEG 或 WebP 格式的游戏或界面截图。图片保持在浏览器内存中。' },
  { name: '选择模拟滤镜', text: '对比原始图像与红色盲、绿色盲、蓝色盲、灰度或低对比度模拟效果。' },
  { name: '施加视觉压力', text: '添加模糊、降低渲染分辨率、放大像素或开启边缘坍塌热力图。' },
  { name: '测量两个关键信号', text: '选择探针 A 或 B 并点击原始图像，或直接输入十六进制颜色值。' },
  { name: '记录并导出结论', text: '参考审查指南填写团队观察结论，并下载对比图及 JSON 结构化报告。' },
];

const softwareApplication: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Any',
};

const faqPage: WithContext<FAQPage> = {
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
  step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })),
};

export const content: ToolLocaleContent<GameUiAccessibilityTesterUI> = {
  slug,
  title,
  description,
  ui: {
    onboarding: '载入一张游戏截图，选择模拟滤镜，并比较玩家必须明确区分的两个关键视觉信号。',
    privacyNote: '本地光学分析，截图不会上传至任何服务器。',
    dropTitle: '将游戏或 UI 截图拖入分析台',
    dropHint: '拖放图片至此处，或从您的设备中选择。建议使用包含真实复杂背景的画面。',
    chooseImage: '选择截图',
    replaceImage: '替换截图',
    supportedFiles: '支持最高 16 MB 的 PNG、JPEG 或 WebP。大图将自动缩放到 1600 px 边缘。',
    lensLabel: '模拟滤镜',
    lensOriginal: '原始',
    lensProtanopia: '红色盲',
    lensDeuteranopia: '绿色盲',
    lensTritanopia: '蓝色盲',
    lensAchromatopsia: '全色盲/灰度',
    lensReducedContrast: '对比度降低',
    lensDesaturation: '饱和度降低',
    compareLabel: '对比模式',
    compareSideBySide: '双图并排',
    compareSplit: '分栏滑动',
    comparePress: '按住查看原图',
    holdOriginal: '按住显示原始图像',
    splitPosition: '分割线位置',
    stressLabel: '视觉压力测试控制',
    blurLabel: '模糊像素',
    downscaleLabel: '小屏幕显示预览',
    downscaleFull: '全尺寸',
    downscaleHalf: '1/2 尺寸',
    downscaleQuarter: '1/4 尺寸',
    downscaleEighth: '1/8 尺寸',
    zoomLabel: '像素放大倍率',
    heatmapLabel: '边缘坍塌热力图',
    heatmapHint: '高亮显示在模拟滤镜下视觉分隔度急剧下降的局部边缘。',
    originalView: '原始信号场',
    simulatedView: '压力测试信号场',
    emptyCanvas: '选择一张截图以激活对比区域。您的文件将保留在本地设备。',
    sampleTitle: '关键信号色彩探针',
    sampleInstructions: '选择 A 或 B，然后点击原始图像以采集传递不同游戏信息的色彩。',
    sampleA: '探针 A',
    sampleB: '探针 B',
    sampleAName: '探针 A 含义',
    sampleBName: '探针 B 含义',
    manualColor: '直接指定颜色',
    sampleAInitial: '盟友标记',
    sampleBInitial: '敌方标记',
    noSample: '等待载入截图',
    originalContrast: '原始对比度',
    simulatedContrast: '模拟对比度',
    separationRetained: '保留分隔度',
    statusStrong: '信号维持良好区分',
    statusWatch: '结合上下文审查',
    statusReview: '建议重新设计信号',
    statusPending: '暂无数据',
    measurementLabel: '测量',
    heuristicLabel: '启发式',
    manualReviewLabel: '人工审查状态',
    measurementHint: '对比度采用 WCAG 相对亮度公式计算两色点的 sRGB 比例。',
    heuristicHint: '保留分隔度比较模拟前后色彩空间距离的变化率。',
    promptTitle: '界面设计审查指南',
    promptColorOnly: '玩家能否在不依赖单一色调的情况下识别敌我、警告与成功？',
    promptChangingBackground: '文字在明亮、暗沉或复杂动态背景上是否依然清晰？',
    promptMinimap: '小地图图标除了颜色外，是否有形状、图案或文本区分？',
    promptStates: '选中、禁用、冷却和伤害状态是否明确清晰？',
    promptShape: '是否有图标、文字、动画或音效辅助增强每个色彩信号？',
    findingLabel: '团队审查结论',
    findingPlaceholder: '示例：受击全屏红框时敌人红框轮廓变得难以辨识',
    addFinding: '添加结论',
    findingsEmpty: '暂无记录的审查结论。',
    exportSheet: '下载对比图',
    exportReport: '下载 JSON 报告',
    resetTool: '重置',
    uploadError: '无法读取该图片，请选择有效的 PNG、JPEG 或 WebP 文件。',
    fileTooLarge: '文件大于 16 MB，请导出尺寸较小的图片后重试。',
    imageReady: '截图已在本地载入，请采集两个关键信号开始分析。',
    reportDownloaded: '结构化 JSON 报告已下载。',
    sheetDownloaded: '对比图已下载。',
    localOnlyDisclosure: '图像解码、模拟转换及导出均在您的浏览器本地完成。',
    limitationDisclosure: '本工具用于辅助设计审查，模拟结果不能代替真实玩家测试。',
    reportTitle: '游戏 UI 无障碍审查报告',
    reportFindingReview: '在选定的模拟模式下，采集的色彩信号对比度或分离度大幅下降。',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: '如何在不上传截图的情况下评估游戏 UI 的色觉无障碍性',
    },
    {
      type: 'paragraph',
      html: '游戏界面通常需要在复杂的动态视觉条件下传达信息：镜头旋转、粒子特效以及多变的背景环境都可能降低可视度。本本地测试工具允许您直接在浏览器中通过学术色盲模拟算法和压力测试检查游戏截图。',
    },
    {
      type: 'title',
      level: 2,
      text: '数值测量、启发式指标与人工判断',
    },
    {
      type: 'table',
      headers: ['证据类型', '本工具提供的能力', '本工具无法单独判定的内容'],
      rows: [
        ['数值测量', '采集 sRGB 颜色的 WCAG 相对亮度与对比度', '游戏全局所有文本与背景是否完全合规'],
        ['模拟算法', '基于权威矩阵的红色盲、绿色盲与蓝色盲转换', '每一位玩家个体的具体主观视觉体验'],
        ['启发式', '模糊、降采样缩放与局部边缘色差坍塌检测', 'UI 整体设计质量的自动评分'],
        ['人工审查', '审查问题清单与可导出的团队沟通报告', '替代残障玩家参与的真实用户测试'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: '选择决定玩家操作的关键色彩信号',
    },
    {
      type: 'paragraph',
      html: '请针对决定玩家决策的颜色进行测量，例如敌我标记或状态指示。若模拟下对比度显著下降，建议补充图标、形状或音效等冗余设计。',
    },
    {
      type: 'tip',
      title: '使用视觉复杂的实际游戏画面进行测试',
      html: '相比于干净的设计草图，使用包含战斗特效、动态背景和复杂环境的实际游戏截图能提供更具价值的测试结果。',
    },
    {
      type: 'title',
      level: 2,
      text: '在团队开发中高效利用导出的报告',
    },
    {
      type: 'paragraph',
      html: '导出的 JSON 报告与 PNG 对比图可直接附在 Jira 或 GitHub Issue 等任务单中，帮助设计师与工程师针对具体场景展开讨论与修改。',
    },
    { type: 'paragraph', html: '记录检查过的场景、分辨率和颜色组合。模拟可以帮助及早发现设计问题，但不能代替真实场景、不同屏幕以及不同视觉条件用户参与的测试。' },
  ],
  faq,
  howTo,
  schemas: [softwareApplication, faqPage, howToSchema],
  bibliography: bibliographyEntries,
};
