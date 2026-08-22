import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HitboxHurtboxAnimatorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'hitbox-hurtbox-animator';
const title = 'ヒットボックス・ハートボックス アニメーター';
const description = 'スプライトフレームごとに当たり判定レイヤーを描画。オニオンスキンで動きをプレビューし、ピクセル単位で座標を編集してJSON出力。';

const faq = [
  {
    question: 'Hitbox（攻撃判定）とHurtbox（食らい判定）の違いは何ですか？',
    answer: 'Hitboxは攻撃を発生させる領域、Hurtboxはダメージを受ける領域を指します。Pushboxはキャラクター同士の押し出し判定、Grabboxは 掴み判定、Sensorは検出エリアとして機能します。',
  },
  {
    question: 'スプライト画像が外部 server に送信されることはありますか？',
    answer: 'いいえ。画像のデコード、切り出し、描画、出力処理はすべてブラウザ内でローカルに完結します。ローカルストレージには編集設定のみが保存されます。',
  },
  {
    question: 'JSON出力ではどの座標系が使用されますか？',
    answer: '各フレームは切り出された枠の左上を原点(0,0)としてピクセル単位で測定されます。矩形や円のサイズはピボット位置とともに保存されます。',
  },
  {
    question: 'スプライトシートと個別フレーム画像の両方を編集できますか？',
    answer: 'はい。PNGやWebPのスプライトシートの縦横分割数を指定するか、連番の個別画像ファイルを一括選択して読み込むことができます。',
  },
  {
    question: '出力データはすべてのゲームエンジンでそのまま使えますか？',
    answer: 'JSONはエンジンに依存しない汎用フォーマットです。フレーム範囲、ピボット、レイヤー名、形状データが記録されています。',
  },
];

const howTo = [
  { name: 'アニメーション画像を読み込む', text: 'PNG/WebPのスプライトシートまたは連番画像を選択します。処理はすべてローカルで完了します。' },
  { name: 'フレームの分割設定', text: 'スプライトシートの行数と列数を入力し、タイムラインで正確に切り出されているか確認します。' },
  { name: '当たり判定レイヤーの描画', text: 'Hitbox、Hurtbox、Pushboxなどの種類を選択し、アクティブなフレーム上に矩形や円を描画します。' },
  { name: '動きの調整', text: '座標を数 uniform 値で微調整し、隣接フレームへ形状をコピーしながら、オニオンスキンで動きのつながりを確認します。' },
  { name: 'プロジェクトの出力', text: '汎用JSONプロジェクトファイルとPNGのコンタクトシートをダウンロードします。元画像と一緒に保管してください。' },
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

export const content: ToolLocaleContent<HitboxHurtboxAnimatorUI> = {
  slug,
  title,
  description,
  ui: {
    onboarding: 'スプライトアニメーションを読み込み、分割を確認して攻撃・喰らい・物理押し出しなどの判定エリアを描画します。',
    privacyNote: 'ローカル専用アニメーションデスク。画像が送信されることはありません。',
    loadSprite: '画像素材を作業台に配置',
    loadHint: 'スプライトシートまたは連番PNG/WebP画像を選択してください。',
    chooseImages: '画像を選択',
    slicingTitle: 'フレーム分割',
    rowsLabel: '行数',
    columnsLabel: '列数',
    applySlicing: '分割を適用',
    playbackTitle: 'モーションプレビュー',
    previousFrame: '前のフレーム',
    play: '再生',
    pause: '一時停止',
    nextFrame: '次のフレーム',
    fpsLabel: 'FPS (フレーム/秒)',
    onionPrevious: '前のオニオンスキン',
    onionNext: '次のオニオンスキン',
    layerTitle: '判定レイヤー',
    typeHitbox: 'Hitbox (攻撃)',
    typeHurtbox: 'Hurtbox (喰らい)',
    typePushbox: 'Pushbox (押し出し)',
    typeGrabbox: 'Grabbox (掴み)',
    typeSensor: 'Sensor (検出)',
    typeCustom: 'カスタム',
    shapeRectangle: '矩形',
    shapeCircle: '円形',
    drawShape: '描画',
    selectShape: '選択',
    stageLabel: 'アニメーションステージ',
    emptyStage: '画像を読み込んで当たり判定の描画を開始してください。',
    frameReadout: 'フレーム {current} / {total}',
    timelineTitle: 'タイムライン',
    inspectorTitle: '形状プロパティ',
    noSelection: '形状を選択すると詳細な座標やサイズを編集できます。',
    nameLabel: 'レイヤー名',
    xLabel: 'X座標 (px)',
    yLabel: 'Y座標 (px)',
    widthLabel: '幅 (px)',
    heightLabel: '高さ (px)',
    radiusLabel: '半径 (px)',
    duplicateShape: '複製',
    mirrorShape: '左右反転',
    deleteShape: '選択中形状を削除',
    copyPrevious: '前のフレームからコピー',
    copyAll: '全フレームにコピー',
    pivotTitle: '原点ピボット',
    pivotXLabel: 'ピボット X',
    pivotYLabel: 'ピボット Y',
    exportTitle: 'プロジェクト出力',
    exportJson: 'JSONダウンロード',
    importJson: 'JSONインポート',
    exportContactSheet: 'コンタクトシート保存',
    resetProject: 'レイヤーをリセット',
    undo: '元に戻す',
    redo: 'やり直し',
    statusReady: '作業台が準備できました。',
    statusImageLoaded: '{count} 個の画像ファイルを読み込みました。',
    statusShapeCreated: '新しい判定形状を追加しました。',
    statusShapeUpdated: '判定形状を更新しました。',
    statusImported: 'プロジェクトをインポートしました。',
    statusExported: '出力ファイルの準備が完了しました。',
    statusError: 'ファイルの読み込みに失敗しました。',
    framesBadge: '{count} フレーム',
    shapesBadge: '{count} 個の形状',
    coverageBadge: 'カバー率 {percent}%',
    coordinatesNote: '座標は各フレーム画像の左上を原点(0,0)として計算されます。',
    localOnlyDisclosure: 'JSONファイルには画像名、ピボット、判定形状のみが保存され、画像ピクセルは含まれません。',
    limitationDisclosure: '本ツールは判定範囲の設計用です。実際の動作は使用するゲームエンジン上で確認してください。',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'アニメーションの動きに合わせて正確なHitboxとHurtboxを設計',
    },
    {
      type: 'paragraph',
      html: 'フレーム単体を個別に調整すると、アニメーション全体での当たり判定のつながりが崩れやすくなります。本ツールではスプライト画像、判定レイヤー、オニオンスキン、タイムラインを1つの画面で確認しながら一貫性のある判定を設定できます。',
    },
    {
      type: 'title',
      level: 2,
      text: 'ゲーム内での役割に応じた判定レイヤーの使い分け',
    },
    {
      type: 'table',
      headers: ['レイヤー', '主な役割', '確認ポイント'],
      rows: [
        ['Hitbox', '攻撃や効果を発生させる領域', '意図したアクティブフレームでのみ発生しているか'],
        ['Hurtbox', '攻撃を受けるキャラクターの体判定', 'キャラクターの輪郭に自然に沿っているか'],
        ['Pushbox', 'キャラクター同士の重なりを防ぐ物理判定', '画面のつきはなしやガタツキを防ぐため安定しているか'],
        ['Grabbox', '掴み技や投げを発生させる間合い判定', '発生タイミングや範囲がモーションと一致しているか'],
        ['Sensor', '壁や地面、トリガーなどを検出する領域', '目的が明確に名前付けされているか'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: '座標系の定義とゲームエンジンへの適用',
    },
    {
      type: 'paragraph',
      html: '出力されるJSONデータは、切り出された各フレームの左上を(0,0)としてX・Y座標をピクセル単位で記録します。',
    },
    {
      type: 'tip',
      title: '予備動作・発生・硬直を通して全体の流れを確認する',
      html: '1フレームの調整が終わったら必ず全再生を行い、モーション全体の判定がスムーズに変化しているかチェックしてください。',
    },
    {
      type: 'title',
      level: 2,
      text: 'コンタクトシートを活用したチーム内レビュー',
    },
    {
      type: 'paragraph',
      html: 'PNG形式のコンタクトシートを出力すれば、全フレームの当たり判定レイヤーを一覧表示でき、アニメーターやプログラマーとの意思疎通がスムーズになります。',
    },
  ],
  faq,
  bibliographyTitle: '当たり判定設計の参考資料',
  bibliography: bibliographyEntries,
  howTo,
  schemas: [softwareApplication, faqPage, howToSchema],
};
