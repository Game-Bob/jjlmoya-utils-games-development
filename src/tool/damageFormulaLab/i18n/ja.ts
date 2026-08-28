import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DamageFormulaLabUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'game-damage-formula-calculator-ttk';
const title = 'ゲームダメージ計算・TTKシミュレーター';
const description = '安全な計算式でゲームのダメージ・撃破所要時間(TTK)を比較。リアルタイム曲線、ヒートマップ、端数処理、クリティカルの影響を分析。';

const faq = [
  {
    question: 'ダメージ計算・TTKシミュレーターとは何ですか？',
    answer: '同じ戦闘ステータスに対して2つのダメージ計算式を安全に比較・評価するツールです。ダメージ曲線、撃破に必要な攻撃回数、TTK、端数処理、耐性の適用順序をJavaScriptの直接実行なしで確認できます。',
  },
  {
    question: 'どのような変数や関数が使用できますか？',
    answer: '使用可能な変数は attack, defense, level, power, resistance, flat, criticalChance, criticalMultiplier です。安全な関数として min, max, clamp, abs, sqrt, pow, floor, round, ceil が用意されています。',
  },
  {
    question: '撃破時間(TTK)はどのように計算されますか？',
    answer: '撃破攻撃回数は対象HPを端数処理後の予測ダメージで割り、切り上げた値です。TTKは最初の攻撃から最後の攻撃までの時間間隔を表すため、(必要攻撃回数 - 1) / 秒間攻撃回数 で算出されます。1撃で倒せる場合のTTKは0秒です。',
  },
  {
    question: '耐性の適用順序で結果が変わるのはなぜですか？',
    answer: '固定加減算をパーセント耐性の前に適用すると、固定値自体も耐性によって減少します。耐性を先に適用すると、後の固定加減算は影響を受けません。ゲームエンジンや設計思想に合わせて両方の計算順序を切り替えられます。',
  },
  {
    question: '曲線が滑らかであればゲームバランスは良好と言えますか？',
    answer: 'いいえ。曲線はダメージ0領域や急激な変化点を可視化しますが、実際のバランスはゲームの目的、プレイヤーの選択、体験の設計に依存します。数値上の挙動を示すものであり、絶対的な評価を与えるものではありません。',
  },
];

const howTo = [
  { name: '2つの計算式を選択', text: '線形・比率・レベル補正などのプリセットから選択するか、独自の計算式A・Bを入力します。' },
  { name: '戦闘ステータスを設定', text: '攻撃力、防御力、レベル、威力係数、耐性、固定値、クリティカル率・倍率、対象HP、攻撃速度を設定します。' },
  { name: 'エンジンのルールを指定', text: 'ダメージの端数処理方法と、耐性と固定値の適用順序を選択します。' },
  { name: '曲線と変化点を分析', text: '攻撃力推移の曲線、防御ヒートマップ、必要攻撃回数、TTK、警告診断を確認します。' },
  { name: '設定を保存・共有', text: '共有用URLをコピーするか、JSON設定、CSVデータ、グラフ画像(PNG)をダウンロードします。' },
];

const softwareApplication: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Any',
};

const faqPage: WithContext<FAQPage> = {
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
  step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })),
};

export const content: ToolLocaleContent<DamageFormulaLabUI> = {
  slug,
  title,
  description,
  ui: {
    onboarding: '現在のダメージ計算式と代替案を入力し、戦闘ステータスを調整して極端なステータス帯での挙動を検証します。',
    privacyNote: 'ローカル専用設計。計算式や設定はブラウザ内のみで処理されます。',
    localNote: '戦闘モデルは非公開です。計算式とファイルはこのブラウザ内に留まります。',
    loadSprite: '計算式入力エリア',
    formulaDeck: '計算式デッキ',
    formulaALabel: '計算式A (現行モデル)',
    formulaBLabel: '計算式B (比較案)',
    formulaHint: '変数: attack, defense, level, power, resistance, flat, criticalChance, criticalMultiplier',
    formulaFunctions: '安全関数: min, max, clamp, abs, sqrt, pow, floor, round, ceil',
    presetLinear: '線形軽減',
    presetRatio: '比率防御',
    presetLevel: 'レベル補正',
    combatInputs: '戦闘ステータス設定',
    attackLabel: '攻撃力 (Attack)',
    defenseLabel: '防御力 (Defense)',
    levelLabel: 'レベル (Level)',
    powerLabel: '威力係数 (Power)',
    resistanceLabel: '耐性パーセント (Resistance %)',
    flatLabel: '固定加減算 (Flat)',
    criticalChanceLabel: 'クリティカル率 (%)',
    criticalMultiplierLabel: 'クリティカル倍率',
    healthLabel: '対象HP (Health)',
    cadenceLabel: '秒間攻撃回数 (APS)',
    roundingLabel: 'ダメージ端数処理',
    roundingNone: '小数点を維持',
    roundingFloor: '切り捨て (Floor)',
    roundingRound: '四捨五入 (Round)',
    roundingCeil: '切り上げ (Ceil)',
    orderLabel: '計算適用順序',
    resistanceFirst: '耐性 % → 固定値',
    flatFirst: '固定値 → 耐性 %',
    runLabel: 'リアルタイム影響比較',
    resultDamage: '予測ダメージ',
    resultHits: '撃破必要攻撃回数',
    resultTtk: '撃破所要時間 (TTK)',
    resultDifference: 'ダメージ差分',
    formulaAName: '現行案',
    formulaBName: '比較案',
    curveTitle: '攻撃力推移グラフ',
    curveCaption: '防御力を固定したまま、攻撃力を現在の半分の値から2倍の値までスウィープ検証します。',
    heatmapTitle: '攻撃・防御ヒートマップ',
    heatmapCaption: '攻撃力と防御力の各組み合わせにおける計算式Aの予測ダメージを表示します。',
    attackAxis: '右に行くほど攻撃力上昇',
    defenseAxis: '下に行くほど防御力上昇',
    scenariosTitle: '戦闘ターゲットプリセット',
    scenarioSkirmisher: '一般エネミー',
    scenarioGuardian: '重装エネミー',
    scenarioBoss: 'ボスエネミー',
    scenarioCustom: 'カスタム設定',
    diagnosticsTitle: 'ブレイクポイント診断',
    statusBalanced: '現在の検証範囲内で異常な数値の飛躍は検出されませんでした。',
    exportTitle: '設定・データの出力',
    copyLink: '共有リンクをコピー',
    exportCsv: 'CSVダウンロード',
    exportJson: 'JSONダウンロード',
    importJson: 'JSONインポート',
    exportPng: 'グラフ画像(PNG)ダウンロード',
    reset: 'モデルのリセット',
    privacyDisclosure: '共有リンクはURLハッシュ内に設定を保持し、外部サーバーへ送信されることはありません。',
    limitationDisclosure: 'クリティカルダメージは平均期待値であり、ランダム試行のシミュレーションではありません。',
    importError: '選択されたファイルは有効な設定データではありません。',
    copiedStatus: '共有リンクをクリップボードにコピーしました。',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'ゲームエンジンへ組み込む前にダメージ計算式を検証',
    },
    {
      type: 'paragraph',
      html: '特定の値で問題なく見えても、ステータスが上昇した際にダメージ0や極端な数値へ崩壊することがあります。本ツールでは2つの計算式を同時にスウィープ検証できます。',
    },
    {
      type: 'title',
      level: 2,
      text: '安全で制限された数式評価言語',
    },
    {
      type: 'paragraph',
      html: '入力フィールドは定義された変数と数学関数のみを受け付け、任意のJavaScriptコードを実行することなく安全に計算を行います。',
    },
    {
      type: 'table',
      headers: ['評価指標', '計算内容', '設計上の検討事項'],
      rows: [
        ['予測ダメージ', 'クリティカル期待値・耐性・端数処理を含めた基本ダメージ', 'ステータス成長に対して意図通りのダメージが伸びているか？'],
        ['必要攻撃回数', '対象HPを端数処理後ダメージで割り切り上げ', '1ポイントのステータス上昇が必要攻撃回数を劇的に減らしていないか？'],
        ['撃破所要時間 (TTK)', '攻撃回数間隔を秒間攻撃速度で除算', '攻撃速度が意図した戦闘テンポを生み出しているか？'],
        ['ヒートマップ', '攻撃力と防御力の組み合わせによるダメージ分布', '不自然なダメージ停滞帯や急激な閾値が存在しないか？'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: '数値計算の検証とバランス調整の分離',
    },
    {
      type: 'paragraph',
      html: '綺麗なグラフがそのままゲームの面白さを保証するわけではありません。試遊テストで確認すべきポイントを発見するためのツールとしてご活用ください。',
    },
    {
      type: 'tip',
      title: 'ダメージ数値と撃破攻撃回数の両方を確認する',
      html: '僅かなダメージの変化であっても、HPの閾値を跨ぐことで必要な攻撃回数が1回減る場合があります。常にTTKと必要攻撃回数をセットで分析してください。',
    },
  ],
  faq,
  bibliographyTitle: 'ダメージ設計・数値計算の参考資料',
  bibliography: bibliographyEntries,
  howTo,
  schemas: [softwareApplication, faqPage, howToSchema],
};
