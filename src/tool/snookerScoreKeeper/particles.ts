export function spawnParticle(x: number, y: number, text: string, color: string = '#ffffff'): void {
  const container = document.getElementById('sn-particle-container');
  if (!container) return;

  const particle = document.createElement('div');
  particle.className = 'sn-particle';
  particle.textContent = text;
  particle.style.left = `${x}px`;
  particle.style.top = `${y}px`;
  particle.style.color = color;
  particle.style.textShadow = `0 0 10px ${color}`;

  const angle = (Math.random() - 0.5) * 60;
  const distance = 80 + Math.random() * 40;
  const rad = (angle - 90) * (Math.PI / 180);
  const tx = Math.cos(rad) * distance;
  const ty = Math.sin(rad) * distance;

  particle.style.setProperty('--tx', `${tx}px`);
  particle.style.setProperty('--ty', `${ty}px`);

  container.appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 1000);
}
