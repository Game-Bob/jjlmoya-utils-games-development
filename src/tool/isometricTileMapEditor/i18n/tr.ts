import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { IsometricTileMapEditorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const title = 'İzometrik karo haritası düzenleyici';
const description = 'Elmas ızgaralı katmanlı haritalar çizin, karo geometrisini ayarlayın ve izometrik seviye taslağını JSON veya SVG olarak dışa aktarın.';
const faq = [
  { question: 'İzometrik karo haritası nedir?', answer: 'İzometrik karo haritası, iki boyutlu bir sahnede üç boyutlu alan hissi vermek için elmas biçimli bir ızgara kullanır. Sütunlar ve satırlar zemin düzlemini, katmanlar ise yükseklik farkını tanımlar.' },
  { question: 'Bir karoyu nasıl yerleştiririm?', answer: 'Paletten bir karo seçin, Çiz modunu açık bırakın, etkin katmanı seçin ve bir elmasa tıklayın. Sağ tıklama, Çiz modu seçili olsa bile hücreyi siler.' },
  { question: 'Katman derinliği neyi değiştirir?', answer: 'Katman derinliği, üst üste duran katmanlar arasındaki dikey ekran kaymasıdır. Daha yüksek basamaklar için artırın, katmanları birbirine yaklaştırmak için azaltın.' },
  { question: 'Dışa aktarılan SVG oyun motorunda kullanılabilir mi?', answer: 'SVG, mevcut elmasları ve renkleri gösteren görsel bir referanstır. Mantıksal ızgarayı motorda yeniden kurmak için satırları, sütunları, katmanları ve karo değerlerini koruyan JSON daha uygundur.' },
  { question: 'Bu düzenleyici üretime hazır bir tileset oluşturur mu?', answer: 'Hayır. Katmanlı bir ızgara planlar ve kısa bir harita açıklaması dışa aktarır. Doku kesmez, çarpışma ayarlamaz, motor sıralaması seçmez ve son görüntüyü garanti etmez.' },
];
const howTo = [
  { name: 'Izgara geometrisini ayarla', text: 'Karonun genişliğini ve yüksekliğini seçin, ardından sütun, satır ve katman sayılarını belirleyin. Katman derinliği seviyeler arasındaki dikey adımı tanımlar.' },
  { name: 'Çizim katmanını seç', text: 'Çizmeden önce bir katman seçin. Etkin katmanın çerçevesi daha belirgindir; diğer görünür katmanlar mekânı anlamak için daha saydam kalır.' },
  { name: 'Zemini veya yapıyı çiz', text: 'Çimen, Taş, Su veya Yol seçin ve hücrelere tıklayın. Sonraki hücre farklı bir malzeme gerektiriyorsa paleti değiştirin.' },
  { name: 'Haritayı yerel olarak düzelt', text: 'Bir karoyu kaldırmak için Sil modunu veya sağ tıklamayı kullanın. Boyutlar değiştiğinde yeni sınırlar içindeki hücreler korunur.' },
  { name: 'Planlama sonucunu dışa aktar', text: 'Başka bir araç ızgarayı yeniden kuracaksa JSON kullanın. Tasarım incelemesi veya seviye taslağı için hızlı görsel referans olarak SVG kullanın.' },
];
const softwareApplication: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, applicationCategory: 'DeveloperApplication', operatingSystem: 'Any' };
const faqPage: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) };

export const content: ToolLocaleContent<IsometricTileMapEditorUI> = {
  slug: 'izometrik-karo-haritasi-editoru', title, description,
  ui: {
    controlsTitle: 'Harita kontrolleri', geometryTitle: 'Izgara geometrisi', tileWidthLabel: 'Karo genişliği', tileHeightLabel: 'Karo yüksekliği', columnsLabel: 'Sütunlar', rowsLabel: 'Satırlar', layersLabel: 'Katmanlar', layerDepthLabel: 'Katman derinliği', toolsTitle: 'Çizim modu', paintLabel: 'Çiz', eraseLabel: 'Sil', paletteTitle: 'Karo paleti', grassLabel: 'Çimen', stoneLabel: 'Taş', waterLabel: 'Su', pathLabel: 'Yol', layersTitle: 'Etkin katman', layerLabel: 'Katman', hideLayerLabel: 'Gizle', showLayerLabel: 'Göster', mapTitle: 'İzometrik harita', mapHelp: 'Bir karo ve katman seçin, ardından elmaslara tıklayın. Sağ tıklama hücreyi siler.', mapAriaLabel: 'Düzenlenebilir izometrik karo haritası', summaryTitle: 'Harita özeti', filledLabel: 'Dolu hücreler', coverageLabel: 'Kapsama', activeLayerLabel: 'Etkin katman', selectedLabel: 'Seçili karo', emptyCellLabel: 'Boş', cellLabel: 'Hücre', clearLabel: 'Haritayı temizle', resetLabel: 'Geometriyi sıfırla', exportJsonLabel: 'JSON dışa aktar', exportSvgLabel: 'SVG dışa aktar', statusReady: 'Çizime hazır', statusSaved: 'Yerel olarak kaydedildi', statusCleared: 'Harita temizlendi', statusReset: 'Geometri sıfırlandı', statusExported: 'Dosya dışa aktarıldı', statusPainted: 'Karo yerleştirildi', statusErased: 'Karo silindi', statusLayerHidden: 'Katman gizlendi', statusLayerShown: 'Katman gösterildi', legendTitle: 'Harita anahtarı', legendEmpty: 'Boş hücre', legendFilled: 'Çizilmiş hücre', modelNote: 'Bu düzenleyici katmanlı bir mantıksal ızgarayı tanımlar. Tileset içe aktarmaz, çarpışma hesaplamaz, motora özel sıralama ayarlamaz ve son piksel konumunu garanti etmez.', privacyDisclosure: 'Haritanız bu tarayıcıda kalır. Harita verisi veya telemetri yüklenmez.',
  },
  seo: [
    { type: 'title', level: 2, text: 'Alanı ve yüksekliği izometrik ızgarayla planla' },
    { type: 'paragraph', html: 'İzometrik harita, tam bir 3D sahneye dönüşmeden bir seviyenin zemin konumlarını ve yükseklik hissini okunabilir tutmak istediğinizde işe yarar. Elmas ızgara satır ve sütun hareketini görünür kılar; katmanlar köprüleri, platformları, çatıları veya üst üste odaları taslak hâline getirir.' },
    { type: 'paragraph', html: 'Bu düzenleyici geometriyi açıkça korur. Karo genişliği ve yüksekliği elması, sütunlar ve satırlar zemin alanını, katman derinliği ise her seviyenin ekranda ne kadar yukarı çıkacağını belirler. Boyutlar değiştiğinde sınırlar içinde kalan hücreler korunur.' },
    { type: 'title', level: 2, text: 'Beş adımda kullanışlı bir blockout oluştur' },
    { type: 'list', items: ['Karo oranlarını projenin görsel diline uyarla.', 'Hareket alanlarının okunabilir kalması için önce zemin malzemesini çiz.', 'Yüksekliği yalnızca renkle anlatmak yerine köprüler, çatılar ve yükseltilmiş platformlar için katman kullan.', 'Alttaki hücreleri güvenle düzeltmek için üst katmanları gizle veya Sil moduna geç.', 'Yeniden kurulum için JSON, görsel inceleme için SVG dışa aktar.'] },
    { type: 'title', level: 2, text: 'Satırları, sütunları ve katmanları ayrı oku' },
    { type: 'paragraph', html: 'Satırlar ve sütunlar bir hücrenin mantıksal düzlemdeki yerini belirtir ve elmasın görsel boyutu değişse bile sabit kalmalıdır. Katmanlar ikinci bir koordinattır: iki hücre aynı satır ve sütunu paylaşırken farklı yüksekliklerde olabilir. Bu ayrım haritayı motorda yeniden kurmayı kolaylaştırır.' },
    { type: 'table', headers: ['Sinyal', 'Anlamı', 'Sonraki karar'], rows: [['Düşük kapsama', 'Hücrelerin çoğu hâlâ boş.', 'Dekorasyondan önce oynanabilir alanı belirle.'], ['Bir sütunda birden fazla katman', 'Haritada üst üste binen alan var.', 'Sıralama ve çarpışmanın yükseklikleri ayırdığını kontrol et.'], ['Çok geniş elmas', 'Yatay hareket ızgaraya hâkim.', 'Karo genişliğini azalt veya referans görünümünü büyüt.'], ['Çok derin katman adımı', 'Yükseklik değişimleri çok belirgin.', 'Daha az katman kullan veya oyun varlıklarını kontrol et.']] },
    { type: 'title', level: 2, text: 'Sonraki iş için doğru dışa aktarmayı seç' },
    { type: 'paragraph', html: 'JSON yapılandırılmış aktarım biçimidir: geometriyi, katman sayısını, çizim durumunu ve her karo değerini korur. SVG görsel aktarım biçimidir: renkli elmaslar tasarım incelemesi, görev veya seviye planlama belgesinde kullanılabilir. Hiçbir aktarım kaynak tileset veya motor meta verisi içermez.' },
    { type: 'tip', title: 'Bu blockout neyi kanıtlayamaz?', html: 'İkna edici bir elmas haritası sprite sıralamasının doğru olduğunu, karakterlerin yükseklikler arasında ilerleyebildiğini veya tileset parçalarının dikişsiz birleştiğini kanıtlamaz. Gerçek varlıkları, çarpışmaları, sıralama eksenini ve kamerayı hedef motorda test edin.' },
  ],
  faqTitle: 'İzometrik karo haritası soruları', faq, bibliographyTitle: 'Karo haritası referansları', bibliography: bibliographyEntries, howTo, schemas: [softwareApplication, faqPage, howToSchema],
};
