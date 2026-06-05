interface RingParams {
  cx: number;
  cy: number;
  rIn: number;
  rOut: number;
  startDeg: number;
  endDeg: number;
}

const BOARD_NUMBERS = [20, 1, 18, 4, 13, 6, 10, 15, 2, 17, 3, 19, 7, 16, 8, 11, 14, 9, 12, 5];

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number): { x: number; y: number } {
  const angleRad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: cx + r * Math.cos(angleRad),
    y: cy + r * Math.sin(angleRad),
  };
}

function getRingPath(params: RingParams): string {
  const { cx, cy, rIn, rOut, startDeg, endDeg } = params;
  const pInStart = polarToCartesian(cx, cy, rIn, startDeg);
  const pInEnd = polarToCartesian(cx, cy, rIn, endDeg);
  const pOutStart = polarToCartesian(cx, cy, rOut, startDeg);
  const pOutEnd = polarToCartesian(cx, cy, rOut, endDeg);
  return [
    `M ${pInStart.x} ${pInStart.y}`,
    `L ${pOutStart.x} ${pOutStart.y}`,
    `A ${rOut} ${rOut} 0 0 1 ${pOutEnd.x} ${pOutEnd.y}`,
    `L ${pInEnd.x} ${pInEnd.y}`,
    `A ${rIn} ${rIn} 0 0 0 ${pInStart.x} ${pInStart.y}`,
    'Z',
  ].join(' ');
}

function buildSector(cx: number, cy: number, idx: number, parts: string[]): void {
  const num = BOARD_NUMBERS[idx];
  const startDeg = idx * 18 - 9;
  const endDeg = idx * 18 + 9;
  const isEven = idx % 2 === 0;
  const colorSingle = isEven ? '#1e2430' : '#e0e0e0';
  const colorDoubleTriple = isEven ? '#ef4444' : '#2e7d32';

  const pInnerSingle = getRingPath({ cx, cy, rIn: 18, rOut: 80, startDeg, endDeg });
  parts.push(`<path d="${pInnerSingle}" fill="${colorSingle}" class="tn-board-sector" data-dt-val="${num}" data-dt-mod="1" />`);

  const pTriple = getRingPath({ cx, cy, rIn: 80, rOut: 92, startDeg, endDeg });
  parts.push(`<path d="${pTriple}" fill="${colorDoubleTriple}" class="tn-board-sector" data-dt-val="${num}" data-dt-mod="3" />`);

  const pOuterSingle = getRingPath({ cx, cy, rIn: 92, rOut: 126, startDeg, endDeg });
  parts.push(`<path d="${pOuterSingle}" fill="${colorSingle}" class="tn-board-sector" data-dt-val="${num}" data-dt-mod="1" />`);

  const pDouble = getRingPath({ cx, cy, rIn: 126, rOut: 138, startDeg, endDeg });
  parts.push(`<path d="${pDouble}" fill="${colorDoubleTriple}" class="tn-board-sector" data-dt-val="${num}" data-dt-mod="2" />`);

  const pText = polarToCartesian(cx, cy, 148, idx * 18);
  parts.push(`<text x="${pText.x}" y="${pText.y}" fill="#fff" font-size="10" font-weight="800" text-anchor="middle" dominant-baseline="central" transform="rotate(${idx * 18}, ${pText.x}, ${pText.y})">${num}</text>`);
}

export function buildDartboardSVG(cx: number, cy: number): string {
  const parts: string[] = [];
  parts.push(`<circle cx="${cx}" cy="${cy}" r="160" fill="#0d1118" />`);
  parts.push(`<circle cx="${cx}" cy="${cy}" r="18" fill="#2e7d32" class="tn-board-sector" data-dt-val="25" data-dt-mod="1" />`);
  parts.push(`<circle cx="${cx}" cy="${cy}" r="8" fill="#ef4444" class="tn-board-sector" data-dt-val="50" data-dt-mod="2" />`);
  for (let i = 0; i < 20; i++) {
    buildSector(cx, cy, i, parts);
  }
  return parts.join('\n');
}
