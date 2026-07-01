import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TournamentBracketUI } from '../ui';

const slug = 'tournament';
const title = '無料オンライン・トーナメント表作成・運営ツール';
const description = '登録不要でトーナメントを運営し、シングルエリミネーション方式の勝ち上がり表を無料で作成。FIFA、パデル、eスポーツ、ボードゲームに最適。100%モバイル対応。';

const ui: TournamentBracketUI = {
  tournamentInProgress: 'トーナメント進行中',
  nextMatch: '次の試合',
  share: '共有',
  backNew: '戻る / 新規',
  back: '戻る',
  newTournament: '新規トーナメント',
  setupSubtitle: '大会のトーナメント表を設定して生成します。',
  tournamentNameLabel: 'トーナメント名',
  tournamentNamePlaceholder: '例：サマートーナメント',
  addPlayersLabel: '参加者を追加',
  addPlayerPlaceholder: '名前... またはカンマ区切りで複数入力',
  playersLabel: 'プレイヤー',
  clearAll: 'すべて消去',
  emptyList: 'リストが空です',
  howItWorks: '使い方は？',
  howItWorksText: '参加者を追加し、名前を付けて生成します。システムが自動的に対戦を組み、奇数の場合は「シード（不戦勝）」を処理します。',
  historyLabel: '履歴',
  noHistory: '保存されたトーナメントはありません',
  noOldTournaments: '過去のトーナメントはありません',
  generateBtn: 'トーナメント表を生成',
  shuffleLabel: '対戦をシャッフル',
  scoreLabel: 'スコア入力を有効化（オプション）',
  dragHint: 'ドラッグで移動',
  roundFinal: '決勝',
  roundSemifinal: '準決勝',
  roundQuarter: '準々決勝',
  roundPrefix: 'ラウンド',
  byeLabel: 'シード',
  waiting: '待機中...',
  emptyRound: '空のラウンド',
  confirmClearPlayers: 'プレイヤーリストをすべて消去しますか？',
  alertMinPlayers: '少なくとも2人のプレイヤーが必要です。',
  alertLoadFailed: 'トーナメントを読み込めませんでした。',
  confirmDeleteTournament: 'このトーナメントを履歴から完全に削除しますか？',
  toastShareLimit: '共有できるのは32人までのトーナメントのみです',
  toastShareError: 'リンク生成エラー',
  toastShareCopied: 'リンクをクリップボードにコピーしました',
  toastShareFailed: 'コピーできませんでした。URL:',
  toastFinished: 'トーナメント終了！',
  defaultName: 'トーナメント'
};

const faqData = [
  { question: 'シングルエリミネーション方式とは何ですか？', answer: '1回負けるとトーナメントから自動的に脱落する競技システムです。勝者は次のラウンド（ベスト16、準々決勝、準決勝）へと進み、最後の2人が決勝戦で戦います。' },
  { question: '参加人数が奇数の場合はどうなりますか？', answer: '当ツールは「シード（不戦勝）」を自動的に処理します。トーナメント表が常に2の累乗（2, 4, 8, 16...）で終わるように、一部のプレイヤーは初回戦を戦わずに直接第2ラウンドに進みます。' },
  { question: 'トーナメント表を保存して共有できますか？', answer: 'はい、即座に生成される固有のリンクを通じて共有可能です。登録不要のツールのため、データはタブが開いている間ブラウザに保持されますが、履歴としても保存されます。' },
  { question: 'FIFAやLoLなどのeスポーツ大会に使えますか？', answer: 'もちろんです。素早く視覚的に操作できるように設計されており、家庭用ゲーム機やPCゲーム、さらにはボードゲームやカードゲームの大会運営に最適です。' },
  { question: 'トーナメント作成は無料ですか？', answer: 'はい、完全に無料で制限もありません。有料プランや参加人数制限、ウォーターマーク、邪魔な広告もありません。すべてブラウザ上でオフラインでも機能します。' },
  { question: 'ブラウザを閉じるとデータは消えますか？', answer: 'いいえ。LocalStorageを使用して、すべてのトーナメントをデバイスに自動保存します。タブを閉じたりPCの電源を切ったりしても、数日後に戻ればトーナメントはそのまま残っています。' },
  { question: '「次の試合」ボタンはどのように機能しますか？', answer: 'システムが自動的に、対戦相手が決まっていて（両者確定）まだ結果が出ていない次の試合を検出します。「次の試合」を押すと、その試合の表示まで直接ジャンプします。' },
];

const howTo = [
  { name: '参加者を入力', text: '大会に参加するプレイヤーやチームの名前を入力します。' },
  { name: 'トーナメント表を生成', text: '生成ボタンをクリックします。システムが自動的に対戦カードと必要なラウンドを作成します。' },
  { name: '結果を更新', text: '各試合の勝者をクリックすると、自動的にトーナメントの次の段階に進みます。' },
  { name: '完了', text: 'トーナメントが完了すると、最終的な優勝者が表示されます。' },
];

const seo = [
  {
    type: 'title' as const,
    text: '無料オンライン・トーナメント表作成・運営ツール',
    level: 2 as const
  },
  {
    type: 'paragraph' as const,
    html: '最も充実した、無料・登録不要のトーナメント運営ツールで、スポーツやビデオゲーム、ボードゲームの大会を管理しましょう。<strong>スコアリングシステム</strong>、自動履歴保存、スマートな試合ナビゲーションを備えた、視覚的でインタラクティブなシングルエリミネーション表を数秒で作成。すべてブラウザ上で直接オフラインで動作します。'
  },
  {
    type: 'title' as const,
    text: 'シングルエリミネーション・トーナメントの作り方',
    level: 2 as const
  },
  {
    type: 'paragraph' as const,
    html: '<strong>大会名を設定し</strong>、参加者を追加（1人ずつ、またはカンマ区切りリストを貼り付け）、必要に応じて対戦をシャッフルし、トーナメント表を生成します。各試合の勝者をタップして結果を管理し、「次の試合」ボタンを使って未完了の試合間を移動しましょう。'
  },
  {
    type: 'title' as const,
    text: '高度な機能',
    level: 2 as const
  },
  {
    type: 'list' as const,
    items: [
      '<strong>一括入力：</strong> カンマ区切りで複数の参加者を一度に追加。',
      '<strong>正確なスコア：</strong> 3-1 or 21-19などの結果を入力できるスコアリングシステム。',
      '<strong>スマートナビゲーション：</strong> 「次の試合」ボタンで次の保留中の対戦へジャンプ。',
      '<strong>ドラッグ可能な表：</strong> 大規模トーナメント向けに自由なスクロールが可能なデスクトップ表示。',
      '<strong>永続的な履歴：</strong> すべてのトーナメントをブラウザに自動保存。',
      '<strong>自動不戦勝処理：</strong> シードや直接通過を手動入力なしで解決。',
      '<strong>URLで共有：</strong> 圧縮されたリンクを生成し、誰にでもトーナメント表を送信。',
    ]
  },
  {
    type: 'title' as const,
    text: 'あらゆる競技に最適',
    level: 2 as const
  },
  {
    type: 'comparative' as const,
    columns: 3 as const,
    items: [
      {
        title: 'ビデオゲーム & eスポーツ',
        description: 'FIFA、FC25、Valorant、League of Legends、Street Fighter、Tekken、Super Smash Bros、Rocket Leagueに最適。',
        icon: 'mdi:controller-classic',
        points: ['迅速なマッチング', 'チーム制限なし', '即座に共有可能']
      },
      {
        title: 'スポーツ & ラケット競技',
        description: 'パデル、テニス、卓球、バドミントン、フットサル、3x3バスケットボールの表を管理。',
        icon: 'mdi:trophy-outline',
        points: ['スコア統合', 'モバイル表示に最適化', '紙はもう不要']
      },
      {
        title: 'ボードゲーム & カードゲーム',
        description: 'Magic: The Gathering、ポケモンカードゲーム、遊戯王、カタン、チェス、ドミノの大会を運営。',
        icon: 'mdi:cards-playing-outline',
        points: ['最大64人まで', 'ラウンド履歴', 'シード管理']
      },
    ]
  },
  {
    type: 'title' as const,
    text: '「シード（Bye）」や不戦勝とは何ですか？',
    level: 2 as const
  },
  {
    type: 'paragraph' as const,
    html: '理想的なシングルエリミネーション・トーナメントでは、参加人数が2の累乗（4, 8, 16, 32...）である必要があります。参加者が奇数や2の累乗でない場合（例：7人、10人、13人）、システムは第1ラウンドで自動的に<strong>「シード（Bye）」</strong>を割り当てます。シードとは、試合をせずに直接次のフェーズに進むことを意味します。当社のアルゴリズムは、これらの不戦勝を公平かつ自動的に計算・割り当てします。'
  },
  {
    type: 'title' as const,
    text: '即座に、無料で、登録不要',
    level: 2 as const
  },
  {
    type: 'paragraph' as const,
    html: '摩擦ゼロ。アカウント不要、インストール不要、待ち時間なし。参加者を追加して、即座にトーナメントを作成。すべてブラウザの<strong>LocalStorage</strong>を介して自動的に保存されます。タブを閉じたりPCをシャットダウンしたりしても、数日後に戻れば大会と完全な履歴はそのまま残っています。'
  },
];

const schemas: [WithContext<FAQPage>, WithContext<HowTo>, WithContext<SoftwareApplication>] = [
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) },
  { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })) },
  { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'SportsApplication', operatingSystem: 'Web', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } },
];

export const content: ToolLocaleContent<TournamentBracketUI> = { slug, title, description, ui, seo, faq: faqData, bibliography, howTo, schemas };
