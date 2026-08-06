import type { ToolLocaleContent } from '../../../types';
import type { ItchioGameTesterUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<ItchioGameTesterUI> = {
  slug: 'itchio-game-tester',
  title: 'Itch.io 网页游戏检查器与实时分辨率优化工具',
  description: '上传HTML5导出文件或ZIP压缩包，实时测试视口、修复滚动条、检查Godot和Unity WebGL构建，并生成Itch.io嵌入设置。',
  ui: {
    dropzoneTitle: '将游戏构建或ZIP文件拖放至此处',
    dropzoneHint: '将任何.ZIP文件、导出文件夹或HTML5构建文件拖放到此区域即可立即检查。',
    chooseFiles: '选择游戏文件或文件夹',
    engineDetected: '检测到的引擎',
    compatibilityScore: 'Itch.io兼容性评分',
    viewportWidth: '视口宽度 (px)',
    viewportHeight: '视口高度 (px)',
    presets: '快速分辨率预设',
    fitTest: '实时布局与滚动条测试',
    copySettings: '复制Itch.io嵌入设置',
    copied: '已复制到剪贴板',
    embedMode: '嵌入模式',
    scrollbars: '启用滚动条',
    noIssuesFound: '所有检查均已通过。该包100%符合Itch.io标准。',
    filesInspected: '已检查文件',
    resetViewport: '重置视口',
    autoScaleToggle: '自动将视口缩放到屏幕宽度',
    scaledNotice: '视口超出屏幕宽度。已应用人工缩小以使整个画布可见。禁用自动缩放可查看真实的布局效果。',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Itch.io HTML5游戏导出格式指南'
    },
    {
      type: 'paragraph',
      html: '在Itch.io上发布HTML5和WebGL游戏需要精确配置视口尺寸、归档文件结构和跨源安全标头。'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: '标准网页宽高比', value: '16:9 横向' },
        { label: '经典Itch分辨率', value: '960 x 540 px' },
        { label: '必需入口文件', value: '根目录的index.html' },
        { label: 'Godot 4要求', value: 'COOP / COEP标头' }
      ]
    },
    {
      type: 'tip',
      html: '在Itch.io上嵌入1280x720的WebGL游戏时，将嵌入视口尺寸精确设置为1280x720，并启用"Embed in page"。'
    }
  ],
  faq: [
    {
      question: '为什么我的Godot 4游戏在Itch.io上显示黑屏？',
      answer: 'Godot 4网页导出使用需要SharedArrayBuffer支持的WebAssembly多线程。在Itch.io游戏编辑页面的帧选项中启用"SharedArrayBuffer support"。'
    }
  ],
  howTo: [
    { name: '上传游戏文件或ZIP', text: '拖放HTML5导出ZIP压缩包，或选择包含index.html的构建目录。' },
    { name: '查看兼容性报告', text: '检查自动审核报告，了解根目录index.html放置、大小写警告和引擎检测情况。' },
    { name: '实时调整视口大小', text: '使用分辨率滑块和宽高比预设，实时测试无滚动条的iframe嵌入效果。' },
    { name: '复制Itch.io设置', text: '点击复制设置，获取用于Itch.io游戏提交页面的精确宽度和高度值。' }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Itch.io 网页游戏检查器',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '为什么我的Godot 4游戏在Itch.io上显示黑屏？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Godot 4网页导出使用需要SharedArrayBuffer支持的WebAssembly多线程。在Itch.io游戏编辑页面的帧选项中启用"SharedArrayBuffer support"。'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: '如何审核并测试您的Itch.io游戏视口',
      step: [
        {
          '@type': 'HowToStep',
          name: '上传游戏文件或ZIP',
          text: '拖放HTML5导出ZIP压缩包，或选择包含index.html的构建目录。'
        },
        {
          '@type': 'HowToStep',
          name: '实时调整视口大小',
          text: '使用分辨率滑块和宽高比预设，实时测试无滚动条的iframe嵌入效果。'
        }
      ]
    }
  ],
  bibliography: bibliographyEntries
};
