import { bibliographyEntries } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RunningPacePredictorUI } from '../ui';

const slug = 'kalkulator-tempa-bega';
const title = 'Калькулятор Темпа Бега и Прогноз Времени на Соревнованиях';
const description =
  'Рассчитайте темп бега, спрогнозируйте время финиша на 5к, 10к, полумарафоне и марафоне по формуле Ригеля и получите тренировочные зоны.';

const faqData = [
  {
    question: 'Насколько точна формула Питера Ригеля для прогнозирования времени на марафоне?',
    answer:
      'Формула Ригеля T2 = T1 * (D2 / D1)^1.06 дает высокую точность при хорошей аэробной базе. На марафоне результат зависит от недельного объема и длительных пробежек.',
  },
  {
    question: 'Как точно перевести мин/км в мин/милю?',
    answer:
      'Умножьте общее количество секунд на километр на 1,609344. Темп 5:00 мин/км (300 секунд) соответствует 8:03 мин/миле.',
  },
  {
    question: 'Почему прогнозируемое время на длинных дистанциях иногда кажется слишком оптимистичным?',
    answer:
      'Стандартный показатель 1,06 предполагает оптимальную устойчивость к утомлению. Без нужного объема бега накопление усталости замедляет темп.',
  },
  {
    question: 'Как настроить целевые зоны темпа для интервалов и темпового бега?',
    answer:
      'Интервальные тренировки (МПК) бегут в темпе 95%-105% от темпа на 5к, порог лактата 110%-120%, а легкие кроссы 125%-145%.',
  },
];

const howToData = [
  {
    name: 'Выберите систему единиц',
    text: 'Выберите метрическую (км, мин/км) или имперскую (мили, мин/миля) систему переключателем сверху.',
  },
  {
    name: 'Выберите дистанцию',
    text: 'Нажмите кнопку дистанции (5K, 10K, Полумарафон, 42K) или введите свою.',
  },
  {
    name: 'Настройте контрольное время',
    text: 'Используйте кнопки (+1м, +5m, -1m, -5m) или введите часы и минуты с недавнего старта.',
  },
  {
    name: 'Анализируйте результаты',
    text: 'Оцените средний темп, прогнозируемое время по формуле Ригеля и тренировочные зоны.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'SportsApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'RUB' },
  inLanguage: 'ru',
};

export const content: ToolLocaleContent<RunningPacePredictorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography: bibliographyEntries,
  seo: [
    {
      type: 'title',
      text: 'Биомеханические Принципы Расчета Темпа Бега',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Расчет темпа бега и прогнозирование результатов требуют понимания метаболических энергосистем. Результат в беге на длинные дистанции зависит от МПК, порога лактата и беговой экономичности.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '1.06', label: 'Показатель Ригеля' },
        { value: '4 Главных', label: 'Официальных Дистанции' },
        { value: '3 Способа', label: 'Интерактивного Расчета' },
        { value: '3 Уровня', label: 'Целевых Зон' },
      ],
    },
    {
      type: 'title',
      text: 'Формула Ригеля и Моделирование Результатов',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Формула T2 = T1 * (D2 / D1)^1.06, разработанная инженером Питером Ригелем в 1977 году, моделирует снижение скорости при увеличении дистанции.',
    },
    {
      type: 'title',
      text: 'Сравнение Метрической и Имперской Систем',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Метрическая Система (мин/км)',
          description: 'Международный стандарт. Позволяет точно контролировать отрезки по 1000 метров.',
        },
        {
          title: 'Имперская Система (мин/миля)',
          description: 'Стандарт в США и Великобритании. Одна миля равна 1,609344 км.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Обзор Официальных Шоссейных Дистанций',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Забег', 'Метрическая Дистанция (км)', 'Имперская Дистанция (ми)', 'Основная Энергосистема'],
      rows: [
        ['Забег 5K', '5.00 km', '3.11 mi', '90% Аэробная / 10% Анаэробная'],
        ['Забег 10K', '10.00 km', '6.21 mi', '95% Аэробная / 5% Анаэробная'],
        ['Полумарафон', '21.0975 km', '13.11 mi', '99% Аэробная (Порог Лактата)'],
        ['Марафон', '42.195 km', '26.22 mi', '100% Аэробная (Лимит Гликогена)'],
      ],
    },
    {
      type: 'title',
      text: 'Тактика Бега и Negative Split',
      level: 2,
    },
    {
      type: 'tip',
      title: 'Эффективность Negative Split',
      html: 'Преодоление второй половины дистанции быстрее первой экономит гликоген и предотвращает раннее закисление.',
    },
  ],
  ui: {
    title: 'Калькулятор Темпа Бега и Прогноз Времени на Соревнованиях',
    subtitle: 'Рассчитайте темп и спрогнозируйте результат по формуле Ригеля',
    paceCalculatorTitle: 'Калькулятор Темпа, Дистанции и Времени',
    racePredictorTitle: 'Прогноз Времени на Соревнованиях',
    trainingZonesTitle: 'Целевые Зоны Темпа для Тренировок',
    distanceLabel: 'Дистанция',
    timeLabel: 'Время',
    paceLabel: 'Средний Темп',
    hoursLabel: 'Часы',
    minutesLabel: 'Минуты',
    secondsLabel: 'Секунды',
    unitKm: 'Километры',
    unitMiles: 'Мили',
    paceUnitKm: 'мин/км',
    paceUnitMiles: 'мин/миля',
    presetsTitle: 'Быстрый Выбор Дистанции',
    calculateButton: 'Рассчитать',
    resetButton: 'Сбросить',
    recentRaceTitle: 'Недавнее Контрольное Время',
    predictedTimesTitle: 'Прогнозируемое Время на Дистанциях',
    distanceHeader: 'Дистанция',
    estimatedTimeHeader: 'Ожидаемое Время',
    targetPaceHeader: 'Целевой Темп',
    trainingZoneHeader: 'Тренировочная Зона',
    paceRangeHeader: 'Диапазон Темпа',
    zoneEasy: 'Легкий Кросс и Восстановление',
    zoneEasyDesc: 'Развитие аэробной базы и восстановление',
    zoneTempo: 'Темповый Бег и Фартлек',
    zoneTempoDesc: 'Повышение порога анаэробного обмена',
    zoneIntervals: 'Интервалы и Скоростная Работа',
    zoneIntervalsDesc: 'Развитие МПК и скоростной выносливости',
    riegelExplanation: 'Прогноз основан на формуле Ригеля T2 = T1 * (D2 / D1)^1.06.',
    seo: {
      title: 'Калькулятор Темпа Бега и Прогноз Времени на Соревнованиях',
      description: 'Рассчитайте темп бега и спрогнозируйте время на 5к, 10к, полумарафоне и марафоне.',
      h1: 'Калькулятор Темпа Бега и Прогноз Времени на Соревнованиях',
      intro: 'Точный расчет темпа и прогнозирование времени финиша - ключевые инструменты для бегунов.',
      statsTitle: 'Показатели Эффективности',
      stat1Label: 'Показатель Ригеля',
      stat1Value: '1.06',
      stat2Label: 'Главные Дистанции',
      stat2Value: '4 Забега',
      stat3Label: 'Расчет Темпа',
      stat3Value: '3 Способа',
      stat4Label: 'Целевые Зоны',
      stat4Value: '3 Уровня',
      comparativeTitle: 'Сравнение Единиц',
      comparativeItem1Title: 'Метрическая (мин/км)',
      comparativeItem1Desc: 'Международный стандарт.',
      comparativeItem2Title: 'Имперская (мин/миля)',
      comparativeItem2Desc: 'Стандарт в США и Великобритании.',
      tableTitle: 'Обзор Дистанций',
      tableCol1: 'Забег',
      tableCol2: 'Километры',
      tableCol3: 'Мили',
      tableRow1Col1: 'Забег 5K',
      tableRow1Col2: '5.00 km',
      tableRow1Col3: '3.11 mi',
      tableRow2Col1: 'Забег 10K',
      tableRow2Col2: '10.00 km',
      tableRow2Col3: '6.21 mi',
      tableRow3Col1: 'Полумарафон',
      tableRow3Col2: '21.10 km',
      tableRow3Col3: '13.11 mi',
      tipTitle: 'Тактика Бега',
      tipText: 'Negative split позволяет показать наилучший результат.',
      faqTitle: 'Часто Задаваемые Вопросы',
      faq1Q: 'Насколько точна формула Ригеля?',
      faq1A: 'Требует хорошей аэробной подготовки.',
      faq2Q: 'Разница мин/км и мин/миля?',
      faq2A: 'Мин/км - время на один километр.',
      glossaryTitle: 'Беговой Глоссарий',
      term1Name: 'Формула Ригеля',
      term1Def: 'Математическая формула прогнозирования результатов Питера Ригеля.',
      term2Name: 'Порог Лактата',
      term2Def: 'Интенсивность, при которой лактат стремительно накапливается.',
    },
  },
};
