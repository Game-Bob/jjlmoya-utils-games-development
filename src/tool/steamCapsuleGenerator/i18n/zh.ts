import { createSteamContent } from './shared';

export const content = createSteamContent({
  slug: 'steam-capsule-generator',
  title: 'Steam 胶囊图生成器',
  description: '用一张主图生成四种 Steam 预览，调整视觉焦点，检查安全区域，并在本地下载 PNG 或 ZIP。',
  ui: { uploadTitle: '拖入你的主视觉', uploadHint: '一张高分辨率图片即可在浏览器中生成完整的 Steam 预览套件。', chooseFile: '选择图片', minimumSize: '最低尺寸', supportedFormats: 'PNG、JPEG 或 WebP', invalidImage: '请选择至少 1920 × 1080 像素的图片。', sourcePreview: '主视觉', focalPoint: '视觉焦点', focalHint: '点击图片或使用滑块，让重要主体保留在每个裁剪结果中。', horizontalFocus: '水平位置', verticalFocus: '垂直位置', resetFocus: '焦点居中', outputPreview: 'Steam 输出套件', safeZone: '安全区域', dimensions: '像素', downloadPng: 'PNG', downloadZip: '下载 ZIP', buildingZip: '正在创建本地 ZIP...', zipReady: '胶囊图套件已准备好', localOnly: '隐私优先。图片只留在当前浏览器中。', headerCapsule: '标题胶囊图', mainCapsule: '主胶囊图', verticalCapsule: '竖版胶囊图', communityIcon: '社区图标', ready: '准备就绪', downloadError: '无法创建压缩包，请尝试使用 PNG 按钮。', },
  seo: [
    { type: 'title', text: '用一张主图制作统一的 Steam 胶囊图套件', level: 2 },
    { type: 'paragraph', html: '一张横向插画看起来很完整，换成竖向裁剪后却可能丢失角色。这个工具会从同一张主图生成四种预览：460 × 215 的标题图、616 × 353 的主图、374 × 448 的竖版图，以及 184 × 184 的方形社区图标。调整视觉焦点后，可以看到不同画幅下哪些内容仍然保留。' },
    { type: 'paragraph', html: '图片通过 canvas 在浏览器本地处理，不会上传到服务器，也不需要账号。移动标记时，四个预览会同时更新，方便在导出前检查标志、脸部、角色和画面对比度。' },
    { type: 'title', text: '适合游戏美术的实际工作流程', level: 2 },
    { type: 'list', items: ['从至少 1920 × 1080 像素的主图开始。', '把标记放在重要主体上。', '先检查竖版和方形预览。', '将安全区域作为留白参考，并对照最新的 Steamworks 模板。'] },
    { type: 'paragraph', html: '安全区域是构图参考，并不能保证每个 Steam 界面都完全相同。请让标志和标题远离拥挤的边缘，同时阅读 Valve 对胶囊图文字的规则。' },
    { type: 'tip', html: '保留一份主体周围有足够空间的主图。如果需要改变标志位置，请修改源文件后重新生成。' },
  ],
  faq: [
    { question: '图片会离开我的设备吗？', answer: '不会。图片只在浏览器中读取和绘制，不需要上传或账号。' },
    { question: '应该使用什么主图？', answer: '至少 1920 × 1080 像素的 PNG、JPEG 或 WebP 能提供足够裁剪空间。' },
    { question: '视觉焦点会改变什么？', answer: '它会移动所有输出的源图裁剪位置，保护主要主体。' },
    { question: '安全区域是官方标准吗？', answer: '它们是实用的视觉参考。发布前请与当前 Steamworks 模板比较。' },
  ],
  howTo: [
    { name: '选择主图', text: '拖入至少 1920 × 1080 像素的 PNG、JPEG 或 WebP。' },
    { name: '设置焦点', text: '点击预览，或移动水平和垂直滑块。' },
    { name: '检查四种裁剪', text: '查看标题图、主图、竖版图和方形图标。' },
    { name: '下载套件', text: '下载单独 PNG，或创建本地 ZIP 压缩包。' },
  ],
});
