import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SnookerScoreKeeperLocaleContent } from '../entry';

const slug = 'snooker-frame-tracker-break-calculator';
const title = '프리미엄 스누커 프레임 트래커 및 브레이크 계산기';
const description = '라이브 스누커 프레임 점수를 추적하고, 현재 브레이크 값을 계산하며, 테이블의 남은 점수를 표시하고, 스누커 필요 상황과 같은 실시간 적자 상태를 확인할 수 있습니다.';

const faqData = [
  {
    question: '스누커 테이블의 최대 남은 점수는 어떻게 계산되나요?',
    answer: '남아 있는 각 적색공은 8점(적색공 자체 1점 + 흑색공을 포팅했을 때 7점)으로 계산됩니다. 모든 적색공이 포팅되면 나머지 색상공의 총점은 27점입니다.',
  },
  {
    question: '이 계산기에서 "스누커 필요"는 무엇을 의미하나요?',
    answer: '점수 차이가 테이블의 총 남은 점수보다 큰 상태를 의미하며, 플레이어가 따라잡기 위해 상대방의 파울을 유도해야 함을 나타냅니다.',
  },
  {
    question: '승부 흑색공(Deciding Black) 상황이란 무엇인가요?',
    answer: '모든 공이 포팅되고 프레임 점수가 동점일 때 발생하는 상황으로, 흑색공을 재배치하여 승부를 가립니다.',
  },
];

const howToData = [
  {
    name: '플레이어 이름 설정',
    text: '두 스누커 선수의 이름을 입력하여 스코어보드 표시를 맞춤 설정합니다.',
  },
  {
    name: '공 포팅 및 브레이크 기록',
    text: '빛나는 펠트 공을 탭하여 포팅한 공을 순서대로 기록합니다. 계산기는 규칙에 따라 부적격 색상을 자동으로 잠급니다.',
  },
  {
    name: '적자 상태 확인',
    text: '실시간 상태 표시줄에서 플레이어가 안전한지, 스누커가 필요한지, 또는 프레임이 여전히 진행 중인지 확인할 수 있습니다.',
  },
  {
    name: '파울 페널티 기록',
    text: '파울 메뉴를 열어 상대방에게 직접 페널티 점수를 부여하고 활성 플레이어 턴을 전환합니다.',
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
    image: undefined,
    url: undefined,
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

export const content: SnookerScoreKeeperLocaleContent = {
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
      text: '무료 온라인 스누커 프레임 스코어키퍼 및 브레이크 카운터',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '디지털 스코어보드로 스누커 프레임을 간편하게 관리하세요. 이 도구는 활성 브레이크 포인트, 테이블 남은 점수, 정확한 점수 차이를 계산합니다. 펠트 스타일 인터페이스는 스누커 규칙 시퀀스에 따라 동적으로 점등되는 대화형 표시기를 제공합니다. 지역 클럽 토너먼트 심판부터 집에서 친선 프레임을 기록하는 것까지, 이 애플리케이션이 모든 계산을 자동으로 처리합니다.',
    },
    {
      type: 'title',
      text: '스누커 점수 계산 및 적자 계산 이해하기',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '표준 스누커 게임은 각 1점짜리 적색공 15개로 시작합니다. 선수는 적색공과 색상공을 번갈아 포팅해야 합니다. 포팅된 색상공은 모든 적색공이 사라질 때까지 원래 위치로 돌아갑니다. 그 후에는 노란색부터 검은색까지 숫자 순서대로 색상공을 포팅해야 합니다. 이 계산기는 순서를 추적하고 스누커가 필요할 때 경고합니다. 점수 차이와 테이블에 남은 최대 점수를 계산하여 프레임이 승리 임계값에 도달한 시점을 정확히 판단합니다.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '프레임 스코어보드',
          description: '고대비 디스플레이에서 프레임 점수와 플레이어 턴을 추적합니다.',
          icon: 'mdi:scoreboard-outline',
          points: ['활성 플레이어 명확한 강조', '사용자 정의 플레이어 이름 입력', '원클릭 실행 취소 지원'],
        },
        {
          title: '브레이크 계산기',
          description: '공 색상 기록과 함께 활성 포팅 브레이크를 실시간 추적합니다.',
          icon: 'mdi:billiards',
          points: ['포팅 내역 타임라인 표시', '규칙에 따른 자동 공 잠금', '색상 구분 브레이크 상태'],
        },
        {
          title: '남은 점수 게이지',
          description: '그린 펠트 테이블의 최대 남은 점수를 추적합니다.',
          icon: 'mdi:percent-outline',
          points: ['점수 차이 추적', '동적 스누커 필요 경고', '승부 흑색공 감지'],
        },
      ],
    },
    {
      type: 'title',
      text: '대화형 컨트롤 및 사운드 피드백',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>촉각적 펠트 HUD</strong>로 공을 탭하여 점수를 추가하고 브레이크 타임라인에 기록합니다.',
        '<strong>파울 액션 버튼</strong>으로 상대방 점수에 4~7점의 페널티를 적용하고 활성 턴을 종료합니다.',
        '<strong>동적 상태 표시등</strong>이 정상 플레이, 안전 마진, 스누커 필요 상태를 업데이트하여 표시합니다.',
        '<strong>오디오 합성</strong>이 포팅 시 포켓 사운드, 파울 시 부저 사운드를 재생합니다.',
      ],
    },
    {
      type: 'title',
      text: '스누커 파울 규칙 및 페널티 시스템 설명',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '스누커의 파울은 상대방에게 점수를 부여합니다. 페널티 값은 대상 공 또는 파울에 관련된 공의 가치에 따라 결정되며, 최소 페널티는 4점입니다. 예를 들어 흰색 큐볼을 포팅하거나, 적색공 대신 색상공을 먼저 맞히거나, 어떤 공도 맞히지 못하면 페널티가 발생합니다. 파란색, 분홍색, 검은색을 목표로 할 때 파울이 발생하면 각각 5점, 6점, 7점의 페널티가 부과됩니다. 이 디지털 스코어카드는 빠른 파울 패널을 통해 페널티 값을 쉽게 추가하고 활성 턴을 자동으로 다음 플레이어에게 전환합니다.',
    },
    {
      type: 'title',
      text: '승부 흑색공(Deciding Black) 상황에서의 진행',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '모든 공이 포팅되고 프레임 점수가 동점이면, 검은색공이 원래 위치에 재배치됩니다. 선수들은 제비뽑기로 선공을 결정하며, 먼저 검은색공을 포팅하거나 파울을 범한 선수가 프레임에서 패배합니다. 이 승부 흑색공 규칙은 추가 풀 프레임 없이 접전의 공정한 해결을 보장하며, 트래커가 이 동점 종료 상태를 자동으로 감지하여 두 선수에게 알립니다.',
    },
    {
      type: 'title',
      text: '디지털 스누커 트래커를 사용해야 하는 이유',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '접전 프레임 중 남은 점수와 적자 마진을 수동으로 계산하면 인적 오류가 발생하기 쉽습니다. 이 브라우저 도구는 정확한 실시간 통계를 제공하여 선수들이 기술과 전략에 집중할 수 있게 합니다. 포팅된 공의 대화형 타임라인을 유지함으로써 심판은 논란의 여지가 있는 브레이크를 쉽게 확인하고 공식 경기의 연속성을 유지할 수 있습니다.',
    },
  ],
  ui: {
    title: '스누커 스코어키퍼',
    description: '프레임 점수와 브레이크를 기록합니다.',
    player1: '플레이어 1',
    player2: '플레이어 2',
    score: '점수',
    currentBreak: '브레이크',
    remainingPoints: '남은 점수',
    deficit: '격차',
    statusSafe: '안전',
    statusNeedSnookers: '스누커 필요',
    statusDecidingBlack: '승부 흑색공',
    statusNormal: '정상',
    foul: '파울',
    foulTitle: '파울공 페널티 선택',
    foulPoints: '페널티',
    foulOnRed: '적/노/초/갈',
    foulOnYellow: '노랑',
    foulOnGreen: '초록',
    foulOnBrown: '갈색',
    foulOnBlue: '파랑',
    foulOnPink: '분홍',
    foulOnBlack: '검정',
    reset: '리셋',
    resetConfirm: '현재 프레임을 리셋하시겠습니까? 모든 점수가 사라집니다.',
    cancel: '취소',
    confirm: '리셋 확인',
    endTurn: '턴 종료',
    miss: '미스',
    redsRemaining: '적색공',
    pocketedBalls: '포팅된 공',
    toggleSound: '사운드 전환',
    fullscreen: '전체화면',
  },
};
