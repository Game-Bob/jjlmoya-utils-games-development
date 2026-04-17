import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ScoreKeeperUI } from '../ui';

const slug = 'sportivnoe-tablo-onlayn';
const title = 'Спортивное табло онлайн: Бесплатный счетчик очков (2026)';
const description =
  'Цифровое табло с гигантскими кнопками для мобильных устройств. Идеально для падела, пинг-понга и футбола. Без назойливой рекламы во время игры. Просто и быстро.';

const faqData = [
  {
    question: 'Работает ли это без подключения к интернету?',
    answer:
      'Да, как только страница загружена, табло работает полностью в автономном режиме. Вам не нужны данные или WiFi во время матча. Все сохраняется локально в вашем браузере.',
  },
  {
    question: 'Можно ли использовать табло для тенниса и падела?',
    answer:
      'Да, режим Теннис/Падел автоматически обрабатывает последовательность 15-30-40-AD и отслеживает сеты и геймы в соответствии с официальными правилами. Идеально для товарищеских матчей.',
  },
  {
    question: 'Можно ли развернуть табло на весь экран?',
    answer:
      'Да, вы можете активировать полноэкранный режим в своем браузере (F11 на ПК или кнопка полноэкранного режима на мобильном устройстве). Цифры занимают 80% экрана для максимальной видимости.',
  },
  {
    question: 'Как исправить счет, если я ошибся?',
    answer:
      'На карточке каждого игрока есть отдельная кнопка для вычитания очков. Вы можете быстро исправить ошибки, не перезапуская все табло.',
  },
  {
    question: 'Подходит ли это для баскетбола с 1-, 2- и 3-очковыми бросками?',
    answer:
      'Да, в режиме «Баскетбол» появляются специальные кнопки +1, +2 и +3, чтобы быстро фиксировать любое попадание без лишних нажатий.',
  },
  {
    question: 'Автоматически ли табло переключает подачу в пинг-понге?',
    answer:
      'Да, в режиме «Пинг-понг» индикатор подачи автоматически переключается каждые 2 очка (или каждое очко при равном счете), следуя официальным правилам ITTF.',
  },
];

const howToData = [
  {
    name: 'Выберите вид спорта',
    text: 'Выберите вид спорта в селекторе сверху: Свободный режим, Теннис, Падел, Пинг-понг, Волейбол или Баскетбол.',
  },
  {
    name: 'Настройте имена',
    text: 'Нажмите на «ХОЗЯЕВА» или «ГОСТИ», чтобы изменить имена игроков или названия команд.',
  },
  {
    name: 'Добавляйте очки одним нажатием',
    text: 'Нажмите на большую область табло, чтобы добавить очко. В баскетболе используйте кнопки +1, +2 или +3.',
  },
  {
    name: 'Указывайте подающего',
    text: 'Используйте кнопку подачи в нижнем углу, чтобы отметить, кто подает. Желтый индикатор появится автоматически.',
  },
  {
    name: 'Исправляйте ошибки',
    text: 'Используйте кнопку «−», если вы добавили очко по ошибке. Нет необходимости перезапускать все табло.',
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
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'ru',
};

export const content: ToolLocaleContent<ScoreKeeperUI> = {
  slug,
  title,
  description,
  faqTitle: 'Часто задаваемые вопросы',
  faq: faqData,
  bibliographyTitle: 'Официальные правила и ссылки',
  bibliography: [
    {
      name: 'ITTF: Официальные правила настольного тенниса (пинг-понга)',
      url: 'https://www.ittf.com/handbook/',
    },
    {
      name: 'ITF: Официальные правила тенниса',
      url: 'https://www.itftennis.com/en/about-us/governance/rules-and-regulations/',
    },
    {
      name: 'FIP: Официальные правила падела',
      url: 'https://www.padelfip.com/es/regulaciones/',
    },
    {
      name: 'FIVB: Официальные правила волейбола',
      url: 'https://www.fivb.com/en/volleyball/thegame_volleyball/rulesofthegame_volleyball',
    },
    {
      name: 'FIBA: Официальные правила баскетбола',
      url: 'https://www.fiba.basketball/en/official-basketball-rules',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Ваш цифровой судья в кармане',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'В пылу матча легко сбиться со счета. «Было 4-3 или 3-4?». Это табло разработано, чтобы разрешать подобные споры еще до их начала. Благодаря интерфейсу с <strong>гигантскими кнопками</strong>, занимающими почти всю карточку, вы можете добавлять очки, не глядя на экран, просто протянув руку к телефону на скамейке.',
    },
    {
      type: 'title',
      text: 'Умный выбор вида спорта',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Режим Теннис / Падел',
          description:
            'Адаптированный интерфейс со счетчиками сетов и геймов. Система автоматически обрабатывает последовательность 15-30-40-AD.',
          icon: 'mdi:tennis',
          points: ['Официальные правила', 'Управление преимуществом', 'Счетчик сетов'],
        },
        {
          title: 'Режим Баскетбол',
          description:
            'Табло распознает вид спорта и меняет интерфейс. Специальные кнопки +1, +2 и +3.',
          icon: 'mdi:basketball',
          points: ['Быстрые трехочковые', 'Штрафные броски', 'Без лишних нажатий'],
        },
        {
          title: 'Режим Пинг понг',
          description:
            'Забудьте о необходимости запоминать, чья очередь подавать. Визуальный индикатор переключается автоматически каждые 2 очка.',
          icon: 'mdi:table-tennis',
          points: ['Правила ITTF', 'Ротация подачи', 'Режим баланса (11 очков)'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Функции, разработанные для спорта',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Высокая видимость:</strong> Цифры занимают 80% экрана для максимальной читаемости на солнце.',
        '<strong>Редактируемые имена:</strong> Нажмите на «ХОЗЯЕВА» или «ГОСТИ», чтобы задать имена игроков.',
        '<strong>Предотвращение ошибок:</strong> Отдельная кнопка «минус» для быстрого исправления ошибок без сброса.',
        '<strong>Работает офлайн:</strong> После загрузки интернет во время матча не требуется.',
      ],
    },
  ],
  ui: {
    playerA: 'ХОЗЯЕВА',
    playerB: 'ГОСТИ',
    swapSides: 'Поменяться сторонами',
    reset: 'Сброс',
    serve: 'Подача',
    sets: 'Сеты',
    games: 'Геймы',
    victory: 'ПОБЕДА!',
    newGame: 'Новый матч',
    continueGame: 'Продолжить игру',
    resetConfirm: 'Сбросить табло?',
    sportSimple: 'Свободный (Футбол, Крестики-нолики...)',
    sportTennis: 'Теннис',
    sportPadel: 'Падел',
    sportPingpong: 'Пинг-понг',
    sportVolleyball: 'Волейбол',
    sportBasket: 'Баскетбол',
  },
};
