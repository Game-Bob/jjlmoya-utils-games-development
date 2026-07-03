export function el(id: string): HTMLElement | null {
  return document.getElementById(id);
}

function measure(element: HTMLElement): DOMRect {
  return element.getBoundingClientRect();
}

export function spawnParticles(container: HTMLElement): void {
  const rect = measure(container);
  const parent = el('tn-card');
  if (!parent) return;
  const parentRect = measure(parent);
  const x = rect.left - parentRect.left + rect.width / 2;
  const y = rect.top - parentRect.top + rect.height / 2;

  for (let i = 0; i < 8; i++) {
    const p = document.createElement('div');
    p.className = 'tn-glow-particle';
    p.style.left = `${x}px`;
    p.style.top = `${y}px`;
    const angle = Math.random() * Math.PI * 2;
    const distance = 40 + Math.random() * 60;
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance;
    p.style.setProperty('--tx', `${tx}px`);
    p.style.setProperty('--ty', `${ty}px`);
    p.style.animationDelay = `${Math.random() * 0.05}s`;
    parent.appendChild(p);
    setTimeout(() => p.remove(), 850);
  }
}

export function spawnRipple(e: MouseEvent): void {
  const container = el('tn-ripples');
  if (!container) return;
  const rect = measure(container);
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const r = document.createElement('div');
  r.className = 'tn-ripple';
  r.style.left = `${x}px`;
  r.style.top = `${y}px`;
  container.appendChild(r);
  setTimeout(() => r.remove(), 600);
}
