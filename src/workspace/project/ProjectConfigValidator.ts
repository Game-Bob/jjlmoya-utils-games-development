import type {
  WorkspaceProjectConfig,
  WorkspaceTargetEngine,
  WorkspaceToolPipelineConfig,
} from '../types/WorkspaceProjectConfig';

const TARGET_ENGINES = new Set<WorkspaceTargetEngine>(['godot4', 'unity', 'defold', 'generic']);

export class ProjectConfigValidator {
  public validate(value: unknown, fallbackName: string): WorkspaceProjectConfig {
    if (value === null || value === undefined) {
      return this.createDefault(fallbackName);
    }
    if (!this.isRecord(value)) {
      throw new Error('Project configuration must be a JSON object');
    }
    this.assertAllowedKeys(value, ['version', 'name', 'targetEngine', 'pipeline'], 'Project configuration');
    const version = value.version ?? 1;
    if (version !== 1) {
      throw new Error(`Unsupported project configuration version: ${String(version)}`);
    }
    const name = typeof value.name === 'string' && value.name.trim().length > 0
      ? value.name.trim()
      : fallbackName;
    const targetEngine = this.readTargetEngine(value.targetEngine);
    const pipeline = this.readPipeline(value.pipeline);
    return { version: 1, name, targetEngine, pipeline };
  }

  public createDefault(name: string): WorkspaceProjectConfig {
    return {
      version: 1,
      name: name.trim() || 'Untitled Project',
      targetEngine: 'generic',
      pipeline: {
        spriteSheetPacker: {
          inputDirectory: 'assets/sprites',
          outputDirectory: 'build/sprites',
        },
        hitboxHurtboxAnimator: {
          inputDirectory: 'assets/sprites',
          outputDirectory: 'build/hitboxes',
        },
      },
    };
  }

  private readTargetEngine(value: unknown): WorkspaceTargetEngine {
    if (value === undefined) {
      return 'generic';
    }
    if (typeof value !== 'string' || !TARGET_ENGINES.has(value as WorkspaceTargetEngine)) {
      throw new Error(`Unsupported target engine: ${String(value)}`);
    }
    return value as WorkspaceTargetEngine;
  }

  private readPipeline(value: unknown): Record<string, WorkspaceToolPipelineConfig> {
    if (value === undefined) {
      return {};
    }
    if (!this.isRecord(value)) {
      throw new Error('Project pipeline must be a JSON object');
    }
    const pipeline: Record<string, WorkspaceToolPipelineConfig> = {};
    for (const [toolId, rawConfig] of Object.entries(value)) {
      if (!this.isRecord(rawConfig)) {
        throw new Error(`Pipeline configuration for ${toolId} must be a JSON object`);
      }
      this.assertAllowedKeys(
        rawConfig,
        ['inputDirectory', 'outputDirectory', 'options'],
        `Pipeline configuration for ${toolId}`,
      );
      const inputDirectory = this.readOptionalString(rawConfig.inputDirectory, toolId, 'inputDirectory');
      const outputDirectory = this.readOptionalString(rawConfig.outputDirectory, toolId, 'outputDirectory');
      const options = this.readOptions(rawConfig.options, toolId);
      pipeline[toolId] = {
        ...(inputDirectory ? { inputDirectory } : {}),
        ...(outputDirectory ? { outputDirectory } : {}),
        ...(options ? { options } : {}),
      };
    }
    return pipeline;
  }

  private readOptionalString(value: unknown, toolId: string, field: string): string | undefined {
    if (value === undefined) {
      return undefined;
    }
    if (typeof value !== 'string' || value.trim().length === 0) {
      throw new Error(`${field} for ${toolId} must be a non-empty string`);
    }
    return value;
  }

  private readOptions(value: unknown, toolId: string): Record<string, string | number | boolean> | undefined {
    if (value === undefined) {
      return undefined;
    }
    if (!this.isRecord(value)) {
      throw new Error(`Options for ${toolId} must be a JSON object`);
    }
    const options: Record<string, string | number | boolean> = {};
    for (const [key, option] of Object.entries(value)) {
      if (typeof option !== 'string' && typeof option !== 'number' && typeof option !== 'boolean') {
        throw new Error(`Option ${key} for ${toolId} must be a string, number or boolean`);
      }
      options[key] = option;
    }
    return options;
  }

  private isRecord(value: unknown): value is Record<string, unknown> {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
  }

  private assertAllowedKeys(value: Record<string, unknown>, allowed: string[], label: string): void {
    const unexpected = Object.keys(value).find((key) => !allowed.includes(key));
    if (unexpected) {
      throw new Error(`${label} contains unsupported field: ${unexpected}`);
    }
  }
}
