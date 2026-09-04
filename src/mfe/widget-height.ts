export function observeWidgetHeight(container: HTMLElement): void {
  if (window.parent === window) return;

  const pathSlug = window.location.pathname.split("/").filter(Boolean).pop() ?? "utility";
  const widgetId = new URLSearchParams(window.location.search).get("id") ?? `jj-widget-${pathSlug}`;
  const reportHeight = (height: number) => {
    if (height > 50) {
      window.parent.postMessage({ jjlmoyaHeight: Math.ceil(height), jjlmoyaId: widgetId }, "*");
    }
  };
  const observer = new ResizeObserver(([entry]) => reportHeight(entry?.contentRect.height ?? 0));

  observer.observe(container);
}
