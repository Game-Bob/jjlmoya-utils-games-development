import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { StreetballLocaleContent } from '../entry';

const slug = 'streetball-3x3-basketball-scorekeeper';
const title = '프리미엄 스트리트볼 3x3 스코어키퍼 (쇼트클록 포함)';
const description = '통합 12초 쇼트클록, 팀 파울, 서든데스 점수, 다이나믹 하프코트 시각 표시기로 FIBA 3x3 스트리트볼 점수를 추적하세요.';

const faq = [
  {
    question: '3x3 스트리트볼에서 12초 쇼트클록은 어떻게 작동하나요?',
    answer: 'FIBA 3x3에서 팀이 볼을 확보하면 12초 이내에 슛을 시도해야 합니다. 쇼트클록은 소유권이 변경되면 12초로, 공격 리바운드나 특정 조건의 파울 시에는 14초로 리셋됩니다.',
  },
  {
    question: '3x3 농구에서 서든데스 점수 제한은 무엇인가요?',
    answer: '경기 중 먼저 21점을 달성한 팀이 남은 시간에 관계없이 즉시 승리합니다. 이것이 서든데스 룰입니다.',
  },
  {
    question: '팀 파울은 경기에 어떤 영향을 미치나요?',
    answer: '7번째 팀 파울부터 상대팀에게 자유투 2구가 주어집니다. 10번째 파울부터는 자유투 2구와 함께 볼 소유권도 부여되며 페널티 상태가 적용됩니다.',
  },
];

const howTo = [
  {
    name: '팀 이름 설정하기',
    text: '두 스트리트볼 팀의 이름을 직접 입력하여 HUD를 커스터마이즈하세요.',
  },
  {
    name: '점수 및 소유권 기록하기',
    text: '인터랙티브 아스팔트 코트를 탭하여 1점(아크 안) 또는 2점(아크 밖)을 추가하고 소유권 표시를 전환하세요.',
  },
  {
    name: '쇼트클록 제어하기',
    text: '쇼트클록을 탭하여 12초로 리셋, 보조 리셋 버튼으로 14초로 리셋, 더블 탭으로 카운트다운을 일시정지하세요.',
  },
  {
    name: '팀 파울 관리하기',
    text: '카운터로 팀 파울을 추적하세요. 페널티 상태(7파울 이상)가 되면 빨간색으로 변경됩니다.',
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

export const content: StreetballLocaleContent = {
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
      text: '무료 온라인 3x3 스트리트볼 스코어보드',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '짧은 쇼트클록을 관리하면서 팀 파울을 추적하며 빠른 3대3 농구 경기의 점수를 기록하는 것은 까다롭습니다. 이 무료 온라인 3x3 스트리트볼 스코어보드는 아스팔트를 테마로 한 인더스트리얼 디자인과 고대비 네온 스타일을 제공합니다. 12초 쇼트클록, 경기 시간, 파울 페널티 시스템, 소유권 표시기를 자동으로 처리합니다.',
    },
    {
      type: 'title',
      text: 'FIBA 3x3 스트리트볼 득점 및 쇼트클록 규칙',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'FIBA 3x3 스트리트볼은 기존 5대5 농구와 다릅니다. 경기는 10분 단일 피리어드로 진행되며, 한 팀이 21점을 먼저 달성하면 즉시 종료됩니다(서든데스). 아크 안쪽 슛과 자유투는 1점, 6.75m 아크 바깥쪽 슛은 2점으로 계산됩니다. 12초 쇼트클록은 빠른 공격을 유도하며, 소유권이 변경되면 선수들은 반드시 아크 뒤로 볼을 빼내야 합니다.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '캐주얼 픽업 게임',
          description: '동네 코트에서 친구들과 스트리트 농구 점수를 빠르게 기록.',
          icon: 'mdi:basketball',
          points: ['간편한 점수 입력', '반응형 레이아웃', '오프라인 작동'],
        },
        {
          title: '토너먼트 경기',
          description: '공식 3x3 토너먼트 및 스트리트볼 리그에 완벽한 선택.',
          icon: 'mdi:trophy-outline',
          points: ['10분 카운트다운', '21점 서든데스', '파울 페널티 상태'],
        },
        {
          title: '심판 대시보드',
          description: '심판이 빠른 쇼트클록 리셋과 소유권을 관리할 수 있도록 설계.',
          icon: 'mdi:school',
          points: ['12초 및 14초 리셋', '버저 사운드', '촉각 버튼 제스처'],
        },
      ],
    },
    {
      type: 'title',
      text: '인터랙티브 컨트롤과 촉각 애니메이션',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>12초 쇼트클록</strong>이 4초 미만에서 빨간색으로 깜빡이며 소수점을 표시한 후 버저가 울립니다.',
        '<strong>인터랙티브 콘크리트 하프코트</strong>에서 1점 및 2점 영역을 탭하여 다이어그램에 직접 점수를 기록할 수 있습니다.',
        '<strong>파울 카운터 경고</strong>가 팀 파울 페널티(7+ 및 10+ 파울)를 표시하기 위해 빨간색으로 변하고 흔들립니다.',
        '<strong>볼 클리어런스 표시기</strong>는 소유권이 변경될 때 볼이 아크 뒤로 나갈 때까지 알림을 표시합니다.',
        '<strong>타임아웃 트래커</strong>는 30초 카운트다운을 시작하고 맞춤 사운드로 알립니다.',
      ],
    },
    {
      type: 'title',
      text: '디지털 스트리트볼 트래커를 사용해야 하는 이유',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '디지털 스코어보드는 코트 위에서 점수, 파울 또는 쇼트클록 바이얼레이션에 관한 논쟁을 없애줍니다. 밝은 네온 숫자는 멀리서도 쉽게 읽을 수 있으며, 자동 소유권 및 클리어런스 알림으로 경기가 중단 없이 원활하게 진행됩니다.',
    },
  ],
  ui: {
    teamA: '팀1',
    teamB: '팀2',
    points: '점수',
    fouls: '파울',
    timeouts: '타임아웃',
    shotClock: '쇼트클록',
    reset: '리셋',
    resetConfirm: '경기를 리셋할까요? 모든 데이터가 사라집니다.',
    cancel: '취소',
    gameTime: '시간',
    possession: '소유권',
    clearBall: '볼 클리어',
    matchWon: '경기 승리',
    timeoutActive: '타임아웃',
    penalty: '페널티',
    fullscreen: '전체화면',
    exitFullscreen: '전체화면 종료',
    overtime: '연장전',
    ptsInside: '+1점',
    ptsOutside: '+2점',
    toggleSound: '사운드 전환',
    soundOn: '사운드 켜짐',
    soundOff: '사운드 꺼짐',
  },
};
