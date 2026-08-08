import type { ToolLocaleContent } from '../../../types';
import type { LocalizationSanitizerUI } from '../ui';

export const content: ToolLocaleContent<LocalizationSanitizerUI> = {
  slug: 'localization-sanitizer',
  title: 'Godot 与 Unity 本地化 CSV 及 JSON 修复工具',
  description: '检查翻译 CSV 和 JSON 文件中的空单元格、重复键及损坏行，并导出可直接导入游戏引擎的规范化文件。',
  ui: {
    csvTab: 'CSV 文件',
    jsonTab: 'JSON 文件',
    dropTitle: '拖放翻译文件至此处',
    dropSubtitle: '在浏览器中检查结构，源文件保留在本地设备上。',
    browseButton: '浏览文件',
    sampleButton: '加载示例',
    clearButton: '清空',
    inputLabel: '翻译文件输入',
    formatLabel: '格式',
    healthLabel: '文件状态',
    readyStatus: '可直接导入',
    reviewStatus: '需要检查',
    emptyCellsLabel: '空单元格',
    duplicateKeysLabel: '重复键',
    malformedRowsLabel: '损坏行',
    cleanRowsLabel: '正常行',
    issueListTitle: '检查结果',
    noIssues: '未发现结构问题。',
    previewTitle: '翻译预览',
    previewSubtitle: '前几行展示了即将导出的规范化结构。',
    exportTitle: '导出规范文件',
    exportSubtitle: '自动移除重复键、补齐缺失列并规范 CSV 转义字符。',
    downloadButton: '下载规范文件',
    copyButton: '复制结果',
    copiedMessage: '已成功复制规范化结果到剪贴板。',
    emptyIssue: '空翻译单元格',
    duplicateIssue: '已移除重复键',
    malformedIssue: '列数或引号不匹配',
    parseIssue: '无法解析文件。',
    rowLabel: '行',
    columnLabel: '列',
    keyLabel: '键',
    sampleFileName: 'localization-sample.csv',
    privacyNote: '本地浏览器处理',
    waitingTitle: '等待文件',
    waitingSubtitle: '拖放 CSV 或 JSON 文件开始检查。',
    fileTypeNote: 'UTF8 CSV 或结构化 JSON',
  },
  seo: [
    { type: 'title', level: 2, text: '本地化文件导入引擎时为何容易出错' },
    {
      type: 'paragraph',
      html: '翻译表格虽然便于编辑，但也容易产生格式错误。包含逗号的文本若缺少转义引号，会导致整行文本错列。',
    },
    {
      type: 'paragraph',
      html: 'Godot CSV 导入器和 Unity Localization 均需要严格的列格式。本工具在导入前帮助您排查并规范文件。',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'CSV', label: '逗号及转义检查' },
        { value: 'JSON', label: '数组与对象映射' },
        { value: '0 上传', label: '纯本地处理' },
        { value: '1 键', label: '一键导出' },
      ],
    },
    { type: 'title', level: 2, text: '工具检查项目' },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '导入前排查',
          description: '大文件中难以肉眼发现的问题',
          points: ['缺失翻译的空单元格', '重复的翻译 Key', '列数不一致的损坏行', '非法的引号语法'],
        },
        {
          title: '导出时规范化',
          description: '安全的自动修复',
          points: ['自动补齐缺失列', '合并多余列至末尾列', '保留首次出现的 Key', '源文件安全无损'],
        },
      ],
    },
    { type: 'title', level: 2, text: '如何审核处理后的文件' },
    {
      type: 'paragraph',
      html: '结构修复无法替代文本校对。请根据检查结果列表补充未完成的翻译。',
    },
    {
      type: 'table',
      headers: ['检查项', '含义', '建议操作'],
      rows: [
        ['空单元格', '语言列缺失文本', '补充翻译或确认是否故意留空'],
        ['重复键', '多行使用了相同的 Key', '对比文本后采用保留的首次记录'],
        ['损坏行', '列数与表头不符', '检查合并后的末尾列内容'],
        ['解析错误', 'JSON 格式非法', '导入前修复 JSON 语法'],
      ],
    },
    { type: 'title', level: 2, text: '游戏本地化 CSV 规范' },
    {
      type: 'paragraph',
      html: '包含逗号或换行符的文本必须使用双引号包裹。',
    },
    {
      type: 'tip',
      title: '保留原始文件',
      html: '请务必保留译员交付的原始文件作为备份与对比。',
    },
    {
      type: 'glossary',
      items: [
        { term: '翻译键 (Key)', definition: '游戏代码中引用的唯一文本标识符。' },
        { term: 'CSV 字段', definition: '分隔符之间的单个文本值。' },
        { term: '转义 (Escaping)', definition: '使用引号包裹以保留标点符号。' },
        { term: 'Locale', definition: '语言与地区代码，如 zh, en, ja。' },
      ],
    },
  ],
  faq: [
    {
      question: '文件会被上传到服务器吗？',
      answer: '不会，所有解析与处理均在本地浏览器内存中完成。',
    },
    {
      question: '如果 CSV 行中有多余的逗号会怎样？',
      answer: '该行会被标记为损坏行，多余字段会在导出时合并至末尾列。',
    },
    {
      question: '如何处理重复键？',
      answer: '保留第一次出现的记录，后续重复 Key 将被过滤。',
    },
    {
      question: '本工具会检查翻译质量吗？',
      answer: '不会，本工具仅检查文件结构与单元格完整性。',
    },
  ],
  howTo: [
    { name: '选择格式', text: '选择 CSV 或 JSON 格式。' },
    { name: '查看检查结果', text: '拖放文件并排查问题列表。' },
    { name: '导出并测试', text: '下载规范文件并导入游戏引擎测试。' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Godot 与 Unity 本地化 CSV 及 JSON 修复工具',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'CNY' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [{
        '@type': 'Question',
        name: '文件会被上传到服务器吗？',
        acceptedAnswer: { '@type': 'Answer', text: '不会，所有解析与处理均在本地浏览器内存中完成。' },
      }],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: '如何修复游戏本地化文件',
      step: [
        { '@type': 'HowToStep', name: '选择格式', text: '选择 CSV 或 JSON 格式。' },
        { '@type': 'HowToStep', name: '查看检查结果', text: '拖放文件并排查问题列表。' },
        { '@type': 'HowToStep', name: '导出并测试', text: '下载规范文件并导入游戏引擎测试。' },
      ],
    },
  ],
  bibliography: [
    { name: 'Godot ResourceImporterCSVTranslation 文档', url: 'https://docs.godotengine.org/en/stable/classes/class_resourceimportercsvtranslation.html' },
    { name: 'Unity Localization CSV Import 文档', url: 'https://docs.unity3d.com/Packages/com.unity.localization@1.5/manual/CSV.html' },
    { name: 'RFC 4180 CSV 规范', url: 'https://datatracker.ietf.org/doc/html/rfc4180' },
  ],
};
