import { el } from './render';

export function spawnParticle(x: number, y: number, text: string): void {
  const container = el('tn-particle-container');
  if (!container) return;
  const rect = container.getBoundingClientRect();
  const relX = x - rect.left;
  const relY = y - rect.top;

  const p = document.createElement('div');
  p.className = 'tn-click-particle';
  p.textContent = text;
  p.style.left = `${relX}px`;
  p.style.top = `${relY}px`;
  container.appendChild(p);
  setTimeout(() => p.remove(), 1000);

  const colors = ['#00e5ff', '#ff007f', '#39ff14', '#fa0', '#f00'];
  for (let i = 0; i < 8; i++) {
    const dot = document.createElement('div');
    dot.className = 'tn-explosion-dot';
    dot.style.left = `${relX}px`;
    dot.style.top = `${relY}px`;
    dot.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    const angle = (i * 45 * Math.PI) / 180 + (Math.random() - 0.5) * 0.2;
    const distance = 40 + Math.random() * 40;
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance;
    dot.style.setProperty('--tx', `${tx}px`);
    dot.style.setProperty('--ty', `${ty}px`);
    container.appendChild(dot);
    setTimeout(() => dot.remove(), 600);
  }
}
