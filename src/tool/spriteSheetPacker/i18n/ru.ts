import type { ToolLocaleContent } from '../../../types';
import type { SpriteSheetPackerUI } from '../ui';

export const content: ToolLocaleContent<SpriteSheetPackerUI> = {
  slug: 'upakovshchik-i-ekstraktor-sprajt-shitov',
  title: 'Упаковщик и Экстрактор Спрайт Шитов',
  description:
    'Оптимизируйте производительность 2D игр объединяя отдельные кадры анимации в атласы текстур или извлекая спрайты из готовых листов.',
  ui: {
    packerTab: 'Студия Упаковки',
    extractorTab: 'Экстрактор Спрайтов',
    dropZoneTitle: 'Перетащите Кадры Сюда',
    dropZoneSubtitle: 'Загрузите изображения PNG или WebP для создания оптимизированного атласа текстур',
    selectFilesButton: 'Выбрать Файлы Изображений',
    clearAllButton: 'Очистить Рабочую Область',
    downloadZipButton: 'Скачать Архив (ZIP)',
    copyJsonButton: 'Копировать JSON Атласа',
    downloadSheetPngButton: 'Скачать Текстуру PNG',
    paddingLabel: 'Отступ Кадров (px)',
    borderExtrusionLabel: 'Экструзия Краев (px)',
    maxTextureSizeLabel: 'Максимальный Размер Текстуры',
    powerOfTwoLabel: 'Степень Двойки (POT)',
    exportFormatLabel: 'Формат Игрового Движка',
    presetPixelArt: 'Пресет Пиксель Арт 16x16',
    presetHdUi: 'Пресет HD UI Atlas 1024',
    presetMobile: 'Пресет Mobile WebGL 2048',
    formatGenericHash: 'Общий JSON (Hash)',
    formatGenericArray: 'Общий JSON (Array)',
    formatUnity: 'Движок Unity 2D',
    formatGodot: 'Движок Godot 2D',
    formatPhaser: 'Движок Phaser / PixiJS',
    formatCss: 'CSS Web Frontend',
    previewTitle: 'Предпросмотр Атласа Текстур',
    efficiencyBadge: 'Эффективность Упаковки',
    drawCallsBadge: 'Сокращение Draw Calls',
    totalFramesBadge: 'Упаковано Кадров',
    textureSizeBadge: 'Разрешение Атласа',
    flipbookTitle: 'Анимационный Плеер Флипбук',
    flipbookFpsLabel: 'Скорость Анимации (FPS)',
    playAnimation: 'Запустить',
    pauseAnimation: 'Пауза',
    frameWidthLabel: 'Ширина Кадра (px)',
    frameHeightLabel: 'Высота Кадра (px)',
    marginLabel: 'Внешний Отступ (px)',
    spacingLabel: 'Шаг Сетки (px)',
    extractedCountLabel: 'Извлечено Спрайтов',
    codeSnippetTitle: 'Код Интеграции с Движком',
    copySnippetButton: 'Копировать Код',
    copiedToast: 'Скопировано в Буфер Обмена',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Оптимизация Вызовов Отрисовки Draw Calls и Батчинг GPU в 2D Движках',
    },
    {
      type: 'paragraph',
      html: 'Объединение отдельных изображений кадров в единый атлас текстур уменьшает количество команд отрисовки draw calls отправляемых процессором на видеокарту.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '95%', label: 'Сокращение Draw Calls' },
        { value: '4x', label: 'Ускорение Обработки GPU' },
        { value: '60 FPS', label: 'Стабильная Цель на Мобильных' },
        { value: '100%', label: 'Локальная Обработка в Браузере' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Сравнение Отдельных Файлов и Упакованных Атласов Текстур',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Отдельные Файлы Кадров',
          description: 'Отдельно сохраненные файлы PNG или WebP',
          points: [
            'Генерирует отдельный вызов отрисовки для каждого кадра на экране',
            'Вызывает частые переключения контекста на видеокарте GPU',
            'Увеличивает количество HTTP запросов в браузерных играх',
            'Падение производительности на мобильных устройствах',
          ],
        },
        {
          title: 'Упакованный Атлас Текстур',
          description: 'Единое PNG изображение с JSON метаданными',
          points: [
            'Объединяет сотни спрайтов в один вызов отрисовки GPU',
            'Максимизирует пропускную способность видеопамяти',
            'Уменьшает количество сетевых запросов',
            'Обеспечивает плавные 60 FPS на любых платформах',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Математика Экструзии Краев и Субпиксельное Движение',
    },
    {
      type: 'paragraph',
      html: 'Применение экструзии краев от 1 до 2 пикселей дублирует крайние пиксели кадров наружу исключая появление видимых швов при движении камеры.',
    },
    {
      type: 'tip',
      title: 'Стратегия Экструзии Краев',
      html: 'Используйте экструзию краев для полного устранения артефактов на границах спрайтов при движении камеры.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Рекомендуемые Размеры Текстур для Различных Платформ',
    },
    {
      type: 'table',
      headers: ['Целевая Платформа', 'Рекомендуемый Макс Размер', 'Требование Степени 2', 'Профиль Памяти'],
      rows: [
        ['Мобильные Браузеры', '2048 x 2048 px', 'Обязательно для WebGL 1.0', 'Низкая Пропускная Способность'],
        ['ПК / Консоли', '4096 x 4096 px', 'Рекомендуется', 'Высокая Емкость GPU'],
        ['Ретро Портативные Консоли', '1024 x 1024 px', 'Строгое Требование', 'Строгие Лимиты VRAM'],
      ],
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Гарантирует 100% совместимость со старыми драйверами и WebGL 1.0',
          con: 'Может оставлять неиспользуемое прозрачное пространство при малом числе спрайтов',
        },
        {
          pro: 'Поддерживает автоматическую генерацию мипмапов',
          con: 'Требует точной настройки отступов при нестандартных размерах',
        },
        {
          pro: 'Оптимизирует распределение видеопамяти VRAM на GPU',
          con: 'Незначительно увеличивает начальную площадь текстуры',
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Ключевые Термины Упаковки Спрайтов',
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Draw Call',
          definition: 'Команда от процессора видеокарте на отрисовку геометрии и текстур.',
        },
        {
          term: 'Bin Packing',
          definition: 'Алгоритм оптимальной упаковки прямоугольников разного размера в минимальную область.',
        },
        {
          term: 'Border Extrusion',
          definition: 'Дублирование крайних пикселей наружу для предотвращения визуальных швов при движении.',
        },
        {
          term: 'Flipbook Animation',
          definition: 'Быстрое последовательное воспроизведение кадров для имитации движения в 2D играх.',
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Чек Лист Оптимизации Производительности',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Правила Разработки',
      html: 'Группируйте анимации в общие атласы и используйте размеры степеней двойки для WebGL сборки.',
    },
  ],
  faq: [
    {
      question: 'Что такое спрайт шит и почему он важен для 2D игр?',
      answer:
        'Спрайт шит это единое изображение содержащее множество кадров анимации. Это позволяет движку рисовать объекты за один вызов GPU.',
    },
    {
      question: 'Как работает локальная обработка в этом инструменте?',
      answer:
        'Все операции выполняются локально в вашем браузере через HTML5 Canvas API без отправки файлов на сервера.',
    },
    {
      question: 'Могу ли я нарезать готовый спрайт шит на отдельные кадры?',
      answer:
        'Да. Переключитесь в режим Экстрактора, загрузите лист и настройте параметры сетки.',
    },
  ],
  howTo: [
    {
      name: 'Загрузите Кадры',
      text: 'Перетащите файлы PNG или WebP в рабочую область.',
    },
    {
      name: 'Настройте Параметры',
      text: 'Установите отступы, экструзию краев и формат игрового движка.',
    },
    {
      name: 'Проверьте и Скачайте',
      text: 'Просмотрите анимацию в плеере флипбук и скачайте ZIP архив.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Упаковщик и Экстрактор Спрайт Шитов',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Что такое спрайт шит и почему он важен для 2D игр?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Спрайт шит это единое изображение содержащее множество кадров анимации.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Как упаковать и нарезать спрайт шиты',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Загрузите Кадры',
          text: 'Перетащите файлы PNG или WebP в рабочую область.',
        },
      ],
    },
  ],
  bibliography: [
    {
      name: 'Godot Engine 2D Sprite Sheets Documentation',
      url: 'https://docs.godotengine.org/en/stable/tutorials/2d/2d_sprite_animation.html',
    },
    {
      name: 'Unity Sprite Atlas Manual',
      url: 'https://docs.unity3d.com/Manual/class-SpriteAtlas.html',
    },
  ],
};
