import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { BaseballScoreKeeperLocaleContent } from '../entry';

const slug = 'baseball-scorekeeper';
const title = '프리미엄 야구 및 소프트볼 스코어키퍼 with 다이아몬드 트래커';
const description = '실시간으로 득점, 안타, 실책을 기록하세요. 주자 위치를 보여주는 시각적 다이아몬드, 볼 스트라이크 카운트, 이닝별 기록 그리드를 제공합니다.';

const faqData = [
  {
    question: '카운트 트래커는 어떻게 작동하나요?',
    answer: '현재 타자의 볼과 스트라이크 개수를 표시합니다. 볼 4개는 볼넷, 스트라이크 3개는 삼진입니다. 유소년 리그를 위해 한도 조정이 가능합니다.',
  },
  {
    question: '인터랙티브 야구 다이아몬드는 무엇을 보여주나요?',
    answer: '1루, 2루, 3루를 표시합니다. 루를 탭하면 주황색으로 강조되어 주자가 해당 루에 있음을 나타냅니다. 안타 시 주자가 자동으로 진루합니다.',
  },
  {
    question: '득점, 안타, 실책은 어떻게 기록되나요?',
    answer: 'R H E 매트릭스에 양 팀의 득점, 안타, 실책이 표시됩니다. 이닝별 기록으로 모든 이닝의 득점 진행 상황을 확인할 수 있습니다.',
  },
];

const howToData = [
  {
    name: '각 투구 기록',
    text: '스트라이크, 볼, 파울, 안타 또는 아웃을 탭하여 각 투구를 기록합니다. 결과에 따라 카운트가 자동으로 업데이트됩니다.',
  },
  {
    name: '주자 관리',
    text: '다이아몬드의 루를 탭하여 주자를 배치하거나 제거합니다. 안타 시 주자가 자동으로 진루합니다.',
  },
  {
    name: '이닝 진행 추적',
    text: '이닝 표시에 현재 하프 이닝이 표시됩니다. 3아웃 후 자동으로 초와 말이 전환됩니다.',
  },
  {
    name: '박스 스코어 확인',
    text: 'R H E 요약과 스크롤 가능한 이닝 기록 그리드로 전체 득점 진행 상황을 확인하세요.',
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

export const content: BaseballScoreKeeperLocaleContent = {
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
      text: '야구 스코어키퍼 무료 온라인 득점 안타 실책 실시간 추적',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '다음 경기를 위한 믿을 수 있는 야구 스코어키퍼가 필요하신가요? 이 무료 온라인 도구는 득점, 안타, 실책을 기록하면서 실시간 주자 위치를 보여주는 라이브 인터랙티브 다이아몬드를 제공합니다. 모든 투구가 중요합니다. 디지털 스코어보드가 카운트, 아웃, 이닝을 놓치지 않도록 도와줍니다. 리틀리그 코칭, 소프트볼 대회 점수 기록, 고등학교 경기 관리 등 어떤 상황에서도 이 도구가 박스 스코어 전체를 자동으로 처리하므로 경기장의 플레이에 집중할 수 있습니다.',
    },
    {
      type: 'title',
      text: '이 야구 스코어보드가 시간을 절약하고 실수를 방지하는 방법',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '수동 스코어 기록은 특히 빠른 템포의 경기에서 실수가 발생하기 쉽습니다. 한 번의 스트라이크 누락이나 주자 간과로 박스 스코어 전체가 어긋날 수 있습니다. 이 디지털 스코어키퍼는 번거로운 부분을 자동화합니다. 스트라이크, 볼, 파울, 안타 또는 아웃을 탭하면 보드가 즉시 카운트를 업데이트합니다. 타자가 볼넷이나 삼진이 되면 도구가 자동으로 카운트를 리셋합니다. 3아웃 후에는 초와 말을 자동으로 전환하고 득점을 기록합니다. R H E 매트릭스와 이닝별 기록 그리드로 경기의 전체 그림을 한눈에 확인할 수 있습니다.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '실시간 투구 카운트',
          description: '각 타석의 볼과 스트라이크를 자동 추적하고 볼넷과 삼진을 감지합니다.',
          icon: 'mdi:baseball',
          points: ['볼 4개까지 추적', '스트라이크 3개까지 추적', '판정 시 자동 리셋'],
        },
        {
          title: '주자 관리',
          description: '인터랙티브 다이아몬드가 1루, 2루, 3루의 주자를 정확히 표시합니다.',
          icon: 'mdi:diamond-stone',
          points: ['루 탭하여 주자 설정', '점유 시 시각적 강조', '이닝 변경 시 초기화'],
        },
        {
          title: '완전한 박스 스코어',
          description: '전체 R H E 통계와 이닝별 득점 기록을 스크롤로 확인.',
          icon: 'mdi:scoreboard-outline',
          points: ['득점 안타 실책', '이닝별 그리드', '양 팀 통합 합계'],
        },
      ],
    },
    {
      type: 'title',
      text: '이 야구 점수 추적기가 필요한 사람들',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '이 도구는 점수 기록이 필요한 모든 사람을 위해 만들어졌습니다. 선수들에게 깨끗한 디지털 디스플레이를 제공하려는 유소년 야구 코치, 전담 스코어키퍼 없이 경기를 관리하는 소프트볼 리그 자원봉사자, 관중석에서 자녀의 경기를 추적하는 학부모, 그리고 보조 확인 시스템을 원하는 심판. 인터페이스는 모든 기기에서 작동하며, 덕아웃에서 사용하는 스마트폰부터 펜스에 설치한 태블릿, 벤치의 노트북까지 지원합니다. 설치가 필요 없으며 브라우저를 열고 바로 점수 기록을 시작할 수 있습니다.',
    },
    {
      type: 'list',
      items: [
        '<strong>자동 카운트 관리:</strong> 볼과 스트라이크는 볼넷, 삼진, 안타, 아웃 후 자동 리셋됩니다. 수동 리셋이 필요 없습니다.',
        '<strong>터치 지원 다이아몬드:</strong> 1루, 2루, 3루를 탭하여 주자를 배치하거나 제거합니다. 금색으로 강조되어 점유된 루를 표시합니다.',
        '<strong>이닝별 점수:</strong> 각 하프 이닝이 스크롤 그리드에 기록됩니다. 전체 9이닝 동안 각 팀이 어떻게 득점했는지 정확히 확인하세요.',
        '<strong>설정 불필요:</strong> 페이지를 열고 즉시 점수 기록을 시작하세요. 점수 상단의 레이블을 탭하여 팀 이름을 사용자 지정할 수 있습니다.',
      ],
    },
    {
      type: 'title',
      text: '야구 점수 기록 이렇게 간단합니다 카운트 다이아몬드 박스 스코어 한 화면에',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '야구에서 점수를 기록하려면 여러 요소를 동시에 추적해야 합니다. 볼과 스트라이크 카운트, 아웃 수, 주자가 있는 루, 각 팀의 득점, 현재 이닝. 이 중 하나라도 놓치면 혼란과 부정확한 기록이 발생합니다. 이 도구는 모든 것을 하나의 화면에 통합합니다. 카운트 점으로 볼과 스트라이크를 한눈에 확인. 다이아몬드로 주자 위치 표시. R H E 테이블로 전체 박스 스코어 제공. 이닝 그리드는 가로 스크롤로 전체 득점 기록을 표시합니다. 모든 탭에 실시간으로 업데이트됩니다.',
    },
    {
      type: 'grid',
      columns: [
        { type: 'card', title: '코치', html: '<p>덕아웃에서 팀 전체가 볼 수 있는 깨끗한 디지털 스코어보드를 유지하세요.</p>' },
        { type: 'card', title: '자원봉사자', html: '<p>점수 기록 경험이 필요 없습니다. 도구가 모든 복잡한 추적을 자동으로 처리합니다.</p>' },
        { type: 'card', title: '학부모', html: '<p>관중석에서 신뢰할 수 있는 실시간 점수 표시로 경기를 추적하세요.</p>' },
        { type: 'card', title: '선수', html: '<p>경기 후 이닝별 점수를 검토하여 성과를 분석하세요.</p>' },
      ],
    },
  ],
  ui: {
    title: '야구 스코어키퍼',
    description: '득점, 안타, 실책을 다이아몬드 뷰로 기록하세요.',
    away: '원정',
    home: '홈',
    runs: 'R',
    hits: 'H',
    errors: 'E',
    inning: '이닝',
    topInning: '초',
    bottomInning: '말',
    balls: '볼',
    strikes: '스트라이크',
    outs: '아웃',
    strikeBtn: '스트라이크',
    ballBtn: '볼',
    foulBtn: '파울',
    hitBtn: '안타',
    outBtn: '아웃',
    walkBtn: '볼넷',
    runBtn: '+1 득점',
    errorBtn: '실책',
    newBatter: '새 타자',
    resetMatch: '게임 리셋',
    resetConfirm: '현재 게임을 리셋하시겠습니까? 모든 점수가 사라집니다.',
    cancel: '취소',
    confirm: '확인',
    total: '합계',
    fullscreen: '전체화면',
    toggleSound: '사운드 전환',
  },
};
