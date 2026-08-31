import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GamePixelPerUnitPlannerUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const faq = [
  { question: '游戏中的每单位像素是什么意思？', answer: '每单位像素，也就是 PPU，表示一个世界单位由多少纹理像素表示。统一的密度可以让精灵、图块和摄像机保持可预测的比例。' },
  { question: '为什么整数缩放很重要？', answer: '整数缩放会让每个源像素对应相同数量的屏幕像素。小数缩放可能造成边缘不均匀或画面模糊。' },
  { question: '什么是像素溢色？', answer: '这是相邻纹素或图集其他区域的颜色意外出现。滤镜、边缘、子像素移动和不足的留白都可能造成它。' },
  { question: '如何使用推荐缩放？', answer: '把它作为接近目标并且能放入分辨率的候选值。然后在引擎中检查 nearest 滤镜、摄像机位置和图集留白。' },
  { question: '这个规划器能为所有引擎选择正确的 PPU 吗？', answer: '不能。这是透明的计算辅助工具。摄像机、导入、 mipmap、取整和像素吸附都会因引擎不同而变化，需要实际测试。' },
];
const howTo = [
  { name: '选择目标画面', text: '输入游戏视图或参考分辨率的宽度和高度，单位为像素。' },
  { name: '加载精灵', text: '选择图片以自动读取原始尺寸，也可以直接使用内置的 Bob 示例。' },
  { name: '选择缩放', text: '移动滑块或选择预设。整数倍率通常是最清晰的候选。' },
  { name: '阅读预览', text: '查看精灵占用范围、水平和垂直 PPU、可见世界以及溢色提示。' },
  { name: '在引擎中测试', text: '使用 nearest 滤镜、对齐的摄像机、图集留白和真实分辨率验证选择。' },
];
const softwareApplication: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: '游戏每单位像素规划器', applicationCategory: 'DeveloperApplication', operatingSystem: 'Any' };
const faqPage: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: '测试像素艺术精灵的缩放', step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) };

export const content: ToolLocaleContent<GamePixelPerUnitPlannerUI> = {
  slug: 'game-pixel-per-unit-planner', title: '游戏精灵每单位像素规划器', description: '上传精灵或使用 Bob 示例，查看不同整数倍率下的占用范围，比较 PPU 并发现像素溢色风险。',
  ui: {
    inputsTitle: '加载并测试精灵', uploadTitle: '源图像', uploadHint: '选择 PNG、GIF、WebP 或 JPEG。原始尺寸会用于每个预览。', chooseSpriteLabel: '选择精灵', noSpriteLabel: '尚未加载精灵', defaultSpriteLabel: 'Bob 示例精灵', loadedSpriteLabel: '已加载', clearSpriteLabel: '移除精灵', displayWidthLabel: '屏幕宽度 px', displayHeightLabel: '屏幕高度 px', spriteWidthLabel: '精灵宽度 px', spriteHeightLabel: '精灵高度 px', worldWidthLabel: '精灵世界宽度', worldHeightLabel: '精灵世界高度', targetScaleLabel: '屏幕目标倍率', targetScaleHint: '纹理每个像素对应的屏幕像素数。', resolutionPresetsLabel: '参考分辨率', preset320: '320 x 180', preset384: '384 x 216', preset640: '640 x 360', scalePresetsLabel: '快速倍率', scale1: '1x', scale2: '2x', scale3: '3x', scale4: '4x', scale6: '6x', resetLabel: '重置数值', fieldTitle: '查看不同尺寸', fieldCaption: '加载的图像使用 nearest 缩放渲染，方便判断每个整数倍率下的实际占用范围。', previewPlaceholder: '加载精灵以开始视觉测试', previewScaleLabel: '预览倍率', sourceImageAlt: '已加载精灵预览', viewportLabel: '屏幕', spriteLabel: '渲染精灵', crispTitle: '清晰倍率', crispCaption: '整数倍率保持像素大小一致。灰色步骤会超出声明的屏幕。', fitLabel: '适合屏幕:', yesLabel: '是', noLabel: '否', recommendedLabel: '最接近', summaryTitle: '规划摘要', ppuXLabel: '水平 PPU', ppuYLabel: '垂直 PPU', viewportWorldLabel: '可见世界', fitScaleLabel: '可容纳的最大倍率', bleedingRiskLabel: '溢色风险', lowRisk: '低', mediumRisk: '中', highRisk: '高', riskLowMessage: '两个轴已对齐，整数目标倍率可以放入屏幕。仍然需要检查滤镜和图集留白。', riskMediumMessage: '目标并未完美适配。请检查轴向差异和突出显示的倍率。', riskHighMessage: '该倍率可能产生不均匀采样。请优先选择整数倍率并检查精灵尺寸。', alignmentLabel: '采样说明', tableTitle: '可访问的倍率记录', tableScale: '倍率', tableWidth: '渲染宽度', tableHeight: '渲染高度', tableFits: '适合屏幕', modelNote: 'PPU 等于每个轴上的渲染精灵像素数除以精灵的世界单位尺寸。溢色风险是启发式提示，不是纹理检查或引擎保证。', privacyDisclosure: '文件在此浏览器中处理。不会上传精灵、项目文件或遥测数据。', statusReady: '预览已更新', unitPixels: 'px', unitUnits: '单位',
  },
  seo: [
    { type: 'title', level: 2, text: '把精灵尺寸转化为缩放决策' }, { type: 'paragraph', html: '精灵有位图尺寸，也有它在游戏世界中占据的尺寸。PPU把这两个测量连接起来。预览可以直接展示视觉结果，而不是只给出一个抽象数字。' }, { type: 'paragraph', html: '加载真实图像后，工具会使用它的原始尺寸。选择倍率后，工具计算两个轴的占用范围以及指定分辨率中可见的世界。' }, { type: 'title', level: 2, text: '在预览中观察什么' }, { type: 'list', items: ['将占用范围与参考屏幕比较。', '先测试整数倍率以保持像素均匀。', '用两个 PPU 值寻找意外拉伸。', '把溢色提示当作引擎测试信号。'] }, { type: 'title', level: 2, text: '整数倍率为什么更干净' }, { type: 'paragraph', html: '在 3 倍时，一个源像素占据三个屏幕像素。在 2.5 倍时，渲染器必须分配不同宽度。Nearest 可以避免颜色混合，但不能修复位于像素之间的摄像机。' }, { type: 'table', headers: ['信号', '含义', '下一步'], rows: [['PPU 相同', '两个轴具有相同密度。', '与图块和项目网格比较。'], ['小数倍率', '占用范围没有使用整数。', '测试最近的整数倍率。'], ['无法容纳', '精灵超过屏幕。', '降低倍率或提高分辨率。']] }, { type: 'title', level: 2, text: '区分溢色和尺寸问题' }, { type: 'paragraph', html: '像素溢色通常来自图集中的相邻纹素、边缘滤镜或没有对齐的摄像机坐标。画面模糊时检查滤镜，出现接缝时还要检查留白和边界。' }, { type: 'title', level: 2, text: '用 Bob 示例了解流程' }, { type: 'paragraph', html: '带粉色蝴蝶结的 Bob 示例会在开始时显示。改变分辨率和倍率，就能看到角色何时无法容纳，以及像素何时失去均匀性。' }, { type: 'title', level: 2, text: '工具能检查什么' }, { type: 'paragraph', html: '工具会在受控视图中比较尺寸和占用范围。它不会打开引擎项目、检查图集、测量设备，也不会保证 pixel perfect 移动。' }, { type: 'title', level: 2, text: '选择倍率的简短流程' }, { type: 'paragraph', html: '加载精灵，选择分辨率，测试 1 倍到 4 倍，并选择仍有空间的最大整数倍率。然后在游戏实际支持的分辨率下重复检查。' }, { type: 'tip', title: '最后一步要在引擎中确认', html: '使用预览缩小候选范围，然后启用 nearest 滤镜，检查图集留白和摄像机对齐，并测试多个分辨率。' },
  ],
  faqTitle: '精灵缩放问题', faq, bibliographyTitle: '像素艺术参考资料', bibliography: bibliographyEntries, howTo, schemas: [softwareApplication, faqPage, howToSchema],
};
