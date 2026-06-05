import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DartsScoreKeeperUI } from '../ui';

const slug = 'darts-scorekeeper';
const title = '온라인 다트 스코어키퍼 : 레그 및 세트 트래커';
const description = '레그와 세트 점수로 다트 경기를 추적하세요. 라이브 체크아웃 계산 및 통계가 포함된 501 및 301 경기용 무료 온라인 다트 스코어키퍼.';

const faqData = [
  {
    question: '501 및 301 다트 점수는 어떻게 계산하나요?',
    answer: '플레이어는 501 또는 301점의 고정 점수로 시작합니다. 각 플레이어는 번갈아 가며 세 개의 다트를 던지고, 그 합계가 점수에서 차감됩니다. 목표는 정확히 0점에 도달하는 것입니다. 더블 아웃 규칙이 활성화된 경우, 마지막 승리 다트는 더블 세그먼트 또는 이너 불스아이에 맞아야 합니다.',
  },
  {
    question: '다트에서 버스트란 무엇이며 언제 발생하나요?',
    answer: '버스트는 플레이어가 남은 점수보다 더 많은 점수를 얻거나, 더블 아웃 규칙이 활성화된 상태에서 점수가 정확히 1점으로 줄어들 때 발생합니다. 플레이어가 버스트하면 해당 턴이 즉시 종료되고 점수는 그 턴 시작 시의 합계로 재설정됩니다.',
  },
  {
    question: '다트 평균은 어떻게 계산하나요?',
    answer: '다트 평균은 총 획득 점수를 총 던진 다트 수로 나누고 결과에 3을 곱하여 계산합니다. 이는 플레이어가 표준 3다트 턴당 달성하는 평균 점수를 나타냅니다.',
  },
  {
    question: '다트에서 체크아웃이란 무엇인가요?',
    answer: '체크아웃은 남은 점수를 0으로 줄이고 레그에서 승리하는 데 필요한 특정 던지기 조합입니다. 프로 스코어키퍼는 170 이하의 점수에 대한 체크아웃 제안을 표시하여 플레이어가 어떤 싱글, 더블 또는 트리플을 노려야 하는지 안내합니다.',
  },
];

const howToData = [
  {
    name: '시작 점수 및 규칙 선택',
    text: '시작 점수로 501 또는 301을 선택하고 원하는 플레이 수준에 따라 더블 아웃 규칙을 켜거나 끕니다.',
  },
  {
    name: '플레이어 이름 입력',
    text: '스코어보드 상단의 플레이어 이름 필드를 클릭하여 이름을 사용자 지정합니다. 값은 브라우저에 자동 저장됩니다.',
  },
  {
    name: '던진 다트 기록',
    text: '대화형 키패드를 사용하거나 다트보드 섹터를 직접 탭하여 던지기를 기록합니다. 먼저 배율(싱글, 더블 또는 트리플)을 선택한 다음 맞힌 숫자를 선택합니다.',
  },
  {
    name: '체크아웃 권장 사항 따르기',
    text: '남은 점수가 170 미만으로 떨어지면 체크아웃 패널을 보고 레그를 끝내기 위한 최적의 목표물을 확인합니다.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'ko',
};

export const content: ToolLocaleContent<DartsScoreKeeperUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '무료 온라인 다트 스코어키퍼 및 매치 트래커',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '다트에서 점수를 관리하려면 빠른 암산과 집중력이 필요합니다. 이 디지털 다트 레그 트래커는 모든 계산을 처리하여 던지기에만 집중할 수 있게 해줍니다. 혼자 연습하든 친구들과 경쟁 경기를 하든, 이 스코어보드는 포인트, 레그, 세트, 던지기 평균 및 더블 아웃 체크아웃 목표를 추적합니다.',
    },
    {
      type: 'title',
      text: '표준 다트 점수 형식 설명',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '다트 경기는 레그와 세트로 진행됩니다. 전 세계적으로 가장 인기 있는 형식은 501과 301이며, 둘 다 플레이어가 점수를 0으로 줄이는 뺄셈 게임입니다.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '501 토너먼트',
          description: '전 세계 프로 토너먼트의 표준 형식.',
          icon: 'mdi:trophy-outline',
          points: ['표준 시작 점수', '더블 아웃 필수', '고득점 중심'],
        },
        {
          title: '301 캐주얼',
          description: '빠른 캐주얼 경기에 이상적인 뺄셈 게임의 더 빠른 버전.',
          icon: 'mdi:clock-outline',
          points: ['더 빠른 게임 속도', '더블 인 옵션 일반적', '연습에 좋음'],
        },
        {
          title: '크리켓 모드',
          description: '펍과 캐주얼 리그에서 인기 있는 전략적 타겟 맞히기 게임.',
          icon: 'mdi:bullseye',
          points: ['15~20 숫자 집중', '불스아이 추적', '대체 규칙 시스템'],
        },
      ],
    },
    {
      type: 'title',
      text: '다트 체크아웃 수학 이해하기',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '다트에서 가능한 최고 체크아웃은 170으로, 트리플 20, 트리플 20, 더블 불을 던져 달성합니다. 점수가 170 이하에 도달하면 체크아웃 범위에 진입하여 특정 다트 순서로 게임에서 이길 수 있습니다.',
    },
    {
      type: 'table',
      headers: ['점수', '다트 1 목표', '다트 2 목표', '다트 3 목표'],
      rows: [
        ['170', '트리플 20 (60)', '트리플 20 (60)', '더블 불 (50)'],
        ['120', '트리플 20 (60)', '싱글 20 (20)', '더블 20 (40)'],
        ['100', '트리플 20 (60)', '싱글 20 (20)', '더블 10 (20)'],
        ['80', '트리플 20 (60)', '더블 10 (20)', '-'],
        ['40', '더블 20 (40)', '-', '-'],
      ],
    },
    {
      type: 'title',
      text: '이 디지털 다트 스코어보드의 기능',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>대화형 입력 방식</strong> 시각적 방사형 다트보드와 빠른 숫자 키패드 간 전환.',
        '<strong>스마트 체크아웃 엔진</strong> 레그 종료를 위한 실시간 조합 표시.',
        '<strong>버스트 감지</strong> 잘못된 던지기를 자동으로 재설정하고 사용자에게 알림.',
        '<strong>턴 기록 로그</strong> 이전 라운드와 남은 점수를 추적.',
        '<strong>상세 경기 통계</strong> 3다트 평균을 동적으로 계산.',
      ],
    },
    {
      type: 'title',
      text: '수동 vs 디지털 다트 추적',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '전통적인 칠판은 쓰기, 지우기 및 지속적인 계산이 필요합니다. 이 온라인 스코어보드는 오류 위험을 제거하고, 평균을 자동화하며, 체크아웃 목표를 제시합니다. 기기를 보드 옆에 두고 전체 화면 모드로 전환하여 화면을 활성 상태로 유지하고 번거로움 없는 점수 계산을 즐기세요.',
    },
  ],
  ui: {
    playerA: '플레이어 1',
    playerB: '플레이어 2',
    winnerLabel: '챔피언',
    reset: '리셋',
    resetConfirm: '경기를 리셋할까요? 모든 데이터가 손실됩니다.',
    cancel: '취소',
    fullscreen: '전체 화면',
    exitFullscreen: '전체 화면 종료',
    leg: '레그',
    set: '세트',
    average: '평균',
    checkout: '체크아웃',
    busted: '버스트',
    dart: '다트 턴',
    score301: '301',
    score501: '501',
    doubleOut: '더블 아웃',
    noCheckout: '체크아웃 없음',
  },
};
