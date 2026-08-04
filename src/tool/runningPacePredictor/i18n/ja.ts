import { bibliographyEntries } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RunningPacePredictorUI } from '../ui';

const slug = 'running-pace-predictor';
const title = 'ランニングペース計算・タイム予測';
const description =
  'ランニングのペース計算、リーゲルの公式による5K・10K・ハーフ・フルマラソンの予想タイム計算、トレーニングゾーンの自動生成。';

const faqData = [
  {
    question: 'フルマラソン予想におけるリーゲル公式の精度はどのくらいですか？',
    answer:
      'リーゲルの公式 T2 = T1 * (D2 / D1)^1.06 は有酸素ベースが整っているランナーに高い精度を発揮します。マラソンでは月間走行距離や25km以上のロング走、レース中の補給計画も大きく影響します。',
  },
  {
    question: 'min/km と min/mile の正確な変換方法は？',
    answer:
      '1kmあたりの秒数に1.609344を掛けます。例えば 5:00 min/km (300秒) は 482.8秒/マイル、つまり 8:03 min/mile となります。',
  },
  {
    question: '予想タイムが長距離で厳しく感じられる理由は？',
    answer:
      '標準指数1.06は理想的なスタミナを前提としています。スタミナ不足や筋疲労、グリコーゲン枯渇により、実際のタイムは理論値より遅くなる場合があります。',
  },
  {
    question: 'インターバルやペース走の目標ゾーンはどう設定すべきですか？',
    answer:
      'インターバル走（VO2 Max）は5Kペースの95%〜105%、ペース走（乳酸閾値）は110%〜120%、ジョグは125%〜145%で設定するのが理想的です。',
  },
];

const howToData = [
  {
    name: '単位系の選択',
    text: '画面上部の切り替えでメートル法（km, min/km）かヤード・ポンド法（マイル, min/mile）を選択します。',
  },
  {
    name: '距離を選択',
    text: 'プリセットボタン（5K, 10K, ハーフ, 42K）を押すか、カスタム距離を入力します。',
  },
  {
    name: 'タイムの調整',
    text: '調整ボタン（+1分, +5分など）を使って、最近のレースタイムを設定します。',
  },
  {
    name: '予想とゾーンを確認',
    text: '平均ペース、リーゲル公式による各距離の予想タイム、目標トレーニングゾーンを即座に確認できます。',
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

export const content: ToolLocaleContent<RunningPacePredictorUI> = {
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
      text: 'ランニングペース計算とタイム予測の生体力学的原理',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'ランニングのペース計算と予想タイムの算出は、最大酸素摂取量（VO2 max）、乳酸閾値、ランニングエコノミーなどの生理学的メカニズムに基づいています。長距離走ではグリコーゲンの蓄積量とランニングフォームの効率性が重要になります。',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '1.06', label: 'リーゲル指数' },
        { value: '4大種目', label: '標準レース距離' },
        { value: '3通り', label: 'リアルタイム計算' },
        { value: '3段階', label: '目標ゾーン' },
      ],
    },
    {
      type: 'title',
      text: 'リーゲル公式の数学的モデル',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '1977年にピーター・リーゲルによって提唱された T2 = T1 * (D2 / D1)^1.06 の公式は、距離伸長に伴うペース低下を数学的にモデル化したものです。疲労指数1.06は十分なトレーニングを積んだランナーの平均値です。',
    },
    {
      type: 'title',
      text: 'メートル法とヤード・ポンド法の比較',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'メートル法 (min/km)',
          description: '日本や欧州の陸上競技および道路レースの標準単位。1000mごとのラップタイム管理に適しています。',
        },
        {
          title: 'ヤード・ポンド法 (min/mile)',
          description: '欧米のロードレースの標準単位。1マイルは1.609344kmに相当します。',
        },
      ],
    },
    {
      type: 'title',
      text: 'ロードレース標準種目一覧',
      level: 2,
    },
    {
      type: 'table',
      headers: ['種目名', 'メートル距離 (km)', 'マイル距離 (mi)', '主要エネルギー機構'],
      rows: [
        ['5K ロードレース', '5.00 km', '3.11 mi', '90% 有酸素 / 10% 解糖系'],
        ['10K ロードレース', '10.00 km', '6.21 mi', '95% 有酸素 / 5% 解糖系'],
        ['ハーフマラソン', '21.0975 km', '13.11 mi', '99% 有酸素 (乳酸閾値主導)'],
        ['フルマラソン', '42.195 km', '26.22 mi', '100% 有酸素 (グリコーゲン枯渇限界)'],
      ],
    },
    {
      type: 'title',
      text: 'レース戦略とネガティブスプリット',
      level: 2,
    },
    {
      type: 'tip',
      title: 'ネガティブスプリットの有効性',
      html: '後半を前半より速く走るネガティブスプリットは代謝効率を高めます。前半を抑えることで筋疲労とグリコーゲン消費を抑制できます。',
    },
  ],
  ui: {
    title: 'ランニングペース計算・タイム予測',
    subtitle: 'リーゲル公式でペースと目標タイムを計算',
    paceCalculatorTitle: 'ペース・距離・タイム計算機',
    racePredictorTitle: '予想タイム計算（リーゲル公式）',
    trainingZonesTitle: '目標トレーニングペースゾーン',
    distanceLabel: '距離',
    timeLabel: 'タイム',
    paceLabel: '平均ペース',
    hoursLabel: '時間',
    minutesLabel: '分',
    secondsLabel: '秒',
    unitKm: 'キロメートル',
    unitMiles: 'マイル',
    paceUnitKm: 'min/km',
    paceUnitMiles: 'min/mile',
    presetsTitle: 'クイック距離選択',
    calculateButton: '計算する',
    resetButton: 'リセット',
    recentRaceTitle: '最近のレース実績',
    predictedTimesTitle: '種目別予想タイム',
    distanceHeader: '距離',
    estimatedTimeHeader: '予想タイム',
    targetPaceHeader: '目標ペース',
    trainingZoneHeader: 'トレーニングゾーン',
    paceRangeHeader: 'ペース範囲',
    zoneEasy: 'ジョグ・リカバリー走',
    zoneEasyDesc: '有酸素ベースの構築と疲労回復',
    zoneTempo: 'ペース走・ファルトレク',
    zoneTempoDesc: '乳酸閾値の向上とレースペース保持',
    zoneIntervals: 'インターバル走・スピード練習',
    zoneIntervalsDesc: 'VO2 Max向上とスピード持久力強化',
    riegelExplanation: '予想タイムはリーゲル公式 T2 = T1 * (D2 / D1)^1.06 に基づいています。',
    seo: {
      title: 'ランニングペース計算・タイム予測',
      description: 'ランニングペースの計算、リーゲル公式によるマラソン予想タイム、トレーニングゾーンの自動算出。',
      h1: 'ランニングペース計算・タイム予測',
      intro: '正確なペース計算とタイム予測は、ランナーにとって欠かせないツールです。',
      statsTitle: 'パフォーマンス指標',
      stat1Label: 'リーゲル指数',
      stat1Value: '1.06',
      stat2Label: '主要距離',
      stat2Value: '4種目',
      stat3Label: 'ペース計算',
      stat3Value: '3通り',
      stat4Label: '目標ゾーン',
      stat4Value: '3段階',
      comparativeTitle: '単位比較',
      comparativeItem1Title: 'メートル法 (min/km)',
      comparativeItem1Desc: '日本・欧州の標準単位。',
      comparativeItem2Title: 'ヤード・ポンド法 (min/mile)',
      comparativeItem2Desc: '欧米の標準単位。',
      tableTitle: '主要レース距離一覧',
      tableCol1: '種目',
      tableCol2: 'キロメートル',
      tableCol3: 'マイル',
      tableRow1Col1: '5K ロード',
      tableRow1Col2: '5.00 km',
      tableRow1Col3: '3.11 mi',
      tableRow2Col1: '10K ロード',
      tableRow2Col2: '10.00 km',
      tableRow2Col3: '6.21 mi',
      tableRow3Col1: 'ハーフマラソン',
      tableRow3Col2: '21.10 km',
      tableRow3Col3: '13.11 mi',
      tipTitle: 'ペース戦略',
      tipText: 'ネガティブスプリットが後半の失速を防ぎます。',
      faqTitle: 'よくある質問',
      faq1Q: 'リーゲル公式の精度は？',
      faq1A: '十分な練習量がある場合に高い精度を発揮します。',
      faq2Q: 'min/kmとmin/mileの違いは？',
      faq2A: '1kmあたりと1マイルあたりの所要時間です。',
      glossaryTitle: 'ランニング用語集',
      term1Name: 'リーゲル公式',
      term1Def: 'ピーター・リーゲルによるタイム予測の数式。',
      term2Name: '乳酸閾値',
      term2Def: '血中乳酸濃度が急激に上昇する運動強度。',
    },
  },
};
