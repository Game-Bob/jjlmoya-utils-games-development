import type { ToolLocaleContent } from '../../../types';
import type { RetroSfxGeneratorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<RetroSfxGeneratorUI> = {
  slug: 'retro-sfx-generator',
  title: 'ゲーム用レトロ効果音ジェネレーター',
  description: 'ブラウザ上でレトロゲームのサウンドエフェクトを生成。プリセット選択、波形調整、オシロスコープ表示、ワンクリックWAV保存に対応。',
  ui: {
    waveformLabel: '波形',
    waveformSquare: '矩形波',
    waveformSawtooth: 'ノコギリ波',
    waveformSine: '正弦波',
    waveformTriangle: '三角波',
    waveformNoise: 'ノイズ',
    presetLabel: 'クイックサウンドバンク',
    presetExplosion: '爆発',
    presetLaser: 'レーザー',
    presetJump: 'ジャンプ',
    presetCoin: 'コイン',
    presetPowerUp: 'パワーアップ',
    frequencyLabel: '開始周波数',
    frequencyEndLabel: '終了周波数',
    durationLabel: '長さ',
    decayLabel: '減衰',
    sweepLabel: 'ピッチスウィープ',
    vibratoLabel: 'ビブラート',
    lowpassLabel: 'ローパス',
    highpassLabel: 'ハイパス',
    noiseMixLabel: 'ノイズミックス',
    toneSection: 'トーン',
    dynamicsSection: 'ダイナミクス',
    filterSection: 'テクスチャ',
    playButton: '音を再生',
    stopButton: '停止',
    downloadButton: 'WAVダウンロード',
    randomizeButton: 'ランダム生成',
    resetButton: 'リセット',
    waveformPreviewLabel: 'リアルタイム波形表示',
    generatedLabel: '生成済み',
    statusReady: '再生準備完了',
    statusPlaying: 'ブラウザで再生中',
    statusStopped: '再生停止',
    statusDownloaded: 'WAV保存完了',
    statusAudioBlocked: '再生にはブラウザタブの音声許可が必要です',
    statusGenerating: '効果音をレンダリング中',
    presetHint: 'プリセットを選択し、下のコントロールで波形を調整してください。',
    monoWavHint: '44.1 kHz · 16-bit モノラル WAV',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'ゲームジャム中にブラウザだけでゲームサウンドを即座に作成',
    },
    {
      type: 'paragraph',
      html: '優れたゲーム効果音は、プレイヤーの操作に対して瞬時にフィードバックを返します。上昇音はジャンプやアイテム取得、下降音は攻撃や落下、ノイズ成分を含む減衰音は爆発を表現します。このジェネレーターは、ブラウザ内の音源合成機能を利用してレトロサウンドを作成します。',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'サウンドプリセット', value: '5種類の基本パターン' },
        { label: 'オシレーター選択', value: '5種類の波形' },
        { label: '出力フォーマット', value: '16-bit PCM WAV' },
        { label: '処理方式', value: 'ブラウザ内ローカル処理' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: '各パラメータの機能説明',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'ピッチと変化',
          description: 'トーンコントロールは効果音の基本的な音高と変化を設定します。',
          points: [
            '開始周波数は音の最初の高さを設定します',
            'ピッチスウィープは周波数の変化量をコントロールします',
            'ビブラートは音高に規則的な揺れを加えます',
            '各種波形により異なる高調波成分が生成されます',
          ],
        },
        {
          title: '時間変化と質感',
          description: 'ダイナミクスとフィルターは音の余韻や質感を整えます。',
          points: [
            '長さは効果音全体の再生時間を決定します',
            '減衰は音量の減少速度を調整します',
            'ローパスフィルターは高周波成分をカットしてマイルドにします',
            'ハイパスフィルターは低周波成分をカットし、ノイズで質感を加えます',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: '代表的なゲームイベント向け設定例',
    },
    {
      type: 'table',
      headers: ['イベント', 'おすすめのプリセット', '調整のヒント'],
      rows: [
        ['爆発', '低音ノイズ', '長さを伸ばしローパスを下げることで重厚感が増します'],
        ['レーザー', '下降スウィープのノコギリ波', '長さを短くしハイパスを上げるとシャープになります'],
        ['ジャンプ', '上昇スウィープの矩形波', '減衰を調整してピッチの上昇感を強調します'],
        ['コイン', '短時間上昇の矩形波', '開始周波数を高くして明るい取得音にします'],
        ['パワーアップ', '長めの変化をつけた三角波', 'ビブラートを少し加えて動きを出します'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'プロトタイプにWAVフォーマットが最適な理由',
    },
    {
      type: 'paragraph',
      html: 'WAVフォーマットは主要なゲームエンジン（Unity, Godot, Unreal Engineなど）にそのまま取り込むことができ、デコード処理の負荷がありません。本ツールで作成されたファイルはブラウザ内で高速に生成されます。',
    },
    {
      type: 'tip',
      title: '実際のゲーム音量で確認する',
      html: '単体で聴くと気持ち良い効果音でも、ゲーム内で連続再生されると騒々しく感じられる場合があります。必ずBGMと合わせた状態で音量調整を行ってください。',
    },
  ],
  faqTitle: 'よくある質問',
  faq: [
    {
      question: '作成した音声をサーバーにアップロードしますか？',
      answer: 'いいえ。すべての音声合成およびWAVエンコードはブラウザ内で処理されます。',
    },
    {
      question: 'ダウンロードした効果音をゲームで使用できますか？',
      answer: 'はい。ゲームジャムやプロトタイプ開発、個人のゲーム作品にそのままご利用いただけます。',
    },
    {
      question: 'ピッチスウィープの仕組みは？',
      answer: '開始周波数を基準として、正の値で音高上昇、負の値で音高下降を行う計算式になっています。',
    },
    {
      question: '音が鳴らない場合の対処法は？',
      answer: 'ブラウザの自動再生制限がかかっている可能性があります。「音を再生」ボタンを再度クリックしてください。',
    },
  ],
  howTo: [
    {
      name: 'プリセットを選択',
      text: '「爆発」「レーザー」「ジャンプ」「コイン」「パワーアップ」から希望のタイプを選択します。',
    },
    {
      name: 'パラメーターを調整',
      text: '波形の種類や周波数、減衰時間、フィルターなどのスライダーを調整します。',
    },
    {
      name: '音を確認',
      text: '「音を再生」ボタンを押して実際の音声を再生確認します。',
    },
    {
      name: 'WAVファイルを保存',
      text: '「WAVダウンロード」をクリックして音声ファイルをローカルに保存します。',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'ゲーム用レトロ効果音ジェネレーター',
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'JPY',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '作成した音声をサーバーにアップロードしますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'いいえ。すべての音声合成およびWAVエンコードはブラウザ内で処理されます。',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'レトロゲーム効果音の作成手順',
      step: [
        {
          '@type': 'HowToStep',
          name: 'プリセットを選択',
          text: '音效プリセットを選択します。',
        },
      ],
    },
  ],
  bibliographyTitle: '参考文献',
  bibliography: bibliographyEntries,
};
