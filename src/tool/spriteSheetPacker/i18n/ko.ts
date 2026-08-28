import type { ToolLocaleContent } from '../../../types';
import type { SpriteSheetPackerUI } from '../ui';

export const content: ToolLocaleContent<SpriteSheetPackerUI> = {
  slug: 'sprite-sheet-packer',
  title: '스프라이트 시트 패커 및 추출기',
  description:
    '낱개 개별 애니메이션 프레임을 텍스처 아틀라스로 패킹하거나 기존 스프라이트 시트에서 이미지를 추출하여 2D 게임 드로우 콜을 최적화하세요.',
  ui: {
    packerTab: '패커 스튜디오',
    extractorTab: '스프라이트 추출기',
    dropZoneTitle: '프레임 이미지 드래그 앤 드롭',
    dropZoneSubtitle: 'PNG 또는 WebP 이미지를 업로드하여 최적화된 텍스처 아틀라스 생성',
    selectFilesButton: '이미지 파일 선택',
    clearAllButton: '작업 영역 비우기',
    downloadZipButton: '패키지 다운로드 (ZIP)',
    copyJsonButton: '아틀라스 JSON 복사',
    downloadSheetPngButton: '텍스처 PNG 다운로드',
    paddingLabel: '프레임 간격 (px)',
    borderExtrusionLabel: '테두리 확장 (px)',
    maxTextureSizeLabel: '최대 텍스처 해상도',
    powerOfTwoLabel: '2의 거듭제곱 규격 강제 (POT)',
    trimTransparencyLabel: '투명 영역 잘라내기',
    exportFormatLabel: '타깃 엔진 포맷',
    presetPixelArt: '픽셀 아트 16x16 프리셋',
    presetHdUi: 'HD UI 아틀라스 1024 프리셋',
    presetMobile: '모바일 WebGL 2048 프리셋',
    formatGenericHash: '일반 JSON (Hash)',
    formatGenericArray: '일반 JSON (Array)',
    formatUnity: 'Unity 2D 엔진',
    formatGodot: 'Godot 2D 엔진',
    formatPhaser: 'Phaser / PixiJS 엔진',
    formatCss: '웹 프론트엔드 CSS',
    previewTitle: '텍스처 아틀라스 미리보기',
    efficiencyBadge: '텍스처 공간 효율',
    drawCallsBadge: '절감된 드로우 콜',
    totalFramesBadge: '패킹된 프레임 수',
    textureSizeBadge: '아틀라스 해상도',
    flipbookTitle: '애니메이션 플립북 플레이어',
    flipbookFpsLabel: '애니메이션 속도 (FPS)',
    playAnimation: '시퀀스 재생',
    pauseAnimation: '일시 정지',
    extractorModeGrid: '고정 격자 분할',
    extractorModeAlpha: '자동 알파 채널 분할',
    frameWidthLabel: '프레임 가로 (px)',
    frameHeightLabel: '프레임 세로 (px)',
    marginLabel: '여백 오프셋 (px)',
    spacingLabel: '격자 간격 (px)',
    extractFramesButton: '이미지 추출하기',
    extractedCountLabel: '추출된 스프라이트 수',
    codeSnippetTitle: '엔진 연동 코드',
    copySnippetButton: '코드 복사',
    copiedToast: '클립보드에 복사되었습니다',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: '2D 게임 엔진의 드로우 콜 최적화 및 GPU 렌더링',
    },
    {
      type: 'paragraph',
      html: '개별 낱개 프레임 이미지를 단 하나의 텍스처 아틀라스로 패킹하면 CPU에서 GPU로 전송되는 렌더링 드로우 콜 횟수가 획기적으로 줄어듭니다.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '95%', label: '드로우 콜 절감률' },
        { value: '4x', label: 'GPU 일괄 처리 속도 향상' },
        { value: '60 FPS', label: '모바일 목표 성능' },
        { value: '100%', label: '브라우저 로컬 처리' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: '개별 프레임 파일 vs 패킹된 텍스처 아틀라스 비교',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '개별 프레임 파일',
          description: '독립적으로 저장된 PNG 파일',
          points: [
            '화면상의 개별 프레임마다 독립적인 드로우 콜 명령 호출',
            '그래픽 카드 GPU 렌더링 컨텍스트 스위칭 빈번히 발생',
            '웹 게임 환경에서 HTTP 요청 수 대폭 증가',
            '모바일 기기에서 프레임 레이트 저하 유발',
          ],
        },
        {
          title: '패킹된 텍스처 아틀라스',
          description: '단일 PNG 이미지와 JSON 좌표 데이터 결합',
          points: [
            '수백 개의 스프라이트를 단 하나의 GPU 드로우 콜로 묶어서 처리',
            '그래픽 메모리 대역폭 및 렌더링 처리량 극대화',
            '이미지와 메타데이터를 묶어 네트워크 요청 단순화',
            '모든 플랫폼에서 부드러운 렌더링 성능 보장',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: '서브픽셀 카메라 이동 및 테두리 확장 기술',
    },
    {
      type: 'paragraph',
      html: '외곽 테두리 피셀을 1~2픽셀 외곽으로 확장 복사하는 Border Extrusion을 적용하면 카메라 이동 시 발생하는 픽셀 번짐 현상을 방지할 수 있습니다.',
    },
    {
      type: 'tip',
      title: '테두리 확장 최적화 전략',
      html: '카메라 이동 시 발생하는 시각적 경계 간섭을 방지하기 위해 1~2픽셀의 테두리 확장을 설정하세요.',
    },
    {
      type: 'title',
      level: 2,
      text: '모바일 및 PC 엔진용 권장 텍스처 규격',
    },
    {
      type: 'table',
      headers: ['타깃 플랫폼', '권장 최대 크기', '2의 거듭제곱 필수 여부', '메모리 프로필'],
      rows: [
        ['모바일 웹 브라우저', '2048 x 2048 px', 'WebGL 1.0 필수', '낮은 대역폭'],
        ['데스크톱 PC / 콘솔', '4096 x 4096 px', '권장', '높은 GPU 용량'],
        ['레트로 휴대용 기기', '1024 x 1024 px', '필수', '엄격한 VRAM 제한'],
      ],
    },
    {
      type: 'proscons',
      items: [
        {
          pro: '구형 그래픽 드라이버 및 WebGL 1.0 환경과의 완벽한 호환성 제공',
          con: '스프라이트 개수가 적을 때 여백 공간이 남을 수 있음',
        },
        {
          pro: '하드웨어 밉맵 자동 생성 지원',
          con: '불규칙한 프레임인 경우 정교한 여백 조절 필요',
        },
        {
          pro: 'GPU 메모리 VRAM 할당 최적화',
          con: '초기 텍스처 할당 영역이 약간 증가함',
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: '스프라이트 패킹 핵심 용어',
    },
    {
      type: 'glossary',
      items: [
        {
          term: '드로우 콜 (Draw Call)',
          definition: 'CPU가 그래픽 카드 GPU에 그래픽 렌더링을 명령하는 지시 횟수.',
        },
        {
          term: '빈 패킹 (Bin Packing)',
          definition: '다양한 크기의 사각형들을 가장 작은 영역 안에 효율적으로 배치하는 알고리즘.',
        },
        {
          term: '외곽 확장 (Border Extrusion)',
          definition: '이미지 테두리 피셀을 외곽으로 확장하여 그래픽 경계선 경계 간섭을 막는 기술.',
        },
        {
          term: '플립북 애니메이션 (Flipbook Animation)',
          definition: '연속된 프레임 이미지를 빠르게 재생하여 움직임을 표현하는 방식.',
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: '개발 점검 리스트',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '생산성 규칙',
      html: '캐릭터 애니메이션은 하나로 패킹하고 WebGL 빌드 시 2의 거듭제곱 해상도를 유지하세요.',
    },
    {
      type: 'paragraph',
      html: "이 항목은 깔끔한 내보내기와 정확한 미리보기를 위해 확인할 내용을 정리합니다. 1.",
    },
    {
      type: 'paragraph',
      html: "이 항목은 깔끔한 내보내기와 정확한 미리보기를 위해 확인할 내용을 정리합니다. 2.",
    },
    { type: 'title', level: 2, text: 'padding과 가장자리 확장 함께 조정하기' },
    { type: 'paragraph', html: 'padding은 인접한 프레임을 분리하고 가장자리 확장은 테두리 픽셀을 반복합니다. 두 값은 필터링, 밉맵, 카메라 이동과 함께 확인해야 합니다. 간격이 작으면 이음새가 생기고 너무 크면 텍스처 공간을 낭비합니다.' },
    { type: 'paragraph', html: '패킹 후에는 대상 엔진에서 JSON 좌표를 확인하세요. 프레임 크기, 원점, 회전, 투명도가 내보낸 파일과 같은 방식으로 해석되어야 아틀라스를 안전하게 사용할 수 있습니다.' },
  ],
  faq: [
    {
      question: '스프라이트 시트가 무엇이며 왜 2D 게임 개발에 필요한가요?',
      answer:
        '스프라이트 시트는 여러 프레임 이미지를 하나로 합친 텍스처 파일입니다. 이를 통해 렌더링 드로우 콜을 줄여 게임 속도를 향상시킵니다.',
    },
    {
      question: '클라이언트 측 처리란 무슨 뜻인가요?',
      answer:
        '모든 작업이 사용자의 웹 브라우저 HTML5 Canvas API에서 직접 처리되며 서버로 이미지가 전송되지 않습니다.',
    },
    {
      question: '기존 스프라이트 시트에서 프레임을 잘라낼 수 있나요?',
      answer:
        '네. 추출기 탭으로 이동하여 이미지를 올린 뒤 격자 크기를 지정하면 낱개 파일로 자동 분할됩니다.',
    },
  ],
  howTo: [
    {
      name: '프레임 업로드',
      text: '드롭존에 PNG 또는 WebP 프레임 파일을 올려놓습니다.',
    },
    {
      name: '설정 구성',
      text: '여백, 테두리 확장 및 사용할 게임 엔진 포맷을 선택합니다.',
    },
    {
      name: '미리보기 및 다운로드',
      text: '플립북 플레이어로 애니메이션을 확인하고 ZIP 파일로 다운로드합니다.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: '스프라이트 시트 패커 및 추출기',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '스프라이트 시트가 무엇인가요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '스프라이트 시트는 여러 프레임 이미지를 하나로 합친 텍스처 파일입니다.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: '스프라이트 시트 패킹 및 추출 방법',
      step: [
        {
          '@type': 'HowToStep',
          name: '프레임 업로드',
          text: '드롭존에 PNG 또는 WebP 프레임 파일을 올려놓습니다.',
        },
      ],
    },
  ],
  bibliography: [
    {
      name: 'Godot Engine 2D Sprite Sheets Documentation',
      url: 'https://docs.godotengine.org/en/stable/tutorials/2d/2d_sprite_animation.html',
    },
    {
      name: 'Unity Sprite Atlas Manual',
      url: 'https://docs.unity3d.com/Manual/class-SpriteAtlas.html',
    },
  ],
};
