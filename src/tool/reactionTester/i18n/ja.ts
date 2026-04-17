import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ReactionTesterUI } from '../ui';

const slug = 'reaction-test';
const title = 'リアクションスピードテスト（反射神経）：オンラインベンチマーク';
const description = 'プロフェッショナルなリアクションテストで反射神経をミリ秒単位で測定します。「カメ」から「サイバーアスリート」まで、ランクを競い合い、パフォーマンスを分析します。';

const ui: ReactionTesterUI = {
  title: 'リアクションテスト',
  subtitle: '反射神経の速さをミリ秒単位で測定します。5回の試行平均。',
  startBtn: 'クリックして開始',
  goTitle: 'スタート！',
  goSubtitle: 'いますぐクリック！',
  earlyTitle: '早すぎます！',
  earlySubtitle: '緑色を待ってください。',
  earlyRetry: 'クリックして再試行',
  promptNext: 'クリックして試行',
  promptFinal: '最終結果を表示',
  avgLabel: '最終平均',
  copyBtn: 'コピー',
  tweetBtn: 'ツイート',
  retryBtn: 'もう一度試す',
  inputMouse: 'マウス',
  inputTouch: 'タッチ',
  inputSpace: 'スペース',
  historyTitle: 'ローカル履歴',
  historyBest: 'ベスト5',
  historyWorst: 'ワースト5',
  historyEmpty: 'プレイして最初のスコアを記録してください',
  copySuccess: 'コピーしました！',
  shareText: 'リアクションテストで{ms}msのスコアを獲得しました！\nランク：{rank}\n\n私に勝てますか？\n{url}',
  rankCiberatleta: 'サイバーアスリート',
  rankTigre: 'トラ',
  rankHumano: '人間',
  rankTortuga: 'カメ',
  rankDormido: '睡眠中',
  f150: 'あなたはロボット?!',
  f180: '信じられない！',
  f210: '非常に速い！',
  f250: 'いい反応',
  f300: 'まあまあだな...',
  f400: 'ちょっと遅い...',
  f600: 'あなたは寝た',
  fSlow: '起きて...',
  wp0t: '待って...', wp0s: '息を止めてください...',
  wp1t: 'まだ...', wp1s: '今、まばたきしないでください',
  wp2t: '準備OK...', wp2s: '指の用意はいいですか...',
  wp3t: 'ホールド...', wp3s: '我慢してください、若き修行僧',
  wp4t: '焦点...', wp4s: 'もうすぐです...',
};

const faqData = [
  { question: '人間の平均的な反応時間は？', answer: 'ビジュアル刺激に対する人間の平均反応時間は約250～270ミリ秒です。高性能アスリートとプロゲーマーは通常200ms以下です。' },
  { question: '反射神経を向上させるにはどうすればいい？', answer: 'コツは継続的な練習と休息です。アクションビデオゲーム（FPS）をプレイしたり、ピンポンなどの素早いスポーツを練習したり、水分をたっぷり摂取することで神経系を敏感に保つ手助けになります。' },
  { question: '画面は結果に影響しますか？', answer: 'はい。「入力ラグ」と呼ばれるものがあります。リフレッシュレートが低いディスプレイ（60Hz）または古いワイヤレスマウスは、実際の反応時間に15～50msを追加する可能性があります。' },
  { question: '何歳から反射神経が低下し始めますか？', answer: '生理的に、人間の反射神経は20～24歳でピークに達します。その後、訓練しない場合、非常にゆっくりとした低下（約1年あたり2～6ms）が起こります。' },
];

const howTo = [
  { name: '赤を待つ', text: 'スタートエリアをクリックして、画面の色が変わるのを忍耐強く待ちます。' },
  { name: '緑に反応', text: '緑が見えたら、すぐに画面をできるだけ速くクリックまたはタップします。' },
  { name: '結果を表示', text: 'システムは、色の変化とタップの間の正確な時間をミリ秒単位で計算します。' },
  { name: 'ランクを分析', text: 'テストを5回繰り返して信頼できる平均値を取得し、あなたが「カメ」なのか「サイバーアスリート」なのかを確認してください。' },
];

const seo = [
  { type: 'title' as const, text: 'このリアクションテストはどのように機能しますか？', level: 2 as const },
  {
    type: 'paragraph' as const,
    html: 'このツールは、あなたの<strong>ビジュアル反応時間</strong>を厳密な精度で測定します。画面が点灯してから、信号があなたの目から脳へ、そして指へ伝わるまでの正確な間隔を計算します。テストは、運の要因を排除するために、あなたの実際の平均値を計算するために<strong>5回の連続試行</strong>を必要とします。',
  },
  {
    type: 'list' as const,
    items: [
      '<strong>5回の試行の平均：</strong>一貫性を要求することで、「運」の要因を排除します。1回の幸運なクリックはあなたをサイバーアスリートにはしません。',
      '<strong>アンチチートシステム：</strong>ランダムな待機時間（1.5秒～4.5秒）と早期クリック検出により、予測を防止します。',
      '<strong>本当の科学：</strong>脳処理〜180-200ms +運動応答+20-40ms =総反応時間。',
    ],
  },
  { type: 'title' as const, text: 'ワールドランキング表', level: 2 as const },
  {
    type: 'table' as const,
    headers: ['時間', 'ランク', '説明'],
    rows: [
      ['&lt; 180 ms', 'サイバーアスリート', 'eスポーツプロまたは戦闘機パイロットに典型的な超人的レベル。'],
      ['180 - 230 ms', 'トラ', '鋭い反射神経。シューティングゲームで優れている可能性があります。'],
      ['230 - 280 ms', '人間', '健康的な平均。あなたは目覚めており、正常に機能しています。'],
      ['280 - 350 ms', 'カメ', '平均以下。もっと休むか練習してください。'],
      ['&gt; 350 ms', '睡眠中', '疲労、眠気、または遅いハードウェア（入力ラグ）の可能性。'],
    ],
  },
  { type: 'title' as const, text: 'なぜ遅いのか？ハードウェアを非難する', level: 2 as const },
  {
    type: 'comparative' as const,
    columns: 3 as const,
    items: [
      {
        title: 'モニター（Hz）',
        description: '60Hzモニターは1フレームを描画するのに約16msかかります。144Hzは7msだけかかります。この10msの差はあなたの最終スコアに影響します。',
        icon: 'mdi:monitor',
        points: ['60Hz = フレームあたり約16ms', '144Hz = フレームあたり約7ms', 'テストで目に見える違い'],
      },
      {
        title: 'ワイヤレスマウス',
        description: '安価なオフィスBluetoothマウスはレイテンシが高い。このテストでは、ケーブルまたは低遅延の2.4GHzワイヤレス技術を使用してください。',
        icon: 'mdi:mouse-variant',
        points: ['安いBluetooth：+15-50ms', '2.4GHzゲーミング：<1ms追加', 'USBケーブル：リファレンス'],
      },
      {
        title: 'ブラウザ',
        description: '広告をブロックする拡張機能や重いスクリプトはスタッターを引き起こす可能性があります。本当の記録にはシークレットモードを試してください。',
        icon: 'mdi:web',
        points: ['重い拡張機能を閉じる', 'シークレット=よりクリーン', 'Chrome/Firefox推奨'],
      },
    ],
  },
];

const schemas: [WithContext<FAQPage>, WithContext<HowTo>, WithContext<SoftwareApplication>] = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description,
    step: howTo.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description,
    applicationCategory: 'SportsApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  },
];

export const content: ToolLocaleContent<ReactionTesterUI> = { slug, title, description, ui, seo, faqTitle: 'よくある質問', faq: faqData, bibliography: [], howTo, schemas };
