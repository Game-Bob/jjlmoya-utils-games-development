import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BasketScoreKeeperUI } from '../ui';

const slug = 'basketball-scoreboard';
const title = '농구 스코어보드 : 무료 득점 기록기';
const description =
  '무료 온라인 농구 스코어보드. +1, +2, +3 버튼으로 득점을 기록하세요. 픽업 게임, 길거리 농구, 고등학교 및 지역 리그 경기에 사용 가능. 회원가입 없음, 다운로드 없음, 오프라인에서도 작동합니다.';

const faqData = [
  {
    question: '농구 경기에서 득점은 어떻게 기록하나요?',
    answer:
      '농구는 세 가지 득점 가치를 사용합니다: 자유투(+1점), 필드골(+2점), 3점슛(+3점)입니다. 팀이 득점할 때마다 해당 버튼을 탭하세요. 스코어보드가 자동으로 합계를 기록합니다. 실수했을 때는 점수 옆의 마이너스 버튼을 사용하세요.',
  },
  {
    question: '농구에서 +1, +2, +3의 차이는 무엇인가요?',
    answer:
      '+1은 파울 후에 주어지는 자유투입니다. +2는 3점 라인 안쪽에서 넣은 일반 필드골입니다. +3은 3점 라인 밖에서 던진 슛입니다. 각 득점 가치에 별도의 버튼이 있으면 단순 카운터에 비해 더 빠르게 득점을 기록하고 오류를 줄일 수 있습니다.',
  },
  {
    question: '이 스코어보드를 실제 농구 경기에 사용할 수 있나요?',
    answer:
      '네. 이 스코어보드는 실제 경기를 위해 설계되었습니다: 픽업 농구, 길거리 농구, 고등학교 경기, 지역 리그 게임, 연습 스크리미지 등에 사용할 수 있습니다. 브라우저에 점수를 저장하므로 페이지를 새로고침해도 게임 상태가 유지됩니다.',
  },
  {
    question: '길거리 농구나 픽업 게임에서는 어떻게 득점을 기록하나요?',
    answer:
      '길거리 농구는 보통 목표 점수(21점이나 16점 등)에 도달할 때까지 1점과 2점(또는 1점만)으로 플레이합니다. 이 스코어보드는 모든 형식에 대응합니다. 일반 득점에는 +1, 3점 라인 밖 슛에는 +2를 사용하세요. 자신만의 승리 조건을 설정하고 실수했을 때는 마이너스 버튼을 사용하세요.',
  },
  {
    question: '모바일에서 오프라인으로도 작동하나요?',
    answer:
      '네. 페이지가 로드되면 스코어보드는 완전히 오프라인으로 작동합니다. 야외 코트, WiFi가 없는 체육관, 신호가 약한 곳에 적합합니다. 전체 화면 모드에서는 화면이 꺼지지 않아 경기 중에 잠기지 않습니다.',
  },
  {
    question: '팀 파울과 보너스는 어떻게 관리하나요?',
    answer:
      '이 스코어보드는 득점 기록에 집중합니다. 팀 파울은 팀명 입력란을 사용해 수동으로 기록할 수 있습니다(예: "HOME"을 "HOME 3F"로 변경). 공식 경기에서는 별도의 파울 트래커와 함께 사용하는 것을 권장합니다.',
  },
  {
    question: '이 농구 득점 기록기를 휴대폰에서 사용할 수 있나요?',
    answer:
      '네. 인터페이스는 모바일 우선으로 설계되었습니다. +1, +2, +3 버튼은 크고 엄지손가락으로 쉽게 탭할 수 있습니다. 전체 화면 모드는 브라우저 인터페이스를 숨겨 스코어보드가 화면 전체를 차지하게 하고, 화면 절전 잠금 기능으로 휴대폰이 꺼지지 않도록 방지합니다.',
  },
];

const howToData = [
  {
    name: '팀 이름 정하기',
    text: 'HOME 또는 AWAY를 탭하여 팀 이름을 입력하세요. 이름은 브라우저에 자동 저장되므로 페이지를 새로고침해도 유지됩니다.',
  },
  {
    name: '자유투 득점 (+1)',
    text: '선수가 자유투를 성공하면 +1 버튼을 탭하세요. 각 자유투는 1점이며, 보통 파울 후에 주어집니다.',
  },
  {
    name: '필드골 득점 (+2)',
    text: '3점 라인 안쪽에서 넣은 일반 득점에는 +2 버튼을 탭하세요. 이것은 농구에서 가장 일반적인 득점 방식입니다.',
  },
  {
    name: '3점슛 득점 (+3)',
    text: '선수가 3점 라인 밖에서 득점하면 +3 버튼을 탭하세요. 3점슛은 빨간색 버튼으로 강조 표시되며 추가 축하 효과가 나타납니다.',
  },
  {
    name: '득점 실수 수정하기',
    text: '실수로 점수를 추가한 경우 마이너스 버튼을 탭하여 차감하세요. 0 미만으로 내려가지 않습니다. 작은 실수 하나 때문에 경기 전체를 다시 시작할 필요가 없습니다.',
  },
  {
    name: '하프타임에 사이드 교체',
    text: '교체 버튼을 사용하여 하프타임에 HOME과 AWAY의 위치를 바꾸세요. 점수와 팀 이름이 모두 교체되므로 데이터가 손실되지 않습니다.',
  },
  {
    name: '새 게임 시작하기',
    text: '리셋 버튼을 탭하고 확인하면 모든 점수가 초기화되고 새 게임이 시작됩니다. 팀 이름은 유지되므로 다시 입력할 필요가 없습니다.',
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

export const content: ToolLocaleContent<BasketScoreKeeperUI> = {
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
      text: '무료 온라인 농구 스코어보드 : 회원가입 없음, 다운로드 없음',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '농구에서 득점 기록은 간단해야 합니다. 자유투는 +1. 필드골은 +2. 3점슛은 +3. 이 스코어보드는 각 득점 가치에 전용 버튼을 제공하므로 탭하고 바로 플레이를 계속할 수 있습니다. 메뉴도, 모드도, 설정도 필요 없습니다. 팀 이름을 입력하고 바로 득점을 시작하세요. 점수는 브라우저에 자동 저장되므로 페이지를 새로고침하거나, 휴대폰을 닫거나, 나중에 다시 돌아와도 게임이 유지됩니다.',
    },
    {
      type: 'title',
      text: '전용 농구 득점 기록기가 일반 카운터보다 나은 이유',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '대부분의 스코어보드 앱은 2점이나 3점을 추가하기 위해 같은 버튼을 여러 번 탭해야 합니다. 이 추가 탭은 40분 경기 동안 누적되며, 속공이나 빠른 교체 중에 카운트를 잃을 위험이 높아집니다. 이 스코어보드는 각 득점 가치에 하나씩 <strong>세 개의 독립된 버튼</strong>이 있어 득점 플레이당 정확히 한 번만 탭하면 됩니다. +3 버튼은 빨간색으로 빛나며 3점슛이 성공했을 때의 짜릿함을 표현하는 폭발적인 애니메이션을 표시합니다.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '픽업 & 길거리 농구',
          description:
            '1점과 2점으로 16점 또는 21점까지 플레이. 이 스코어보드는 두 가지 가치를 모두 처리합니다. +1과 +2를 사용하고 길거리 룰에서는 +3을 무시하세요.',
          icon: 'mdi:basketball',
          points: ['설정 불필요', '모든 승리 목표에 대응', '화면 꺼짐 방지'],
        },
        {
          title: '고등학교 & 지역 리그',
          description:
            '자유투, 필드골, 3점슛이 포함된 표준 FIBA 또는 NFHS 규칙에 대응합니다. 전용 버튼 덕분에 공식 기록원도 사용할 수 있을 정도로 빠릅니다.',
          icon: 'mdi:school',
          points: ['세 가지 득점 가치 지원', '팀 이름 편집 가능', '전체 화면에서 절전 방지'],
        },
        {
          title: '연습 & 훈련',
          description:
            '슈팅 드릴, 스크리미지, 1대1 게임에서 성공한 슛을 기록하세요. 기록이 저장되지 않으므로 각 세션을 깨끗하게 시작할 수 있습니다.',
          icon: 'mdi:whistle',
          points: ['드릴 간 빠른 리셋', '체육관에서 오프라인 작동', '계정 불필요'],
        },
      ],
    },
    {
      type: 'title',
      text: '농구 득점 방식',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '농구에는 세 가지 득점 가치가 있습니다.<strong>자유투</strong>는 1점이며 파울 후 자유투 라인에서 이루어집니다.<strong>필드골</strong>은 2점이며 정규 플레이 중 3점 라인 안쪽에서 넣은 모든 슛이 해당됩니다.<strong>3점 필드골</strong>은 3점이며 3점 라인 밖에서 던진 슛에 주어집니다. 대부분의 프로 및 대학 경기는 세 가지 가치를 모두 사용합니다. 길거리 농구는 종종 1점과 2점만, 또는 1점만 사용합니다. 이 스코어보드는 모든 형식에 적응합니다.',
    },
    {
      type: 'title',
      text: '모든 형식 플레이: 점수제, 시간제, 목표 점수제',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '농구에는 고정된 득점 제한이 없습니다. 경기는 시간이 종료되면 끝납니다. 하지만 픽업 농구에서는 보통 먼저 16점, 21점, 11점 등에 도달하면 승리하는 목표 점수 방식을 사용합니다. 이 스코어보드는 승리 조건을 강제하지 않습니다. 농구는 득점으로 끝나는 게임이 아니기 때문입니다. 경기가 끝났다고 판단될 때 리셋 버튼을 눌러 다음 게임을 시작하세요. 팀 이름은 유지되므로 연속 게임을 다시 입력할 필요 없이 플레이할 수 있습니다.',
    },
    {
      type: 'title',
      text: '이 스코어보드의 차별점',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>세 개의 전용 버튼</strong> : +1, +2, +3. 값을 전환할 필요도, 길게 누를 필요도, 추가 탭도 필요 없습니다.',
        '<strong>편집 가능한 팀 이름</strong> : 이름을 탭하여 변경하세요. 이름은 브라우저에 저장되어 페이지를 새로고침해도 유지됩니다.',
        '<strong>화면 절전 잠금</strong> : 전체 화면 모드에서 스코어보드가 휴대폰 화면이 꺼지지 않도록 방지합니다. 화면을 계속 탭할 필요가 없습니다.',
        '<strong>전체 화면 모드</strong> : 브라우저 탭과 주소창을 숨겨 스코어보드가 전체 화면을 차지합니다. 전체 화면 버튼을 한 번 탭하면 확장됩니다.',
        '<strong>오프라인 우선</strong> : 최초 로드 후 스코어보드 전체가 인터넷 연결 없이 작동합니다. 광고, 추적기, 데이터 수집이 없습니다.',
        '<strong>만족스러운 피드백</strong> : 각 탭마다 득점 애니메이션, 파티클 효과, 지원 기기에서는 미세한 진동이 발생합니다. +3에는 추가 폭발 효과가 있습니다.',
        '<strong>게임 상태 저장</strong> : 페이지를 새로고침하거나, 브라우저를 닫거나, 다음 날 돌아와도 점수와 팀 이름이 로컬에 저장됩니다.',
      ],
    },
    {
      type: 'title',
      text: '농구 스코어보드 vs. 종이 득점 기록지',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '종이 득점 기록지도 작동은 하지만, 펜과 평평한 표면, 그리고 경기를 보면서 기록할 수 있는 사람이 필요합니다. 디지털 스코어보드는 이 세 가지 문제를 모두 해결합니다. 버튼은 보지 않고도 탭할 수 있을 만큼 큽니다. 숫자는 코트 반대편에서도 읽을 수 있습니다. 점수가 번지거나, 분실되거나, 실수로 지워질 일이 없습니다. 그리고 종이와 달리 이 스코어보드는 게임 상태를 저장하므로 하프타임에 닫았다가 다시 돌아올 수 있습니다.',
    },
  ],
  ui: {
    playerA: '홈',
    playerB: '어웨이',
    swapSides: '사이드 교체',
    reset: '리셋',
    resetConfirm: '게임을 리셋할까요? 모든 점수가 사라집니다.',
    cancel: '취소',
    fullscreen: '전체 화면',
    exitFullscreen: '전체 화면 종료',
    winnerLabel: '승자',
  },
};
