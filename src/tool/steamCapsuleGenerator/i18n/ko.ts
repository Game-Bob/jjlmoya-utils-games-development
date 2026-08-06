import type { ToolLocaleContent } from '../../../types';
import type { SteamCapsuleGeneratorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<SteamCapsuleGeneratorUI> = {
  slug: 'steam-capsule-generator',
  title: 'Steam 캡슐 및 아트 미리보기 생성기',
  description: '공식 Steam 상점 캡슐 및 라이브러리 이미지 자산을 잘라내고 미리보며 안전 영역을 검증합니다.',
  ui: {
    uploadTitle: '게임 아트워크 업로드',
    uploadHint: '고해상도 키 비주얼 이미지를 업로드하세요 (권장 3840x1240 px 이상).',
    chooseFile: '파일 선택',
    minimumSize: '권장 최소 크기: 1920x1080 px',
    horizontalFocus: '수평 초점 (X)',
    verticalFocus: '수직 초점 (Y)',
    zoomLevel: '확대 배율',
    resetFocus: '초점 재설정',
    safeZone: '안전 영역',
    downloadZip: '모든 자산 다운로드 (ZIP)',
    headerCapsule: '헤더 캡슐 (460x215 / HD 920x430)',
    smallCapsule: '소형 캡슐 (231x87 / HD 462x174)',
    mainCapsule: '메인 캡슐 (616x353 / HD 1232x706)',
    verticalCapsule: '세로형 라이브러리 캡슐 (300x450 / HD 600x900)',
    libraryHero: '라이브러리 히어로 (1920x620 / HD 3840x1240)',
    communityIcon: '커뮤니티 앱 아이콘 (32x32 / HD 184x184)',
    storePreviewTab: 'Steam 상점 미리보기',
    libraryPreviewTab: 'Steam 라이브러리 미리보기',
    allAssetsTab: '모든 자산 크기',
    toggleSafeZones: '안전 영역 가이드',
    toggleSteamOverlay: 'Steam UI 표시'
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Steam 그래픽 자산 사양 및 지침'
    },
    {
      type: 'paragraph',
      html: 'Steam 상점 페이지 및 라이브러리 뷰는 정규화된 캡슐 이미지를 사용하여 타이틀을 표시합니다.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: '상점 헤더 HD 해상도', value: '920 x 430 px' },
        { label: '라이브러리 캡슐 비율', value: '2:3 세로형' },
        { label: '라이브러리 히어로 최대 해상도', value: '3840 x 1240 px' },
        { label: '커뮤니티 아이콘 크기', value: '184 x 184 px' }
      ]
    },
    {
      type: 'table',
      headers: ['자산 유형', '표준 크기 (px)', 'HD 목표 크기 (px)', '화면 비율', '포맷'],
      rows: [
        ['헤더 캡슐', '460 x 215', '920 x 430', '2.14:1', 'JPG / PNG'],
        ['소형 캡슐', '231 x 87', '462 x 174', '2.65:1', 'JPG / PNG'],
        ['메인 캡슐', '616 x 353', '1232 x 706', '1.74:1', 'JPG / PNG'],
        ['세로형 라이브러리 캡슐', '300 x 450', '600 x 900', '2:3', 'JPG / PNG'],
        ['라이브러리 히어로', '1920 x 620', '3840 x 1240', '3.1:1', 'JPG / PNG'],
        ['라이브러리 로고', '1280 x 720', '1280 x 720', '16:9', '투명 PNG'],
        ['커뮤니티 아이콘', '32 x 32', '184 x 184', '1:1', 'PNG']
      ]
    },
    {
      type: 'tip',
      title: '안전 영역 최적화',
      html: '주요 로고와 캐릭터 얼굴은 전체 이미지의 좌측 상단 3분분의 2 이내에 배치하세요.'
    },
    {
      type: 'proscons',
      title: '작업 흐름 평가',
      items: [
        {
          pro: 'Steamworks 필수 자산 크기를 즉시 일괄 생성',
          con: '복잡한 비주얼은 레이어별 별도 작업이 필요할 수 있습니다'
        }
      ]
    },
    {
      type: 'glossary',
      items: [
        {
          term: '캡슐',
          definition: 'Steam 상점 및 라이브러리에 사용되는 홍보용 그래픽 용기 용어입니다.'
        }
      ]
    }
  ],
  faqTitle: 'Steam 자산 관련 자주 묻는 질문',
  faq: [
    {
      question: '어떤 파일 포맷을 사용해야 하나요?',
      answer: '메인 캡슐에는 JPG 또는 PNG 파일을 사용할 수 있습니다.'
    }
  ],
  howTo: [
    {
      name: '고해상도 이미지 업로드',
      text: '키 비주얼 이미지를 선택하세요.'
    }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Steam 캡슐 및 아트 미리보기 생성기',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'KRW'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '어떤 파일 포맷을 사용해야 하나요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '메인 캡슐에는 JPG 또는 PNG 파일을 사용할 수 있습니다.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Steam 캡슐 이미지 생성 방법',
      step: [
        {
          '@type': 'HowToStep',
          name: '고해상도 이미지 업로드',
          text: '키 비주얼 이미지를 선택하세요.'
        }
      ]
    }
  ],
  bibliography: bibliographyEntries
};
