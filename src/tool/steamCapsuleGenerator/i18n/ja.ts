import type { ToolLocaleContent } from '../../../types';
import type { SteamCapsuleGeneratorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<SteamCapsuleGeneratorUI> = {
  slug: 'steam-capsule-generator',
  title: 'Steamカプセル＆アートプレビュージェネレーター',
  description: 'Steamストアおよびライブラリ用の公式カプセル画像をトリミング、プレビュー、フォーマットし、セーフゾーンを検証します。',
  ui: {
    uploadTitle: 'ゲームアートワークをアップロード',
    uploadHint: '高解像度のキービジュアルをアップロードしてください（推奨 3840x1240 px 以上）。',
    chooseFile: 'ファイルを選択',
    minimumSize: '推奨最小サイズ：1920x1080 px',
    horizontalFocus: '水平フォーカス (X)',
    verticalFocus: '垂直フォーカス (Y)',
    zoomLevel: 'ズーム倍率',
    resetFocus: 'フォーカスをリセット',
    safeZone: 'セーフゾーン表示',
    downloadZip: '全アセットをダウンロード (ZIP)',
    headerCapsule: 'ヘッダーカプセル (460x215 / HD 920x430)',
    smallCapsule: 'スモールカプセル (231x87 / HD 462x174)',
    mainCapsule: 'メインカプセル (616x353 / HD 1232x706)',
    verticalCapsule: 'ライブラリ縦型カプセル (300x450 / HD 600x900)',
    libraryHero: 'ライブラリヒーロー (1920x620 / HD 3840x1240)',
    communityIcon: 'コミュニティアプリアイコン (32x32 / HD 184x184)',
    storePreviewTab: 'Steamストアプレビュー',
    libraryPreviewTab: 'Steamライブラリプレビュー',
    allAssetsTab: '全アセットサイズ',
    toggleSafeZones: 'セーフゾーンガイド',
    toggleSteamOverlay: 'Steam UI表示'
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Steamグラフィックアセットの仕様とルール'
    },
    {
      type: 'paragraph',
      html: 'Steamストアページやライブラリ表示では、標準化されたカプセル画像を使用してゲームを表示します。'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'ストアヘッダー HD解像度', value: '920 x 430 px' },
        { label: 'ライブラリカプセル比率', value: '2:3 縦型' },
        { label: 'ライブラリヒーロー最大解像度', value: '3840 x 1240 px' },
        { label: 'コミュニティアイコンサイズ', value: '184 x 184 px' }
      ]
    },
    {
      type: 'table',
      headers: ['アセットの種類', '標準サイズ (px)', 'HD目標サイズ (px)', 'アスペクト比', 'フォーマット'],
      rows: [
        ['ヘッダーカプセル', '460 x 215', '920 x 430', '2.14:1', 'JPG / PNG'],
        ['スモールカプセル', '231 x 87', '462 x 174', '2.65:1', 'JPG / PNG'],
        ['メインカプセル', '616 x 353', '1232 x 706', '1.74:1', 'JPG / PNG'],
        ['縦型ライブラリカプセル', '300 x 450', '600 x 900', '2:3', 'JPG / PNG'],
        ['ライブラリヒーロー', '1920 x 620', '3840 x 1240', '3.1:1', 'JPG / PNG'],
        ['ライブラリロゴ', '1280 x 720', '1280 x 720', '16:9', '透過PNG'],
        ['コミュニティアイコン', '32 x 32', '184 x 184', '1:1', 'PNG']
      ]
    },
    {
      type: 'tip',
      title: 'セーフゾーンの最適化',
      html: '重要なロゴやキャラクターの顔は画像全体の左上3分之2以内に配置してください。'
    },
    {
      type: 'proscons',
      title: 'ワークフローの評価',
      items: [
        {
          pro: 'Steamworksに必要なアセットサイズを即座に一括生成',
          con: '複雑なキービジュアルは個別レイヤーでの調整が必要な場合があります'
        }
      ]
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'カプセル',
          definition: 'Steamストアおよびライブラリで使用されるプロモーション画像の総称。'
        }
      ]
    }
  ],
  faqTitle: 'Steamアセットに関するよくある質問',
  faq: [
    {
      question: 'どのファイル形式を使用すべきですか？',
      answer: 'メインカプセルにはJPGまたはPNGファイルを使用できます。'
    }
  ],
  howTo: [
    {
      name: '高解像度画像をアップロード',
      text: 'キービジュアル画像を選択してください。'
    }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Steamカプセル＆アートプレビュージェネレーター',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'JPY'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'どのファイル形式を使用すべきですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'メインカプセルにはJPGまたはPNGファイルを使用できます。'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Steamカプセル画像の生成方法',
      step: [
        {
          '@type': 'HowToStep',
          name: '高解像度画像をアップロード',
          text: 'キービジュアル画像を選択してください。'
        }
      ]
    }
  ],
  bibliography: bibliographyEntries
};
