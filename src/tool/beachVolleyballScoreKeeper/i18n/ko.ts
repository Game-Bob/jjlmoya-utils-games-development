import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { BeachVolleyballLocaleContent } from '../entry';

const slug = 'beach-volleyball-scorekeeper';
const title = '비치발리볼 스코어키퍼 & 로테이션 트래커';
const description = '인터랙티브한 탑다운 골든 샌드 코트 화면으로 비치발리볼 점수, 서브 로테이션 순서, 바람에 따른 사이드 체인지, 세트를 추적합니다.';

const faq = [
  {
    question: '비치발리볼에서 팀이 언제 사이드를 바꾸나요?',
    answer: '야외 환경(바람, 태양, 모래)에서 공정성을 보장하기 위해 첫 두 세트에서는 7점마다, 타이브레이크 3세트에서는 5점마다 팀이 사이드를 바꿉니다.',
  },
  {
    question: '비치발리볼에서 서브 로테이션은 어떻게 작동하나요?',
    answer: '각 팀은 2명의 선수가 번갈아 서브를 넣어야 합니다. 팀이 사이드아웃(서비스 브레이크)을 얻으면 이전에 서브하지 않은 선수가 다음에 서브하도록 로테이션을 변경해야 합니다.',
  },
  {
    question: '비치발리볼 세트를 승리하려면 몇 점이 필요한가요?',
    answer: '1세트와 2세트는 21점까지 플레이합니다. 3세트가 필요한 경우 15점까지 플레이합니다. 모든 경우에 최소 2점 차이로 승리해야 합니다.',
  },
];

const howTo = [
  {
    name: '라인업 설정',
    text: '팀 A와 팀 B의 두 선수에 대한 커스텀 이름을 입력합니다.',
  },
  {
    name: '점수 기록',
    text: '팀 카드를 탭하거나 인터랙티브 샌드 코트를 클릭하여 점수를 추가합니다. 라인업과 로테이션이 자동으로 업데이트됩니다.',
  },
  {
    name: '사이드 체인지 경고 따르기',
    text: '교체 배너가 아래로 슬라이드되면 물리적으로 사이드를 이동하고 스왑 버튼을 클릭하여 코트 방향을 반전시킵니다.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
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
  step: howTo.map((step, i) => ({
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

export const content: BeachVolleyballLocaleContent = {
  slug,
  title,
  description,
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '온라인 비치발리볼 스코어보드 & 서브 로테이션 트래커',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '뜨거운 태양 아래에서 서브 순서와 팀 포지션을 추적하는 것은 어려울 수 있습니다. 이 프로페셔널 비치발리볼 스코어키퍼는 모래 질감의 고대비 디지털 코트 레이아웃을 갖추고 있어 야외 가시성에 최적화되어 있습니다. 눈부심으로 인한 판독 문제를 방지하고, 사이드 체인지 규칙을 자동화하며, 사이드아웃 후 두 선수 중 누가 서브할 차례인지 추적합니다.',
    },
    {
      type: 'title',
      text: '비치발리볼 로테이션 및 서브 규칙 이해하기',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '2대2 비치발리볼에는 코트 위치에 따른 고정 포지션이나 로테이션 반칙이 없지만, 선수들은 엄격히 서브를 번갈아 가며 해야 합니다. 리시브 팀이 랠리에서 이기면(사이드아웃) 서브권을 얻습니다. 자신의 팀이 이전에 서브했을 때 서브하지 않은 선수가 새로운 서버가 되어야 합니다. 순서에 맞지 않게 서브하는 것은 반칙이며 상대방에게 점수를 줍니다. 이 디지털 보드는 선수 원형 노드 옆에 활성 서브 표시와 바운싱 볼 인디케이터를 갖추어 로테이션 오류를 방지합니다.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '공식 FIVB 규칙',
          description: '세트 제한 및 사이드 체인지를 포함한 공식 점수 가이드라인을 충족합니다.',
          icon: 'mdi:volleyball',
          points: ['21점제(타이브레이크 15점)', '엄격한 2점 차 승리', '자동 사이드 체인지'],
        },
        {
          title: '로테이션 추적',
          description: '누가 서브할 차례인지 혼란스러워하거나 논쟁하지 않습니다.',
          icon: 'mdi:account-sync-outline',
          points: ['발광 서브 인디케이터', '모래 위에 표시된 이니셜', '라인업 오버레이 모달'],
        },
        {
          title: '야외 최적화',
          description: '직사광선 아래 샌드 코트에서 실제 플레이를 위해 제작되었습니다.',
          icon: 'mdi:weather-sunny',
          points: ['고대비 노란색 테마', 'Wake Lock 화면 유지', '스와이프 제스처로 점수 취소'],
        },
      ],
    },
    {
      type: 'title',
      text: '인터랙티브 기능 & 게임 설정',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>골든 샌드 SVG 코트:</strong> 게임 상태를 시각적으로 반영합니다. 코트 절반을 직접 탭하여 해당 팀에 점수를 부여합니다.',
        '<strong>코트 회전 애니메이션:</strong> 사이드 체인지 경고가 작동하면 스위치 버튼을 클릭하여 전체 SVG 코트를 180도 회전시켜 디스플레이가 실제 위치와 일치하도록 합니다.',
        '<strong>FIVB 사이드 체인지 알람:</strong> 합계 점수가 7의 배수(1, 2세트) 또는 5의 배수(마지막 세트)일 때 가시성이 높은 경고 배너를 표시합니다.',
        '<strong>모래 튀김 파티클:</strong> 탭 좌표에서 애니메이션 모래 파티클이 터지면서 점수 변경 시 시각적 피드백을 제공합니다.',
        '<strong>제스처 실행 취소 컨트롤:</strong> 카드를 아래로 스와이프하여 마지막으로 기록된 점수를 즉시 취소합니다.',
      ],
    },
    {
      type: 'title',
      text: '비치발리볼에서 팀이 사이드를 바꾸는 이유',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '실내 배구와 달리 비치발리볼 경기는 태양 눈부심, 열, 바람 세기, 모래 상태와 같은 환경 요소에 크게 영향을 받습니다. 자주 사이드를 변경하면 유리한 바람 방향이나 태양 위치로 인한 불공정한 이점을 방지할 수 있습니다. 규칙에 따르면 첫 두 세트에서는 7점마다, 세 번째 세트에서는 5점마다 사이드를 변경해야 합니다.',
    },
  ],
  ui: {
    teamA: '팀1',
    teamB: '팀2',
    points: '점수',
    sets: '세트',
    reset: '초기화',
    resetConfirm: '경기를 초기화할까요? 모든 점수와 라인업이 사라집니다.',
    cancel: '취소',
    switchSides: '사이드 체인지',
    switchSidesDesc: '누적 점수가 교체 임계값에 도달했습니다!',
    fullscreen: '전체화면',
    exitFullscreen: '전체화면 종료',
    player1: '선수1',
    player2: '선수2',
    serving: '서브 중',
    winner: '승자',
    undo: '실행 취소',
  },
};
