import type { KnownLocale } from '../types';

export interface CategoryUi {
  useTool: string;
  openTool: string;
  relatedEyebrow: string;
  moreToolsIn: string;
  zoom: string;
  zoomControls: string;
  zoomOut: string;
  resetZoom: string;
  zoomIn: string;
  breadcrumb: string;
}

export const CATEGORY_UI: Record<KnownLocale, CategoryUi> = {
  es: { useTool: 'Usar herramienta', openTool: 'Abrir herramienta', relatedEyebrow: 'Sigue explorando', moreToolsIn: 'Más herramientas en', zoom: 'Zoom', zoomControls: 'Controles de zoom', zoomOut: 'Reducir zoom', resetZoom: 'Restablecer zoom', zoomIn: 'Aumentar zoom', breadcrumb: 'Migas de pan' },
  en: { useTool: 'Use tool', openTool: 'Open tool', relatedEyebrow: 'Keep exploring', moreToolsIn: 'More tools in', zoom: 'Zoom', zoomControls: 'Zoom controls', zoomOut: 'Zoom out', resetZoom: 'Reset zoom', zoomIn: 'Zoom in', breadcrumb: 'Breadcrumb' },
  fr: { useTool: "Utiliser l'outil", openTool: "Ouvrir l'outil", relatedEyebrow: 'Continuez à explorer', moreToolsIn: "Plus d'outils dans", zoom: 'Zoom', zoomControls: 'Commandes de zoom', zoomOut: 'Réduire le zoom', resetZoom: 'Réinitialiser le zoom', zoomIn: 'Augmenter le zoom', breadcrumb: 'Fil d’Ariane' },
  de: { useTool: 'Werkzeug verwenden', openTool: 'Werkzeug öffnen', relatedEyebrow: 'Mehr entdecken', moreToolsIn: 'Weitere Werkzeuge in', zoom: 'Zoom', zoomControls: 'Zoom-Steuerung', zoomOut: 'Verkleinern', resetZoom: 'Zoom zurücksetzen', zoomIn: 'Vergrößern', breadcrumb: 'Brotkrümelnavigation' },
  it: { useTool: 'Usa lo strumento', openTool: 'Apri lo strumento', relatedEyebrow: 'Continua a esplorare', moreToolsIn: 'Altri strumenti in', zoom: 'Zoom', zoomControls: 'Controlli zoom', zoomOut: 'Riduci zoom', resetZoom: 'Reimposta zoom', zoomIn: 'Aumenta zoom', breadcrumb: 'Breadcrumb' },
  pt: { useTool: 'Usar ferramenta', openTool: 'Abrir ferramenta', relatedEyebrow: 'Continue a explorar', moreToolsIn: 'Mais ferramentas em', zoom: 'Zoom', zoomControls: 'Controlos de zoom', zoomOut: 'Reduzir zoom', resetZoom: 'Repor zoom', zoomIn: 'Aumentar zoom', breadcrumb: 'Trilho de navegação' },
  nl: { useTool: 'Tool gebruiken', openTool: 'Tool openen', relatedEyebrow: 'Blijf ontdekken', moreToolsIn: 'Meer tools in', zoom: 'Zoom', zoomControls: 'Zoomknoppen', zoomOut: 'Uitzoomen', resetZoom: 'Zoom herstellen', zoomIn: 'Inzoomen', breadcrumb: 'Broodkruimelnavigatie' },
  sv: { useTool: 'Använd verktyget', openTool: 'Öppna verktyget', relatedEyebrow: 'Utforska mer', moreToolsIn: 'Fler verktyg i', zoom: 'Zoom', zoomControls: 'Zoomkontroller', zoomOut: 'Zooma ut', resetZoom: 'Återställ zoom', zoomIn: 'Zooma in', breadcrumb: 'Brödsmulenavigering' },
  pl: { useTool: 'Użyj narzędzia', openTool: 'Otwórz narzędzie', relatedEyebrow: 'Odkrywaj dalej', moreToolsIn: 'Więcej narzędzi w', zoom: 'Powiększenie', zoomControls: 'Sterowanie powiększeniem', zoomOut: 'Pomniejsz', resetZoom: 'Resetuj powiększenie', zoomIn: 'Powiększ', breadcrumb: 'Okruszki nawigacji' },
  id: { useTool: 'Gunakan alat', openTool: 'Buka alat', relatedEyebrow: 'Jelajahi lebih lanjut', moreToolsIn: 'Alat lainnya di', zoom: 'Zoom', zoomControls: 'Kontrol zoom', zoomOut: 'Perkecil', resetZoom: 'Atur ulang zoom', zoomIn: 'Perbesar', breadcrumb: 'Breadcrumb' },
  tr: { useTool: 'Aracı kullan', openTool: 'Aracı aç', relatedEyebrow: 'Keşfetmeye devam edin', moreToolsIn: 'Diğer araçlar:', zoom: 'Yakınlaştırma', zoomControls: 'Yakınlaştırma denetimleri', zoomOut: 'Uzaklaştır', resetZoom: 'Yakınlaştırmayı sıfırla', zoomIn: 'Yakınlaştır', breadcrumb: 'İçerik haritası' },
  ru: { useTool: 'Использовать инструмент', openTool: 'Открыть инструмент', relatedEyebrow: 'Продолжить изучение', moreToolsIn: 'Другие инструменты в', zoom: 'Масштаб', zoomControls: 'Управление масштабом', zoomOut: 'Уменьшить', resetZoom: 'Сбросить масштаб', zoomIn: 'Увеличить', breadcrumb: 'Навигационная цепочка' },
  ja: { useTool: 'ツールを使う', openTool: 'ツールを開く', relatedEyebrow: 'さらに探索', moreToolsIn: 'その他のツール：', zoom: 'ズーム', zoomControls: 'ズーム操作', zoomOut: '縮小', resetZoom: 'ズームをリセット', zoomIn: '拡大', breadcrumb: 'パンくずリスト' },
  ko: { useTool: '도구 사용', openTool: '도구 열기', relatedEyebrow: '더 탐색하기', moreToolsIn: '카테고리의 다른 도구:', zoom: '확대/축소', zoomControls: '확대/축소 컨트롤', zoomOut: '축소', resetZoom: '확대/축소 초기화', zoomIn: '확대', breadcrumb: '탐색 경로' },
  zh: { useTool: '使用工具', openTool: '打开工具', relatedEyebrow: '继续探索', moreToolsIn: '更多工具：', zoom: '缩放', zoomControls: '缩放控件', zoomOut: '缩小', resetZoom: '重置缩放', zoomIn: '放大', breadcrumb: '面包屑导航' },
};

export const getCategoryUi = (locale: KnownLocale): CategoryUi => CATEGORY_UI[locale];
