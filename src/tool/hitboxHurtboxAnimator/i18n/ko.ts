import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HitboxHurtboxAnimatorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'hitbox-hurtbox-animator';
const title = '스프라이트 히트박스 & 허트박스 애니메이터';
const description = '스프라이트 프레임별 충돌 레이어를 작성하고, 어니언 스킨으로 동작을 미리보며, 정확한 피셀 좌표를 편집하여 JSON으로 내보내세요.';

const faq = [
  {
    question: 'Hitbox(공격 판정)와 Hurtbox(피격 판정)의 차이는 무엇인가요?',
    answer: 'Hitbox는 공격을 가하는 영역이며, Hurtbox는 피격 판정을 받는 영역입니다. Pushbox는 캐릭터 간 거리를 유지하며, Grabbox는 잡기 범위를 설정하고, Sensor는 감지 영역으로 기능합니다.',
  },
  {
    question: '스프라이트 이미지가 외부 서버로 전송되나요?',
    answer: '아니요. 이미지 디코딩, 잘라내기, 그리기 및 내보내기는 100% 브라우저 내부에서 실행됩니다. 설정값만 로컬 저장소에 보관됩니다.',
  },
  {
    question: '내보낸 JSON 파일은 어떤 좌표계를 사용하나요?',
    answer: '각 프레임은 자른 영역의 좌측 상단을 (0,0) 원점으로 측정합니다. 사각형과 원의 좌표 및 피봇 위치는 원점 기준 피셀 단위로 저장됩니다.',
  },
  {
    question: '스프라이트 시트와 개별 프레임 이미지를 모두 편집할 수 있나요?',
    answer: '네. PNG 또는 WebP 스프라이트 시트의 행과 열 개수를 입력하여 균일하게 나누거나, 정렬된 개별 이미지 파일들을 선택할 수 있습니다.',
  },
  {
    question: '내보낸 데이터는 모든 게임 엔진에서 바로 사용할 수 있나요?',
    answer: 'JSON 형식은 특정 엔진에 종속되지 않는 범용 구조입니다. 프레임 영역, 피봇, 레이어 이름 및 기하학 데이터를 저장합니다.',
  },
];

const howTo = [
  { name: '애니메이션 이미지 불러오기', text: 'PNG/WebP 스프라이트 시트 또는 정렬된 이미지 파일들을 선택합니다. 모든 처리는 로컬에서 수행됩니다.' },
  { name: '프레임 분할 설정', text: '스프라이트 시트의 행과 열 개수를 설정하고 필름 스트립에서 잘라낸 프레임을 확인합니다.' },
  { name: '충돌 레이어 그리기', text: 'Hitbox, Hurtbox, Pushbox 등 원하는 레이어를 선택하고 사각형 또는 원형 영역을 그립니다.' },
  { name: '동작 정밀 조정', text: '좌표 수치를 직접 편집하고 어니언 스킨으로 이전 프레임과의 동작 연결성을 확인합니다.' },
  { name: '프로젝트 내보내기', text: '범용 JSON 프로젝트 파일과 PNG 컨택트 시트를 다운로드합니다. 원본 이미지와 함께 보관하세요.' },
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

export const content: ToolLocaleContent<HitboxHurtboxAnimatorUI> = {
  slug,
  title,
  description,
  ui: {
    onboarding: '스프라이트 애니메이션을 로드하고 프레임을 확인한 뒤 공격, 피격, 물리 충돌 영역을 지정하세요.',
    privacyNote: '로컬 전용 애니메이션 작업대. 이미지가 전송되지 않습니다.',
    loadSprite: '작업대에 이미지 배치',
    loadHint: '스프라이트 시트 또는 정렬된 PNG/WebP 이미지를 선택하세요.',
    chooseImages: '이미지 선택',
    slicingTitle: '프레임 분할',
    rowsLabel: '행 개수',
    columnsLabel: '열 개수',
    applySlicing: '분할 적용',
    playbackTitle: '동작 미리보기',
    previousFrame: '이전 프레임',
    play: '재생',
    pause: '일시정지',
    nextFrame: '다음 프레임',
    fpsLabel: 'FPS (초당 프레임)',
    onionPrevious: '이전 어니언 스킨',
    onionNext: '다음 어니언 스킨',
    layerTitle: '충돌 레이어',
    typeHitbox: 'Hitbox (공격)',
    typeHurtbox: 'Hurtbox (피격)',
    typePushbox: 'Pushbox (밀기)',
    typeGrabbox: 'Grabbox (잡기)',
    typeSensor: 'Sensor (감지)',
    typeCustom: '사용자 지정',
    shapeRectangle: '사각형',
    shapeCircle: '원형',
    drawShape: '그리기',
    selectShape: '선택',
    stageLabel: '애니메이션 무대',
    emptyStage: '이미지를 불러와 충돌 레이어 작업을 시작하세요.',
    frameReadout: '프레임 {current} / {total}',
    timelineTitle: '타임라인',
    inspectorTitle: '도형 속성',
    noSelection: '도형을 선택하면 정밀 좌표와 크기를 편집할 수 있습니다.',
    nameLabel: '레이어 이름',
    xLabel: 'X 좌표 (px)',
    yLabel: 'Y 좌표 (px)',
    widthLabel: '너비 (px)',
    heightLabel: '높이 (px)',
    radiusLabel: '반지름 (px)',
    duplicateShape: '복제',
    mirrorShape: '좌우 반전',
    deleteShape: '선택 도형 삭제',
    copyPrevious: '이전 프레임 복사해오기',
    copyAll: '현재 프레임 전체 적용',
    pivotTitle: '피봇 (기준점)',
    pivotXLabel: '피봇 X',
    pivotYLabel: '피봇 Y',
    exportTitle: '프로젝트 내보내기',
    exportJson: 'JSON 다운로드',
    importJson: 'JSON 가져오기',
    exportContactSheet: '컨택트 시트 다운로드',
    resetProject: '레이어 초기화',
    undo: '실행 취소',
    redo: '다시 실행',
    statusReady: '작업대가 준비되었습니다.',
    statusImageLoaded: '{count}개 이미지 파일 로드 완료.',
    statusShapeCreated: '새 충돌 도형이 추가되었습니다.',
    statusShapeUpdated: '충돌 도형이 수정되었습니다.',
    statusImported: '프로젝트를 가져왔습니다.',
    statusExported: '내보내기 파일이 준비되었습니다.',
    statusError: '파일을 읽을 수 없습니다.',
    framesBadge: '{count}개 프레임',
    shapesBadge: '{count}개 도형',
    coverageBadge: '커버리지 {percent}%',
    coordinatesNote: '좌표는 자른 프레임의 좌측 상단을 (0,0) 원점으로 계산합니다.',
    localOnlyDisclosure: 'JSON 파일에는 파일명, 피봇 및 충돌 기하 구조만 저장되며 픽셀 정보는 포함되지 않습니다.',
    limitationDisclosure: '본 레이어는 디자인 영역 설정용입니다. 실제 동작은 게임 엔진에서 테스트하세요.',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: '스프라이트 애니메이션 흐름에 맞춘 판정 영역 설계',
    },
    {
      type: 'paragraph',
      html: '개별 프레임만 보고 판정을 설정하면 애니메이션 전체 흐름에서 충돌 영역이 어색해질 수 있습니다. 본 에디터는 스프라이트 화면, 판정 레이어, 어니언 스킨, 타임라인을 한 화면에 제공합니다.',
    },
    {
      type: 'title',
      level: 2,
      text: '게임 기능에 따른 충돌 레이어 선택',
    },
    {
      type: 'table',
      headers: ['레이어', '주요 역할', '확인 요소'],
      rows: [
        ['Hitbox', '공격이나 효과를 적용하는 영역', '의도한 공격 프레임에서만 생성되는가?'],
        ['Hurtbox', '피격 판정을 받는 영역', '캐릭터 외형을 자연스럽게 감싸고 있는가?'],
        ['Pushbox', '캐릭터 간 겹침을 방지하는 물리 영역', '화면 덜컹거림을 막기 위해 안정적인가?'],
        ['Grabbox', '잡기를 시작하는 범위 판정', '타이밍과 범위가 모션과 일치하는가?'],
        ['Sensor', '이벤트 및 상호작용 감지 영역', '레이어 이름이 명확히 지정되었는가?'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: '프레임 좌표계 이해 및 적용',
    },
    {
      type: 'paragraph',
      html: '내보낸 프로젝트는 자른 프레임의 좌상단을 (0,0) 원점으로 피셀 좌표를 저장합니다.',
    },
    {
      type: 'tip',
      title: '동작의 선딜레이, 타격, 후딜레이를 연속으로 확인하세요',
      html: '프레임 수정 후 반드시 애니메이션을 전 구간 재생하여 프레임 간 판정이 매끄럽게 이어지는지 점검하세요.',
    },
    {
      type: 'title',
      level: 2,
      text: '팀 협업을 위한 컨택트 시트 활용',
    },
    {
      type: 'paragraph',
      html: 'PNG 컨택트 시트를 출력하면 전 프레임의 충돌 레이어를 한눈에 파악할 수 있어 개발팀 간 논의가 훨씬 수월해집니다.',
    },
  ],
  faq,
  bibliographyTitle: '충돌 판정 설계 참고 자료',
  bibliography: bibliographyEntries,
  howTo,
  schemas: [softwareApplication, faqPage, howToSchema],
};
