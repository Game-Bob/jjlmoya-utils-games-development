import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ReactionTesterUI } from '../ui';

const slug = 'reaction-test';
const title = '반응 속도 테스트 (반사 신경): 온라인 벤치마크';
const description = '전문 반응 테스트로 반사 신경을 밀리초 단위로 측정하세요. \"거북이\"에서 \"사이버 운동선수\"까지 순위를 놓고 경쟁하고 성능을 분석하세요.';

const ui: ReactionTesterUI = {
  title: '반응 테스트',
  subtitle: '반응 속도를 밀리초 단위로 측정합니다. 5회 시도의 평균.',
  startBtn: '클릭하여 시작',
  goTitle: '시작!',
  goSubtitle: '지금 클릭하세요!',
  earlyTitle: '너무 빨라요!',
  earlySubtitle: '초록색을 기다리세요.',
  earlyRetry: '클릭하여 다시 시도',
  promptNext: '클릭하여 시도',
  promptFinal: '최종 결과 보기',
  avgLabel: '최종 평균',
  copyBtn: '복사',
  tweetBtn: '트윗',
  retryBtn: '다시 시도',
  inputMouse: '마우스',
  inputTouch: '터치',
  inputSpace: '스페이스',
  historyTitle: '로컬 기록',
  historyBest: '상위 5 최고',
  historyWorst: '상위 5 최악',
  historyEmpty: '플레이하여 첫 번째 점수를 기록하세요',
  copySuccess: '복사되었습니다!',
  shareText: '반응 테스트에서 {ms}ms 점수를 얻었습니다!\n순위: {rank}\n\n나를 이길 수 있나요?\n{url}',
  rankCiberatleta: '사이버 운동선수',
  rankTigre: '호랑이',
  rankHumano: '인간',
  rankTortuga: '거북이',
  rankDormido: '잠자는 중',
  f150: '당신은 로봇입니까?!',
  f180: '놀라워요!',
  f210: '매우 빠른!',
  f250: '좋은 반응',
  f300: '나쁘지 않다...',
  f400: '조금 느려요...',
  f600: '당신은 잠들었어요',
  fSlow: '깨어나세요...',
  wp0t: '기다리세요...', wp0s: '숨을 참으세요...',
  wp1t: '가만히...', wp1s: '지금 깜빡이지 마세요',
  wp2t: '준비됐어...', wp2s: '손가락 준비...',
  wp3t: '기다리세요...', wp3s: '인내심을 가지세요, 어린 선수',
  wp4t: '집중...', wp4s: '곧 올 거야...'
};

const faqData = [
  { question: '평균 인간 반응 시간은?', answer: '시각적 자극에 대한 평균 인간 반응 시간은 약 250~270밀리초입니다. 고성능 운동선수와 프로 게이머는 일반적으로 200ms 이하입니다.' },
  { question: '반사 신경을 개선하려면?', answer: '핵심은 일관된 연습과 휴식입니다. 액션 비디오 게임(FPS) 플레이, 탁구 같은 빠른 스포츠 연습, 충분한 수분 섭취로 신경계를 각성 상태로 유지할 수 있습니다.' },
  { question: '화면이 결과에 영향을 미칩니까?', answer: '예. \"입력 지연\"이라는 것이 있습니다. 낮은 재생률(60Hz)의 화면이나 오래된 무선 마우스는 실제 반응 시간에 15~50ms를 더할 수 있습니다.' },
  { question: '몇 살부터 반사 신경이 떨어지나요?', answer: '생리적으로 인간의 반사 신경은 20~24세 사이에 최고조에 달합니다. 그 후에는 훈련하지 않으면 매우 완만한 감소(약 10년에 2~6ms)가 발생합니다.' },
];

const howTo = [
  { name: '빨간색 기다리기', text: '시작 영역을 클릭하고 화면 색이 변할 때까지 인내심 있게 기다리세요.' },
  { name: '초록색에 반응', text: '초록색이 보이자마자 최대한 빨리 화면을 클릭하거나 터치하세요.' },
  { name: '결과 확인', text: '시스템이 색 변화와 탭 사이의 밀리초 단위의 정확한 차이를 계산합니다.' },
  { name: '순위 분석', text: '테스트를 5회 반복하여 신뢰할 수 있는 평균값을 얻고 \"거북이\"인지 \"사이버 운동선수\"인지 확인하세요.' },
];

const seo = [
  { type: 'title' as const, text: '이 반응 테스트는 어떻게 작동하나요?', level: 2 as const },
  {
    type: 'paragraph' as const,
    html: '이 도구는 당신의 <strong>시각적 반응 시간</strong>을 정밀하게 측정합니다. 화면이 밝아진 순간부터 신호가 눈에서 뇌로, 그리고 손가락으로 이동하는 정확한 간격을 계산합니다. 테스트는 운의 요소를 제거하기 위해 실제 평균값을 계산하기 위해 <strong>5회 연속 시도</strong>를 요구합니다.'
  },
  {
    type: 'list' as const,
    items: [
      '<strong>5회 시도의 평균:</strong> 일관성을 요구함으로써 \"운\"의 요소를 제거합니다. 한 번의 행운의 클릭으로는 사이버 운동선수가 될 수 없습니다.',
      '<strong>안티 치트 시스템:</strong> 무작위 대기 시간(1.5초~4.5초)과 조기 클릭 감지로 예측 방지.',
      '<strong>실제 과학:</strong> 뇌 처리 ~180-200ms + 운동 반응 +20-40ms = 총 반응 시간.',
    ]
  },
  { type: 'title' as const, text: '세계 순위 표', level: 2 as const },
  {
    type: 'table' as const,
    headers: ['시간', '순위', '설명'],
    rows: [
      ['&lt; 180 ms', '사이버 운동선수', 'e스포츠 프로나 전투기 파일럿에 전형적인 초인적 수준.'],
      ['180 - 230 ms', '호랑이', '날카로운 반사 신경. 슈팅 게임을 잘할 가능성이 높습니다.'],
      ['230 - 280 ms', '인간', '건강한 평균. 당신은 깨어 있고 제대로 기능하고 있습니다.'],
      ['280 - 350 ms', '거북이', '평균 이하. 더 쉬거나 훈련하세요.'],
      ['&gt; 350 ms', '잠자는 중', '피로, 졸음 또는 느린 하드웨어(입력 지연) 가능성.'],
    ]
  },
  { type: 'title' as const, text: '느린 이유는? 하드웨어 탓하기', level: 2 as const },
  {
    type: 'comparative' as const,
    columns: 3 as const,
    items: [
      {
        title: '모니터 (Hz)',
        description: '60Hz 모니터는 한 프레임을 그리는 데 약 16ms가 걸립니다. 144Hz는 7ms만 걸립니다. 이 10ms의 차이가 최종 점수에 영향을 줍니다.',
        icon: 'mdi:monitor',
        points: ['60Hz = 프레임당 약 16ms', '144Hz = 프레임당 약 7ms', '테스트에서 눈에 띄는 차이']
      },
      {
        title: '무선 마우스',
        description: '저가형 오피스 블루투스 마우스는 지연 시간이 높습니다. 이 테스트의 경우 케이블 또는 낮은 지연 2.4GHz 무선 기술을 사용하세요.',
        icon: 'mdi:mouse-variant',
        points: ['저가 블루투스: +15-50ms', '2.4GHz 게이밍: <1ms 추가', 'USB 케이블: 기준']
      },
      {
        title: '브라우저',
        description: '광고를 차단하는 확장 프로그램이나 무거운 스크립트는 끊김을 유발할 수 있습니다. 실제 기록을 위해 시크릿 모드를 시도하세요.',
        icon: 'mdi:web',
        points: ['무거운 확장 프로그램 닫기', '시크릿 = 더 깔끔함', 'Chrome/Firefox 권장']
      },
    ]
  },
];

const schemas: [WithContext<FAQPage>, WithContext<HowTo>, WithContext<SoftwareApplication>] = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } }))
  },
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description,
    step: howTo.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text }))
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description,
    applicationCategory: 'SportsApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }
  },
];

export const content: ToolLocaleContent<ReactionTesterUI> = { slug, title, description, ui, seo, faq: faqData, bibliography, howTo, schemas };
