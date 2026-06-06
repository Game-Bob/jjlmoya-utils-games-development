import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { BaseballScoreKeeperLocaleContent } from '../entry';

const slug = 'baseball-scorekeeper';
const title = 'プレミアム野球・ソフトボールスコアキーパー ダイヤモンドトラッカー搭載';
const description = 'リアルタイムで得点・安打・失策を記録。ランナーの位置を可視化するインタラクティブダイヤモンド、ボールストライクカウント、イニングごとの履歴グリッドを搭載。';

const faqData = [
  {
    question: 'カウントトラッカーはどのように機能しますか？',
    answer: '現在の打者に対するボールとストライクの数を表示します。ボールは4つでフォアボール、ストライクは3つで三振となります。ユースリーグ向けに上限の調整も可能です。',
  },
  {
    question: 'インタラクティブダイヤモンドは何を表示しますか？',
    answer: '一塁、二塁、三塁を表示します。塁をタップするとオレンジ色にハイライトされ、ランナーがその塁にいることを示します。ヒット時にはランナーが自動的に進塁します。',
  },
  {
    question: '得点、安打、失策はどのように記録されますか？',
    answer: 'R H Eマトリックスに両チームの得点、安打、失策が表示されます。イニングごとの履歴で全イニングの得点経過を確認できます。',
  },
];

const howToData = [
  {
    name: '各投球を記録',
    text: 'ストライク、ボール、ファウル、ヒット、アウトをタップして各投球を記録します。結果に応じてカウントが自動更新されます。',
  },
  {
    name: 'ランナーの管理',
    text: 'ダイヤモンド上の塁をタップしてランナーを配置または削除します。ヒット時にはランナーが自動的に進塁します。',
  },
  {
    name: 'イニング進行の追跡',
    text: 'イニング表示には現在の半イニングが表示されます。3アウト後に自動的に表と裏が切り替わります。',
  },
  {
    name: 'ボックススコアの確認',
    text: 'R H Eサマリーとスクロール可能なイニング履歴グリッドで得点経過を確認できます。',
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

export const content: BaseballScoreKeeperLocaleContent = {
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
      text: '野球スコアキーパー 無料オンライン 得点安打失策をリアルタイム追跡',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '次の試合用に信頼性の高いスコアキーパーをお探しですか？この無料オンラインツールは得点、安打、失策を記録しながら、リアルタイムのランナー位置を表示するライブインタラクティブダイヤモンドを提供します。一球一球が重要です。デジタルスコアボードがカウント、アウト数、イニングを見失うことを防ぎます。リトルリーグのコーチング、ソフトボール大会のスコア記録、高校野球の試合管理など、このツールがボックススコア全体を自動処理するので、フィールド上のプレイに集中できます。',
    },
    {
      type: 'title',
      text: 'この野球スコアボードが時間を節約しミスを防ぐ方法',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '手動でのスコア記録は、特に速いペースの試合ではミスが発生しやすくなります。1回のストライクの見落としやランナーの見逃しがボックススコア全体を狂わせることがあります。このデジタルスコアキーパーは面倒な部分を自動化します。ストライク、ボール、ファウル、ヒット、アウトをタップするだけで、ボードが即座にカウントを更新します。打者がフォアボールや三振になった場合、ツールは自動的にカウントをリセットします。3アウト後には表と裏を自動的に切り替え、得点を記録します。R H Eマトリックスとイニングごとの履歴グリッドで試合の全体像を一目で把握できます。',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'ライブ投球カウント',
          description: 'ボールとストライクを自動追跡し、各打席でのフォアボールと三振を検出します。',
          icon: 'mdi:baseball',
          points: ['ボールは4つまで追跡', 'ストライクは3つまで追跡', '判定時に自動リセット'],
        },
        {
          title: 'ランナー管理',
          description: 'インタラクティブダイヤモンドが一塁、二塁、三塁のランナーを正確に表示します。',
          icon: 'mdi:diamond-stone',
          points: ['塁をタップしてランナー設定', '占有時にビジュアルハイライト', 'イニング変更時にクリア'],
        },
        {
          title: '完全ボックススコア',
          description: '完全なR H E統計とスクロール可能なイニング別得点履歴。',
          icon: 'mdi:scoreboard-outline',
          points: ['得点、安打、失策', 'イニング別グリッド', '両チームの通算合計'],
        },
      ],
    },
    {
      type: 'title',
      text: 'この野球スコアトラッカーが役立つ方々',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'このツールはスコア記録が必要なすべての人のために作られています。選手に明確なデジタル表示を提供したい青少年野球のコーチ、専任スコアキーパーなしで試合を管理するソフトボールリーグのボランティア、スタンドから子どもの試合を追跡する保護者、そしてセカンダリ確認システムを求める審判員。インターフェースはあらゆるデバイスで動作し、ダッグアウトで持つスマートフォンからフェンスに設置したタブレット、ベンチのノートパソコンまで対応します。インストール不要でブラウザを開いてすぐにスコアリングを開始できます。',
    },
    {
      type: 'list',
      items: [
        '<strong>自動カウント管理:</strong> ボールとストライクはフォアボール、三振、ヒット、アウト後に自動リセット。手動リセットは不要です。',
        '<strong>タッチ対応ダイヤモンド:</strong> 一塁、二塁、三塁をタップしてランナーを配置または削除。金色にハイライトして占有塁を示します。',
        '<strong>イニング別スコア:</strong> 各半イニングがスクロールグリッドに記録されます。全9イニングでの各チームの得点を正確に確認。',
        '<strong>セットアップ不要:</strong> ページを開いてすぐにスコアリングを開始。スコア上部のラベルをタップしてチーム名をカスタマイズ可能。',
      ],
    },
    {
      type: 'title',
      text: '野球スコアリングをシンプルに カウント ダイヤモンド ボックススコアを一画面に',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '野球のスコア記録には複数の要素を同時に追跡する必要があります。ボールとストライクのカウント、アウト数、ランナーのいる塁、各チームの得点、現在のイニング。これらのうち一つでも見失うと混乱と不正確な記録につながります。このツールはすべてを一つの画面に集約します。カウントドットでボールとストライクを一目で確認。ダイヤモンドでランナーの位置を表示。R H Eテーブルで完全なボックススコアを提示。イニンググリッドは水平スクロールで完全な得点履歴を表示。すべての操作に応じてリアルタイムで更新されます。',
    },
    {
      type: 'grid',
      columns: [
        { type: 'card', title: 'コーチ', html: '<p>ダッグアウトからチーム全体に見えるクリアなデジタルスコアボードを保持。</p>' },
        { type: 'card', title: 'ボランティア', html: '<p>スコア記録の経験は不要。ツールが複雑な追跡をすべて自動処理します。</p>' },
        { type: 'card', title: '保護者', html: '<p>スタンドから信頼性の高いリアルタイムスコア表示で試合を追跡。</p>' },
        { type: 'card', title: '選手', html: '<p>試合後にイニング別スコアを確認してパフォーマンスを分析。</p>' },
      ],
    },
  ],
  ui: {
    title: '野球スコアキーパー',
    description: '得点、安打、失策をダイヤモンド表示で記録。',
    away: 'ビジター',
    home: 'ホーム',
    runs: 'R',
    hits: 'H',
    errors: 'E',
    inning: 'イニング',
    topInning: '表',
    bottomInning: '裏',
    balls: 'ボール',
    strikes: 'ストライク',
    outs: 'アウト',
    strikeBtn: 'ストライク',
    ballBtn: 'ボール',
    foulBtn: 'ファウル',
    hitBtn: 'ヒット',
    outBtn: 'アウト',
    walkBtn: 'フォアボール',
    runBtn: '+1 得点',
    errorBtn: 'エラー',
    newBatter: '新打者',
    resetMatch: '試合をリセット',
    resetConfirm: '現在の試合をリセットしますか？すべてのスコアが失われます。',
    cancel: 'キャンセル',
    confirm: '確認',
    total: '合計',
    fullscreen: '全画面表示',
    toggleSound: 'サウンド切替',
  },
};
