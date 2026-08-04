import { bibliographyEntries } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PenaltyShootoutUI } from '../ui';

const slug = 'kalkulyator-serii-penalti';
const title = 'Табло Серии Пенальти Онлайн: Счетчик Пенальти Футбол';
const description =
  'Отслеживайте серию послематчевых пенальти в реальном времени. Учет 5 ударов, математическое исключение, внезапная смерть и торжество победителя.';

const faqData = [
  {
    question: 'Когда серия пенальти завершается досрочно?',
    answer:
      'Серия завершается, как только одна из команд получает преимущество по голам, которое соперник математически не сможет отыграть оставшимися ударами.',
  },
  {
    question: 'Как работает внезапная смерть в серии пенальти?',
    answer:
      'Если после 5 ударов каждой команды ничья сохраняется, серии продолжаются поочередно до первого промаха одного из соперников при успешном ударе другого.',
  },
  {
    question: 'Кто бьет первым в серии пенальти?',
    answer:
      'Судья бросает жребий монетой для выбора ворот и проводит второй жребий для определения команды, выполняющей первый удар.',
  },
  {
    question: 'Можно ли заменить вратаря во время серии пенальти?',
    answer:
      'Травмированный вратарь, не способный продолжить игру, может быть заменен заявленным запасным, если у команды не исчерпан лимит замен.',
  },
];

const howToData = [
  {
    name: 'Введите названия команд',
    text: 'Укажите названия команд в полях ввода перед началом серии пенальти.',
  },
  {
    name: 'Фиксируйте каждый удар',
    text: 'Нажимайте ГОЛ или ПРОМАХ после каждого удара. Приложение обновит счет, индикаторы и очередность ударов.',
  },
  {
    name: 'Переход к внезапной смерти',
    text: 'При равном счете после 5 ударов счетчик автоматически переходит в режим серии до первого промаха.',
  },
  {
    name: 'Объявление победителя',
    text: 'При математической победе или успехе во внезапной смерти анимированный экран объявит команду-победителя.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'ru',
};

export const content: ToolLocaleContent<PenaltyShootoutUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography: bibliographyEntries,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Официальные Правила IFAB по Серии Пенальти',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Серия послематчевых пенальти (официально <em>удары с 11-метровой отметки</em>) определяет победителя футбольного матча при ничейном исходе согласно Правилу 10 IFAB.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '5', label: 'Первоначальные Удары' },
        { value: '11м', label: 'Дистанция до Ворот' },
        { value: '1v1', label: 'Бьющий vs Вратарь' },
        { value: 'ABBA / AB', label: 'Очередность Ударов' },
      ],
    },
    {
      type: 'tip',
      title: 'Правило Математического Исключения',
      html: 'Если одна из команд забивает больше голов, чем соперник может забить оставшимися ударами, судья немедленно завершает серию.',
    },
    {
      type: 'title',
      text: 'Сравнение Основной Серии и Внезапной Смерти',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Основная Серия (5 Пенальти)',
          description: 'Серия из 5 поочередных ударов каждой команды. Досрочный финиш возможен только при нехватке ударов для отыгрыша.',
        },
        {
          title: 'Серия Внезапной Смерти',
          description: 'Поочередные пары ударов начиная с 6-го раунда. Разница в счете при равном числе попыток определяет победителя.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Ключевые Требования Правил IFAB',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Правило / Требование', 'Официальный Стандарт IFAB'],
      rows: [
        ['Допущенные Игроки', 'Бить пенальти могут только игроки, находившиеся на поле в момент финального свистка.'],
        ['Позиция Вратаря', 'Обязан сохранять хотя бы часть одной стопы на линии ворот в момент удара.'],
        ['Обманные Движения', 'Ложные движения при разбеге разрешены; финты после завершения разбега наказуемы.'],
        ['Равенство Составов', 'Если у соперника меньше игроков из-за удаления, вторая команда должна сократить состав для уровня.'],
      ],
    },
    {
      type: 'title',
      text: 'Плюсы и Минусы Серии Пенальти',
      level: 2,
    },
    {
      type: 'proscons',
      title: 'Оценка Формата',
      items: [
        {
          pro: 'Гарантирует выявление победителя в четко прогнозируемые временные рамки.',
          con: 'Огромное психологическое давление может перечеркнуть качество игры за 120 минут.',
        },
        {
          pro: 'Дарит невероятный накал страстей и зрелищность зрителям.',
          con: 'Промах одного футболиста возлагает на него несоразмерную вину.',
        },
      ],
    },
  ],
  ui: {
    teamALabel: 'Хозяева',
    teamBLabel: 'Гости',
    scoreGoal: 'ГОЛ',
    scoreMiss: 'ПРОМАХ',
    undo: 'Отмена',
    reset: 'Сброс',
    suddenDeath: 'Внезапная Смерть',
    regularRounds: 'Основной Раунд',
    roundLabel: 'Раунд',
    turnLabel: 'Очередь Удара',
    winnerTitle: 'Победитель Определен',
    unreachableLead: 'Недосягаемый отрыв в основной серии',
    regularRoundsWin: 'Победа по итогам 5 пенальти',
    suddenDeathWin: 'Победа во внезапной смерти',
    statusPending: 'В ожидании',
    statusScored: 'Забит',
    statusMissed: 'Промах',
  },
};
