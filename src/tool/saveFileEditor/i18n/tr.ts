import type { ToolLocaleContent } from '../../../types';
import type { SaveFileEditorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<SaveFileEditorUI> = {
  slug: 'oyun-kayit-dosyasi-duzenleyici',
  title: 'Oyun Kayıt Dosyası Karartıcı ve Düzenleyici',
  description: 'Base64, XOR maskeleme veya düz metin kullanarak oyun kayıt dosyalarını tarayıcınızda %100 yerel olarak çözün, inceleyin, JSON verilerini düzenleyin ve yeniden şifreleyin.',
  ui: {
    title: 'Oyun Kayıt Dosyası Karartıcı & Düzenleyici',
    subtitle: 'Sunucuya veri göndermeden yerel kayıt dosyalarını güvenle inceleyin, değiştirin ve şifreleyin',
    dropSaveFile: 'Oyun kayıt dosyasını buraya sürükleyip bırakın',
    orSelectFile: 'veya yerel dosya seçmek için tıklayın',
    encryptionMethod: 'Şifreleme Biçimi',
    methodBase64: 'Base64 Kodlama',
    methodXor: 'XOR Maskesi + Base64',
    methodRaw: 'Düz JSON / Şifresiz',
    xorKeyLabel: 'Gizli XOR Anahtarı',
    xorKeyPlaceholder: 'ör. GizliOyunAnahtarim2026',
    jsonRawTitle: 'Çözülmüş JSON Verisi (Canlı Düzenleyici)',
    encodeAndDownload: 'Şifrele ve Dosyayı İndir',
    copyEncoded: 'Şifrelenmiş Metni Kopyala',
    copiedNotice: 'Panoya Kopyalandı!',
    decodedKeysCount: 'Toplam Parametre',
    dataSize: 'Veri Boyutu',
    detectedFormat: 'Algılanan Biçim',
    exportPreviewLabel: 'Şifrelenmiş Çıktı Önizlemesi',
    decodePanelTitle: 'Çözümleme ve Canlı JSON Düzenleyici',
    exportPanelTitle: 'Yeniden Şifrelenmiş Çıktı Verisi',
    decodeError: 'Kayıt dosyasının şifresi çözülemedi',
    bytesUnit: 'B',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Oyun Kayıt Dosyası Güvenliği ve Karartma Protokolleri',
    },
    {
      type: 'paragraph',
      html: 'Oyunlar, oyuncunun ilerleme durumunu, envanter sayısını, açılan seviyeleri ve karakter özelliklerini oturumlar arasında korumak için kalıcı depolama biçimlerine dönüştürür. Son kullanıcıların düz metin düzenleyicileriyle izinsiz değişiklik yapmasını önlemek için oyun stüdyoları, kayıt dosyalarını Base64 veya gizli bir anahtar kullanarak bit düzeyinde XOR maskeleme ile karartır. İç Kalite Kontrol QA testleri ve canlı operasyon hatası giderme sırasında geliştirme ekipleri, JSON yapılarını incelemek, sınır durumlarını test etmek ve oyun dosyalarını yeniden derlemeden değiştirilmiş verileri şifrelemek için anlık araçlara ihtiyaç duyar.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'İstemci İşleme Gizliliği', value: '%100 Yerel' },
        { label: 'Desteklenen Çözücüler', value: 'Base64 / XOR / JSON' },
        { label: 'Çözümleme Gecikmesi', value: '0 ms' },
        { label: 'Veri Sızıntısı Riski', value: 'Sıfır' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Karartma Yöntemlerinin Karşılaştırılması',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Base64 Kodlama',
          description: 'Not defterinde basit düzenlemeleri engelleyen hızlı metin dönüştürme yöntemi ancak kriptografik güvenlik sağlamaz.',
        },
        {
          title: 'XOR Maskeleme + Base64',
          description: 'Bağımsız oyun geliştirmede standart uygulama. Bellek düzenleyicilerine karşı metin baytlarını gizli bir anahtarla harmanlar.',
        },
        {
          title: 'Düz JSON Verisi',
          description: 'Şifrelenmemiş okunabilir kayıt durumu. İlk prototip oluşturma ve dahili hata ayıklama için idealdir.',
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Kayıt Durumu Doğrulaması İçin QA Test Uygulamaları',
    },
    {
      type: 'tip',
      title: 'QA Sırasında Kayıt Dosyası Güvenliği İçin En İyi Uygulamalar',
      html: 'Dahili sürümler ve üretim sürümleri için her zaman ayrı hata ayıklama anahtarları kullanın. Sınır hatalarını doğrularken oyun kodunu yeniden derlemeden yerel düzenleyicileri kullanın.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Oyun Durumu Parametre Yönergeleri Tablosu',
    },
    {
      type: 'table',
      headers: ['Veri Türü', 'Önerilen Biçim', 'Yaygın Kullanım Alanı', 'Karartma Katmanı'],
      rows: [
        ['Sayısal Tamsayılar', '32-bit Tamsayı', 'Altın, Seviye, XP, Cephane', 'XOR Maskeli'],
        ['Mantıksal Bayraklar', 'Standart Boolean', 'Eğitim Tamamlandı, Patron Yenildi', 'Base64 / XOR'],
        ['İç İçe Nesneler', 'JSON Hiyerarşisi', 'Oyuncu Envanteri, Yetenek Ağacı', 'Base64 Kodlu'],
        ['Zaman Damgası Metni', 'ISO 8601 UTC', 'Günlük Giriş, Kayıt Zamanı', 'XOR Maskeli'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Tersine Mühendislik ve Kurcalamaya Karşı Koruma',
    },
    {
      type: 'paragraph',
      html: 'İstemci tarafındaki karartma sıradan oyuncuların kayıt dosyalarını değiştirmesini engellese de XOR ve Base64 gerçek kriptografik algoritmalar değildir. RenderDoc veya x64dbg gibi bellek analiz araçları derlenmiş dosyalardan anahtar oluşturma kodlarını inceleyebilir. Rekabetçi çok oyunculu oyunlar için sunucu tarafı doğrulaması veya HMAC imzaları gereklidir.',
    },
  ],
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: [
    {
      question: 'Oyun kayıt dosyalarım uzak bir sunucuya yükleniyor mu?',
      answer: 'Hayır. Tüm çözümleme, JSON düzenleme ve yeniden şifreleme işlemleri %100 web tarayıcınızın içinde yerel olarak gerçekleşir.',
    },
    {
      question: 'Unity veya Godot gibi motorlarda XOR karartması nasıl çalışır?',
      answer: 'XOR karartması, JSON metninin UTF-8 baytları üzerinde gizli bir anahtarın karakterleriyle bit düzeyinde XOR işlemi uygular.',
    },
  ],
  howTo: [
    {
      name: 'Kayıt Dosyasını Yükleyin veya Yapıştırın',
      text: 'Şifrelenmiş kayıt dosyanızı yükleyin veya sürükleyip bırakın.',
    },
    {
      name: 'Çözümleme Yöntemini ve Anahtarı Seçin',
      text: 'Base64 veya XOR Maskelemeyi seçin ve gizli anahtarı girin.',
    },
    {
      name: 'JSON Durumunu Düzenleyin',
      text: 'Canlı düzenleyicide seviye, altın, eşya ve oyun bayraklarını değiştirin.',
    },
    {
      name: 'Şifreleyin ve Dışa Aktarın',
      text: 'Test için hazır olan yeni şifrelenmiş kayıt dosyasını indirin.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Oyun Kayıt Dosyası Düzenleyici',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'TRY',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Oyun kayıt dosyalarım uzak bir sunucuya yükleniyor mu?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Hayır. Tüm işlemler %100 tarayıcınızda gerçekleşir.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Şifreli Oyun Kayıt Dosyaları Nasıl Düzenlenir',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Dosyayı Yükleyin',
          text: 'Şifrelenmiş kayıt dosyanızı yükleyin.',
        },
      ],
    },
  ],
  bibliographyTitle: 'Kaynaklar ve Ek Okumalar',
  bibliography: bibliographyEntries,
};
