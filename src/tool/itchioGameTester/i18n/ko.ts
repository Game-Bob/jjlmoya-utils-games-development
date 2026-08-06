import type { ToolLocaleContent } from '../../../types';
import type { ItchioGameTesterUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<ItchioGameTesterUI> = {
  slug: 'itchio-game-tester',
  title: 'Itch.io 웹 게임 검사기 및 라이브 해상도 최적화 도구',
  description: 'HTML5 내보내기 파일이나 ZIP 아카이브를 업로드하여 뷰포트를 라이브로 테스트하고, 스크롤바를 수정하며, Godot 및 Unity WebGL 빌드를 검사하고, Itch.io 임베드 설정을 생성합니다.',
  ui: {
    dropzoneTitle: '게임 빌드 또는 ZIP 파일을 여기에 드롭',
    dropzoneHint: '.ZIP 파일, 내보낸 폴더, 또는 HTML5 빌드 파일을 이 영역에 드롭하여 즉시 검사합니다.',
    chooseFiles: '게임 파일 또는 폴더 선택',
    engineDetected: '감지된 엔진',
    compatibilityScore: 'Itch.io 호환성 점수',
    viewportWidth: '뷰포트 너비 (px)',
    viewportHeight: '뷰포트 높이 (px)',
    presets: '빠른 해상도 프리셋',
    fitTest: '라이브 레이아웃 및 스크롤바 테스트',
    copySettings: 'Itch.io 임베드 설정 복사',
    copied: '클립보드에 복사됨',
    embedMode: '임베드 모드',
    scrollbars: '스크롤바 활성화',
    noIssuesFound: '모든 검사가 성공적으로 통과했습니다. 패키지가 Itch.io 표준을 100% 준수합니다.',
    filesInspected: '검사된 파일',
    resetViewport: '뷰포트 초기화',
    autoScaleToggle: '뷰포트를 화면 너비에 자동 맞춤',
    scaledNotice: '뷰포트가 화면 너비를 초과합니다. 전체 캔버스가 보이도록 인공 줌아웃이 적용되었습니다. 실제 레이아웃을 보려면 자동 맞춤을 비활성화하세요.',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Itch.io HTML5 게임 내보내기 형식 지침'
    },
    {
      type: 'paragraph',
      html: 'Itch.io에서 HTML5 및 WebGL 게임을 출판하려면 뷰포트 크기, 아카이브 파일 구조, 교차 출처 보안 헤더를 정밀하게 구성해야 합니다.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: '표준 웹 화면 비율', value: '16:9 가로' },
        { label: '클래식 Itch 해상도', value: '960 x 540 px' },
        { label: '필수 진입 파일', value: '루트의 index.html' },
        { label: 'Godot 4 요구사항', value: 'COOP / COEP 헤더' }
      ]
    },
    {
      type: 'tip',
      html: '1280x720 WebGL 게임을 Itch.io에 임베드할 때, 임베드 뷰포트 크기를 정확히 1280x720으로 설정하고 "Embed in page"를 활성화하세요.'
    }
  ],
  faq: [
    {
      question: 'Godot 4 게임이 Itch.io에서 검은 화면을 표시하는 이유는?',
      answer: 'Godot 4 웹 내보내기는 SharedArrayBuffer 지원이 필요한 WebAssembly 멀티스레딩을 사용합니다. Itch.io 게임 편집 페이지에서 프레임 옵션의 "SharedArrayBuffer support"를 활성화하세요.'
    }
  ],
  howTo: [
    { name: '게임 파일 또는 ZIP 업로드', text: 'HTML5 내보내기 ZIP 아카이브를 드래그 앤 드롭하거나 index.html이 있는 빌드 디렉토리를 선택합니다.' },
    { name: '호환성 보고서 검토', text: '루트 index.html 배치, 대소문자 경고, 엔진 감지에 대한 자동 감사 보고서를 확인합니다.' },
    { name: '뷰포트 라이브 크기 조정', text: '해상도 슬라이더와 화면 비율 칩을 사용하여 스크롤바 없이 iframe 임베드를 라이브 테스트합니다.' },
    { name: 'Itch.io 설정 복사', text: '설정 복사를 클릭하여 Itch.io 게임 제출 페이지용 정확한 너비와 높이 값을 가져옵니다.' }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Itch.io 웹 게임 검사기',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Godot 4 게임이 Itch.io에서 검은 화면을 표시하는 이유는?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Godot 4 웹 내보내기는 SharedArrayBuffer 지원이 필요한 WebAssembly 멀티스레딩을 사용합니다. Itch.io 게임 편집 페이지에서 프레임 옵션의 "SharedArrayBuffer support"를 활성화하세요.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Itch.io 게임 뷰포트를 감사하고 테스트하는 방법',
      step: [
        {
          '@type': 'HowToStep',
          name: '게임 파일 또는 ZIP 업로드',
          text: 'HTML5 내보내기 ZIP 아카이브를 드래그 앤 드롭하거나 index.html이 있는 빌드 디렉토리를 선택합니다.'
        },
        {
          '@type': 'HowToStep',
          name: '뷰포트 라이브 크기 조정',
          text: '해상도 슬라이더와 화면 비율 칩을 사용하여 스크롤바 없이 iframe 임베드를 라이브 테스트합니다.'
        }
      ]
    }
  ],
  bibliography: bibliographyEntries
};
