import type { ToolLocaleContent } from '../../../types';
import type { PixelArtPaletteSwapperUI } from '../ui';

export const content: ToolLocaleContent<PixelArtPaletteSwapperUI> = {
  slug: 'pixel-art-palette-swapper',
  title: '도트 그래픽 팔레트 스왑 도구',
  description: '스프라이트와 스프라이트 시트의 색상을 레트로 콘솔 팔레트나 사용자 지정 Hex 색상으로 브라우저에서 직접 변경하세요.',
  ui: {
    uploadTitle: '스프라이트 파일 드래그 앤 드롭',
    uploadHint: 'PNG, JPEG, WebP 파일이 브라우저에서 안전하게 처리됩니다',
    chooseImage: '이미지 선택',
    replaceImage: '이미지 교체',
    paletteTitle: '팔레트 선택',
    gameBoyPalette: 'Game Boy',
    nesPalette: 'NES 스타일',
    pico8Palette: 'PICO-8',
    commodore64Palette: 'Commodore 64',
    dawnBringerPalette: 'DawnBringer 16',
    customPalette: '사용자 지정 색상',
    customPaletteHint: 'Hex 색상 코드를 쉼표, 공백 또는 줄바꿈으로 구분하여 입력하세요.',
    applyCustomPalette: '팔레트 적용',
    resetCustomPalette: '초기화',
    sourcePreview: '원본',
    resultPreview: '변환 결과',
    waitingForImage: '이미지 대기 중',
    uploadToPreview: '이미지를 업로드하면 미리보기가 표시됩니다',
    resultEmpty: '원본과 색상이 변환된 이미지가 나란히 표시됩니다.',
    downloadPng: 'PNG 다운로드',
    downloadDisabled: '내보내기를 활성화하려면 이미지를 업로드하세요.',
    colorCount: '원본 색상 수',
    mappedCount: '사용된 색상 수',
    imageSize: '이미지 크기',
    paletteCount: '팔레트 색상 수',
    preserveAlpha: '투명도 유지',
    zoomLabel: '확대',
    processing: '픽셀 색상 변환 중',
    invalidPalette: '올바른 Hex 색상 코드를 1개 이상 입력하세요',
    invalidImage: 'PNG, JPEG 또는 WebP 이미지를 선택하세요',
    readyStatus: '준비 완료',
    dropActive: '파일을 놓아 업로드',
    mappedSummary: '{source}개의 원본 색상을 {mapped}개의 팔레트 색상으로 변환했습니다',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: '도트 그래픽을 레트로 감성의 팔레트로 즉시 변환',
    },
    {
      type: 'paragraph',
      html: '제한된 색상 수 팔레트는 도트 그래픽에 독특한 레트로 분위기를 더해줍니다. Game Boy, NES, PICO-8 팔레트로 손쉽게 변환해 보세요.',
    },
    {
      type: 'title',
      level: 2,
      text: '색상 변환 알고리즘 작동 방식',
    },
    {
      type: 'paragraph',
      html: '각 픽셀의 RGB 값을 분석하여 선택한 팔레트에서 가장 가까운 색상으로 대체하며 투명도 채널은 그대로 유지됩니다.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '팔레트 제한',
          description: '원본 색상을 가장 가까운 팔레트 색으로 변경.',
          points: [
            '스프라이트 및 타일셋 작업에 최적화',
            '원본 해상도와 픽셀 위치 유지',
            '색상 수 관리가 용이함',
          ],
        },
        {
          title: '팔레트 스왑',
          description: '동일 디자인의 다양한 색상 버전 생성.',
          points: [
            '2P 컬러 및 속성 변경 캐릭터 제작에 유용',
            '사용자 지정 Hex 코드 지원',
            '즉시 PNG 파일로 내보내기 가능',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: '레트로 콘솔 팔레트 비교',
    },
    {
      type: 'table',
      headers: ['팔레트', '색상 수', '추천 용도', '주의할 점'],
      rows: [
        ['Game Boy', '4', '흑백 휴대용 게임기 느낌', '명암 차가 적으면 디테일이 뭉개질 수 있음'],
        ['NES 스타일', '16', '아케이드풍 도트 그래픽', '채도가 높은 색상의 균형 필요'],
        ['PICO-8', '16', '트렌디하고 선명한 아기자기한 스타일', '강렬한 색상 간의 대비 고려'],
        ['Commodore 64', '16', '고전 PC 게임 감성', '명확한 실루엣 표현이 효과적'],
        ['DawnBringer 16', '16', '범용성 높은 세련된 팔레트', '명확한 광원 표현이 필요함'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: '스프라이트 시트 작업 흐름',
    },
    {
      type: 'paragraph',
      html: '이미지를 불러온 후 확대 기능을 사용하여 픽셀 디테일이나 경계선이 뭉개지지 않았는지 확인하세요.',
    },
    {
      type: 'tip',
      title: '색상 구성 팁',
      html: '4개에서 16개 사이의 색상을 사용하는 것이 깔끔한 디테일을 유지하는 데 좋습니다.',
    },
    {
      type: 'title',
      level: 2,
      text: '내보내기 전 체크리스트',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '게임 적용 전 확인',
      html: '100% 원본 비율에서 외곽선과 투명 배경 부분이 깨끗한지 점검하세요.',
    },
    {
      type: 'glossary',
      items: [
        {
          term: '색상 양자화 (Quantization)',
          definition: '많은 수의 색상을 제한된 색상 집합으로 줄이는 과정.',
        },
        {
          term: '팔레트 램프 (Ramp)',
          definition: '음영을 표현하기 위해 음영 단계별로 정리된 색상 계열.',
        },
        {
          term: '인덱스 팔레트',
          definition: '픽셀이 직접 색상 코드를 갖는 대신 색상표 번호를 참조하는 방식.',
        },
      ],
    },
  ],
  faq: [
    {
      question: '이미지가 서버로 전송되나요?',
      answer: '아니요. 모든 작업은 사용자의 브라우저 내부에서 안전하게 진행됩니다.',
    },
    {
      question: '원하는 팔레트를 직접 입력할 수 있나요?',
      answer: '네. Hex 색상 코드를 입력하고 「팔레트 적용」을 클릭하세요.',
    },
    {
      question: "게시하기 전에 어떤 설정을 확인해야 하나요? 1",
      answer: "파일을 게시하기 전에 크기, 대상 환경, 미리보기를 함께 확인하세요.",
    },
    {
      question: "게시하기 전에 어떤 설정을 확인해야 하나요? 2",
      answer: "파일을 게시하기 전에 크기, 대상 환경, 미리보기를 함께 확인하세요.",
    },
  ],
  howTo: [
    {
      name: '이미지 불러오기',
      text: 'PNG, JPEG 또는 WebP 이미지를 드래그 앤 드롭합니다.',
    },
    {
      name: '팔레트 선택',
      text: '프리셋을 선택하거나 직접 Hex 코드를 입력합니다.',
    },
    {
      name: '내보내기',
      text: '색상이 변환된 PNG 이미지를 다운로드합니다.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: '도트 그래픽 팔레트 스왑 도구',
      applicationCategory: 'DesignApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '이미지가 서버로 전송되나요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '아니요. 모든 작업은 사용자의 브라우저 내부에서 안전하게 진행됩니다.',
          },
        },
        {
          '@type': 'Question',
          name: '원하는 팔레트를 직접 입력할 수 있나요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '네. Hex 색상 코드를 입력하고 「팔레트 적용」을 클릭하세요.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: '도트 그래픽 색상 변환 방법',
      step: [
        { '@type': 'HowToStep', name: '이미지 불러오기', text: '이미지를 드래그 앤 드롭합니다.' },
        { '@type': 'HowToStep', name: '팔레트 선택', text: '프리셋을 선택하거나 직접 Hex 코드를 입력합니다.' },
        { '@type': 'HowToStep', name: '내보내기', text: '색상이 변환된 PNG 이미지를 다운로드합니다.' },
      ],
    },
  ],
  bibliography: [
    {
      name: 'MDN Canvas API',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API',
    },
    {
      name: 'Lospec Palette List',
      url: 'https://lospec.com/palette-list',
    },
    {
      name: 'W3C Portable Network Graphics Specification',
      url: 'https://www.w3.org/TR/png-3/',
    },
  ],
};
