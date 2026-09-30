export interface FixerOutputPaths {
  readonly image: string;
  readonly metadata: string;
}

export function fixerOutputPaths(sourcePath: string): FixerOutputPaths {
  if (!/\.(png|webp)$/i.test(sourcePath)) {
    throw new TypeError('Sprite Sheet Fixer requires a PNG or WebP project file');
  }
  const stem = sourcePath.replace(/\.(png|webp)$/i, '');
  return {
    image: `${stem}_fixed.png`,
    metadata: `${stem}.fixer.json`,
  };
}
