export const validation = {
  reviewedAt: '2026-08-06',
  methodology: 'The generator uses aspect-ratio crop math, clamps focal coordinates to the 0 to 1 range, renders six current Steam store and icon asset sizes with high quality canvas smoothing and packages PNG or JPEG blobs locally.',
  sources: [
    'https://partner.steamgames.com/doc/store/assets',
    'https://partner.steamgames.com/doc/store/assets/standard',
    'https://partner.steamgames.com/doc/store/assets/rules',
  ],
  referenceCases: [
    { name: 'Current header capsule', source: '920x430', output: '920x430' },
    { name: 'Current small capsule', source: '462x174', output: '462x174' },
    { name: 'Current main capsule', source: '1232x706', output: '1232x706' },
    { name: 'Current vertical capsule', source: '748x896', output: '748x896' },
    { name: 'Current app icon', source: '184x184', output: '184x184' },
    { name: 'Current shortcut icon', source: '256x256', output: '256x256' },
  ],
  limitations: [
    'Safe zones are visual composition guides and do not guarantee the placement of every Steam interface overlay.',
    'Steam can update templates and presentation surfaces; compare the final files with the current Steamworks templates before publication.',
    'Canvas export quality depends on the source image and the browser implementation.',
  ],
} as const;
