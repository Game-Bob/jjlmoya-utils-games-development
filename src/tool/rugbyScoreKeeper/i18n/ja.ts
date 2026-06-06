import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { RugbyScoreKeeperLocaleContent } from '../entry';

const slug = 'rugby-scorekeeper';
const title = 'プレミアムラグビースコアキーパー：シンビンタイマーとマッチクロック搭載';
const description = 'トライ、コンバージョン、ペナルティ、ドロップゴールを記録しながらラグビーの試合スコアをリアルタイムで追跡。シンビンカウントダウンタイマーとハーフ管理を備えたインタラクティブなスタジアムスコアボード。';

const faqData = [
  {
    question: 'ラグビーユニオンの試合ではどのように得点が入りますか？',
    answer: 'トライは5点で、選手が相手陣のインゴールエリアにボールを接地すると成立します。トライ後のコンバージョンキックは2点です。ペナルティキックとドロップゴールはそれぞれ3点です。',
  },
  {
    question: 'イエローカードを受けた選手はどうなりますか？',
    answer: 'イエローカードはシンビン（一時退出）による出場停止処分となります。該当選手は試合時間で10分間フィールドを離れなければなりません。この間、チームは一人少ない状態でプレーします。シンビンタイマーはマッチクロックが動作している間のみカウントダウンします。',
  },
  {
    question: 'ラグビーユニオンの試合時間はどのくらいですか？',
    answer: '標準的なラグビーユニオンの試合は、40分ハーフを2つ行い、ハーフタイムは10分です。負傷や重大なインシデントの際にはマッチクロックが停止されます。ストッページに対して追加時間が与えられる場合があります。',
  },
];

const howToData = [
  {
    name: '得点イベントを記録する',
    text: 'トライ、コンバージョン、ペナルティ、ドロップゴールのボタンをタップして得点を記録します。トライをタップすると、コンバージョンボタンが自動的に点灯します。',
  },
  {
    name: 'シンビン処分を管理する',
    text: 'イエローカードをタップして選手をシンビンに送ります。選手名または背番号を入力すると、10分間のカウントダウンが自動的に開始されます。',
  },
  {
    name: '試合時間を制御する',
    text: 'マッチクロックを使用して40分ハーフを2つ管理します。負傷時には時計を一時停止し、プレー再開時に再開します。',
  },
  {
    name: '得点経過を確認する',
    text: 'ホームとアウェイの得点をライブスコアボードで監視します。得点サマリーでトライ、コンバージョン、ペナルティ、ドロップゴールの内訳を確認できます。',
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

export const content: RugbyScoreKeeperLocaleContent = {
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
      text: '無料オンラインラグビースコアキーパー：ライブ試合追跡',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'インタラクティブなデジタルスコアボードでラグビーの試合得点を管理しましょう。トライ、コンバージョン、ペナルティ、ドロップゴールをリアルタイムで記録。シンビン管理システムは自動的に選手の出場停止時間をカウントダウンし、マッチクロックは両ハーフを正確に計時します。地域のクラブ試合の審判をしている方も、ユースチームを指導している方も、このツールが得点とタイミングの詳細をすべて自動的に処理します。',
    },
    {
      type: 'title',
      text: 'ラグビーユニオンの得点システム解説',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'ラグビーユニオンには4つの得点方法があり、それぞれ異なるスキルと戦略が必要です。トライは最も価値の高い攻撃プレーで、ディフェンスラインを突破してトライゾーンにボールを接地したチームに与えられます。トライ後、得点したチームはコンバージョンキックで2点を追加します。ペナルティキックとドロップゴールは戦術的な深みを加え、オープンプレーや相手の反則から得点する手段を提供します。',
    },
    {
      type: 'comparative',
      columns: 4,
      items: [
        {
          title: 'トライ',
          description: 'トライゾーンにボールを接地して5点。',
          icon: 'mdi:rugby',
          points: ['5点獲得', 'コンバージョン試行権利', 'ボール接地が必要'],
        },
        {
          title: 'コンバージョン',
          description: 'トライ後にポスト間を狙ってキック、成功で2点。',
          icon: 'mdi:goal',
          points: ['成功で2点', 'トライ位置からキック', 'クロスバーを越える必要あり'],
        },
        {
          title: 'ペナルティキック',
          description: '相手の反則後にゴールを狙うキック、成功で3点。',
          icon: 'mdi:alert-octagon',
          points: ['3点獲得', 'キックまたはタップ可能', '接戦の勝敗を決めることも'],
        },
        {
          title: 'ドロップゴール',
          description: 'オープンプレー中にドロップキックでポスト間を狙い、成功で3点。',
          icon: 'mdi:circle-outline',
          points: ['3点獲得', 'ボールを地面にバウンドさせる', '高プレッシャー下の決勝弾'],
        },
      ],
    },
    {
      type: 'title',
      text: 'シンビンシステムについて',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'シンビンは危険なプレーや繰り返しの反則に対する一時的な出場停止制度です。審判がイエローカードを提示すると、選手はアクティブプレー中10分間フィールドを離れなければなりません。この間、チームは一人少ない状態でプレーするため、相手チームに数的優位が生まれます。シンビンタイマーはマッチクロックが動作している間のみカウントダウンするため、ストッページに関係なく公平に処分が執行されます。',
    },
    {
      type: 'list',
      items: [
        '<strong>イエローカードの罰則：</strong>危険なプレーまたはチームの反則繰り返しによりシンビンで10分間の出場停止。',
        '<strong>数的劣勢：</strong>処分期間中、反則したチームは15人ではなく14人でプレー。',
        '<strong>自動復帰：</strong>タイマー終了時に選手は自動的にハーフウェイラインから試合に復帰。',
        '<strong>レッドカードへの昇格：</strong>2枚目のイエローカードまたは1回の重大な違反でレッドカードとなり永久退場。',
      ],
    },
    {
      type: 'title',
      text: '試合時間とハーフ管理',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '標準的なラグビーユニオンの試合は、40分ハーフを2つに分けられ、ハーフタイムは10分です。マッチクロックはアクティブプレー中は連続して動作しますが、負傷、重大な反則の確認、その他の中断時には審判が一時停止できます。このデジタルスコアキーパーには、一時停止と再開のコントロール、自動ハーフトラッキング、各プレー期間の明確な表示インジケーターを備えた精密なマッチクロックが含まれています。',
    },
    {
      type: 'title',
      text: 'デジタルラグビースコアキーパーを使う理由',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'ラグビーでの手動スコアキーピングは、多様な得点方法、シンビンのタイミング管理、ハーフ管理のために困難です。このブラウザツールは、正確なリアルタイム得点、自動シンビンカウントダウン、精密な試合時間管理を提供します。コーチは計算ではなく試合戦略に集中でき、審判は信頼性の高いバックアップ得点システムを持ち、選手は試合状態を一目で確認できます。',
    },
  ],
  ui: {
    title: 'ラグビースコアキーパー',
    description: '試合スコアとシンビンタイマーを管理。',
    home: 'ホーム',
    away: 'アウェイ',
    score: 'スコア',
    tryLabel: 'トライ +5',
    conversion: 'コンバージョン +2',
    penalty: 'ペナルティ +3',
    dropGoal: 'ドロップゴール +3',
    conversionYes: '成功',
    conversionNo: '失敗',
    sinBin: 'イエローカード',
    sinBinTitle: 'シンビン出場停止',
    sinBinPlayer: '選手名または背番号：',
    sinBinAdd: '出場停止開始',
    sinBinEmpty: 'アクティブな出場停止なし',
    sinBinReturn: '復帰',
    matchClock: 'マッチクロック',
    half: 'ハーフ',
    half1: '前半',
    half2: '後半',
    startMatch: 'キックオフ',
    pauseMatch: '一時停止',
    resumeMatch: '再開',
    resetMatch: '試合をリセット',
    resetConfirm: '現在の試合をリセットしますか？すべてのスコアとタイマーが失われます。',
    cancel: 'キャンセル',
    confirm: 'リセット確定',
    period: 'ピリオド',
    scoringSummary: '得点サマリー',
    tryScored: 'トライ',
    conversionSuccess: 'コンバージョン成功',
    conversionMiss: 'コンバージョン失敗',
    penaltyScored: 'ペナルティ',
    dropGoalScored: 'ドロップゴール',
    totalPoints: '合計',
    fullscreen: '全画面表示',
    toggleSound: 'サウンド切替',
    eventLog: 'イベントログ',
    eventEmpty: 'まだイベントはありません',
    undoBtn: '最後を元に戻す',
    timeOff: 'タイムオフ',
    timeOn: 'タイムオン',
  },
};
