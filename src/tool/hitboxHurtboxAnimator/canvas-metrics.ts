export function canvasPoint(canvas: HTMLCanvasElement, event: PointerEvent): { x: number; y: number } {
  const rect = canvas.getBoundingClientRect();
  const scale = Number(canvas.dataset.scale ?? 1);
  return {
    x: (event.clientX - rect.left) * (canvas.width / rect.width) / scale,
    y: (event.clientY - rect.top) * (canvas.height / rect.height) / scale,
  };
}
