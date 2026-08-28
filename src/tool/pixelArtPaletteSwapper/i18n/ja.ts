import type { ToolLocaleContent } from '../../../types';
import type { PixelArtPaletteSwapperUI } from '../ui';

export const content: ToolLocaleContent<PixelArtPaletteSwapperUI> = {
  slug: 'pixel-art-palette-swapper',
  title: 'ドット絵パレットスワッパー',
  description: 'スプライトやスプライトシートをクラシックなゲーム機のパレットやカスタムカラーにブラウザ上で変換。',
  ui: {
    uploadTitle: 'スプライトをドラッグ＆ドロップ',
    uploadHint: 'PNG、JPEG、WebPをローカル環境で処理します',
    chooseImage: '画像を選択',
    replaceImage: '画像を差し替え',
    paletteTitle: 'パレットを選択',
    gameBoyPalette: 'Game Boy',
    nesPalette: 'NES風',
    pico8Palette: 'PICO-8',
    commodore64Palette: 'Commodore 64',
    dawnBringerPalette: 'DawnBringer 16',
    customPalette: 'カスタムカラー',
    customPaletteHint: 'Hexカラーコードをカンマ、スペース、改行で区切って入力。',
    applyCustomPalette: 'パレットを適用',
    resetCustomPalette: 'リセット',
    sourcePreview: 'オリジナル',
    resultPreview: '変換結果',
    waitingForImage: '画像を選択してください',
    uploadToPreview: '画像をアップロードするとプレビューが表示されます',
    resultEmpty: '元の画像と減色後の画像が左右に並んで表示されます。',
    downloadPng: 'PNGをダウンロード',
    downloadDisabled: '画像をアップロードしてエクスポートを有効化。',
    colorCount: '元の色数',
    mappedCount: '使用色数',
    imageSize: '画像サイズ',
    paletteCount: 'パレット色数',
    preserveAlpha: '透過を維持',
    zoomLabel: 'ズーム',
    processing: 'ピクセルを減色中',
    invalidPalette: '有効なHexカラーコードを入力してください',
    invalidImage: 'PNG、JPEG、WebP形式の画像を選択してください',
    readyStatus: '準備完了',
    dropActive: 'ドロップして読み込み',
    mappedSummary: '{source}色の元画像を{mapped}色のパレットに変換しました',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'ドット絵をレトロゲーム機のカラーパレットに即座に変換',
    },
    {
      type: 'paragraph',
      html: '限られた色数はドット絵にレトロゲーム独特の魅力を与えます。Game Boy、NES、PICO-8などのパレットに一括変換できます。',
    },
    {
      type: 'title',
      level: 2,
      text: '減色処理の仕組み',
    },
    {
      type: 'paragraph',
      html: '各ピクセルのRGB値を解析し、選択されたパレットの中で最も近い色に置き換えます。透明度も保持されます。',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'パレット制限',
          description: '元の色を最も近いパレット色へ変換。',
          points: [
            'スプライトやタイルセットに最適',
            '元の解像度とピクセル位置を維持',
            '使用色数を簡単に管理',
          ],
        },
        {
          title: 'パレットスワップ',
          description: '色違いバージョンを簡単に作成。',
          points: [
            '2Pカラーや属性違いのキャラ作成に',
            '独自のHexカラーリストにも対応',
            '即座にPNGとして書き出し可能',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'レトロパレット比較',
    },
    {
      type: 'table',
      headers: ['パレット', '色数', '特徴', '注意点'],
      rows: [
        ['Game Boy', '4', 'モノクロ携帯ゲーム機風', '明暗差が少ないとディテールが潰れやすい'],
        ['NES風', '16', 'アーケード風の鮮やかな発色', '彩度の高い色の扱いに注意'],
        ['PICO-8', '16', '現代的なポピュラーカラー', '鮮やかな色のコントラストを考慮'],
        ['Commodore 64', '16', 'シックなレトロPCテイスト', '明確なシルエット作りが効果的'],
        ['DawnBringer 16', '16', '汎用性の高い人気パレット', '光源の意識が必要'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'スプライトシートの作業フロー',
    },
    {
      type: 'paragraph',
      html: '画像を読み込み、ズーム機能を使って拡大しながら細部の潰れがないか確認してください。',
    },
    {
      type: 'tip',
      title: '色数えらびのコツ',
      html: '最初は4〜16色程度に抑えると統一感が出やすくなります。',
    },
    {
      type: 'title',
      level: 2,
      text: '書き出し前のチェックリスト',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'ゲームへの組み込み前に',
      html: '原寸サイズで表示を確認し、透過部分に余計なピクセルが入っていないかチェックしましょう。',
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'カラー減色（Quantization）',
          definition: '多くの色で描かれた画像を限られた色数に変換する処理。',
        },
        {
          term: 'パレットランプ（Ramp）',
          definition: '陰影をつけるために段階的に並べられた同系色の系列。',
        },
        {
          term: 'インデックスカラー',
          definition: '各ピクセルがカラーテーブルの番号を参照する形式。',
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'ゲーム内表示でパレットを確認する',
    },
    {
      type: 'paragraph',
      html: 'パレット変換では各ピクセルが最も近い色へ割り当てられるため、元画像の細かな色差は失われます。変換後の画像を原寸表示し、キャラクターの輪郭、影、UIの文字が識別できるかをゲーム内の背景でも確認してください。',
    },
    {
      type: 'paragraph',
      html: '透明度は保持されますが、アルファ値の境界に不要な色が残る場合があります。書き出したPNGを対象エンジンへ読み込み、フィルタリングや拡大率を設定した状態でアトラスの継ぎ目と色のにじみを確認すると安全です。',
    },
  ],
  faq: [
    {
      question: '画像はサーバーに送信されますか？',
      answer: 'いいえ。すべての処理はお使いのブラウザ上でローカルに行われます。',
    },
    {
      question: '自作のパレットを使用できますか？',
      answer: 'はい。Hexコードを入力して「パレットを適用」をクリックしてください。',
    },
    {
      question: '色を置き換える前に元画像を保存できますか？',
      answer: 'はい。処理はブラウザ内で行われるため、元画像を残したまま変換後の PNG を別名で保存できます。'
    },
    {
      question: 'パレットの色数が違っても使えますか？',
      answer: 'はい。入力した色に近いパレット色へ置き換えます。結果をプレビューで確認してから書き出してください。'
    },
  ],
  howTo: [
    {
      name: '画像をロード',
      text: 'PNG、JPEG、WebP画像をドラッグ＆ドロップします。',
    },
    {
      name: 'パレットを選択',
      text: 'プリセットを選択するか、カスタムコードを入力します。',
    },
    {
      name: 'エクスポート',
      text: '変換後のPNGファイルをダウンロードします。',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'ドット絵パレットスワッパー',
      applicationCategory: 'DesignApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '画像はサーバーに送信されますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'いいえ。すべての処理はお使いのブラウザ上でローカルに行われます。',
          },
        },
        {
          '@type': 'Question',
          name: '自作のパレットを使用できますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'はい。Hexコードを入力して「パレットを適用」をクリックしてください。',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'ドット絵をレトロパレットに変換する方法',
      step: [
        { '@type': 'HowToStep', name: '画像をロード', text: '画像をドラッグ＆ドロップします。' },
        { '@type': 'HowToStep', name: 'パレットを選択', text: 'プリセットを選択するかカスタムコードを入力します。' },
        { '@type': 'HowToStep', name: 'エクスポート', text: '変換後のPNGファイルをダウンロードします。' },
      ],
    },
  ],
  bibliography: [
    {
      name: 'MDN Canvas API',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API',
    },
    {
      name: 'Lospec Palette List',
      url: 'https://lospec.com/palette-list',
    },
    {
      name: 'W3C Portable Network Graphics Specification',
      url: 'https://www.w3.org/TR/png-3/',
    },
  ],
};
