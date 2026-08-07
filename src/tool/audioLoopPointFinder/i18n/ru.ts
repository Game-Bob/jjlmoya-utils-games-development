import type { ToolLocaleContent } from '../../../types';
import type { AudioLoopPointFinderUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<AudioLoopPointFinderUI> = {
  slug: 'poisk-tochek-zatretlivaniya-audio-igri',
  title: 'Поиск Точек Зацикливания Аудио и Инжектор Метаданных',
  description: 'Находите точные точки зацикливания аудио, привязывайте к пересечениям нуля и экспортируйте файлы WAV с метаданными LOOPSTART и LOOPEND.',
  ui: {
    title: 'Поиск Точек Зацикливания Аудио для Игр',
    subtitle: 'Интерактивный анализатор формы волны, детектор пересечения нуля и редактор метаданных WAV',
    dropzoneTitle: 'Перетащите аудиофайл сюда или нажмите для выбора',
    dropzoneSubtitle: 'Поддерживает файлы WAV, OGG, MP3 и FLAC',
    dropzoneButton: 'Выбрать Аудиофайл',
    audioInfoTitle: 'Свойства Аудиодорожки',
    durationLabel: 'Длительность',
    sampleRateLabel: 'Частота Дискретизации',
    channelsLabel: 'Аудиоканалы',
    totalSamplesLabel: 'Всего Сэмплов',
    loopControlsTitle: 'Настройка Области Петли',
    loopStartLabel: 'Маркер Начала Петли',
    loopEndLabel: 'Маркер Конца Петли',
    loopDurationLabel: 'Длительность Петли',
    zeroCrossingLabel: 'Привязка к Пересечению Нуля',
    snapZeroCrossingButton: 'Привязать Маркеры к Ближайшему Нулю',
    playLoopButton: 'Предпросмотр Бесшовной Петли',
    pauseLoopButton: 'Пауза',
    stopLoopButton: 'Остановить Воспроизведение',
    exportWavButton: 'Экспортировать WAV с Метаданными',
    sampleUnitLabel: 'Сэмплы',
    secondUnitLabel: 'Секунды',
    zoomLabel: 'Масштаб Волны',
    zoomInButton: 'Увеличить',
    zoomOutButton: 'Уменьшить',
    resetZoomButton: 'Сбросить Вид',
    noFileSelected: 'Аудиофайл еще не загружен',
    invalidAudioFile: 'Не удалось декодировать аудиофайл',
    presetsTitle: 'Быстрые Пресеты',
    presetFullTrack: 'Зациклить Весь Трек',
    presetIntroCut: 'Пропустить 10% Интро',
    presetMiddleLoop: 'Центральные 50%',
    statusLooping: 'Воспроизведение Петли Активно',
    statusPaused: 'Воспроизведение На Паузе',
    statusReady: 'Аудио Загружено и Готово',
    statusLoaded: 'Аудиодорожка успешно загружена',
    statusDecodeError: 'Ошибка при декодировании аудиофайла',
    statusSnapped: 'Маркеры привязаны к точкам пересечения нуля',
    statusStopped: 'Воспроизведение остановлено',
    statusExported: 'Файл WAV экспортирован со встроенными тегами петли',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Бесшовное Зацикливание Аудио в Играх и Выравнивание Сэмплов',
    },
    {
      type: 'paragraph',
      html: 'Непрерывное воспроизведение фоновой музыки в видеоиграх требует точного выравнивания сэмплов на границах петли. Современные игровые движки, такие как Unity, Godot, Unreal Engine, FMOD и Wwise, используют встроенные метаданные LOOPSTART и LOOPEND.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Точность Дискретизации', value: '44.1 kHz / 48 kHz' },
        { label: 'Порог Пересечения Нуля', value: 'Амплитуда 0.00' },
        { label: 'Стандарт Метаданных', value: 'RIFF smpl и INFO' },
        { label: 'Устранение Щелчков', value: '100% Фаза Совпадает' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Стратегия Пересечения Нуля',
    },
    {
      type: 'tip',
      title: 'Устранение Щелчков и Помех',
      html: 'Всегда выравнивайте маркеры начала и конца петли в точках положительного пересечения нуля. Это предотвращает резкие скачки амплитуды и щелчки динамиков.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Сравнительная Таблица Совместимости',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Маркер Блока RIFF smpl',
          description: 'Стандартные бинарные метаданные в заголовке WAV',
          points: [
            'Нативная поддержка в Godot, FMOD, Wwise и GameMaker',
            'Точность до отдельного сэмпла без временного дрейфа',
            'Сохраняет метки петли внутри самого WAV файла',
            'Устраняет акустические щелчки при привязке к нулю',
          ],
        },
        {
          title: 'Ручное Разделение Аудио',
          description: 'Нарезка интро и петли на отдельные файлы',
          points: [
            'Используется в простых плеерах без чтения метаданных',
            'Подвержено неточностям и паузам в миллисекундах',
            'Требует управления несколькими файлами в проекте',
            'Высокий риск щелчков на переходах',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Таблица Частот Дискретизации',
    },
    {
      type: 'table',
      headers: ['Частота Дискретизации', 'Сэмплов в Секунду', 'Рекомендуемое Применение', 'Временное Разрешение'],
      rows: [
        ['44,100 Hz', '44,100', 'Стандартное CD Качество Музыки', '0.0226 мс на сэмпл'],
        ['48,000 Hz', '48,000', 'Современные Игры для ПК и Консолей', '0.0208 мс на сэмпл'],
        ['96,000 Hz', '96,000', 'Мастер Аудио Высокой Четкости', '0.0104 мс на сэмпл'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Автоматическая Инжекция Метаданных',
    },
    {
      type: 'paragraph',
      html: 'При экспорте аудиодорожек из этой утилиты новые структуры метаданных внедряются непосредственно в заголовок RIFF выходного файла WAV.',
    },
  ],
  faqTitle: 'Часто Задаваемые Вопросы',
  faq: [
    {
      question: 'Что такое теги метаданных LOOPSTART и LOOPEND?',
      answer: 'LOOPSTART и LOOPEND: это поля метаданных, измеряемые в абсолютном количестве сэмплов.',
    },
    {
      question: 'Почему возникают щелчки в точках зацикливания?',
      answer: 'Щелчки возникают, когда форма волны в конце не совпадает по амплитуде или фазе с началом.',
    },
    {
      question: 'Загружается ли мой оригинальный аудиофайл на сервер?',
      answer: 'Нет. Вся обработка происходит локально в памяти вашего браузера.',
    },
  ],
  howTo: [
    {
      name: 'Загрузить Аудиодорожку',
      text: 'Перетащите музыкальный файл или выберите файл WAV, OGG, MP3 или FLAC.',
    },
    {
      name: 'Установить Маркеры',
      text: 'Настройте начало и конец петли на форме волны.',
    },
    {
      name: 'Привязать к Нулю',
      text: 'Нажмите кнопку привязки к точке пересечения нуля.',
    },
    {
      name: 'Проверить и Экспортировать',
      text: 'Прослушайте бесшовную петлю и экспортируйте файл WAV с метаданными.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Поиск Точек Зацикливания Аудио для Игр',
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'RUB',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Что такое теги метаданных LOOPSTART и LOOPEND?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'LOOPSTART и LOOPEND: это поля метаданных, измеряемые в количестве сэмплов.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Как найти и внедрить точки зацикливания аудио',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Загрузить Аудиодорожку',
          text: 'Перетащите музыкальный файл или выберите аудиофайл.',
        },
      ],
    },
  ],
  bibliographyTitle: 'Ссылки и Литература',
  bibliography: bibliographyEntries,
};
