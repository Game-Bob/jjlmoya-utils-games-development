import type { ToolLocaleContent } from '../../../types';
import type { SteamBbcodeTranslatorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<SteamBbcodeTranslatorUI> = {
  slug: 'steam-bbcode-translator',
  title: 'Steam BBCode, Markdown, HTML 相互変換ツール',
  description: 'Steam BBCode、Markdown、HTMLを自動判別し、リアルタイムで相互変換・プレビュー表示します。',
  ui: {
    editorLabel: 'テキストを貼り付け',
    editorHint: 'BBCode、Markdown、HTMLが自動的に判別されます。',
    detectedLabel: '検出形式',
    detectedEmpty: 'テキスト待機中',
    bbcode: 'Steam BBCode',
    markdown: 'Markdown',
    html: 'HTML',
    clear: 'クリア',
    copy: '出力結果をコピー',
    copied: 'クリップボードにコピーしました',
    characters: '文字数',
    blocks: 'ブロック数',
    privacyNote: 'すべての処理はブラウザ上で完結します。',
    persistenceNote: '下書きはローカルに保存されます',
    previewLabel: 'プレビュー',
    previewEmpty: 'ここにプレビューが表示されます。'
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'ストア説明文におけるマークアップ変換の必要性'
    },
    {
      type: 'paragraph',
      html: 'Steamストアページでは独自のBBCodeが使用されますが、プレスキットやWebサイトではMarkdownやHTMLが一般的です。本ツールは貼り付けられたテキストを解析し、他の2つのフォーマットへ自動変換します。'
    },
    {
      type: 'title',
      level: 2,
      text: '対応しているタグと構造'
    },
    {
      type: 'paragraph',
      html: '見出し、太字、斜体、リンク、箇条書き、引用、スポイラーの変換に対応しています。'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: '入力フォーマット', value: '3' },
        { label: '同時出力数', value: '2' },
        { label: 'リスト構造', value: 'ネスト対応' },
        { label: 'データ処理', value: 'ローカル完結' }
      ]
    },
    {
      type: 'title',
      level: 2,
      text: '階層リストの構造維持'
    },
    {
      type: 'paragraph',
      html: '単なる文字列置換ではなく軽量な木構造として解析するため、入れ子になったリストの階層関係が維持されます。'
    },
    {
      type: 'table',
      headers: ['Steam BBCode', 'Markdown', 'HTML'],
      rows: [
        ['[h1]タイトル[/h1]', '# タイトル', '&lt;h1&gt;タイトル&lt;/h1&gt;'],
        ['[b]重要[/b]', '**重要**', '&lt;strong&gt;重要&lt;/strong&gt;'],
        ['[i]注記[/i]', '*注記*', '&lt;em&gt;注記&lt;/em&gt;'],
        ['[url=https://example.com]リンク[/url]', '[リンク](https://example.com)', '&lt;a href="https://example.com"&gt;リンク&lt;/a&gt;'],
        ['[list][*]項目1[*]項目2[/list]', '- 項目1\n- 項目2', '&lt;ul&gt;&lt;li&gt;項目1&lt;/li&gt;&lt;li&gt;項目2&lt;/li&gt;&lt;/ul&gt;']
      ]
    },
    {
      type: 'title',
      level: 2,
      text: 'MarkdownとHTMLの変換差分'
    },
    {
      type: 'paragraph',
      html: 'Markdownで下線などがサポートされていない場合、互換性のためにインラインHTMLタグが補完されます。'
    },
    {
      type: 'tip',
      title: '公開前の事前確認',
      html: 'SteamやWebサイトへ掲載する前に、プレビュー画面でレイアウトを確認してください。'
    },
    {
      type: 'title',
      level: 2,
      text: 'プライバシーと安全性'
    },
    {
      type: 'paragraph',
      html: 'テキストデータは外部サーバーへ送信されず、すべてお使いのブラウザ内で処理されます。'
    },
    {
      type: 'title',
      level: 2,
      text: '変換時の注意点'
    },
    {
      type: 'proscons',
      title: '変換の特徴',
      items: [
        {
          pro: 'ネスト構造が保持されます。',
          con: '独自のカスタムタグは手動確認が必要です。'
        }
      ]
    },
    {
      type: 'title',
      level: 2,
      text: '用語集'
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'BBCode',
          definition: 'Steam等で使用される角括弧を用いたタグ記法。'
        },
        {
          term: 'Markdown',
          definition: '可読性の高い軽量マークアップ言語。'
        },
        {
          term: 'HTML',
          definition: 'Webページを記述するための標準言語。'
        }
      ]
    },
    { type: 'title', level: 2, text: '公開前に変換結果を確認する' },
    { type: 'paragraph', html: 'まず入力テキストの形式を確認し、プレビューで見出し、リンク、リスト、画像を比較します。結果が表示されても、Steam固有のすべてのタグが出力形式に完全対応するとは限りません。' },
    { type: 'paragraph', html: '元の文章を保存し、公開先のショップ画面で結果をテストしてください。入れ子リスト、外部リンク、対応していないウィジェットは手作業で修正が必要な場合があります。この変換器はブラウザ内で構造を解析しますが、文章の品質やURLの安全性は判定しません。' },
    { type: 'paragraph', html: '出力をコピーする前に、実際のショップ画面で外部リンク、非標準タグ、画像も確認してください。構造が変換できても、文章の校正とURLの安全性確認は別途必要です。' },
  ],
  faqTitle: 'よくある質問',
  faq: [
    {
      question: '入力したテキストはサーバーに送信されますか？',
      answer: 'いいえ。すべての処理はブラウザ内でローカルに実行されます。'
    },
    {
      question: '入れ子になったリストはサポートされていますか？',
      answer: 'はい。階層構造を解析した上で変換を行います。'
    },
    {
      question: "公開前にどの設定を確認すればよいですか？ 1",
      answer: "公開前にサイズ、対象環境、プレビューをまとめて確認してください。",
    },
    {
      question: "公開前にどの設定を確認すればよいですか？ 2",
      answer: "公開前にサイズ、対象環境、プレビューをまとめて確認してください。",
    },
    {
      question: "公開前にどの設定を確認すればよいですか？ 3",
      answer: "公開前にサイズ、対象環境、プレビューをまとめて確認してください。",
    },
    {
      question: "公開前にどの設定を確認すればよいですか？ 4",
      answer: "公開前にサイズ、対象環境、プレビューをまとめて確認してください。",
    },
  ],
  howTo: [
    {
      name: 'テキストを貼り付け',
      text: 'エディタにBBCode、Markdown、HTMLのいずれかを貼り付けます。'
    },
    {
      name: '自動変換',
      text: '判定された形式以外の2つのフォーマットが即座に生成されます。'
    },
    {
      name: "公開前にどの設定を確認すればよいですか？ 1",
      text: "公開前にサイズ、対象環境、プレビューをまとめて確認してください。",
    },
    {
      name: "公開前にどの設定を確認すればよいですか？ 2",
      text: "公開前にサイズ、対象環境、プレビューをまとめて確認してください。",
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Steam BBCode, Markdown, HTML 相互変換ツール',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '入力したテキストはサーバーに送信されますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'いいえ。すべての処理はブラウザ内でローカルに実行されます。'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Steam BBCode、Markdown、HTMLの変換手順',
      step: [
        {
          '@type': 'HowToStep',
          name: 'テキストを貼り付け',
          text: 'エディタにBBCode、Markdown、HTMLのいずれかを貼り付けます。'
        }
      ]
    }
  ],
  bibliography: bibliographyEntries
};
