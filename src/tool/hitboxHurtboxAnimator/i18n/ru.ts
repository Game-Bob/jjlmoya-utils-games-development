import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HitboxHurtboxAnimatorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'animator-hitbox-i-hurtbox-dlya-spraitov';
const title = 'Аниматор Hitbox и Hurtbox для Спрайтов';
const description = 'Рисуйте слои коллизий на каждом кадре спрайта, просматривайте анимацию с калькой (onion skin), редактируйте координаты в пикселях и экспортируйте JSON.';

const faq = [
  {
    question: 'В чем разница между хитбоксом (hitbox) и хертбоксом (hurtbox)?',
    answer: 'Хитбокс определяет область, наносящую удар, а хертбокс - область персонажа, получающую урон. Пушбоксы (pushbox) удерживают персонажей на расстоянии, а граббоксы (grabbox) задают радиус захватов.',
  },
  {
    question: 'Покидают ли мои файлы спрайтов браузер?',
    answer: 'Нет. Обработка и экспорт выполняются полностью в вашем браузере. Локально сохраняются только настройки редактора.',
  },
  {
    question: 'Какую систему координат использует экспорт в JSON?',
    answer: 'Каждый кадр измеряет координаты в пикселях от верхнего левого угла. Размеры ширины и высоты сохраняются как положительные числа с собственным опорным центром (pivot).',
  },
  {
    question: 'Можно ли редактировать спрайтшиты и отдельные кадры?',
    answer: 'Да. Вы можете загрузить спрайтшит PNG/WebP с указанием строк и столбцов или выбрать последовательность отдельных файлов.',
  },
  {
    question: 'Работает ли экспорт во всех игровых движках?',
    answer: 'Формат JSON является нейтральным. Он сохраняет прямоугольники кадров, точки опорного центра и геометрические слои без привязки к конкретному движку.',
  },
];

const howTo = [
  { name: 'Загрузите графику', text: 'Выберите спрайтшит PNG/WebP или последовательность файлов. Обработка выполняется локально.' },
  { name: 'Настройте кадры', text: 'Укажите число строк и столбцов и проверьте нарезку на временной ленте.' },
  { name: 'Нарисуйте слои коллизий', text: 'Выберите слой hitbox, hurtbox, pushbox или sensor и нарисуйте прямоугольник или круг.' },
  { name: 'Настройте движение', text: 'Редактируйте точные координаты, копируйте фигуры на соседние кадры и используйте кальку.' },
  { name: 'Экспортируйте проект', text: 'Скачайте нейтральный файл JSON и сравнительный PNG. Сохраняйте исходные файлы вместе с JSON.' },
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

export const content: ToolLocaleContent<HitboxHurtboxAnimatorUI> = {
  slug,
  title,
  description,
  ui: {
    onboarding: 'Загрузите анимацию, подтвердите нарезку кадров и нарисуйте зоны атаки, урона, физики или детекторов.',
    privacyNote: 'Локальный монтажный стол. Изображения не отправляются на сервер.',
    loadSprite: 'Поместить графику на монтажный стол',
    loadHint: 'Выберите спрайтшит или набор упорядоченных файлов PNG/WebP.',
    chooseImages: 'Выбрать файлы',
    slicingTitle: 'Нарезка кадров',
    rowsLabel: 'Строки',
    columnsLabel: 'Столбцы',
    applySlicing: 'Нарезать',
    playbackTitle: 'Просмотр движения',
    previousFrame: 'Предыдущий кадр',
    play: 'Воспроизвести',
    pause: 'Пауза',
    nextFrame: 'Следующий кадр',
    fpsLabel: 'Кадров в секунду',
    onionPrevious: 'Калька пред.',
    onionNext: 'Калька след.',
    layerTitle: 'Слои коллизий',
    typeHitbox: 'Hitbox',
    typeHurtbox: 'Hurtbox',
    typePushbox: 'Pushbox',
    typeGrabbox: 'Grabbox',
    typeSensor: 'Датчик',
    typeCustom: 'Свой слой',
    shapeRectangle: 'Прямоугольник',
    shapeCircle: 'Круг',
    drawShape: 'Рисовать',
    selectShape: 'Выбрать',
    stageLabel: 'Рабочая область',
    emptyStage: 'Загрузите графику, чтобы начать рисовать слои коллизий.',
    frameReadout: 'Кадр {current} из {total}',
    timelineTitle: 'Лента кадров',
    inspectorTitle: 'Инспектор формы',
    noSelection: 'Выберите фигуру для редактирования точных координат.',
    nameLabel: 'Имя слоя',
    xLabel: 'X в пикселях',
    yLabel: 'Y в пикселях',
    widthLabel: 'Ширина в пикселях',
    heightLabel: 'Высота в пикселях',
    radiusLabel: 'Радиус в пикселях',
    duplicateShape: 'Дублировать',
    mirrorShape: 'Отразить по горизонтали',
    deleteShape: 'Удалить фигуру',
    copyPrevious: 'Скопировать пред. кадр сюда',
    copyAll: 'Скопировать этот кадр во все',
    pivotTitle: 'Опорный центр (Pivot)',
    pivotXLabel: 'Центр X',
    pivotYLabel: 'Центр Y',
    exportTitle: 'Экспорт проекта',
    exportJson: 'Скачать JSON',
    importJson: 'Импортировать JSON',
    exportContactSheet: 'Скачать сравнительный лист',
    resetProject: 'Сбросить слои',
    undo: 'Отменить',
    redo: 'Повторить',
    statusReady: 'Монтажный стол готов.',
    statusImageLoaded: 'Загружено {count} файлов.',
    statusShapeCreated: 'Добавлена форма коллизии.',
    statusShapeUpdated: 'Форма обновлена.',
    statusImported: 'Проект импортирован.',
    statusExported: 'Экспорт подготовлен.',
    statusError: 'Не удалось прочитать файл.',
    framesBadge: '{count} кадров',
    shapesBadge: '{count} фигур',
    coverageBadge: '{percent}% покрытия',
    coordinatesNote: 'Координаты отсчитываются от верхнего левого угла каждого кадра (0,0).',
    localOnlyDisclosure: 'Файл JSON содержит имена файлов, точки центов и формы без графических пикселей.',
    limitationDisclosure: 'Слои задают геометрические зоны. Проверяйте их поведение в вашем игровом движке.',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Проектирование хитбоксов в согласовании с движением спрайта',
    },
    {
      type: 'paragraph',
      html: 'Настройка хитбоксов становится сложной, если каждый кадр рассматривается отдельно. Этот редактор объединяет просмотр спрайта, слои коллизий, кальку и временную ленту.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Выбор слоев коллизий по их игровой роли',
    },
    {
      type: 'table',
      headers: ['Слой', 'Основная роль', 'Контрольный вопрос'],
      rows: [
        ['Hitbox', 'Зона, наносящая урон или эффект', 'Появляется ли она только в активных кадрах?'],
        ['Hurtbox', 'Зона, получающая урон', 'Прилегает ли она к контуру тела без зазоров?'],
        ['Pushbox', 'Физическая коллизия между персонажами', 'Сохраняет ли она стабильность во избежание тряски?'],
        ['Grabbox', 'Радиус для выполнения захвата', 'Совпадает ли тайминг с визуальной анимацией?'],
        ['Sensor', 'Зона детекции событий', 'Понятно ли написано название слоя?'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Понимание системы координат кадров',
    },
    {
      type: 'paragraph',
      html: 'Экспортируемый проект измеряет X и Y от верхнего левого угла каждого кадра. Размеры задаются в положительных пикселях.',
    },
    {
      type: 'tip',
      title: 'Проверяйте полную последовательность анимации',
      html: 'Проигрывайте анимацию полностью после редактирования кадра, чтобы убедиться в плавности движения.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Используйте сравнительный лист в командной работе',
    },
    {
      type: 'paragraph',
      html: 'Сравнительный PNG-лист отображает все кадры и слои на одном изображении, что упрощает обсуждение разработчиками и художниками.',
    },
    { type: 'paragraph', html: 'Форма столкновения должна следовать силуэту и моменту действия. Проверьте начало, активную фазу и восстановление отдельно, а затем протестируйте дальность, приоритет, отбрасывание и сеть в реально интегрированном проекте.' },
    { type: 'paragraph', html: 'После экспорта отдельно проверьте кадры, где персонаж меняет направление или завершает атаку. Слишком большой hurtbox создает несправедливые попадания, а слишком маленький hitbox делает удар нечитабельным. Сопоставьте слои с движением спрайта до проверки поведения на реальных игровых сценариях.' },
  ],
  faq,
  bibliographyTitle: 'Ссылки по проектированию коллизий в играх',
  bibliography: bibliographyEntries,
  howTo,
  schemas: [softwareApplication, faqPage, howToSchema],
};
