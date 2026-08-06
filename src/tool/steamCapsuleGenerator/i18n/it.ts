import { createSteamContent } from './shared';

export const content = createSteamContent({
  slug: 'generatore-di-capsule-steam',
  title: 'Generatore di capsule Steam',
  description: 'Crea quattro anteprime Steam da un\'immagine master, regola il punto focale, controlla le zone sicure e scarica PNG o ZIP in locale.',
  ui: { uploadTitle: 'Trascina la grafica master', uploadHint: 'Un\'immagine ad alta risoluzione diventa un set completo di anteprime direttamente nel browser.', chooseFile: 'Scegli grafica', minimumSize: 'Dimensione minima', supportedFormats: 'PNG, JPEG o WebP', invalidImage: 'Scegli un\'immagine di almeno 1920 per 1080 pixel.', sourcePreview: 'Grafica master', focalPoint: 'Punto focale', focalHint: 'Fai clic sull\'immagine o usa i cursori per mantenere il soggetto importante in ogni ritaglio.', horizontalFocus: 'Orizzontale', verticalFocus: 'Verticale', resetFocus: 'Centra il punto focale', outputPreview: 'Set di uscite Steam', safeZone: 'Zona sicura', dimensions: 'pixel', downloadPng: 'PNG', downloadZip: 'Scarica ZIP', buildingZip: 'Creazione dell\'archivio locale...', zipReady: 'Set di capsule pronto', localOnly: 'Privacy prima di tutto. La grafica resta nel browser.', headerCapsule: 'Capsula intestazione', mainCapsule: 'Capsula principale', verticalCapsule: 'Capsula verticale', communityIcon: 'Icona community', ready: 'Pronto', downloadError: 'Impossibile creare l\'archivio. Prova i pulsanti PNG.', },
  seo: [
    { type: 'title', text: 'Un set coerente di capsule Steam da una sola grafica', level: 2 },
    { type: 'paragraph', html: 'Una scena può funzionare in orizzontale e perdere il personaggio nel formato verticale. Questo strumento mostra quattro ritagli dalla stessa immagine master: intestazione 460 per 215, principale 616 per 353, verticale 374 per 448 e icona quadrata 184 per 184 pixel. Il punto focale decide quale parte della composizione resta visibile quando cambia il rapporto.' },
    { type: 'paragraph', html: 'Il file viene elaborato localmente con canvas, senza caricamenti e senza account. Spostando il marcatore aggiorni tutte le anteprime e puoi controllare logo, volto, personaggio e contrasto prima dell\'esportazione.' },
    { type: 'title', text: 'Metodo rapido per l\'arte di un videogioco', level: 2 },
    { type: 'list', items: ['Parti da una master di almeno 1920 per 1080 pixel.', 'Metti il marcatore sul soggetto, non necessariamente al centro geometrico.', 'Controlla prima i formati verticale e quadrato.', 'Usa le zone sicure come margini visivi e confronta i modelli Steamworks aggiornati.'] },
    { type: 'paragraph', html: 'Le zone sicure sono guide compositive, non una garanzia per ogni interfaccia Steam. Tieni loghi e titoli lontani dai bordi affollati e verifica le regole Valve sul testo delle capsule.' },
    { type: 'tip', html: 'Conserva una master con spazio attorno al soggetto. Se serve un\'altra posizione del logo, modifica la sorgente e rigenera il set invece di deformare una capsula finita.' },
  ],
  faq: [
    { question: 'L\'immagine lascia il mio dispositivo?', answer: 'No. Viene letta e disegnata nel browser. Non c\'è upload e non serve un account.' },
    { question: 'Quale immagine master devo usare?', answer: 'PNG, JPEG o WebP di almeno 1920 per 1080 pixel lascia più spazio ai ritagli.' },
    { question: 'Cosa cambia il punto focale?', answer: 'Sposta il ritaglio della sorgente per tutte le uscite e protegge il soggetto principale.' },
    { question: 'Le zone sicure sono ufficiali?', answer: 'Sono guide pratiche. Confronta sempre i file con i modelli Steamworks correnti.' },
  ],
  howTo: [
    { name: 'Scegli una master', text: 'Trascina un PNG, JPEG o WebP di almeno 1920 per 1080 pixel.' },
    { name: 'Regola il fuoco', text: 'Fai clic sull\'anteprima o muovi i cursori orizzontale e verticale.' },
    { name: 'Controlla i ritagli', text: 'Esamina intestazione, principale, verticale e icona quadrata.' },
    { name: 'Scarica il set', text: 'Scarica PNG separati oppure crea un archivio ZIP locale.' },
  ],
});
