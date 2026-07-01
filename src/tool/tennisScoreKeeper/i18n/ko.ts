import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TennisScoreKeeperUI } from '../ui';

const slug = 'tennis-scorekeeper';
const title = '온라인 테니스 스코어키퍼: 무료 매치 트래커';
const description = '세트 및 게임 점수로 테니스 경기를 추적하세요. 경기 및 토너먼트를 위한 무료 온라인 테니스 스코어키퍼. 등록 불필요.';

const faqData = [
  {
    question: '테니스 점수는 어떻게 계산하나요?',
    answer: '테니스 경기는 게임과 세트로 진행됩니다. 게임은 러브, 15, 30, 40으로 점수가 매겨집니다. 40-40을 듀스라고 하며, 선수가 2점을 연속으로 이겨야 합니다. 세트는 먼저 2게임 차이로 6게임을 이긴 선수가 승리합니다. 점수가 6-6이 되면 타이브레이크가 진행됩니다.',
  },
  {
    question: '이 테니스 스코어보드는 어떻게 사용하나요?',
    answer: '선수가 득점하면 플러스 버튼을 누르세요. 점수가 자동으로 업데이트됩니다. 스코어키퍼는 서브 순서, 게임 점수, 현재 세트, 완료된 세트 기록을 추적합니다.',
  },
  {
    question: '테니스 선수들은 언제 사이드를 바꾸나요?',
    answer: '테니스 선수들은 각 세트의 첫 번째, 세 번째 및 이후 모든 홀수 게임 후에 코트를 변경합니다. 또한 세트가 끝날 때 변경하지만, 총 게임 수가 짝수인 경우는 제외됩니다. 타이브레이크에서는 6점마다 변경합니다.',
  },
  {
    question: '이 스코어보드는 타이브레이크를 지원하나요?',
    answer: '네. 세트가 6-6에 도달하면 스코어키퍼가 자동으로 타이브레이크 모드로 전환되어 점수를 7까지 숫자로 계산합니다. 선수는 2점 차이로 이겨서 타이브레이크와 세트를 종료해야 합니다.',
  },
  {
    question: '휴대폰에서 사용할 수 있나요?',
    answer: '네. 인터페이스는 큰 버튼으로 모바일 기기에 최적화되어 있습니다. 경기 중에 전체 화면 모드를 사용하여 화면이 꺼지지 않도록 할 수도 있습니다.',
  },
];

const howToData = [
  {
    name: '선수 이름 설정',
    text: '선수 이름 입력 필드를 탭하여 사용자 지정 이름을 입력하세요. 브라우저에 저장됩니다.',
  },
  {
    name: '점수 추가',
    text: '랠리에서 이긴 선수의 플러스 버튼을 클릭하세요. 점수가 자동으로 업데이트됩니다.',
  },
  {
    name: '세트 결과 관리',
    text: '트래커가 자동으로 게임과 세트를 종료합니다. 완료된 세트를 보관하고 다음 세트로 전환합니다.',
  },
  {
    name: '사이드 교체',
    text: '선수가 코트를 변경해야 할 때 스코어보드가 알려줍니다. 교체 버튼을 눌러 표시 측면을 바꾸세요.',
  },
  {
    name: '경기 종료',
    text: '트래커가 테니스 규칙에 따라 자동으로 경기를 종료하고 승자를 발표합니다.',
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

export const content: ToolLocaleContent<TennisScoreKeeperUI> = {
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
      text: '무료 온라인 테니스 스코어키퍼 및 매치 트래커',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '듀스, 어드밴티지, 타이브레이크와 같은 용어가 있는 테니스 점수 계산은 어려울 수 있습니다. 이 무료 온라인 테니스 스코어키퍼는 전체 과정을 자동화합니다. 선수가 득점하면 플러스 버튼만 누르면 됩니다. 이 도구는 포인트, 게임, 세트 및 사이드 체인지를 실시간으로 자동 관리합니다.',
    },
    {
      type: 'title',
      text: '이 스코어키퍼에서 테니스 점수 계산 방식',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '테니스는 독특한 점수 구조를 사용합니다. 표준 게임은 러브, 15, 30, 40, 게임 순으로 진행됩니다. 두 선수가 모두 40에 도달하면 점수는 듀스입니다. 듀스에서 선수는 두 점을 연속으로 획득하여 게임에서 이겨야 합니다. 첫 번째 점수를 어드밴티지라고 하며, 다음 점수로 게임을 확정합니다. 상대 선수가 다음 점수를 획득하면 점수는 듀스로 돌아갑니다. 세트는 먼저 2게임 차이로 6게임을 이긴 선수가 승리합니다. 세트가 6-6이 되면 7점제 타이브레이크가 진행됩니다.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '캐주얼 게임',
          description: '친구와의 가벼운 테니스 경기를 위한 빠르고 쉬운 점수 계산.',
          icon: 'mdi:tennis',
          points: ['원터치 점수', '사이드 교체 표시기', '오프라인 작동'],
        },
        {
          title: '클럽 플레이',
          description: '클럽 경기 및 토너먼트에 완벽한 추적.',
          icon: 'mdi:trophy-outline',
          points: ['세트 기록 보관', '베스트 오브 3 또는 5 세트', '모바일 친화적 레이아웃'],
        },
        {
          title: '토너먼트 모드',
          description: '공식 경기 추적 및 심판 사용을 위해 설계.',
          icon: 'mdi:school',
          points: ['타이브레이크 지원', '전체 화면 스코어보드', '로컬 데이터 안전'],
        },
      ],
    },
    {
      type: 'title',
      text: '특별한 스코어키퍼 기능',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>자동 테니스 규칙 로직</strong> 러브, 15, 30, 40, 듀스, 어드밴티지, 타이브레이크를 자동 계산.',
        '<strong>세트 기록 보관</strong> 이전 세트의 점수를 한눈에 표시.',
        '<strong>사이드 교체 도우미</strong> 선수가 코트를 변경해야 할 때 알림.',
        '<strong>생생한 득점 축하</strong> 획득한 점수에 떠다니는 파티클 표시.',
        '<strong>베스트 오브 3 또는 5 세트</strong> 구성 가능한 경기 형식 설정.',
        '<strong>로컬 이름 저장</strong> 방문 간에 사용자 지정 이름 유지.',
      ],
    },
    {
      type: 'title',
      text: '디지털 점수 계산 vs 수동 추적',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '수동 스코어보드는 숫자 업데이트, 서브 순서 기억, 타이브레이크 확인, 사이드 교체 계산에 지속적인 집중이 필요합니다. 이 디지털 테니스 스코어키퍼는 테니스의 모든 규칙을 자동으로 처리합니다. 도구가 세트 기록을 업데이트하고 축하 세리머니로 승자를 발표하는 동안 경기에 완전히 집중할 수 있습니다.',
    },
  ],
  ui: {
    playerA: '플레이어 1',
    playerB: '플레이어 2',
    winnerLabel: '챔피언',
    finishMatch: '경기 종료',
    newGame: '새 세트',
    serving: '서브 중',
    changeSide: '사이드 변경',
    swapHint: '탭하여 사이드 변경',
    game: '게임',
    set: '세트',
    gamePoint: '게임 포인트',
    setPoint: '세트 포인트',
    matchPoint: '매치 포인트',
    mode: '세트',
    bo3: 'BO3',
    bo5: 'BO5',
    points: '포인트',
    reset: '리셋',
    resetConfirm: '경기를 리셋할까요? 모든 데이터가 손실됩니다.',
    cancel: '취소',
    fullscreen: '전체 화면',
    exitFullscreen: '전체 화면 종료',
    deuce: '듀스',
    advantage: '어드밴티지',
    tiebreak: '타이브레이크',
  },
};
