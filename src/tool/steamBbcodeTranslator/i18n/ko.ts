import type { ToolLocaleContent } from '../../../types';
import type { SteamBbcodeTranslatorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<SteamBbcodeTranslatorUI> = {
  slug: 'steam-bbcode-translator',
  title: 'Steam BBCode, Markdown, HTML 변환기',
  description: 'Steam BBCode, Markdown, HTML 간의 상호 변환을 구문 자동 감지 및 실시간 미리보기 기능과 함께 제공합니다.',
  ui: {
    editorLabel: '서식 텍스트 붙여넣기',
    editorHint: '입력 시 BBCode, Markdown, HTML이 자동으로 감지됩니다.',
    detectedLabel: '감지된 형식',
    detectedEmpty: '텍스트 대기 중',
    bbcode: 'Steam BBCode',
    markdown: 'Markdown',
    html: 'HTML',
    clear: '초기화',
    copy: '출력 복사',
    copied: '클립보드에 복사됨',
    characters: '문자 수',
    blocks: '블록 수',
    privacyNote: '브라우저에서만 실행됩니다. 업로드되지 않습니다.',
    persistenceNote: '마지막 초안이 로컬에 저장됨',
    previewLabel: '미리보기',
    previewEmpty: '서식이 적용된 미리보기가 여기에 표시됩니다.'
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: '상점 설명 작성 시 마크다운 변환기가 필요한 이유'
    },
    {
      type: 'paragraph',
      html: 'Steam 상점 설명에는 BBCode 구문이 사용되지만 프레스 킷이나 웹사이트에서는 Markdown이나 HTML이 사용됩니다. 본 도구는 입력된 텍스트를 감지하여 다른 두 포맷으로 자동 변환해 줍니다.'
    },
    {
      type: 'title',
      level: 2,
      text: '지원하는 태그 및 서식'
    },
    {
      type: 'paragraph',
      html: '제목, 굵게, 기울임, 링크, 목록, 인용구, 스포일러 태그 변환을 지원합니다.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: '입력 포맷', value: '3개' },
        { label: '자동 생성 변환', value: '2개' },
        { label: '목록 구조', value: '다중 계층' },
        { label: '데이터 처리', value: '로컬 전용' }
      ]
    },
    {
      type: 'title',
      level: 2,
      text: '다중 계층 목록 구조 유지'
    },
    {
      type: 'paragraph',
      html: '단순 문자열 교체가 아닌 트리 구조로 분석하므로 하위 목록의 계층 관계가 정확하게 유지됩니다.'
    },
    {
      type: 'table',
      headers: ['Steam BBCode', 'Markdown', 'HTML'],
      rows: [
        ['[h1]제목[/h1]', '# 제목', '&lt;h1&gt;제목&lt;/h1&gt;'],
        ['[b]강조[/b]', '**강조**', '&lt;strong&gt;강조&lt;/strong&gt;'],
        ['[i]참고[/i]', '*참고*', '&lt;em&gt;참고&lt;/em&gt;'],
        ['[url=https://example.com]링크[/url]', '[링크](https://example.com)', '&lt;a href="https://example.com"&gt;링크&lt;/a&gt;'],
        ['[list][*]항목1[*]항목2[/list]', '- 항목1\n- 항목2', '&lt;ul&gt;&lt;li&gt;항목1&lt;/li&gt;&lt;li&gt;항목2&lt;/li&gt;&lt;/ul&gt;']
      ]
    },
    {
      type: 'title',
      level: 2,
      text: 'Markdown과 HTML 변환 차이'
    },
    {
      type: 'paragraph',
      html: 'Markdown에서 지원하지 않는 밑줄 등의 서식은 호환성을 위해 인라인 HTML 태그로 보완됩니다.'
    },
    {
      type: 'tip',
      title: '게시 전 확인 사항',
      html: '상점이나 웹사이트에 적용하기 전에 미리보기 화면에서 레이아웃을 검토하세요.'
    },
    {
      type: 'title',
      level: 2,
      text: '개인정보 및 보안'
    },
    {
      type: 'paragraph',
      html: '모든 변환 작업은 사용자의 브라우저 내부에서만 처리되며 서버로 전달되지 않습니다.'
    },
    {
      type: 'title',
      level: 2,
      text: '변환 시 유의사항'
    },
    {
      type: 'proscons',
      title: '변환 특징',
      items: [
        {
          pro: '다중 계층 구조 유지.',
          con: '사용자 지정 태그는 검토가 필요합니다.'
        }
      ]
    },
    {
      type: 'title',
      level: 2,
      text: '용어집'
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'BBCode',
          definition: 'Steam 등에서 사용하는 대괄호 기반 마크업 문법.'
        },
        {
          term: 'Markdown',
          definition: '가독성이 높은 경량 텍스트 포맷.'
        },
        {
          term: 'HTML',
          definition: '웹문서를 작성하기 위한 표준 마크업 언어.'
        }
      ]
    },
    { type: 'title', level: 2, text: '게시 전에 변환 결과 확인하기' },
    { type: 'paragraph', html: '먼저 원본 텍스트의 실제 형식을 확인한 다음 미리보기에서 제목, 링크, 목록, 이미지를 비교하세요. 결과가 표시된다고 해서 모든 Steam 전용 태그가 대상 형식에서 완전한 대응을 가진다는 뜻은 아닙니다.' },
    { type: 'paragraph', html: '원본 텍스트를 보관하고 게시할 상점 화면에서 결과를 테스트하세요. 중첩 목록, 외부 링크, 대응하지 않는 위젯은 수동 수정이 필요할 수 있습니다. 변환기는 브라우저에서 구조를 분석하지만 글의 품질이나 URL 안전성은 판단하지 않습니다.' },
    { type: 'paragraph', html: '출력을 복사하기 전에 실제 상점 화면에서 외부 링크, 비표준 태그, 이미지도 확인하세요. 구조가 변환되었더라도 편집 검토와 주소의 안전성 확인은 별도로 필요합니다.' },
  ],
  faqTitle: '자주 묻는 질문',
  faq: [
    {
      question: '입력한 텍스트가 서버로 전송되나요?',
      answer: '아니오. 모든 작업은 브라우저에서 로컬로 실행됩니다.'
    },
    {
      question: '중첩 목록이 지원되나요?',
      answer: '예. 목록의 계층 구조가 분석되어 정확히 변환됩니다.'
    },
    {
      question: "게시하기 전에 어떤 설정을 확인해야 하나요? 1",
      answer: "파일을 게시하기 전에 크기, 대상 환경, 미리보기를 함께 확인하세요.",
    },
    {
      question: "게시하기 전에 어떤 설정을 확인해야 하나요? 2",
      answer: "파일을 게시하기 전에 크기, 대상 환경, 미리보기를 함께 확인하세요.",
    },
    {
      question: "게시하기 전에 어떤 설정을 확인해야 하나요? 3",
      answer: "파일을 게시하기 전에 크기, 대상 환경, 미리보기를 함께 확인하세요.",
    },
    {
      question: "게시하기 전에 어떤 설정을 확인해야 하나요? 4",
      answer: "파일을 게시하기 전에 크기, 대상 환경, 미리보기를 함께 확인하세요.",
    },
  ],
  howTo: [
    {
      name: '텍스트 붙여넣기',
      text: 'BBCode, Markdown, HTML 중 하나를 붙여넣으세요.'
    },
    {
      name: '자동 변환',
      text: '나머지 두 포맷이 즉시 생성됩니다.'
    },
    {
      name: "게시하기 전에 어떤 설정을 확인해야 하나요? 1",
      text: "파일을 게시하기 전에 크기, 대상 환경, 미리보기를 함께 확인하세요.",
    },
    {
      name: "게시하기 전에 어떤 설정을 확인해야 하나요? 2",
      text: "파일을 게시하기 전에 크기, 대상 환경, 미리보기를 함께 확인하세요.",
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Steam BBCode, Markdown, HTML 변환기',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '입력한 텍스트가 서버로 전송되나요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '아니오. 모든 작업은 브라우저에서 로컬로 실행됩니다.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Steam BBCode, Markdown, HTML 변환 방법',
      step: [
        {
          '@type': 'HowToStep',
          name: '텍스트 붙여넣기',
          text: 'BBCode, Markdown, HTML 중 하나를 붙여넣으세요.'
        }
      ]
    }
  ],
  bibliography: bibliographyEntries
};
