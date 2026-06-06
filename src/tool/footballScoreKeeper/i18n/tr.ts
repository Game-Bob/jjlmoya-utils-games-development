import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FootballScoreKeeperUI } from '../ui';

const slug = 'futbol-skor';
const title = 'Futbol Skor Tahtası : Ücretsiz Çevrimiçi Maç Gol Takipçisi';
const description =
  'Futbol maç skorlarını ücretsiz çevrimiçi takip edin. Dostluk maçları ve turnuvalar için basit gol sayacı. Kayıt gerekmez.';

const faqData = [
  {
    question: 'Bu futbol skor tahtasını nasıl kullanırım?',
    answer:
      'Her takımın altındaki + butonuna dokunarak gol ekleyin. Skor anında güncellenir ve kutlama animasyonu gösterilir. Eksi butonunu kullanarak hatayı geri alabilirsiniz. Takım isimleri düzenlenebilir, varsayılan isme dokunup kendi isminizi yazmanız yeterli. Tüm veriler tarayıcınıza otomatik kaydedilir, sayfayı kapatıp daha sonra geri dönebilirsiniz.',
  },
  {
    question: 'Maç sırasında telefonda kullanabilir miyim?',
    answer:
      'Evet. Arayüz mobil kullanım için tasarlanmıştır, bakmadan dokunabileceğiniz büyük butonlara sahiptir. Tam ekran modu tarayıcıyı gizler ve maç boyunca telefon ekranınızın açık kalmasını sağlar. Dikey düzen, başparmağınızla her iki takım bölümüne kolayca ulaşmanızı sağlar.',
  },
  {
    question: 'Maç verilerimi kaydediyor mu?',
    answer:
      'Evet. Mevcut skor ve takım isimleri tarayıcınıza otomatik kaydedilir. Sayfayı yenileyebilir, tarayıcıyı kapatabilir veya ertesi gün geri gelebilirsiniz, maç verileriniz hala orada olacaktır.',
  },
  {
    question: 'Uzatma veya penaltı atışlarını takip edebilir miyim?',
    answer:
      'Evet. Skor tahtası her maç formatında aynı şekilde çalışır. Uzatma veya penaltı atışları sırasında + butonlarını kullanmaya devam edin. Maç bittiğinde, nihai sonucu görmek için Maçı Bitir butonuna dokunun.',
  },
  {
    question: 'Gerçekten ücretsiz mi, gizli sınırlamalar var mı?',
    answer:
      'Evet, tamamen ücretsiz ve hiçbir kısıtlama yoktur. plan yok, katılımcı sınırı yok, filigran yok, reklam yok. Her şey tarayıcınızda çevrimdışı çalışır. Hesap veya e-posta gerekmez.',
  },
];

const howToData = [
  {
    name: 'Takımları adlandırın',
    text: 'Varsayılan takım ismine dokunun ve kendi isminizi yazın. Yeni isim tarayıcınıza otomatik kaydedilir.',
  },
  {
    name: 'Gol ekleyin',
    text: 'Gol atan takım için büyük daire şeklindeki + butonuna dokunun. Skor sayısı kutlama animasyonuyla yukarı sıçrar.',
  },
  {
    name: 'Golü silin',
    text: 'Yanlışlıkla gol eklediyseniz + butonunun altındaki eksi butonuna dokunun. Skor hemen düzeltilir.',
  },
  {
    name: 'Maçı bitirin',
    text: 'Alttaki Maçı Bitir butonuna dokunarak kazananın kupa ve konfeti ile açıklandığını görün. Kutlamayı kapatmak için dışına dokunun.',
  },
  {
    name: 'Maçı sıfırlayın',
    text: 'Üst çubuktaki sıfırlama simgesine dokunun ve onaylayarak her iki skoru da temizleyin. Takım isimleri korunur, böylece yeniden girmeniz gerekmez.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'SportsApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'tr',
};

export const content: ToolLocaleContent<FootballScoreKeeperUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Ücretsiz Çevrimiçi Futbol Skor Tahtası : Canlı Maç Skor Takibi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bir futbol maçı sırasında skor tutmak, oyunun en kolay kısmı olmalıdır. Bu çevrimiçi futbol skor tahtası, tek bir dokunuşla iki takım için golleri gerçek zamanlı olarak takip etmenizi sağlar. Kayıt yok, indirme yok, karmaşık menüler yok. Sayfayı açın, takımlarınızı adlandırın ve golleri saymaya başlayın. İster gençlik futbolu antrenörlüğü yaparken kenar çizgisinde olun, ister arkadaşlar arasında bir dostluk maçı düzenleyin, ister yerel lig maçında skor tutun, bu araç hız ve basitlik için üretilmiştir. Her takımın büyük bir skor ekranı ve özel bir +1 butonu ile renk kodlu bir bölümü vardır. Gol eklemek için dokunun, hatayı geri almak için eksi butonuna dokunun. Tüm maç geçmişi ekranda görünür kalır, böylece neyin ne zaman olduğunu her zaman bilirsiniz.',
    },
    {
      type: 'title',
      text: 'Neden genel bir sayaç yerine özel bir futbol skor tahtasına ihtiyacınız var',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Genel bir sayı sayacı her şeyi saymak için işe yarar, ancak özel bir futbol skor tahtası oyunun nasıl çalıştığını anlar. İki takımı farklı renklerle görsel olarak ayırır, böylece asla yanlış tarafa dokunmazsınız. Gol butonu büyüktür ve kenar çizgisinde tek elle telefon tutarken bile bastığında tatmin edicidir. Eksi butonu, tüm maçı sıfırlamak zorunda kalmadan hataları anında düzeltmenizi sağlar. Maç bittiğinde, Maçı Bitir butonu konfeti ve kupa ile nihai sonucu gösteren bir kutlama ekranı tetikler. Genel sayaçlar bunların hiçbirini yapamaz. Her puanı aynı şekilde ele alırlar. Futbol genel değildir ve skor tahtanız da öyle olmamalıdır.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Dostluk ve Antrenman Maçları',
          description: 'Alıştırma maçları ve antrenman seansları için hızlı gol takibi. Maçlar arasında tek dokunuşla sıfırlama. Çevrimdışı çalışır, her sahada kullanabilirsiniz.',
          icon: 'mdi:soccer',
          points: ['Tek dokunuşla gol girişi', 'Tamamen çevrimdışı çalışır', 'Hesap veya e-posta gerekmez', 'Maçlar arasında anında sıfırlama'],
        },
        {
          title: 'Yerel Lig ve Turnuva Maçları',
          description: 'Her golün önemli olduğu lig maçları için temiz bir skor tutun. Sahanın diğer ucundan okunabilen büyük ekran. Takım renkleri karışıklığı önlemeye yardımcı olur.',
          icon: 'mdi:trophy-outline',
          points: ['Renk kodlu takım bölümleri', 'Düzenlenebilir takım isimleri', 'Kutlamalı Maçı Bitir', 'Uzaktan okunabilir büyük skor'],
        },
        {
          title: 'Gençlik ve Okul Futbolu',
          description: 'Genç oyuncuların kendi başlarına kullanabileceği kadar basit. Antrenörler oyuna odaklanırken golleri takip edebilir. Tam ekran modu ekranı açık tutar.',
          icon: 'mdi:school',
          points: ['Çocukların kullanması için yeterince kolay', 'Tam ekran ekranı açık tutar', 'Düzenlenebilir takım isimleri', 'Dikkat dağıtmayan özellikler'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Bu çevrimiçi skor tahtası ile bir futbol maçını canlı nasıl takip edersiniz',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bu futbol skor tahtasını kullanmak çok kolaydır. Sayfayı açtığınızda iki takım bölümü görürsünüz. Ev sahibi takım kırmızı, deplasman takımı mavi renkle gösterilir. Her bölümün ortasında büyük bir skor numarası, üstte bir takım adı alanı ve altta iki buton bulunur. O takım için gol eklemek üzere büyük daire şeklindeki + butonuna dokunun. Her gol kaydedildiğinde skor numarası kutlama efektiyle canlanır. Sekiz farklı gol animasyonu rastgele döner, böylece her gol benzersiz hissettirir. GOAL ve SIUUU gibi metinler buton alanından yüzen parçacıklar halinde fırlar. Anı işaretlemek için ekran bir anlığına yanıp söner. Bir hata yaparsanız, son golü silmek için küçük eksi butonuna dokunun. Takım adı alanları düzenlenebilir. Varsayılan isme dokunarak kendi takım adınızı yazın. İsimler, mevcut skorla birlikte tarayıcınıza otomatik kaydedilir. Bu, sayfayı kapatabileceğiniz, daha sonra geri gelebileceğiniz ve maç verilerinizin hala orada olacağı anlamına gelir. Maçın sonunda, kazananın kupa animasyonu ve düşen konfeti ile açıklandığını görmek için Maçı Bitir butonuna dokunun. Kutlamayı kapatabilir ve skorun görüntülenmeye devam etmesini sağlayabilirsiniz.',
    },
    {
      type: 'title',
      text: 'Kenar çizgisi için tasarlanmış mobil dostu futbol skor takibi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bu araç mobil öncelikli olarak üretilmiştir. Dikey düzen, bir takımı diğerinin üzerine yerleştirir, böylece telefonunuzu tutarken başparmağınızla her iki bölüme de kolayca ulaşabilirsiniz. Butonlar, ekrana bakmadan dokunmak için yeterince büyüktür. Tam ekran modu, tarayıcı araç çubuklarını kaldırır ve maç boyunca telefon ekranınızın açık kalmasını sağlar. Artık kararmasını önlemek için her birkaç dakikada bir ekrana dokunmanız gerekmez. Arayüz yatay ve dikey yönelimlerde çalışır. İlk sayfa yüklemesinden sonra çevrimdışı da çalışır, böylece sahada internet bağlantısına ihtiyacınız olmaz. Reklam yok, izleyici yok ve veri toplama yok. Maç verileriniz cihazınızdan asla ayrılmaz.',
    },
    {
      type: 'title',
      text: 'Bu futbol skor tahtasını özel kılan nedir',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Renk kodlu takımlar</strong> ev sahibi için kırmızı, deplasman için mavi. Metin okumadan hangi taraf olduğunu anında anlarsınız.',
        '<strong>Gol kutlama animasyonları</strong> her gol rastgele bir kutlama tetikler. Boom, rise, glow ve top zıplaması dahil sekiz farklı animasyon.',
        '<strong>Yüzen parçacıklar</strong> her gol GOAL ve SIUUU gibi mesajlarla yüzen metinler oluşturur. Her kutlama benzersiz hissettirir.',
        '<strong>Maçı Bitir seremonisi</strong> Maçı Bitir butonuna dokunun, kupa animasyonu, takım adı ve konfeti yağmuru ile kazanan açıklanır.',
        '<strong>Düzenlenebilir takım isimleri</strong> takım adlarınızı değiştirmek için ad alanına dokunun. İsimler tarayıcınıza yerel olarak kaydedilir.',
        '<strong>Ekran uyku kilidi</strong> tam ekran modu, maç sırasında telefon ekranınızın kapanmasını önler.',
        '<strong>Tam ekran modu</strong> tarayıcı arayüzünü gizler, böylece skor tahtası dikkat dağıtmadan tüm ekranı kaplar.',
        '<strong>Çevrimdışı öncelikli</strong> ilk ziyaretten sonra internet olmadan çalışır. Reklam yok, izleme yok, veri toplama yok.',
        '<strong>Anlık veri kalıcılığı</strong> skorlar ve takım isimleri otomatik kaydedilir. Sayfayı yenileyin veya tarayıcıyı kapatın, maç verileriniz geri gelir.',
        '<strong>Onaylı sıfırlama</strong> sıfırlama butonu, skorları temizlemeden önce onay ister. Yanlışlıkla veri kaybını önler.',
      ],
    },
    {
      type: 'title',
      text: 'Futbol Skor Tahtası vs Kağıt Skor Kağıdı : neden dijital daha iyi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kağıt skor kağıtları on yıllardır kullanılmaktadır, ancak gerçek sorunları vardır. Çalışan bir kaleme, yazmak için düz bir yüzeye ve oyunu izlerken yazmak için yeterli dikkate ihtiyacınız vardır. Tek bir dikkat dağınıklığı bir golü kaçırmanıza veya yanlış numarayı yazmanıza neden olabilir. Kağıda bir kez yazıldığında, skor temiz bir şekilde düzeltilemez. Üzeri çizili numaralar kağıdı okumayı zorlaştırır. Kağıt yağmurda ıslanabilir, rüzgarla uçup gidebilir veya maçlar arasında kaybolabilir. Dijital bir futbol skor tahtası tüm bu sorunları çözer. Butonlar, bakmadan dokunarak basmak için yeterince büyüktür. Numaralar, sahanın diğer ucundan okunabilen büyük bir yazı tipiyle net bir şekilde görüntülenir. Hatalar eksi butonuyla anında düzeltilir. Skor otomatik kaydedilir ve asla kaybolmaz. Ve kağıdın aksine, skor tahtası skor tutmayı daha keyifli hale getiren kutlama animasyonları ve görsel geri bildirim ekler. İster genç bir takımı çalıştırıyor olun, ister pazar ligi düzenliyor olun, ister arkadaşlarınızla oynuyor olun, bu ücretsiz çevrimiçi futbol skor tahtası size ihtiyacınız olan her şeyi ve ihtiyacınız olmayan hiçbir şeyi vermez.',
    },
    {
      type: 'title',
      text: 'Oyunun her seviyesi için ücretsiz futbol skor tutma',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bu araç, hiçbir sınırlama olmaksızın tamamen ücretsizdir. katmanlar, ödeme duvarının arkasında gizli özellikler veya ekranda filigran yoktur. Arkadaşlarla sıradan maçlardan organize lig karşılaşmalarına kadar her futbol seviyesinde çalışır. Basit arayüz, oyunu öğrenen genç oyunculardan turnuva yöneten deneyimli antrenörlere kadar herkesin kullanabilmesi anlamına gelir. Kayıt gerekmez. E-posta adresi gerekmez. Kişisel veri toplanmaz. Sayfayı açın, maça başlayın, gollere dokunun. Hepsi bu kadar.',
    },
  ],
  ui: {
    playerA: 'Ev Sahibi',
    playerB: 'Deplasman',
    winnerLabel: 'ŞAMPİYON',
    finishMatch: 'Maçı Bitir',
    reset: 'Sıfırla',
    resetConfirm: 'Maç sıfırlansın mı? Tüm veriler kaybolacak.',
    cancel: 'İptal',
    fullscreen: 'Tam Ekran',
    exitFullscreen: 'Tam Ekrandan Çık',
  },
};
