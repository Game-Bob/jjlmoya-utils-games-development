import { bibliographyEntries } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SwimCssCalculatorUI } from '../ui';

const slug = 'kalkulyator-css-plavaniya';
const title = 'Калькулятор Критической Скорости Плавания CSS';
const description = 'Рассчитайте критическую скорость плавания CSS и пороговый темп на 100м или 100yd по результатам тестов 400м и 200м.';

const faqData = [
  {
    question: 'Как часто следует проходить тест CSS в плавании?',
    answer: 'Пловцам и триатлетам рекомендуется проводить тест на 400м и 200м каждые 4-6 недель для корректировки тренировочных темпов.',
  },
  {
    question: 'Можно ли рассчитать CSS для бассейнов в ярдах?',
    answer: 'Да. Математическая формула критической скорости применяется аналогично для ярдовых бассейнов.',
  },
];

const howToData = [
  {
    name: 'Выберите единицы измерения бассейна',
    text: 'Выберите Метры (бассейн 25м или 50м) или Ярды (бассейн 25yd) в верхнем переключателе.',
  },
  {
    name: 'Введите время теста 400м',
    text: 'Введите минуты и секунды вашего максимального теста на 400 метров.',
  },
  {
    name: 'Введите время теста 200м',
    text: 'Введите минуты и секунды вашего максимального теста на 200 метров.',
  },
  {
    name: 'Рассчитайте целевые отрезки',
    text: 'Нажмите Рассчитать для получения аэробной скорости и графика прохождения отрезков.',
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

const ui: SwimCssCalculatorUI = {
  title: 'Калькулятор Критической Скорости Плавания CSS',
  subtitle: 'Рассчитайте аэробный пороговый темп на 100м и раскладку по зонам интенсивности.',
  unitLabel: 'Единицы измерения бассейна',
  unitMeters: 'Метры (Бассейн 25м / 50m)',
  unitYards: 'Ярды (Бассейн 25yd)',
  t400Label: 'Тест 400м / 400yd',
  t200Label: 'Тест 200м / 200yd',
  minutesLabel: 'Минуты',
  secondsLabel: 'Секунды',
  calculateButton: 'Рассчитать CSS и Отрезки',
  resetButton: 'Сбросить',
  cssResultTitle: 'Результаты Критической Скорости Плавания',
  cssSpeedLabel: 'Аэробная Скорость',
  cssPace100Label: 'Темп CSS на 100',
  lapPaceLabel: 'Цель на Бассейн 25м / 25yd',
  unitMeterPerSec: 'м/с',
  unitYardPerSec: 'yd/s',
  pace100mUnit: '/100м',
  pace100ydUnit: '/100yd',
  trainingZonesTitle: 'Матрица Тренировочных Темпов в Бассейне',
  zoneHeader: 'Зона Интенсивности',
  pace100Header: 'Целевой Темп / 100',
  split50Header: 'Отрезок 50',
  split100Header: 'Отрезок 100',
  split200Header: 'Отрезок 200',
  split400Header: 'Отрезок 400',
  zoneAerobic: 'Аэробная Выносливость',
  zoneAerobicDesc: 'Для длинных аэробных серий и разминки (~104% темпа CSS)',
  zoneAerobicRest: 'Отдых: 10с - 15с на серию',
  zoneCss: 'Порог CSS',
  zoneCssDesc: 'Целевой темп для пороговых серий и соревновательной выносливости (~100% темпа CSS)',
  zoneCssRest: 'Отдых: 15с - 20с на серию',
  zoneVo2Max: 'Скорость МПК VO2 Max',
  zoneVo2MaxDesc: 'Высокоинтенсивный интервальный тренинг (~96% темпа CSS)',
  zoneVo2MaxRest: 'Отдых: 30с - 45с на серию',
  invalidNotice: 'Время теста на 400м должно быть строго больше времени на 200м.',
  copySplitsButton: 'Скопировать Отрезки',
  copiedNotice: 'Отрезки скопированы',
  seo: {
    title: 'Калькулятор Критической Скорости Плавания CSS Отрезки',
    description: 'Рассчитайте критическую скорость плавания CSS и пороговый темп на 100м или 100yd по результатам тестов 400м и 200м.',
    h1: 'Калькулятор Критической Скорости Плавания и График Темпов',
    intro: 'Критическая скорость плавания - ключевой показатель пловцов и триатлетов для построения тренировок в бассейне по аэробному порогу.',
    statsTitle: 'Ключевые Показатели Эффективности',
    stat1Label: 'Тест 1',
    stat1Value: '400м Максимальное Усилие',
    stat2Label: 'Тест 2',
    stat2Value: '200m Максимальное Усилие',
    stat3Label: 'Пороговый Показатель',
    stat3Value: 'Базовый Темп 100м CSS',
    stat4Label: 'Практическое Применение',
    stat4Value: 'Целевые Отрезки Секундомера',
    comparativeTitle: 'Метод CSS против Пульсовых Зон в Воде',
    comparativeItem1Title: 'Методика Критической Скорости CSS',
    comparativeItem1Desc: 'Измеряет реальную скорость продвижения в воде с учетом техники поворотов.',
    comparativeItem2Title: 'Конвенциональный Пульсометрия',
    comparativeItem2Desc: 'Имеет задержку показаний в воде и не учитывает ухудшение техники от усталости.',
    tableTitle: 'Сводная Таблица Зон Интенсивности и Интервалов Отдыха',
    tableCol1: 'Тренировочная Зона',
    tableCol2: 'Физиологическая Адаптация',
    tableCol3: 'Рекомендуемые Дистанции',
    tableRow1Col1: 'Аэробная Выносливость',
    tableRow1Col2: 'Капилляризация и оптимизация жирового обмена.',
    tableRow1Col3: 'Повторы от 400м до 800м с коротким отдыхом 10-15 секунд.',
    tableRow2Col1: 'Порог CSS',
    tableRow2Col2: 'Повышение утилизации лактата и аэробной мощности.',
    tableRow2Col3: 'Повторы от 100м до 300м с отдыхом 15-20 секунд.',
    tableRow3Col1: 'Скорость МПК VO2 Max',
    tableRow3Col2: 'Максимальное потребление кислорода и темп гребков.',
    tableRow3Col3: 'Интервалы от 50м до 100м с увеличенным отдыхом.',
    tipTitle: 'Совет по Прохождению Теста',
    tipText: 'Равномерно распределяйте силы на 400м, чтобы избежать преждевременного закисления.',
    faqTitle: 'Часто Задаваемые Вопросы о Критической Скорости Плавания',
    faq1Q: 'Как часто повторно тестировать CSS?',
    faq1A: 'Рекомендуется повторять каждые 4-6 недель.',
    faq2Q: 'Подходит ли для ярдовых бассейнов?',
    faq2A: 'Да. Математическая формула абсолютно идентична.',
    glossaryTitle: 'Глоссарий Физиологии Плавания',
    term1Name: 'Критическая Скорость Плавания',
    term1Def: 'Теоретическая максимальная скорость плавания, поддерживаемая без быстрого утомления.',
    term2Name: 'Целевой Отрезок',
    term2Def: 'Время на повороте, контролируемое по секундомеру.',
  },
};

export const content: ToolLocaleContent<SwimCssCalculatorUI> = {
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
      text: 'Биомеханические Принципы Критической Скорости Плавания',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Критическая скорость плавания отражает наклон линейной зависимости между дистанцией и временем. Вычитание результата 200м из 400м исключает анаэробный вклад.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '400м & 200м', label: 'Тестовая Пара' },
        { value: 'База 100м', label: 'Стандарт Темпа' },
        { value: '3 Зоны', label: 'Матрица Интенсивности' },
        { value: '4 Отрезка', label: 'Цели Секундомера' },
      ],
    },
    {
      type: 'title',
      text: 'Темп CSS против Пульсового Контроля в Плавании',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Прямой Скоростной Темп CSS',
          description: 'Учитывает реальную скорость продвижения, включая повороты и гидродинамику.',
        },
        {
          title: 'Датчики Пульса в Воде',
          description: 'Подвержены запаздыванию отклика из-за водной среды.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Таблица Тренировочных Зон и Интервалов Отдыха',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Название Зоны', 'Темп относительно CSS', 'Главная Цель', 'Рекомендуемый Отдых'],
      rows: [
        ['Аэробная Выносливость', '104% от времени CSS', 'Базовая аэробная выносливость', '10 - 15 секунд'],
        ['Порог CSS', '100% от времени CSS', 'Порог лактата и темп дистанции', '15 - 20 секунд'],
        ['Скорость МПК VO2 Max', '96% от времени CSS', 'Максимальная аэробная мощность', '30 - 45 секунд'],
      ],
    },
    {
      type: 'title',
      text: 'Стратегия Выполнения Интервалов в Бассейне',
      level: 2,
    },
    {
      type: 'tip',
      title: 'Совет по Удержанию Целевого Темпа',
      html: 'Строго выдерживайте раскладку на каждые 50 метров. Старт на 2 секунды быстрее приводит к падению скорости на финише.',
    },
  ],
  ui,
};
