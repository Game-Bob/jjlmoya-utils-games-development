import type { ToolLocaleContent } from '../../../types';
import type { ItchioGameTesterUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<ItchioGameTesterUI> = {
  slug: 'itchio-igra-tester',
  title: 'Itch.io Веб Инспектор Игр и Оптимизатор Разрешения в Реальном Времени',
  description: 'Загружайте HTML5 файлы или ZIP-архивы для тестирования viewport в реальном времени, исправления полос прокрутки, проверки сборок Godot и Unity WebGL и генерации настроек встраивания Itch.io.',
  ui: {
    dropzoneTitle: 'Перетащите сборку или ZIP-архив сюда',
    dropzoneHint: 'Перетащите файл .ZIP, экспортированную папку или HTML5 файлы сборки в эту область для немедленной проверки.',
    chooseFiles: 'Выбрать файл игры или папку',
    engineDetected: 'Обнаруженный движок',
    compatibilityScore: 'Оценка совместимости с Itch.io',
    viewportWidth: 'Ширина viewport (px)',
    viewportHeight: 'Высота viewport (px)',
    aspectRatio: 'Соотношение сторон',
    lockAspectRatio: 'Зафиксировать соотношение сторон',
    presets: 'Быстрые пресеты разрешений',
    fitTest: 'Тест макета и полос прокрутки в реальном времени',
    copySettings: 'Скопировать настройки встраивания Itch.io',
    copied: 'Скопировано в буфер обмена',
    embedMode: 'Режим встраивания',
    scrollbars: 'Включить полосы прокрутки',
    noIssuesFound: 'Все проверки пройдены успешно. Пакет на 100% соответствует стандартам Itch.io.',
    filesInspected: 'Проверено файлов',
    resetViewport: 'Сбросить viewport',
    autoScaleToggle: 'Автоматически масштабировать viewport по ширине экрана',
    scaledNotice: 'Viewport превышает ширину экрана. Применён искусственный отзум, чтобы весь холст был виден. Отключите автомасштабирование, чтобы увидеть реальный макет.',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Руководство по форматированию HTML5 экспортов для Itch.io'
    },
    {
      type: 'paragraph',
      html: 'Публикация HTML5 и WebGL игр на Itch.io требует точной настройки размеров viewport, структуры архивных файлов и заголовков безопасности cross-origin.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Стандартное соотношение сторон', value: '16:9 Горизонтально' },
        { label: 'Классическое разрешение Itch', value: '960 x 540 px' },
        { label: 'Обязательный файл входа', value: 'index.html в корне' },
        { label: 'Требование Godot 4', value: 'Заголовки COOP / COEP' }
      ]
    },
    {
      type: 'tip',
      html: 'При встраивании WebGL игры 1280x720 на Itch.io установите размеры viewport встраивания точно 1280x720 с включённым "Embed in page".'
    }
  ],
  faq: [
    {
      question: 'Почему моя игра Godot 4 показывает чёрный экран на Itch.io?',
      answer: 'Веб-экспорты Godot 4 используют многопоточность WebAssembly, требующую поддержки SharedArrayBuffer. Включите "SharedArrayBuffer support" в настройках фрейма вашей игры на Itch.io.'
    }
  ],
  howTo: [
    { name: 'Загрузить файлы игры или ZIP', text: 'Перетащите ZIP-архив HTML5 экспорта или выберите директорию сборки с index.html.' },
    { name: 'Просмотреть отчёт совместимости', text: 'Проверьте автоматический отчёт аудита: размещение index.html в корне, предупреждения о регистре и определение движка.' },
    { name: 'Изменить viewport в реальном времени', text: 'Используйте слайдеры разрешения и пресеты соотношения сторон для тестирования встраивания iframe без полос прокрутки.' },
    { name: 'Скопировать настройки Itch.io', text: 'Нажмите Копировать настройки, чтобы получить точные значения ширины и высоты для страницы публикации на Itch.io.' }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Itch.io Веб Инспектор Игр',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Почему моя игра Godot 4 показывает чёрный экран на Itch.io?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Веб-экспорты Godot 4 используют многопоточность WebAssembly, требующую поддержки SharedArrayBuffer. Включите "SharedArrayBuffer support" в настройках фрейма вашей игры на Itch.io.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Как проверить и протестировать viewport игры на Itch.io',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Загрузить файлы игры или ZIP',
          text: 'Перетащите ZIP-архив HTML5 экспорта или выберите директорию сборки с index.html.'
        },
        {
          '@type': 'HowToStep',
          name: 'Изменить viewport в реальном времени',
          text: 'Используйте слайдеры разрешения и пресеты соотношения сторон для тестирования встраивания iframe без полос прокрутки.'
        }
      ]
    }
  ],
  bibliography: bibliographyEntries
};
