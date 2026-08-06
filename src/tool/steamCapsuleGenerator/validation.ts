export const validation = {
  reviewedAt: '2026-08-06',
  methodology: 'The generator uses aspect-ratio crop math, clamps focal coordinates to the 0 to 1 range, renders with high quality canvas smoothing and packages four PNG blobs locally.',
  sources: [
    'https://partner.steamgames.com/doc/store/assets',
    'https://partner.steamgames.com/doc/store/assets/standard',
    'https://partner.steamgames.com/doc/store/assets/rules',
  ],
  referenceCases: [
    { name: 'Requested header capsule', source: '460x215', output: '460x215' },
    { name: 'Requested main capsule', source: '616x353', output: '616x353' },
    { name: 'Requested vertical capsule', source: '374x448', output: '374x448' },
    { name: 'Requested community icon', source: '184x184', output: '184x184' },
  ],
  limitations: [
    'Safe zones are visual composition guides and do not guarantee the placement of every Steam interface overlay.',
    'The requested legacy preview dimensions should be checked against the current Steamworks templates before publication.',
    'Canvas export quality depends on the source image and the browser implementation.',
  ],
} as const;
