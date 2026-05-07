import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GymTrackerUI } from '../ui';

const slug = 'gym-antrenman-takip';
const title = 'Spor Salonu Antrenman Takibi: İlerleme Grafikleri ve Güç Günlüğü';
const description =
  'Ağırlıklarınızı kaydedin, egzersizleri seçin ve güç grafikleriyle ilerlemenizi görselleştirin. Spor salonunda progresif aşırı yüklemenizi optimize edin.';

const faqData = [
  {
    question: 'Antrenman takibinin amacı nedir?',
    answer:
      'Bilimsel olarak progresif aşırı yükleme (progressive overload) uygulamaya hizmet eder. Bir önceki seansta ne kadar kaldırdığınızı tam olarak bilerek, o sınırı aşmaya çalışabilir, kas büyümesini ve uzun vadeli güç kazanımlarını garanti altına alabilirsiniz.'
  },
  {
    question: 'Hangi verileri kaydetmeliyim?',
    answer:
      'En önemli şey, belirlenen tekrar sayısı için iyi bir formla ulaştığınız maksimum ağırlıktır (top set). Aracımız, ilerleme grafiğinizi oluşturmak için seans başına ağırlık kaydetmeye odaklanır.'
  },
  {
    question: 'Grafikler nasıl yorumlanır?',
    answer:
      'Yukarı doğru giden bir çizgi ilerlediğinizi gösterir. Düz bir çizgi (plato), hacminizi, yoğunluğunuzu veya dinlenmenizi ayarlamanız gerektiğini gösterir. Sürekli aşağı doğru giden bir çizgi, aşırı antrenman belirtisi olabilir.'
  },
  {
    question: 'Verilerim nerede saklanıyor?',
    answer:
      'Veriler yerel olarak tarayıcınızda (Local Storage) saklanır. Bu, gizliliğinizin tam olduğu ve bir hesap oluşturmanıza gerek olmadığı anlamına gelir; ancak tarayıcı verilerini temizlerseniz geçmiş silinecektir.'
  },
];

const howToData = [
  {
    name: 'Egzersizi seçin',
    text: 'Açılır menüden Squat, Bench Press veya Deadlift gibi temel hareketlerden birini seçin.'
  },
  {
    name: 'Ağırlığı girin',
    text: 'En ağır setinizden sonra, kaldırılan kilogram/pound cinsinden değeri ilgili alana girin.'
  },
  {
    name: 'Ekle\'ye basın',
    text: 'Derecenizi kaydedin. Sistem geçmişinizi ve ilerleme grafiğinizi otomatik olarak güncelleyecektir.'
  },
  {
    name: 'Gelişiminizi analiz edin',
    text: 'Platoları belirlemek ve gerçek güç artışınızı görerek kendinizi motive etmek için grafiği periyodik olarak kontrol edin.'
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer }
  }))
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
    text: step.text
  }))
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'HealthApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'tr'
};

export const content: ToolLocaleContent<GymTrackerUI & Record<string, string>> = {
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
      text: 'Antrenman Takibi: Gerçek İlerlemenin Anahtarı',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Fitness ve vücut geliştirme dünyasında, harika sonuçlar alanları hızla duraklayanlardan ayıran temel bir prensip vardır: <strong>progresif aşırı yükleme (progressive overload)</strong>. Ancak, kaldırdığınız ağırlıkların ayrıntılı kayıtlarını tutmazsanız bu prensibi etkili bir şekilde uygulamanız imkansızdır. Bu kılavuzda, antrenmanlarınızı takip etmenin neden hayati olduğunu, kazanımlarınızı en üst düzeye çıkarmak için <strong>antrenman takibi</strong> aracımızı nasıl kullanacağınızı ve bu uygulamayı destekleyen bilimsel temelleri keşfedeceğiz.'
    },
    {
      type: 'title',
      text: 'Progresif Aşırı Yükleme Nedir?',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Progresif aşırı yükleme, fiziksel egzersiz sırasında vücuda uygulanan stresin kademeli olarak artırılmasıdır. Bir kasın büyümesi veya güçlenmesi için, alıştığından daha büyük bir uyarana maruz kalması gerekir. Eğer spor salonuna gidip her zaman aynı ağırlığı, aynı tekrar sayısı ve aynı dinlenme süresiyle kaldırırsanız, vücudunuzun uyum sağlamak ve büyümek için hiçbir biyolojik nedeni kalmaz.'
    },
    {
      type: 'list',
      items: [
        'Ağırlık artışı: Bir önceki seansa göre daha fazla ağırlık kaldırmak.',
        'Tekrar artışı: Aynı ağırlıkla daha fazla tekrar yapmak.',
        'Hacim artışı: Kas grubu başına toplam set sayısını artırmak.',
        'Dinlenme süresini azaltmak: Aynı işi daha kısa sürede yapmak.',
        'Formu iyileştirmek: Egzersizi daha üstün bir kontrol ve daha geniş bir hareket açıklığıyla uygulamak.',
      ]
    },
    {
      type: 'title',
      text: 'Manuel Kayıt Neden Hafızadan Daha Üstündür',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Birçok sporcu, geçen hafta ne kadar kaldırdığını hatırlamak için hafızasına güvenme hatasına düşer. Ancak, 5 ila 10 farklı egzersiz içeren tipik bir antrenmanda, bench presste 80 kg mı yoksa 82,5 kg mı bastığınızı veya 10 tekrar mı yoksa 12 tekrar mı yaptığınızı unutmak çok kolaydır. Bu hassasiyet eksikliği sıradanlığa yol açar.'
    },
    {
      type: 'tip',
      title: 'İlerlemeyi Görselleştirmenin Gücü',
      html: 'Bir grafikte yükselen bir çizgi görmek, size duraklama ile sürekli kas büyümesi arasındaki farkı belirleyen o ekstra tekrarı denemek için gereken motivasyonu sağlar.'
    },
    {
      type: 'title',
      text: 'Takip İçin Temel Egzersizler',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Tüm egzersizler değerli olsa da, belirli bileşik (compound) hareketler genel gücünüz ve fiziksel gelişiminiz hakkında en iyi görünümü sunar. Takibinizde öncelik vermeniz gerekenler şunlardır: Yatay itiş için <strong>Bench Press</strong>, dikey itiş için <strong>Overhead Press</strong>, çekiş için <strong>Barfiks (Pull-ups)</strong> ve kalça kasları için <strong>Hip Thrust</strong>.'
    },
    {
      type: 'title',
      text: 'İlerleme Grafiklerinizi Nasıl Analiz Edersiniz?',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Birkaç antrenman kaydettikten sonra kalıpları görmeye başlayacaksınız: <strong>sürekli yükselen bir çizgi</strong> doğru yolda olduğunuzu gösterir, bir <strong>plato</strong> hacminizi veya dinlenmenizi ayarlamanız gerektiğini hatırlatır ve <strong>düşüş eğilimi</strong> birikmiş yorgunluk belirtisi olabilir.'
    },
    {
      type: 'title',
      text: 'Spor Salonunda Başarının Psikolojisi',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Antrenman hem zihinsel hem de fiziksel bir zorluktur. Bugün, on beş gün öncesine göre %1 daha güçlü olduğunuzu gösteren görsel bir araç kullanarak dopamin ödül sisteminizi beslersiniz. Bu, antrenmanı sürdürülebilir bir alışkanlığa dönüştüren olumlu bir geri bildirim döngüsü yaratır.'
    },
  ],
  ui: {
    exerciseLabel: 'Egzersiz',
    pushCategory: 'İtiş (Push)',
    pullCategory: 'Çekiş (Pull)',
    gluteCategory: 'Kalça',
    customExerciseCategory: 'Özel',
    addCustomExercisetitle: 'Egzersiz ekle',
    newExerciseLabel: 'Yeni egzersiz',
    exercisePlaceholder: 'Egzersiz adı...',
    addBtn: 'Ekle',
    registerWeightLabel: 'Ağırlık Kaydet',
    weightPlaceholder: '00.0',
    startBtn: 'Başlat',
    resetBtn: 'Sıfırla',
    okBtn: 'TAMAM',
    noData: 'Veri yok',
    recordLabel: 'Rekor',
    lastLabel: 'Son',
    historyTitle: 'Kayıtlar',
    exportBtn: 'Dışa Aktar',
    confirmDeletetitle: 'Geçmişi temizle?',
    confirmDeleteText: 'Bu işlem geri alınamaz. Seçilen egzersiz için tüm kayıtlar silinecektir.',
    deleteBtn: 'Sil',
    cancelBtn: 'İptal',
    units: 'kg',

    benchPress: 'Bench Press',
    overheadPress: 'Overhead Press',
    pushPress: 'Push Press',
    inclineDbPress: 'Eğimli Dumbbell Press',
    dipsTriceps: 'Triceps Dips',
    tricepsExtensions: 'Kablolu Triceps Uzatma',
    pullUp: 'Barfiks (Pull-up)',
    barbellRow: 'Barbell Row',
    latPulldown: 'Lat Pulldown',
    dbRow: 'Dumbbell Row',
    facePulls: 'Face Pulls',
    bicepsCurl: 'Barbell Biceps Curl',
    hipThrust: 'Hip Thrust',
    rdl: 'Romen Deadlift',
    lunges: 'Lunges',
    gluteKick: 'Kablolu Kalça Geriye Tekme',
    hipAbduction: 'Makinede Kalça Açma',
    stepUp: 'Step Up'
  }
};
