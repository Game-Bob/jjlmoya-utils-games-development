import { createSteamContent } from './shared';

export const content = createSteamContent({
  slug: 'tworzenie-kapsul-steam',
  title: 'Generator kapsuł Steam',
  description: 'Utwórz cztery podglądy kapsuł Steam z jednego obrazu głównego, ustaw punkt skupienia, sprawdź strefy bezpieczne i pobierz PNG lub ZIP lokalnie.',
  ui: { uploadTitle: 'Upuść grafikę główną', uploadHint: 'Jeden obraz w wysokiej rozdzielczości staje się pełnym zestawem podglądów bezpośrednio w przeglądarce.', chooseFile: 'Wybierz grafikę', minimumSize: 'Minimalny rozmiar', supportedFormats: 'PNG, JPEG lub WebP', invalidImage: 'Wybierz obraz o rozmiarze co najmniej 1920 na 1080 pikseli.', sourcePreview: 'Grafika główna', focalPoint: 'Punkt skupienia', focalHint: 'Kliknij grafikę lub użyj suwaków, aby ważny motyw pozostał widoczny w każdym kadrze.', horizontalFocus: 'Poziomo', verticalFocus: 'Pionowo', resetFocus: 'Wyśrodkuj punkt', outputPreview: 'Zestaw wyjściowy Steam', safeZone: 'Strefa bezpieczna', dimensions: 'piksele', downloadPng: 'PNG', downloadZip: 'Pobierz ZIP', buildingZip: 'Tworzenie lokalnego archiwum ZIP...', zipReady: 'Zestaw kapsuł gotowy', localOnly: 'Prywatność w standardzie. Grafika zostaje w tej przeglądarce.', headerCapsule: 'Kapsuła nagłówka', mainCapsule: 'Kapsuła główna', verticalCapsule: 'Kapsuła pionowa', communityIcon: 'Ikona społeczności', ready: 'Gotowe', downloadError: 'Nie udało się utworzyć archiwum. Użyj przycisków PNG.', },
  seo: [
    { type: 'title', text: 'Spójny zestaw kapsuł Steam z jednej grafiki', level: 2 },
    { type: 'paragraph', html: 'Ilustracja może dobrze działać w szerokim formacie, a w pionowym kadrze stracić bohatera. Narzędzie pokazuje cztery kadry z tego samego obrazu głównego: nagłówek 460 na 215, główna 616 na 353, pionowa 374 na 448 oraz kwadratowa ikona społeczności 184 na 184 piksele. Punkt skupienia wskazuje część kompozycji, która ma pozostać widoczna.' },
    { type: 'paragraph', html: 'Obraz jest przetwarzany lokalnie przez canvas. Nie jest wysyłany na serwer i nie trzeba zakładać konta. Przesunięcie znacznika odświeża wszystkie podglądy, aby przed eksportem sprawdzić logo, twarz, postać i kontrast.' },
    { type: 'title', text: 'Praktyczny sposób pracy z grafiką gry', level: 2 },
    { type: 'list', items: ['Zacznij od obrazu głównego o rozmiarze co najmniej 1920 na 1080 pikseli.', 'Umieść znacznik na motywie, nie zawsze w geometrycznym środku.', 'Najpierw sprawdź podgląd pionowy i kwadratowy.', 'Traktuj strefy bezpieczne jako margines i porównaj pliki z aktualnymi szablonami Steamworks.'] },
    { type: 'paragraph', html: 'Strefy bezpieczne są wskazówkami kompozycyjnymi, a nie gwarancją dla każdego widoku Steam. Odsuń logotypy i tytuły od zatłoczonych krawędzi oraz sprawdź zasady Valve dotyczące tekstu na kapsułach.' },
    { type: 'tip', html: 'Zachowaj plik główny z wolną przestrzenią wokół motywu. Gdy kadr wymaga innego położenia logo, popraw źródło i wygeneruj zestaw ponownie.' },
  ],
  faq: [
    { question: 'Czy obraz opuszcza moje urządzenie?', answer: 'Nie. Jest odczytywany i rysowany w przeglądarce. Nie ma wysyłania ani konta.' },
    { question: 'Jakiego obrazu głównego użyć?', answer: 'PNG, JPEG lub WebP o rozmiarze co najmniej 1920 na 1080 pikseli daje zapas do kadrowania.' },
    { question: 'Co zmienia punkt skupienia?', answer: 'Przesuwa kadr źródłowy we wszystkich wynikach i chroni główny motyw.' },
    { question: 'Czy strefy bezpieczne są oficjalne?', answer: 'To praktyczne wskazówki. Przed publikacją porównaj pliki z aktualnymi szablonami Steamworks.' },
  ],
  howTo: [
    { name: 'Wybierz obraz główny', text: 'Upuść PNG, JPEG lub WebP o rozmiarze co najmniej 1920 na 1080 pikseli.' },
    { name: 'Ustaw punkt', text: 'Kliknij podgląd albo przesuń suwaki poziomy i pionowy.' },
    { name: 'Sprawdź cztery kadry', text: 'Obejrzyj nagłówek, kapsułę główną, pionową i ikonę kwadratową.' },
    { name: 'Pobierz zestaw', text: 'Pobierz osobne pliki PNG lub utwórz lokalne archiwum ZIP.' },
  ],
});
