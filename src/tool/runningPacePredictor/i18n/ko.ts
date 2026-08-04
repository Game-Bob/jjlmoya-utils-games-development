import { bibliographyEntries } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RunningPacePredictorUI } from '../ui';

const slug = 'running-pace-predictor';
const title = '러닝 페이스 계산기 및 기록 예측';
const description =
  '러닝 페이스 계산, 리겔 공식을 활용한 5K, 10K, 하프, 풀마라톤 예상 기록 예측 및 훈련 페이스 구간 자동 산출.';

const faqData = [
  {
    question: '풀마라톤 기록 예측에서 리겔 공식의 정확도는 어느 정도인가요?',
    answer:
      '리겔 공식 T2 = T1 * (D2 / D1)^1.06은 유산소 기초가 잘 갖춰진 러너에게 높은 정확도를 보입니다. 풀마라톤의 경우 주간 훈련 거리, 25km 이상의 장거리 훈련, 대회 당일 보급 전략에 큰 영향을 받습니다.',
  },
  {
    question: 'min/km를 min/mile로 정확히 변환하는 방법은 무엇인가요?',
    answer:
      'km당 총 초 단위 시간에 1.609344를 곱합니다. 예를 들어 5:00 min/km(300초)는 482.8초/mile, 즉 8:03 min/mile로 변환됩니다.',
  },
  {
    question: '장거리에서 예측 기록이 다소 도전적으로 느껴지는 이유는 무엇인가요?',
    answer:
      '기본 지수 1.06은 이상적인 피로 저항성을 전제로 합니다. 장거리 유산소 훈련이 부족하면 피로 누적 및 글리코겐 고갈로 인해 실제 기록이 예측보다 늦어질 수 있습니다.',
  },
  {
    question: '인터벌 및 템포런 훈련 구간은 어떻게 설정해야 하나요?',
    answer:
      '인터벌 훈련(VO2 Max)은 5K 페이스의 95%~105%, 젖산 역치 템포런은 110%~120%, 조깅은 125%~145% 구간에서 수행하는 것이 효과적입니다.',
  },
];

const howToData = [
  {
    name: '단위 체계 선택',
    text: '상단 스위치를 통해 미터법(km, min/km) 또는 야드 파운드법(mile, min/mile)을 선택합니다.',
  },
  {
    name: '거리 선택',
    text: '주요 대회 프리셋 버튼(5K, 10K, 하프, 42K)을 누르거나 사용자 지정 거리를 입력합니다.',
  },
  {
    name: '기존 기록 입력',
    text: '조절 버튼(+1분, +5분 등)을 사용하여 최근 대회나 측정 기록의 시간, 분, 초를 설정합니다.',
  },
  {
    name: '예측 기록 및 훈련 구간 확인',
    text: '평균 페이스, 리겔 공식 기반 예상 완주 기록, 개인 맞춤형 훈련 페이스 구간을 확인합니다.',
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
  applicationCategory: 'SportsApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
  inLanguage: 'ko',
};

export const content: ToolLocaleContent<RunningPacePredictorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography: bibliographyEntries,
  seo: [
    {
      type: 'title',
      text: '러닝 페이스 계산 및 기록 예측의 생체역학적 원리',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '러닝 페이스 계산과 기록 예측은 최대산소섭취량(VO2 max), 젖산 역치, 러닝 이코노미 등 생리학적 메커니즘을 기반으로 합니다. 장거리 러닝에서는 글리코겐 저장량과 효율적인 피치/스트라이드 조절이 성패를 좌우합니다.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '1.06', label: '리겔 지수' },
        { value: '4대 종목', label: '표준 대회 거리' },
        { value: '3가지 방식', label: '실시간 계산' },
        { value: '3단계', label: '목표 훈련 구간' },
      ],
    },
    {
      type: 'title',
      text: '리겔 공식의 수학적 모델링',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '1977년 피터 리겔이 제안한 T2 = T1 * (D2 / D1)^1.06 공식은 거리가 늘어남에 따라 나타나는 페이스 저하를 수학적으로 모델링한 수식입니다. 피로 지수 1.06은 훈련된 러너의 평균값입니다.',
    },
    {
      type: 'title',
      text: '미터법 대 야드-파운드법 비교',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '미터법 (min/km)',
          description: '국제 육상 경기 및 한국 표준 단위. 1000m 단위의 구간 기록 관리에 용이합니다.',
        },
        {
          title: '야드 파운드법 (min/mile)',
          description: '미국 및 영국 도로 경기 표준 단위. 1마일은 약 1.609344km에 해당합니다.',
        },
      ],
    },
    {
      type: 'title',
      text: '표준 도로 경기 종목 비교',
      level: 2,
    },
    {
      type: 'table',
      headers: ['종목명', '미터 거리 (km)', '마일 거리 (mi)', '주요 에너지 시스템'],
      rows: [
        ['5K 로드 레이스', '5.00 km', '3.11 mi', '90% 유산소 / 10% 무산소 해당계'],
        ['10K 로드 레이스', '10.00 km', '6.21 mi', '95% 유산소 / 5% 무산소 해당계'],
        ['하프 마라톤', '21.0975 km', '13.11 mi', '99% 유산소 (젖산 역치 주도)'],
        ['풀 마라톤', '42.195 km', '26.22 mi', '100% 유산소 (글리코겐 고갈 한계)'],
      ],
    },
    {
      type: 'title',
      text: '레이스 전략 및 네거티브 스플릿',
      level: 2,
    },
    {
      type: 'tip',
      title: '네거티브 스플릿의 효과',
      html: '후반부를 전반부보다 살짝 빠르게 달리는 네거티브 스플릿은 대사 효율을 극대화합니다. 초반 오버페이스를 방지하여 근피로와 글리코겐 소모를 줄일 수 있습니다.',
    },
  ],
  ui: {
    title: '러닝 페이스 계산기 및 기록 예측',
    subtitle: '리겔 공식으로 페이스 및 예상 완주 기록 산출',
    paceCalculatorTitle: '페이스, 거리 및 시간 계산기',
    racePredictorTitle: '예상 완주 기록 (리겔 공식)',
    trainingZonesTitle: '목표 훈련 페이스 구간',
    distanceLabel: '거리',
    timeLabel: '시간',
    paceLabel: '평균 페이스',
    hoursLabel: '시간',
    minutesLabel: '분',
    secondsLabel: '초',
    unitKm: '킬로미터',
    unitMiles: '마일',
    paceUnitKm: 'min/km',
    paceUnitMiles: 'min/mile',
    presetsTitle: '빠른 거리 선택',
    calculateButton: '계산하기',
    resetButton: '초기화',
    recentRaceTitle: '최근 기록 기준',
    predictedTimesTitle: '종목별 예상 기록',
    distanceHeader: '거리',
    estimatedTimeHeader: '예상 기록',
    targetPaceHeader: '목표 페이스',
    trainingZoneHeader: '훈련 구간',
    paceRangeHeader: '페이스 범위',
    zoneEasy: '조깅 및 회복주',
    zoneEasyDesc: '유산소 기초 구축 및 피로 회복',
    zoneTempo: '템포런 및 파틀렉',
    zoneTempoDesc: '젖산 역치 향상 및 지속주 능적 향상',
    zoneIntervals: '인터벌 및 스피드주',
    zoneIntervalsDesc: 'VO2 Max 향상 및 스피드 지구력 강화',
    riegelExplanation: '예측 기록은 최근 기록 기반 리겔 공식 T2 = T1 * (D2 / D1)^1.06을 적용합니다.',
    seo: {
      title: '러닝 페이스 계산기 및 기록 예측',
      description: '러닝 페이스 계산, 리겔 공식 기반 마라톤 예상 완주 기록 및 훈련 페이스 구간 측정.',
      h1: '러닝 페이스 계산기 및 기록 예측',
      intro: '정확한 페이스 계산과 기록 예측은 러너에게 필수적인 도구입니다.',
      statsTitle: '성능 지표',
      stat1Label: '리겔 지수',
      stat1Value: '1.06',
      stat2Label: '주요 거리',
      stat2Value: '4개 종목',
      stat3Label: '페이스 계산',
      stat3Value: '3가지 방식',
      stat4Label: '목표 구간',
      stat4Value: '3단계',
      comparativeTitle: '단위 비교',
      comparativeItem1Title: '미터법 (min/km)',
      comparativeItem1Desc: '한국 및 국제 표준 단위.',
      comparativeItem2Title: '야드-파운드법 (min/mile)',
      comparativeItem2Desc: '미국 및 영국 표준 단위.',
      tableTitle: '주요 대회 거리 개요',
      tableCol1: '종목',
      tableCol2: '킬로미터',
      tableCol3: '마일',
      tableRow1Col1: '5K 로드',
      tableRow1Col2: '5.00 km',
      tableRow1Col3: '3.11 mi',
      tableRow2Col1: '10K 로드',
      tableRow2Col2: '10.00 km',
      tableRow2Col3: '6.21 mi',
      tableRow3Col1: '하프 마라톤',
      tableRow3Col2: '21.10 km',
      tableRow3Col3: '13.11 mi',
      tipTitle: '페이스 전략',
      tipText: '네거티브 스플릿이 후반 레이스에서 효과적입니다.',
      faqTitle: '자주 묻는 질문',
      faq1Q: '리겔 공식의 정확도는?',
      faq1A: '충분한 유산소 훈련이 전제될 때 높습니다.',
      faq2Q: 'min/km와 min/mile의 차이는?',
      faq2A: '1km당 및 1마일당 소요 시간입니다.',
      glossaryTitle: '러닝 용어집',
      term1Name: '리겔 공식',
      term1Def: '피터 리겔이 개발한 완주 기록 예측 수식.',
      term2Name: '젖산 역치',
      term2Def: '혈중 젖산 농도가 급격히 상승하는 운동 강도.',
    },
  },
};
