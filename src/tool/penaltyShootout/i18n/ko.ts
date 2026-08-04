import { bibliographyEntries } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PenaltyShootoutUI } from '../ui';

const slug = 'penalty-shootout-calculator';
const title = '승부차기 전광판 온라인: 축구 승부차기 스코어보드';
const description =
  '실시간 축구 승부차기 스코어보드. 5회 킥 기록, 수학적 승리 판정, 서든데스 규칙, 승리 축하 애니메이션 적용.';

const faqData = [
  {
    question: '승부차기는 언제 조기 종료되나요?',
    answer:
      '남은 킥 횟수로 상대 팀이 수학적으로 동점을 만들 수 없는 점수 차가 벌어지면 승부차기가 즉시 종료됩니다.',
  },
  {
    question: '승부차기 서든데스는 어떻게 진행되나요?',
    answer:
      '팀당 5회 킥 후 동점인 경우, 한 팀은 성공하고 다른 팀은 실패할 때까지 1회씩 번갈아 킥을 진행합니다.',
  },
  {
    question: '승부차기 선축은 어떻게 결정되나요?',
    answer:
      '주심이 동전 던지기로 골대를 결정하고, 두 번째 동전 던지기로 선축 팀을 결정합니다.',
  },
  {
    question: '승부차기 중 골키퍼를 교체할 수 있나요?',
    answer:
      '부상으로 플레이를 계속할 수 없는 골키퍼는 팀의 교체 카드가 남아있는 경우 지정된 교체 선수와 교체할 수 있습니다.',
  },
];

const howToData = [
  {
    name: '팀명 입력',
    text: '승부차기 시작 전 입력란에 각 팀의 이름을 입력합니다.',
  },
  {
    name: '킥 결과 기록',
    text: '각 킥 후 성공 또는 실패 버튼을 누릅니다. 점수, 시시각각 라운드 및 순서가 자동 업데이트됩니다.',
  },
  {
    name: '서든데스 전환',
    text: '5회 킥 후 동점일 경우 자동으로 서든데스 모드로 전환됩니다.',
  },
  {
    name: '승리 팀 발표',
    text: '수학적 승리 또는 서든데스 승리 시 화려한 챔피언 모달이 우승 팀을 발표합니다.',
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

export const content: ToolLocaleContent<PenaltyShootoutUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography: bibliographyEntries,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'IFAB 공식 승부차기 규정 해설',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '승부차기(공식 명칭: <em>페널티 마크에서의 킥</em>)는 IFAB 경기 규칙 제10조에 따라 무승부로 끝난 토너먼트 경기에서 승자를 가리는 방식입니다.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '5회', label: '기본 킥 횟수' },
        { value: '11m', label: '골대까지 거리' },
        { value: '1v1', label: '키커 vs 골키퍼' },
        { value: 'ABBA / AB', label: '킥 순서 방식' },
      ],
    },
    {
      type: 'tip',
      title: '수학적 조기 종료 규칙',
      html: '한 팀이 남은 킥으로 상대가 따라잡을 수 없는 점수 차를 벌리면 주심은 즉시 승부차기를 종료합니다.',
    },
    {
      type: 'title',
      text: '기본 5회 시도 vs 서든데스 비교',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '기본 라운드 (5회 시도)',
          description: '팀당 5회씩 번갈아 킥 진행. 수학적 역전 불가능 시에만 조기 종료.',
        },
        {
          title: '서든데스 라운드',
          description: '6회 이후 1회씩 단판 승부. 동일 킥 횟수에서 점수 차가 발생하는 즉시 승리 확정.',
        },
      ],
    },
    {
      type: 'title',
      text: 'IFAB 필수 경기 규칙 정리',
      level: 2,
    },
    {
      type: 'table',
      headers: ['규정 항목', 'IFAB 공식 표준 기준'],
      rows: [
        ['키커 자격', '경기 종료 휘슬 당시 그라운드에 있던 선수만 킥 참여 가능.'],
        ['골키퍼 위치', '킥 순간 골키퍼는 최소 한 쪽 발의 일부를 골라인에 대고 있어야 함.'],
        ['도움닫기 속임수', '도움닫기 중 페인트 동작은 허용되나, 도움닫기 완료 후 페인트는 반칙.'],
        ['선수 수 일치', '퇴장 등으로 한 팀 인원이 적을 경우, 상대 팀도 인원수를 맞춰 감축해야 함.'],
      ],
    },
    {
      type: 'title',
      text: '승부차기 방식의 장단점',
      level: 2,
    },
    {
      type: 'proscons',
      title: '승부차기 평가',
      items: [
        {
          pro: '예측 가능한 시간 내에 명확한 승자를 보장함.',
          con: '극심한 정신적 압박감이 120분간의 팀 경기력을 가릴 수 있음.',
        },
        {
          pro: '관중에게 최고의 긴장감과 극적인 재미를 제공함.',
          con: '개인 키커의 실축에 과도한 책임이 지워질 수 있음.',
        },
      ],
    },
  ],
  ui: {
    teamALabel: '홈 팀',
    teamBLabel: '원정 팀',
    scoreGoal: '성공',
    scoreMiss: '실패',
    undo: '되돌리기',
    reset: '초기화',
    suddenDeath: '서든데스',
    regularRounds: '기본 라운드',
    roundLabel: '라운드',
    turnLabel: '킥 차례',
    winnerTitle: '승리 팀 확정',
    unreachableLead: '기본 라운드 역전 불가 점수 차',
    regularRoundsWin: '기본 5회 킥 승리',
    suddenDeathWin: '서든데스 승리',
    statusPending: '대기 중',
    statusScored: '성공',
    statusMissed: '실패',
  },
};
