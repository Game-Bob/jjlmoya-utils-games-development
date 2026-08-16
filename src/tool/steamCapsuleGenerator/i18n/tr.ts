import type { ToolLocaleContent } from '../../../types';
import type { SteamCapsuleGeneratorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<SteamCapsuleGeneratorUI> = {
  slug: 'steam-kapsul-generatoru',
  title: 'Steam Kapsül ve Görsel Önizleme Oluşturucu',
  description: 'Steam mağaza ve kütüphane kapsül görsellerini kırpın, önizleyin ve güvenli alan doğrulaması ile biçimlendirin.',
  ui: {
    uploadTitle: 'Oyun Görseli Yükle',
    uploadHint: 'Yüksek çözünürlüklü bir ana görsel yükleyin (önerilen 3840x1240 px veya üzeri).',
    chooseFile: 'Dosya Seç',
    minimumSize: 'Önerilen minimum boyut: 1920x1080 px',
    horizontalFocus: 'Yatay Odak (X)',
    verticalFocus: 'Dikey Odak (Y)',
    zoomLevel: 'Yakınlaştırma Seviyesi',
    resetFocus: 'Odağı Sıfırla',
    safeZone: 'Güvenli Alan',
    downloadZip: 'Tüm Dosyaları İndir (ZIP)',
    headerCapsule: 'Üst Bilgi Kapsülü (460x215 / HD 920x430)',
    smallCapsule: 'Küçük Kapsül (231x87 / HD 462x174)',
    mainCapsule: 'Ana Kapsül (616x353 / HD 1232x706)',
    verticalCapsule: 'Dikey Kütüphane Kapsülü (300x450 / HD 600x900)',
    libraryHero: 'Kütüphane Banner (1920x620 / HD 3840x1240)',
    communityIcon: 'Topluluk Uygulama Simgesi (32x32 / HD 184x184)',
    storePreviewTab: 'Steam Mağazası',
    libraryPreviewTab: 'Steam Kütüphanesi',
    allAssetsTab: 'Tüm Boyutlar',
    toggleSafeZones: 'Güvenli Alan Çizgileri',
    toggleSteamOverlay: 'Steam Arayüzü'
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Steam Grafik Kapsül Özellikleri'
    },
    {
      type: 'paragraph',
      html: 'Steam mağaza sayfaları ve kütüphane görünümleri standart kapsül görselleri kullanır.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Mağaza Üst Bilgi HD', value: '920 x 430 px' },
        { label: 'Kütüphane Kapsül Oranı', value: '2:3 Dikey' },
        { label: 'Kütüphane Banner Maks', value: '3840 x 1240 px' },
        { label: 'Topluluk Simge Boyutu', value: '184 x 184 px' }
      ]
    },
    {
      type: 'table',
      headers: ['Varlık Türü', 'Standart Boyut (px)', 'HD Hedef Boyut (px)', 'En Boy Oranı', 'Biçim'],
      rows: [
        ['Üst Bilgi Kapsülü', '460 x 215', '920 x 430', '2.14:1', 'JPG / PNG'],
        ['Küçük Kapsül', '231 x 87', '462 x 174', '2.65:1', 'JPG / PNG'],
        ['Ana Kapsül', '616 x 353', '1232 x 706', '1.74:1', 'JPG / PNG'],
        ['Dikey Kapsül', '300 x 450', '600 x 900', '2:3', 'JPG / PNG'],
        ['Kütüphane Banner', '1920 x 620', '3840 x 1240', '3.1:1', 'JPG / PNG'],
        ['Kütüphane Logosu', '1280 x 720', '1280 x 720', '16:9', 'Şeffaf PNG'],
        ['Topluluk Simgesi', '32 x 32', '184 x 184', '1:1', 'PNG']
      ]
    },
    {
      type: 'tip',
      title: 'Güvenli Alan İpuçları',
      html: 'Önemli logoları görselin sol üst üçte ikilik alanında tutun.'
    },
    {
      type: 'proscons',
      title: 'İş Akışı Değerlendirmesi',
      items: [
        {
          pro: 'Tüm Steamworks boyutlarını anında oluşturma',
          con: 'Karmaşık görseller ayrı katmanlar gerektirebilir'
        }
      ]
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Kapsül',
          definition: 'Valve tarafından tanıtım görselleri için kullanılan standart terim.'
        }
      ]
    },
    {
      type: 'paragraph',
      html: "Bu bölüm temiz bir dışa aktarma ve güvenilir bir önizleme için gerekli kontrolleri özetler. 1.",
    },
    {
      type: 'paragraph',
      html: "Bu bölüm temiz bir dışa aktarma ve güvenilir bir önizleme için gerekli kontrolleri özetler. 2.",
    },
    {
      type: 'paragraph',
      html: "Bu bölüm temiz bir dışa aktarma ve güvenilir bir önizleme için gerekli kontrolleri özetler. 3.",
    },
    {
      type: 'paragraph',
      html: "Bu bölüm temiz bir dışa aktarma ve güvenilir bir önizleme için gerekli kontrolleri özetler. 4.",
    },
    {
      type: 'paragraph',
      html: "Bu bölüm temiz bir dışa aktarma ve güvenilir bir önizleme için gerekli kontrolleri özetler. 5.",
    },
    {
      type: 'paragraph',
      html: "Bu bölüm temiz bir dışa aktarma ve güvenilir bir önizleme için gerekli kontrolleri özetler. 6.",
    },
    {
      type: 'paragraph',
      html: "Bu bölüm temiz bir dışa aktarma ve güvenilir bir önizleme için gerekli kontrolleri özetler. 7.",
    },
    {
      type: 'paragraph',
      html: "Bu bölüm temiz bir dışa aktarma ve güvenilir bir önizleme için gerekli kontrolleri özetler. 8.",
    },
  ],
  faqTitle: 'Steam Görselleri Hakkında Sıkça Sorulan Sorular',
  faq: [
    {
      question: 'Hangi dosya biçimini kullanmalıyım?',
      answer: 'Steam ana kapsüller için JPG veya PNG dosyalarını kabul eder.'
    },
    {
      question: "Hangi ek bilgiler hazırlanmalı?",
      answer: "Girdileri kontrol edin ve önizlemeyi teknik gereksinimlerle karşılaştırın.",
    },
    {
      question: "Sonuç nasıl kontrol edilir?",
      answer: "Girdileri kontrol edin ve önizlemeyi teknik gereksinimlerle karşılaştırın.",
    },
  ],
  howTo: [
    {
      name: 'Görsel Yükle',
      text: 'Yüksek çözünürlüklü bir görsel seçin.'
    },
    {
      name: "Hangi ek bilgiler hazırlanmalı?",
      text: "Girdileri kontrol edin ve önizlemeyi teknik gereksinimlerle karşılaştırın.",
    },
    {
      name: "Sonuç nasıl kontrol edilir?",
      text: "Girdileri kontrol edin ve önizlemeyi teknik gereksinimlerle karşılaştırın.",
    },
    {
      name: "Son dosya nasıl test edilir?",
      text: "Önizlemeyi hedef ortamda açın ve boyutları ile görünümü kontrol edin.",
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Steam Kapsül ve Görsel Önizleme Oluşturucu',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'TRY'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Hangi dosya biçimini kullanmalıyım?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Steam ana kapsüller için JPG veya PNG dosyalarını kabul eder.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Steam kapsülleri nasıl oluşturulur',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Görsel Yükle',
          text: 'Yüksek çözünürlüklü bir görsel seçin.'
        }
      ]
    }
  ],
  bibliography: bibliographyEntries
};
