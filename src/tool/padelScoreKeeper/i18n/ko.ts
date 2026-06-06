import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { PadelScoreKeeperLocaleContent } from '../entry';

const slug = 'padel-scorekeeper';
const title = '프리미엄 파델 스코어키퍼 : 골드 포인트 & 로테이션 트래커';
const description = '공식 Punto de Oro(골드 포인트) 규칙, 서브 로테이션 알림, 타이브레이크, 동적 코트 체인지 애니메이션으로 파델 점수를 추적하세요.';

const faq = [
  {
    question: '파델의 골드 포인트(Punto de Oro)란 무엇인가요?',
    answer: '골드 포인트는 점수가 40-40(듀스)이 되었을 때 플레이되는 승부점입니다. 어드밴티지는 없으며, 리시브 팀이 왼쪽 또는 오른쪽에서 서브를 받을지 선택하고, 그 한 점을 이긴 팀이 전체 게임을 가져갑니다.',
  },
  {
    question: '파델에서 세트 형식은 어떻게 작동하나요?',
    answer: '표준 경기는 3세트제로 진행되며, 각 세트는 먼저 6게임(2게임 차)에 도달한 팀이 승리합니다. 점수가 6-6이 되면 7점 타이브레이크가 진행됩니다. 선택 사항인 골든 세트 형식은 4게임에 끝나며 4-4에서 타이브레이크가 시작됩니다.',
  },
  {
    question: '파델에서 선수들은 언제 사이드를 교체하나요?',
    answer: '선수들은 첫 번째 게임이 끝난 후 코트를 교체하고, 이후 2게임마다(현재 세트의 총 게임 수가 홀수일 때, 예: 1, 3, 5) 교체합니다. 타이브레이크 중에는 6점마다 사이드를 바꿉니다.',
  },
];

const howTo = [
  {
    name: '경기 형식 설정',
    text: '표준 형식(선 6게임) 또는 짧은 골든 세트 형식(선 4게임)을 선택하세요.',
  },
  {
    name: '선수 이름 입력',
    text: '팀 이름을 입력하여 스코어보드를 개인화하세요. 설정은 자동으로 저장됩니다.',
  },
  {
    name: '코트에서 점수 기록',
    text: '등각 투영 파델 코트의 양쪽을 탭하여 점수를 기록하세요. 서브 표시기가 대각선 로테이션을 안내합니다.',
  },
  {
    name: '골드 포인트 결정',
    text: '듀스에 도달하면 리시브 사이드(왼쪽 또는 오른쪽 리시버)를 선택하고 승리 팀을 클릭하여 게임을 종료하세요.',
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

export const content: PadelScoreKeeperLocaleContent = {
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
      text: '무료 온라인 파델 스코어보드 & 경기 트래커',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '빠른 랠리, 타이브레이크, 사이드 체인지, 공식 Punto de Oro(골드 포인트) 규칙까지, 파델에서 점수를 관리하는 것은 혼란스러울 수 있습니다. 이 무료 온라인 파델 스코어보드가 점수 관리의 번거로움을 없애줍니다. 시각적인 코트를 탭하여 점수를 기록하고, 서버 로테이션, 리시버 사이드, 세트 기록, 코트 체인지를 도구가 자동으로 관리하도록 두세요.',
    },
    {
      type: 'title',
      text: '파델 점수 매기기, 골드 포인트 및 로테이션 이해하기',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '파델은 테니스와 유사한 점수 체계(15, 30, 40, 게임)를 따르지만 더 빠른 플레이를 위한 특정 규칙을 도입합니다. 프로 FIP 규칙에 따라 점수가 40-40이 되면 승부를 결정짓는 골드 포인트(Punto de Oro)가 플레이됩니다. 리시브 팀이 서브를 받을 사이드(왼쪽 또는 오른쪽)를 선택하고, 그 한 점을 이긴 팀이 게임을 가져갑니다. 또한 세트에서 진행된 총 게임 수가 홀수일 때마다, 그리고 타이브레이크 중 6점마다 팀이 코트 사이드를 바꿔야 합니다.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '친선 경기',
          description: '파델 파트너와의 친선 경기를 위한 빠르고 깔끔한 점수 관리.',
          icon: 'mdi:tennis',
          points: ['원터치 점수 추가', '모바일 우선 레이아웃', '오프라인에서도 사용 가능'],
        },
        {
          title: '클럽 & 리그',
          description: '클럽 경기와 지역 토너먼트를 쉽게 추적하세요.',
          icon: 'mdi:trophy-outline',
          points: ['세트 기록 보관', '6게임 또는 4게임 세트', '골드 포인트 지원'],
        },
        {
          title: '심판 모드',
          description: '공식 경기나 훈련 세션을 위한 완벽한 기능의 도구.',
          icon: 'mdi:school',
          points: ['서브 & 리시브 표시', '인터랙티브 코트 로테이션', '전체화면 콘솔 모드'],
        },
      ],
    },
    {
      type: 'title',
      text: '파델 플레이어를 위한 고급 디지털 기능',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>공식 골드 포인트 로직</strong>은 듀스 시 리시브 팀이 리시버 사이드를 선택할 수 있게 하고 서브 경로를 표시합니다.',
        '<strong>시각적 코트 표시기</strong>는 서버(S)와 리시버(R)의 위치를 동적으로 표시하여 로테이션 실수를 방지합니다.',
        '<strong>자동 코트 체인지</strong>는 홀수 게임이나 타이브레이크 구간에서 코트 레이아웃을 180도 회전시켜 실제 시야와 항상 일치시킵니다.',
        '<strong>커스텀 세트 형식</strong>은 표준 6게임 세트와 빠른 4게임 골든 세트를 모두 지원합니다.',
        '<strong>로컬 브라우저 자동 저장</strong>은 페이지를 새로고침해도 선수 이름과 현재 경기 점수를 안전하게 보관합니다.',
      ],
    },
    {
      type: 'title',
      text: '파델 타이브레이크 규칙: 표준 vs 슈퍼 타이브레이크',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '표준 파델 세트에서 게임 점수가 6-6이 되면 7점 타이브레이크가 진행됩니다. 타이브레이크에서는 점수를 숫자(1, 2, 3 등)로 계산합니다. 먼저 7점에 도달하면서 2점 차이를 벌린 팀이 세트를 승리합니다. 서브 차례인 선수가 오른쪽(듀스) 사이드에서 첫 번째 포인트를 서브합니다. 이후 각 선수는 왼쪽(어드밴티지) 사이드에서 시작하여 2점을 연속으로 서브합니다. 일부 토너먼트 형식에서는 세트가 1-1로 동점일 때 풀 세트 대신 10점 슈퍼 타이브레이크를 진행하여 승부를 결정합니다.',
    },
    {
      type: 'title',
      text: '코트 체인지와 로테이션: 공정한 파델을 위해',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '파델에서 코트 체인지는 태양, 바람, 코트의 불균형 등의 환경 요인이 한 팀에게 유리하게 작용하지 않도록 하는 데 필수적입니다. 선수는 각 세트의 첫 번째 게임 후, 그리고 이후 2게임마다(예: 1-0, 2-1, 3-2, 4-3, 5-4) 코트를 교체해야 합니다. 당사의 디지털 파델 스코어보드는 선수가 물리적으로 사이드를 교체해야 할 때 코트 레이아웃을 자동으로 180도 회전시키는 동적 코트 체인지 애니메이션을 제공합니다. 이를 통해 화면 상단에 표시되는 팀이 항상 실제 코트 반대편에서 플레이하는 팀과 일치합니다.',
    },
    {
      type: 'title',
      text: '표준 세트 vs 골든 세트 형식',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '표준 경기는 세트당 6게임으로 진행되지만, 많은 레크리에이션 리그와 빠른 템포의 토너먼트는 세트를 4게임만 진행하는 "골든 세트" 형식(4-4에서 타이브레이크)을 채택합니다. 이 스코어보드는 도구 모음에서 한 번의 탭으로 이 형식들 사이를 전환할 수 있습니다. 선택한 형식에 관계없이 스코어보드가 모든 타이브레이크, 서브 로테이션 및 점수 계산을 자동으로 처리합니다.',
    },
    {
      type: 'title',
      text: '코트에서 효과적인 점수 관리를 위한 팁',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>코트 스탠드나 폰 홀더 사용하기:</strong> 스마트폰이나 태블릿을 네트 높이의 파델 코트 펜스에 장착하세요. 양쪽 선수가 현재 점수와 서브 표시기를 쉽게 볼 수 있습니다.',
        '<strong>시작 전에 이름 입력하기:</strong> 10초 정도 시간을 내어 실제 선수나 팀 이름을 입력하세요. 음성 안내(활성화된 경우)와 시각적 스코어보드가 훨씬 더 몰입감 있고 공식적으로 느껴집니다.',
        '<strong>전체화면 모드 활성화:</strong> 헤더 패널의 전체화면 버튼을 클릭하세요. 스코어보드 인터페이스가 최대화되고 긴 랠리 중 화면이 자동으로 꺼지는 것을 방지합니다.',
      ],
    },
    {
      type: 'title',
      text: '왜 디지털 파델 스코어키퍼를 사용해야 할까요?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '누가 서브하는지, 누가 리시브할 차례인지, 점수가 어떻게 되는지에 대해 끊임없이 논쟁하는 대신, 디지털 트래커가 모든 사람의 인식을 일치시킵니다. 서버와 리시버의 위치를 화면에 직접 표시함으로써, 선수들은 벤치에 있는 스마트폰을 잠깐 보는 것만으로 정확히 어디에 서야 하는지 알 수 있습니다. 이는 경기 템포를 개선하고 로테이션 실수를 방지합니다.',
    },
  ],
  ui: {
    playerA: '팀1',
    playerB: '팀2',
    game: '게임',
    set: '세트',
    tiebreak: '타이브레이크',
    goldPoint: '골드 포인트',
    selectReceiver: '리시버 선택',
    leftReceiver: '왼쪽 리시버',
    rightReceiver: '오른쪽 리시버',
    server: '서버',
    receiver: '리시버',
    changeEnds: '코트 체인지',
    matchWon: '경기 승리',
    reset: '리셋',
    resetConfirm: '경기를 리셋할까요? 모든 데이터가 사라집니다.',
    cancel: '취소',
    fullscreen: '전체화면',
    exitFullscreen: '전체화면 종료',
    deuce: '듀스',
    advantage: '어드밴티지',
    formatStandard: '6게임',
    formatGoldenSet: '4게임',
    goldenSet: '골든 세트',
    goldPointTitle: '골드 포인트 승부점',
  },
};
