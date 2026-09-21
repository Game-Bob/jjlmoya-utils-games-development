export type WorkspaceTargetEngine = 'godot4' | 'unity' | 'defold' | 'generic';

export interface WorkspaceToolPipelineConfig {
  inputDirectory?: string;
  outputDirectory?: string;
  options?: Record<string, string | number | boolean>;
}

export interface WorkspaceProjectConfig {
  version: 1;
  name: string;
  targetEngine: WorkspaceTargetEngine;
  pipeline: Record<string, WorkspaceToolPipelineConfig>;
}
