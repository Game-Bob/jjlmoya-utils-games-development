import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { IsometricTileMapEditorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const title = '아이소메트릭 타일 맵 에디터';
const description = '다이아몬드 그리드에 여러 레이어를 그려 타일 형상을 조정하고 아이소메트릭 레벨 초안을 JSON 또는 SVG로 내보냅니다.';
const faq = [
  { question: '아이소메트릭 타일 맵이란 무엇인가요?', answer: '아이소메트릭 타일 맵은 2차원 장면에서 3차원 공간을 표현하기 위해 다이아몬드 형태의 그리드를 사용합니다. 열과 행은 바닥 평면을 나타내고 레이어는 높이 차이를 더합니다.' },
  { question: '타일을 어떻게 배치하나요?', answer: '팔레트에서 타일을 고르고 그리기를 선택한 뒤 활성 레이어를 골라 다이아몬드를 클릭합니다. 그리기 모드에서도 마우스 오른쪽 클릭으로 셀을 지울 수 있습니다.' },
  { question: '레이어 깊이는 무엇을 바꾸나요?', answer: '레이어 깊이는 겹쳐진 레이어 사이의 화면상 세로 간격입니다. 높은 단차를 표현하려면 값을 키우고 레이어를 가깝게 두려면 줄입니다.' },
  { question: '내보낸 SVG를 게임 엔진에서 사용할 수 있나요?', answer: 'SVG는 현재 다이아몬드와 색상을 보여주는 시각적 참고 자료입니다. 엔진에서 논리 그리드를 다시 만들 때는 행, 열, 레이어와 타일 값을 보존하는 JSON이 더 적합합니다.' },
  { question: '이 에디터가 제작용 타일셋을 만들 수 있나요?', answer: '아니요. 레이어가 있는 그리드를 계획하고 간결한 맵 설명을 내보냅니다. 텍스처 분할, 충돌 설정, 엔진 정렬 규칙, 최종 에셋 렌더링은 보장하지 않습니다.' },
];
const howTo = [
  { name: '그리드 형상 설정', text: '타일 너비와 높이, 열, 행, 레이어 수를 설정합니다. 레이어 깊이로 레벨 사이의 세로 단차를 표현합니다.' },
  { name: '그리기 레이어 선택', text: '그리기 전에 레이어를 선택합니다. 활성 레이어는 더 강한 테두리로 표시되고 다른 표시 레이어는 공간을 보여주도록 흐리게 남습니다.' },
  { name: '바닥이나 구조 그리기', text: '잔디, 돌, 물, 길 중 하나를 고르고 셀을 클릭합니다. 다음 셀에 다른 재료가 필요하면 팔레트를 바꿉니다.' },
  { name: '맵을 부분적으로 수정', text: '지우기 또는 오른쪽 클릭으로 타일을 제거합니다. 그리드 크기를 바꿔도 새 범위에 남는 셀은 유지됩니다.' },
  { name: '계획 결과 내보내기', text: '다른 도구에서 그리드를 재구성할 때는 JSON을 사용하고, 디자인 리뷰나 레벨 초안에는 SVG를 사용합니다.' },
];
const softwareApplication: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, applicationCategory: 'DeveloperApplication', operatingSystem: 'Any' };
const faqPage: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) };

export const content: ToolLocaleContent<IsometricTileMapEditorUI> = {
  slug: 'isometric-tile-map-editor', title, description,
  ui: {
    controlsTitle: '맵 컨트롤', geometryTitle: '그리드 형상', tileWidthLabel: '타일 너비', tileHeightLabel: '타일 높이', columnsLabel: '열', rowsLabel: '행', layersLabel: '레이어', layerDepthLabel: '레이어 깊이', toolsTitle: '그리기 모드', paintLabel: '그리기', eraseLabel: '지우기', paletteTitle: '타일 팔레트', grassLabel: '잔디', stoneLabel: '돌', waterLabel: '물', pathLabel: '길', layersTitle: '활성 레이어', layerLabel: '레이어', hideLayerLabel: '숨기기', showLayerLabel: '표시', mapTitle: '아이소메트릭 맵', mapHelp: '타일과 레이어를 고른 다음 다이아몬드를 클릭하세요. 오른쪽 클릭으로 셀을 지울 수 있습니다.', mapAriaLabel: '편집 가능한 아이소메트릭 타일 맵', summaryTitle: '맵 정보', filledLabel: '채워진 셀', coverageLabel: '커버리지', activeLayerLabel: '활성 레이어', selectedLabel: '선택한 타일', emptyCellLabel: '비어 있음', cellLabel: '셀', clearLabel: '맵 비우기', resetLabel: '형상 초기화', exportJsonLabel: 'JSON 내보내기', exportSvgLabel: 'SVG 내보내기', statusReady: '그릴 준비가 되었습니다', statusSaved: '로컬에 저장됨', statusCleared: '맵을 비웠습니다', statusReset: '형상을 초기화했습니다', statusExported: '파일을 내보냈습니다', statusPainted: '타일을 배치했습니다', statusErased: '타일을 지웠습니다', statusLayerHidden: '레이어를 숨겼습니다', statusLayerShown: '레이어를 표시했습니다', legendTitle: '맵 범례', legendEmpty: '빈 셀', legendFilled: '그린 셀', modelNote: '이 에디터는 레이어가 있는 논리 그리드를 설명합니다. 타일셋을 가져오거나 충돌을 계산하거나 엔진별 정렬을 설정하지 않으며 최종 픽셀 위치를 보장하지 않습니다.', privacyDisclosure: '맵은 이 브라우저에 남습니다. 맵 데이터나 텔레메트리는 업로드되지 않습니다.',
  },
  seo: [
    { type: 'title', level: 2, text: '아이소메트릭 그리드로 공간과 높이를 계획하기' },
    { type: 'paragraph', html: '아이소메트릭 맵은 완전한 3D 장면으로 만들지 않고도 레벨의 바닥 위치와 높이를 읽기 쉽게 해야 할 때 유용합니다. 다이아몬드 그리드는 행과 열의 이동을 보여주고 레이어는 다리, 플랫폼, 지붕, 겹친 방을 간단히 표현합니다.' },
    { type: 'paragraph', html: '이 에디터는 형상을 명확하게 유지합니다. 타일 너비와 높이는 다이아몬드를 결정하고 열과 행은 바닥 영역을 결정하며 레이어 깊이는 각 레벨이 화면 위로 이동하는 거리를 결정합니다. 크기를 바꿔도 범위 안의 셀은 유지됩니다.' },
    { type: 'title', level: 2, text: '유용한 블록아웃을 다섯 단계로 만들기' },
    { type: 'list', items: ['프로젝트의 시각 언어에 맞춰 타일 비율을 조정합니다.', '이동 영역을 읽기 쉽게 하려면 먼저 바닥 재료를 그립니다.', '높이를 색상만으로 표현하지 말고 다리, 지붕, 높은 플랫폼에 레이어를 사용합니다.', '위 레이어를 숨기거나 지우기 모드로 전환해 아래 셀을 안전하게 수정합니다.', '맵 재구성에는 JSON을, 시각적 리뷰에는 SVG를 내보냅니다.'] },
    { type: 'title', level: 2, text: '행, 열, 레이어를 따로 읽기' },
    { type: 'paragraph', html: '행과 열은 논리 평면에서 셀의 위치를 나타내므로 다이아몬드 크기가 바뀌어도 안정적이어야 합니다. 레이어는 두 번째 좌표입니다. 같은 행과 열에 다른 높이의 셀을 둘 수 있습니다. 이렇게 분리하면 엔진에서 맵을 다시 만들기 쉽습니다.' },
    { type: 'table', headers: ['신호', '의미', '다음 결정'], rows: [['낮은 커버리지', '대부분의 셀이 비어 있습니다.', '장식하기 전에 플레이 가능한 영역을 정합니다.'], ['한 열에 여러 레이어', '맵에 겹친 공간이 있습니다.', '정렬과 충돌이 높이를 구분하는지 확인합니다.'], ['너무 넓은 다이아몬드', '수평 이동이 그리드를 지배합니다.', '타일 너비를 줄이거나 기준 뷰포트를 넓힙니다.'], ['너무 깊은 레이어 단차', '높이 변화가 강하게 보입니다.', '레이어를 줄이거나 게임 에셋을 확인합니다.']] },
    { type: 'title', level: 2, text: '다음 작업에 맞는 내보내기 선택' },
    { type: 'paragraph', html: 'JSON은 구조화된 전달 형식으로 형상, 레이어 수, 그리기 상태와 모든 타일 값을 보존합니다. SVG는 색이 있는 다이아몬드를 보여주는 프레젠테이션 형식으로 디자인 리뷰나 레벨 계획에 유용합니다. 어느 형식에도 원본 타일셋이나 엔진 메타데이터는 포함되지 않습니다.' },
    { type: 'tip', title: '이 블록아웃으로 증명할 수 없는 것', html: '정돈된 다이아몬드 맵만으로 스프라이트 정렬, 높이 사이 이동, 타일셋의 이음새 없는 연결을 증명할 수 없습니다. 실제 에셋, 충돌, 정렬 축, 카메라를 대상 엔진에서 테스트하세요.' },
  ],
  faqTitle: '아이소메트릭 타일 맵 질문', faq, bibliographyTitle: '타일 맵 참고 자료', bibliography: bibliographyEntries, howTo, schemas: [softwareApplication, faqPage, howToSchema],
};
