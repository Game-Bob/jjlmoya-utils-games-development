import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FootballScoreKeeperUI } from '../ui';

const slug = 'fussball-spielstand';
const title = 'Fußball Spielstand Online : Kostenloser Spielstandsanzeiger';
const description =
  'Fußballspielstände kostenlos online verfolgen. Einfacher Torezähler für Freundschaftsspiele, Turniere und den Ligaalltag. Keine Anmeldung nötig.';

const faqData = [
  {
    question: 'Wie benutze ich diesen Fußball-Spielstandsanzeiger?',
    answer:
      'Tippe auf den +-Button unter jeder Mannschaft, um ein Tor zu notieren. Der Spielstand aktualisiert sich sofort mit einer Jubel-Animation. Mit dem Minus-Button kannst du einen Fehler rückgängig machen. Die Mannschaftsnamen sind editierbar : tippe einfach auf den Standardnamen und gib deinen eigenen ein. Alles wird automatisch in deinem Browser gespeichert, sodass du die Seite schließen und später weitermachen kannst.',
  },
  {
    question: 'Kann ich das Tool während eines Spiels auf dem Handy nutzen?',
    answer:
      'Ja. Die Oberfläche ist für die mobile Nutzung optimiert mit großen Buttons, die du auch ohne hinzusehen treffen kannst. Der Vollbildmodus blendet die Browserleiste aus und hält den Bildschirm während des gesamten Spiels wach. Das vertikale Layout erlaubt es dir, beide Mannschaftsbereiche problemlos mit dem Daumen zu erreichen.',
  },
  {
    question: 'Werden meine Spieldaten gespeichert?',
    answer:
      'Ja. Der aktuelle Spielstand und die Mannschaftsnamen werden automatisch in deinem Browser gespeichert. Du kannst die Seite neu laden, den Browser schließen oder am nächsten Tag wiederkommen : deine Daten sind immer noch da.',
  },
  {
    question: 'Kann ich Verlängerung oder Elfmeterschießen erfassen?',
    answer:
      'Ja. Der Spielstandsanzeiger funktioniert für jedes Spielformat gleich. Drücke einfach weiter die +-Buttons während der Verlängerung oder des Elfmeterschießens. Wenn das Spiel vorbei ist, tippe auf „Spiel beenden", um das Endergebnis zu sehen.',
  },
  {
    question: 'Ist das Tool wirklich kostenlos ohne versteckte Einschränkungen?',
    answer:
      'Ja, komplett kostenlos und ohne Einschränkungen. Keine -Tarife, keine Teilnehmerbegrenzung, keine Wasserzeichen, keine Werbung. Alles funktioniert offline in deinem Browser. Kein Konto oder E-Mail erforderlich.',
  },
];

const howToData = [
  {
    name: 'Mannschaften benennen',
    text: 'Tippe auf den Standard-Mannschaftsnamen und gib deinen eigenen ein. Der neue Name wird automatisch in deinem Browser gespeichert.',
  },
  {
    name: 'Tor hinzufügen',
    text: 'Tippe auf den großen runden +-Button der Mannschaft, die getroffen hat. Die Torzahl springt mit einer Jubel-Animation nach oben.',
  },
  {
    name: 'Tor entfernen',
    text: 'Tippe auf den Minus-Button unter dem +-Button, falls du versehentlich ein Tor hinzugefügt hast. Der Spielstand wird sofort korrigiert.',
  },
  {
    name: 'Spiel beenden',
    text: 'Tippe unten auf „Spiel beenden", um den Sieger mit Trophäe und Konfetti zu sehen. Schließe die Feier durch Antippen außerhalb der Anzeige.',
  },
  {
    name: 'Spiel zurücksetzen',
    text: 'Tippe auf das Zurücksetzen-Symbol in der oberen Leiste und bestätige, um beide Spielstände zu löschen. Die Mannschaftsnamen bleiben erhalten.',
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
  inLanguage: 'de',
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
      text: 'Kostenloser Online Fußball Spielstand : Live Spielstandsanzeige',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Den Spielstand während eines Fußballspiels zu notieren, sollte der einfachste Teil des Spiels sein. Dieser Online-Spielstandsanzeiger erfasst Tore für zwei Mannschaften in Echtzeit mit nur einem Fingertipp. Keine Anmeldung, kein Download, keine komplizierten Menüs. Öffne die Seite, benenne deine Mannschaften und schon kannst du Tore zählen. Ob du am Spielfeldrand Jugendfußball coachst, ein Freundschaftsspiel leitest oder bei einem lokalen Ligaspiel den Spielstand notierst : dieses Tool ist auf Geschwindigkeit und Einfachheit ausgelegt. Jede Mannschaft bekommt einen farblich gekennzeichneten Bereich mit einer großen Spielstandsanzeige und einem eigenen +1-Button. Tippe, um ein Tor hinzuzufügen, tippe auf den Minus-Button, um einen Fehler zu korrigieren. Der gesamte Spielverlauf bleibt auf dem Bildschirm sichtbar, sodass du immer genau weißt, was passiert ist.',
    },
    {
      type: 'title',
      text: 'Warum du eine spezielle Fußball-Anzeige statt eines generischen Zählers brauchst',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ein generischer Zahlenzähler funktioniert für alles, aber ein spezieller Fußball-Spielstandsanzeiger versteht, wie das Spiel funktioniert. Er trennt die beiden Mannschaften optisch mit unterschiedlichen Farben, sodass du nie auf die falsche Seite tippst. Der Tor-Button ist groß und befriedigend zu drücken, selbst wenn du das Telefon in einer Hand hältst. Der Minus-Button erlaubt es dir, Fehler sofort zu korrigieren, ohne das ganze Spiel zurücksetzen zu müssen. Und wenn das Spiel vorbei ist, löst der „Spiel beenden"-Button eine Feier aus, die das Endergebnis mit Konfetti und einer Trophäe zeigt. Generische Zähler können nichts davon. Sie behandeln jeden Punkt gleich. Fußball ist nicht generisch und dein Spielstandsanzeiger sollte es auch nicht sein.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Freundschafts und Trainingsspiele',
          description: 'Schnelle Torerfassung für Übungsspiele und Trainingseinheiten. Setze zwischen den Spielen mit einem Klick zurück. Funktioniert offline auf jedem Platz.',
          icon: 'mdi:soccer',
          points: ['Ein-Klick-Torerfassung', 'Funktioniert komplett offline', 'Kein Konto oder E-Mail nötig', 'Sofortiger Reset zwischen Spielen'],
        },
        {
          title: 'Ligaspiele & Turniere',
          description: 'Führe eine saubere Spielstandsanzeige für Ligaspiele, bei denen jedes Tor zählt. Große Anzeige, von der anderen Seite des Feldes lesbar. Farben helfen, Verwechslungen zu vermeiden.',
          icon: 'mdi:trophy-outline',
          points: ['Farbcodierte Mannschaftsbereiche', 'Editierbare Mannschaftsnamen', 'Spielbeendigung mit Feier', 'Große Anzeige, aus der Ferne lesbar'],
        },
        {
          title: 'Jugend und Schulfußball',
          description: 'Einfach genug, dass junge Spieler es selbst bedienen können. Trainer können Tore erfassen, während sie sich auf das Spiel konzentrieren. Der Vollbildmodus hält den Bildschirm wach.',
          icon: 'mdi:school',
          points: ['Einfach genug für Kinder', 'Vollbildmodus hält Bildschirm an', 'Editierbare Mannschaftsnamen', 'Keine ablenkenden Funktionen'],
        },
      ],
    },
    {
      type: 'title',
      text: 'So verfolgst du ein Fußballspiel live mit diesem Online-Spielstandsanzeiger',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die Bedienung dieser Fußball-Anzeige ist unkompliziert. Wenn du die Seite öffnest, siehst du zwei Mannschaftsbereiche. Die Heimmannschaft wird in Rot und die Gastmannschaft in Blau dargestellt. Jeder Bereich hat eine große Spielstandszahl in der Mitte, ein Mannschaftsnamenfeld oben und zwei Buttons darunter. Tippe auf den großen runden +-Button, um ein Tor für diese Mannschaft zu notieren. Die Zahl animiert jedes Mal mit einem Jubel-Effekt. Acht verschiedene Tor-Animationen wechseln sich zufällig ab, sodass sich jedes Tor einzigartig anfühlt. Fliegende Partikel mit Texten wie TOR und SIUUU erscheinen. Der Bildschirm blinkt kurz auf, um den Moment zu markieren. Bei einem Fehler tippe auf den kleinen Minus-Button, um das letzte Tor zu entfernen. Die Mannschaftsnamenfelder sind editierbar. Tippe auf den Standardnamen, um deinen eigenen einzugeben. Namen werden automatisch in deinem Browser gespeichert, zusammen mit dem aktuellen Spielstand. Du kannst die Seite schließen und später wiederkommen : deine Daten sind noch da. Am Ende des Spiels tippe auf „Spiel beenden", um den Sieger mit Trophäen-Animation und Konfetti zu sehen. Du kannst die Feier schließen und der Spielstand bleibt angezeigt.',
    },
    {
      type: 'title',
      text: 'Mobile Fußball-Spielstandsanzeige für den Spielfeldrand entwickelt',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dieses Tool ist mobile first entwickelt. Das vertikale Layout platziert eine Mannschaft über der anderen, sodass du beide Bereiche problemlos mit dem Daumen erreichst, während du dein Telefon hältst. Die Buttons sind groß genug, um sie zu treffen, ohne hinzusehen. Der Vollbildmodus entfernt Browser-Symbolleisten und hält den Bildschirm während des gesamten Spiels wach. Kein ständiges Antippen des Bildschirms mehr, um ein Ausschalten zu verhindern. Die Oberfläche funktioniert im Quer- und Hochformat. Sie funktioniert auch offline nach dem ersten Seitenaufruf, sodass du keine Internetverbindung auf dem Platz brauchst. Es gibt keine Werbung, keine Tracker und keine Datensammlung. Deine Spieldaten verlassen niemals dein Gerät.',
    },
    {
      type: 'title',
      text: 'Was diesen Fußball-Spielstandsanzeiger besonders macht',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Farbcodierte Mannschaften</strong> rot für Heim, blau für Auswärts. Du erkennst sofort, welche Seite welche ist, ohne Text lesen zu müssen.',
        '<strong>Tor-Jubel-Animationen</strong> jedes Tor löst eine zufällige Feier aus. Acht verschiedene Animationen wie Boom, Rise, Glow und Ball Bounce.',
        '<strong>Fliegende Partikel</strong> jedes Tor erzeugt schwebende Texte mit Meldungen wie TOR und SIUUU. Jede Feier fühlt sich einzigartig an.',
        '<strong>Spielende-Zeremonie</strong> tippe auf „Spiel beenden", um eine Siegerverkündung mit Trophäen-Animation, Mannschaftsnamen und Konfetti auszulösen.',
        '<strong>Editierbare Mannschaftsnamen</strong> tippe auf das Namensfeld, um deine Mannschaften umzubenennen. Namen werden lokal in deinem Browser gespeichert.',
        '<strong>Bildschirm-Wachhaltesperre</strong> der Vollbildmodus verhindert, dass dein Telefonbildschirm während des Spiels ausgeht.',
        '<strong>Vollbildmodus</strong> blendet die Browser-Oberfläche aus, sodass die Anzeige den gesamten Bildschirm ausfüllt : ohne Ablenkungen.',
        '<strong>Offline first</strong> funktioniert ohne Internet nach dem ersten Besuch. Keine Werbung, kein Tracking, keine Datensammlung.',
        '<strong>Sofortige Datenspeicherung</strong> Spielstände und Mannschaftsnamen werden automatisch gespeichert. Lade die Seite neu oder schließe den Browser : deine Daten bleiben erhalten.',
        '<strong>Zurücksetzen mit Bestätigung</strong> der Reset-Button fragt vor dem Löschen der Spielstände nach einer Bestätigung. Verhindert versehentlichen Datenverlust.',
      ],
    },
    {
      type: 'title',
      text: 'Fußball-Spielstandsanzeiger vs. Papier-Spielberichtsbogen : warum digital besser ist',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Papier-Spielberichtsbögen werden seit Jahrzehnten verwendet, aber sie haben echte Probleme. Du brauchst einen funktionierenden Stift, eine ebene Fläche zum Schreiben und genug Aufmerksamkeit, um während des Spiels zu schreiben. Eine einzige Ablenkung kann dazu führen, dass du ein Tor verpasst oder die falsche Zahl notierst. Einmal auf Papier geschrieben, kann der Spielstand nicht sauber korrigiert werden. Durchgestrichene Zahlen machen das Blatt schwer lesbar. Papier kann im Regen nass werden, vom Wind weggeweht werden oder zwischen den Spielen verloren gehen. Ein digitaler Spielstandsanzeiger löst jedes dieser Probleme. Die Buttons sind groß genug, um sie blind zu treffen. Zahlen werden in einer großen Schrift dargestellt, die von der anderen Seite des Platzes lesbar ist. Fehler werden sofort mit dem Minus-Button behoben. Der Spielstand wird automatisch gespeichert und geht nie verloren. Und anders als Papier bietet der Anzeiger Jubel-Animationen und visuelles Feedback, die das Notieren des Spielstands angenehmer machen. Egal ob du eine Jugendmannschaft coachst, eine Sonntagsliga leitest oder einfach mit Freunden spielst : dieser kostenlose Online-Spielstandsanzeiger gibt dir alles, was du brauchst, und nichts, was du nicht brauchst.',
    },
    {
      type: 'title',
      text: 'Kostenlose Spielstandsanzeige für jedes Fußballniveau',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dieses Tool ist komplett kostenlos und ohne Einschränkungen nutzbar. Es gibt keine -Stufen, keine versteckten Funktionen hinter einer Bezahlschranke und keine Wasserzeichen auf dem Bildschirm. Es funktioniert für jedes Fußballniveau : vom lockeren Kick mit Freunden bis zu organisierten Ligaspielen. Die einfache Oberfläche bedeutet, dass jeder es nutzen kann, von jungen Spielern, die das Spiel lernen, bis zu erfahrenen Trainern, die ein Turnier leiten. Keine Registrierung erforderlich. Keine E-Mail-Adresse. Keine persönlichen Daten. Öffne die Seite, starte das Spiel, tippe die Tore. Das ist alles.',
    },
  ],
  ui: {
    playerA: 'Heim',
    playerB: 'Gast',
    winnerLabel: 'SIEGER',
    finishMatch: 'Spiel beenden',
    reset: 'Zurücksetzen',
    resetConfirm: 'Spiel zurücksetzen? Alle Daten gehen verloren.',
    cancel: 'Abbrechen',
    fullscreen: 'Vollbild',
    exitFullscreen: 'Vollbild beenden',
  },
};
