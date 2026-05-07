import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ScoreKeeperUI } from '../ui';

const slug = 'sports-scoreboard';
const title = '온라인 스포츠 스코어보드: 무료 점수 계산기 ';
const description =
  '모바일용 거대 버튼이 있는 디지털 스코어보드. 파델, 탁구, 축구에 이상적입니다. 경기 도중 짜증나는 광고가 없습니다. 심플하고 빠릅니다.';

const faqData = [
  {
    question: '인터넷 연결 없이도 작동하나요?',
    answer:
      '네, 페이지가 로드되면 스코어보드는 완전히 오프라인으로 작동합니다. 경기 중에는 데이터나 WiFi가 필요하지 않습니다. 모든 것이 브라우저에 로컬로 저장됩니다.'
  },
  {
    question: '테니스와 파델에 스코어보드를 사용할 수 있나요?',
    answer:
      '네, 테니스/파델 모드는 15-30-40-AD 시퀀스를 자동으로 처리하며 공식 규칙에 따라 세트와 게임을 추적합니다. 친선 경기에 완벽합니다.'
  },
  {
    question: '전체 화면으로 볼 수 있나요?',
    answer:
      '네, 브라우저에서 전체 화면 모드를 활성화할 수 있습니다(PC의 경우 F11, 모바일의 경우 전체 화면 버튼). 가시성을 극대화하기 위해 숫자가 화면의 80%를 차지합니다.'
  },
  {
    question: '실수했을 때 점수를 어떻게 수정하나요?',
    answer:
      '각 선수 카드에는 점수를 빼는 별도의 버튼이 있습니다. 전체 스코어보드를 다시 시작할 필요 없이 실수를 빠르게 수정할 수 있습니다.'
  },
  {
    question: '1, 2, 3점 슛이 있는 농구에도 작동하나요?',
    answer:
      '네, 농구 모드에서는 추가 탭 없이 모든 플레이를 빠르게 득점할 수 있도록 전용 +1, +2, +3 버튼이 나타납니다.'
  },
  {
    question: '탁구에서 서브권을 자동으로 처리하나요?',
    answer:
      '네, 탁구 모드에서는 공식 ITTF 규칙에 따라 서브 표시기가 2점마다(듀스 시 매 점수마다) 자동으로 회전합니다.'
  },
];

const howToData = [
  {
    name: '스포츠 선택',
    text: '상단 셀렉터에서 스포츠를 선택하세요: 자유, 테니스, 파델, 탁구, 배구 또는 농구.'
  },
  {
    name: '이름 맞춤 설정',
    text: '"HOME" 또는 "AWAY"를 탭하여 선수나 팀 이름을 변경하세요.'
  },
  {
    name: '한 번의 탭으로 점수 추가',
    text: '큰 스코어보드 영역을 탭하여 점수를 추가하세요. 농구의 경우 +1, +2 또는 +3 버튼을 사용하세요.'
  },
  {
    name: '서브 표시',
    text: '하단 모서리에 있는 서브 버튼을 사용하여 누가 서브하는지 표시하세요. 노란색 표시기가 자동으로 나타납니다.'
  },
  {
    name: '오류 수정',
    text: '실수로 점수를 추가한 경우 "−" 버튼을 사용하세요. 전체 스코어보드를 다시 시작할 필요가 없습니다.'
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer }
  }))
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
    text: step.text
  }))
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'ko'
};

export const content: ToolLocaleContent<ScoreKeeperUI> = {
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
      text: '주머니 속의 디지털 심판',
      level: 2
    },
    {
      type: 'paragraph',
      html: '경기가 가열되면 점수를 잊어버리기 쉽습니다. "4-3이었나 3-4였나?". 이 스코어보드는 이러한 분쟁이 시작되기 전에 해결하도록 설계되었습니다. 카드의 거의 전체를 차지하는 <strong>거대 버튼</strong> 인터페이스를 통해 화면을 보지 않고도 벤치에 있는 전화기로 팔을 뻗기만 하면 점수를 추가할 수 있습니다.'
    },
    {
      type: 'title',
      text: '스마트 스포츠 셀렉터',
      level: 2
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '테니스 / 파델 모드',
          description:
            '세트 및 게임 카운터가 있는 적응형 인터페이스. 시스템이 15-30-40-AD 시퀀스를 자동으로 처리합니다.',
          icon: 'mdi:tennis',
          points: ['공식 규칙', '어드밴티지 관리', '세트 카운터']
        },
        {
          title: '농구 모드',
          description:
            '스코어보드가 스포츠를 감지하고 인터페이스를 변경합니다. 전용 +1, +2, +3 버튼.',
          icon: 'mdi:basketball',
          points: ['빠른 3점슛', '자유투', '추가 탭 없음']
        },
        {
          title: '탁구 모드',
          description:
            '누가 서브할 차례인지 기억할 필요가 없습니다. 시각적 표시기가 2점마다 자동으로 회전합니다.',
          icon: 'mdi:table-tennis',
          points: ['ITTF 규칙', '서브 로테이션', '듀스 모드 (11점)']
        },
      ]
    },
    {
      type: 'title',
      text: '스포츠를 위해 설계된 기능',
      level: 2
    },
    {
      type: 'list',
      items: [
        '<strong>높은 가시성:</strong> 햇빛 아래에서도 최대한 잘 읽힐 수 있도록 숫자가 화면의 80%를 차지합니다.',
        '<strong>수정 가능한 이름:</strong> "HOME" 또는 "AWAY"를 탭하여 선수 이름을 설정합니다.',
        '<strong>오류 방지:</strong> 다시 시작하지 않고도 실수를 빠르게 수정할 수 있는 별도의 마이너스 버튼.',
        '<strong>오프라인 작동:</strong> 로드되면 경기 중에는 인터넷이 필요하지 않습니다.',
      ]
    },
  ],
  ui: {
    playerA: 'HOME',
    playerB: 'AWAY',
    swapSides: '진영 교체',
    reset: '초기화',
    serve: '서브',
    sets: '세트',
    games: '게임',
    victory: '승리!',
    newGame: '새 경기',
    continueGame: '계속 플레이',
    resetConfirm: '스코어보드를 초기화하시겠습니까?',
    sportSimple: '자유 (축구, 틱택토...)',
    sportTennis: '테니스',
    sportPadel: '파델',
    sportPingpong: '탁구',
    sportVolleyball: '배구',
    sportBasket: '농구'
  }
};
