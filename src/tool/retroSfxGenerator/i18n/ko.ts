import type { ToolLocaleContent } from '../../../types';
import type { RetroSfxGeneratorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<RetroSfxGeneratorUI> = {
  slug: 'retro-sfx-generator',
  title: '게임용 레트로 사운드 효과 생성기',
  description: '브라우저에서 즉시 프리셋, 파형 제어, 라이브 오실로스코프 및 원클릭 WAV 내보내기를 통해 레트로 게임 사운드 효과를 생성하세요.',
  ui: {
    waveformLabel: '파형',
    waveformSquare: '사각패턴',
    waveformSawtooth: '톱니패턴',
    waveformSine: '사인파',
    waveformTriangle: '삼각파',
    waveformNoise: '노이즈',
    presetLabel: '빠른 사운드 뱅크',
    presetExplosion: '폭발',
    presetLaser: '레이저',
    presetJump: '점프',
    presetCoin: '동전',
    presetPowerUp: '파워업',
    frequencyLabel: '시작 주파수',
    frequencyEndLabel: '끝 주파수',
    durationLabel: '길이',
    decayLabel: '감쇠',
    sweepLabel: '피치 스윕',
    vibratoLabel: '비브라토',
    lowpassLabel: '로우패스',
    highpassLabel: '하이패스',
    noiseMixLabel: '노이즈 혼합',
    toneSection: '톤',
    dynamicsSection: '다이내믹스',
    filterSection: '질감',
    playButton: '사운드 재생',
    stopButton: '정지',
    downloadButton: 'WAV 다운로드',
    randomizeButton: '무작위 생성',
    resetButton: '초기화',
    waveformPreviewLabel: '실시간 파형',
    generatedLabel: '생성됨',
    statusReady: '청취 준비 완료',
    statusPlaying: '브라우저에서 재생 중',
    statusStopped: '재생 정지됨',
    statusDownloaded: 'WAV 다운로드 완료',
    statusAudioBlocked: '재생을 위해 오디오 권한이 필요합니다',
    statusGenerating: '사운드 렌더링 중',
    presetHint: '시작 지점을 선택한 후 아래 컨트롤로 신호를 조정하세요.',
    monoWavHint: '44.1 kHz · 16-bit 모노 WAV',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: '게임 잼 동안 브라우저를 떠나지 않고 사운드 제작',
    },
    {
      type: 'paragraph',
      html: '좋은 게임 효과음은 피드백을 전달해야 합니다. 상승하는 피치는 점프나 파워업, 빠른 하강 피치는 레이저나 공격, 노이즈가 섞인 감쇠음은 폭발 효과음을 연상시킵니다. 이 생성기는 브라우저 오디오 웹 API를 통해 레트로 사운드를 쉽게 생성합니다.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: '사운드 프리셋', value: '5가지 기본 패턴' },
        { label: '오실레이터 선택', value: '5가지 파형 형태' },
        { label: '내보내기 형식', value: '16-bit PCM WAV' },
        { label: '처리 방식', value: '브라우저 로컬 처리' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: '각 조절 항목의 기능',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '피치와 변화',
          description: '톤 컨트롤은 사운드의 기본 정체성을 설정합니다.',
          points: [
            '시작 주파수는 오실레이터의 기본 음고를 정합니다',
            '피치 스윕은 끝 주파수로 음고를 변화시킵니다',
            '비브라토는 주기적인 음고 떨림을 추가합니다',
            '다양한 파형 형태가 서로 다른 고주파 질감을 형성합니다',
          ],
        },
        {
          title: '형태와 질감',
          description: '다이내믹스와 필터는 사운드의 잔향과 질감을 조정합니다.',
          points: [
            '길이는 전체 효과음의 재생 시간을 정합니다',
            '감쇠는 음량이 줄어드는 속도를 조절합니다',
            '로우패스 필터는 날카로운 고주파를 부드럽게 만듭니다',
            '하이패스 필터는 저주파를 제거하고 노이즈를 섞어 거친 질감을 줍니다',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: '대표적인 게임 이벤트 설정 팁',
    },
    {
      type: 'table',
      headers: ['이벤트', '유용한 시작 프리셋', '첫 번째 추천 조절 항목'],
      rows: [
        ['폭발', '낮은 주파수의 노이즈', '길이를 늘리고 로우패스 필터를 낮추어 웅장함 추가'],
        ['레이저', '하강 스윕의 톱니파', '길이를 줄이고 하이패스 필터를 높여 날카롭게 설정'],
        ['점프', '상승 스윕의 사각파', '감쇠를 줄여 상승 피치가 명확히 들리도록 설정'],
        ['동전', '짧은 상승 스윕의 사각파', '시작 주파수를 높여 맑고 밝은 획득음 연출'],
        ['파워업', '긴 상승 스윕의 삼각파', '비브라토를 약간 추가하여 생동감 부여'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: '프로토타입 내보내기에 WAV가 적합한 이유',
    },
    {
      type: 'paragraph',
      html: 'WAV는 별도의 압축 해제 라이브러리 없이 대부분의 게임 엔진에서 곧바로 사용할 수 있는 표준 포맷입니다.',
    },
    {
      type: 'tip',
      title: '실제 게임 볼륨에서 청취 테스트',
      html: '단독으로 들었을 때 좋은 소리라도 게임 내에서 자주 반복되면 피로감을 줄 수 있습니다. 게임 환경에서 BGM과 함께 테스트하세요.',
    },
  ],
  faqTitle: '자주 묻는 질문',
  faq: [
    {
      question: '생성된 사운드가 서버로 업로드되나요?',
      answer: '아니요. 모든 오디오 합성 및 WAV 인코딩은 브라우저 내에서 처리됩니다.',
    },
    {
      question: '다운로드한 사운드를 실제 게임 프로젝트에 사용할 수 있나요?',
      answer: '네. 게임 잼 프로젝트, 프로토타입 및 인디 게임 개발에 사용할 수 있습니다.',
    },
    {
      question: '피치 스윕은 어떻게 작동하나요?',
      answer: '양수 값은 상승 피치, 음수 값은 하강 피치로 계산되어 시작 주파수 대비 비례적으로 변경됩니다.',
    },
    {
      question: '소리가 나지 않을 때는 어떻게 하나요?',
      answer: '브라우저 탭의 오디오 재생 권한을 확인한 뒤 사운드 재생 버튼을 다시 누르세요.',
    },
  ],
  howTo: [
    {
      name: '사운드 프리셋 선택',
      text: '폭발, 레이저, 점프, 동전, 파워업 중 하나를 선택하세요.',
    },
    {
      name: '파라미터 조절',
      text: '파형, 피치, 길이, 감쇠 및 필터를 원하는 값으로 조절하세요.',
    },
    {
      name: '사운드 청취',
      text: '사운드 재생 버튼을 눌러 실시간으로 확인하세요.',
    },
    {
      name: 'WAV 다운로드',
      text: 'WAV 다운로드 버튼을 눌러 파일을 저장하세요.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: '게임용 레트로 사운드 효과 생성기',
      applicationCategory: 'MultimediaApplication',
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
          name: '생성된 사운드가 서버로 업로드되나요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '아니요. 모든 오디오 합성 및 WAV 인코딩은 브라우저 내에서 처리됩니다.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: '레트로 게임 사운드 효과 생성 방법',
      step: [
        {
          '@type': 'HowToStep',
          name: '사운드 프리셋 선택',
          text: '원하는 프리셋을 선택하세요.',
        },
      ],
    },
  ],
  bibliographyTitle: '참고자료',
  bibliography: bibliographyEntries,
};
