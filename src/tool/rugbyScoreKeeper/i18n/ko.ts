import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { RugbyScoreKeeperLocaleContent } from '../entry';

const slug = 'rugby-scorekeeper';
const title = '프리미엄 럭비 스코어키퍼: 신빈 타이머 및 경기 시계';
const description = '트라이, 컨버전, 페널티, 드롭골을 기록하며 럭비 경기 점수를 실시간으로 추적하세요. 신빈 카운트다운 타이머와 하프 관리를 갖춘 인터랙티브 경기장 스코어보드입니다.';

const faqData = [
  {
    question: '럭비 유니온 경기에서 점수는 어떻게 얻나요?',
    answer: '트라이는 5점이며, 선수가 상대팀 인골 지역에 공을 터치다운하면 인정됩니다. 트라이 후 컨버전 킥은 2점입니다. 페널티 킥과 드롭골은 각각 3점입니다.',
  },
  {
    question: '럭비에서 선수가 옐로카드를 받으면 어떻게 되나요?',
    answer: '옐로카드는 신빈 출장 정지 처분입니다. 해당 선수는 경기 시간 10분간 필드를 떠나야 합니다. 이 기간 동안 팀은 한 명이 부족한 상태로 경기를 진행합니다. 신빈 타이머는 경기 시계가 작동 중일 때만 카운트다운됩니다.',
  },
  {
    question: '럭비 유니온 경기는 얼마나 오래 진행되나요?',
    answer: '표준 럭비 유니온 경기는 40분 하프 2개로 구성되며, 하프타임은 10분입니다. 부상이나 심각한 사고 발생 시 경기 시계가 중지됩니다. 정지 시간에 대해 추가 시간이 부여될 수 있습니다.',
  },
];

const howToData = [
  {
    name: '득점 이벤트 기록하기',
    text: '트라이, 컨버전, 페널티 또는 드롭골 버튼을 탭하여 점수를 기록합니다. 트라이를 탭하면 컨버전 버튼이 자동으로 활성화됩니다.',
  },
  {
    name: '신빈 페널티 관리하기',
    text: '옐로카드를 탭하여 선수를 신빈으로 보냅니다. 선수 이름이나 번호를 입력하면 10분 카운트다운이 자동으로 시작됩니다.',
  },
  {
    name: '경기 시간 제어하기',
    text: '경기 시계를 사용하여 40분 하프 2개를 추적합니다. 부상 시 시계를 일시 정지하고 경기 재개 시 다시 시작합니다.',
  },
  {
    name: '점수 진행 상황 확인하기',
    text: '홈과 어웨이 점수를 라이브 스코어보드로 모니터링합니다. 득점 요약에서 트라이, 컨버전, 페널티, 드롭골의 세부 내역을 확인할 수 있습니다.',
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

export const content: RugbyScoreKeeperLocaleContent = {
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
      text: '무료 온라인 럭비 스코어키퍼: 라이브 경기 추적',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '인터랙티브 디지털 스코어보드로 럭비 경기 득점을 관리하세요. 트라이, 컨버전, 페널티, 드롭골을 실시간으로 기록합니다. 신빈 관리 시스템이 선수 출장 정지 시간을 자동으로 카운트다운하고, 경기 시계는 양쪽 하프를 정확하게 계측합니다. 지역 클럽 경기를 심판하든 유스 팀을 코칭하든, 이 도구가 모든 득점과 타이밍 세부 사항을 자동으로 처리합니다.',
    },
    {
      type: 'title',
      text: '럭비 유니온 득점 시스템 설명',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '럭비 유니온에는 4가지 득점 방법이 있으며, 각각 다른 기술과 전략이 필요합니다. 트라이는 가장 가치 있는 공격 플레이로, 수비 라인을 돌파하고 트라이 존에 공을 터치다운한 팀에 주어집니다. 트라이 후 득점 팀은 컨버전 킥으로 2점을 추가합니다. 페널티 킥과 드롭골은 전술적 깊이를 더해 오픈 플레이나 상대 반칙 상황에서 득점할 수 있게 합니다.',
    },
    {
      type: 'comparative',
      columns: 4,
      items: [
        {
          title: '트라이',
          description: '트라이 존에 공을 터치다운하여 5점.',
          icon: 'mdi:rugby',
          points: ['5점 획득', '컨버전 시도 기회', '공 터치다운 필요'],
        },
        {
          title: '컨버전',
          description: '트라이 후 골대 사이로 킥 성공 시 2점.',
          icon: 'mdi:goal',
          points: ['성공 시 2점', '트라이 위치에서 킥', '크로스바 위로 넘겨야 함'],
        },
        {
          title: '페널티 킥',
          description: '상대 반칙 후 골대를 향한 킥, 성공 시 3점.',
          icon: 'mdi:alert-octagon',
          points: ['3점 획득', '킥 또는 탭 가능', '접전 승부를 결정짓기도 함'],
        },
        {
          title: '드롭골',
          description: '오픈 플레이 중 드롭킥으로 골대 사이를 통과, 3점.',
          icon: 'mdi:circle-outline',
          points: ['3점 획득', '공이 땅에 먼저 닿아야 함', '고압 상황의 승부 결정자'],
        },
      ],
    },
    {
      type: 'title',
      text: '신빈 시스템 이해하기',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '신빈은 위험한 플레이나 반복된 반칙에 대한 일시적 출장 정지 제도입니다. 심판이 옐로카드를 제시하면 선수는 경기 시간 10분간 필드를 떠나야 합니다. 이 기간 동안 팀은 한 명이 부족한 상태로 경기하여 상대팀에게 수적 우위를 제공합니다. 신빈 타이머는 경기 시계가 작동 중일 때만 카운트다운되므로, 정지 상황과 관계없이 공정한 처벌이 집행됩니다.',
    },
    {
      type: 'list',
      items: [
        '<strong>옐로카드 페널티:</strong> 위험한 플레이 또는 팀 반복 반칙으로 신빈 10분 출장 정지.',
        '<strong>수적 열세:</strong> 처벌 기간 동안 반칙 팀은 15명 대신 14명으로 경기.',
        '<strong>자동 복귀:</strong> 타이머 만료 시 선수가 하프웨이 라인에서 자동으로 경기에 복귀.',
        '<strong>레드카드 승격:</strong> 두 번째 옐로카드 또는 한 번의 심각한 위반 시 레드카드와 영구 퇴장.',
      ],
    },
    {
      type: 'title',
      text: '경기 시간 및 하프 관리',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '표준 럭비 유니온 경기는 40분 하프 2개로 나뉘며 하프타임은 10분입니다. 경기 시계는 활성 플레이 중 연속적으로 작동하지만, 부상이나 심각한 반칙 검토 등 정지 상황 시 심판이 일시 중지할 수 있습니다. 이 디지털 스코어키퍼에는 일시 정지 및 재생 제어, 자동 하프 추적, 각 플레이 기간에 대한 명확한 시각적 표시기를 갖춘 정밀 경기 시계가 포함되어 있습니다.',
    },
    {
      type: 'title',
      text: '디지털 럭비 스코어키퍼를 사용해야 하는 이유',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '럭비에서 수동 기록은 다양한 득점 방식, 신빈 타이밍 요구 사항, 하프 관리로 인해 까다롭습니다. 이 브라우저 도구는 정확한 실시간 득점, 자동 신빈 카운트다운, 정밀한 경기 시간 관리를 제공합니다. 코치는 계산 대신 게임 전략에 집중할 수 있고, 심판은 신뢰할 수 있는 백업 득점 시스템을 가지며, 선수는 경기 상태를 한눈에 확인할 수 있습니다.',
    },
  ],
  ui: {
    title: '럭비 스코어키퍼',
    description: '경기 점수와 신빈 타이머를 추적합니다.',
    home: '홈',
    away: '어웨이',
    score: '점수',
    tryLabel: '트라이 +5',
    conversion: '컨버전 +2',
    penalty: '페널티 +3',
    dropGoal: '드롭골 +3',
    conversionYes: '성공',
    conversionNo: '실패',
    sinBin: '옐로카드',
    sinBinTitle: '신빈 출장 정지',
    sinBinPlayer: '선수 이름 또는 번호:',
    sinBinAdd: '출장 정지 시작',
    sinBinEmpty: '진행 중인 출장 정지 없음',
    sinBinReturn: '복귀',
    matchClock: '경기 시계',
    half: '하프',
    half1: '전반',
    half2: '후반',
    startMatch: '킥오프',
    pauseMatch: '일시 정지',
    resumeMatch: '재개',
    resetMatch: '경기 초기화',
    resetConfirm: '현재 경기를 초기화하시겠습니까? 모든 점수와 타이머가 사라집니다.',
    cancel: '취소',
    confirm: '초기화 확인',
    period: '피리어드',
    scoringSummary: '득점 요약',
    tryScored: '트라이',
    conversionSuccess: '컨버전 성공',
    conversionMiss: '컨버전 실패',
    penaltyScored: '페널티',
    dropGoalScored: '드롭골',
    totalPoints: '합계',
    fullscreen: '전체 화면',
    toggleSound: '사운드 전환',
    eventLog: '이벤트 로그',
    eventEmpty: '아직 이벤트 없음',
    undoBtn: '마지막 실행 취소',
    timeOff: '타임 오프',
    timeOn: '타임 온',
  },
};
