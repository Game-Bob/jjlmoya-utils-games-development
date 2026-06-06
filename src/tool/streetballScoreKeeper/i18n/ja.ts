import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { StreetballLocaleContent } from '../entry';

const slug = 'streetball-3x3-basketball-scorekeeper';
const title = 'プレミアム ストリートボール3x3 スコアキーパー（ショットクロック付き）';
const description = 'FIBA 3x3 ストリートボールのスコア管理を、統合された12秒ショットクロック、チームファウル、サドンデスポイント、ダイナミックなハーフコート表示で実現。';

const faq = [
  {
    question: '3x3 ストリートボールの12秒ショットクロックはどのように機能しますか？',
    answer: 'FIBA 3x3では、チームがボールを保持してから12秒以内にシュートを試みる必要があります。ショットクロックは、ポゼッションが変わると12秒に、オフェンシブリバウンドや特定の条件下でのファウルでは14秒にリセットされます。',
  },
  {
    question: '3x3 バスケットボールのサドンデス得点制限とは？',
    answer: '試合中、先に21点を獲得したチームがその時点で即座に勝利します。残り時間に関係なく試合が終了する、これがサドンデスルールです。',
  },
  {
    question: 'チームファウルは試合にどのような影響を与えますか？',
    answer: '7回目のチームファウル以降、相手チームに2本のフリースローが与えられます。10回目以降のファウルでは、2本のフリースローに加えてボールポゼッションも与えられ、ペナルティ状態に移行します。',
  },
];

const howTo = [
  {
    name: 'チーム名を設定する',
    text: '2つのストリートボールチームに任意の名前を入力して、HUDをカスタマイズします。',
  },
  {
    name: '得点とポゼッションを記録する',
    text: 'インタラクティブなアスファルトコートをタップして、1点（アーク内）または2点（アーク外）を追加し、ポゼッション表示を切り替えます。',
  },
  {
    name: 'ショットクロックを操作する',
    text: 'ショットクロックをタップして12秒にリセット、セカンダリリセットで14秒に、ダブルタップでカウントダウンを一時停止します。',
  },
  {
    name: 'チームファウルを管理する',
    text: 'カウンターでチームファウルを記録します。ペナルティ状態（7ファウル以上）になると赤く変わります。',
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

export const content: StreetballLocaleContent = {
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
      text: '無料オンライン3x3 ストリートボールスコアボード',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '3対3のバスケットボールで、短いショットクロックを管理しながらチームファウルを追跡するのは大変です。この無料オンライン3x3 ストリートボールスコアボードは、アスファルトを思わせるインダストリアルなデザインとハイコントラストなネオンスタイルを採用。12秒ショットクロック、試合時間、ファウルペナルティシステム、ポゼッション表示を自動で処理します。',
    },
    {
      type: 'title',
      text: 'FIBA 3x3 ストリートボールの得点とショットクロックルール',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'FIBA 3x3 ストリートボールは従来の5対5バスケットボールとは異なります。試合は10分間の1ピリオドで行われ、先に21点を獲得したチームが即座に勝利します（サドンデス）。アーク内からのシュートとフリースローは1点、6.75mのアーク外からのシュートは2点としてカウントされます。12秒ショットクロックにより素早い攻撃が促され、ポゼッションが変わった際には選手はアークの後方へボールを戻す必要があります。',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'カジュアルな街角ゲーム',
          description: '近所のコートで友達とストリートバスケのスコアを手軽に管理。',
          icon: 'mdi:basketball',
          points: ['シンプルな得点操作', 'レスポンシブレイアウト', 'オフライン対応'],
        },
        {
          title: 'トーナメントプレイ',
          description: '公式3x3トーナメントやストリートボールリーグに最適。',
          icon: 'mdi:trophy-outline',
          points: ['10分カウントダウン', '21点でサドンデス', 'ファウルペナルティ状態'],
        },
        {
          title: '審判用ダッシュボード',
          description: '素早いショットクロックリセットとポゼッション管理のために設計。',
          icon: 'mdi:school',
          points: ['12秒・14秒リセット', 'ブザー音', 'タクタイルなボタン操作'],
        },
      ],
    },
    {
      type: 'title',
      text: 'インタラクティブな操作と触覚アニメーション',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>12秒ショットクロック</strong>は残り4秒未満で赤く点滅し小数点表示に切り替わり、ブザー音が鳴ります。',
        '<strong>インタラクティブなコンクリートハーフコート</strong>では、図面上の1点エリアと2点エリアをタップして直接得点を記録できます。',
        '<strong>ファウルカウンター警告</strong>はチームファウルペナルティ（7ファウル以上および10ファウル以上）になると赤く変色し振動します。',
        '<strong>ボールクリアランス表示</strong>はポゼッションが変わった際に、ボールがアークの後方に戻されるまでリマインダーを表示します。',
        '<strong>タイムアウトトラッカー</strong>は30秒のカウントダウンを起動し、カスタムサウンドで警告します。',
      ],
    },
    {
      type: 'title',
      text: 'デジタルストリートボールトラッカーを使う理由',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'デジタルスコアボードがあれば、得点やファウル、ショットクロックバイオレーションをめぐる言い争いをコート上で防げます。明るいネオン数字は遠くからでも読みやすく、自動ポゼッション管理とクリアランスリマインダーにより、試合が途切れることなくスムーズに進行します。',
    },
  ],
  ui: {
    teamA: 'チーム1',
    teamB: 'チーム2',
    points: '得点',
    fouls: 'ファウル',
    timeouts: 'タイムアウト',
    shotClock: 'ショットクロック',
    reset: 'リセット',
    resetConfirm: '試合をリセットしますか？すべてのデータが失われます。',
    cancel: 'キャンセル',
    gameTime: '時間',
    possession: 'ポゼッション',
    clearBall: 'クリアボール',
    matchWon: '試合勝利',
    timeoutActive: 'タイムアウト',
    penalty: 'ペナルティ',
    fullscreen: '全画面表示',
    exitFullscreen: '全画面解除',
    overtime: '延長戦',
    ptsInside: '+1点',
    ptsOutside: '+2点',
    toggleSound: 'サウンド切替',
    soundOn: 'サウンドON',
    soundOff: 'サウンドOFF',
  },
};
