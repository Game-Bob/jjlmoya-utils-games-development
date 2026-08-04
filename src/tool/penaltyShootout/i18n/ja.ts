import { bibliographyEntries } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PenaltyShootoutUI } from '../ui';

const slug = 'penalty-shootout-calculator';
const title = 'PKS戦スコアボードオンライン：サッカーPK戦カウンター';
const description =
  'サッカーのPK戦をリアルタイムで記録。5本勝負カウント、数学的勝利判定、サドンデスルール、勝者アニメーションを搭載。';

const faqData = [
  {
    question: 'PK戦が途中で終了するのはどんな時ですか？',
    answer:
      '残りのキック回数で相手チームが追いつくことが数学的に不可能となった時点で、PK戦は即座に終了します。',
  },
  {
    question: 'PK戦のサドンデスはどのように進行しますか？',
    answer:
      '5本ずつで同点の場合、1本ずつ順番にキックを行い、一方が成功し他方が失敗した時点で勝敗が決定します。',
  },
  {
    question: 'PK戦の先攻・後攻はどのように決まりますか？',
    answer:
      '主審がコイントスを行い、使用するゴールを決定したのち、2回目のコイントスで先攻チームを決定します。',
  },
  {
    question: 'PK戦中にゴールキーパーを交代することはできますか？',
    answer:
      '負傷等でプレー続行不可能なゴールキーパーは、チームの交代枠が残っている場合に限り控え選手と交代できます。',
  },
];

const howToData = [
  {
    name: 'チーム名を入力',
    text: 'キック開始前に両チームのチーム名を入力欄に設定します。',
  },
  {
    name: 'キック結果を記録',
    text: 'キックごとに「ゴール」または「失敗」をタップします。スコアやターン表示が自動更新されます。',
  },
  {
    name: 'サドンデスモードへの移行',
    text: '5本で決着がつかない場合、アプリは自動的にサドンデスモードに切り替わります。',
  },
  {
    name: '勝者チームの決定',
    text: '勝利が確定すると、チャンピオンモーダルが表示され勝利チームを祝福します。',
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

export const content: ToolLocaleContent<PenaltyShootoutUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography: bibliographyEntries,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'IFAB公式ペナルティキック戦ルール解説',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'ペナルティキック戦（正式名称：<em>ペナルティマークからのキック</em>）は、競技規則第10条に基づき、引き分けのノックアウトマッチで勝者を決定する方式です。',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '5本', label: '規定キック数' },
        { value: '11m', label: 'ペナルティ距離' },
        { value: '1v1', label: 'キッカーvsGK' },
        { value: 'ABBA / AB', label: 'キック順序' },
      ],
    },
    {
      type: 'tip',
      title: '数学的勝利判定ルール',
      html: '一方のチームが残りのキックを全て成功させても追いつけない得点差がついた時点で、PK戦は直ちに終了します。',
    },
    {
      type: 'title',
      text: '規定5本戦とサドンデスの違い比較',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '規定フェーズ（最初の5本）',
          description: '各チーム5本ずつの交互キック。逆転不可能な得点差がついた場合のみ早期終了。',
        },
        {
          title: 'サドンデスフェーズ',
          description: '6本目以降の単発勝負。同数キック時点で得点差がついた瞬間に勝敗決定。',
        },
      ],
    },
    {
      type: 'title',
      text: 'IFAB規程の重要チェックポイント',
      level: 2,
    },
    {
      type: 'table',
      headers: ['項目・規則', 'IFAB公式規定内容'],
      rows: [
        ['キッカーの資格', '試合終了の笛が鳴った時点でピッチ上にいた選手のみがPKに参加可能。'],
        ['GKの位置規定', 'キックが蹴られる瞬間、GKは片足の少なくとも一部をゴールライン上に保持。'],
        ['助走中のフェイント', '助走段階でのフェイントは許容。助走完了後のフェイントは違反行為。'],
        ['人数差の調整', '退場等で一方の人数が少ない場合、他方チームも人数を合わせて減員。'],
      ],
    },
    {
      type: 'title',
      text: 'PK戦形式のメリットとデメリット',
      level: 2,
    },
    {
      type: 'proscons',
      title: 'PK方式の評価',
      items: [
        {
          pro: '計算可能な時間内に確実に勝者を決定できる。',
          con: '極度の精神的プレッシャーが120分間のチームパフォーマンスを覆い隠す場合がある。',
        },
        {
          pro: '観客に圧倒的な緊張感とドラマを提供する。',
          con: '個人のキック失敗に過度な責任が集中しやすい。',
        },
      ],
    },
  ],
  ui: {
    teamALabel: 'ホームチーム',
    teamBLabel: 'アウェイチーム',
    scoreGoal: '成功',
    scoreMiss: '失敗',
    undo: 'やり直し',
    reset: 'リセット',
    suddenDeath: 'サドンデス',
    regularRounds: '規定ラウンド',
    roundLabel: 'ラウンド',
    turnLabel: 'キック順',
    winnerTitle: '勝利チーム決定',
    unreachableLead: '規定ラウンドでの逆転不可能差',
    regularRoundsWin: '規定5本での勝利',
    suddenDeathWin: 'サドンデスでの勝利',
    statusPending: '待機中',
    statusScored: '成功',
    statusMissed: '失敗',
  },
};
