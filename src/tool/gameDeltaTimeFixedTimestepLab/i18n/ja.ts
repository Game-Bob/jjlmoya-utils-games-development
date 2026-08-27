import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GameDeltaTimeFixedTimestepLabUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const faq = [
  { question: 'この固定タイムステップのラボでは何が分かりますか？', answer: '同じ動くオブジェクトを、可変デルタ時間のループと固定タイムステップのアキュムレーターで実行します。繰り返し発生するフレームスパイクによって、シミュレーション時間、位置のずれ、追いつきステップをゲームエンジンなしで確認できます。' },
  { question: '可変デルタと固定タイムステップの違いは何ですか？', answer: '可変モデルはレンダリングされた各フレームの長さを使って一度更新します。固定モデルは同じ大きさのステップで進み、経過した実時間に必要な数だけアキュムレーターから処理します。固定ステップは描画速度への依存を減らしますが、長いフレームでは追加の追いつき処理が発生します。' },
  { question: 'フレームスパイクの入力値は何を表しますか？', answer: '指定したスパイクフレームに追加するミリ秒数です。頻度で何フレームごとにスパイクを入れるかを決められるため、ランダムな計測ではなく再現可能なヒッチを作れます。' },
  { question: 'デルタの上限を設定すると何が変わりますか？', answer: '長いフレームで可変モデルが使うデルタを上限までに制限します。大きなジャンプは抑えられますが、そのモデルのシミュレーション時計は実時間より遅れます。固定アキュムレーターはフレーム全体の時間を引き続き計上します。' },
  { question: 'これはプロファイラーやプレイテストの代わりですか？', answer: 'いいえ。指定した数値を使う決定論的な学習と設計のラボです。端末の性能を測定したり、エンジンを診断したり、描画コストをモデル化したり、すべてのゲームに正しいループを証明したりするものではありません。' },
];
const howTo = [
  { name: 'フレームのリズムを選ぶ', text: '目標フレームレートを設定し、ミリ秒単位の再現可能なスパイクを追加します。頻度で何フレームごとに入れるかを指定します。' },
  { name: 'シミュレーションのステップを設定する', text: '固定タイムステップをミリ秒で選びます。16.667ミリ秒前後なら、毎秒約60回のシミュレーション更新になります。' },
  { name: '両方に同じ動きのルールを与える', text: '速度と実行時間を設定します。同じオブジェクトを動かすため、位置の差は経過時間の消費方法から生まれます。' },
  { name: '上限を意図的に試す', text: 'デルタ上限を有効にし、可変モデルのシミュレーション時間を固定アキュムレーターと比較します。上限はコストを伴う方針であり、無料の修正ではありません。' },
  { name: '結果を読む', text: '2本の軌跡、ずれの概要、タイムライン、追いつき動作、アクセシブルなフレーム表を確認します。説明やデバッグでは一度に1つの入力だけを変更します。' },
];
const softwareApplication: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: 'ゲームのデルタ時間と固定タイムステップのラボ', applicationCategory: 'DeveloperApplication', operatingSystem: 'Any' };
const faqPage: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: '可変デルタ時間と固定タイムステップを比較する方法', step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) };

export const content: ToolLocaleContent<GameDeltaTimeFixedTimestepLabUI> = {
  slug: 'game-delta-time-fixed-timestep-lab', title: 'ゲームのデルタ時間と固定タイムステップのラボ', description: '再現可能なフレームスパイク、動きのシミュレーション、追いつきステップ、見える時間差で可変と固定のゲームループを比較します。',
  ui: { controlsTitle: 'フレームパターンを作る', fpsLabel: '目標フレームレート', fpsHint: '1秒あたりのレンダリングフレーム', spikeLabel: 'フレームスパイク', spikeHint: 'スパイクフレームに追加する時間', spikeEveryLabel: 'スパイクの間隔', fixedDtLabel: '固定タイムステップ', fixedDtHint: '均一なシミュレーションステップ', velocityLabel: 'オブジェクトの速度', durationLabel: '実行時間', clampLabel: 'デルタの上限', clampToggle: '可変デルタを制限', runLabel: '実験を実行', resetLabel: '値をリセット', stageKicker: '実験フィールド', stageTitle: '2つの時計、1つの動くオブジェクト', stageCaption: '棒グラフはヒッチを示し、線は両方の位置を追跡します。下の線は最終値では隠れるずれを分離します。', frameTraceLabel: 'フレーム時間', positionPlotLabel: 'オブジェクトの位置', differencePlotLabel: '固定経路からの位置差', variableLane: '可変デルタ', fixedLane: '固定アキュムレーター', frameCountLabel: 'レンダリングフレーム', wallTimeLabel: '実時間', variableTimeLabel: '可変シミュレーション時間', fixedTimeLabel: '固定シミュレーション時間', divergenceLabel: '位置差', stepsLabel: '固定シミュレーションステップ', diagnosticsTitle: 'フレームの読み方', stableStatus: 'このパターンでは2つの経路が揃っています。', variableStatus: 'フレーム時間にスパイクが含まれるため、可変経路が先行します。', fixedStatus: '長いフレームの後、固定経路は複数のシミュレーションステップで追いつきます。', clampStatus: '上限が可変のジャンプを抑え、そのモデルを経過した実時間より遅らせます。', timelineTitle: '動きの記録', timelineCaption: '経過した実時間に対する位置です。破線は均一な固定ステップを示します。', frameAxis: '経過した実時間', positionAxis: 'オブジェクトの位置', legendVariable: '可変デルタの経路', legendFixed: '固定タイムステップの経路', legendSpike: 'フレームスパイク', tableTitle: 'アクセシブルなフレーム記録', tableFrame: 'フレーム', tableWall: '実時間', tableVariable: '可変位置', tableFixed: '固定位置', tableDelta: '差分', modelNote: '可変モデルは現在のフレーム時間で速度を1回適用します。固定モデルは実時間全体を蓄積し、均一なステップで進みます。どちらも性能測定ではありません。', privacyDisclosure: '値はこのブラウザーだけに保存され、次回も実験を続けられます。ゲームデータやテレメトリは送信されません。', unitMs: 'ms', unitSeconds: '秒', unitPixels: '単位', statusReady: '実験を更新しました' },
  seo: [
    { type: 'title', level: 2, text: 'ゲームループの中にある時計を理解する' },
    { type: 'paragraph', html: 'レンダリングされた各フレームは、ゲームに新しい経過時間を渡します。可変デルタのループでは、動きを <code>position += velocity × frameTime</code> のように更新します。フレームが安定していれば平均速度は意図した値に近づきますが、1回の更新はそれを発生させたフレームと同じ大きさになります。ヒッチは単なる映像の停止ではなく、その更新が消費するゲーム時間を変えます。' },
    { type: 'title', level: 2, text: '可変積分と固定アキュムレーターを比較する' },
    { type: 'paragraph', html: '固定タイムステップのループは各フレームの時間をアキュムレーターに加え、<code>16.667 ms</code> のような選択したステップを繰り返し消費します。シミュレーションには同じ大きさの更新が届き、レンダリングは別のリズムで動けます。余った端数は次のフレームまで残ります。長いフレームでは、経過時間を処理するために複数の小さな更新を実行します。ステップは安定しますが、追いつき処理の負荷が跳ね上がることがあります。' },
    { type: 'table', headers: ['状況', '可変デルタの経路', '固定タイムステップの経路', '検討する判断'], rows: [['安定した描画', '通常のフレーム時間で1回更新', '均一なステップで蓄積時間を消費', '両方が同じ動きに近づくか確認します。'], ['長いフレーム', '大きな更新でオブジェクトが進みすぎる', '複数の固定更新で時間に追いつく', '位置差と追いつき数を一緒に読みます。'], ['異なる描画速度', '更新サイズがフレームレートで変化', 'シミュレーションステップは一定', '固定ステップは描画速度への依存を減らします。'], ['デルタ上限', '上限を超えた時間を無視', 'アキュムレーターは全時間を受け取る', '時間を失ってもよい場合だけ制限します。']] },
    { type: 'title', level: 2, text: 'フレームスパイクの実際の影響を見る' },
    { type: 'paragraph', html: '毎秒60フレームでは、通常のフレームは約 <code>16.667 ms</code> です。追加の <code>80 ms</code> スパイクがあると、1フレームは約 <code>96.667 ms</code> になります。可変モデルはこの時間を1回の更新で消費します。固定モデルは代わりに約6回の <code>16.667 ms</code> ステップを消費します。経過時間の合計は同じでも、シミュレーション内の経路は異なる場合があります。' },
    { type: 'title', level: 2, text: '位置のずれと追いつき処理を一緒に読む' },
    { type: 'paragraph', html: '位置差は可変経路から固定経路を引いた値です。2つの積分方針がどれだけ離れたかを示しますが、どちらが自動的に正しいかは決めません。追いつき数は、1つの描画フレーム内で必要だった固定処理の量を示します。大きな位置差は見える動きの違いを示し、多い追いつきステップはCPU予算の問題を示す可能性があります。関連していますが、同じ診断ではありません。' },
    { type: 'title', level: 2, text: 'デルタ上限を方針として扱う' },
    { type: 'paragraph', html: '上限は、停止中のタブ、ブレークポイント、深刻なヒッチによってキャラクターが瞬間移動したり、物理ボディがジオメトリを通り抜けたりするのを防げます。その代わり可変時計は実際に経過した時間より遅れます。時間を保つ必要があるゲームでは、固定アキュムレーターなど別の回復方針を使います。ジャンプを抑えて応答性を保ちたい場合は上限が役立ちますが、失う時間を意図して選ぶ必要があります。' },
    { type: 'title', level: 2, text: '守るべき仕事に合わせてループを選ぶ' },
    { type: 'table', headers: ['ゲームループの仕事', '役立つ初期設定', '理由'], rows: [['物理、衝突、決定論的なゲームプレイ', '固定タイムステップ', '均一なステップで描画リズムへの依存を減らします。'], ['状態を蓄積しない単純な視覚運動', '可変デルタ', '更新が小さく、通常は追いつきキューが不要です。'], ['滑らかな表示を伴うゲームプレイシミュレーション', '補間付き固定更新', 'シミュレーションのステップを保ち、表示側で端数を隠せます。'], ['深刻な停止からの回復', '上限付きの追いつき方針', '1回の悪いフレームが無制限の計算を生まないようにします。']] },
    { type: 'title', level: 2, text: '繰り返し可能な調整手順を使う' },
    { type: 'paragraph', html: 'まずスパイクなしで2つの経路が一致することを確認します。再現可能なヒッチを追加し、頻度を変えて見える誤差が蓄積するか安定するかを見ます。速度を変える前に固定ステップを調整し、追いつき数を確認します。最後に上限を有効にし、可変のシミュレーション時間と実時間を比較します。この順序で、ずれの原因と、それを抑える方針を切り分けられます。' },
    { type: 'tip', title: 'この実験で証明できないこと', html: 'このラボは指定したフレーム時間と一定の速度を使うため、時間処理を説明するものであり、端末を測定したりエンジンを検証したりするものではありません。実際の物理、入力のサンプリング、ネットワーク、補間、フレーム予算によって最適な設計は変わります。結果を仮説として使い、実際のゲームで確認してください。' },
  ],
  faq, bibliographyTitle: 'ゲームループの参考資料', bibliography: bibliographyEntries, howTo, schemas: [softwareApplication, faqPage, howToSchema],
};
