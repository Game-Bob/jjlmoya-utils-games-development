import type { ToolLocaleContent } from '../../../types';
import type { SteamBbcodeTranslatorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<SteamBbcodeTranslatorUI> = {
  slug: 'preobrazovatel-bbcode-steam',
  title: 'Конвертер Steam BBCode, Markdown и HTML',
  description: 'Двусторонний конвертер Steam BBCode, Markdown и HTML с автоматическим определением синтаксиса и живым предпросмотром.',
  ui: {
    editorLabel: 'Вставьте исходный текст',
    editorHint: 'BBCode, Markdown или HTML определяются автоматически при вводе.',
    detectedLabel: 'Определен синтаксис',
    detectedEmpty: 'Ожидание текста',
    bbcode: 'Steam BBCode',
    markdown: 'Markdown',
    html: 'HTML',
    clear: 'Очистить',
    copy: 'Скопировать результат',
    copied: 'Скопировано в буфер обмена',
    characters: 'Символы',
    blocks: 'Блоки',
    privacyNote: 'Работает в браузере. Данные не отправляются.',
    persistenceNote: 'Черновик сохранен локально',
    previewLabel: 'Предпросмотр',
    previewEmpty: 'Форматированный результат появится здесь.'
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Зачем нужен конвертер разметки для страниц Steam'
    },
    {
      type: 'paragraph',
      html: 'Описание игры в Steamworks использует BBCode. Пресс-киты и сайты требуют Markdown или HTML. Данный инструмент автоматически генерирует остальные форматы.'
    },
    {
      type: 'title',
      level: 2,
      text: 'Поддерживаемый синтаксис'
    },
    {
      type: 'paragraph',
      html: 'Поддерживаются заголовки, жирный текст, курсив, ссылки, списки, цитаты и спойлеры.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Форматы ввода', value: '3' },
        { label: 'Выходных формата', value: '2' },
        { label: 'Вложенные списки', value: 'Да' },
        { label: 'Обработка', value: 'В браузере' }
      ]
    },
    {
      type: 'title',
      level: 2,
      text: 'Сохранение структуры вложенных списков'
    },
    {
      type: 'paragraph',
      html: 'Разбор в виде дерева гарантирует сохранение вложенности подпунктов списков.'
    },
    {
      type: 'table',
      headers: ['Steam BBCode', 'Markdown', 'HTML'],
      rows: [
        ['[h1]Заголовок[/h1]', '# Заголовок', '&lt;h1&gt;Заголовок&lt;/h1&gt;'],
        ['[b]Важно[/b]', '**Важно**', '&lt;strong&gt;Важно&lt;/strong&gt;'],
        ['[i]Заметка[/i]', '*Заметка*', '&lt;em&gt;Заметка&lt;/em&gt;'],
        ['[url=https://example.com]Ссылка[/url]', '[Ссылка](https://example.com)', '&lt;a href="https://example.com"&gt;Ссылка&lt;/a&gt;'],
        ['[list][*]Один[*]Два[/list]', '- Один\n- Два', '&lt;ul&gt;&lt;li&gt;Один&lt;/li&gt;&lt;li&gt;Два&lt;/li&gt;&lt;/ul&gt;']
      ]
    },
    {
      type: 'title',
      level: 2,
      text: 'Различия Markdown и HTML'
    },
    {
      type: 'paragraph',
      html: 'Если Markdown не поддерживает подчеркивание, инструмент использует вставки HTML.'
    },
    {
      type: 'tip',
      title: 'Проверка перед публикацией',
      html: 'Сравните результат в окне предпросмотра с исходным документом перед добавлением в Steam.'
    },
    {
      type: 'title',
      level: 2,
      text: 'Безопасность данных'
    },
    {
      type: 'paragraph',
      html: 'Все операции выполняются исключительно локально в вашем браузере.'
    },
    {
      type: 'title',
      level: 2,
      text: 'Ограничения'
    },
    {
      type: 'proscons',
      title: 'Особенности',
      items: [
        {
          pro: 'Структурированная обработка списков.',
          con: 'Нестандартные теги требуют ручной проверки.'
        }
      ]
    },
    {
      type: 'title',
      level: 2,
      text: 'Глоссарий'
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'BBCode',
          definition: 'Язык разметки с квадратными скобками для Steam.'
        },
        {
          term: 'Markdown',
          definition: 'Простой текстовый формат разметки.'
        },
        {
          term: 'HTML',
          definition: 'Стандартный язык разметки веб-страниц.'
        }
      ]
    }
  ],
  faqTitle: 'Часто задаваемые вопросы',
  faq: [
    {
      question: 'Отправляются ли данные на сервер?',
      answer: 'Нет. Конвертация выполняется полностью локально в браузере.'
    },
    {
      question: 'Поддерживаются ли вложенные списки?',
      answer: 'Да. Структура анализируется перед генерированием кода.'
    }
  ],
  howTo: [
    {
      name: 'Вставьте текст',
      text: 'Вставьте Steam BBCode, Markdown или HTML.'
    },
    {
      name: 'Автоматическая конвертация',
      text: 'Два других формата сформируются автоматически.'
    }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Конвертер Steam BBCode, Markdown и HTML',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'RUB' }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Отправляются ли данные на сервер?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Нет. Конвертация выполняется полностью локально в браузере.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Как конвертировать Steam BBCode, Markdown и HTML',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Вставьте текст',
          text: 'Вставьте Steam BBCode, Markdown или HTML.'
        }
      ]
    }
  ],
  bibliography: bibliographyEntries
};
