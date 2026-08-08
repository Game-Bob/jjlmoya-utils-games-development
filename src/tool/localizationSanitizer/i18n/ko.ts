import type { ToolLocaleContent } from '../../../types';
import type { LocalizationSanitizerUI } from '../ui';

export const content: ToolLocaleContent<LocalizationSanitizerUI> = {
  slug: 'localization-sanitizer',
  title: 'Godot 및 Unity 로컬라이제이션 CSV 검증 및 정형 도구',
  description: '번역 CSV 및 JSON 파일의 빈 셀, 중복 키, 손상된 행을 검사하고 게임 엔진에 즉시 임포트할 수 있는 정제된 파일을 내보냅니다.',
  ui: {
    csvTab: 'CSV 파일',
    jsonTab: 'JSON 파일',
    dropTitle: '번역 파일을 여기에 드롭하세요',
    dropSubtitle: '브라우저에서 구조를 검사하며 원본 파일은 기기에 안전하게 유지됩니다.',
    browseButton: '파일 탐색',
    sampleButton: '샘플 로드',
    clearButton: '초기화',
    inputLabel: '번역 파일 입력',
    formatLabel: '포맷',
    healthLabel: '파일 상태',
    readyStatus: '임포트 준비 완료',
    reviewStatus: '검토 필요',
    emptyCellsLabel: '빈 셀',
    duplicateKeysLabel: '중복 키',
    malformedRowsLabel: '손상된 행',
    cleanRowsLabel: '정상 행',
    issueListTitle: '검출 결과',
    noIssues: '감지된 문제가 없습니다.',
    previewTitle: '번역 미리보기',
    previewSubtitle: '첫 번째 행들에 내보내질 정규화 구조가 표시됩니다.',
    exportTitle: '정제된 파일 내보내기',
    exportSubtitle: '중복 키를 제거하고 부족한 열을 채우며 CSV 이스케이프를 적용합니다.',
    downloadButton: '정제 파일 다운로드',
    copyButton: '결과 복사',
    copiedMessage: '정제된 결과가 클립보드에 복사되었습니다.',
    emptyIssue: '빈 번역 셀',
    duplicateIssue: '중복 키 제거됨',
    malformedIssue: '열 수 또는 따옴표 불일치',
    parseIssue: '파일을 파싱할 수 없습니다.',
    rowLabel: '행',
    columnLabel: '열',
    keyLabel: '키',
    sampleFileName: 'localization-sample.csv',
    privacyNote: '로컬 브라우저 처리',
    waitingTitle: '파일 대기 중',
    waitingSubtitle: 'CSV 또는 JSON 파일을 드롭하여 검사를 시작하세요.',
    fileTypeNote: 'UTF8 CSV 또는 구조화된 JSON',
  },
  seo: [
    { type: 'title', level: 2, text: '엔진 임포트 시 번역 파일 오류가 발생하는 이유' },
    {
      type: 'paragraph',
      html: '번역 테이블은 편집하기 쉽지만 포맷 오류가 발생하기 쉽습니다. 문장 안의 쉼표나 따옴표 누락은 전체 언어 열을 어긋나게 만듭니다.',
    },
    {
      type: 'paragraph',
      html: 'Godot와 Unity Localization 패키지는 엄격한 CSV 포맷을 요구합니다. 본 도구는 임포트 전 구조를 검증하고 정상화합니다.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'CSV', label: '쉼표 검증' },
        { value: 'JSON', label: '배열 및 맵 지원' },
        { value: '0 업로드', label: '100% 로컬 처리' },
        { value: '1 클릭', label: '정제 내보내기' },
      ],
    },
    { type: 'title', level: 2, text: '검사 항목' },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '임포트 전 감지',
          description: '육안으로 찾기 어려운 포맷 오류',
          points: ['미번역 빈 셀', '중복 입력된 키', '열 수가 맞지 않는 손상 행', '잘못된 따옴표 구문'],
        },
        {
          title: '내보내기 시 정규화',
          description: '안전한 자동 보정',
          points: ['부족한 열 패딩', '초과 열 결합 처리', '첫 번째 중복 키 유지', '원본 파일 보호'],
        },
      ],
    },
    { type: 'title', level: 2, text: '정제된 파일 검토 방법' },
    {
      type: 'paragraph',
      html: '구조 정형이 언어적 검수를 대신하지는 않습니다. 검출 목록을 확인하여 누락된 번역을 보완하세요.',
    },
    {
      type: 'table',
      headers: ['검출 항목', '의미', '권장 조치'],
      rows: [
        ['빈 셀', '언어 열에 텍스트가 없음', '번역을 입력하거나 의도된 빈 값인지 확인'],
        ['중복 키', '동일한 키가 여러 행에 존재', '내용을 비교한 뒤 첫 번째 행 적용'],
        ['손상된 행', '헤더와 열 수가 불일치', '병합된 최종 열 확인'],
        ['파싱 오류', '잘못된 JSON 구문', '임포트 전 JSON 수정'],
      ],
    },
    { type: 'title', level: 2, text: '게임 번역용 CSV 규칙' },
    {
      type: 'paragraph',
      html: '쉼표나 줄바꿈이 포함된 텍스트는 큰따옴표로 감싸야 합니다.',
    },
    {
      type: 'tip',
      title: '원본 파일 보관',
      html: '번역가에게 전달받은 원본 파일의 백업을 반드시 유지하세요.',
    },
    {
      type: 'glossary',
      items: [
        { term: '번역 키', definition: '게임 코드에서 식별자로 사용하는 고유 문자열.' },
        { term: 'CSV 필드', definition: '구분자로 구분된 개별 값.' },
        { term: '이스케이프', definition: '문장 부호를 텍스트로 유지하기 위한 따옴표 처리.' },
        { term: '로케일', definition: 'ko, en, ja와 같은 언어 및 지역 코드.' },
      ],
    },
  ],
  faq: [
    {
      question: '파일이 서버로 업로드되나요?',
      answer: '아니오, 모든 작업은 브라우저 내부에서만 실행됩니다.',
    },
    {
      question: 'CSV 행에 쉼표가 더 있으면 어떻게 되나요?',
      answer: '손상된 행으로 표시되며 초과 필드는 마지막 열로 병합됩니다.',
    },
    {
      question: '중복 키는 어떻게 처리되나요?',
      answer: '첫 번째 등장 행이 유지되고 이후 중복 행은 제거됩니다.',
    },
    {
      question: '번역 품질도 검증하나요?',
      answer: '아니오, 파일 구조와 빈 셀 유무만 검사합니다.',
    },
  ],
  howTo: [
    { name: '포맷 선택', text: 'CSV 또는 JSON을 선택합니다.' },
    { name: '검출 결과 확인', text: '파일을 드롭하여 오류 항목을 검토합니다.' },
    { name: '내보내기 및 테스트', text: '정제된 파일을 다운로드하여 게임 엔진에서 테스트합니다.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Godot 및 Unity 로컬라이제이션 CSV 검증 및 정형 도구',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [{
        '@type': 'Question',
        name: '파일이 서버로 업로드되나요?',
        acceptedAnswer: { '@type': 'Answer', text: '아니오, 모든 작업은 브라우저 내부에서만 실행됩니다.' },
      }],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: '번역 파일 정제 절차',
      step: [
        { '@type': 'HowToStep', name: '포맷 선택', text: 'CSV 또는 JSON을 선택합니다.' },
        { '@type': 'HowToStep', name: '검출 결과 확인', text: '파일을 드롭하여 오류 항목을 검토합니다.' },
        { '@type': 'HowToStep', name: '내보내기 및 테스트', text: '정제된 파일을 다운로드하여 게임 엔진에서 테스트합니다.' },
      ],
    },
  ],
  bibliography: [
    { name: 'Godot ResourceImporterCSVTranslation 문서', url: 'https://docs.godotengine.org/en/stable/classes/class_resourceimportercsvtranslation.html' },
    { name: 'Unity Localization CSV 임포트 문서', url: 'https://docs.unity3d.com/Packages/com.unity.localization@1.5/manual/CSV.html' },
    { name: 'RFC 4180 CSV 규격 문서', url: 'https://datatracker.ietf.org/doc/html/rfc4180' },
  ],
};
