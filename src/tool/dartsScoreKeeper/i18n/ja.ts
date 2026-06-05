import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DartsScoreKeeperUI } from '../ui';

const slug = 'darts-scorekeeper';
const title = 'オンラインダーツスコアキーパー : レッグ＆セットトラッカー';
const description = 'レッグとセットのスコアでダーツの試合を追跡。501および301の試合用無料オンラインダーツスコアキーパー。ライブチェックアウト計算と統計付き。';

const faqData = [
  {
    question: '501と301のダーツスコアリングはどう機能しますか？',
    answer: 'プレイヤーは501または301ポイントの固定スコアからスタートします。各プレイヤーは順番に3本のダーツを投げ、その合計値がスコアから差し引かれます。目標は正確に0ポイントに到達することです。ダブルアウトルールが有効な場合、最後の勝利ダーツはダブルセグメントまたはインナーブルアイに着地する必要があります。',
  },
  {
    question: 'ダーツのバストとは何で、いつ発生しますか？',
    answer: 'バストは、プレイヤーが残りスコアよりも多くのポイントを獲得した場合、またはダブルアウトルールが有効でスコアがちょうど1ポイントになった場合に発生します。バストが発生すると、そのターンは即座に終了し、スコアはそのターン開始時の合計にリセットされます。',
  },
  {
    question: 'ダーツの平均はどう計算しますか？',
    answer: 'ダーツの平均は、獲得した総ポイント数を投げた総ダーツ数で割り、その結果に3を掛けて計算します。これはプレイヤーが標準的な3投のターンで達成する平均スコアを表します。',
  },
  {
    question: 'ダーツのチェックアウトとは何ですか？',
    answer: 'チェックアウトとは、残りスコアを0にしてレッグに勝つために必要な特定の投げの組み合わせです。プロのスコアキーパーは170以下のスコアに対するチェックアウト提案を表示し、シングル、ダブル、またはトリプルのどのセグメントを狙うべきかをガイドします。',
  },
];

const howToData = [
  {
    name: '開始スコアとルールを選択',
    text: '開始スコアとして501または301を選択し、希望するプレイレベルに応じてダブルアウトルールをオン/オフします。',
  },
  {
    name: 'プレイヤー名を入力',
    text: 'スコアボード上部のプレイヤー名フィールドをクリックして名前をカスタマイズします。値はブラウザに自動保存されます。',
  },
  {
    name: '投げたダーツを記録',
    text: 'インタラクティブなキーパッドを使用するか、ダーツボードのセクターを直接タップして投げを記録します。最初にマルチプライヤー（シングル、ダブル、トリプル）を選択し、次にヒットした番号を選択します。',
  },
  {
    name: 'チェックアウト推奨に従う',
    text: '残りスコアが170を下回ったら、チェックアウトパネルを見てレッグを終了するための最適なターゲットを確認します。',
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

export const content: ToolLocaleContent<DartsScoreKeeperUI> = {
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
      text: '無料オンラインダーツスコアキーパーとマッチトラッカー',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'ダーツのスコア管理には素早い暗算と集中力が必要です。このデジタルダーツレッグトラッカーはすべての計算を代行し、投げることに完全に集中できます。一人で練習する場合でも、友達と競技を行う場合でも、このスコアボードはポイント、レッグ、セット、投げの平均、ダブルアウトのチェックアウトターゲットを追跡します。',
    },
    {
      type: 'title',
      text: '標準的なダーツスコアリング形式の説明',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'ダーツの試合はレッグとセットで行われます。世界的に最も人気のある形式は501と301で、どちらもプレイヤーがスコアを0に減らす減算ゲームです。',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '501トーナメント',
          description: '世界中のプロトーナメントの標準形式。',
          icon: 'mdi:trophy-outline',
          points: ['標準開始スコア', 'ダブルアウト必須', '高スコア重視'],
        },
        {
          title: '301カジュアル',
          description: '減算ゲームのより速いバージョンで、素早いカジュアルマッチに最適。',
          icon: 'mdi:clock-outline',
          points: ['より速いゲームペース', 'ダブルインオプション一般的', '練習に最適'],
        },
        {
          title: 'クリケットモード',
          description: 'パブやカジュアルリーグで人気の戦略的ターゲットヒットゲーム。',
          icon: 'mdi:bullseye',
          points: ['15～20の数字に焦点', 'ブルアイ追跡', '代替ルールシステム'],
        },
      ],
    },
    {
      type: 'title',
      text: 'ダーツのチェックアウト計算を理解する',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'ダーツで可能な最高のチェックアウトは170で、トリプル20、トリプル20、ダブルブルの順で達成されます。スコアが170以下になるとチェックアウト範囲に入り、特定のダーツの順序でゲームに勝つことができます。',
    },
    {
      type: 'table',
      headers: ['スコア', 'ダーツ1の目標', 'ダーツ2の目標', 'ダーツ3の目標'],
      rows: [
        ['170', 'トリプル20 (60)', 'トリプル20 (60)', 'ダブルブル (50)'],
        ['120', 'トリプル20 (60)', 'シングル20 (20)', 'ダブル20 (40)'],
        ['100', 'トリプル20 (60)', 'シングル20 (20)', 'ダブル10 (20)'],
        ['80', 'トリプル20 (60)', 'ダブル10 (20)', '-'],
        ['40', 'ダブル20 (40)', '-', '-'],
      ],
    },
    {
      type: 'title',
      text: 'このデジタルダーツスコアボードの機能',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>インタラクティブ入力方法</strong> ビジュアルなラジアルダーツボードと高速なテンキーの切り替え。',
        '<strong>スマートチェックアウトエンジン</strong> レッグ終了のためのライブ組み合わせを表示。',
        '<strong>バスト検出</strong> 無効な投げを自動的にリセットしユーザーに警告。',
        '<strong>ターン履歴ログ</strong> 以前のラウンドと残りスコアを追跡。',
        '<strong>詳細な試合統計</strong> 3投の平均を動的に計算。',
      ],
    },
    {
      type: 'title',
      text: '手動 vs デジタルダーツ追跡',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '従来の黒板では書く、消す、絶え間ない計算が必要でした。このオンラインスコアボードはエラーリスクを排除し、平均を自動化し、チェックアウトターゲットを表示します。デバイスをボードの隣に置き、全画面モードにして画面をアクティブに保ち、手間いらずのスコアリングをお楽しみください。',
    },
  ],
  ui: {
    playerA: 'プレイヤー1',
    playerB: 'プレイヤー2',
    winnerLabel: 'チャンピオン',
    reset: 'リセット',
    resetConfirm: '試合をリセットしますか？すべてのデータが失われます。',
    cancel: 'キャンセル',
    fullscreen: '全画面',
    exitFullscreen: '全画面を終了',
    leg: 'レッグ',
    set: 'セット',
    average: '平均',
    checkout: 'チェックアウト',
    busted: 'バスト',
    dart: 'ダーツターン',
    score301: '301',
    score501: '501',
    doubleOut: 'ダブルアウト',
    noCheckout: 'チェックアウトなし',
  },
};
