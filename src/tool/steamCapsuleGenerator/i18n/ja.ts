import { createSteamContent } from './shared';

export const content = createSteamContent({
  slug: 'steam-capsule-generator',
  title: 'Steamカプセルジェネレーター',
  description: '1枚のマスター画像からSteam用の4種類のプレビューを作成し、焦点位置と安全領域を確認してPNGまたはZIPをローカルで保存します。',
  ui: { uploadTitle: 'マスター画像をドロップ', uploadHint: '高解像度の1枚の画像から、ブラウザ内でSteam用プレビューセットを作成します。', chooseFile: '画像を選択', minimumSize: '最小サイズ', supportedFormats: 'PNG、JPEG、WebP', invalidImage: '1920 × 1080ピクセル以上の画像を選択してください。', sourcePreview: 'マスター画像', focalPoint: '焦点位置', focalHint: '画像をクリックするかスライダーを使い、重要な被写体をすべての切り抜きに残します。', horizontalFocus: '横位置', verticalFocus: '縦位置', resetFocus: '焦点を中央に戻す', outputPreview: 'Steam出力セット', safeZone: '安全領域', dimensions: 'ピクセル', downloadPng: 'PNG', downloadZip: 'ZIPを保存', buildingZip: 'ローカルZIPを作成中...', zipReady: 'カプセルセットの準備完了', localOnly: 'プライバシー設計。画像はこのブラウザ内に留まります。', headerCapsule: 'ヘッダーカプセル', mainCapsule: 'メインカプセル', verticalCapsule: '縦型カプセル', communityIcon: 'コミュニティアイコン', ready: '準備完了', downloadError: 'アーカイブを作成できませんでした。PNGボタンをお試しください。', },
  seo: [
    { type: 'title', text: '1枚の画像から統一感のあるSteamカプセルを作る', level: 2 },
    { type: 'paragraph', html: '横長のイラストは印象的でも、縦型にするとキャラクターが切れてしまうことがあります。このツールは同じマスター画像から、460 × 215のヘッダー、616 × 353のメイン、374 × 448の縦型、184 × 184の正方形アイコンを表示します。焦点位置を動かすことで、比率が変わっても残したい構図を選べます。' },
    { type: 'paragraph', html: '画像はcanvasを使ってブラウザ内で処理されます。サーバーへの送信やアカウントは不要です。マーカーを動かすと4つのプレビューが同時に更新され、ロゴや顔、キャラクターを保存前に確認できます。' },
    { type: 'title', text: 'ゲームアートのための実用的な手順', level: 2 },
    { type: 'list', items: ['1920 × 1080ピクセル以上のマスター画像を用意します。', 'マーカーは画像の中心ではなく、重要な被写体に置きます。', '最初に縦型と正方形のプレビューを確認します。', '安全領域を余白の目安として使い、最新のSteamworksテンプレートも確認します。'] },
    { type: 'paragraph', html: '安全領域は構図確認のための目安であり、すべてのSteam画面を保証するものではありません。ロゴやタイトルを混雑した端から離し、カプセル内の文字に関するValveのルールも確認してください。' },
    { type: 'tip', html: '被写体の周囲に余白を残したマスターを保存してください。ロゴ位置を変える必要がある場合は、元画像を調整して再生成します。' },
  ],
  faq: [
    { question: '画像は端末の外へ送られますか？', answer: 'いいえ。ブラウザ内で読み込み、描画します。アップロードもアカウントも不要です。' },
    { question: 'どのマスター画像を使いますか？', answer: '1920 × 1080ピクセル以上のPNG、JPEG、WebPが適しています。' },
    { question: '焦点位置は何を変えますか？', answer: 'すべての出力の切り抜き位置を動かし、重要な被写体を守ります。' },
    { question: '安全領域は公式ですか？', answer: '実用的な確認用ガイドです。公開前に最新のSteamworksテンプレートと比較してください。' },
  ],
  howTo: [
    { name: 'マスター画像を選ぶ', text: '1920 × 1080ピクセル以上のPNG、JPEG、WebPをドロップします。' },
    { name: '焦点を調整する', text: 'プレビューをクリックするか、横と縦のスライダーを動かします。' },
    { name: '4種類を確認する', text: 'ヘッダー、メイン、縦型、正方形アイコンを確認します。' },
    { name: 'セットを保存する', text: '個別のPNGまたはローカルZIPを保存します。' },
  ],
});
