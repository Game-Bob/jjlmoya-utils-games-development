import { describe, expect, it } from 'vitest';
import { fixerOutputPaths } from './FixerProjectFiles';

describe('fixerOutputPaths', () => {
  it('keeps both outputs beside a Windows project sprite', () => {
    expect(fixerOutputPaths('D:\\Game\\Assets\\player_walk.webp')).toEqual({
      image: 'D:\\Game\\Assets\\player_walk_fixed.png',
      metadata: 'D:\\Game\\Assets\\player_walk.fixer.json',
    });
  });

  it('accepts case-insensitive PNG paths', () => {
    expect(fixerOutputPaths('/game/assets/HERO.PNG').image).toBe('/game/assets/HERO_fixed.png');
  });

  it('rejects unrelated project files', () => {
    expect(() => fixerOutputPaths('/game/readme.txt')).toThrow('PNG or WebP');
  });
});
