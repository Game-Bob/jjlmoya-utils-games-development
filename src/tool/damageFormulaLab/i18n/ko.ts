import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DamageFormulaLabUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'game-damage-formula-calculator-ttk';
const title = '게임 데미지 공식 계산기 & TTK 차트';
const description = '데미지 공식을 실시간 곡선, 공격·방어 히트맵, 반올림 임계값, 크리티컬, 처치 필요 대리수 및 처치 시간(TTK)으로 비교 분석하세요.';

const faq = [
  {
    question: '데미지 공식 계산기는 무엇을 비교하나요?',
    answer: '동일한 전투 능력치에 대해 2개의 안전한 수학 공식을 비교합니다. 데미지 곡선, 처치 필요 공격 횟수, 처치 시간(TTK), 반올림 규칙, 저항 적용 순서를 안전하게 시뮬레이션할 수 있습니다.',
  },
  {
    question: '어떤 변수와 함수를 사용할 수 있나요?',
    answer: '사용 가능한 변수는 attack, defense, level, power, resistance, flat, criticalChance, criticalMultiplier 입니다. 안전한 함수로 min, max, clamp, abs, sqrt, pow, floor, round, ceil 을 지원합니다.',
  },
  {
    question: '처치 시간(TTK)은 어떻게 계산되나요?',
    answer: '처치 필요 공격 횟수는 목표 체력을 올림 처리된 예상 데미지로 나눈 값입니다. TTK는 첫 공격과 마지막 공격 사이의 시간이므로 (필요 공격 횟수 - 1) / 초당 공격 횟수로 계산됩니다. 1타 처치의 TTK는 0초입니다.',
  },
  {
    question: '저항 적용 순서가 왜 중요한가요?',
    answer: '고정 가감산치를 퍼센트 저항 전에 적용하면 고정치도 저항 비율만큼 감쇄됩니다. 저항을 먼저 적용하면 이후의 고정치 가감산은 영향을 받지 않습니다. 게임 엔진 설계에 따라 적절한 순서를 선택할 수 있습니다.',
  },
  {
    question: '매끄러운 곡선이 균형 잡힌 게임 밸런스를 의미하나요?',
    answer: '아니요. 곡선은 데미지 0 구간이나 급격한 수치 경사를 시각화할 뿐, 실제 밸런스는 전투 역할, 플레이 경험 및 테스트에 따라 결정됩니다.',
  },
];

const howTo = [
  { name: '2개의 공식 선택', text: '선형, 비율, 레벨 스케일 프리셋 중 선택하거나 사용자 지정 공식 A와 B를 입력합니다.' },
  { name: '전투 능력치 설정', text: '공격력, 방어력, 레벨, 위력 계수, 저항 퍼센트, 고정 가감산, 크리티컬, 목표 체력, 공격 속도를 설정합니다.' },
  { name: '엔진 규칙 지정', text: '데미지 반올림 방식과 저항/고정치 적용 순서를 선택합니다.' },
  { name: '곡선 및 임계값 분석', text: '공격력 스위프 곡선, 방어 히트맵, 필요 공격 횟수, TTK 및 진단 경고를 확인합니다.' },
  { name: '실험 데이터 저장', text: '공유 링크를 복사하거나 JSON 설정, CSV 테이블, PNG 차트 이미지를 다운로드합니다.' },
];

const softwareApplication: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Any',
};

const faqPage: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })),
};

export const content: ToolLocaleContent<DamageFormulaLabUI> = {
  slug,
  title,
  description,
  ui: {
    onboarding: '현재 사용 중인 데미지 공식과 대안 공식을 입력하고 전투 능력치를 조정하여 수치적 경계를 검증하세요.',
    privacyNote: '로컬 전용 모델. 공식과 설정은 브라우저 내부에서만 처리됩니다.',
    localNote: '비공개 전투 모델입니다. 공식과 파일은 이 브라우저 안에만 보관됩니다.',
    formulaDeck: '공식 챔버',
    formulaALabel: '공식 A (현재 모델)',
    formulaBLabel: '공식 B (대안 모델)',
    formulaHint: '변수: attack, defense, level, power, resistance, flat, criticalChance, criticalMultiplier',
    formulaFunctions: '안전 함수: min, max, clamp, abs, sqrt, pow, floor, round, ceil',
    presetLinear: '선형 방어',
    presetRatio: '비율 아머',
    presetLevel: '레벨 스케일링',
    combatInputs: '전투 능력치 설정',
    attackLabel: '공격력 (Attack)',
    defenseLabel: '방어력 (Defense)',
    levelLabel: '레벨 (Level)',
    powerLabel: '위력 계수 (Power)',
    resistanceLabel: '저항 퍼센트 (Resistance %)',
    flatLabel: '고정 가감산 (Flat)',
    criticalChanceLabel: '크리티컬 확률 (%)',
    criticalMultiplierLabel: '크리티컬 배율',
    healthLabel: '목표 체력 (Health)',
    cadenceLabel: '초당 공격 횟수 (APS)',
    roundingLabel: '데미지 반올림',
    roundingNone: '소수점 유지',
    roundingFloor: '내림 (Floor)',
    roundingRound: '반올림 (Round)',
    roundingCeil: '올림 (Ceil)',
    orderLabel: '수식 적용 순서',
    resistanceFirst: '저항 % 적용 후 고정치',
    flatFirst: '고정치 적용 후 저항 %',
    runLabel: '실시간 영향 비교',
    resultDamage: '예상 데미지',
    resultHits: '처치 필요 공격 횟수',
    resultTtk: '처치 소요 시간 (TTK)',
    resultDifference: '데미지 차이',
    formulaAName: '현재 공식',
    formulaBName: '대안 공식',
    curveTitle: '공격력 변화 곡선',
    curveCaption: '방어력을 고정한 상태에서 공격력을 현재의 절반에서 2배까지 변화시키며 비교합니다.',
    heatmapTitle: '압력 필드 히트맵',
    heatmapCaption: '공격력과 방어력 조합에 따른 공식 A의 예상 데미지 분포를 표시합니다.',
    attackAxis: '우측으로 갈수록 공격력 증가',
    defenseAxis: '하단으로 갈수록 방어력 증가',
    scenariosTitle: '전투 타겟 프로필',
    scenarioSkirmisher: '일반 몬스터',
    scenarioGuardian: '정예 몬스터',
    scenarioBoss: '보스 몬스터',
    scenarioCustom: '현재 설정값',
    diagnosticsTitle: '임계점 진단',
    statusBalanced: '현재 검증 범위 내에서 비정상적인 수치 급변이 감지되지 않았습니다.',
    exportTitle: '실험 데이터 내보내기',
    copyLink: '공유 링크 복사',
    exportCsv: 'CSV 다운로드',
    exportJson: 'JSON 다운로드',
    importJson: 'JSON 가져오기',
    exportPng: '차트 이미지(PNG) 다운로드',
    reset: '모델 초기화',
    privacyDisclosure: '공유 링크는 URL 해시 값으로 설정을 보관하며 외부 서버로 전송되지 않습니다.',
    limitationDisclosure: '크리티컬 예상 데미지는 통계적 평균값이며 난수 시뮬레이션이 아닙니다.',
    importError: '올바른 데미지 실험실 설정 파일이 아닙니다.',
    copiedStatus: '공유 링크가 클립보드에 복사되었습니다.',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: '게임 엔진 적용 전 데미지 공식 사전 검증',
    },
    {
      type: 'paragraph',
      html: '특정 능력치 구간에서 정상 작동하는 공식도 레벨이 오르면 데미지 0이나 이상 수치로 붕괴될 수 있습니다. 본 에디터를 통해 극단적 능력치 구간의 이상 현상을 사전에 방지하세요.',
    },
    {
      type: 'title',
      level: 2,
      text: '제한되고 안전한 표현식 언어',
    },
    {
      type: 'paragraph',
      html: '공식 입력창은 약속된 변수와 수학 함수만을 지원하며 임의의 자바스크립트 코드를 실행하지 않아 안전합니다.',
    },
    {
      type: 'table',
      headers: ['평가 지표', '계산 내용', '기획 검토 사항'],
      rows: [
        ['예상 데미지', '크리티컬 기대값 및 저항을 반영한 기본 데미지', '약한 캐릭터와 강한 캐릭터 모두에게 공식이 의도대로 작동하는가?'],
        ['처치 필요 공격 횟수', '목표 체력을 올림 데미지로 나눈 값', '단 1포인트의 능력치 상승이 필요 공격 횟수를 1회 줄여주는가?'],
        ['처치 시간 (TTK)', '공격 간격을 공격 속도로 나눈 시간', '공격 속도가 기획된 전투 템포를 형성하는가?'],
        ['히트맵', '공격력과 방어력 조합에 따른 데미지 분포', '불필요한 데미지 정체 구간이나 급격한 둔화 구간이 있는가?'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: '수학적 검증과 게임 밸런스 판단의 분리',
    },
    {
      type: 'paragraph',
      html: '매끄러운 수식 곡선이 게임의 재미를 보장하지는 않습니다. 테스트 플레이 전 검증할 가치가 있는 질문을 도출하는 도구로 활용하세요.',
    },
    {
      type: 'tip',
      title: '데미지 수치와 필요 공격 횟수를 항상 함께 확인하세요',
      html: '데미지의 작은 변화가 목표 체력 임계점을 넘어가면 처치 필요 공격 횟수가 1회 줄어들 수 있습니다. 항상 데미지와 TTK를 함께 비교 분석하세요.',
    },
  ],
  faq,
  bibliographyTitle: '데미지 공식 및 수치 설계 참고 자료',
  bibliography: bibliographyEntries,
  howTo,
  schemas: [softwareApplication, faqPage, howToSchema],
};
