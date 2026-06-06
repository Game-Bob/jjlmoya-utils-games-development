import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { BeachVolleyballLocaleContent } from '../entry';

const slug = 'beach-volleyball-scorekeeper';
const title = 'ビーチバレースコアキーパー & ローテーショントラッカー';
const description = 'ビーチバレーのスコア、サーブ順、風によるサイドチェンジ、セットを、インタラクティブな上面視のゴールデンサンドコート画面で追跡できます。';

const faq = [
  {
    question: 'ビーチバレーではいつチームがサイドを入れ替えますか？',
    answer: '屋外の状況（風、日差し、砂）で公平性を保つため、最初の2セットでは7ポイントごと、タイブレークの第3セットでは5ポイントごとにチームはサイドを入れ替えます。',
  },
  {
    question: 'ビーチバレーのサーブローテーションはどのように機能しますか？',
    answer: '各チーム2名の選手は交互にサーブしなければなりません。チームがサイドアウト（サービスブレイク）を獲得した場合、前回サーブしなかった選手が次にサーブするように交代する必要があります。',
  },
  {
    question: 'ビーチバレーのセットを獲得するには何点必要ですか？',
    answer: '第1セットと第2セットは21点先取です。第3セットが必要な場合は15点先取となります。いずれの場合も2点差以上のリードが必要です。',
  },
];

const howTo = [
  {
    name: 'ラインナップを設定',
    text: 'チームAとチームBの2名の選手にカスタム名を入力します。',
  },
  {
    name: '得点を記録',
    text: 'チームカードをタップするか、インタラクティブなサンドコートをクリックして得点を追加します。ラインナップとローテーションは自動的に更新されます。',
  },
  {
    name: 'サイドチェンジ警告に従う',
    text: '入れ替えバナーが表示されたら、実際にサイドを移動し、スワップボタンをクリックしてコートの向きを反転させます。',
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

export const content: BeachVolleyballLocaleContent = {
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
      text: 'オンラインビーチバレースコアボード & サーブローテーショントラッカー',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '灼熱の太陽の下でサーブ順やチームのポジションを管理するのは大変です。このプロフェッショナルなビーチバレースコアキーパーは、砂の質感を再現したハイコントラストのデジタルコートレイアウトを備え、屋外での視認性に優れています。まぶしさによる読み取り問題を防ぎ、サイドチェンジのルールを自動化し、サイドアウト後にどちらの選手がサーブするかを追跡します。',
    },
    {
      type: 'title',
      text: 'ビーチバレーのローテーションとサーブルールを理解する',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '2対2のビーチバレーではコート上の固定ポジションやローテーションフォルトはありませんが、選手は厳密にサーブを交互に行わなければなりません。レシーブチームがラリーに勝つ（サイドアウト）と、サーブ権を得ます。自チームが前回サーブした時にサーブしなかった選手が新しいサーバーとなります。順番を間違えてサーブするとフォルトとなり、相手に得点が与えられます。このデジタルボードは、選手のサークルノードの横にアクティブなサーブ表示とバウンドするボールインジケーターを備え、ローテーションエラーを防ぎます。',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'FIVB公式ルール',
          description: 'セット制限やサイドチェンジなど、公式の得点ガイドラインに準拠します。',
          icon: 'mdi:volleyball',
          points: ['21点先取（タイブレークは15点）', '厳格な2点差勝利', '自動サイドチェンジ'],
        },
        {
          title: 'ローテーション追跡',
          description: '誰のサーブ順か迷ったり議論したりすることがなくなります。',
          icon: 'mdi:account-sync-outline',
          points: ['発光するサーブ表示', '砂の上に表示されるイニシャル', 'ラインナップ表示モーダル'],
        },
        {
          title: '屋外最適化',
          description: '直射日光下のサンドコートでの実際のプレイ用に設計されました。',
          icon: 'mdi:weather-sunny',
          points: ['高コントラストのイエローテーマ', 'Wake Lock画面維持', 'スワイプジェスチャーで得点取り消し'],
        },
      ],
    },
    {
      type: 'title',
      text: 'インタラクティブ機能 & ゲーム設定',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>ゴールデンサンドSVGコート:</strong> ゲームの状態を視覚的に反映します。コートの半分を直接タップして、そのチームに得点を追加できます。',
        '<strong>コート回転アニメーション:</strong> サイドチェンジ警告がトリガーされたら、スイッチボタンをクリックするとSVGコート全体が180度回転し、実際の物理的な位置と表示が一致します。',
        '<strong>FIVBサイドチェンジアラーム:</strong> 合計スコアが7の倍数（第1、第2セット）または5の倍数（最終セット）に達したときに、視認性の高い警告バナーを表示します。',
        '<strong>サンドスプラッシュパーティクル:</strong> タップした座標から砂のパーティクルが弾けるアニメーションで、得点変更時の視覚的なフィードバックを提供します。',
        '<strong>ジェスチャー取り消しコントロール:</strong> カードを下にスワイプして、最後に記録した得点を即座に取り消します。',
      ],
    },
    {
      type: 'title',
      text: 'ビーチバレーでチームがサイドを入れ替える理由',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'インドアバレーとは異なり、ビーチバレーの試合は日差し、暑さ、風の強さ、砂の状態などの環境要素に大きく影響されます。頻繁にサイドを入れ替えることで、有利な風向きや太陽の位置による不公平なアドバンテージを防ぎます。ルールでは、最初の2セットでは7ポイントごと、第3セットでは5ポイントごとにサイドを入れ替えることになっています。',
    },
  ],
  ui: {
    teamA: 'チーム1',
    teamB: 'チーム2',
    points: '得点',
    sets: 'セット',
    reset: 'リセット',
    resetConfirm: '試合をリセットしますか？すべてのスコアとラインナップが失われます。',
    cancel: 'キャンセル',
    switchSides: 'サイドチェンジ',
    switchSidesDesc: '合計スコアが入れ替えしきい値に達しました！',
    fullscreen: '全画面',
    exitFullscreen: '全画面終了',
    player1: '選手1',
    player2: '選手2',
    serving: 'サーブ中',
    winner: '勝者',
    undo: '取り消し',
  },
};
