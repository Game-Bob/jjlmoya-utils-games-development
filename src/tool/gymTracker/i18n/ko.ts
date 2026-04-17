import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GymTrackerUI } from '../ui';

const slug = 'gym-workout-tracker';
const title = '헬스 운동 트래커: 발전 그래프 및 근력 일지';
const description =
  '운동 내용을 기록하고, 종목을 선택하며, 근력 그래프로 발전을 시각화하세요. 체육관에서의 점진적 과부하를 최적화하십시오.';

const faqData = [
  {
    question: '운동을 기록하는 목적은 무엇인가요?',
    answer:
      '과학적으로 점진적 과부하를 적용하기 위함입니다. 이전 세션에서 얼마나 들었는지 정확히 알면 그 기록을 넘어서려 시도할 수 있으며, 이는 근육 성장과 장기적인 근력 향상을 보장합니다.',
  },
  {
    question: '어떤 데이터를 기록해야 하나요?',
    answer:
      '가장 중요한 것은 올바른 자세로 설정된 횟수를 완수할 수 있었던 최대 무게(탑 세트)입니다. 당사 도구는 각 세션의 무게를 기록하여 발전 그래프를 생성하는 데 집중합니다.',
  },
  {
    question: '그래프는 어떻게 해석하나요?',
    answer:
      '상향 곡선은 발전하고 있음을 나타냅니다. 수평선(정체기)은 볼륨, 강도 또는 회복을 조정해야 함을 시사합니다. 지속적인 하향 곡선은 오버트레이닝의 징후일 수 있습니다.',
  },
  {
    question: '내 데이터는 어디에 저장되나요?',
    answer:
      '데이터는 브라우저 내부(로컬 스토리지)에 로컬로 저장됩니다. 이는 개인 정보가 철저히 보호되며 계정을 만들 필요가 없음을 의미합니다. 하지만 브라우저 데이터를 삭제하면 기록이 사라집니다.',
  },
];

const howToData = [
  {
    name: '운동 종목 선택',
    text: '드롭다운 메뉴에서 스쿼트, 벤치 프레스 또는 데드리프트와 같은 주요 종목을 선택합니다.',
  },
  {
    name: '무게 입력',
    text: '메인 세트 종료 후, 다룬 무게(kg/lb)를 해당 필드에 입력합니다.',
  },
  {
    name: '추가 버튼 클릭',
    text: '기록을 저장합니다. 시스템이 자동으로 기록과 발전 그래프를 업데이트합니다.',
  },
  {
    name: '변화 분석',
    text: '그래프를 정기적으로 확인하여 정체기를 식별하고 실제 근력 향상을 시각화하여 동기부여를 얻으세요.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'HealthApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'ko',
};

export const content: ToolLocaleContent<GymTrackerUI & Record<string, string>> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '과학적 참고 자료',
  bibliography: [
    {
      name: 'Journal of Strength and Conditioning Research - 점진적 과부하 연구',
      url: 'https://journals.lww.com/nsca-jscr/Fulltext/2010/10000/The_Mechanisms_of_Muscle_Hypertrophy_and_Their.40.aspx',
    },
    {
      name: 'National Academy of Sports Medicine - 점진적 과부하의 설명',
      url: 'https://blog.nasm.org/progressive-overload-explained',
    },
    {
      name: 'Science of Strength - 저항 트레이닝에서의 데이터 트래킹',
      url: 'https://pubmed.ncbi.nlm.nih.gov/30558493/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '헬스 트래킹: 진정한 발전을 위한 열쇠',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '피트니스와 보디빌딩의 세계에는 놀라운 결과를 얻는 사람과 금방 정체되는 사람을 가르는 근본적인 원칙이 있습니다. 바로 <strong>점진적 과부하(progressive overload)</strong>입니다. 하지만 운동에 대한 상세한 기록을 유지하지 않는다면 이 원칙을 효과적으로 적용하는 것은 불가능합니다. 이 가이드에서는 운동 트래킹이 왜 필수적인지, 당사의 <strong>헬스 트래커</strong>를 사용하여 성과를 극대화하는 방법, 그리고 이 실천을 뒷받침하는 과학적 근거에 대해 알아봅니다.',
    },
    {
      type: 'title',
      text: '점진적 과부하란 무엇인가?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '점진적 과부하란 신체 활동 중 가해지는 스트레스를 단계적으로 늘려가는 것입니다. 근육이 성장하거나 강해지려면 일반적으로 다루는 것보다 더 큰 자극을 주어야 합니다. 체육관에 가서 항상 같은 무게, 같은 횟수, 같은 휴식 시간으로 운동한다면 몸은 적응하고 성장할 생물학적 이유가 없습니다.',
    },
    {
      type: 'list',
      items: [
        '무게 증가: 이전 세션보다 더 무거운 무게를 다룸.',
        '횟수 증가: 같은 무게로 더 많은 횟수를 수행함.',
        '볼륨 증가: 근육 부위별 총 세트 수를 늘림.',
        '휴식 단축: 같은 작업을 더 짧은 시간 안에 완료함.',
        '자세 개선: 더 나은 통제력과 넓은 가동 범위로 동작을 수행함.',
      ],
    },
    {
      type: 'title',
      text: '왜 수동 일지가 기억보다 우월한가',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '많은 트레이너들은 지난주에 얼마를 다뤘는지 자신의 기억에 의존하는 실수를 범합니다. 하지만 5~10가지 종목을 수행하는 일반적인 운동에서는 벤치 프레스가 80kg이었는지 82.5kg이었는지, 혹은 10회였는지 12회였는지 잊기 쉽습니다. 이러한 정밀함의 결여는 평범한 결과로 이어집니다.',
    },
    {
      type: 'tip',
      title: '발전 시각화의 힘',
      html: '그래프 위의 상승하는 선을 보는 것은 정체와 일관된 근육 성장의 갈림길인 "한 번의 추가 횟수"에 도전하기 위한 활력을 제공합니다.',
    },
    {
      type: 'title',
      text: '트래킹을 위한 필수 종목',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '모든 종목이 가치 있지만, 특정 복합 운동은 전체적인 근력과 신체 발달의 가장 훌륭한 지표가 됩니다. 트래킹에서 우선순위를 두어야 할 종목은 다음과 같습니다: 수평 밀기의 <strong>벤치 프레스</strong>, 수직 밀기의 <strong>오버헤드 프레스</strong>, 당기기 종목인 <strong>풀업</strong>, 그리고 엉덩이의 <strong>힙 쓰러스트</strong>.',
    },
    {
      type: 'title',
      text: '발전 그래프 분석 방법',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '수회분의 운동을 기록하면 패턴이 보이기 시작합니다. <strong>지속적인 상승선</strong>은 올바른 길을 가고 있음을 나타내고, <strong>정체기</strong>는 볼륨이나 휴식의 조정이 필요함을 시사하며, <strong>하락 추세</strong>는 피로 누적의 신호일 수 있습니다.',
    },
    {
      type: 'title',
      text: '체육관에서의 성공 심리학',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '운동은 육체적인 도전인 동시에 정신적인 도전입니다. 2주 전보다 오늘이 1% 더 강해졌음을 보여주는 시각적인 도구를 사용함으로써 도파민 보상계를 자극합니다. 이것이 긍정적인 피드백 루프를 만들어 운동을 지속 가능한 습관으로 바꿔줍니다.',
    },
  ],
  ui: {
    exerciseLabel: '종목',
    pushCategory: '미기 (Push)',
    pullCategory: '당기기 (Pull)',
    gluteCategory: '둔근 (엉덩이)',
    customExerciseCategory: '커스텀',
    addCustomExercisetitle: '종목 추가',
    newExerciseLabel: '새 종목',
    exercisePlaceholder: '종목명 입력...',
    addBtn: '추가',
    registerWeightLabel: '무게 기록',
    weightPlaceholder: '00.0',
    startBtn: '시작',
    resetBtn: '초기화',
    okBtn: '확인',
    noData: '데이터 없음',
    recordLabel: '최고 기록',
    lastLabel: '이전 기록',
    historyTitle: '로그 기록',
    exportBtn: '내보내기',
    confirmDeletetitle: '기록을 삭제하시겠습니까?',
    confirmDeleteText: '이 작업은 취소할 수 없습니다. 선택한 종목의 모든 로그가 삭제됩니다.',
    deleteBtn: '삭제',
    cancelBtn: '취소',
    units: 'kg',

    benchPress: '벤치 프레스',
    overheadPress: '오버헤드 프레스',
    pushPress: '푸시 프레스',
    inclineDbPress: '인클라인 DB 프레스',
    dipsTriceps: '삼두 딥스',
    tricepsExtensions: '케이블 삼두 익스텐션',
    pullUp: '풀업',
    barbellRow: '바벨 로우',
    latPulldown: '랫 풀다운',
    dbRow: '덤벨 로우',
    facePulls: '페이스 풀',
    bicepsCurl: '바벨 바이셉스 컬',
    hipThrust: '힙 쓰러스트',
    rdl: '루마니안 데드리프트',
    lunges: '런지',
    gluteKick: '케이블 글루트 킥백',
    hipAbduction: '머신 힙 어브덕션',
    stepUp: '스텝 업',
  },
};
