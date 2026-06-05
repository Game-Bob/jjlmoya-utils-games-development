import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TennisScoreKeeperUI } from '../ui';

const slug = 'tennis-scorekeeper';
const title = 'オンラインテニススコアキーパー : 無料マッチトラッカー';
const description = 'セットとゲームのスコアでテニスの試合を追跡。試合やトーナメント向けの無料オンラインテニススコアキーパー。登録不要。';

const faqData = [
  {
    question: 'テニスのスコアリングはどのように機能しますか？',
    answer: 'テニスの試合はゲームとセットで構成されます。ゲームはラブ、15、30、40とスコアリングされます。40-40をデュースと呼び、プレイヤーは2ポイント連続で獲得する必要があります。セットは最初に6ゲームを2ゲーム差で獲得したプレイヤーが勝ちます。6-6になった場合はタイブレークが行われます。',
  },
  {
    question: 'このテニススコアボードはどうやって使うのですか？',
    answer: 'プレイヤーが得点したときにプラスボタンを押します。スコアは自動的に更新されます。スコアキーパーはサーブ順、ゲームスコア、現在のセット、完了したセットの履歴を追跡します。',
  },
  {
    question: 'テニスプレイヤーはいつサイドチェンジしますか？',
    answer: 'テニスプレイヤーは各セットの第1、第3、およびその後の奇数ゲーム終了時にコートチェンジします。また、セット終了時にもチェンジしますが、ゲーム数の合計が偶数の場合は除きます。タイブレークでは6ポイントごとにチェンジします。',
  },
  {
    question: 'このスコアボードはタイブレークに対応していますか？',
    answer: 'はい。セットが6-6に達すると、スコアキーパーは自動的にタイブレークモードに切り替わり、ポイントが7まで数字でカウントされます。プレイヤーは2ポイント差で勝利し、タイブレークとセットを終了する必要があります。',
  },
  {
    question: 'スマートフォンで使用できますか？',
    answer: 'はい。インターフェースは大きなボタンを備えたモバイル端末向けに最適化されています。試合中は全画面モードにして画面をスリープさせないこともできます。',
  },
];

const howToData = [
  {
    name: 'プレイヤー名を設定',
    text: 'プレイヤー名入力フィールドをタップしてカスタム名を入力します。ブラウザに保存されます。',
  },
  {
    name: 'ポイントを追加',
    text: 'ラリーに勝ったプレイヤーのプラスボタンをクリックします。スコアが自動的に更新されます。',
  },
  {
    name: 'セット結果を管理',
    text: 'トラッカーは自動的にゲームとセットを終了します。完了したセットをアーカイブし、次のセットに移行します。',
  },
  {
    name: 'サイドチェンジ',
    text: 'プレイヤーがコートチェンジする必要があるときにスコアボードが通知します。スワップボタンをタップして表示側を入れ替えます。',
  },
  {
    name: '試合終了',
    text: 'トラッカーはテニスルールに従って自動的に試合を終了し、勝者を発表します。',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'ja',
};

export const content: ToolLocaleContent<TennisScoreKeeperUI> = {
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
      text: '無料オンラインテニススコアキーパーとマッチトラッカー',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'デュース、アドバンテージ、タイブレークなどの用語があるテニスのスコアリングは難しい場合があります。この無料オンラインテニススコアキーパーはプロセス全体を自動化します。プレイヤーが得点したときにプラスボタンを押すだけです。このツールはポイント、ゲーム、セット、サイドチェンジをリアルタイムで自動的に管理します。',
    },
    {
      type: 'title',
      text: 'このスコアキーパーでのテニススコアリングの仕組み',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'テニスは独自のスコアリング構造を使用します。標準的なゲームはラブ、15、30、40、ゲームの順に進行します。両方のプレイヤーが40に達すると、スコアはデュースとなります。デュースからは、プレイヤーは2ポイント連続で獲得してゲームに勝つ必要があります。最初のポイントはアドバンテージと呼ばれ、次のポイントでゲームを確定します。相手が次のポイントを獲得した場合、スコアはデュースに戻ります。セットは最初に2ゲーム差で6ゲームを獲得したプレイヤーが勝ちます。セットが6-6に達すると、7ポイント先取のタイブレークが行われます。',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'カジュアルゲーム',
          description: '友人との気軽なテニス試合のための素早く簡単なスコアリング。',
          icon: 'mdi:tennis',
          points: ['ワンタップスコア', 'サイドチェンジインジケーター', 'オフライン対応'],
        },
        {
          title: 'クラブプレイ',
          description: 'クラブ試合やトーナメントに最適なトラッキング。',
          icon: 'mdi:trophy-outline',
          points: ['セット履歴アーカイブ', 'ベストオブ3または5セット', 'モバイルフレンドリー'],
        },
        {
          title: 'トーナメントモード',
          description: '公式試合追跡と審判用に設計。',
          icon: 'mdi:school',
          points: ['タイブレーク対応', '全画面スコアボード', 'ローカルデータ保存'],
        },
      ],
    },
    {
      type: 'title',
      text: '特別なスコアキーパー機能',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>自動テニスルールロジック</strong> ラブ、15、30、40、デュース、アドバンテージ、タイブレークを自動計算。',
        '<strong>セット履歴アーカイブ</strong> 前のセットのスコアをひと目で表示。',
        '<strong>サイドチェンジヘルパー</strong> プレイヤーがコートチェンジが必要なときに通知。',
        '<strong>華やかな得点演出</strong> 獲得ポイントに浮遊パーティクルを表示。',
        '<strong>ベストオブ3または5セット</strong> 設定可能な試合フォーマット。',
        '<strong>名前をローカル保存</strong> カスタム名を訪問間で保持。',
      ],
    },
    {
      type: 'title',
      text: 'デジタルスコアリング vs 手動トラッキング',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '手動のスコアボードは、数字の更新、サーブ順の記憶、タイブレークの確認、サイドチェンジの計算に絶え間ない集中力を必要とします。このデジタルテニススコアキーパーはテニスのすべてのルールを自動的に処理します。ツールがセット履歴を更新し、祝賀セレモニーで勝者を発表している間、試合に完全に集中できます。',
    },
  ],
  ui: {
    playerA: 'プレイヤー1',
    playerB: 'プレイヤー2',
    winnerLabel: 'チャンピオン',
    finishMatch: '試合を終了',
    newGame: '新しいセット',
    serving: 'サーブ中',
    changeSide: 'サイドチェンジ',
    swapHint: 'タップしてサイドチェンジ',
    game: 'ゲーム',
    set: 'セット',
    gamePoint: 'ゲームポイント',
    setPoint: 'セットポイント',
    matchPoint: 'マッチポイント',
    mode: 'セット',
    bo3: 'BO3',
    bo5: 'BO5',
    points: 'ポイント',
    reset: 'リセット',
    resetConfirm: '試合をリセットしますか？すべてのデータが失われます。',
    cancel: 'キャンセル',
    fullscreen: '全画面',
    exitFullscreen: '全画面を終了',
    deuce: 'デュース',
    advantage: 'アドバンテージ',
    tiebreak: 'タイブレーク',
  },
};
