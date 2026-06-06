import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SnookerScoreKeeperLocaleContent } from '../entry';

const slug = 'snooker-frame-tracker-break-calculator';
const title = 'プレミアムスヌーカーフレームトラッカー＆ブレイク計算機';
const description = 'スヌーカーのフレームスコアをリアルタイムで記録し、現在のブレイク値を計算、残り得点を表示、スヌーカー必要状況などのデフシットステータスを把握できます。';

const faqData = [
  {
    question: 'スヌーカーテーブル上の最大残り得点はどのように計算されますか？',
    answer: '残っている赤球1つにつき8点（赤球自体の1点＋黒球をポットした場合の7点）として計算します。すべての赤球がポットされた後、残りの色球の合計は27点になります。',
  },
  {
    question: 'この計算機で「スヌーカーが必要」とはどういう意味ですか？',
    answer: 'スコアの差がテーブル上の残り総得点を上回っている状態を意味し、プレイヤーは相手のファウルを誘って差を縮める必要があります。',
  },
  {
    question: '決勝的黑球（デサイディングブラック）とは何ですか？',
    answer: '全球がポットされ、フレームのスコアが同点になった場合に発生するシナリオで、黒球を再スポットして勝者を決定します。',
  },
];

const howToData = [
  {
    name: 'プレイヤー名の設定',
    text: '2人のスヌーカープレイヤーの名前を入力して、スコアボード表示をカスタマイズします。',
  },
  {
    name: 'ボールをポットしてブレイクを構築',
    text: '発光するフェルトボールをタップして、ポットしたボールを順番に記録します。計算機はルールに従って不適格な色を自動ロックします。',
  },
  {
    name: 'デフシットステータスの確認',
    text: 'ライブステータスバーで、プレイヤーが安全圏か、スヌーカーが必要か、フレームがまだオープンかを確認できます。',
  },
  {
    name: 'ファウルペナルティの記録',
    text: 'ファウルメニューを開いて、相手に直接ペナルティ点を加算し、アクティブプレイヤーを交代します。',
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
    image: undefined,
    url: undefined,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'SportsApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'ja',
};

export const content: SnookerScoreKeeperLocaleContent = {
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
      text: '無料オンラインスヌーカーフレームスコアキーパー＆ブレイクカウンター',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'デジタルスコアボードでスヌーカーフレームを管理しましょう。このツールは現在のブレイクポイント、テーブル上の残り得点、正確なスコア差を自動計算します。フェルト調のインターフェースは、スヌーカーのルールシーケンスに基づいて動的に発光するインジケーターを提供します。地元クラブのトーナメント審判から、自宅での練習フレームの記録まで、このアプリケーションがすべての計算を自動処理します。',
    },
    {
      type: 'title',
      text: 'スヌーカーの得点計算とデフシット計算を理解する',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '標準的なスヌーカーゲームは、1点ずつの赤球15個から始まります。プレイヤーは赤球と色球を交互にポットしなければなりません。ポットされた色球は、すべての赤球がなくなるまで元の位置に戻されます。その後、色球は黄色から黒までの番号順にポットされます。この計算機はシーケンスを追跡し、スヌーカーが必要になったときに警告します。スコア差とテーブル上の最大残り得点を計算することで、フレームが勝利閾値に達したタイミングを正確に判定します。',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'フレームスコアボード',
          description: 'ハイコントラスト表示でフレームスコアとプレイヤーターンを記録します。',
          icon: 'mdi:scoreboard-outline',
          points: ['アクティブプレイヤーの明確な強調表示', 'カスタムプレイヤー名の入力', 'ワンクリック元に戻す'],
        },
        {
          title: 'ブレイク計算機',
          description: 'ボールカラー記録付きでアクティブなポッティングブレイクをリアルタイム追跡。',
          icon: 'mdi:billiards',
          points: ['ポット履歴タイムライン表示', 'ルールによる自動ボールロック', '色分けされたブレイクステータス'],
        },
        {
          title: '残り得点ゲージ',
          description: 'グリーンフェルトテーブル上の最大残り得点を追跡します。',
          icon: 'mdi:percent-outline',
          points: ['スコア差の追跡', '動的なスヌーカー必要警告', '決勝的黑球の検出'],
        },
      ],
    },
    {
      type: 'title',
      text: 'インタラクティブ操作とサウンドフィードバック',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>触感フェルトHUD</strong>でボールをタップして得点を追加し、ブレイクタイムラインに記録します。',
        '<strong>ファウルアクションボタン</strong>で相手スコアに4～7点のペナルティを加え、アクティブターンを終了します。',
        '<strong>動的ステータスライト</strong>が通常プレイ、安全マージン、スヌーカー必要の状態を表示します。',
        '<strong>オーディオ合成</strong>でポット時にポケット音、ファウル時にブザー音を再生します。',
      ],
    },
    {
      type: 'title',
      text: 'スヌーカーのファウルルールとペナルティシステムの解説',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'スヌーカーにおけるファウルは相手に得点が加算されます。ペナルティ値は対象球またはファウルに関与した球の価値に基づき、最低4点です。例えば、白いキューボールをポットした場合、赤球を狙うべきところを先に色球に当てた場合、またはどの球にも当たらなかった場合にペナルティが発生します。ブルー、ピンク、ブラックを狙っている際のファウルはそれぞれ5点、6点、7点のペナルティとなります。このデジタルスコアカードはクイックファウルパネルを備え、簡単にペナルティ値を追加し、自動的に次のプレイヤーにターンを移します。',
    },
    {
      type: 'title',
      text: '決勝的黑球（デサイディングブラック）シナリオでの流れ',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '全球がポットされフレームスコアが同点の場合、黒球が元の位置に再スポットされます。プレイヤーはじゃんけんで先攻を決め、先に黒球をポットするかファウルを犯した方がフレームの敗者となります。この決勝的黑球ルールにより、追加のフルフレームを必要とせずに接戦の公平な決着が保証され、トラッカーはこの同点終局状態を自動検出して両プレイヤーに通知します。',
    },
    {
      type: 'title',
      text: 'デジタルスヌーカートラッカーを使うメリット',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '接戦のフレーム中に残り得点やデフシットマージンを手動計算すると、ヒューマンエラーが発生しやすくなります。このブラウザツールは正確なリアルタイム統計を提供し、プレイヤーが技術と戦略に集中できるようにします。ポットしたボールのインタラクティブなタイムラインを保持することで、審判は論争のあるブレイクを簡単に確認し、公式試合の継続性を維持できます。',
    },
  ],
  ui: {
    title: 'スヌーカースコアキーパー',
    description: 'フレームスコアとブレイクを記録します。',
    player1: 'プレイヤー1',
    player2: 'プレイヤー2',
    score: 'スコア',
    currentBreak: 'ブレイク',
    remainingPoints: '残り',
    deficit: '差',
    statusSafe: '安全',
    statusNeedSnookers: 'スヌーカー必要',
    statusDecidingBlack: '決勝的黑球',
    statusNormal: '通常',
    foul: 'ファウル',
    foulTitle: 'ファウル球のペナルティを選択',
    foulPoints: 'ペナルティ',
    foulOnRed: '赤/黄/緑/茶',
    foulOnYellow: '黄',
    foulOnGreen: '緑',
    foulOnBrown: '茶',
    foulOnBlue: '青',
    foulOnPink: 'ピンク',
    foulOnBlack: '黒',
    reset: 'リセット',
    resetConfirm: '現在のフレームをリセットしますか？すべてのスコアが失われます。',
    cancel: 'キャンセル',
    confirm: 'リセット確認',
    endTurn: 'ターン終了',
    miss: 'ミス',
    redsRemaining: '赤残り',
    pocketedBalls: 'ポット済み',
    toggleSound: 'サウンド切替',
    fullscreen: '全画面表示',
  },
};
