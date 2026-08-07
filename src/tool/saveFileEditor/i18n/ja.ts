import type { ToolLocaleContent } from '../../../types';
import type { SaveFileEditorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<SaveFileEditorUI> = {
  slug: 'game-save-file-editor',
  title: 'ゲームセーブファイル難読化およびエディタ',
  description: 'ブラウザ内で完全ローカルにBase64、XORマスク、またはプレーンテキストを使用してゲームセーブデータを複合、検査、編集、再暗号化します。',
  ui: {
    title: 'ゲームセーブデータ難読化およびエディタ',
    subtitle: 'サーバーへデータを送信せず安全にローカルセーブデータを検証、編集、暗号化',
    dropSaveFile: 'ここにセーブファイルをドラッグアンドドロップ',
    orSelectFile: 'またはクリックしてローカルファイルを選択',
    encryptionMethod: '暗号化形式',
    methodBase64: 'Base64エンコード',
    methodXor: 'XORマスク + Base64',
    methodRaw: 'プレーンJSON / 非暗号化',
    xorKeyLabel: 'XORシークレットキー',
    xorKeyPlaceholder: '例: MySecretGameKey2026',
    jsonRawTitle: 'デコード済みJSONペイロード（ライブエディタ）',
    encodeAndDownload: '暗号化してファイルをダウンロード',
    copyEncoded: '暗号化テキストをコピー',
    copiedNotice: 'クリップボードにコピーしました！',
    decodedKeysCount: '総パラメータ数',
    dataSize: 'ペイロードサイズ',
    detectedFormat: '検出された形式',
    exportPreviewLabel: '暗号化出力プレビュー',
    decodePanelTitle: 'デコードおよびライブJSONエディタ',
    exportPanelTitle: '再暗号化出力ペイロード',
    decodeError: 'セーブファイルのデコードに失敗しました',
    bytesUnit: 'バイト',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'ゲームセーブファイルのセキュリティと難読化プロトコル',
    },
    {
      type: 'paragraph',
      html: 'ゲーム開発において、プレイヤーの進行状況やインベントリ数、解放されたステージ、キャラクター属性などのゲーム状態は、永続的なストレージ形式にシリアライズされて保存されます。一般的なテキストエディタによる不正な改ざんを防ぐため、開発スタジオはBase64エンコードや特定のシークレットキーを使用したビット演算XORマスクを用いてセーブデータを難読化します。内部QAテストや運用中のデバッグ作業において、開発チームはバイナリを再コンパイルすることなく、生のJSON構造を検査し、境界値をテストし、変更されたデータを迅速に再暗号化するツールを必要とします。',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'クライアント処理プライバシー', value: '100% ローカル' },
        { label: '対応デコーダー', value: 'Base64 / XOR / JSON' },
        { label: 'デコードレイテンシ', value: '0 ms' },
        { label: 'データ漏洩リスク', value: 'ゼロ' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: '難読化スキームの比較',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Base64エンコード',
          description: 'メモ帳での直接編集を防ぐ軽量な文字列変換ですが、暗号的なセキュリティは提供しません。',
        },
        {
          title: 'XORマスク + Base64',
          description: 'インディーゲーム開発の標準的な手法。シークレットキーとバイト列を演算しメモリ改ざんを防ぎます。',
        },
        {
          title: 'プレーンJSONペイロード',
          description: '非暗号化の読解可能な状態。初期プロトタイピングやデバッグビルドに最適です。',
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'セーブ状態検証のためのQAテスト手法',
    },
    {
      type: 'tip',
      title: 'QAにおけるセーブセキュリティのベストプラクティス',
      html: '内部ビルドと本番ビルドで常に異なるデバッグキーを使用してください。限界値のバグを検証する際はローカルツリーエディタを活用し、再コンパイルなしでテストを行ってください。',
    },
    {
      type: 'title',
      level: 2,
      text: 'ゲーム状態パラメータガイドライン表',
    },
    {
      type: 'table',
      headers: ['データ型', '推奨形式', '一般的な用途', '難読化層'],
      rows: [
        ['数値整数', '32ビット整数', 'コイン、レベル、経験値、弾薬', 'XORマスク'],
        ['ブーリアンフラグ', '標準ブーリアン', 'チュートリアル完了、ボス撃破', 'Base64 / XOR'],
        ['ネストされたオブジェクト', 'JSON階層', 'インベントリ、スキルツリー', 'Base64エンコード'],
        ['タイムスタンプ文字列', 'ISO 8601 UTC', 'デイリーログイン、保存日時', 'XORマスク'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'リバースエンジニアリングと不正改ざん対策の考慮事項',
    },
    {
      type: 'paragraph',
      html: 'クライアント側での難読化は一般的なユーザーによる改ざんを抑止しますが、XOR演算やBase64は完全な暗号化アルゴリズムではありません。RenderDocやx64dbgなどのデバッグツールを使用すると、コンパイルされたアセンブリから生成ルーチンを解析される可能性があります。競争的なマルチプレイヤーゲームでは、サーバー側での検証やHMAC署名によるハッシュ検証を併用することが推奨されます。',
    },
  ],
  faqTitle: 'よくある質問',
  faq: [
    {
      question: 'セーブファイルが外部サーバーにアップロードされることはありますか？',
      answer: 'いいえ。すべてのデコード、JSON編集、再暗号化処理は100%お使いのWebブラウザのJavaScriptエンジン内でローカルに実行されます。',
    },
    {
      question: 'UnityやGodotなどのゲームエンジンでXOR難読化はどのように機能しますか？',
      answer: 'シリアライズされたJSON文字列のUTF-8バイト列に対して、指定されたシークレットキーの各文字とビット演算XORを実行し、その結果をBase64化します。',
    },
  ],
  howTo: [
    {
      name: 'セーブファイルの読み込みまたは貼り付け',
      text: '暗号化されたセーブファイルをアップロードするか、サンプルプリセットを選択します。',
    },
    {
      name: 'デコード方法とキーの選択',
      text: 'Base64またはXORマスクを選択し、ゲームのシークレットキーを入力してデコードします。',
    },
    {
      name: 'JSON状態の編集',
      text: 'ライブエディタを使用してレベル、所持金、アイテム、ゲームフラグを自由に編集します。',
    },
    {
      name: '暗号化とエクスポート',
      text: '出力形式を選択し、テスト用に更新されたセーブファイルをダウンロードします。',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'ゲームセーブファイルエディタ',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'JPY',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'セーブファイルが外部サーバーにアップロードされることはありますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'いいえ。すべての処理は100%ブラウザ内で完了します。',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: '暗号化されたゲームセーブファイルを編集する方法',
      step: [
        {
          '@type': 'HowToStep',
          name: 'セーブファイルの読み込み',
          text: '暗号化されたセーブファイルをアップロードします。',
        },
      ],
    },
  ],
  bibliographyTitle: '参考文献および関連資料',
  bibliography: bibliographyEntries,
};
