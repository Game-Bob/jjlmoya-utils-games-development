import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GamePixelPerUnitPlannerUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const faq = [
  { question: 'ゲームのピクセルパーユニットとは何ですか？', answer: 'PPUは、ワールドの1単位を何個のテクスチャピクセルで表すかを示します。密度をそろえると、スプライト、タイル、カメラの大きさを予測しやすくなります。' },
  { question: 'なぜ整数倍率が重要ですか？', answer: '整数倍率では、元の各ピクセルが画面上で同じ整数個のピクセルになります。小数倍率では輪郭が不均一になったり、ぼやけたりします。' },
  { question: 'ピクセルブリーディングとは何ですか？', answer: '隣のテクセルやアトラス領域の色が意図せず混ざる現象です。フィルター、境界、サブピクセル移動、余白不足が原因になります。' },
  { question: '推奨倍率はどう使いますか？', answer: '解像度に収まり、目標に近い候補として使います。その後、エンジンでnearestフィルター、カメラ位置、アトラスの余白を確認してください。' },
  { question: 'どのエンジンでも正しいPPUを選べますか？', answer: 'いいえ。これは計算を確認する道具です。カメラ、インポート、ミップマップ、丸め、ピクセルスナップはエンジンごとに異なります。' },
];
const howTo = [
  { name: '対象画面を選ぶ', text: 'ゲーム画面または基準解像度の幅と高さをピクセルで入力します。' },
  { name: 'スプライトを読み込む', text: '画像を選ぶと元のサイズを検出します。付属のBobサンプルも使えます。' },
  { name: '倍率を選ぶ', text: 'スライダーまたはプリセットを使います。整数倍率が最も鮮明な候補です。' },
  { name: 'プレビューを読む', text: 'スプライトの占有サイズ、横と縦のPPU、見えるワールド、ブリーディング警告を確認します。' },
  { name: 'エンジンで試す', text: 'nearestフィルター、整列したカメラ、アトラス余白、実際の解像度で検証します。' },
];
const softwareApplication: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: 'ゲーム用ピクセルパーユニットプランナー', applicationCategory: 'DeveloperApplication', operatingSystem: 'Any' };
const faqPage: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: 'ピクセルアートのスプライト倍率を試す方法', step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) };

export const content: ToolLocaleContent<GamePixelPerUnitPlannerUI> = {
  slug: 'game-pixel-per-unit-planner', title: 'ゲームスプライトのピクセルパーユニットプランナー', description: 'スプライトを読み込むかBobの例を使い、整数倍率での占有サイズを確認し、PPUとピクセルブリーディングのリスクを調べます。',
  ui: {
    inputsTitle: 'スプライトを読み込んで試す', uploadTitle: '元画像', uploadHint: 'PNG、GIF、WebP、JPEGを選びます。元のサイズがすべてのプレビューに使われます。', chooseSpriteLabel: 'スプライトを選ぶ', noSpriteLabel: 'スプライト未読み込み', defaultSpriteLabel: 'Bobのサンプルスプライト', loadedSpriteLabel: '読み込み済み', clearSpriteLabel: 'スプライトを削除', displayWidthLabel: '画面幅 px', displayHeightLabel: '画面高 px', spriteWidthLabel: 'スプライト幅 px', spriteHeightLabel: 'スプライト高 px', worldWidthLabel: 'スプライト幅 units', worldHeightLabel: 'スプライト高 units', targetScaleLabel: '画面上の目標倍率', targetScaleHint: 'テクスチャの1ピクセルあたりの画面ピクセル数。', resolutionPresetsLabel: '基準解像度', preset320: '320 x 180', preset384: '384 x 216', preset640: '640 x 360', scalePresetsLabel: 'クイック倍率', scale1: '1x', scale2: '2x', scale3: '3x', scale4: '4x', scale6: '6x', resetLabel: '値をリセット', fieldTitle: '複数のサイズで見る', fieldCaption: '読み込んだ画像をnearest方式で描画し、整数倍率ごとの実際の占有サイズを確認します。', previewPlaceholder: 'スプライトを読み込んで視覚テストを開始', previewScaleLabel: 'プレビュー倍率', sourceImageAlt: '読み込んだスプライトのプレビュー', viewportLabel: '画面', spriteLabel: '描画スプライト', crispTitle: '鮮明な倍率', crispCaption: '整数倍率はピクセルを均一に保ちます。灰色の倍率は指定画面を超えます。', fitLabel: '画面に収まる:', yesLabel: 'はい', noLabel: 'いいえ', recommendedLabel: '最も近い候補', summaryTitle: '計画の概要', ppuXLabel: '横PPU', ppuYLabel: '縦PPU', viewportWorldLabel: '表示ワールド', fitScaleLabel: '収まる最大倍率', bleedingRiskLabel: 'ブリーディングリスク', lowRisk: '低', mediumRisk: '中', highRisk: '高', riskLowMessage: '軸がそろい、整数の目標倍率が画面に収まっています。それでもフィルターとアトラス余白を確認してください。', riskMediumMessage: '目標は完全には収まりません。軸の差と強調された倍率を確認してください。', riskHighMessage: 'この倍率は不均一なサンプリングを生む可能性があります。整数倍率と画像サイズを確認してください。', alignmentLabel: 'サンプリングメモ', tableTitle: 'アクセシブルな倍率一覧', tableScale: '倍率', tableWidth: '描画幅', tableHeight: '描画高', tableFits: '画面に収まる', modelNote: 'PPUは各軸の描画ピクセル数をワールド単位のサイズで割って計算します。ブリーディングリスクはヒューリスティックであり、テクスチャ検査やエンジンの保証ではありません。', privacyDisclosure: 'ファイルはこのブラウザー内で処理されます。画像、プロジェクト、テレメトリーは送信されません。', statusReady: 'プレビュー更新済み', unitPixels: 'px', unitUnits: 'units',
  },
  seo: [
    { type: 'title', level: 2, text: 'スプライトの大きさを倍率の判断に変える' }, { type: 'paragraph', html: 'スプライトにはビットマップの大きさと、ゲーム世界で占める大きさがあります。PPUはこの2つをつなぎます。プレビューなら抽象的な数字だけでなく見た目を確認できます。' }, { type: 'paragraph', html: '実際の画像を読み込むと、元のサイズが使われます。選んだ倍率から各軸の占有サイズと、指定解像度で見えるワールドを計算します。' }, { type: 'title', level: 2, text: 'プレビューで確認すること' }, { type: 'list', items: ['占有サイズを基準画面と比べる。', '均一なピクセルのため整数倍率を先に試す。', '横と縦のPPUで意図しない伸縮を探す。', 'ブリーディング警告をエンジンテストの合図にする。'] }, { type: 'title', level: 2, text: '整数倍率がきれいに見える理由' }, { type: 'paragraph', html: '3倍なら元の1ピクセルが画面の3ピクセルになります。2.5倍では異なる幅を配分する必要があります。nearestは色の混合を防ぎますが、ピクセル間にあるカメラは直しません。' }, { type: 'table', headers: ['サイン', '意味', '次の判断'], rows: [['PPUが同じ', '両軸の密度が一致しています。', 'タイルとプロジェクトのグリッドを比べる。'], ['小数倍率', '占有サイズが整数でありません。', '最も近い整数倍率を試す。'], ['収まらない', 'スプライトが画面を超えます。', '倍率を下げるか解像度を上げる。']] }, { type: 'title', level: 2, text: 'ブリーディングと大きさを分けて考える' }, { type: 'paragraph', html: 'ピクセルブリーディングは、アトラスの隣接テクセル、境界のフィルター、ずれたカメラ座標から起きます。ぼやけるならフィルター、継ぎ目なら余白と境界も確認します。' }, { type: 'title', level: 2, text: 'Bobのスプライトで流れを学ぶ' }, { type: 'paragraph', html: 'ピンクのリボンを付けたBobが最初から表示されます。解像度と倍率を変え、キャラクターが収まらなくなる点やピクセルの不均一さを確認できます。' }, { type: 'title', level: 2, text: 'このツールが確認する範囲' }, { type: 'paragraph', html: '寸法と占有サイズを管理された表示で比較します。エンジンのプロジェクトやアトラスを検査せず、端末を測定せず、pixel perfectの動作も保証しません。' }, { type: 'title', level: 2, text: '倍率を選ぶ短い手順' }, { type: 'paragraph', html: 'スプライトを読み込み、解像度を選び、1倍から4倍を試します。余白を残す最大の整数倍率を選び、実際の対応解像度でも繰り返します。' }, { type: 'tip', title: '最後はエンジンで確認する', html: 'プレビューで候補を絞り、nearestフィルター、アトラス余白、カメラ位置を確認して、複数の解像度で動きを試してください。' },
  ],
  faqTitle: 'スプライト倍率の質問', faq, bibliographyTitle: 'ピクセルアートの参考資料', bibliography: bibliographyEntries, howTo, schemas: [softwareApplication, faqPage, howToSchema],
};
