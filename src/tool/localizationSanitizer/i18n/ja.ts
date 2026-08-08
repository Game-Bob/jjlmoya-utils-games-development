import type { ToolLocaleContent } from '../../../types';
import type { LocalizationSanitizerUI } from '../ui';

export const content: ToolLocaleContent<LocalizationSanitizerUI> = {
  slug: 'localization-sanitizer',
  title: 'GodotおよびUnityローカライズCSV整形ツール',
  description: '翻訳CSVやJSONファイルの空セル、重複キー、壊れた行を検査し、ゲームエンジンに最適化されたクリーンなファイルをエクスポートします。',
  ui: {
    csvTab: 'CSVファイル',
    jsonTab: 'JSONファイル',
    dropTitle: '翻訳ファイルをドロップしてください',
    dropSubtitle: 'ブラウザ上で構造を検証し、元ファイルはローカルに保持されます。',
    browseButton: 'ファイルを選択',
    sampleButton: 'サンプルを読み込む',
    clearButton: 'クリア',
    inputLabel: '翻訳ファイル入力',
    formatLabel: 'フォーマット',
    healthLabel: 'ファイルの状態',
    readyStatus: 'インポート準備完了',
    reviewStatus: '要確認',
    emptyCellsLabel: '空セル',
    duplicateKeysLabel: '重複キー',
    malformedRowsLabel: '破損行',
    cleanRowsLabel: '正常行',
    issueListTitle: '検出項目',
    noIssues: '問題は見つかりませんでした。',
    previewTitle: '翻訳プレビュー',
    previewSubtitle: '最初の数行にエクスポートされる正規化済み構造が表示されます。',
    exportTitle: 'クリーンファイルをエクスポート',
    exportSubtitle: '重複キーを排除し、不足列を補完してCSVエスケープを行います。',
    downloadButton: 'クリーンファイルをダウンロード',
    copyButton: '出力結果をコピー',
    copiedMessage: 'クリーンな出力をクリップボードにコピーしました。',
    emptyIssue: '空の翻訳セル',
    duplicateIssue: '重複キーを除去',
    malformedIssue: '列数または引用符の不一致',
    parseIssue: 'ファイルを解析できませんでした。',
    rowLabel: '行',
    columnLabel: '列',
    keyLabel: 'キー',
    sampleFileName: 'localization-sample.csv',
    privacyNote: 'ローカルブラウザ処理',
    waitingTitle: 'ファイルを待機中',
    waitingSubtitle: 'CSVまたはJSONファイルをドロップして検査を開始します。',
    fileTypeNote: 'UTF8 CSVまたは構造化JSON',
  },
  seo: [
    { type: 'title', level: 2, text: 'エンジンインポート時にローカライズファイルが破損する理由' },
    {
      type: 'paragraph',
      html: '翻訳テーブルは編集が容易ですがフォーマットエラーが発生しやすい特徴があります。エスケープされていないカンマや引用符の欠落があると、列がずれ言語が乱れる原因になります。',
    },
    {
      type: 'paragraph',
      html: 'GodotやUnity Localizationは厳格なCSV構造を要求します。本ツールはインポート前に整合性をチェックし、安全なファイルを生成します。',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'CSV', label: 'カンマ検証' },
        { value: 'JSON', label: '配列/マップ対応' },
        { value: '0 アップロード', label: '完全ローカル処理' },
        { value: '1 クリック', label: '整形エクスポート' },
      ],
    },
    { type: 'title', level: 2, text: '主なチェック機能' },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'インポート前の問題検出',
          description: '手動では見落としやすいエラー',
          points: ['未翻訳の空セル', '重複する翻訳キー', '列数が合わない破損行', '不正な引用符構文'],
        },
        {
          title: 'エクスポート時の正規化',
          description: '自動補正処理',
          points: ['足りない列のパディング', '余分な列の結合処理', '最初の重複キーの保持', '元ファイルの保護'],
        },
      ],
    },
    { type: 'title', level: 2, text: 'クリーンファイルの確認方法' },
    {
      type: 'paragraph',
      html: '構造チェックは翻訳精度の確認ではありません。検出リストを参考に未翻訳部分を埋めてください。',
    },
    {
      type: 'table',
      headers: ['検出項目', '意味', '推奨される対応'],
      rows: [
        ['空セル', '言語列が空です', '翻訳を入力するか意図的な空値か確認'],
        ['重複キー', '同じキーが複数存在します', '内容を確認して最初の行を採用'],
        ['破損行', 'ヘッダーと列数が一致しません', '結合された最終列を確認'],
        ['解析エラー', 'JSON構文エラー', 'インポート前にJSONを修正'],
      ],
    },
    { type: 'title', level: 2, text: 'ゲーム開発におけるCSVルール' },
    {
      type: 'paragraph',
      html: 'カンマや改行を含む文字列はダブルクォーテーションで囲む必要があります。',
    },
    {
      type: 'tip',
      title: 'オリジナルファイルを保管',
      html: '作業前に必ず翻訳者から受け取った元ファイルのバックアップを取ってください。',
    },
    {
      type: 'glossary',
      items: [
        { term: '翻訳キー', definition: 'ゲームコードから参照される文字列識別子。' },
        { term: 'CSVフィールド', definition: '区切り文字間の個別の値。' },
        { term: 'エスケープ', definition: '記号をテキストとして保持するための引用処理。' },
        { term: 'ロケール', definition: 'jaやenなどの言語/地域識別コード。' },
      ],
    },
  ],
  faq: [
    {
      question: 'ファイルは外部サーバーに送信されますか？',
      answer: 'いいえ、すべての処理はブラウザのメモリ内だけで行われます。',
    },
    {
      question: 'CSVに余分なカンマがある場合はどうなりますか？',
      answer: '破損行としてフラグが立てられ、余分なフィールドは最後の列に結合されます。',
    },
    {
      question: '重複キーはどのように処理されますか？',
      answer: '最初に出現した行が保持され、それ以降の重複行は除外されます。',
    },
    {
      question: '翻訳の品質チェックも行えますか？',
      answer: 'いいえ、本ツールはファイル構造と空セルの検証のみを行います。',
    },
  ],
  howTo: [
    { name: 'フォーマットを選択', text: 'CSVまたはJSONを選択します。' },
    { name: '検出結果を確認', text: 'ファイルをドロップしてエラー一覧を確認します。' },
    { name: 'エクスポートとテスト', text: '整形済みファイルをダウンロードしてゲームエンジンでテストします。' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'GodotおよびUnityローカライズCSV整形ツール',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [{
        '@type': 'Question',
        name: 'ファイルは外部サーバーに送信されますか？',
        acceptedAnswer: { '@type': 'Answer', text: 'いいえ、すべての処理はブラウザのメモリ内だけで行われます。' },
      }],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'ローカライズファイルの整形手順',
      step: [
        { '@type': 'HowToStep', name: 'フォーマットを選択', text: 'CSVまたはJSONを選択します。' },
        { '@type': 'HowToStep', name: '検出結果を確認', text: 'ファイルをドロップしてエラー一覧を確認します。' },
        { '@type': 'HowToStep', name: 'エクスポートとテスト', text: '整形済みファイルをダウンロードしてゲームエンジンでテストします。' },
      ],
    },
  ],
  bibliography: [
    { name: 'Godot ResourceImporterCSVTranslation ドキュメント', url: 'https://docs.godotengine.org/en/stable/classes/class_resourceimportercsvtranslation.html' },
    { name: 'Unity Localization CSV インポート ドキュメント', url: 'https://docs.unity3d.com/Packages/com.unity.localization@1.5/manual/CSV.html' },
    { name: 'RFC 4180 CSV 仕様', url: 'https://datatracker.ietf.org/doc/html/rfc4180' },
  ],
};
