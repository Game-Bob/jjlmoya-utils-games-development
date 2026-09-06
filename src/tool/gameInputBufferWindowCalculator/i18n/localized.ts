import type { FAQItem, HowToStep, ToolLocaleContent } from '../../../types';
import type { SEOSection } from '@jjlmoya/utils-shared';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { content as english } from './en';
import type { GameInputBufferWindowCalculatorUI } from '../ui';

interface LocaleCopy {
  title: string;
  description: string;
  ui: GameInputBufferWindowCalculatorUI;
  seo: SEOSection[];
  faq: FAQItem[];
  howTo: HowToStep[];
}

const copies: Record<string, LocaleCopy> = {
  de: {
    title: 'Rechner für Eingabepuffer in Spielen',
    description: 'Animationframes, FPS, Eingabepuffer und Latenz in ein nutzbares Eingabefenster für dein Spiel umrechnen.',
    ui: {
      inputsTitle: 'Timing des Moves beschreiben', fpsLabel: 'Ziel-Framerate', fpsHint: 'Framerate der Spielschleife für die Umrechnung.', activeStartLabel: 'Erster aktiver Frame', activeStartHint: 'Erster Frame, der die Eingabe oder den Zustand akzeptiert.', activeEndLabel: 'Letzter aktiver Frame', activeEndHint: 'Letzter eingeschlossener Frame; beide Grenzen zählen.', bufferLabel: 'Gewünschter Eingabepuffer', bufferHint: 'Wie früh vor dem aktiven Fenster gedrückt werden darf.', latencyLabel: 'Geschätzte Eingabelatenz', latencyHint: 'Verzögerungsbudget, das vom Puffer abgezogen wird.', calculateLabel: 'Fenster berechnen', resetLabel: 'Werte zurücksetzen', stageKicker: '02 · Timing lesen', stageTitle: 'Wann kommt die Eingabe an?', stageCaption: 'Die Grafik verbindet Frame-Bereich und Latenzbudget mit einer Entscheidung für den Move.', statusReady: 'Fenster verfügbar', statusLate: 'Eingabe kommt zu spät', statusTight: 'Fenster ist knapp', statusInvalid: 'Eingaben prüfen', frameDurationLabel: 'Zeit pro Frame', activeWindowLabel: 'Aktive Animation', usableBufferLabel: 'Nutzbares Vorfenster', effectiveWindowLabel: 'Effektives Gesamtfenster', framesAvailableLabel: 'Verfügbare Frames', lateByLabel: 'Pufferdefizit', timingTitle: 'Puffer → aktive Frames', timingCaption: 'Die markierten Bereiche zeigen das Timing-Budget.', inputBufferLabel: 'gewünschter Puffer', activeFramesLabel: 'aktive Frames', latencyLabelShort: 'Latenz', frameAxis: 'Animationszeitlinie', zeroLabel: 'vor Frame 1', startLabel: 'Start', endLabel: 'Ende', resultTitle: 'Entscheidung', readyResult: 'Die geschätzte Latenz lässt nutzbare Zeit vor dem aktiven Animationsfenster.', tightResult: 'Die Eingabe kommt nicht zu spät, aber im Vorfenster bleibt weniger als ein voller Frame. Kleine Änderungen können spürbar sein.', lateResult: 'Die geschätzte Latenz ist größer als der gewünschte Puffer. Erhöhe den Puffer oder teste ein anderes Timing.', errorTitle: 'Eingabeprüfung', invalidNumber: 'Trage in jedes Feld eine Zahl ein.', invalidRange: 'Verwende Werte innerhalb der angezeigten Grenzen.', invalidOrder: 'Der letzte aktive Frame muss gleich oder später als der erste aktive Frame sein.', modelNote: 'Beide aktiven Frame-Grenzen zählen. Die Rechnung nutzt 1000 ÷ FPS Millisekunden pro Frame und zieht die Latenz nur vom Vorpuffer ab. Hardware und Spielgefühl werden nicht gemessen.', privacyDisclosure: 'Deine Timing-Werte bleiben für den nächsten Besuch in diesem Browser. Es werden keine Spieldaten gesendet.', unitMs: 'ms', unitFps: 'FPS', unitFrames: 'Frames',
    },
    seo: [
      { type: 'title', level: 2, text: 'Animationsframes in eine Timing-Entscheidung übersetzen' },
      { type: 'paragraph', html: 'Ein Move kann wie eine kurze Animationsfolge aussehen, lässt sich aber oft besser in Millisekunden beurteilen. Dieser Rechner verwendet Framerate sowie ersten und letzten gültigen Frame und zeigt die aktive Dauer. Danach wird die geschätzte Eingabelatenz vom gewünschten Vorpuffer abgezogen.' },
      { type: 'title', level: 2, text: 'So wird das Fenster berechnet' },
      { type: 'paragraph', html: 'Die Dauer eines Frames ist <code>1000 ÷ FPS</code>. Die aktive Dauer ergibt sich aus der Zahl der eingeschlossenen Frames. Das nutzbare Vorfenster ist <code>max(0, gewünschter Puffer − Latenz)</code>. Das effektive Fenster kombiniert Vorfenster und aktive Animationsdauer.' },
      { type: 'table', headers: ['Anzeige', 'Bedeutung', 'Nächster Schritt'], rows: [['Fenster verfügbar', 'Die Latenz lässt Zeit vor den aktiven Frames.', 'Timing im Playtest prüfen.'], ['Fenster ist knapp', 'Weniger als ein Frame Vorpuffer bleibt.', 'Änderungen um einen Frame vergleichen.'], ['Eingabe kommt zu spät', 'Die Latenz übersteigt den gewünschten Puffer.', 'Puffer vergrößern oder Timing verschieben.']] },
      { type: 'title', level: 2, text: 'Vor dem Playtest verwenden' },
      { type: 'paragraph', html: 'Übernimm die echten Frame-Nummern des Moves statt eine Dauer zu schätzen. Setze zuerst die Zielrate, trage den aktiven Bereich ein und dokumentiere deine Latenzannahme. Ändere danach jeweils nur eine Annahme, damit klar bleibt, warum sich das Timing verändert.' },
      { type: 'tip', title: 'Was der Rechner nicht messen kann', html: 'Dies ist ein lokales Timing-Modell, kein Test für Controller oder Display. Eingabeabtastung, Engine-Warteschlangen, Synchronisation und Spielgefühl müssen im Zielspiel geprüft werden.' },
    ],
    faq: [
      { question: 'Was misst dieser Rechner?', answer: 'Er wandelt einen Frame-Bereich in Millisekunden um, zieht die angegebene Latenz vom Eingabepuffer ab und zeigt die verbleibende Zeit. Er misst keine echte Hardware.' },
      { question: 'Wie wähle ich die aktiven Frames?', answer: 'Gib den ersten und letzten Frame ein, in dem die Aktion gültig oder aktiv ist. Beide Endpunkte werden gezählt.' },
      { question: 'Warum kann Latenz die Eingabe zu spät ankommen lassen?', answer: 'Der Puffer liegt vor dem aktiven Fenster. Ist die Latenz größer als dieser Puffer, wird die Eingabe erst nach diesem Schutzfenster wirksam.' },
      { question: 'Beweist das Ergebnis, dass sich ein Move gut anfühlt?', answer: 'Nein. Eingabeabtastung, Display, Spielzustand und Bestätigung beeinflussen das Gefühl. Das Ergebnis ist eine Tuning-Hypothese für den Playtest.' },
    ],
    howTo: [
      { name: 'Zielframerate festlegen', text: 'Gib die Framerate der Spielschleife ein. Bei 60 FPS dauert ein Frame etwa 16,67 Millisekunden.' },
      { name: 'Aktiven Frame-Bereich markieren', text: 'Trage den ersten und letzten Frame ein, der die Eingabe oder den aktiven Zustand akzeptiert.' },
      { name: 'Puffer und Latenz eintragen', text: 'Lege fest, wie früh gedrückt werden darf, und welche End-to-End-Latenz du einplanst.' },
      { name: 'Timing-Grafik lesen', text: 'Violett zeigt den gewünschten Vorpuffer, Türkis die aktiven Frames und Rot den von der Latenz verbrauchten Teil.' },
    ],
  },
  es: {
    title: 'Calculadora de ventana de buffer de entrada para juegos',
    description: 'Convierte frames de animación, FPS, buffer de entrada y latencia en una ventana utilizable para ajustar una mecánica.',
    ui: {
      inputsTitle: 'Describe el timing del movimiento', fpsLabel: 'Frecuencia objetivo', fpsHint: 'Frecuencia de la partida usada para convertir frames.', activeStartLabel: 'Primer frame activo', activeStartHint: 'Primer frame que acepta la entrada o el estado.', activeEndLabel: 'Último frame activo', activeEndHint: 'Último frame incluido; se cuentan los dos extremos.', bufferLabel: 'Buffer de entrada deseado', bufferHint: 'Cuánto antes se puede pulsar antes de la ventana activa.', latencyLabel: 'Latencia estimada', latencyHint: 'Retraso que se resta al buffer.', calculateLabel: 'Calcular ventana', resetLabel: 'Restablecer valores', stageKicker: '02 · Lee el timing', stageTitle: '¿Cuándo llega la entrada?', stageCaption: 'El mapa conecta tus frames y la latencia con una decisión para el movimiento.', statusReady: 'Ventana disponible', statusLate: 'La entrada llega tarde', statusTight: 'Ventana ajustada', statusInvalid: 'Revisa los datos', frameDurationLabel: 'Tiempo por frame', activeWindowLabel: 'Animación activa', usableBufferLabel: 'Preventana utilizable', effectiveWindowLabel: 'Ventana total efectiva', framesAvailableLabel: 'Frames disponibles', lateByLabel: 'Déficit de buffer', timingTitle: 'Buffer → frames activos', timingCaption: 'Las zonas marcadas muestran el presupuesto de tiempo.', inputBufferLabel: 'buffer deseado', activeFramesLabel: 'frames activos', latencyLabelShort: 'latencia', frameAxis: 'línea temporal de animación', zeroLabel: 'antes del frame 1', startLabel: 'inicio', endLabel: 'final', resultTitle: 'Decisión', readyResult: 'La latencia estimada deja tiempo utilizable antes de la ventana activa.', tightResult: 'La entrada no llega tarde, pero queda menos de un frame completo de preventana. Los cambios pequeños pueden notarse.', lateResult: 'La latencia estimada supera el buffer deseado. Aumenta el buffer o prueba otro timing.', errorTitle: 'Revisión de datos', invalidNumber: 'Introduce un número en todos los campos.', invalidRange: 'Usa valores dentro de los límites indicados.', invalidOrder: 'El último frame activo debe ser igual o posterior al primero.', modelNote: 'Se cuentan los dos extremos del rango activo. La fórmula usa 1000 ÷ FPS milisegundos por frame y resta la latencia solo al buffer previo. No mide hardware ni sensaciones.', privacyDisclosure: 'Tus valores se guardan solo en este navegador para la próxima visita. No se envían datos del juego.', unitMs: 'ms', unitFps: 'FPS', unitFrames: 'frames',
    },
    seo: [
      { type: 'title', level: 2, text: 'Convierte frames de animación en una decisión de timing' },
      { type: 'paragraph', html: 'Un movimiento puede parecer una secuencia corta, pero su ventana de juego se entiende mejor en milisegundos. Esta calculadora usa los FPS y el primer y último frame válido para mostrar la duración activa. Después resta la latencia estimada del buffer previo para comprobar cuánto tiempo queda.' },
      { type: 'title', level: 2, text: 'Cómo se calcula la ventana' },
      { type: 'paragraph', html: 'La duración de un frame es <code>1000 ÷ FPS</code>. La duración activa es el número de frames incluidos por ese valor. La preventana utilizable es <code>max(0, buffer deseado − latencia)</code>. La ventana efectiva suma la preventana y la animación activa.' },
      { type: 'table', headers: ['Lectura', 'Qué significa', 'Siguiente paso'], rows: [['Ventana disponible', 'La latencia deja tiempo antes de los frames activos.', 'Lleva el timing a un playtest.'], ['Ventana ajustada', 'Queda menos de un frame de buffer previo.', 'Compara cambios de un frame.'], ['La entrada llega tarde', 'La latencia es mayor que el buffer deseado.', 'Aumenta el buffer o mueve la ventana.']] },
      { type: 'title', level: 2, text: 'Úsala antes de probar la mecánica' },
      { type: 'paragraph', html: 'Introduce los frames reales del movimiento, no una duración aproximada. Fija la frecuencia objetivo, añade el rango activo y usa una estimación de latencia que puedas justificar. Cambia una sola suposición cada vez para entender qué está provocando la diferencia.' },
      { type: 'tip', title: 'Qué no puede medir', html: 'Es un modelo local de timing, no una prueba de mando o pantalla. La toma de entrada, las colas del motor, la sincronización y la sensación final deben comprobarse dentro del juego.' },
    ],
    faq: [
      { question: '¿Qué mide esta calculadora?', answer: 'Convierte un rango de frames a milisegundos, resta la latencia indicada al buffer y muestra el tiempo que queda. No mide un mando ni una pantalla reales.' },
      { question: '¿Cómo elijo los frames activos?', answer: 'Introduce el primer y el último frame en el que la acción es válida o está activa. Se cuentan ambos extremos.' },
      { question: '¿Por qué la latencia puede hacer que la entrada llegue tarde?', answer: 'El buffer está antes de la ventana activa. Si la latencia supera ese buffer, la entrada llega después de la preventana que querías proteger.' },
      { question: '¿El resultado demuestra que el movimiento se siente bien?', answer: 'No. También influyen el muestreo, la pantalla, el estado del juego y la confirmación. Usa el resultado como hipótesis para el playtest.' },
    ],
    howTo: [
      { name: 'Define los FPS objetivo', text: 'Introduce la frecuencia de la partida. A 60 FPS cada frame dura aproximadamente 16,67 milisegundos.' },
      { name: 'Marca la ventana activa', text: 'Indica el primer y el último frame que aceptan la entrada o representan el estado activo.' },
      { name: 'Añade buffer y latencia', text: 'Define cuánto antes se puede pulsar y qué retraso total quieres descontar.' },
      { name: 'Lee el mapa temporal', text: 'El área violeta es el buffer deseado, la turquesa son los frames activos y la marca roja muestra la parte consumida por la latencia.' },
    ],
  },
  fr: {
    title: 'Calculateur de fenêtre de buffer entrée pour jeu',
    description: 'Convertissez les frames animation, les FPS, le buffer entrée et la latence en fenêtre exploitable pour régler une mécanique.',
    ui: {
      inputsTitle: 'Décrire le timing du mouvement', fpsLabel: 'Fréquence cible', fpsHint: 'Fréquence de la boucle utilisée pour la conversion.', activeStartLabel: 'Première frame active', activeStartHint: 'Première frame qui accepte entrée ou état.', activeEndLabel: 'Dernière frame active', activeEndHint: 'Dernière frame incluse ; les deux bornes comptent.', bufferLabel: 'Buffer entrée souhaité', bufferHint: 'Temps avant la fenêtre active pendant lequel on peut appuyer.', latencyLabel: 'Latence entrée estimée', latencyHint: 'Délai à retirer du buffer.', calculateLabel: 'Calculer la fenêtre', resetLabel: 'Réinitialiser', stageKicker: '02 · Lire le timing', stageTitle: 'Quand entrée arrive-t-elle ?', stageCaption: 'La carte relie les frames et le budget de latence à une décision de réglage.', statusReady: 'Fenêtre disponible', statusLate: 'Entrée trop tardive', statusTight: 'Fenêtre serrée', statusInvalid: 'Vérifier les valeurs', frameDurationLabel: 'Durée une frame', activeWindowLabel: 'Animation active', usableBufferLabel: 'Préfenêtre utile', effectiveWindowLabel: 'Fenêtre totale effective', framesAvailableLabel: 'Frames disponibles', lateByLabel: 'Manque de buffer', timingTitle: 'Buffer → frames actives', timingCaption: 'Les zones indiquent le budget de temps.', inputBufferLabel: 'buffer souhaité', activeFramesLabel: 'frames actives', latencyLabelShort: 'latence', frameAxis: 'ligne du temps de animation', zeroLabel: 'avant la frame 1', startLabel: 'début', endLabel: 'fin', resultTitle: 'Décision', readyResult: 'La latence estimée laisse du temps utile avant la fenêtre active.', tightResult: 'entrée est pas en retard, mais il reste moins une frame complète avant la fenêtre. Les petits changements peuvent se sentir.', lateResult: 'La latence estimée dépasse le buffer souhaité. Augmentez le buffer ou testez un autre timing.', errorTitle: 'Vérification', invalidNumber: 'Saisissez un nombre dans chaque champ.', invalidRange: 'Utilisez des valeurs dans les limites affichées.', invalidOrder: 'La dernière frame active doit être égale ou postérieure à la première.', modelNote: 'Les deux bornes actives sont comptées. Le calcul utilise 1000 ÷ FPS millisecondes par frame et retire la latence uniquement du pré-buffer. Il ne mesure ni matériel ni sensation.', privacyDisclosure: 'Vos valeurs restent dans ce navigateur pour votre prochaine visite. Aucune donnée du jeu est envoyée.', unitMs: 'ms', unitFps: 'FPS', unitFrames: 'frames',
    },
    seo: [
      { type: 'title', level: 2, text: 'Transformer les frames animation en décision de timing' },
      { type: 'paragraph', html: 'Un mouvement peut sembler court à écran, alors que sa fenêtre de jeu se comprend mieux en millisecondes. Cet outil utilise les FPS et les première et dernière frames valides pour afficher la durée active, puis retire la latence estimée du buffer avant action.' },
      { type: 'title', level: 2, text: 'Calcul de la fenêtre' },
      { type: 'paragraph', html: 'La durée une frame vaut <code>1000 ÷ FPS</code>. La durée active est le nombre de frames incluses multiplié par cette durée. La préfenêtre utile est <code>max(0, buffer souhaité − latence)</code>. La fenêtre effective additionne les deux parties.' },
      { type: 'table', headers: ['Lecture', 'Signification', 'Suite'], rows: [['Fenêtre disponible', 'La latence laisse du temps avant les frames actives.', 'Vérifier le timing en jeu.'], ['Fenêtre serrée', 'Moins une frame de pré-buffer reste.', 'Comparer les changements une frame.'], ['Entrée trop tardive', 'La latence dépasse le buffer souhaité.', 'Augmenter le buffer ou déplacer la fenêtre.']] },
      { type: 'title', level: 2, text: 'utiliser avant le playtest' },
      { type: 'paragraph', html: 'Saisissez les numéros de frames réels du mouvement plutôt qune durée estimée. Fixez la fréquence, entrez la plage active et notez hypothèse de latence. Modifiez ensuite une seule hypothèse à la fois pour isoler la cause du changement.' },
      { type: 'tip', title: 'Ce que utile ne mesure pas', html: 'Il agit en modèle local, pas en test de manette ou écran. échantillonnage, les files du moteur, la synchronisation et le ressenti doivent être vérifiés dans le jeu cible.' },
    ],
    faq: [
      { question: 'Que mesure ce calculateur ?', answer: 'Il convertit une plage de frames en millisecondes, retire la latence indiquée du buffer et affiche le temps restant. Il ne mesure pas le matériel réel.' },
      { question: 'Comment choisir les frames actives ?', answer: 'Entrez la première et la dernière frame où action est valide ou active. Les deux limites sont incluses.' },
      { question: 'Pourquoi la latence peut-elle retarder entrée ?', answer: 'Le buffer se trouve avant la fenêtre active. Si la latence le dépasse, entrée arrive après la préfenêtre souhaitée.' },
      { question: 'Le résultat prouve-t-il qen mouvement est agréable ?', answer: 'Non. Le sampling, écran, état du jeu et la confirmation comptent aussi. Utilisez ce résultat comme hypothèse de réglage.' },
    ],
    howTo: [
      { name: 'Choisir les FPS', text: 'Saisissez la fréquence de la boucle. À 60 FPS, une frame dure environ 16,67 millisecondes.' },
      { name: 'Marquer la plage active', text: 'Indiquez la première et la dernière frame qui acceptent entrée ou représentent état actif.' },
      { name: 'Ajouter buffer et latence', text: 'Définissez avance autorisée et le délai total à déduire.' },
      { name: 'Lire la carte temporelle', text: 'La zone violette est le buffer, la zone turquoise les frames actives et le marqueur rouge la part consommée par la latence.' },
    ],
  },
};

const fallbackCopies: Record<string, LocaleCopy> = {
  id: { ...(copies.es as LocaleCopy), title: 'Kalkulator jendela buffer input game', description: 'Ubah frame animasi, FPS, buffer input, dan latensi menjadi jendela input yang dapat digunakan.' },
  it: { ...(copies.fr as LocaleCopy), title: 'Calcolatore della finestra di buffer input per giochi', description: 'Converti frame di animazione, FPS, buffer input e latenza in una finestra utile per regolare una meccanica.' },
  ja: { ...(copies.es as LocaleCopy), title: 'ゲーム入力バッファウィンドウ計算機', description: 'アニメーションフレーム、FPS、入力バッファ、遅延から実用的な入力ウィンドウを計算します。' },
  ko: { ...(copies.es as LocaleCopy), title: '게임 입력 버퍼 윈도우 계산기', description: '애니메이션 프레임, FPS, 입력 버퍼와 지연 시간을 실제 입력 윈도우로 변환합니다.' },
  nl: { ...(copies.fr as LocaleCopy), title: 'Rekenaar voor het inputbuffervenster van games', description: 'Zet animatieframes, FPS, inputbuffer en latentie om in een bruikbaar venster voor je gameplay.' },
  pl: { ...(copies.es as LocaleCopy), title: 'Kalkulator okna bufora wejścia w grze', description: 'Przelicz klatki animacji, FPS, bufor wejścia i opóźnienie na użyteczne okno wejściowe.' },
  pt: { ...(copies.es as LocaleCopy), title: 'Calculadora da janela de buffer de entrada do jogo', description: 'Converta frames de animação, FPS, buffer de entrada e latência numa janela útil para ajustar uma mecânica.' },
  ru: { ...(copies.es as LocaleCopy), title: 'Калькулятор окна буфера ввода в игре', description: 'Переводит кадры анимации, FPS, буфер ввода и задержку в рабочее окно ввода.' },
  sv: { ...(copies.fr as LocaleCopy), title: 'Kalkylator för spelens inputbuffertfönster', description: 'Omvandla animationsbilder, FPS, inputbuffert och fördröjning till ett användbart fönster.' },
  tr: { ...(copies.es as LocaleCopy), title: 'Oyun giriş tamponu penceresi hesaplayıcı', description: 'Animasyon karelerini, FPS değerini, giriş tamponunu ve gecikmeyi kullanılabilir bir giriş penceresine dönüştürür.' },
  zh: { ...(copies.es as LocaleCopy), title: '游戏输入缓冲窗口计算器', description: '将动画帧、FPS、输入缓冲和延迟转换为可用的游戏输入窗口。' },
};

const translatedExtras: Record<string, Pick<LocaleCopy, 'seo' | 'faq' | 'howTo'>> = {
  id: {
    seo: [
      { type: 'title', level: 2, text: 'Ubah frame animasi menjadi keputusan timing' },
      { type: 'paragraph', html: 'Sebuah gerakan dapat terlihat singkat, tetapi jendela gameplay lebih mudah dibaca dalam milidetik. Masukkan FPS serta frame awal dan akhir yang valid untuk melihat durasi aktif. Latensi perkiraan kemudian dikurangi dari buffer sebelum aksi.' },
      { type: 'title', level: 2, text: 'Cara menghitung jendela input' },
      { type: 'paragraph', html: 'Durasi satu frame adalah <code>1000 ÷ FPS</code>. Durasi aktif mengalikan jumlah frame dengan nilai itu. Buffer yang masih berguna adalah <code>max(0, buffer − latensi)</code>. Jendela efektif menjumlahkan buffer yang tersisa dan animasi aktif.' },
      { type: 'table', headers: ['Hasil', 'Arti', 'Langkah berikutnya'], rows: [['Jendela tersedia', 'Latensi masih menyisakan waktu sebelum frame aktif.', 'Uji timing tersebut di dalam game.'], ['Jendela sempit', 'Kurang dari satu frame tersisa sebelum aksi.', 'Bandingkan perubahan satu frame.'], ['Input terlambat', 'Latensi lebih besar daripada buffer.', 'Perbesar buffer atau pindahkan jendela aktif.']] },
      { type: 'title', level: 2, text: 'Gunakan sebelum playtest' },
      { type: 'paragraph', html: 'Masukkan nomor frame sebenarnya dari animasi, bukan durasi tebakan. Tetapkan FPS, isi rentang aktif, lalu catat asumsi latensi. Ubah satu angka setiap kali agar penyebab perubahan timing tetap jelas.' },
      { type: 'tip', title: 'Yang tidak dapat diukur alat ini', html: 'Ini adalah model timing lokal, bukan pengujian kontroler atau layar. Sampling input, antrean engine, sinkronisasi, dan rasa bermain harus diperiksa di game yang sebenarnya.' },
    ],
    faq: [
      { question: 'Apa yang dihitung kalkulator ini?', answer: 'Alat ini mengubah rentang frame menjadi milidetik, mengurangi latensi dari buffer, lalu menampilkan waktu yang tersisa. Alat ini tidak mengukur perangkat nyata.' },
      { question: 'Bagaimana memilih frame aktif?', answer: 'Masukkan frame pertama dan terakhir ketika aksi valid atau aktif. Kedua batas tersebut ikut dihitung.' },
      { question: 'Mengapa latensi dapat membuat input terlambat?', answer: 'Buffer berada sebelum jendela aktif. Jika latensi lebih besar, input tiba setelah waktu awal yang ingin dilindungi.' },
      { question: 'Apakah hasilnya menjamin gerakan terasa responsif?', answer: 'Tidak. Sampling, layar, keadaan game, dan konfirmasi juga berpengaruh. Jadikan hasil ini hipotesis sebelum playtest.' },
    ],
    howTo: [
      { name: 'Atur FPS target', text: 'Masukkan frekuensi loop game. Pada 60 FPS, satu frame berlangsung sekitar 16,67 milidetik.' },
      { name: 'Tandai rentang aktif', text: 'Masukkan frame pertama dan terakhir yang menerima input atau menunjukkan keadaan aktif.' },
      { name: 'Isi buffer dan latensi', text: 'Tentukan seberapa awal pemain boleh menekan dan berapa latensi yang harus dikurangi.' },
      { name: 'Baca peta waktu', text: 'Area ungu adalah buffer yang diminta, area biru kehijauan adalah frame aktif, dan penanda merah menunjukkan bagian yang dimakan latensi.' },
    ],
  },
  it: {
    seo: [
      { type: 'title', level: 2, text: 'Trasforma i frame delanimazione in una scelta di timing' },
      { type: 'paragraph', html: 'Un movimento può durare pochi fotogrammi, ma la sua finestra di gioco è più chiara in millisecondi. Inserisci FPS e primo e ultimo frame validi per ottenere la durata attiva. La latenza stimata viene sottratta al buffer previsto prima delazione.' },
      { type: 'title', level: 2, text: 'Come viene calcolata la finestra' },
      { type: 'paragraph', html: 'La durata di un frame è <code>1000 ÷ FPS</code>. La durata attiva è il numero di frame inclusi moltiplicato per questo valore. Il pre-buffer utilizzabile è <code>max(0, buffer richiesto − latenza)</code>. La finestra effettiva somma le due parti.' },
      { type: 'table', headers: ['Lettura', 'Significato', 'Prossimo passo'], rows: [['Finestra disponibile', 'La latenza lascia tempo prima dei frame attivi.', 'Verifica il timing nel playtest.'], ['Finestra stretta', 'Resta meno di un frame prima delazione.', 'Confronta modifiche di un frame.'], ['Input in ritardo', 'La latenza supera il buffer richiesto.', 'Aumenta il buffer o sposta la finestra.']] },
      { type: 'title', level: 2, text: 'Usalo prima di provare la meccanica' },
      { type: 'paragraph', html: 'Usa i numeri reali dei frame del movimento, non una durata stimata. Imposta la frequenza, inserisci intervallo attivo e annota ipotesi di latenza. Modifica una sola ipotesi alla volta per capire la causa del cambiamento.' },
      { type: 'tip', title: 'Cosa non può misurare', html: 'È un modello locale del timing, non un test di controller o display. Campionamento, code del motore, sincronizzazione e sensazione devono essere verificati nel gioco finale.' },
    ],
    faq: [
      { question: 'Che cosa misura il calcolatore?', answer: 'Converte un intervallo di frame in millisecondi, sottrae la latenza dal buffer e mostra il tempo rimasto. Non misura hardware reale.' },
      { question: 'Come scelgo i frame attivi?', answer: 'Inserisci il primo e último frame in cui azione è valida o attiva. Entrambi gli estremi sono inclusi.' },
      { question: 'Perché la latenza può far arrivare tardi input?', answer: 'Il buffer si trova prima della finestra attiva. Se la latenza lo supera, input arriva dopo la pre-finestra desiderata.' },
      { question: 'Il risultato dimostra che il movimento è piacevole?', answer: 'No. Influiscono anche campionamento, display, stato del gioco e conferma delazione. Usalo come ipotesi di tuning.' },
    ],
    howTo: [
      { name: 'Imposta gli FPS', text: 'Inserisci la frequenza del loop. A 60 FPS un frame dura circa 16,67 millisecondi.' },
      { name: 'Indica intervallo attivo', text: 'Inserisci il primo e último frame che accettano input o rappresentano lo stato attivo.' },
      { name: 'Aggiungi buffer e latenza', text: 'Definisci anticipo consentito e il ritardo totale da sottrarre.' },
      { name: 'Leggi la mappa temporale', text: 'La zona viola è il buffer, quella turchese i frame attivi e il segno rosso la parte consumata dalla latenza.' },
    ],
  },
  ja: {
    seo: [
      { type: 'title', level: 2, text: 'アニメーションのフレームを入力タイミングの判断に変える' },
      { type: 'paragraph', html: '動作の長さはミリ秒で見ると判断しやすくなります。FPSと有効な最初・最後のフレームを入力すると、アクティブ時間を計算できます。その後、入力遅延を事前バッファから差し引きます。' },
      { type: 'title', level: 2, text: 'ウィンドウの計算方法' },
      { type: 'paragraph', html: '1フレームは <code>1000 ÷ FPS</code> ミリ秒です。アクティブ時間は含まれるフレーム数を掛けます。使用可能な事前時間は <code>max(0, バッファ − 遅延)</code> です。結果は残った時間とアニメーション時間を合わせます。' },
      { type: 'table', headers: ['表示', '意味', '次の作業'], rows: [['使用可能', '有効フレームの前に時間が残っています。', '実際のゲームでプレイテストします。'], ['余裕が小さい', '事前時間が1フレーム未満です。', '1フレーム単位で比較します。'], ['入力が遅い', '遅延がバッファを超えています。', 'バッファを増やすか配置を変えます。']] },
      { type: 'title', level: 2, text: 'プレイテストの前に使う' },
      { type: 'paragraph', html: '推測した秒数ではなく、実際のアニメーションのフレーム番号を入力します。FPS、アクティブ範囲、遅延の前提を順に決め、毎回ひとつの条件だけを変えると原因を確認できます。' },
      { type: 'tip', title: 'この計算で分からないこと', html: 'これはローカルなタイミングモデルであり、コントローラーや画面を測定するものではありません。入力サンプリング、エンジンのキュー、同期、操作感は対象ゲームで確認してください。' },
    ],
    faq: [
      { question: 'この計算機は何を計算しますか？', answer: 'フレーム範囲をミリ秒に変換し、入力遅延をバッファから引いて残り時間を表示します。実機の測定ではありません。' },
      { question: 'アクティブフレームはどう選びますか？', answer: '動作が有効またはアクティブになる最初と最後のフレームを入力します。両端を含めて数えます。' },
      { question: 'なぜ遅延で入力が遅れるのですか？', answer: 'バッファはアクティブ範囲より前にあります。遅延が大きいと、入力が事前時間の後に到着します。' },
      { question: '結果だけで操作感を保証できますか？', answer: 'できません。サンプリング、画面、ゲーム状態、確認演出も影響します。プレイテストの仮説として使います。' },
    ],
    howTo: [
      { name: '目標FPSを設定する', text: 'ゲームループのFPSを入力します。60 FPSでは1フレーム約16.67ミリ秒です。' },
      { name: 'アクティブ範囲を指定する', text: '入力を受け付ける、またはアクティブ状態になる最初と最後のフレームを入力します。' },
      { name: 'バッファと遅延を入力する', text: '何ミリ秒前から入力を許可するかと、差し引く遅延を設定します。' },
      { name: 'タイミング図を読む', text: '紫は要求したバッファ、水色はアクティブフレーム、赤い印は遅延が消費した部分です。' },
    ],
  },
  ko: {
    seo: [
      { type: 'title', level: 2, text: '애니메이션 프레임을 입력 타이밍 판단으로 바꾸기' },
      { type: 'paragraph', html: '동작의 게임플레이 구간은 밀리초로 보면 더 쉽게 비교할 수 있습니다. FPS와 유효한 첫 프레임, 마지막 프레임을 입력하면 활성 시간을 계산하고, 예상 입력 지연을 사전 버퍼에서 뺍니다.' },
      { type: 'title', level: 2, text: '윈도우 계산 방식' },
      { type: 'paragraph', html: '한 프레임의 시간은 <code>1000 ÷ FPS</code>입니다. 활성 시간은 포함된 프레임 수를 곱합니다. 사용 가능한 사전 시간은 <code>max(0, 버퍼 − 지연)</code>이며, 남은 버퍼와 활성 애니메이션을 합쳐 최종 윈도우를 만듭니다.' },
      { type: 'table', headers: ['표시', '의미', '다음 단계'], rows: [['윈도우 사용 가능', '활성 프레임 전에 시간이 남습니다.', '게임 안에서 플레이테스트합니다.'], ['윈도우가 좁음', '사전 버퍼가 한 프레임보다 작습니다.', '한 프레임 단위의 변경을 비교합니다.'], ['입력이 늦음', '지연이 버퍼보다 큽니다.', '버퍼를 늘리거나 구간을 이동합니다.']] },
      { type: 'title', level: 2, text: '플레이테스트 전에 사용하기' },
      { type: 'paragraph', html: '추정한 길이가 아니라 실제 애니메이션의 프레임 번호를 입력하세요. FPS, 활성 범위, 지연 가정을 순서대로 정하고 한 번에 하나의 값만 바꾸면 차이의 원인을 확인하기 쉽습니다.' },
      { type: 'tip', title: '이 계산으로 알 수 없는 것', html: '이 도구는 로컬 타이밍 모델이며 컨트롤러나 디스플레이를 측정하지 않습니다. 입력 샘플링, 엔진 큐, 동기화, 조작감은 실제 게임에서 확인해야 합니다.' },
    ],
    faq: [
      { question: '이 계산기는 무엇을 계산하나요?', answer: '프레임 범위를 밀리초로 바꾸고 입력 지연을 버퍼에서 빼서 남은 시간을 보여줍니다. 실제 장치를 측정하지는 않습니다.' },
      { question: '활성 프레임은 어떻게 고르나요?', answer: '동작이 유효하거나 활성인 첫 프레임과 마지막 프레임을 입력합니다. 양 끝 프레임을 모두 셉니다.' },
      { question: '왜 지연 때문에 입력이 늦어질 수 있나요?', answer: '버퍼는 활성 구간 앞에 있습니다. 지연이 버퍼보다 크면 입력이 보호하려던 사전 구간 뒤에 도착합니다.' },
      { question: '결과가 조작감을 보장하나요?', answer: '아닙니다. 샘플링, 화면, 게임 상태와 확인 연출도 영향을 줍니다. 플레이테스트를 위한 가설로 사용하세요.' },
    ],
    howTo: [
      { name: '목표 FPS 설정', text: '게임 루프의 FPS를 입력합니다. 60 FPS에서는 한 프레임이 약 16.67밀리초입니다.' },
      { name: '활성 범위 표시', text: '입력을 받거나 활성 상태가 되는 첫 프레임과 마지막 프레임을 입력합니다.' },
      { name: '버퍼와 지연 입력', text: '얼마나 일찍 입력할 수 있는지와 차감할 지연 시간을 설정합니다.' },
      { name: '타이밍 지도 읽기', text: '보라색은 요청한 버퍼, 청록색은 활성 프레임, 빨간 표시는 지연이 사용한 부분입니다.' },
    ],
  },
  nl: {
    seo: [
      { type: 'title', level: 2, text: 'Animatieframes omzetten naar een timingbeslissing' },
      { type: 'paragraph', html: 'Een beweging kan kort lijken, maar de gameplayvenster is beter te beoordelen in milliseconden. Vul FPS en de eerste en laatste geldige frame in om de actieve duur te zien. Daarna trekt de tool de geschatte invoervertraging af van de buffer vóór de actie.' },
      { type: 'title', level: 2, text: 'Zo wordt het venster berekend' },
      { type: 'paragraph', html: 'De duur van één frame is <code>1000 ÷ FPS</code>. De actieve duur is het aantal opgenomen frames maal die duur. De bruikbare voorbuffer is <code>max(0, gewenste buffer − latentie)</code>. Het effectieve venster combineert beide delen.' },
      { type: 'table', headers: ['Uitlezing', 'Betekenis', 'Volgende stap'], rows: [['Venster beschikbaar', 'De latentie laat tijd vóór de actieve frames over.', 'Test deze timing in het spel.'], ['Venster krap', 'Er blijft minder dan één frame over.', 'Vergelijk wijzigingen van één frame.'], ['Input te laat', 'De latentie is groter dan de buffer.', 'Vergroot de buffer of verplaats het venster.']] },
      { type: 'title', level: 2, text: 'Gebruik dit vóór een playtest' },
      { type: 'paragraph', html: 'Gebruik de echte framenummers van de beweging, niet een geschatte duur. Stel eerst de frequentie in, vul het actieve bereik in en noteer je latentie-aanname. Verander daarna steeds één aanname om de oorzaak van een verschil te vinden.' },
      { type: 'tip', title: 'Wat deze calculator niet meet', html: 'Dit is een lokaal timingmodel, geen test van controller of scherm. Inputsampling, enginewachtrijen, synchronisatie en gevoel moeten in de echte game worden gecontroleerd.' },
    ],
    faq: [
      { question: 'Wat berekent deze tool?', answer: 'De tool zet een framebereik om naar milliseconden, trekt de opgegeven latentie van de buffer af en toont de resterende tijd. Hardware wordt niet gemeten.' },
      { question: 'Hoe kies ik de actieve frames?', answer: 'Vul de eerste en laatste frame in waarin de actie geldig of actief is. Beide grenzen worden meegeteld.' },
      { question: 'Waarom kan latentie de input te laat maken?', answer: 'De buffer ligt vóór het actieve venster. Als de latentie groter is, komt de input pas na de gewenste voorperiode aan.' },
      { question: 'Bewijst het resultaat dat een beweging goed aanvoelt?', answer: 'Nee. Sampling, scherm, gamestatus en bevestiging spelen ook mee. Gebruik het als tuninghypothese.' },
    ],
    howTo: [
      { name: 'Stel de doel-FPS in', text: 'Vul de frequentie van de gameloop in. Bij 60 FPS duurt een frame ongeveer 16,67 milliseconden.' },
      { name: 'Markeer het actieve bereik', text: 'Geef de eerste en laatste frame op die input accepteren of de actieve toestand tonen.' },
      { name: 'Voeg buffer en latentie toe', text: 'Kies hoe vroeg de speler mag drukken en welke totale vertraging je aftrekt.' },
      { name: 'Lees de tijdkaart', text: 'Paars is de gewenste buffer, turquoise zijn de actieve frames en rood toont het deel dat door latentie wordt verbruikt.' },
    ],
  },
  pl: {
    seo: [
      { type: 'title', level: 2, text: 'Zamień klatki animacji na decyzję o czasie wejścia' },
      { type: 'paragraph', html: 'Krótki ruch może mieć okno rozgrywki, które łatwiej ocenić w milisekundach. Podaj FPS oraz pierwszą i ostatnią poprawną klatkę, aby obliczyć czas aktywny. Następnie szacowane opóźnienie zostanie odjęte od bufora przed akcją.' },
      { type: 'title', level: 2, text: 'Jak obliczane jest okno' },
      { type: 'paragraph', html: 'Czas jednej klatki to <code>1000 ÷ FPS</code>. Czas aktywny to liczba uwzględnionych klatek pomnożona przez tę wartość. Użyteczny bufor to <code>max(0, wymagany bufor − opóźnienie)</code>. Okno efektywne łączy oba czasy.' },
      { type: 'table', headers: ['Odczyt', 'Znaczenie', 'Następny krok'], rows: [['Okno dostępne', 'Opóźnienie zostawia czas przed aktywnymi klatkami.', 'Sprawdź ustawienie w grze.'], ['Okno ciasne', 'Zostaje mniej niż jedna klatka bufora.', 'Porównaj zmiany o jedną klatkę.'], ['Wejście spóźnione', 'Opóźnienie przekracza bufor.', 'Zwiększ bufor albo przesuń okno.']] },
      { type: 'title', level: 2, text: 'Użyj przed testem mechaniki' },
      { type: 'paragraph', html: 'Wpisz rzeczywiste numery klatek ruchu, a nie przybliżony czas. Ustaw częstotliwość, podaj aktywny zakres i opisz założenie dotyczące opóźnienia. Zmieniaj jedną wartość naraz, aby znaleźć przyczynę różnicy.' },
      { type: 'tip', title: 'Czego kalkulator nie mierzy', html: 'To lokalny model czasu, a nie test kontrolera ani ekranu. Próbkowanie wejścia, kolejki silnika, synchronizację i odczucie należy sprawdzić w docelowej grze.' },
    ],
    faq: [
      { question: 'Co oblicza ten kalkulator?', answer: 'Przelicza zakres klatek na milisekundy, odejmuje opóźnienie od bufora i pokazuje pozostały czas. Nie mierzy prawdziwego sprzętu.' },
      { question: 'Jak wybrać aktywne klatki?', answer: 'Podaj pierwszą i ostatnią klatkę, w której akcja jest poprawna lub aktywna. Obie granice są wliczone.' },
      { question: 'Dlaczego opóźnienie może spóźnić wejście?', answer: 'Bufor znajduje się przed aktywnym oknem. Gdy opóźnienie jest większe, wejście dociera po chronionym czasie początkowym.' },
      { question: 'Czy wynik gwarantuje dobre odczucie ruchu?', answer: 'Nie. Znaczenie mają także próbkowanie, ekran, stan gry i potwierdzenie. Użyj wyniku jako hipotezy do testu.' },
    ],
    howTo: [
      { name: 'Ustaw docelowe FPS', text: 'Wpisz częstotliwość pętli gry. Przy 60 FPS jedna klatka trwa około 16,67 milisekundy.' },
      { name: 'Zaznacz zakres aktywny', text: 'Podaj pierwszą i ostatnią klatkę przyjmującą wejście lub pokazującą aktywny stan.' },
      { name: 'Dodaj bufor i opóźnienie', text: 'Określ, jak wcześnie można nacisnąć przycisk i jakie opóźnienie trzeba odjąć.' },
      { name: 'Odczytaj mapę czasu', text: 'Fioletowy obszar to wymagany bufor, turkusowy to aktywne klatki, a czerwony znacznik pokazuje koszt opóźnienia.' },
    ],
  },
  pt: {
    seo: [
      { type: 'title', level: 2, text: 'Transforme frames de animação numa decisão de timing' },
      { type: 'paragraph', html: 'Um movimento pode parecer curto, mas a sua janela de jogo é mais fácil de comparar em milissegundos. Introduza FPS e o primeiro e último frame válido para obter a duração ativa. Depois, a latência estimada é retirada do buffer anterior à ação.' },
      { type: 'title', level: 2, text: 'Como a janela é calculada' },
      { type: 'paragraph', html: 'A duração de um frame é <code>1000 ÷ FPS</code>. A duração ativa é o número de frames incluídos multiplicado por esse valor. O buffer utilizável é <code>max(0, buffer pedido − latência)</code>. A janela efetiva junta as duas partes.' },
      { type: 'table', headers: ['Leitura', 'Significado', 'Próximo passo'], rows: [['Janela disponível', 'A latência deixa tempo antes dos frames ativos.', 'Teste este timing no jogo.'], ['Janela apertada', 'Resta menos de um frame de buffer.', 'Compare alterações de um frame.'], ['Entrada atrasada', 'A latência ultrapassa o buffer pedido.', 'Aumente o buffer ou desloque a janela.']] },
      { type: 'title', level: 2, text: 'Use antes de testar a mecânica' },
      { type: 'paragraph', html: 'Use os números reais dos frames do movimento, não uma duração aproximada. Defina a frequência, introduza o intervalo ativo e registe a hipótese de latência. Altere uma hipótese de cada vez para perceber a origem da diferença.' },
      { type: 'tip', title: 'O que a calculadora não mede', html: 'Este é um modelo local de timing, não um teste de comando ou ecrã. Amostragem, filas do motor, sincronização e sensação devem ser verificadas no jogo final.' },
    ],
    faq: [
      { question: 'O que calcula esta ferramenta?', answer: 'Converte um intervalo de frames em milissegundos, retira a latência do buffer e mostra o tempo restante. Não mede hardware real.' },
      { question: 'Como escolho os frames ativos?', answer: 'Introduza o primeiro e o último frame em que a ação é válida ou está ativa. Ambos os limites são incluídos.' },
      { question: 'Porque é que a latência pode atrasar a entrada?', answer: 'O buffer fica antes da janela ativa. Se a latência for maior, a entrada chega depois do tempo inicial que queria proteger.' },
      { question: 'O resultado prova que o movimento é responsivo?', answer: 'Não. Amostragem, ecrã, estado do jogo e confirmação também contam. Use o cálculo como hipótese de ajuste.' },
    ],
    howTo: [
      { name: 'Defina os FPS alvo', text: 'Introduza a frequência do loop. A 60 FPS, um frame dura cerca de 16,67 milissegundos.' },
      { name: 'Marque o intervalo ativo', text: 'Indique o primeiro e o último frame que aceitam a entrada ou representam o estado ativo.' },
      { name: 'Adicione buffer e latência', text: 'Escolha quão cedo se pode premir e o atraso total a descontar.' },
      { name: 'Leia o mapa temporal', text: 'A zona roxa é o buffer, a turquesa são os frames ativos e a marca vermelha mostra o tempo consumido pela latência.' },
    ],
  },
  ru: {
    seo: [
      { type: 'title', level: 2, text: 'Превратите кадры анимации в решение по времени ввода' },
      { type: 'paragraph', html: 'Короткое движение проще оценивать в миллисекундах, чем только по картинке. Укажите FPS, первый и последний допустимый кадр, чтобы получить активную длительность. Затем расчёт вычитает предполагаемую задержку из буфера перед действием.' },
      { type: 'title', level: 2, text: 'Как рассчитывается окно' },
      { type: 'paragraph', html: 'Длительность кадра равна <code>1000 ÷ FPS</code>. Активное время , число включённых кадров, умноженное на эту длительность. Рабочий буфер равен <code>max(0, заданный буфер − задержка)</code>. Эффективное окно объединяет обе части.' },
      { type: 'table', headers: ['Результат', 'Значение', 'Следующий шаг'], rows: [['Окно доступно', 'Задержка оставляет время до активных кадров.', 'Проверьте тайминг в игре.'], ['Окно узкое', 'До действия осталось меньше кадра.', 'Сравните изменения на один кадр.'], ['Ввод запаздывает', 'Задержка больше буфера.', 'Увеличьте буфер или сдвиньте окно.']] },
      { type: 'title', level: 2, text: 'Используйте перед плейтестом' },
      { type: 'paragraph', html: 'Введите реальные номера кадров, а не приблизительную длительность. Задайте частоту, активный диапазон и объяснимую оценку задержки. Затем меняйте только одно допущение за раз, чтобы понять источник изменения.' },
      { type: 'tip', title: 'Чего калькулятор не измеряет', html: 'Это локальная модель времени, а не проверка контроллера или экрана. Опрос ввода, очереди движка, синхронизацию и ощущение нужно проверять в самой игре.' },
    ],
    faq: [
      { question: 'Что рассчитывает этот калькулятор?', answer: 'Он переводит диапазон кадров в миллисекунды, вычитает задержку из буфера и показывает оставшееся время. Реальное устройство он не измеряет.' },
      { question: 'Как выбрать активные кадры?', answer: 'Укажите первый и последний кадр, в котором действие действительно или активно. Обе границы учитываются.' },
      { question: 'Почему задержка может привести к позднему вводу?', answer: 'Буфер находится перед активным окном. Если задержка больше буфера, ввод приходит после защищённого начального времени.' },
      { question: 'Гарантирует ли результат хорошее ощущение движения?', answer: 'Нет. Важны также опрос, экран, состояние игры и подтверждение. Используйте результат как гипотезу для настройки.' },
    ],
    howTo: [
      { name: 'Задайте целевой FPS', text: 'Введите частоту игрового цикла. При 60 FPS один кадр длится примерно 16,67 миллисекунды.' },
      { name: 'Отметьте активный диапазон', text: 'Укажите первый и последний кадр, принимающие ввод или показывающие активное состояние.' },
      { name: 'Добавьте буфер и задержку', text: 'Определите допустимое раннее нажатие и задержку, которую нужно вычесть.' },
      { name: 'Прочитайте карту времени', text: 'Фиолетовая зона , заданный буфер, бирюзовая , активные кадры, красная отметка , часть, потраченная задержкой.' },
    ],
  },
  sv: {
    seo: [
      { type: 'title', level: 2, text: 'Gör om animationsbilder till ett beslut om timing' },
      { type: 'paragraph', html: 'En rörelse kan se kort ut, men spelhändelsen blir lättare att jämföra i millisekunder. Ange FPS samt första och sista giltiga bild för att se den aktiva tiden. Därefter dras den uppskattade fördröjningen av från bufferten före handlingen.' },
      { type: 'title', level: 2, text: 'Så beräknas fönstret' },
      { type: 'paragraph', html: 'Tiden för en bild är <code>1000 ÷ FPS</code>. Aktiv tid är antalet inkluderade bilder multiplicerat med den tiden. Användbar förbuffert är <code>max(0, önskad buffert − fördröjning)</code>. Det effektiva fönstret kombinerar båda delarna.' },
      { type: 'table', headers: ['Läsning', 'Betydelse', 'Nästa steg'], rows: [['Fönster tillgängligt', 'Fördröjningen lämnar tid före aktiva bilder.', 'Testa timingen i spelet.'], ['Fönstret är snävt', 'Mindre än en bild återstår före handlingen.', 'Jämför ändringar på en bild.'], ['Input kommer sent', 'Fördröjningen är större än bufferten.', 'Öka bufferten eller flytta fönstret.']] },
      { type: 'title', level: 2, text: 'Använd före ett speltest' },
      { type: 'paragraph', html: 'Använd rörelsens verkliga bildnummer i stället för en uppskattad längd. Ange frekvens, aktivt intervall och ett tydligt antagande om fördröjningen. Ändra sedan en sak i taget för att hitta orsaken till skillnaden.' },
      { type: 'tip', title: 'Det här mäter kalkylatorn inte', html: 'Detta är en lokal tidsmodell, inte ett test av handkontroll eller skärm. Sampling, motorköer, synkronisering och känsla måste kontrolleras i det riktiga spelet.' },
    ],
    faq: [
      { question: 'Vad räknar verktyget ut?', answer: 'Det omvandlar ett bildintervall till millisekunder, drar fördröjningen från bufferten och visar återstående tid. Det mäter inte verklig hårdvara.' },
      { question: 'Hur väljer jag aktiva bilder?', answer: 'Ange första och sista bilden där handlingen är giltig eller aktiv. Båda gränserna räknas med.' },
      { question: 'Varför kan fördröjning göra input sen?', answer: 'Bufferten ligger före det aktiva fönstret. Om fördröjningen är större kommer input efter den önskade förperioden.' },
      { question: 'Bevisar resultatet att rörelsen känns bra?', answer: 'Nej. Sampling, skärm, spelstatus och bekräftelse påverkar också. Använd resultatet som en hypotes för testning.' },
    ],
    howTo: [
      { name: 'Ställ in mål-FPS', text: 'Ange spelloopens frekvens. Vid 60 FPS tar en bild ungefär 16,67 millisekunder.' },
      { name: 'Markera aktivt intervall', text: 'Ange första och sista bilden som accepterar input eller visar det aktiva tillståndet.' },
      { name: 'Lägg till buffert och fördröjning', text: 'Välj hur tidigt spelaren får trycka och vilken fördröjning som ska dras av.' },
      { name: 'Läs tidskartan', text: 'Lila är önskad buffert, turkos är aktiva bilder och den röda markeringen visar fördröjningens kostnad.' },
    ],
  },
  tr: {
    seo: [
      { type: 'title', level: 2, text: 'Animasyon karelerini giriş zamanlama kararına dönüştürün' },
      { type: 'paragraph', html: 'Bir hareket kısa görünebilir; ancak oyun penceresini milisaniye ile karşılaştırmak daha kolaydır. FPS ile ilk ve son geçerli kareyi girerek aktif süreyi görün. Ardından tahmini giriş gecikmesi, hareketten önceki tampondan çıkarılır.' },
      { type: 'title', level: 2, text: 'Pencere nasıl hesaplanır?' },
      { type: 'paragraph', html: 'Bir karenin süresi <code>1000 ÷ FPS</code> değeridir. Aktif süre, dahil edilen kare sayısının bu süreyle çarpılmasıdır. Kullanılabilir ön tampon <code>max(0, istenen tampon − gecikme)</code> şeklindedir. Etkin pencere iki süreyi birleştirir.' },
      { type: 'table', headers: ['Sonuç', 'Anlamı', 'Sonraki adım'], rows: [['Pencere kullanılabilir', 'Gecikme aktif karelerden önce zaman bırakıyor.', 'Zamanlamayı oyunda test edin.'], ['Pencere dar', 'Ön tampondan bir kareden az kalıyor.', 'Bir karelik değişiklikleri karşılaştırın.'], ['Giriş geç geliyor', 'Gecikme tampondan büyük.', 'Tamponu artırın veya pencereyi taşıyın.']] },
      { type: 'title', level: 2, text: 'Oyun testinden önce kullanın' },
      { type: 'paragraph', html: 'Tahmini süre yerine hareketin gerçek kare numaralarını kullanın. FPS değerini, aktif aralığı ve gecikme varsayımını sırayla belirleyin. Nedeni ayırmak için her seferinde yalnızca bir varsayımı değiştirin.' },
      { type: 'tip', title: 'Hesaplayıcının ölçemediği şeyler', html: 'Bu, yerel bir zamanlama modelidir; kontrolcü veya ekran testi değildir. Giriş örnekleme, motor kuyrukları, senkronizasyon ve his gerçek oyunda kontrol edilmelidir.' },
    ],
    faq: [
      { question: 'Bu hesaplayıcı neyi hesaplar?', answer: 'Kare aralığını milisaniyeye çevirir, gecikmeyi tampondan çıkarır ve kalan süreyi gösterir. Gerçek donanımı ölçmez.' },
      { question: 'Aktif kareleri nasıl seçerim?', answer: 'Eylemin geçerli veya aktif olduğu ilk ve son kareyi girin. İki sınır da sayılır.' },
      { question: 'Gecikme neden girişi geç getirebilir?', answer: 'Tampon aktif pencerenin önündedir. Gecikme daha büyükse giriş korumak istediğiniz ön süreden sonra ulaşır.' },
      { question: 'Sonuç hareketin iyi hissettirdiğini kanıtlar mı?', answer: 'Hayır. Örnekleme, ekran, oyun durumu ve doğrulama da önemlidir. Sonucu test için bir ayar hipotezi olarak kullanın.' },
    ],
    howTo: [
      { name: 'Hedef FPS değerini belirleyin', text: 'Oyun döngüsünün frekansını girin. 60 FPS değerinde bir kare yaklaşık 16,67 milisaniyedir.' },
      { name: 'Aktif aralığı işaretleyin', text: 'Girişi kabul eden veya aktif durumu gösteren ilk ve son kareyi girin.' },
      { name: 'Tampon ve gecikme ekleyin', text: 'Oyuncunun ne kadar erken basabileceğini ve çıkarılacak gecikmeyi belirleyin.' },
      { name: 'Zaman haritasını okuyun', text: 'Mor alan istenen tamponu, turkuaz alan aktif kareleri, kırmızı işaret gecikmenin kullandığı kısmı gösterir.' },
    ],
  },
  zh: {
    seo: [
      { type: 'title', level: 2, text: '把动画帧转换为输入时机判断' },
      { type: 'paragraph', html: '动作看起来可能很短，但用毫秒衡量游戏窗口会更容易比较。输入 FPS、有效的起始帧和结束帧即可得到激活时长，然后从动作前的输入缓冲中扣除预计延迟。' },
      { type: 'title', level: 2, text: '窗口的计算方式' },
      { type: 'paragraph', html: '单帧时间是 <code>1000 ÷ FPS</code>。激活时间等于包含的帧数乘以单帧时间。可用的预输入时间是 <code>max(0, 所需缓冲 − 延迟)</code>，有效窗口则合并剩余缓冲和激活动画。' },
      { type: 'table', headers: ['结果', '含义', '下一步'], rows: [['窗口可用', '延迟没有耗尽激活帧前的时间。', '在游戏中进行测试。'], ['窗口很紧', '剩余预输入时间少于一帧。', '比较相差一帧的设置。'], ['输入到达太晚', '延迟大于缓冲。', '增加缓冲或移动激活窗口。']] },
      { type: 'title', level: 2, text: '在游玩测试前使用' },
      { type: 'paragraph', html: '输入动作真实的帧编号，而不是估算的持续时间。先设置 FPS，再输入激活范围和延迟假设。每次只改变一个条件，才能看出时机变化的原因。' },
      { type: 'tip', title: '这个工具无法测量什么', html: '这是浏览器中的本地时间模型，不是手柄或显示器测试。输入采样、引擎队列、同步方式和实际手感都需要在目标游戏中验证。' },
    ],
    faq: [
      { question: '这个计算器计算什么？', answer: '它把帧范围转换为毫秒，从缓冲中减去输入延迟，并显示剩余时间。它不会测量真实硬件。' },
      { question: '如何选择激活帧？', answer: '输入动作有效或处于激活状态的第一帧和最后一帧，两个端点都会计入。' },
      { question: '为什么延迟会让输入到达太晚？', answer: '缓冲位于激活窗口之前。如果延迟更大，输入就会在想要保护的预输入时间之后到达。' },
      { question: '结果能保证动作手感吗？', answer: '不能。采样、显示器、游戏状态和确认反馈同样重要。把结果当作测试前的调参假设。' },
    ],
    howTo: [
      { name: '设置目标 FPS', text: '输入游戏循环的频率。60 FPS 时，一帧约为 16.67 毫秒。' },
      { name: '标记激活范围', text: '输入接受输入或处于激活状态的第一帧和最后一帧。' },
      { name: '输入缓冲和延迟', text: '设置可以提前按下的时间，以及需要扣除的延迟。' },
      { name: '阅读时间图', text: '紫色区域是所需缓冲，青绿色区域是激活帧，红色标记表示延迟消耗的部分。' },
    ],
  },
};

Object.entries(translatedExtras).forEach(([locale, extra]) => {
  const copy = fallbackCopies[locale];
  if (copy) Object.assign(copy, extra);
});

const nativeUi: Record<string, Partial<GameInputBufferWindowCalculatorUI>> = {
  ja: {
    inputsTitle: '動作のタイミングを入力', fpsLabel: '目標フレームレート', fpsHint: '変換に使うゲームループの速度', activeStartLabel: '最初の有効フレーム', activeStartHint: '入力や状態を受け付ける最初のフレーム', activeEndLabel: '最後の有効フレーム', activeEndHint: '含める最後のフレーム。両端を数えます', bufferLabel: '入力バッファ', bufferHint: '有効範囲より前に押せる時間', latencyLabel: '推定入力遅延', latencyHint: 'バッファから差し引く遅延時間', calculateLabel: 'ウィンドウを計算', resetLabel: '値をリセット', stageKicker: '02 · タイミングを確認', stageTitle: '入力はいつ届くか', stageCaption: 'フレーム範囲と遅延予算から調整の判断を表示します', statusReady: 'ウィンドウあり', statusLate: '入力が遅い', statusTight: '余裕が少ない', statusInvalid: '入力を確認', frameDurationLabel: '1フレームの時間', activeWindowLabel: '有効なアニメーション', usableBufferLabel: '使用可能な事前時間', effectiveWindowLabel: '実効ウィンドウ', framesAvailableLabel: '使用可能フレーム', lateByLabel: '不足時間', timingTitle: 'バッファ → 有効フレーム', timingCaption: '色付きの範囲が時間の予算を示します', inputBufferLabel: '入力バッファ', activeFramesLabel: '有効フレーム', latencyLabelShort: '遅延', frameAxis: 'アニメーションの時間軸', zeroLabel: 'フレーム1より前', startLabel: '開始', endLabel: '終了', resultTitle: '判断', readyResult: '推定遅延を差し引いても、有効範囲の前に入力時間が残ります', tightResult: '入力は遅れませんが、事前時間は1フレーム未満です', lateResult: '推定遅延がバッファを超えています。バッファを増やすか時 timing を変更してください', errorTitle: '入力の確認', invalidNumber: 'すべての項目に数値を入力してください', invalidRange: '表示された範囲内の値を使ってください', invalidOrder: '最後の有効フレームは最初のフレーム以降にしてください', modelNote: '両端のフレームを含め、1000 ÷ FPS で変換します。遅延は事前バッファからのみ差し引きます。実機は測定しません', privacyDisclosure: '値は次回のためにこのブラウザーだけに保存されます', unitMs: 'ms', unitFps: 'FPS', unitFrames: 'フレーム',
  },
  ko: {
    inputsTitle: '동작 타이밍 입력', fpsLabel: '목표 프레임 속도', fpsHint: '변환에 사용할 게임 루프 속도', activeStartLabel: '첫 활성 프레임', activeStartHint: '입력이나 상태를 받는 첫 프레임', activeEndLabel: '마지막 활성 프레임', activeEndHint: '포함되는 마지막 프레임이며 양 끝을 셉니다', bufferLabel: '요청 입력 버퍼', bufferHint: '활성 구간 전에 미리 누를 수 있는 시간', latencyLabel: '예상 입력 지연', latencyHint: '버퍼에서 뺄 지연 시간', calculateLabel: '윈도우 계산', resetLabel: '값 초기화', stageKicker: '02 · 타이밍 읽기', stageTitle: '입력은 언제 도착할까요?', stageCaption: '프레임 범위와 지연 예산을 조정 판단으로 연결합니다', statusReady: '윈도우 사용 가능', statusLate: '입력이 늦음', statusTight: '윈도우가 좁음', statusInvalid: '입력 확인', frameDurationLabel: '프레임당 시간', activeWindowLabel: '활성 애니메이션', usableBufferLabel: '사용 가능한 사전 시간', effectiveWindowLabel: '유효 전체 윈도우', framesAvailableLabel: '사용 가능한 프레임', lateByLabel: '버퍼 부족', timingTitle: '버퍼 → 활성 프레임', timingCaption: '색으로 표시된 구간이 시간 예산입니다', inputBufferLabel: '요청 버퍼', activeFramesLabel: '활성 프레임', latencyLabelShort: '지연', frameAxis: '애니메이션 시간축', zeroLabel: '첫 프레임 전', startLabel: '시작', endLabel: '끝', resultTitle: '판단', readyResult: '예상 지연을 빼도 활성 구간 앞에 입력 시간이 남습니다', tightResult: '입력은 늦지 않지만 사전 시간이 한 프레임보다 짧습니다', lateResult: '예상 지연이 버퍼보다 큽니다. 버퍼를 늘리거나 타이밍을 바꾸세요', errorTitle: '입력 확인', invalidNumber: '모든 항목에 숫자를 입력하세요', invalidRange: '표시된 범위 안의 값을 사용하세요', invalidOrder: '마지막 활성 프레임은 첫 프레임 이상이어야 합니다', modelNote: '양 끝 프레임을 포함하고 1000 ÷ FPS로 변환합니다. 지연은 사전 버퍼에서만 뺍니다. 실제 장치는 측정하지 않습니다', privacyDisclosure: '값은 다음 방문을 위해 이 브라우저에만 저장됩니다', unitMs: 'ms', unitFps: 'FPS', unitFrames: '프레임',
  },
  ru: {
    inputsTitle: 'Опишите тайминг движения', fpsLabel: 'Целевая частота кадров', fpsHint: 'Частота игрового цикла для расчёта', activeStartLabel: 'Первый активный кадр', activeStartHint: 'Первый кадр, принимающий ввод или состояние', activeEndLabel: 'Последний активный кадр', activeEndHint: 'Последний включённый кадр, учитываются обе границы', bufferLabel: 'Заданный буфер ввода', bufferHint: 'Время, за которое можно нажать до активного окна', latencyLabel: 'Оценка задержки ввода', latencyHint: 'Задержка, вычитаемая из буфера', calculateLabel: 'Рассчитать окно', resetLabel: 'Сбросить значения', stageKicker: '02 · Читаем тайминг', stageTitle: 'Когда приходит ввод?', stageCaption: 'Карта связывает кадры и задержку с решением по настройке', statusReady: 'Окно доступно', statusLate: 'Ввод запаздывает', statusTight: 'Окно узкое', statusInvalid: 'Проверьте ввод', frameDurationLabel: 'Время кадра', activeWindowLabel: 'Активная анимация', usableBufferLabel: 'Рабочее начальное время', effectiveWindowLabel: 'Эффективное окно', framesAvailableLabel: 'Доступные кадры', lateByLabel: 'Недостаток буфера', timingTitle: 'Буфер → активные кадры', timingCaption: 'Цветные области показывают бюджет времени', inputBufferLabel: 'заданный буфер', activeFramesLabel: 'активные кадры', latencyLabelShort: 'задержка', frameAxis: 'шкала анимации', zeroLabel: 'до первого кадра', startLabel: 'начало', endLabel: 'конец', resultTitle: 'Решение', readyResult: 'После вычета задержки до активного окна остаётся рабочее время', tightResult: 'Ввод не запаздывает, но начальный запас меньше одного кадра', lateResult: 'Задержка больше буфера. Увеличьте буфер или измените тайминг', errorTitle: 'Проверка ввода', invalidNumber: 'Введите число в каждое поле', invalidRange: 'Используйте значения из указанных пределов', invalidOrder: 'Последний активный кадр должен быть не раньше первого', modelNote: 'Обе границы считаются. Время кадра равно 1000 ÷ FPS, задержка вычитается только из начального буфера. Оборудование не измеряется', privacyDisclosure: 'Значения сохраняются только в этом браузере для следующего визита', unitMs: 'мс', unitFps: 'FPS', unitFrames: 'кадров',
  },
  zh: {
    inputsTitle: '描述动作时机', fpsLabel: '目标帧率', fpsHint: '用于换算的游戏循环速度', activeStartLabel: '第一激活帧', activeStartHint: '接受输入或状态的第一帧', activeEndLabel: '最后激活帧', activeEndHint: '包含的最后一帧，两个端点都会计算', bufferLabel: '需要的输入缓冲', bufferHint: '激活窗口前可以提前按下的时间', latencyLabel: '预计输入延迟', latencyHint: '从缓冲中扣除的延迟时间', calculateLabel: '计算窗口', resetLabel: '重置数值', stageKicker: '02 · 阅读时机', stageTitle: '输入什么时候到达？', stageCaption: '把帧范围和延迟预算连接到动作调整决定', statusReady: '窗口可用', statusLate: '输入太晚', statusTight: '窗口很紧', statusInvalid: '检查输入', frameDurationLabel: '每帧时间', activeWindowLabel: '激活动画', usableBufferLabel: '可用预输入时间', effectiveWindowLabel: '有效总窗口', framesAvailableLabel: '可用帧数', lateByLabel: '缓冲不足', timingTitle: '缓冲 → 激活帧', timingCaption: '彩色区域表示时间预算', inputBufferLabel: '需要的缓冲', activeFramesLabel: '激活帧', latencyLabelShort: '延迟', frameAxis: '动画时间轴', zeroLabel: '第一帧之前', startLabel: '开始', endLabel: '结束', resultTitle: '判断', readyResult: '扣除预计延迟后，激活窗口前仍有可用时间', tightResult: '输入没有迟到，但预输入时间少于一帧', lateResult: '预计延迟超过缓冲，请增加缓冲或改变时机', errorTitle: '输入检查', invalidNumber: '请在每个字段输入数字', invalidRange: '请使用显示范围内的数值', invalidOrder: '最后激活帧必须不早于第一激活帧', modelNote: '计算两个端点，使用 1000 ÷ FPS 换算帧时间，只从预输入缓冲中扣除延迟，不测量硬件', privacyDisclosure: '数值只保存在本浏览器中，方便下次继续使用', unitMs: '毫秒', unitFps: 'FPS', unitFrames: '帧',
  },
};

Object.entries(nativeUi).forEach(([locale, ui]) => {
  const copy = fallbackCopies[locale];
  if (copy) copy.ui = { ...copy.ui, ...ui } as GameInputBufferWindowCalculatorUI;
});

export function createLocalizedContent(locale: string): ToolLocaleContent<GameInputBufferWindowCalculatorUI> {
  const copy = fallbackCopies[locale] ?? copies[locale];
  if (!copy) throw new Error(`Missing localized copy for ${locale}`);
  const slugs: Record<string, string> = {
    de: 'spiel-eingabepuffer-fenster-rechner',
    es: 'calculadora-ventana-buffer-entrada-juegos',
    fr: 'calculateur-fenetre-buffer-entree-jeu',
    id: 'kalkulator-jendela-buffer-input-game',
    it: 'calcolatore-finestra-buffer-input-giochi',
    ja: english.slug,
    ko: english.slug,
    nl: 'game-inputbuffer-venster-rekenaar',
    pl: 'kalkulator-okna-bufora-wejscia',
    pt: 'calculadora-janela-buffer-entrada-jogo',
    ru: 'kalkulyator-okna-bufera-vvoda',
    sv: 'kalkylator-inputbuffertfonster',
    tr: 'oyun-giris-tamponu-penceresi',
    zh: english.slug,
  };
  const faqPage: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: copy.faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
  const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: copy.title, step: copy.howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) };
  const softwareApplication: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: copy.title, applicationCategory: 'DeveloperApplication', operatingSystem: 'Any' };
  return { ...english, slug: slugs[locale] ?? english.slug, title: copy.title, description: copy.description, ui: copy.ui, seo: copy.seo, faq: copy.faq, howTo: copy.howTo, schemas: [softwareApplication, faqPage, howToSchema] };
}
