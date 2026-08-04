import { bibliographyEntries } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SwimCssCalculatorUI } from '../ui';

const slug = 'css-swim-calculator';
const title = '임계 수영 속도 CSS 계산기';
const description = '400m 및 200m 수영 테스트 결과를 바탕으로 임계 수영 속도 CSS 와 100m당 목표 페이스를 계산합니다.';

const faqData = [
  {
    question: 'CSS 테스트는 얼마나 자주 실시해야 하나요?',
    answer: '수영 선수 및 트라이애슬리트는 4~6주마다 400m 및 200m CSS 테스트를 실시하여 목표 페이스를 조정하는 것이 좋습니다.',
  },
  {
    question: '야드 단위 풀에서도 계산이 가능한가요?',
    answer: '네. 임계 수영 속도 수식은 야드 단위 쇼트 코스 풀에서도 동일하게 적용됩니다.',
  },
];

const howToData = [
  {
    name: '수영장 거리 단위 선택',
    text: '미터(25m / 50m 풀) 또는 야드(25yd 풀)를 선택합니다.',
  },
  {
    name: '400m 기록 입력',
    text: '최선을 다해 측정한 400m 기록(분·초)을 입력합니다.',
  },
  {
    name: '200m 기록 입력',
    text: '최선을 다해 측정한 200m 기록(분·초)을 입력합니다.',
  },
  {
    name: '결과 및 구간 기록 확인',
    text: '계산 버튼을 클릭하여 유산소 속도와 구간별 목표 타임을 확인합니다.',
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

const ui: SwimCssCalculatorUI = {
  title: '임계 수영 속도 CSS 계산기',
  subtitle: '400m 및 200m 테스트 기록으로 유산소 역치 페이스와 구간별 목표 타임을 계산합니다.',
  unitLabel: '수영장 거리 단위',
  unitMeters: '미터 (25m / 50m 풀)',
  unitYards: '야드 (25yd 풀)',
  t400Label: '400m / 400yd 기록',
  t200Label: '200m / 200yd 기록',
  minutesLabel: '분',
  secondsLabel: '초',
  calculateButton: 'CSS 및 구간 타임 계산',
  resetButton: '초기화',
  cssResultTitle: '임계 수영 속도 계산 결과',
  cssSpeedLabel: '유산소 속도',
  cssPace100Label: '100m당 CSS 페이스',
  lapPaceLabel: '25m / 25yd 턴 목표',
  unitMeterPerSec: 'm/s',
  unitYardPerSec: 'yd/s',
  pace100mUnit: '/100m',
  pace100ydUnit: '/100yd',
  trainingZonesTitle: '수영 훈련 목표 페이스 매트릭스',
  zoneHeader: '강도 영역',
  pace100Header: '목표 페이스 / 100',
  split50Header: '50m 구간',
  split100Header: '100m 구간',
  split200Header: '200m 구간',
  split400Header: '400m 구간',
  zoneAerobic: '유산소 지구력',
  zoneAerobicDesc: '장거리 유산소 세트 및 워밍업용 (CSS 페이스의 약 104%)',
  zoneAerobicRest: '휴식: 세트당 10초 - 15초',
  zoneCss: 'CSS 임계값',
  zoneCssDesc: '역치 세트 및 대회 페이스 유지용 (CSS 페이스의 약 100%)',
  zoneCssRest: '휴식: 세트당 15초 - 20초',
  zoneVo2Max: 'VO2 Max 스피드',
  zoneVo2MaxDesc: '고강도 인터벌 훈련용 (CSS 페이스의 약 96%)',
  zoneVo2MaxRest: '휴식: 세트당 30초 - 45초',
  invalidNotice: '400m 기록은 200m 기록보다 커야 합니다.',
  copySplitsButton: '구간 기록 복사',
  copiedNotice: '구간 기록이 복사되었습니다',
  seo: {
    title: '임계 수영 속도 CSS 계산기 수영 페이스 매트릭스',
    description: '400m 및 200m 수영 테스트 결과를 바탕으로 임계 수영 속도 CSS 와 100m당 목표 페이스를 계산합니다.',
    h1: '임계 수영 속도 CSS 계산기 및 훈련 페이스 매트릭스',
    intro: '임계 수영 속도 CSS는 수영 선수와 트라이애슬리트가 유산소 역치를 기준으로 훈련 세션을 구성하는 기준 지표입니다.',
    statsTitle: '주요 성과 지표',
    stat1Label: '기준 테스트 1',
    stat1Value: '400m 전력 측정',
    stat2Label: '기준 테스트 2',
    stat2Value: '200m 전력 측정',
    stat3Label: '역치 지표',
    stat3Value: '100m 기준 CSS 페이스',
    stat4Label: '실전 적용',
    stat4Value: '시계 통과 목표 타임',
    comparativeTitle: 'CSS 페이스 vs 심박수 수영 훈련',
    comparativeItem1Title: '임계 수영 속도 CSS 방식',
    comparativeItem1Desc: '수중 추진 속도를 직접 측정하여 턴 기술과 영법 효율성을 정확하게 반영합니다.',
    comparativeItem2Title: '전통적 심박수 측정',
    comparativeItem2Desc: '수중에서의 센서 반응 지연이 발생하며 피로에 따른 영법 변화를 제대로 반영하지 못합니다.',
    tableTitle: '훈련 영역별 구간 기록 및 휴식 시간',
    tableCol1: '훈련 영역',
    tableCol2: '생리학적 적응',
    tableCol3: '권장 거리',
    tableRow1Col1: '유산소 지구력',
    tableRow1Col2: '모세혈관 발달 및 지방 대사 효율성 향상.',
    tableRow1Col3: '400m~800m 반복 (휴식 10~15초).',
    tableRow2Col1: 'CSS 임계값',
    tableRow2Col2: '젖산 처리 능력 및 유산소 파워 유지.',
    tableRow2Col3: '100m~300m 반복 (휴식 15~20초).',
    tableRow3Col1: 'VO2 Max 스피드',
    tableRow3Col2: '최대 산소 섭취량 및 스트로크 빈도 향상.',
    tableRow3Col3: '50m~100m 인터벌 (휴식 시간 확대).',
    tipTitle: '정확한 측정을 위한 팁',
    tipText: '400m 측정 시 초반 100m에서 오버 페이스를 하지 않도록 페이스를 고르게 배분하세요.',
    faqTitle: '임계 수영 속도 관련 자주 묻는 질문',
    faq1Q: '테스트는 얼마나 자주 하나요?',
    faq1A: '4~6주 간격으로 실시하는 것을 권장합니다.',
    faq2Q: '야드 풀에서도 사용 가능한가요?',
    faq2A: '네. 수식은 동일하게 적용됩니다.',
    glossaryTitle: '수영 생리학 용어집',
    term1Name: '임계 수영 속도',
    term1Def: '탈진 없이 지속적으로 유지할 수 있는 이론상 최대 수영 속도.',
    term2Name: '구간 기록',
    term2Def: '수영장 턴 지점에서 확인해야 할 목표 통과 시간.',
  },
};

export const content: ToolLocaleContent<SwimCssCalculatorUI> = {
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
      text: '임계 수영 속도의 생리학적 원리',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '임계 수영 속도 CSS는 수영 거리와 시간의 선형 관계 기울기를 의미합니다. 400m 기록에서 200m 기록을 차감하여 무산소 능력의 영향을 배제합니다.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '400m & 200m', label: '표준 테스트 쌍' },
        { value: '100m 기준', label: '페이스 기준' },
        { value: '3개 영역', label: '강도 매트릭스' },
        { value: '4개 구간', label: '목표 통과 타임' },
      ],
    },
    {
      type: 'title',
      text: 'CSS 페이스 vs 수중 심박수 모니터링 비교',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '실측 CSS 페이스',
          description: '수중 실제 이동 속도를 측정하여 턴 동작과 유선형 자세 효율을 반영합니다.',
        },
        {
          title: '수중 심박수 센서',
          description: '센서 수밀성 문제 및 심박수 반응 지연이 발생하기 쉽습니다.',
        },
      ],
    },
    {
      type: 'title',
      text: '훈련 영역 및 휴식 시간 표',
      level: 2,
    },
    {
      type: 'table',
      headers: ['영역명', 'CSS 대비 페이스', '주요 훈련 목표', '권장 휴식 시간'],
      rows: [
        ['유산소 지구력', 'CSS 타임의 104%', '기초 유산소 능력 향상', '10초~15초'],
        ['CSS 임계값', '100% (CSS 타임과 동일)', '젖산 역치 및 대회 페이스 유지', '15초~20초'],
        ['VO2 Max 스피드', 'CSS 타임의 96%', '최대 산소 섭취량 향상', '30초~45초'],
      ],
    },
    {
      type: 'title',
      text: '실전 인터벌 세트 운영 전략',
      level: 2,
    },
    {
      type: 'tip',
      title: '목표 페이스 유지 조언',
      html: '첫 50m 통과 시간을 엄격하게 준수하세요. 2초 빠르게 출발하면 후반부에 급격한 페이스 저하가 발생합니다.',
    },
  ],
  ui,
};
