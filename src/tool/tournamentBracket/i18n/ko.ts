import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TournamentBracketUI } from '../ui';

const slug = 'tournament';
const title = '무료 온라인 대진표 생성기 및 토너먼트 구성기';
const description = '회원 가입 없이 무료로 토너먼트를 구성하고 싱글 엘리미네이션 대진표를 만드세요. FIFA, 파델, e스포츠 및 보드 게임에 적합합니다. 100% 모바일 친화적.';

const ui: TournamentBracketUI = {
  tournamentInProgress: '토너먼트 진행 중',
  nextMatch: '다음 경기',
  share: '공유',
  backNew: '뒤로 / 새로 만들기',
  back: '뒤로',
  newTournament: '새 토너먼트',
  setupSubtitle: '경쟁 대진표를 설정하고 생성하세요.',
  tournamentNameLabel: '토너먼트 이름',
  tournamentNamePlaceholder: '예: 여름 토너먼트',
  addPlayersLabel: '참가자 추가',
  addPlayerPlaceholder: '이름... 또는 쉼표로 구분된 여러 이름',
  playersLabel: '선수',
  clearAll: '모두 삭제',
  emptyList: '목록이 비어 있습니다',
  howItWorks: '어떻게 작동하나요?',
  howItWorksText: '참가자를 추가하고 이름을 지은 후 생성하세요. 시스템이 자동으로 대진을 만들고 인원이 홀수인 경우 "부전승(Byes)"을 처리합니다.',
  historyLabel: '기록',
  noHistory: '저장된 토너먼트 없음',
  noOldTournaments: '이전 토너먼트 없음',
  generateBtn: '대진표 생성',
  shuffleLabel: '대진 랜덤 섞기',
  scoreLabel: '점수 활성화 (선택 사항)',
  dragHint: '드래그하여 이동',
  roundFinal: '결승',
  roundSemifinal: '준결승',
  roundQuarter: '8강',
  roundPrefix: '라운드',
  byeLabel: '부전승',
  waiting: '대기 중...',
  emptyRound: '빈 라운드',
  confirmClearPlayers: '선수 목록을 모두 삭제하시겠습니까?',
  alertMinPlayers: '최소 2명의 선수가 필요합니다.',
  alertLoadFailed: '토너먼트를 로드할 수 없습니다.',
  confirmDeleteTournament: '이 토너먼트를 기록에서 영구적으로 삭제하시겠습니까?',
  toastShareLimit: '최대 32명의 선수까지만 공유할 수 있습니다',
  toastShareError: '링크 생성 오류',
  toastShareCopied: '링크가 클립보드에 복사되었습니다',
  toastShareFailed: '복사할 수 없습니다. URL:',
  toastFinished: '토너먼트 종료!',
  defaultName: '토너먼트'
};

const faqData = [
  { question: '싱글 엘리미네이션 방식은 어떻게 작동하나요?', answer: '한 경기에서 패배한 참가자가 자동으로 토너먼트에서 탈락하는 방식입니다. 승자는 최종 결승전에 두 명만 남을 때까지 다음 라운드(16강, 8강, 준결승)로 진출합니다.' },
  { question: '참가자 수가 홀수이면 어떻게 되나요?', answer: '당사의 도구는 초기에 "부전승(BYE)"을 자동으로 처리합니다. 대진표가 항상 2의 거듭제곱(2, 4, 8, 16...)으로 끝나도록 일부 선수는 1라운드를 거치지 않고 바로 2라운드로 진출합니다.' },
  { question: '토너먼트 대진표를 저장하고 공유할 수 있나요?', answer: '네, 즉석에서 생성되는 고유 링크를 통해 대진표를 공유할 수 있습니다. 가입이 필요 없는 도구이므로 데이터는 탭이 열려 있는 동안 브라우저에 유지되지만, 기록으로도 저장됩니다.' },
  { question: 'FIFA나 LoL 같은 e스포츠 토너먼트에 사용할 수 있나요?', answer: '물론입니다. 빠르고 시각적으로 설계되어 콘솔, PC 게임 또는 보드 및 카드 게임 토너먼트를 신속하게 관리하기에 이상적입니다.' },
  { question: '토너먼트 생성은 무료인가요?', answer: '네, 완전히 무료이며 제한이 없습니다. 프리미엄 플랜, 참가자 제한, 워터마크 또는 방해되는 광고가 없습니다. 모든 기능은 브라우저에서 오프라인으로 작동합니다.' },
  { question: '브라우저를 닫으면 데이터가 삭제되나요?', answer: '아니요. LocalStorage를 사용하여 기기에 모든 토너먼트를 자동으로 저장합니다. 탭을 닫거나 컴퓨터를 끄고 며칠 후에 다시 돌아와도 토너먼트는 그대로 남아 있습니다.' },
  { question: '"다음 경기" 버튼은 어떻게 작동하나요?', answer: '시스템이 자동으로 결과가 아직 나오지 않은 다음 준비된 대진(두 참가자 모두 확정)을 감지합니다. "다음 경기"를 누르면 해당 경기로 보기가 바로 이동합니다.' },
];

const howTo = [
  { name: '참가자 입력', text: '경쟁에 참여할 선수 또는 팀의 이름을 작성합니다.' },
  { name: '대진표 생성', text: '생성 버튼을 누르세요. 시스템이 자동으로 대진과 필요한 라운드를 만듭니다.' },
  { name: '결과 업데이트', text: '각 경기의 승자를 클릭하면 대진표의 다음 단계로 자동으로 진출합니다.' },
  { name: '종료', text: '토너먼트가 완료되면 최종 우승자가 표시됩니다.' },
];

const seo = [
  {
    type: 'title' as const,
    text: '무료 온라인 대진표 생성기 및 토너먼트 구성기',
    level: 2 as const
  },
  {
    type: 'paragraph' as const,
    html: '가장 완벽하고 무료이며 가입이 필요 없는 토너먼트 구성기로 스포츠, 비디오 게임 또는 보드 게임 대회를 관리하세요. <strong>통합 점수 시스템</strong>, 자동 기록 및 스마트 경기 내비게이션을 통해 몇 초 만에 시각적이고 인터랙티브한 싱글 엘리미네이션 대진표를 만드세요. 모든 기능은 브라우저에서 직접 오프라인으로 작동합니다.'
  },
  {
    type: 'title' as const,
    text: '싱글 엘리미네이션 토너먼트를 만드는 방법은?',
    level: 2 as const
  },
  {
    type: 'paragraph' as const,
    html: '<strong>토너먼트 이름을 지정</strong>하고, 참가자를 추가(하나씩 또는 쉼표로 구분된 목록 붙여넣기)하고, 원하는 경우 대진을 랜덤으로 섞고, 대진표를 생성하고, 각 경기의 승자를 눌러 결과를 관리하고, "다음 경기" 버튼을 사용하여 미해결 경기 사이를 탐색하세요.'
  },
  {
    type: 'title' as const,
    text: '고급 기능',
    level: 2 as const
  },
  {
    type: 'list' as const,
    items: [
      '<strong>대량 입력:</strong> 쉼표로 구분하여 여러 참가자를 한 번에 추가합니다.',
      '<strong>정확한 점수:</strong> 3-1 또는 21-19와 같은 결과를 입력할 수 있는 점수 시스템.',
      '<strong>스마트 내비게이션:</strong> "다음 경기" 버튼을 통해 다음 대기 중인 대진으로 이동합니다.',
      '<strong>드래그 가능한 대진표:</strong> 대규모 토너먼트를 위한 자유로운 스크롤이 가능한 데스크톱 뷰.',
      '<strong>영구 기록:</strong> 모든 토너먼트가 브라우저에 자동으로 저장됩니다.',
      '<strong>자동 몰수승:</strong> 수동 입력 없이 부전승 및 직접 통과가 해결됩니다.',
      '<strong>URL로 공유:</strong> 압축된 링크를 생성하여 누구에게나 대진표를 보냅니다.',
    ]
  },
  {
    type: 'title' as const,
    text: '모든 경쟁에 완벽함',
    level: 2 as const
  },
  {
    type: 'comparative' as const,
    columns: 3 as const,
    items: [
      {
        title: '비디오 게임 & e스포츠',
        description: 'FIFA, FC25, 발로란트, 리그 오브 레전드, 스트리트 파이터, 철권, 슈퍼 스매시 브라더스 또는 로켓 리그에 적합합니다.',
        icon: 'mdi:controller-classic',
        points: ['빠른 대진 형성', '팀 제한 없음', '즉시 공유 가능']
      },
      {
        title: '스포츠 & 라켓 스포츠',
        description: '파델, 테니스, 탁구, 배드민턴, 풋살 또는 3x3 농구 대진표를 관리하세요.',
        icon: 'mdi:trophy-outline',
        points: ['통합 점수', '최적화된 모바일 뷰', '종이가 필요 없음']
      },
      {
        title: '보드 & 카드 게임',
        description: '매직 더 개더링, 포켓몬 TCG, 유희왕, 카탄, 체스 또는 도미노 토너먼트를 구성하세요.',
        icon: 'mdi:cards-playing-outline',
        points: ['최대 64명까지', '라운드 기록', '부전승 관리']
      },
    ]
  },
  {
    type: 'title' as const,
    text: '"부전승(Byes)" 또는 직접 통과란 무엇인가요?',
    level: 2 as const
  },
  {
    type: 'paragraph' as const,
    html: '이상적인 싱글 엘리미네이션 토너먼트에서 참가자 수는 2의 거듭제곱(4, 8, 16, 32...)이어야 합니다. 인원이 홀수이거나 2의 거듭제곱이 아닌 경우(예: 7명, 10명 또는 13명) 시스템은 1라운드에서 자동으로 <strong>"부전승(Byes)"</strong>을 할당합니다. 부전승은 참가자가 경기 없이 다음 단계로 바로 진출함을 의미합니다. 당사의 알고리즘은 이러한 통과권을 공정하고 자동으로 계산하여 할당합니다.'
  },
  {
    type: 'title' as const,
    text: '즉각적이고 무료이며 가입이 필요 없음',
    level: 2 as const
  },
  {
    type: 'paragraph' as const,
    html: '번거로움 제로. 계정, 설치, 대기가 필요 없습니다. 참가자를 추가하고 즉시 토너먼트를 생성하세요. 모든 정보는 <strong>LocalStorage</strong>를 통해 브라우저에 자동으로 저장됩니다. 탭을 닫거나 컴퓨터를 끄고 며칠 후에 다시 돌아와도 토너먼트와 전체 기록이 그대로 남아 있습니다.'
  },
];

const schemas: [WithContext<FAQPage>, WithContext<HowTo>, WithContext<SoftwareApplication>] = [
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) },
  { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })) },
  { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'SportsApplication', operatingSystem: 'Web', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } },
];

export const content: ToolLocaleContent<TournamentBracketUI> = { slug, title, description, ui, seo, faq: faqData, bibliography, howTo, schemas };
