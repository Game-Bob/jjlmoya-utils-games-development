import { describe, expect, it } from 'vitest';
import { ProjectConfigValidator } from './ProjectConfigValidator';

describe('ProjectConfigValidator', () => {
  const validator = new ProjectConfigValidator();

  it('creates a versioned project with pipeline defaults', () => {
    const config = validator.validate(null, 'Starfall');
    expect(config).toEqual(expect.objectContaining({
      version: 1,
      name: 'Starfall',
      targetEngine: 'generic',
    }));
    expect(config.pipeline.spriteSheetPacker?.inputDirectory).toBe('assets/sprites');
  });

  it('migrates legacy versionless configurations', () => {
    const config = validator.validate({ name: 'Legacy', targetEngine: 'godot4' }, 'Fallback');
    expect(config).toEqual({
      version: 1,
      name: 'Legacy',
      targetEngine: 'godot4',
      pipeline: {},
    });
  });

  it('rejects future versions and malformed pipeline values', () => {
    expect(() => validator.validate({ version: 2 }, 'Future')).toThrow('Unsupported');
    expect(() => validator.validate({ targetEngine: 'unknown' }, 'Broken')).toThrow('target engine');
    expect(() => validator.validate({ extra: true }, 'Broken')).toThrow('unsupported field');
    expect(() => validator.validate({ pipeline: [] }, 'Broken')).toThrow('pipeline');
    expect(() => validator.validate({ pipeline: { tool: { options: { invalid: [] } } } }, 'Broken'))
      .toThrow('must be a string, number or boolean');
  });
});
