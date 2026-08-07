import type { ToolLocaleContent } from '../../../types';
import type { AudioLoopPointFinderUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<AudioLoopPointFinderUI> = {
  slug: 'audio-loop-point-finder',
  title: 'ゲームオーディオループポイントファインダーおよびメタデータインジェクター',
  description: '正確なオーディオループポイントを検出し、ゼロクロスにスナップしてノイズを排除し、LOOPSTARTおよびLOOPENDメタデータを埋め込んだWAVファイルをエクスポートします。',
  ui: {
    title: 'ゲームオーディオループポイントファインダー',
    subtitle: 'インタラクティブな波形アナライザー、ゼロクロスディテクター、WAVメタデータタグ編集ツール',
    dropzoneTitle: 'オーディオファイルをドラッグ＆ドロップまたはクリックして選択',
    dropzoneSubtitle: 'WAV、OGG、MP3、FLACオーディオトラックに対応',
    dropzoneButton: 'オーディオファイルを選択',
    audioInfoTitle: 'オーディオトラックのプロパティ',
    durationLabel: '再生時間',
    sampleRateLabel: 'サンプルレート',
    channelsLabel: 'オーディオチャンネル',
    totalSamplesLabel: '総サンプル数',
    loopControlsTitle: 'ループ領域の設定',
    loopStartLabel: 'ループ開始マーカー',
    loopEndLabel: 'ループ終了マーカー',
    loopDurationLabel: 'ループ再生時間',
    zeroCrossingLabel: 'ゼロクロススナップ',
    snapZeroCrossingButton: '最も近いゼロクロス点にマーカーをスナップ',
    playLoopButton: 'シームレスループを試聴',
    pauseLoopButton: '一時停止',
    stopLoopButton: '再生停止',
    exportWavButton: 'メタデータ付きWAVをエクスポート',
    sampleUnitLabel: 'サンプル',
    secondUnitLabel: '秒',
    zoomLabel: '波形ズーム',
    zoomInButton: '拡大',
    zoomOutButton: '縮小',
    resetZoomButton: '表示をリセット',
    noFileSelected: 'オーディオファイルが未読み込みです',
    invalidAudioFile: 'オーディオファイルのデコードに失敗しました',
    presetsTitle: 'クイックプリセット',
    presetFullTrack: 'トラック全体をループ',
    presetIntroCut: 'イントロ10%をスキップ',
    presetMiddleLoop: '中央50%セクション',
    statusLooping: 'ループ再生中',
    statusPaused: '再生一時停止中',
    statusReady: 'オーディオ読み込み完了',
    statusLoaded: 'オーディオトラックを正常に読み込みました',
    statusDecodeError: 'オーディオファイルのデコードエラー',
    statusSnapped: 'マーカーをゼロクロス点にスナップしました',
    statusStopped: '再生を停止しました',
    statusExported: 'ループタグ埋め込みWAVファイルをエクスポートしました',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'ゲームオーディオのシームレスループとサンプル整合',
    },
    {
      type: 'paragraph',
      html: 'ゲーム内でBGMを途切れることなく再生するには、ループの境界で正確なサンプルアライメントが必要です。Unity、Godot、Unreal Engine、FMOD、Wwiseなどのゲームエンジンは、WAVヘッダーのLOOPSTARTおよびLOOPENDメタデータを自動読み込みします。',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'サンプルレート精度', value: '44.1 kHz / 48 kHz' },
        { label: 'ゼロクロス閾値', value: '0.00 振幅' },
        { label: 'メタデータ規格', value: 'RIFF smpl および INFO' },
        { label: 'ノイズ低減', value: '100% 位相整合' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'ゼロクロススナップ戦略',
    },
    {
      type: 'tip',
      title: 'ポップノイズの防止',
      html: 'ループの開始および終了マーカーは、常に振幅が負から正へ遷移するゼロクロス点に配置してください。これによりスピーカーの急激な変位を防ぎ、クリックノイズを排除します。',
    },
    {
      type: 'title',
      level: 2,
      text: 'メタデータ互換性の比較',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'RIFF smpl チャンクマーカー',
          description: 'WAVヘッダー構造内に埋め込まれる標準バイナリメタデータ',
          points: [
            'Godot、FMOD、Wwise、GameMakerでネイティブサポート',
            '時間ズレのないミリ秒以上の完全なサンプル精度',
            '単一のWAVファイル内にループ情報を含めて保存',
            'ゼロクロススナップと組み合わせて完全ノイズレス化',
          ],
        },
        {
          title: '手動ファイル分割',
          description: 'イントロとループ部分を別々のファイルに切り出す方法',
          points: [
            'メタデータ非対応の簡易プレイヤーで使用',
            'ミリ秒単位の再生ギャップやラグが発生しやすい',
            'プロジェクト内で複数の音声ファイルを管理する必要がある',
            '繋ぎ目でプチプチ音が発生するリスクが高い',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: '標準サンプルレート参照表',
    },
    {
      type: 'table',
      headers: ['サンプルレート', '1秒あたりのサンプル数', '推奨使用環境', '時間解像度'],
      rows: [
        ['44,100 Hz', '44,100', '標準CD品質ゲームBGM', '1サンプルあたり 0.0226 ms'],
        ['48,000 Hz', '48,000', '現代のPCおよびコンソールゲーム', '1サンプルあたり 0.0208 ms'],
        ['96,000 Hz', '96,000', 'ハイレゾマスターオーディオ素材', '1サンプルあたり 0.0104 ms'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'バイトレベルでの自動メタデータ注入',
    },
    {
      type: 'paragraph',
      html: '本ツールから音声ファイルをエクスポートする際、出力されるWAVバイナリのRIFFヘッダー内に新しいメタデータ構造が直接書き込まれます。',
    },
  ],
  faqTitle: 'よくある質問',
  faq: [
    {
      question: 'LOOPSTARTとLOOPENDメタデータタグとは何ですか？',
      answer: 'LOOPSTARTおよびLOOPENDは、絶対サンプルフレーム数で測定されるメタデータフィールドです。',
    },
    {
      question: 'ループポイントでプチプチ音（クリックノイズ）が発生する理由は何ですか？',
      answer: '終了マーカーと開始マーカーの位置で音波の振幅や位相の傾きが一致しない場合にノイズが発生します。',
    },
    {
      question: '元の音声ファイルがサーバーにアップロードされることはありますか？',
      answer: 'いいえ。すべての処理とエクスポートはお使いのブラウザメモリ内ローカルで完了します。',
    },
  ],
  howTo: [
    {
      name: 'オーディオファイルを読み込む',
      text: '音楽ファイルをドラッグ＆ドロップするか、WAV、OGG、MP3、FLACファイルを選択します。',
    },
    {
      name: 'ループマーカーを配置する',
      text: '波形表示や数値入力を使用して、ループの開始位置と終了位置を調整します。',
    },
    {
      name: 'ゼロクロス点にスナップする',
      text: 'スナップボタンをクリックして、マーカーを最も近いゼロクロス位置に自動で合わせます。',
    },
    {
      name: '試聴してエクスポートする',
      text: 'シームレスループを試聴確認した後、メタデータ付きWAVをダウンロードします。',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'ゲームオーディオループポイントファインダー',
      applicationCategory: 'MultimediaApplication',
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
          name: 'LOOPSTARTとLOOPENDメタデータタグとは何ですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'LOOPSTARTおよびLOOPENDは、サンプル数で指定されるメタデータです。',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'オーディオループポイントの検出とタグ埋め込み方法',
      step: [
        {
          '@type': 'HowToStep',
          name: 'オーディオファイルを読み込む',
          text: '音楽ファイルをドラッグ＆ドロップするかファイルを選択します。',
        },
      ],
    },
  ],
  bibliographyTitle: '参考文献および関連資料',
  bibliography: bibliographyEntries,
};
