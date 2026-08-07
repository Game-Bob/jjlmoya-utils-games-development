import type { ToolLocaleContent } from '../../../types';
import type { SpriteSheetPackerUI } from '../ui';

export const content: ToolLocaleContent<SpriteSheetPackerUI> = {
  slug: 'sprite-sheet-packer',
  title: 'スプライトシートパッカー & エクストラクター',
  description:
    '個別のアニメーションフレームをテクスチャアトラスにパッキング、または既存のスプライトシートから画像を抽出して2Dゲームの描画負荷を最適化します。',
  ui: {
    packerTab: 'パッカースタジオ',
    extractorTab: 'スプライト抽出器',
    dropZoneTitle: 'フレーム画像をドラッグ＆ドロップ',
    dropZoneSubtitle: 'PNGまたはWebP画像をアップロードして最適なテクスチャアトラスを生成',
    selectFilesButton: '画像ファイルを選択',
    clearAllButton: 'ワークスペースをクリア',
    downloadZipButton: 'パッケージをダウンロード (ZIP)',
    copyJsonButton: 'アトラスJSONをコピー',
    downloadSheetPngButton: 'テクスチャPNGをダウンロード',
    paddingLabel: 'フレーム間隔 (px)',
    borderExtrusionLabel: '境界パディング (px)',
    maxTextureSizeLabel: '最大テクスチャサイズ',
    powerOfTwoLabel: '2の累乗サイズを強制 (POT)',
    trimTransparencyLabel: '透明領域をトリミング',
    exportFormatLabel: '出力エンジンフォーマット',
    presetPixelArt: 'ドット絵 16x16 プリセット',
    presetHdUi: 'HD UI アトラス 1024 プリセット',
    presetMobile: 'モバイル WebGL 2048 プリセット',
    formatGenericHash: '汎用 JSON (Hash)',
    formatGenericArray: '汎用 JSON (Array)',
    formatUnity: 'Unity 2D エンジン',
    formatGodot: 'Godot 2D エンジン',
    formatPhaser: 'Phaser / PixiJS エンジン',
    formatCss: 'Web フロントエンド CSS',
    previewTitle: 'テクスチャアトラス プレビュー',
    efficiencyBadge: 'テクスチャ充填率',
    drawCallsBadge: 'ドローコール削減数',
    totalFramesBadge: 'パッキング済フレーム数',
    textureSizeBadge: 'アトラス解像度',
    flipbookTitle: 'アニメーションパラパラマンガ',
    flipbookFpsLabel: '再生速度 (FPS)',
    playAnimation: '再生開始',
    pauseAnimation: '一時停止',
    extractorModeGrid: '固定グリッド分割',
    extractorModeAlpha: '自動アルファチャンネル分割',
    frameWidthLabel: 'フレーム幅 (px)',
    frameHeightLabel: 'フレーム高さ (px)',
    marginLabel: 'マージンオフセット (px)',
    spacingLabel: 'グリッド間隔 (px)',
    extractFramesButton: '画像を抽出',
    extractedCountLabel: '抽出されたスプライト数',
    codeSnippetTitle: 'エンジン組み込みコード',
    copySnippetButton: 'コードをコピー',
    copiedToast: 'クリップボードにコピーしました',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: '2Dゲームエンジンにおけるドローコール最適化とGPUバッチ処理',
    },
    {
      type: 'paragraph',
      html: '現代の2Dグラフィックス描画処理では、個別の画像ファイルを1枚のテクスチャアトラスにパッキングすることで、CPUからGPUへ送られる描画命令（ドローコール）を大幅に削減できます。',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '95%', label: 'ドローコール削減率' },
        { value: '4x', label: 'GPUバッチ処理の高速化' },
        { value: '60 FPS', label: 'モバイル環境での目標値' },
        { value: '100%', label: 'ブラウザ内ローカル処理' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: '個別画像ファイルと結合済みテクスチャアトラスの比較',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'バラバラの画像ファイル',
          description: '個別に保存されたPNGおよびWebPファイル',
          points: [
            '画面上の各フレームごとに個別の描画命令が発生する',
            'グラフィックカードのコンテキストスイッチが頻繁に起こる',
            'Webゲームにおいて通信リクエスト数が増加する',
            'モバイル端末でのフレームレートが低下しやすい',
          ],
        },
        {
          title: '結合済みテクスチャアトラス',
          description: 'メタデータJSONが付属する単一のテクスチャ画像',
          points: [
            '数百個のスプライトを単一のドローコールでまとめて描写できる',
            'GPUのメモリ帯域幅とレンダリング速度を最大限に活用できる',
            '画像とメタデータをまとめることでファイル取得処理を高速化する',
            'あらゆるゲームエンジンで滑らかな動作を実現する',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'サブピクセルカメラ移動と境界拡張パディング',
    },
    {
      type: 'paragraph',
      html: 'カメラ移動時の境界滲みを防ぐため、境界ピクセルを外側に1〜2ピクセル拡張複製する処理（Border Extrusion）が極めて有効です。',
    },
    {
      type: 'tip',
      title: '境界拡張パディングの最適化戦略',
      html: 'カメラ移動やズーム時の視覚的ノイズを完全に防止するため、パッキング時に1〜2ピクセルの境界拡張を設定してください。',
    },
    {
      type: 'title',
      level: 2,
      text: 'モバイルおよびPC向けテクスチャ解像度ガイドライン',
    },
    {
      type: 'table',
      headers: ['対象プラットフォーム', '推奨最大サイズ', '2の累乗要件', 'メモリプロファイル'],
      rows: [
        ['モバイルブラウザ', '2048 x 2048 px', 'WebGL 1.0で必須', '低メモリ帯域'],
        ['デスクトップPC / コンソール', '4096 x 4096 px', '推奨', '高GPU容量'],
        ['レトロ小型ゲーム機', '1024 x 1024 px', '必須', '厳格なVRAM制限'],
      ],
    },
    {
      type: 'proscons',
      items: [
        {
          pro: '旧世代のグラフィックドライバやWebGL 1.0との完全な互換性を保証する',
          con: '画像枚数が少ない場合に余白が残る可能性がある',
        },
        {
          pro: 'ハードウェアによる自動ミップマップ生成をサポートする',
          con: '複雑な形状の画像では余白設定に微調整が必要',
        },
        {
          pro: 'GPUのVRAM割り当てを効率化できる',
          con: '初期テクスチャ領域がわずかに増加する',
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'スプライトパッキングの主要用語解説',
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'ドローコール (Draw Call)',
          definition: 'CPUがGPUに対して画像やポリゴンを描画するよう送る指示のこと。',
        },
        {
          term: 'ビンパッキング (Bin Packing)',
          definition: '様々なサイズの長方形を最小限の領域に詰める計算手法のこと。',
        },
        {
          term: '境界パディング (Border Extrusion)',
          definition: 'テクスチャの端のピクセルを外側に伸ばし境界ノイズを防ぐ処理。',
        },
        {
          term: 'パラパラマンガ (Flipbook Animation)',
          definition: '静止画を高速で切り替えて滑らかな動きを表現するアニメーション手法。',
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'パフォーマンス点検リスト',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '開発運用ルール',
      html: 'アニメーションは共通アトラスにまとめ、WebGL出力時は2の累乗サイズを選択してください。',
    },
  ],
  faq: [
    {
      question: 'スプライトシートとは何ですか？なぜ2Dゲームに必要なのですか？',
      answer:
        'スプライトシートは複数のアニメーション画像を1枚にまとめたテクスチャファイルです。まとめにすることでGPUへの描画命令数を削減し、ゲームを高速化できます。',
    },
    {
      question: 'このツールの処理はどのように行われますか？',
      answer:
        'すべての画像処理はお使いのブラウザ内部のHTML5 Canvas機能で行われます。外部サーバーに画像データが送信されることは一切ありません。',
    },
    {
      question: '既存のスプライトシートから画像を分割できますか？',
      answer:
        'はい。抽出モードに切り替えて画像をアップロードし、分割サイズを指定することで個別画像を一括抽出できます。',
    },
  ],
  howTo: [
    {
      name: '画像をアップロード',
      text: 'ドロップエリアにアニメーションフレーム画像を追加します。',
    },
    {
      name: '設定を調整',
      text: 'パディングや最大サイズ、出力先のゲームエンジンを選択します。',
    },
    {
      name: 'プレビューして保存',
      text: 'パラパラマンガで動きを確認した後、ZIPファイルで保存します。',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'スプライトシートパッカー & エクストラクター',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'スプライトシートとは何ですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'スプライトシートは複数のアニメーション画像を1枚にまとめたテクスチャファイルです。',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'スプライトシートの作成と分割方法',
      step: [
        {
          '@type': 'HowToStep',
          name: '画像をアップロード',
          text: 'ドロップエリアにアニメーションフレーム画像を追加します。',
        },
      ],
    },
  ],
  bibliography: [
    {
      name: 'Godot Engine 2D Sprite Sheets Documentation',
      url: 'https://docs.godotengine.org/en/stable/tutorials/2d/2d_sprite_animation.html',
    },
    {
      name: 'Unity Sprite Atlas Manual',
      url: 'https://docs.unity3d.com/Manual/class-SpriteAtlas.html',
    },
  ],
};
