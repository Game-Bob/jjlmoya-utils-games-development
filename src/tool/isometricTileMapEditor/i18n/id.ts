import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { IsometricTileMapEditorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const title = 'Editor Peta Tile Isometrik';
const description = 'Gambar peta grid berlian berlapis, atur geometri tile, lalu ekspor sketsa level isometrik sebagai JSON atau SVG.';
const faq = [
  { question: 'Apa itu peta tile isometrik?', answer: 'Peta tile isometrik memakai grid berbentuk berlian untuk memberi kesan ruang tiga dimensi dalam adegan dua dimensi. Kolom dan baris menggambarkan bidang dasar, sedangkan layer menambahkan offset ketinggian.' },
  { question: 'Bagaimana cara menempatkan tile?', answer: 'Pilih tile dari palet, biarkan mode Paint aktif, pilih layer aktif, lalu klik berlian. Klik kanan akan menghapus sel meskipun mode Paint sedang dipilih.' },
  { question: 'Apa yang diubah oleh kedalaman layer?', answer: 'Kedalaman layer adalah jarak vertikal di layar antara layer yang ditumpuk. Naikkan nilainya untuk anak tangga yang lebih tinggi dan kecilkan ketika layer harus lebih berdekatan.' },
  { question: 'Bisakah SVG hasil ekspor dipakai di game engine?', answer: 'SVG adalah referensi visual yang berisi berlian dan warnanya. JSON lebih sesuai untuk membangun ulang grid logis di engine karena baris, kolom, layer, dan nilai tile tetap tersimpan.' },
  { question: 'Apakah editor ini membuat tileset siap produksi?', answer: 'Tidak. Editor ini merencanakan grid berlapis dan mengekspor deskripsi peta ringkas. Editor tidak memotong tekstur, mengatur collision, memilih sorting engine, atau menjamin hasil render akhir.' },
];
const howTo = [
  { name: 'Atur geometri grid', text: 'Pilih lebar dan tinggi tile, lalu tentukan jumlah kolom, baris, dan layer. Gunakan kedalaman layer untuk menjelaskan lompatan vertikal antar level.' },
  { name: 'Pilih layer gambar', text: 'Pilih layer sebelum menggambar. Layer aktif memiliki garis tepi lebih kuat, sementara layer lain yang terlihat tetap transparan agar konteks ruang terbaca.' },
  { name: 'Gambar dasar atau struktur', text: 'Pilih Rumput, Batu, Air, atau Jalan lalu klik sel. Ganti palet ketika sel berikutnya membutuhkan material lain.' },
  { name: 'Koreksi peta secara lokal', text: 'Gunakan Erase atau klik kanan untuk menghapus tile. Saat ukuran grid diubah, sel yang masih berada di dalam batas akan dipertahankan.' },
  { name: 'Ekspor hasil rancangan', text: 'Gunakan JSON jika alat lain akan membangun ulang grid. Gunakan SVG sebagai referensi visual cepat untuk review desain atau sketsa level.' },
];
const softwareApplication: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, applicationCategory: 'DeveloperApplication', operatingSystem: 'Any' };
const faqPage: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) };

export const content: ToolLocaleContent<IsometricTileMapEditorUI> = {
  slug: 'editor-peta-tile-isometrik', title, description,
  ui: {
    controlsTitle: 'Kontrol peta', geometryTitle: 'Geometri grid', tileWidthLabel: 'Lebar tile', tileHeightLabel: 'Tinggi tile', columnsLabel: 'Kolom', rowsLabel: 'Baris', layersLabel: 'Layer', layerDepthLabel: 'Kedalaman layer', toolsTitle: 'Mode gambar', paintLabel: 'Paint', eraseLabel: 'Erase', paletteTitle: 'Palet tile', grassLabel: 'Rumput', stoneLabel: 'Batu', waterLabel: 'Air', pathLabel: 'Jalan', layersTitle: 'Layer aktif', layerLabel: 'Layer', hideLayerLabel: 'Sembunyikan', showLayerLabel: 'Tampilkan', mapTitle: 'Peta isometrik', mapHelp: 'Pilih tile dan layer, lalu klik berlian. Klik kanan pada sel mana pun untuk menghapusnya.', mapAriaLabel: 'Peta tile isometrik yang dapat diedit', summaryTitle: 'Ringkasan peta', filledLabel: 'Sel terisi', coverageLabel: 'Cakupan', activeLayerLabel: 'Layer aktif', selectedLabel: 'Tile terpilih', emptyCellLabel: 'Kosong', cellLabel: 'Sel', clearLabel: 'Kosongkan peta', resetLabel: 'Atur ulang geometri', exportJsonLabel: 'Ekspor JSON', exportSvgLabel: 'Ekspor SVG', statusReady: 'Siap menggambar', statusSaved: 'Disimpan secara lokal', statusCleared: 'Peta dikosongkan', statusReset: 'Geometri diatur ulang', statusExported: 'File diekspor', statusPainted: 'Tile ditempatkan', statusErased: 'Tile dihapus', statusLayerHidden: 'Layer disembunyikan', statusLayerShown: 'Layer ditampilkan', legendTitle: 'Keterangan peta', legendEmpty: 'Sel kosong', legendFilled: 'Sel terisi', modelNote: 'Editor ini menjelaskan grid logis berlapis. Editor tidak mengimpor tileset, menghitung collision, mengatur sorting khusus engine, atau menjamin posisi piksel akhir.', privacyDisclosure: 'Peta Anda tetap berada di browser ini. Tidak ada data peta atau telemetri yang diunggah.',
  },
  seo: [
    { type: 'title', level: 2, text: 'Gunakan grid isometrik untuk merencanakan ruang dan ketinggian' },
    { type: 'paragraph', html: 'Peta isometrik berguna ketika level membutuhkan posisi dasar yang mudah dibaca dan kesan ketinggian tanpa menjadi adegan 3D penuh. Grid berlian membuat gerakan baris dan kolom terlihat, sedangkan layer membantu membuat sketsa jembatan, platform, atap, atau ruangan bertumpuk.' },
    { type: 'paragraph', html: 'Editor ini membuat geometri tetap jelas. Lebar dan tinggi tile mengatur berlian, kolom dan baris mengatur bidang dasar, sementara kedalaman layer menentukan seberapa jauh setiap level bergerak ke atas. Sel yang masih berada dalam batas akan dipertahankan saat ukuran diubah.' },
    { type: 'title', level: 2, text: 'Buat blockout yang berguna dalam lima tahap' },
    { type: 'list', items: ['Sesuaikan proporsi tile dengan bahasa visual proyek.', 'Gambar material dasar terlebih dahulu agar area yang dapat dilewati tetap terbaca.', 'Gunakan layer untuk jembatan, atap, dan platform tinggi, bukan hanya warna untuk menunjukkan ketinggian.', 'Sembunyikan layer atas atau gunakan Erase untuk memperbaiki sel di bawahnya dengan aman.', 'Ekspor JSON untuk membangun ulang peta dan SVG untuk review visual.'] },
    { type: 'title', level: 2, text: 'Baca baris, kolom, dan layer secara terpisah' },
    { type: 'paragraph', html: 'Baris dan kolom menunjukkan posisi sel pada bidang logis dan sebaiknya tetap stabil meskipun ukuran berlian berubah. Layer adalah koordinat kedua: dua sel dapat berbagi baris dan kolom yang sama tetapi berada pada ketinggian berbeda. Pemisahan ini membuat peta lebih mudah dibangun ulang di engine.' },
    { type: 'table', headers: ['Sinyal', 'Makna', 'Keputusan berikutnya'], rows: [['Cakupan rendah', 'Sebagian besar sel masih kosong.', 'Tentukan bidang yang dapat dimainkan sebelum menambah dekorasi.'], ['Beberapa layer dalam satu kolom', 'Peta memiliki ruang bertumpuk.', 'Pastikan sorting dan collision membedakan ketinggian tersebut.'], ['Berlian sangat lebar', 'Gerakan horizontal mendominasi grid.', 'Kurangi lebar tile atau perbesar viewport referensi.'], ['Langkah layer sangat dalam', 'Perubahan ketinggian terlihat kuat.', 'Gunakan lebih sedikit layer atau periksa asset game.']] },
    { type: 'title', level: 2, text: 'Pilih ekspor yang tepat untuk tugas berikutnya' },
    { type: 'paragraph', html: 'JSON adalah serah terima terstruktur: geometri, jumlah layer, mode gambar, dan semua nilai tile tetap tersimpan. SVG adalah serah terima presentasi: berlian berwarna dapat dipakai dalam review desain, catatan kerja, atau dokumen perencanaan level. Tidak ada ekspor yang berisi tileset sumber atau metadata engine.' },
    { type: 'tip', title: 'Hal yang tidak dapat dibuktikan oleh blockout ini', html: 'Peta berlian yang meyakinkan tidak membuktikan sprite akan tersortir dengan benar, karakter dapat berpindah antar ketinggian, atau tileset tersambung tanpa sambungan. Uji asset nyata, collision, sumbu sorting, dan kamera di engine target.' },
  ],
  faqTitle: 'Pertanyaan tentang peta tile isometrik', faq, bibliographyTitle: 'Referensi peta tile', bibliography: bibliographyEntries, howTo, schemas: [softwareApplication, faqPage, howToSchema],
};
