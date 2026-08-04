import { bibliographyEntries } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SwimCssCalculatorUI } from '../ui';

const slug = 'css-swim-calculator';
const title = '限界水泳速度 CSS 計算ツール';
const description = '400mと200mの水泳タイムテストから限界水泳速度 CSS と100mあたりの目標ペースを計算します。';

const faqData = [
  {
    question: 'CSSテストはどれくらいの頻度で実施すべきですか？',
    answer: '水泳選手やトライアスリートは、4〜6週間ごとに400mと200mのCSSテストを実施して目標タイムを調整することをお勧めします。',
  },
  {
    question: 'ヤード単位のプールでも計算できますか？',
    answer: 'はい。限界水泳速度の計算式はヤード単位の短水路プールでも同様に適用されます。',
  },
];

const howToData = [
  {
    name: 'プール単位を選択',
    text: 'メートル（25m / 50mプール）またはヤード（25ydプール）を選択します。',
  },
  {
    name: '400mテストタイムを入力',
    text: '全力で泳いだ400mのタイム（分・秒）を入力します。',
  },
  {
    name: '200mテストタイムを入力',
    text: '全力で泳いだ200mのタイム（分・秒）を入力します。',
  },
  {
    name: '目標ペースを計算・確認',
    text: '計算ボタンをクリックして、100mあたりのCSSペースと各ゾーンの目標スプリットタイムを確認します。',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'SportsApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
  inLanguage: 'ja',
};

const ui: SwimCssCalculatorUI = {
  title: '限界水泳速度 CSS 計算ツール',
  subtitle: '400mと200mのテストから有酸素閾値ペースと目標スプリットタイムを算出します。',
  unitLabel: 'プールの距離単位',
  unitMeters: 'メートル（25m / 50mプール）',
  unitYards: 'ヤード（25ydプール）',
  t400Label: '400m / 400yd タイムテスト',
  t200Label: '200m / 200yd タイムテスト',
  minutesLabel: '分',
  secondsLabel: '秒',
  calculateButton: 'CSSと目標タイムを計算',
  resetButton: 'リセット',
  cssResultTitle: '限界水泳速度の計算結果',
  cssSpeedLabel: '有酸素速度',
  cssPace100Label: '100mあたりのCSSペース',
  lapPaceLabel: '25m / 25yd ラップ目標',
  unitMeterPerSec: 'm/s',
  unitYardPerSec: 'yd/s',
  pace100mUnit: '/100m',
  pace100ydUnit: '/100yd',
  trainingZonesTitle: 'プールトレーニング目標ペースマトリクス',
  zoneHeader: '強度ゾーン',
  pace100Header: '目標ペース / 100',
  split50Header: '50m通過',
  split100Header: '100m通過',
  split200Header: '200m通過',
  split400Header: '400m通過',
  zoneAerobic: '有酸素持久力',
  zoneAerobicDesc: '長距離有酸素トレーニングとウォーミングアップ用（CSSペースの約104%）',
  zoneAerobicRest: 'レスト: 1本あたり10秒〜15秒',
  zoneCss: 'CSS閾値',
  zoneCssDesc: '閾値インターバルおよびレースペース維持用（CSSペースの約100%）',
  zoneCssRest: 'レスト: 1本あたり15秒〜20秒',
  zoneVo2Max: 'VO2 Max スピード',
  zoneVo2MaxDesc: '高強度インターバルトレーニング用（CSSペースの約96%）',
  zoneVo2MaxRest: 'レスト: 1本あたり30秒〜45秒',
  invalidNotice: '400mのタイムは200mのタイムより大きい必要があります。',
  copySplitsButton: 'スプリットタイムをコピー',
  copiedNotice: 'スプリットタイムをコピーしました',
  seo: {
    title: '限界水泳速度 CSS 計算ツール 水泳ペースマトリクス',
    description: '400mと200mの水泳タイムテストから限界水泳速度 CSS と100mあたりの目標ペースを計算します。',
    h1: '限界水泳速度 CSS 計算ツールと水泳トレーニングペース',
    intro: '限界水泳速度 CSS は水泳選手やトライアスリートが有酸素閾値に基づいて練習メニューを構成するための指標です。',
    statsTitle: '主要パフォーマンス指標',
    stat1Label: 'ベンチマーク1',
    stat1Value: '400m 全力測定',
    stat2Label: 'ベンチマーク2',
    stat2Value: '200m 全力測定',
    stat3Label: '閾値指標',
    stat3Value: '100m ベースCSSペース',
    stat4Label: '実戦応用',
    stat4Value: 'プールサイド時計目標値',
    comparativeTitle: 'CSSペースと心拍数トレーニングの比較',
    comparativeItem1Title: '限界水泳速度 CSS 方式',
    comparativeItem1Desc: '水中の実際の推進速度を直接測定し、ターン技術やストローク効率を正確に反映します。',
    comparativeItem2Title: '従来の心拍数測定',
    comparativeItem2Desc: '水中でのセンサー遅延や誤作動が生じやすく、疲労によるフォームの崩れを捉えきれません。',
    tableTitle: '強度ゾーンとスプリットタイム一覧表',
    tableCol1: 'トレーニングゾーン',
    tableCol2: '主な生理的適応',
    tableCol3: '推奨距離',
    tableRow1Col1: '有酸素持久力',
    tableRow1Col2: '毛細血管密度の向上と脂質代謝の最適化。',
    tableRow1Col3: '400m〜800mの反復（レスト10〜15秒）。',
    tableRow2Col1: 'CSS閾値',
    tableRow2Col2: '乳酸処理能力と有酸素パワーの維持。',
    tableRow2Col3: '100m〜300mの反復（レスト15〜20秒）。',
    tableRow3Col1: 'VO2 Max スピード',
    tableRow3Col2: '最大酸素摂取量とストローク頻度の向上。',
    tableRow3Col3: '50m〜100mの高強度インターバル。',
    tipTitle: '正確なテスト実施のアドバイス',
    tipText: '400mテストではイーブンペースを意識し、前半100mでオーバーペースにならないように注意してください。',
    faqTitle: '限界水泳速度に関するよくある質問',
    faq1Q: 'テストの再測定頻度は？',
    faq1A: '4〜6週間ごとの実施を推奨します。',
    faq2Q: 'ヤードプールでも使えますか？',
    faq2A: 'はい。計算式は同様に適用されます。',
    glossaryTitle: '水泳生理学用語集',
    term1Name: '限界水泳速度',
    term1Def: '疲労を蓄積させることなく連続して維持できる理論上の最大速度。',
    term2Name: 'スプリットタイム',
    term2Def: 'ターン時にプールサイドの時計で確認すべき目標通過タイム。',
  },
};

export const content: ToolLocaleContent<SwimCssCalculatorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography: bibliographyEntries,
  seo: [
    {
      type: 'title',
      text: '限界水泳速度の生理学的原理',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '限界水泳速度 CSS は、泳ぎの距離と所要時間の直線関係から算出される斜率です。400mのタイムから200mのタイムを引くことで無酸素運動の寄与を除外します。',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '400m & 200m', label: '標準テストペア' },
        { value: '100m ベース', label: 'ペース基準' },
        { value: '3 ゾーン', label: '強度マトリクス' },
        { value: '4 スプリット', label: '通過目標タイム' },
      ],
    },
    {
      type: 'title',
      text: 'CSSペースと水中心拍数モニタリングの比較',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '実測ペース CSS 方式',
          description: 'ターンや壁蹴りの技術を含めた実際の推進スピードを直接測定します。',
        },
        {
          title: '水中心拍数センサー',
          description: '心拍数のラグや水温変化による影響を受けやすい傾向があります。',
        },
      ],
    },
    {
      type: 'title',
      text: 'トレーニングゾーンとレストタイム一覧',
      level: 2,
    },
    {
      type: 'table',
      headers: ['ゾーン名', 'CSS比ペース', '主なトレーニング目的', '推奨レスト時間'],
      rows: [
        ['有酸素持久力', 'CSSタイムの104%', '基礎有酸素能力の向上', '10秒〜15秒'],
        ['CSS閾値', '100% (CSSタイムと同等)', '乳酸代謝能力とレースペース維持', '15秒〜20秒'],
        ['VO2 Max スピード', 'CSSタイムの96%', '最大酸素摂取量とスピード向上', '30秒〜45秒'],
      ],
    },
    {
      type: 'title',
      text: 'プール練習における実践的ペース管理',
      level: 2,
    },
    {
      type: 'tip',
      title: '目標ペース維持のアドバイス',
      html: '最初の50m通過タイムを厳密に守ってください。出だしで2秒早く入ると後半で大幅なペースダウンを引き起こします。',
    },
  ],
  ui,
};
