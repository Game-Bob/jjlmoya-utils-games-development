import type { ToolLocaleContent } from '../../../types';
import type { LocalizationSanitizerUI } from '../ui';

export const content: ToolLocaleContent<LocalizationSanitizerUI> = {
  slug: 'ochistka-failov-lokalizacii-godot-unity',
  title: 'Инструмент очистки файлов локализации CSV и JSON для Godot и Unity',
  description: 'Проверяйте файлы переводов CSV и JSON на наличие пустых ячеек, дубликатов ключей и поврежденных строк с последующим экспортом чистой копии.',
  ui: {
    csvTab: 'Файл CSV',
    jsonTab: 'Файл JSON',
    dropTitle: 'Перетащите файл перевода сюда',
    dropSubtitle: 'Проверяйте структуру в браузере с сохранением исходного файла на устройстве.',
    browseButton: 'Обзор файлов',
    sampleButton: 'Загрузить пример',
    clearButton: 'Очистить',
    inputLabel: 'Входной файл перевода',
    formatLabel: 'Формат',
    healthLabel: 'Состояние файла',
    readyStatus: 'Готов к импорту',
    reviewStatus: 'Требуется проверка',
    emptyCellsLabel: 'Пустые ячейки',
    duplicateKeysLabel: 'Дубликаты ключей',
    malformedRowsLabel: 'Поврежденные строки',
    cleanRowsLabel: 'Корректные строки',
    issueListTitle: 'Найденные проблемы',
    noIssues: 'Проблем не обнаружено.',
    previewTitle: 'Предпросмотр перевода',
    previewSubtitle: 'Первые строки показывают нормализованную структуру для экспорта.',
    exportTitle: 'Экспорт очищенного файла',
    exportSubtitle: 'Дубликаты удаляются, недостающие столбцы заполняются, спецсимволы экранируются.',
    downloadButton: 'Скачать чистый файл',
    copyButton: 'Копировать результат',
    copiedMessage: 'Результат скопирован в буфер обмена.',
    emptyIssue: 'Пустая ячейка перевода',
    duplicateIssue: 'Дублирующийся ключ удален',
    malformedIssue: 'Несоответствие столбцов или кавычек',
    parseIssue: 'Не удалось прочитать файл.',
    rowLabel: 'Строка',
    columnLabel: 'Столбец',
    keyLabel: 'Ключ',
    sampleFileName: 'lokalizaciya-primer.csv',
    privacyNote: 'Локальная обработка в браузере',
    waitingTitle: 'Ожидание файла',
    waitingSubtitle: 'Перетащите файл CSV или JSON для начала проверки.',
    fileTypeNote: 'UTF-8 CSV или структурированный JSON',
  },
  seo: [
    { type: 'title', level: 2, text: 'Почему файлы локализации вызывают ошибки при импорте в движок' },
    {
      type: 'paragraph',
      html: 'Таблицы переводов легко редактировать, но в них легко допустить ошибку. Запятая внутри текста или пропущенная кавычка могут сместить столбцы языков.',
    },
    {
      type: 'paragraph',
      html: 'Импортер CSV в Godot и пакет Unity Localization требуют строгой структуры. Этот инструмент проверяет файлы перед импортом.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'CSV', label: 'Проверка запятых' },
        { value: 'JSON', label: 'Поддержка массивов и объектов' },
        { value: '0 отправка', label: '100% локально' },
        { value: '1 клик', label: 'Чистый экспорт' },
      ],
    },
    { type: 'title', level: 2, text: 'Что проверяет инструмент' },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Обнаружение перед импортом',
          description: 'Ошибки, незаметные в больших файлах',
          points: ['Пустые ячейки перевода', 'Повторяющиеся ключи', 'Строки с неверным числом столбцов', 'Некорректный синтаксис кавычек'],
        },
        {
          title: 'Нормализация при экспорте',
          description: 'Безопасные автоматические исправления',
          points: ['Заполнение недостающих столбцов', 'Объединение лишних полей в последний столбец', 'Сохранение первого вхождения ключа', 'Исходный файл не изменяется'],
        },
      ],
    },
    { type: 'title', level: 2, text: 'Как проверить очищенный файл' },
    {
      type: 'paragraph',
      html: 'Структурная очистка не заменяет языковую вычитку. Используйте список замечаний для заполнения пропущенных переводов.',
    },
    {
      type: 'table',
      headers: ['Замечание', 'Значение', 'Рекомендуемое действие'],
      rows: [
        ['Пустая ячейка', 'Столбец языка не содержит текста', 'Перевести или подтвердить намеренность'],
        ['Дубликат ключа', 'Несколько строк используют один ключ', 'Сравнить строки и оставить первую'],
        ['Поврежденная строка', 'Число столбцов не совпадает с заголовком', 'Проверить объединенный столбец'],
        ['Ошибка чтения', 'Некорректный JSON', 'Исправить синтаксис перед импортом'],
      ],
    },
    { type: 'title', level: 2, text: 'Правила CSV для видеоигр' },
    {
      type: 'paragraph',
      html: 'Текст, содержащий запятые или переносы строк, должен заключаться в двойные кавычки.',
    },
    {
      type: 'tip',
      title: 'Сохраняйте оригинал',
      html: 'Всегда сохраняйте исходный файл от переводчика для сравнения.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Ключ перевода', definition: 'Уникальный идентификатор, используемый в коде игры.' },
        { term: 'Поле CSV', definition: 'Отдельное значение между разделителями.' },
        { term: 'Экранирование', definition: 'Использование кавычек для сохранения знаков препинания.' },
        { term: 'Локаль', definition: 'Код языка и региона, например ru, en или ja.' },
      ],
    },
  ],
  faq: [
    {
      question: 'Передаются ли файлы на сервер?',
      answer: 'Нет, вся обработка происходит исключительно локально в браузере.',
    },
    {
      question: 'Что происходит при наличии лишних запятых?',
      answer: 'Строка помечается как поврежденная, а лишние поля объединяются в последний столбец.',
    },
    {
      question: 'Как удаляются дубликаты ключей?',
      answer: 'Сохраняется первое вхождение ключа, последующие игнорируются.',
    },
    {
      question: 'Проверяется ли качество перевода?',
      answer: 'Нет, проверяется только структура файла и наличие пустых ячеек.',
    },
  ],
  howTo: [
    { name: 'Выбрать формат', text: 'Выберите CSV или JSON.' },
    { name: 'Проверить замечания', text: 'Загрузите файл и просмотрите список ошибок.' },
    { name: 'Экспортировать и протестировать', text: 'Скачайте чистый файл и импортируйте его в движок.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Инструмент очистки файлов локализации CSV и JSON для Godot и Unity',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'RUB' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [{
        '@type': 'Question',
        name: 'Передаются ли файлы на сервер?',
        acceptedAnswer: { '@type': 'Answer', text: 'Нет, вся обработка происходит исключительно локально в браузере.' },
      }],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Как очистить файл локализации игры',
      step: [
        { '@type': 'HowToStep', name: 'Выбрать формат', text: 'Выберите CSV или JSON.' },
        { '@type': 'HowToStep', name: 'Проверить замечания', text: 'Загрузите файл и просмотрите список ошибок.' },
        { '@type': 'HowToStep', name: 'Экспортировать и протестировать', text: 'Скачайте чистый файл и импортируйте его в движок.' },
      ],
    },
  ],
  bibliography: [
    { name: 'Документация Godot ResourceImporterCSVTranslation', url: 'https://docs.godotengine.org/en/stable/classes/class_resourceimportercsvtranslation.html' },
    { name: 'Документация Unity Localization CSV Import', url: 'https://docs.unity3d.com/Packages/com.unity.localization@1.5/manual/CSV.html' },
    { name: 'Спецификация RFC 4180 CSV', url: 'https://datatracker.ietf.org/doc/html/rfc4180' },
  ],
};
