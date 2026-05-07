import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ScoreKeeperUI } from '../ui';

const slug = 'sports-scoreboard';
const title = 'オンラインスポーツスコアボード：無料スコアカウンター';
const description =
  'モバイル向けの巨大ボタンを備えたデジタルスコアボード。パデル、卓球、サッカーに最適。試合中の煩わしい広告なし。シンプルで高速。';

const faqData = [
  {
    question: 'インターネット接続がなくても動作しますか？',
    answer:
      'はい、一度ページを読み込めば、スコアボードは完全にオフラインで動作します。試合中にデータ通信やWiFiは必要ありません。すべてがブラウザ内にローカルに保存されます。'
  },
  {
    question: 'テニスやパデルでスコアボードを使用できますか？',
    answer:
      'はい、テニス/パデルモードは自動的に15-30-40-ADのシーケンスを処理し、公式ルールに従ってセットとゲームを追跡します。練習試合に最適です。'
  },
  {
    question: '全画面表示にできますか？',
    answer:
      'はい、ブラウザから全画面モードを有効にできます（PCではF11、モバイルでは全画面ボタン）。視認性を最大化するため、数字が画面の80%を占めます。'
  },
  {
    question: '間違えた場合、どうやってポイントを修正しますか？',
    answer:
      '各プレイヤーカードにポイントを引くための個別のボタンがあります。スコアボード全体をリセットすることなく、素早く間違いを修正できます。'
  },
  {
    question: '1、2、3ポイントのバスケットボールに対応していますか？',
    answer:
      'はい、バスケットボールモードでは専用の+1、+2、+3ボタンが表示され、余計なタップなしですべてのプレーを素早く得点できます。'
  },
  {
    question: '卓球のサーブ権は自動的に処理されますか？',
    answer:
      'はい、卓球モードでは公式のITTFルールに従い、サーブインジケーターが2ポイントごと（デュース時は1ポイントごと）に自動的に入れ替わります。'
  },
];

const howToData = [
  {
    name: 'スポーツを選択する',
    text: '上部のセレクターからスポーツを選択します：フリー、テニス、パデル、卓球、バレーボール、バスケットボール。'
  },
  {
    name: '名前をカスタマイズする',
    text: '"HOME"や"AWAY"をタップして、プレイヤー名やチーム名を変更します。'
  },
  {
    name: '1タップでポイントを追加する',
    text: 'スコアボードの広いエリアをタップしてポイントを追加します。バスケットボールでは、+1、+2、+3ボタンを使用します。'
  },
  {
    name: 'サーブを表示する',
    text: '下隅のサーブボタンを使用して、誰がサーブしているかをマークします。黄色のインジケーターが自動的に表示されます。'
  },
  {
    name: '間違いを修正する',
    text: '間違えてポイントを追加した場合は、"−"ボタンを使用します。スコアボード全体をやり直す必要はありません。'
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
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'ja'
};

export const content: ToolLocaleContent<ScoreKeeperUI> = {
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
      text: 'ポケットの中のデジタル審判',
      level: 2
    },
    {
      type: 'paragraph',
      html: '試合の熱気の中では、カウントを忘れがちです。「4-3だったか、3-4だったか？」。このスコアボードは、論争が始まる前にそれらを解決するために設計されました。カードのほぼ全体を占める<strong>巨大なボタン</strong>のインターフェースにより、画面を見ることなく、ベンチにある電話に手を伸ばすだけでポイントを追加できます。'
    },
    {
      type: 'title',
      text: 'スマートスポーツセレクター',
      level: 2
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'テニス / パデルモード',
          description:
            'セットとゲームのカウンターを備えた適応型インターフェース。システムが自動的に15-30-40-ADのシーケンスを処理します。',
          icon: 'mdi:tennis',
          points: ['公式ルール', 'アドバンテージ管理', 'セットカウンター']
        },
        {
          title: 'バスケットボールモード',
          description:
            'スコアボードがスポーツを検出し、インターフェースを変更します。専用の+1、+2、+3ボタン。',
          icon: 'mdi:basketball',
          points: ['素早い3ポイント', 'フリースロー', '余計なタップなし']
        },
        {
          title: '卓球モード',
          description:
            '誰のサーブ順かを記憶する必要はありません。ビジュアルインジケーターが2ポイントごとに自動的に回転します。',
          icon: 'mdi:table-tennis',
          points: ['ITTFルール', 'サーブ交代', 'デュースモード（11点）']
        },
      ]
    },
    {
      type: 'title',
      text: 'スポーツのために設計された機能',
      level: 2
    },
    {
      type: 'list',
      items: [
        '<strong>高い視認性：</strong> 日差しの下でも最大限の読みやすさを実現するため、数字が画面の80%を占めます。',
        '<strong>編集可能な名前：</strong> "HOME"や"AWAY"をタップしてプレイヤー名を設定します。',
        '<strong>エラー防止：</strong> リセットすることなく素早く間違いを修正するための独立したマイナスボタン。',
        '<strong>オフラインで動作：</strong> 一度読み込めば、試合中にインターネットは必要ありません。',
      ]
    },
  ],
  ui: {
    playerA: 'HOME',
    playerB: 'AWAY',
    swapSides: 'サイド交代',
    reset: 'リセット',
    serve: 'サーブ',
    sets: 'セット',
    games: 'ゲーム',
    victory: '勝利！',
    newGame: '新しい試合',
    continueGame: '試合を続ける',
    resetConfirm: 'スコアボードをリセットしますか？',
    sportSimple: 'フリー（サッカー、三目並べなど）',
    sportTennis: 'テニス',
    sportPadel: 'パデル',
    sportPingpong: '卓球',
    sportVolleyball: 'バレーボール',
    sportBasket: 'バスケットボール'
  }
};
