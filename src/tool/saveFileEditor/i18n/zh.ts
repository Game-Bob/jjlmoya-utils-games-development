import type { ToolLocaleContent } from '../../../types';
import type { SaveFileEditorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<SaveFileEditorUI> = {
  slug: 'game-save-file-editor',
  title: '游戏存档文件混淆与在线编辑器',
  description: '在浏览器本地100%安全地解密、检查、编辑JSON结构并使用Base64、XOR掩码或明文重新加密游戏存档文件。',
  ui: {
    title: '游戏存档文件混淆与在线编辑器',
    subtitle: '无需上传服务器，安全地检查、修改和加密本地游戏存档状态文件',
    dropSaveFile: '将游戏存档文件拖放到此处',
    orSelectFile: '或点击浏览本地文件',
    encryptionMethod: '加密格式',
    methodBase64: 'Base64 编码',
    methodXor: 'XOR 掩码 + Base64',
    methodRaw: '明文 JSON / 未加密',
    xorKeyLabel: 'XOR 密钥',
    xorKeyPlaceholder: '例如 MySecretGameKey2026',
    jsonRawTitle: '已解密的 JSON 数据（实时编辑器）',
    encodeAndDownload: '加密并下载存档文件',
    copyEncoded: '复制加密文本',
    copiedNotice: '已复制到剪贴板！',
    decodedKeysCount: '参数总数',
    dataSize: '数据大小',
    detectedFormat: '检测到的格式',
    exportPreviewLabel: '加密输出预览',
    decodePanelTitle: '解密与实时 JSON 编辑器',
    exportPanelTitle: '重新加密输出数据',
    decodeError: '无法解密游戏存档文件',
    bytesUnit: '字节',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: '游戏存档文件安全与混淆协议',
    },
    {
      type: 'paragraph',
      html: '在电子游戏开发中，玩家的进度、道具数量、解锁关卡和角色属性等状态数据通常会被序列化并持久化存储。为了防止普通玩家通过文本编辑器随意篡改存档，游戏开发团队通常会使用 Base64 编码或基于自定义密钥的按位 XOR 掩码对存档文件进行混淆。在内部 QA 测试和在线运营调试过程中，开发人员需要能够实时查看原始 JSON 结构、设定边界测试状态，并在无需重新编译游戏二进制文件的情况下重新加密导出存档。',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: '客户端处理隐私', value: '100% 本地' },
        { label: '支持的解密方式', value: 'Base64 / XOR / JSON' },
        { label: '解密延迟', value: '0 毫秒' },
        { label: '数据泄漏风险', value: '零' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: '混淆方案对比',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Base64 编码',
          description: '轻量级的文本转换格式，可防止在记事本中直接修改，但不具备真正的密码学安全性。',
        },
        {
          title: 'XOR 掩码 + Base64',
          description: '独立游戏开发中的标准做法。将文本字节与密钥混合，有效防御内存修改器和简易作弊工具。',
        },
        {
          title: '明文 JSON 数据',
          description: '未加密的可读存档状态。非常适合早期原型设计和内部团队快速迭代。',
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: '存档状态验证的 QA 测试实践',
    },
    {
      type: 'tip',
      title: 'QA 测试中的存档安全最佳实践',
      html: '请务必为内部测试构建与生产构建配置不同的调试密钥。验证边界条件 Bug 时，可使用本地树状编辑器强行设置道具上限和测试数值，无需重新编译代码。',
    },
    {
      type: 'title',
      level: 2,
      text: '游戏状态参数指南表',
    },
    {
      type: 'table',
      headers: ['数据类型', '推荐格式', '常见应用场景', '混淆层'],
      rows: [
        ['数值整数', '32 位整数', '金币、等级、经验值、弹药', 'XOR 掩码'],
        ['布尔标志', '标准布尔值', '新手教程完成、Boss 击败', 'Base64 / XOR'],
        ['嵌套对象', 'JSON 层次结构', '玩家背包、技能树', 'Base64 编码'],
        ['时间戳字符串', 'ISO 8601 UTC', '每日签到、存档时间戳', 'XOR 掩码'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: '逆向工程与防篡改考量',
    },
    {
      type: 'paragraph',
      html: '尽管客户端混淆可以防止普通玩家篡改存档，但 XOR 掩码和 Base64 编码并非强加密算法。使用 RenderDoc 或 x64dbg 等内存调试工具可以从编译好的二进制文件中分析出密钥生成逻辑。对于竞技类多人游戏，必须结合服务器端权威验证或 HMAC 数字签名来防止篡改。',
    },
  ],
  faqTitle: '常见问题解答',
  faq: [
    {
      question: '我的游戏存档文件会被上传到远程服务器吗？',
      answer: '不会。所有解密、JSON 编辑和重新加密过程 100% 在您的 Web 浏览器 JavaScript 引擎内部本地完成。',
    },
    {
      question: 'XOR 密钥混淆在 Unity 或 Godot 等游戏引擎中是如何工作的？',
      answer: 'XOR 混淆会遍历序列化 JSON 字符串的 UTF-8 字节，将其与密钥字符逐字节进行按位 XOR 异或运算，再将结果转换为 Base64 编码。',
    },
  ],
  howTo: [
    {
      name: '加载或粘贴存档文件',
      text: '上传加密的游戏存档文件或将文件拖入加载区域。',
    },
    {
      name: '选择解密方法和密钥',
      text: '选择 Base64 或 XOR 掩码，并输入对应的游戏秘钥。',
    },
    {
      name: '编辑 JSON 状态',
      text: '在实时编辑器中调整等级、金币、道具或游戏状态标志。',
    },
    {
      name: '加密并导出',
      text: '选择目标输出格式并下载修改后的存档文件以供游戏测试。',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: '游戏存档文件编辑器',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'CNY',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '我的游戏存档文件会被上传到远程服务器吗？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '不会。所有处理过程 100% 在您的浏览器内部完成。',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: '如何编辑加密的游戏存档文件',
      step: [
        {
          '@type': 'HowToStep',
          name: '加载存档文件',
          text: '上传加密的游戏存档文件。',
        },
      ],
    },
  ],
  bibliographyTitle: '参考资料与延伸阅读',
  bibliography: bibliographyEntries,
};
