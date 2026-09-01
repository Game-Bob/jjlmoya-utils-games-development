import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { IsometricTileMapEditorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const title = 'アイソメトリックタイルマップエディター';
const description = 'ダイヤモンド型グリッドのレイヤー付きマップを描き、タイルの形状を調整してJSONまたはSVGで書き出します。';
const faq = [
  { question: 'アイソメトリックタイルマップとは何ですか？', answer: 'アイソメトリックタイルマップは、2Dのシーンで3D空間を表現するためにひし形のグリッドを使います。列と行が地面の座標を表し、レイヤーが高さの差を加えます。' },
  { question: 'タイルを配置するにはどうしますか？', answer: 'パレットからタイルを選び、描画を選択してアクティブなレイヤーを指定し、ひし形をクリックします。描画中でも右クリックでセルを消去できます。' },
  { question: 'レイヤーの深さは何を変えますか？', answer: 'レイヤーの深さは、重なったレイヤー間の画面上の垂直オフセットです。高い段差には大きくし、レイヤーを近づける場合は小さくします。' },
  { question: '書き出したSVGをゲームエンジンで使えますか？', answer: 'SVGは現在のひし形と色を示す視覚的な資料です。論理グリッドをエンジンで再構築する場合は、行、列、レイヤー、タイル値を保持するJSONが適しています。' },
  { question: 'このエディターで製品用タイルセットを作れますか？', answer: 'いいえ。レイヤー付きグリッドを計画し、簡潔なマップ記述を出力します。テクスチャの分割、衝突設定、エンジン固有のソート、最終アセットの表示は保証しません。' },
];
const howTo = [
  { name: 'グリッド形状を設定する', text: 'タイルの幅と高さ、列、行、レイヤー数を設定します。レイヤーの深さでレベル間の垂直な段差を表します。' },
  { name: '描画レイヤーを選ぶ', text: '描画前にレイヤーを選択します。アクティブなレイヤーは強く縁取りされ、他の表示中のレイヤーは空間を確認できるよう薄く表示されます。' },
  { name: '地面や構造物を描く', text: '草、石、水、道から選び、セルをクリックします。次のセルに別の素材が必要ならパレットを切り替えます。' },
  { name: 'マップを部分的に修正する', text: '消去または右クリックでタイルを取り除きます。グリッドのサイズを変更しても、新しい範囲に残るセルは保持されます。' },
  { name: '計画結果を書き出す', text: '別のツールで再構築する場合はJSONを使い、デザインレビューやレベル案にはSVGを使います。' },
];
const softwareApplication: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, applicationCategory: 'DeveloperApplication', operatingSystem: 'Any' };
const faqPage: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) };

export const content: ToolLocaleContent<IsometricTileMapEditorUI> = {
  slug: 'isometric-tile-map-editor', title, description,
  ui: {
    controlsTitle: 'マップ操作', geometryTitle: 'グリッド形状', tileWidthLabel: 'タイル幅', tileHeightLabel: 'タイル高さ', columnsLabel: '列', rowsLabel: '行', layersLabel: 'レイヤー', layerDepthLabel: 'レイヤー深度', toolsTitle: '描画モード', paintLabel: '描画', eraseLabel: '消去', paletteTitle: 'タイルパレット', grassLabel: '草', stoneLabel: '石', waterLabel: '水', pathLabel: '道', layersTitle: 'アクティブレイヤー', layerLabel: 'レイヤー', hideLayerLabel: '非表示', showLayerLabel: '表示', mapTitle: 'アイソメトリックマップ', mapHelp: 'タイルとレイヤーを選び、ひし形をクリックします。右クリックでセルを消去できます。', mapAriaLabel: '編集可能なアイソメトリックタイルマップ', summaryTitle: 'マップ情報', filledLabel: '塗りつぶしセル', coverageLabel: 'カバー率', activeLayerLabel: 'アクティブレイヤー', selectedLabel: '選択中のタイル', emptyCellLabel: '空', cellLabel: 'セル', clearLabel: 'マップを消去', resetLabel: '形状をリセット', exportJsonLabel: 'JSONを書き出す', exportSvgLabel: 'SVGを書き出す', statusReady: '描画の準備完了', statusSaved: 'ローカルに保存しました', statusCleared: 'マップを消去しました', statusReset: '形状をリセットしました', statusExported: 'ファイルを書き出しました', statusPainted: 'タイルを配置しました', statusErased: 'タイルを消去しました', statusLayerHidden: 'レイヤーを非表示にしました', statusLayerShown: 'レイヤーを表示しました', legendTitle: 'マップの凡例', legendEmpty: '空のセル', legendFilled: '描画済みセル', modelNote: 'このエディターは論理的なレイヤー付きグリッドを記述します。タイルセットの読み込み、衝突計算、エンジン固有のソート、最終的なピクセル位置の保証は行いません。', privacyDisclosure: 'マップはこのブラウザー内に保存されます。マップデータや利用状況は送信されません。',
  },
  seo: [
    { type: 'title', level: 2, text: 'アイソメトリックグリッドで空間と高さを計画する' },
    { type: 'paragraph', html: 'アイソメトリックマップは、完全な3Dシーンにせず、地面の位置と高さを読みやすくしたいレベルで役立ちます。ひし形のグリッドは行と列の移動を見せ、レイヤーは橋、足場、屋根、重なった部屋を簡潔に計画できます。' },
    { type: 'paragraph', html: 'このエディターでは形状を明示できます。タイルの幅と高さがひし形を決め、列と行が地面の範囲を決め、レイヤー深度が追加レベルの上方向への移動量を決めます。サイズを変更しても範囲内のセルは残ります。' },
    { type: 'title', level: 2, text: '役立つブロックアウトを5段階で作る' },
    { type: 'list', items: ['プロジェクトの画面表現に合わせてタイルの比率を調整します。', '移動できる範囲を読みやすくするため、最初に地面の素材を描きます。', '橋、屋根、高い足場にはレイヤーを使い、高さを色だけで表さないようにします。', '上のレイヤーを非表示にするか消去モードに切り替え、下のセルを安全に修正します。', '再構築にはJSON、視覚的な確認にはSVGを書き出します。'] },
    { type: 'title', level: 2, text: '行、列、レイヤーを分けて読む' },
    { type: 'paragraph', html: '行と列は論理平面上のセルの位置を表し、ひし形の見た目のサイズが変わっても安定しているべきです。レイヤーは2つ目の座標で、同じ行と列でも異なる高さにセルを置けます。この分離によりエンジンでの再構築が簡単になります。' },
    { type: 'table', headers: ['状態', '意味', '次に行う判断'], rows: [['カバー率が低い', '空のセルが多く残っています。', '装飾の前にプレイ可能な範囲を決めます。'], ['同じ列に複数レイヤー', 'マップに重なった空間があります。', 'ソートと衝突が高さを区別できるか確認します。'], ['ひし形が広すぎる', '横方向の移動が強調されています。', 'タイル幅を減らすか基準ビューポートを広げます。'], ['レイヤーの段差が深い', '高さの変化が強く見えます。', 'レイヤーを減らすかアセットの高さ表現を確認します。']] },
    { type: 'title', level: 2, text: '次の作業に合う書き出しを選ぶ' },
    { type: 'paragraph', html: 'JSONは構造化された受け渡しです。形状、レイヤー数、描画状態、各タイル値を保持します。SVGは表示用の受け渡しで、色付きのひし形をレビューやレベル案に使えます。どちらにも元のタイルセットやエンジンのメタデータは含まれません。' },
    { type: 'tip', title: 'このブロックアウトで証明できないこと', html: 'ひし形のマップが整っていても、スプライトのソート、異なる高さへの移動、タイルセットの継ぎ目のない接続までは証明できません。実際のアセット、衝突、ソート軸、カメラを対象エンジンで確認してください。' },
  ],
  faqTitle: 'アイソメトリックタイルマップの質問', faq, bibliographyTitle: 'タイルマップの参考資料', bibliography: bibliographyEntries, howTo, schemas: [softwareApplication, faqPage, howToSchema],
};
