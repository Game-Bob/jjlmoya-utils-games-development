import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { IsometricTileMapEditorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const title = '等距瓦片地图编辑器';
const description = '绘制带有多层结构的菱形网格地图，调整瓦片几何尺寸，并将等距关卡草图导出为 JSON 或 SVG。';
const faq = [
  { question: '什么是等距瓦片地图？', answer: '等距瓦片地图使用菱形网格，在二维场景中表现三维空间感。列和行描述地面平面，图层则增加高度偏移。' },
  { question: '如何放置瓦片？', answer: '从调色板选择瓦片，保持绘制模式，选择活动图层，然后点击菱形。即使处于绘制模式，右键也可以删除单元格。' },
  { question: '图层深度会改变什么？', answer: '图层深度是叠加图层之间的屏幕垂直偏移。要表现更高的台阶可以增加它，如果图层需要靠近则可以减小它。' },
  { question: '导出的 SVG 可以在游戏引擎中使用吗？', answer: 'SVG 是包含当前菱形和颜色的视觉参考。JSON 更适合在引擎中重建逻辑网格，因为它保留了行、列、图层和瓦片值。' },
  { question: '这个编辑器能生成生产用瓦片集吗？', answer: '不能。它用于规划分层网格并导出简洁的地图描述，不会切分纹理、配置碰撞、选择引擎排序，也不保证最终资源的渲染结果。' },
];
const howTo = [
  { name: '设置网格几何', text: '选择瓦片宽度和高度，然后设置列数、行数和图层数。使用图层深度表示各级之间的垂直步进。' },
  { name: '选择绘制图层', text: '绘制前先选择一个图层。活动图层会显示更明显的边框，其他可见图层保持较低不透明度，帮助理解空间关系。' },
  { name: '绘制地面或结构', text: '选择草地、石头、水或道路，然后点击单元格。下一个单元格需要其他材质时再切换调色板。' },
  { name: '局部修正地图', text: '使用擦除模式或右键删除瓦片。调整网格尺寸时，仍在新范围内的单元格会被保留。' },
  { name: '导出规划结果', text: '需要在其他工具中重建网格时使用 JSON，需要设计评审或关卡草图时使用 SVG。' },
];
const softwareApplication: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, applicationCategory: 'DeveloperApplication', operatingSystem: 'Any' };
const faqPage: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) };

export const content: ToolLocaleContent<IsometricTileMapEditorUI> = {
  slug: 'isometric-tile-map-editor', title, description,
  ui: {
    controlsTitle: '地图控制', geometryTitle: '网格几何', tileWidthLabel: '瓦片宽度', tileHeightLabel: '瓦片高度', columnsLabel: '列', rowsLabel: '行', layersLabel: '图层', layerDepthLabel: '图层深度', toolsTitle: '绘制模式', paintLabel: '绘制', eraseLabel: '擦除', paletteTitle: '瓦片调色板', grassLabel: '草地', stoneLabel: '石头', waterLabel: '水', pathLabel: '道路', layersTitle: '活动图层', layerLabel: '图层', hideLayerLabel: '隐藏', showLayerLabel: '显示', mapTitle: '等距地图', mapHelp: '选择瓦片和图层，然后点击菱形。右键可以擦除任意单元格。', mapAriaLabel: '可编辑的等距瓦片地图', summaryTitle: '地图信息', filledLabel: '已填充单元格', coverageLabel: '覆盖率', activeLayerLabel: '活动图层', selectedLabel: '已选瓦片', emptyCellLabel: '空', cellLabel: '单元格', clearLabel: '清空地图', resetLabel: '重置几何', exportJsonLabel: '导出 JSON', exportSvgLabel: '导出 SVG', statusReady: '准备绘制', statusSaved: '已在本地保存', statusCleared: '地图已清空', statusReset: '几何已重置', statusExported: '文件已导出', statusPainted: '瓦片已放置', statusErased: '瓦片已擦除', statusLayerHidden: '图层已隐藏', statusLayerShown: '图层已显示', legendTitle: '地图图例', legendEmpty: '空单元格', legendFilled: '已绘制单元格', modelNote: '此编辑器描述逻辑分层网格。它不会导入瓦片集、计算碰撞、设置引擎专用排序，也不保证最终像素位置。', privacyDisclosure: '你的地图会保留在此浏览器中。不会上传地图数据或遥测信息。',
  },
  seo: [
    { type: 'title', level: 2, text: '使用等距网格规划空间和高度' },
    { type: 'paragraph', html: '当关卡需要清晰的地面位置和高度感，但不想直接变成完整的 3D 场景时，等距地图很有用。菱形网格让行列移动清晰可见，图层则可以简洁地规划桥梁、平台、屋顶或上下叠放的房间。' },
    { type: 'paragraph', html: '此编辑器将几何关系保持为明确数据。瓦片宽高控制菱形形状，列和行控制地面范围，图层深度控制每个新增高度在屏幕上的上移距离。调整尺寸时，仍在新边界内的单元格会被保留。' },
    { type: 'title', level: 2, text: '用五个步骤创建实用的区块草图' },
    { type: 'list', items: ['让瓦片比例符合项目的视觉语言。', '先绘制地面材质，让可移动区域保持清晰。', '使用图层表现桥梁、屋顶和高台，不要只用颜色表示高度。', '隐藏上层或切换到擦除模式，以便安全修正下方单元格。', '使用 JSON 重建地图，使用 SVG 进行视觉评审。'] },
    { type: 'title', level: 2, text: '分别理解行、列和图层' },
    { type: 'paragraph', html: '行和列描述单元格在逻辑平面中的位置，即使菱形的视觉尺寸变化也应保持稳定。图层是第二个坐标：两个单元格可以拥有相同的行和列，却处于不同高度。分开保存这些概念后，地图更容易在引擎中重建。' },
    { type: 'table', headers: ['信号', '含义', '下一步决定'], rows: [['覆盖率较低', '大部分单元格仍为空。', '先确定可游玩区域，再添加装饰。'], ['同一列有多个图层', '地图包含上下叠放的空间。', '检查排序和碰撞是否能够区分这些高度。'], ['菱形过宽', '水平移动主导了视觉网格。', '减小瓦片宽度或增大参考视口。'], ['图层步进过深', '高度变化非常明显。', '减少图层，或确认游戏资源支持这种高度表现。']] },
    { type: 'title', level: 2, text: '为下一项工作选择合适的导出格式' },
    { type: 'paragraph', html: 'JSON 是结构化交接格式，保留几何、图层数量、绘制状态和每个瓦片值。SVG 是视觉交接格式，彩色菱形适合设计评审、任务记录或关卡规划文档。两种导出都不包含源瓦片集或引擎元数据。' },
    { type: 'tip', title: '这份区块草图无法证明什么', html: '一张看起来合理的菱形地图，并不能证明精灵排序正确、角色可以跨越不同高度，或瓦片集能够无缝连接。请在目标引擎中测试真实资源、碰撞、排序轴和摄像机。' },
  ],
  faqTitle: '等距瓦片地图问题', faq, bibliographyTitle: '瓦片地图参考资料', bibliography: bibliographyEntries, howTo, schemas: [softwareApplication, faqPage, howToSchema],
};
