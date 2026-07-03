import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { EloRatingCalculatorUI } from '../ui';

const slug = 'elo-rating-calculator';
const title = 'ELO 레이팅 계산기: 체스, e스포츠 및 스포츠용';
const description = '승리, 무승부, 패배를 위한 무료 ELO 레이팅 계산기입니다. 두 레이팅을 입력하고 K 팩터를 선택하면 정확한 점수 변동, 예상 점수, 새로운 ELO 및 상대 ELO를 확인할 수 있습니다.';

const ui: EloRatingCalculatorUI = {
  playerLabel: '플레이어 레이팅',
  opponentLabel: '상대 레이팅',
  kFactorLabel: 'K 팩터',
  resultLabel: '경기 결과',
  winLabel: '승리',
  drawLabel: '무승부',
  lossLabel: '패배',
  calculateLabel: '계산',
  resetLabel: '초기화',
  expectedLabel: '예상값',
  deltaLabel: '변동',
  newRatingLabel: '새 레이팅',
  opponentNewRatingLabel: '상대 새 ELO',
  kFactorHelpTitle: 'K 팩터란?',
  kFactorHelpText: 'K는 업데이트의 공격성을 제어합니다. 낮은 K는 안정적인 순위를 의미합니다. 높은 K는 각 결과가 레이팅을 더 빠르게 움직이게 합니다.',
  kFactorLowText: '안정적',
  kFactorHighText: '변동적',
  resultSummaryLabel: '경기 영향',
  initialImpactText: '무승부는 순위표를 팽팽하게 유지합니다',
  historyVersusLabel: 'vs',
  historyToLabel: '대',
  playerPointsLabel: '플레이어 포인트',
  opponentEloLabel: '상대 ELO',
  particleEloLabel: 'ELO',
  particleRatingLabel: '레이팅',
  upsetLabel: '이변 확률',
  favoriteLabel: '우승후보 부담',
  balancedLabel: '균형 잡힌 경기',
  historyLabel: '로컬 계산 기록',
  noHistoryLabel: '계산을 실행하여 여기에 저장하세요',
  copiedLabel: '복사됨',
  copyLabel: '복사',
  clearLabel: '지우기',
  kBeginner: '초보자',
  kClub: '클럽',
  kTournament: '토너먼트',
  kElite: '엘리트',
};

const faqData = [
  { question: '경기 후 ELO 레이팅 변동을 어떻게 계산하나요?', answer: '현재 ELO, 상대 ELO, 경기 결과, K 팩터를 입력하세요. 계산기는 예상 점수를 추정하고 실제 결과와 비교하여 획득 또는 손실한 정확한 포인트를 반환합니다.' },
  { question: 'ELO에서 K 팩터의 의미는 무엇인가요?', answer: 'K 팩터는 레이팅의 민감도를 제어합니다. 낮은 K 팩터는 레이팅을 안정적이고 느리게 움직이게 합니다. 높은 K 팩터는 레이팅이 더 빠르게 반응하게 하여 신규 플레이어, 짧은 시즌, 활발한 로컬 래더에 유용합니다.' },
  { question: '낮은 레이팅의 상대를 이겼을 때 ELO 포인트를 덜 얻는 이유는?', answer: '공식이 이미 당신의 승리를 예상했기 때문입니다. 훨씬 낮은 레이팅의 상대를 이기는 것은 예측을 확인하는 것이므로 레이팅 상승이 작습니다. 더 강한 상대를 이기는 것이 더 놀랍기 때문에 획득 포인트가 더 큽니다.' },
  { question: '상대도 같은 수의 ELO 포인트를 잃나요?', answer: '표준 2인 ELO 교환에서는 그렇습니다. 한쪽이 획득한 포인트는 다른 쪽에서 차감되므로 계산기는 플레이어의 새 ELO와 상대의 새 ELO를 모두 표시합니다.' },
  { question: '이 ELO 계산기를 체스 외에 사용할 수 있나요?', answer: '네. ELO는 강한 플레이어가 이길 가능성이 더 높은 모든 반복적인 일대일 경기에 적용됩니다. e스포츠, 테니스 래더, 파델 그룹, 탁구, 토론 클럽, 판타지 리그 등이 포함됩니다.' },
];

const howTo = [
  { name: '플레이어 레이팅 입력', text: '변동을 계산하려는 플레이어의 현재 레이팅을 입력합니다.' },
  { name: '상대 레이팅 입력', text: '계산기가 예상 점수를 추정할 수 있도록 상대 레이팅을 추가합니다.' },
  { name: 'K 팩터와 결과 선택', text: '안정적인 순위에는 낮은 K 팩터를, 레이팅을 빠르게 조정해야 할 때는 높은 K 팩터를 사용한 후 승리, 무승부, 패배를 선택합니다.' },
  { name: '새 레이팅 확인', text: '계산기는 예상 점수, 레이팅 변동, 새로운 ELO, 포인트 교환 후 상대의 새 ELO를 표시합니다.' },
];

const seo = [
  { type: 'title' as const, text: '모든 경기 후 ELO 포인트 계산', level: 2 as const },
  {
    type: 'paragraph' as const,
    html: '이 ELO 레이팅 계산기는 매우 실용적인 질문에 대한 빠른 답변이 필요할 때 사용하세요: <strong>이 결과 후에 몇 ELO 포인트를 얻거나 잃게 될까요?</strong> 레이팅, 상대 레이팅, 경기 결과, K 팩터를 입력하세요. 이 도구는 동일한 결과 카드에 예상 점수, 레이팅 변동, 새 ELO, 상대의 새 ELO를 계산합니다.'
  },
  {
    type: 'summary' as const,
    title: '이 계산기가 답변하는 것',
    items: [
      '더 강하거나 약한 상대를 이긴 후 얻는 ELO 포인트.',
      '이변의 패배 후 잃는 ELO 포인트.',
      '무승부가 레이팅을 올려야 하는지 내려야 하는지.',
      '동일한 포인트 교환 후 상대의 레이팅.',
      'K 팩터 변경이 레이팅 움직임을 안정적 또는 변동적으로 만드는 방법.',
    ]
  },
  {
    type: 'stats' as const,
    items: [
      { value: '1.0', label: '승리 점수', description: '승리는 예상 점수와 비교되기 전에 만점으로 처리됩니다.' },
      { value: '0.5', label: '무승부 점수', description: '무승부는 승리와 패배의 정확히 중간이므로 더 강한 상대에게 포인트를 얻을 수 있습니다.' },
      { value: '0.0', label: '패배 점수', description: '낮은 레이팅 상대에게 패배하면 예상치 못했기 때문에 일반적으로 더 많은 비용이 듭니다.' },
    ]
  },
  { type: 'title' as const, text: 'ELO 공식이 하는 일', level: 2 as const },
  {
    type: 'diagnostic' as const,
    title: '모든 결과 뒤의 세 단계',
    description: '계산기는 수동으로 공식을 다룰 필요 없이 표준 ELO 아이디어를 따릅니다.',
    items: [
      { label: '예상 점수', value: '레이팅 차이가 확률적 점수로 변환됩니다. 높은 레이팅의 플레이어가 더 많은 점수를 얻을 것으로 예상됩니다.' },
      { label: '실제 점수', value: '승리는 1, 무승부는 0.5, 패배는 0으로 계산됩니다.' },
      { label: '레이팅 변동', value: '실제 점수와 예상 점수의 차이에 K 팩터를 곱하고 포인트로 반올림합니다.' },
    ]
  },
  {
    type: 'table' as const,
    headers: ['상황', '일반적으로 일어나는 일', '일어나는 이유'],
    rows: [
      ['더 강한 상대를 이김', '큰 ELO 상승', '실제 점수가 예상을 크게 상회함'],
      ['더 약한 상대를 이김', '작은 ELO 상승', '공식이 이미 승리를 예상했음'],
      ['더 강한 상대와 무승부', '작은 ELO 상승', '무승부가 예상 점수를 초과할 수 있음'],
      ['더 약한 상대에게 패배', '큰 ELO 하락', '결과가 예상보다 나빴음'],
    ]
  },
  { type: 'title' as const, text: '레이팅 시스템에 적합한 K 팩터 선택', level: 2 as const },
  {
    type: 'paragraph' as const,
    html: '<strong>K 팩터는 ELO 시스템의 민감도 조절기입니다.</strong> 누가 이길 자격이 있었는지 결정하지 않습니다. 레이팅 표가 결과에 얼마나 강하게 반응하는지 결정합니다. 리그에 많은 경기와 성숙한 레이팅이 있다면 낮은 K가 표를 차분하게 유지합니다. 플레이어가 새롭거나 시즌이 짧다면 높은 K가 레이팅을 더 빨리 따라잡도록 돕습니다.'
  },
  {
    type: 'table' as const,
    headers: ['K 팩터', '사용처', '기대할 수 있는 효과'],
    rows: [
      ['10 ~ 16', '확립된 체스 클럽, 전문가 풀, 장기 랭킹', '매 경기 후 작은 변동의 매우 안정적인 레이팅'],
      ['20 ~ 32', '로컬 리그, 클럽 래더, 정기 토너먼트', '과잉 반응 없이 반응성을 느끼는 균형 잡힌 움직임'],
      ['40 ~ 60', '신규 플레이어, 짧은 시즌, e스포츠 래더, 비공식 그룹', '현재 레이팅이 부정확할 수 있을 때 빠른 수정'],
      ['60 이상', '실험적 형식 또는 임시 레이팅만', '한 경기가 표를 크게 바꿀 수 있는 매우 변동적인 레이팅'],
    ]
  },
  {
    type: 'tip' as const,
    title: '대부분의 사용자에게 최적의 기본값',
    html: '공식 연맹 규칙을 따르지 않는 경우 <strong>K 32</strong>로 시작하세요. 활발한 래더에 충분히 반응적이며 한 번의 운 좋은 결과가 랭킹을 완전히 다시 쓰지 않을 만큼 안정적입니다.'
  },
  { type: 'title' as const, text: 'ELO 계산기 결과 읽는 방법', level: 2 as const },
  {
    type: 'list' as const,
    items: [
      '<strong>예상값:</strong> 경기 전에 공식이 예측한 점수입니다. 예상값이 높을수록 당신이 우승후보였음을 의미합니다.',
      '<strong>변동:</strong> 플레이어 레이팅에서 추가되거나 제거된 정확한 ELO 포인트.',
      '<strong>새 레이팅:</strong> 결과를 적용한 후의 플레이어 레이팅.',
      '<strong>상대 새 ELO:</strong> 반대 포인트 이동 후의 상대 레이팅.',
      '<strong>경기 영향:</strong> 결과가 표를 얼마나 강하게 움직였는지에 대한 평이한 요약.',
    ]
  },
  {
    type: 'comparative' as const,
    columns: 3 as const,
    items: [
      {
        title: '체스 및 보드 게임',
        description: '클럽 나이트, 온라인 이벤트, 비공개 레이팅 풀의 경기 후 레이팅을 계산합니다.',
        icon: 'mdi:chess-knight',
        points: ['승리-무승부-패배 지원', '상대 ELO 표시', '장기 랭킹에 적합']
      },
      {
        title: 'e스포츠 래더',
        description: '스킬이 빠르게 변할 수 있는 반복적인 일대일 경기 후 플레이어 또는 팀 랭킹을 업데이트합니다.',
        icon: 'mdi:gamepad-variant',
        points: ['더 높은 K 팩터 옵션', '빠른 레이팅 수정', '명확한 이변 보상']
      },
      {
        title: '스포츠 래더',
        description: '테니스, 파델, 스쿼시, 탁구, 배드민턴 및 로컬 리그의 공정한 랭킹을 유지합니다.',
        icon: 'mdi:tennis',
        points: ['간단한 수동 업데이트', '클럽에 적합', '주최자에게 쉬움']
      },
    ]
  },
  {
    type: 'proscons' as const,
    title: 'ELO가 좋은 레이팅 선택인 경우',
    items: [
      {
        pro: '강한 플레이어가 더 자주 이겨야 하는 반복적인 일대일 경기에 탁월합니다.',
        con: '개인 기여도를 분리하기 어려운 팀 스포츠에는 덜 이상적입니다.'
      },
      {
        pro: '강한 상대를 이기면 더 많은 포인트를 얻기 때문에 설명하기 쉽습니다.',
        con: '완전히 새로운 플레이어에게 레이팅이 정확하게 느껴지기까지 충분한 경기가 필요합니다.'
      },
      {
        pro: '스프레드시트, 클럽 래더, 리그 표에서 유지할 수 있을 만큼 간단합니다.',
        con: 'K 팩터 규칙은 일관되어야 하며 그렇지 않으면 랭킹을 신뢰하기 어려워집니다.'
      },
    ]
  },
  {
    type: 'message' as const,
    title: '리그 주최자에게 중요',
    html: '시즌 시작 전에 K 팩터를 선택하고 공개하세요. 플레이어들은 결과가 입력되기 전에 레이팅 계산 방법을 모두가 알고 있을 때 ELO 표를 더 신뢰합니다.'
  },
];

const schemas: [WithContext<FAQPage>, WithContext<HowTo>, WithContext<SoftwareApplication>] = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } }))
  },
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description,
    step: howTo.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text }))
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description,
    applicationCategory: 'SportsApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }
  },
];

export const content: ToolLocaleContent<EloRatingCalculatorUI> = { slug, title, description, ui, seo, faq: faqData, bibliography, howTo, schemas };
