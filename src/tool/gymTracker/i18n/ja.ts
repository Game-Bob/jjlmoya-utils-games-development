import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GymTrackerUI } from '../ui';

const slug = 'gym-workout-tracker';
const title = 'ジム・ワークアウト・トラッカー：進捗グラフと筋力ログ';
const description =
  'トレーニング内容を記録し、種目を選択して、筋力グラフで進捗を視覚化します。ジムでの漸進的過負荷を最適化しましょう。';

const faqData = [
  {
    question: 'トレーニングを記録する目的は何ですか？',
    answer:
      '科学的に漸進的過負荷（プログレッシブ・オーバーロード）を適用するためです。前回のセッションでどれだけの重量を扱ったかを正確に把握することで、その記録を更新しようと試みることができ、筋肉の成長と長期的な筋力向上を保証します。'
  },
  {
    question: 'どのようなデータを記録すべきですか？',
    answer:
      '最も重要なのは、正しいフォームで設定した回数を完遂できた最大重量（トップセット）です。当ツールは、各セッションの重量を記録して進捗グラフを生成することに特化しています。'
  },
  {
    question: 'グラフはどのように読み取ればよいですか？',
    answer:
      '右肩上がりの線は、進歩していることを示します。横ばいの線（プラトー）は、ボリューム、強度、または回復を調整する必要があることを示唆しています。継続的に下降している線は、オーバートレーニングの兆候かもしれません。'
  },
  {
    question: 'データはどこに保存されますか？',
    answer:
      'データはお使いのブラウザ内（ローカルストレージ）にローカルに保存されます。これによりプライバシーは完全に守られ、アカウントを作成する必要もありません。ただし、ブラウザのデータを削除すると履歴は失われます。'
  },
];

const howToData = [
  {
    name: '種目を選択する',
    text: 'ドロップダウンメニューから、スクワット、ベンチプレス、デッドリフトなどの主要種目を選択します。'
  },
  {
    name: '重量を入力する',
    text: 'メインセットの終了後、扱った重量（kg/lb）を対応するフィールドに入力します。'
  },
  {
    name: '追加ボタンを押す',
    text: '記録を保存します。システムが自動的に履歴と進捗グラフを更新します。'
  },
  {
    name: '変化を分析する',
    text: '定期的にグラフを確認して、停滞期を特定し、実際の筋力の伸びを視覚化することでモチベーションを高めましょう。'
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer }
  }))
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
    text: step.text
  }))
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'HealthApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'ja'
};

export const content: ToolLocaleContent<GymTrackerUI & Record<string, string>> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'ジム・トラッキング：真の進歩への鍵',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'フィットネスとボディビルディングの世界には、驚異的な結果を出す人とすぐに停滞する人を分ける根本的な原則があります。それが<strong>漸進的過負荷（プログレッシブ・オーバーロード）</strong>です。しかし、トレーニングの微細な記録を保持していなければ、この原則を効果的に適用することは不可能です。このガイドでは、トレーニングの記録がなぜ不可欠なのか、当サイトの<strong>ジム・トラッカー</strong>を使用して成果を最大化する方法、そしてこの実践を裏付ける科学的根拠について探ります。'
    },
    {
      type: 'title',
      text: '漸進的過負荷とは何か？',
      level: 3
    },
    {
      type: 'paragraph',
      html: '漸進的過負荷とは、運動中にかかるストレスを段階的に増やしていくことです。筋肉を成長させたり強くしたりするには、通常扱っているよりも大きな刺激を与える必要があります。ジムに行って、常に同じ重量、同じ回数、同じ休憩時間でトレーニングを続けていれば、体には適応して成長する生物学的な理由がありません。'
    },
    {
      type: 'list',
      items: [
        '重量の増加：前回よりも重い重量を扱う。',
        'レップ数の増加：同じ重量でより多くの回数をこなす。',
        'ボリュームの増加：筋肉部位ごとの総セット数を増やす。',
        '休憩時間の短縮：同じ作業をより短い時間で完了させる。',
        'フォームの改善：より優れたコントロールと広い可動域で動作を行う。',
      ]
    },
    {
      type: 'title',
      text: 'なぜ手動ログが記憶よりも優れているのか',
      level: 3
    },
    {
      type: 'paragraph',
      html: '多くのトレーニーは、先週どれだけの重量を扱ったかを自分の記憶に頼るという間違いを犯します。しかし、5〜10種目ほど行う一般的なトレーニングでは、ベンチプレスで80kgだったか82.5kgだったか、あるいは10回できたのか12回だったのかを忘れがちです。この精度の欠如が平凡な結果を招きます。'
    },
    {
      type: 'tip',
      title: '進捗可視化の力',
      html: 'グラフ上の上昇する線を見ることで、停滞と一貫した筋肉成長の分かれ目となる「もう1レップ」に挑戦するための活力が得られます。'
    },
    {
      type: 'title',
      text: 'トラッキングすべき必須種目',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'すべての種目に価値がありますが、特定のコンパウンド種目は全体の筋力と身体的発達の最も優れた指標となります。トラッキングで優先すべきは以下の通りです：水平押しの<strong>ベンチプレス</strong>、垂直押しの<strong>オーバーヘッドプレス</strong>、引く動作の<strong>懸垂</strong>、そしてお尻の<strong>ヒップスラスト</strong>。'
    },
    {
      type: 'title',
      text: '進捗グラフの分析方法',
      level: 3
    },
    {
      type: 'paragraph',
      html: '数回分のワークアウトを記録すると、パターンが見えてきます。<strong>一貫した上昇線</strong>は正しい道を進んでいることを示し、<strong>プラトー（停滞）</strong>はボリュームや休息の調整が必要であることを示唆し、<strong>下降トレンド</strong>は疲労の蓄積のサインかもしれません。'
    },
    {
      type: 'title',
      text: 'ジムでの成功の心理学',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'トレーニングは肉体的な挑戦であると同時に精神的な挑戦でもあります。2週間前よりも今日の方が1%強くなっていることを示す視覚的なツールを使用することで、ドーパミンの報酬系が刺激されます。これがポジティブなフィードバックループを生み出し、トレーニングを持続可能な習慣へと変えてくれます。'
    },
  ],
  ui: {
    exerciseLabel: '種目',
    pushCategory: 'プッシュ（押す）',
    pullCategory: 'プル（引く）',
    gluteCategory: '臀部（お尻）',
    customExerciseCategory: 'カスタム',
    addCustomExercisetitle: '種目を追加',
    newExerciseLabel: '新しい種目',
    exercisePlaceholder: '種目名を入力...',
    addBtn: '追加',
    registerWeightLabel: '重量を記録',
    weightPlaceholder: '00.0',
    startBtn: 'スタート',
    resetBtn: 'リセット',
    okBtn: 'OK',
    noData: 'データなし',
    recordLabel: '自己ベスト',
    lastLabel: '前回記録',
    historyTitle: 'ログ履歴',
    exportBtn: '書き出し',
    confirmDeletetitle: '履歴を削除しますか？',
    confirmDeleteText: 'この操作は取り消せません。選択した種目のすべてのログが削除されます。',
    deleteBtn: '削除',
    cancelBtn: 'キャンセル',
    units: 'kg',

    benchPress: 'ベンチプレス',
    overheadPress: 'オーバーヘッドプレス',
    pushPress: 'プッシュプレス',
    inclineDbPress: 'インクラインDBプレス',
    dipsTriceps: '上腕三頭筋ディップス',
    tricepsExtensions: 'ケーブル三頭筋エクステンション',
    pullUp: '懸垂',
    barbellRow: 'バーベルロウ',
    latPulldown: 'ラットプルダウン',
    dbRow: 'ダンベルロウ',
    facePulls: 'フェイスプル',
    bicepsCurl: 'バーベルビセップスカール',
    hipThrust: 'ヒップスラスト',
    rdl: 'ルーマニアンデッドリフト',
    lunges: 'ランジ',
    gluteKick: 'ケーブル・グルートキックバック',
    hipAbduction: 'ヒップアブダクション',
    stepUp: 'ステップアップ'
  }
};
