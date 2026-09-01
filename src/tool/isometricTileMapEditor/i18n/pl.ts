import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { IsometricTileMapEditorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const title = 'Edytor izometrycznej mapy kafelkowej';
const description = 'Rysuj warstwowe mapy w siatce rombów, ustawiaj geometrię kafelków i eksportuj szkic izometrycznego poziomu jako JSON lub SVG.';
const faq = [
  { question: 'Czym jest izometryczna mapa kafelkowa?', answer: 'Izometryczna mapa kafelkowa używa siatki w kształcie rombów, aby zasugerować trójwymiarową przestrzeń w scenie dwuwymiarowej. Kolumny i wiersze opisują płaszczyznę podłoża, a warstwy dodają przesunięcie wysokości.' },
  { question: 'Jak umieścić kafelek?', answer: 'Wybierz kafelek z palety, pozostaw tryb Rysuj, wybierz aktywną warstwę i kliknij romb. Kliknięcie prawym przyciskiem usuwa komórkę także w trybie Rysuj.' },
  { question: 'Co zmienia głębokość warstwy?', answer: 'Głębokość warstwy to pionowe przesunięcie na ekranie między nałożonymi warstwami. Zwiększ ją dla wyższego stopnia i zmniejsz, gdy warstwy powinny leżeć bliżej siebie.' },
  { question: 'Czy wyeksportowanego SVG można użyć w silniku gry?', answer: 'SVG jest wizualnym odniesieniem z bieżącymi rombami i kolorami. JSON lepiej nadaje się do odtworzenia logicznej siatki w silniku, ponieważ zachowuje wiersze, kolumny, warstwy i wartości kafelków.' },
  { question: 'Czy ten edytor tworzy produkcyjny tileset?', answer: 'Nie. Planuje warstwową siatkę i eksportuje zwięzły opis mapy. Nie tnie tekstur, nie konfiguruje kolizji, nie wybiera sortowania silnika i nie gwarantuje końcowego renderowania.' },
];
const howTo = [
  { name: 'Ustaw geometrię siatki', text: 'Wybierz szerokość i wysokość kafelka, a następnie liczbę kolumn, wierszy i warstw. Głębokość warstwy opisuje pionowy odstęp między poziomami.' },
  { name: 'Wybierz warstwę rysowania', text: 'Wybierz warstwę przed rysowaniem. Aktywna warstwa ma mocniejszy obrys, a pozostałe widoczne warstwy są przygaszone, aby pokazać kontekst przestrzenny.' },
  { name: 'Narysuj podłoże lub strukturę', text: 'Wybierz Trawa, Kamień, Woda lub Ścieżka i klikaj komórki. Zmień paletę, gdy kolejna komórka potrzebuje innego materiału.' },
  { name: 'Popraw mapę lokalnie', text: 'Użyj Usuń albo kliknięcia prawym przyciskiem, aby usunąć kafelek. Zmiana rozmiaru zachowuje komórki mieszczące się w nowych granicach.' },
  { name: 'Eksportuj wynik planowania', text: 'Użyj JSON, gdy inne narzędzie odbuduje siatkę. Użyj SVG jako szybkiego odniesienia wizualnego do przeglądu projektu lub szkicu poziomu.' },
];
const softwareApplication: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, applicationCategory: 'DeveloperApplication', operatingSystem: 'Any' };
const faqPage: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) };

export const content: ToolLocaleContent<IsometricTileMapEditorUI> = {
  slug: 'edytor-izometrycznej-mapy-kafelkowej', title, description,
  ui: {
    controlsTitle: 'Sterowanie mapą', geometryTitle: 'Geometria siatki', tileWidthLabel: 'Szerokość kafelka', tileHeightLabel: 'Wysokość kafelka', columnsLabel: 'Kolumny', rowsLabel: 'Wiersze', layersLabel: 'Warstwy', layerDepthLabel: 'Głębokość warstwy', toolsTitle: 'Tryb rysowania', paintLabel: 'Rysuj', eraseLabel: 'Usuń', paletteTitle: 'Paleta kafelków', grassLabel: 'Trawa', stoneLabel: 'Kamień', waterLabel: 'Woda', pathLabel: 'Ścieżka', layersTitle: 'Aktywna warstwa', layerLabel: 'Warstwa', hideLayerLabel: 'Ukryj', showLayerLabel: 'Pokaż', mapTitle: 'Mapa izometryczna', mapHelp: 'Wybierz kafelek i warstwę, a następnie klikaj romby. Prawy przycisk myszy usuwa komórkę.', mapAriaLabel: 'Edytowalna izometryczna mapa kafelkowa', summaryTitle: 'Odczyt mapy', filledLabel: 'Wypełnione komórki', coverageLabel: 'Pokrycie', activeLayerLabel: 'Aktywna warstwa', selectedLabel: 'Wybrany kafelek', emptyCellLabel: 'Pusta', cellLabel: 'Komórka', clearLabel: 'Wyczyść mapę', resetLabel: 'Resetuj geometrię', exportJsonLabel: 'Eksportuj JSON', exportSvgLabel: 'Eksportuj SVG', statusReady: 'Gotowe do rysowania', statusSaved: 'Zapisano lokalnie', statusCleared: 'Mapa wyczyszczona', statusReset: 'Geometria zresetowana', statusExported: 'Plik wyeksportowany', statusPainted: 'Kafelek umieszczony', statusErased: 'Kafelek usunięty', statusLayerHidden: 'Warstwa ukryta', statusLayerShown: 'Warstwa pokazana', legendTitle: 'Legenda mapy', legendEmpty: 'Pusta komórka', legendFilled: 'Narysowana komórka', modelNote: 'Ten edytor opisuje logiczną siatkę warstwową. Nie importuje tilesetu, nie oblicza kolizji, nie ustawia sortowania właściwego dla silnika i nie gwarantuje końcowego położenia pikseli.', privacyDisclosure: 'Twoja mapa pozostaje w tej przeglądarce. Dane mapy ani telemetria nie są wysyłane.',
  },
  seo: [
    { type: 'title', level: 2, text: 'Planuj przestrzeń i wysokość za pomocą siatki izometrycznej' },
    { type: 'paragraph', html: 'Mapa izometryczna przydaje się, gdy poziom potrzebuje czytelnych pozycji podłoża i poczucia wysokości bez stawania się pełną sceną 3D. Siatka rombów pokazuje ruch po wierszach i kolumnach, a warstwy pozwalają szkicować mosty, platformy, dachy i pomieszczenia ułożone jedno nad drugim.' },
    { type: 'paragraph', html: 'Ten edytor zachowuje jawną geometrię. Szerokość i wysokość kafelka określają romb, kolumny i wiersze określają obszar podłoża, a głębokość warstwy określa przesunięcie każdego kolejnego poziomu w górę ekranu. Komórki pozostające w granicach są zachowane po zmianie rozmiaru.' },
    { type: 'title', level: 2, text: 'Zbuduj użyteczny blockout w pięciu przejściach' },
    { type: 'list', items: ['Dopasuj proporcje kafelka do języka wizualnego projektu.', 'Najpierw narysuj materiał podłoża, aby obszary ruchu pozostały czytelne.', 'Użyj warstw dla mostów, dachów i podniesionych platform zamiast kodować wysokość samym kolorem.', 'Ukryj wyższe warstwy albo przełącz się na Usuń, aby bezpiecznie poprawić komórki poniżej.', 'Eksportuj JSON do odtworzenia mapy i SVG do przeglądu wizualnego.'] },
    { type: 'title', level: 2, text: 'Czytaj wiersze, kolumny i warstwy osobno' },
    { type: 'paragraph', html: 'Wiersze i kolumny określają pozycję komórki na logicznej płaszczyźnie i powinny pozostać stabilne po zmianie rozmiaru rombu. Warstwy są drugą współrzędną: dwie komórki mogą mieć ten sam wiersz i kolumnę, ale inną wysokość. Rozdzielenie tych pojęć ułatwia odtworzenie mapy w silniku.' },
    { type: 'table', headers: ['Sygnał', 'Znaczenie', 'Następna decyzja'], rows: [['Niskie pokrycie', 'Większość komórek jest pusta.', 'Najpierw wyznacz obszar gry, a dopiero potem dodawaj dekoracje.'], ['Wiele warstw w jednej kolumnie', 'Mapa zawiera nakładającą się przestrzeń.', 'Sprawdź, czy sortowanie i kolizje rozróżniają wysokości.'], ['Bardzo szeroki romb', 'Ruch poziomy dominuje w siatce.', 'Zmniejsz szerokość kafelka albo zwiększ widok referencyjny.'], ['Bardzo głęboki krok warstwy', 'Zmiany wysokości są mocno widoczne.', 'Użyj mniejszej liczby warstw albo sprawdź assety.']] },
    { type: 'title', level: 2, text: 'Wybierz właściwy eksport do następnego zadania' },
    { type: 'paragraph', html: 'JSON to uporządkowane przekazanie: zachowuje geometrię, liczbę warstw, stan rysowania i każdą wartość kafelka. SVG to przekazanie wizualne: pokazuje kolorowe romby przydatne podczas przeglądu projektu, w zadaniu lub w dokumencie planowania poziomu. Żaden eksport nie zawiera źródłowego tilesetu ani metadanych silnika.' },
    { type: 'tip', title: 'Czego ten blockout nie może dowieść', html: 'Przekonująca mapa rombów nie dowodzi, że sprite będą poprawnie sortowane, postacie przejdą między wysokościami ani że tileset połączy się bez szwów. Przetestuj prawdziwe assety, kolizje, oś sortowania i kamerę w docelowym silniku.' },
  ],
  faqTitle: 'Pytania o izometryczne mapy kafelkowe', faq, bibliographyTitle: 'Materiały o mapach kafelkowych', bibliography: bibliographyEntries, howTo, schemas: [softwareApplication, faqPage, howToSchema],
};
