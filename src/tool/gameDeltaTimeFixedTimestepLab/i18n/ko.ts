import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GameDeltaTimeFixedTimestepLabUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const faq = [
  { question: '이 고정 타임스텝 실험실은 무엇을 보여 주나요?', answer: '같은 움직이는 오브젝트를 가변 델타 시간 루프와 고정 타임스텝 누산기로 실행합니다. 반복 가능한 프레임 스파이크를 넣으면 게임 엔진 없이 시뮬레이션 시간, 위치 차이, 따라잡기 스텝을 확인할 수 있습니다.' },
  { question: '가변 델타와 고정 타임스텝의 차이는 무엇인가요?', answer: '가변 모델은 렌더링된 각 프레임의 시간으로 한 번 업데이트합니다. 고정 모델은 같은 크기의 시뮬레이션 스텝을 사용하고 누산기에 쌓인 실제 경과 시간만큼 스텝을 처리합니다. 고정 스텝은 렌더링 속도 의존성을 줄이지만 긴 프레임에서는 추가 따라잡기 작업이 필요할 수 있습니다.' },
  { question: '프레임 스파이크 입력은 무엇을 의미하나요?', answer: '선택한 스파이크 프레임마다 추가할 밀리초입니다. 빈도 값으로 몇 프레임마다 스파이크를 넣을지 정하므로 무작위 성능 기록 대신 반복 가능한 hitch를 만들 수 있습니다.' },
  { question: '델타 상한은 무엇을 바꾸나요?', answer: '프레임이 선택한 상한보다 길 때 가변 모델이 사용하는 델타를 줄입니다. 큰 순간 이동은 막을 수 있지만 해당 모델의 시뮬레이션 시계는 실제 시간보다 뒤처집니다. 고정 누산기는 프레임 전체 시간을 계속 계산합니다.' },
  { question: '프로파일러인가요, 플레이테스트를 대신하나요?', answer: '아닙니다. 지정된 숫자로 시간 처리 방식을 배우고 설계하는 결정론적 실험실입니다. 기기 성능을 측정하거나 엔진을 진단하거나 렌더링 비용을 모델링하거나 모든 게임에 맞는 루프를 증명하지는 않습니다.' },
];
const howTo = [
  { name: '프레임 리듬 고르기', text: '목표 초당 프레임을 설정하고 밀리초 단위의 반복 가능한 스파이크를 추가합니다. 빈도로 스파이크가 나타날 프레임 간격을 정합니다.' },
  { name: '시뮬레이션 스텝 설정하기', text: '고정 타임스텝을 밀리초로 고릅니다. 16.667밀리초 근처의 값은 초당 약 60회의 시뮬레이션 업데이트를 뜻합니다.' },
  { name: '두 모델에 같은 움직임 규칙 주기', text: '속도와 실행 시간을 설정합니다. 두 모델이 같은 오브젝트를 움직이므로 위치 차이는 경과 시간을 소비하는 방식에서 생깁니다.' },
  { name: '상한을 의도적으로 테스트하기', text: '델타 상한을 켜고 가변 모델의 시뮬레이션 시간과 고정 누산기를 비교합니다. 상한은 비용이 있는 정책이지 무료 수정이 아닙니다.' },
  { name: '결과 읽기', text: '두 경로, 차이 요약, 타임라인, 따라잡기 동작, 접근 가능한 프레임 표를 확인합니다. 설명이나 디버깅에서는 한 번에 하나의 입력만 바꿉니다.' },
];
const softwareApplication: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: '게임 델타 시간과 고정 타임스텝 실험실', applicationCategory: 'DeveloperApplication', operatingSystem: 'Any' };
const faqPage: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: '가변 델타 시간과 고정 타임스텝 비교하기', step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) };

export const content: ToolLocaleContent<GameDeltaTimeFixedTimestepLabUI> = {
  slug: 'game-delta-time-fixed-timestep-lab', title: '게임 델타 시간과 고정 타임스텝 실험실', description: '반복 가능한 프레임 스파이크, 움직임 시뮬레이션, 따라잡기 스텝과 보이는 시간 차이로 가변 및 고정 게임 루프를 비교합니다.',
  ui: { controlsTitle: '프레임 패턴 만들기', fpsLabel: '목표 프레임 속도', fpsHint: '초당 렌더링 프레임', spikeLabel: '프레임 스파이크', spikeHint: '스파이크 프레임에 더할 시간', spikeEveryLabel: '스파이크 간격', fixedDtLabel: '고정 타임스텝', fixedDtHint: '같은 크기의 시뮬레이션 스텝', velocityLabel: '오브젝트 속도', durationLabel: '실행 시간', clampLabel: '델타 상한', clampToggle: '가변 델타 제한', runLabel: '실험 실행', resetLabel: '값 초기화', stageKicker: '실험 공간', stageTitle: '두 개의 시계, 하나의 움직이는 오브젝트', stageCaption: '막대는 hitch를 보여 주고 선은 두 위치를 추적합니다. 아래 선은 최종값에 가려질 수 있는 차이를 분리합니다.', frameTraceLabel: '프레임 시간', positionPlotLabel: '오브젝트 위치', differencePlotLabel: '고정 경로와의 위치 차이', variableLane: '가변 델타', fixedLane: '고정 누산기', frameCountLabel: '렌더링된 프레임', wallTimeLabel: '실제 시간', variableTimeLabel: '가변 시뮬레이션 시간', fixedTimeLabel: '고정 시뮬레이션 시간', divergenceLabel: '위치 차이', stepsLabel: '고정 시뮬레이션 스텝', diagnosticsTitle: '프레임 읽기', stableStatus: '이 패턴에서는 두 경로가 계속 일치합니다.', variableStatus: '프레임 시간에 스파이크가 포함되므로 가변 경로가 앞섭니다.', fixedStatus: '긴 프레임 뒤 고정 경로는 여러 시뮬레이션 스텝으로 따라잡습니다.', clampStatus: '상한은 가변 점프를 줄이고 해당 모델을 경과한 실제 시간보다 늦게 만듭니다.', timelineTitle: '움직임 기록', timelineCaption: '경과한 실제 시간에 따른 위치입니다. 점선은 같은 고정 스텝을 표시합니다.', frameAxis: '경과한 실제 시간', positionAxis: '오브젝트 위치', legendVariable: '가변 델타 경로', legendFixed: '고정 타임스텝 경로', legendSpike: '프레임 스파이크', tableTitle: '접근 가능한 프레임 기록', tableFrame: '프레임', tableWall: '실제 시간', tableVariable: '가변 위치', tableFixed: '고정 위치', tableDelta: '차이', modelNote: '가변 모델은 현재 프레임 시간으로 속도를 한 번 적용합니다. 고정 모델은 전체 실제 시간을 누적하고 같은 크기의 스텝으로 진행합니다. 어느 경로도 성능 측정값은 아닙니다.', privacyDisclosure: '값은 이 브라우저에만 저장되어 다음에 돌아왔을 때 실험을 이어갈 수 있습니다. 게임 데이터나 텔레메트리는 전송되지 않습니다.', unitMs: 'ms', unitSeconds: '초', unitPixels: '단위', statusReady: '실험 업데이트됨' },
  seo: [
    { type: 'title', level: 2, text: '게임 루프 안의 시계를 이해하기' },
    { type: 'paragraph', html: '렌더링된 각 프레임은 게임에 새로운 경과 시간을 전달합니다. 가변 델타 루프에서는 보통 <code>position += velocity × frameTime</code>처럼 움직임을 업데이트합니다. 프레임이 안정적이면 평균 속도는 의도한 값에 가깝지만, 한 번의 업데이트가 그 업데이트를 만든 프레임만큼 커질 수 있습니다. 따라서 hitch는 단순한 화면 정지가 아니라 그 업데이트가 소비하는 게임 시간을 바꾸는 사건입니다.' },
    { type: 'title', level: 2, text: '가변 적분과 고정 누산기 비교하기' },
    { type: 'paragraph', html: '고정 타임스텝 루프는 각 프레임 시간을 누산기에 더한 뒤 <code>16.667 ms</code> 같은 선택된 스텝을 반복해서 소비합니다. 시뮬레이션은 같은 크기의 업데이트를 받고 렌더러는 다른 리듬으로 표시할 수 있습니다. 남은 소수 시간은 다음 프레임까지 누산기에 남습니다. 긴 프레임이 오면 고정 루프는 경과 시간을 반영하기 위해 여러 작은 업데이트를 수행합니다. 스텝 크기는 안정적이지만 따라잡기 작업이 순간적으로 늘 수 있습니다.' },
    { type: 'table', headers: ['상황', '가변 델타 경로', '고정 타임스텝 경로', '판단할 내용'], rows: [['안정적인 렌더링', '일반 프레임 시간으로 한 번 업데이트', '같은 스텝으로 누적 시간을 소비', '두 경로가 같은 움직임을 따르는지 확인합니다.'], ['긴 프레임', '큰 업데이트가 오브젝트를 너무 멀리 이동', '여러 고정 업데이트가 시간을 따라잡음', '위치 차이와 따라잡기 수를 함께 읽습니다.'], ['다른 렌더링 속도', '업데이트 크기가 프레임 속도에 따라 변함', '시뮬레이션 스텝은 동일함', '고정 스텝은 렌더링 의존성을 줄입니다.'], ['델타 상한', '상한을 넘는 시간을 무시', '누산기는 전체 프레임 시간을 받음', '시간 손실을 허용할 때만 제한합니다.']] },
    { type: 'title', level: 2, text: '프레임 스파이크가 실제로 하는 일 보기' },
    { type: 'paragraph', html: '초당 60프레임에서는 일반 프레임이 약 <code>16.667 ms</code>입니다. 여기에 <code>80 ms</code> 스파이크가 추가되면 한 프레임은 약 <code>96.667 ms</code>가 됩니다. 가변 모델은 이 시간을 한 번의 업데이트로 소비합니다. 고정 모델은 대신 약 여섯 번의 <code>16.667 ms</code> 스텝을 소비합니다. 전체 경과 시간은 같을 수 있지만 시뮬레이션을 통과하는 경로는 달라집니다.' },
    { type: 'title', level: 2, text: '위치 차이와 따라잡기를 함께 읽기' },
    { type: 'paragraph', html: '위치 차이는 가변 경로에서 고정 경로를 뺀 값입니다. 두 적분 정책이 얼마나 벌어졌는지를 보여 주지만 어느 쪽이 자동으로 옳은지는 말해 주지 않습니다. 따라잡기 수는 한 번의 렌더링 프레임에서 필요한 고정 작업량을 보여 줍니다. 큰 차이는 보이는 움직임의 불일치를, 많은 스텝은 CPU 예산 문제 가능성을 나타냅니다. 서로 관련 있지만 같은 진단은 아닙니다.' },
    { type: 'title', level: 2, text: '델타 제한을 정책으로 다루기' },
    { type: 'paragraph', html: '상한은 일시 정지된 탭, 브레이크포인트 또는 심각한 hitch가 캐릭터를 순간 이동시키거나 물리 오브젝트를 지오메트리 너머로 보내는 일을 막을 수 있습니다. 대신 가변 시계는 실제 경과 시간보다 뒤처집니다. 게임이 시간을 보존해야 한다면 고정 누산기나 다른 복구 정책을 사용합니다. 점프를 제한하고 반응성을 유지해야 한다면 상한이 유용할 수 있지만 잃는 시간을 의도적으로 선택해야 합니다.' },
    { type: 'title', level: 2, text: '보호해야 할 작업에 맞춰 루프 선택하기' },
    { type: 'table', headers: ['게임 루프 작업', '유용한 기본값', '이유'], rows: [['물리, 충돌 또는 결정론적 게임플레이', '고정 타임스텝', '같은 스텝이 렌더링 리듬에 대한 의존성을 줄입니다.'], ['상태를 누적하지 않는 단순한 시각 효과', '가변 델타', '업데이트가 작고 보통 따라잡기 큐가 필요하지 않습니다.'], ['부드러운 표시가 필요한 게임플레이 시뮬레이션', '보간이 있는 고정 업데이트', '시뮬레이션 스텝은 유지하고 표시에서 소수 진행을 숨깁니다.'], ['심각한 정지 뒤 복구', '제한된 따라잡기 정책', '나쁜 프레임 하나가 무제한 시뮬레이션 작업을 만들지 않게 합니다.']] },
    { type: 'title', level: 2, text: '반복 가능한 조정 절차 사용하기' },
    { type: 'paragraph', html: '먼저 스파이크 없이 두 경로가 일치하는지 확인합니다. 반복 가능한 hitch를 추가하고 빈도를 바꿔 보이는 오류가 누적되는지 안정되는지 확인합니다. 속도를 바꾸기 전에 고정 스텝을 조정하고 따라잡기 수를 살핍니다. 마지막으로 상한을 켜고 가변 시뮬레이션 시간과 실제 시간을 비교합니다. 이 순서로 차이의 원인과 이를 제한하는 정책을 분리할 수 있습니다.' },
    { type: 'tip', title: '이 실험으로 증명할 수 없는 것', html: '이 실험실은 지정된 프레임 시간과 일정한 속도를 사용하므로 시간 동작을 설명할 뿐 기기를 측정하거나 엔진을 검증하지 않습니다. 실제 물리, 입력 샘플링, 네트워크, 보간, 프레임 예산에 따라 최선의 설계는 달라질 수 있습니다. 결과를 가설로 삼고 실제 게임에서 확인하세요.' },
  ],
  faq, bibliographyTitle: '게임 루프 참고 자료', bibliography: bibliographyEntries, howTo, schemas: [softwareApplication, faqPage, howToSchema],
};
