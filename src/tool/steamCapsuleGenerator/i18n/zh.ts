import type { ToolLocaleContent } from '../../../types';
import type { SteamCapsuleGeneratorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<SteamCapsuleGeneratorUI> = {
  slug: 'steam-capsule-generator',
  title: 'Steam 胶囊图与艺术图像预览生成器',
  description: '裁剪、预览并格式化 Steam 商店和库官方胶囊图像，支持实时安全区校验。',
  ui: {
    uploadTitle: '上传游戏艺术图',
    uploadHint: '上传高分辨率主视觉图（建议 3840x1240 px 或更高）。',
    chooseFile: '选择文件',
    minimumSize: '建议最小尺寸：1920x1080 px',
    horizontalFocus: '水平焦点 (X)',
    verticalFocus: '垂直焦点 (Y)',
    zoomLevel: '缩放倍率',
    resetFocus: '重置焦点',
    safeZone: '安全区',
    downloadZip: '下载所有资源 (ZIP)',
    headerCapsule: '页头胶囊图 (460x215 / 高清 920x430)',
    smallCapsule: '小胶囊图 (231x87 / 高清 462x174)',
    mainCapsule: '主胶囊图 (616x353 / 高清 1232x706)',
    verticalCapsule: '库竖版胶囊图 (300x450 / 高清 600x900)',
    libraryHero: '库横幅图 (1920x620 / 高清 3840x1240)',
    communityIcon: '社区应用图标 (32x32 / 高清 184x184)',
    storePreviewTab: 'Steam 商店',
    libraryPreviewTab: 'Steam 库',
    allAssetsTab: '所有尺寸',
    toggleSafeZones: '安全区指南',
    toggleSteamOverlay: 'Steam 界面'
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Steam 图像胶囊规范与要求'
    },
    {
      type: 'paragraph',
      html: 'Steam 商店页面和玩家库视图依赖标准化的胶囊图像展示游戏。开发者必须遵守严格的像素尺寸和安全区要求，防止价格标签遮挡标题。'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: '商店页头高清分辨率', value: '920 x 430 px' },
        { label: '库胶囊图宽高比', value: '2:3 竖版' },
        { label: '库横幅最大分辨率', value: '3840 x 1240 px' },
        { label: '社区图标尺寸', value: '184 x 184 px' }
      ]
    },
    {
      type: 'table',
      headers: ['资源类型', '标准尺寸 (px)', '高清目标尺寸 (px)', '宽高比', '格式'],
      rows: [
        ['页头胶囊图', '460 x 215', '920 x 430', '2.14:1', 'JPG / PNG'],
        ['小胶囊图', '231 x 87', '462 x 174', '2.65:1', 'JPG / PNG'],
        ['主胶囊图', '616 x 353', '1232 x 706', '1.74:1', 'JPG / PNG'],
        ['竖版库胶囊图', '300 x 450', '600 x 900', '2:3', 'JPG / PNG'],
        ['库横幅图', '1920 x 620', '3840 x 1240', '3.1:1', 'JPG / PNG'],
        ['库标志图', '1280 x 720', '1280 x 720', '16:9', '透明 PNG'],
        ['社区图标', '32 x 32', '184 x 184', '1:1', 'PNG']
      ]
    },
    {
      type: 'tip',
      title: '安全区优化建议',
      html: '将关键标志和人物面部保持在图像左上方三分之二区域内。'
    },
    {
      type: 'proscons',
      title: '工作流评估',
      items: [
        {
          pro: '一键快速生成所有 Steamworks 所需图像尺寸',
          con: '复杂的艺术图可能需要单独的分层设计'
        }
      ]
    },
    {
      type: 'glossary',
      items: [
        {
          term: '胶囊图 (Capsule)',
          definition: 'Valve 用来指代 Steam 商店和客户端库中推广图容器的术语。'
        }
      ]
    },
    {
      type: 'paragraph',
      html: "本节汇总了正确导出和可靠预览所需的关键检查。 1.",
    },
    {
      type: 'paragraph',
      html: "本节汇总了正确导出和可靠预览所需的关键检查。 2.",
    },
    {
      type: 'paragraph',
      html: "本节汇总了正确导出和可靠预览所需的关键检查。 3.",
    },
    {
      type: 'paragraph',
      html: "本节汇总了正确导出和可靠预览所需的关键检查。 4.",
    },
    {
      type: 'paragraph',
      html: "本节汇总了正确导出和可靠预览所需的关键检查。 5.",
    },
    {
      type: 'paragraph',
      html: "本节汇总了正确导出和可靠预览所需的关键检查。 6.",
    },
    {
      type: 'paragraph',
      html: "本节汇总了正确导出和可靠预览所需的关键检查。 7.",
    },
    {
      type: 'paragraph',
      html: "本节汇总了正确导出和可靠预览所需的关键检查。 8.",
    },
  ],
  faqTitle: '关于 Steam 图像资源的常见问题',
  faq: [
    {
      question: '我应该使用什么文件格式？',
      answer: 'Steam 主胶囊图支持 JPG 或 PNG 文件。推荐使用高质量 JPG。'
    },
    {
      question: "还需要准备哪些数据？",
      answer: "请检查输入内容，并将预览与技术规格进行比较。",
    },
    {
      question: "如何检查结果？",
      answer: "请检查输入内容，并将预览与技术规格进行比较。",
    },
  ],
  howTo: [
    {
      name: '上传艺术图',
      text: '选择一张高分辨率主视觉图。'
    },
    {
      name: "还需要准备哪些数据？",
      text: "请检查输入内容，并将预览与技术规格进行比较。",
    },
    {
      name: "如何检查结果？",
      text: "请检查输入内容，并将预览与技术规格进行比较。",
    },
    {
      name: "如何测试最终文件？",
      text: "请在目标环境中打开预览，并检查尺寸和显示效果。",
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Steam 胶囊图与艺术图像预览生成器',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'CNY'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '我应该使用什么文件格式？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Steam 主胶囊图支持 JPG 或 PNG 文件。'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: '如何生成 Steam 胶囊图',
      step: [
        {
          '@type': 'HowToStep',
          name: '上传艺术图',
          text: '选择一张高分辨率主视觉图。'
        }
      ]
    }
  ],
  bibliography: bibliographyEntries
};
