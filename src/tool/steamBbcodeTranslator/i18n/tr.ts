import type { ToolLocaleContent } from '../../../types';
import type { SteamBbcodeTranslatorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<SteamBbcodeTranslatorUI> = {
  slug: 'steam-bbcode-donusturucu',
  title: 'Steam BBCode, Markdown ve HTML Donusturucu',
  description: 'Steam BBCode, Markdown ve HTML formatlari arasinda otomatik sozvarligi tespiti ve canli onizleme ile cift yonlu donusturme yapin.',
  ui: {
    editorLabel: 'Bicimlendirilmis metninizi yapistirin',
    editorHint: 'BBCode, Markdown veya HTML siz yazarken otomatik olarak algilanir.',
    detectedLabel: 'Algilanan',
    detectedEmpty: 'Metin bekleniyor',
    bbcode: 'Steam BBCode',
    markdown: 'Markdown',
    html: 'HTML',
    clear: 'Temizle',
    copy: 'Sonucu kopyala',
    copied: 'Panoya kopyalandi',
    characters: 'Karakterler',
    blocks: 'Bloklar',
    privacyNote: 'Tarayicinizda calisir. Hicbir sey yuklenmez.',
    persistenceNote: 'Son taslak yerel olarak kaydedildi',
    previewLabel: 'Onizleme',
    previewEmpty: 'Bicimlendirilmis onizlemeniz burada gorunur.'
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Magaza aciklamalari neden donusturucuye ihtiyac duyar'
    },
    {
      type: 'paragraph',
      html: 'Steam magaza aciklamalari BBCode kullanir. Basin kitleri veya dokuman siteleri Markdown veya HTML gerektirir. Bu arac formatlar arasinda otomatik donusum saglar.'
    },
    {
      type: 'title',
      level: 2,
      text: 'Desteklenen etiketler'
    },
    {
      type: 'paragraph',
      html: 'Basliklar, kalin, italik, baglantilar, listeler, alintilar ve spoiler etiketleri desteklenir.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Girdi formati', value: '3' },
        { label: 'Cikti formati', value: '2' },
        { label: 'Liste derinligi', value: 'Ic ice' },
        { label: 'Islem', value: 'Sadece tarayici' }
      ]
    },
    {
      type: 'title',
      level: 2,
      text: 'Ic ice listelerin korunmasi'
    },
    {
      type: 'paragraph',
      html: 'Hiyerarsik yapi agaci alt listelerin ana oge icinde kalmasini saglar.'
    },
    {
      type: 'table',
      headers: ['Steam BBCode', 'Markdown', 'HTML'],
      rows: [
        ['[h1]Baslik[/h1]', '# Baslik', '&lt;h1&gt;Baslik&lt;/h1&gt;'],
        ['[b]Onemli[/b]', '**Onemli**', '&lt;strong&gt;Onemli&lt;/strong&gt;'],
        ['[i]Not[/i]', '*Not*', '&lt;em&gt;Not&lt;/em&gt;'],
        ['[url=https://example.com]Baglanti[/url]', '[Baglanti](https://example.com)', '&lt;a href="https://example.com"&gt;Baglanti&lt;/a&gt;'],
        ['[list][*]Bir[*]Iki[/list]', '- Bir\n- Iki', '&lt;ul&gt;&lt;li&gt;Bir&lt;/li&gt;&lt;li&gt;Iki&lt;/li&gt;&lt;/ul&gt;']
      ]
    },
    {
      type: 'title',
      level: 2,
      text: 'Markdown ve HTML farkliliklari'
    },
    {
      type: 'paragraph',
      html: 'Markdown alti cizili metni yerel olarak desteklemediginde HTML etiketleri kullanilir.'
    },
    {
      type: 'tip',
      title: 'Yayinlama oncesi kontrol',
      html: 'Yayinlamadan once onizleme ekranindaki ciktilari kaynak belgenizle karsilastirin.'
    },
    {
      type: 'title',
      level: 2,
      text: 'Veri gizliligi'
    },
    {
      type: 'paragraph',
      html: 'Tum islemler tamamen yerel olarak tarayicinizda gerceklesir.'
    },
    {
      type: 'title',
      level: 2,
      text: 'Sinirlamalar'
    },
    {
      type: 'proscons',
      title: 'Dikkat edilecekler',
      items: [
        {
          pro: 'Liste yapisi korunur.',
          con: 'Ozel etiketler manuel kontrol gerektirebilir.'
        }
      ]
    },
    {
      type: 'title',
      level: 2,
      text: 'Terimler sozlugu'
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'BBCode',
          definition: 'Steam tarafindan kullanilan kosebenti etiket yapisi.'
        },
        {
          term: 'Markdown',
          definition: 'Kolay okunabilir duz metin bicimlendirme dili.'
        },
        {
          term: 'HTML',
          definition: 'Web sayfalari icin standart isaretleme dili.'
        }
      ]
    }
  ],
  faqTitle: 'Sikca sorulan sorular',
  faq: [
    {
      question: 'Metnim bir sunucuya gonderiliyor mu?',
      answer: 'Hayir. Donusum tamamen tarayicinizda gerceklesir.'
    },
    {
      question: 'Ic ice listeler destekleniyor mu?',
      answer: 'Evet. Liste yapisi donusumden once cozümlenir.'
    }
  ],
  howTo: [
    {
      name: 'Metni yapistirin',
      text: 'Steam BBCode, Markdown veya HTML yapistirin.'
    },
    {
      name: 'Otomatik donusum',
      text: 'Diger iki format aninda olusturulur.'
    }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Steam BBCode, Markdown ve HTML Donusturucu',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'TRY' }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Metnim bir sunucuya gonderiliyor mu?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Hayir. Donusum tamamen tarayicinizda gerceklesir.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Steam BBCode, Markdown ve HTML nasil donusturulur',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Metni yapistirin',
          text: 'Steam BBCode, Markdown veya HTML yapistirin.'
        }
      ]
    }
  ],
  bibliography: bibliographyEntries
};
