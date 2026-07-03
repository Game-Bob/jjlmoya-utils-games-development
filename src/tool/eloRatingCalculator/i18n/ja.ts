import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { EloRatingCalculatorUI } from '../ui';

const slug = 'elo-rating-calculator';
const title = 'ELOレーティング計算機：チェス、eスポーツ、スポーツ向け';
const description = '勝敗、引き分けに対応した無料のELO計算機。両方のレーティングを入力し、Kファクターを選ぶと、正確なポイント変動、期待スコア、新しいELO、相手のELOが表示されます。';

const ui: EloRatingCalculatorUI = {
  playerLabel: 'プレイヤーのレーティング',
  opponentLabel: '相手のレーティング',
  kFactorLabel: 'Kファクター',
  resultLabel: '試合結果',
  winLabel: '勝ち',
  drawLabel: '引き分け',
  lossLabel: '負け',
  calculateLabel: '計算',
  resetLabel: 'リセット',
  expectedLabel: '期待値',
  deltaLabel: '変動',
  newRatingLabel: '新しいレーティング',
  opponentNewRatingLabel: '相手の新しいELO',
  kFactorHelpTitle: 'Kファクターとは？',
  kFactorHelpText: 'Kは更新の積極性を制御します。低いKは安定したランキングを意味します。高いKは各結果がより速くレーティングを動かすことを意味します。',
  kFactorLowText: '安定',
  kFactorHighText: '変動大',
  resultSummaryLabel: '試合の影響',
  initialImpactText: '引き分けは順位表をタイトに保つ',
  historyVersusLabel: 'vs',
  historyToLabel: '対',
  playerPointsLabel: 'プレイヤーポイント',
  opponentEloLabel: '相手ELO',
  particleEloLabel: 'ELO',
  particleRatingLabel: 'レーティング',
  upsetLabel: '番狂わせの確率',
  favoriteLabel: '本命のプレッシャー',
  balancedLabel: '均衡した試合',
  historyLabel: 'ローカルの計算履歴',
  noHistoryLabel: '計算を実行してここに保存',
  copiedLabel: 'コピーしました',
  copyLabel: 'コピー',
  clearLabel: 'クリア',
  kBeginner: '初心者',
  kClub: 'クラブ',
  kTournament: 'トーナメント',
  kElite: 'エリート',
};

const faqData = [
  { question: '試合後のELOレーティング変動を計算するには？', answer: '現在のELO、相手のELO、試合結果、Kファクターを入力します。計算機はあなたの期待スコアを推定し、実際の結果と比較して、獲得または喪失した正確なポイントを返します。' },
  { question: 'ELOにおけるKファクターの意味は？', answer: 'Kファクターはレーティングの感度を制御します。低いKファクターはレーティングを安定させ、ゆっくりと動かします。高いKファクターはレーティングをより速く反応させます。これは新規プレイヤー、短期シーズン、活発なローカルラダーに便利です。' },
  { question: '格下の相手に勝っても獲得ELOが少ないのはなぜ？', answer: '計算式がすでにあなたの勝利を予想していたからです。格段に下の相手に勝つことは予想を確認するだけなので、レーティング上昇は小さくなります。格上の相手に勝つことはより意外性があるため、獲得ポイントが大きくなります。' },
  { question: '相手も同じポイント数を失いますか？', answer: '標準的な2プレイヤーのELO交換では、はい。一方が獲得したポイントは他方から差し引かれるため、計算機はプレイヤーの新しいELOと相手の新しいELOの両方を表示します。' },
  { question: 'このELO計算機をチェス以外で使えますか？', answer: 'はい。ELOは、強いプレイヤーが勝つ可能性が高いあらゆる一対一の繰り返し競技で機能します。eスポーツ、テニスラダー、パデルグループ、卓球、ディベートクラブ、ファンタジーリーグなどに使用できます。' },
];

const howTo = [
  { name: 'プレイヤーのレーティングを入力', text: '変動を計算したいプレイヤーの現在のレーティングを入力します。' },
  { name: '相手のレーティングを入力', text: '計算機が期待スコアを推定できるように相手のレーティングを追加します。' },
  { name: 'Kファクターと結果を選択', text: '安定したランキングには低いKファクターを、レーティングを素早く調整したい場合は高いKファクターを使用し、勝ち、引き分け、負けを選択します。' },
  { name: '新しいレーティングを確認', text: '計算機は期待スコア、レーティング変動、新しいELO、ポイント交換後の相手の新しいELOを表示します。' },
];

const seo = [
  { type: 'title' as const, text: 'あらゆる試合後のELOポイントを計算', level: 2 as const },
  {
    type: 'paragraph' as const,
    html: 'このELOレーティング計算機は、非常に実用的な質問への迅速な答えが必要なときに使用します：<strong>この結果の後、何ポイントのELOを獲得または喪失するのか？</strong>あなたのレーティング、相手のレーティング、試合結果、Kファクターを入力してください。このツールは期待スコア、レーティング変動、新しいELO、相手の新しいELOを同じ結果カードに計算します。'
  },
  {
    type: 'summary' as const,
    title: 'この計算機が答えること',
    items: [
      '格上または格下の相手に勝った後に獲得するELOポイント数。',
      '番狂わせの敗北で失うELOポイント数。',
      '引き分けがレーティングを上げるべきか下げるべきか。',
      '同じポイント交換後の相手のレーティング。',
      'Kファクターの変更がレーティングの動きを安定または変動させる仕組み。',
    ]
  },
  {
    type: 'stats' as const,
    items: [
      { value: '1.0', label: '勝利スコア', description: '勝利は期待スコアと比較される前に満点として扱われます。' },
      { value: '0.5', label: '引分スコア', description: '引き分けは勝利と敗北のちょうど中間にあるため、格上相手に対してポイントを獲得できます。' },
      { value: '0.0', label: '敗北スコア', description: '格下相手への敗北は予想外だったため、通常より多くのポイントを失います。' },
    ]
  },
  { type: 'title' as const, text: 'ELO計算式が行っていること', level: 2 as const },
  {
    type: 'diagnostic' as const,
    title: 'すべての結果の背後にある3つのステップ',
    description: '計算機は標準的なELOの考え方に従い、手動で計算式を扱う必要はありません。',
    items: [
      { label: '期待スコア', value: 'レーティング差が確率的なスコアに変換されます。高いレーティングのプレイヤーはより多くのポイントを獲得すると予想されます。' },
      { label: '実際のスコア', value: '勝利は1、引き分けは0.5、敗北は0としてカウントされます。' },
      { label: 'レーティング変動', value: '実際のスコアと期待スコアの差がKファクターで乗算され、ポイントに丸められます。' },
    ]
  },
  {
    type: 'table' as const,
    headers: ['状況', '通常起こること', '起こる理由'],
    rows: [
      ['格上相手に勝つ', '大きなELO上昇', '実際のスコアが期待を大きく上回った'],
      ['格下相手に勝つ', '小さなELO上昇', '計算式はすでに勝利を予想していた'],
      ['格上相手と引き分ける', '小さなELO上昇', '引き分けが期待スコアを上回ることがある'],
      ['格下相手に負ける', '大きなELO減少', '結果が予想より悪かった'],
    ]
  },
  { type: 'title' as const, text: 'レーティングシステムに適したKファクターの選択', level: 2 as const },
  {
    type: 'paragraph' as const,
    html: '<strong>KファクターはELOシステムの感度調整つまみです。</strong>誰が勝つに値したかを決めるものではありません。レーティング表が結果にどれだけ強く反応するかを決めます。リーグが多くの試合と成熟したレーティングを持つ場合、低いKが表を穏やかに保ちます。プレイヤーが新しいかシーズンが短い場合、高いKがレーティングをより早く追いつかせます。'
  },
  {
    type: 'table' as const,
    headers: ['Kファクター', '用途', '期待される効果'],
    rows: [
      ['10〜16', '確立されたチェスクラブ、専門家プール、長期ランキング', '各試合後の変動が小さい非常に安定したレーティング'],
      ['20〜32', 'ローカルリーグ、クラブラダー、定期トーナメント', '過剰反応せず応答性を感じるバランスの取れた動き'],
      ['40〜60', '新規プレイヤー、短期シーズン、eスポーツラダー、非公式グループ', '現在のレーティングが不正確な場合の迅速な修正'],
      ['60以上', '実験的フォーマットまたは暫定レーティングのみ', '1試合で表が大きく変わる非常に変動的なレーティング'],
    ]
  },
  {
    type: 'tip' as const,
    title: 'ほとんどのユーザーに最適なデフォルト値',
    html: '公式の連盟ルールに従っていない場合は、<strong>K 32</strong>から始めてください。アクティブなラダーに十分な応答性があり、1回の幸運な結果がランキングを完全に書き換えないだけの安定性もあります。'
  },
  { type: 'title' as const, text: 'ELO計算機の結果の読み方', level: 2 as const },
  {
    type: 'list' as const,
    items: [
      '<strong>期待値:</strong> 試合前に計算式が予測したスコア。期待値が高いほど、あなたが本命だったことを意味します。',
      '<strong>変動:</strong> プレイヤーのレーティングに追加または削除された正確なELOポイント。',
      '<strong>新しいレーティング:</strong> 結果を適用した後のプレイヤーのレーティング。',
      '<strong>相手の新しいELO:</strong> 逆のポイント移動後の相手のレーティング。',
      '<strong>試合の影響:</strong> 結果が表をどれだけ強く動かしたかの平易な要約。',
    ]
  },
  {
    type: 'comparative' as const,
    columns: 3 as const,
    items: [
      {
        title: 'チェス・ボードゲーム',
        description: 'クラブナイト、オンラインイベント、プライベートレーティングプールの試合後レーティングを計算します。',
        icon: 'mdi:chess-knight',
        points: ['勝敗引分対応', '相手ELOを表示', '長期ランキングに最適']
      },
      {
        title: 'eスポーツラダー',
        description: 'スキルが急速に変化する可能性のある一対一の繰り返し試合後に、プレイヤーまたはチームのランキングを更新します。',
        icon: 'mdi:gamepad-variant',
        points: ['高いKファクターオプション', '迅速なレーティング修正', '明確な番狂わせ報酬']
      },
      {
        title: 'スポーツラダー',
        description: 'テニス、パデル、スカッシュ、卓球、バドミントン、ローカルリーグの公平なランキングを維持します。',
        icon: 'mdi:tennis',
        points: ['簡単な手動更新', 'クラブに対応', '主催者にやさしい']
      },
    ]
  },
  {
    type: 'proscons' as const,
    title: 'ELOが良いレーティング選択となる場合',
    items: [
      {
        pro: '強いプレイヤーがより頻繁に勝つべき一対一の繰り返し試合に最適です。',
        con: '個人の貢献を切り離すのが難しいチームスポーツには不向きです。'
      },
      {
        pro: '強い相手への勝利はより多くのポイントを獲得するため、説明が簡単です。',
        con: '真新しいプレイヤーにとってレーティングが正確に感じられるまで、十分な試合数が必要です。'
      },
      {
        pro: 'スプレッドシート、クラブラダー、リーグ表で維持できるほどシンプルです。',
        con: 'Kファクタールールは一貫している必要があり、そうでなければランキングの信頼性が低下します。'
      },
    ]
  },
  {
    type: 'message' as const,
    title: 'リーグ主催者にとって重要',
    html: 'シーズン開始前にKファクターを選択し、公開してください。プレイヤーは、結果が入力される前にレーティングの計算方法を全員が知っている場合、ELO表をより信頼します。'
  },
];

const schemas: [WithContext<FAQPage>, WithContext<HowTo>, WithContext<SoftwareApplication>] = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } }))
  },
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description,
    step: howTo.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text }))
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description,
    applicationCategory: 'SportsApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }
  },
];

export const content: ToolLocaleContent<EloRatingCalculatorUI> = { slug, title, description, ui, seo, faq: faqData, bibliography, howTo, schemas };
