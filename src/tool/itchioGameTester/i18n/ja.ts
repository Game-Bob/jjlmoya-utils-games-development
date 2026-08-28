import type { ToolLocaleContent } from '../../../types';
import type { ItchioGameTesterUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<ItchioGameTesterUI> = {
  slug: 'itchio-game-tester',
  title: 'Itch.io ウェブゲームインスペクターとライブ解像度オプティマイザー',
  description: 'HTML5エクスポートファイルまたはZIPアーカイブをアップロードして、ライブでビューポートをテストし、スクロールバーを修正し、GodotおよびUnity WebGLビルドを検査し、Itch.io埋め込み設定を生成します。',
  ui: {
    dropzoneTitle: 'ゲームビルドまたはZIPファイルをここにドロップ',
    dropzoneHint: '.ZIPファイル、エクスポートフォルダー、またはHTML5ビルドファイルをこのエリアにドロップして即座に検査します。',
    chooseFiles: 'ゲームファイルまたはフォルダーを選択',
    engineDetected: '検出されたエンジン',
    compatibilityScore: 'Itch.io互換性スコア',
    viewportWidth: 'ビューポート幅 (px)',
    viewportHeight: 'ビューポート高さ (px)',
    presets: 'クイック解像度プリセット',
    fitTest: 'ライブレイアウトとスクロールバーテスト',
    copySettings: 'Itch.io埋め込み設定をコピー',
    copied: 'クリップボードにコピーしました',
    embedMode: '埋め込みモード',
    scrollbars: 'スクロールバーを有効化',
    noIssuesFound: 'すべてのチェックが完了しました。パッケージはItch.io標準に100%準拠しています。',
    filesInspected: '検査されたファイル',
    resetViewport: 'ビューポートをリセット',
    autoScaleToggle: 'ビューポートを画面幅に自動スケール',
    scaledNotice: 'ビューポートが画面幅を超えています。キャンバス全体が収まるよう人工的なズームアウトが適用されています。実際のレイアウトを確認するには自動スケールを無効にしてください。',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Itch.io HTML5ゲームエクスポートのフォーマットガイドライン'
    },
    {
      type: 'paragraph',
      html: 'Itch.ioでHTML5およびWebGLゲームを公開するには、ビューポートのサイズ、アーカイブのファイル構造、クロスオリジンセキュリティヘッダーの正確な設定が必要です。'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: '標準ウェブアスペクト比', value: '16:9 横向き' },
        { label: 'クラシックItch解像度', value: '960 x 540 px' },
        { label: '必須エントリーファイル', value: 'ルートのindex.html' },
        { label: 'Godot 4の要件', value: 'COOP / COEPヘッダー' }
      ]
    },
    {
      type: 'tip',
      html: '1280x720のWebGLゲームをItch.ioに埋め込む場合、埋め込みビューポートの寸法を正確に1280x720に設定し、"Embed in page"を有効にしてください。'
    },
    {
      type: 'paragraph',
      html: "この項目では、きれいな書き出しと正確なプレビューに必要な確認点をまとめます。 1.",
    },
    {
      type: 'paragraph',
      html: "この項目では、きれいな書き出しと正確なプレビューに必要な確認点をまとめます。 2.",
    },
    {
      type: 'paragraph',
      html: "この項目では、きれいな書き出しと正確なプレビューに必要な確認点をまとめます。 3.",
    },
    {
      type: 'paragraph',
      html: "この項目では、きれいな書き出しと正確なプレビューに必要な確認点をまとめます。 4.",
    },
    {
      type: 'paragraph',
      html: "この項目では、きれいな書き出しと正確なプレビューに必要な確認点をまとめます。 5.",
    },
    { type: 'title', level: 2, text: 'Viewport と canvas を公開前に確認する' },
    { type: 'paragraph', html: 'Itch.ioで予定しているviewportと、実際のcanvasサイズを比較します。16:9の比率だけではスクロールバーを防げません。CSSの余白、最小幅、拡大されないcanvasによって表示がはみ出すことがあります。' },
    { type: 'paragraph', html: 'ビルドごとにレポートを読み直してください。ファイル名、入口となるHTML、エンジンの出力は変わる可能性があります。この検査結果に加えて、複数のブラウザと端末で実際の表示を確認します。' },
  ],
  faq: [
    {
      question: 'Godot 4のゲームがItch.ioで黒い画面を表示するのはなぜですか？',
      answer: 'Godot 4のウェブエクスポートはSharedArrayBufferのサポートを必要とするWebAssemblyマルチスレッディングを使用します。Itch.ioのゲーム編集ページでフレームオプションの"SharedArrayBuffer support"を有効にしてください。'
    },
    {
      question: "公開前にどの設定を確認すればよいですか？ 1",
      answer: "公開前にサイズ、対象環境、プレビューをまとめて確認してください。",
    },
  ],
  howTo: [
    { name: 'ゲームファイルまたはZIPをアップロード', text: 'HTML5エクスポートZIPアーカイブをドラッグ＆ドロップするか、index.htmlを含むビルドディレクトリを選択します。' },
    { name: '互換性レポートを確認', text: 'ルートのindex.htmlの配置、大文字小文字の警告、エンジン検出の自動監査レポートを確認します。' },
    { name: 'ビューポートをライブでリサイズ', text: '解像度スライダーとアスペクト比チップを使用して、スクロールバーなしでiframe埋め込みをライブテストします。' },
    { name: 'Itch.io設定をコピー', text: '設定をコピーをクリックして、Itch.ioゲーム投稿ページ用の正確な幅と高さの値を取得します。' }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Itch.io ウェブゲームインスペクター',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Godot 4のゲームがItch.ioで黒い画面を表示するのはなぜですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Godot 4のウェブエクスポートはSharedArrayBufferのサポートを必要とするWebAssemblyマルチスレッディングを使用します。Itch.ioのゲーム編集ページでフレームオプションの"SharedArrayBuffer support"を有効にしてください。'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Itch.ioのゲームビューポートを監査してテストする方法',
      step: [
        {
          '@type': 'HowToStep',
          name: 'ゲームファイルまたはZIPをアップロード',
          text: 'HTML5エクスポートZIPアーカイブをドラッグ＆ドロップするか、index.htmlを含むビルドディレクトリを選択します。'
        },
        {
          '@type': 'HowToStep',
          name: 'ビューポートをライブでリサイズ',
          text: '解像度スライダーとアスペクト比チップを使用して、スクロールバーなしでiframe埋め込みをライブテストします。'
        }
      ]
    }
  ],
  bibliography: bibliographyEntries
};
