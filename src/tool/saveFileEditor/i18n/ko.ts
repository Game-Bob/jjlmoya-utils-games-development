import type { ToolLocaleContent } from '../../../types';
import type { SaveFileEditorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<SaveFileEditorUI> = {
  slug: 'game-save-file-editor',
  title: '게임 저장 파일 난독화 및 에디터',
  description: '브라우저 내에서 100% 로컬로 Base64, XOR 마스킹 또는 일반 텍스트를 사용하여 게임 저장 데이터를 복호화, 검사, 수정 및 재암호화합니다.',
  ui: {
    title: '게임 저장 데이터 난독화 및 에디터',
    subtitle: '서버 전송 없이 안전하게 로컬 저장 데이터 상태를 검사, 수정 및 암호화',
    dropSaveFile: '여기에 저장 파일을 드래그 앤 드롭하세요',
    orSelectFile: '또는 클릭하여 로컬 파일 선택',
    encryptionMethod: '암호화 형식',
    methodBase64: 'Base64 인코딩',
    methodXor: 'XOR 마스크 + Base64',
    methodRaw: '일반 JSON / 비암호화',
    xorKeyLabel: 'XOR 비밀키',
    xorKeyPlaceholder: '예: MySecretGameKey2026',
    jsonRawTitle: '디코딩된 JSON 페이로드 (라이브 에디터)',
    encodeAndDownload: '암호화 및 파일 다운로드',
    copyEncoded: '암호화된 텍스트 복사',
    copiedNotice: '클립보드에 복사되었습니다!',
    decodedKeysCount: '총 매개변수',
    dataSize: '페이로드 크기',
    detectedFormat: '감지된 형식',
    exportPreviewLabel: '암호화 출력 미리보기',
    decodePanelTitle: '디코드 및 라이브 JSON 에디터',
    exportPanelTitle: '재암호화된 출력 페이로드',
    decodeError: '저장 파일 디코딩에 실패했습니다',
    bytesUnit: '바이트',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: '게임 저장 파일 보안 및 난독화 프로토콜',
    },
    {
      type: 'paragraph',
      html: '게임 개발 과정에서 플레이어의 진행 상황, 인벤토리, 해금된 스테이지, 캐릭터 능력치 등은 지속성 저장소에 직렬화되어 저장됩니다. 일반 텍스트 에디터를 통한 무단 수정을 방지하기 위해, 개발 스튜디오는 Base64 인코딩이나 특정 비밀키를 사용한 비트 XOR 마스킹 기법으로 저장 데이터를 난독화합니다. 품질 보증 QA 테스트 및 라이브 운영 디버깅 시, 개발 팀은 게임 바이너리를 재컴파일하지 않고도 원시 JSON 구조를 즉시 검사하고 엣지 케이스 상태를 설정하며 수정된 데이터를 재암호화할 수 있는 전용 도구가 필요합니다.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: '클라이언트 처리 개인정보 보호', value: '100% 로컬' },
        { label: '지원되는 디코더', value: 'Base64 / XOR / JSON' },
        { label: '디코딩 지연 시간', value: '0 ms' },
        { label: '데이터 유출 위험', value: '0%' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: '난독화 기법 비교',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Base64 인코딩',
          description: '메모장에서의 단순 텍스트 수정을 방지하는 경량 변환 방식이지만 암호학적 보안성은 제공하지 않습니다.',
        },
        {
          title: 'XOR 마스킹 + Base64',
          description: '인디 게임 개발의 표준적 방식. 비밀키와 비트 연산을 조합하여 치트 엔진이나 메모리 변조를 방지합니다.',
        },
        {
          title: '일반 JSON 페이로드',
          description: '암호화되지 않은 읽기 가능한 상태. 초기 프로토타이핑 및 디버그 빌드에 적합합니다.',
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: '저장 상태 검증을 위한 QA 테스트 관행',
    },
    {
      type: 'tip',
      title: 'QA 과정에서의 저장 파일 보안 모범 사례',
      html: '내부 빌드와 프로덕션 빌드에서 항상 서로 다른 디버그 키를 사용하세요. 경계 조건 버그를 확인할 때 로컬 트리 에디터를 사용하면 재컴파일 없이 빠르게 테스트할 수 있습니다.',
    },
    {
      type: 'title',
      level: 2,
      text: '게임 상태 매개변수 가이드라인 표',
    },
    {
      type: 'table',
      headers: ['데이터 유형', '권장 형식', '일반적인 사용 사례', '난독화 레이어'],
      rows: [
        ['숫자 정수', '32비트 정수', '골드, 레벨, 경험치, 탄약', 'XOR 마스킹'],
        ['불리언 플래그', '표준 불리언', '튜토리얼 완료, 보스 처치', 'Base64 / XOR'],
        ['중첩된 객체', 'JSON 계층 구조', '플레이어 인벤토리, 스킬 트리', 'Base64 인코딩'],
        ['타임스탬프 문자열', 'ISO 8601 UTC', '일일 출석, 저장 시간', 'XOR 마스킹'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: '역공학 및 변조 방지 고려 사항',
    },
    {
      type: 'paragraph',
      html: '클라이언트 측 난독화는 일반 사용자의 저장 파일 수정을 방지하지만, XOR 연산과 Base64는 완벽한 암호화 알고리즘이 아닙니다. RenderDoc이나 x64dbg 같은 디버깅 도구를 사용하면 컴파일된 어셈블리에서 키 생성 루틴을 직접 분석할 수 있습니다. 멀티플레이어 게임의 경우 서버 측 검증이나 HMAC 서명 검증을 결합하는 것이 필수적입니다.',
    },
  ],
  faqTitle: '자주 묻는 질문',
  faq: [
    {
      question: '제 게임 저장 파일이 원격 서버로 업로드되나요?',
      answer: '아니요. 모든 디코딩, JSON 트리 편집, 재암호화 작업은 100% 사용자의 웹 브라우저 JavaScript 엔진 내에서만 실행됩니다.',
    },
    {
      question: 'Unity나 Godot 같은 게임 엔진에서 XOR 난독화는 어떻게 작동하나요?',
      answer: '직렬화된 JSON 문자열의 UTF-8 바이트에 대해 지정된 비밀키 문자열과 비트 XOR 연산을 수행한 후 결과를 Base64로 인코딩합니다.',
    },
  ],
  howTo: [
    {
      name: '저장 파일 불러오기 또는 붙여넣기',
      text: '암호화된 저장 파일을 업로드하거나 예시 템플릿을 선택합니다.',
    },
    {
      name: '디코딩 방식 및 키 선택',
      text: 'Base64 또는 XOR 마스킹을 선택하고 비밀키를 입력한 후 디코딩을 클릭합니다.',
    },
    {
      name: 'JSON 상태 수정',
      text: '라이브 에디터를 통해 레벨, 골드, 아이템, 게임 플래그 값을 원하는 대로 수정합니다.',
    },
    {
      name: '암호화 및 내보내기',
      text: '출력 형식을 지정하고 게임 테스트에 사용할 저장 파일을 다운로드합니다.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: '게임 저장 파일 에디터',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'KRW',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '제 게임 저장 파일이 원격 서버로 업로드되나요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '아니요. 모든 처리 과정은 100% 브라우저 내부에서만 수행됩니다.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: '암호화된 게임 저장 파일을 수정하는 방법',
      step: [
        {
          '@type': 'HowToStep',
          name: '저장 파일 불러오기',
          text: '암호화된 저장 파일을 업로드합니다.',
        },
      ],
    },
  ],
  bibliographyTitle: '참고 문헌 및 관련 자료',
  bibliography: bibliographyEntries,
};
