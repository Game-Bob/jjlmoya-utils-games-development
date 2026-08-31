import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GamePixelPerUnitPlannerUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const faq = [
  { question: '게임에서 단위당 픽셀이란 무엇인가요?', answer: '단위당 픽셀 또는 PPU는 월드의 한 단위를 몇 개의 텍스처 픽셀로 표현하는지 나타냅니다. 일관된 밀도는 스프라이트, 타일, 카메라의 크기를 예측하기 쉽게 합니다.' },
  { question: '정수 배율이 중요한 이유는 무엇인가요?', answer: '정수 배율은 원본 픽셀마다 같은 수의 화면 픽셀을 배정합니다. 소수 배율은 가장자리를 고르지 않게 하거나 흐리게 만들 수 있습니다.' },
  { question: '픽셀 블리딩이란 무엇인가요?', answer: '인접한 텍셀이나 아틀라스 영역의 색이 의도치 않게 나타나는 현상입니다. 필터, 경계, 서브픽셀 이동, 부족한 여백이 원인이 될 수 있습니다.' },
  { question: '추천 배율은 어떻게 사용하나요?', answer: '해상도에 들어가고 목표에 가까운 후보로 사용하세요. 이후 엔진에서 nearest 필터, 카메라 위치, 아틀라스 여백을 확인하세요.' },
  { question: '모든 엔진에 맞는 PPU를 선택해 주나요?', answer: '아니요. 이 도구는 계산을 확인하는 도구입니다. 카메라, 임포트, 밉맵, 반올림, 픽셀 스냅은 엔진마다 달라 실제 테스트가 필요합니다.' },
];
const howTo = [
  { name: '대상 화면 선택', text: '게임 화면이나 기준 해상도의 너비와 높이를 픽셀로 입력합니다.' },
  { name: '스프라이트 불러오기', text: '이미지를 선택하면 원본 크기를 감지합니다. 포함된 Bob 샘플도 사용할 수 있습니다.' },
  { name: '배율 선택', text: '슬라이더를 움직이거나 프리셋을 선택합니다. 정수 배율이 가장 선명한 후보입니다.' },
  { name: '미리보기 읽기', text: '스프라이트 footprint, 가로와 세로 PPU, 보이는 월드, 블리딩 경고를 확인합니다.' },
  { name: '엔진에서 테스트', text: 'nearest 필터, 정렬된 카메라, 아틀라스 여백, 실제 게임 해상도로 검증합니다.' },
];
const softwareApplication: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: '게임용 단위당 픽셀 플래너', applicationCategory: 'DeveloperApplication', operatingSystem: 'Any' };
const faqPage: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: '픽셀 아트 스프라이트 배율 테스트 방법', step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) };

export const content: ToolLocaleContent<GamePixelPerUnitPlannerUI> = {
  slug: 'game-pixel-per-unit-planner', title: '게임 스프라이트 단위당 픽셀 플래너', description: '스프라이트를 올리거나 Bob 예제를 사용해 정수 배율별 footprint를 보고 PPU와 픽셀 블리딩 위험을 확인합니다.',
  ui: {
    inputsTitle: '스프라이트를 불러와 테스트', uploadTitle: '원본 이미지', uploadHint: 'PNG, GIF, WebP 또는 JPEG를 선택하세요. 원본 크기가 모든 미리보기에 사용됩니다.', chooseSpriteLabel: '스프라이트 선택', noSpriteLabel: '스프라이트가 아직 없음', defaultSpriteLabel: 'Bob 샘플 스프라이트', loadedSpriteLabel: '불러옴', clearSpriteLabel: '스프라이트 제거', displayWidthLabel: '화면 너비 px', displayHeightLabel: '화면 높이 px', spriteWidthLabel: '스프라이트 너비 px', spriteHeightLabel: '스프라이트 높이 px', worldWidthLabel: '월드 단위 너비', worldHeightLabel: '월드 단위 높이', targetScaleLabel: '화면 목표 배율', targetScaleHint: '텍스처 픽셀 하나가 차지하는 화면 픽셀 수입니다.', resolutionPresetsLabel: '기준 해상도', preset320: '320 x 180', preset384: '384 x 216', preset640: '640 x 360', scalePresetsLabel: '빠른 배율', scale1: '1x', scale2: '2x', scale3: '3x', scale4: '4x', scale6: '6x', resetLabel: '값 초기화', fieldTitle: '여러 크기로 확인', fieldCaption: '불러온 이미지를 nearest 방식으로 렌더링해 정수 배율별 실제 footprint를 확인합니다.', previewPlaceholder: '스프라이트를 불러와 시각 테스트를 시작하세요', previewScaleLabel: '미리보기 배율', sourceImageAlt: '불러온 스프라이트 미리보기', viewportLabel: '화면', spriteLabel: '렌더링된 스프라이트', crispTitle: '선명한 배율', crispCaption: '정수 배율은 픽셀 크기를 일정하게 유지합니다. 회색 단계는 지정한 화면을 넘습니다.', fitLabel: '화면에 맞음:', yesLabel: '예', noLabel: '아니요', recommendedLabel: '가장 가까운 조합', summaryTitle: '계획 요약', ppuXLabel: '가로 PPU', ppuYLabel: '세로 PPU', viewportWorldLabel: '보이는 월드', fitScaleLabel: '맞는 최대 배율', bleedingRiskLabel: '블리딩 위험', lowRisk: '낮음', mediumRisk: '중간', highRisk: '높음', riskLowMessage: '축이 정렬되고 정수 목표 배율이 화면에 맞습니다. 그래도 필터와 아틀라스 여백을 확인하세요.', riskMediumMessage: '목표가 완벽하게 맞지 않습니다. 축 차이와 강조된 배율을 살펴보세요.', riskHighMessage: '이 배율은 불규칙한 샘플링을 만들 수 있습니다. 정수 배율과 스프라이트 크기를 확인하세요.', alignmentLabel: '샘플링 메모', tableTitle: '접근 가능한 배율 기록', tableScale: '배율', tableWidth: '렌더 너비', tableHeight: '렌더 높이', tableFits: '화면에 맞음', modelNote: 'PPU는 각 축에서 렌더링된 스프라이트 픽셀을 월드 단위 크기로 나누어 계산합니다. 블리딩 위험은 휴리스틱이며 텍스처 검사나 엔진 보장이 아닙니다.', privacyDisclosure: '파일은 이 브라우저에서 처리됩니다. 스프라이트, 프로젝트 파일, 텔레메트리는 전송되지 않습니다.', statusReady: '미리보기 업데이트됨', unitPixels: 'px', unitUnits: '단위',
  },
  seo: [
    { type: 'title', level: 2, text: '스프라이트 크기를 배율 결정으로 바꾸기' }, { type: 'paragraph', html: '스프라이트에는 비트맵 크기와 게임 월드에서 차지하는 크기가 있습니다. PPU는 두 측정을 연결합니다. 미리보기는 추상적인 숫자 대신 실제 모습을 보여 줍니다.' }, { type: 'paragraph', html: '실제 이미지를 불러오면 원본 크기를 사용합니다. 선택한 배율로 두 축을 계산하고 지정한 해상도에서 보이는 월드를 구합니다.' }, { type: 'title', level: 2, text: '미리보기에서 볼 항목' }, { type: 'list', items: ['footprint를 기준 화면과 비교합니다.', '픽셀을 일정하게 유지하려면 정수 배율부터 시험합니다.', '두 PPU 값으로 의도하지 않은 늘어남을 찾습니다.', '블리딩 경고를 엔진 테스트 신호로 사용합니다.'] }, { type: 'title', level: 2, text: '정수 배율이 더 깨끗한 이유' }, { type: 'paragraph', html: '3배에서는 원본 픽셀 하나가 화면 픽셀 세 개가 됩니다. 2.5배에서는 렌더러가 서로 다른 너비를 배분해야 합니다. Nearest는 색 혼합은 막지만 픽셀 사이에 놓인 카메라는 고치지 못합니다.' }, { type: 'table', headers: ['신호', '의미', '다음 결정'], rows: [['같은 PPU', '두 축의 밀도가 같습니다.', '타일과 프로젝트 그리드와 비교합니다.'], ['소수 배율', 'footprint가 정수를 쓰지 않습니다.', '가장 가까운 정수 배율을 시험합니다.'], ['맞지 않음', '스프라이트가 화면을 넘습니다.', '배율을 낮추거나 해상도를 높입니다.']] }, { type: 'title', level: 2, text: '블리딩과 크기를 구분하기' }, { type: 'paragraph', html: '픽셀 블리딩은 아틀라스의 이웃 텍셀, 경계 필터, 정렬되지 않은 카메라 좌표에서 생기는 경우가 많습니다. 흐림에는 필터를, 이음새에는 여백과 경계를 확인하세요.' }, { type: 'title', level: 2, text: 'Bob 스프라이트로 흐름 익히기' }, { type: 'paragraph', html: '분홍색 리본을 단 Bob 예제가 처음부터 표시됩니다. 해상도와 배율을 바꾸며 캐릭터가 언제 맞지 않는지 확인할 수 있습니다.' }, { type: 'title', level: 2, text: '도구가 확인하는 것과 확인하지 않는 것' }, { type: 'paragraph', html: '도구는 통제된 화면에서 크기와 footprint를 비교합니다. 엔진 프로젝트나 아틀라스를 검사하지 않으며 장치나 pixel perfect 움직임을 보장하지 않습니다.' }, { type: 'title', level: 2, text: '배율을 고르는 짧은 순서' }, { type: 'paragraph', html: '스프라이트를 불러오고 해상도를 고른 뒤 1배부터 4배를 시험합니다. 여백이 남는 가장 큰 정수 배율을 실제 지원 해상도에서도 반복합니다.' }, { type: 'tip', title: '마지막 확인은 엔진에서 합니다', html: '미리보기로 후보를 좁힌 다음 nearest 필터, 아틀라스 여백, 카메라 정렬을 확인하고 여러 해상도에서 테스트하세요.' },
  ],
  faqTitle: '스프라이트 배율 질문', faq, bibliographyTitle: '픽셀 아트 참고 자료', bibliography: bibliographyEntries, howTo, schemas: [softwareApplication, faqPage, howToSchema],
};
