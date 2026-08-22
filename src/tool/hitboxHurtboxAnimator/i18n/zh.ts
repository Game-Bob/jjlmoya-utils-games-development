import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HitboxHurtboxAnimatorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'hitbox-hurtbox-animator';
const title = '像素动画 Hitbox 与 Hurtbox 帧编辑器';
const description = '在精灵动画每帧上绘制碰撞判定图层，通过洋葱皮预阅动作连贯性，精确编辑像素坐标并导出引擎中立的 JSON 项目。';

const faq = [
  {
    question: 'Hitbox（攻击框）与 Hurtbox（受击框）有什么区别？',
    answer: 'Hitbox 通常用于判定发起攻击或产生作用的区域，而 Hurtbox 用于定义可以接收该攻击的受击区域。Pushbox 用于保持角色间距，Grabbox 用于判定投掷范围，Sensor 用于触发检测。',
  },
  {
    question: '我的精灵图文件会被上传到服务器吗？',
    answer: '不会。图像的解码、裁切、绘制和导出完全在您的浏览器本地完成。本地仅保存播放速度、洋葱皮开关等编辑偏好。',
  },
  {
    question: '导出的 JSON 使用什么坐标系？',
    answer: '每一帧均以该帧裁切矩形的左上角为原点 (0,0) 测量像素坐标。矩形与圆形碰撞框保存非负的 x、y、宽度和高度值，并记录每帧自有的轴心点 (Pivot)。',
  },
  {
    question: '我可以同时编辑雪碧图（Sprite Sheet）和单帧图片序列吗？',
    answer: '可以。您可以载入一张 PNG 或 WebP 雪碧图并设置行列数进行等分裁切，也可以选择多张有序的单帧图片序列。',
  },
  {
    question: '导出的数据可以直接在所有游戏引擎中使用吗？',
    answer: 'JSON 数据保持引擎中立。它记录了帧切片、轴心点、语义图层名称及几何形状，不强制绑定具体引擎。请在项目解析器中根据引擎的坐标原点与缩放规则进行转换。',
  },
];

const howTo = [
  { name: '载入动画素材', text: '选择一张 PNG 或 WebP 雪碧图，或选择多张有序单帧图片。所有图像处理均在本地进行。' },
  { name: '设定帧切片', text: '如为等分雪碧图，请输入行数与列数。逐帧检查胶片条，确认每个切片均精准包含单帧画面。' },
  { name: '绘制语义碰撞图层', text: '选择攻击框、受击框、推挤框、抓取框或传感器图层，在当前帧画面上拖拽绘制矩形或圆形。' },
  { name: '精细化调整动作', text: '选中形状以修改精准像素坐标，复制形状至相邻帧，并开启洋葱皮图层比较前后帧动作。' },
  { name: '导出可复现数据', text: '下载引擎中立的 JSON 项目文件与 PNG 印花列印图。请妥善保存原始图片。' },
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

export const content: ToolLocaleContent<HitboxHurtboxAnimatorUI> = {
  slug,
  title,
  description,
  ui: {
    onboarding: '载入动画素材，确认切片划分，然后绘制判定攻击、受击、物理挤压、抓取或检测的碰撞区域。',
    privacyNote: '本地动画工作台，图像不会上传至服务器。',
    loadSprite: '将动画素材放置于工作台',
    loadHint: '选择一张等分雪碧图或多张有序的 PNG、WebP 帧图片。',
    chooseImages: '选择精灵图像',
    slicingTitle: '帧切片划分',
    rowsLabel: '行数',
    columnsLabel: '列数',
    applySlicing: '执行切片',
    playbackTitle: '动作播放预览',
    previousFrame: '上一帧',
    play: '播放',
    pause: '暂停',
    nextFrame: '下一帧',
    fpsLabel: '每秒帧数 (FPS)',
    onionPrevious: '上一帧洋葱皮',
    onionNext: '下一帧洋葱皮',
    layerTitle: '碰撞图层绘制',
    typeHitbox: 'Hitbox (攻击框)',
    typeHurtbox: 'Hurtbox (受击框)',
    typePushbox: 'Pushbox (推挤框)',
    typeGrabbox: 'Grabbox (抓取框)',
    typeSensor: 'Sensor (传感器)',
    typeCustom: '自定义图层',
    shapeRectangle: '矩形',
    shapeCircle: '圆形',
    drawShape: '绘制',
    selectShape: '选择',
    stageLabel: '动画工作台',
    emptyStage: '请载入精灵素材以显示帧画面并开始绘制碰撞图层。',
    frameReadout: '第 {current} 帧 / 共 {total} 帧',
    timelineTitle: '碰撞时间胶片',
    inspectorTitle: '选中形状属性',
    noSelection: '切换至选择模式并点击某一形状，以修改其精准坐标与尺寸。',
    nameLabel: '图层名称',
    xLabel: 'X 坐标 (像素)',
    yLabel: 'Y 坐标 (像素)',
    widthLabel: '宽度 (像素)',
    heightLabel: '高度 (像素)',
    radiusLabel: '半径 (像素)',
    duplicateShape: '创建副本',
    mirrorShape: '水平镜像翻转',
    deleteShape: '删除选中形状',
    copyPrevious: '复制上一帧碰撞至当前帧',
    copyAll: '应用当前帧碰撞至所有帧',
    pivotTitle: '帧轴心点 (Pivot)',
    pivotXLabel: '轴心点 X',
    pivotYLabel: '轴心点 Y',
    exportTitle: '导出动画项目',
    exportJson: '下载 JSON 文件',
    importJson: '导入 JSON 文件',
    exportContactSheet: '下载印花对比图',
    resetProject: '清空碰撞图层',
    undo: '撤销',
    redo: '重做',
    statusReady: '动画工作台已就绪。',
    statusImageLoaded: '已在本地载入 {count} 个图像文件。',
    statusShapeCreated: '已为当前帧添加新的碰撞形状。',
    statusShapeUpdated: '碰撞形状属性已更新。',
    statusImported: '已导入碰撞项目文件。',
    statusExported: '导出项目文件已生成。',
    statusError: '无法读取所选文件，请确认格式是否正确。',
    framesBadge: '{count} 帧',
    shapesBadge: '{count} 个形状',
    coverageBadge: '覆盖率 {percent}%',
    coordinatesNote: '坐标系以每帧裁切图像的左上角为原点 (0,0)。',
    localOnlyDisclosure: 'JSON 文件仅记录图像文件名、切片、轴心点及碰撞几何数据，不内嵌像素数据。',
    limitationDisclosure: '碰撞图层用于定义几何设计。请在游戏引擎中进行最终行为测试。',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: '围绕动画动作本身设计 Hitbox 与 Hurtbox',
    },
    {
      type: 'paragraph',
      html: '如果将每一帧孤立来看，碰撞框的设置会变得十分困难。本编辑器将精灵画面、语义碰撞图层、洋葱皮参考及时间胶片条结合在一起，让您能清晰查看攻击判定何时生效、受击区域如何贴合角色形体。',
    },
    {
      type: 'title',
      level: 2,
      text: '根据玩法职责选择碰撞图层',
    },
    {
      type: 'table',
      headers: ['图层类型', '典型职责', '审查要点'],
      rows: [
        ['Hitbox (攻击框)', '产生攻击判定或伤害作用的区域', '是否仅在预期的有效判定帧中出现？'],
        ['Hurtbox (受击框)', '接收攻击或承受伤害的受击区域', '是否顺应角色形体轮廓且无不合理缝隙？'],
        ['Pushbox (推挤框)', '防止角色实体相互穿模挤压的物理区域', '尺寸是否足够稳定以避免画面抖动？'],
        ['Grabbox (抓取框)', '触发投掷或抓取判定的作用范围', '判定时间与范围是否匹配视觉动作提示？'],
        ['Sensor (传感器)', '用于边缘检测、交互或触发器的探测区域', '图层名称是否具备清晰的语义？'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: '理解并应用统一的坐标契约',
    },
    {
      type: 'paragraph',
      html: '导出的项目文件以每个裁切帧的左上角为 X 与 Y 的坐标原点。宽度与高度均为非负像素尺寸，轴心点亦使用相同的局部坐标系。这保证了保存与导入循环的可复现性。',
    },
    {
      type: 'tip',
      title: '综合审查起手、前摇、判定与收招过程',
      html: '修改单帧后，请完整播放整段动作。开启前后帧洋葱皮可帮助您判断动作连贯性，避免碰撞框发生突兀跳跃。',
    },
    {
      type: 'title',
      level: 2,
      text: '将印花对比图作为团队沟通的审查产物',
    },
    {
      type: 'paragraph',
      html: '生成的 PNG 印花对比图能在单张画面上直观展示所有帧及其叠加的彩色碰撞图层，非常适合与美术、策划及程序团队讨论战斗打击感与判定时间。',
    },
  ],
  faq,
  bibliographyTitle: '碰撞框设计与判定参考资料',
  bibliography: bibliographyEntries,
  howTo,
  schemas: [softwareApplication, faqPage, howToSchema],
};
