import type { ToolLocaleContent } from '../../../types';
import type { AudioLoopPointFinderUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<AudioLoopPointFinderUI> = {
  slug: 'audio-loop-point-finder',
  title: '游戏音频循环点查找器与元数据注入器',
  description: '定位精确的音频循环点，自动对齐到过零点以消除杂音咔嗒声，并导出嵌入LOOPSTART和LOOPEND元数据的WAV文件。',
  ui: {
    title: '游戏音频循环点查找器',
    subtitle: '交互式波形分析器、过零点检测器与WAV元数据标签编辑器',
    dropzoneTitle: '拖放音频文件到此处或点击浏览',
    dropzoneSubtitle: '支持WAV、OGG、MP3及FLAC音频轨道',
    dropzoneButton: '选择音频文件',
    audioInfoTitle: '音频轨道属性',
    durationLabel: '时长',
    sampleRateLabel: '采样率',
    channelsLabel: '声道数',
    totalSamplesLabel: '总采样数',
    loopControlsTitle: '循环区域配置',
    loopStartLabel: '循环起始标记',
    loopEndLabel: '循环结束标记',
    loopDurationLabel: '循环时长',
    zeroCrossingLabel: '过零点对齐',
    snapZeroCrossingButton: '自动对齐至最近过零点',
    playLoopButton: '预览无缝循环',
    pauseLoopButton: '暂停播放',
    stopLoopButton: '停止播放',
    exportWavButton: '导出带元数据的WAV',
    sampleUnitLabel: '采样点',
    secondUnitLabel: '秒',
    zoomLabel: '波形缩放',
    zoomInButton: '放大',
    zoomOutButton: '缩小',
    resetZoomButton: '重置视图',
    noFileSelected: '尚未加载音频文件',
    invalidAudioFile: '解码音频文件失败',
    presetsTitle: '快捷预设',
    presetFullTrack: '全轨循环',
    presetIntroCut: '跳过10%前奏',
    presetMiddleLoop: '中间50%片段',
    statusLooping: '循环播放中',
    statusPaused: '播放已暂停',
    statusReady: '音频已加载完毕',
    statusLoaded: '已成功加载音频轨道',
    statusDecodeError: '解码音频文件时出错',
    statusSnapped: '标记点已自动对齐至过零点',
    statusStopped: '播放已停止',
    statusExported: '已成功导出嵌入循环标签的WAV文件',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: '游戏音频无缝循环与采样点精确对齐',
    },
    {
      type: 'paragraph',
      html: '在电子游戏中实现不间断的背景音乐播放，需要在循环边界处进行精确的采样点对齐。Unity、Godot、Unreal Engine、FMOD和Wwise等现代游戏引擎均支持直接读取WAV文件头中的LOOPSTART和LOOPEND元数据。',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: '采样率精度', value: '44.1 kHz / 48 kHz' },
        { label: '过零点门限', value: '0.00 振幅' },
        { label: '元数据标准', value: 'RIFF smpl 及 INFO' },
        { label: '杂音消除', value: '100% 相位对齐' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: '过零点自动对齐策略',
    },
    {
      type: 'tip',
      title: '消除爆音咔嗒声',
      html: '请务必将循环起始和结束标记点设置在正向过零点处。这样可以防止扬声器振膜因振幅突变而产生咔嗒杂音。',
    },
    {
      type: 'title',
      level: 2,
      text: '元数据兼容性对比',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'RIFF smpl 块标记',
          description: '嵌入在WAV文件头结构中的标准二进制元数据',
          points: [
            'Godot、FMOD、Wwise及GameMaker原生支持',
            '提供无时间漂移的精确定位',
            '将循环标记点打包保存在单个WAV文件中',
            '结合过零点对齐可彻底消除拼接杂音',
          ],
        },
        {
          title: '手动音频裁切',
          description: '将前奏与循环部分切分为独立文件',
          points: [
            '仅用于不支持元数据的简易播放器',
            '易受毫秒级播放微小停顿和延迟影响',
            '需要在项目中维护管理多个音频文件',
            '在过渡衔接处产生咔嗒声的风险较高',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: '标准采样率参考表',
    },
    {
      type: 'table',
      headers: ['标准采样率', '每秒采样数', '推荐使用场景', '时间分辨率'],
      rows: [
        ['44,100 Hz', '44,100', '标准CD音质游戏配乐', '每采样 0.0226 ms'],
        ['48,000 Hz', '48,000', '现代桌面及主机游戏', '每采样 0.0208 ms'],
        ['96,000 Hz', '96,000', '高清母带音频素材', '每采样 0.0104 ms'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: '字节级自动元数据注入',
    },
    {
      type: 'paragraph',
      html: '从此工具导出音频轨道时，新的元数据结构将直接注入到输出WAV二进制文件的RIFF头中。',
    },
  ],
  faqTitle: '常见问题解答',
  faq: [
    {
      question: '什么是LOOPSTART和LOOPEND元数据标签？',
      answer: 'LOOPSTART和LOOPEND是以绝对采样点总数为单位测量的元数据字段。',
    },
    {
      question: '为什么循环点处会出现咔嗒杂音？',
      answer: '当结束标记处的波形振幅或相位斜率与起始标记处不匹配时，就会产生咔嗒杂音。',
    },
    {
      question: '我的原始音频文件会被上传到服务器吗？',
      answer: '不会。所有解码、波形绘制及元数据注入均在您的浏览器内存中本地完成。',
    },
  ],
  howTo: [
    {
      name: '加载音频轨道',
      text: '拖放音乐文件或选择WAV、OGG、MP3、FLAC文件。',
    },
    {
      name: '定位循环标记',
      text: '通过波形视图或数值输入框调整循环起始和结束点。',
    },
    {
      name: '对齐至过零点',
      text: '点击过零点对齐按钮自动微调标记位置。',
    },
    {
      name: '试听并导出',
      text: '试听无缝循环效果，然后下载嵌入元数据的WAV文件。',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: '游戏音频循环点查找器',
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
          name: '什么是LOOPSTART和LOOPEND元数据标签？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'LOOPSTART和LOOPEND是以采样点数为单位的元数据。',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: '如何查找并注入音频循环点',
      step: [
        {
          '@type': 'HowToStep',
          name: '加载音频轨道',
          text: '拖放音乐文件或选择音频文件。',
        },
      ],
    },
  ],
  bibliographyTitle: '参考资料与延伸阅读',
  bibliography: bibliographyEntries,
};
