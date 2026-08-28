import type { ToolLocaleContent } from '../../../types';
import type { RetroSfxGeneratorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<RetroSfxGeneratorUI> = {
  slug: 'retro-sfx-generator',
  title: '复古游戏音效生成器',
  description: '在浏览器中直接生成复古游戏音效，提供快速预设、波形调节、实时示波器与一键 WAV 导出。',
  ui: {
    waveformLabel: '波形',
    waveformSquare: '方波',
    waveformSawtooth: '锯齿波',
    waveformSine: '正弦波',
    waveformTriangle: '三角波',
    waveformNoise: '噪声',
    presetLabel: '预设音效库',
    presetExplosion: '爆炸',
    presetLaser: '激光',
    presetJump: '跳跃',
    presetCoin: '金币',
    presetPowerUp: '道具强化',
    frequencyLabel: '起始频率',
    frequencyEndLabel: '终止频率',
    durationLabel: '时长',
    decayLabel: '衰减',
    sweepLabel: '音调滑音',
    vibratoLabel: '颤音',
    lowpassLabel: '低通滤波',
    highpassLabel: '高通滤波',
    noiseMixLabel: '噪声混合',
    toneSection: '音高',
    dynamicsSection: '动态',
    filterSection: '纹理',
    playButton: '播放音效',
    stopButton: '停止',
    downloadButton: '下载 WAV',
    randomizeButton: '随机生成',
    resetButton: '重置',
    waveformPreviewLabel: '实时波形预览',
    generatedLabel: '已生成',
    statusReady: '就绪，可随时试听',
    statusPlaying: '正在浏览器中播放',
    statusStopped: '播放已停止',
    statusDownloaded: 'WAV 已下载',
    statusAudioBlocked: '播放需要允许浏览器标签页的音频权限',
    statusGenerating: '正在合成音效',
    presetHint: '选择一个预设起点，然后使用下方滑块调整音频信号。',
    monoWavHint: '44.1 kHz · 16-bit 单声道 WAV',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: '在 Game Jam 期间无需离开浏览器即可制作游戏音效',
    },
    {
      type: 'paragraph',
      html: '优秀的游戏音效能立即向玩家传达操作反馈。音高的快速上升可代表跳跃或获得道具，快速下降的滑音代表激光或击中，而带有衰减的噪声能完美表现爆炸。本工具完全在浏览器内部合成并导出音效。',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: '预设模式', value: '5 种基础预设' },
        { label: '波形选择', value: '5 种振荡器波形' },
        { label: '导出格式', value: '16-bit PCM WAV' },
        { label: '处理方式', value: '浏览器本地合成' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: '控制参数说明',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '音调与变化',
          description: '音高控制决定音效的基础音色。',
          points: [
            '起始频率设定振荡器的初始音高',
            '音调滑音控制频率向终止值的滑动变化',
            '颤音加入轻微的周期性音高波动',
            '不同波形产生丰富的谐波纹理',
          ],
        },
        {
          title: '形态与纹理',
          description: '动态与滤波控制决定音效的尾音和包络。',
          points: [
            '时长设定音效的总播放时间',
            '衰减控制音量下降的快慢',
            '低通滤波器使高频更加柔柔',
            '高通滤波器滤除低频，配合噪声增加颗粒感',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: '常见游戏事件的实用配置参考',
    },
    {
      type: 'table',
      headers: ['事件类型', '推荐起点预设', '建议优先尝试的调整'],
      rows: [
        ['爆炸', '低频噪声', '增加时长并降低低通滤波，获得更浑厚的爆破感'],
        ['激光', '带下降滑音的锯齿波', '缩短时长并提高高通滤波，使攻击感更加锋利'],
        ['跳跃', '带上升滑音的方波', '减少衰减时间，使上升感更加清晰'],
        ['金币', '短促上升滑音的方波', '提高起始频率，打造清脆的拾取声'],
        ['道具强化', '带长上升滑音的三角波', '加入微量颤音，增加动态丰富度'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: '为什么 WAV 是原型开发的理想导出格式',
    },
    {
      type: 'paragraph',
      html: 'WAV 格式无需额外的解压库即可直接导入主流游戏引擎（如 Unity、Godot 等）。本工具在内存中直接生成小巧的单声道 WAV 文件并供一键下载。',
    },
    {
      type: 'tip',
      title: '在游戏实际音量下进行测试',
      html: '单独听起来出色的音效如果在游戏中高频触发可能会造成听觉疲劳。请务必在游戏实际场景中与背景音乐一起测试。',
    },
    { type: 'paragraph', html: '还要在游戏的实际混音中试听：单独听起来明亮的音效可能会盖住对白或音乐。作为最终资源使用前，请检查音量、削波和持续时间。' },
  ],
  faqTitle: '常见问题',
  faq: [
    {
      question: '生成的音效会上传到服务器吗？',
      answer: '不会。所有合成与 WAV 编码完全在您的浏览器本地完成。',
    },
    {
      question: '我可以将下载的音效用于商业游戏吗？',
      answer: '可以。生成的音频非常适合用于原型开发、Game Jam 以及独立游戏制作。',
    },
    {
      question: '音调滑音是如何计算的？',
      answer: '滑块根据起始频率按比例计算终止频率，确保不同音高下的滑动效果自然流畅。',
    },
    {
      question: '如果没有声音怎么办？',
      answer: '请确认浏览器标签页已开启音频播放权限，然后重新点击播放音效。',
    },
  ],
  howTo: [
    {
      name: '选择音效预设',
      text: '从爆炸、激光、跳跃、金币或道具强化中选择一个起点。',
    },
    {
      name: '调节音频参数',
      text: '调整波质、音色、时长、衰减及过滤器滑块。',
    },
    {
      name: '试听生成效果',
      text: '点击播放音效实时听取声音效果。',
    },
    {
      name: '下载 WAV 文件',
      text: '点击下载 WAV 保存 44.1 kHz 16-bit 单声道音频文件。',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: '复古游戏音效生成器',
      applicationCategory: 'MultimediaApplication',
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
          name: '生成的音效会上传到服务器吗？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '不会。所有合成与 WAV 编码完全在您的浏览器本地完成。',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: '如何制作复古游戏音效',
      step: [
        {
          '@type': 'HowToStep',
          name: '选择音效预设',
          text: '选择预设起点。',
        },
      ],
    },
  ],
  bibliographyTitle: '参考文献',
  bibliography: bibliographyEntries,
};
