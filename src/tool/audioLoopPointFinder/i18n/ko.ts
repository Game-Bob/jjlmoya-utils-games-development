import type { ToolLocaleContent } from '../../../types';
import type { AudioLoopPointFinderUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<AudioLoopPointFinderUI> = {
  slug: 'audio-loop-point-finder',
  title: '게임 오디오 루프 포인트 탐색기 및 메타데이터 주입기',
  description: '정확한 오디오 루프 포인트를 찾고 제로 크로싱에 맞추어 팝 노이즈를 제거하며 LOOPSTART 및 LOOPEND 메타데이터가 포함된 WAV 파일을 내보냅니다.',
  ui: {
    title: '게임 오디오 루프 포인트 탐색기',
    subtitle: '대화형 파형 분석기, 제로 크로싱 감지기 및 WAV 메타데이터 태그 편집기',
    dropzoneTitle: '오디오 파일을 여기에 끌어다 놓거나 클릭하여 선택하세요',
    dropzoneSubtitle: 'WAV, OGG, MP3 및 FLAC 오디오 트랙 지원',
    dropzoneButton: '오디오 파일 선택',
    audioInfoTitle: '오디오 트랙 속성',
    durationLabel: '재생 시간',
    sampleRateLabel: '샘플링 레이트',
    channelsLabel: '오디오 채널',
    totalSamplesLabel: '총 샘플 수',
    loopControlsTitle: '루프 영역 설정',
    loopStartLabel: '루프 시작 마커',
    loopEndLabel: '루프 종료 마커',
    loopDurationLabel: '루프 재생 시간',
    zeroCrossingLabel: '제로 크로싱 스냅',
    snapZeroCrossingButton: '가장 가까운 제로 크로싱 지점에 마커 맞추기',
    playLoopButton: '자연스러운 루프 미리듣기',
    pauseLoopButton: '일시정지',
    stopLoopButton: '재생 정지',
    exportWavButton: '메타데이터 포함 WAV 내보내기',
    sampleUnitLabel: '샘플',
    secondUnitLabel: '초',
    zoomLabel: '파형 확대/축소',
    zoomInButton: '확대',
    zoomOutButton: '축소',
    resetZoomButton: '보기 초기화',
    noFileSelected: '아직 오디오 파일이 로드되지 않았습니다',
    invalidAudioFile: '오디오 파일 디코딩 실패',
    presetsTitle: '빠른 프리셋',
    presetFullTrack: '전체 트랙 루프',
    presetIntroCut: '인트로 10% 건너뛰기',
    presetMiddleLoop: '중앙 50% 구간',
    statusLooping: '루프 재생 활성화됨',
    statusPaused: '재생 일시정지됨',
    statusReady: '오디오 로드 완료 및 준비됨',
    statusLoaded: '오디오 트랙을 성공적으로 로드했습니다',
    statusDecodeError: '오디오 파일 디코딩 중 오류 발생',
    statusSnapped: '마커를 제로 크로싱 지점에 맞추었습니다',
    statusStopped: '재생이 정지되었습니다',
    statusExported: '루프 태그가 포함된 WAV 파일을 내보냈습니다',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: '게임 오디오의 끊김 없는 루프 및 샘플 정렬',
    },
    {
      type: 'paragraph',
      html: '비디오 게임에서 배경음악이 끊김 없이 지속적으로 재생되려면 루프 경계에서 정확한 샘플 정렬이 필수적입니다. Unity, Godot, Unreal Engine, FMOD, Wwise와 같은 최신 게임 엔진은 WAV 헤더의 LOOPSTART 및 LOOPEND 메타데이터를 직접 읽어 처리합니다.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: '샘플링 정밀도', value: '44.1 kHz / 48 kHz' },
        { label: '제로 크로싱 임계값', value: '0.00 진폭' },
        { label: '메타데이터 표준', value: 'RIFF smpl 및 INFO' },
        { label: '클릭 노이즈 감소', value: '100% 위상 정렬' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: '제로 크로싱 스냅 전략',
    },
    {
      type: 'tip',
      title: '팝 노이즈 방지',
      html: '루프 시작 및 종료 마커는 항상 음의 진폭에서 양의 진폭으로 전환되는 제로 크로싱 지점에 배치하세요. 이를 통해 스피커 진동판의 급격한 변위를 막고 노이즈를 제거할 수 있습니다.',
    },
    {
      type: 'title',
      level: 2,
      text: '메타데이터 호환성 비교',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'RIFF smpl 청크 마커',
          description: 'WAV 헤더 구조에 내장된 표준 바이너리 메타데이터',
          points: [
            'Godot, FMOD, Wwise, GameMaker에서 자체 지원',
            '시간 오차 없는 완벽한 샘플 단위 정밀도 제공',
            '단일 WAV 파일 내부에 루프 마커를 포함하여 저장',
            '제로 크로싱 스냅과 함께 사용 시 잡음 완벽 제거',
          ],
        },
        {
          title: '수동 오디오 분할',
          description: '인트로와 루프 구간을 별도 파일로 분리하는 방식',
          points: [
            '메타데이터를 읽지 못하는 일반 미디어 플레이어에서 사용',
            '밀리초 단위의 미세한 재생 갭이나 오차가 발생하기 쉬움',
            '프로젝트 내에서 여러 오디오 파일을 관리해야 함',
            '전환 시점에서 팝 노이즈 발생 위험이 높음',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: '표준 샘플링 레이트 참조표',
    },
    {
      type: 'table',
      headers: ['표준 샘플링 레이트', '초당 샘플 수', '권장 사용 환경', '시간 해상도'],
      rows: [
        ['44,100 Hz', '44,100', '표준 CD 음질 게임 BGM', '샘플당 0.0226 ms'],
        ['48,000 Hz', '48,000', '최신 PC 및 콘솔 게임', '샘플당 0.0208 ms'],
        ['96,000 Hz', '96,000', '고해상도 마스터 오디오 소재', '샘플당 0.0104 ms'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: '바이트 단위의 자동 메타데이터 주입',
    },
    {
      type: 'paragraph',
      html: '본 도구에서 오디오 트랙을 내보낼 때 출력되는 WAV 바이너리 파일의 RIFF 헤더에 새로운 메타데이터 구조가 직접 삽입됩니다.',
    },
  ],
  faqTitle: '자주 묻는 질문',
  faq: [
    {
      question: 'LOOPSTART 및 LOOPEND 메타데이터 태그란 무엇인가요?',
      answer: 'LOOPSTART와 LOOPEND는 절대적인 샘플 프레임 수 단위로 측정되는 메타데이터 필드입니다.',
    },
    {
      question: '루프 포인트에서 클릭 노이즈(틱 소리)가 발생하는 이유는 무엇인가요?',
      answer: '종료 마커 지점의 파형이 시작 마커 지점의 진폭이나 위상과 일치하지 않을 때 노이즈가 발생합니다.',
    },
    {
      question: '원본 오디오 파일이 서버로 업로드되나요?',
      answer: '아니요. 모든 작업과 디코딩은 사용자의 브라우저 메모리 내에서 로컬로 진행됩니다.',
    },
  ],
  howTo: [
    {
      name: '오디오 파일 로드',
      text: '음악 파일을 끌어다 놓거나 WAV, OGG, MP3, FLAC 파일을 선택합니다.',
    },
    {
      name: '루프 마커 위치 지정',
      text: '파형 보기나 숫자 입력을 사용하여 루프 시작과 끝을 조정합니다.',
    },
    {
      name: '제로 크로싱 스냅 적용',
      text: '스냅 버튼을 클릭하여 가장 가까운 제로 크로싱 지점에 마커를 맞춥니다.',
    },
    {
      name: '미리듣기 및 내보내기',
      text: '자연스러운 루프를 청취한 후 메타데이터가 포함된 WAV 파일을 다운로드합니다.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: '게임 오디오 루프 포인트 탐색기',
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
          name: 'LOOPSTART 및 LOOPEND 메타데이터 태그란 무엇인가요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'LOOPSTART와 LOOPEND는 샘플 수 단위로 측정되는 메타데이터 필드입니다.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: '오디오 루프 포인트 탐색 및 태그 주입 방법',
      step: [
        {
          '@type': 'HowToStep',
          name: '오디오 파일 로드',
          text: '음악 파일을 끌어다 놓거나 오디오 파일을 선택합니다.',
        },
      ],
    },
  ],
  bibliographyTitle: '참고 문헌 및 관련 자료',
  bibliography: bibliographyEntries,
};
