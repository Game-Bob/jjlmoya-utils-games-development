import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ReactionTesterUI } from '../ui';

const slug = 'reaktionstest';
const title = 'Reaktionsgeschwindigkeitstest (Reflexe): Online Benchmark';
const description = 'Messen Sie Ihre Reflexe in Millisekunden mit unserem professionellen Reaktionstest. Konkurrieren Sie um Ränge von „Schildkröte" bis „Cyberatlet" und analysieren Sie Ihre Leistung.';

const ui: ReactionTesterUI = {
  title: 'Reaktionstest',
  subtitle: 'Messen Sie Ihre Reaktionsgeschwindigkeit in Millisekunden. Durchschnitt von 5 Versuchen.',
  startBtn: 'Zum Starten klicken',
  goTitle: 'LOS!',
  goSubtitle: 'JETZT DRÜCKEN!',
  earlyTitle: 'Zu früh!',
  earlySubtitle: 'Warten Sie auf Grün.',
  earlyRetry: 'Zum Wiederholen klicken',
  promptNext: 'Zum nächsten Versuch klicken',
  promptFinal: 'Endergebnisse anzeigen',
  avgLabel: 'Durchschnitt',
  copyBtn: 'Kopieren',
  tweetBtn: 'Tweeten',
  retryBtn: 'Erneut versuchen',
  inputMouse: 'Maus',
  inputTouch: 'Berührung',
  inputSpace: 'Leertaste',
  historyTitle: 'Lokaler Verlauf',
  historyBest: 'Top 5 Beste',
  historyWorst: 'Top 5 Schlechteste',
  historyEmpty: 'Spielen Sie, um Ihren ersten Punktestand aufzuzeichnen',
  copySuccess: 'Kopiert!',
  shareText: 'Ich habe {ms}ms beim Reaktionstest erreicht!\nRang: {rank}\n\nKannst du mich schlagen?\n{url}',
  rankCiberatleta: 'Cyberatlet',
  rankTigre: 'Tiger',
  rankHumano: 'Mensch',
  rankTortuga: 'Schildkröte',
  rankDormido: 'Schläfrig',
  f150: 'BIST DU EIN ROBOT?!',
  f180: 'UNGLAUBLICH!',
  f210: 'Sehr schnell!',
  f250: 'Gute Reaktion',
  f300: 'Nicht schlecht...',
  f400: 'Ein bisschen langsam...',
  f600: 'Du bist eingeschlafen',
  fSlow: 'Wach auf...',
  wp0t: 'WARTEN...', wp0s: 'Halten Sie den Atem an...',
  wp1t: 'STILL...', wp1s: 'Nicht blinzeln',
  wp2t: 'BEREIT...', wp2s: 'Finger bereit...',
  wp3t: 'HALTEN...', wp3s: 'Geduld, junger Grasshopper',
  wp4t: 'FOKUS...', wp4s: 'Es kommt...'
};

const faqData = [
  { question: 'Wie schnell ist die durchschnittliche menschliche Reaktion?', answer: 'Die durchschnittliche Reaktionszeit auf einen visuellen Reiz beträgt etwa 250 bis 270 Millisekunden. Hochleistungsathleten und Pro-Gamer sind normalerweise unter 200 ms.' },
  { question: 'Wie kann ich meine Reflexe verbessern?', answer: 'Der Schlüssel liegt in konsistenter Übung und Ruhe. Action-Videospiele (FPS), schnelle Sportarten wie Tischtennis und ausreichend Flüssigkeitszufuhr helfen, das Nervensystem wach zu halten.' },
  { question: 'Beeinflusst der Bildschirm mein Ergebnis?', answer: 'Ja. Es gibt etwas namens „Input Lag". Bildschirme mit niedriger Bildwiederholfrequenz (60 Hz) oder alte kabellose Mäuse können 15 bis 50 ms zu Ihrer tatsächlichen Reaktionszeit hinzufügen.' },
  { question: 'In welchem Alter beginnen wir, Reflexe zu verlieren?', answer: 'Physiologisch gesehen sind menschliche Reflexe zwischen 20 und 24 Jahren am stärksten. Danach gibt es einen sehr langsamen Rückgang (ca. 2-6 ms pro Jahrzehnt), wenn nicht trainiert.' },
];

const howTo = [
  { name: 'Auf Rot warten', text: 'Klicken Sie auf den Start-Bereich und warten Sie geduldig, bis sich die Bildschirmfarbe ändert.' },
  { name: 'Auf Grün reagieren', text: 'Sobald Sie Grün sehen, klicken oder tippen Sie so schnell wie möglich auf den Bildschirm.' },
  { name: 'Ihr Ergebnis sehen', text: 'Das System berechnet die genaue Differenz in Millisekunden zwischen der Farbveränderung und Ihrem Tippen.' },
  { name: 'Ihren Rang analysieren', text: 'Wiederholen Sie den Test 5-mal, um einen zuverlässigen Durchschnitt zu erhalten und herauszufinden, ob Sie eine „Schildkröte" oder ein „Cyberatlet" sind.' },
];

const seo = [
  { type: 'title' as const, text: 'Wie funktioniert dieser Reaktionstest?', level: 2 as const },
  {
    type: 'paragraph' as const,
    html: 'Dieses Tool misst Ihre <strong>visuelle Reaktionszeit</strong> mit chirurgischer Präzision. Wir berechnen das genaue Intervall vom Aufleuchten des Bildschirms bis zur Signalübertragung von Ihren Augen zu Ihrem Gehirn und dann zu Ihren Fingern. Der Test erfordert <strong>5 aufeinanderfolgende Versuche</strong>, um Ihren echten Durchschnitt zu berechnen und den Glücksfaktor auszuschalten.'
  },
  {
    type: 'list' as const,
    items: [
      '<strong>Durchschnitt von 5 Versuchen:</strong> Wir eliminieren den „Glücksfaktor", indem wir Konsistenz erfordern. Ein einziger glücklicher Klick macht Sie nicht zu einem Cyberatleten.',
      '<strong>Anti-Cheat-System:</strong> Zufällige Wartezeiten (1,5 s - 4,5 s) und Erkennung von Frühanschlägen zur Verhütung von Vorhersagen.',
      '<strong>Echte Wissenschaft:</strong> Gehirnverarbeitung ~180-200 ms + motorische Reaktion +20-40 ms = Ihre gesamte Reaktionszeit.',
    ]
  },
  { type: 'title' as const, text: 'Weltranglisten-Tabelle', level: 2 as const },
  {
    type: 'table' as const,
    headers: ['Zeit', 'Rang', 'Beschreibung'],
    rows: [
      ['&lt; 180 ms', 'Cyberatlet', 'Übermenschliches Niveau, typisch für E-Sports-Profis oder Kampfpiloten.'],
      ['180 - 230 ms', 'Tiger', 'Scharfe Reflexe. Sie sind wahrscheinlich großartig bei Shooter-Spielen.'],
      ['230 - 280 ms', 'Mensch', 'Der gesunde Durchschnitt. Sie sind wach und funktionieren ordnungsgemäß.'],
      ['280 - 350 ms', 'Schildkröte', 'Unterdurchschnittlich. Ruhen Sie sich aus oder trainieren Sie mehr.'],
      ['&gt; 350 ms', 'Schläfrig', 'Mögliche Müdigkeit, Schläfrigkeit oder langsame Hardware (Input Lag).'],
    ]
  },
  { type: 'title' as const, text: 'Warum sind Sie langsam? Hardware-Schuldzuweisung', level: 2 as const },
  {
    type: 'comparative' as const,
    columns: 3 as const,
    items: [
      {
        title: 'Monitor (Hz)',
        description: 'Ein 60-Hz-Monitor benötigt etwa 16 ms, um einen Frame zu zeichnen. Ein 144-Hz-Monitor benötigt nur 7 ms. Diese 10-ms-Differenz zählt in Ihrem Endergebnis.',
        icon: 'mdi:monitor',
        points: ['60 Hz = ~16 ms pro Frame', '144 Hz = ~7 ms pro Frame', 'Sichtbarer Unterschied im Test']
      },
      {
        title: 'Kabellose Maus',
        description: 'Billige Office-Bluetooth-Mäuse haben hohe Latenz. Für diesen Test verwenden Sie ein Kabel oder 2,4-GHz-Funktechnologie mit niedriger Latenz.',
        icon: 'mdi:mouse-variant',
        points: ['Billiges Bluetooth: +15-50 ms', '2,4 GHz Gaming: <1 ms extra', 'USB-Kabel: Referenz']
      },
      {
        title: 'Browser',
        description: 'Erweiterungen, die Anzeigen blockieren, oder schwere Skripte können zu Ruckeln führen. Versuchen Sie den Inkognito-Modus für Ihren echten Rekord.',
        icon: 'mdi:web',
        points: ['Schließen Sie schwere Erweiterungen', 'Inkognito = sauberer', 'Chrome/Firefox empfohlen']
      },
    ]
  },
];

const schemas: [WithContext<FAQPage>, WithContext<HowTo>, WithContext<SoftwareApplication>] = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } }))
  },
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description,
    step: howTo.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text }))
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description,
    applicationCategory: 'SportsApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }
  },
];

export const content: ToolLocaleContent<ReactionTesterUI> = { slug, title, description, ui, seo, faq: faqData, bibliography, howTo, schemas };
