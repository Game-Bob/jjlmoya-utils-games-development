import type { ToolLocaleContent } from '../../../types';
import type { SteamBbcodeTranslatorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<SteamBbcodeTranslatorUI> = {
  slug: 'steam-bbcode-translator',
  title: 'Steam BBCode, Markdown 与 HTML 转换器',
  description: '支持 Steam BBCode、Markdown 和 HTML 之间的双向自动识别转换与实时预览。',
  ui: {
    editorLabel: '粘贴您的富文本',
    editorHint: '输入时将自动识别 BBCode、Markdown 或 HTML 格式。',
    detectedLabel: '识别格式',
    detectedEmpty: '等待输入文本',
    bbcode: 'Steam BBCode',
    markdown: 'Markdown',
    html: 'HTML',
    clear: '清空',
    copy: '复制输出',
    copied: '已复制到剪贴板',
    characters: '字符数',
    blocks: '区块数',
    privacyNote: '在浏览器中本地运行，无需上传。',
    persistenceNote: '最后草稿已保存在本地',
    previewLabel: '预览',
    previewEmpty: '格式化后的预览将在此显示。'
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: '为什么商店文案需要格式转换器'
    },
    {
      type: 'paragraph',
      html: 'Steam 商店页面编辑使用 BBCode 语法，而新闻资料包或文档网站通常使用 Markdown 或 HTML。本工具能够自动识别并同步生成其他两种格式。'
    },
    {
      type: 'title',
      level: 2,
      text: '支持的标记与结构'
    },
    {
      type: 'paragraph',
      html: '支持标题、加粗、斜体、链接、列表、引用与黑幕剧透标记的转换。'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: '输入格式', value: '3 种' },
        { label: '同时输出', value: '2 种' },
        { label: '列表深度', value: '支持嵌套' },
        { label: '数据处理', value: '纯本地' }
      ]
    },
    {
      type: 'title',
      level: 2,
      text: '保留嵌套列表结构'
    },
    {
      type: 'paragraph',
      html: '通过构建轻量级语法树，确保子列表项在转换后依然精确嵌套在父级列表中。'
    },
    {
      type: 'table',
      headers: ['Steam BBCode', 'Markdown', 'HTML'],
      rows: [
        ['[h1]标题[/h1]', '# 标题', '&lt;h1&gt;标题&lt;/h1&gt;'],
        ['[b]重点[/b]', '**重点**', '&lt;strong&gt;重点&lt;/strong&gt;'],
        ['[i]备注[/i]', '*备注*', '&lt;em&gt;备注&lt;/em&gt;'],
        ['[url=https://example.com]链接[/url]', '[链接](https://example.com)', '&lt;a href="https://example.com"&gt;链接&lt;/a&gt;'],
        ['[list][*]第一[*]第二[/list]', '- 第一\n- 第二', '&lt;ul&gt;&lt;li&gt;第一&lt;/li&gt;&lt;li&gt;第二&lt;/li&gt;&lt;/ul&gt;']
      ]
    },
    {
      type: 'title',
      level: 2,
      text: 'Markdown 与 HTML 转换差异'
    },
    {
      type: 'paragraph',
      html: '当 Markdown 原生不支持下划线等样式时，转换器会自动补充内联 HTML 标签。'
    },
    {
      type: 'tip',
      title: '发布前检查建议',
      html: '在发布到 Steam 或官网之前，请在预览面板中核对排版效果。'
    },
    {
      type: 'title',
      level: 2,
      text: '隐私与数据安全'
    },
    {
      type: 'paragraph',
      html: '所有转换均在您的浏览器本地完成，绝不会上传任何未公开文案。'
    },
    {
      type: 'title',
      level: 2,
      text: '转换说明'
    },
    {
      type: 'proscons',
      title: '转换特点',
      items: [
        {
          pro: '结构化处理嵌套列表。',
          con: '自定义非标标签需手动复核。'
        }
      ]
    },
    {
      type: 'title',
      level: 2,
      text: '术语表'
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'BBCode',
          definition: 'Steam 商店页面使用的方括号标记语法。'
        },
        {
          term: 'Markdown',
          definition: '易读易写的轻量级标记语言。'
        },
        {
          term: 'HTML',
          definition: '网页标准的超文本标记语言。'
        }
      ]
    }
  ],
  faqTitle: '常见问题解答',
  faq: [
    {
      question: '文本会被上传到服务器吗？',
      answer: '不会。转换完全在您的浏览器本地进行。'
    },
    {
      question: '支持嵌套列表吗？',
      answer: '支持。系统会先解析列表语法树再生成目标格式。'
    }
  ],
  howTo: [
    {
      name: '粘贴文本',
      text: '粘贴 Steam BBCode、Markdown 或 HTML 文本。'
    },
    {
      name: '自动转换',
      text: '系统将自动生成另外两种格式。'
    }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Steam BBCode, Markdown 与 HTML 转换器',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'CNY' }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '文本会被上传到服务器吗？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'จะไม่。转换完全在您的浏览器本地进行。'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: '如何转换 Steam BBCode、Markdown 与 HTML',
      step: [
        {
          '@type': 'HowToStep',
          name: '粘贴文本',
          text: '粘贴 Steam BBCode、Markdown 或 HTML 文本。'
        }
      ]
    }
  ],
  bibliography: bibliographyEntries
};
