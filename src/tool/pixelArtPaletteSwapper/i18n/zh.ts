import type { ToolLocaleContent } from '../../../types';
import type { PixelArtPaletteSwapperUI } from '../ui';

export const content: ToolLocaleContent<PixelArtPaletteSwapperUI> = {
  slug: 'pixel-art-palette-swapper',
  title: '像素艺术调色板调换工具',
  description: '在浏览器中将精灵图和精灵图集快速转换为复古主机调色板或自定义 Hex 颜色。',
  ui: {
    uploadTitle: '拖放精灵图或精灵图集',
    uploadHint: 'PNG、JPEG 或 WebP 文件均在本地处理',
    chooseImage: '选择图片',
    replaceImage: '替换图片',
    paletteTitle: '选择调色板',
    gameBoyPalette: 'Game Boy',
    nesPalette: 'NES 风格',
    pico8Palette: 'PICO-8',
    commodore64Palette: 'Commodore 64',
    dawnBringerPalette: 'DawnBringer 16',
    customPalette: '自定义颜色',
    customPaletteHint: '使用逗号、空格或换行分隔 Hex 颜色代码。',
    applyCustomPalette: '应用调色板',
    resetCustomPalette: '重置',
    sourcePreview: '原图',
    resultPreview: '转换结果',
    waitingForImage: '等待加载图片',
    uploadToPreview: '上传图片以预览效果',
    resultEmpty: '原图与调色板转换后的效果将并排显示。',
    downloadPng: '下载 PNG',
    downloadDisabled: '请先上传图片以启用导出。',
    colorCount: '原图颜色数',
    mappedCount: '已用颜色数',
    imageSize: '图片尺寸',
    paletteCount: '调色板颜色数',
    preserveAlpha: '保留透明度',
    zoomLabel: '缩放',
    processing: '正在映射像素',
    invalidPalette: '请至少添加一个有效的 Hex 颜色代码',
    invalidImage: '请选择 PNG、JPEG 或 WebP 格式图片',
    readyStatus: '就绪',
    dropActive: '松开即可加载',
    mappedSummary: '已将 {source} 种原图颜色映射至 {mapped} 种调色板颜色',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: '将全彩像素图转换为经典的复古主机配色',
    },
    {
      type: 'paragraph',
      html: '限制色彩数量能赋予像素艺术独特的复古风格。本工具支持转换为 Game Boy、NES、PICO-8 等经典主机的调色板。',
    },
    {
      type: 'title',
      level: 2,
      text: '颜色映射计算原理',
    },
    {
      type: 'paragraph',
      html: '工具会计算每个像素 RGB 值的距离，并将其替换为目标调色板中最接近的颜色，同时完好保留透明通道。',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '调色板限制',
          description: '将原有颜色替换为最接近的色块。',
          points: [
            '适合像素角色、图标及图块集',
            '保持原始尺寸与像素位置不变',
            '便于精确掌控色彩预算',
          ],
        },
        {
          title: '调色板调换（Palette Swapping）',
          description: '快速生成不同配色的角色或场景。',
          points: [
            '常用于换装、变色或状态变化',
            '支持自定义 Hex 列表导入',
            '可直接下载 PNG 导入引擎',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: '复古调色板对比',
    },
    {
      type: 'table',
      headers: ['调色板', '颜色数', '适用场景', '注意事项'],
      rows: [
        ['Game Boy', '4', '黑白掌机复古风格', '对比度较低时细节易混淆'],
        ['NES 风格', '16', '经典街机与平台动作游戏', '高饱和度颜色需注意搭配'],
        ['PICO-8', '16', '现代鲜艳像素风格', '注意控制高饱和色彩的对比'],
        ['Commodore 64', '16', '复古电脑端艺术风格', '清晰的轮廓有助于提升识别度'],
        ['DawnBringer 16', '16', '通用性极高的手绘调色板', '需要明确的光影方向'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: '精灵图集工作流建议',
    },
    {
      type: 'paragraph',
      html: '上传导出好的精灵图集，利用放大功能仔细检查面部细节和轮廓线是否保持清晰。',
    },
    {
      type: 'tip',
      title: '控制色彩数量',
      html: '将颜色控制在 4 到 16 色之间通常能获得最干练清晰的效果。',
    },
    {
      type: 'title',
      level: 2,
      text: '导出前检查清单',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '导入游戏前的准备',
      html: '在 100% 比例下检查画面，确保透明边缘干净无杂色。',
    },
    {
      type: 'glossary',
      items: [
        {
          term: '色彩量化（Quantization）',
          definition: '将大量颜色缩减为较小固定颜色集合的过程。',
        },
        {
          term: '色彩阶梯（Ramp）',
          definition: '用于表现明暗过渡和材质体感的一组同系颜色。',
        },
        {
          term: '索引调色板',
          definition: '像素通过引用色表序号来确定颜色的存储形式。',
        },
      ],
    },
  ],
  faq: [
    {
      question: '我的图片会被上传到服务器吗？',
      answer: '不会。所有图像处理均在您的浏览器本地进行。',
    },
    {
      question: '支持使用我自己的调色板吗？',
      answer: '支持。在自定义颜色框中输入 Hex 代码并点击应用调色板即可。',
    },
  ],
  howTo: [
    {
      name: '加载图片',
      text: '拖放 PNG、JPEG 或 WebP 图片到工作区。',
    },
    {
      name: '选择调色板',
      text: '选择预设或输入自定义 Hex 代码。',
    },
    {
      name: '导出结果',
      text: '下载转换后的 PNG 格式图片。',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: '像素艺术调色板调换工具',
      applicationCategory: 'DesignApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '我的图片会被上传到服务器吗？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '不会。所有图像处理均在您的浏览器本地进行。',
          },
        },
        {
          '@type': 'Question',
          name: '支持使用我自己的调色板吗？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '支持。在自定义颜色框中输入 Hex 代码并点击应用调色板即可。',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: '如何将像素图转换至复古调色板',
      step: [
        { '@type': 'HowToStep', name: '加载图片', text: '拖放图片到工作区。' },
        { '@type': 'HowToStep', name: '选择调色板', text: '选择预设或输入自定义 Hex 代码。' },
        { '@type': 'HowToStep', name: '导出结果', text: '下载转换后的 PNG 格式图片。' },
      ],
    },
  ],
  bibliography: [
    {
      name: 'MDN Canvas API',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API',
    },
    {
      name: 'Lospec Palette List',
      url: 'https://lospec.com/palette-list',
    },
    {
      name: 'W3C Portable Network Graphics Specification',
      url: 'https://www.w3.org/TR/png-3/',
    },
  ],
};
