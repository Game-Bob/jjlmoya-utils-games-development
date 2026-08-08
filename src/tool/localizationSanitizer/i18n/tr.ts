import type { ToolLocaleContent } from '../../../types';
import type { LocalizationSanitizerUI } from '../ui';

export const content: ToolLocaleContent<LocalizationSanitizerUI> = {
  slug: 'yerellestirme-csv-temizleyici-godot-unity',
  title: 'Godot ve Unity Yerellestirme CSV ve JSON Temizleyici',
  description: 'Ceviri CSV veya JSON dosyalarinizdaki bos hucreleri, yinelenen anahtarlari ve bozuk satirlari inceleyin ve motor aktarimina hazir temiz bir kopya disari aktarin.',
  ui: {
    csvTab: 'CSV Dosyasi',
    jsonTab: 'JSON Dosyasi',
    dropTitle: 'Ceviri dosyasini buraya birakin',
    dropSubtitle: 'Yapiyi tarayicinizda inceleyin, kaynak dosyayi cihazinizda tutun.',
    browseButton: 'Dosya sec',
    sampleButton: 'Ornek yukle',
    clearButton: 'Temizle',
    inputLabel: 'Ceviri dosyasi girdisi',
    formatLabel: 'Format',
    healthLabel: 'Dosya sagligi',
    readyStatus: 'Aktarima hazir',
    reviewStatus: 'Inceleme gerekli',
    emptyCellsLabel: 'Bos hucreler',
    duplicateKeysLabel: 'Yinelenen anahtarlar',
    malformedRowsLabel: 'Bozuk satirlar',
    cleanRowsLabel: 'Temiz satirlar',
    issueListTitle: 'Bulgular',
    noIssues: 'Bu taramada sorun bulunamadi.',
    previewTitle: 'Ceviri onizlemesi',
    previewSubtitle: 'Ilk satirlar disari aktarilacak normalize edilmis yapiyi gosterir.',
    exportTitle: 'Temiz dosyayi disari aktar',
    exportSubtitle: 'Yinelenenler kaldirilir, eksik sutunlar doldurulur ve CSV degerleri duzenlenir.',
    downloadButton: 'Temiz dosyayi indir',
    copyButton: 'Sonucu kopyala',
    copiedMessage: 'Temiz sonuc panoya kopyalandi.',
    emptyIssue: 'Bos ceviri bucresi',
    duplicateIssue: 'Yinelenen anahtar kaldirildi',
    malformedIssue: 'Sutun veya tirnak uyumsuzlugu',
    parseIssue: 'Dosya okunamadi.',
    rowLabel: 'Satir',
    columnLabel: 'Sutun',
    keyLabel: 'Anahtar',
    sampleFileName: 'yerellestirme-ornek.csv',
    privacyNote: 'Yerel tarayici islemi',
    waitingTitle: 'Dosya bekleniyor',
    waitingSubtitle: 'Incelemeyi baslatmak icin bir CSV veya JSON dosyasi birakin.',
    fileTypeNote: 'UTF-8 CSV veya yapilandirilmis JSON',
  },
  seo: [
    { type: 'title', level: 2, text: 'Yerellestirme dosyalari motor aktariminda neden bozulur' },
    {
      type: 'paragraph',
      html: 'Ceviri tablolari kolayca duzenlenebilir ancak bicimlendirme hatalarina karsi hassastir. Cumle icindeki bir virgül veya eksik tirnak isareti sutunlarin kaymasina neden olabilir.',
    },
    {
      type: 'paragraph',
      html: 'Godot CSV aktarici ve Unity Localization paketi tutarli bir yapi gerektirir. Bu arac, dosyalarinizi aktarim öncesinde denetler.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'CSV', label: 'Virgül denetimi' },
        { value: 'JSON', label: 'Dizi ve nesne destegi' },
        { value: '0 yukleme', label: 'Tamamen yerel' },
        { value: '1 tik', label: 'Temiz aktarim' },
      ],
    },
    { type: 'title', level: 2, text: 'Aracin denetledigi hususlar' },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Aktarim öncesi tespit edilenler',
          description: 'Büyük dosyalarda fark edilmesi zor hatalar',
          points: ['Bos ceviri hucreleri', 'Yinelenen ceviri anahtarlari', 'Eksik veya fazla sutunlu satirlar', 'Gecersiz tirnak sözdizimi'],
        },
        {
          title: 'Aktarimda normalize edilenler',
          description: 'Guvenli otomatik düzeltmeler',
          points: ['Eksik sutunlarin doldurulmasi', 'Fazla alanlarin son sutunda birlestirilmesi', 'Ilk anahtar kaydinin korunmasi', 'Orijinal dosyanin korunmasi'],
        },
      ],
    },
    { type: 'title', level: 2, text: 'Temizlenen dosyanin incelenmesi' },
    {
      type: 'paragraph',
      html: 'Yapisal temizleme dil kontrolünün yerini almaz. Eksik cevirileri tamamlamak icin bulgu listesini kullanin.',
    },
    {
      type: 'table',
      headers: ['Bulgu', 'Anlami', 'Onerilen eylem'],
      rows: [
        ['Bos hucre', 'Dil sutununda metin yok', 'Cevirin veya bilerek bos birakildigini onaylayin'],
        ['Yinelenen anahtar', 'Birden fazla satir ayni anahtari kullaniyor', 'Satirlari karsilastirip ilkini koruyun'],
        ['Bozuk satir', 'Sutun sayisi baslikla uyuşmuyor', 'Birlesik son sutunu kontrol edin'],
        ['Okuma hatasi', 'JSON gecersiz', 'Aktarmadan önce sözdizimini düzeltin'],
      ],
    },
    { type: 'title', level: 2, text: 'Oyunlar icin CSV kurallari' },
    {
      type: 'paragraph',
      html: 'Virgül veya satir sonu iceren metinler cift tirnak icine alinmalidir.',
    },
    {
      type: 'tip',
      title: 'Orijinali saklayin',
      html: 'Cevirmenden gelen orijinal dosyayi daima yedek olarak saklayin.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Ceviri anahtari', definition: 'Oyun kodunda kullanilan benzersiz tanimlayici.' },
        { term: 'CSV alani', definition: 'Ayiricilar arasindaki tekil deger.' },
        { term: 'Escaping', definition: 'Noktalama isaretlerini korumak icin tirnak kullanimi.' },
        { term: 'Locale', definition: 'tr, en veya ja gibi dil ve bölge kodu.' },
      ],
    },
  ],
  faq: [
    {
      question: 'Dosyalar sunucuya yukleniyor mu?',
      answer: 'Hayir, tum islemler tamamen tarayici icinde yerel olarak yapilir.',
    },
    {
      question: 'CSV satirinda fazla virgül varsa ne olur?',
      answer: 'Satir bozuk olarak isaretlenir ve fazla alanlar son sutunda birlestirilir.',
    },
    {
      question: 'Yinelenen anahtarlar nasil temizlenir?',
      answer: 'Ilk kayit korunur, sonraki yinelenenler disari aktarilan dosyadan cikarilir.',
    },
    {
      question: 'Arac ceviri kalitesini kontrol eder mi?',
      answer: 'Hayir, yalnızca dosya yapisini ve bos hucreleri denetler.',
    },
  ],
  howTo: [
    { name: 'Format secin', text: 'CSV veya JSON secin.' },
    { name: 'Bulgulari inceleyin', text: 'Dosyayi birakin ve hata listesini kontrol edin.' },
    { name: 'Disari aktarin ve test edin', text: 'Temiz dosyayi indirin ve motorunuzda test edin.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Godot ve Unity Yerellestirme CSV ve JSON Temizleyici',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'TRY' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [{
        '@type': 'Question',
        name: 'Dosyalar sunucuya yukleniyor mu?',
        acceptedAnswer: { '@type': 'Answer', text: 'Hayir, tum islemler tamamen tarayici icinde yerel olarak yapilir.' },
      }],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Yerellestirme dosyasi nasil temizlenir',
      step: [
        { '@type': 'HowToStep', name: 'Format secin', text: 'CSV veya JSON secin.' },
        { '@type': 'HowToStep', name: 'Bulgulari inceleyin', text: 'Dosyayi birakin ve hata listesini kontrol edin.' },
        { '@type': 'HowToStep', name: 'Disari aktarin ve test edin', text: 'Temiz dosyayi indirin ve motorunuzda test edin.' },
      ],
    },
  ],
  bibliography: [
    { name: 'Godot ResourceImporterCSVTranslation Dokumantasyonu', url: 'https://docs.godotengine.org/en/stable/classes/class_resourceimportercsvtranslation.html' },
    { name: 'Unity Localization CSV Import Dokumantasyonu', url: 'https://docs.unity3d.com/Packages/com.unity.localization@1.5/manual/CSV.html' },
    { name: 'RFC 4180 CSV Spesifikasyonu', url: 'https://datatracker.ietf.org/doc/html/rfc4180' },
  ],
};
