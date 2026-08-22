import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GameUiAccessibilityTesterUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'game-ui-accessibility-stress-tester';
const title = '게임 UI 접근성 스트레스 테스터';
const description = '게임 스크린샷을 브라우저에서 로컬로 분석하세요. 색각 이상 시뮬레이션, HUD 명암비 측정, 블러, 축소, 엣지 히트맵을 제공합니다.';

const faq = [
  {
    question: '이 도구가 게임 UI 접근성을 공식 인증해주나요?',
    answer: '아니요. 색각 이상 시뮬레이션, 명암비 측정, 시각적 스트레스 테스트 및 검토 가이드를 제공하는 보조 도구입니다. 인증 목적이 아닌 디자인 개선 목적으로 활용하세요.',
  },
  {
    question: '업로드한 스크린샷이 서버로 전송되나요?',
    answer: '아니요. 이미지 디코딩, 샘플링, 변환 및 결과 출력 과정은 100% 브라우저 내부에서만 실행됩니다. 설정값만 로컬 저장소에 보관됩니다.',
  },
  {
    question: '두 개의 컬러 프로브로 어떤 요소를 측정해야 하나요?',
    answer: '아군과 적군 표시, 활성 및 비활성 상태, 체력과 피해량 등 플레이어가 구별해야 하는 두 가지 중요 요소의 색상을 선택하세요.',
  },
  {
    question: '명암비가 높게 나와도 수동 검토가 필요한 이유는 무엇인가요?',
    answer: '두 색상의 단순 명암비가 높아도 아이콘이 너무 작거나, 폰트가 얇거나, 배경이 움직이거나, 색상으로만 정보를 전달하는 경우 식별이 어려울 수 있기 때문입니다.',
  },
  {
    question: '히트맵은 무엇을 나타내나요?',
    answer: '선택한 색각 시뮬레이션 적용 후 주변 색상과의 경계 명확도가 급격히 떨어지는 영역을 하이라이트 표시합니다.',
  },
];

const howTo = [
  { name: '스크린샷 불러오기', text: '게임 또는 메뉴 화면의 PNG, JPEG, WebP 이미지를 선택합니다. 이미지는 브라우저 메모리에만 유지됩니다.' },
  { name: '시뮬레이션 렌즈 선택', text: '원본 화면과 적색맹, 녹색맹, 청색맹, 흑백, 저명암비 시뮬레이션을 비교합니다.' },
  { name: '시각 스트레스 적용', text: '블러 효과, 화면 축소, 피셀 확대, 엣지 히트맵을 적용하여 식별 가능성을 테스트합니다.' },
  { name: '두 가지 핵심 색상 측정', text: '프로브 A 또는 B를 선택한 뒤 원본 이미지를 클릭하여 비교할 색상을 추출합니다.' },
  { name: '결과 기록 및 내보내기', text: '체크리스트를 확인하여 팀 의견을 기록하고, 비교 이미지 및 JSON 보고서를 다운로드합니다.' },
];

const softwareApplication: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Any',
};

const faqPage: WithContext<FAQPage> = {
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
  step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })),
};

export const content: ToolLocaleContent<GameUiAccessibilityTesterUI> = {
  slug,
  title,
  description,
  ui: {
    onboarding: '게임 스크린샷을 불러온 후 시뮬레이션 렌즈를 선택하고 플레이어가 구분해야 하는 두 가지 중요 색상 신호를 비교해보세요.',
    privacyNote: '로컬 전용 분석 도구. 이미지가 서버로 업로드되지 않습니다.',
    dropTitle: '게임 스크린샷 이미지를 여기에 끌어다 놓으세요',
    dropHint: '이미지를 드래그하거나 파일 탐색기에서 선택하세요. 실제 게임 플레이 배경이 포함된 화면을 권장합니다.',
    chooseImage: '스크린샷 선택',
    replaceImage: '스크린샷 교체',
    supportedFiles: '최대 16 MB의 PNG, JPEG, WebP 지원. 대형 이미지는 1600 px로 자동 조절됩니다.',
    lensLabel: '시뮬레이션 렌즈',
    lensOriginal: '원본',
    lensProtanopia: '제1색각 (적색맹)',
    lensDeuteranopia: '제2색각 (녹색맹)',
    lensTritanopia: '제3색각 (청색맹)',
    lensAchromatopsia: '흑백 (전색맹)',
    lensReducedContrast: '대비 감소',
    lensDesaturation: '채도 감소',
    compareLabel: '비교 모드',
    compareSideBySide: '나란히 보기',
    compareSplit: '분할 보기',
    comparePress: '누르고 있어 원본 보기',
    holdOriginal: '누르고 있으면 원본 표시',
    splitPosition: '분할 위치',
    stressLabel: '시각 스트레스 설정',
    blurLabel: '블러 (px)',
    downscaleLabel: '작은 화면 미리보기',
    downscaleFull: '원본 크기',
    downscaleHalf: '1/2 크기',
    downscaleQuarter: '1/4 크기',
    downscaleEighth: '1/8 크기',
    zoomLabel: '픽셀 확대 비율',
    heatmapLabel: '엣지 히트맵',
    heatmapHint: '시뮬레이션 환경에서 식별력이 급격히 떨어지는 경계면을 표시합니다.',
    originalView: '원본 화면',
    simulatedView: '시뮬레이션 화면',
    emptyCanvas: '스크린샷을 선택하여 분석을 시작하세요. 이미지는 단말기 내에만 보관됩니다.',
    sampleTitle: '핵심 색상 프로브',
    sampleInstructions: 'A 또는 B를 선택한 후 원본 이미지를 클릭하여 측정할 색상을 추출하세요.',
    sampleA: '프로브 A',
    sampleB: '프로브 B',
    sampleAName: '프로브 A의 의미',
    sampleBName: '프로브 B의 의미',
    manualColor: '색상 코드 직접 입력',
    sampleAInitial: '아군 표시',
    sampleBInitial: '적군 표시',
    noSample: '이미지 대기 중',
    originalContrast: '원본 명암비',
    simulatedContrast: '변환 후 명암비',
    separationRetained: '색상 식별 유지율',
    statusStrong: '충분한 식별성 유지',
    statusWatch: '게임 맥락 확인 필요',
    statusReview: '디자인 개선 권장',
    statusPending: '분석 전',
    measurementLabel: '측정치',
    heuristicLabel: '휴리스틱',
    manualReviewLabel: '수동 검토 상태',
    measurementHint: 'WCAG 상대 휘도 공식을 사용하여 추출한 두 색상의 명암비를 계산합니다.',
    heuristicHint: '시뮬레이션 전후의 RGB 색상 거리 변화율을 보여줍니다.',
    promptTitle: 'UI 디자인 검토 체크리스트',
    promptColorOnly: '색상 외에도 모양이나 텍스트로 적/아군 및 상태 구분이 가능한가요?',
    promptChangingBackground: '밝거나 움직임이 많은 배경 위에서도 텍스트가 잘 보이나요?',
    promptMinimap: '미니맵 아이콘이 색상뿐만 아니라 형태나 패턴으로 구분되나요?',
    promptStates: '선택, 비활성화, 쿨다운 상태가 명확하게 구별되나요?',
    promptShape: '아이콘, 위치, 효과음 등으로 색상 정보를 보완하고 있나요?',
    findingLabel: '팀 검토 메모',
    findingPlaceholder: '예: 피해 효과 발생 시 적 테두리가 묻히는 현상 발생',
    addFinding: '메모 추가',
    findingsEmpty: '등록된 검토 메모가 없습니다.',
    exportSheet: '비교 이미지 다운로드',
    exportReport: 'JSON 보고서 다운로드',
    resetTool: '초기화',
    uploadError: '이미지를 읽을 수 없습니다. 올바른 PNG, JPEG, WebP 파일을 선택하세요.',
    fileTooLarge: '파일 크기가 16 MB를 초과합니다. 더 작은 이미지를 사용하세요.',
    imageReady: '이미지가 로드되었습니다. 두 지점을 클릭하여 측정을 시작하세요.',
    reportDownloaded: 'JSON 보고서가 다운로드되었습니다.',
    sheetDownloaded: '비교 이미지가 다운로드되었습니다.',
    localOnlyDisclosure: '모든 이미지 처리 및 시뮬레이션은 브라우저 내에서만 실행됩니다.',
    limitationDisclosure: '본 도구는 디자인 검토 보조용이며 실제 사용자 테스트를 대체하지 않습니다.',
    reportTitle: '게임 UI 접근성 검토 보고서',
    reportFindingReview: '선택한 시뮬레이션에서 추출한 색상의 식별성이 크게 저하되었습니다.',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: '이미지 업로드 없이 게임 UI 색각 접근성 검서하기',
    },
    {
      type: 'paragraph',
      html: '게임 인터페이스는 화려한 이펙트, 움직이는 카메라, 다양한 배경 속에서도 명확한 정보를 전달해야 합니다. 이 로컬 검사 도구를 활용하면 스크린샷을 외부에 업로드하지 않고 브라우저에서 직접 다양한 색각 이상 시뮬레이션을 적용해볼 수 있습니다.',
    },
    {
      type: 'title',
      level: 2,
      text: '수치 측정, 휴리스틱 지표, 수동 검토의 역할',
    },
    {
      type: 'table',
      headers: ['검증 항목', '도구가 제공하는 정보', '도구만으로 판단할 수 없는 요소'],
      rows: [
        ['수치 측정', '추출한 두 색상의 상대 휘도 및 WCAG 명암비', '게임 내 모든 요소의 접근성 표준 준수 여부'],
        ['시뮬레이션', '적색맹, 녹색맹, 청색맹 학술 알고리즘 변환', '개별 플레이어가 실제로 느끼는 주관적 시각 경험'],
        ['휴리스틱', '블러, 해상도 축소, 색상 경계 둔화 히트맵 표시', 'UI 종합 디자인 우수성에 대한 자동 판정'],
        ['수동 검토', '체크리스트 가이드 및 공유 가능한 보고서 출력', '실제 장애인 플레이어 대상 사용자 테스트 대체'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: '플레이어의 판단에 직접 영향을 주는 색상 측정하기',
    },
    {
      type: 'paragraph',
      html: '단순히 예쁜 요소가 아니라 적과 아군, 안전과 위험, 사용 가능과 불가능처럼 플레이어의 행동을 결정짓는 핵심 색상 쌍을 측정해야 합니다. 시뮬레이션에서 구분이 어려워진다면 색상 외에 형태나 아이콘, 사운드를 추가하는 것이 좋습니다.',
    },
    {
      type: 'tip',
      title: '복잡한 전투 및 플레이 화면을 활용하세요',
      html: '깨끗한 정적 메뉴 화면보다는 이펙트와 전투가 활발한 실제 게임 플레이 스크린샷을 사용하는 것이 훨씬 실질적인 검토 결과를 제공합니다.',
    },
    {
      type: 'title',
      level: 2,
      text: '내보낸 보고서를 팀 협업에 활용하는 방법',
    },
    {
      type: 'paragraph',
      html: '다운로드한 JSON 보고서와 비교 이미지(PNG)를 이슈 트래커(Jira, GitHub Issues 등)에 첨부하면 디자이너와 개발자가 구체적인 개선 방향을 쉽게 논의할 수 있습니다.',
    },
  ],
  faq,
  howTo,
  schemas: [softwareApplication, faqPage, howToSchema],
  bibliography: bibliographyEntries,
};
