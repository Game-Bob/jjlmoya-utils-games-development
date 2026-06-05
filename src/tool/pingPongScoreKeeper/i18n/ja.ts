import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PingPongScoreKeeperUI } from '../ui';

const slug = 'ping-pong-scorekeeper';
const title = 'オンラインピンポンスコアキーパー : 無料卓球トラッカー';
const description =
  'ゲームとセットのスコアで卓球の試合を追跡。親善試合やトーナメント向けの無料オンラインピンポンスコアキーパー。登録不要。';

const faqData = [
  {
    question: 'ピンポンのスコアリングはどのように機能しますか？',
    answer:
      '標準的なピンポンのゲームは11点までプレイされます。2点差で勝たなければなりません。スコアが10-10になった場合、2点差がつくまでプレイが続行されます。サーバーは2点ごとに交代します。このスコアキーパーはこれらすべてを自動的に管理します。',
  },
  {
    question: 'このスコアキーパーはどうやって使うのですか？',
    answer:
      '各プレイヤーの下にある+ボタンをタップしてポイントを追加します。ゲームスコアは自動的に更新されます。プレイヤーが2点差で11点に達すると、ゲームが終了し、新しいゲームが始まります。ゲーム勝利カウンターは各プレイヤーが勝ったゲーム数を記録します。試合終了時に「試合を終了」をタップしてください。',
  },
  {
    question: 'サーバーインジケーターはどのように機能しますか？',
    answer:
      'サーバーは2点ごとに交代します。サーブしているプレイヤーの横にドットが表示されます。これは公式の卓球ルールに従っています。試合中、常に誰がサーブすべきかを追跡できます。',
  },
  {
    question: '試合中にスマートフォンで使用できますか？',
    answer:
      'はい。大きなボタンを備えたモバイルフレンドリーなインターフェースです。全画面モードではブラウザを非表示にし、画面をスリープ状態にしません。',
  },
  {
    question: '試合データは保存されますか？',
    answer:
      'はい。現在のスコア、勝利ゲーム数、プレイヤー名はブラウザに自動的に保存されます。',
  },
];

const howToData = [
  {
    name: 'プレイヤーに名前を付ける',
    text: 'デフォルトのプレイヤー名をタップして、自分の名前を入力します。名前は自動的に保存されます。',
  },
  {
    name: 'ポイントを追加する',
    text: '得点したプレイヤーの大きな丸い+ボタンをタップします。スコアは祝賀アニメーションとともに更新されます。',
  },
  {
    name: 'ポイントを取り消す',
    text: '誤ってポイントを追加した場合は、マイナスボタンをタップします。',
  },
  {
    name: '新しいゲームを開始する',
    text: 'ゲームが終了したら、「新しいゲーム」をタップして次のゲームを開始します。または「試合を終了」をタップして試合を終了します。',
  },
  {
    name: '試合を終了する',
    text: '「試合を終了」をタップして、トロフィーと紙吹雪で勝者が発表されるのを見届けます。',
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

export const content: ToolLocaleContent<PingPongScoreKeeperUI> = {
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
      text: '無料オンラインピンポンスコアキーパー : 卓球試合トラッカー',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'ピンポンのスコアリングはシンプルであるべきですが、ルールは混乱を招くことがあります。次にサーブするのは誰？10-10なのか11-9なのか？各プレイヤーは何ゲーム勝ったのか？この無料オンラインピンポンスコアキーパーはそれらすべてを自動的に処理します。誰かが得点したときに+ボタンをタップするだけです。スコアキーパーはゲームごとのポイント、試合で勝ったゲーム数、そして誰がサーブしているかを追跡します。すべてがリアルタイムで更新され、すべてのポイントを盛り上げる祝福アニメーションが表示されます。サインアップ不要、ダウンロード不要、複雑なメニューもありません。',
    },
    {
      type: 'title',
      text: 'このスコアキーパーでのピンポンスコアリングの仕組み',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '卓球は標準的なスコアリングシステムに従います。各ゲームは11点までプレイされます。プレイヤーは2点差で勝たなければならないため、スコアが10-10になった場合、誰かが2点リードするまでプレイが続行されます。ゲーム中、サーバーは2点ごとに変わります。このスコアキーパーはこれらのルールをすべて自動的に追跡します。誰がサーブするかやいつ交代するかを覚えておく必要はありません。サーバーインジケーターは現在のサーバーの横にドットを表示します。プレイヤーがゲームに勝つと、スコアキーパーは自動的に次のゲームに移ります。勝ったゲーム数のカウンターが勝者のために増加します。試合は任意のゲーム数で行えますが、通常は5戦または7戦のベストオブ方式です。試合が完了したら「試合を終了」をタップすると、勝者が祝典とともに発表されます。',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '親善試合',
          description: '友達とのカジュアルなピンポンのための素早く簡単なスコアリング。自動ゲーム＆試合追跡。',
          icon: 'mdi:table-tennis',
          points: ['1タップで1ポイント', '自動サーバー追跡', 'オフラインでも動作'],
        },
        {
          title: 'クラブ＆リーグ戦',
          description: 'ゲームと試合結果のクリーンな記録を保持。クラブトーナメントやリーグ戦に最適。',
          icon: 'mdi:trophy-outline',
          points: ['勝利ゲーム数の追跡', 'ベストオブ5または7対応', 'モバイルフレンドリー'],
        },
        {
          title: 'トーナメント',
          description: 'トーナメント設定で複数の試合を追跡。試合間のクイックリセット。',
          icon: 'mdi:school',
          points: ['素早い試合リセット', 'スコアの永続性', '全画面モード'],
        },
      ],
    },
    {
      type: 'title',
      text: 'このピンポンスコアキーパーの特別な点',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>自動ゲームスコアリング</strong> スコアキーパーはピンポンのルールを知っています。11点までのゲーム、2点差での勝利、自動サーバー交代。',
        '<strong>勝利ゲーム数の追跡</strong> 勝った各ゲームが記録されます。各プレイヤーが試合で何ゲーム勝ったかをひと目で確認できます。',
        '<strong>サーバーインジケーター</strong> 2点交代ルールに従い、目に見えるドットがサーブしているプレイヤーを示します。',
        '<strong>ゴール祝福アニメーション</strong> 各ポイントがランダムな祝福アニメーションをトリガーします。8種類の異なるエフェクトがすべてのポイントを盛り上げます。',
        '<strong>フローティングパーティクル</strong> 得点されるたびに、その瞬間を祝福する浮遊テキストが表示されます。',
        '<strong>試合終了セレモニー</strong> 「試合を終了」をタップすると、トロフィーと紙吹雪で勝者発表が行われます。',
        '<strong>編集可能なプレイヤー名</strong> 名前フィールドをタップしてプレイヤー名を変更できます。名前はブラウザに保存されます。',
        '<strong>全画面モード</strong> ブラウザインターフェースを非表示にし、スコアボードが画面いっぱいに表示され、画面をスリープさせません。',
        '<strong>オフラインファースト</strong> インターネットなしで動作します。広告なし、トラッキングなし、データ収集なし。',
      ],
    },
    {
      type: 'title',
      text: 'ピンポンスコアキーパー vs 手動スコアリング',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'ピンポンの手動スコアリングでは、スコアの追跡、誰がサーブするかの記憶、サーバー交代のタイミングの把握、勝利ゲーム数のカウントが必要です。特に速いペースのゲームでは、すぐに見失いがちです。このデジタルスコアキーパーはすべてを自動的に処理します。ポイントが決まったらボタンをタップするだけです。スコアキーパーはゲームスコアを追跡し、ゲームが終了したことを検出し、試合で勝ったゲームを記録し、誰がサーブしているかを表示します。すべてのポイントがアニメーションとパーティクルで祝福されます。スコアが混乱することはなく、サーバー交代を見逃すこともありません。友達とのカジュアルなゲームでも、トーナメントで競い合っている場合でも、この無料オンラインピンポンスコアキーパーは必要なすべてを提供します。',
    },
  ],
  ui: {
    playerA: 'プレイヤー1',
    playerB: 'プレイヤー2',
    winnerLabel: 'チャンピオン',
    finishMatch: '試合を終了',
    newGame: '新しいゲーム',
    serving: 'サーブ中',
    changeSide: 'サイドチェンジ',
    swapHint: 'タップして入れ替え',
    game: 'ゲーム',
    set: 'セット',
    gamePoint: 'ゲームポイント',
    matchPoint: 'マッチポイント',
    mode: 'フォーマット',
    bo1: 'BO1',
    bo3: 'BO3',
    bo5: 'BO5',
    bo7: 'BO7',
    points: 'ポイント',
    reset: 'リセット',
    resetConfirm: '試合をリセットしますか？すべてのデータが失われます。',
    cancel: 'キャンセル',
    fullscreen: '全画面',
    exitFullscreen: '全画面を終了',
  },
};
