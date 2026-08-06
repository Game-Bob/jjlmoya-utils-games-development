import { createSteamContent } from './shared';

export const content = createSteamContent({
  slug: 'steam-capsule-generator',
  title: 'Steam 캡슐 생성기',
  description: '하나의 마스터 이미지로 Steam용 네 가지 미리보기를 만들고 초점과 안전 영역을 확인한 뒤 PNG 또는 ZIP으로 로컬 저장합니다.',
  ui: { uploadTitle: '마스터 아트를 놓으세요', uploadHint: '고해상도 이미지 하나로 브라우저에서 Steam 미리보기 세트를 만듭니다.', chooseFile: '아트 선택', minimumSize: '최소 크기', supportedFormats: 'PNG, JPEG 또는 WebP', invalidImage: '1920 × 1080픽셀 이상의 이미지를 선택하세요.', sourcePreview: '마스터 아트', focalPoint: '초점', focalHint: '이미지를 클릭하거나 슬라이더를 사용해 중요한 피사체가 모든 크롭에 남도록 하세요.', horizontalFocus: '가로 위치', verticalFocus: '세로 위치', resetFocus: '초점 중앙 정렬', outputPreview: 'Steam 출력 세트', safeZone: '안전 영역', dimensions: '픽셀', downloadPng: 'PNG', downloadZip: 'ZIP 다운로드', buildingZip: '로컬 ZIP을 만드는 중...', zipReady: '캡슐 세트 준비 완료', localOnly: '개인정보 우선. 이미지는 이 브라우저에 남습니다.', headerCapsule: '헤더 캡슐', mainCapsule: '메인 캡슐', verticalCapsule: '세로 캡슐', communityIcon: '커뮤니티 아이콘', ready: '준비 완료', downloadError: '아카이브를 만들 수 없습니다. PNG 버튼을 사용해 보세요.', },
  seo: [
    { type: 'title', text: '하나의 아트로 일관된 Steam 캡슐 세트 만들기', level: 2 },
    { type: 'paragraph', html: '가로형 일러스트는 잘 보이지만 세로형 크롭에서는 캐릭터가 잘릴 수 있습니다. 이 도구는 하나의 마스터 이미지에서 460 × 215 헤더, 616 × 353 메인, 374 × 448 세로형, 184 × 184 정사각형 아이콘을 보여 줍니다. 초점을 움직이면 비율이 달라져도 남겨야 할 구성을 선택할 수 있습니다.' },
    { type: 'paragraph', html: '이미지는 canvas로 브라우저 안에서 처리됩니다. 서버 업로드와 계정이 필요하지 않습니다. 마커를 움직이면 네 가지 미리보기가 함께 갱신되어 로고, 얼굴, 캐릭터와 대비를 저장 전에 확인할 수 있습니다.' },
    { type: 'title', text: '게임 아트를 위한 실용적인 작업 순서', level: 2 },
    { type: 'list', items: ['1920 × 1080픽셀 이상의 마스터 이미지로 시작하세요.', '마커를 중요한 피사체에 놓으세요.', '세로형과 정사각형 미리보기를 먼저 확인하세요.', '안전 영역을 여백 기준으로 사용하고 최신 Steamworks 템플릿과 비교하세요.'] },
    { type: 'paragraph', html: '안전 영역은 구성 확인을 위한 가이드이며 모든 Steam 화면을 보장하지 않습니다. 로고와 제목을 복잡한 가장자리에서 멀리 두고 캡슐 텍스트에 관한 Valve 규칙도 확인하세요.' },
    { type: 'tip', html: '피사체 주변에 여백이 있는 마스터를 보관하세요. 로고 위치를 바꿔야 한다면 원본을 수정해 다시 생성하세요.' },
  ],
  faq: [
    { question: '이미지가 기기 밖으로 전송되나요?', answer: '아니요. 브라우저에서 읽고 그립니다. 업로드와 계정이 없습니다.' },
    { question: '어떤 마스터 이미지를 사용하나요?', answer: '1920 × 1080픽셀 이상의 PNG, JPEG 또는 WebP가 적합합니다.' },
    { question: '초점은 무엇을 바꾸나요?', answer: '모든 결과의 원본 크롭 위치를 이동해 주요 피사체를 보호합니다.' },
    { question: '안전 영역은 공식 기준인가요?', answer: '실용적인 가이드입니다. 게시 전에 최신 Steamworks 템플릿과 비교하세요.' },
  ],
  howTo: [
    { name: '마스터 선택', text: '1920 × 1080픽셀 이상의 PNG, JPEG 또는 WebP를 놓으세요.' },
    { name: '초점 조정', text: '미리보기를 클릭하거나 가로와 세로 슬라이더를 움직이세요.' },
    { name: '네 가지 크롭 확인', text: '헤더, 메인, 세로형과 정사각형 아이콘을 검토하세요.' },
    { name: '세트 저장', text: '개별 PNG 또는 로컬 ZIP을 다운로드하세요.' },
  ],
});
