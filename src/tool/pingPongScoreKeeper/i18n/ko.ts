import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PingPongScoreKeeperUI } from '../ui';

const slug = 'ping-pong-scorekeeper';
const title = '온라인 핑퐁 스코어키퍼: 무료 탁구 트래커';
const description =
  '게임 및 세트 스코어링으로 탁구 경기를 추적하세요. 친선 경기 및 토너먼트를 위한 무료 온라인 핑퐁 스코어키퍼. 등록 불필요.';

const faqData = [
  {
    question: '핑퐁 점수는 어떻게 계산하나요?',
    answer:
      '표준 핑퐁 게임은 11점제로 진행됩니다. 2점 차이로 승리해야 합니다. 점수가 10-10이 되면 한 선수가 2점 앞설 때까지 계속 진행됩니다. 서버는 2점마다 변경됩니다. 이 스코어키퍼가 이를 모두 자동으로 처리합니다.',
  },
  {
    question: '이 스코어키퍼는 어떻게 사용하나요?',
    answer:
      '각 선수 아래의 + 버튼을 눌러 점수를 추가하세요. 게임 점수가 자동으로 업데이트됩니다. 선수가 2점 차이로 11점에 도달하면 게임이 종료되고 새 게임이 시작됩니다. 게임 승리 카운터는 각 선수가 이긴 게임 수를 추적합니다. 경기가 끝나면 경기 종료를 누르세요.',
  },
  {
    question: '서버 표시기는 어떻게 작동하나요?',
    answer:
      '서버는 2점마다 변경됩니다. 서브 중인 선수 옆에 점이 표시됩니다. 이는 공식 탁구 규칙을 따릅니다. 경기 중 항상 누가 서브해야 하는지 추적할 수 있습니다.',
  },
  {
    question: '경기 중에 휴대폰에서 사용할 수 있나요?',
    answer:
      '네. 큰 버튼이 있어 모바일 친화적인 인터페이스입니다. 전체 화면 모드는 브라우저를 숨기고 화면이 꺼지지 않도록 유지합니다.',
  },
  {
    question: '경기 데이터를 저장하나요?',
    answer:
      '네. 현재 점수, 승리 게임 수, 선수 이름이 브라우저에 자동으로 저장됩니다.',
  },
];

const howToData = [
  {
    name: '선수 이름 입력',
    text: '기본 선수 이름을 탭하고 직접 입력하세요. 이름은 자동으로 저장됩니다.',
  },
  {
    name: '점수 추가',
    text: '득점한 선수의 큰 원형 + 버튼을 누르세요. 점수가 축하 애니메이션과 함께 업데이트됩니다.',
  },
  {
    name: '점수 제거',
    text: '실수로 점수를 추가한 경우 마이너스 버튼을 누르세요.',
  },
  {
    name: '새 게임 시작',
    text: '게임이 끝나면 새 게임을 눌러 다음 게임을 시작하세요. 또는 경기 종료를 눌러 경기를 마무리하세요.',
  },
  {
    name: '경기 종료',
    text: '경기 종료를 누르면 트로피와 폭죽과 함께 승자가 발표됩니다.',
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

export const content: ToolLocaleContent<PingPongScoreKeeperUI> = {
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
      text: '무료 온라인 핑퐁 스코어키퍼: 탁구 경기 트래커',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '핑퐁 점수 계산은 간단해야 하지만, 규칙이 헷갈릴 수 있습니다. 다음 서브는 누구? 10-10인가요 11-9인가요? 각 선수가 몇 게임을 이겼나요? 이 무료 온라인 핑퐁 스코어키퍼가 모든 것을 자동으로 처리합니다. 누군가 득점하면 + 버튼만 누르면 됩니다. 스코어키퍼는 게임별 점수, 경기에서 이긴 게임 수, 서브 중인 선수를 추적합니다. 모든 것이 실시간으로 업데이트되며 모든 득점을 의미 있게 만드는 축하 애니메이션이 표시됩니다. 가입 불필요, 다운로드 불필요, 복잡한 메뉴도 없습니다.',
    },
    {
      type: 'title',
      text: '이 스코어키퍼에서 핑퐁 점수 계산 방식',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '탁구는 표준 점수 시스템을 따릅니다. 각 게임은 11점까지 진행됩니다. 선수는 2점 차이로 승리해야 하므로, 점수가 10-10이 되면 누군가 2점 앞설 때까지 계속 진행됩니다. 게임 중 서버는 2점마다 변경됩니다. 이 스코어키퍼는 이러한 모든 규칙을 자동으로 추적합니다. 누가 서브하는지나 언제 교체해야 하는지 기억할 필요가 없습니다. 서버 표시기는 현재 서버 옆에 점을 표시합니다. 선수가 게임에서 이기면 스코어키퍼가 자동으로 다음 게임으로 넘어갑니다. 승리 게임 수 카운터가 승자를 위해 증가합니다. 경기는 원하는 게임 수로 할 수 있지만, 일반적으로 5판 또는 7판의 베스트 오브 방식입니다. 경기가 완료되면 경기 종료를 누르면 승자가 축하와 함께 발표됩니다.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '친선 경기',
          description: '친구와의 캐주얼한 핑퐁을 위한 빠르고 쉬운 점수 계산. 자동 게임 및 경기 추적.',
          icon: 'mdi:table-tennis',
          points: ['득점당 한 번 탭', '자동 서버 추적', '오프라인 작동'],
        },
        {
          title: '클럽 & 리그 경기',
          description: '게임 및 경기 결과의 깔끔한 기록 유지. 클럽 토너먼트 및 리그 플레이에 완벽.',
          icon: 'mdi:trophy-outline',
          points: ['승리 게임 추적', '베스트 오브 5 또는 7 지원', '모바일 친화적'],
        },
        {
          title: '토너먼트',
          description: '토너먼트 환경에서 여러 경기 추적. 경기 간 빠른 리셋.',
          icon: 'mdi:school',
          points: ['빠른 경기 리셋', '점수 유지', '전체 화면 모드'],
        },
      ],
    },
    {
      type: 'title',
      text: '이 핑퐁 스코어키퍼의 특별한 점',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>자동 게임 점수 계산</strong> 스코어키퍼가 핑퐁 규칙을 알고 있습니다. 11점제, 2점 차이 승리, 자동 서버 변경.',
        '<strong>승리 게임 추적</strong> 이긴 각 게임이 기록됩니다. 각 선수가 경기에서 몇 게임을 이겼는지 한눈에 확인하세요.',
        '<strong>서버 표시기</strong> 2점 회전 규칙에 따라 보이는 점이 서브 중인 선수를 표시합니다.',
        '<strong>골 축하 애니메이션</strong> 각 득점이 무작위 축하 애니메이션을 실행합니다. 8가지 효과가 모든 득점을 흥미진진하게 만듭니다.',
        '<strong>떠다니는 파티클</strong> 득점할 때마다 순간을 축하하는 떠다니는 텍스트가 생성됩니다.',
        '<strong>경기 종료 세리머니</strong> 경기 종료를 누르면 트로피와 폭죽과 함께 승자 발표가 진행됩니다.',
        '<strong>선수 이름 편집 가능</strong> 이름 필드를 탭하여 선수 이름을 변경하세요. 이름은 브라우저에 저장됩니다.',
        '<strong>전체 화면 모드</strong> 브라우저 인터페이스를 숨겨서 스코어보드가 화면을 가득 채우고 화면이 꺼지지 않도록 합니다.',
        '<strong>오프라인 우선</strong> 인터넷 없이 작동합니다. 광고 없음, 추적 없음, 데이터 수집 없음.',
      ],
    },
    {
      type: 'title',
      text: '핑퐁 스코어키퍼 vs 수동 점수 계산',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '핑퐁의 수동 점수 계산은 점수 추적, 서브 선수 기억, 서버 교체 시점 파악, 승리 게임 수 계산이 필요합니다. 특히 빠른 경기에서는 쉽게 놓칠 수 있습니다. 이 디지털 스코어키퍼는 모든 것을 자동으로 처리합니다. 득점이 발생하면 버튼만 누르면 됩니다. 스코어키퍼는 게임 점수를 추적하고, 게임 승리를 감지하고, 경기에서 이긴 게임을 기록하고, 서브 중인 선수를 표시합니다. 모든 득점이 애니메이션과 파티클로 축하받습니다. 점수가 혼동되지 않고 서버 변경을 놓치지 않습니다. 친구와 캐주얼한 게임을 하든 토너먼트에서 경쟁하든, 이 무료 온라인 핑퐁 스코어키퍼가 필요한 모든 것을 제공합니다.',
    },
  ],
  ui: {
    playerA: '플레이어 1',
    playerB: '플레이어 2',
    winnerLabel: '챔피언',
    finishMatch: '경기 종료',
    newGame: '새 게임',
    serving: '서브 중',
    changeSide: '사이드 변경',
    swapHint: '탭하여 교체',
    game: '게임',
    set: '세트',
    gamePoint: '게임 포인트',
    matchPoint: '매치 포인트',
    mode: '포맷',
    bo1: 'BO1',
    bo3: 'BO3',
    bo5: 'BO5',
    bo7: 'BO7',
    points: '포인트',
    reset: '리셋',
    resetConfirm: '경기를 리셋할까요? 모든 데이터가 손실됩니다.',
    cancel: '취소',
    fullscreen: '전체 화면',
    exitFullscreen: '전체 화면 종료',
  },
};
