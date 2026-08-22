import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GameUiAccessibilityTesterUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'game-ui-accessibility-stress-tester';
const title = 'ゲームUIアクセシビリティストレスチェッカー';
const description = 'ゲームのスクリーンショットをローカルで検査。色覚シミュレーション、HUDコントラスト測定、ぼかし、縮小、エッジヒートマップに対応。';

const faq = [
  {
    question: 'このツールはゲームUIのアクセシビリティを保証するものですか？',
    answer: 'いいえ。色覚シミュレーション、コントラスト測定、視覚ストレス検証、レビューガイドを組み合わせた補助ツールです。デザインレビューやユーザーテストの参考にしてください。',
  },
  {
    question: 'スクリーンショットが外部サーバーに送信されることはありますか？',
    answer: 'いいえ。画像のデコード、サンプル抽出、変換、出力処理はすべてブラウザ内で完結します。ローカルストレージには表示設定のみが保存されます。',
  },
  {
    question: '2つのカラープローブでは何を測定すべきですか？',
    answer: '味方と敵のマーカー、アクティブと非アクティブ、体力とダメージなど、プレイヤーが識別すべき異なる意味を持つ2つの色を選択してください。',
  },
  {
    question: 'コントラスト比が良好でも手動レビューが必要なのはなぜですか？',
    answer: '小さなアイコン、細い文字、動きのある背景、色のみに依存した設計など、数値上は良好でも識別が困難なケースが存在するためです。',
  },
  {
    question: 'ヒートマップは何を表示していますか？',
    answer: '選択したシミュレーション下で色の分離度が急激に低下する境界部分をハイライト表示します。視認性が低下しやすい箇所を特定する目安になります。',
  },
];

const howTo = [
  { name: 'スクリーンショットを読み込む', text: 'PNG、JPEG、WebP形式のゲーム画面を選択します。画像データはブラウザのメモリ内でのみ処理されます。' },
  { name: 'シミュレーションレンズを選択', text: 'オリジナル画像と色覚シミュレーション、グレースケール、低コントラスト状態を比較します。' },
  { name: '視覚ストレスを適用', text: 'ぼかし、解像度縮小、ピクセル拡大、エッジヒートマップを適用して視認性をテストします。' },
  { name: '2つの重要シナーを測定', text: 'プローブAまたはBを選択し、オリジナル画像をクリックして比較する2色を抽出します。' },
  { name: '結果を記録・出力', text: 'チェックリストを確認してチームの観察事項を入力し、比較シート画像やJSONレポートをダウンロードします。' },
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

export const content: ToolLocaleContent<GameUiAccessibilityTesterUI> = {
  slug,
  title,
  description,
  ui: {
    onboarding: 'ゲームのスクリーンショットを読み込み、シミュレーションレンズを選択して、プレイヤーが判別すべき2つの重要な視覚シグナルを比較します。',
    privacyNote: 'ローカル解析ツール。画像が送信されることはありません。',
    dropTitle: 'ゲーム画面のスクリーンショットをドロップ',
    dropHint: '画像をここにドロップするか、デバイスから選択してください。実際のゲームプレイ画面を使用することをお勧めします。',
    chooseImage: '画像を選択',
    replaceImage: '画像を差し替え',
    supportedFiles: '16 MBまでのPNG、JPEG、WebPに対応。大きな画像は1600 pxに自動調整されます。',
    lensLabel: 'シミュレーションレンズ',
    lensOriginal: 'オリジナル',
    lensProtanopia: '1型色覚 (P型)',
    lensDeuteranopia: '2型色覚 (D型)',
    lensTritanopia: '3型色覚 (T型)',
    lensAchromatopsia: 'グレースケール',
    lensReducedContrast: '低コントラスト',
    lensDesaturation: '減色・彩度低下',
    compareLabel: '比較モード',
    compareSideBySide: '並べて表示',
    compareSplit: '分割表示',
    comparePress: '長押しで元画像',
    holdOriginal: '長押しでオリジナル表示',
    splitPosition: '分割位置',
    stressLabel: '視覚ストレス設定',
    blurLabel: 'ぼかし強度 (px)',
    downscaleLabel: '小画面プレビュー',
    downscaleFull: '等倍',
    downscaleHalf: '1/2倍',
    downscaleQuarter: '1/4倍',
    downscaleEighth: '1/8倍',
    zoomLabel: 'ピクセル拡大率',
    heatmapLabel: 'エッジヒートマップ',
    heatmapHint: 'シミュレーション下で色の識別が著しく低下する境界を表示。',
    originalView: 'オリジナル画像',
    simulatedView: 'シミュレーション画像',
    emptyCanvas: 'スクリーンショットを選択して検証を開始します。データはローカルに保持されます。',
    sampleTitle: '重要カラープローブ',
    sampleInstructions: 'AまたはBを選択し、オリジナル画像をクリックして比較する色を抽出します。',
    sampleA: 'プローブ A',
    sampleB: 'プローブ B',
    sampleAName: 'プローブAの意味',
    sampleBName: 'プローブBの意味',
    manualColor: 'カラーコードを直接入力',
    sampleAInitial: '味方マーカー',
    sampleBInitial: '敵マーカー',
    noSample: '画像を選択してください',
    originalContrast: '元画像コントラスト',
    simulatedContrast: '変換後コントラスト',
    separationRetained: '色識別維持率',
    statusStrong: '十分な視認性を維持',
    statusWatch: '文脈に合わせて要確認',
    statusReview: 'デザインの再検討を推奨',
    statusPending: '未解析',
    measurementLabel: '測定値',
    heuristicLabel: '指標',
    manualReviewLabel: '手動レビュー状態',
    measurementHint: 'WCAG相対輝度式に基づき、抽出した2色のコントラスト比を算出します。',
    heuristicHint: 'シミュレーション前後でのRGB色空間上の距離変化を百分率で示します。',
    promptTitle: 'UIレビューチェックポイント',
    promptColorOnly: '色だけに頼らず、味方・敵・警告・成功・失敗を識別できますか？',
    promptChangingBackground: '明暗や動きが激しい背景の上でもテキストは読めますか？',
    promptMinimap: 'ミニマップのアイコンは形や模様でも区別できるようになっていますか？',
    promptStates: '選択・不可・クールダウンなどの状態遷移が明確ですか？',
    promptShape: 'アイコン、文字、効果音などで色の情報を補完していますか？',
    findingLabel: 'チームでの観察メモ',
    findingPlaceholder: '例: ダメージエフェクト発生時に敵の輪郭が見えにくくなる',
    addFinding: 'メモを追加',
    findingsEmpty: 'メモはまだ登録されていません。',
    exportSheet: '比較シート画像を保存',
    exportReport: 'JSONレポートを出力',
    resetTool: 'リセット',
    uploadError: '画像を読み込めませんでした。有効なPNG、JPEG、WebPを選択してください。',
    fileTooLarge: 'ファイルサイズが16 MBを超えています。小さい画像で試してください。',
    imageReady: '画像を読み込みました。2箇所をクリックして測定を開始してください。',
    reportDownloaded: 'JSONレポートをダウンロードしました。',
    sheetDownloaded: '比較シート画像をダウンロードしました。',
    localOnlyDisclosure: '画像処理や解析はすべてブラウザ内でローカルに実行されます。',
    limitationDisclosure: '本ツールは検証補助用です。実際のユーザーテストの代わりとなるものではありません。',
    reportTitle: 'ゲームUIアクセシビリティレビューレポート',
    reportFindingReview: '選択したシミュレーションにおいて、抽出した2色の視認性が大幅に低下しています。',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: '画像をアップロードせずにゲームUIの色覚アクセシビリティを検証',
    },
    {
      type: 'paragraph',
      html: 'ゲーム画面は激しい動き、効果音、複雑な背景の中で情報を伝える必要があります。このローカル検証ツールを使用することで、スクリーンショットを外部に送信することなく、色覚シミュレーションや視覚ストレス下での視認性をブラウザ上で直接テストできます。',
    },
    {
      type: 'title',
      level: 2,
      text: '数値測定・指標・人の判断が果たすそれぞれの役割',
    },
    {
      type: 'table',
      headers: ['検証項目', 'このツールが提供するもの', '単体では判定できないこと'],
      rows: [
        ['数値測定', '抽出した2色の相対輝度とWCAGコントラスト比', 'ゲーム内のすべてのテキストや背景が基準を満たしているか'],
        ['シミュレーション', '学術論文に基づくP型・D型・T型色覚変換', '個々のプレイヤーの実際の視覚体験'],
        ['指標', 'ぼかし、解像度低下、色分離低下のヒートマップ表示', 'UI設計全体の自動良否判定'],
        ['手動レビュー', 'チェックリストと出力可能な報告レポート', '障害当事者によるユーザーテストの代替'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'プレイヤーの意思決定に直結する色を測定する',
    },
    {
      type: 'paragraph',
      html: '見た目がきれいな場所ではなく、味方と敵、安全と危険、選択可能と不可など、ゲームプレイに直結する2つの色を選択して測定してください。シミュレーション下で識別が難しくなる場合は、色だけでなく形状や文字、効果音による補強を検討します。',
    },
    {
      type: 'tip',
      title: '最も視覚情報が多い場面の画像を使用する',
      html: '静かなメニュー画面ではなく、エフェクトやアクションが激しい実際のゲームプレイ画面のスクリーンショットを使用して検証を行うことが重要です。',
    },
    {
      type: 'title',
      level: 2,
      text: '出力されたレポートを開発チームの議論に活かす',
    },
    {
      type: 'paragraph',
      html: 'ダウンロードしたJSONレポートと比較シート画像（PNG）を課題管理ツール（JiraやGitHub Issuesなど）に添付することで、デザイナーとエンジニアが具体的な修正案を共有しやすくなります。',
    },
  ],
  faq,
  howTo,
  schemas: [softwareApplication, faqPage, howToSchema],
  bibliography: bibliographyEntries,
};
