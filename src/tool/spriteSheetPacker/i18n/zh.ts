import type { ToolLocaleContent } from '../../../types';
import type { SpriteSheetPackerUI } from '../ui';

export const content: ToolLocaleContent<SpriteSheetPackerUI> = {
  slug: 'sprite-sheet-packer',
  title: 'Sprite Sheet 精灵图打包与提取器',
  description:
    '将独立的动画帧图像打包为纹理图集，或从现有精灵图集中提取单张图像，优化 2D 游戏渲染性能。',
  ui: {
    packerTab: '图集打包工作室',
    extractorTab: '精灵图提取器',
    dropZoneTitle: '拖拽动画帧图像至此',
    dropZoneSubtitle: '上传 PNG 或 WebP 图像以生成优化的纹理图集',
    selectFilesButton: '选择图像文件',
    clearAllButton: '清空工作区',
    downloadZipButton: '下载资源包 (ZIP)',
    copyJsonButton: '复制图集 JSON',
    downloadSheetPngButton: '下载纹理 PNG',
    paddingLabel: '帧间距 (px)',
    borderExtrusionLabel: '边缘外扩 (px)',
    maxTextureSizeLabel: '最大纹理尺寸',
    powerOfTwoLabel: '强制 2 的次幂 (POT)',
    trimTransparencyLabel: '裁剪透明区域',
    exportFormatLabel: '目标引擎格式',
    presetPixelArt: '像素艺术 16x16 预设',
    presetHdUi: '高清 UI 图集 1024 预设',
    presetMobile: '移动 WebGL 2048 预设',
    formatGenericHash: '通用 JSON (Hash)',
    formatGenericArray: '通用 JSON (Array)',
    formatUnity: 'Unity 2D 引擎',
    formatGodot: 'Godot 2D 引擎',
    formatPhaser: 'Phaser / PixiJS 引擎',
    formatCss: 'Web 前端 CSS',
    previewTitle: '纹理图集预览',
    efficiencyBadge: '纹理利用率',
    drawCallsBadge: '减少的 Draw Call',
    totalFramesBadge: '已打包帧数',
    textureSizeBadge: '图集分辨率',
    flipbookTitle: '动画翻页播放器',
    flipbookFpsLabel: '动画播放速度 (FPS)',
    playAnimation: '播放序列',
    pauseAnimation: '暂停播放',
    extractorModeGrid: '固定网格切片',
    extractorModeAlpha: '自动 Alpha 通道切片',
    frameWidthLabel: '单帧宽度 (px)',
    frameHeightLabel: '单帧高度 (px)',
    marginLabel: '外边距偏移 (px)',
    spacingLabel: '网格间距 (px)',
    extractFramesButton: '提取图像帧',
    extractedCountLabel: '提取的精灵图数',
    codeSnippetTitle: '引擎集成代码',
    copySnippetButton: '复制代码',
    copiedToast: '已复制到剪贴板',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: '2D 游戏引擎中的 Draw Call 优化与 GPU 批处理',
    },
    {
      type: 'paragraph',
      html: '在现代 2D 图形渲染管线中，将独立散图打包为单一纹理图集可大幅减少 CPU 向 GPU 发送的 Draw Call 绘制指令数。',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '95%', label: 'Draw Call 降低率' },
        { value: '4x', label: 'GPU 批处理加速' },
        { value: '60 FPS', label: '移动端稳定帧率目标' },
        { value: '100%', label: '浏览器本地处理' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: '独立单图与打包纹理图集对比',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '独立散图文件',
          description: '单独保存的 PNG 或 WebP 文件',
          points: [
            '屏幕上的每个独立帧都会产生单独的 Draw Call 命令',
            '导致显卡 GPU 频繁发生渲染上下文切换',
            '增加 Web 游戏的 HTTP 请求数量与加载延迟',
            '容易导致移动设备出现帧率下降与卡顿',
          ],
        },
        {
          title: '打包纹理图集',
          description: '合并后的 PNG 图像与 JSON 坐标数据',
          points: [
            '将数百个精灵图合并至单个 GPU Draw Call 命令中',
            '最大化显存带宽利用率与图形渲染吞吐量',
            '通过合并图像与数据减少网络文件请求数',
            '确保在所有平台上实现流畅的 60 FPS 渲染',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: '亚像素摄像机移动与边缘外扩数学原理',
    },
    {
      type: 'paragraph',
      html: '通过应用 1 到 2 像素的边缘外扩 (Border Extrusion)，将图像最外层像素向外复制，可有效防止摄像机平移时产生的黑边或相邻像素渗漏。',
    },
    {
      type: 'tip',
      title: '边缘外扩优化策略',
      html: '使用边缘外扩可完全消除 2D 游戏中摄像机缩放或移动时产生的纹理采样缝隙。',
    },
    {
      type: 'title',
      level: 2,
      text: '不同平台推荐的纹理尺寸指南',
    },
    {
      type: 'table',
      headers: ['目标平台', '推荐最大尺寸', '2 的次幂要求', '内存配置文件'],
      rows: [
        ['移动端浏览器', '2048 x 2048 px', 'WebGL 1.0 必须', '低内存带宽'],
        ['桌面 PC / 主机', '4096 x 4096 px', '推荐', '高 GPU 容量'],
        ['复古掌机', '1024 x 1024 px', '严格要求', '严格的 VRAM 限制'],
      ],
    },
    {
      type: 'proscons',
      items: [
        {
          pro: '保证与旧版显卡驱动及 WebGL 1.0 的 100% 兼容性',
          con: '精灵图数量较少时可能会留下未使用的透明区域',
        },
        {
          pro: '支持硬件级自动 Mipmap 贴图生成',
          con: '不规则形状需要精确调整边距',
        },
        {
          pro: '优化显卡 GPU 中的 VRAM 显存分配',
          con: '初始纹理占用面积略微增加',
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: '精灵图打包核心术语解析',
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Draw Call',
          definition: 'CPU 渲染引擎向 GPU 显卡发送的绘制几何体与纹理的命令。',
        },
        {
          term: 'Bin Packing (装箱算法)',
          definition: '将不同尺寸的矩形块以最小面积高效排列的数学计算方法。',
        },
        {
          term: 'Border Extrusion (边缘外扩)',
          definition: '复制图像边缘像素向外延伸，防止摄像机移动时产生采样接缝。',
        },
        {
          term: 'Flipbook Animation (翻页动画)',
          definition: '快速连续播放静态帧图像以模拟 2D 游戏连续物理运动的方法。',
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: '性能优化检查清单',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '生产规则',
      html: '将角色动画打包至共享图集，并在 WebGL 构建中使用 2 的次幂分辨率。',
    },
    {
      type: 'paragraph',
      html: "本节汇总了正确导出和可靠预览所需的关键检查。 1.",
    },
    {
      type: 'paragraph',
      html: "本节汇总了正确导出和可靠预览所需的关键检查。 2.",
    },
  ],
  faq: [
    {
      question: '什么是 Sprite Sheet 精灵图集？为什么它对 2D 游戏至关重要？',
      answer:
        'Sprite Sheet 是包含多个动画帧的单张组合图像文件。通过将图像合并，游戏引擎可在单个 GPU 命令中绘制多个对象，大幅提升游戏运行速度。',
    },
    {
      question: '此工具中的本地处理是如何工作的？',
      answer:
        '您的所有图像都在浏览器内部通过 HTML5 Canvas API 本地处理，绝不会将任何数据上传至外部服务器。',
    },
    {
      question: '我可以从现有精灵图集中提取单张图像吗？',
      answer:
        '可以。切换至提取器模式，上传精灵图集并设置网格尺寸，即可切片并下载单张图像。',
    },
  ],
  howTo: [
    {
      name: '上传动画帧',
      text: '将 PNG 或 WebP 文件拖拽至上传区域。',
    },
    {
      name: '调整打包设置',
      text: '设置间距、边缘外扩及目标游戏引擎格式。',
    },
    {
      name: '预览并下载',
      text: '在翻页播放器中检查动画效果，然后下载 ZIP 资源包。',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Sprite Sheet 精灵图打包与提取器',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '什么是 Sprite Sheet 精灵图集？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sprite Sheet 是包含多个动画帧的单张组合图像文件。',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: '如何打包与提取精灵图集',
      step: [
        {
          '@type': 'HowToStep',
          name: '上传动画帧',
          text: '将 PNG 或 WebP 文件拖拽至上传区域。',
        },
      ],
    },
  ],
  bibliography: [
    {
      name: 'Godot Engine 2D Sprite Sheets Documentation',
      url: 'https://docs.godotengine.org/en/stable/tutorials/2d/2d_sprite_animation.html',
    },
    {
      name: 'Unity Sprite Atlas Manual',
      url: 'https://docs.unity3d.com/Manual/class-SpriteAtlas.html',
    },
  ],
};
