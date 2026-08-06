import { createSteamContent } from './shared';

export const content = createSteamContent({
  slug: 'generator-kapsul-steam',
  title: 'Generator Kapsul Steam',
  description: 'Buat empat pratinjau kapsul Steam dari satu gambar master, atur titik fokus, periksa zona aman, lalu unduh PNG atau ZIP secara lokal.',
  ui: { uploadTitle: 'Letakkan karya master', uploadHint: 'Satu gambar beresolusi tinggi menjadi satu set pratinjau Steam langsung di browser.', chooseFile: 'Pilih karya', minimumSize: 'Ukuran minimum', supportedFormats: 'PNG, JPEG, atau WebP', invalidImage: 'Pilih gambar minimal 1920 kali 1080 piksel.', sourcePreview: 'Karya master', focalPoint: 'Titik fokus', focalHint: 'Klik gambar atau gunakan penggeser agar subjek penting tetap terlihat pada setiap potongan.', horizontalFocus: 'Horizontal', verticalFocus: 'Vertikal', resetFocus: 'Pusatkan fokus', outputPreview: 'Set keluaran Steam', safeZone: 'Zona aman', dimensions: 'piksel', downloadPng: 'PNG', downloadZip: 'Unduh ZIP', buildingZip: 'Membuat arsip ZIP lokal...', zipReady: 'Set kapsul siap', localOnly: 'Privasi sejak awal. Karya Anda tetap di browser ini.', headerCapsule: 'Kapsul Header', mainCapsule: 'Kapsul Utama', verticalCapsule: 'Kapsul Vertikal', communityIcon: 'Ikon Komunitas', ready: 'Siap', downloadError: 'Arsip tidak dapat dibuat. Coba tombol PNG.', },
  seo: [
    { type: 'title', text: 'Buat set kapsul Steam yang konsisten dari satu gambar', level: 2 },
    { type: 'paragraph', html: 'Satu ilustrasi dapat terlihat baik dalam format lebar tetapi kehilangan karakter pada format vertikal. Alat ini menampilkan empat potongan dari gambar master yang sama: header 460 kali 215, utama 616 kali 353, vertikal 374 kali 448, dan ikon persegi 184 kali 184 piksel. Titik fokus menentukan bagian komposisi yang harus tetap terlihat ketika rasio berubah.' },
    { type: 'paragraph', html: 'Gambar diproses secara lokal dengan canvas. File tidak dikirim ke server dan akun tidak diperlukan. Saat penanda digeser, semua pratinjau diperbarui sehingga logo, wajah, karakter, dan kontras dapat diperiksa sebelum ekspor.' },
    { type: 'title', text: 'Alur praktis untuk karya game', level: 2 },
    { type: 'list', items: ['Mulai dengan gambar master minimal 1920 kali 1080 piksel.', 'Tempatkan penanda pada subjek visual, bukan selalu di tengah geometris.', 'Periksa pratinjau vertikal dan persegi terlebih dahulu.', 'Gunakan zona aman sebagai jarak visual dan bandingkan dengan templat Steamworks terbaru.'] },
    { type: 'paragraph', html: 'Zona aman adalah panduan komposisi, bukan jaminan untuk setiap tampilan Steam. Jauhkan logo dan judul dari tepi yang ramai, lalu periksa aturan Valve tentang teks pada kapsul.' },
    { type: 'tip', html: 'Simpan master dengan ruang di sekitar subjek. Jika posisi logo perlu berbeda, ubah gambar sumber dan buat ulang set daripada meregangkan kapsul yang sudah jadi.' },
  ],
  faq: [
    { question: 'Apakah gambar meninggalkan perangkat saya?', answer: 'Tidak. Gambar dibaca dan digambar di browser. Tidak ada unggahan atau akun.' },
    { question: 'Gambar master seperti apa yang digunakan?', answer: 'PNG, JPEG, atau WebP minimal 1920 kali 1080 piksel memberi ruang lebih untuk potongan.' },
    { question: 'Apa yang diubah titik fokus?', answer: 'Titik fokus memindahkan potongan sumber untuk semua keluaran dan menjaga subjek utama.' },
    { question: 'Apakah zona aman resmi?', answer: 'Zona tersebut adalah panduan praktis. Bandingkan file dengan templat Steamworks saat ini.' },
  ],
  howTo: [
    { name: 'Pilih gambar master', text: 'Letakkan PNG, JPEG, atau WebP minimal 1920 kali 1080 piksel.' },
    { name: 'Atur fokus', text: 'Klik pratinjau atau gerakkan penggeser horizontal dan vertikal.' },
    { name: 'Periksa empat potongan', text: 'Tinjau header, utama, vertikal, dan ikon persegi.' },
    { name: 'Unduh set', text: 'Unduh PNG terpisah atau buat arsip ZIP lokal.' },
  ],
});
