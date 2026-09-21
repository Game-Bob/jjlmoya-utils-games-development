export type WorkspaceTargetEngine = 'godot4' | 'unity' | 'defold' | 'generic';

export interface WorkspaceProjectConfig {
  name?: string;
  targetEngine?: WorkspaceTargetEngine;
}
