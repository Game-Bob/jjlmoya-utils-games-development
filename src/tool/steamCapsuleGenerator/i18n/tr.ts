import { createSteamContent } from './shared';

export const content = createSteamContent({
  slug: 'steam-kapsul-olusturucu',
  title: 'Steam kapsül oluşturucu',
  description: 'Tek bir ana görselden dört Steam ön izlemesi oluşturun, odak noktasını ayarlayın, güvenli alanları inceleyin ve PNG veya ZIP dosyalarını yerel olarak indirin.',
  ui: { uploadTitle: 'Ana görselinizi bırakın', uploadHint: 'Yüksek çözünürlüklü tek görsel, tarayıcı içinde eksiksiz bir Steam ön izleme setine dönüşür.', chooseFile: 'Görsel seç', minimumSize: 'Minimum boyut', supportedFormats: 'PNG, JPEG veya WebP', invalidImage: 'En az 1920 x 1080 piksel bir görsel seçin.', sourcePreview: 'Ana görsel', focalPoint: 'Odak noktası', focalHint: 'Her kırpmada önemli konunun kalması için görsele tıklayın veya kaydırıcıları kullanın.', horizontalFocus: 'Yatay', verticalFocus: 'Dikey', resetFocus: 'Odağı ortala', outputPreview: 'Steam çıktı seti', safeZone: 'Güvenli alan', dimensions: 'piksel', downloadPng: 'PNG', downloadZip: 'ZIP indir', buildingZip: 'Yerel ZIP arşivi hazırlanıyor...', zipReady: 'Steam kapsül seti hazır', localOnly: 'Gizlilik varsayılan. Görseliniz bu tarayıcıda kalır.', headerCapsule: 'Header kapsülü', mainCapsule: 'Ana kapsül', verticalCapsule: 'Dikey kapsül', communityIcon: 'Topluluk simgesi', ready: 'Hazır', downloadError: 'Arşiv oluşturulamadı. PNG düğmelerini deneyin.', },
  seo: [
    { type: 'title', text: 'Tek görselden tutarlı bir Steam kapsül seti oluşturun', level: 2 },
    { type: 'paragraph', html: 'Bir çizim geniş formatta iyi görünebilir ancak dikey kırpmada karakteri kaybedebilir. Bu araç aynı ana görselden dört kırpma gösterir: header 460 x 215, ana 616 x 353, dikey 374 x 448 ve kare topluluk simgesi 184 x 184 piksel. Odak noktası, oran değiştiğinde kompozisyonun hangi bölümünün görünür kalacağını belirler.' },
    { type: 'paragraph', html: 'Görsel canvas ile yerel olarak işlenir. Sunucuya gönderilmez ve hesap gerekmez. İşaretçiyi taşıdığınızda tüm ön izlemeler güncellenir; böylece logo, yüz, karakter ve kontrast dışa aktarmadan önce kontrol edilir.' },
    { type: 'title', text: 'Oyun görselleri için pratik çalışma akışı', level: 2 },
    { type: 'list', items: ['En az 1920 x 1080 piksellik bir ana görselle başlayın.', 'İşaretçiyi geometrik merkeze değil görsel konuya koyun.', 'Önce dikey ve kare ön izlemeleri kontrol edin.', 'Güvenli alanları boşluk rehberi olarak kullanın ve güncel Steamworks şablonlarını karşılaştırın.'] },
    { type: 'paragraph', html: 'Güvenli alanlar kompozisyon rehberidir; Steam arayüzlerinin tamamı için garanti değildir. Logoları ve başlıkları kalabalık kenarlardan uzak tutun ve Valve\'ın kapsül metni kurallarını inceleyin.' },
    { type: 'tip', html: 'Konunun etrafında boşluk bulunan bir ana dosya saklayın. Logo konumu değişecekse bitmiş kapsülü esnetmek yerine kaynağı düzenleyip seti yeniden oluşturun.' },
  ],
  faq: [
    { question: 'Görsel cihazımdan çıkar mı?', answer: 'Hayır. Tarayıcıda okunur ve çizilir. Yükleme veya hesap yoktur.' },
    { question: 'Hangi ana görsel kullanılmalı?', answer: 'En az 1920 x 1080 piksellik PNG, JPEG veya WebP kırpma için alan sağlar.' },
    { question: 'Odak noktası neyi değiştirir?', answer: 'Tüm çıktılardaki kaynak kırpmayı kaydırır ve ana konuyu korur.' },
    { question: 'Güvenli alanlar resmi mi?', answer: 'Pratik kılavuzlardır. Yayından önce güncel Steamworks şablonlarıyla karşılaştırın.' },
  ],
  howTo: [
    { name: 'Ana görsel seçin', text: 'En az 1920 x 1080 piksellik PNG, JPEG veya WebP bırakın.' },
    { name: 'Odağı ayarlayın', text: 'Ön izlemeye tıklayın veya yatay ve dikey kaydırıcıları hareket ettirin.' },
    { name: 'Dört kırpmayı inceleyin', text: 'Header, ana, dikey ve kare simgeyi kontrol edin.' },
    { name: 'Seti indirin', text: 'Ayrı PNG dosyaları veya yerel ZIP arşivi indirin.' },
  ],
});
