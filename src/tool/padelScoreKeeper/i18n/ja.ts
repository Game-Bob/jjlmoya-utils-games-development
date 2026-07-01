import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { PadelScoreKeeperLocaleContent } from '../entry';

const slug = 'padel-scorekeeper';
const title = 'プレミアムパデルスコアキーパー: ゴールドポイント＆ローテーション管理';
const description = '公式のPunto de Oro（ゴールドポイント）ルール、サーブローテーションアラート、タイブレーク、動的なコートチェンジアニメーションでパデルのスコアを記録します。';

const faq = [
  {
    question: 'パデルのゴールドポイント（Punto de Oro）とは？',
    answer: 'ゴールドポイントはスコアが40-40（デュース）になったときにプレーされる決勝点です。アドバンテージはなく、レシーブ側がサーブを左側か右側のどちらで受けるかを選択し、その1点を取ったチームがゲーム全体を獲得します。',
  },
  {
    question: 'パデルのセット形式はどのように機能しますか？',
    answer: '標準的な試合は3セットマッチで行われ、各セットは先に6ゲーム（2ゲーム差）を獲得したチームが勝利します。6-6になった場合は7ポイントのタイブレークが行われます。オプションのゴールデンセット形式では4ゲームで完了し、4-4でタイブレークになります。',
  },
  {
    question: 'パデルで選手はいつサイドを交代しますか？',
    answer: '選手は最初のゲーム終了後にコートチェンジし、その後は2ゲームごと（現在のセットの合計ゲーム数が奇数の場合、例：1、3、5）に交代します。タイブレーク中は6ポイントごとにサイドを入れ替えます。',
  },
];

const howTo = [
  {
    name: '試合形式を設定する',
    text: '標準形式（先に6ゲーム）または短いゴールデンセット形式（先に4ゲーム）を選択します。',
  },
  {
    name: '選手名を入力する',
    text: 'チーム名を入力してスコアボードをカスタマイズします。設定は自動的に保存されます。',
  },
  {
    name: 'コート上でポイントを記録する',
    text: 'アイソメトリック表示のパデルコートの両サイドをタップしてポイントを記録します。サーブ表示が対角線上のローテーションをガイドします。',
  },
  {
    name: 'ゴールドポイントを決める',
    text: 'デュースに達したら、レシーブ側（左または右のレシーバー）を選択し、勝ったチームをクリックしてゲームを終了します。',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
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
  step: howTo.map((step, i) => ({
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

export const content: PadelScoreKeeperLocaleContent = {
  slug,
  title,
  description,
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '無料オンラインパデルスコアボード＆試合トラッカー',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'パデルでのスコア管理は、速いラリー、タイブレーク、サイドチェンジ、公式のPunto de Oro（ゴールドポイント）ルールで混乱しがちです。この無料オンラインパデルスコアボードが面倒なスコア管理を解消します。ビジュアルコートをタップしてポイントを記録するだけで、サーブのローテーション、レシーブサイド、セット履歴、コートチェンジを自動で管理します。',
    },
    {
      type: 'title',
      text: 'パデルのスコアリング、ゴールドポイント、ローテーションを理解する',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'パデルはテニスと同様のスコアリング（15、30、40、ゲーム）に従いますが、より速いプレーのための特定のルールを導入しています。プロのFIPルールでは、スコアが40-40になった場合、決勝点となるゴールドポイント（Punto de Oro）がプレーされます。レシーブチームはサーブを受けるサイド（左または右）を選択し、その1点を取ったチームがゲームを獲得します。さらに、チームはセット内の合計ゲーム数が奇数の場合と、タイブレーク中は6ポイントごとにコートサイドを交換する必要があります。',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '親善試合',
          description: 'パデル仲間との親善試合のスコア管理を素早くシンプルに。',
          icon: 'mdi:tennis',
          points: ['ワンタップでポイント追加', 'モバイルファーストのレイアウト', 'オフラインでも使用可能'],
        },
        {
          title: 'クラブ＆リーグ',
          description: 'クラブの公式戦やローカルトーナメントを簡単に追跡。',
          icon: 'mdi:trophy-outline',
          points: ['セット履歴の保存', '6ゲームまたは4ゲームセット', 'ゴールドポイント対応'],
        },
        {
          title: '審判モード',
          description: '公式試合やトレーニングセッションのためのフル機能ツール。',
          icon: 'mdi:school',
          points: ['サーブ＆レシーブ表示', 'インタラクティブなコート回転', 'フルスクリーンコンソールモード'],
        },
      ],
    },
    {
      type: 'title',
      text: 'パデルプレーヤーのための高度なデジタル機能',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>公式ゴールドポイントロジック</strong>は、デュース時にレシーブチームがレシーバーサイドを選択でき、サーブ経路を表示します。',
        '<strong>ビジュアルコートインジケーター</strong>は、サーバー（S）とレシーバー（R）の位置を動的に表示し、ローテーションミスを防ぎます。',
        '<strong>自動コートチェンジ</strong>は、奇数ゲームまたはタイブレーク間隔でコートレイアウトを180度回転し、実際の視界と常に一致させます。',
        '<strong>カスタムセット形式</strong>は、標準の6ゲームセットと高速4ゲームゴールデンセットの両方をサポートします。',
        '<strong>ブラウザ自動保存</strong>は、ページをリフレッシュしても選手名と現在のスコアを安全に保持します。',
      ],
    },
    {
      type: 'title',
      text: 'パデルタイブレークルール：標準 vs スーパータイブレーク',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '標準のパデルセットでは、ゲーム数が6-6になった場合、7ポイントのタイブレークが行われます。タイブレークではポイントは数値（1、2、3など）でカウントされます。先に7ポイントに達し、2ポイント差をつけたチームがセットを獲得します。サーブの順番のプレーヤーが右（デュース）サイドから最初のポイントをサーブします。その後、各プレーヤーが左（アドバンテージ）サイドから2ポイント連続でサーブします。一部のトーナメント形式では、セットが1-1で並んだ場合、フルセットの代わりに10ポイントのスーパータイブレークが行われます。',
    },
    {
      type: 'title',
      text: 'コートチェンジとローテーション：公平なパデルのために',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'パデルでは、太陽、風、コートの不具合などの環境要因が一方のチームに有利にならないようにするために、コートチェンジが不可欠です。選手は各セットの最初のゲーム終了後、その後は2ゲームごと（例：1-0、2-1、3-2、4-3、5-4）にコートの端を交換する必要があります。当デジタルパデルスコアボードは、選手が物理的にサイドを交換する必要があるときに、コートレイアウトを自動的に180度回転させる動的なコートチェンジアニメーションを備えています。これにより、画面の上部に表示されるチームが常に実際のコートの奥でプレーしているチームと一致します。',
    },
    {
      type: 'title',
      text: '標準セット vs ゴールデンセット形式',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '標準的な試合は1セットあたり6ゲームで行われますが、多くのレクリエーションリーグやテンポの速いトーナメントでは、セットを4ゲームのみで行う「ゴールデンセット」形式（4-4でタイブレーク）が採用されています。このスコアボードでは、ツールバーのワンタップでこれらの形式を切り替えることができます。選択した形式に関係なく、スコアボードがすべてのタイブレーク、サーブローテーション、スコア計算を自動的に処理します。',
    },
    {
      type: 'title',
      text: '効果的なコート上のスコア管理のコツ',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>コートスタンドやスマホホルダーを使用する：</strong>スマホやタブレットをパデルコートのネットの高さのフェンスに取り付けます。これにより、両サイドのプレーヤーが現在のスコアとサーブ表示を簡単に確認できます。',
        '<strong>開始前に名前を設定する：</strong>10秒ほど時間を取って、実際の選手やチームの名前を入力しましょう。これにより、音声アナウンス（有効の場合）やビジュアルスコアボードがより魅力的で公式なものになります。',
        '<strong>フルスクリーンモードを有効にする：</strong>ヘッダーパネルのフルスクリーンボタンをクリックします。これによりスコアボードインターフェースが最大化され、長いラリー中の画面の自動オフを防ぎます。',
      ],
    },
    {
      type: 'title',
      text: 'なぜデジタルパデルスコアキーパーを使うのか？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '誰がサーブを打つのか、誰がレシーブする番か、スコアはどうなっているかについて絶えず議論する代わりに、デジタルトラッカーが全員の認識を一致させます。サーバーとレシーバーの位置を画面に直接表示することで、選手はベンチのスマホをひと目見るだけで、どこに立つべきかを正確に把握できます。これによりプレーのペースが向上し、ローテーションミスを防ぎます。',
    },
  ],
  ui: {
    playerA: 'チーム1',
    playerB: 'チーム2',
    game: 'ゲーム',
    set: 'セット',
    tiebreak: 'タイブレーク',
    goldPoint: 'ゴールドポイント',
    selectReceiver: 'レシーバーを選択',
    leftReceiver: '左レシーバー',
    rightReceiver: '右レシーバー',
    server: 'サーバー',
    receiver: 'レシーバー',
    changeEnds: 'コートチェンジ',
    matchWon: '試合終了',
    reset: 'リセット',
    resetConfirm: '試合をリセットしますか？すべてのデータが失われます。',
    cancel: 'キャンセル',
    fullscreen: 'フルスクリーン',
    exitFullscreen: 'フルスクリーン終了',
    deuce: 'デュース',
    advantage: 'アドバンテージ',
    formatStandard: '6ゲーム',
    formatGoldenSet: '4ゲーム',
    goldenSet: 'ゴールデンセット',
    goldPointTitle: 'ゴールドポイント決勝点',
  },
};
